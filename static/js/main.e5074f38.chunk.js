(this["webpackJsonpmoney-tracker-v1"]=this["webpackJsonpmoney-tracker-v1"]||[]).push([[0],{311:function(e,t,a){},312:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a.n(c),i=a(19),l=a.n(i),s=(a(311),a(312),a(97)),o=a(22),j=a(272),d=a.n(j),h=a(507),b=a(128),p=a(25),O=a(276),x=a(498),u=a(500),m=a(501),f=a(502),g=a(503),y=a(526),v=a(504),S=a(505),C=a(506),k=a(459),w=a(527),L=a(534),N=a(509),P=a(523),T=a(460),W=a(510),D=a(513),B=a(512),A=a(536),H=a(525),M=a(530),F=a(514),E=a(515),I=a(516),R=a(517),Y=a(518),G=a(519),J=a(520),q=a(521),z=a(532),U=a(522),V=a(275),X=a(158),K=a(496),Q=240,Z=Object(K.a)((function(e){return{root:{display:"flex"},textFields:{"& > *":{margin:e.spacing(1)}},drawer:Object(X.a)({},e.breakpoints.up("sm"),{width:Q,flexShrink:0}),appBar:Object(X.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(Q,"px)"),marginLeft:Q}),menuButton:Object(X.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:Q},content:{flexGrow:1,padding:e.spacing(3)}}})),$=a(273),_=a.n($),ee=a(269),te=a(95),ae=[{typeOption:"Other"},{typeOption:"Groceries"},{typeOption:"Entertainment"},{typeOption:"Appliances"},{typeOption:"Household"},{typeOption:"Personal"},{typeOption:"Electronics"}];function ne(e){var t=Z(),a=Object(p.a)(),i=Object(c.useState)([]),l=Object(o.a)(i,2),j=l[0],X=l[1],K=Object(c.useState)(""),Q=Object(o.a)(K,2),$=Q[0],ne=Q[1],ce=Object(c.useState)(),re=Object(o.a)(ce,2),ie=re[0],le=re[1],se=Object(c.useState)(""),oe=Object(o.a)(se,2),je=oe[0],de=oe[1],he=r.a.useState(new Date),be=Object(o.a)(he,2),pe=be[0],Oe=be[1],xe=r.a.useState(!0),ue=Object(o.a)(xe,2),me=ue[0],fe=ue[1],ge=r.a.useState(!0),ye=Object(o.a)(ge,2),ve=ye[0],Se=ye[1],Ce=r.a.useState(!0),ke=Object(o.a)(Ce,2),we=ke[0],Le=ke[1],Ne=r.a.useState(!1),Pe=Object(o.a)(Ne,2),Te=Pe[0],We=Pe[1],De=r.a.useState(!1),Be=Object(o.a)(De,2),Ae=Be[0],He=Be[1],Me=parseInt(ie),Fe=pe.getDate()+"/"+(pe.getMonth()+1)+"/"+pe.getFullYear(),Ee=pe.toLocaleDateString("fr-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/").join("-"),Ie=Fe?Fe.toString():"no date selected",Re=function(){He(!Ae)},Ye=j.reduce((function(e,t){return e+(t.totalSpend?t.totalSpend:0)}),0),Ge=function(e){e.preventDefault(),X([].concat(Object(s.a)(j),[{day:Ee,value:Me,id:je,label:je,totalSpend:Me,storeName:$,purchaseDate:Ie,purchaseType:je}]))},Je=e.container,qe=j.sort((function(e,t){return e.day<t.day?1:e.day>t.day?-1:0}));var ze=Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)("div",{className:t.toolbar}),Object(n.jsx)(x.a,{}),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(f.a,{variant:"outlined",onClick:function(){window.history.back()},fullWidth:!0,children:"Return"})}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(y.a,{color:"primary",checked:we,onChange:function(e){Le(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}})}),Object(n.jsx)(v.a,{primary:"How much have you spent?"})]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(y.a,{color:"primary",checked:ve,onChange:function(e){Se(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}})}),Object(n.jsx)(v.a,{primary:"What type of stores do you shop at?"})]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(y.a,{color:"primary",checked:me,onChange:function(e){fe(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}})}),Object(n.jsx)(v.a,{primary:"See your purchase history"})]})]}),Object(n.jsx)(x.a,{})]});return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(S.a,{}),Object(n.jsx)(C.a,{position:"fixed",className:t.appBar,children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(k.a,{color:"inherit","aria-label":"open drawer",onClick:Re,className:t.menuButton,children:Object(n.jsx)(d.a,{})}),Object(n.jsx)(b.a,{variant:"h6",noWrap:!0,children:"Your Expenses Dashboard"}),Object(n.jsx)(b.a,{variant:"body2",noWrap:!0,children:".ALPHA"})]})}),Object(n.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(n.jsx)(w.a,{smUp:!0,implementation:"css",children:Object(n.jsx)(L.a,{container:Je,variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:Ae,onClose:Re,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:ze})}),Object(n.jsx)(w.a,{xsDown:!0,implementation:"css",children:Object(n.jsx)(L.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:ze})})]}),Object(n.jsxs)("main",{className:t.content,children:[Object(n.jsx)("div",{className:t.toolbar}),Object(n.jsxs)(N.a,{container:!0,children:[Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(P.a,{p:2,width:"100%",align:"center",justifyContent:"center",alignContent:"center",children:Object(n.jsxs)(T.a,{children:[Object(n.jsx)(P.a,{width:"100%",alignSelf:"flex-start",p:2,children:Object(n.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){We(!0)},children:Object(n.jsx)(b.a,{children:"Add New purchase"})})}),Object(n.jsx)(P.a,{width:"100%",children:Te?Object(n.jsx)(N.a,{item:!0,xs:6,children:Object(n.jsx)(P.a,{p:2,children:Object(n.jsxs)("form",{className:t.textFields,noValidate:!0,autoComplete:"off",onSubmit:Ge,children:[Object(n.jsx)(z.a,{label:"Store Name",placeholder:"What store did you shop at?",fullWidth:!0,value:$,onChange:function(e){return ne(e.target.value)}}),Object(n.jsx)(W.a,{fullWidth:!0,placeholder:"How much did you spend?",type:"Number",value:ie,onChange:function(e){return le(e.target.value)},startAdornment:Object(n.jsx)(D.a,{position:"start",children:"\xa3"})}),Object(n.jsx)(U.a,{disableToolbar:!0,fullWidth:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"date-picker-inline",label:"Purchase Date",value:pe,onChange:function(e){Oe(e)}}),Object(n.jsxs)(B.a,{fullWidth:!0,className:t.formControl,children:[Object(n.jsx)(A.a,{children:"Purchase Type"}),Object(n.jsx)(H.a,{native:!0,value:je,onChange:function(e){return de(e.target.value)},inputProps:{name:"Purchase Type"},children:ae.map((function(e){return Object(n.jsx)("option",{children:e.typeOption})}))})]}),Object(n.jsx)(f.a,{variant:"contained",color:"primary",onClick:Ge,children:Object(n.jsx)(b.a,{children:"Submit"})}),Object(n.jsx)(f.a,{variant:"contained",color:"warning",onClick:function(){We(!1)},children:Object(n.jsx)(b.a,{children:"Cancel"})})]})})}):null})]})})}),we?Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(O.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(n.jsx)(P.a,{p:2,children:Object(n.jsxs)(M.a,{children:[Object(n.jsx)(F.a,{expandIcon:Object(n.jsx)(_.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(P.a,{width:"100%",align:"center",justifyContent:"center",alignContent:"center",children:Object(n.jsxs)(P.a,{width:"100%",alignSelf:"center",py:1,variant:"h5",children:[Object(n.jsx)(b.a,{gutterBottom:!0,children:"Total Spend"}),Object(n.jsx)(b.a,{color:"primary",variant:"h4",children:Object(n.jsx)(te.Motion,{defaultStyle:{x:0},style:{x:Object(te.spring)(Ye)},children:function(e){return Object(n.jsxs)(b.a,{color:"primary",variant:"h4",children:["\xa3",Math.round(100*(e.x+Number.EPSILON))/100]})}})}),Object(n.jsxs)(P.a,{fontWeight:"fontWeightLight",fontStyle:"oblique",children:["in ",j.length," purchases"]})]})})}),Object(n.jsx)(E.a,{children:Object(n.jsx)(I.a,{children:Object(n.jsxs)(R.a,{className:t.table,"aria-label":"simple table",children:[Object(n.jsx)(Y.a,{children:Object(n.jsxs)(G.a,{children:[Object(n.jsx)(J.a,{children:"Total"}),Object(n.jsx)(J.a,{children:"Store"}),Object(n.jsx)(J.a,{children:"Date"}),Object(n.jsx)(J.a,{children:"Type"})]})}),Object(n.jsx)(q.a,{children:qe.map((function(e){return Object(n.jsxs)(G.a,{children:[Object(n.jsx)(J.a,{children:e.totalSpend}),Object(n.jsx)(J.a,{children:e.storeName}),Object(n.jsx)(J.a,{children:e.purchaseDate}),Object(n.jsx)(J.a,{children:e.purchaseType})]},e.name)}))})]})})})]})})})}):null,me?Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(P.a,{p:2,width:"100%",align:"center",justifyContent:"center",alignContent:"center",children:Object(n.jsx)(T.a,{children:Object(n.jsxs)(P.a,{width:"100%",alignSelf:"center",py:1,overflow:"auto",children:[Object(n.jsx)(b.a,{children:"Purchase Type"}),Object(n.jsx)("div",{style:{height:"300px"},children:Object(n.jsx)(V.a,{data:j,margin:{top:20,right:20,bottom:20,left:20},innerRadius:.5,padAngle:.7,cornerRadius:3,colors:{scheme:"nivo"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},enableRadialLabels:!1,radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",sliceLabel:"id",motionStiffness:90,motionDamping:15})})]})})})}):null,ve?Object(n.jsx)(N.a,{item:!0,xs:12,children:Object(n.jsx)(P.a,{p:2,width:"100%",align:"center",justifyContent:"center",alignContent:"center",children:Object(n.jsx)(T.a,{children:Object(n.jsxs)(P.a,{width:"100%",alignSelf:"center",py:1,overflow:"auto",children:[Object(n.jsx)(b.a,{children:"Purchase History"}),Object(n.jsx)("div",{style:{height:"300px"},children:Object(n.jsx)(ee.a,{data:j,from:"2020-04-01",to:"2020-04-30",emptyColor:"#eeeeee",colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],margin:{top:40,right:40,bottom:40,left:40},yearSpacing:40,monthBorderColor:"#ffffff",dayBorderWidth:2,dayBorderColor:"#ffffff",legends:[{anchor:"bottom-right",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]})})]})})})}):null]})]})]})}var ce=a(34),re=a(274);var ie=function(){return Object(n.jsx)(ce.a,{utils:re.a,children:Object(n.jsx)(ne,{})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,538)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};l.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ie,{})}),document.getElementById("root")),le()}},[[428,1,2]]]);
//# sourceMappingURL=main.e5074f38.chunk.js.map