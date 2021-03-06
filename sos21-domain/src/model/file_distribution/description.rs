use crate::model::bound::{Bounded, Unbounded};
use crate::model::string::{self, LengthLimitedString, StrippedString};

use thiserror::Error;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct FileDistributionDescription(
    StrippedString<LengthLimitedString<Unbounded, Bounded<typenum::U1024>, String>>,
);

#[derive(Debug, Error, Clone)]
#[error("invalid file distribution description")]
pub struct DescriptionError {
    _priv: (),
}

impl DescriptionError {
    fn from_length_error(_err: string::LengthError<Unbounded, Bounded<typenum::U1024>>) -> Self {
        DescriptionError { _priv: () }
    }

    fn from_not_stripped_error(_err: string::NotStrippedError) -> Self {
        DescriptionError { _priv: () }
    }
}

impl FileDistributionDescription {
    pub fn from_string(description: impl Into<String>) -> Result<Self, DescriptionError> {
        let inner = LengthLimitedString::new(description.into())
            .map_err(DescriptionError::from_length_error)?;
        let inner =
            StrippedString::new(inner).map_err(DescriptionError::from_not_stripped_error)?;
        Ok(FileDistributionDescription(inner))
    }

    pub fn as_str(&self) -> &str {
        self.0.as_str()
    }

    pub fn into_string(self) -> String {
        self.0.into_inner().into_inner()
    }
}
