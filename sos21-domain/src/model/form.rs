use crate::context::FormAnswerRepository;
use crate::model::date_time::DateTime;
use crate::model::form_answer::item::FormAnswerItems;
use crate::model::form_answer::{FormAnswer, FormAnswerId};
use crate::model::permissions::Permissions;
use crate::model::project::Project;
use crate::model::user::{User, UserId};
use crate::{DomainError, DomainResult};

use anyhow::Context;
use thiserror::Error;
use uuid::Uuid;

pub mod condition;
pub mod description;
pub mod item;
pub mod name;
pub mod period;

pub use condition::{FormCondition, FormConditionProjectSet};
pub use description::FormDescription;
pub use item::{FormItem, FormItems};
pub use name::FormName;
pub use period::FormPeriod;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct FormId(Uuid);

impl FormId {
    pub fn from_uuid(uuid: Uuid) -> Self {
        FormId(uuid)
    }

    pub fn to_uuid(&self) -> Uuid {
        self.0
    }
}

#[derive(Debug, Clone)]
pub struct Form {
    pub id: FormId,
    pub created_at: DateTime,
    pub author_id: UserId,
    pub name: FormName,
    pub description: FormDescription,
    pub period: FormPeriod,
    pub items: FormItems,
    pub condition: FormCondition,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AnswerErrorKind {
    OutOfAnswerPeriod,
    NotTargeted,
    AlreadyAnswered,
    MismatchedItemsLength,
    MismatchedItemId {
        expected: item::FormItemId,
        got: item::FormItemId,
    },
    InvalidItem {
        id: item::FormItemId,
        kind: item::CheckAnswerItemErrorKind,
    },
}

#[derive(Debug, Error, Clone)]
#[error("Cannot answer the form")]
pub struct AnswerError {
    kind: AnswerErrorKind,
}

impl AnswerError {
    pub fn kind(&self) -> AnswerErrorKind {
        self.kind
    }

    fn from_check_error(err: item::CheckAnswerError) -> Self {
        let kind = match err.kind() {
            item::CheckAnswerErrorKind::MismatchedItemsLength => {
                AnswerErrorKind::MismatchedItemsLength
            }
            item::CheckAnswerErrorKind::MismatchedItemId { expected, got } => {
                AnswerErrorKind::MismatchedItemId { expected, got }
            }
            item::CheckAnswerErrorKind::Item(id, kind) => AnswerErrorKind::InvalidItem { id, kind },
        };

        AnswerError { kind }
    }
}

impl Form {
    pub async fn answer_by<C>(
        &self,
        ctx: C,
        user: &User,
        project: &Project,
        items: FormAnswerItems,
    ) -> DomainResult<FormAnswer, AnswerError>
    where
        C: FormAnswerRepository,
    {
        if !self.condition.check(&project) {
            return Err(DomainError::Domain(AnswerError {
                kind: AnswerErrorKind::NotTargeted,
            }));
        }

        domain_ensure!(project.is_visible_to(&user));
        domain_ensure!(self.is_visible_to_with_project(&user, project));

        let created_at = DateTime::now();
        if !self.period.contains(created_at) {
            return Err(DomainError::Domain(AnswerError {
                kind: AnswerErrorKind::OutOfAnswerPeriod,
            }));
        }

        if ctx
            .get_form_answer_by_form_and_project(self.id, project.id())
            .await?
            .is_some()
        {
            return Err(DomainError::Domain(AnswerError {
                kind: AnswerErrorKind::AlreadyAnswered,
            }));
        }

        self.items
            .check_answer(&items)
            .context("Failed to check form answers unexpectedly")?
            .map_err(|err| DomainError::Domain(AnswerError::from_check_error(err)))?;

        Ok(FormAnswer {
            id: FormAnswerId::from_uuid(Uuid::new_v4()),
            created_at,
            author_id: user.id().clone(),
            project_id: project.id(),
            form_id: self.id,
            items,
        })
    }

    pub fn is_visible_to(&self, user: &User) -> bool {
        user.permissions().contains(Permissions::READ_ALL_FORMS)
    }

    pub fn is_visible_to_with_project(&self, user: &User, project: &Project) -> bool {
        if self.is_visible_to(user) {
            return true;
        }

        self.condition.check(project) && project.is_visible_to(user)
    }
}

#[cfg(test)]
mod tests {
    use super::AnswerErrorKind;

    use crate::model::{
        project::{ProjectAttributes, ProjectCategory},
        project_query::{ProjectQuery, ProjectQueryConjunction},
    };
    use crate::test::model as test_model;
    use crate::DomainError;

    #[test]
    fn test_visibility_general() {
        let user = test_model::new_general_user();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form(operator.id().clone());
        assert!(!form.is_visible_to(&user));
    }

    #[test]
    fn test_visibility_committee() {
        let user = test_model::new_committee_user();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form(operator.id().clone());
        assert!(form.is_visible_to(&user));
    }

    #[test]
    fn test_visibility_operator() {
        let user = test_model::new_operator_user();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form(operator.id().clone());
        assert!(form.is_visible_to(&user));
    }

    #[test]
    fn test_visibility_general_via_project() {
        let user = test_model::new_general_user();
        let user_project = test_model::new_general_project(user.id().clone());
        let operator = test_model::new_operator_user();
        let tautology_query = ProjectQuery::from_conjunctions(vec![ProjectQueryConjunction {
            category: None,
            attributes: ProjectAttributes::from_attributes(vec![]).unwrap(),
        }])
        .unwrap();
        let form = test_model::new_form_with_query(operator.id().clone(), tautology_query);
        assert!(form.is_visible_to_with_project(&user, &user_project));
    }

    // TODO: test answer period

    #[tokio::test]
    async fn test_answer_not_targeted() {
        let user = test_model::new_general_user();
        let project = test_model::new_stage_project(user.id().clone());
        let query = ProjectQuery::from_conjunctions(vec![ProjectQueryConjunction {
            category: Some(ProjectCategory::General),
            attributes: ProjectAttributes::from_attributes(vec![]).unwrap(),
        }])
        .unwrap();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form_with_query(operator.id().clone(), query);
        let app = crate::test::build_mock_app()
            .users(vec![user.clone(), operator.clone()])
            .projects(vec![project.clone()])
            .forms(vec![form.clone()])
            .build();
        let items = test_model::mock_form_answer_items(&form.items);
        assert!(matches!(
            form.answer_by(&app, &user, &project, items).await,
            Err(DomainError::Domain(err))
            if err.kind() == AnswerErrorKind::NotTargeted
        ));
    }

    #[tokio::test]
    async fn test_answer_already_answered() {
        let user = test_model::new_general_user();
        let project = test_model::new_stage_project(user.id().clone());
        let query = ProjectQuery::from_conjunctions(vec![ProjectQueryConjunction {
            category: None,
            attributes: ProjectAttributes::from_attributes(vec![]).unwrap(),
        }])
        .unwrap();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form_with_query(operator.id().clone(), query);
        let answer = test_model::new_form_answer(user.id().clone(), project.id(), &form);
        let app = crate::test::build_mock_app()
            .users(vec![user.clone(), operator.clone()])
            .projects(vec![project.clone()])
            .forms(vec![form.clone()])
            .answers(vec![answer.clone()])
            .build();
        let items = test_model::mock_form_answer_items(&form.items);
        assert!(matches!(
            form.answer_by(&app, &user, &project, items).await,
            Err(DomainError::Domain(err))
            if err.kind() == AnswerErrorKind::AlreadyAnswered
        ));
    }

    #[tokio::test]
    async fn test_answer_ok() {
        let user = test_model::new_general_user();
        let project = test_model::new_stage_project(user.id().clone());
        let query = ProjectQuery::from_conjunctions(vec![ProjectQueryConjunction {
            category: None,
            attributes: ProjectAttributes::from_attributes(vec![]).unwrap(),
        }])
        .unwrap();
        let operator = test_model::new_operator_user();
        let form = test_model::new_form_with_query(operator.id().clone(), query);
        let app = crate::test::build_mock_app()
            .users(vec![user.clone(), operator.clone()])
            .projects(vec![project.clone()])
            .forms(vec![form.clone()])
            .build();
        let items = test_model::mock_form_answer_items(&form.items);
        assert!(matches!(
            form.answer_by(&app, &user, &project, items).await,
            Ok(answer)
            if answer.form_id == form.id
        ));
    }
}