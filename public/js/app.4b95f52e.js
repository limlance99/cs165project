(function(e){function t(t){for(var s,a,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function a(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-272e7620":"b53c3e42","chunk-2d0e5e97":"d8775818","chunk-2d0e9bbd":"0ae4b620","chunk-2d21a3d2":"0ef44e78","chunk-ff3e413e":"dde8ffc2","chunk-2d0e664b":"46d52e1f","chunk-2d0c2690":"3022797d","chunk-2d0c8c51":"afebfd2d","chunk-2d0d67ae":"73c6a3bd","chunk-5993ab41":"f8e9a04d","chunk-f47a62d8":"73cefa22"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=r[e]=[t,s]}));t.push(n[2]=s);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=a(e);var c=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"hero is-primary is-small"},[n("div",{staticClass:"hero-head"},[n("b-navbar",{attrs:{type:"is-primary"}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("img",{attrs:{src:e.logo,alt:"LOGO"}})])],1),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/applynow"}},[e._v("Apply Now")])],1),n("template",{slot:"end"},[n("b-navbar-dropdown",{attrs:{label:"Tables",hoverable:""}},[n("b-navbar-item",{attrs:{tag:"router-link",to:"/businesses"}},[e._v("Businesses")]),n("b-navbar-item",{attrs:{tag:"router-link",to:"/people"}},[e._v("People")])],1)],1)],2)],1),n("div",{staticClass:"hero-body"},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("figure",{staticClass:"image is-128x128 center"},[n("img",{attrs:{src:e.logo}})]),n("h1",{staticClass:"title has-text-centered"},[e._v("Driver's License Application: The Website")]),n("h2",{staticClass:"subtitle has-text-centered"},[e._v("An easy way to apply for a Driver's License.")])])])])]),n("router-view")],1)},i=[],a={data:function(){return{logo:n("dc2d")}}},o=a,u=(n("5c0b"),n("2877")),c=Object(u["a"])(o,r,i,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("8c4f"));s["a"].use(p["a"]);var d=[{path:"/",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/businesses",name:"Businesses",component:function(){return n.e("chunk-272e7620").then(n.bind(null,"1cfb"))}},{path:"/people",name:"People",component:function(){return n.e("chunk-ff3e413e").then(n.bind(null,"bea6"))}},{path:"/applynow",name:"Apply Now",component:function(){return n.e("chunk-2d0e9bbd").then(n.bind(null,"8f92"))}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],f=new p["a"]({mode:"history",base:"/",routes:d}),b=f,m=(n("4de4"),n("a434"),n("498a"),n("96cf"),n("89ba")),h=n("2f62"),v=n("bc3a"),g=n.n(v);s["a"].use(h["a"]);var y="http://localhost:1323",k={allRoutes:[{title:"Restrictions",link:"restrictions"},{title:"Conditions",link:"conditions"},{title:"Restrictions and Conditions",link:"resandconds"},{title:"Body Type",link:"bodytype"},{title:"Personal Details",link:"personaldetails"},{title:"Family Relations",link:"familyrelations"},{title:"Nationality",link:"nationality"},{title:"Person Information",link:"personinformation"},{title:"Businesses",link:"businesses"},{title:"Civil Status",link:"civilstatus"},{title:"Driver's License Application Form",link:"dlaf"}],businessList:[],peopleList:[]},w={apiRoutes:function(e){return e.allRoutes},ListofBusinesses:function(e){return e.businessList},ListofBusinessNames:function(e){for(var t=[],n=0;n<e.businessList.length;n++)t.push(e.businessList[n].businessname);return t},ListofPeople:function(e){return e.peopleList}},L={fetchTable:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,g.a.get("".concat(y,"/api/").concat(n));case 3:r=e.sent,"businesses"==n?s("setBusinesses",r.data.data):"people"==n&&s("setPeople",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),postBusiness:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n){var s,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,r={businessname:n.businessname.trim(),businessno:n.businessno.trim(),businessadd:n.businessadd.trim()},e.prev=2,e.next=5,g.a.post("".concat(y,"/api/businesses"),r);case 5:return i=e.sent,s("addBusiness",i.data),e.abrupt("return",500);case 10:if(e.prev=10,e.t0=e["catch"](2),409!=e.t0.response.status){e.next=14;break}return e.abrupt("return",409);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),putBusiness:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,g.a.put("".concat(y,"/api/businesses"),n);case 3:r=e.sent,s("updateBusiness",r.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteBusiness:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,n){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,n=n.trim(),e.next=4,g.a.delete("".concat(y,"/api/businesses/").concat(n));case 4:r=e.sent,console.log(r.data),s("deleteBusiness",r.data.businessname);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},x={setBusinesses:function(e,t){return e.businessList=t},setPeople:function(e,t){return e.peopleList=t},addBusiness:function(e,t){for(var n=0;n<e.businessList.length;n++)if(e.businessList[n].businessname.toLowerCase()>t.businessname.toLowerCase()){e.businessList.splice(n,0,t);break}},updateBusiness:function(e,t){for(var n=0;n<e.businessList.length;n++)if(e.businessList[n].businessname==t.businessname){e.businessList[n].businessno=t.businessno,e.businessList[n].businessadd=t.businessadd;break}},deleteBusiness:function(e,t){return e.businessList=e.businessList.filter((function(e){return e.businessname!=t}))}},O=new h["a"].Store({state:k,getters:w,actions:L,mutations:x}),B=n("289d");s["a"].config.productionTip=!1,s["a"].use(B["a"]),new s["a"]({router:b,store:O,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("9c0c"),r=n.n(s);r.a},"9c0c":function(e,t,n){},dc2d:function(e,t,n){e.exports=n.p+"img/lto.36b25615.png"}});
//# sourceMappingURL=app.4b95f52e.js.map