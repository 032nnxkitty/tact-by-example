import{S as ut,i as dt,s as pt,a as ht,e as $,c as _t,b as J,g as me,t as B,d as ge,f as F,h as H,j as mt,o as Te,k as gt,l as wt,m as yt,n as Le,p as V,q as vt,r as bt,u as Et,v as Ie,w as W,x as Y,y as De,z as X,A as Z,B as he}from"./chunks/index-a89a8bfe.js";import{S as ot,a as st,I as C,g as Ye,f as Xe,b as Ae,c as _e,s as q,i as Ze,d as re,e as z,P as Qe,h as kt,j as St,k as Rt}from"./chunks/singletons-d6b47418.js";function Lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function It(r){return r.split("%25").map(decodeURI).join("%25")}function At(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Pt=["href","pathname","search","searchParams","toString","toJSON"];function Ot(r,e){const n=new URL(r);for(const o of Pt){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return Ut(n),n}function Ut(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Nt="/__data.json";function Tt(r){return r.replace(/\/$/,"")+Nt}function it(r){try{return JSON.parse(sessionStorage[r])}catch{}}function xe(r,e){const n=JSON.stringify(e);try{sessionStorage[r]=n}catch{}}function jt(...r){let e=5381;for(const n of r)if(typeof n=="string"){let o=n.length;for(;o;)e=e*33^n.charCodeAt(--o)}else if(ArrayBuffer.isView(n)){const o=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=o.length;for(;s;)e=e*33^o[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:e?.method||"GET")!=="GET"&&oe.delete(Ce(r)),we(r,e));const oe=new Map;function Dt(r,e){const n=Ce(r,e),o=document.querySelector(n);if(o?.textContent){const{body:s,...l}=JSON.parse(o.textContent),a=o.getAttribute("data-ttl");return a&&oe.set(n,{body:s,init:l,ttl:1e3*Number(a)}),Promise.resolve(new Response(s,l))}return we(r,e)}function Ct(r,e,n){if(oe.size>0){const o=Ce(r,n),s=oe.get(o);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(s.body,s.init);oe.delete(o)}}return we(e,n)}function Ce(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;if(e?.headers||e?.body){const s=[];e.headers&&s.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&s.push(e.body),o+=`[data-hash="${jt(...s)}"]`}return o}const Vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function qt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Bt(r).map(o=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const l=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(l)return e.push({name:l[1],matcher:l[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const a=o.split(/\[(.+?)\](?!\])/);return"/"+a.map((g,p)=>{if(p%2){if(g.startsWith("x+"))return Pe(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Pe(String.fromCharCode(...g.slice(2).split("-").map(I=>parseInt(I,16))));const _=Vt.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,O,S,D]=_;return e.push({name:S,matcher:D,optional:!!E,rest:!!O,chained:O?p===1&&a[0]==="":!1}),O?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Pe(g)}).join("")}).join("")}/?$`),params:e}}function $t(r){return!/^\([^)]+\)$/.test(r)}function Bt(r){return r.slice(1).split("/").filter($t)}function Ft(r,e,n){const o={},s=r.slice(1);let l=0;for(let a=0;a<e.length;a+=1){const f=e[a],g=s[a-l];if(f.chained&&f.rest&&l){o[f.name]=s.slice(a-l,a+1).filter(p=>p).join("/"),l=0;continue}if(g===void 0){f.rest&&(o[f.name]="");continue}if(!f.matcher||n[f.matcher](g)){o[f.name]=g;continue}if(f.optional&&f.chained){l++;continue}return}if(!l)return o}function Pe(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ht(r,e,n,o){const s=new Set(e);return Object.entries(n).map(([f,[g,p,_]])=>{const{pattern:E,params:O}=qt(f),S={id:f,exec:D=>{const I=E.exec(D);if(I)return Ft(I,O,o)},errors:[1,..._||[]].map(D=>r[D]),layouts:[0,...p||[]].map(a),leaf:l(g)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function l(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function a(f){return f===void 0?f:[s.has(f),r[f]]}}function Kt(r){let e,n,o;var s=r[1][0];function l(a){return{props:{data:a[3],form:a[2]}}}return s&&(e=W(s,l(r)),r[12](e)),{c(){e&&Y(e.$$.fragment),n=$()},l(a){e&&De(e.$$.fragment,a),n=$()},m(a,f){e&&X(e,a,f),J(a,n,f),o=!0},p(a,f){const g={};if(f&8&&(g.data=a[3]),f&4&&(g.form=a[2]),s!==(s=a[1][0])){if(e){me();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),ge()}s?(e=W(s,l(a)),a[12](e),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(a){o||(e&&F(e.$$.fragment,a),o=!0)},o(a){e&&B(e.$$.fragment,a),o=!1},d(a){r[12](null),a&&H(n),e&&Z(e,a)}}}function Mt(r){let e,n,o;var s=r[1][0];function l(a){return{props:{data:a[3],$$slots:{default:[Gt]},$$scope:{ctx:a}}}}return s&&(e=W(s,l(r)),r[11](e)),{c(){e&&Y(e.$$.fragment),n=$()},l(a){e&&De(e.$$.fragment,a),n=$()},m(a,f){e&&X(e,a,f),J(a,n,f),o=!0},p(a,f){const g={};if(f&8&&(g.data=a[3]),f&8215&&(g.$$scope={dirty:f,ctx:a}),s!==(s=a[1][0])){if(e){me();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),ge()}s?(e=W(s,l(a)),a[11](e),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(a){o||(e&&F(e.$$.fragment,a),o=!0)},o(a){e&&B(e.$$.fragment,a),o=!1},d(a){r[11](null),a&&H(n),e&&Z(e,a)}}}function Gt(r){let e,n,o;var s=r[1][1];function l(a){return{props:{data:a[4],form:a[2]}}}return s&&(e=W(s,l(r)),r[10](e)),{c(){e&&Y(e.$$.fragment),n=$()},l(a){e&&De(e.$$.fragment,a),n=$()},m(a,f){e&&X(e,a,f),J(a,n,f),o=!0},p(a,f){const g={};if(f&16&&(g.data=a[4]),f&4&&(g.form=a[2]),s!==(s=a[1][1])){if(e){me();const p=e;B(p.$$.fragment,1,0,()=>{Z(p,1)}),ge()}s?(e=W(s,l(a)),a[10](e),Y(e.$$.fragment),F(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else s&&e.$set(g)},i(a){o||(e&&F(e.$$.fragment,a),o=!0)},o(a){e&&B(e.$$.fragment,a),o=!1},d(a){r[10](null),a&&H(n),e&&Z(e,a)}}}function et(r){let e,n=r[6]&&tt(r);return{c(){e=gt("div"),n&&n.c(),this.h()},l(o){e=wt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=yt(e);n&&n.l(s),s.forEach(H),this.h()},h(){Le(e,"id","svelte-announcer"),Le(e,"aria-live","assertive"),Le(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(o,s){J(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=tt(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&H(e),n&&n.d()}}}function tt(r){let e;return{c(){e=vt(r[7])},l(n){e=bt(n,r[7])},m(n,o){J(n,e,o)},p(n,o){o&128&&Et(e,n[7])},d(n){n&&H(e)}}}function Jt(r){let e,n,o,s,l;const a=[Mt,Kt],f=[];function g(_,E){return _[1][1]?0:1}e=g(r),n=f[e]=a[e](r);let p=r[5]&&et(r);return{c(){n.c(),o=ht(),p&&p.c(),s=$()},l(_){n.l(_),o=_t(_),p&&p.l(_),s=$()},m(_,E){f[e].m(_,E),J(_,o,E),p&&p.m(_,E),J(_,s,E),l=!0},p(_,[E]){let O=e;e=g(_),e===O?f[e].p(_,E):(me(),B(f[O],1,1,()=>{f[O]=null}),ge(),n=f[e],n?n.p(_,E):(n=f[e]=a[e](_),n.c()),F(n,1),n.m(o.parentNode,o)),_[5]?p?p.p(_,E):(p=et(_),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(_){l||(F(n),l=!0)},o(_){B(n),l=!1},d(_){f[e].d(_),_&&H(o),p&&p.d(_),_&&H(s)}}}function zt(r,e,n){let{stores:o}=e,{page:s}=e,{constructors:l}=e,{components:a=[]}=e,{form:f}=e,{data_0:g=null}=e,{data_1:p=null}=e;mt(o.page.notify);let _=!1,E=!1,O=null;Te(()=>{const k=o.page.subscribe(()=>{_&&(n(6,E=!0),n(7,O=document.title||"untitled page"))});return n(5,_=!0),k});function S(k){Ie[k?"unshift":"push"](()=>{a[1]=k,n(0,a)})}function D(k){Ie[k?"unshift":"push"](()=>{a[0]=k,n(0,a)})}function I(k){Ie[k?"unshift":"push"](()=>{a[0]=k,n(0,a)})}return r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,s=k.page),"constructors"in k&&n(1,l=k.constructors),"components"in k&&n(0,a=k.components),"form"in k&&n(2,f=k.form),"data_0"in k&&n(3,g=k.data_0),"data_1"in k&&n(4,p=k.data_1)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[a,l,f,g,p,_,E,O,o,s,S,D,I]}class Wt extends ut{constructor(e){super(),dt(this,e,zt,Jt,pt,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Yt="modulepreload",Xt=function(r,e){return new URL(r,e).href},nt={},M=function(e,n,o){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=Xt(l,o),l in nt)return;nt[l]=!0;const a=l.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(!!o)for(let _=s.length-1;_>=0;_--){const E=s[_];if(E.href===l&&(!a||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":Yt,a||(p.as="script",p.crossOrigin=""),p.href=l,document.head.appendChild(p),a)return new Promise((_,E)=>{p.addEventListener("load",_),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Zt={},ye=[()=>M(()=>import("./chunks/0-42225685.js"),["./chunks/0-42225685.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-cd97c0c3.js","./chunks/index-a89a8bfe.js","./chunks/store-04c80bb0.js","./assets/_layout-3b24b457.css"],import.meta.url),()=>M(()=>import("./chunks/1-08012a1d.js"),["./chunks/1-08012a1d.js","./components/error.svelte-b5c06695.js","./chunks/index-a89a8bfe.js","./chunks/singletons-d6b47418.js"],import.meta.url),()=>M(()=>import("./chunks/2-d1c2c510.js"),["./chunks/2-d1c2c510.js","./components/pages/_page.svelte-5d390dd9.js","./chunks/index-a89a8bfe.js","./chunks/singletons-d6b47418.js"],import.meta.url),()=>M(()=>import("./chunks/3-8ff71ade.js"),["./chunks/3-8ff71ade.js","./components/pages/000/_page.svelte-b579372b.js","./chunks/index-a89a8bfe.js","./chunks/store-04c80bb0.js","./chunks/index-e79fdc6e.js"],import.meta.url),()=>M(()=>import("./chunks/4-4178b13b.js"),["./chunks/4-4178b13b.js","./components/pages/01-a-simple-counter/_page.svelte-88a46eda.js","./chunks/index-a89a8bfe.js","./chunks/store-04c80bb0.js","./chunks/index-e79fdc6e.js","./chunks/helpers-07666f35.js"],import.meta.url),()=>M(()=>import("./chunks/5-ca392117.js"),["./chunks/5-ca392117.js","./components/pages/01-hello-world/_page.svelte-d19ccc01.js","./chunks/index-a89a8bfe.js","./chunks/store-04c80bb0.js","./chunks/index-e79fdc6e.js","./chunks/helpers-07666f35.js"],import.meta.url),()=>M(()=>import("./chunks/6-91e99670.js"),["./chunks/6-91e99670.js","./components/pages/01-the-deployable-trait/_page.svelte-64af49b7.js","./chunks/index-a89a8bfe.js","./chunks/store-04c80bb0.js","./chunks/index-e79fdc6e.js","./chunks/helpers-07666f35.js"],import.meta.url)],lt=[],Qt={"/":[2],"/000":[3],"/01-a-simple-counter":[4],"/01-hello-world":[5],"/01-the-deployable-trait":[6]},xt={handleError:({error:r})=>{console.error(r)}};let se=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},at=class{constructor(e,n){this.status=e,this.location=n}};async function en(r){for(const e in r)if(typeof r[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([n,o])=>[n,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const tn=-1,nn=-2,an=-3,rn=-4,on=-5,sn=-6;function ln(r,e){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const n=r,o=Array(n.length);function s(l,a=!1){if(l===tn)return;if(l===an)return NaN;if(l===rn)return 1/0;if(l===on)return-1/0;if(l===sn)return-0;if(a)throw new Error("Invalid input");if(l in o)return o[l];const f=n[l];if(!f||typeof f!="object")o[l]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const g=f[0],p=e?.[g];if(p)return o[l]=p(s(f[1]));switch(g){case"Date":o[l]=new Date(f[1]);break;case"Set":const _=new Set;o[l]=_;for(let S=1;S<f.length;S+=1)_.add(s(f[S]));break;case"Map":const E=new Map;o[l]=E;for(let S=1;S<f.length;S+=2)E.set(s(f[S]),s(f[S+1]));break;case"RegExp":o[l]=new RegExp(f[1],f[2]);break;case"Object":o[l]=Object(f[1]);break;case"BigInt":o[l]=BigInt(f[1]);break;case"null":const O=Object.create(null);o[l]=O;for(let S=1;S<f.length;S+=2)O[f[S]]=s(f[S+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(f.length);o[l]=g;for(let p=0;p<f.length;p+=1){const _=f[p];_!==nn&&(g[p]=s(_))}}else{const g={};o[l]=g;for(const p in f){const _=f[p];g[p]=s(_)}}return o[l]}return s(0)}function cn(r){return r.filter(e=>e!=null)}const Oe=Ht(ye,lt,Qt,Zt),ct=ye[0],je=ye[1];ct();je();const G=it(ot)??{},ne=it(st)??{};function Ue(r){G[r]=re()}function fn({target:r}){const e=document.documentElement,n=[],o=[];let s=null;const l={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},f=!1,g=!1,p=!0,_=!1,E=!1,O=!1,S=!1,D,I=history.state?.[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const k=G[I];k&&(history.scrollRestoration="manual",scrollTo(k.x,k.y));let K,Ve,ie;async function qe(){ie=ie||Promise.resolve(),await ie,ie=null;const t=new URL(location.href),i=x(t,!0);s=null,await He(i,t,[])}function $e(t){o.some(i=>i?.snapshot)&&(ne[t]=o.map(i=>i?.snapshot?.capture()))}function Be(t){ne[t]?.forEach((i,c)=>{o[c]?.snapshot?.restore(i)})}async function ve(t,{noScroll:i=!1,replaceState:c=!1,keepFocus:u=!1,state:d={},invalidateAll:h=!1},y,m){return typeof t=="string"&&(t=new URL(t,Ye(document))),ue({url:t,scroll:i?re():null,keepfocus:u,redirect_chain:y,details:{state:d,replaceState:c},nav_token:m,accepted:()=>{h&&(S=!0)},blocked:()=>{},type:"goto"})}async function Fe(t){return s={id:t.id,promise:Ge(t).then(i=>(i.type==="loaded"&&i.state.error&&(s=null),i))},s.promise}async function le(...t){const c=Oe.filter(u=>t.some(d=>u.exec(d))).map(u=>Promise.all([...u.layouts,u.leaf].map(d=>d?.[1]())));await Promise.all(c)}async function He(t,i,c,u,d,h={},y){Ve=h;let m=t&&await Ge(t);if(m||(m=await We(i,{id:null},await ae(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=t?.url||i,Ve!==h)return!1;if(m.type==="redirect")if(c.length>10||c.includes(i.pathname))m=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ve(new URL(m.location,i).href,{},[...c,i.pathname],h),!1;else m.props.page?.status>=400&&await q.updated.check()&&await ee(i);if(n.length=0,S=!1,_=!0,u&&(Ue(u),$e(u)),m.props.page?.url&&m.props.page.url.pathname!==i.pathname&&(i.pathname=m.props.page?.url.pathname),d&&d.details){const{details:w}=d,b=w.replaceState?0:1;if(w.state[C]=I+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",i),!w.replaceState){let R=I+1;for(;ne[R]||G[R];)delete ne[R],delete G[R],R+=1}}if(s=null,g?(a=m.state,m.props.page&&(m.props.page.url=i),D.$set(m.props)):Ke(m),d){const{scroll:w,keepfocus:b}=d,{activeElement:R}=document;await he();const v=document.activeElement!==R&&document.activeElement!==document.body;if(!b&&!v&&await Ne(),p){const P=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));w?scrollTo(w.x,w.y):P?P.scrollIntoView():scrollTo(0,0)}}else await he();p=!0,m.props.page&&(K=m.props.page),y&&y(),_=!1}function Ke(t){a=t.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),K=t.props.page,D=new Wt({target:r,props:{...t.props,stores:q,components:o},hydrate:!0}),Be(I);const c={from:null,to:{params:a.params,route:{id:a.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};l.after_navigate.forEach(u=>u(c)),g=!0}async function Q({url:t,params:i,branch:c,status:u,error:d,route:h,form:y}){let m="never";for(const L of c)L?.slash!==void 0&&(m=L.slash);t.pathname=Lt(t.pathname,m),t.search=t.search;const w={type:"loaded",state:{url:t,params:i,branch:c,error:d,route:h},props:{constructors:cn(c).map(L=>L.node.component)}};y!==void 0&&(w.props.form=y);let b={},R=!K,v=0;for(let L=0;L<Math.max(c.length,a.branch.length);L+=1){const U=c[L],de=a.branch[L];U?.data!==de?.data&&(R=!0),U&&(b={...b,...U.data},R&&(w.props[`data_${v}`]=b),v+=1)}return(!a.url||t.href!==a.url.href||a.error!==d||y!==void 0&&y!==K.form||R)&&(w.props.page={error:d,params:i,route:{id:h?.id??null},status:u,url:new URL(t),form:y??null,data:R?b:K.data}),w}async function be({loader:t,parent:i,url:c,params:u,route:d,server_data_node:h}){let y=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await t();if(w.universal?.load){let b=function(...v){for(const P of v){const{href:L}=new URL(P,c);m.dependencies.add(L)}};const R={route:{get id(){return m.route=!0,d.id}},params:new Proxy(u,{get:(v,P)=>(m.params.add(P),v[P])}),data:h?.data??null,url:Ot(c,()=>{m.url=!0}),async fetch(v,P){let L;v instanceof Request?(L=v.url,P={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...P}):L=v;const U=new URL(L,c);return b(U.href),U.origin===c.origin&&(L=U.href.slice(c.origin.length)),g?Ct(L,U.href,P):Dt(L,P)},setHeaders:()=>{},depends:b,parent(){return m.parent=!0,i()}};y=await w.universal.load.call(null,R)??null,y=y?await en(y):null}return{node:w,loader:t,server:h,universal:w.universal?.load?{type:"data",data:y,uses:m}:null,data:y??h?.data??null,slash:w.universal?.trailingSlash??h?.slash}}function Me(t,i,c,u,d){if(S)return!0;if(!u)return!1;if(u.parent&&t||u.route&&i||u.url&&c)return!0;for(const h of u.params)if(d[h]!==a.params[h])return!0;for(const h of u.dependencies)if(n.some(y=>y(new URL(h))))return!0;return!1}function Ee(t,i){return t?.type==="data"?{type:"data",data:t.data,uses:{dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url},slash:t.slash}:t?.type==="skip"?i??null:null}async function Ge({id:t,invalidating:i,url:c,params:u,route:d}){if(s?.id===t)return s.promise;const{errors:h,layouts:y,leaf:m}=d,w=[...y,m];h.forEach(A=>A?.().catch(()=>{})),w.forEach(A=>A?.[1]().catch(()=>{}));let b=null;const R=a.url?t!==a.url.pathname+a.url.search:!1,v=a.route?d.id!==a.route.id:!1;let P=!1;const L=w.map((A,N)=>{const j=a.branch[N],T=!!A?.[0]&&(j?.loader!==A[1]||Me(P,v,R,j.server?.uses,u));return T&&(P=!0),T});if(L.some(Boolean)){try{b=await rt(c,L)}catch(A){return ce({status:A instanceof se?A.status:500,error:await ae(A,{url:c,params:u,route:{id:d.id}}),url:c,route:d})}if(b.type==="redirect")return b}const U=b?.nodes;let de=!1;const ke=w.map(async(A,N)=>{if(!A)return;const j=a.branch[N],T=U?.[N];if((!T||T.type==="skip")&&A[1]===j?.loader&&!Me(de,v,R,j.universal?.uses,u))return j;if(de=!0,T?.type==="error")throw T;return be({loader:A[1],url:c,params:u,route:d,parent:async()=>{const Se={};for(let Re=0;Re<N;Re+=1)Object.assign(Se,(await ke[Re])?.data);return Se},server_data_node:Ee(T===void 0&&A[0]?{type:"skip"}:T??null,A[0]?j?.server:void 0)})});for(const A of ke)A.catch(()=>{});const te=[];for(let A=0;A<w.length;A+=1)if(w[A])try{te.push(await ke[A])}catch(N){if(N instanceof at)return{type:"redirect",location:N.location};let j=500,T;if(U?.includes(N))j=N.status??j,T=N.error;else if(N instanceof se)j=N.status,T=N.body;else{if(await q.updated.check())return await ee(c);T=await ae(N,{params:u,url:c,route:{id:d.id}})}const pe=await Je(A,te,h);return pe?await Q({url:c,params:u,branch:te.slice(0,pe.idx).concat(pe.node),status:j,error:T,route:d}):await We(c,{id:d.id},T,j)}else te.push(void 0);return await Q({url:c,params:u,branch:te,status:200,error:null,route:d,form:i?void 0:null})}async function Je(t,i,c){for(;t--;)if(c[t]){let u=t;for(;!i[u];)u-=1;try{return{idx:u+1,node:{node:await c[t](),loader:c[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:i,url:c,route:u}){const d={};let h=null;if(lt[0]===0)try{const b=await rt(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=b.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ee(c)}const m=await be({loader:ct,url:c,params:d,route:u,parent:()=>Promise.resolve({}),server_data_node:Ee(h)}),w={node:await je(),loader:je,universal:null,server:null,data:null};return await Q({url:c,params:d,branch:[m,w],status:t,error:i,route:null})}function x(t,i){if(Ze(t,z))return;const c=fe(t);for(const u of Oe){const d=u.exec(c);if(d)return{id:t.pathname+t.search,invalidating:i,route:u,params:At(d),url:t}}}function fe(t){return It(t.pathname.slice(z.length)||"/")}function ze({url:t,type:i,intent:c,delta:u}){let d=!1;const h={from:{params:a.params,route:{id:a.route?.id??null},url:a.url},to:{params:c?.params??null,route:{id:c?.route?.id??null},url:t},willUnload:!c,type:i};u!==void 0&&(h.delta=u);const y={...h,cancel:()=>{d=!0}};return E||l.before_navigate.forEach(m=>m(y)),d?null:h}async function ue({url:t,scroll:i,keepfocus:c,redirect_chain:u,details:d,type:h,delta:y,nav_token:m,accepted:w,blocked:b}){const R=x(t,!1),v=ze({url:t,type:h,delta:y,intent:R});if(!v){b();return}const P=I;w(),E=!0,g&&q.navigating.set(v),await He(R,t,u,P,{scroll:i,keepfocus:c,details:d},m,()=>{E=!1,l.after_navigate.forEach(L=>L(v)),q.navigating.set(null)})}async function We(t,i,c,u){return t.origin===location.origin&&t.pathname===location.pathname&&!f?await ce({status:u,error:c,url:t,route:i}):await ee(t)}function ee(t){return location.href=t.href,new Promise(()=>{})}function ft(){let t;e.addEventListener("mousemove",h=>{const y=h.target;clearTimeout(t),t=setTimeout(()=>{u(y,2)},20)});function i(h){u(h.composedPath()[0],1)}e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(h=>{for(const y of h)y.isIntersecting&&(le(fe(new URL(y.target.href))),c.unobserve(y.target))},{threshold:0});function u(h,y){const m=Xe(h,e);if(!m)return;const{url:w,external:b}=Ae(m,z);if(b)return;const R=_e(m);if(!R.reload)if(y<=R.preload_data){const v=x(w,!1);v&&Fe(v)}else y<=R.preload_code&&le(fe(w))}function d(){c.disconnect();for(const h of e.querySelectorAll("a")){const{url:y,external:m}=Ae(h,z);if(m)continue;const w=_e(h);w.reload||(w.preload_code===Qe.viewport&&c.observe(h),w.preload_code===Qe.eager&&le(fe(y)))}}l.after_navigate.push(d),d()}return{after_navigate:t=>{Te(()=>(l.after_navigate.push(t),()=>{const i=l.after_navigate.indexOf(t);l.after_navigate.splice(i,1)}))},before_navigate:t=>{Te(()=>(l.before_navigate.push(t),()=>{const i=l.before_navigate.indexOf(t);l.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(t,i={})=>ve(t,i,[]),invalidate:t=>{if(typeof t=="function")n.push(t);else{const{href:i}=new URL(t,location.href);n.push(c=>c.href===i)}return qe()},invalidateAll:()=>(S=!0,qe()),preload_data:async t=>{const i=new URL(t,Ye(document)),c=x(i,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Fe(c)},preload_code:le,apply_action:async t=>{if(t.type==="error"){const i=new URL(location.href),{branch:c,route:u}=a;if(!u)return;const d=await Je(a.branch.length,c,u.errors);if(d){const h=await Q({url:i,params:a.params,branch:c.slice(0,d.idx).concat(d.node),status:t.status??500,error:t.error,route:u});a=h.state,D.$set(h.props),he().then(Ne)}}else if(t.type==="redirect")ve(t.location,{invalidateAll:!0},[]);else{const i={form:t.data,page:{...K,form:t.data,status:t.status}};D.$set(i),t.type==="success"&&he().then(Ne)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let i=!1;if(!E){const c={from:{params:a.params,route:{id:a.route?.id??null},url:a.url},to:null,willUnload:!0,type:"leave",cancel:()=>i=!0};l.before_navigate.forEach(u=>u(c))}i?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(I),xe(ot,G),$e(I),xe(st,ne))}),navigator.connection?.saveData||ft(),e.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const i=Xe(t.composedPath()[0],e);if(!i)return;const{url:c,external:u,target:d}=Ae(i,z);if(!c)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const h=_e(i);if(!(i instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:"))return;if(u||h.reload){ze({url:c,type:"link"})||t.preventDefault(),E=!0;return}const[m,w]=c.href.split("#");if(w!==void 0&&m===location.href.split("#")[0]){O=!0,Ue(I),a.url=c,q.page.set({...K,url:c}),q.page.notify();return}ue({url:c,scroll:h.noscroll?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),e.addEventListener("submit",t=>{if(t.defaultPrevented)return;const i=HTMLFormElement.prototype.cloneNode.call(t.target),c=t.submitter;if((c?.formMethod||i.method)!=="get")return;const d=new URL(c?.hasAttribute("formaction")&&c?.formAction||i.action);if(Ze(d,z))return;const h=t.target,{noscroll:y,reload:m}=_e(h);if(m)return;t.preventDefault(),t.stopPropagation();const w=new FormData(h),b=c?.getAttribute("name");b&&w.append(b,c?.getAttribute("value")??""),d.search=new URLSearchParams(w).toString(),ue({url:d,scroll:y?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{if(t.state?.[C]){if(t.state[C]===I)return;const i=G[t.state[C]];if(a.url.href.split("#")[0]===location.href.split("#")[0]){G[I]=re(),I=t.state[C],scrollTo(i.x,i.y);return}const c=t.state[C]-I;let u=!1;await ue({url:new URL(location.href),scroll:i,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=t.state[C]},blocked:()=>{history.go(-c),u=!0},type:"popstate",delta:c}),u||Be(I)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&q.navigating.set(null)})},_hydrate:async({status:t=200,error:i,node_ids:c,params:u,route:d,data:h,form:y})=>{f=!0;const m=new URL(location.href);({params:u={},route:d={id:null}}=x(m,!1)||{});let w;try{const b=c.map(async(R,v)=>{const P=h[v];return be({loader:ye[R],url:m,params:u,route:d,parent:async()=>{const L={};for(let U=0;U<v;U+=1)Object.assign(L,(await b[U]).data);return L},server_data_node:Ee(P)})});w=await Q({url:m,params:u,branch:await Promise.all(b),status:t,error:i,form:y,route:Oe.find(({id:R})=>R===d.id)??null})}catch(b){if(b instanceof at){await ee(new URL(b.location,location.href));return}w=await ce({status:b instanceof se?b.status:500,error:await ae(b,{url:m,params:u,route:d}),url:m,route:d})}Ke(w)}}}async function rt(r,e){const n=new URL(r);n.pathname=Tt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(l=>l?"1":"").join("_"));const o=await we(n.href),s=await o.json();if(!o.ok)throw new se(o.status,s);return s.nodes?.forEach(l=>{l?.type==="data"&&(l.data=ln(l.data),l.uses={dependencies:new Set(l.uses.dependencies??[]),params:new Set(l.uses.params??[]),parent:!!l.uses.parent,route:!!l.uses.route,url:!!l.uses.url})}),s}function ae(r,e){return r instanceof se?r.body:xt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{o(getSelection()?.removeAllRanges())})})}}async function _n({assets:r,env:e,hydrate:n,target:o,version:s}){St(r),Rt(s);const l=fn({target:o});kt({client:l}),n?await l._hydrate(n):l.goto(location.href,{replaceState:!0}),l._start_router()}export{_n as start};
