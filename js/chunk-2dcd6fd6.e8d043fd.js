(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dcd6fd6"],{"4c1e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("7e87"),i=new r["a"]("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),i.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),a=n("208d"),E=new r["a"]("I18n"),s=null,u=null,c=function(){function e(){}return e.configure=function(t){return E.debug("configure I18n"),t?(s=Object.assign({},s,t.I18n||t),e.createInstance(),s):s},e.getModuleName=function(){return"I18n"},e.createInstance=function(){E.debug("create I18n instance"),u||(u=new o(s))},e.setLanguage=function(t){return e.checkConfig(),u.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?u.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),u.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),u.putVocabularies(t)},e.checkConfig=function(){return u||(u=new o(s)),!0},e}();a["a"].register(c)},"4e6f":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_album",(function(){return S}));var r,i=n("4e0d"),o=n("7e87"),a=n("565a"),E=n("4c1e"),s=n("f036"),u=n("6c18"),c=n("7585"),_=n("b48a"),l=n("70b3"),T=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function E(e){try{s(r["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):i(e.value).then(a,E)}s((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:E(0),throw:E(1),return:E(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function E(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(E){o=[6,E],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,E=o.length;a<E;a++,i++)r[i]=o[a];return r},f=new Uint8Array(16);function L(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(f)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function O(e){return"string"===typeof e&&p.test(e)}for(var h=[],m=0;m<256;++m)h.push((m+256).toString(16).substr(1));function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase();if(!O(n))throw TypeError("Stringified UUID is invalid");return n}function g(e,t,n){e=e||{};var r=e.random||(e.rng||L)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return I(r)}var y=":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}",C=new o["a"]("S3Album"),S=function(){function e(e){var t=this;Object(i["k"])(this,e),this.contentType="binary/octet-stream",this.level=s["a"].Public,this.picker=!0,this.pickerText=u["a"].PICKER_TEXT,this.albumItems=[],this.imgArr={},this.list=function(){return T(t,void 0,void 0,(function(){var e,t,n,r,i,o,a,E;return A(this,(function(s){switch(s.label){case 0:if(e=this,t=e.path,n=void 0===t?"":t,r=e.level,i=e.track,o=e.identityId,C.debug("Album path: "+n),!_["a"]||"function"!==typeof _["a"].list)throw new Error(c["n"]);s.label=1;case 1:return s.trys.push([1,3,,4]),[4,_["a"].list(n,{level:r,track:i,identityId:o})];case 2:return a=s.sent(),this.marshal(a),[3,4];case 3:return E=s.sent(),C.warn(E),[3,4];case 4:return[2]}}))}))},this.marshal=function(e){e.forEach((function(e){var n=e.key.toLowerCase(),r=n.split(".")[1];l["d"].has(r)&&(!e.contentType||e.contentType&&"binary/octet-stream"===e.contentType)&&(e.contentType=t.getContentType(e))}));var n=e.filter((function(e){return e.contentType&&e.contentType.startsWith("image/")})),r=t.filter?t.filter(n):n;r=t.sort?t.sort(r):r,t.albumItems=r,C.debug("album items",t.albumItems),t.constructImgArray(t.albumItems)},this.constructImgArray=function(e){e.map((function(e){t.imgArr[""+e["key"]]=e["key"]}))},this.handlePick=function(e){return T(t,void 0,void 0,(function(){var t,n,r,i,o,a,E,s,u,c;return A(this,(function(_){switch(_.label){case 0:t=e.target.files[0],n=this,r=n.path,i=void 0===r?"":r,o=n.level,a=n.track,E=n.fileToKey,s=i+Object(l["b"])(t,E),_.label=1;case 1:return _.trys.push([1,3,,4]),[4,Object(l["e"])(s,t,o,a,t["type"],C)];case 2:return _.sent(),[3,4];case 3:throw u=_.sent(),C.error(u),new Error(u);case 4:return Object.keys(this.imgArr).includes(s)?(this.albumItems=d(this.albumItems),this.imgArr[s]=s+"-"+g()):(c=d(this.albumItems,this.filter?this.filter([{key:s}]):[{key:s}]),this.albumItems=this.sort?this.sort(c):c),[2]}}))}))}}return e.prototype.getContentType=function(e){return Object(a["c"])(e.key,"image/*")},e.prototype.componentWillLoad=function(){this.list()},e.prototype.render=function(){var e=this;return Object(i["i"])("div",null,Object(i["i"])("div",{class:"album-container"},Object(i["i"])("div",{class:"grid-row"},this.albumItems.map((function(t){return Object(i["i"])("div",{class:"grid-item",key:"key-"+t.key},Object(i["i"])("amplify-s3-image",{key:e.imgArr[t.key],imgKey:t.key,level:e.level,path:e.path,identityId:e.identityId,track:e.track,handleOnError:e.handleOnError,handleOnLoad:e.handleOnLoad}),Object(i["i"])("span",{class:"img-overlay"}))})))),this.picker&&Object(i["i"])("amplify-picker",{pickerText:E["a"].get(this.pickerText),inputHandler:function(t){return e.handlePick(t)},acceptValue:"image/*"}))},e}();S.style=y},"6c18":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r,i,o=n("f5b6");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(r||(r={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(i||(i={}));var a=Object.assign(Object.assign(Object.assign({},r),o["a"]),i)},f5b6:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e["DEFAULT_MSG"]="Authentication Error",e["EMPTY_USERNAME"]="Username cannot be empty",e["INVALID_USERNAME"]="The username should either be a string or one of the sign in types",e["EMPTY_PASSWORD"]="Password cannot be empty",e["EMPTY_CODE"]="Confirmation code cannot be empty",e["SIGN_UP_ERROR"]="Error creating account",e["NO_MFA"]="No valid MFA method provided",e["INVALID_MFA"]="Invalid MFA type",e["EMPTY_CHALLENGE"]="Challenge response cannot be empty",e["NO_USER_SESSION"]="Failed to get the session because the user is empty"}(r||(r={}))}}]);
//# sourceMappingURL=chunk-2dcd6fd6.e8d043fd.js.map