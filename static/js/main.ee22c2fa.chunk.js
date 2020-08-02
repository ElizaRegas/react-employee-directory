(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(2),i=a(3),s=a(5),m=a(4),u=(a(22),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Click on ",r.a.createElement("span",{id:"headerWord"},"Name")," to list alphabetically, or use the search box to narrow your results")))}}]),a}(n.Component)),d=(a(23),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleSearch=function(){var t=e.props,a=t.profiles,n=t.setStateCallback,r=e.state.inputValue;n({filteredProfiles:a.filter((function(e){return(e.name.first+" "+e.name.last).toLowerCase().includes(r.toLowerCase())}))})},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-group input-group-sm mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"input-group-text",id:"inputGroup-sizing-sm",onClick:this.handleSearch},"Search")),r.a.createElement("input",{type:"text",value:this.state.inputValue,onChange:this.handleChange,className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-sm"})))}}]),a}(n.Component)),p=(a(24),a(25),function(e){var t=e.profile,a=new Date(t.dob.date),n=a.getDate(),l=a.getMonth()+1,c=a.getFullYear(),o="".concat(l,"-").concat(n,"-").concat(c);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"row",id:"profileRow"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("img",{src:t.picture.thumbnail,alt:"profile"})),r.a.createElement("div",{className:"col-md-2"},t.name.first+" "+t.name.last),r.a.createElement("div",{className:"col-md-2"},t.phone),r.a.createElement("div",{className:"col-md-4"},t.email),r.a.createElement("div",{className:"col-md-2"},o)))}),f=function(e){var t=e.profiles,a=e.handleAlphaSort;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",id:"employees"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},"Image"),r.a.createElement("div",{className:"col-md-2",onClick:a,id:"nameLink"},"Name"),r.a.createElement("div",{className:"col-md-2"},"Phone"),r.a.createElement("div",{className:"col-md-4"},"Email"),r.a.createElement("div",{className:"col-md-2"},"DOB")),t.length>0&&t.map((function(e,t){return r.a.createElement(p,{key:t,profile:e})}))))},h=a(16),v=a.n(h),E=function(){return v.a.get("https://randomuser.me/api/?results=50")},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={profiles:[],filteredProfiles:[]},e.setStateCallback=function(t){e.setState(t)},e.handleAlphaSort=function(){var t=e.state.filteredProfiles.sort((function(e,t){return e.name.last.toLowerCase().localeCompare(t.name.last.toLowerCase())}));e.setState({filteredProfiles:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){e.setState({profiles:t.data.results,filteredProfiles:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.profiles,a=e.filteredProfiles;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(d,{profiles:t,setStateCallback:this.setStateCallback}),r.a.createElement("hr",null),r.a.createElement(f,{profiles:a,handleAlphaSort:this.handleAlphaSort}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ee22c2fa.chunk.js.map