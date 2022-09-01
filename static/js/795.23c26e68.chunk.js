"use strict";(self.webpackChunklot=self.webpackChunklot||[]).push([[795],{795:function(e,n,i){i.r(n),i.d(n,{FakeData:function(){return y}});var l=i(5531),t=i(3430),d=i(6818),o=i(3099),c=i(1333),a=i(8443),r=i(177),u=i(7788),s=i(3231),h=i(2791),v=i(9286),g=i(184),f=d.Z.Option,Z=["none","even","mark","odd","space"],x=["110","300","600","1200"],j=["byteLength","delimiter"],p=[5,6,7,8],m=["ascii","utf8","utf16le","base64","binary","hex"],y=function(e){var n,i,y,S,O,w,C,b,B,E,k,L,R,P,V=null===(n=e.cell)||void 0===n?void 0:n.toJSON(),D=(0,h.useState)((null===(i=V.config)||void 0===i?void 0:i.path)||""),F=(0,t.Z)(D,2),T=F[0],A=F[1],I=(0,h.useState)(x),J=(0,t.Z)(I,2),N=J[0],W=J[1],G=(0,h.useState)(""),H=(0,t.Z)(G,2),M=H[0],q=H[1],z=(0,h.useState)((null===(y=V.config)||void 0===y?void 0:y.baudRate)||""),K=(0,t.Z)(z,2),Q=K[0],U=K[1],X=(0,h.useState)((null===(S=V.config)||void 0===S?void 0:S.parity)||Z[1]),Y=(0,t.Z)(X,2),$=Y[0],_=Y[1],ee=(0,h.useState)((null===(O=V.config)||void 0===O?void 0:O.dataBits)||p[0]),ne=(0,t.Z)(ee,2),ie=ne[0],le=ne[1],te=(0,h.useState)((null===(w=V.config)||void 0===w?void 0:w.stopBits)||1),de=(0,t.Z)(te,2),oe=de[0],ce=de[1],ae=(0,h.useState)((null===(C=V.config)||void 0===C?void 0:C.rtscts)||!0),re=(0,t.Z)(ae,2),ue=re[0],se=re[1],he=(0,h.useState)((null===(b=V.config)||void 0===b?void 0:b.writeOnOpen)||""),ve=(0,t.Z)(he,2),ge=ve[0],fe=ve[1],Ze=(0,h.useState)((null===(B=V.config)||void 0===B?void 0:B.writeOnOpenEncoding)||""),xe=(0,t.Z)(Ze,2),je=xe[0],pe=xe[1],me=(0,h.useState)((null===(E=V.meta)||void 0===E?void 0:E.parseBy)||j[0]),ye=(0,t.Z)(me,2),Se=ye[0],Oe=ye[1],we=(0,h.useState)((null===(k=V.config)||void 0===k?void 0:k.delimiter)||""),Ce=(0,t.Z)(we,2),be=Ce[0],Be=Ce[1],Ee=(0,h.useState)((null===(L=V.config)||void 0===L?void 0:L.delimiterEncoding)||m[0]),ke=(0,t.Z)(Ee,2),Le=ke[0],Re=ke[1],Pe=(0,h.useState)((null===(R=V.config)||void 0===R?void 0:R.byteLength)||""),Ve=(0,t.Z)(Pe,2),De=Ve[0],Fe=Ve[1],Te=(0,h.useState)((null===(P=V.config)||void 0===P?void 0:P.encoding)||m[0]),Ae=(0,t.Z)(Te,2),Ie=Ae[0],Je=Ae[1],Ne=(0,h.useState)(0),We=(0,t.Z)(Ne,2),Ge=We[0],He=We[1];(0,h.useEffect)((function(){if(e){var n,i,t,d,o,c,a,r,u,s,h,v,g,f,Z,x,j,p=null===(n=e.cell)||void 0===n?void 0:n.toJSON();if(A(null===(i=p.config)||void 0===i?void 0:i.path),!N.includes((null===(t=p.config)||void 0===t?void 0:t.baudRate)+""))W([].concat((0,l.Z)(N),[null===(f=p.config)||void 0===f||null===(Z=f.baudRate)||void 0===Z?void 0:Z.toString()]));if(U(null===(d=p.config)||void 0===d?void 0:d.baudRate),_(null===(o=p.config)||void 0===o?void 0:o.parity),le(null===(c=p.config)||void 0===c?void 0:c.dataBits),ce(null===(a=p.config)||void 0===a?void 0:a.stopBits),se(null===(r=p.config)||void 0===r?void 0:r.rtscts),fe(null===(u=p.config)||void 0===u?void 0:u.writeOnOpen),pe(null===(s=p.config)||void 0===s?void 0:s.writeOnOpenEncoding),Oe(null===(h=p.meta)||void 0===h?void 0:h.parseBy),Be(null===(v=p.config)||void 0===v?void 0:v.delimiter),"delimiter"===Se)Re(null===(x=p.config)||void 0===x?void 0:x.delimiterEncoding),Fe("");else Fe(null===(j=p.config)||void 0===j?void 0:j.byteLength),Re("");Je(null===(g=p.config)||void 0===g?void 0:g.encoding)}}),[e.cellId]),(0,h.useEffect)((function(){var n;null===(n=e.cell)||void 0===n||n.prop("config",{path:T,baudRate:Q,parity:$,dataBits:ie,stopBits:oe,rtscts:ue,writeOnOpen:ge,writeOnOpenEncoding:je,parseBy:Se,delimiter:be,delimiterEncoding:Le,byteLength:De,encoding:Ie})}),[e.cellId,T,Q,$,ie,oe,ue,ge,je,Se,be,Le,De,Ie]);var Me=function(e){e.preventDefault(),W([].concat((0,l.Z)(N),[M])),q("")};return(0,g.jsxs)(o.Z,{direction:"vertical",children:[(0,g.jsx)(c.Z,{plain:!0,children:"Configuration"}),(0,g.jsx)(a.Z,{children:"Serial Path"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(r.Z,{placeholder:"e.g./dev/ROBOT",value:T,onChange:function(e){A(e.target.value),He(Ge+1)}})}),(0,g.jsx)(a.Z,{children:"Baud Rate"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{style:{width:200},placeholder:"custom dropdown render",value:Q,onChange:function(e){U(e),He(Ge+1)},dropdownRender:function(e){return(0,g.jsxs)(g.Fragment,{children:[e,(0,g.jsx)(c.Z,{style:{margin:"8px 0"}}),(0,g.jsxs)(o.Z,{align:"center",style:{padding:"0 8px 4px"},children:[(0,g.jsx)(r.Z,{placeholder:"Please enter item",value:M}),(0,g.jsxs)(u.Z.Link,{onClick:Me,style:{whiteSpace:"nowrap"},children:[(0,g.jsx)(v.Z,{})," Add item"]})]})]})},children:N.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})}),(0,g.jsx)(a.Z,{children:"Parity"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{defaultValue:Z[1],value:$,onChange:function(e){_(e),He(Ge+1)},style:{width:"100%"},children:Z.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})}),(0,g.jsx)(a.Z,{children:"Data Bits"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{defaultValue:p[0],value:ie,onChange:function(e){le(e),He(Ge+1)},style:{width:"100%"},children:p.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})}),(0,g.jsx)(a.Z,{children:"Stop Bits"}),(0,g.jsx)(a.Z,{children:(0,g.jsxs)(d.Z,{defaultValue:1,value:oe,onChange:function(e){ce(+e),He(Ge+1)},style:{width:"100%"},children:[(0,g.jsx)(f,{children:"1"},1),(0,g.jsx)(f,{children:"2"},2)]})}),(0,g.jsx)(a.Z,{children:"RTS/CTS Handshake"}),(0,g.jsx)(a.Z,{children:(0,g.jsxs)(s.ZP.Group,{onChange:function(e){se(e.target.value),He(Ge+1)},value:ue,children:[(0,g.jsx)(s.ZP,{value:!0,children:"true"}),(0,g.jsx)(s.ZP,{value:!1,children:"false"})]})}),(0,g.jsx)(a.Z,{children:"Write After Port Opens"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(r.Z,{placeholder:"e.g.hello\\r",value:ge,onChange:function(e){fe(e.target.value),He(Ge+1)}})}),(0,g.jsx)(a.Z,{children:"Write On Open Encoding"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{defaultValue:m[0],value:je,onChange:function(e){pe(e),He(Ge+1)},style:{width:"100%"},children:m.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})}),(0,g.jsx)(a.Z,{children:"Parse Method"}),(0,g.jsx)(a.Z,{children:(0,g.jsxs)(d.Z,{defaultValue:"byteLength",value:Se,onChange:function(e){Oe(e),He(Ge+1)},style:{width:"100%"},children:[(0,g.jsx)(f,{children:"Byte Length"},"byteLength"),(0,g.jsx)(f,{children:"Delimiter"},"delimiter")]})}),"delimiter"===Se?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z,{children:"Delimiter"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(r.Z,{placeholder:"e.g.\\r",value:be,onChange:function(e){Be(e.target.value),He(Ge+1)}})}),(0,g.jsx)(a.Z,{children:"Delimiter Encoding"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{defaultValue:m[0],value:Le,onChange:function(e){Re(e),He(Ge+1)},style:{width:"100%"},children:m.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a.Z,{children:"Byte Length"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(r.Z,{placeholder:"e.g.8",value:De,onChange:function(e){Fe(e.target.value),He(Ge+1)}})})]}),(0,g.jsx)(a.Z,{children:"Output Encoding"}),(0,g.jsx)(a.Z,{children:(0,g.jsx)(d.Z,{defaultValue:m[0],value:Ie,onChange:function(e){Je(e),He(Ge+1)},style:{width:"100%"},children:m.map((function(e){return(0,g.jsx)(f,{children:e},e)}))})})]})}}}]);
//# sourceMappingURL=795.23c26e68.chunk.js.map