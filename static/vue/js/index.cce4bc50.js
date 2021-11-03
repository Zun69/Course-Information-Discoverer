(function(t){function e(e){for(var r,s,o=e[0],u=e[1],l=e[2],v=0,d=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={index:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3b67":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5 text-center"},[n("GoogleChart")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("h2",[t._v("Course Information Discoverer")]),n("div",{staticClass:"group"},[n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("University State")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState1,expression:"uniState1"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState1=e.target.multiple?n:n[0]}}},t._l(t.universityStates,(function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("University State")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState2,expression:"uniState2"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState2=e.target.multiple?n:n[0]}}},t._l(t.universityStates,(function(e){return n("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),n("div",{staticClass:"group"},[n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("University")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.university1,expression:"university1"}],staticClass:"uidropdownuni",staticStyle:{float:"left"},attrs:{id:"universities"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university1=e.target.multiple?n:n[0]}}},t._l(t.filteredUnis1,(function(e){return n("option",{key:e.id,domProps:{value:e.university}},[t._v(" "+t._s(e.university)+" ")])})),0)]),n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("University")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.university2,expression:"university2"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university2=e.target.multiple?n:n[0]}}},t._l(t.filteredUnis2,(function(e){return n("option",{key:e.id,domProps:{value:e.university}},[t._v(" "+t._s(e.university)+" ")])})),0)])]),n("div",{staticClass:"group"},[n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("Course")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.course1,expression:"course1"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course1=e.target.multiple?n:n[0]}}},t._l(t.filteredCourses1,(function(e){return n("option",{key:e.id,domProps:{value:e.title}},[t._v(" "+t._s(e.title)+" ")])})),0)]),n("div",{attrs:{id:"select"}},[n("div",{staticClass:"ui label"},[t._v("Course")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.course2,expression:"course2"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course2=e.target.multiple?n:n[0]}}},t._l(t.filteredCourses2,(function(e){return n("option",{key:e.id,domProps:{value:e.title}},[t._v(" "+t._s(e.title)+" ")])})),0)])]),n("div",{attrs:{id:"chart"}},[n("GChart",{attrs:{type:"LineChart",options:t.options,data:t.collectionData}})],1)])},o=[],u=n("2909"),l=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("cb43")),c=n("bc3a"),v=n.n(c),d=v.a.create({baseURL:"http://ec2-52-2-8-51.compute-1.amazonaws.com",timeout:1e3}),f={name:"App",components:{GChart:l["GChart"]},data:function(){return{collectionData:[["Day","Course1","Course2"],[1,7950,14500],[2,7950,14500],[3,7950,14500],[4,0,14500],[5,0,0]],APIData:[],uniState1:null,uniState2:null,university1:null,university2:null,course1:null,course2:null,options:{chart:{title:"Fees to be paid over years"},hAxis:{title:"Number of Years"},vAxis:{title:"Fees in $"},width:800,height:400}}},methods:{},computed:{universityStates:function(){return Object(u["a"])(new Set(this.APIData.map((function(t){var e=t.state;return e}))))},universities:function(){return Object(u["a"])(new Set(this.APIData.map((function(t){var e=t.university;return e}))))},filteredUnis1:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState1)}));return e},filteredUnis2:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState2)}));return e},filteredCourses1:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university1)}))},filteredCourses2:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university2)}))}},created:function(){var t=this;d.get("/api/courses/").then((function(e){console.log("Course API has received data"),t.APIData=e.data})).catch((function(t){console.log(t)}))}},p=f,m=(n("d235"),n("2877")),y=Object(m["a"])(p,s,o,!1,null,null,null),h=y.exports,_={name:"App",components:{GoogleChart:h}},b=_,g=(n("034f"),Object(m["a"])(b,i,a,!1,null,null,null)),C=g.exports;n("f9e3");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,n){},d235:function(t,e,n){"use strict";n("3b67")}});
//# sourceMappingURL=index.cce4bc50.js.map