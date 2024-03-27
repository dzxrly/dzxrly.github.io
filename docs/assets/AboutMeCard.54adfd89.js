import{m as O,b as I,Q as F,R as X}from"./QBtn.e2f3b69b.js";import{Q as Y}from"./QAvatar.cfd41993.js";import{Q as J}from"./QIcon.5848f58a.js";import{c as f,k as Z,r as l,w as ee,h as c,E as te,g as oe,a0 as ae,d as se,i as ie,Q as g,V as q,U as o,j as le,a1 as h,X as ne,R as x,S as T,Y as d,_ as m,F as Q,W as R}from"./index.371e1184.js";import{h as re}from"./render.f442d999.js";import{u as D}from"./use-timeout.def65250.js";import{o as ue}from"./open-url.da2b56af.js";import{u as ce}from"./use-quasar.a5f66295.js";import{u as ge}from"./vue-i18n.runtime.16809dda.js";const de={ratio:[String,Number]};function me(e,n){return f(()=>{const s=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const he=16/9;var fe=Z({name:"QImg",props:{...de,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:he},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:s}){const b=l(e.initialRatio),_=me(e,b),v=oe(),{registerTimeout:i,removeTimeout:p}=D(),{registerTimeout:C,removeTimeout:a}=D(),r=[l(null),l(B())],u=l(0),S=l(!1),y=l(!1),E=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),$=f(()=>({width:e.width,height:e.height})),U=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),M=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));ee(()=>L(),N);function W(){if(a(),e.loadingShowDelay===0){S.value=!0;return}C(()=>{S.value=!0},e.loadingShowDelay)}function j(){a(),S.value=!1}function L(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function B(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function N(t){p(),y.value=!1,t===null?(j(),r[u.value^1].value=B()):W(),r[u.value].value=t}function H({target:t}){I(v)===!1&&(p(),b.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,z(t,1))}function z(t,w){w===1e3||I(v)===!0||(t.complete===!0?V(t):i(()=>{z(t,w+1)},50))}function V(t){I(v)!==!0&&(u.value=u.value^1,r[u.value].value=null,j(),y.value=!1,s("load",t.currentSrc||t.src))}function G(t){p(),j(),y.value=!0,r[u.value].value=null,r[u.value^1].value=B(),s("error",t)}function P(t){const w=r[t].value,k={key:"img_"+t,class:U.value,style:M.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...w};return u.value===t?(k.class+=" q-img__image--waiting",Object.assign(k,{onLoad:H,onError:G})):k.class+=" q-img__image--loaded",c("div",{class:"q-img__container absolute-full",key:"img"+t},c("img",k))}function K(){return S.value===!1?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},re(n[y.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[c(O,{color:e.spinnerColor,size:e.spinnerSize})])}return N(L()),()=>{const t=[];return _.value!==null&&t.push(c("div",{key:"filler",style:_.value})),y.value!==!0&&(r[0].value!==null&&t.push(P(0)),r[1].value!==null&&t.push(P(1))),t.push(c(te,{name:"q-transition--fade"},K)),c("div",{class:E.value,style:$.value,role:"img","aria-label":e.alt},t)}}});const ve=["https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white","https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white","https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white","https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white","https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E","https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54","https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white","https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D","https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black","https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white","https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white","https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black","https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white"],ye=[{name:"GitHub",url:"https://github.com/dzxrly",iconName:"fa-brands fa-github"},{name:"Gmail",url:"aegonhe993@gmail.com",iconName:"fa-regular fa-paper-plane"},{name:"Steam",url:"https://steamcommunity.com/id/eggtargaryen/",iconName:"fa-brands fa-steam"},{name:"Nexusmods",url:"https://www.nexusmods.com/users/myaccount?tab=files",iconPath:"publicAssets/nexusmods.svg"}];var A={languageBadgeUrlList:ve,personalWebSiteList:ye};const be={class:"about-me-card-wrapper full-width"},_e={class:"row justify-start items-center full-width q-mb-md"},pe=["src"],Ce={class:"text-body1 q-my-sm text-on-background"},Se={class:"text-body1 q-my-sm text-on-background"},we={class:"text-body1 q-my-sm text-on-background"},ke={class:"text-body1 q-my-sm text-on-background"},qe={class:"text-body1 q-my-sm text-on-background"},xe={class:"text-body1 q-my-sm text-on-background"},je={class:"text-body1 q-my-sm text-on-background"},Be=["src"],Ie={class:"row justify-center items-center"},Le={class:"q-ml-sm"},Ne=se({__name:"AboutMeCard",setup(e){const n=ce(),{t:s}=ge(),b=l(A.languageBadgeUrlList),_=l(A.personalWebSiteList),v=l(ie("isShiny")||!1),i=f(()=>n.screen.lt.sm);return(p,C)=>(g(),q("div",be,[o("div",_e,[le(F,{size:i.value?"md":"lg",color:"primary",flat:"",icon:"arrow_back",round:"",to:"/"},null,8,["size"])]),o("div",{class:h([i.value?"column":"row","justify-center items-center full-width"])},[o("div",{class:h([i.value?"col justify-center":"col-4 justify-end","row items-center"])},[ne((g(),x(Y,{class:"cursor-pointer",rounded:"",size:"15rem",onClick:C[0]||(C[0]=a=>d(ue)("https://bulbapedia.bulbagarden.net/wiki/Reshiram_(Pok%C3%A9mon)"))},{default:T(()=>[o("img",{src:v.value?"/avatar.png":"/avatar_s.png",alt:"avatar"},null,8,pe)]),_:1})),[[X]])],2),o("div",{class:h([i.value?"col justify-center q-pt-xl":"col-8 justify-start q-pl-xl","row items-center"])},[o("div",{class:h([i.value?"items-center":"items-start","column justify-center full-width"])},[o("span",Ce,m(d(s)("homePersonalInfoChip1")),1),o("span",Se,m(d(s)("homePersonalInfoChip2")),1),o("span",we,m(d(s)("homePersonalInfoChip3")),1),o("span",ke,m(d(s)("homePersonalInfoChip4")),1),o("span",qe,m(d(s)("homePersonalInfoChip5")),1),o("span",xe,m(d(s)("homePersonalInfoChip6")),1),o("span",je,m(d(s)("homePersonalInfoChip7")),1),o("div",{class:h([i.value?"justify-center":"justify-start","row items-center wrap q-mt-md"])},[(g(!0),q(Q,null,R(b.value,a=>(g(),q("div",{key:a,class:"q-mr-sm"},[o("img",{src:a,alt:"language badge"},null,8,Be)]))),128))],2),o("div",{class:h([i.value?"justify-center":"justify-start","row items-center wrap q-mt-md"])},[(g(!0),q(Q,null,R(_.value,a=>(g(),x(F,{key:a.name,href:a.url.includes("@")?`mailto:${a.url}`:a.url,class:"q-mr-sm q-mb-sm",color:"primary","no-caps":"",outline:"",size:"md",target:"_blank",type:"a"},{default:T(()=>[o("div",Ie,[a.iconName?(g(),x(J,{key:0,name:a.iconName,size:"1rem"},null,8,["name"])):(g(),x(fe,{key:1,src:a.iconPath,alt:"web site icon","img-class":"text-primary bg-transparent",width:"1rem"},null,8,["src"])),o("span",Le,m(a.name),1)])]),_:2},1032,["href"]))),128))],2)],2)],2)],2)]))}});var $e=ae(Ne,[["__scopeId","data-v-656f171a"]]);export{$e as default};
