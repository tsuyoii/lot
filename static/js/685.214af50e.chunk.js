"use strict";(self.webpackChunklot=self.webpackChunklot||[]).push([[685],{9685:function(e,n,t){t.r(n),t.d(n,{FakeData:function(){return m}});var l=t(5531),o=t(3430),a=t(6818),c=t(3099),i=t(1333),r=t(8443),s=t(177),u=t(2014),d=t(7309),f=t(7528),v=t(2791),p=t(184),h=a.Z.Option,g=["ascii","utf8","utf16le","base64","binary","hex"],m=function(e){var n,t,m,Z,y,x,b,j=null===(n=e.cell)||void 0===n?void 0:n.toJSON(),C=(0,v.useState)((null===(t=j.config)||void 0===t?void 0:t.commandTemplate)||""),O=(0,o.Z)(C,2),k=O[0],E=O[1],w=(0,v.useState)((null===(m=j.config)||void 0===m?void 0:m.cwdTemplate)||""),P=(0,o.Z)(w,2),S=P[0],T=P[1],N=(0,v.useState)((null===(Z=j.config)||void 0===Z?void 0:Z.detached)||!1),R=(0,o.Z)(N,2),I=R[0],_=R[1],M=(0,v.useState)(null===(y=j.config)||void 0===y?void 0:y.encodingTemplate),V=(0,o.Z)(M,2),D=V[0],Y=V[1],z=(0,v.useState)((null===(x=j.config)||void 0===x?void 0:x.resultPath)||""),F=(0,o.Z)(z,2),J=F[0],$=F[1],L=(0,v.useState)(""),W=(0,o.Z)(L,2),q=W[0],A=W[1],B=(0,v.useState)(""),G=(0,o.Z)(B,2),H=G[0],K=G[1],Q=(0,v.useState)((null===(b=j.config)||void 0===b?void 0:b.envsTemplate)||[]),U=(0,o.Z)(Q,2),X=U[0],ee=U[1];(0,v.useEffect)((function(){if(e){var n,t,l,o,a,c,i,r=null===(n=e.cell)||void 0===n?void 0:n.toJSON();E(null===(t=r.config)||void 0===t?void 0:t.commandTemplate),T(null===(l=r.config)||void 0===l?void 0:l.cwdTemplate),_(null===(o=r.config)||void 0===o?void 0:o.detached),Y(null===(a=r.config)||void 0===a?void 0:a.encodingTemplate),$(null===(c=r.config)||void 0===c?void 0:c.resultPath),ee((null===(i=r.config)||void 0===i?void 0:i.envsTemplate)||[])}}),[e.cellId]);return(0,p.jsxs)(c.Z,{direction:"vertical",children:[(0,p.jsx)(i.Z,{plain:!0,children:"Configuration"}),(0,p.jsx)(r.Z,{children:"Command"}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(s.Z,{placeholder:"grep -c 'foo' {{data.filePath}}",value:k,onChange:function(e){return E(e.target.value)}})}),(0,p.jsx)(r.Z,{children:"Current Working Directory"}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(s.Z,{placeholder:"e.g./my/dir or {{myDirectory}}",value:S,onChange:function(e){return T(e.target.value)}})}),(0,p.jsx)(r.Z,{children:"Encoding"}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(a.Z,{defaultValue:g[0],value:D,onChange:function(e){return Y(e)},style:{width:"100%"},children:g.map((function(e){return(0,p.jsx)(h,{children:e},e)}))})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(u.Z,{checked:I,onChange:function(e){return _(e.target.checked)},children:"Run in detached state?"})}),(0,p.jsx)(i.Z,{plain:!0,children:"Environment Variables"}),(0,p.jsxs)(r.Z,{align:"middle",children:[(0,p.jsx)(s.Z,{placeholder:"key:e.g.MY_V",value:q,onChange:function(e){return A(e.target.value)},style:{width:"40%"}}),(0,p.jsx)(s.Z,{placeholder:"value:e.g.MY_Value o",value:H,onChange:function(e){return K(e.target.value)},style:{width:"40%"}}),(0,p.jsx)(d.Z,{type:"primary",onClick:function(){q&&H&&(ee([].concat((0,l.Z)(X),[{keyTemplate:q,valueTemplate:H}])),A(""),K(""))},size:"small",style:{display:"inline-block"},children:"\u6dfb\u52a0"}),null===X||void 0===X?void 0:X.map((function(e,n){var t="".concat(e.keyTemplate," : ").concat(e.valueTemplate);return(0,p.jsx)(f.Z,{className:"edit-tag",closable:!0,onClose:function(){return function(e){var n=X.filter((function(n){return(null===n||void 0===n?void 0:n.keyTemplate)!==e}));ee(n),console.log(n,X)}(e.keyTemplate)},children:t},e.keyTemplate)}))]}),(0,p.jsx)(i.Z,{plain:!0,children:"Result"}),(0,p.jsx)(r.Z,{children:"Result Path"}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(s.Z,{placeholder:"e.g.data.execResult",value:J,onChange:function(e){return $(e.target.value)}})})]})}},1333:function(e,n,t){var l=t(7462),o=t(4942),a=t(2791),c=t(1694),i=t.n(c),r=t(3785),s=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};n.Z=function(e){var n,t=a.useContext(r.E_),c=t.getPrefixCls,u=t.direction,d=e.prefixCls,f=e.type,v=void 0===f?"horizontal":f,p=e.orientation,h=void 0===p?"center":p,g=e.orientationMargin,m=e.className,Z=e.children,y=e.dashed,x=e.plain,b=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),j=c("divider",d),C=h.length>0?"-".concat(h):h,O=!!Z,k="left"===h&&null!=g,E="right"===h&&null!=g,w=i()(j,"".concat(j,"-").concat(v),(n={},(0,o.Z)(n,"".concat(j,"-with-text"),O),(0,o.Z)(n,"".concat(j,"-with-text").concat(C),O),(0,o.Z)(n,"".concat(j,"-dashed"),!!y),(0,o.Z)(n,"".concat(j,"-plain"),!!x),(0,o.Z)(n,"".concat(j,"-rtl"),"rtl"===u),(0,o.Z)(n,"".concat(j,"-no-default-orientation-margin-left"),k),(0,o.Z)(n,"".concat(j,"-no-default-orientation-margin-right"),E),n),m),P=(0,l.Z)((0,l.Z)({},k&&{marginLeft:g}),E&&{marginRight:g});return a.createElement("div",(0,l.Z)({className:w},b,{role:"separator"}),Z&&a.createElement("span",{className:"".concat(j,"-inner-text"),style:P},Z))}},7528:function(e,n,t){t.d(n,{Z:function(){return b}});var l=t(4942),o=t(7462),a=t(9439),c=t(2791),i=t(1694),r=t.n(i),s=t(1818),u=t(732),d=t(3785),f=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t},v=function(e){var n,t=e.prefixCls,a=e.className,i=e.checked,s=e.onChange,u=e.onClick,v=f(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,c.useContext(d.E_).getPrefixCls)("tag",t),h=r()(p,(n={},(0,l.Z)(n,"".concat(p,"-checkable"),!0),(0,l.Z)(n,"".concat(p,"-checkable-checked"),i),n),a);return c.createElement("span",(0,o.Z)({},v,{className:h,onClick:function(e){null===s||void 0===s||s(!i),null===u||void 0===u||u(e)}}))},p=t(4466),h=t(2833),g=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t},m=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),Z=new RegExp("^(".concat(p.E.join("|"),")$")),y=function(e,n){var t,i=e.prefixCls,f=e.className,v=e.style,p=e.children,y=e.icon,x=e.color,b=e.onClose,j=e.closeIcon,C=e.closable,O=void 0!==C&&C,k=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=c.useContext(d.E_),w=E.getPrefixCls,P=E.direction,S=c.useState(!0),T=(0,a.Z)(S,2),N=T[0],R=T[1];c.useEffect((function(){"visible"in k&&R(k.visible)}),[k.visible]);var I=function(){return!!x&&(m.test(x)||Z.test(x))},_=(0,o.Z)({backgroundColor:x&&!I()?x:void 0},v),M=I(),V=w("tag",i),D=r()(V,(t={},(0,l.Z)(t,"".concat(V,"-").concat(x),M),(0,l.Z)(t,"".concat(V,"-has-color"),x&&!M),(0,l.Z)(t,"".concat(V,"-hidden"),!N),(0,l.Z)(t,"".concat(V,"-rtl"),"rtl"===P),t),f),Y=function(e){e.stopPropagation(),null===b||void 0===b||b(e),e.defaultPrevented||"visible"in k||R(!1)},z="onClick"in k||p&&"a"===p.type,F=(0,s.Z)(k,["visible"]),J=y||null,$=J?c.createElement(c.Fragment,null,J,c.createElement("span",null,p)):p,L=c.createElement("span",(0,o.Z)({},F,{ref:n,className:D,style:_}),$,O?j?c.createElement("span",{className:"".concat(V,"-close-icon"),onClick:Y},j):c.createElement(u.Z,{className:"".concat(V,"-close-icon"),onClick:Y}):null);return z?c.createElement(h.Z,null,L):L},x=c.forwardRef(y);x.displayName="Tag",x.CheckableTag=v;var b=x}}]);
//# sourceMappingURL=685.214af50e.chunk.js.map