use crate::context::{
    ConfigContext, FileDistributionRepository, FileRepository, FileSharingRepository,
    FormAnswerRepository, FormRepository, ObjectRepository, PendingProjectRepository,
    ProjectRepository, RegistrationFormAnswerRepository, RegistrationFormRepository,
    UserInvitationRepository, UserRepository,
};
use crate::model::user::{email, UserEmailAddress, UserId};

use thiserror::Error;

#[derive(Debug, Clone)]
pub struct Authentication<C> {
    inner: C,
    user_id: UserId,
    email: UserEmailAddress,
}

#[derive(Debug, Error, Clone)]
pub enum AuthenticationError {
    #[error("invalid email address")]
    InvalidEmailAddress,
    #[error("not a university email address")]
    NotUniversityEmailAddress,
}

impl<C> Authentication<C> {
    pub fn new(inner: C, user_id: String, email: String) -> Result<Self, AuthenticationError> {
        let user_id = UserId(user_id);
        match UserEmailAddress::from_string(email) {
            Ok(email) => Ok(Authentication {
                inner,
                user_id,
                email,
            }),
            Err(err) => match err.kind() {
                email::EmailAddressErrorKind::InvalidEmailAddress => {
                    Err(AuthenticationError::InvalidEmailAddress)
                }
                email::EmailAddressErrorKind::NotUniversityEmailAddress => {
                    Err(AuthenticationError::NotUniversityEmailAddress)
                }
            },
        }
    }

    pub fn authenticated_user(&self) -> UserId {
        self.user_id.clone()
    }

    pub fn authenticated_email(&self) -> UserEmailAddress {
        self.email.clone()
    }

    pub fn into_inner(self) -> C {
        self.inner
    }
}

crate::delegate_project_repository! {
    impl<C: ProjectRepository + Send + Sync> ProjectRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_user_repository! {
    impl<C: UserRepository + Send + Sync> UserRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_form_repository! {
    impl<C: FormRepository + Send + Sync> FormRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_form_answer_repository! {
    impl<C: FormAnswerRepository + Send + Sync> FormAnswerRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_object_repository! {
    impl<C: ObjectRepository + Send + Sync> ObjectRepository for Authentication<C> {
        Self { C },
        self { &self.inner }
    }
}

crate::delegate_file_repository! {
    impl<C: FileRepository + Send + Sync> FileRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_file_sharing_repository! {
    impl<C: FileSharingRepository + Send + Sync> FileSharingRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_file_distribution_repository! {
    impl<C: FileDistributionRepository + Send + Sync> FileDistributionRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_pending_project_repository! {
    impl<C: PendingProjectRepository + Send + Sync> PendingProjectRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_registration_form_repository! {
    impl<C: RegistrationFormRepository + Send + Sync> RegistrationFormRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_registration_form_answer_repository! {
    impl<C: RegistrationFormAnswerRepository + Send + Sync> RegistrationFormAnswerRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_user_invitation_repository! {
    impl<C: UserInvitationRepository + Send + Sync> UserInvitationRepository for Authentication<C> {
        self { &self.inner }
    }
}

crate::delegate_config_context! {
    impl<C: ConfigContext + Send + Sync> ConfigContext for Authentication<C> {
        self { &self.inner }
    }
}
