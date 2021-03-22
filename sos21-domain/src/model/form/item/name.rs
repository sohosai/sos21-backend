use crate::model::string::LengthBoundedString;

use serde::{Deserialize, Serialize};
use thiserror::Error;

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(transparent)]
pub struct FormItemName(LengthBoundedString<typenum::U1, typenum::U64, String>);

#[derive(Debug, Error, Clone)]
#[error("invalid form item name")]
pub struct ItemNameError {
    _priv: (),
}

impl FormItemName {
    pub fn from_string(name: impl Into<String>) -> Result<Self, ItemNameError> {
        let inner =
            LengthBoundedString::new(name.into()).map_err(|_| ItemNameError { _priv: () })?;
        Ok(FormItemName(inner))
    }

    pub fn as_str(&self) -> &str {
        self.0.as_ref()
    }

    pub fn into_string(self) -> String {
        self.0.into_inner()
    }
}