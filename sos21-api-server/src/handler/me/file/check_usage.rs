use std::convert::Infallible;

use crate::app::Context;
use crate::handler::{HandlerResponse, HandlerResult};

use serde::{Deserialize, Serialize};
use sos21_domain::context::Login;
use sos21_use_case::get_user_file_usage;
use warp::http::StatusCode;

#[derive(Debug, Clone, Deserialize)]
pub struct Request {}

#[derive(Debug, Clone, Serialize)]
pub struct Response {
    pub usage: u64,
    pub quota: Option<u64>,
}

impl HandlerResponse for Response {
    fn status_code(&self) -> StatusCode {
        StatusCode::OK
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE", tag = "type")]
pub enum Error {}

impl HandlerResponse for Error {
    fn status_code(&self) -> StatusCode {
        match *self {}
    }
}

impl From<Infallible> for Error {
    fn from(x: Infallible) -> Error {
        match x {}
    }
}

#[macro_rules_attribute::macro_rules_attribute(handler!)]
pub async fn handler(ctx: Login<Context>, _request: Request) -> HandlerResult<Response, Error> {
    let output = get_user_file_usage::run(&ctx).await?;
    Ok(Response {
        usage: output.usage,
        quota: output.quota,
    })
}
