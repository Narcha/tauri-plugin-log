/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function n(n,t,e,r){return new(e||(e=Promise))((function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}a((r=r.apply(n,t||[])).next())}))}function t(n,t){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(n,u)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e,r=function(){return(r=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function o(n,t){void 0===t&&(t=!1);var e=function(){var n=new Int8Array(1);window.crypto.getRandomValues(n);var t=new Uint8Array(Math.max(16,Math.abs(n[0])));return window.crypto.getRandomValues(t),t.join("")}();return Object.defineProperty(window,e,{value:function(r){return t&&Reflect.deleteProperty(window,e),null==n?void 0:n(r)},writable:!1,configurable:!0}),e}function i(n,t){return void 0===t&&(t={}),function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,c)}a((r=r.apply(n,t||[])).next())}))}(this,void 0,void 0,(function(){return function(n,t){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(n,u)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(e){return[2,new Promise((function(e,i){var u=o((function(n){e(n),Reflect.deleteProperty(window,c)}),!0),c=o((function(n){i(n),Reflect.deleteProperty(window,u)}),!0);window.rpc.notify(n,r({__invokeKey:__TAURI_INVOKE_KEY__,callback:u,error:c},t))}))]}))}))}function u(e,r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,i("plugin:log|log",{level:e,message:r})];case 1:return n.sent(),[2]}}))}))}function c(r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,u(e.Trace,r)];case 1:return n.sent(),[2]}}))}))}function a(r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,u(e.Debug,r)];case 1:return n.sent(),[2]}}))}))}function l(r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,u(e.Info,r)];case 1:return n.sent(),[2]}}))}))}function s(r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,u(e.Warn,r)];case 1:return n.sent(),[2]}}))}))}function f(r){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,u(e.Error,r)];case 1:return n.sent(),[2]}}))}))}Object.freeze({__proto__:null,transformCallback:o,invoke:i,convertFileSrc:function(n){return navigator.userAgent.includes("Windows")?"https://asset.localhost/"+n:"asset://"+n}}),function(n){n[n.Trace=1]="Trace",n[n.Debug=2]="Debug",n[n.Info=3]="Info",n[n.Warn=4]="Warn",n[n.Error=5]="Error"}(e||(e={}));export{a as debug,f as error,l as info,c as trace,s as warn};