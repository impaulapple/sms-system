(this["webpackJsonpreact-empty-template"]=this["webpackJsonpreact-empty-template"]||[]).push([[4],{683:function(t,e,a){},725:function(t,e,a){"use strict";a.r(e);var n=a(5),i=a(81),c=a(77),o=a(724),l=a(721),r=a(0),s=a.n(r),d=a(658),u=(a(683),a(485)),b=a(723),p=function(t){var e=t.children,a=t.value,c=t.index,o=Object(u.a)(t,["children","value","index"]);return Object(n.jsx)("div",Object(i.a)(Object(i.a)({role:"tabpanel",hidden:a!==c,id:"vertical-tabpanel-".concat(c),"aria-labelledby":"vertical-tab-".concat(c)},o),{},{children:a===c&&Object(n.jsx)(b.a,{p:3,children:e})}))},j=a(674),h=a(676),x=a(497),O=a(650),f=a(85),v=a(709),m=(a(703),Object(x.a)({overrides:{MuiTabs:{scrollButtonsDesktop:{backgroundColor:"rgb(0 0 0 / 13%)"}},MuiTab:{wrapper:{textTransform:"none"}},MuiOutlinedInput:{inputMarginDense:{padding:"6px 10.5px !important"}}}})),g=function(){var t=Object(h.a)().t,e=s.a.useState(0),a=Object(c.a)(e,2),i=a[0],r=a[1],d=s.a.useState(""),u=Object(c.a)(d,2),x=u[0],g=u[1],w=s.a.useState([{id:123,caption:"newTable",isEdit:!1,content:null},{id:124,caption:"test2",isEdit:!1,content:null}]),y=Object(c.a)(w,2),k=y[0],S=y[1],C=function(t){var e=t.target.id;if(Object(f.a)(e)&&(e=t.target.parentElement.id),!Object(f.a)(e)){for(var a=k.slice(),n=0,i=a.length;n<i;n++)if(a[n].id===parseInt(e)){a[n].isEdit=!0,g(a[n].caption);break}S(a)}},E=function(t){g(t.target.value)},T=function(t){if(13===t.charCode||"blur"===t.type){for(var e=t.target.value,a=t.target.id,n=k.slice(),i=0,c=n.length;i<c;i++)if(n[i].id===parseInt(a)){n[i].isEdit=!1,n[i].caption=e;break}S(n)}},D=function(t){if(!Object(f.a)(t)){var e=t[0],a=e.path,n=new FileReader;n.readAsDataURL(e),console.log(n),console.log(e,a)}},F=function(t,e,a){console.log(t,e,a)},M=function(t,e,a){console.log(t,e,a)};return Object(n.jsx)(O.a,{theme:m,children:Object(n.jsxs)(b.a,{sx:{bgcolor:"background.paper"},children:[Object(n.jsxs)(o.a,{style:{width:"80%"},value:i,onChange:function(t,e){r(e)},variant:"scrollable",scrollButtons:"auto",children:[k.map((function(t,e){return t.isEdit?Object(n.jsx)(l.a,{id:t.id,icon:Object(n.jsx)(j.a,{hiddenLabel:!0,autoFocus:!0,style:{width:130},id:t.id.toString(),variant:"outlined",size:"small",value:x,onBlur:T,onKeyPress:T,onChange:E})},e):Object(n.jsx)(l.a,{id:t.id,label:t.caption,onDoubleClick:C},e)})),Object(n.jsx)(l.a,{label:"\u271a",style:{minWidth:"48px",background:"#c3bfbf"},onClick:function(e){var a=k.slice(),n=Math.max.apply(null,a.map((function(t){return t.id})));a.push({id:++n,caption:t("newTable")+(a.length+1),isEdit:!1}),S(a)}})]}),k.map((function(e,a){return Object(f.a)(e.content)?Object(n.jsx)(p,{style:{width:"100%"},value:i,index:a,children:Object(n.jsx)(v.a,{style:{heigth:"500px",width:"600px"},acceptedFiles:[".csv",".xlsx"],filesLimit:1,maxFileSize:5242880,dropzoneText:t("uploadDataSource"),onChange:D,onSave:F,initialFiles:M})},a):Object(n.jsx)(p,{style:{width:"100%"},value:i,index:a,children:e.content},a)}))]})})},w=a(480),y=a.n(w),k=a(477),S=a.n(k),C=a(479),E=a.n(C),T=Object(d.a)((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper,display:"flex",height:"100%"},tabs:{borderRight:"1px solid ".concat(t.palette.divider)},test:{width:"50px !important"}}}));e.default=function(){var t=Object(h.a)().t,e=T(),a=[{caption:t("setting"),component:Object(n.jsx)(y.a,{})},{caption:t("dataSrouce"),component:Object(n.jsx)(g,{})},{caption:t("smsTool"),component:Object(n.jsx)(S.a,{})},{caption:t("smsScheduler"),component:Object(n.jsx)(E.a,{})}],r=s.a.useState(1),d=Object(c.a)(r,2),u=d[0],b=d[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(o.a,{orientation:"vertical",variant:"scrollable",value:u,onChange:function(t,e){b(e)},"aria-label":"Vertical tabs example",className:e.tabs,componentsprops:{indicator:{className:"Indicator"}},children:a.map((function(t,e){return Object(n.jsx)(l.a,Object(i.a)({label:t.caption},{id:"vertical-tab-".concat(a=e),"aria-controls":"vertical-tabpanel-".concat(a)}),e);var a}))}),a.map((function(t,e){return Object(n.jsx)(p,{style:{width:"100%"},value:u,index:e,children:t.component},e)}))]})}}}]);
//# sourceMappingURL=4.69b48a46.chunk.js.map