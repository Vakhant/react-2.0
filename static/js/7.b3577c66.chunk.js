(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{291:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(94);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(s){u=!0,c=s}finally{try{o||null==n.return||n.return()}finally{if(u)throw c}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},313:function(e,t,n){"use strict";n.r(t);var r=n(34),c=n(291),a=n(0),o=n(1),u=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e,t=function(){console.log("CLOSE WS"),setTimeout(n,3e3)};function n(){var n,c;null===(n=e)||void 0===n||n.removeEventListener("close",t),null===(c=e)||void 0===c||c.close(),(e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")).addEventListener("close",t),r(e)}return n(),function(){e.removeEventListener("close",t),e.close()}}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{wsChannel:n}),Object(o.jsx)(l,{wsChannel:n})]})},s=function(e){var t=e.wsChannel,n=Object(a.useState)([]),u=Object(c.a)(n,2),s=u[0],l=u[1];return Object(a.useEffect)((function(){var e=function(e){var t=JSON.parse(e.data);l((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))}))};return null===t||void 0===t||t.addEventListener("message",e),function(){null===t||void 0===t||t.removeEventListener("message",e)}}),[t]),Object(o.jsx)("div",{style:{height:"200px",overflowY:"auto"},children:s.map((function(e,t){return Object(o.jsx)(i,{message:e},t)}))})},i=function(e){var t=e.message;return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{width:"50px",src:t.photo,alt:""}),Object(o.jsx)("b",{children:t.userName}),Object(o.jsx)("br",{}),t.message]})},l=function(e){var t=e.wsChannel,n=Object(a.useState)(""),r=Object(c.a)(n,2),u=r[0],s=r[1],i=Object(a.useState)("pending"),l=Object(c.a)(i,2),d=l[0],j=l[1];Object(a.useEffect)((function(){var e=function(){j("ready")};return null===t||void 0===t||t.addEventListener("open",e),function(){null===t||void 0===t||t.removeEventListener("open",e)}}),[t]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",{onChange:function(e){return s(e.currentTarget.value)},value:u}),Object(o.jsx)("button",{disabled:null===t||"ready"!==d,onClick:function(){u&&(null===t||void 0===t||t.send(u),s(""))},children:"Send"})]})};t.default=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})}}}]);
//# sourceMappingURL=7.b3577c66.chunk.js.map