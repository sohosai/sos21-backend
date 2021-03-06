use crate::model::file::FileId;
use crate::model::form::FormId;
use crate::model::project::ProjectId;
use crate::model::project_query::ProjectQuery;
use crate::model::registration_form::RegistrationFormId;
use crate::model::registration_form_answer::RegistrationFormAnswerRespondent;

use chrono::{DateTime, Utc};
use mime::Mime;
use sos21_domain::model::file_sharing as entity;
use uuid::Uuid;

#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct FileSharingId(pub Uuid);

impl FileSharingId {
    pub fn from_entity(id: entity::FileSharingId) -> Self {
        FileSharingId(id.to_uuid())
    }

    pub fn into_entity(self) -> entity::FileSharingId {
        entity::FileSharingId::from_uuid(self.0)
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum FileSharingScope {
    Project(ProjectId),
    ProjectQuery(ProjectQuery),
    FormAnswer(ProjectId, FormId),
    RegistrationFormAnswer(RegistrationFormAnswerRespondent, RegistrationFormId),
    Committee,
    CommitteeOperator,
    Public,
}

impl FileSharingScope {
    pub fn from_entity(scope: entity::FileSharingScope) -> Self {
        match scope {
            entity::FileSharingScope::Project(project_id) => {
                FileSharingScope::Project(ProjectId::from_entity(project_id))
            }
            entity::FileSharingScope::ProjectQuery(query) => {
                FileSharingScope::ProjectQuery(ProjectQuery::from_entity(query))
            }
            entity::FileSharingScope::FormAnswer(project_id, form_id) => {
                FileSharingScope::FormAnswer(
                    ProjectId::from_entity(project_id),
                    FormId::from_entity(form_id),
                )
            }
            entity::FileSharingScope::RegistrationFormAnswer(respondent, registration_form_id) => {
                FileSharingScope::RegistrationFormAnswer(
                    RegistrationFormAnswerRespondent::from_entity(respondent),
                    RegistrationFormId::from_entity(registration_form_id),
                )
            }
            entity::FileSharingScope::Committee => FileSharingScope::Committee,
            entity::FileSharingScope::CommitteeOperator => FileSharingScope::CommitteeOperator,
            entity::FileSharingScope::Public => FileSharingScope::Public,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct FileSharing {
    pub id: FileSharingId,
    pub created_at: DateTime<Utc>,
    pub is_revoked: bool,
    pub expires_at: Option<DateTime<Utc>>,
    pub scope: FileSharingScope,
    pub file_id: FileId,
    pub file_name: Option<String>,
    pub file_type: Mime,
    pub file_size: u64,
}

impl FileSharing {
    pub fn from_entity(
        sharing: entity::FileSharing,
        file: sos21_domain::model::file::File,
    ) -> Self {
        let sharing = sharing.into_content();
        FileSharing {
            id: FileSharingId::from_entity(sharing.id),
            created_at: sharing.created_at.utc(),
            is_revoked: sharing.is_revoked,
            expires_at: sharing.expires_at.map(|expires_at| expires_at.utc()),
            scope: FileSharingScope::from_entity(sharing.scope),
            file_id: FileId::from_entity(sharing.file_id),
            file_name: file.name.map(|name| name.into_string()),
            file_type: file.type_.into_mime(),
            file_size: file.size.to_number_of_bytes(),
        }
    }
}
