(function() {var implementors = {};
implementors["sos21_api_server"] = [{"text":"impl Send for App","synthetic":true,"types":[]},{"text":"impl Send for Context","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for Server","synthetic":true,"types":[]},{"text":"impl Send for Bearer","synthetic":true,"types":[]},{"text":"impl Send for FromStrError","synthetic":true,"types":[]},{"text":"impl Send for Claims","synthetic":true,"types":[]},{"text":"impl Send for KeyStore","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for AuthenticationInfo","synthetic":true,"types":[]},{"text":"impl Send for AuthenticationError","synthetic":true,"types":[]},{"text":"impl Send for AuthenticationErrorId","synthetic":true,"types":[]},{"text":"impl Send for RequestErrorId","synthetic":true,"types":[]},{"text":"impl Send for ErrorBody","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for CheckboxId","synthetic":true,"types":[]},{"text":"impl Send for Checkbox","synthetic":true,"types":[]},{"text":"impl Send for RadioId","synthetic":true,"types":[]},{"text":"impl Send for Radio","synthetic":true,"types":[]},{"text":"impl Send for FormItemCondition","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRow","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumnId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumn","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRequired","synthetic":true,"types":[]},{"text":"impl Send for FormItemId","synthetic":true,"types":[]},{"text":"impl Send for FormItemBody","synthetic":true,"types":[]},{"text":"impl Send for FormItem","synthetic":true,"types":[]},{"text":"impl Send for FormId","synthetic":true,"types":[]},{"text":"impl Send for FormCondition","synthetic":true,"types":[]},{"text":"impl Send for Form","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowAnswer","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemBody","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItem","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerId","synthetic":true,"types":[]},{"text":"impl Send for FormAnswer","synthetic":true,"types":[]},{"text":"impl Send for ProjectId","synthetic":true,"types":[]},{"text":"impl Send for ProjectCategory","synthetic":true,"types":[]},{"text":"impl Send for ProjectAttribute","synthetic":true,"types":[]},{"text":"impl Send for Project","synthetic":true,"types":[]},{"text":"impl Send for ProjectQueryConjunction","synthetic":true,"types":[]},{"text":"impl Send for ProjectQuery","synthetic":true,"types":[]},{"text":"impl Send for UserId","synthetic":true,"types":[]},{"text":"impl Send for UserName","synthetic":true,"types":[]},{"text":"impl Send for UserKanaName","synthetic":true,"types":[]},{"text":"impl Send for UserRole","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for RequestSpecifier","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl Send for Response","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ErasedHandlerError","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for HandlerError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["sos21_database"] = [{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Form","synthetic":true,"types":[]},{"text":"impl Send for FormConditionInclude","synthetic":true,"types":[]},{"text":"impl Send for FormConditionExclude","synthetic":true,"types":[]},{"text":"impl Send for FormAnswer","synthetic":true,"types":[]},{"text":"impl Send for ProjectCategory","synthetic":true,"types":[]},{"text":"impl Send for ProjectAttributes","synthetic":true,"types":[]},{"text":"impl Send for FromBitsError","synthetic":true,"types":[]},{"text":"impl Send for Project","synthetic":true,"types":[]},{"text":"impl Send for UserRole","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for ProjectWithOwner","synthetic":true,"types":[]},{"text":"impl Send for ProjectWithOwner","synthetic":true,"types":[]},{"text":"impl Send for ProjectWithOwner","synthetic":true,"types":[]}];
implementors["sos21_domain"] = [{"text":"impl&lt;C&gt; Send for Authentication&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for AuthenticationError","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for Login&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LoginError","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Send for Bounded&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Unbounded","synthetic":true,"types":[]},{"text":"impl Send for LengthErrorKind","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper&gt; Send for LengthError&lt;Lower, Upper&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper, T&gt; Send for LengthLimitedVec&lt;Lower, Upper, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper, T&gt; Send for LengthLimitedSet&lt;Lower, Upper, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper, T&gt; Send for LimitedInteger&lt;Lower, Upper, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BoundError","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper, S&gt; Send for LengthLimitedString&lt;Lower, Upper, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for LengthErrorKind","synthetic":true,"types":[]},{"text":"impl&lt;Lower, Upper&gt; Send for LengthError&lt;Lower, Upper&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Lower: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Upper: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for KanaString&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for NotKanaError","synthetic":true,"types":[]},{"text":"impl Send for DateTime","synthetic":true,"types":[]},{"text":"impl Send for EmailAddress","synthetic":true,"types":[]},{"text":"impl Send for FromStringError","synthetic":true,"types":[]},{"text":"impl Send for FormCondition","synthetic":true,"types":[]},{"text":"impl Send for FormConditionProjectSet","synthetic":true,"types":[]},{"text":"impl Send for FromProjectsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromProjectsError","synthetic":true,"types":[]},{"text":"impl Send for FormDescription","synthetic":true,"types":[]},{"text":"impl Send for DescriptionError","synthetic":true,"types":[]},{"text":"impl Send for CheckboxId","synthetic":true,"types":[]},{"text":"impl Send for CheckboxLabel","synthetic":true,"types":[]},{"text":"impl Send for LabelError","synthetic":true,"types":[]},{"text":"impl Send for Checkbox","synthetic":true,"types":[]},{"text":"impl Send for CheckboxFormItemLimit","synthetic":true,"types":[]},{"text":"impl Send for LimitError","synthetic":true,"types":[]},{"text":"impl Send for CheckboxFormItemBoxes","synthetic":true,"types":[]},{"text":"impl Send for FromBoxesErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromBoxesError","synthetic":true,"types":[]},{"text":"impl Send for CheckboxFormItemContent","synthetic":true,"types":[]},{"text":"impl Send for CheckboxFormItem","synthetic":true,"types":[]},{"text":"impl Send for InconsistentCheckLimitsError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for FormItemConditions","synthetic":true,"types":[]},{"text":"impl Send for SizeErrorKind","synthetic":true,"types":[]},{"text":"impl Send for SizeError","synthetic":true,"types":[]},{"text":"impl Send for FormItemCondition","synthetic":true,"types":[]},{"text":"impl Send for FormItemDescription","synthetic":true,"types":[]},{"text":"impl Send for ItemDescriptionError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumnId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumnLabel","synthetic":true,"types":[]},{"text":"impl Send for LabelError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumn","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowLabel","synthetic":true,"types":[]},{"text":"impl Send for LabelError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRow","synthetic":true,"types":[]},{"text":"impl Send for GridRadioFormItemRequired","synthetic":true,"types":[]},{"text":"impl Send for GridRadioFormItemRows","synthetic":true,"types":[]},{"text":"impl Send for FromRowsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromRowsError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioFormItemColumns","synthetic":true,"types":[]},{"text":"impl Send for FromColumnsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromColumnsError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioFormItemContent","synthetic":true,"types":[]},{"text":"impl Send for GridRadioFormItem","synthetic":true,"types":[]},{"text":"impl Send for TooFewColumnsError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for IntegerFormItemLimit","synthetic":true,"types":[]},{"text":"impl Send for LimitError","synthetic":true,"types":[]},{"text":"impl Send for IntegerFormItemUnit","synthetic":true,"types":[]},{"text":"impl Send for UnitError","synthetic":true,"types":[]},{"text":"impl Send for IntegerFormItemContent","synthetic":true,"types":[]},{"text":"impl Send for IntegerFormItem","synthetic":true,"types":[]},{"text":"impl Send for FromContentErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromContentError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for FormItemName","synthetic":true,"types":[]},{"text":"impl Send for ItemNameError","synthetic":true,"types":[]},{"text":"impl Send for RadioId","synthetic":true,"types":[]},{"text":"impl Send for RadioLabel","synthetic":true,"types":[]},{"text":"impl Send for LabelError","synthetic":true,"types":[]},{"text":"impl Send for Radio","synthetic":true,"types":[]},{"text":"impl Send for RadioFormItemButtons","synthetic":true,"types":[]},{"text":"impl Send for FromButtonsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromButtonsError","synthetic":true,"types":[]},{"text":"impl Send for RadioFormItem","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for TextFormItemLength","synthetic":true,"types":[]},{"text":"impl Send for LengthError","synthetic":true,"types":[]},{"text":"impl Send for TextFormItemPlaceholder","synthetic":true,"types":[]},{"text":"impl Send for PlaceholderError","synthetic":true,"types":[]},{"text":"impl Send for TextFormItemContent","synthetic":true,"types":[]},{"text":"impl Send for TextFormItem","synthetic":true,"types":[]},{"text":"impl Send for FromContentErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromContentError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for FormItems","synthetic":true,"types":[]},{"text":"impl Send for FromItemsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromItemsError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerError","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerItemErrorKind","synthetic":true,"types":[]},{"text":"impl Send for CheckAnswerItemError","synthetic":true,"types":[]},{"text":"impl Send for FormItemId","synthetic":true,"types":[]},{"text":"impl Send for FormItem","synthetic":true,"types":[]},{"text":"impl Send for FormItemBody","synthetic":true,"types":[]},{"text":"impl Send for CheckFormItems","synthetic":true,"types":[]},{"text":"impl Send for FormName","synthetic":true,"types":[]},{"text":"impl Send for NameError","synthetic":true,"types":[]},{"text":"impl Send for FormPeriod","synthetic":true,"types":[]},{"text":"impl Send for PeriodError","synthetic":true,"types":[]},{"text":"impl Send for FormId","synthetic":true,"types":[]},{"text":"impl Send for Form","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemChecks","synthetic":true,"types":[]},{"text":"impl Send for FromCheckedIdsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromCheckedIdsError","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemGridRows","synthetic":true,"types":[]},{"text":"impl Send for FromRowAnswersErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromRowAnswersError","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowAnswer","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemText","synthetic":true,"types":[]},{"text":"impl Send for TextError","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItems","synthetic":true,"types":[]},{"text":"impl Send for LengthErrorKind","synthetic":true,"types":[]},{"text":"impl Send for LengthError","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItem","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemBody","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerId","synthetic":true,"types":[]},{"text":"impl Send for FormAnswer","synthetic":true,"types":[]},{"text":"impl Send for Permissions","synthetic":true,"types":[]},{"text":"impl Send for PhoneNumber","synthetic":true,"types":[]},{"text":"impl Send for FromStringError","synthetic":true,"types":[]},{"text":"impl Send for ProjectAttribute","synthetic":true,"types":[]},{"text":"impl Send for ProjectAttributes","synthetic":true,"types":[]},{"text":"impl Send for DuplicatedAttributesError","synthetic":true,"types":[]},{"text":"impl Send for ProjectCategory","synthetic":true,"types":[]},{"text":"impl Send for ProjectKind","synthetic":true,"types":[]},{"text":"impl Send for ProjectCode","synthetic":true,"types":[]},{"text":"impl Send for ParseCodeErrorKind","synthetic":true,"types":[]},{"text":"impl Send for ParseCodeError","synthetic":true,"types":[]},{"text":"impl Send for ProjectDescription","synthetic":true,"types":[]},{"text":"impl Send for InvalidProjectDescription","synthetic":true,"types":[]},{"text":"impl Send for ProjectIndex","synthetic":true,"types":[]},{"text":"impl Send for FromU16Error","synthetic":true,"types":[]},{"text":"impl Send for ProjectName","synthetic":true,"types":[]},{"text":"impl Send for NameError","synthetic":true,"types":[]},{"text":"impl Send for ProjectKanaName","synthetic":true,"types":[]},{"text":"impl Send for KanaNameError","synthetic":true,"types":[]},{"text":"impl Send for ProjectGroupName","synthetic":true,"types":[]},{"text":"impl Send for GroupNameError","synthetic":true,"types":[]},{"text":"impl Send for KanaGroupNameError","synthetic":true,"types":[]},{"text":"impl Send for ProjectKanaGroupName","synthetic":true,"types":[]},{"text":"impl Send for ProjectId","synthetic":true,"types":[]},{"text":"impl Send for Project","synthetic":true,"types":[]},{"text":"impl Send for ProjectQueryConjunction","synthetic":true,"types":[]},{"text":"impl Send for ProjectQuery","synthetic":true,"types":[]},{"text":"impl Send for FromConjunctionsErrorKind","synthetic":true,"types":[]},{"text":"impl Send for FromConjunctionsError","synthetic":true,"types":[]},{"text":"impl Send for UserAffiliation","synthetic":true,"types":[]},{"text":"impl Send for AffiliationError","synthetic":true,"types":[]},{"text":"impl Send for UserEmailAddress","synthetic":true,"types":[]},{"text":"impl Send for EmailAddressErrorKind","synthetic":true,"types":[]},{"text":"impl Send for EmailAddressErrorInner","synthetic":true,"types":[]},{"text":"impl Send for EmailAddressError","synthetic":true,"types":[]},{"text":"impl Send for UserName","synthetic":true,"types":[]},{"text":"impl Send for NameError","synthetic":true,"types":[]},{"text":"impl Send for UserKanaName","synthetic":true,"types":[]},{"text":"impl Send for KanaNameError","synthetic":true,"types":[]},{"text":"impl Send for UserRole","synthetic":true,"types":[]},{"text":"impl Send for RequirePermissionsError","synthetic":true,"types":[]},{"text":"impl Send for UserId","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for RequirePermissionsError","synthetic":true,"types":[]},{"text":"impl Send for MockAppBuilder","synthetic":true,"types":[]},{"text":"impl Send for MockApp","synthetic":true,"types":[]}];
implementors["sos21_gateway_database"] = [{"text":"impl Send for ProjectDatabase","synthetic":true,"types":[]},{"text":"impl Send for FormDatabase","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerDatabase","synthetic":true,"types":[]},{"text":"impl Send for UserDatabase","synthetic":true,"types":[]},{"text":"impl Send for Database","synthetic":true,"types":[]}];
implementors["sos21_run_migrations"] = [{"text":"impl Send for Opt","synthetic":true,"types":[]}];
implementors["sos21_use_case"] = [{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for ItemError","synthetic":true,"types":[]},{"text":"impl Send for ConditionError","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for ItemError","synthetic":true,"types":[]},{"text":"impl Send for AnswerError","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for InputFieldNames","synthetic":true,"types":[]},{"text":"impl Send for InputCheckboxNames","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for InputFieldNames","synthetic":true,"types":[]},{"text":"impl Send for InputCategoryNames","synthetic":true,"types":[]},{"text":"impl Send for InputAttributeNames","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for InputFieldNames","synthetic":true,"types":[]},{"text":"impl Send for InputRoleNames","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Input","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for UseCaseError&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for CheckboxId","synthetic":true,"types":[]},{"text":"impl Send for Checkbox","synthetic":true,"types":[]},{"text":"impl Send for FormItemCondition","synthetic":true,"types":[]},{"text":"impl Send for RadioId","synthetic":true,"types":[]},{"text":"impl Send for Radio","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRow","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumnId","synthetic":true,"types":[]},{"text":"impl Send for GridRadioColumn","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRequired","synthetic":true,"types":[]},{"text":"impl Send for FormItemId","synthetic":true,"types":[]},{"text":"impl Send for FormItemBody","synthetic":true,"types":[]},{"text":"impl Send for FormItem","synthetic":true,"types":[]},{"text":"impl Send for FormId","synthetic":true,"types":[]},{"text":"impl Send for FormCondition","synthetic":true,"types":[]},{"text":"impl Send for Form","synthetic":true,"types":[]},{"text":"impl Send for GridRadioRowAnswer","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItemBody","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerItem","synthetic":true,"types":[]},{"text":"impl Send for FormAnswerId","synthetic":true,"types":[]},{"text":"impl Send for FormAnswer","synthetic":true,"types":[]},{"text":"impl Send for ProjectId","synthetic":true,"types":[]},{"text":"impl Send for ProjectCategory","synthetic":true,"types":[]},{"text":"impl Send for ProjectAttribute","synthetic":true,"types":[]},{"text":"impl Send for Project","synthetic":true,"types":[]},{"text":"impl Send for ProjectQueryConjunction","synthetic":true,"types":[]},{"text":"impl Send for ProjectQuery","synthetic":true,"types":[]},{"text":"impl Send for UserId","synthetic":true,"types":[]},{"text":"impl Send for UserName","synthetic":true,"types":[]},{"text":"impl Send for UserKanaName","synthetic":true,"types":[]},{"text":"impl Send for UserRole","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()