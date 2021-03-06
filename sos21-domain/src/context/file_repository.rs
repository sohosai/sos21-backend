use crate::model::file::{File, FileId};
use crate::model::user::{UserFileUsage, UserId};

use anyhow::Result;

#[async_trait::async_trait]
pub trait FileRepository {
    async fn store_file(&self, file: File) -> Result<()>;
    async fn get_file(&self, id: FileId) -> Result<Option<File>>;
    async fn sum_file_usage_by_user(&self, user_id: UserId) -> Result<UserFileUsage>;
    async fn list_files_by_user(&self, user_id: UserId) -> Result<Vec<File>>;
}

#[macro_export]
macro_rules! delegate_file_repository {
    (impl $(<$($vars:ident $(: $c0:ident $(+ $cs:ident)* )? ),*>)? FileRepository for $ty:ty {
        $sel:ident $target:block
    }) => {
        #[::async_trait::async_trait]
        impl $(<$($vars$(: $c0 $(+ $cs)* )?,)*>)? $crate::context::FileRepository for $ty {
            async fn store_file(
                &$sel,
                file: $crate::model::file::File
            ) -> ::anyhow::Result<()> {
                $target.store_file(file).await
            }
            async fn get_file(
                &$sel,
                id: $crate::model::file::FileId
            ) -> ::anyhow::Result<Option<$crate::model::file::File>> {
                $target.get_file(id).await
            }
            async fn sum_file_usage_by_user(
                &$sel,
                user_id: $crate::model::user::UserId
            ) -> ::anyhow::Result<$crate::model::user::UserFileUsage> {
                $target.sum_file_usage_by_user(user_id).await
            }
            async fn list_files_by_user(
                &$sel,
                user_id: $crate::model::user::UserId
            ) -> ::anyhow::Result<Vec<$crate::model::file::File>> {
                $target.list_files_by_user(user_id).await
            }
        }
    }
}

#[async_trait::async_trait]
impl<C: FileRepository + Sync> FileRepository for &C {
    async fn store_file(&self, file: File) -> Result<()> {
        <C as FileRepository>::store_file(self, file).await
    }

    async fn get_file(&self, id: FileId) -> Result<Option<File>> {
        <C as FileRepository>::get_file(self, id).await
    }

    async fn sum_file_usage_by_user(&self, user_id: UserId) -> Result<UserFileUsage> {
        <C as FileRepository>::sum_file_usage_by_user(self, user_id).await
    }

    async fn list_files_by_user(&self, user_id: UserId) -> Result<Vec<File>> {
        <C as FileRepository>::list_files_by_user(self, user_id).await
    }
}
