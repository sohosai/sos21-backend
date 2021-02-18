use sos21_domain::model::{
    date_time::DateTime,
    form::{
        Form, FormCondition, FormConditionProjectSet, FormDescription, FormId, FormName, FormPeriod,
    },
    project::ProjectAttributes,
    project_query::{ProjectQuery, ProjectQueryConjunction},
    user::UserId,
};
use uuid::Uuid;

mod item;
pub use item::*;

pub fn new_form_id() -> FormId {
    FormId::from_uuid(Uuid::new_v4())
}

pub fn mock_form_name() -> FormName {
    FormName::from_string("テスト申請").unwrap()
}

pub fn mock_form_description() -> FormDescription {
    FormDescription::from_string("テスト").unwrap()
}

pub fn mock_form_period() -> FormPeriod {
    let starts_at = DateTime::now();
    let ends_at = DateTime::from_utc(chrono::Utc::now() + chrono::Duration::hours(1));
    FormPeriod::from_datetime(starts_at, ends_at).unwrap()
}

pub fn mock_project_query() -> ProjectQuery {
    ProjectQuery::from_conjunctions(vec![ProjectQueryConjunction {
        category: None,
        attributes: ProjectAttributes::from_attributes(Vec::new()).unwrap(),
    }])
    .unwrap()
}

pub fn mock_form_condition() -> FormCondition {
    FormCondition {
        query: mock_project_query(),
        includes: FormConditionProjectSet::from_projects(Vec::new()).unwrap(),
        excludes: FormConditionProjectSet::from_projects(Vec::new()).unwrap(),
    }
}

pub fn new_form_with_condition(author_id: UserId, condition: FormCondition) -> Form {
    Form {
        id: new_form_id(),
        created_at: DateTime::now(),
        author_id,
        name: mock_form_name(),
        description: mock_form_description(),
        period: mock_form_period(),
        items: new_form_items(),
        condition,
    }
}

pub fn new_form_with_query(author_id: UserId, query: ProjectQuery) -> Form {
    new_form_with_condition(
        author_id,
        FormCondition {
            query,
            includes: FormConditionProjectSet::from_projects(Vec::new()).unwrap(),
            excludes: FormConditionProjectSet::from_projects(Vec::new()).unwrap(),
        },
    )
}

/// Mocks a new `Form` with wildcard query
pub fn new_form(author_id: UserId) -> Form {
    new_form_with_query(author_id, mock_project_query())
}
