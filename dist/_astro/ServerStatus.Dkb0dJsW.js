import{r as c}from"./index.DiEladB3.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function E(){if(d)return n;d=1;var u=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function e(o,r,t){var i=null;if(t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),"key"in r){t={};for(var x in r)x!=="key"&&(t[x]=r[x])}else t=r;return r=t.ref,{$$typeof:u,type:o,key:i,ref:r!==void 0?r:null,props:t}}return n.Fragment=s,n.jsx=e,n.jsxs=e,n}var p;function h(){return p||(p=1,l.exports=E()),l.exports}var a=h();const R=()=>{const[u,s]=c.useState("loading"),[e,o]=c.useState(null);return c.useEffect(()=>{fetch("/api/health").then(r=>r.text()).then(r=>{try{const t=JSON.parse(r);s(t.message??r??"OK")}catch{s(r||"OK")}}).catch(r=>{o(r instanceof Error?r:new Error(String(r))),s("")})},[]),a.jsxs("div",{children:[a.jsx("h1",{children:"Server Status"}),a.jsx("p",{className:"text-green-700",children:u}),e&&a.jsxs("p",{className:"text-red-700",children:["Error: ",e?.message??String(e)]})]})};export{R as ServerStatus};
