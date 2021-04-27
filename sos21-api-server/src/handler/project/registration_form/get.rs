use crate::app::Context;
use crate::handler::model::{
    project::ProjectId,
    registration_form::{RegistrationForm, RegistrationFormId},
};
use crate::handler::{HandlerResponse, HandlerResult};

use serde::{Deserialize, Serialize};
use sos21_domain::context::Login;
use sos21_use_case::get_project_registration_form;
use warp::http::StatusCode;

#[derive(Debug, Clone, Deserialize)]
pub struct Request {
    pub project_id: ProjectId,
    pub registration_form_id: RegistrationFormId,
}

#[derive(Debug, Clone, Serialize)]
pub struct Response {
    pub registration_form: RegistrationForm,
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
    ProjectNotFound,
}

impl HandlerResponse for Error {
    fn status_code(&self) -> StatusCode {
        match self {
            Error::RegistrationFormNotFound => StatusCode::NOT_FOUND,
            Error::ProjectNotFound => StatusCode::NOT_FOUND,
        }
    }
}

impl From<get_project_registration_form::Error> for Error {
    fn from(err: get_project_registration_form::Error) -> Error {
        match err {
            get_project_registration_form::Error::RegistrationFormNotFound => {
                Error::RegistrationFormNotFound
            }
            get_project_registration_form::Error::ProjectNotFound => Error::ProjectNotFound,
        }
    }
}

#[apply_macro::apply(handler)]
pub async fn handler(ctx: Login<Context>, request: Request) -> HandlerResult<Response, Error> {
    let registration_form = get_project_registration_form::run(
        &ctx,
        request.project_id.into_use_case(),
        request.registration_form_id.into_use_case(),
    )
    .await?;
    let registration_form = RegistrationForm::from_use_case(registration_form);
    Ok(Response { registration_form })
}