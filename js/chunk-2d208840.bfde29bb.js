(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208840"],{a4b9:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_radio_button",(function(){return y})),r.d(e,"amplify_totp_setup",(function(){return Ne}));var n=r("4e0d"),o=r("7e87"),i=r("4c1e"),a=r("7a37"),u=r("ddb1"),s=r("6c18"),f=r("7585"),h=r("c55f"),c=r("15b7"),l=r("b639"),d=r.n(l),g=function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{s(n.next(t))}catch(e){i(e)}}function u(t){try{s(n["throw"](t))}catch(e){i(e)}}function s(t){t.done?r(t.value):o(t.value).then(a,u)}s((n=n.apply(t,e||[])).next())}))},p=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return s([t,e])}}function s(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},v=":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}",y=function(){function t(t){Object(n["k"])(this,t),this.placeholder="",this.checked=!1,this.disabled=!1}return t.prototype.render=function(){return Object(n["i"])("span",{class:"radio-button"},Object(n["i"])("input",Object.assign({type:"radio",name:this.name,value:this.value,onInput:this.handleInputChange,placeholder:this.placeholder,id:this.fieldId,checked:this.checked,disabled:this.disabled},this.inputProps)),Object(n["i"])("amplify-label",{htmlFor:this.fieldId},this.label))},t}();y.style=v;var w=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then},m={}.toString,b=Array.isArray||function(t){return"[object Array]"==m.call(t)};function E(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(e){return!1}}A.TYPED_ARRAY_SUPPORT=E();var T=A.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function A(t,e,r){return A.TYPED_ARRAY_SUPPORT||this instanceof A?"number"===typeof t?R(this,t):O(this,t,e,r):new A(t,e,r)}function P(t){if(t>=T)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+T.toString(16)+" bytes");return 0|t}function C(t){return t!==t}function B(t,e){var r;return A.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e),r.__proto__=A.prototype):(r=t,null===r&&(r=new A(e)),r.length=e),r}function R(t,e){var r=B(t,e<0?0:0|P(e));if(!A.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)r[n]=0;return r}function I(t,e){var r=0|L(e),n=B(t,r),o=n.write(e);return o!==r&&(n=n.slice(0,o)),n}function _(t,e){for(var r=e.length<0?0:0|P(e.length),n=B(t,r),o=0;o<r;o+=1)n[o]=255&e[o];return n}function M(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),A.TYPED_ARRAY_SUPPORT?o.__proto__=A.prototype:o=_(t,o),o}function N(t,e){if(A.isBuffer(e)){var r=0|P(e.length),n=B(t,r);return 0===n.length||e.copy(n,0,0,r),n}if(e){if("undefined"!==typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!==typeof e.length||C(e.length)?B(t,0):_(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return _(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function S(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if(r=t.charCodeAt(a),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function L(t){if(A.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var e=t.length;return 0===e?0:S(t).length}function x(t,e,r,n){for(var o=0;o<n;++o){if(o+r>=e.length||o>=t.length)break;e[o+r]=t[o]}return o}function U(t,e,r,n){return x(S(e,t.length-r),t,r,n)}function O(t,e,r,n){if("number"===typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&e instanceof ArrayBuffer?M(t,e,r,n):"string"===typeof e?I(t,e):N(t,e)}A.TYPED_ARRAY_SUPPORT&&(A.prototype.__proto__=Uint8Array.prototype,A.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&A[Symbol.species]===A&&Object.defineProperty(A,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),A.prototype.write=function(t,e,r){void 0===e||void 0===r&&"string"===typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return U(this,t,e,r)},A.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t),A.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=A.prototype;else{var o=e-t;r=new A(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},A.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,i=n-r;if(this===t&&r<e&&e<n)for(o=i-1;o>=0;--o)t[o+e]=this[o+r];else if(i<1e3||!A.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+i),e);return i},A.prototype.fill=function(t,e,r){if("string"===typeof t){if("string"===typeof e?(e=0,r=this.length):"string"===typeof r&&(r=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"===typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"===typeof t)for(o=e;o<r;++o)this[o]=t;else{var i=A.isBuffer(t)?t:new A(t),a=i.length;for(o=0;o<r-e;++o)this[o+e]=i[o%a]}return this},A.concat=function(t,e){if(!b(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return B(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=R(null,e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(!A.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},A.byteLength=L,A.prototype._isBuffer=!0,A.isBuffer=function(t){return!(null==t||!t._isBuffer)};var k,Y=function(t){var e=new A(t);return e.fill(0),e},D=function(t){return new A(t)},F={alloc:Y,from:D},j=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],H=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},z=function(t){return j[t]},J=function(t){var e=0;while(0!==t)e++,t>>>=1;return e},K=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');k=t},q=function(){return"undefined"!==typeof k},V=function(t){return k(t)},Q={getSymbolSize:H,getSymbolTotalCodewords:z,getBCHDigit:J,setToSJISFunction:K,isKanjiModeEnabled:q,toSJIS:V};function $(t,e,r){return r={path:e,exports:{},require:function(t,e){return X()}},t(r,r.exports),r.exports}function X(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Z=$((function(t,e){function r(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch(o){return n}}}));function G(){this.buffer=[],this.length=0}G.prototype={get:function(t){var e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1===(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var W=G;function tt(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=F.alloc(t*t),this.reservedBit=F.alloc(t*t)}tt.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},tt.prototype.get=function(t,e){return this.data[t*this.size+e]},tt.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},tt.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var et=tt,rt=$((function(t,e){var r=Q.getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}})),nt=Q.getSymbolSize,ot=7,it=function(t){var e=nt(t);return[[0,0],[e-ot,0],[0,e-ot]]},at={getPositions:it},ut=$((function(t,e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r={N1:3,N2:3,N3:40,N4:10};function n(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var h=t.get(s,f);h===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=h,o=1),h=t.get(f,s),h===u?i++:(i>=5&&(n+=r.N1+(i-5)),u=h,i=1)}o>=5&&(n+=r.N1+(o-5)),i>=5&&(n+=r.N1+(i-5))}return n},e.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*r.N2},e.getPenaltyN3=function(t){for(var e=t.size,n=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var u=0;u<e;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&n++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&n++}return n*r.N3},e.getPenaltyN4=function(t){for(var e=0,n=t.data.length,o=0;o<n;o++)e+=t.data[o];var i=Math.abs(Math.ceil(100*e/n/5)-10);return i*r.N4},e.applyMask=function(t,e){for(var r=e.size,o=0;o<r;o++)for(var i=0;i<r;i++)e.isReserved(i,o)||e.xor(i,o,n(t,i,o))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var u=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),u<i&&(i=u,o=a)}return o}})),st=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ft=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],ht=function(t,e){switch(e){case Z.L:return st[4*(t-1)+0];case Z.M:return st[4*(t-1)+1];case Z.Q:return st[4*(t-1)+2];case Z.H:return st[4*(t-1)+3];default:return}},ct=function(t,e){switch(e){case Z.L:return ft[4*(t-1)+0];case Z.M:return ft[4*(t-1)+1];case Z.Q:return ft[4*(t-1)+2];case Z.H:return ft[4*(t-1)+3];default:return}},lt={getBlocksCount:ht,getTotalCodewordsCount:ct},dt=F.alloc(512),gt=F.alloc(256);(function(){for(var t=1,e=0;e<255;e++)dt[e]=t,gt[t]=e,t<<=1,256&t&&(t^=285);for(e=255;e<512;e++)dt[e]=dt[e-255]})();var pt=function(t){if(t<1)throw new Error("log("+t+")");return gt[t]},vt=function(t){return dt[t]},yt=function(t,e){return 0===t||0===e?0:dt[gt[t]+gt[e]]},wt={log:pt,exp:vt,mul:yt},mt=$((function(t,e){e.mul=function(t,e){for(var r=F.alloc(t.length+e.length-1),n=0;n<t.length;n++)for(var o=0;o<e.length;o++)r[n+o]^=wt.mul(t[n],e[o]);return r},e.mod=function(t,e){var r=F.from(t);while(r.length-e.length>=0){for(var n=r[0],o=0;o<e.length;o++)r[o]^=wt.mul(e[o],n);var i=0;while(i<r.length&&0===r[i])i++;r=r.slice(i)}return r},e.generateECPolynomial=function(t){for(var r=F.from([1]),n=0;n<t;n++)r=e.mul(r,[1,wt.exp(n)]);return r}})),bt=d.a.Buffer;function Et(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Et.prototype.initialize=function(t){this.degree=t,this.genPoly=mt.generateECPolynomial(this.degree)},Et.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=F.alloc(this.degree),r=bt.concat([t,e],t.length+this.degree),n=mt.mod(r,this.genPoly),o=this.degree-n.length;if(o>0){var i=F.alloc(this.degree);return n.copy(i,o),i}return n};var Tt=Et,At=function(t){return!isNaN(t)&&t>=1&&t<=40},Pt={isValid:At},Ct="[0-9]+",Bt="[A-Z $%*+\\-./:]+",Rt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Rt=Rt.replace(/u/g,"\\u");var It="(?:(?![A-Z0-9 $%*+\\-./:]|"+Rt+")(?:.|[\r\n]))+",_t=new RegExp(Rt,"g"),Mt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Nt=new RegExp(It,"g"),St=new RegExp(Ct,"g"),Lt=new RegExp(Bt,"g"),xt=new RegExp("^"+Rt+"$"),Ut=new RegExp("^"+Ct+"$"),Ot=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),kt=function(t){return xt.test(t)},Yt=function(t){return Ut.test(t)},Dt=function(t){return Ot.test(t)},Ft={KANJI:_t,BYTE_KANJI:Mt,BYTE:Nt,NUMERIC:St,ALPHANUMERIC:Lt,testKanji:kt,testNumeric:Yt,testAlphanumeric:Dt},jt=$((function(t,e){function r(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!Pt.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return Ft.testNumeric(t)?e.NUMERIC:Ft.testAlphanumeric(t)?e.ALPHANUMERIC:Ft.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return r(t)}catch(o){return n}}})),Ht=$((function(t,e){var r=7973,n=Q.getBCHDigit(r);function o(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}function i(t,e){return jt.getCharCountIndicator(t,e)+4}function a(t,e){var r=0;return t.forEach((function(t){var n=i(t.mode,e);r+=n+t.getBitsLength()})),r}function u(t,r){for(var n=1;n<=40;n++){var o=a(t,n);if(o<=e.getCapacity(n,r,jt.MIXED))return n}}e.from=function(t,e){return Pt.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!Pt.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=jt.BYTE);var n=Q.getSymbolTotalCodewords(t),o=lt.getTotalCodewordsCount(t,e),a=8*(n-o);if(r===jt.MIXED)return a;var u=a-i(r,t);switch(r){case jt.NUMERIC:return Math.floor(u/10*3);case jt.ALPHANUMERIC:return Math.floor(u/11*2);case jt.KANJI:return Math.floor(u/13);case jt.BYTE:default:return Math.floor(u/8)}},e.getBestVersionForData=function(t,e){var r,n=Z.from(e,Z.M);if(b(t)){if(t.length>1)return u(t,n);if(0===t.length)return 1;r=t[0]}else r=t;return o(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!Pt.isValid(t)||t<7)throw new Error("Invalid QR Code version");var e=t<<12;while(Q.getBCHDigit(e)-n>=0)e^=r<<Q.getBCHDigit(e)-n;return t<<12|e}})),zt=1335,Jt=21522,Kt=Q.getBCHDigit(zt),qt=function(t,e){var r=t.bit<<3|e,n=r<<10;while(Q.getBCHDigit(n)-Kt>=0)n^=zt<<Q.getBCHDigit(n)-Kt;return(r<<10|n)^Jt},Vt={getEncodedBits:qt};function Qt(t){this.mode=jt.NUMERIC,this.data=t.toString()}Qt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Qt.prototype.getLength=function(){return this.data.length},Qt.prototype.getBitsLength=function(){return Qt.getBitsLength(this.data.length)},Qt.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var $t=Qt,Xt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Zt(t){this.mode=jt.ALPHANUMERIC,this.data=t}Zt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},Zt.prototype.getLength=function(){return this.data.length},Zt.prototype.getBitsLength=function(){return Zt.getBitsLength(this.data.length)},Zt.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*Xt.indexOf(this.data[e]);r+=Xt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(Xt.indexOf(this.data[e]),6)};var Gt=Zt;function Wt(t){this.mode=jt.BYTE,this.data=F.from(t)}Wt.getBitsLength=function(t){return 8*t},Wt.prototype.getLength=function(){return this.data.length},Wt.prototype.getBitsLength=function(){return Wt.getBitsLength(this.data.length)},Wt.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var te=Wt;function ee(t){this.mode=jt.KANJI,this.data=t}ee.getBitsLength=function(t){return 13*t},ee.prototype.getLength=function(){return this.data.length},ee.prototype.getBitsLength=function(){return ee.getBitsLength(this.data.length)},ee.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=Q.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var re=ee,ne=$((function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,u,s,f,h,c,l,d,g,p=e.PriorityQueue.make();p.push(r,0);while(!p.empty())for(s in a=p.pop(),u=a.value,f=a.cost,h=t[u]||{},h)h.hasOwnProperty(s)&&(c=h[s],l=f+c,d=i[s],g="undefined"===typeof i[s],(g||d>l)&&(i[s]=l,p.push(s,l),o[s]=u));if("undefined"!==typeof n&&"undefined"===typeof i[n]){var v=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(v)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var r=[],n=e;while(n)r.push(n),n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e})),oe=$((function(t,e){function r(t){return unescape(encodeURIComponent(t)).length}function n(t,e,r){var n,o=[];while(null!==(n=t.exec(r)))o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function o(t){var e,r,o=n(Ft.NUMERIC,jt.NUMERIC,t),i=n(Ft.ALPHANUMERIC,jt.ALPHANUMERIC,t);Q.isKanjiModeEnabled()?(e=n(Ft.BYTE,jt.BYTE,t),r=n(Ft.KANJI,jt.KANJI,t)):(e=n(Ft.BYTE_KANJI,jt.BYTE,t),r=[]);var a=o.concat(i,e,r);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function i(t,e){switch(e){case jt.NUMERIC:return $t.getBitsLength(t);case jt.ALPHANUMERIC:return Gt.getBitsLength(t);case jt.KANJI:return re.getBitsLength(t);case jt.BYTE:return te.getBitsLength(t)}}function a(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function u(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case jt.NUMERIC:e.push([o,{data:o.data,mode:jt.ALPHANUMERIC,length:o.length},{data:o.data,mode:jt.BYTE,length:o.length}]);break;case jt.ALPHANUMERIC:e.push([o,{data:o.data,mode:jt.BYTE,length:o.length}]);break;case jt.KANJI:e.push([o,{data:o.data,mode:jt.BYTE,length:r(o.data)}]);break;case jt.BYTE:e.push([{data:o.data,mode:jt.BYTE,length:r(o.data)}])}}return e}function s(t,e){for(var r={},n={start:{}},o=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var h=u[f],c=""+a+f;s.push(c),r[c]={node:h,lastCount:0},n[c]={};for(var l=0;l<o.length;l++){var d=o[l];r[d]&&r[d].node.mode===h.mode?(n[d][c]=i(r[d].lastCount+h.length,h.mode)-i(r[d].lastCount,h.mode),r[d].lastCount+=h.length):(r[d]&&(r[d].lastCount=h.length),n[d][c]=i(h.length,h.mode)+4+jt.getCharCountIndicator(h.mode,e))}}o=s}for(l=0;l<o.length;l++)n[o[l]]["end"]=0;return{map:n,table:r}}function f(t,e){var r,n=jt.getBestModeForData(t);if(r=jt.from(e,n),r!==jt.BYTE&&r.bit<n.bit)throw new Error('"'+t+'" cannot be encoded with mode '+jt.toString(r)+".\n Suggested mode is: "+jt.toString(n));switch(r!==jt.KANJI||Q.isKanjiModeEnabled()||(r=jt.BYTE),r){case jt.NUMERIC:return new $t(t);case jt.ALPHANUMERIC:return new Gt(t);case jt.KANJI:return new re(t);case jt.BYTE:return new te(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(f(e,null)):e.data&&t.push(f(e.data,e.mode)),t}),[])},e.fromString=function(t,r){for(var n=o(t,Q.isKanjiModeEnabled()),i=u(n),f=s(i,r),h=ne.find_path(f.map,"start","end"),c=[],l=1;l<h.length-1;l++)c.push(f.table[h[l]].node);return e.fromArray(a(c))},e.rawSplit=function(t){return e.fromArray(o(t,Q.isKanjiModeEnabled()))}}));function ie(t,e){for(var r=t.size,n=at.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||r<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||r<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}function ae(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function ue(t,e){for(var r=rt.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}function se(t,e){for(var r,n,o,i=t.size,a=Ht.getEncodedBits(e),u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,o=1===(a>>u&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}function fe(t,e,r){var n,o,i=t.size,a=Vt.getEncodedBits(e,r);for(n=0;n<15;n++)o=1===(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function he(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,u=r-1;u>0;u-=2){6===u&&u--;while(1){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<e.length&&(f=1===(e[a]>>>i&1)),t.set(o,u-s,f),i--,-1===i&&(a++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}}function ce(t,e,r){var n=new W;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),jt.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=Q.getSymbolTotalCodewords(t),i=lt.getTotalCodewordsCount(t,e),a=8*(o-i);n.getLengthInBits()+4<=a&&n.put(0,4);while(n.getLengthInBits()%8!==0)n.putBit(0);for(var u=(a-n.getLengthInBits())/8,s=0;s<u;s++)n.put(s%2?17:236,8);return le(n,t,e)}function le(t,e,r){for(var n=Q.getSymbolTotalCodewords(e),o=lt.getTotalCodewordsCount(e,r),i=n-o,a=lt.getBlocksCount(e,r),u=n%a,s=a-u,f=Math.floor(n/a),h=Math.floor(i/a),c=h+1,l=f-h,d=new Tt(l),g=0,p=new Array(a),v=new Array(a),y=0,w=F.from(t.buffer),m=0;m<a;m++){var b=m<s?h:c;p[m]=w.slice(g,g+b),v[m]=d.encode(p[m]),g+=b,y=Math.max(y,b)}var E,T,A=F.alloc(n),P=0;for(E=0;E<y;E++)for(T=0;T<a;T++)E<p[T].length&&(A[P++]=p[T][E]);for(E=0;E<l;E++)for(T=0;T<a;T++)A[P++]=v[T][E];return A}function de(t,e,r,n){var o;if(b(t))o=oe.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");var i=e;if(!i){var a=oe.rawSplit(t);i=Ht.getBestVersionForData(a,r)}o=oe.fromString(t,i||40)}var u=Ht.getBestVersionForData(o,r);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else e=u;var s=ce(e,r,o),f=Q.getSymbolSize(e),h=new et(f);return ie(h,e),ae(h),ue(h,e),fe(h,r,0),e>=7&&se(h,e),he(h,s),isNaN(n)&&(n=ut.getBestMask(h,fe.bind(null,h,r))),ut.applyMask(n,h),fe(h,r,n),{modules:h,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}var ge=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");var r,n,o=Z.M;return"undefined"!==typeof e&&(o=Z.from(e.errorCorrectionLevel,Z.M),r=Ht.from(e.version),n=ut.from(e.maskPattern),e.toSJISFunc&&Q.setToSJISFunction(e.toSJISFunc)),de(t,r,o,n)},pe={create:ge},ve=$((function(t,e){function r(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],h=0;h<u;h++)for(var c=0;c<u;c++){var l=4*(h*u+c),d=n.color.light;if(h>=s&&c>=s&&h<u-s&&c<u-s){var g=Math.floor((h-s)/a),p=Math.floor((c-s)/a);d=f[i[g*o+p]?1:0]}t[l++]=d.r,t[l++]=d.g,t[l++]=d.b,t[l]=d.a}}})),ye=$((function(t,e){function r(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function n(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,o){var i=o,a=e;"undefined"!==typeof i||e&&e.getContext||(i=e,e=void 0),e||(a=n()),i=ve.getOptions(i);var u=ve.getImageWidth(t.modules.size,i),s=a.getContext("2d"),f=s.createImageData(u,u);return ve.qrToImageData(f.data,t,i),r(s,a,u),s.putImageData(f,0,0),a},e.renderToDataURL=function(t,r,n){var o=n;"undefined"!==typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}));function we(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function me(t,e,r){var n=t+e;return"undefined"!==typeof r&&(n+=" "+r),n}function be(t,e,r){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var s=Math.floor(u%e),f=Math.floor(u/e);s||i||(i=!0),t[u]?(a++,u>0&&s>0&&t[u-1]||(n+=i?me("M",s+r,.5+f+r):me("m",o,0),o=0,i=!1),s+1<e&&t[u+1]||(n+=me("h",a),a=0)):o++}return n}var Ee=function(t,e,r){var n=ve.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+we(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",s="<path "+we(n.color.dark,"stroke")+' d="'+be(i,o,n.margin)+'"/>',f='viewBox="0 0 '+a+" "+a+'"',h=n.width?'width="'+n.width+'" height="'+n.width+'" ':"",c='<svg xmlns="http://www.w3.org/2000/svg" '+h+f+' shape-rendering="crispEdges">'+u+s+"</svg>\n";return"function"===typeof r&&r(null,c),c},Te={render:Ee};function Ae(t,e,r,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"===typeof i[a-1];if(!u&&!w())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,i){try{var a=pe.create(r,n);o(t(a,e,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&"undefined"===typeof o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var s=pe.create(r,n);o(null,t(s,e,n))}catch(f){o(f)}}var Pe=pe.create,Ce=Ae.bind(null,ye.render),Be=Ae.bind(null,ye.renderToDataURL),Re=Ae.bind(null,(function(t,e,r){return Te.render(t,r)})),Ie={create:Pe,toCanvas:Ce,toDataURL:Be,toString:Re},_e=".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}",Me=new o["a"]("TOTP"),Ne=function(){function t(t){Object(n["k"])(this,t),this.inputProps={autoFocus:!0},this.handleAuthStateChange=h["d"],this.headerText=s["a"].TOTP_HEADER_TEXT,this.issuer=s["a"].TOTP_ISSUER,this.code=null,this.setupMessage=null,this.qrCodeInput=null,this.loading=!1}return t.prototype.componentWillLoad=function(){return g(this,void 0,void 0,(function(){var t=this;return p(this,(function(e){switch(e.label){case 0:return this.removeHubListener=Object(h["h"])((function(e){e===a["a"].TOTPSetup&&t.setup()})),[4,this.setup()];case 1:return e.sent(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.removeHubListener&&this.removeHubListener()},t.prototype.buildOtpAuthPath=function(t,e,r){return"otpauth://totp/"+e+":"+t.username+"?secret="+r+"&issuer="+e},t.prototype.onTOTPEvent=function(t,e,r){return g(this,void 0,void 0,(function(){return p(this,(function(n){switch(n.label){case 0:return Me.debug("on totp event",t,e),t!==f["g"]||e!==f["r"]?[3,2]:[4,Object(c["a"])(r,this.handleAuthStateChange)];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},t.prototype.handleTotpInputChange=function(t){this.setupMessage=null,this.qrCodeInput=t.target.value},t.prototype.generateQRCode=function(t){return g(this,void 0,void 0,(function(){var e,r;return p(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,Ie.toDataURL(t)];case 1:return e.qrCodeImageSource=n.sent(),[3,3];case 2:return r=n.sent(),Object(h["a"])(r),[3,3];case 3:return[2]}}))}))},t.prototype.setup=function(){return g(this,void 0,void 0,(function(){var t,e,r;return p(this,(function(n){switch(n.label){case 0:if(!this.user||"MFA_SETUP"!==this.user.challengeName||this.loading)return[2];if(this.setupMessage=null,t=encodeURI(i["a"].get(this.issuer)),!u["a"]||"function"!==typeof u["a"].setupTOTP)throw new Error(f["d"]);this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,u["a"].setupTOTP(this.user)];case 2:return e=n.sent(),Me.debug("secret key",e),this.code=this.buildOtpAuthPath(this.user,t,e),this.generateQRCode(this.code),[3,5];case 3:return r=n.sent(),Object(h["a"])(r),Me.debug(i["a"].get(s["a"].TOTP_SETUP_FAILURE),r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},t.prototype.verifyTotpToken=function(t){return g(this,void 0,void 0,(function(){var e,r;return p(this,(function(n){switch(n.label){case 0:if(t&&t.preventDefault(),!this.qrCodeInput)return Me.debug("No TOTP Code provided"),[2];if(e=this.user,!u["a"]||"function"!==typeof u["a"].verifyTotpToken||"function"!==typeof u["a"].setPreferredMFA)throw new Error(f["d"]);n.label=1;case 1:return n.trys.push([1,5,,6]),[4,u["a"].verifyTotpToken(e,this.qrCodeInput)];case 2:return n.sent(),[4,u["a"].setPreferredMFA(e,a["c"].TOTP)];case 3:return n.sent(),this.setupMessage=i["a"].get(s["a"].TOTP_SUCCESS_MESSAGE),Me.debug(i["a"].get(s["a"].TOTP_SUCCESS_MESSAGE)),[4,this.onTOTPEvent(f["g"],f["r"],e)];case 4:return n.sent(),[3,6];case 5:return r=n.sent(),this.setupMessage=i["a"].get(s["a"].TOTP_SETUP_FAILURE),Me.error(r),[3,6];case 6:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(n["i"])(n["b"],null,Object(n["i"])("amplify-form-section",{headerText:i["a"].get(this.headerText),submitButtonText:i["a"].get(s["a"].TOTP_SUBMIT_BUTTON_TEXT),handleSubmit:function(e){return t.verifyTotpToken(e)},loading:this.loading},Object(n["i"])("div",{class:"totp-setup"},this.qrCodeImageSource&&Object(n["i"])("img",{src:this.qrCodeImageSource,alt:i["a"].get(s["a"].QR_CODE_ALT)}),Object(n["i"])("amplify-form-field",{label:i["a"].get(s["a"].TOTP_LABEL),inputProps:this.inputProps,fieldId:"totpCode",name:"totpCode",handleInputChange:function(e){return t.handleTotpInputChange(e)}}))))},t}();Ne.style=_e}}]);
//# sourceMappingURL=chunk-2d208840.bfde29bb.js.map