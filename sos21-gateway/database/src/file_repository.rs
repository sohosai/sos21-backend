use std::convert::TryInto;

use anyhow::Result;
use futures::{future, lock::Mutex, stream::TryStreamExt};
use ref_cast::RefCast;
use sos21_database::{command, model as data, query};
use sos21_domain::context::FileRepository;
use sos21_domain::model::{
    date_time::DateTime,
    file::{File, FileBlake3Digest, FileId, FileName, FileSize, FileType},
    object::ObjectId,
    user::{UserFileUsage, UserId},
};
use sqlx::{Postgres, Transaction};

#[derive(Debug, RefCast)]
#[repr(transparent)]
pub struct FileDatabase(Mutex<Transaction<'static, Postgres>>);

#[async_trait::async_trait]
impl FileRepository for FileDatabase {
    async fn store_file(&self, file: File) -> Result<()> {
        let mut lock = self.0.lock().await;

        let file = from_file(file)?;
        if query::find_file(&mut *lock, file.id).await?.is_some() {
            let input = command::update_file::Input {
                id: file.id,
                object_id: file.object_id,
                blake3_digest: file.blake3_digest,
                name: file.name,
                type_: file.type_,
                size: file.size,
            };
            command::update_file(&mut *lock, input).await
        } else {
            command::insert_file(&mut *lock, file).await
        }
    }

    async fn get_file(&self, id: FileId) -> Result<Option<File>> {
        let mut lock = self.0.lock().await;
        query::find_file(&mut *lock, id.to_uuid())
            .await
            .and_then(|opt| opt.map(to_file).transpose())
    }

    async fn sum_file_usage_by_user(&self, user_id: UserId) -> Result<UserFileUsage> {
        let mut lock = self.0.lock().await;
        let usage = query::sum_file_size_by_user(&mut *lock, user_id.0).await?;
        Ok(UserFileUsage::from_number_of_bytes(usage.try_into()?))
    }

    async fn list_files_by_user(&self, user_id: UserId) -> Result<Vec<File>> {
        let mut lock = self.0.lock().await;
        query::list_files_by_user(&mut *lock, user_id.0)
            .and_then(|file| future::ready(to_file(file)))
            .try_collect()
            .await
    }
}

fn from_file(file: File) -> Result<data::file::File> {
    let File {
        id,
        created_at,
        author_id,
        object_id,
        blake3_digest,
        name,
        type_,
        size,
    } = file;

    Ok(data::file::File {
        id: id.to_uuid(),
        created_at: created_at.utc(),
        author_id: author_id.0,
        object_id: object_id.to_uuid(),
        blake3_digest: blake3_digest.as_slice().to_vec(),
        name: name.map(FileName::into_string),
        type_: type_.into_mime().to_string(),
        size: size.to_number_of_bytes().try_into()?,
    })
}

pub fn to_file(file: data::file::File) -> Result<File> {
    let data::file::File {
        id,
        created_at,
        author_id,
        object_id,
        blake3_digest,
        name,
        type_,
        size,
    } = file;

    Ok(File {
        id: FileId::from_uuid(id),
        created_at: DateTime::from_utc(created_at),
        author_id: UserId(author_id),
        object_id: ObjectId::from_uuid(object_id),
        blake3_digest: FileBlake3Digest::from_vec(blake3_digest)?,
        name: name.map(FileName::from_string).transpose()?,
        type_: FileType::from_mime(type_.parse()?),
        size: FileSize::from_number_of_bytes(size.try_into()?),
    })
}
