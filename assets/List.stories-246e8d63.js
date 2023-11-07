import{r as x}from"./index-76fb7be0.js";import{s as C,B as N,i as f,n as w,t as P}from"./Box-aabd001d.js";import"./_commonjsHelpers-de833af9.js";var q={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=x,B=Symbol.for("react.element"),E=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,D=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function L(e,r,o){var t,a={},l=null,g=null;o!==void 0&&(l=""+o),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(g=r.ref);for(t in r)T.call(r,t)&&!O.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:B,type:e,key:l,ref:g,props:a,_owner:D.current}}p.Fragment=E;p.jsx=L;p.jsxs=L;q.exports=p;var $=q.exports;const R=$.jsx,s=C(N)({listStyle:"none",marginTop:0,marginBottom:0,paddingLeft:0});s.defaultProps={as:"ul"};try{s.displayName="Ul",s.__docgenInfo={description:"",displayName:"Ul",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:{value:"ul"},description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const c=f("disabled",w`
    opacity: 0.5;
    pointer-events: none;
    font-style: italic;
`),m=f("$highlight",w`
    background-color: ${e=>P(`colors.${e.$highlight}`,e.$highlight)};
`),u=f("$clickable","cursor: pointer;");try{c.displayName="getDisabled",c.__docgenInfo={description:"",displayName:"getDisabled",props:{}}}catch{}try{m.displayName="getHighlight",m.__docgenInfo={description:"",displayName:"getHighlight",props:{}}}catch{}try{u.displayName="getClickable",u.__docgenInfo={description:"",displayName:"getClickable",props:{}}}catch{}const d=C(N).attrs(e=>({$clickable:e.clickable,clickable:void 0}))(c,u,m);d.defaultProps={as:"li"};try{d.displayName="Li",d.__docgenInfo={description:"",displayName:"Li",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const _=({items:e,onClick:r,liProps:o,...t})=>R(s,{...t,children:e.map((a,l)=>x.createElement(d,{clickable:!!r,disabled:a.disabled,...o,...a.liProps,key:l,onClick:()=>r&&r(a)},a.label))});try{_.displayName="List",_.__docgenInfo={description:"Creates a list of items",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((item: Item) => void)"}},liProps:{defaultValue:null,description:"",name:"liProps",required:!1,type:{name:"Props"}},hoverBg:{defaultValue:null,description:"",name:"hoverBg",required:!1,type:{name:"string"}},hoverBackgroundColor:{defaultValue:null,description:"",name:"hoverBackgroundColor",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Components/List",component:_,decorators:[],parameters:{}},n={args:{onClick:void 0,items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]}},i={args:{border:"1px solid black",width:"200px",maxHeight:"200px",overflowY:"auto",onClick:e=>{console.log(e)},liProps:{p:3,hoverBg:"blue",hoverColor:"white"},items:[{label:"Item 1",disabled:!0},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 4"},{label:"Item 4"},{label:"Item 4"},{label:"Item 4"},{label:"Item 4"}]}};var b,y,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onClick: undefined,
    items: [{
      label: 'Item 1'
    }, {
      label: 'Item 2'
    }, {
      label: 'Item 3'
    }, {
      label: 'Item 4'
    }]
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var I,v,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    border: '1px solid black',
    width: '200px',
    maxHeight: '200px',
    overflowY: 'auto',
    onClick: (args: any) => {
      console.log(args);
    },
    liProps: {
      p: 3,
      hoverBg: 'blue',
      hoverColor: 'white'
    },
    items: [{
      label: 'Item 1',
      disabled: true
    }, {
      label: 'Item 2'
    }, {
      label: 'Item 3'
    }, {
      label: 'Item 4'
    }, {
      label: 'Item 4'
    }, {
      label: 'Item 4'
    }, {
      label: 'Item 4'
    }, {
      label: 'Item 4'
    }, {
      label: 'Item 4'
    }]
  }
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const U=["Default","FloatingList"];export{n as Default,i as FloatingList,U as __namedExportsOrder,H as default};
//# sourceMappingURL=List.stories-246e8d63.js.map
