webpackJsonp([4],{"+ptz":function(t,e,s){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section is-large"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[this._v("Hi, I'm Chimezie Enyinnaya")]),e("h2",{staticClass:"subtitle"},[this._v("a Software Developer based in Lagos, Nigeria.")]),e("button",{on:{click:this.setNewMessage}},[this._v("COUNTER: "+this._s(this.$store.state.snackbar.counter))])])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("66JA"),a=s("+ptz"),i=s("VU/8")(n.a,a.a,!1,null,null,null);i.options.__file="pages/index.vue",e.default=i.exports},"66JA":function(t,e,s){"use strict";var n=s("Dd8w"),a=s.n(n),i=s("NYxO");e.a={data:function(){return{story:{content:{}}}},methods:a()({setNewMessage:function(t){this.setMessage("Message test")}},Object(i.mapMutations)({setMessage:"snackbar/setMessage"})),asyncData:function(t){},head:function(){return{title:"Index - Nuxt.js",meta:[{hid:"description",name:"description",content:"Index page Nuxt.js "}]}}}}});