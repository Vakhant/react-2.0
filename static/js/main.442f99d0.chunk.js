(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(38),a=n(3),c="SEND-MESSAGE",o={dialogsData:[{id:"1",to:"/taras",name:"Taras"},{id:"2",to:"/sania",name:"Sania"},{id:"3",to:"/vasiania",name:"Vasiania"},{id:"4",to:"/tania",name:"Tania"},{id:"5",to:"/rita",name:"Rita"}],messagesData:[{id:1,messageText:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043a\u0430\u043a \u0434\u0435\u043b\u0430"},{id:2,messageText:"\u041a\u0430\u043a \u0442\u0432\u043e\u0435 It"},{id:3,messageText:"\u0415\u0449\u0435 \u043d\u0435 \u0430\u0445\u0442\u0438?"}]},i=function(t){return{type:c,newMessageBody:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;if(e.type===c){var n=e.newMessageBody;return Object(a.a)(Object(a.a)({},t),{},{newMessageBody:"",messagesData:[].concat(Object(r.a)(t.messagesData),[{id:6,messageText:n}])})}return t}},12:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n(128),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4c0190ce-47fb-4f9a-bd45-f9d2b960ef3c","Access-Control-Allow-Origin":"*"}}),c={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t),{withCredentials:!0})},unfollow:function(t){return a.delete("follow/".concat(t),{withCredentials:!0})}},o={getProfile:function(t){return a.get("profile/".concat(t))},getStatus:function(t){return a.get("profile/status/".concat(t))},updateProfile:function(t){return a.put("profile/status",{status:t})},savePhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(t){return a.put("profile",t)}},i={authMe:function(){return a.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},s={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},127:function(t,e,n){"use strict";n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return w})),n.d(e,"c",(function(){return _})),n.d(e,"b",(function(){return C})),n.d(e,"f",(function(){return S}));var r=n(15),a=n(38),c=n(3),o=n(8),i=n.n(o),s=n(12),u=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(c.a)(Object(c.a)({},t),r):t}))},l="FOLLOW",d="UNFOLLOW",f="SET_USERS",p="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",j="TOGGLE_IS_FETCHING",h="TOGGLE_FOLLOWING_IN_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},v=function(t){return{type:l,userId:t}},m=function(t){return{type:d,userId:t}},g=function(t){return{type:p,currentPage:t}},x=function(t){return{type:j,isFetching:t}},w=function(t,e){return{type:h,isFetching:t,userId:e}},_=function(t,e){return function(){var n=Object(r.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(g(t)),n.next=4,s.d.getUsers(t,e);case 4:a=n.sent,r(x(!1)),r((o=a.items,{type:f,users:o})),r((c=a.totalCount,{type:b,totalCount:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(t){return n.apply(this,arguments)}}()},y=function(){var t=Object(r.a)(i.a.mark((function t(e,n,r,a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w(!0,n)),t.next=3,r(n);case 3:0==t.sent.data.resultCode&&e(a(n)),e(w(!1,n));case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),C=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(n,t,s.d.follow.bind(s.d),v);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(n,t,s.d.unfollow.bind(s.d),m);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(c.a)(Object(c.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!0})});case d:return Object(c.a)(Object(c.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!1})});case f:return Object(c.a)(Object(c.a)({},t),{},{users:e.users});case p:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.currentPage});case b:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.totalCount});case j:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.isFetching});case h:return Object(c.a)(Object(c.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(a.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!=e.userId}))});default:return t}}},132:function(t,e,n){t.exports={content:"App_content__2HqPL"}},160:function(t,e,n){},25:function(t,e,n){t.exports={nav_block:"Aside_nav_block__j1osU",nav_block_active:"Aside_nav_block_active__dGs8f",hr:"Aside_hr__25PzA"}},293:function(t,e,n){},294:function(t,e,n){"use strict";n.r(e);n(160);var r=n(0),a=n.n(r),c=n(67),o=n.n(c),i=n(51),s=n(52),u=n(53),l=n(54),d=n(10),f=n(21),p=n(91),b=n(11),j=n(3),h=n(15),O=n(8),v=n.n(O),m=n(30),g=n(12),x="SET_USER_DATA",w="GET_CAPTCHA_URL_SUCCESS",_={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:case w:return Object(j.a)(Object(j.a)({},t),e.payload);default:return t}},C=function(t,e,n,r){return{type:x,payload:{userId:t,email:e,login:n,isAuth:r}}},S=function(t){return{type:w,payload:{captchaUrl:t}}},k=function(){return function(){var t=Object(h.a)(v.a.mark((function t(e){var n,r,a,c,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.authMe();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,e(C(a,c,o,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(){return function(){var t=Object(h.a)(v.a.mark((function t(e){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.c.getCaptchaUrl();case 2:n=t.sent,r=n.data.url,e(S(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P="INITIALIZED_SUCCESS",T={initialized:!1},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return e.type===P?Object(j.a)(Object(j.a)({},t),{},{initialized:!0}):t},U=n(20),I=n(102),N=n(93),R=n(127),L=n(131),D=n(126),F=Object(b.c)({profilePage:N.b,dialogsPage:I.a,usersPage:R.a,auth:y,form:D.a,app:A}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,z=Object(b.e)(F,M(Object(b.a)(L.a)));window._store=z;var G=z,B=n(132),H=n.n(B),V=n(66),W=n(25),q=n.n(W),J=n(2),K=function(){return Object(J.jsx)("aside",{children:Object(J.jsxs)("nav",{children:[Object(J.jsx)(f.b,{className:q.a.nav_block,to:"/Profile",activeClassName:q.a.nav_block_active,children:"Profile"}),Object(J.jsx)(f.b,{className:q.a.nav_block,to:"/Dialogs",activeClassName:q.a.nav_block_active,children:"Dialogs"}),Object(J.jsx)(f.b,{className:q.a.nav_block,to:"/Users",activeClassName:q.a.nav_block_active,children:"Users"}),Object(J.jsx)("div",{className:"hr"}),Object(J.jsx)(f.b,{className:q.a.nav_block,to:"Settings",activeClassName:q.a.nav_block_active,children:"Settings"})]})})},X=n(124),Z=n(125),Y=n(64),Q=n(43),$=Object(Z.a)({form:"login"})((function(t){var e=t.handleSubmit,n=t.error,r=t.captchaUrl;return Object(J.jsxs)("form",{onSubmit:e,children:[Object(J.jsx)(X.a,{validate:[Y.b],component:Q.a,name:"email",type:"text",placeholder:"Email"}),Object(J.jsx)(X.a,{validate:[Y.b],component:Q.a,name:"password",type:"text",placeholder:"Password"}),Object(J.jsx)(X.a,{component:Q.a,name:"rememberMe",type:"checkbox",placeholder:""}),Object(J.jsx)("label",{htmlFor:"",children:"remember me"}),r&&Object(J.jsx)(X.a,{validate:[Y.b],component:Q.a,name:"captcha",type:"text",placeholder:"captcha"}),r&&Object(J.jsx)("img",{src:r}),n&&Object(J.jsx)("div",{children:n}),Object(J.jsx)("button",{children:"Login"})]})})),tt=Object(U.b)((function(t){return{captchaUrl:t.auth.captchaUrl,isAuth:t.auth.isAuth}}),{login:function(t,e,n,r){return function(){var a=Object(h.a)(v.a.mark((function a(c){var o,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.login(t,e,n,r);case 2:0===(o=a.sent).data.resultCode?c(k()):(10===o.data.resultCode&&c(E()),i=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(m.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()}})((function(t){var e=t.login,n=t.isAuth,r=t.captchaUrl;return n?Object(J.jsx)(d.Redirect,{to:"/profile"}):Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Login"}),Object(J.jsx)($,{captchaUrl:r,onSubmit:function(t){e(t.email,t.password,t.rememberMe,t.captcha)}})]})})),et=n.p+"static/media/logo.0a3e94f5.svg",nt=(n(293),function(t){return Object(J.jsx)("header",{children:Object(J.jsxs)("div",{className:"wrap",children:[Object(J.jsx)("div",{className:"logo",children:Object(J.jsx)("img",{src:et,alt:""})}),Object(J.jsx)("div",{className:"lgn_block",children:t.isAuth?Object(J.jsxs)("div",{children:[t.login+" "," ",Object(J.jsx)("button",{onClick:t.logout,children:"logout"})]}):Object(J.jsx)(f.b,{to:"/login",children:"Login"})})]})})}),rt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(J.jsx)(nt,Object(j.a)({},this.props))}}]),n}(a.a.Component),at=Object(U.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:function(){return function(){var t=Object(h.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.logout();case 2:0===t.sent.data.resultCode&&e(C(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(rt),ct=function(t){return function(e){return Object(J.jsx)(r.Suspense,{fallback:Object(J.jsx)(V.a,{}),children:Object(J.jsx)(t,Object(j.a)({},e))})}},ot=a.a.lazy((function(){return n.e(4).then(n.bind(null,307))})),it=a.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),st=a.a.lazy((function(){return n.e(5).then(n.bind(null,308))})),ut=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).catchAllUnhadledErrors=function(t,e){alert("some error occured")},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhadledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhadledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(at,{}),Object(J.jsx)("main",{children:Object(J.jsxs)("div",{className:"wrap",children:[Object(J.jsx)(K,{}),Object(J.jsx)("div",{className:H.a.content,children:Object(J.jsxs)(d.Switch,{children:[Object(J.jsx)(d.Route,{exact:!0,path:"/",render:function(){d.Redirect}}),Object(J.jsx)(d.Route,{path:"/dialogs",render:ct(ot)}),Object(J.jsx)(d.Route,{path:"/profile/:userId?",render:ct(it)}),Object(J.jsx)(d.Route,{path:"/users",render:ct(st)}),Object(J.jsx)(d.Route,{path:"/login",render:ct(tt)}),Object(J.jsx)(d.Route,{path:"*",render:function(){}})]})})]})})]}):Object(J.jsx)(V.a,{})}}]),n}(a.a.Component),lt=Object(b.d)(p.withRouter,Object(U.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(k());Promise.all([e]).then((function(){t({type:P})}))}}}))(ut),dt=function(t){return Object(J.jsx)(f.a,{children:Object(J.jsx)(U.a,{store:G,children:Object(J.jsx)(lt,{})})})};o.a.render(Object(J.jsx)(dt,{}),document.getElementById("root"))},43:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n(3),a=n(72),c=n(50),o=n.n(c),i=n(2),s=["input","meta"],u=["input","meta"],l=function(t){var e=t.input,n=t.meta,c=n.touched,u=n.error,l=Object(a.a)(t,s),d=c&&u;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(d?o.a.error:""),children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},e),l)),d&&Object(i.jsx)("span",{children:u})]})},d=function(t){var e=t.input,n=t.meta,c=n.touched,s=n.error,l=Object(a.a)(t,u),d=c&&s;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(d?o.a.error:""),children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({},e),l)),d&&Object(i.jsx)("span",{children:s})]})}},50:function(t,e,n){t.exports={"form-control":"FormsControls_form-control__3MZN9",error:"FormsControls_error__3KVCs"}},64:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(t){if(!t)return"Field is required"},a=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t)}}},66:function(t,e,n){"use strict";var r=n.p+"static/media/preloader.9fed7e0b.gif",a=n(2);e.a=function(t){return Object(a.jsx)("img",{src:r})}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return w}));var r=n(15),a=n(38),c=n(3),o=n(8),i=n.n(o),s=n(30),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",p="DELETE_POST",b="SAVE_PHOTO_SUCCESS",j={profile:null,posts:[{id:1,likeCounts:4,message:"abracadabraa"},{id:2,likeCounts:15,message:"abracadabra"},{id:3,likeCounts:3,message:"abracadabr"},{id:4,likeCounts:11,message:"abracadab"}],status:""},h=function(t){return{type:l,newPostText:t}},O=function(t){return{type:f,status:t}},v=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getProfile(t);case 2:r=e.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getStatus(t);case 2:r=e.sent,n(O(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.b.updateProfile(t);case 3:0===e.sent.data.resultCode&&n(O(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.savePhoto(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(r.a)(i.a.mark((function e(n,r){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r().auth.userId,e.next=3,u.b.saveProfile(t);case 3:if(0!==(c=e.sent).data.resultCode){e.next=8;break}n(v(a)),e.next=11;break;case 8:return o=c.data.messages.length>0?c.data.messages[0]:"Some error",n(Object(s.a)("edit-profile",{_error:o})),e.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(c.a)(Object(c.a)({},t),{},{posts:[].concat(Object(a.a)(t.posts),[{id:5,likeCounts:25,message:e.newPostText}]),newPostText:""});case d:return Object(c.a)(Object(c.a)({},t),{},{profile:e.profile});case f:return Object(c.a)(Object(c.a)({},t),{},{status:e.status});case p:return Object(c.a)(Object(c.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!=e.postId}))});case b:return Object(c.a)(Object(c.a)({},t),{},{profile:Object(c.a)(Object(c.a)({},t.profile),{},{photos:e.photos})});default:return t}}}},[[294,1,2]]]);
//# sourceMappingURL=main.442f99d0.chunk.js.map