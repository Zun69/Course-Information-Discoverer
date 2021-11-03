(function(t){function e(e){for(var i,a,o=e[0],u=e[1],l=e[2],v=0,d=[];v<o.length;v++)a=o[v],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},n={index:0},s=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static/vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"3b67":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5 text-center"},[r("GoogleChart")],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",[r("h2",{staticClass:"title"},[t._v("Course Information Discoverer")]),r("div",{staticClass:"group"},[r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("University State")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState1,expression:"uniState1"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState1=e.target.multiple?r:r[0]}}},t._l(t.universityStates,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("University State")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState2,expression:"uniState2"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState2=e.target.multiple?r:r[0]}}},t._l(t.universityStates,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),r("div",{staticClass:"group"},[r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("University 1")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.university1,expression:"university1"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university1=e.target.multiple?r:r[0]}}},t._l(t.filteredUnis1,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("University 2")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.university2,expression:"university2"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university2=e.target.multiple?r:r[0]}}},t._l(t.filteredUnis2,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),r("div",{staticClass:"group"},[r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("Course")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.course1,expression:"course1"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course1=e.target.multiple?r:r[0]},function(e){return t.onCourseChange1()}]}},t._l(t.filteredCourses1,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e.title)+" ")])})),0)]),r("div",{attrs:{id:"select"}},[r("div",{staticClass:"uiLabel"},[t._v("Course")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.course2,expression:"course2"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course2=e.target.multiple?r:r[0]},function(e){return t.onCourseChange2()}]}},t._l(t.filteredCourses2,(function(e){return r("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e.title)+" ")])})),0)])]),r("div",{staticClass:"charts"},[r("h2",[t._v("Yearly Fees Comparison")]),r("GChart",{attrs:{type:"LineChart",options:t.options,data:t.collectionData}}),r("p",[t._v("arr[1][1]: "+t._s(t.collectionData[1][1]))])],1),r("div",{staticClass:"descriptionGroup"},[r("div",{attrs:{id:"description"}},[t._l(t.filteredCourseUrl1,(function(e){return r("div",{key:e.url,staticClass:"uiLabel"},[r("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.university)+" "),r("br"),t._v(" "+t._s(e.title))]),t._v(" "),r("br"),t._v(" Description:")])})),t._l(t.filteredCourseUrl1,(function(e){return r("p",{key:e.id},[t._v(" "+t._s(e.description))])}))],2),r("div",{attrs:{id:"description"}},[t._l(t.filteredCourseUrl2,(function(e){return r("div",{key:e.url,staticClass:"uiLabel"},[r("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.university)+" "),r("br"),t._v(" "+t._s(e.title))]),t._v(" "),r("br"),t._v(" Description:")])})),t._l(t.filteredCourseUrl2,(function(e){return r("p",{key:e.id},[t._v(" "+t._s(e.description))])}))],2)]),r("div",{staticClass:"learningGroup"},[r("div",{attrs:{id:"learningOutcomes"}},[t._l(t.filteredCourseUrl1,(function(e){return r("div",{key:e.url,staticClass:"uiLabel"},[r("a",{attrs:{href:e.url}},[t._v(t._s(e.university)+" "),r("br"),t._v(" "+t._s(e.title))]),t._v(" "),r("br"),t._v(" Learning Outcomes:")])})),t._l(t.filteredCourseUrl1,(function(e){return r("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2),r("div",{attrs:{id:"learningOutcomes"}},[t._l(t.filteredCourseUrl2,(function(e){return r("div",{key:e.url,staticClass:"uiLabel"},[r("a",{attrs:{href:e.url}},[t._v(t._s(e.university)+" "),r("br"),t._v(" "+t._s(e.title))]),t._v(" "),r("br"),t._v(" Learning Outcomes:")])})),t._l(t.filteredCourseUrl2,(function(e){return r("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2)])])},o=[],u=r("2909"),l=(r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("d81d"),r("4de4"),r("cb43")),c=r("bc3a"),v=r.n(c),d=v.a.create({baseURL:"http://ec2-52-2-8-51.compute-1.amazonaws.com",timeout:5e3}),f={title:"Course Information Discoverer",name:"App",components:{GChart:l["GChart"]},data:function(){return{collectionData:[["Day","Course1","Course2"],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0]],APIData:[],course1:[""],course2:[""],uniState1:null,uniState2:null,university1:null,university2:null,options:{chart:{title:"Fees to be paid over years"},hAxis:{title:"Number of Years"},vAxis:{title:"Yearly Fees in $"},width:800,height:400}}},methods:{onCourseChange1:function(){this.$set(this.collectionData[0],1,"Course 1: "+this.course1.title);for(var t=1;t<this.course1.duration;t++)this.$set(this.collectionData[t],1,parseInt(this.course1.yearlyFees))},onCourseChange2:function(){this.$set(this.collectionData[0],2,"Course 2: "+this.course2.title);for(var t=1;t<this.course2.duration;t++)this.$set(this.collectionData[t],2,parseInt(this.course2.yearlyFees))}},computed:{universityStates:function(){return Object(u["a"])(new Set(this.APIData.map((function(t){var e=t.state;return e}))))},filteredUnis1:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState1)}));return Object(u["a"])(new Set(e.map((function(t){var e=t.university;return e}))))},filteredUnis2:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState2)}));return Object(u["a"])(new Set(e.map((function(t){var e=t.university;return e}))))},filteredCourses1:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university1)}))},filteredCourses2:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university2)}))},filteredCourseUrl1:function(){var t=this;return this.APIData.filter((function(e){return!e.url.indexOf(t.course1.url)}))},filteredCourseUrl2:function(){var t=this;return this.APIData.filter((function(e){return!e.url.indexOf(t.course2.url)}))}},created:function(){var t=this;d.get("/api/courses/").then((function(e){console.log("Successfully retrieved data from API"),t.APIData=e.data})).catch((function(t){console.log(t)}))}},p=f,_=(r("d235"),r("2877")),y=Object(_["a"])(p,a,o,!1,null,null,null),h=y.exports,m={name:"App",components:{GoogleChart:h}},C=m,b=(r("034f"),Object(_["a"])(C,n,s,!1,null,null,null)),g=b.exports;function w(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var O={created:function(){var t=w(this);t&&(document.title=t)}};r("f9e3");i["a"].config.productionTip=!1,i["a"].mixin(O),new i["a"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,r){},d235:function(t,e,r){"use strict";r("3b67")}});
//# sourceMappingURL=index.09160652.js.map