(self.webpackChunklot=self.webpackChunklot||[]).push([[776],{1333:function(e,t,n){"use strict";var r=n(7462),o=n(4942),a=n(2791),l=n(1694),i=n.n(l),c=n(3785),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.Z=function(e){var t,n=a.useContext(c.E_),l=n.getPrefixCls,s=n.direction,f=e.prefixCls,p=e.type,d=void 0===p?"horizontal":p,v=e.orientation,y=void 0===v?"center":v,m=e.orientationMargin,b=e.className,g=e.children,h=e.dashed,E=e.plain,Z=u(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),x=l("divider",f),w=y.length>0?"-".concat(y):y,O=!!g,C="left"===y&&null!=m,S="right"===y&&null!=m,k=i()(x,"".concat(x,"-").concat(d),(t={},(0,o.Z)(t,"".concat(x,"-with-text"),O),(0,o.Z)(t,"".concat(x,"-with-text").concat(w),O),(0,o.Z)(t,"".concat(x,"-dashed"),!!h),(0,o.Z)(t,"".concat(x,"-plain"),!!E),(0,o.Z)(t,"".concat(x,"-rtl"),"rtl"===s),(0,o.Z)(t,"".concat(x,"-no-default-orientation-margin-left"),C),(0,o.Z)(t,"".concat(x,"-no-default-orientation-margin-right"),S),t),b),R=(0,r.Z)((0,r.Z)({},C&&{marginLeft:m}),S&&{marginRight:m});return a.createElement("div",(0,r.Z)({className:k},Z,{role:"separator"}),g&&a.createElement("span",{className:"".concat(x,"-inner-text"),style:R},g))}},3231:function(e,t,n){"use strict";n.d(t,{ZP:function(){return R}});var r=n(4942),o=n(7462),a=n(2791),l=n(8083),i=n(1694),c=n.n(i),u=n(8834),s=n(3785),f=a.createContext(null),p=f.Provider,d=f,v=n(4824),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=function(e,t){var n,i=a.useContext(d),f=a.useContext(s.E_),p=f.getPrefixCls,m=f.direction,b=a.useRef(),g=(0,u.sQ)(t,b);a.useEffect((function(){(0,v.Z)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var h=e.prefixCls,E=e.className,Z=e.children,x=e.style,w=y(e,["prefixCls","className","children","style"]),O=p("radio",h),C=(0,o.Z)({},w);i&&(C.name=i.name,C.onChange=function(t){var n,r;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(r=null===i||void 0===i?void 0:i.onChange)||void 0===r||r.call(i,t)},C.checked=e.value===i.value,C.disabled=e.disabled||i.disabled);var S=c()("".concat(O,"-wrapper"),(n={},(0,r.Z)(n,"".concat(O,"-wrapper-checked"),C.checked),(0,r.Z)(n,"".concat(O,"-wrapper-disabled"),C.disabled),(0,r.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===m),n),E);return a.createElement("label",{className:S,style:x,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(l.Z,(0,o.Z)({},C,{type:"radio",prefixCls:O,ref:g})),void 0!==Z?a.createElement("span",null,Z):null)},b=a.forwardRef(m);b.displayName="Radio";var g=b,h=n(9439),E=n(5179),Z=n(1815);var x=a.forwardRef((function(e,t){var n=a.useContext(s.E_),l=n.getPrefixCls,i=n.direction,u=a.useContext(Z.Z),f=(0,E.Z)(e.defaultValue,{value:e.value}),d=(0,h.Z)(f,2),v=d[0],y=d[1];return a.createElement(p,{value:{onChange:function(t){var n=v,r=t.target.value;"value"in e||y(r);var o=e.onChange;o&&r!==n&&o(t)},value:v,disabled:e.disabled,name:e.name}},function(){var n,s=e.prefixCls,f=e.className,p=void 0===f?"":f,d=e.options,y=e.optionType,m=e.buttonStyle,b=void 0===m?"outline":m,h=e.disabled,E=e.children,Z=e.size,x=e.style,w=e.id,O=e.onMouseEnter,C=e.onMouseLeave,S=l("radio",s),k="".concat(S,"-group"),R=E;if(d&&d.length>0){var j="button"===y?"".concat(S,"-button"):S;R=d.map((function(e){return"string"===typeof e||"number"===typeof e?a.createElement(g,{key:e.toString(),prefixCls:j,disabled:h,value:e,checked:v===e},e):a.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:j,disabled:e.disabled||h,value:e.value,checked:v===e.value,style:e.style},e.label)}))}var P=Z||u,N=c()(k,"".concat(k,"-").concat(b),(n={},(0,r.Z)(n,"".concat(k,"-").concat(P),P),(0,r.Z)(n,"".concat(k,"-rtl"),"rtl"===i),n),p);return a.createElement("div",(0,o.Z)({},function(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}(e),{className:N,style:x,onMouseEnter:O,onMouseLeave:C,id:w,ref:t}),R)}())})),w=a.memo(x),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},C=function(e,t){var n=a.useContext(d),r=a.useContext(s.E_).getPrefixCls,l=e.prefixCls,i=O(e,["prefixCls"]),c=r("radio-button",l);return n&&(i.checked=e.value===n.value,i.disabled=e.disabled||n.disabled),a.createElement(g,(0,o.Z)({prefixCls:c},i,{type:"radio",ref:t}))},S=a.forwardRef(C),k=g;k.Button=S,k.Group=w;var R=k},7788:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r=n(7462),o=n(4942),a=n(2791),l=n(1694),i=n.n(l),c=n(8834),u=n(3785),s=n(4824),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e,t){var n=e.prefixCls,l=e.component,p=void 0===l?"article":l,d=e.className,v=e["aria-label"],y=e.setContentRef,m=e.children,b=f(e,["prefixCls","component","className","aria-label","setContentRef","children"]),g=a.useContext(u.E_),h=g.getPrefixCls,E=g.direction,Z=t;y&&((0,s.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),Z=(0,c.sQ)(t,y));var x=p,w=h("typography",n),O=i()(w,(0,o.Z)({},"".concat(w,"-rtl"),"rtl"===E),d);return a.createElement(x,(0,r.Z)({className:O,"aria-label":v,ref:Z},b),m)},d=a.forwardRef(p);d.displayName="Typography";var v=d,y=n(1002),m=n(1818),b=n(9439),g=n(5179),h=n(5501),E=n(6998),Z=n.n(E),x=n(1413),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},O=n(4291),C=function(e,t){return a.createElement(O.Z,(0,x.Z)((0,x.Z)({},e),{},{ref:t,icon:w}))};C.displayName="EditOutlined";var S=a.forwardRef(C),k=n(7575),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},j=function(e,t){return a.createElement(O.Z,(0,x.Z)((0,x.Z)({},e),{},{ref:t,icon:R}))};j.displayName="CopyOutlined";var P=a.forwardRef(j),N=n(8829),M=n(1605),T=n(3486),D=n(1354),z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},L={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},I=a.forwardRef((function(e,t){var n=e.style,o=e.noStyle,l=e.disabled,i=z(e,["style","noStyle","disabled"]),c={};return o||(c=(0,r.Z)({},L)),l&&(c.pointerEvents="none"),c=(0,r.Z)((0,r.Z)({},c),n),a.createElement("div",(0,r.Z)({role:"button",tabIndex:0,ref:t},i,{onKeyDown:function(e){e.keyCode===D.Z.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===D.Z.ENTER&&r&&r()},style:c}))})),A=n(4937),H=function(e){if((0,A.Z)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};function _(e,t){return Array.isArray(e)||void 0===t?H(e):function(e,t){if(!H(e))return!1;var n=document.createElement("div"),r=n.style[e];return n.style[e]=t,n.style[e]!==r}(e,t)}var K=n(2084),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},W=function(e,t){return a.createElement(O.Z,(0,x.Z)((0,x.Z)({},e),{},{ref:t,icon:U}))};W.displayName="EnterOutlined";var B=a.forwardRef(W),V=n(6920),F=n(1113),Q=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,l=e.style,c=e.direction,u=e.maxLength,s=e.autoSize,f=void 0===s||s,p=e.value,d=e.onSave,v=e.onCancel,y=e.onEnd,m=e.component,g=e.enterIcon,h=void 0===g?a.createElement(B,null):g,E=a.useRef(),Z=a.useRef(!1),x=a.useRef(),w=a.useState(p),O=(0,b.Z)(w,2),C=O[0],S=O[1];a.useEffect((function(){S(p)}),[p]),a.useEffect((function(){if(E.current&&E.current.resizableTextArea){var e=E.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var k=function(){d(C.trim())},R=m?"".concat(t,"-").concat(m):"",j=i()(t,"".concat(t,"-edit-content"),(0,o.Z)({},"".concat(t,"-rtl"),"rtl"===c),r,R);return a.createElement("div",{className:j,style:l},a.createElement(V.Z,{ref:E,maxLength:u,value:C,onChange:function(e){var t=e.target;S(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;Z.current||(x.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,o=e.metaKey,a=e.shiftKey;x.current!==t||Z.current||n||r||o||a||(t===D.Z.ENTER?(k(),null===y||void 0===y||y()):t===D.Z.ESC&&v())},onCompositionStart:function(){Z.current=!0},onCompositionEnd:function(){Z.current=!1},onBlur:function(){k()},"aria-label":n,rows:1,autoSize:f}),null!==h?(0,F.Tm)(h,{className:"".concat(t,"-edit-content-confirm")}):null)};function G(e,t){return a.useMemo((function(){var n=!!e;return[n,(0,r.Z)((0,r.Z)({},t),n&&"object"===(0,y.Z)(e)?e:null)]}),[e])}function X(e){var t=(0,y.Z)(e);return"string"===t||"number"===t}function q(e,t){for(var n=0,r=[],o=0;o<e.length;o+=1){if(n===t)return r;var a=e[o],l=n+(X(a)?String(a).length:1);if(l>t){var i=t-n;return r.push(String(a).slice(0,i)),r}r.push(a),n=l}return e}var J=function(e){var t=e.enabledMeasure,n=e.children,o=e.text,l=e.width,i=e.rows,c=e.onEllipsis,u=a.useState([0,0,0]),s=(0,b.Z)(u,2),f=s[0],p=s[1],d=a.useState(0),v=(0,b.Z)(d,2),y=v[0],m=v[1],g=(0,b.Z)(f,3),E=g[0],Z=g[1],x=g[2],w=a.useState(0),O=(0,b.Z)(w,2),C=O[0],S=O[1],k=a.useRef(null),R=a.useRef(null),j=a.useMemo((function(){return(0,h.Z)(o)}),[o]),P=a.useMemo((function(){return function(e){var t=0;return e.forEach((function(e){X(e)?t+=String(e).length:t+=1})),t}(j)}),[j]),N=a.useMemo((function(){return t&&3===y?n(q(j,Z),Z<P):n(j,!1)}),[t,y,n,j,Z,P]);(0,M.Z)((function(){t&&l&&P&&(m(1),p([0,Math.ceil(P/2),P]))}),[t,l,o,P,i]),(0,M.Z)((function(){var e;1===y&&S((null===(e=k.current)||void 0===e?void 0:e.offsetHeight)||0)}),[y]),(0,M.Z)((function(){var e,t;if(C)if(1===y)((null===(e=R.current)||void 0===e?void 0:e.offsetHeight)||0)<=i*C?(m(4),c(!1)):m(2);else if(2===y)if(E!==x){var n=(null===(t=R.current)||void 0===t?void 0:t.offsetHeight)||0,r=E,o=x;E===x-1?o=E:n<=i*C?r=Z:o=Z;var a=Math.ceil((r+o)/2);p([r,a,o])}else m(3),c(!0)}),[y,E,x,i,C]);var T={width:l,whiteSpace:"normal",margin:0,padding:0},D=function(e,t,n){return a.createElement("span",{"aria-hidden":!0,ref:t,style:(0,r.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},n)},e)};return a.createElement(a.Fragment,null,N,t&&3!==y&&4!==y&&a.createElement(a.Fragment,null,D("lg",k,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===y?D(n(j,!1),R,T):function(e,t){var r=q(j,e);return D(n(r,!0),t,T)}(Z,R)))};var Y=function(e){var t=e.title,n=e.enabledEllipsis,r=e.isEllipsis,o=e.children;return t&&n?a.createElement(K.Z,{title:t,visible:!!r&&void 0},o):o},$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ee(e,t,n){return!0===e||void 0===e?t:e||n&&t}function te(e){return Array.isArray(e)?e:[e]}var ne=a.forwardRef((function(e,t){var n=e.prefixCls,l=e.className,s=e.style,f=e.type,p=e.disabled,d=e.children,E=e.ellipsis,x=e.editable,w=e.copyable,O=e.component,C=e.title,R=$(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),j=a.useContext(u.E_),D=j.getPrefixCls,z=j.direction,L=(0,T.E)("Text")[0],A=a.useRef(null),H=a.useRef(null),U=D("typography",n),W=(0,m.Z)(R,["mark","code","delete","underline","strong","keyboard","italic"]),B=G(x),V=(0,b.Z)(B,2),F=V[0],X=V[1],q=(0,g.Z)(!1,{value:X.editing}),ne=(0,b.Z)(q,2),re=ne[0],oe=ne[1],ae=X.triggerType,le=void 0===ae?["icon"]:ae,ie=function(e){var t;e&&(null===(t=X.onStart)||void 0===t||t.call(X)),oe(e)};!function(e,t){var n=a.useRef(!1);a.useEffect((function(){n.current?e():n.current=!0}),t)}((function(){var e;re||null===(e=H.current)||void 0===e||e.focus()}),[re]);var ce=function(e){null===e||void 0===e||e.preventDefault(),ie(!0)},ue=G(w),se=(0,b.Z)(ue,2),fe=se[0],pe=se[1],de=a.useState(!1),ve=(0,b.Z)(de,2),ye=ve[0],me=ve[1],be=a.useRef(),ge=function(){clearTimeout(be.current)},he=function(e){var t;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),Z()(pe.text||String(d)||""),me(!0),ge(),be.current=setTimeout((function(){me(!1)}),3e3),null===(t=pe.onCopy)||void 0===t||t.call(pe)};a.useEffect((function(){return ge}),[]);var Ee=a.useState(!1),Ze=(0,b.Z)(Ee,2),xe=Ze[0],we=Ze[1],Oe=a.useState(!1),Ce=(0,b.Z)(Oe,2),Se=Ce[0],ke=Ce[1],Re=a.useState(!1),je=(0,b.Z)(Re,2),Pe=je[0],Ne=je[1],Me=a.useState(!1),Te=(0,b.Z)(Me,2),De=Te[0],ze=Te[1],Le=a.useState(!1),Ie=(0,b.Z)(Le,2),Ae=Ie[0],He=Ie[1],_e=G(E,{expandable:!1}),Ke=(0,b.Z)(_e,2),Ue=Ke[0],We=Ke[1],Be=Ue&&!Pe,Ve=We.rows,Fe=void 0===Ve?1:Ve,Qe=a.useMemo((function(){return!Be||void 0!==We.suffix||We.onEllipsis||We.expandable||F||fe}),[Be,We,F,fe]);(0,M.Z)((function(){Ue&&!Qe&&(we(_("webkitLineClamp")),ke(_("textOverflow")))}),[Qe,Ue]);var Ge=a.useMemo((function(){return!Qe&&(1===Fe?Se:xe)}),[Qe,Se,xe]),Xe=Be&&(Ge?Ae:De),qe=Be&&1===Fe&&Ge,Je=Be&&Fe>1&&Ge,Ye=function(e){var t;Ne(!0),null===(t=We.onExpand)||void 0===t||t.call(We,e)},$e=a.useState(0),et=(0,b.Z)($e,2),tt=et[0],nt=et[1],rt=function(e){var t;ze(e),De!==e&&(null===(t=We.onEllipsis)||void 0===t||t.call(We,e))};a.useEffect((function(){var e=A.current;if(Ue&&Ge&&e){var t=Je?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Ae!==t&&He(t)}}),[Ue,Ge,d,Je]);var ot=!0===We.tooltip?d:We.tooltip,at=a.useMemo((function(){var e=function(e){return["string","number"].includes((0,y.Z)(e))};if(Ue&&!Ge)return e(d)?d:e(C)?C:e(ot)?ot:void 0}),[Ue,Ge,C,ot,Xe]);if(re)return a.createElement(Q,{value:"string"===typeof d?d:"",onSave:function(e){var t;null===(t=X.onChange)||void 0===t||t.call(X,e),ie(!1)},onCancel:function(){var e;null===(e=X.onCancel)||void 0===e||e.call(X),ie(!1)},onEnd:X.onEnd,prefixCls:U,className:l,style:s,direction:z,component:O,maxLength:X.maxLength,autoSize:X.autoSize,enterIcon:X.enterIcon});var lt=function(){var e,t=We.expandable,n=We.symbol;return t?(e=n||L.expand,a.createElement("a",{key:"expand",className:"".concat(U,"-expand"),onClick:Ye,"aria-label":L.expand},e)):null},it=function(){if(F){var e=X.icon,t=X.tooltip,n=(0,h.Z)(t)[0]||L.edit,r="string"===typeof n?n:"";return le.includes("icon")?a.createElement(K.Z,{key:"edit",title:!1===t?"":n},a.createElement(I,{ref:H,className:"".concat(U,"-edit"),onClick:ce,"aria-label":r},e||a.createElement(S,{role:"button"}))):null}},ct=function(){if(fe){var e=pe.tooltips,t=pe.icon,n=te(e),r=te(t),o=ye?ee(n[1],L.copied):ee(n[0],L.copy),l=ye?L.copied:L.copy,c="string"===typeof o?o:l;return a.createElement(K.Z,{key:"copy",title:o},a.createElement(I,{className:i()("".concat(U,"-copy"),ye&&"".concat(U,"-copy-success")),onClick:he,"aria-label":c},ye?ee(r[1],a.createElement(k.Z,null),!0):ee(r[0],a.createElement(P,null),!0)))}};return a.createElement(N.Z,{onResize:function(e){var t=e.offsetWidth;nt(t)},disabled:!Be||Ge},(function(n){var u;return a.createElement(Y,{title:ot,enabledEllipsis:Be,isEllipsis:Xe},a.createElement(v,(0,r.Z)({className:i()((u={},(0,o.Z)(u,"".concat(U,"-").concat(f),f),(0,o.Z)(u,"".concat(U,"-disabled"),p),(0,o.Z)(u,"".concat(U,"-ellipsis"),Ue),(0,o.Z)(u,"".concat(U,"-single-line"),Be&&1===Fe),(0,o.Z)(u,"".concat(U,"-ellipsis-single-line"),qe),(0,o.Z)(u,"".concat(U,"-ellipsis-multiple-line"),Je),u),l),style:(0,r.Z)((0,r.Z)({},s),{WebkitLineClamp:Je?Fe:void 0}),component:O,ref:(0,c.sQ)(n,A,t),direction:z,onClick:le.includes("text")?ce:null,"aria-label":at,title:C},W),a.createElement(J,{enabledMeasure:Be&&!Ge,text:d,rows:Fe,width:tt,onEllipsis:rt},(function(t,n){var r=t;t.length&&n&&at&&(r=a.createElement("span",{key:"show-content","aria-hidden":!0},r));var o=function(e,t){var n=e.mark,r=e.code,o=e.underline,l=e.delete,i=e.strong,c=e.keyboard,u=e.italic,s=t;function f(e,t){e&&(s=a.createElement(t,{},s))}return f(i,"strong"),f(o,"u"),f(l,"del"),f(r,"code"),f(n,"mark"),f(c,"kbd"),f(u,"i"),s}(e,a.createElement(a.Fragment,null,r,function(e){return[e&&a.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),We.suffix,(t=e,[t&&lt(),it(),ct()])];var t}(n)));return o}))))}))})),re=ne,oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ae=function(e){var t=e.ellipsis,n=oe(e,["ellipsis"]),o=a.useMemo((function(){return t&&"object"===(0,y.Z)(t)?(0,m.Z)(t,["expandable","rows"]):t}),[t]);return(0,s.Z)("object"!==(0,y.Z)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(re,(0,r.Z)({},n,{ellipsis:o,component:"span"}))},le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},ie=function(e,t){var n=e.ellipsis,o=e.rel,l=le(e,["ellipsis","rel"]);(0,s.Z)("object"!==(0,y.Z)(n),"Typography.Link","`ellipsis` only supports boolean value.");var i=a.useRef(null);a.useImperativeHandle(t,(function(){return i.current}));var c=(0,r.Z)((0,r.Z)({},l),{rel:void 0===o&&"_blank"===l.target?"noopener noreferrer":o});return delete c.navigate,a.createElement(re,(0,r.Z)({},c,{ref:i,ellipsis:!!n,component:"a"}))},ce=a.forwardRef(ie),ue=n(9393),se=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},fe=(0,ue.a)(1,2,3,4,5),pe=function(e){var t,n=e.level,o=void 0===n?1:n,l=se(e,["level"]);return-1!==fe.indexOf(o)?t="h".concat(o):((0,s.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),a.createElement(re,(0,r.Z)({},l,{component:t}))},de=function(e){return a.createElement(re,(0,r.Z)({},e,{component:"div"}))},ve=v;ve.Text=ae,ve.Link=ce,ve.Title=pe,ve.Paragraph=de;var ye=ve},6998:function(e,t,n){"use strict";var r=n(2458),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,c,u,s=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),u&&document.body.removeChild(u),l()}return s}},2458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=776.08f03450.chunk.js.map