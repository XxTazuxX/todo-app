(this["webpackJsonpdpi-web-project-front-end"]=this["webpackJsonpdpi-web-project-front-end"]||[]).push([[0],{119:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(31),l=a.n(c),i=(a(119),a(12)),r=a(1),o=function(e){var t=e.name,a=e.details,s=e.options,n=e.authType,c=e.setAuth;return Object(r.jsxs)("div",{className:"py-16 px-6",children:[Object(r.jsx)("h2",{className:"text-4xl font-bold pb-4",children:t}),Object(r.jsx)("p",{className:"font-thin text-md sm:text-sm md:text-md",children:a}),Object(r.jsxs)("p",{className:"font-thin text-md sm:text-sm md:text-md",children:[s," ?"," ",Object(r.jsx)("a",{className:"font-bold",href:"#",onClick:c,children:n})]})]})},j=a(176),d=a(182),x=function(e){var t=e.loginFunc;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"flex flex-col justify-center items-start space-y-4",children:[Object(r.jsx)(j.a,{fullWidth:!0,id:"email",label:"Email",variant:"filled",size:"small"}),Object(r.jsx)(j.a,{fullWidth:!0,id:"password",label:"Password",type:"password",autoComplete:"current-password",variant:"filled",size:"small"})]}),Object(r.jsxs)("div",{className:"absolute bottom-12",children:[Object(r.jsx)("div",{className:"mt-8",children:Object(r.jsx)(d.a,{sx:{width:"90%",backgroundColor:"rgba(30, 58, 138)"},variant:"contained",onClick:t,children:"Login"})}),Object(r.jsxs)("p",{className:"mt-3 font-thin text-sm",children:["Forgot your password?"," ",Object(r.jsx)("a",{className:"text-blue-900",href:"#",children:"Forgot Password"})]})]})]})},b=function(e){var t=e.loginFunc;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"flex flex-col justify-center items-start space-y-4",children:[Object(r.jsx)(j.a,{fullWidth:!0,id:"username",label:"Username",variant:"filled",size:"small"}),Object(r.jsx)(j.a,{fullWidth:!0,id:"email",label:"Email",variant:"filled",size:"small"}),Object(r.jsx)(j.a,{fullWidth:!0,id:"password",label:"Password",type:"password",autoComplete:"current-password",variant:"filled",size:"small"}),Object(r.jsx)(j.a,{fullWidth:!0,id:"password-confirm",label:"Password",type:"password",autoComplete:"current-password",variant:"filled",size:"small"})]}),Object(r.jsx)("div",{className:"absolute bottom-12",children:Object(r.jsx)("div",{className:" mt-8",children:Object(r.jsx)(d.a,{fullWidth:!0,sx:{backgroundColor:"rgba(30, 58, 138)"},variant:"contained",onClick:t,children:"Sign Up"})})})]})},m={loginBox:{name:"login",details:"Log in and start creating your next task",options:"Do not have an account",authType:"Sign Up"},signUpBox:{name:"Sign Up",details:"Register and create an account on Todo List. Write your tasks anytime and anywhere",options:"Already have an account",authType:"Login"}},u=function(e){var t=e.loginFunc,a=Object(s.useState)(!0),n=Object(i.a)(a,2),c=n[0],l=n[1],j=c?m.loginBox:m.signUpBox,d=j.name,u=j.details,h=j.options,O=j.authType;return Object(r.jsx)("div",{className:"mx-auto h-screen flex sm:justify-center sm:items-center box-border bg-gray-300",children:Object(r.jsxs)("div",{className:"h-full w-full ".concat(c?"sm:h-3/6":"sm:h-4/6"," sm:w-5/6 md:w-4/6 flex ").concat(c?"flex-col":"flex-col-reverse"," ").concat(c?"sm:flex-row":"sm:flex-row-reverse"," sm:justify-center sm:items-center bg-white sm:rounded-2xl"),children:[Object(r.jsx)("div",{className:"h-full w-full sm:flex-1 bg-blue-900 sm:rounded-2xl text-white block",children:Object(r.jsx)(o,{name:d,details:u,options:h,authType:O,setAuth:function(){l(!c)}})}),Object(r.jsx)("div",{className:"h-full w-full sm:flex-1 sm:rounded-2xl block",children:Object(r.jsx)("div",{className:"relative h-full",children:Object(r.jsx)("form",{className:"py-8 px-6",children:c?Object(r.jsx)(x,{loginFunc:t}):Object(r.jsx)(b,{loginFunc:t})})})})]})})},h=a(95),O=a(183),p=a(184),f=a(178),v=a(173),g=a(179),k=a(81),w=a.n(k),y=a(80),N=a.n(y),T=a(79),C=a(35),S=T.a[400],F=C.a[900],W=function(e){var t=e.loginFunc,a=Object(s.useState)(null),n=Object(i.a)(a,2),c=n[0],l=n[1],o=Boolean(c),j=function(){l(null)};return Object(r.jsxs)("div",{className:"flex justify-between items-center px-8 py-3 box-border text-lg z-[105] border-b-{0.5px} border-gray-400",children:[Object(r.jsxs)("div",{className:"flex justify-center items-center ml-2",children:[Object(r.jsx)(N.a,{sx:{color:F,fontSize:"50px"}}),Object(r.jsx)("h1",{className:"ml-1 font-qahiri font-bold text-3xl text-blue-900",children:"Todo List"})]}),Object(r.jsxs)("div",{className:"flex justify-center items-center",children:[Object(r.jsxs)("div",{className:"flex justify-center items-center relative right-8 cursor-pointer",onClick:function(e){l(e.currentTarget)},children:[Object(r.jsx)("div",{className:"flex justify-center items-center text-xl text-gray-400",children:Object(r.jsx)("h3",{children:"Tazu"})}),Object(r.jsx)("div",{children:Object(r.jsx)(w.a,{sx:{color:S}})})]}),Object(r.jsx)(h.a,{id:"profile-menu",anchorEl:c,open:o,onClose:j,children:Object(r.jsxs)(O.a,{variant:"outlined",square:!0,sx:{width:120,textAlign:"center"},children:[Object(r.jsx)(p.a,{onClick:j,children:Object(r.jsx)(f.a,{sx:{color:S},children:"Profile"})}),Object(r.jsx)(v.a,{}),Object(r.jsx)(p.a,{onClick:function(){l(null),t()},children:Object(r.jsx)(f.a,{sx:{color:S},children:"Logout"})})]})}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{src:""})})]})]})},z=a(83),H=a.n(z),P=a(84),I=a.n(P),L=a(85),A=a.n(L),D=a(86),U=a.n(D),B=a(87),E=a.n(B),M=a(88),q=a.n(M),J=a(185),G=a(180),R=a(96),X=Object(R.a)({palette:{primary:{main:C.a[900]},secondary:{main:T.a[100]}}}),K=function(e){var t=e.name,a=e.icon,s=e.value,n=e.setStatus,c=a,l=e.status===s,i=l?"contained":"text",o=l?"primary":"secondary",j=l?T.a[100]:T.a[400],x=l?T.a[100]:T.a[400];return Object(r.jsx)("div",{className:"py-2 ml-1 md:ml-3",children:Object(r.jsx)(d.a,{theme:X,value:s,onClick:function(e){n(e.currentTarget.value)},size:"small",color:o,variant:i,style:{justifyContent:"flex-start"},startIcon:Object(r.jsx)(c,{sx:{color:j}}),children:Object(r.jsx)(G.a,{variant:"subtitle2",color:x,children:t})})})},Q=[{name:"All Tasks",icon:H.a,value:"all"},{name:"In Progress",icon:I.a,value:"progress"},{name:"Completed",icon:A.a,value:"complete"},{name:"Today",icon:U.a,value:"today"},{name:"Tomorrow",icon:E.a,value:"tomorrow"},{name:"Month",icon:q.a,value:"month"}],V=function(e){var t=e.setStatus,a=e.status;return Object(r.jsxs)("div",{className:"flex justify-center items-start py-[10px] px-[20px] flex-col",children:[Object(r.jsx)("h3",{className:"mt-4 py-[10px] px-1 md:px-4 text-sm text-gray-400",children:"Tasks Management"}),Object(r.jsx)(J.a,{orientation:"vertical",variant:"text","aria-label":"menu button",children:Q.map((function(e){var s=e.name,n=e.icon,c=e.value;return Object(r.jsx)(K,{value:c,setStatus:t,status:a,name:s,icon:n},s)}))})]})},Y=a(181),Z=a(94),$=a.n(Z),_=a(33),ee=a(186),te=a(187),ae=a(188),se=a(189),ne=a(175),ce=a(169),le=a(174),ie=a(37),re=a(36),oe=a(89),je=a.n(oe),de=a(90),xe=a.n(de),be=a(91),me=a.n(be),ue=a(93),he=a.n(ue),Oe=a(92),pe=a.n(Oe),fe=function(e){var t=e.title,a=e.description,s=e.date,n=e.task,c=e.tasks,l=e.setTasks,i=n.complete,o=le.a[800];switch(n.important){case"low":o=le.a[800];break;case"medium":o=ie.a[800];break;case"high":o=re.a[800]}return Object(r.jsxs)(ee.a,{elevation:4,children:[Object(r.jsx)(te.a,{title:Object(r.jsx)(G.a,{variant:"h6",color:T.a[700],children:t}),action:Object(r.jsx)(p.a,{onClick:function(){l(c.filter((function(e){return e.id!==n.id})))},"aria-label":"delete",children:Object(r.jsx)(je.a,{})})}),Object(r.jsx)(ae.a,{sx:{height:150,overflow:"auto"},children:a}),Object(r.jsxs)(se.a,{disableSpacing:!0,sx:{bottom:1},children:[Object(r.jsxs)(p.a,{"aria-label":"date",children:[Object(r.jsx)(xe.a,{}),Object(r.jsx)(G.a,{variant:"subtitle2",fontWeight:"bold",color:T.a[900],children:s})]}),Object(r.jsx)(p.a,{"aria-label":"important",children:Object(r.jsx)(me.a,{sx:{color:o}})}),Object(r.jsx)(ne.a,{TransitionComponent:ce.a,TransitionProps:{timeout:600},placement:"top",arrow:!0,title:i?"Completed":"In Progress",children:Object(r.jsx)(p.a,{onClick:function(){l(c.map((function(e){return e.id===n.id?Object(_.a)(Object(_.a)({},e),{},{complete:!e.complete}):e})))},"aria-label":"complete",children:i?Object(r.jsx)(pe.a,{}):Object(r.jsx)(he.a,{})})})]})]})},ve=Object(R.a)({palette:{primary:{main:C.a[900]}}}),ge=function(e){var t=e.newTaskHandler,a=e.tasks,s=e.setTasks,n=e.filteredTasks;return Object(r.jsxs)("div",{className:"pb-2",children:[Object(r.jsxs)("div",{className:"flex justify-between px-11 py-10",children:[Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)("h3",{className:"text-blue-900 font-bold text-xl sm:text-3xl md:text-5xl",children:["All Tasks",Object(r.jsx)("span",{className:"font-light text-xs sm:text-base md:text-xl text-gray-400 ml-1 mt-4",children:"(0)"})]})}),Object(r.jsx)(Y.a,{icon:Object(r.jsx)($.a,{}),theme:ve,color:"primary",label:"New Task",sx:{maxWidth:"110px",maxHeight:"40px",minWidth:"110px",minHeight:"40px"},onClick:t})]}),Object(r.jsx)("div",{className:"flex justify-center items-start px-4",children:Object(r.jsx)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:n.map((function(e){return Object(r.jsx)(fe,{task:e,tasks:a,setTasks:s,title:e.title,description:e.description,date:e.date},e.id)}))})})]})},ke=function(e){var t=e.newTaskHandler,a=e.tasks,s=e.setTasks,n=e.setStatus,c=e.status,l=e.filteredTasks;return Object(r.jsxs)("div",{className:"flex z-[15] box-border",children:[Object(r.jsx)("div",{className:"w-[32%] md:w-1/5 h-[88vh] border-r-[0.5px] border-gray-400",children:Object(r.jsx)(V,{setStatus:n,status:c})}),Object(r.jsx)("div",{className:"w-[68%] md:w-[80%] h-[88vh] pb-10 overflow-y-auto",children:Object(r.jsx)(ge,{tasks:a,setTasks:s,newTaskHandler:t,filteredTasks:l})})]})},we=a(15),ye=a(3),Ne=[{value:"low",label:"LOW"},{value:"medium",label:"MEDIUM"},{value:"high",label:"HIGH"}],Te=function(e){var t=e.tasks,a=e.setTasks,s=e.newTask,n=e.setNewTask,c=e.newTaskHandler,l=function(e){var t=e.target.name,a=e.target.value;n(Object(_.a)(Object(_.a)({},s),{},Object(ye.a)({},t,a)))};return Object(r.jsx)("form",{children:Object(r.jsx)("div",{id:"new-task",children:Object(r.jsxs)("div",{className:"newTask",children:[Object(r.jsxs)("div",{className:"input-content",children:[Object(r.jsx)("h3",{children:"Title"}),Object(r.jsx)("input",{value:s.title,onChange:l,className:"title-input",type:"text",name:"title",placeholder:"What needs be done ?"})]}),Object(r.jsxs)("div",{className:"input-content",children:[Object(r.jsx)("h3",{children:"Description"}),Object(r.jsx)("textarea",{value:s.description,onChange:l,type:"text",name:"description",placeholder:"Description about this task"})]}),Object(r.jsxs)("div",{className:"input-content",children:[Object(r.jsx)("h3",{children:"Date picker"}),Object(r.jsx)(j.a,{id:"date",name:"date",value:s.date,onChange:l,variant:"outlined"})]}),Object(r.jsx)("div",{className:"input-content",children:Object(r.jsx)(j.a,{id:"Importance-select",name:"important",select:!0,label:"Importance",value:s.importance,onChange:l,helperText:"Please select your importance Level",children:Ne.map((function(e){return Object(r.jsx)(f.a,{value:e.value,children:e.label},e.value)}))})}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),a([].concat(Object(we.a)(t),[Object(_.a)(Object(_.a)({},s),{},{complete:!1,id:(new Date).getTime().toString()})])),n({title:"",description:"",date:"31/10/2021",important:""}),c()},className:"btnNew",children:"Add New Task"}),Object(r.jsx)("p",{className:"close",onClick:c,children:"X"})]})})})},Ce=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),l=Object(i.a)(c,2),o=l[0],j=l[1],d=Object(s.useState)({title:"",description:"",date:"31/10/2021",important:""}),x=Object(i.a)(d,2),b=x[0],m=x[1],h=Object(s.useState)([]),O=Object(i.a)(h,2),p=O[0],f=O[1],v=Object(s.useState)("all"),g=Object(i.a)(v,2),k=g[0],w=g[1],y=Object(s.useState)([]),N=Object(i.a)(y,2),T=N[0],C=N[1];Object(s.useEffect)((function(){S()}),[p,k]);var S=function(){switch(k){case"progress":C(p.filter((function(e){return!1===e.complete})));break;case"complete":C(p.filter((function(e){return!0===e.complete})));break;default:C(p)}},F=function(){n(!a)},z=function(){j(!o)};return Object(r.jsxs)("div",{children:[o&&Object(r.jsx)(Te,{newTask:b,setNewTask:m,tasks:p,setTasks:f,newTaskHandler:z}),a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{loginFunc:F}),Object(r.jsx)(ke,{tasks:p,setTasks:f,setStatus:w,status:k,filteredTasks:T,newTaskHandler:z})]}):Object(r.jsx)(u,{loginFunc:F})]})};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(Ce,{})}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.5a2be734.chunk.js.map