webpackJsonp([1],{"0aw3":function(t,e){},"3pYX":function(t,e,n){"use strict";var a=n("L/GG");e.a=a.a},"5kYc":function(t,e){},"6UQl":function(t,e,n){function a(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./article/page.vue":"c0uz","./index/page.vue":"PUxK"};a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="6UQl"},"7xLo":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalogue"},[t._l(t.catalogue,function(e,a){return[n("section",{key:a},[n("h2",[t._v(t._s(e.collections))]),t._v(" "),t._l(e.item,function(e,a){return[n("li",{key:a},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.title))])])]})],2)]})],2)},r=[],i={render:a,staticRenderFns:r};e.a=i},BQvU:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{domProps:{innerHTML:t._s(t.article)}})])},r=[],i={render:a,staticRenderFns:r};e.a=i},Cj9p:function(t,e,n){"use strict";e.a={path:"/",name:"index",data:function(){return{}},computed:{data:function(){return this.$store.state.index.data}},components:{}}},D7b6:function(t,e,n){"use strict";e.a={name:"catalogue",props:["catalogue"],data:function(){return{}}}},ENKb:function(t,e){e.importAll=function(t,e){if("router"!==e&&"store"!==e)return console.warn("expected 'router' or 'store' only");var n=[];return t.keys().forEach(function(a){var r=t(a).default;"router"===e&&n.push({path:r.path,name:r.name,component:r}),"store"===e&&(n[r.namespace]=r)}),n}},"L/GG":function(t,e,n){"use strict";function a(t){n("0aw3")}var r=n("gQ1k"),i=n("ydtX"),s=n("VU/8"),u=a,c=s(r.a,i.a,!1,u,null,null);e.a=c.exports},M93x:function(t,e,n){"use strict";function a(t){n("5kYc")}var r=n("xJD8"),i=n("ZmKT"),s=n("VU/8"),u=a,c=s(r.a,i.a,!1,u,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("vMWD"),i=n("koI+"),s=n("M93x");a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,store:i.a,template:"<App/>",components:{App:s.a}})},OYin:function(t,e,n){"use strict";var a=n("l/Am"),r=n("k0QQ"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},P8sD:function(t,e,n){"use strict";e.a={name:"navBar",props:["nav"],methods:{getIndex:function(t){this.$emit("getIndex",t)}},mounted:function(){}}},PUxK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Cj9p"),r=n("cRhP"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.default=s.exports},RHz5:function(t,e,n){"use strict";function a(t){n("dPW7")}var r=n("D7b6"),i=n("7xLo"),s=n("VU/8"),u=a,c=s(r.a,i.a,!1,u,"data-v-4340ce2c",null);e.a=c.exports},Tckm:function(t,e,n){function a(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./article/data.js":"zsNn","./index/data.js":"c8o2"};a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="Tckm"},ZmKT:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("side-bar",{attrs:{author:t.author,nav:t.nav}}),t._v(" "),n("router-view")],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},blVE:function(t,e,n){"use strict";var a=n("//Fk"),r=n.n(a),i=(n("7+uW"),n("mtWM")),s=n.n(i);s.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},s.a.interceptors.request.use(function(t){return t},function(t){return r.a.reject(t)}),s.a.interceptors.response.use(function(t){return t},function(t){return r.a.reject(t)}),e.a=s.a},c0uz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("qZII"),r=n("BQvU"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.default=s.exports},c8o2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:"hey!"},r={},i={},s={};e.default={namespace:"index",namespaced:!0,state:a,getters:r,actions:i,mutations:s}},cRhP:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("main")},r=[],i={render:a,staticRenderFns:r};e.a=i},dPW7:function(t,e){},gQ1k:function(t,e,n){"use strict";var a=n("OYin"),r=n("sxeD"),i=n("RHz5");e.a={name:"sideBar",props:["author","nav"],data:function(){return{index:"前端"}},methods:{currentIndex:function(t){this.index=t}},computed:{catalogue:function(){var t=this;return this.nav.filter(function(e){return e.index===t.index})[0].catalogue}},components:{author:a.a,navBar:r.a,catalogue:i.a}}},k0QQ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("img",{staticClass:"author__avatar",attrs:{src:t.avatar,alt:"avatar",draggable:"false"}}),t._v(" "),n("div",{staticClass:"author__link"},[t._l(t.links,function(t,e){return[n("a",{key:e},[n("i",{class:"fa fa-"+t.name,attrs:{"aria-hidden":"true"}})])]})],2)])},r=[],i={render:a,staticRenderFns:r};e.a=i},"koI+":function(t,e,n){"use strict";var a=n("Dd8w"),r=n.n(a),i=n("7+uW"),s=n("NYxO"),u=n("ENKb"),c=(n.n(u),n("vnjs")),o=n("Tckm"),l=Object(u.importAll)(o,"store");i.a.use(s.a),e.a=new s.a.Store(r()({},c.a,{modules:r()({},l)}))},"l/Am":function(t,e,n){"use strict";e.a={name:"author",props:["avatar","links"],methods:{}}},qHIZ:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"catalogueList"},[t._l(t.nav,function(e,a){return[n("li",{key:a,staticClass:"catalogueList__item",on:{click:function(n){t.getIndex(e.index)}}},[t._v("\n            "+t._s(e.index)+"\n        ")])]})],2)},r=[],i={render:a,staticRenderFns:r};e.a=i},qZII:function(t,e,n){"use strict";e.a={path:"/article/:title",name:"article",data:function(){return{}},computed:{article:function(){return this.$store.state.articles.article}},mounted:function(){this.$store.dispatch("articles/getArticle","test")},components:{}}},sxeD:function(t,e,n){"use strict";var a=n("P8sD"),r=n("qHIZ"),i=n("VU/8"),s=i(a.a,r.a,!1,null,null,null);e.a=s.exports},vMWD:function(t,e,n){"use strict";var a=n("Gu7T"),r=n.n(a),i=n("7+uW"),s=n("/ocq"),u=n("ENKb"),c=(n.n(u),n("6UQl")),o=Object(u.importAll)(c,"router");i.a.use(s.a),e.a=new s.a({routes:[].concat(r()(o))})},vnjs:function(t,e,n){"use strict";var a={},r={},i={},s={};e.a={state:a,getters:r,actions:i,mutations:s}},xJD8:function(t,e,n){"use strict";var a=n("3pYX");e.a={name:"app",data:function(){return{author:{avatar:"/static/images/avatar.jpg",links:[{name:"github",link:""}]},nav:[{index:"前端",catalogue:[{collections:"Essential Links",item:[{title:"Core Docs",link:""},{title:"Forum",link:""},{title:"Community",link:""},{title:"Chat",link:""},{title:"Twitter",link:""}]},{collections:"EEcosystem",item:[{title:"vue-router",link:""},{title:"vuex",link:""},{title:"vue-loader",link:""},{title:"awesome-vue",link:""}]}]},{index:"后端",catalogue:[{collections:"Essential Links",item:[{title:"Core Docs",link:""},{title:"Forum",link:""}]},{collections:"EEcosystem",item:[{title:"vue-router",link:""},{title:"vuex",link:""}]}]}]}},components:{sideBar:a.a}}},ydtX:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sideBar"},[n("div",{staticClass:"nav-wrap"},[n("author",{attrs:{avatar:t.author.avatar,links:t.author.links}}),t._v(" "),n("nav-bar",{attrs:{nav:t.nav},on:{getIndex:t.currentIndex}})],1),t._v(" "),n("catalogue",{attrs:{catalogue:t.catalogue}})],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},zsNn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("blVE"),r={article:""},i={},s={setArticl:function(t,e){t.article=e}},u={getArticle:function(t,e){var n=(t.dispatch,t.commit);t.state;a.a.get("./articles/"+e+".html",{responseType:"text"}).then(function(t){n("setArticl",t.data)})}};e.default={namespace:"articles",namespaced:!0,state:r,getters:i,actions:u,mutations:s}}},["NHnr"]);
//# sourceMappingURL=app.b144e886b3e86d704c6a.js.map