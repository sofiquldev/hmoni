(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8449:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>d,tree:()=>m}),t(169),t(7139),t(5866);var s=t(3191),r=t(8716),n=t(7922),i=t.n(n),l=t(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(a,o);let m=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,169)),"/home/runner/work/hmoni/hmoni/app/page.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(t.bind(t,7139)),"/home/runner/work/hmoni/hmoni/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}],c=["/home/runner/work/hmoni/hmoni/app/page.jsx"],p="/page",u={require:t,loadChunk:()=>Promise.resolve()},d=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},2777:(e,a,t)=>{Promise.resolve().then(t.bind(t,7928)),Promise.resolve().then(t.bind(t,2782)),Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.t.bind(t,9404,23))},6136:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},521:()=>{},7928:(e,a,t)=>{"use strict";t.d(a,{default:()=>m});var s=t(326),r=t(7577),n=t(434),i=t(6226),l=t(2154),o=t.n(l);let m=()=>{let[e,a]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{let e=await fetch("/api/author");a((await e.json()).socialLinks)})()},[]),s.jsx("ul",{className:o().social__wrapper,children:e.map((e,a)=>s.jsx("li",{children:s.jsx(n.default,{href:e.href,target:"_blank",children:s.jsx(i.default,{src:`/socials/${e.name}.svg`,alt:e.name})})},a))})}},2782:(e,a,t)=>{"use strict";t.d(a,{default:()=>l});var s=t(326),r=t(7577),n=t(5517),i=t.n(n);let l=()=>{let[e,a]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[l,o]=(0,r.useState)(!1),m=async t=>{t.preventDefault();try{let t=await fetch("/api/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}),s=await t.json();t.ok?(o(!1),n("Thank you for subscribing!"),a("")):(o(!0),n(s.error||"Something went wrong. Please try again."))}catch(e){o(!0),console.error("Error subscribing:",e),n("Something went wrong. Please try again.")}};return(0,r.useEffect)(()=>{if(t){let e=setTimeout(()=>n(""),5e3);return()=>clearTimeout(e)}},[t]),(0,s.jsxs)("form",{onSubmit:m,className:i().subscribe,children:[s.jsx("h4",{className:i().subscribe__title,children:"Subscribe to our mailing list to get the latest updates"}),(0,s.jsxs)("div",{className:i().subscribe__inputgrp,children:[s.jsx("input",{type:"email",name:"email",value:e,onChange:e=>a(e.target.value),placeholder:"Email",required:!0,autoComplete:"off"}),s.jsx("button",{type:"submit",children:"Subscribe"})]}),t&&s.jsx("p",{className:i().subscribe__message,style:{color:l?"#cf4a0c":"#0b9756"},children:t})]})}},4772:e=>{e.exports={page_wrapper:"styles_page_wrapper__Yb0k4",mainContent:"styles_mainContent__6mGa0",brand:"styles_brand__L0Rut",title:"styles_title__F7nPs",desc:"styles_desc__ME9An",mainImage:"styles_mainImage__Eydr8"}},7745:e=>{e.exports={comingSoon:"parallax-bg_comingSoon__a9hFz",jump:"parallax-bg_jump__ILAdD",animationFramesOne:"parallax-bg_animationFramesOne__DYyM2",animationFramesTwo:"parallax-bg_animationFramesTwo__LucVf",animationFramesThree:"parallax-bg_animationFramesThree__UOk2M",animationFramesFour:"parallax-bg_animationFramesFour__YaSp4",animationFramesFive:"parallax-bg_animationFramesFive__J53WC",move:"parallax-bg_move__hGI9t",rotated:"parallax-bg_rotated__EQbJg",rotatedHalf:"parallax-bg_rotatedHalf__t8f9G",rotatedHalfTwo:"parallax-bg_rotatedHalfTwo___Rkog","scale-upOne":"parallax-bg_scale-upOne__Wd_X3","scale-right":"parallax-bg_scale-right__E5_c2","fade-in":"parallax-bg_fade-in__q273e","hvr-ripple-out":"parallax-bg_hvr-ripple-out__hjiAH","hvr-ripple-out-two":"parallax-bg_hvr-ripple-out-two__laWGx","scale-up-one":"parallax-bg_scale-up-one__0lXu3","scale-up-two":"parallax-bg_scale-up-two__t7ThV","scale-up-three":"parallax-bg_scale-up-three__SUk6H",gradientBG:"parallax-bg_gradientBG__ZmlJZ",imageBgAnim:"parallax-bg_imageBgAnim__WULT0"}},2154:e=>{e.exports={social__wrapper:"social-links_social__wrapper__MFfOA"}},5517:e=>{e.exports={subscribe__title:"subscriber-form_subscribe__title__mdxH6",subscribe__inputgrp:"subscriber-form_subscribe__inputgrp__sIQ0r",subscribe__message:"subscriber-form_subscribe__message__mSaOy"}},8756:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>j});var s=t(9510),r=t(7371),n=t(7710),i=t(8570);let l=(0,i.createProxy)(String.raw`/home/runner/work/hmoni/hmoni/app/components/SubscriberForm.jsx`),{__esModule:o,$$typeof:m}=l;l.default;let c=(0,i.createProxy)(String.raw`/home/runner/work/hmoni/hmoni/app/components/SubscriberForm.jsx#default`),p=(0,i.createProxy)(String.raw`/home/runner/work/hmoni/hmoni/app/components/SocialLinks.jsx`),{__esModule:u,$$typeof:d}=p;p.default;let _=(0,i.createProxy)(String.raw`/home/runner/work/hmoni/hmoni/app/components/SocialLinks.jsx#default`),g=()=>s.jsx("p",{className:"text-center mt-5",children:"\xa9 Copyrights H Moni | All Rights Reserved"});var h=t(7745),x=t.n(h);let b=()=>(0,s.jsxs)("div",{className:x().comingSoon,children:[s.jsx(n.default,{src:"/shapes/01.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/02.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/03.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/04.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/05.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/06.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/07.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/08.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/09.svg",alt:"bg-elements"}),s.jsx(n.default,{src:"/shapes/10.svg",alt:"bg-elements"})]});var f=t(4772),v=t.n(f);function j(){return(0,s.jsxs)(s.Fragment,{children:[s.jsx(b,{page:"coming-soon"}),(0,s.jsxs)("div",{className:`container mx-auto text-center max-w-screen-md pt-6 md:py-12 md:pb-8 px-4 ${v().page_wrapper}`,children:[s.jsx("header",{children:s.jsx(r.default,{href:"#",className:v().brand,children:s.jsx(n.default,{src:"/logo.svg",alt:"h-moni-logo"})})}),(0,s.jsxs)("main",{className:v().mainContent,children:[s.jsx("h1",{className:v().title,children:"We are Coming Soon!!"}),s.jsx("p",{className:v().desc,children:"Stay tuned for something amazing"}),s.jsx(n.default,{className:v().mainImage,src:"/coming-soon.svg",alt:"coming-soon"})]}),(0,s.jsxs)("footer",{children:[s.jsx(c,{}),s.jsx(_,{}),s.jsx(g,{})]})]})]})}},7139:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l,metadata:()=>i});var s=t(9510),r=t(6901),n=t.n(r);t(3440);let i={title:"H Moni",description:"UI/IX Desinger"};function l({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:n().className,children:e})})}},169:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>n});var s=t(9510),r=t(8756);let n=()=>s.jsx(r.default,{})},7481:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var s=t(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},3440:()=>{}};var a=require("../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[948,347,60],()=>t(8449));module.exports=s})();