import{R as r,S as c,T as u,J as s,M as i,a as m,N as p,U as f}from"./index-d9e55726.js";function d(){const t=c({show:!1}),e=l=>{t.show=l},o=l=>{s(t,l,{transitionAppear:!0}),e(!0)},n=()=>e(!1);return u({open:o,close:n,toggle:e}),{open:o,close:n,state:t,toggle:e}}function h(t){const e=r(t),o=document.createElement("div");return document.body.appendChild(o),{instance:e.mount(o),unmount(){e.unmount(),document.body.removeChild(o)}}}let a;const w={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let C=s({},w);function g(){({instance:a}=h({setup(){const{state:e,toggle:o}=d();return()=>m(f,p(e,{"onUpdate:show":o}),null)}}))}function v(t){return i?new Promise((e,o)=>{a||g(),a.open(s({},C,t,{callback:n=>{(n==="confirm"?e:o)(n)}}))}):Promise.resolve()}const b=t=>v(s({showCancelButton:!0},t));export{v as a,h as m,b as s,d as u};
