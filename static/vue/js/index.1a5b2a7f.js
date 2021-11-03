(function(t){function e(e){for(var r,s,u=e[0],o=e[1],l=e[2],d=0,v=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);c&&c(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,u=1;u<i.length;u++){var o=i[u];0!==n[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},n={index:0},a=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"3b67":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-5 text-center"},[i("GoogleChart")],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",[i("h2",[t._v("Course Information Discoverer")]),i("div",{staticClass:"group"},[i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("University State")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState1,expression:"uniState1"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState1=e.target.multiple?i:i[0]}}},t._l(t.universityStates,(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("University State")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState2,expression:"uniState2"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState2=e.target.multiple?i:i[0]}}},t._l(t.universityStates,(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),i("div",{staticClass:"group"},[i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("University")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.university1,expression:"university1"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university1=e.target.multiple?i:i[0]}}},t._l(t.filteredUnis1,(function(e){return i("option",{key:e.id,domProps:{value:e.university}},[t._v(" "+t._s(e.university)+" ")])})),0)]),i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("University")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.university2,expression:"university2"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university2=e.target.multiple?i:i[0]}}},t._l(t.filteredUnis2,(function(e){return i("option",{key:e.id,domProps:{value:e.university}},[t._v(" "+t._s(e.university)+" ")])})),0)])]),i("div",{staticClass:"group"},[i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("Course")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.course1,expression:"course1"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course1=e.target.multiple?i:i[0]}}},t._l(t.filteredCourses1,(function(e){return i("option",{key:e.id,domProps:{value:e.title}},[t._v(" "+t._s(e.title)+" ")])})),0)]),i("div",{attrs:{id:"select"}},[i("div",{staticClass:"uiLabel"},[t._v("Course")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.course2,expression:"course2"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course2=e.target.multiple?i:i[0]}}},t._l(t.filteredCourses2,(function(e){return i("option",{key:e.id,domProps:{value:e.title}},[t._v(" "+t._s(e.title)+" ")])})),0)])]),i("div",{staticClass:"descriptionGroup"},[i("div",{attrs:{id:"description"}},[i("div",{staticClass:"uiLabel"},[t._v("Course 1 Description")]),t._l(t.filteredTitle1,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.description)+" ")])}))],2),i("div",{attrs:{id:"description"}},[i("div",{staticClass:"uiLabel"},[t._v("Course 2 Description:")]),t._l(t.filteredTitle2,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.description)+" ")])}))],2)]),i("div",{staticClass:"learningGroup"},[i("div",{attrs:{id:"learningOutcomes"}},[i("div",{staticClass:"uiLabel"},[t._v("Course 1 Learning Outcomes")]),t._l(t.filteredTitle1,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2),i("div",{attrs:{id:"learningOutcomes"}},[i("div",{staticClass:"uiLabel"},[t._v("Course 2 Learning Outcomes:")]),t._l(t.filteredTitle2,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2)]),i("div",{attrs:{id:"chart"}},[i("GChart",{attrs:{type:"LineChart",options:t.options,data:t.collectionData}})],1)])},u=[],o=i("2909"),l=(i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("d81d"),i("4de4"),i("cb43")),c=i("bc3a"),d=i.n(c),v=d.a.create({baseURL:"http://ec2-52-2-8-51.compute-1.amazonaws.com",timeout:5e3}),f={name:"App",components:{GChart:l["GChart"]},data:function(){return{collectionData:[["Day","Course1","Course2"],[1,7950,14500],[2,7950,14500],[3,7950,14500],[4,0,14500],[5,0,0]],APIData:[],uniState1:null,uniState2:null,university1:null,university2:null,course1:null,course2:null,options:{chart:{title:"Fees to be paid over years"},hAxis:{title:"Number of Years"},vAxis:{title:"Fees in $"},width:800,height:400}}},methods:{},computed:{universityStates:function(){return Object(o["a"])(new Set(this.APIData.map((function(t){var e=t.state;return e}))))},universities:function(){return Object(o["a"])(new Set(this.APIData.map((function(t){var e=t.university;return e}))))},filteredUnis1:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState1)}));return e},filteredUnis2:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState2)}));return e},filteredCourses1:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university1)}))},filteredCourses2:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university2)}))},filteredTitle1:function(){var t=this;return this.APIData.filter((function(e){return!e.title.indexOf(t.course1)}))},filteredTitle2:function(){var t=this;return this.APIData.filter((function(e){return!e.title.indexOf(t.course2)}))}},created:function(){var t=this;v.get("/api/courses/").then((function(e){console.log("Successfully retrieved data from API"),t.APIData=e.data})).catch((function(t){console.log(t)}))}},p=f,m=(i("d235"),i("2877")),y=Object(m["a"])(p,s,u,!1,null,null,null),_=y.exports,h={name:"App",components:{GoogleChart:_}},g=h,b=(i("034f"),Object(m["a"])(g,n,a,!1,null,null,null)),C=b.exports;i("f9e3");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,i){},d235:function(t,e,i){"use strict";i("3b67")}});
//# sourceMappingURL=index.1a5b2a7f.js.map