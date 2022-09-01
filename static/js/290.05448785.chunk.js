"use strict";(self.webpackChunklot=self.webpackChunklot||[]).push([[290],{290:function(e,l,t){t.r(l),t.d(l,{FakeData:function(){return m}});var n=t(5531),i=t(3430),a=t(6818),o=t(3099),d=t(1333),r=t(8443),u=t(177),c=t(7788),s=t(3231),h=t(2791),p=t(9286),v=t(184),f=a.Z.Option,Z=["none","even","mark","odd","space"],x=["110","300","600","1200"],g=[5,6,7,8],j=["ascii","utf8","utf16le","base64","binary","hex"],m=function(e){var l,t,m,T,S,w,C,y,R,B,P=null===(l=e.cell)||void 0===l?void 0:l.toJSON(),b=(0,h.useState)((null===(t=P.config)||void 0===t?void 0:t.pathTemplate)||""),k=(0,i.Z)(b,2),O=k[0],V=k[1],D=(0,h.useState)(x),E=(0,i.Z)(D,2),F=E[0],I=E[1],J=(0,h.useState)(""),N=(0,i.Z)(J,2),W=N[0],A=N[1],G=(0,h.useState)((null===(m=P.config)||void 0===m?void 0:m.baudRateTemplate)||""),L=(0,i.Z)(G,2),q=L[0],z=L[1],H=(0,h.useState)((null===(T=P.config)||void 0===T?void 0:T.parityTemplate)||Z[1]),K=(0,i.Z)(H,2),M=K[0],Q=K[1],U=(0,h.useState)((null===(S=P.config)||void 0===S?void 0:S.dataBitsTemplate)||g[0]),X=(0,i.Z)(U,2),Y=X[0],$=X[1],_=(0,h.useState)((null===(w=P.config)||void 0===w?void 0:w.stopBitsTemplate)||1),ee=(0,i.Z)(_,2),le=ee[0],te=ee[1],ne=(0,h.useState)((null===(C=P.config)||void 0===C?void 0:C.rtsctsTemplate)||!0),ie=(0,i.Z)(ne,2),ae=ie[0],oe=ie[1],de=(0,h.useState)((null===(y=P.config)||void 0===y?void 0:y.writeTemplate)||""),re=(0,i.Z)(de,2),ue=re[0],ce=re[1],se=(0,h.useState)((null===(R=P.config)||void 0===R?void 0:R.resultPath)||""),he=(0,i.Z)(se,2),pe=he[0],ve=he[1],fe=(0,h.useState)((null===(B=P.config)||void 0===B?void 0:B.encodeTemplate)||j[0]),Ze=(0,i.Z)(fe,2),xe=Ze[0],ge=Ze[1];(0,h.useEffect)((function(){if(e){var l,t,i,a,o,d,r,u,c,s,h,p,v,f=null===(l=e.cell)||void 0===l?void 0:l.toJSON();if(V(null===(t=f.config)||void 0===t?void 0:t.pathTemplate),!F.includes((null===(i=f.config)||void 0===i?void 0:i.baudRateTemplate)+""))I([].concat((0,n.Z)(F),[null===(p=f.config)||void 0===p||null===(v=p.baudRateTemplate)||void 0===v?void 0:v.toString()]));z(null===(a=f.config)||void 0===a?void 0:a.baudRateTemplate),Q(null===(o=f.config)||void 0===o?void 0:o.parityTemplate),$(null===(d=f.config)||void 0===d?void 0:d.dataBitsTemplate),te(null===(r=f.config)||void 0===r?void 0:r.stopBitsTemplate),oe(null===(u=f.config)||void 0===u?void 0:u.rtsctsTemplate),ce(null===(c=f.config)||void 0===c?void 0:c.writeTemplate),ge(null===(s=f.config)||void 0===s?void 0:s.encodeTemplate),ve(null===(h=f.config)||void 0===h?void 0:h.resultPath)}}),[e.cellId]),(0,h.useEffect)((function(){var l;null===(l=e.cell)||void 0===l||l.prop("config",{pathTemplate:O,baudRateTemplate:q,parityTemplate:M,dataBitsTemplate:Y,stopBitsTemplate:le,rtsctsTemplate:ae,writeTemplate:ue,encodeTemplate:xe,resultPath:pe})}),[e.cellId,O,q,M,Y,le,ae,ue,xe,pe]);var je=function(e){e.preventDefault(),I([].concat((0,n.Z)(F),[W])),A("")};return(0,v.jsxs)(o.Z,{direction:"vertical",children:[(0,v.jsx)(d.Z,{plain:!0,children:"Configuration"}),(0,v.jsx)(r.Z,{children:"Serial Path Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(u.Z,{placeholder:"e.g./dev/ROBOT",value:O,onChange:function(e){return V(e.target.value)}})}),(0,v.jsx)(r.Z,{children:"Baud Rate Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(a.Z,{style:{width:200},placeholder:"custom dropdown render",value:q,onChange:function(e){z(e)},dropdownRender:function(e){return(0,v.jsxs)(v.Fragment,{children:[e,(0,v.jsx)(d.Z,{style:{margin:"8px 0"}}),(0,v.jsxs)(o.Z,{align:"center",style:{padding:"0 8px 4px"},children:[(0,v.jsx)(u.Z,{placeholder:"Please enter item",value:W}),(0,v.jsxs)(c.Z.Link,{onClick:je,style:{whiteSpace:"nowrap"},children:[(0,v.jsx)(p.Z,{})," Add item"]})]})]})},children:F.map((function(e){return(0,v.jsx)(f,{children:e},e)}))})}),(0,v.jsx)(r.Z,{children:"Parity Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(a.Z,{defaultValue:Z[1],value:M,onChange:function(e){Q(e)},style:{width:"100%"},children:Z.map((function(e){return(0,v.jsx)(f,{children:e},e)}))})}),(0,v.jsx)(r.Z,{children:"Data Bits Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(a.Z,{defaultValue:g[0],value:Y,onChange:function(e){return $(e)},style:{width:"100%"},children:g.map((function(e){return(0,v.jsx)(f,{children:e},e)}))})}),(0,v.jsx)(r.Z,{children:"Stop Bits Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsxs)(a.Z,{defaultValue:1,value:le,onChange:function(e){return te(+e)},style:{width:"100%"},children:[(0,v.jsx)(f,{children:"1"},1),(0,v.jsx)(f,{children:"2"},2)]})}),(0,v.jsx)(r.Z,{children:"RTS/CTS Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsxs)(s.ZP.Group,{onChange:function(e){oe(e.target.value)},value:ae,children:[(0,v.jsx)(s.ZP,{value:!0,children:"true"}),(0,v.jsx)(s.ZP,{value:!1,children:"false"})]})}),(0,v.jsx)(r.Z,{children:"Write Template"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(u.Z,{placeholder:"e.g.hello\\r",value:ue,onChange:function(e){return ce(e.target.value)}})}),(0,v.jsx)(r.Z,{children:"Write Encoding"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(a.Z,{defaultValue:j[0],value:xe,onChange:function(e){return ge(e)},style:{width:"100%"},children:j.map((function(e){return(0,v.jsx)(f,{children:e},e)}))})}),(0,v.jsx)(d.Z,{plain:!0,children:"Result"}),(0,v.jsx)(r.Z,{children:"Result Path"}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(u.Z,{placeholder:"e.g.serialResult",value:pe,onChange:function(e){return ve(e.target.value)}})})]})}}}]);
//# sourceMappingURL=290.05448785.chunk.js.map