import{l as j,i as S,K as c,c as s,h as q,L as F,N as L,g as H,a1 as K,d as R,a2 as V,r as h,M as z,w as b,o as A,Q as N,R as x,S as C,U as w,V as u,a3 as I,$ as D,j as k,G as O,a4 as W,a5 as E,a6 as G,a7 as U}from"./index.fbd6ff1e.js";import{a as J}from"./render.7960bc74.js";import{u as X}from"./use-quasar.5c0a59c2.js";import{u as Y}from"./vue-i18n.runtime.7193f29b.js";var Z=j({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:g}){const{proxy:{$q:d}}=H(),e=S(F,c);if(e===c)return console.error("QPage needs to be a deep child of QLayout"),c;if(S(L,c)===c)return console.error("QPage needs to be child of QPageContainer"),c;const m=s(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const v=e.isContainer.value===!0?e.containerHeight.value:d.screen.height;return n.styleFn(o,v)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":d.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":d.screen.height-o+"px"}}),l=s(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:l.value,style:m.value},J(g.default))}});const ee=n=>(G("data-v-8e959d62"),n=n(),U(),n),te=ee(()=>u("div",{class:"row justify-center items-center full-width q-mb-md"},[u("div",{class:"home-card-modal-bar"})],-1)),ae={class:"col full-width row justify-center items-start"},ne=R({__name:"IndexPage",setup(n){V(a=>({"73d6d1c1":B.value,"0a13ae03":P.value,f41d0602:M.value}));const{t:g}=Y(),d=X(),e=h(""),t=h(!1),m=h(Q(.05)),l=h(!0),o=s(()=>d.screen.lt.sm),v=s(()=>g("homeTitle"));let p=null;const B=s(()=>l.value?"#fffbff":"#191c1e"),P=s(()=>l.value?"#857371":"#70787d"),M=s(()=>l.value?"#2b2221":"#eef4f8"),r=S("eventBus");z("isShiny",m);function Q(a){return Math.random()<a}function y(){p&&(clearInterval(p),p=null)}function $(){e.value="";let a=0;p=setInterval(()=>{a<v.value.length?(e.value+=v.value.charAt(a),a++):y()},150)}return r==null||r.on("dark-mode",a=>{l.value=a}),b(()=>v.value,()=>{y(),$()}),b(()=>t.value,()=>{r==null||r.emit("set-background-cover",t.value)}),A(()=>{y(),$(),console.log("Shiny:",m.value)}),(a,i)=>{const T=N("router-view");return x(),C(Z,{class:"home-page-wrapper column justify-center items-center"},{default:w(()=>[u("div",{class:I([{"home-title-hover":t.value},"home-title full-width row justify-center items-center q-py-xl"]),onClick:i[0]||(i[0]=f=>t.value=!1)},[u("span",{class:I([{"text-body1":o.value,"text-h5":!o.value},"home-title-span text-on-background text-bold non-selectable"])},D(e.value),3)],2),u("div",{class:I([{"home-card-hover shadow-8":t.value,"shadow-4":!t.value},"home-card full-width bg-card-background text-on-surface q-pa-md column justify-start items-center"]),onMouseenter:i[1]||(i[1]=f=>t.value=!0),onMouseleave:i[2]||(i[2]=f=>t.value=!1)},[te,u("div",ae,[k(T,null,{default:w(({Component:f,route:_})=>[k(O,{duration:{enter:300,leave:300},"enter-active-class":_.path==="/"?"animated fadeInLeft":"animated fadeInRight","leave-active-class":_.path==="/"?"animated fadeOutRight":"animated fadeOutLeft",mode:"out-in"},{default:w(()=>[(x(),C(W,null,[(x(),C(E(f),{key:_.path}))],1024))]),_:2},1032,["enter-active-class","leave-active-class"])]),_:1})])],34)]),_:1})}}});var ie=K(ne,[["__scopeId","data-v-8e959d62"]]);export{ie as default};
