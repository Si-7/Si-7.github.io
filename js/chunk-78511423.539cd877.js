(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78511423"],{4984:function(e,t,n){"use strict";var a=n("ddb1");n("8900");t["a"]=a["a"]},"4c1e":function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("7e87"),r=new a["a"]("I18n"),i=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,a=this.getByLanguage(e,n);return a||(n.indexOf("-")>0&&(a=this.getByLanguage(e,n.split("-")[0])),a||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var a=this._dict[t];return a?a[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),o=n("208d"),u=new a["a"]("I18n"),c=null,s=null,E=function(){function e(){}return e.configure=function(t){return u.debug("configure I18n"),t?(c=Object.assign({},c,t.I18n||t),e.createInstance(),c):c},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),s||(s=new i(c))},e.setLanguage=function(t){return e.checkConfig(),s.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?s.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),s.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),s.putVocabularies(t)},e.checkConfig=function(){return s||(s=new i(c)),!0},e}();o["a"].register(E)},"6c18":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,r,i=n("f5b6");(function(e){e["BACK_TO_SIGN_IN"]="Back to Sign In",e["CHANGE_PASSWORD_ACTION"]="Change",e["CHANGE_PASSWORD"]="Change Password",e["CODE_LABEL"]="Verification code",e["CODE_PLACEHOLDER"]="Enter code",e["CONFIRM_SIGN_UP_CODE_LABEL"]="Confirmation Code",e["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"]="Enter your code",e["CONFIRM_SIGN_UP_HEADER_TEXT"]="Confirm Sign up",e["CONFIRM_SIGN_UP_LOST_CODE"]="Lost your code?",e["CONFIRM_SIGN_UP_RESEND_CODE"]="Resend Code",e["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"]="Confirm",e["CONFIRM_SMS_CODE"]="Confirm SMS Code",e["CONFIRM_TOTP_CODE"]="Confirm TOTP Code",e["CONFIRM"]="Confirm",e["CREATE_ACCOUNT_TEXT"]="Create account",e["EMAIL_LABEL"]="Email Address *",e["EMAIL_PLACEHOLDER"]="Enter your email address",e["FORGOT_PASSWORD_TEXT"]="Forgot your password?",e["LESS_THAN_TWO_MFA_VALUES_MESSAGE"]="Less than two MFA types available",e["NEW_PASSWORD_LABEL"]="New password",e["NEW_PASSWORD_PLACEHOLDER"]="Enter your new password",e["NO_ACCOUNT_TEXT"]="No account?",e["USERNAME_REMOVE_WHITESPACE"]="Username cannot contain whitespace",e["PASSWORD_REMOVE_WHITESPACE"]="Password cannot start or end with whitespace",e["PASSWORD_LABEL"]="Password *",e["PASSWORD_PLACEHOLDER"]="Enter your password",e["PHONE_LABEL"]="Phone Number *",e["PHONE_PLACEHOLDER"]="(555) 555-1212",e["QR_CODE_ALT"]="qrcode",e["RESET_PASSWORD_TEXT"]="Reset password",e["RESET_YOUR_PASSWORD"]="Reset your password",e["SELECT_MFA_TYPE_HEADER_TEXT"]="Select MFA Type",e["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"]="Verify",e["SEND_CODE"]="Send Code",e["SUBMIT"]="Submit",e["SETUP_TOTP_REQUIRED"]="TOTP needs to be configured",e["SIGN_IN_ACTION"]="Sign In",e["SIGN_IN_HEADER_TEXT"]="Sign in to your account",e["SIGN_IN_TEXT"]="Sign in",e["SIGN_IN_WITH_AMAZON"]="Sign in with Amazon",e["SIGN_IN_WITH_AUTH0"]="Sign in with Auth0",e["SIGN_IN_WITH_AWS"]="Sign in with AWS",e["SIGN_IN_WITH_FACEBOOK"]="Sign in with Facebook",e["SIGN_IN_WITH_GOOGLE"]="Sign in with Google",e["SIGN_OUT"]="Sign Out",e["SIGN_UP_EMAIL_PLACEHOLDER"]="Email",e["SIGN_UP_HAVE_ACCOUNT_TEXT"]="Have an account?",e["SIGN_UP_HEADER_TEXT"]="Create a new account",e["SIGN_UP_PASSWORD_PLACEHOLDER"]="Password",e["SIGN_UP_SUBMIT_BUTTON_TEXT"]="Create Account",e["SIGN_UP_USERNAME_PLACEHOLDER"]="Username",e["SUCCESS_MFA_TYPE"]="Success! Your MFA Type is now:",e["TOTP_HEADER_TEXT"]="Scan then enter verification code",e["TOTP_LABEL"]="Enter Security Code:",e["TOTP_ISSUER"]="AWSCognito",e["TOTP_SETUP_FAILURE"]="TOTP Setup has failed",e["TOTP_SUBMIT_BUTTON_TEXT"]="Verify Security Token",e["TOTP_SUCCESS_MESSAGE"]="Setup TOTP successfully!",e["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"]="Failed! Unable to configure MFA at this time",e["USERNAME_LABEL"]="Username *",e["USERNAME_PLACEHOLDER"]="Enter your username",e["VERIFY_CONTACT_EMAIL_LABEL"]="Email",e["VERIFY_CONTACT_HEADER_TEXT"]="Account recovery requires verified contact information",e["VERIFY_CONTACT_PHONE_LABEL"]="Phone Number",e["VERIFY_CONTACT_SUBMIT_LABEL"]="Submit",e["VERIFY_CONTACT_VERIFY_LABEL"]="Verify",e["ADDRESS_LABEL"]="Address",e["ADDRESS_PLACEHOLDER"]="Enter your address",e["NICKNAME_LABEL"]="Nickname",e["NICKNAME_PLACEHOLDER"]="Enter your nickname",e["BIRTHDATE_LABEL"]="Birthday",e["BIRTHDATE_PLACEHOLDER"]="Enter your birthday",e["PICTURE_LABEL"]="Picture URL",e["PICTURE_PLACEHOLDER"]="Enter your picture URL",e["FAMILY_NAME_LABEL"]="Family Name",e["FAMILY_NAME_PLACEHOLDER"]="Enter your family name",e["PREFERRED_USERNAME_LABEL"]="Preferred Username",e["PREFERRED_USERNAME_PLACEHOLDER"]="Enter your preferred username",e["GENDER_LABEL"]="Gender",e["GENDER_PLACEHOLDER"]="Enter your gender",e["PROFILE_LABEL"]="Profile URL",e["PROFILE_PLACEHOLDER"]="Enter your profile URL",e["GIVEN_NAME_LABEL"]="First Name",e["GIVEN_NAME_PLACEHOLDER"]="Enter your first name",e["ZONEINFO_LABEL"]="Time zone",e["ZONEINFO_PLACEHOLDER"]="Enter your time zone",e["LOCALE_LABEL"]="Locale",e["LOCALE_PLACEHOLDER"]="Enter your locale",e["UPDATED_AT_LABEL"]="Updated At",e["UPDATED_AT_PLACEHOLDER"]="Enter the time the information was last updated",e["MIDDLE_NAME_LABEL"]="Middle Name",e["MIDDLE_NAME_PLACEHOLDER"]="Enter your middle name",e["WEBSITE_LABEL"]="Website",e["WEBSITE_PLACEHOLDER"]="Enter your website",e["NAME_LABEL"]="Full Name",e["NAME_PLACEHOLDER"]="Enter your full name",e["PHOTO_PICKER_TITLE"]="Picker Title",e["PHOTO_PICKER_HINT"]="Ancillary text or content may occupy this space here",e["PHOTO_PICKER_PLACEHOLDER_HINT"]="Placeholder hint",e["PHOTO_PICKER_BUTTON_TEXT"]="Button",e["IMAGE_PICKER_TITLE"]="Add Profile Photo",e["IMAGE_PICKER_HINT"]="Preview the image before upload",e["IMAGE_PICKER_PLACEHOLDER_HINT"]="Tap to image select",e["IMAGE_PICKER_BUTTON_TEXT"]="Upload",e["PICKER_TEXT"]="Pick a file",e["TEXT_FALLBACK_CONTENT"]="Fallback Content",e["CONFIRM_SIGN_UP_FAILED"]="Confirm Sign Up Failed",e["SIGN_UP_FAILED"]="Sign Up Failed"})(a||(a={})),function(e){e["CHATBOT_TITLE"]="ChatBot Lex",e["TEXT_INPUT_PLACEHOLDER"]="Write a message",e["VOICE_INPUT_PLACEHOLDER"]="Click mic to speak",e["CHAT_DISABLED_ERROR"]="Error: Either voice or text must be enabled for the chatbot",e["NO_BOT_NAME_ERROR"]="Error: Bot name must be provided to ChatBot"}(r||(r={}));var o=Object.assign(Object.assign(Object.assign({},a),i["a"]),r)},"77e1":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_amazon_button",(function(){return h})),n.d(t,"amplify_auth0_button",(function(){return g})),n.d(t,"amplify_facebook_button",(function(){return L})),n.d(t,"amplify_google_button",(function(){return I})),n.d(t,"amplify_oauth_button",(function(){return T}));var a=n("4e0d"),r=n("7e87"),i=n("4c1e"),o=n("7a37"),u=n("ddb1"),c=n("6c18"),s=n("7585"),E=n("c55f"),l=function(e,t,n,a){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function u(e){try{c(a["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):r(e.value).then(o,u)}c((a=a.apply(e,t||[])).next())}))},_=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,a&&(r=2&i[0]?a["return"]:i[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(r=o.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},d=new r["a"]("amplify-amazon-button"),h=function(){function e(e){var t=this;Object(a["k"])(this,e),this.handleAuthStateChange=E["d"],this.federatedSignIn=function(e){var n=e.access_token,a=e.expires_in;if(n){if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);var r=new Date,i=1e3*a+r.getTime();window["amazon"].Login.retrieveProfile((function(e){return l(t,void 0,void 0,(function(){var t,a;return _(this,(function(r){switch(r.label){case 0:return e.success?(t={name:e.profile.Name,email:e.profile.PrimaryEmail},[4,u["a"].federatedSignIn("amazon",{token:n,expires_at:i},t)]):[2,d.debug("Get user Info failed")];case 1:return r.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return a=r.sent(),this.handleAuthStateChange(o["a"].SignedIn,a),[2]}}))}))}))}}}return e.prototype.signInWithAmazon=function(e){var t=this;e.preventDefault(),window["amazon"].Login.setClientId(this.clientId),window["amazon"].Login.authorize({scope:"profile"},(function(e){if(e.error)return d.debug("Failed to login with amazon: "+e.error);try{window.localStorage.setItem(s["s"],JSON.stringify({provider:"amazon"}))}catch(n){d.debug("Failed to cache auth source into localStorage",n)}t.federatedSignIn(e)}))},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithAmazon(t)},provider:"amazon"},Object(a["i"])("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),i["a"].get(c["a"].SIGN_IN_WITH_AMAZON))},e}(),f=new r["a"]("amplify-auth0-button"),g=function(){function e(e){var t=this;Object(a["k"])(this,e),this.handleAuthStateChange=E["d"],this.handleLoad=function(){var e=u["a"].configure().oauth,n=void 0===e?{}:e,a=t.config,r=void 0===a?n.auth0:a;r?(f.debug("auth0 configuration",r),t._auth0||(t._auth0=new window["auth0"].WebAuth(r)),t._auth0.parseHash((function(e,n){if(e)f.debug("Failed to parse the url for Auth0",e);else if(n){var a={provider:"auth0",opts:{returnTo:r.returnTo,clientID:r.clientID,federated:r.federated}};try{localStorage.setItem(s["s"],JSON.stringify(a))}catch(i){f.debug("Failed to cache auth source into localStorage",i)}t._auth0.client.userInfo(n.accessToken,(function(e,a){return l(t,void 0,void 0,(function(){var t,i,c;return _(this,(function(s){switch(s.label){case 0:return t=void 0,i=void 0,e?f.debug("Failed to get the user info",e):(t=a.name,i=a.email),[4,u["a"].federatedSignIn(r.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:t,email:i})];case 1:return s.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return c=s.sent(),this.handleAuthStateChange(o["a"].SignedIn,c),[2]}}))}))}))}else f.debug("Auth0 found no authResult in hash")}))):f.debug("Auth0 is not configured")}}return e.prototype.signInWithAuth0=function(e){if(e.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithAuth0(t)},provider:"auth0"},Object(a["i"])("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),i["a"].get(c["a"].SIGN_IN_WITH_AUTH0))},e}(),A=new r["a"]("amplify-facebook-button"),L=function(){function e(e){var t=this;Object(a["k"])(this,e),this.handleAuthStateChange=E["d"],this.federatedSignIn=function(e){var n=e.accessToken,a=e.expiresIn;if(n){if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);var r=new Date,i=1e3*a+r.getTime(),c="name,email";window["FB"].api("/me",{fields:c},(function(e){return l(t,void 0,void 0,(function(){var t,a;return _(this,(function(r){switch(r.label){case 0:return t={name:e.name,email:e.email},[4,u["a"].federatedSignIn("facebook",{token:n,expires_at:i},t)];case 1:return r.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return a=r.sent(),this.handleAuthStateChange(o["a"].SignedIn,a),[2]}}))}))}))}},this.getLoginStatus=function(){window["FB"].getLoginStatus((function(e){try{window.localStorage.setItem(s["s"],JSON.stringify({provider:"facebook"}))}catch(n){A.debug("Failed to cache auth source into localStorage",n)}if("connected"===e.status)return t.federatedSignIn(e.authResponse);t.login()}))},this.login=function(){var e="public_profile,email";window["FB"].login((function(e){e&&e.authResponse&&t.federatedSignIn(e.authResponse)}),{scope:e})}}return e.prototype.signInWithFacebook=function(e){e.preventDefault(),window["FB"].init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithFacebook(t)},provider:"facebook"},Object(a["i"])("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),i["a"].get(c["a"].SIGN_IN_WITH_FACEBOOK))},e}(),p=new r["a"]("amplify-google-button"),I=function(){function e(e){var t=this;Object(a["k"])(this,e),this.handleAuthStateChange=E["d"],this.handleError=function(e){console.error(e)},this.handleLoad=function(){window["gapi"].load("auth2")},this.handleUser=function(e){return l(t,void 0,void 0,(function(){var t,n,a,r,i;return _(this,(function(c){switch(c.label){case 0:if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);try{window.localStorage.setItem(s["s"],JSON.stringify({provider:"google"}))}catch(E){p.debug("Failed to cache auth source into localStorage",E)}return t=e.getAuthResponse(),n=t.id_token,a=t.expires_at,r=e.getBasicProfile(),[4,u["a"].federatedSignIn("google",{token:n,expires_at:a},{email:r.getEmail(),name:r.getName(),picture:r.getImageUrl()})];case 1:return c.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:i=c.sent();try{this.handleAuthStateChange(o["a"].SignedIn,i)}catch(l){this.handleError(l)}return[2]}}))}))}}return e.prototype.getAuthInstance=function(){return window["gapi"]&&window["gapi"].auth2?window["gapi"].auth2.getAuthInstance()||window["gapi"].auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},e.prototype.signInWithGoogle=function(e){e.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithGoogle(t)},provider:"google"},Object(a["i"])("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),i["a"].get(c["a"].SIGN_IN_WITH_GOOGLE))},e}(),T=function(){function e(e){Object(a["k"])(this,e),this.config={}}return e.prototype.signInWithOAuth=function(e){e.preventDefault(),u["a"].federatedSignIn()},e.prototype.render=function(){var e=this;return Object(a["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithOAuth(t)},provider:"oauth"},this.config.label||i["a"].get(c["a"].SIGN_IN_WITH_AWS))},e}()},c55f:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return L})),n.d(t,"i",(function(){return I}));var a=n("7e87"),r=n("103c"),i=n("4c1e"),o=n("7a37"),u=n("4984"),c=n("6c18"),s=n("7585"),E=function(e,t,n,a){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function u(e){try{c(a["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):r(e.value).then(o,u)}c((a=a.apply(e,t||[])).next())}))},l=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,a&&(r=2&i[0]?a["return"]:i[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(r=o.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},_=new a["a"]("helpers"),d=function(e){return!!e.shadowRoot&&!!e.attachShadow},h=function(e){r["a"].dispatch(s["i"],{event:s["h"],message:i["a"].get(e.message)})},f=function(e,t){r["a"].dispatch(s["i"],{event:s["j"],message:e,data:t})},g=function(e){if(!e.phoneNumberValue)throw new Error(s["e"]);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},A=function(e){if(!(e in o["d"]))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(o["d"]))},L=function(e){var t=function(t){return E(void 0,void 0,void 0,(function(){var n,a,r;return l(this,(function(i){switch(i.label){case 0:switch(n=t.payload,a=n.event,a){case s["j"]:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==o["a"].SignedIn)return[3,6];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,u["a"].currentAuthenticatedUser()];case 3:return r=i.sent(),e(n.message,r),[3,5];case 4:return i.sent(),_.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),i.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return r["a"].listen(s["i"],t),function(){return r["a"].remove(s["i"],t)}},p=function(e){return!(null===e["hint"]||"string"===typeof e["hint"])},I={address:{label:i["a"].get(c["a"].ADDRESS_LABEL),placeholder:i["a"].get(c["a"].ADDRESS_PLACEHOLDER)},nickname:{label:i["a"].get(c["a"].NICKNAME_LABEL),placeholder:i["a"].get(c["a"].NICKNAME_PLACEHOLDER)},birthdate:{label:i["a"].get(c["a"].BIRTHDATE_LABEL),placeholder:i["a"].get(c["a"].BIRTHDATE_PLACEHOLDER)},phone_number:{label:i["a"].get(c["a"].PHONE_LABEL),placeholder:i["a"].get(c["a"].PHONE_PLACEHOLDER)},email:{lable:i["a"].get(c["a"].EMAIL_LABEL),placeholder:i["a"].get(c["a"].EMAIL_PLACEHOLDER)},picture:{label:i["a"].get(c["a"].PICTURE_LABEL),placeholder:i["a"].get(c["a"].PICTURE_PLACEHOLDER)},family_name:{label:i["a"].get(c["a"].FAMILY_NAME_LABEL),placeholder:i["a"].get(c["a"].FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:i["a"].get(c["a"].PREFERRED_USERNAME_LABEL),placeholder:i["a"].get(c["a"].PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:i["a"].get(c["a"].GENDER_LABEL),placeholder:i["a"].get(c["a"].GENDER_PLACEHOLDER)},profile:{label:i["a"].get(c["a"].PROFILE_LABEL),placeholder:i["a"].get(c["a"].PROFILE_PLACEHOLDER)},given_name:{label:i["a"].get(c["a"].GIVEN_NAME_LABEL),placeholder:i["a"].get(c["a"].GIVEN_NAME_LABEL)},zoneinfo:{label:i["a"].get(c["a"].ZONEINFO_LABEL),placeholder:i["a"].get(c["a"].ZONEINFO_PLACEHOLDER)},locale:{label:i["a"].get(c["a"].LOCALE_LABEL),placeholder:i["a"].get(c["a"].LOCALE_PLACEHOLDER)},updated_at:{label:i["a"].get(c["a"].UPDATED_AT_LABEL),placeholder:i["a"].get(c["a"].UPDATED_AT_PLACEHOLDER)},middle_name:{label:i["a"].get(c["a"].MIDDLE_NAME_LABEL),placeholder:i["a"].get(c["a"].MIDDLE_NAME_PLACEHOLDER)},website:{label:i["a"].get(c["a"].WEBSITE_LABEL),placeholder:i["a"].get(c["a"].WEBSITE_PLACEHOLDER)},name:{label:i["a"].get(c["a"].NAME_LABEL),placeholder:i["a"].get(c["a"].NAME_PLACEHOLDER)}};function T(e,t){var n=e.target.name,a=e.target.value;n===s["b"]&&(t.countryDialCodeValue=a),n===s["k"]&&(t.phoneNumberValue=a)}}}]);
//# sourceMappingURL=chunk-78511423.539cd877.js.map