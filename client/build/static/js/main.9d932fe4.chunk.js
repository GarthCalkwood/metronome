(this["webpackJsonpmetronome-frontend"]=this["webpackJsonpmetronome-frontend"]||[]).push([[0],{154:function(e,n,t){"use strict";t.r(n);var o=t(41),a=t.n(o),c=t(13),i=t(0),r=t(227),l=t(213),s=t(102),j=t.n(s),u=t(1),d=function(e){var n=e.value,t=e.onChange;return Object(u.jsx)(l.a,{value:n,onChange:t,placeholder:"Search",variant:"outlined",InputProps:{startAdornment:Object(u.jsx)(r.a,{position:"start",children:Object(u.jsx)(j.a,{})})}})},b=t(103),m=t.n(b),h=t(228),O=t(233),x=t(229),p=t(230),C=t(231),g=t(232),v=t(217),f=t(223),k=t(219),S=t(225),y=function(e){var n=e.open,t=e.onClick,o=e.onClose,a=e.value,c=e.onChange,i=e.sliderValue,r=e.onSliderChange,s=e.onInputChange,j=e.onSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{color:"primary",onClick:t,children:Object(u.jsx)(m.a,{})}),Object(u.jsxs)(x.a,{open:n,onClose:o,children:[Object(u.jsx)(p.a,{children:"Add New Tempo"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(l.a,{value:a,onChange:c,placeholder:"Name"}),Object(u.jsxs)(k.a,{container:!0,spacing:2,children:[Object(u.jsx)(k.a,{item:!0,xs:!0,children:Object(u.jsx)(v.a,{min:40,max:200,value:i,onChange:r})}),Object(u.jsx)(k.a,{item:!0,xs:!0,children:Object(u.jsx)(S.a,{value:i,onChange:s,inputProps:{min:40,max:200,type:"number"}})}),Object(u.jsx)(k.a,{item:!0,children:Object(u.jsx)(f.a,{children:"BPM"})})]})]}),Object(u.jsxs)(g.a,{children:[Object(u.jsx)(O.a,{onClick:o,children:"Close"}),Object(u.jsx)(O.a,{onClick:j,children:"Add"})]})]})]})},I=t(104),B=t.n(I),E=function(e){var n=e.tempo,t=e.open,o=e.onClick,a=e.onClose,c=e.value,i=e.onChange,r=e.sliderValue,s=e.onSliderChange,j=e.onInputChange,d=e.onSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{variant:"contained",color:"primary",size:"small",startIcon:Object(u.jsx)(B.a,{}),onClick:function(e){return o(e,n)},children:"Edit"}),Object(u.jsxs)(x.a,{open:t,onClose:a,children:[Object(u.jsx)(p.a,{children:"Edit Tempo"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(l.a,{value:c,onChange:i,placeholder:"Name"}),Object(u.jsxs)(k.a,{container:!0,spacing:2,children:[Object(u.jsx)(k.a,{item:!0,xs:!0,children:Object(u.jsx)(v.a,{min:40,max:200,value:r,onChange:s})}),Object(u.jsx)(k.a,{item:!0,xs:!0,children:Object(u.jsx)(S.a,{value:r,onChange:j,inputProps:{min:40,max:200,type:"number"}})}),Object(u.jsx)(k.a,{item:!0,children:Object(u.jsx)(f.a,{children:"BPM"})})]})]}),Object(u.jsxs)(g.a,{children:[Object(u.jsx)(O.a,{onClick:a,children:"Close"}),Object(u.jsx)(O.a,{onClick:d,children:"Edit"})]})]})]})},w=t(218),T=t(105),P=t.n(T),V=function(e){var n=e.tempo,t=e.onClick,o=e.onDelete,a=e.open,c=e.onEditButtonClick,i=e.onEditTempoFormClose,r=e.value,l=e.onChange,s=e.sliderValue,j=e.onSliderChange,d=e.onInputChange,b=e.onSubmit;return Object(u.jsxs)(w.a,{divider:!0,button:!0,onClick:function(e){return t(e,n.tempo)},children:[Object(u.jsxs)(f.a,{variant:"body1",gutterBottom:!0,children:["Name: ".concat(n.name),Object(u.jsx)("br",{}),"BPM: ".concat(n.tempo),Object(u.jsx)("br",{})]}),Object(u.jsx)(O.a,{variant:"contained",color:"secondary",size:"small",startIcon:Object(u.jsx)(P.a,{}),onClick:function(e){return o(e,n._id)},children:"Delete"}),Object(u.jsx)(E,{tempo:n,open:a,onClick:c,onClose:i,value:r,onChange:l,sliderValue:s,onSliderChange:j,onInputChange:d,onSubmit:b})]})},A=t(226),M=function(e){var n=e.tempos,t=e.onClick,o=e.onDelete,a=e.open,c=e.onEditButtonClick,i=e.onEditTempoFormClose,r=e.value,l=e.onChange,s=e.sliderValue,j=e.onSliderChange,d=e.onInputChange,b=e.onSubmit;return Object(u.jsx)(A.a,{children:n.map((function(e){return Object(u.jsx)(V,{tempo:e,onClick:t,onDelete:o,open:a,onEditButtonClick:c,onEditTempoFormClose:i,value:r,onChange:l,sliderValue:s,onSliderChange:j,onInputChange:d,onSubmit:b},e._id)}))})},D=t(107),N=t.n(D),_=t(106),F=t.n(_),z=t(212),J=Object(z.a)({root:{margin:20,display:"flex",alignItems:"center",justifyContent:"center"},slider:{width:100,margin:20}}),L=function(e){var n=e.playing,t=e.activeTempo,o=e.onChange,a=e.onClick,c=J();return Object(u.jsxs)("div",{className:c.root,children:[Object(u.jsxs)(f.a,{children:["BPM: ",t]}),Object(u.jsx)(v.a,{className:c.slider,min:40,max:200,value:t,onChange:o}),Object(u.jsx)(h.a,{color:"primary",onClick:a,children:n?Object(u.jsx)(F.a,{}):Object(u.jsx)(N.a,{})})]})},q=t(56),G=t.n(q),H="/api/tempos",K={getAll:function(){return G.a.get(H).then((function(e){return e.data}))},create:function(e){return G.a.post(H,e).then((function(e){return e.data}))},update:function(e,n){return G.a.put("".concat(H,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return G.a.delete("".concat(H,"/").concat(e)).then((function(e){return e.data}))}},Q=t.p+"static/media/click1.5ad4868a.wav",R=t(220),U=t(222),W=t(216),X=t(224),Y=t(108),Z=t.n(Y),$=function(){var e=Object(i.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],a=Object(i.useState)(""),r=Object(c.a)(a,2),l=r[0],s=r[1],j=Object(i.useState)(!1),b=Object(c.a)(j,2),m=b[0],h=b[1],O=Object(i.useState)(120),x=Object(c.a)(O,2),p=x[0],C=x[1],g=Object(i.useState)(""),v=Object(c.a)(g,2),S=v[0],I=v[1],B=Object(i.useState)(120),E=Object(c.a)(B,2),w=E[0],T=E[1],P=Object(i.useState)(!1),V=Object(c.a)(P,2),A=V[0],D=V[1],N=Object(i.useState)(0),_=Object(c.a)(N,2),F=_[0],z=_[1],J=Object(i.useState)(!1),q=Object(c.a)(J,2),G=q[0],H=q[1],Y=Object(i.useState)(null),$=Object(c.a)(Y,2),ee=$[0],ne=$[1],te=Object(i.useState)(!1),oe=Object(c.a)(te,2),ae=oe[0],ce=oe[1],ie=function(){h(!1),C(120),I("")},re=function(){H(!1),C(120),I("")},le=function(e){return I(e.target.value)},se=function(e,n){C(n)},je=function(e){C(e.target.value)},ue=function(e,n){A&&(clearInterval(F),z(setInterval(be,60/n*1e3))),T(n)},de=new Audio(Q),be=function(){de.play()},me=t.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})),he=Object(u.jsxs)("div",{children:[Object(u.jsx)(f.a,{variant:"h4",color:"primary",children:"Saved Tempos"}),Object(u.jsx)(y,{open:m,onClick:function(){return h(!0)},onClose:ie,value:S,onChange:le,sliderValue:p,onSliderChange:se,onInputChange:je,onSubmit:function(e){var n=p;n>200&&(n=200),n<40&&(n=40);var a={name:S,tempo:n};K.create(a).then((function(e){o(t.concat(e))})),ie()}}),Object(u.jsx)(d,{value:l,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(M,{tempos:me,onClick:ue,onDelete:function(e,n){console.log("event: ",e),console.log("id: ",n),window.confirm("Are you sure?")&&K.remove(n).then((function(e){o(t.filter((function(e){return e._id!==n})))}))},open:G,onEditButtonClick:function(e,n){console.log("tempo: ",n),H(!0),C(n.tempo),I(n.name),ne(n)},onEditTempoFormClose:re,value:S,onChange:le,sliderValue:p,onSliderChange:se,onInputChange:je,onSubmit:function(e){var n=p;n>200&&(n=200),n<40&&(n=40);var a={name:S,tempo:n},c=t.findIndex((function(e){return e._id===ee._id}));console.log("tempos 1: ",t),K.update(ee._id,a).then((function(e){var n=t.slice();n.splice(c,1,e),o(n)})),console.log("Changing Tempo ".concat(ee.name,": ").concat(ee.tempo,"BPM to ").concat(S,": ").concat(n,"BPM")),re()}})]}),Oe=function(){ce(!ae)};return Object(i.useEffect)((function(){K.getAll().then((function(e){o(e)}))}),[]),Object(u.jsxs)(k.a,{container:!0,children:[Object(u.jsxs)(k.a,{item:!0,xs:2,md:4,children:[Object(u.jsx)(X.a,{onClick:Oe,children:Object(u.jsx)(Z.a,{})}),Object(u.jsx)(R.a,{variant:"temporary",anchor:"left",open:ae,onClose:Oe,sx:{display:{xs:"block",sm:"none"}},children:he}),Object(u.jsx)(W.a,{smDown:!0,children:Object(u.jsx)(R.a,{variant:"permanent",sx:{display:{sm:"none",md:"block"}},open:!0,children:he})})]}),Object(u.jsx)(k.a,{item:!0,xs:8,md:4,children:Object(u.jsxs)(U.a,{children:[Object(u.jsx)(f.a,{variant:"h3",color:"primary",align:"center",gutterBottom:!0,children:"Metronome"}),Object(u.jsx)(L,{playing:A,activeTempo:w,onChange:ue,onClick:function(e){A||(z(setInterval(be,60/w*1e3)),be()),A&&clearInterval(F),D(!A)}})]})}),Object(u.jsx)(k.a,{item:!0,xs:2,md:4})]})};a.a.render(Object(u.jsx)($,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.9d932fe4.chunk.js.map