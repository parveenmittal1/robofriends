(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),i=t.n(r),c=(t(13),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),d=function(e){var n=e.name,t=e.email,a=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},m=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},b=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).state={hasError:!1},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidCatch",value:function(e,n){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Somthing is not available"):this.props.children}}]),n}(a.Component),v=(t(14),function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(m,{searchChange:this.onSearchChange}),o.a.createElement(b,null,o.a.createElement(g,null,o.a.createElement(f,{robots:a})))):o.a.createElement("h1",null,"Loading")}}]),n}(a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);i.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");p?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.0969a485.chunk.js.map