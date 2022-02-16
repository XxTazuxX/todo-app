var P=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var D=(a,t,n)=>t in a?P(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,h=(a,t)=>{for(var n in t||(t={}))O.call(t,n)&&D(a,n,t[n]);if(y)for(var n of y(t))E.call(t,n)&&D(a,n,t[n]);return a},k=(a,t)=>N(a,w(t));import{i as T,O as C,g as j,G as F,s as M,a as R,r as c,j as s,b as u,L as z,A as W,M as $,c as q,T as I,d as B,e as G,f as S,o as x,y as H,h as U,F as J,R as K,k as V}from"./vendor.aa147f56.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};X();const Y="modulepreload",_={},Q="/",b=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${Q}${i}`,i in _)return;_[i]=!0;const e=i.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":Y,e||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),e)return new Promise((p,m)=>{o.addEventListener("load",p),o.addEventListener("error",m)})})).then(()=>t())},Z=a=>h({id:a.id},a.data()),de=a=>{const t=a.toDate();return new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(t)},ee={apiKey:"AIzaSyB6j-Oe32K7cW4D_PBXXvqsop-JS2j36nE",authDomain:"todo-list-cdf4f.firebaseapp.com",projectId:"todo-list-cdf4f",storageBucket:"todo-list-cdf4f.appspot.com",messagingSenderId:"1052311902200",appId:"1:1052311902200:web:41460055ecaaaea8ee680d",measurementId:"G-J4S02LFYLB"};T(ee);const A=C(),f=j(),te=new F,ue=()=>R(f,te),pe=()=>M(f),se=[{value:"low",label:"LOW"},{value:"medium",label:"MEDIUM"},{value:"high",label:"HIGH"}],ae=({addTaskHandler:a,user:t})=>{const[n,i]=c.exports.useState(new Date),[e,r]=c.exports.useState({title:"",description:"",important:"low",complete:!1}),o=l=>{const g=l.target.name,d=l.target.value;r(k(h({},e),{[g]:d,date:n,parseDate:Date.parse(n)}))},p=l=>{i(l)};return s("form",{onSubmit:async l=>{l.preventDefault(),await G(S(A,`users/${t.uid}/tasks`),e),r({title:"",description:"",important:"low"}),a()},children:s("div",{id:"new-task",children:u("div",{className:"newTask",children:[u("div",{className:"input-content",children:[s("h3",{children:"Title"}),s("input",{value:e.title,onChange:o,className:"title-input",type:"text",name:"title",placeholder:"What needs be done ?",required:!0})]}),u("div",{className:"input-content",children:[s("h3",{children:"Description"}),s("textarea",{value:e.description,onChange:o,name:"description",placeholder:"Description about this task",required:!0})]}),u("div",{className:"input-content",children:[s("h3",{children:"Date picker"}),s(z,{dateAdapter:W,children:s($,{label:"Date mobile",name:"date",inputFormat:"MM/dd/yyyy",shouldDisableDate:q,value:n,onChange:p,renderInput:l=>s(I,h({},l))})})]}),s("div",{className:"input-content",children:s(I,{id:"Importance-select",name:"important",select:!0,label:"Importance",value:e.important,onChange:o,helperText:"Please select your importance Level",children:se.map(l=>s(B,{value:l.value,children:l.label},l.value))})}),s("button",{type:"submit",className:"btnNew",children:"Add New Task"}),s("button",{className:"close",onClick:a,children:"X"})]})})})},ne=c.exports.lazy(()=>b(()=>import("./Home.5f589212.js"),["assets/Home.5f589212.js","assets/vendor.aa147f56.js","assets/jsx-runtime_commonjs-proxy.d8ab21b4.js","assets/ButtonGroup.ae77f890.js"])),re=c.exports.lazy(()=>b(()=>import("./Navbar.ba5905a5.js"),["assets/Navbar.ba5905a5.js","assets/vendor.aa147f56.js","assets/jsx-runtime_commonjs-proxy.d8ab21b4.js"])),oe=c.exports.lazy(()=>b(()=>import("./AuthPage.251ea80f.js"),["assets/AuthPage.251ea80f.js","assets/vendor.aa147f56.js","assets/jsx-runtime_commonjs-proxy.d8ab21b4.js","assets/ButtonGroup.ae77f890.js"])),ie=()=>{const[a,t]=c.exports.useState(!1),[n,i]=c.exports.useState([]),[e,r]=c.exports.useState(null),{uid:o,displayName:p,photoURL:m}=e||{};c.exports.useEffect(()=>{let d=null;return d=x(f,v=>{r(v)}),d},[]),c.exports.useEffect(()=>{if(!e)return;let d=null;return d=H(S(A,`users/${e.uid}/tasks`),v=>{const L=v.docs.map(Z);i(L)}),d},[e]);const l=()=>{t(!a)},g=()=>{i([])};return s("div",{children:u(c.exports.Suspense,{fallback:s(U,{}),children:[a&&s(ae,{user:e,addTaskHandler:l}),e?u(J,{children:[s(re,{clearState:g,displayName:p,photoURL:m}),s(ne,{tasks:n,uid:o,addTaskHandler:l})]}):s(oe,{})]})})};x(f,()=>{K.render(s(V.StrictMode,{children:s(ie,{})}),document.getElementById("root"))});export{b as _,ue as a,de as d,A as f,pe as s};
