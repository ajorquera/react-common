import{j as p,a as i,L as u}from"./List-6217382f.js";import{s as c,B as s}from"./Box-aabd001d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";try{List.displayName="List",List.__docgenInfo={description:"Creates a list of items",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((item: Item) => void)"}},liProps:{defaultValue:null,description:"",name:"liProps",required:!1,type:{name:"Props"}},hoverBg:{defaultValue:null,description:"",name:"hoverBg",required:!1,type:{name:"string"}},hoverBackgroundColor:{defaultValue:null,description:"",name:"hoverBackgroundColor",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!1,type:{name:"string"}}}}}catch{}try{Li.displayName="Li",Li.__docgenInfo={description:"",displayName:"Li",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:{value:"li"},description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{Ul.displayName="Ul",Ul.__docgenInfo={description:"",displayName:"Ul",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:{value:"ul"},description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const m=c(s)`
    height: 100vh;
    transition: 0.5s;
    display: inline-block;
    position: fixed;
`,a=({containerProps:e,header:n,...d})=>p(m,{...e,children:[n,i(u,{...d})]});try{a.displayName="Sidebar",a.__docgenInfo={description:"Sidebar component",displayName:"Sidebar",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"Props"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((item: Item) => void)"}},liProps:{defaultValue:null,description:"",name:"liProps",required:!1,type:{name:"Props"}},hoverBg:{defaultValue:null,description:"",name:"hoverBg",required:!1,type:{name:"string"}},hoverBackgroundColor:{defaultValue:null,description:"",name:"hoverBackgroundColor",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Components/Sidebar",component:a,decorators:[],parameters:{}},r={args:{onClick:()=>{},containerProps:{bg:"gray"},liProps:{p:2,hoverBg:"white"},header:i(s,{bg:"blue",color:"white",p:4,children:"Header"}),items:[{label:"Home"},{label:"Partners"},{label:"Units"},{label:"Devices"},{label:"Monthly"},{label:"Live"},{label:"Export"},{label:"Account"},{label:"Manage",listProps:{mt:1,liProps:{p:1,hoverBg:"blue",hoverColor:"white",pl:2}},items:[{label:"Users"},{label:"Devices"},{label:"Partners"},{label:"Units"}]}]}};var l,t,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onClick: () => {},
    containerProps: {
      bg: 'gray'
    },
    liProps: {
      p: 2,
      hoverBg: 'white'
    },
    header: <Box bg="blue" color="white" p={4}>Header</Box>,
    items: [{
      label: 'Home'
    }, {
      label: 'Partners'
    }, {
      label: 'Units'
    }, {
      label: 'Devices'
    }, {
      label: 'Monthly'
    }, {
      label: 'Live'
    }, {
      label: 'Export'
    }, {
      label: 'Account'
    }, {
      label: 'Manage',
      listProps: {
        mt: 1,
        liProps: {
          p: 1,
          hoverBg: 'blue',
          hoverColor: 'white',
          pl: 2
        }
      },
      items: [{
        label: 'Users'
      }, {
        label: 'Devices'
      }, {
        label: 'Partners'
      }, {
        label: 'Units'
      }]
    }]
  }
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=Sidebar.stories-9b1889fd.js.map
