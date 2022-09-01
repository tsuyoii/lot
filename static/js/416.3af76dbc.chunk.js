"use strict";(self.webpackChunklot=self.webpackChunklot||[]).push([[416],{9416:function(e,n,l){l.r(n),l.d(n,{FakeData:function(){return w}});var i=l(5531),t=l(3430),o=l(6818),a=l(3099),c=l(1333),r=l(8443),d=l(177),u=l(6871),s=l(5232),h=l(6862),v=l(7528),p=l(2014),f=l(3231),g=l(2791),m=l(8399),Z=(l(8219),l(8716),l(8418)),x=l(4988),j=l(184),T=o.Z.Option,S=["GET","POST","PUT","PATCH","DELETE"],C=["ascii","utf8","utf16le","base64","binary","hex"],y=[{value:"Accept",label:"Accept"},{value:"Accept-Charset",label:"Accept-Charset"},{value:"Accept-Datetime",label:"Accept-Datetime"},{value:"Accept-Encoding",label:"Accept-Encoding"},{value:"Accept-Language",label:"Accept-Language"}],b=[{value:"application/atom+xml",label:"application/atom+xml"},{value:"application/ecmascript",label:"application/ecmascript"},{value:"application/font-woff",label:"application/font-woff"},{value:"application/graphql",label:"application/graphql"},{value:"application/gzip",label:"application/gzip"}],w=function(e){var n,l,w,P,k,E,A,L,N,O,q,z,R,V,B,D,F,I,$,G,H,J,U=null===(n=e.cell)||void 0===n?void 0:n.toJSON(),K=g.useState(!1),M=(0,t.Z)(K,2),W=M[0],Q=M[1],X=g.useState(!1),Y=(0,t.Z)(X,2),_=Y[0],ee=Y[1],ne=g.useState(!1),le=(0,t.Z)(ne,2),ie=le[0],te=le[1],oe=(0,g.useState)((null===U||void 0===U||null===(l=U.config)||void 0===l?void 0:l.method)||S[0]),ae=(0,t.Z)(oe,2),ce=ae[0],re=ae[1],de=(0,g.useState)((null===(w=U.config)||void 0===w?void 0:w.uriTemplate)||""),ue=(0,t.Z)(de,2),se=ue[0],he=ue[1],ve=(0,g.useState)((null===(P=U.config)||void 0===P?void 0:P.timeoutTemplate)||""),pe=(0,t.Z)(ve,2),fe=pe[0],ge=pe[1],me=(0,g.useState)((null===(k=U.config)||void 0===k?void 0:k.requestEncodingTemplate)||C[0]),Ze=(0,t.Z)(me,2),xe=Ze[0],je=Ze[1],Te=(0,g.useState)((null===(E=U.config)||void 0===E?void 0:E.bodyTemplate)||""),Se=(0,t.Z)(Te,2),Ce=Se[0],ye=Se[1],be=(0,Z.N)(Ce,2e3),we=(0,g.useState)((null===(A=U.config)||void 0===A?void 0:A.authType)||"none"),Pe=(0,t.Z)(we,2),ke=Pe[0],Ee=Pe[1],Ae=(0,g.useState)((null===(L=U.config)||void 0===L||null===(N=L.authCredentials)||void 0===N?void 0:N.usernameTemplate)||""),Le=(0,t.Z)(Ae,2),Ne=Le[0],Oe=Le[1],qe=(0,g.useState)((null===(O=U.config)||void 0===O||null===(q=O.authCredentials)||void 0===q?void 0:q.passwordTemplate)||""),ze=(0,t.Z)(qe,2),Re=ze[0],Ve=ze[1],Be=(0,g.useState)((null===(z=U.config)||void 0===z||null===(R=z.authCredentials)||void 0===R?void 0:R.keyTemplate)||""),De=(0,t.Z)(Be,2),Fe=De[0],Ie=De[1],$e=(0,g.useState)((null===(V=U.config)||void 0===V||null===(B=V.authCredentials)||void 0===B?void 0:B.certTemplate)||""),Ge=(0,t.Z)($e,2),He=Ge[0],Je=Ge[1],Ue=(0,g.useState)((null===(D=U.config)||void 0===D?void 0:D.disableSSLVerification)||!1),Ke=(0,t.Z)(Ue,2),Me=Ke[0],We=Ke[1],Qe=(0,g.useState)((null===(F=U.config)||void 0===F?void 0:F.caCertTemplate)||""),Xe=(0,t.Z)(Qe,2),Ye=Xe[0],_e=Xe[1],en=(0,Z.N)(Ye,2e3),nn=(0,g.useState)((null===(I=U.config)||void 0===I?void 0:I.encodingTemplate)||C[0]),ln=(0,t.Z)(nn,2),tn=ln[0],on=ln[1],an=(0,g.useState)((null===($=U.config)||void 0===$?void 0:$.responsePath)||""),cn=(0,t.Z)(an,2),rn=cn[0],dn=cn[1],un=(0,g.useState)((null===(G=U.config)||void 0===G?void 0:G.errorBehavior)||""),sn=(0,t.Z)(un,2),hn=sn[0],vn=sn[1],pn=(0,g.useState)((null===(H=U.config)||void 0===H?void 0:H.errorPath)||""),fn=(0,t.Z)(pn,2),gn=fn[0],mn=fn[1],Zn=(0,g.useState)((null===(J=U.config)||void 0===J?void 0:J.headerInfo)||[]),xn=(0,t.Z)(Zn,2),jn=xn[0],Tn=xn[1],Sn=(0,g.useState)([]),Cn=(0,t.Z)(Sn,2),yn=Cn[0],bn=(Cn[1],(0,g.useState)(0)),wn=(0,t.Z)(bn,2),Pn=wn[0],kn=wn[1];(0,g.useEffect)((function(){var e,n,l,i,t,o,a,c,r,d,u,s,h,v,p,f,g,m,Z,x,j;re(null===(e=U.config)||void 0===e?void 0:e.method),he(null===(n=U.config)||void 0===n?void 0:n.uriTemplate),ge(null===(l=U.config)||void 0===l?void 0:l.timeoutTemplate),je(null===(i=U.config)||void 0===i?void 0:i.requestEncodingTemplate),ye(null===(t=U.config)||void 0===t?void 0:t.bodyTemplate),Ee(null===(o=U.config)||void 0===o?void 0:o.authType),Oe(null===(a=U.config)||void 0===a||null===(c=a.authCredentials)||void 0===c?void 0:c.usernameTemplate),Ve(null===(r=U.config)||void 0===r||null===(d=r.authCredentials)||void 0===d?void 0:d.passwordTemplate),Je(null===(u=U.config)||void 0===u||null===(s=u.authCredentials)||void 0===s?void 0:s.certTemplate),Ie(null===(h=U.config)||void 0===h||null===(v=h.authCredentials)||void 0===v?void 0:v.keyTemplate),We(null===(p=U.config)||void 0===p?void 0:p.disableSSLVerification),_e(null===(f=U.config)||void 0===f?void 0:f.caCertTemplate),on(null===(g=U.config)||void 0===g?void 0:g.encodingTemplate),dn(null===(m=U.config)||void 0===m?void 0:m.responsePath),vn(null===(Z=U.config)||void 0===Z?void 0:Z.errorBehavior),mn(null===(x=U.config)||void 0===x?void 0:x.errorPath),Tn((null===(j=U.config)||void 0===j?void 0:j.headerInfo)||[])}),[e.cellId]),(0,g.useEffect)((function(){var n;null===(n=e.cell)||void 0===n||n.prop("config",{method:ce,uriTemplate:se,timeoutTemplate:fe,requestEncodingTemplate:xe,bodyTemplate:Ce,authType:ke,config:{authCredentials:{usernameTemplate:Ne,passwordTemplate:Re,certTemplate:He,keyTemplate:Fe}},disableSSLVerification:Me,caCertTemplate:Ye,encodingTemplate:tn,responsePath:rn,errorBehavior:hn,errorPath:gn,headerInfo:(0,i.Z)(jn)})}),[e.cellId,ce,se,fe,xe,Ce,ke,Ne,Re,He,Fe,Me,Ye,tn,rn,hn,gn,jn]);var En=function(){ee(!0)},An=function(){te(!0),setTimeout((function(){Q(!1),ee(!1),te(!1)}),500)},Ln=function(){console.log("Clicked cancel button"),Q(!1),ee(!1)},Nn=Object(y).map((function(e){return{value:e.value,label:e.label,children:b}}));return(0,j.jsxs)(a.Z,{direction:"vertical",children:[(0,j.jsx)(c.Z,{plain:!0,children:"Request"}),(0,j.jsx)(r.Z,{children:"Request Method"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:S[0],value:ce,onChange:function(e){re(e),kn(Pn+1)},style:{width:"100%"},children:S.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"URL Template"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"http://foo.com,{{data.foo}}",value:se,onChange:function(e){he(e.target.value),kn(Pn+1)}})}),(0,j.jsx)(r.Z,{children:"Timeout Template(Seconds)"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"30,{{data.timeout}}",value:fe,onChange:function(e){ge(e.target.value),kn(Pn+1)}})}),"GET"!==ce&&"DELETE"!==ce?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Body Encoding Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:C[0],value:xe,onChange:function(e){je(e),kn(Pn+1)},style:{width:"100%"},children:C.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"Body Template"}),(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(u.Z,{style:{width:240},bodyStyle:{width:220,overflow:"auto",padding:"8px"},onClick:En,children:[(0,j.jsx)("pre",{children:be}),(0,j.jsx)(x.Z,{style:{float:"right",top:"10px"},onClick:En})]}),(0,j.jsx)(s.Z,{title:"Title1",visible:_,onOk:An,confirmLoading:ie,onCancel:Ln,width:1e3,children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"editor",onChange:function(e){ye(e),kn(Pn+1)},value:Ce,fontSize:14,style:{width:"900px"},editorProps:{$blockScrolling:!0}})})]})]}):null,(0,j.jsx)(c.Z,{plain:!0,children:"Request Headers"}),(0,j.jsx)(r.Z,{children:"Name Template"}),(0,j.jsxs)(r.Z,{align:"middle",children:[(0,j.jsx)(h.Z,{options:Nn,style:{width:240},value:yn,onChange:function(e){Tn([].concat((0,i.Z)(jn),[{key:e[0],valueTemplate:e[1]}])),kn(Pn+1)},placeholder:"Please select"}),null===jn||void 0===jn?void 0:jn.map((function(e,n){var l="".concat(e.key," / ").concat(e.valueTemplate);return(0,j.jsx)(v.Z,{className:"edit-tag",closable:!0,onClose:function(){return function(e){var n=jn.filter((function(n){return JSON.stringify(n)!==JSON.stringify(e)}));Tn(n),kn(Pn+1),console.log(n,jn)}(e)},children:l.length>33?"".concat(l.slice(0,33),"..."):l},e.key+e.valueTemplate)}))]}),(0,j.jsx)(c.Z,{plain:!0,children:"Authorization"}),(0,j.jsx)(r.Z,{children:"Authorization Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsxs)(o.Z,{defaultValue:"none",value:ke,onChange:function(e){Ee(e),kn(Pn+1)},style:{width:"100%"},children:[(0,j.jsx)(T,{children:"None"},"none"),(0,j.jsx)(T,{children:"Basic"},"basic"),(0,j.jsx)(T,{children:"Client Certification"},"clientCert")]})}),"basic"===ke?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Username"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g.myuser or {{data.username}}",value:Ne,onChange:function(e){Oe(e.target.value),kn(Pn+1)}})}),(0,j.jsx)(r.Z,{children:"Password"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g.mypassword or {{data.password}}",value:Re,onChange:function(e){Ve(e.target.value),kn(Pn+1)}})})]}):"clientCert"===ke?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Client Certificate Key"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"authKey",onChange:function(e){Ie(e),kn(Pn+1)},value:Fe,fontSize:14,style:{width:"240px"},editorProps:{$blockScrolling:!0},height:"250px"})}),(0,j.jsx)(r.Z,{children:"Client Certificate"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"authCert",onChange:function(e){Je(e),kn(Pn+1)},value:He,fontSize:14,height:"250px",style:{width:"240px"},editorProps:{$blockScrolling:!0}})})]}):null,(0,j.jsx)(c.Z,{plain:!0,children:"SSL Options"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(p.Z,{checked:Me,onChange:function(e){We(e.target.checked),kn(Pn+1)},children:"Disable SSL Verification?"})}),Me?null:(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(u.Z,{extra:(0,j.jsx)(x.Z,{onClick:function(){Q(!0)}}),style:{width:220},bodyStyle:{width:220,overflow:"auto"},children:(0,j.jsx)("pre",{children:en})}),(0,j.jsx)(s.Z,{title:"Title",visible:W,onOk:An,confirmLoading:ie,onCancel:Ln,width:1e3,children:(0,j.jsx)(m.ZP,{mode:"javascript",theme:"tomorrow",name:"certEditor",onChange:function(e){_e(e),kn(Pn+1)},value:Ye,fontSize:14,style:{width:"900px"},editorProps:{$blockScrolling:!0}})})]}),(0,j.jsx)(c.Z,{plain:!0,children:"Response"}),(0,j.jsx)(r.Z,{children:"Response Encoding Type"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(o.Z,{defaultValue:C[0],value:tn,onChange:function(e){on(e),kn(Pn+1)},style:{width:"100%"},children:C.map((function(e){return(0,j.jsx)(T,{children:e},e)}))})}),(0,j.jsx)(r.Z,{children:"Payload Path to Store Response"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g. data.foo.[0].bar",value:rn,onChange:function(e){dn(e),kn(Pn+1)}})}),(0,j.jsx)(c.Z,{plain:!0,children:"Error"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(f.ZP.Group,{value:hn,onChange:function(e){vn(e.target.value),kn(Pn+1)},children:(0,j.jsxs)(a.Z,{direction:"vertical",children:[(0,j.jsx)(f.ZP,{value:"throw",children:"Error The Workflow"}),(0,j.jsx)(f.ZP,{value:"payloadPath",children:"Store HTTP Error At Payload Path"})]})})}),"payloadPath"===hn?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{children:"Store Error Response"}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(d.Z,{placeholder:"e.g. data.foo.[0].error",value:gn,onChange:function(e){mn(e.target.value),kn(Pn+1)}})})]}):null]})}},8418:function(e,n,l){l.d(n,{N:function(){return o}});var i=l(3430),t=l(2791),o=function(e,n){var l=(0,t.useState)(e),o=(0,i.Z)(l,2),a=o[0],c=o[1];return(0,t.useEffect)((function(){var l=setTimeout((function(){c(e)}),n);return function(){return clearTimeout(l)}}),[e,n]),a}}}]);
//# sourceMappingURL=416.3af76dbc.chunk.js.map