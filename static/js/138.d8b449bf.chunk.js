"use strict";(self.webpackChunklot=self.webpackChunklot||[]).push([[138],{1138:function(e,t,n){n.r(t),n.d(t,{FakeData:function(){return v}});var a=n(3430),o=n(6818),l=n(177),r=n(3099),i=n(1333),c=n(8443),d=n(3231),u=n(2791),s=n(184),p=o.Z.Option,f=(l.Z.TextArea,["autodetect","float32","integer32","boolean","string"]),v=function(e){var t,n,v,h,g,m,y,x=null===(t=e.cell)||void 0===t?void 0:t.toJSON(),Z=(0,u.useState)((null===(n=x.config)||void 0===n?void 0:n.modelTemplate)||""),b=(0,a.Z)(Z,2),j=b[0],C=b[1],P=(0,u.useState)((null===(v=x.config)||void 0===v?void 0:v.modelTypeTemplate)||""),O=(0,a.Z)(P,2),E=O[0],w=O[1],T=(0,u.useState)((null===(h=x.config)||void 0===h?void 0:h.dataPath)||""),S=(0,a.Z)(T,2),k=S[0],M=S[1],N=(0,u.useState)((null===(g=x.config)||void 0===g?void 0:g.shapePath)||""),R=(0,a.Z)(N,2),L=R[0],_=R[1],I=(0,u.useState)((null===(m=x.config)||void 0===m?void 0:m.dataTypeTemplate)||""),D=(0,a.Z)(I,2),G=D[0],W=D[1],z=(0,u.useState)((null===(y=x.config)||void 0===y?void 0:y.resultPath)||""),F=(0,a.Z)(z,2),J=F[0],V=F[1];return(0,u.useEffect)((function(){if(e){var t,n,a,o,l,r,i,c=null===(t=e.cell)||void 0===t?void 0:t.toJSON();C(null===(n=c.config)||void 0===n?void 0:n.modelTemplate),w(null===(a=c.config)||void 0===a?void 0:a.modelTypeTemplate),M(null===(o=c.config)||void 0===o?void 0:o.dataPath),_(null===(l=c.config)||void 0===l?void 0:l.shapePath),W(null===(r=c.config)||void 0===r?void 0:r.dataTypeTemplate),V(null===(i=c.config)||void 0===i?void 0:i.resultPath)}}),[e.cellId]),(0,u.useEffect)((function(){var t;null===(t=e.cell)||void 0===t||t.prop("config",{modelTemplate:j,modelTypeTemplate:E,dataPath:k,shapePath:L,dataTypeTemplate:G,resultPath:J})}),[e.cellId,j,E,k,L,G,J]),(0,s.jsxs)(r.Z,{direction:"vertical",children:[(0,s.jsx)(i.Z,{plain:!0,children:"Configuration"}),(0,s.jsx)(c.Z,{children:"Model Path Template"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,{placeholder:"e.g./tmp/myModel.json or {{data.foo}}",value:j,onChange:function(e){return C(e.target.value)}})}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(d.ZP.Group,{value:E,onChange:function(e){return w(e.target.value)},children:(0,s.jsxs)(r.Z,{direction:"vertical",children:[(0,s.jsx)(d.ZP,{value:"layers",children:"Load this model as a layers model"}),(0,s.jsx)(d.ZP,{value:"graph",children:"Load this model as a graph model"})]})})}),(0,s.jsx)(i.Z,{plain:!0,children:"Predict on"}),(0,s.jsx)(c.Z,{children:"Data Path"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,{placeholder:"e.g.data.predictData",value:k,onChange:function(e){return M(e.target.value)}})}),(0,s.jsx)(c.Z,{children:"Shape Path"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,{placeholder:"e.g.data.shape",value:L,onChange:function(e){return _(e.target.value)}})}),(0,s.jsx)(c.Z,{children:"Data Type"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(o.Z,{defaultValue:G,onChange:function(e){return W(e)},style:{width:"100%"},children:f.map((function(e){return(0,s.jsx)(p,{children:e},e)}))})}),(0,s.jsx)(i.Z,{plain:!0,children:"Predict on"}),(0,s.jsx)(c.Z,{children:"Result Path"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(l.Z,{placeholder:"e.g.transorFlowResult",value:J,onChange:function(e){return V(e.target.value)}})})]})}},1333:function(e,t,n){var a=n(7462),o=n(4942),l=n(2791),r=n(1694),i=n.n(r),c=n(3785),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};t.Z=function(e){var t,n=l.useContext(c.E_),r=n.getPrefixCls,u=n.direction,s=e.prefixCls,p=e.type,f=void 0===p?"horizontal":p,v=e.orientation,h=void 0===v?"center":v,g=e.orientationMargin,m=e.className,y=e.children,x=e.dashed,Z=e.plain,b=d(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),j=r("divider",s),C=h.length>0?"-".concat(h):h,P=!!y,O="left"===h&&null!=g,E="right"===h&&null!=g,w=i()(j,"".concat(j,"-").concat(f),(t={},(0,o.Z)(t,"".concat(j,"-with-text"),P),(0,o.Z)(t,"".concat(j,"-with-text").concat(C),P),(0,o.Z)(t,"".concat(j,"-dashed"),!!x),(0,o.Z)(t,"".concat(j,"-plain"),!!Z),(0,o.Z)(t,"".concat(j,"-rtl"),"rtl"===u),(0,o.Z)(t,"".concat(j,"-no-default-orientation-margin-left"),O),(0,o.Z)(t,"".concat(j,"-no-default-orientation-margin-right"),E),t),m),T=(0,a.Z)((0,a.Z)({},O&&{marginLeft:g}),E&&{marginRight:g});return l.createElement("div",(0,a.Z)({className:w},b,{role:"separator"}),y&&l.createElement("span",{className:"".concat(j,"-inner-text"),style:T},y))}},3231:function(e,t,n){n.d(t,{ZP:function(){return T}});var a=n(4942),o=n(7462),l=n(2791),r=n(8083),i=n(1694),c=n.n(i),d=n(8834),u=n(3785),s=l.createContext(null),p=s.Provider,f=s,v=n(4824),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},g=function(e,t){var n,i=l.useContext(f),s=l.useContext(u.E_),p=s.getPrefixCls,g=s.direction,m=l.useRef(),y=(0,d.sQ)(t,m);l.useEffect((function(){(0,v.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var x=e.prefixCls,Z=e.className,b=e.children,j=e.style,C=h(e,["prefixCls","className","children","style"]),P=p("radio",x),O=(0,o.Z)({},C);i&&(O.name=i.name,O.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},O.checked=e.value===i.value,O.disabled=e.disabled||i.disabled);var E=c()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),O.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),O.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===g),n),Z);return l.createElement("label",{className:E,style:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(r.Z,(0,o.Z)({},O,{type:"radio",prefixCls:P,ref:y})),void 0!==b?l.createElement("span",null,b):null)},m=l.forwardRef(g);m.displayName="Radio";var y=m,x=n(9439),Z=n(5179),b=n(1815);var j=l.forwardRef((function(e,t){var n=l.useContext(u.E_),r=n.getPrefixCls,i=n.direction,d=l.useContext(b.Z),s=(0,Z.Z)(e.defaultValue,{value:e.value}),f=(0,x.Z)(s,2),v=f[0],h=f[1];return l.createElement(p,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var o=e.onChange;o&&a!==n&&o(t)},value:v,disabled:e.disabled,name:e.name}},function(){var n,u=e.prefixCls,s=e.className,p=void 0===s?"":s,f=e.options,h=e.optionType,g=e.buttonStyle,m=void 0===g?"outline":g,x=e.disabled,Z=e.children,b=e.size,j=e.style,C=e.id,P=e.onMouseEnter,O=e.onMouseLeave,E=r("radio",u),w="".concat(E,"-group"),T=Z;if(f&&f.length>0){var S="button"===h?"".concat(E,"-button"):E;T=f.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(y,{key:e.toString(),prefixCls:S,disabled:x,value:e,checked:v===e},e):l.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:S,disabled:e.disabled||x,value:e.value,checked:v===e.value,style:e.style},e.label)}))}var k=b||d,M=c()(w,"".concat(w,"-").concat(m),(n={},(0,a.Z)(n,"".concat(w,"-").concat(k),k),(0,a.Z)(n,"".concat(w,"-rtl"),"rtl"===i),n),p);return l.createElement("div",(0,o.Z)({},function(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}(e),{className:M,style:j,onMouseEnter:P,onMouseLeave:O,id:C,ref:t}),T)}())})),C=l.memo(j),P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},O=function(e,t){var n=l.useContext(f),a=l.useContext(u.E_).getPrefixCls,r=e.prefixCls,i=P(e,["prefixCls"]),c=a("radio-button",r);return n&&(i.checked=e.value===n.value,i.disabled=e.disabled||n.disabled),l.createElement(y,(0,o.Z)({prefixCls:c},i,{type:"radio",ref:t}))},E=l.forwardRef(O),w=y;w.Button=E,w.Group=C;var T=w}}]);
//# sourceMappingURL=138.d8b449bf.chunk.js.map