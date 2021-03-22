macro_rules! use_case_ensure {
    ($cond:expr) => {
        if !$cond {
            return Err($crate::UseCaseError::Internal(::anyhow::anyhow!(concat!(
                "Condition failed: `",
                stringify!($cond),
                "`"
            ))));
        }
    };
}

pub mod create_file;
pub mod create_form;
pub mod create_form_answer;
pub mod create_project;
pub mod export_form_answers;
pub mod export_projects;
pub mod export_users;
pub mod get_file;
pub mod get_file_object;
pub mod get_form;
pub mod get_form_answer;
pub mod get_login_user;
pub mod get_project;
pub mod get_project_by_code;
pub mod get_project_form;
pub mod get_project_form_answer;
pub mod get_user;
pub mod get_user_file_usage;
pub mod list_all_forms;
pub mod list_all_projects;
pub mod list_form_answers;
pub mod list_project_forms;
pub mod list_user_files;
pub mod list_user_projects;
pub mod list_users;
pub mod revoke_file_sharing;
pub mod share_file;
pub mod signup;
pub mod update_project;
pub mod update_user;

mod error;
pub use error::{UseCaseError, UseCaseResult};

pub mod model;