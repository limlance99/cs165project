(function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],l=0,f=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function o(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"671710ad","chunk-2d21a3d2":"300012fd","chunk-2d21b46e":"2f7df0e9","chunk-5b6a84f6":"8c6af5c1"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=o(e);var c=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}s[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",[n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/"}},[e._v(" Home ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:"/businesses"}},[e._v(" Businesses ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:"/people"}},[e._v(" People ")])],1)],2),n("router-view")],1)},i=[],o=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),a=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={computed:c({},Object(a["c"])(["apiRoutes"]))},p=l,f=(n("5c0b"),n("2877")),b=Object(f["a"])(p,s,i,!1,null,null,null),d=b.exports,m=(n("d3b7"),n("8c4f"));r["a"].use(m["a"]);var h=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/businesses",name:"Businesses",component:function(){return n.e("chunk-5b6a84f6").then(n.bind(null,"1cfb"))}},{path:"/people",name:"People",component:function(){return n.e("chunk-2d21b46e").then(n.bind(null,"bea6"))}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],v=new m["a"]({mode:"history",base:"/",routes:h}),y=v,g=(n("a434"),n("498a"),n("96cf"),n("89ba")),w=n("bc3a"),k=n.n(w);r["a"].use(a["a"]);var O="",j={allRoutes:[{title:"Restrictions",link:"restrictions"},{title:"Conditions",link:"conditions"},{title:"Restrictions and Conditions",link:"resandconds"},{title:"Body Type",link:"bodytype"},{title:"Personal Details",link:"personaldetails"},{title:"Family Relations",link:"familyrelations"},{title:"Nationality",link:"nationality"},{title:"Person Information",link:"personinformation"},{title:"Businesses",link:"businesses"},{title:"Civil Status",link:"civilstatus"},{title:"Driver's License Application Form",link:"dlaf"}],businessList:[],peopleList:[]},P={apiRoutes:function(e){return e.allRoutes},ListofBusinesses:function(e){return e.businessList},ListofPeople:function(e){return e.peopleList}},L={fetchTable:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,k.a.get("".concat(O,"/api/").concat(n));case 3:s=e.sent,"businesses"==n?r("setBusinesses",s.data.data):"people"==n&&r("setPeople",s.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),postBusiness:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,s={businessname:n.businessname.trim(),businessno:n.businessno.trim(),businessadd:n.businessadd.trim()},e.prev=2,e.next=5,k.a.post("".concat(O,"/api/businesses"),s);case 5:return i=e.sent,r("addBusiness",i.data),e.abrupt("return",500);case 10:if(e.prev=10,e.t0=e["catch"](2),409!=e.t0.response.status){e.next=14;break}return e.abrupt("return",409);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),putBusiness:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,k.a.put("".concat(O,"/api/businesses"),n);case 3:s=e.sent,r("updateBusiness",s.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteBusiness:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=n.trim(),e.next=4,k.a.delete("".concat(O,"/api/businesses/").concat(n));case 4:s=e.sent,console.log(s.data),r("deleteBusiness",s.data.businessname);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},x={setBusinesses:function(e,t){return e.businessList=t},setPeople:function(e,t){return e.peopleList=t},addBusiness:function(e,t){for(var n=0;n<e.businessList.length;n++)if(e.businessList[n].businessname.toLowerCase()>t.businessname.toLowerCase()){e.businessList.splice(n,0,t);break}},updateBusiness:function(e,t){for(var n=0;n<e.businessList.length;n++)if(e.businessList[n].businessname==t.businessname){e.businessList[n].businessno=t.businessno,e.businessList[n].businessadd=t.businessadd;break}},deleteBusiness:function(e,t){return e.businessList=e.businessList.filter((function(e){return e.businessname!=t}))}},B=new a["a"].Store({state:j,getters:P,actions:L,mutations:x}),R=n("289d");n("5abe");r["a"].config.productionTip=!1,r["a"].use(R["a"]),new r["a"]({router:y,store:B,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.eb7da020.js.map