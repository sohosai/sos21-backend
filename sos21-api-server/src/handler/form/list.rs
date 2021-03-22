use crate::app::Context;
use crate::handler::model::form::Form;
use crate::handler::{HandlerResponse, HandlerResult};

use serde::{Deserialize, Serialize};
use sos21_domain::context::Login;
use sos21_use_case::list_all_forms;
use warp::http::StatusCode;

#[derive(Debug, Clone, Deserialize)]
pub struct Request {}

#[derive(Debug, Clone, Serialize)]
pub struct Response {
    pub forms: Vec<Form>,
}

impl HandlerResponse for Response {
    fn status_code(&self) -> StatusCode {
        StatusCode::OK
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE", tag = "type")]
pub enum Error {
    InsufficientPermissions,
}

impl HandlerResponse for Error {
    fn status_code(&self) -> StatusCode {
        match self {
            Error::InsufficientPermissions => StatusCode::FORBIDDEN,
        }
    }
}

impl From<list_all_forms::Error> for Error {
    fn from(err: list_all_forms::Error) -> Error {
        match err {
            list_all_forms::Error::InsufficientPermissions => Error::InsufficientPermissions,
        }
    }
}

#[apply_macro::apply(handler)]
pub async fn handler(ctx: Login<Context>, _request: Request) -> HandlerResult<Response, Error> {
    let forms = list_all_forms::run(&ctx).await?;
    let forms = forms.into_iter().map(Form::from_use_case).collect();
    Ok(Response { forms })
}