(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{17:function(e){e.exports=JSON.parse('{"apiGame_for_develop":"http://127.0.0.1:4000/api/products/","apiGameList_for_develop":"http://127.0.0.1:4000/api/products","apiGame":"https://gametradingplatform.herokuapp.com/api/products/","apiGameList":"https://gametradingplatform.herokuapp.com/api/products"}')},43:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(32),r=c.n(s),i=(c(43),c(6)),j=c(4),l=c(3),o=[{id:1,url:"/",text:"All"},{id:2,url:"/console/ps",text:"PS"},{id:3,url:"/console/xbox",text:"Xbox"},{id:4,url:"/console/ns",text:"Nintendo"},{id:5,url:"/add",text:"Add New Games"}],b=c(1);var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useRef)(null),r=Object(a.useRef)(null),j=function(){n(!c)};return Object(a.useEffect)((function(){var e=r.current.getBoundingClientRect().height;s.current.style.height=c?"".concat(e+14,"px"):"0px"}),[c]),Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"nav-center",children:[Object(b.jsxs)("div",{className:"nav-header",children:[Object(b.jsx)(i.b,{to:"/tradingGamePlatform",children:Object(b.jsx)("div",{className:"nav-logo",children:Object(b.jsx)("h1",{children:"\ud83c\udfaeTrade Game Here"})})}),Object(b.jsxs)("button",{className:"nav-toggle",onClick:j,children:[!c&&Object(b.jsx)("p",{children:"+"}),c&&Object(b.jsx)("p",{children:"\u2212"})]})]}),Object(b.jsx)("div",{className:"links-container",ref:s,children:Object(b.jsx)("ul",{className:"links",ref:r,children:o.map((function(e){var t=e.id,c=e.url,a=e.text;return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:c,onClick:j,children:a})},t)}))})})]})})},u=c(38),O=c(12),h=c.n(O),x=c(16),p=c(35),m=function(e){var t=e._id,c=e.price,a=e.place,n=e.title,s=e.type;return Object(b.jsx)(i.b,{to:"/game/".concat(t),children:Object(b.jsxs)("div",{className:"singleGame",children:["xbox"===s&&Object(b.jsx)("h3",{className:"xbox",children:n}),"ps"===s&&Object(b.jsx)("h3",{className:"ps",children:n}),"ns"===s&&Object(b.jsx)("h3",{className:"ns",children:n}),Object(b.jsxs)("p",{children:["$",c,Object(b.jsx)("span",{children:a})]})]})})},f=c(17),v=function(e){var t=e.filter,c=Object(a.useState)(""),n=Object(l.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)([]),j=Object(l.a)(i,2),o=j[0],d=j[1],O=Object(a.useState)([]),v=Object(l.a)(O,2),g=v[0],N=v[1],_=Object(a.useRef)("");Object(a.useEffect)((function(){var e=function(){var e=Object(x.a)(h.a.mark((function e(c){var a,n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f.apiGameList);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,void 0!==t?(s=n.filter((function(e){return e.type===c})),d(s),N(s)):(d(n),N(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();e(t)}),[t]);var S=function(){if(""!==_.current.value){var e=g.filter((function(e){return Object.values(e.title).join("").toLowerCase().includes(_.current.value.toLowerCase())}));d(e)}else d(g)};return Object(b.jsx)("section",{className:"game-section",children:Object(b.jsxs)("div",{className:"section-center",children:[Object(b.jsxs)("div",{className:"search",children:[Object(b.jsx)("i",{children:Object(b.jsx)(p.a,{})}),Object(b.jsx)("input",{ref:_,type:"text",placeholder:"Search Games",value:s,onChange:function(){r(_.current.value),S()}})]}),o.map((function(e){return Object(b.jsx)(m,Object(u.a)({},e),e._id)}))]})})},g=function(){var e=Object(j.f)().filter,t=Object(a.useState)("All"),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){!function(e){s(void 0!==e?e:"All")}(e)}),[e]),Object(b.jsxs)("div",{className:"filter_canvas",children:[Object(b.jsx)("h3",{children:n}),Object(b.jsx)("ul",{className:"filter",children:o.map((function(e){var t=e.id,c=e.url,a=e.text;return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:c,children:a})},t)}))})]})};function N(){return Object(b.jsxs)("main",{className:"home_content",children:[Object(b.jsx)("h2",{children:"All Latest Games"}),Object(b.jsxs)("div",{className:"home_content2",children:[Object(b.jsx)(g,{}),Object(b.jsx)(v,{})]})]})}var _=c(36),S=c.n(_),y=c(18);function G(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),j=r[0],o=r[1],d=Object(a.useState)("ps"),u=Object(l.a)(d,2),O=u[0],h=u[1],x=Object(a.useState)(0),p=Object(l.a)(x,2),m=p[0],f=p[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),N=g[0],_=g[1],G=Object(a.useState)(""),C=Object(l.a)(G,2),P=C[0],k=C[1],w=Object(a.useState)(""),T=Object(l.a)(w,2),L=T[0],A=T[1],E=Object(a.useState)(!0),R=Object(l.a)(E,2),J=R[0],M=R[1],B=Object(a.useState)(""),D=Object(l.a)(B,2),X=D[0],$=D[1];return Object(b.jsx)("main",{className:"add_main",children:Object(b.jsxs)("div",{className:"Game_Page",children:[Object(b.jsx)(i.b,{to:"/tradingGamePlatform",className:"back",children:Object(b.jsx)(y.a,{})}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={url:"http://127.0.0.1:4000/api/products",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},data:{name:c,title:j,price:m,place:N,contact:P,type:O,description:L}};S()(t).then((function(e){alert("Successfully created a new post."),M(!0)})).catch((function(e){M(!1),$(e.response.data)}))},className:"add_main_form_part",children:[Object(b.jsx)("h2",{children:"Create a Game Post"}),Object(b.jsxs)("div",{className:"add_main_content_part",children:[Object(b.jsxs)("div",{className:"add_main_content_part_block1",children:[Object(b.jsx)("p",{children:"Name:"}),Object(b.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("p",{children:"Listing Title:"}),Object(b.jsx)("input",{type:"text",placeholder:"Title",value:j,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("p",{children:"Price:"}),Object(b.jsx)("input",{type:"number",min:"0.00",max:"10000.00",step:"1",placeholder:"Price",value:m,onChange:function(e){return f(e.target.value)}}),Object(b.jsx)("p",{children:"Meet up Place:"}),Object(b.jsx)("input",{type:"text",placeholder:"Place",value:N,onChange:function(e){return _(e.target.value)}}),Object(b.jsx)("p",{children:"Contact Method:"}),Object(b.jsx)("input",{type:"text",placeholder:"TG/Phone Number",value:P,onChange:function(e){return k(e.target.value)}})]}),Object(b.jsxs)("div",{className:"add_main_content_part_block2",children:[Object(b.jsx)("p",{children:"Suit for Console:"}),Object(b.jsxs)("select",{onChange:function(e){return h(e.target.value)},children:[Object(b.jsx)("option",{value:"ps",children:"PlayStation"}),Object(b.jsx)("option",{value:"xbox",children:"Xbox"}),Object(b.jsx)("option",{value:"ns",children:"Nintendo"})]}),Object(b.jsx)("p",{children:"Description (Optional):"}),Object(b.jsx)("textarea",{placeholder:"You may jot down anything necessary here.",value:L,onChange:function(e){return A(e.target.value)},cols:"30",rows:"10"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Create a New Post"})]})]}),Object(b.jsx)("div",{className:"Game_Page_warning",children:!J&&Object(b.jsx)("div",{children:X})})]})]})})}var C=c(37),P=c(19),k=function(){return Object(b.jsx)("div",{className:"loader"})};function w(){var e=Object(j.f)().id,t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!0),o=Object(l.a)(r,2),d=o[0],u=o[1],O=Object(a.useState)([]),p=Object(l.a)(O,2),m=p[0],v=p[1];if(Object(a.useEffect)((function(){var t=function(){var t=Object(x.a)(h.a.mark((function t(){var c,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,fetch("".concat(f.apiGame+e));case 4:return c=t.sent,t.next=7,c.json();case 7:a=t.sent,u(!1),v(a),s((function(){for(var e=0;e<a.date.length;e++)if("T"===a.date[e])return a.date.substring(0,e)})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),u(!1);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),d)return Object(b.jsx)("main",{children:Object(b.jsx)(k,{})});var g=m.name,N=m.title,_=m.price,S=m.place,G=m.contact,w=m.description;m.date;return Object(b.jsxs)("main",{className:"Game_Page",children:[Object(b.jsx)(i.b,{to:"/tradingGamePlatform",className:"back",children:Object(b.jsx)(y.a,{})}),Object(b.jsx)("div",{className:"game_canvas",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:N}),Object(b.jsxs)("div",{className:"game_information",children:[Object(b.jsxs)("div",{className:"game_information_some",children:[Object(b.jsx)("span",{children:Object(b.jsx)(C.a,{})}),Object(b.jsxs)("p",{children:["$",_]})]}),Object(b.jsx)("p",{children:n})]}),Object(b.jsxs)("div",{className:"game_information",children:[Object(b.jsxs)("div",{className:"game_information_some",children:[Object(b.jsx)("span",{children:Object(b.jsx)(P.b,{})}),Object(b.jsx)("p",{children:g})]}),Object(b.jsxs)("div",{className:"game_information_some",children:[Object(b.jsx)("span",{children:Object(b.jsx)(P.c,{})}),Object(b.jsx)("p",{children:S})]}),Object(b.jsxs)("div",{className:"game_information_some",children:[Object(b.jsx)("span",{children:Object(b.jsx)(P.a,{})}),Object(b.jsx)("p",{children:G})]})]}),Object(b.jsx)("p",{children:w})]})})]})}function T(){var e=Object(j.f)().filter;return Object(b.jsxs)("main",{className:"home_content",children:[Object(b.jsx)("h2",{children:e}),Object(b.jsxs)("div",{className:"home_content2",children:[Object(b.jsx)(g,{}),Object(b.jsx)(v,{filter:e})]})]})}var L=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/tradingGamePlatform",children:Object(b.jsx)(N,{})}),Object(b.jsx)(j.a,{path:"/console/:filter",children:Object(b.jsx)(T,{})}),Object(b.jsx)(j.a,{exact:!0,path:"/add",children:Object(b.jsx)(G,{})}),Object(b.jsx)(j.a,{path:"/game/:id",children:Object(b.jsx)(w,{})})]})]})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.cb457dd5.chunk.js.map