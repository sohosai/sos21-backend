use crate::app::Context;
use crate::handler::model::pending_project::PendingProject;
use crate::handler::{HandlerResponse, HandlerResult};

use serde::{Deserialize, Serialize};
use sos21_domain::context::Login;
use sos21_use_case::get_user_pending_project;
use warp::http::StatusCode;

#[derive(Debug, Clone, Deserialize)]
pub struct Request {}

#[derive(Debug, Clone, Serialize)]
pub struct Response {
    pub pending_project: PendingProject,
}

impl HandlerResponse for Response {
    fn status_code(&self) -> StatusCode {
        StatusCode::OK
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE", tag = "type")]
pub enum Error {
    PendingProjectNotFound,
}

impl HandlerResponse for Error {
    fn status_code(&self) -> StatusCode {
        match self {
            Error::PendingProjectNotFound => StatusCode::NOT_FOUND,
        }
    }
}

impl From<get_user_pending_project::Error> for Error {
    fn from(err: get_user_pending_project::Error) -> Error {
        match err {
            get_user_pending_project::Error::NotFound => Error::PendingProjectNotFound,
        }
    }
}

#[macro_rules_attribute::macro_rules_attribute(handler!)]
pub async fn handler(ctx: Login<Context>, _request: Request) -> HandlerResult<Response, Error> {
    let pending_project = get_user_pending_project::run(&ctx).await?;
    let pending_project = PendingProject::from_use_case(pending_project);
    Ok(Response { pending_project })
}
