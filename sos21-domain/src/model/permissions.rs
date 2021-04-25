bitflags::bitflags! {
    #[derive(Default)]
    pub struct Permissions: u32 {
        const READ_ALL_USERS                     = 0b0000000000000001;
        const READ_ALL_PROJECTS                  = 0b0000000000000010;
        const UPDATE_ALL_USERS                   = 0b0000000000000100;
        const UPDATE_ALL_PROJECTS                = 0b0000000000001000;
        const READ_ALL_FORMS                     = 0b0000000000010000;
        const CREATE_FORMS                       = 0b0000000000100000;
        const READ_ALL_FORM_ANSWERS              = 0b0000000001000000;
        const CREATE_FILES                       = 0b0000000010000000;
        const SHARE_FILES                        = 0b0000000100000000;
        const DISTRIBUTE_FILES                   = 0b0000001000000000;
        const READ_ALL_FILE_DISTRIBUTIONS        = 0b0000010000000000;
        const READ_ALL_REGISTRATION_FORMS        = 0b0000100000000000;
        const READ_ALL_REGISTRATION_FORM_ANSWERS = 0b0001000000000000;
        const CREATE_REGISTRATION_FORMS          = 0b0010000000000000;
        const ANSWER_REGISTRATION_FORMS          = 0b0100000000000000;
    }
}
