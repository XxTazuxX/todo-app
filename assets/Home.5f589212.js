import{l as P,m as fe,n as J,p as me,q as Q,t as X,u as I,j as i,B as be,v as ge,b as _,w as xe,x as he,z as $e,C as Y,D as l,E as m,_ as b,r as v,H as Ce,I as ye,J as _e,K as ke,N as Z,P as x,h as Ie}from"./vendor.aa147f56.js";import{c as h,i as $,r as C}from"./jsx-runtime_commonjs-proxy.d8ab21b4.js";import{B as ze}from"./ButtonGroup.ae77f890.js";import{_ as Re,d as je}from"./index.346697f9.js";function De(e){return P(1,arguments),fe(Date.now(),e)}function Te(e){return P(1,arguments),J(e,Date.now())}function Me(e){return P(1,arguments),J(e,me(Date.now(),1))}var S={},Pe=$.exports;Object.defineProperty(S,"__esModule",{value:!0});var ee=S.default=void 0,Se=Pe(h),Ne=C,Oe=(0,Se.default)((0,Ne.jsx)("path",{d:"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"}),"Reorder");ee=S.default=Oe;var N={},Ve=$.exports;Object.defineProperty(N,"__esModule",{value:!0});var ae=N.default=void 0,Le=Ve(h),He=C,we=(0,Le.default)((0,He.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");ae=N.default=we;var O={},Ee=$.exports;Object.defineProperty(O,"__esModule",{value:!0});var oe=O.default=void 0,qe=Ee(h),Ke=C,Be=(0,qe.default)((0,Ke.jsx)("path",{d:"m19.77 5.03 1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"}),"DoneOutline");oe=O.default=Be;var V={},Ue=$.exports;Object.defineProperty(V,"__esModule",{value:!0});var te=V.default=void 0,Ae=Ue(h),Fe=C,We=(0,Ae.default)((0,Fe.jsx)("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");te=V.default=We;var L={},Ge=$.exports;Object.defineProperty(L,"__esModule",{value:!0});var le=L.default=void 0,Je=Ge(h),Qe=C,Xe=(0,Je.default)((0,Qe.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 11.97h-5l2.26-2.26c-.91-1.06-2.25-1.74-3.76-1.74-2.37 0-4.35 1.66-4.86 3.88l-.96-.32c.64-2.62 3-4.56 5.82-4.56 1.78 0 3.37.79 4.47 2.03L18 8.97v5z"}),"NextPlan");le=L.default=Xe;var H={},Ye=$.exports;Object.defineProperty(H,"__esModule",{value:!0});var re=H.default=void 0,Ze=Ye(h),ea=C,aa=(0,Ze.default)((0,ea.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),"CalendarToday");re=H.default=aa;const oa=Q({palette:{primary:{main:X[900]},secondary:{main:I[100]}}}),ta=({name:e,icon:a,value:c,status:o,setStatus:r})=>{const p=a,s=o===c,u=s?"contained":"text",d=s?"primary":"secondary",y=s?I[100]:I[400],z=s?I[100]:I[400];return i("div",{className:"py-3 ml-[1px] md:ml-3",children:i(be,{theme:oa,value:c,onClick:R=>{r(R.currentTarget.value)},size:"small",color:d,variant:u,style:{justifyContent:"flex-start"},startIcon:i(p,{sx:{color:y}}),children:i(ge,{variant:"subtitle2",color:z,children:e})})})},la=[{name:"All Tasks",icon:ee,value:"all"},{name:"In Progress",icon:ae,value:"progress"},{name:"Completed",icon:oe,value:"complete"},{name:"Today",icon:te,value:"today"},{name:"Tomorrow",icon:le,value:"tomorrow"},{name:"Month",icon:re,value:"month"}],ra=({status:e,setStatus:a})=>_("div",{className:"flex justify-center items-start py-[10px] px-[10px] flex-col",children:[i("h3",{className:"mt-4 py-[10px] px-1 md:px-4 text-sm text-gray-400",children:"Tasks Management"}),i(ze,{orientation:"vertical",variant:"text","aria-label":"menu button",children:la.map(({name:c,icon:o,value:r})=>i(ta,{value:r,name:c,icon:o,status:e,setStatus:a},c))})]});var ia=xe(i("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ca(e){return he("MuiChip",e)}const na=$e("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);var t=na;const sa=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],da=e=>{const{classes:a,disabled:c,size:o,color:r,onDelete:p,clickable:s,variant:u}=e,d={root:["root",u,c&&"disabled",`size${l(o)}`,`color${l(r)}`,s&&"clickable",s&&`clickableColor${l(r)}`,p&&"deletable",p&&`deletableColor${l(r)}`,`${u}${l(r)}`],label:["label",`label${l(o)}`],avatar:["avatar",`avatar${l(o)}`,`avatarColor${l(r)}`],icon:["icon",`icon${l(o)}`,`iconColor${l(r)}`],deleteIcon:["deleteIcon",`deleteIcon${l(o)}`,`deleteIconColor${l(r)}`,`deleteIconOutlinedColor${l(r)}`]};return ke(d,ca,a)},ua=Y("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:c}=e,{color:o,clickable:r,onDelete:p,size:s,variant:u}=c;return[{[`& .${t.avatar}`]:a.avatar},{[`& .${t.avatar}`]:a[`avatar${l(s)}`]},{[`& .${t.avatar}`]:a[`avatarColor${l(o)}`]},{[`& .${t.icon}`]:a.icon},{[`& .${t.icon}`]:a[`icon${l(s)}`]},{[`& .${t.icon}`]:a[`iconColor${l(o)}`]},{[`& .${t.deleteIcon}`]:a.deleteIcon},{[`& .${t.deleteIcon}`]:a[`deleteIcon${l(s)}`]},{[`& .${t.deleteIcon}`]:a[`deleteIconColor${l(o)}`]},{[`& .${t.deleteIcon}`]:a[`deleteIconOutlinedColor${l(o)}`]},a.root,a[`size${l(s)}`],a[`color${l(o)}`],r&&a.clickable,r&&o!=="default"&&a[`clickableColor${l(o)})`],p&&a.deletable,p&&o!=="default"&&a[`deletableColor${l(o)}`],a[u],u==="outlined"&&a[`outlined${l(o)}`]]}})(({theme:e,ownerState:a})=>{const c=m(e.palette.text.primary,.26);return b({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${t.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${t.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${t.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${t.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${t.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${t.icon}`]:b({color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.color!=="default"&&{color:"inherit"}),[`& .${t.deleteIcon}`]:b({WebkitTapHighlightColor:"transparent",color:c,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:m(c,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:m(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:e.palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:e.palette[a.color].main,color:e.palette[a.color].contrastText},a.onDelete&&{[`&.${t.focusVisible}`]:{backgroundColor:m(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${t.focusVisible}`]:{backgroundColor:e.palette[a.color].dark}})},({theme:e,ownerState:a})=>b({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:m(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${t.focusVisible}`]:{backgroundColor:m(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${t.focusVisible}`]:{backgroundColor:e.palette[a.color].dark}}),({theme:e,ownerState:a})=>b({},a.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${t.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${t.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${t.avatar}`]:{marginLeft:4},[`& .${t.avatarSmall}`]:{marginLeft:2},[`& .${t.icon}`]:{marginLeft:4},[`& .${t.iconSmall}`]:{marginLeft:2},[`& .${t.deleteIcon}`]:{marginRight:5},[`& .${t.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:e.palette[a.color].main,border:`1px solid ${m(e.palette[a.color].main,.7)}`,[`&.${t.clickable}:hover`]:{backgroundColor:m(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${t.focusVisible}`]:{backgroundColor:m(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${t.deleteIcon}`]:{color:m(e.palette[a.color].main,.7),"&:hover, &:active":{color:e.palette[a.color].main}}})),pa=Y("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:c}=e,{size:o}=c;return[a.label,a[`label${l(o)}`]]}})(({ownerState:e})=>b({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function ie(e){return e.key==="Backspace"||e.key==="Delete"}const va=v.exports.forwardRef(function(a,c){const o=Ce({props:a,name:"MuiChip"}),{avatar:r,className:p,clickable:s,color:u="default",component:d,deleteIcon:y,disabled:z=!1,icon:k,label:R,onClick:E,onDelete:g,onKeyDown:q,onKeyUp:K,size:B="medium",variant:U="filled"}=o,ne=ye(o,sa),j=v.exports.useRef(null),se=_e(j,c),A=n=>{n.stopPropagation(),g&&g(n)},de=n=>{n.currentTarget===n.target&&ie(n)&&n.preventDefault(),q&&q(n)},ue=n=>{n.currentTarget===n.target&&(g&&ie(n)?g(n):n.key==="Escape"&&j.current&&j.current.blur()),K&&K(n)},D=s!==!1&&E?!0:s,pe=B==="small",T=D||g?Z:d||"div",M=b({},o,{component:T,disabled:z,size:B,color:u,onDelete:!!g,clickable:D,variant:U}),f=da(M),ve=T===Z?b({component:d||"div",focusVisibleClassName:f.focusVisible},g&&{disableRipple:!0}):{};let F=null;if(g){const n=x(u!=="default"&&(U==="outlined"?f[`deleteIconOutlinedColor${l(u)}`]:f[`deleteIconColor${l(u)}`]),pe&&f.deleteIconSmall);F=y&&v.exports.isValidElement(y)?v.exports.cloneElement(y,{className:x(y.props.className,f.deleteIcon,n),onClick:A}):i(ia,{className:x(f.deleteIcon,n),onClick:A})}let W=null;r&&v.exports.isValidElement(r)&&(W=v.exports.cloneElement(r,{className:x(f.avatar,r.props.className)}));let G=null;return k&&v.exports.isValidElement(k)&&(G=v.exports.cloneElement(k,{className:x(f.icon,k.props.className)})),_(ua,b({as:T,className:x(f.root,p),disabled:D&&z?!0:void 0,onClick:E,onKeyDown:de,onKeyUp:ue,ref:se,ownerState:M},ve,ne,{children:[W||G,i(pa,{className:x(f.label),ownerState:M,children:R}),F]}))});var fa=va,w={},ma=$.exports;Object.defineProperty(w,"__esModule",{value:!0});var ce=w.default=void 0,ba=ma(h),ga=C,xa=(0,ba.default)((0,ga.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");ce=w.default=xa;const ha=v.exports.lazy(()=>Re(()=>import("./TaskCard.26f7e341.js"),["assets/TaskCard.26f7e341.js","assets/vendor.aa147f56.js","assets/jsx-runtime_commonjs-proxy.d8ab21b4.js","assets/index.346697f9.js","assets/index.8a4e6fd7.css"])),$a=Q({palette:{primary:{main:X[900]}}}),Ca=({addTaskHandler:e,tasks:a,uid:c})=>_("div",{className:"pb-2",children:[_("div",{className:"flex justify-between px-11 py-10",children:[i("div",{className:"flex justify-center",children:_("h3",{className:"text-blue-900 font-bold text-xl sm:text-3xl md:text-5xl",children:["All Tasks",i("span",{className:"font-light text-xs sm:text-base md:text-xl text-gray-400 ml-1 mt-4",children:"(0)"})]})}),i(fa,{icon:i(ce,{}),theme:$a,color:"primary",label:"New Task",sx:{maxWidth:"110px",maxHeight:"40px",minWidth:"110px",minHeight:"40px"},onClick:e})]}),i("div",{className:"flex justify-center items-start px-4",children:i("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:i(v.exports.Suspense,{fallback:i("div",{children:i(Ie,{})}),children:a.map(o=>i(ha,{uid:c,task:o,title:o.title,description:o.description,date:je(o.date)},o.id))})})})]}),za=({tasks:e,addTaskHandler:a,uid:c})=>{const[o,r]=v.exports.useState([]),[p,s]=v.exports.useState("all");v.exports.useEffect(()=>{u()},[e,p]);const u=()=>{switch(p){case"progress":r(e.filter(d=>d.complete===!1));break;case"complete":r(e.filter(d=>d.complete===!0));break;case"today":r(e.filter(d=>Te(d.parseDate)));break;case"tomorrow":r(e.filter(d=>Me(d.parseDate)));break;case"month":r(e.filter(d=>De(d.parseDate)));break;default:r(e);break}};return _("div",{className:"md:flex z-[15] box-border",children:[i("div",{className:"hidden md:block md:w-1/5 h-[88vh] border-r-[0.5px] border-gray-400",children:i(ra,{status:p,setStatus:s})}),i("div",{className:"w-full md:w-[80%] h-[88vh] pb-10 overflow-y-auto",children:i(Ca,{uid:c,tasks:o,addTaskHandler:a})})]})};export{za as default};
