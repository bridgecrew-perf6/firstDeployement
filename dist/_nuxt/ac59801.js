(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{222:function(t,e,c){var content=c(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(126).default)("13d2349a",content,!1,{sourceMap:!1})},225:function(t,e,c){"use strict";c(222)},226:function(t,e,c){var n=c(125)(!1);n.push([t.i,"#count[data-v-6935ef28]{font-size:25}",""]),t.exports=n},230:function(t,e,c){"use strict";c.r(e);c(13),c(37);var n={data:function(){return{count:0}},mounted:function(){var t=this;this.$fire.firestore.collection("increment").doc("p2FIC2VjhWcjh8QKbdu9").get().then((function(e){var data=e.data();t.count=data.count}));var e=this.$fire.firestore.collection("increment");try{e.onSnapshot((function(data){data.forEach((function(e){t.count=e.data().count}))}))}catch(t){console.error(t)}},methods:{increment:function(){this.count++,this.$fire.firestore.collection("increment").doc("p2FIC2VjhWcjh8QKbdu9").set({count:this.count})}}},o=(c(225),c(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"container"},[c("div",{staticClass:"col-6 offset-3"},[c("div",{staticClass:"card shadow p-3 rounded mt-5"},[c("div",{staticClass:"card-body hstack gap-5"},[c("button",{staticClass:"btn btn-outline-success",on:{click:t.increment}},[c("h5",[t._v("Clique-moi !")])]),t._v(" "),c("h5",[c("strong",{attrs:{id:"count"}},[t._v(t._s(t.count))])])]),t._v(" "),c("div",{staticClass:"mt-3 mx-auto"},[c("a",{staticStyle:{color:"grey"},attrs:{href:"https://github.com/Xamimus/firstDeployement",target:"_blank"}},[c("svg",{staticClass:"w-6 h-6 text-gray-600 hover:text-gray-800 button--github",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[c("path",{attrs:{d:"M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z",fill:"currentColor"}})])])])])])])])}),[],!1,null,"6935ef28",null);e.default=component.exports}}]);