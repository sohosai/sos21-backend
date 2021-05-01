use crate::error::{UseCaseError, UseCaseResult};
use crate::model::file::File;
use crate::model::file_sharing::FileSharingId;

use anyhow::Context;
use sos21_domain::context::FileSharingRepository;
use sos21_domain::model::file_sharing;

#[derive(Debug, Clone)]
pub enum Error {
    NotFound,
    InvalidSharing,
}

impl Error {
    fn from_witness_error(err: file_sharing::ToWitnessError) -> Self {
        match err.kind() {
            file_sharing::ToWitnessErrorKind::OutOfScope => Error::NotFound,
            file_sharing::ToWitnessErrorKind::ExpiredSharing => Error::InvalidSharing,
            file_sharing::ToWitnessErrorKind::RevokedSharing => Error::InvalidSharing,
        }
    }
}

#[tracing::instrument(skip(ctx))]
pub async fn run<C>(ctx: C, sharing_id: FileSharingId) -> UseCaseResult<File, Error>
where
    C: FileSharingRepository + Send + Sync,
{
    let result = ctx
        .get_file_sharing(sharing_id.into_entity())
        .await
        .context("Failed to get a file sharing")?;
    let (sharing, file) = match result {
        Some(x) => x,
        None => return Err(UseCaseError::UseCase(Error::NotFound)),
    };

    let witness = sharing
        .to_witness()
        .map_err(|err| UseCaseError::UseCase(Error::from_witness_error(err)))?;

    use_case_ensure!(file.is_visible_to_with_sharing(&witness));
    Ok(File::from_entity(file))
}

#[cfg(test)]
mod tests {
    use crate::model::file::FileId;
    use crate::model::file_sharing::FileSharingId;
    use crate::{get_publicly_shared_file, UseCaseError};

    use sos21_domain::model::file_sharing;
    use sos21_domain::test;

    // Checks that the (anonymous) user can read others' publicly shared file.
    #[tokio::test]
    async fn test_anonymous() {
        let user = test::model::new_general_user();
        let (file, object) = test::model::new_file(user.id().clone());

        let sharing =
            file_sharing::FileSharing::new(file.id, file_sharing::FileSharingScope::Public);

        let app = test::build_mock_app()
            .users(vec![user.clone()])
            .files(vec![file.clone()])
            .objects(vec![object])
            .await
            .sharings(vec![sharing.clone()])
            .build(); // not logging in

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Ok(got)
            if got.id == FileId::from_entity(file.id)
        ));
    }

    // Checks that the normal user can read others' publicly shared file.
    #[tokio::test]
    async fn test_general() {
        let user = test::model::new_general_user();
        let other = test::model::new_general_user();
        let (other_file, other_object) = test::model::new_file(other.id().clone());

        let sharing =
            file_sharing::FileSharing::new(other_file.id, file_sharing::FileSharingScope::Public);

        let app = test::build_mock_app()
            .users(vec![user.clone(), other.clone()])
            .files(vec![other_file.clone()])
            .objects(vec![other_object])
            .await
            .sharings(vec![sharing.clone()])
            .build()
            .login_as(user.clone())
            .await;

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Ok(file)
            if file.id == FileId::from_entity(other_file.id)
        ));
    }

    // Checks that the normal user cannot read using non-'public' sharing.
    #[tokio::test]
    async fn test_non_public() {
        let user = test::model::new_general_user();
        let other = test::model::new_general_user();
        let (other_file, other_object) = test::model::new_file(other.id().clone());

        let sharing = file_sharing::FileSharing::new(
            other_file.id,
            file_sharing::FileSharingScope::Committee,
        );

        let app = test::build_mock_app()
            .users(vec![user.clone(), other.clone()])
            .files(vec![other_file.clone()])
            .objects(vec![other_object])
            .await
            .sharings(vec![sharing.clone()])
            .build()
            .login_as(user.clone())
            .await;

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Err(UseCaseError::UseCase(
                get_publicly_shared_file::Error::NotFound
            ))
        ));
    }

    // Checks that the normal user cannot read using nonexisting sharing.
    #[tokio::test]
    async fn test_not_found() {
        let user = test::model::new_general_user();
        let (file, object) = test::model::new_file(user.id().clone());

        let sharing =
            file_sharing::FileSharing::new(file.id, file_sharing::FileSharingScope::Public);

        let app = test::build_mock_app()
            .users(vec![user.clone()])
            .files(vec![file.clone()])
            .objects(vec![object])
            .await
            .build()
            .login_as(user.clone())
            .await;

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Err(UseCaseError::UseCase(
                get_publicly_shared_file::Error::NotFound
            ))
        ));
    }

    // Checks that the normal user cannot read using revoked sharing.
    #[tokio::test]
    async fn test_revoked() {
        let user = test::model::new_general_user();
        let other = test::model::new_general_user();
        let (other_file, other_object) = test::model::new_file(other.id().clone());

        let mut sharing =
            file_sharing::FileSharing::new(other_file.id, file_sharing::FileSharingScope::Public);
        sharing.revoke().unwrap();

        let app = test::build_mock_app()
            .users(vec![user.clone(), other.clone()])
            .files(vec![other_file.clone()])
            .objects(vec![other_object])
            .await
            .sharings(vec![sharing.clone()])
            .build()
            .login_as(user.clone())
            .await;

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Err(UseCaseError::UseCase(
                get_publicly_shared_file::Error::InvalidSharing
            ))
        ));
    }

    // Checks that the normal user cannot read using expired sharing.
    #[tokio::test]
    async fn test_expired() {
        let user = test::model::new_general_user();
        let other = test::model::new_general_user();
        let (other_file, other_object) = test::model::new_file(other.id().clone());

        let sharing = test::model::new_expired_file_sharing(
            other_file.id,
            file_sharing::FileSharingScope::Public,
        );

        let app = test::build_mock_app()
            .users(vec![user.clone(), other.clone()])
            .files(vec![other_file.clone()])
            .objects(vec![other_object])
            .await
            .sharings(vec![sharing.clone()])
            .build()
            .login_as(user.clone())
            .await;

        assert!(matches!(
            get_publicly_shared_file::run(&app, FileSharingId::from_entity(sharing.id())).await,
            Err(UseCaseError::UseCase(
                get_publicly_shared_file::Error::InvalidSharing
            ))
        ));
    }
}
