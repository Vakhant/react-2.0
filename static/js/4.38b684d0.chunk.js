(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{297:function(e,s,t){"use strict";t.d(s,"a",(function(){return g}));var a=t(3),n=t(51),i=t(52),c=t(53),o=t(54),r=t(0),l=t.n(r),d=t(20),u=t(91),j=t(2),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(a.a)({},this.props)):Object(j.jsx)(u.Redirect,{to:"/login"})}}]),r}(l.a.Component);return Object(d.b)(b)(s)}},300:function(e,s,t){e.exports={dialogs_list_block:"DialogNavBlock_dialogs_list_block__W5euU"}},301:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__LrdA6",dialogs_list:"Dialogs_dialogs_list__3BoOj",dialogs_messages_list:"Dialogs_dialogs_messages_list__21gmo"}},302:function(e,s,t){},307:function(e,s,t){"use strict";t.r(s);var a=t(20),n=t(11),i=t(297),c=t(102),o=t(124),r=t(125),l=t(21),d=t(300),u=t.n(d),j=t(2),b=function(e){return Object(j.jsx)(l.b,{to:"/dialogs".concat(e.to),className:u.a.dialogs_list_block,children:e.name})},g=t(301),m=t.n(g),_=t(302),O=t.n(_),f=function(e){return Object(j.jsx)("div",{className:O.a.dialogs_messages_list_block,children:e.messageText})},h=t(43),p=t(64),x=Object(p.a)(20),v=Object(r.a)({form:"dialogAddMessageForm"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.a,{component:h.b,validate:[p.b,x],name:"newMessageBody",placeholder:"enter your message"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"send"})})]})})),k=function(e){e.state;var s=e.state.dialogsData.map((function(e){return Object(j.jsx)(b,{name:e.name,to:e.to,id:e.id})})),t=e.state.messagesData.map((function(e){return Object(j.jsx)(f,{messageText:e.messageText,id:e.id})}));return Object(j.jsxs)("div",{className:m.a.dialogs,children:[Object(j.jsx)("div",{className:m.a.dialogs_list,children:s}),Object(j.jsxs)("div",{className:m.a.dialogs_messages_list,children:[Object(j.jsx)("div",{children:t}),Object(j.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})};s.default=Object(n.d)(Object(a.b)((function(e){return{state:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(c.b)(s))}}})),i.a)(k)}}]);
//# sourceMappingURL=4.38b684d0.chunk.js.map