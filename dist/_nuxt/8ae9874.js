(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(n,t,o){"use strict";o.r(t);o(171);var e={data:function(){return{count:0}},mounted:function(){var n=this;console.log("mounted"),this.$fire.firestore.collection("increment").doc("p2FIC2VjhWcjh8QKbdu9").get().then((function(t){var data=t.data();console.log("data ",data),n.count=data.count,console.log("count",n.count);for(var o=0,e=Object.entries(data);o<e.length;o++){var object=e[o];console.log(object)}}))},methods:{increment:function(){this.count++,this.$fire.firestore.collection("increment").doc("p2FIC2VjhWcjh8QKbdu9").set({count:this.count})}}},c=o(42),component=Object(c.a)(e,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h1",[n._v("Clique-moi !")]),n._v(" "),o("button",{on:{click:n.increment}},[n._v(n._s(n.count))])])}),[],!1,null,null,null);t.default=component.exports}}]);