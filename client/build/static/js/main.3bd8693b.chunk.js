(this["webpackJsonpmetronome-frontend"]=this["webpackJsonpmetronome-frontend"]||[]).push([[0],{129:function(e,n,t){"use strict";t.r(n);var a=t(10),c=t.n(a),o=t(21),i=t(0),r=t(181),l=t(171),s=t(80),j=t.n(s),u=t(4),d=function(e){var n=e.value,t=e.onChange;return Object(u.jsx)(r.a,{value:n,onChange:t,placeholder:"Search",variant:"outlined",InputProps:{startAdornment:Object(u.jsx)(l.a,{position:"start",children:Object(u.jsx)(j.a,{})})}})},b=t(81),m=t.n(b),h=t(172),O=t(178),p=t(173),x=t(174),C=t(175),g=t(177),v=t(184),f=t(88),S=t(176),k=t(166),I=function(e){var n=e.open,t=e.onClick,a=e.onClose,c=e.value,o=e.onChange,i=e.sliderValue,l=e.onSliderChange,s=e.onInputChange,j=e.onSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{color:"primary",onClick:t,children:Object(u.jsx)(m.a,{})}),Object(u.jsxs)(p.a,{open:n,onClose:a,children:[Object(u.jsx)(x.a,{children:"Add New Tempo"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(r.a,{value:c,onChange:o,placeholder:"Name"}),Object(u.jsxs)(S.a,{container:!0,spacing:2,children:[Object(u.jsx)(S.a,{item:!0,xs:!0,children:Object(u.jsx)(v.a,{min:40,max:200,value:i,onChange:l})}),Object(u.jsx)(S.a,{item:!0,xs:!0,children:Object(u.jsx)(k.a,{value:i,onChange:s,inputProps:{min:40,max:200,type:"number"}})}),Object(u.jsx)(S.a,{item:!0,children:Object(u.jsx)(f.a,{children:"BPM"})})]})]}),Object(u.jsxs)(g.a,{children:[Object(u.jsx)(O.a,{onClick:a,children:"Close"}),Object(u.jsx)(O.a,{onClick:j,children:"Add"})]})]})]})},y=t(179),B=t(83),E=t.n(B),w=t(82),T=t.n(w),P=function(e){var n=e.tempo,t=e.open,a=e.onClick,c=e.onClose,o=e.value,i=e.onChange,l=e.sliderValue,s=e.onSliderChange,j=e.onInputChange,d=e.onSubmit;return Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{variant:"contained",color:"primary",size:"small",startIcon:Object(u.jsx)(T.a,{}),onClick:function(e){return a(e,n)},children:"Edit"}),Object(u.jsxs)(p.a,{open:t,onClose:c,children:[Object(u.jsx)(x.a,{children:"Edit Tempo"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(r.a,{value:o,onChange:i,placeholder:"Name"}),Object(u.jsxs)(S.a,{container:!0,spacing:2,children:[Object(u.jsx)(S.a,{item:!0,xs:!0,children:Object(u.jsx)(v.a,{min:40,max:200,value:l,onChange:s})}),Object(u.jsx)(S.a,{item:!0,xs:!0,children:Object(u.jsx)(k.a,{value:l,onChange:j,inputProps:{min:40,max:200,type:"number"}})}),Object(u.jsx)(S.a,{item:!0,children:Object(u.jsx)(f.a,{children:"BPM"})})]})]}),Object(u.jsxs)(g.a,{children:[Object(u.jsx)(O.a,{onClick:c,children:"Close"}),Object(u.jsx)(O.a,{onClick:d,children:"Edit"})]})]})]})},V=function(e){var n=e.tempo,t=e.onClick,a=e.onDelete,c=e.open,o=e.onEditButtonClick,i=e.onEditTempoFormClose,r=e.value,l=e.onChange,s=e.sliderValue,j=e.onSliderChange,d=e.onInputChange,b=e.onSubmit;return Object(u.jsxs)(y.a,{divider:!0,button:!0,onClick:function(e){return t(e,n.tempo)},children:[Object(u.jsxs)(f.a,{variant:"body1",gutterBottom:!0,children:["Name: ".concat(n.name),Object(u.jsx)("br",{}),"BPM: ".concat(n.tempo),Object(u.jsx)("br",{})]}),Object(u.jsx)(O.a,{variant:"contained",color:"secondary",size:"small",startIcon:Object(u.jsx)(E.a,{}),onClick:function(e){return a(e,n.id)},children:"Delete"}),Object(u.jsx)(P,{tempo:n,open:c,onClick:o,onClose:i,value:r,onChange:l,sliderValue:s,onSliderChange:j,onInputChange:d,onSubmit:b})]})},A=t(170),M=function(e){var n=e.tempos,t=e.onClick,a=e.onDelete,c=e.open,o=e.onEditButtonClick,i=e.onEditTempoFormClose,r=e.value,l=e.onChange,s=e.sliderValue,j=e.onSliderChange,d=e.onInputChange,b=e.onSubmit;return Object(u.jsx)(A.a,{children:n.map((function(e){return Object(u.jsx)(V,{tempo:e,onClick:t,onDelete:a,open:c,onEditButtonClick:o,onEditTempoFormClose:i,value:r,onChange:l,sliderValue:s,onSliderChange:j,onInputChange:d,onSubmit:b},e.id)}))})},D=t(85),N=t.n(D),F=t(84),z=t.n(F),J=t(180),L=Object(J.a)({root:{margin:20,display:"flex",alignItems:"center",justifyContent:"center"},slider:{width:100,margin:20}}),U=function(e){var n=e.playing,t=e.activeTempo,a=e.onChange,c=e.onClick,o=L();return Object(u.jsxs)("div",{className:o.root,children:[Object(u.jsxs)(f.a,{children:["BPM: ",t]}),Object(u.jsx)(v.a,{className:o.slider,min:40,max:200,value:t,onChange:a}),Object(u.jsx)(h.a,{color:"primary",onClick:c,children:n?Object(u.jsx)(z.a,{}):Object(u.jsx)(N.a,{})})]})},q=t.p+"static/media/click1.5ad4868a.wav",G=t(183),H=t(48),K=t.n(H),Q="/api/tempos",R={getAll:function(){return K.a.get(Q).then((function(e){return e.data}))},create:function(e){return K.a.post(Q,e).then((function(e){return e.data}))},update:function(e,n){return K.a.put("".concat(Q,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return K.a.delete("".concat(Q,"/").concat(e)).then((function(e){return e.data}))}},W=t(131),X=t(182),Y=t(86),Z=t.n(Y),$=function(){var e=Object(i.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(""),r=Object(o.a)(c,2),l=r[0],s=r[1],j=Object(i.useState)(!1),b=Object(o.a)(j,2),m=b[0],h=b[1],O=Object(i.useState)(120),p=Object(o.a)(O,2),x=p[0],C=p[1],g=Object(i.useState)(""),v=Object(o.a)(g,2),k=v[0],y=v[1],B=Object(i.useState)(120),E=Object(o.a)(B,2),w=E[0],T=E[1],P=Object(i.useState)(!1),V=Object(o.a)(P,2),A=V[0],D=V[1],N=Object(i.useState)(0),F=Object(o.a)(N,2),z=F[0],J=F[1],L=Object(i.useState)(!1),H=Object(o.a)(L,2),K=H[0],Q=H[1],Y=Object(i.useState)(null),$=Object(o.a)(Y,2),_=$[0],ee=$[1],ne=function(){h(!1),C(120),y("")},te=function(){Q(!1),C(120),y("")},ae=function(e){return y(e.target.value)},ce=function(e,n){C(n)},oe=function(e){C(e.target.value)},ie=function(e,n){A&&(clearInterval(z),J(setInterval(le,60/n*1e3))),T(n)},re=new Audio(q),le=function(){re.play()},se=t.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(i.useEffect)((function(){R.getAll().then((function(e){a(e)}))}),[]),Object(u.jsxs)(S.a,{container:!0,children:[Object(u.jsxs)(S.a,{item:!0,xs:2,md:4,children:[Object(u.jsx)(X.a,{smDown:!0,children:Object(u.jsxs)(G.a,{variant:"permanent",anchor:"left",children:[Object(u.jsx)(f.a,{variant:"h4",color:"primary",children:"Saved Tempos"}),Object(u.jsx)(I,{open:m,onClick:function(){return h(!0)},onClose:ne,value:k,onChange:ae,sliderValue:x,onSliderChange:ce,onInputChange:oe,onSubmit:function(e){var n=x;n>200&&(n=200),n<40&&(n=40);var c={name:k,tempo:n};R.create(c).then((function(e){a(t.concat(e))})),ne()}}),Object(u.jsx)(d,{value:l,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(M,{tempos:se,onClick:ie,onDelete:function(e,n){window.confirm("Are you sure?")&&R.remove(n).then((function(e){a(t.filter((function(e){return e.id!==n})))}))},open:K,onEditButtonClick:function(e,n){console.log("tempo: ",n),Q(!0),C(n.tempo),y(n.name),ee(n)},onEditTempoFormClose:te,value:k,onChange:ae,sliderValue:x,onSliderChange:ce,onInputChange:oe,onSubmit:function(e){var n=x;n>200&&(n=200),n<40&&(n=40);var c={name:k,tempo:n},o=t.findIndex((function(e){return e.id===_.id}));console.log("tempos 1: ",t),R.update(_.id,c).then((function(e){var n=t.slice();n.splice(o,1,e),a(n)})),console.log("Changing Tempo ".concat(_.name,": ").concat(_.tempo,"BPM to ").concat(k,": ").concat(n,"BPM")),te()}})]})}),Object(u.jsx)(X.a,{mdUp:!0,children:Object(u.jsx)(G.a,{variant:"permanent",open:!0,children:Object(u.jsx)(Z.a,{})})})]}),Object(u.jsx)(S.a,{item:!0,xs:8,md:4,children:Object(u.jsxs)(W.a,{children:[Object(u.jsx)(f.a,{variant:"h3",color:"primary",align:"center",gutterBottom:!0,children:"Metronome"}),Object(u.jsx)(U,{playing:A,activeTempo:w,onChange:ie,onClick:function(e){A||(J(setInterval(le,60/w*1e3)),le()),A&&clearInterval(z),D(!A)}})]})}),Object(u.jsx)(S.a,{item:!0,xs:2,md:4})]})};c.a.render(Object(u.jsx)($,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.3bd8693b.chunk.js.map