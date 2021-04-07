(function() {var implementors = {};
implementors["sos21_api_server"] = [{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_api_server/handler/enum.HandlerError.html\" title=\"enum sos21_api_server::handler::HandlerError\">HandlerError</a>&lt;E&gt;&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/enum.ErasedHandlerError.html\" title=\"enum sos21_api_server::handler::ErasedHandlerError\">ErasedHandlerError</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"sos21_api_server/handler/trait.HandlerResponse.html\" title=\"trait sos21_api_server::handler::HandlerResponse\">HandlerResponse</a>,&nbsp;</span>","synthetic":false,"types":["sos21_api_server::handler::ErasedHandlerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/create_file/enum.Error.html\" title=\"enum sos21_use_case::create_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file/create/enum.Error.html\" title=\"enum sos21_api_server::handler::file::create::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file::create::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file/get/enum.Error.html\" title=\"enum sos21_api_server::handler::file::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/share_file/enum.Error.html\" title=\"enum sos21_use_case::share_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file/share/enum.Error.html\" title=\"enum sos21_api_server::handler::file::share::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file::share::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_file/enum.Error.html\" title=\"enum sos21_use_case::get_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file/get_info/enum.Error.html\" title=\"enum sos21_api_server::handler::file::get_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file::get_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_form_answers/enum.Error.html\" title=\"enum sos21_use_case::list_form_answers::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form/answer/list/enum.Error.html\" title=\"enum sos21_api_server::handler::form::answer::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form::answer::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/export_form_answers/enum.Error.html\" title=\"enum sos21_use_case::export_form_answers::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form/answer/export/enum.Error.html\" title=\"enum sos21_api_server::handler::form::answer::export::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form::answer::export::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/create_form/enum.Error.html\" title=\"enum sos21_use_case::create_form::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form/create/enum.Error.html\" title=\"enum sos21_api_server::handler::form::create::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form::create::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_form/enum.Error.html\" title=\"enum sos21_use_case::get_form::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form/get/enum.Error.html\" title=\"enum sos21_api_server::handler::form::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_all_forms/enum.Error.html\" title=\"enum sos21_use_case::list_all_forms::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form/list/enum.Error.html\" title=\"enum sos21_api_server::handler::form::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_form_answer/enum.Error.html\" title=\"enum sos21_use_case::get_form_answer::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/form_answer/get/enum.Error.html\" title=\"enum sos21_api_server::handler::form_answer::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::form_answer::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/create_project/enum.Error.html\" title=\"enum sos21_use_case::create_project::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/create/enum.Error.html\" title=\"enum sos21_api_server::handler::project::create::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::create::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/update_project/enum.Error.html\" title=\"enum sos21_use_case::update_project::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/update/enum.Error.html\" title=\"enum sos21_api_server::handler::project::update::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::update::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project/enum.Error.html\" title=\"enum sos21_use_case::get_project::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/get/enum.Error.html\" title=\"enum sos21_api_server::handler::project::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_by_code/enum.Error.html\" title=\"enum sos21_use_case::get_project_by_code::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/get/enum.Error.html\" title=\"enum sos21_api_server::handler::project::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_all_projects/enum.Error.html\" title=\"enum sos21_use_case::list_all_projects::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/list/enum.Error.html\" title=\"enum sos21_api_server::handler::project::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/export_projects/enum.Error.html\" title=\"enum sos21_use_case::export_projects::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/export/enum.Error.html\" title=\"enum sos21_api_server::handler::project::export::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::export::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_distributed_file/enum.Error.html\" title=\"enum sos21_use_case::get_distributed_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/file_distribution/get/enum.Error.html\" title=\"enum sos21_api_server::handler::project::file_distribution::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::file_distribution::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_distributed_files/enum.Error.html\" title=\"enum sos21_use_case::list_distributed_files::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/file_distribution/list/enum.Error.html\" title=\"enum sos21_api_server::handler::project::file_distribution::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::file_distribution::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_form/enum.Error.html\" title=\"enum sos21_use_case::get_project_form::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/get/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_form_answer_shared_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_project_form_answer_shared_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/answer/file_sharing/get_file/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::answer::file_sharing::get_file::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::answer::file_sharing::get_file::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_form_answer_shared_file/enum.Error.html\" title=\"enum sos21_use_case::get_project_form_answer_shared_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/answer/file_sharing/get_file_info/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::answer::file_sharing::get_file_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::answer::file_sharing::get_file_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_form_answer/enum.Error.html\" title=\"enum sos21_use_case::get_project_form_answer::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/answer/get/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::answer::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::answer::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/create_form_answer/enum.Error.html\" title=\"enum sos21_use_case::create_form_answer::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/answer/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::answer::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::answer::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_project_forms/enum.Error.html\" title=\"enum sos21_use_case::list_project_forms::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/project/form/list/enum.Error.html\" title=\"enum sos21_api_server::handler::project::form::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::project::form::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/signup/enum.Error.html\" title=\"enum sos21_use_case::signup::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/signup/enum.Error.html\" title=\"enum sos21_api_server::handler::signup::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::signup::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_user/enum.Error.html\" title=\"enum sos21_use_case::get_user::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/user/get/enum.Error.html\" title=\"enum sos21_api_server::handler::user::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::user::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_users/enum.Error.html\" title=\"enum sos21_use_case::list_users::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/user/list/enum.Error.html\" title=\"enum sos21_api_server::handler::user::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::user::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/update_user/enum.Error.html\" title=\"enum sos21_use_case::update_user::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/user/update/enum.Error.html\" title=\"enum sos21_api_server::handler::user::update::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::user::update::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/export_users/enum.Error.html\" title=\"enum sos21_use_case::export_users::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/user/export/enum.Error.html\" title=\"enum sos21_api_server::handler::user::export::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::user::export::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/distribute_files/enum.Error.html\" title=\"enum sos21_use_case::distribute_files::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_distribution/create/enum.Error.html\" title=\"enum sos21_api_server::handler::file_distribution::create::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_distribution::create::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_file_distribution/enum.Error.html\" title=\"enum sos21_use_case::get_file_distribution::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_distribution/get/enum.Error.html\" title=\"enum sos21_api_server::handler::file_distribution::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_distribution::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/list_all_file_distributions/enum.Error.html\" title=\"enum sos21_use_case::list_all_file_distributions::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_distribution/list/enum.Error.html\" title=\"enum sos21_api_server::handler::file_distribution::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_distribution::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_form_answer_shared_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_form_answer_shared_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/form_answer/get_file/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::form_answer::get_file::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::form_answer::get_file::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_form_answer_shared_file/enum.Error.html\" title=\"enum sos21_use_case::get_form_answer_shared_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/form_answer/get_file_info/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::form_answer::get_file_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::form_answer::get_file_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_shared_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_project_shared_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/project/get_file/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::project::get_file::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::project::get_file::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_project_shared_file/enum.Error.html\" title=\"enum sos21_use_case::get_project_shared_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/project/get_file_info/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::project::get_file_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::project::get_file_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_publicly_shared_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_publicly_shared_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/public/get_file/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::public::get_file::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::public::get_file::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_publicly_shared_file/enum.Error.html\" title=\"enum sos21_use_case::get_publicly_shared_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/public/get_file_info/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::public::get_file_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::public::get_file_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_file_sharing/enum.Error.html\" title=\"enum sos21_use_case::get_file_sharing::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/get/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::get::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/revoke_file_sharing/enum.Error.html\" title=\"enum sos21_use_case::revoke_file_sharing::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/revoke/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::revoke::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::revoke::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_shared_file_object/enum.Error.html\" title=\"enum sos21_use_case::get_shared_file_object::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/get_file/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::get_file::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::get_file::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/get_shared_file/enum.Error.html\" title=\"enum sos21_use_case::get_shared_file::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/file_sharing/get_file_info/enum.Error.html\" title=\"enum sos21_api_server::handler::file_sharing::get_file_info::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::file_sharing::get_file_info::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/me/file/list/enum.Error.html\" title=\"enum sos21_api_server::handler::me::file::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::me::file::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/me/file/check_usage/enum.Error.html\" title=\"enum sos21_api_server::handler::me::file::check_usage::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::me::file::check_usage::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/me/file_sharing/list/enum.Error.html\" title=\"enum sos21_api_server::handler::me::file_sharing::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::me::file_sharing::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/me/project/list/enum.Error.html\" title=\"enum sos21_api_server::handler::me::project::list::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::me::project::list::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/me/get/enum.Error.html\" title=\"enum sos21_api_server::handler::me::get::Error\">Error</a>","synthetic":false,"types":["sos21_api_server::handler::me::get::Error"]},{"text":"impl&lt;E1, E2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_use_case/error/enum.UseCaseError.html\" title=\"enum sos21_use_case::error::UseCaseError\">UseCaseError</a>&lt;E1&gt;&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/enum.HandlerError.html\" title=\"enum sos21_api_server::handler::HandlerError\">HandlerError</a>&lt;E2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;E2&gt;,&nbsp;</span>","synthetic":false,"types":["sos21_api_server::handler::HandlerError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.38/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/enum.HandlerError.html\" title=\"enum sos21_api_server::handler::HandlerError\">HandlerError</a>&lt;E&gt;","synthetic":false,"types":["sos21_api_server::handler::HandlerError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_domain/context/authentication/enum.AuthenticationError.html\" title=\"enum sos21_domain::context::authentication::AuthenticationError\">AuthenticationError</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/enum.HandlerError.html\" title=\"enum sos21_api_server::handler::HandlerError\">HandlerError</a>&lt;E&gt;","synthetic":false,"types":["sos21_api_server::handler::HandlerError"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sos21_domain/context/login/enum.LoginError.html\" title=\"enum sos21_domain::context::login::LoginError\">LoginError</a>&gt; for <a class=\"enum\" href=\"sos21_api_server/handler/enum.HandlerError.html\" title=\"enum sos21_api_server::handler::HandlerError\">HandlerError</a>&lt;E&gt;","synthetic":false,"types":["sos21_api_server::handler::HandlerError"]}];
implementors["sos21_use_case"] = [{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.38/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"sos21_use_case/error/enum.UseCaseError.html\" title=\"enum sos21_use_case::error::UseCaseError\">UseCaseError</a>&lt;E&gt;","synthetic":false,"types":["sos21_use_case::error::UseCaseError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()