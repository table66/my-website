"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8608],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const s={},i="Y branch",o={unversionedId:"examples/ybranch/ybranch",id:"examples/ybranch/ybranch",title:"Y branch",description:"The insertion loss, transmission and S-parameters of a Y-branch are calculated using FDTD Solver.",source:"@site/docs/examples/ybranch/ybranch.md",sourceDirName:"examples/ybranch",slug:"/examples/ybranch/",permalink:"/my-website/docs/examples/ybranch/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/examples/ybranch/ybranch.md",tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"ring resomator",permalink:"/my-website/docs/examples/ring resonator/ring resomator"}},l={},c=[{value:"step 1 :Initial simulation",id:"step-1-initial-simulation",level:2},{value:"measure Y beanch  performance",id:"measure-y-beanch--performance",level:2},{value:"Field profile",id:"field-profile",level:2},{value:"Insertion loss",id:"insertion-loss",level:2},{value:"S-parameters sweep",id:"s-parameters-sweep",level:2},{value:"for s21",id:"for-s21",level:3}],p={toc:c},u="wrapper";function d(e){let{components:r,...s}=e;return(0,a.kt)(u,(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"y-branch"},"Y branch"),(0,a.kt)("p",null,"The insertion loss, transmission and S-parameters of a Y-branch are calculated using FDTD Solver."),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The  y  branch is simulated using the EME solver to measure the power transmission , insertion losss and the S-parameters ."),(0,a.kt)("h2",{id:"step-1-initial-simulation"},"step 1 :Initial simulation"),(0,a.kt)("p",null,"Ensure the simulation is setup properly and explore the results."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Y branch structure",src:t(6913).Z,title:"Y branch structure",width:"474",height:"216"})),(0,a.kt)("h1",{id:"run-and-results"},"run and results"),(0,a.kt)("h2",{id:"measure-y-beanch--performance"},"measure Y beanch  performance"),(0,a.kt)("h2",{id:"field-profile"},"Field profile"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3311).Z,width:"1207",height:"422"})),(0,a.kt)("h2",{id:"insertion-loss"},"Insertion loss"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2117).Z,width:"1142",height:"425"})),(0,a.kt)("h2",{id:"s-parameters-sweep"},"S-parameters sweep"),(0,a.kt)("h3",{id:"for-s21"},"for s21"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2758).Z,width:"558",height:"385"})))}d.isMDXComponent=!0},3311:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/ybranchFeildResult-d35a33b5b63fbfde02bad5e2f8e2d485.PNG"},2117:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/ybranchInsertionLoss-109229af251c7d26db24d6a60d08e951.PNG"},6913:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/ybranchStructure-66a92c8dc5cd42cce04ea4d6fec16e0c.PNG"},2758:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/ybranchs21-57cf12de952a02cd747c906fd2c58f2d.PNG"}}]);