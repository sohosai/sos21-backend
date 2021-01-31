use anyhow::Result;
use futures::lock::Mutex;
use futures::{future, stream::TryStreamExt};
use ref_cast::RefCast;
use sos21_database::{command, model as data, query};
use sos21_domain_context::UserRepository;
use sos21_domain_model::{
    date_time::DateTime,
    phone_number::PhoneNumber,
    user::{User, UserAffiliation, UserEmailAddress, UserId, UserKanaName, UserName, UserRole},
};
use sqlx::{Postgres, Transaction};

#[derive(Debug, RefCast)]
#[repr(transparent)]
pub struct UserDatabase(Mutex<Transaction<'static, Postgres>>);

#[async_trait::async_trait]
impl UserRepository for UserDatabase {
    async fn store_user(&self, user: User) -> Result<()> {
        let mut lock = self.0.lock().await;

        let user = from_user(user);
        if query::find_user(&mut *lock, user.id.clone())
            .await?
            .is_some()
        {
            let input = command::update_user::Input {
                id: user.id,
                first_name: user.first_name,
                kana_first_name: user.kana_first_name,
                last_name: user.last_name,
                kana_last_name: user.kana_last_name,
                phone_number: user.phone_number,
                affiliation: user.affiliation,
                role: user.role,
            };
            command::update_user(&mut *lock, input).await
        } else {
            command::insert_user(&mut *lock, user).await
        }
    }

    async fn get_user(&self, id: UserId) -> Result<Option<User>> {
        let mut lock = self.0.lock().await;
        query::find_user(&mut *lock, id.0)
            .await
            .and_then(|opt| opt.map(to_user).transpose())
    }

    async fn list_users(&self) -> Result<Vec<User>> {
        let mut lock = self.0.lock().await;
        query::list_users(&mut *lock)
            .and_then(|user| future::ready(to_user(user)))
            .try_collect()
            .await
    }
}

fn from_user(user: User) -> data::user::User {
    let User {
        id,
        created_at,
        name,
        kana_name,
        email,
        phone_number,
        affiliation,
        role,
    } = user;
    let (first_name, last_name) = name.into_string();
    let (kana_first_name, kana_last_name) = kana_name.into_string();
    data::user::User {
        id: id.0,
        created_at: created_at.utc(),
        first_name,
        kana_first_name,
        last_name,
        kana_last_name,
        email: email.into_string(),
        phone_number: phone_number.into_string(),
        affiliation: affiliation.into_string(),
        role: match role {
            UserRole::Administrator => data::user::UserRole::Administrator,
            UserRole::CommitteeOperator => data::user::UserRole::CommitteeOperator,
            UserRole::Committee => data::user::UserRole::Committee,
            UserRole::General => data::user::UserRole::General,
        },
    }
}

pub fn to_user(user: data::user::User) -> Result<User> {
    let data::user::User {
        id,
        created_at,
        first_name,
        kana_first_name,
        last_name,
        kana_last_name,
        email,
        phone_number,
        affiliation,
        role,
    } = user;
    Ok(User {
        id: UserId(id),
        created_at: DateTime::from_utc(created_at),
        name: UserName::from_string(first_name, last_name)?,
        kana_name: UserKanaName::from_string(kana_first_name, kana_last_name)?,
        email: UserEmailAddress::from_string(email)?,
        phone_number: PhoneNumber::from_string(phone_number)?,
        affiliation: UserAffiliation::from_string(affiliation)?,
        role: match role {
            data::user::UserRole::Administrator => UserRole::Administrator,
            data::user::UserRole::CommitteeOperator => UserRole::CommitteeOperator,
            data::user::UserRole::Committee => UserRole::Committee,
            data::user::UserRole::General => UserRole::General,
        },
    })
}
