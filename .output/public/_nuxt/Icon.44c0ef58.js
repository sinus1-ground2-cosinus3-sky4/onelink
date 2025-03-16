import{a as Ft,r as te,b as ee,e as et,h as H,f as ne,i as oe,j,w as re,k as se,u as x,o as A,l as at,m as O,c as ut,p as ie,t as ce,q as le,s as ae}from"./entry.249b973f.js";function ue(){const t=Ft();return t._appConfig||(t._appConfig=te(ee)),t._appConfig}const Pt=Object.freeze({left:0,top:0,width:16,height:16}),Mt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),nt=Object.freeze({...Pt,...Mt});Object.freeze({...nt,body:"",hidden:!1});({...Pt});const Et=Object.freeze({width:null,height:null}),At=Object.freeze({...Et,...Mt});function fe(t,o){const n={...t};for(const r in o){const e=o[r],s=typeof e;r in Et?(e===null||e&&(s==="string"||s==="number"))&&(n[r]=e):s===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const he=/[\s,]+/;function de(t,o){o.split(he).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function pe(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/e,s%1===0?r(s):0)}}return o}const ge=/(-?[0-9.]*[0-9]+[0-9.]*)/g,me=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ft(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(ge);if(r===null||!r.length)return t;const e=[];let s=r.shift(),i=me.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?e.push(s):e.push(Math.ceil(c*o*n)/n)}else e.push(s);if(s=r.shift(),s===void 0)return e.join("");i=!i}}const ye=t=>t==="unset"||t==="undefined"||t==="none";function we(t,o){const n={...nt,...t},r={...At,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(y=>{const a=[],f=y.hFlip,S=y.vFlip;let w=y.rotate;f?S?w+=2:(a.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),a.push("scale(-1 1)"),e.top=e.left=0):S&&(a.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),a.push("scale(1 -1)"),e.top=e.left=0);let m;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:m=e.height/2+e.top,a.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:a.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,a.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}w%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),a.length&&(s='<g transform="'+a.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=e.width,u=e.height;let h,d;i===null?(d=c===null?"1em":c==="auto"?u:c,h=ft(d,l/u)):(h=i==="auto"?l:i,d=c===null?ft(h,u/l):c==="auto"?u:c);const p={},b=(y,a)=>{ye(a)||(p[y]=a.toString())};return b("width",h),b("height",d),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:p,body:s}}const be=/\sid="(\S+)"/g,xe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Se=0;function Ie(t,o=xe){const n=[];let r;for(;r=be.exec(t);)n.push(r[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof o=="function"?o(s):o+(Se++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}function ve(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ke(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ce(t){return'url("data:image/svg+xml,'+ke(t)+'")'}const ht={...At,inline:!1},je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_e={display:"inline-block"},G={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},dt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},pt={webkitMask:G,mask:G,background:Ot};for(const t in pt){const o=pt[t];for(const n in dt)o[t+n]=dt[n]}const N={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";N[t+"-flip"]=o,N[t.slice(0,1)+"-flip"]=o,N[t+"Flip"]=o});function gt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Te=(t,o)=>{const n=fe(ht,o),r={...je},e=o.mode||"svg",s={},i=o.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let a in o){const f=o[a];if(f!==void 0)switch(a){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[a]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&de(n,f);break;case"color":s.color=f;break;case"rotate":typeof f=="string"?n[a]=pe(f):typeof f=="number"&&(n[a]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const S=N[a];S?(f===!0||f==="true"||f===1)&&(n[S]=!0):ht[a]===void 0&&(r[a]=f)}}}const l=we(t,n),u=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),e==="svg"){r.style={...s,...c},Object.assign(r,u);let a=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Ie(l.body,f?()=>f+"ID"+a++:"iconifyVue"),H("svg",r)}const{body:h,width:d,height:p}=t,b=e==="mask"||(e==="bg"?!1:h.indexOf("currentColor")!==-1),y=ve(h,{...u,width:d+"",height:p+""});return r.style={...s,"--svg":Ce(y),width:gt(u.width),height:gt(u.height),..._e,...b?G:Ot,...c},H("span",r)},$e=Object.create(null),Fe=et({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?$e[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:Te({...nt,...n},t)}}),T=/^[a-z0-9]+(-[a-z0-9]+)*$/,P=(t,o,n,r="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;r=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),u={provider:e.length>0?e[0]:r,prefix:l,name:c};return o&&!z(u)?null:u}const s=e[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return o&&!z(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return o&&!z(c,n)?null:c}return null},z=(t,o)=>t?!!((t.provider===""||t.provider.match(T))&&(o&&t.prefix===""||t.prefix.match(T))&&t.name.match(T)):!1,Lt=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),M=Object.freeze({...Lt,...B}),K=Object.freeze({...M,body:"",hidden:!1});function Pe(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(o.rotate||0))%4;return r&&(n.rotate=r),n}function mt(t,o){const n=Pe(t,o);for(const r in K)r in B?r in t&&!(r in n)&&(n[r]=B[r]):r in o?n[r]=o[r]:r in t&&(n[r]=t[r]);return n}function Me(t,o){const n=t.icons,r=t.aliases||Object.create(null),e=Object.create(null);function s(i){if(n[i])return e[i]=[];if(!(i in e)){e[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(e[i]=[c].concat(l))}return e[i]}return(o||Object.keys(n).concat(Object.keys(r))).forEach(s),e}function Ee(t,o,n){const r=t.icons,e=t.aliases||Object.create(null);let s={};function i(c){s=mt(r[c]||e[c],s)}return i(o),n.forEach(i),mt(t,s)}function Nt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const r=Me(t);for(const e in r){const s=r[e];s&&(o(e,Ee(t,e,s)),n.push(e))}return n}const Ae={provider:"",aliases:{},not_found:{},...Lt};function q(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function zt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!q(t,Ae))return null;const n=o.icons;for(const e in n){const s=n[e];if(!e.match(T)||typeof s.body!="string"||!q(s,K))return null}const r=o.aliases||Object.create(null);for(const e in r){const s=r[e],i=s.parent;if(!e.match(T)||typeof i!="string"||!n[i]&&!r[i]||!q(s,K))return null}return o}const yt=Object.create(null);function Oe(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function k(t,o){const n=yt[t]||(yt[t]=Object.create(null));return n[o]||(n[o]=Oe(t,o))}function ot(t,o){return zt(o)?Nt(o,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Le(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let $=!1;function Dt(t){return typeof t=="boolean"&&($=t),$}function Rt(t){const o=typeof t=="string"?P(t,!0,$):t;if(o){const n=k(o.provider,o.prefix),r=o.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ne(t,o){const n=P(t,!0,$);if(!n)return!1;const r=k(n.provider,n.prefix);return Le(r,n.name,o)}function ze(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),$&&!o&&!t.prefix){let e=!1;return zt(t)&&(t.prefix="",Nt(t,(s,i)=>{i&&Ne(s,i)&&(e=!0)})),e}const n=t.prefix;if(!z({provider:o,prefix:n,name:"a"}))return!1;const r=k(o,n);return!!ot(r,t)}const Ht=Object.freeze({width:null,height:null}),Bt=Object.freeze({...Ht,...B}),De=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Re=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(De);if(r===null||!r.length)return t;const e=[];let s=r.shift(),i=Re.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?e.push(s):e.push(Math.ceil(c*o*n)/n)}else e.push(s);if(s=r.shift(),s===void 0)return e.join("");i=!i}}const He=t=>t==="unset"||t==="undefined"||t==="none";function Be(t,o){const n={...M,...t},r={...Bt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(y=>{const a=[],f=y.hFlip,S=y.vFlip;let w=y.rotate;f?S?w+=2:(a.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),a.push("scale(-1 1)"),e.top=e.left=0):S&&(a.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),a.push("scale(1 -1)"),e.top=e.left=0);let m;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:m=e.height/2+e.top,a.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:a.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,a.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}w%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),a.length&&(s='<g transform="'+a.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=e.width,u=e.height;let h,d;i===null?(d=c===null?"1em":c==="auto"?u:c,h=wt(d,l/u)):(h=i==="auto"?l:i,d=c===null?wt(h,u/l):c==="auto"?u:c);const p={},b=(y,a)=>{He(a)||(p[y]=a.toString())};return b("width",h),b("height",d),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:p,body:s}}const Ve=/\sid="(\S+)"/g,Ue="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let qe=0;function Qe(t,o=Ue){const n=[];let r;for(;r=Ve.exec(t);)n.push(r[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof o=="function"?o(s):o+(qe++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}const W=Object.create(null);function Ge(t,o){W[t]=o}function J(t){return W[t]||W[""]}function rt(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const st=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;_.length>0;)_.length===1||Math.random()>.5?D.push(_.shift()):D.push(_.pop());st[""]=rt({resources:["https://api.iconify.design"].concat(D)});function Ke(t,o){const n=rt(o);return n===null?!1:(st[t]=n,!0)}function it(t){return st[t]}const We=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let bt=We();function Je(t,o){const n=it(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(i=>{e=Math.max(e,i.length)});const s=o+".json?icons=";r=n.maxURL-e-n.path.length-s.length}return r}function Xe(t){return t===404}const Ye=(t,o,n)=>{const r=[],e=Je(t,o),s="icons";let i={type:s,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,u)=>{c+=l.length+1,c>=e&&u>0&&(r.push(i),i={type:s,provider:t,prefix:o,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Ze(t){if(typeof t=="string"){const o=it(t);if(o)return o.path}return"/"}const tn=(t,o,n)=>{if(!bt){n("abort",424);return}let r=Ze(o.provider);switch(o.type){case"icons":{const s=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=o.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let e=503;bt(t+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Xe(i)?"abort":"next",i)});return}return e=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",e)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",e)})},en={prepare:Ye,send:tn};function nn(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,s)=>e.provider!==s.provider?e.provider.localeCompare(s.provider):e.prefix!==s.prefix?e.prefix.localeCompare(s.prefix):e.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return t.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const s=e.provider,i=e.prefix,c=e.name,l=n[s]||(n[s]=Object.create(null)),u=l[i]||(l[i]=k(s,i));let h;c in u.icons?h=o.loaded:i===""||u.missing.has(c)?h=o.missing:h=o.pending;const d={provider:s,prefix:i,name:c};h.push(d)}),o}function Vt(t,o){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(e=>e.id!==o))})}function on(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const r=t.provider,e=t.prefix;o.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==e)return!0;const u=l.name;if(t.icons[u])i.loaded.push({provider:r,prefix:e,name:u});else if(t.missing.has(u))i.missing.push({provider:r,prefix:e,name:u});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Vt([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let rn=0;function sn(t,o,n){const r=rn++,e=Vt.bind(null,n,r);if(!o.pending.length)return e;const s={id:r,icons:o,callback:t,abort:e};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),e}function cn(t,o=!0,n=!1){const r=[];return t.forEach(e=>{const s=typeof e=="string"?P(e,o,n):e;s&&r.push(s)}),r}var ln={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function an(t,o,n,r){const e=t.resources.length,s=t.random?Math.floor(Math.random()*e):t.index;let i;if(t.random){let g=t.resources.slice(0);for(i=[];g.length>1;){const I=Math.floor(Math.random()*g.length);i.push(g[I]),g=g.slice(0,I).concat(g.slice(I+1))}i=i.concat(g)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let l="pending",u=0,h,d=null,p=[],b=[];typeof r=="function"&&b.push(r);function y(){d&&(clearTimeout(d),d=null)}function a(){l==="pending"&&(l="aborted"),y(),p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function f(g,I){I&&(b=[]),typeof g=="function"&&b.push(g)}function S(){return{startTime:c,payload:o,status:l,queriesSent:u,queriesPending:p.length,subscribe:f,abort:a}}function w(){l="failed",b.forEach(g=>{g(void 0,h)})}function m(){p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function Zt(g,I,C){const E=I!=="success";switch(p=p.filter(v=>v!==g),l){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(I==="abort"){h=C,w();return}if(E){h=C,p.length||(i.length?U():w());return}if(y(),m(),!t.random){const v=t.resources.indexOf(g.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",b.forEach(v=>{v(C)})}function U(){if(l!=="pending")return;y();const g=i.shift();if(g===void 0){if(p.length){d=setTimeout(()=>{y(),l==="pending"&&(m(),w())},t.timeout);return}w();return}const I={status:"pending",resource:g,callback:(C,E)=>{Zt(I,C,E)}};p.push(I),u++,d=setTimeout(U,t.rotate),n(g,o,I.callback)}return setTimeout(U),S}function Ut(t){const o={...ln,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function e(c,l,u){const h=an(o,c,l,(d,p)=>{r(),u&&u(d,p)});return n.push(h),h}function s(c){return n.find(l=>c(l))||null}return{query:e,find:s,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:r}}function xt(){}const Q=Object.create(null);function un(t){if(!Q[t]){const o=it(t);if(!o)return;const n=Ut(o),r={config:o,redundancy:n};Q[t]=r}return Q[t]}function fn(t,o,n){let r,e;if(typeof t=="string"){const s=J(t);if(!s)return n(void 0,424),xt;e=s.send;const i=un(t);i&&(r=i.redundancy)}else{const s=rt(t);if(s){r=Ut(s);const i=t.resources?t.resources[0]:"",c=J(i);c&&(e=c.send)}}return!r||!e?(n(void 0,424),xt):r.query(o,e,n)().abort}const St="iconify2",F="iconify",qt=F+"-count",It=F+"-version",Qt=36e5,hn=168;function X(t,o){try{return t.getItem(o)}catch{}}function ct(t,o,n){try{return t.setItem(o,n),!0}catch{}}function vt(t,o){try{t.removeItem(o)}catch{}}function Y(t,o){return ct(t,qt,o.toString())}function Z(t){return parseInt(X(t,qt))||0}const V={local:!0,session:!0},Gt={local:new Set,session:new Set};let lt=!1;function dn(t){lt=t}let L=typeof window>"u"?{}:window;function Kt(t){const o=t+"Storage";try{if(L&&L[o]&&typeof L[o].length=="number")return L[o]}catch{}V[t]=!1}function Wt(t,o){const n=Kt(t);if(!n)return;const r=X(n,It);if(r!==St){if(r){const c=Z(n);for(let l=0;l<c;l++)vt(n,F+l.toString())}ct(n,It,St),Y(n,0);return}const e=Math.floor(Date.now()/Qt)-hn,s=c=>{const l=F+c.toString(),u=X(n,l);if(typeof u=="string"){try{const h=JSON.parse(u);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>e&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&o(h,c))return!0}catch{}vt(n,l)}};let i=Z(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,Y(n,i)):Gt[t].add(c))}function Jt(){if(!lt){dn(!0);for(const t in V)Wt(t,o=>{const n=o.data,r=o.provider,e=n.prefix,s=k(r,e);if(!ot(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function pn(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const r in V)Wt(r,e=>{const s=e.data;return e.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===o});return!0}function gn(t,o){lt||Jt();function n(r){let e;if(!V[r]||!(e=Kt(r)))return;const s=Gt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Z(e),!Y(e,i+1))return;const c={cached:Math.floor(Date.now()/Qt),provider:t.provider,data:o};return ct(e,F+i.toString(),JSON.stringify(c))}o.lastModified&&!pn(t,o.lastModified)||Object.keys(o.icons).length&&(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function kt(){}function mn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,on(t)}))}function yn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,e=t.iconsToLoad;delete t.iconsToLoad;let s;if(!e||!(s=J(n)))return;s.prepare(n,r,e).forEach(c=>{fn(n,c,l=>{if(typeof l!="object")c.icons.forEach(u=>{t.missing.add(u)});else try{const u=ot(t,l);if(!u.length)return;const h=t.pendingIcons;h&&u.forEach(d=>{h.delete(d)}),gn(t,l)}catch(u){console.error(u)}mn(t)})})}))}const Xt=(t,o)=>{const n=cn(t,!0,Dt()),r=nn(n);if(!r.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(r.loaded,r.missing,r.pending,kt)}),()=>{l=!1}}const e=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:u,prefix:h}=l;if(h===c&&u===i)return;i=u,c=h,s.push(k(u,h));const d=e[u]||(e[u]=Object.create(null));d[h]||(d[h]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:h,name:d}=l,p=k(u,h),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(d)||(b.add(d),e[u][h].push(d))}),s.forEach(l=>{const{provider:u,prefix:h}=l;e[u][h].length&&yn(l,e[u][h])}),o?sn(o,r,s):kt},wn=t=>new Promise((o,n)=>{const r=typeof t=="string"?P(t,!0):t;if(!r){n(t);return}Xt([r||t],e=>{if(e.length&&r){const s=Rt(r);if(s){o({...M,...s});return}}n(t)})});function bn(t,o){const n={...t};for(const r in o){const e=o[r],s=typeof e;r in Ht?(e===null||e&&(s==="string"||s==="number"))&&(n[r]=e):s===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const xn=/[\s,]+/;function Sn(t,o){o.split(xn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function In(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/e,s%1===0?r(s):0)}}return o}function vn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function kn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Cn(t){return'url("data:image/svg+xml,'+kn(t)+'")'}const Ct={...Bt,inline:!1},jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_n={display:"inline-block"},tt={backgroundColor:"currentColor"},Yt={backgroundColor:"transparent"},jt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},_t={webkitMask:tt,mask:tt,background:Yt};for(const t in _t){const o=_t[t];for(const n in jt)o[t+n]=jt[n]}const R={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";R[t+"-flip"]=o,R[t.slice(0,1)+"-flip"]=o,R[t+"Flip"]=o});function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const $t=(t,o)=>{const n=bn(Ct,o),r={...jn},e=o.mode||"svg",s={},i=o.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let a in o){const f=o[a];if(f!==void 0)switch(a){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[a]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Sn(n,f);break;case"color":s.color=f;break;case"rotate":typeof f=="string"?n[a]=In(f):typeof f=="number"&&(n[a]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const S=R[a];S?(f===!0||f==="true"||f===1)&&(n[S]=!0):Ct[a]===void 0&&(r[a]=f)}}}const l=Be(t,n),u=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),e==="svg"){r.style={...s,...c},Object.assign(r,u);let a=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Qe(l.body,f?()=>f+"ID"+a++:"iconifyVue"),H("svg",r)}const{body:h,width:d,height:p}=t,b=e==="mask"||(e==="bg"?!1:h.indexOf("currentColor")!==-1),y=vn(h,{...u,width:d+"",height:p+""});return r.style={...s,"--svg":Cn(y),width:Tt(u.width),height:Tt(u.height),..._n,...b?tt:Yt,...c},H("span",r)};Dt(!0);Ge("",en);if(typeof document<"u"&&typeof window<"u"){Jt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ze(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const r="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Ke(n,e)||console.error(r)}catch{console.error(r)}}}}const Tn={...M,body:""};et({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=P(t,!1,!0))===null)return this.abortLoading(),null;const r=Rt(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Xt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:r,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return $t(Tn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),$t({...M,...o.data},n)}});const $n=["width","height"],Fn=et({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(t){var y;let o,n;const r=Ft(),e=ue();(y=e==null?void 0:e.nuxtIcon)!=null&&y.aliases;const s=t,i=ne("icons",()=>({})),c=oe(!1),l=j(()=>{var a;return(((a=e==null?void 0:e.nuxtIcon)==null?void 0:a.aliases)||{})[s.name]||s.name}),u=j(()=>{var a;return(a=i.value)==null?void 0:a[l.value]}),h=j(()=>r.vueApp.component(l.value)),d=j(()=>{var f;const a=s.size||((f=e.nuxtIcon)==null?void 0:f.size)||"1em";return String(Number(a))===a?`${a}px`:a}),p=j(()=>{var a;return((a=e==null?void 0:e.nuxtIcon)==null?void 0:a.class)??"icon"});async function b(){var a;h.value||(a=i.value)!=null&&a[l.value]||(c.value=!0,i.value[l.value]=await wn(l.value).catch(()=>{}),c.value=!1)}return re(()=>l.value,b),!h.value&&([o,n]=se(()=>b()),o=await o,n()),(a,f)=>x(c)?(A(),at("span",{key:0,class:O(x(p)),width:x(d),height:x(d)},null,10,$n)):x(u)?(A(),ut(x(Fe),{key:1,icon:x(u),class:O(x(p)),width:x(d),height:x(d)},null,8,["icon","class","width","height"])):x(h)?(A(),ut(ie(x(h)),{key:2,class:O(x(p)),width:x(d),height:x(d)},null,8,["class","width","height"])):(A(),at("span",{key:3,class:O(x(p)),style:le({fontSize:x(d),lineHeight:x(d),width:x(d),height:x(d)})},ce(t.name),7))}});const Mn=ae(Fn,[["__scopeId","data-v-6e89ca90"]]);export{Mn as default};
