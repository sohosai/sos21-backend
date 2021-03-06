use std::fmt::{self, Debug};

use crate::handler::model::date_time::DateTime;
use crate::handler::model::user::UserId;

use bytes::Bytes;
use futures::stream::{BoxStream, TryStreamExt};
use mime::Mime;
use serde::{Deserialize, Serialize};
use sos21_use_case::model::file as use_case;
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(transparent)]
pub struct FileId(pub Uuid);

impl FileId {
    pub fn from_use_case(id: use_case::FileId) -> FileId {
        FileId(id.0)
    }

    pub fn into_use_case(self) -> use_case::FileId {
        use_case::FileId(self.0)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct File {
    pub id: FileId,
    pub created_at: DateTime,
    pub author_id: UserId,
    pub name: Option<String>,
    #[serde(with = "crate::handler::model::serde::mime", rename = "type")]
    pub type_: Mime,
    #[serde(with = "hex::serde")]
    pub blake3_digest: [u8; 32],
    pub size: u64,
}

impl File {
    pub fn from_use_case(file: use_case::File) -> Self {
        File {
            id: FileId::from_use_case(file.id),
            created_at: DateTime::from_use_case(file.created_at),
            author_id: UserId::from_use_case(file.author_id),
            name: file.name,
            type_: file.type_,
            blake3_digest: file.blake3_digest,
            size: file.size,
        }
    }
}

pub struct FileObject {
    pub file: File,
    pub object_data: BoxStream<'static, Result<Bytes, Box<dyn std::error::Error + Send + Sync>>>,
}

impl Debug for FileObject {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        f.debug_struct("FileObject")
            .field("file", &self.file)
            .finish()
    }
}

impl FileObject {
    pub fn from_use_case(file_object: use_case::FileObject) -> Self {
        FileObject {
            file: File::from_use_case(file_object.file),
            object_data: Box::pin(file_object.object_data.map_err(Into::into)),
        }
    }

    pub fn into_reply(self) -> impl warp::Reply {
        use warp::{
            http::{self, header},
            hyper::Body,
            reply,
        };

        let reply = http::Response::new(Body::wrap_stream(self.object_data));
        let reply = reply::with_header(reply, header::CONTENT_TYPE, self.file.type_.to_string());
        let reply = reply::with_header(reply, header::CONTENT_LENGTH, self.file.size.to_string());

        let disposition = if let Some(name) = self.file.name {
            use percent_encoding::{utf8_percent_encode, NON_ALPHANUMERIC};

            // Use filename* to return non-ascii filename as described in RFC 6266.
            // We use the encoding described in RFC 8187, which obsoletes RFC 5987.
            // All non-alphanumeric characters are percent-encoded conservatively
            // though some of them are accepted in RFC 8187.
            let mut bytes = b"attachment; filename*=UTF-8''".to_vec();
            let pct_encoded = utf8_percent_encode(&name, NON_ALPHANUMERIC).to_string();
            bytes.extend(pct_encoded.as_bytes());

            // Fallback for old user agents
            bytes.extend(b"; filename=\"");
            bytes.extend(name.chars().map(replace_non_ascii));
            bytes.push(b'"');

            bytes
        } else {
            b"attachment".to_vec()
        };

        reply::with_header(reply, header::CONTENT_DISPOSITION, disposition)
    }
}

fn replace_non_ascii(c: char) -> u8 {
    if c.is_ascii_graphic() || c == ' ' {
        // OK because c is in ASCII range
        c as u8
    } else {
        b'_'
    }
}
