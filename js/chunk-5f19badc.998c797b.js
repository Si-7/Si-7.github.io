(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f19badc"],{"4c1e":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("7e87"),r=new i["a"]("I18n"),E=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,i=this.getByLanguage(e,n);return i||(n.indexOf("-")>0&&(i=this.getByLanguage(e,n.split("-")[0])),i||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var i=this._dict[t];return i?i[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),o=n("208d"),a=new i["a"]("I18n"),_=null,u=null,s=function(){function e(){}return e.configure=function(t){return a.debug("configure I18n"),t?(_=Object.assign({},_,t.I18n||t),e.createInstance(),_):_},e.getModuleName=function(){return"I18n"},e.createInstance=function(){a.debug("create I18n instance"),u||(u=new E(_))},e.setLanguage=function(t){return e.checkConfig(),u.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?u.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),u.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),u.putVocabularies(t)},e.checkConfig=function(){return u||(u=new E(_)),!0},e}();o["a"].register(s)},"6c18":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i,r,E=n("f5b6");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(i||(i={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(r||(r={}));var o=Object.assign(Object.assign(Object.assign({},i),E["a"]),r)},fef4:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return A}));var i=n("4e0d"),r=n("7e87"),E=n("4c1e"),o=n("7a37"),a=n("ddb1"),_=n("6c18"),u=n("7585"),s=function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,E){function o(e){try{_(i.next(e))}catch(t){E(t)}}function a(e){try{_(i["throw"](e))}catch(t){E(t)}}function _(e){e.done?n(e.value):r(e.value).then(o,a)}_((i=i.apply(e,t||[])).next())}))},T=function(e,t){var n,i,r,E,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return E={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(E[Symbol.iterator]=function(){return this}),E;function a(e){return function(t){return _([e,t])}}function _(E){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,i&&(r=2&E[0]?i["return"]:E[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,E[1])).done)return r;switch(i=0,r&&(E=[2&E[0],r.value]),E[0]){case 0:case 1:r=E;break;case 4:return o.label++,{value:E[1],done:!1};case 5:o.label++,i=E[1],E=[0];continue;case 7:E=o.ops.pop(),o.trys.pop();continue;default:if(r=o.trys,!(r=r.length>0&&r[r.length-1])&&(6===E[0]||2===E[0])){o=0;continue}if(3===E[0]&&(!r||E[1]>r[0]&&E[1]<r[3])){o.label=E[1];break}if(6===E[0]&&o.label<r[1]){o.label=r[1],r=E;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(E);break}r[2]&&o.ops.pop(),o.trys.pop();continue}E=t.call(e,o)}catch(a){E=[6,a],i=0}finally{n=r=0}if(5&E[0])throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}},c=new r["a"]("SelectMFAType"),A=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var t=e.target,n=t.value,i=t.type,r=t.checked,E=["radio","checkbox"].includes(i);n===o["c"].SMS&&E&&(this.isSMS=r),n===o["c"].TOTP&&E&&(this.isTOTP=r),n===o["c"].NOMFA&&E&&(this.isNoMFA=r)},e.prototype.verify=function(e){return s(this,void 0,void 0,(function(){var t,n,i,r;return T(this,(function(s){switch(s.label){case 0:if(e&&e.preventDefault(),c.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=o["c"].TOTP:this.isSMS?this.MFAMethod=o["c"].SMS:this.isNoMFA&&(this.MFAMethod=o["c"].NOMFA),t=this.authData,!a["a"]||"function"!==typeof a["a"].setPreferredMFA)throw new Error(u["d"]);this.loading=!0,s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,a["a"].setPreferredMFA(t,this.MFAMethod)];case 2:return n=s.sent(),c.debug("Set Preferred MFA Succeeded",n),this.selectMessage=E["a"].get(_["a"].SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=s.sent(),r=i.message,r===u["o"]||r===u["p"]?(this.TOTPSetup=!0,this.selectMessage=E["a"].get(_["a"].SETUP_TOTP_REQUIRED)):(c.debug("Set Preferred MFA failed",i),this.selectMessage=E["a"].get(_["a"].UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return c.debug(E["a"].get(_["a"].LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i["i"])("div",null,Object(i["i"])("a",null,E["a"].get(_["a"].LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,r=t.TOTP,o=t.Optional;return Object(i["i"])("amplify-form-section",{submitButtonText:E["a"].get(_["a"].SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:E["a"].get(_["a"].SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(i["i"])("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,r?Object(i["i"])("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,o?Object(i["i"])("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.render=function(){return Object(i["i"])("div",null,this.contentBuilder(),this.TOTPSetup?Object(i["i"])("amplify-totp-setup",{user:this.authData}):null)},e}()}}]);
//# sourceMappingURL=chunk-5f19badc.998c797b.js.map