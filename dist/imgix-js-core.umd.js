!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ImgixClient=e()}(this,function(){"use strict";function e(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function s(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach(function(t){var e,r;e=n,t=o[r=t],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function t(t,e){return t(e={exports:{}},e.exports),e.exports}function i(t){return null!=t&&(h(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&h(e.slice(0,0))||!!t._isBuffer);var e}var a=t(function(t){var i,r;i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];0<t;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var n=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?e.push(i.charAt(n>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,n=0;r<t.length;n=++r%4)0!=n&&e.push((i.indexOf(t.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|i.indexOf(t.charAt(r))>>>6-2*n);return e}},t.exports=r}),u={utf8:{stringToBytes:function(t){return u.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(u.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}},l=u;function h(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var d=t(function(t){var p,b,m,v,w;p=a,b=l.utf8,m=i,v=l.bin,(w=function(t,e){t.constructor==String?t=(e&&"binary"===e.encoding?v:b).stringToBytes(t):m(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=p.bytesToWords(t),t=8*t.length,n=1732584193,o=-271733879,i=-1732584194,a=271733878,u=0;u<r.length;u++)r[u]=16711935&(r[u]<<8|r[u]>>>24)|4278255360&(r[u]<<24|r[u]>>>8);r[t>>>5]|=128<<t%32,r[14+(64+t>>>9<<4)]=t;for(var s=w._ff,c=w._gg,f=w._hh,l=w._ii,u=0;u<r.length;u+=16){var h=n,d=o,y=i,g=a,n=s(n,o,i,a,r[u+0],7,-680876936),a=s(a,n,o,i,r[u+1],12,-389564586),i=s(i,a,n,o,r[u+2],17,606105819),o=s(o,i,a,n,r[u+3],22,-1044525330);n=s(n,o,i,a,r[u+4],7,-176418897),a=s(a,n,o,i,r[u+5],12,1200080426),i=s(i,a,n,o,r[u+6],17,-1473231341),o=s(o,i,a,n,r[u+7],22,-45705983),n=s(n,o,i,a,r[u+8],7,1770035416),a=s(a,n,o,i,r[u+9],12,-1958414417),i=s(i,a,n,o,r[u+10],17,-42063),o=s(o,i,a,n,r[u+11],22,-1990404162),n=s(n,o,i,a,r[u+12],7,1804603682),a=s(a,n,o,i,r[u+13],12,-40341101),i=s(i,a,n,o,r[u+14],17,-1502002290),n=c(n,o=s(o,i,a,n,r[u+15],22,1236535329),i,a,r[u+1],5,-165796510),a=c(a,n,o,i,r[u+6],9,-1069501632),i=c(i,a,n,o,r[u+11],14,643717713),o=c(o,i,a,n,r[u+0],20,-373897302),n=c(n,o,i,a,r[u+5],5,-701558691),a=c(a,n,o,i,r[u+10],9,38016083),i=c(i,a,n,o,r[u+15],14,-660478335),o=c(o,i,a,n,r[u+4],20,-405537848),n=c(n,o,i,a,r[u+9],5,568446438),a=c(a,n,o,i,r[u+14],9,-1019803690),i=c(i,a,n,o,r[u+3],14,-187363961),o=c(o,i,a,n,r[u+8],20,1163531501),n=c(n,o,i,a,r[u+13],5,-1444681467),a=c(a,n,o,i,r[u+2],9,-51403784),i=c(i,a,n,o,r[u+7],14,1735328473),n=f(n,o=c(o,i,a,n,r[u+12],20,-1926607734),i,a,r[u+5],4,-378558),a=f(a,n,o,i,r[u+8],11,-2022574463),i=f(i,a,n,o,r[u+11],16,1839030562),o=f(o,i,a,n,r[u+14],23,-35309556),n=f(n,o,i,a,r[u+1],4,-1530992060),a=f(a,n,o,i,r[u+4],11,1272893353),i=f(i,a,n,o,r[u+7],16,-155497632),o=f(o,i,a,n,r[u+10],23,-1094730640),n=f(n,o,i,a,r[u+13],4,681279174),a=f(a,n,o,i,r[u+0],11,-358537222),i=f(i,a,n,o,r[u+3],16,-722521979),o=f(o,i,a,n,r[u+6],23,76029189),n=f(n,o,i,a,r[u+9],4,-640364487),a=f(a,n,o,i,r[u+12],11,-421815835),i=f(i,a,n,o,r[u+15],16,530742520),n=l(n,o=f(o,i,a,n,r[u+2],23,-995338651),i,a,r[u+0],6,-198630844),a=l(a,n,o,i,r[u+7],10,1126891415),i=l(i,a,n,o,r[u+14],15,-1416354905),o=l(o,i,a,n,r[u+5],21,-57434055),n=l(n,o,i,a,r[u+12],6,1700485571),a=l(a,n,o,i,r[u+3],10,-1894986606),i=l(i,a,n,o,r[u+10],15,-1051523),o=l(o,i,a,n,r[u+1],21,-2054922799),n=l(n,o,i,a,r[u+8],6,1873313359),a=l(a,n,o,i,r[u+15],10,-30611744),i=l(i,a,n,o,r[u+6],15,-1560198380),o=l(o,i,a,n,r[u+13],21,1309151649),n=l(n,o,i,a,r[u+4],6,-145523070),a=l(a,n,o,i,r[u+11],10,-1120210379),i=l(i,a,n,o,r[u+2],15,718787259),o=l(o,i,a,n,r[u+9],21,-343485551),n=n+h>>>0,o=o+d>>>0,i=i+y>>>0,a=a+g>>>0}return p.endian([n,o,i,a])})._ff=function(t,e,r,n,o,i,a){a=t+(e&r|~e&n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._gg=function(t,e,r,n,o,i,a){a=t+(e&n|r&~n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._hh=function(t,e,r,n,o,i,a){a=t+(e^r^n)+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._ii=function(t,e,r,n,o,i,a){a=t+(r^(e|~n))+(o>>>0)+a;return(a<<i|a>>>32-i)+e},w._blocksize=16,w._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);t=p.wordsToBytes(w(t,e));return e&&e.asBytes?t:e&&e.asString?v.bytesToString(t):p.bytesToHex(t)}}),y="3.6.0",g="function"==typeof atob,p="function"==typeof btoa,b="function"==typeof Buffer;const m="function"==typeof TextDecoder?new TextDecoder:void 0,v="function"==typeof TextEncoder?new TextEncoder:void 0;const w=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],A=(t=>{let r={};return t.forEach((t,e)=>r[t]=e),r})(w),x=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,T=String.fromCharCode.bind(String),S="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=t=>t)=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),B=t=>t.replace(/[+\/]/g,t=>"+"==t?"-":"_").replace(/=+$/m,""),C=t=>t.replace(/[^A-Za-z0-9\+\/]/g,"");var P=e=>{let r,n,o,i,a="";var t=e.length%3;for(let t=0;t<e.length;){if(255<(n=e.charCodeAt(t++))||255<(o=e.charCodeAt(t++))||255<(i=e.charCodeAt(t++)))throw new TypeError("invalid character found");r=n<<16|o<<8|i,a+=w[r>>18&63]+w[r>>12&63]+w[r>>6&63]+w[63&r]}return t?a.slice(0,t-3)+"===".substring(t):a};const U=p?t=>btoa(t):b?t=>Buffer.from(t,"binary").toString("base64"):P,j=b?t=>Buffer.from(t).toString("base64"):r=>{let n=[];for(let t=0,e=r.length;t<e;t+=4096)n.push(T.apply(null,r.subarray(t,t+4096)));return U(n.join(""))},O=(t,e=!1)=>e?B(j(t)):j(t),I=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?T(192|e>>>6)+T(128|63&e):T(224|e>>>12&15)+T(128|e>>>6&63)+T(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return T(240|e>>>18&7)+T(128|e>>>12&63)+T(128|e>>>6&63)+T(128|63&e)},R=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,_=t=>t.replace(R,I),E=b?t=>Buffer.from(t,"utf8").toString("base64"):v?t=>j(v.encode(t)):t=>U(_(t)),F=(t,e=!1)=>e?B(E(t)):E(t);var k=t=>F(t,!0);const z=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,D=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return T(55296+(e>>>10))+T(56320+(1023&e));case 3:return T((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return T((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},L=t=>t.replace(z,D);p=e=>{if(e=e.replace(/\s+/g,""),!x.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let r,n="",o,i;for(let t=0;t<e.length;)r=A[e.charAt(t++)]<<18|A[e.charAt(t++)]<<12|(o=A[e.charAt(t++)])<<6|(i=A[e.charAt(t++)]),n+=64===o?T(r>>16&255):64===i?T(r>>16&255,r>>8&255):T(r>>16&255,r>>8&255,255&r);return n};const W=g?t=>atob(C(t)):b?t=>Buffer.from(t,"base64").toString("binary"):p,M=b?t=>S(Buffer.from(t,"base64")):t=>S(W(t),t=>t.charCodeAt(0)),Z=t=>M(q(t)),N=b?t=>Buffer.from(t,"base64").toString("utf8"):m?t=>m.decode(M(t)):t=>L(W(t)),q=t=>C(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),H=t=>N(q(t));const V=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),$=function(){var t=(t,e)=>Object.defineProperty(String.prototype,t,V(e));t("fromBase64",function(){return H(this)}),t("toBase64",function(t){return F(this,t)}),t("toBase64URI",function(){return F(this,!0)}),t("toBase64URL",function(){return F(this,!0)}),t("toUint8Array",function(){return Z(this)})},Q=function(){var t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,V(e));t("toBase64",function(t){return O(this,t)}),t("toBase64URI",function(){return O(this,!0)}),t("toBase64URL",function(){return O(this,!0)})};const G={version:y,VERSION:"3.6.0",atob:W,atobPolyfill:p,btoa:U,btoaPolyfill:P,fromBase64:H,toBase64:F,encode:F,encodeURI:k,encodeURL:k,utob:_,btou:L,decode:H,isValid:t=>{if("string"!=typeof t)return!1;t=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:O,toUint8Array:Z,extendString:$,extendUint8Array:Q,extendBuiltins:()=>{$(),Q()}};var J=/^(?:[a-z\d\-_]{1,62}\.){0,125}(?:[a-z\d](?:\-(?=\-*[a-z\d])|[a-z]|\d){0,62}\.)[a-z\d]{1,63}$/i,K={1:75,2:50,3:35,4:23,5:20},X={domain:null,useHTTPS:!0,includeLibraryParam:!0,urlPrefix:"https://",secureURLToken:null};function Y(t,e){if(!Number.isInteger(t)||!Number.isInteger(e)||t<=0||e<=0||e<t)throw new Error("The min and max srcset widths can only be passed positive Number values, and min must be less than max. Found min: ".concat(t," and max: ").concat(e,"."))}function tt(t){if("number"!=typeof t||t<.01)throw new Error("The srcset widthTolerance must be a number greater than or equal to 0.01")}return function(){function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),this.settings=s(s({},X),t),this.targetWidthsCache={},"string"!=typeof this.settings.domain)throw new Error("ImgixClient must be passed a valid string domain");if(null==J.exec(this.settings.domain))throw new Error('Domain must be passed in as fully-qualified domain name and should not include a protocol or any path element, i.e. "example.imgix.net".');this.settings.includeLibraryParam&&(this.settings.libraryParam="js-"+u.version()),this.settings.urlPrefix=this.settings.useHTTPS?"https://":"http://"}var t,e,r;return t=u,r=[{key:"version",value:function(){return"3.2.0"}},{key:"targetWidths",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:8192,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.08,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=Math.floor(t),i=Math.floor(e);Y(t,e),tt(r);e=r+"/"+o+"/"+i;if(e in n)return n[e];if(o===i)return[o];for(var a=[],u=o;u<i;)a.push(Math.round(u)),u*=1+2*r;return a[a.length-1]<i&&a.push(i),n[e]=a}}],(e=[{key:"buildURL",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=this._sanitizePath(t),e=this._buildParams(e);return this.settings.secureURLToken&&(e=this._signParams(t,e)),this.settings.urlPrefix+this.settings.domain+t+e}},{key:"_buildParams",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=[].concat(f(this.settings.libraryParam?["ixlib=".concat(this.settings.libraryParam)]:[]),f(Object.entries(t).reduce(function(t,e){var r=c(e,2),n=r[0],e=r[1];if(null==e)return t;r=encodeURIComponent(n),e="64"===n.substr(-2)?G.encodeURI(e):encodeURIComponent(e);return t.push("".concat(r,"=").concat(e)),t},[])));return"".concat(0<t.length?"?":"").concat(t.join("&"))}},{key:"_signParams",value:function(t,e){t=this.settings.secureURLToken+t+e,t=d(t);return 0<e.length?e+"&s="+t:"?s="+t}},{key:"_sanitizePath",value:function(t){t=t.replace(/^\//,"");return"/"+(t=/^https?:\/\//.test(t)?encodeURIComponent(t):encodeURI(t).replace(/[#?:+]/g,encodeURIComponent))}},{key:"buildSrcSet",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=e.w,o=e.h;return n||o?this._buildDPRSrcSet(t,e,r):this._buildSrcSetPairs(t,e,r)}},{key:"_buildSrcSetPairs",value:function(e,r,t){var n,o,i=this,o=c((o=void 0!==(n=t).widthTolerance?(tt(n.widthTolerance),n.widthTolerance):.08,a=void 0===n.minWidth?100:n.minWidth,n=void 0===n.maxWidth?8192:n.maxWidth,100==a&&8192==n||Y(a,n),[o,a,n]),3),a=o[0],n=o[1],o=o[2],a=t.widths?(function(t){if(!Array.isArray(t)||!t.length)throw new Error("The widths argument can only be passed a valid non-empty array of integers");if(!t.every(function(t){return Number.isInteger(t)&&0<t}))throw new Error("A custom widths argument can only contain positive integer values")}(t.widths),f(t.widths)):u.targetWidths(n,o,a,this.targetWidthsCache);return a.map(function(t){return"".concat(i.buildURL(e,s(s({},r),{},{w:t}))," ").concat(t,"w")}).join(",\n")}},{key:"_buildDPRSrcSet",value:function(n,o,t){var i=this,e=[1,2,3,4,5],t=t.disableVariableQuality||!1;t||function(t){if("boolean"!=typeof t)throw new Error("The disableVariableQuality argument can only be passed a Boolean value")}(t);return(t?e.map(function(t){return"".concat(i.buildURL(n,s(s({},o),{},{dpr:t}))," ").concat(t,"x")}):e.map(function(t){return e=n,r=o,t=t,"".concat(i.buildURL(e,s(s({},r),{},{dpr:t,q:r.q||K[t]}))," ").concat(t,"x");var e,r})).join(",\n")}}])&&n(t.prototype,e),r&&n(t,r),u}()});
