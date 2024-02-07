import{l as j,i as w,K as c,c as s,h as q,L as F,N as L,g as H,a1 as R,d as V,a2 as z,r as h,M as K,w as S,o as N,Q as A,R as b,S as $,U as x,V as u,a3 as C,$ as D,j as k,G as O,a4 as W,a5 as E,a6 as G}from"./index.15cee96e.js";import{a as U}from"./render.7960bc74.js";import{u as J}from"./use-quasar.0aa36075.js";import{u as X}from"./vue-i18n.runtime.cc142175.js";var Y=j({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:g}){const{proxy:{$q:d}}=H(),e=w(F,c);if(e===c)return console.error("QPage needs to be a deep child of QLayout"),c;if(w(L,c)===c)return console.error("QPage needs to be child of QPageContainer"),c;const m=s(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:d.screen.height;return n.styleFn(o,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":d.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":d.screen.height-o+"px"}}),r=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:r.value,style:m.value},U(g.default))}});const Z=n=>(E("data-v-c603aaa4"),n=n(),G(),n),ee=Z(()=>u("div",{class:"row justify-center items-center full-width q-mb-md"},[u("div",{class:"home-card-modal-bar"})],-1)),ae={class:"col full-width row justify-center items-start"},te=V({__name:"IndexPage",setup(n){z(t=>({"7b5e3ffa":B.value,"3347692a":P.value,"6d537e10":M.value}));const{t:g}=X(),d=J(),e=h(""),a=h(!1),m=h(Q(.05)),r=h(!0),o=s(()=>d.screen.lt.sm),v=s(()=>g("homeTitle"));let f=null;const B=s(()=>r.value?"#fffbff":"#191c1e"),P=s(()=>r.value?"#857371":"#70787d"),M=s(()=>r.value?"#2b2221":"#eef4f8"),l=w("eventBus");K("isShiny",m);function Q(t){return Math.random()<t}function y(){f&&(clearInterval(f),f=null)}function I(){e.value="";let t=0;f=setInterval(()=>{t<v.value.length?(e.value+=v.value.charAt(t),t++):y()},150)}return l==null||l.on("dark-mode",t=>{r.value=t}),S(()=>v.value,()=>{y(),I()}),S(()=>a.value,()=>{l==null||l.emit("set-background-cover",a.value)}),N(()=>{y(),I(),console.log("Shiny:",m.value)}),(t,i)=>{const T=A("router-view");return b(),$(Y,{class:"home-page-wrapper column justify-center items-center"},{default:x(()=>[u("div",{class:C([{"home-title-hover":a.value},"home-title full-width row justify-center items-center q-py-xl"]),onClick:i[0]||(i[0]=p=>a.value=!1)},[u("span",{class:C([{"text-body1":o.value,"text-h5":!o.value},"home-title-span text-on-background text-bold non-selectable"])},D(e.value),3)],2),u("div",{class:C([{"home-card-hover shadow-8":a.value,"shadow-4":!a.value},"home-card full-width bg-card-background text-on-surface q-pa-md column justify-start items-center"]),onMouseenter:i[1]||(i[1]=p=>a.value=!0),onMouseleave:i[2]||(i[2]=p=>a.value=!1)},[ee,u("div",ae,[k(T,null,{default:x(({Component:p,route:_})=>[k(O,{duration:{enter:300,leave:300},"enter-active-class":_.path==="/"?"animated fadeInLeft":"animated fadeInRight","leave-active-class":_.path==="/"?"animated fadeOutRight":"animated fadeOutLeft",mode:"out-in"},{default:x(()=>[(b(),$(W(p),{key:_.path}))]),_:2},1032,["enter-active-class","leave-active-class"])]),_:1})])],34)]),_:1})}}});var le=R(te,[["__scopeId","data-v-c603aaa4"]]);export{le as default};
