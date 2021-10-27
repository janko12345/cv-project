(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),j=c(2),i=c(0);function l(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),s=c[0],a=c[1];return Object(i.jsxs)("div",{className:"contact-piece",children:[Object(i.jsxs)("label",{htmlFor:e.name,children:[e.name,":"]}),Object(i.jsx)("input",{type:e.type,id:e.name,value:s,onChange:function(e){return a(e.target.value)}})]})}l.defaultProps={type:"text"};var b=l;var u=function(e){return Object(i.jsx)("div",{className:"profile-info-header",children:Object(i.jsx)("p",{children:e.name})})};var O=function(){return Object(i.jsxs)("div",{className:"profile-section",children:[Object(i.jsx)(u,{name:"Contact"}),Object(i.jsx)(b,{name:"address"}),Object(i.jsx)(b,{name:"phone",type:"tel"}),Object(i.jsx)(b,{name:"email",type:"email"})]})},o=c(3);var x=function(){return Object(i.jsxs)("div",{className:"language-piece",onClick:function(){return console.log("clicked language piece")},children:[Object(i.jsx)("input",{type:"text",placeholder:"name"}),Object(i.jsx)("span",{children:"-"}),Object(i.jsx)("input",{type:"text",placeholder:"level"})]})};var d=function(e){return Object(i.jsx)("div",{className:"add-btn",onClick:function(){return e.setNumberOfPieces((function(e){return e+1}))}})};var p=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"profile-section",children:[Object(i.jsx)(u,{name:"Languages"}),Object(o.a)(new Array(c)).map((function(e,t){return Object(i.jsx)(x,{},t)})),Object(i.jsx)(d,{setNumberOfPieces:s})]})};var m=function(){return Object(i.jsx)("div",{className:"hobby-piece",children:Object(i.jsx)("input",{type:"text"})})};var v=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"profile-section",children:[Object(i.jsx)(u,{name:"Hobbies"}),Object(o.a)(new Array(c)).map((function(e,t){return Object(i.jsx)(m,{},t)})),Object(i.jsx)(d,{setNumberOfPieces:s})]})};var f=function(){return Object(i.jsxs)("div",{className:"profile-section",children:[Object(i.jsx)("div",{className:"fullname",children:Object(i.jsx)("input",{type:"text",name:"fullname",placeholder:"full name"})}),Object(i.jsx)("img",{className:"user-pic",src:"/user.png",alt:"user picture"})]})};var h=function(){return Object(i.jsx)("div",{className:"sidebar",children:Object(i.jsxs)("div",{className:"profile-cnt",children:[Object(i.jsx)(f,{}),Object(i.jsx)(O,{}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{})]})})};var N=function(e){return Object(i.jsx)("div",{className:"main-info-header",children:Object(i.jsx)("p",{children:e.name})})};var y=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"main-section",children:[Object(i.jsx)(N,{name:"About"}),Object(i.jsx)("textarea",{cols:"30",rows:"10",style:{resize:"none"},value:c,onChange:function(e){return s(e.target.value)}})]})};var g=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"from-to-date",children:[Object(i.jsx)("input",{type:"date"}),"-",Object(i.jsx)("input",{type:"date"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"School"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"Title of study"})})]})};var w=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"main-section",children:[Object(i.jsx)(N,{name:"Education"}),Object(o.a)(new Array(c)).map((function(e,t){return Object(i.jsx)(g,{},t)})),Object(i.jsx)(d,{setNumberOfPieces:s})]})};var S=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"from-to-date",children:[Object(i.jsx)("input",{type:"date"}),"-",Object(i.jsx)("input",{type:"date"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"Company"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"text",placeholder:"Position title"})})]}),Object(i.jsx)("textarea",{cols:"30",rows:"10",placeholder:"task 1;\ntask 2;\n..."})]})};var C=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"main-section",children:[Object(i.jsx)(N,{name:"Experience"}),Object(o.a)(new Array(c)).map((function(e,t){return Object(i.jsx)(S,{},t)})),Object(i.jsx)(d,{setNumberOfPieces:s})]})};var k=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"main-section",children:[Object(i.jsx)(N,{name:"Certifications"}),Object(i.jsx)("textarea",{cols:"30",rows:"10",style:{resize:"none"},value:c,onChange:function(e){return s(e.target.value)}})]})};var P=function(){return Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(y,{}),Object(i.jsx)(w,{}),Object(i.jsx)(C,{}),Object(i.jsx)(k,{})]})};var A=function(){return Object(i.jsxs)("div",{className:"cv",children:[Object(i.jsx)(h,{}),Object(i.jsx)(P,{})]})};var E=function(){return Object(i.jsx)("div",{className:"app-container",children:Object(i.jsx)(A,{})})};c(13);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a8c5370d.chunk.js.map