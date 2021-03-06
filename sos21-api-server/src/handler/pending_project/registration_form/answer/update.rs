use crate::app::Context;
use crate::handler::model::{
    form::FormItemId, form_answer::item::RequestFormAnswerItem, pending_project::PendingProjectId,
    registration_form::RegistrationFormId, registration_form_answer::RegistrationFormAnswer,
};
use crate::handler::{HandlerResponse, HandlerResult};

use serde::{Deserialize, Serialize};
use sos21_domain::context::Login;
use sos21_use_case::{interface, update_pending_project_registration_form_answer};
use warp::http::StatusCode;

#[derive(Debug, Clone, Deserialize)]
pub struct Request {
    pub pending_project_id: PendingProjectId,
    pub registration_form_id: RegistrationFormId,
    pub items: Vec<RequestFormAnswerItem>,
}

#[derive(Debug, Clone, Serialize)]
pub struct Response {
    pub answer: RegistrationFormAnswer,
}

impl HandlerResponse for Response {
    fn status_code(&self) -> StatusCode {
        StatusCode::OK
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE", tag = "type")]
pub enum Error {
    RegistrationFormNotFound,
    PendingProjectNotFound,
    RegistrationFormAnswerNotFound,
    OutOfProjectCreationPeriod,
    NoFormItems,
    TooManyFormItems,
    InvalidFormItem {
        id: FormItemId,
    },
    MismatchedFormItemsLength,
    MismatchedFormItemId {
        expected: FormItemId,
        got: FormItemId,
    },
    InvalidFormAnswer {
        id: FormItemId,
    },
    InsufficientPermissions,
}

impl HandlerResponse for Error {
    fn status_code(&self) -> StatusCode {
        match self {
            Error::RegistrationFormNotFound => StatusCode::NOT_FOUND,
            Error::PendingProjectNotFound => StatusCode::NOT_FOUND,
            Error::RegistrationFormAnswerNotFound => StatusCode::NOT_FOUND,
            Error::OutOfProjectCreationPeriod => StatusCode::CONFLICT,
            Error::NoFormItems => StatusCode::BAD_REQUEST,
            Error::TooManyFormItems => StatusCode::BAD_REQUEST,
            Error::InvalidFormItem { .. } => StatusCode::BAD_REQUEST,
            Error::MismatchedFormItemsLength => StatusCode::BAD_REQUEST,
            Error::MismatchedFormItemId { .. } => StatusCode::BAD_REQUEST,
            Error::InvalidFormAnswer { .. } => StatusCode::BAD_REQUEST,
            Error::InsufficientPermissions => StatusCode::FORBIDDEN,
        }
    }
}

impl From<update_pending_project_registration_form_answer::Error> for Error {
    fn from(err: update_pending_project_registration_form_answer::Error) -> Error {
        match err {
            update_pending_project_registration_form_answer::Error::RegistrationFormNotFound => Error::RegistrationFormNotFound,
            update_pending_project_registration_form_answer::Error::PendingProjectNotFound => Error::PendingProjectNotFound,
            update_pending_project_registration_form_answer::Error::RegistrationFormAnswerNotFound => Error::RegistrationFormAnswerNotFound,
            update_pending_project_registration_form_answer::Error::OutOfProjectCreationPeriod => Error::OutOfProjectCreationPeriod,
            update_pending_project_registration_form_answer::Error::InvalidItems(err) => match err {
                interface::form_answer::FormAnswerItemsError::NoItems => Error::NoFormItems,
                interface::form_answer::FormAnswerItemsError::TooManyItems => {
                    Error::TooManyFormItems
                }
                // TODO: break down invalid item errors
                interface::form_answer::FormAnswerItemsError::InvalidItem(id, _) => {
                    Error::InvalidFormItem {
                        id: FormItemId::from_use_case(id),
                    }
                }
            },
            update_pending_project_registration_form_answer::Error::InvalidAnswer(err) => match err {
                interface::form::CheckAnswerError::MismatchedItemsLength => {
                    Error::MismatchedFormItemsLength
                }
                interface::form::CheckAnswerError::MismatchedItemId { expected, got } => {
                    Error::MismatchedFormItemId {
                        expected: FormItemId::from_use_case(expected),
                        got: FormItemId::from_use_case(got),
                    }
                }
                // TODO: break down invalid answer errors
                interface::form::CheckAnswerError::InvalidAnswerItem { item_id, .. } => {
                    Error::InvalidFormAnswer {
                        id: FormItemId::from_use_case(item_id),
                    }
                }
            },
            update_pending_project_registration_form_answer::Error::InsufficientPermissions => {
                Error::InsufficientPermissions
            }
        }
    }
}

#[macro_rules_attribute::macro_rules_attribute(handler!)]
pub async fn handler(ctx: Login<Context>, request: Request) -> HandlerResult<Response, Error> {
    let input = update_pending_project_registration_form_answer::Input {
        pending_project_id: request.pending_project_id.into_use_case(),
        registration_form_id: request.registration_form_id.into_use_case(),
        items: request
            .items
            .into_iter()
            .map(RequestFormAnswerItem::into_use_case)
            .collect(),
    };
    let answer = update_pending_project_registration_form_answer::run(&ctx, input).await?;
    let answer = RegistrationFormAnswer::from_use_case(answer);
    Ok(Response { answer })
}
