(function(t){function e(e){for(var r,n,u=e[0],o=e[1],l=e[2],v=0,d=[];v<u.length;v++)n=u[v],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,u=1;u<i.length;u++){var o=i[u];0!==s[o]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},s={index:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static/vue/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"42fe":function(t,e,i){"use strict";i("a61c")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-5 text-center"},[i("GoogleChart")],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",[t._m(0),i("div",{staticClass:"stateGroup"},[i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("University State")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState1,expression:"uniState1"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState1=e.target.multiple?i:i[0]}}},t._l(t.orderBy(t.universityStates,"state"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("University State")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.uniState2,expression:"uniState2"}],staticClass:"uidropdownstate",attrs:{id:"university-states"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.uniState2=e.target.multiple?i:i[0]}}},t._l(t.orderBy(t.universityStates,"state"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),i("div",{staticClass:"uniGroup"},[i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("University 1")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.university1,expression:"university1"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university1=e.target.multiple?i:i[0]}}},t._l(t.orderBy(t.filteredUnis1,"university"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("University 2")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.university2,expression:"university2"}],staticClass:"uidropdownuni",attrs:{id:"universities"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.university2=e.target.multiple?i:i[0]}}},t._l(t.orderBy(t.filteredUnis2,"university"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),i("div",{staticClass:"courseGroup"},[i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("Course 1")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.course1,expression:"course1"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course1=e.target.multiple?i:i[0]},function(e){return t.onCourseChange1()}]}},t._l(t.orderBy(t.filteredCourses1,"title"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e.title)+" ")])})),0),i("p",[t._v("Available at "+t._s(t.course1.campus)+" campus. ")])]),i("div",{staticClass:"select"},[i("div",{staticClass:"uiLabel"},[t._v("Course 2")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.course2,expression:"course2"}],staticClass:"uidropdowncourse",attrs:{id:"courses"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course2=e.target.multiple?i:i[0]},function(e){return t.onCourseChange2()}]}},t._l(t.orderBy(t.filteredCourses2,"title"),(function(e){return i("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e.title)+" ")])})),0),i("p",[t._v("Available at "+t._s(t.course2.campus)+" campus. ")])])]),i("div",{staticClass:"lineChart"},[i("h2",[t._v("Yearly Fees Comparison")]),i("GChart",{attrs:{type:"LineChart",options:t.yearlyFeesOptions,data:t.yearlyFeesData}})],1),i("div",{staticClass:"feeChart"},[i("h2",[t._v("Total Fees Comparison")]),i("GChart",{attrs:{type:"ColumnChart",options:t.totalFeesOptions,data:t.totalFeesData}})],1),i("div",{staticClass:"uniRankingChart"},[i("h2",[t._v("QS World University Ranking Comparison")]),i("GChart",{attrs:{type:"BarChart",options:t.uniRankingOptions,data:t.uniRankingData}})],1),i("div",{staticClass:"atarChart"},[i("h2",[t._v("Guaranteed Entry ATAR Comparison")]),i("GChart",{attrs:{type:"ColumnChart",options:t.atarOptions,data:t.guaranteedAtarData}})],1),i("div",{staticClass:"unitChart"},[i("h2",[t._v("Course Unit Count Comparison")]),i("GChart",{attrs:{type:"ColumnChart",options:t.options,data:t.unitsData}})],1),i("div",{staticClass:"descriptionGroup"},[i("div",{attrs:{id:"description"}},[t._l(t.filteredCourseUrl1,(function(e){return i("div",{key:e.url,staticClass:"uiLabel"},[i("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.university)+" "),i("br"),t._v(" "+t._s(e.title))]),t._v(" "),i("br"),t._v(" Description:")])})),t._l(t.filteredCourseUrl1,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.description))])}))],2),i("div",{attrs:{id:"description"}},[t._l(t.filteredCourseUrl2,(function(e){return i("div",{key:e.url,staticClass:"uiLabel"},[i("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.university)+" "),i("br"),t._v(" "+t._s(e.title))]),t._v(" "),i("br"),t._v(" Description:")])})),t._l(t.filteredCourseUrl2,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.description))])}))],2)]),i("div",{staticClass:"learningGroup"},[i("div",{attrs:{id:"learningOutcomes"}},[t._l(t.filteredCourseUrl1,(function(e){return i("div",{key:e.url,staticClass:"uiLabel"},[i("a",{attrs:{href:e.url}},[t._v(t._s(e.university)+" "),i("br"),t._v(" "+t._s(e.title))]),t._v(" "),i("br"),t._v(" Learning Outcomes:")])})),t._l(t.filteredCourseUrl1,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2),i("div",{attrs:{id:"learningOutcomes"}},[t._l(t.filteredCourseUrl2,(function(e){return i("div",{key:e.url,staticClass:"uiLabel"},[i("a",{attrs:{href:e.url}},[t._v(t._s(e.university)+" "),i("br"),t._v(" "+t._s(e.title))]),t._v(" "),i("br"),t._v(" Learning Outcomes:")])})),t._l(t.filteredCourseUrl2,(function(e){return i("p",{key:e.id},[t._v(" "+t._s(e.learningOutcomes)+" ")])}))],2)])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("h1",{staticClass:"title"},[t._v("Course Information Discoverer")])])}],o=i("2909"),l=(i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("d81d"),i("4de4"),i("cb43")),c=i("bc3a"),v=i.n(c),d=v.a.create({baseURL:"http://ec2-52-2-8-51.compute-1.amazonaws.com",timeout:5e3}),h=i("a7c6"),p=i.n(h),f={title:"Course Information Discoverer",name:"App",mixins:[p.a.mixin],components:{GChart:l["GChart"]},data:function(){return{yearlyFeesData:[["Day","Course1","Course2"],[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0]],totalFeesData:[["Course","Total Fees",{role:"style"}],["Course 1",0,"#5a83d6"],["Course 2",0,"#de421c"]],guaranteedAtarData:[["Course","ATAR",{role:"style"}],["Course 1",0,"#5a83d6"],["Course 2",0,"#de421c"]],unitsData:[["Course","Units",{role:"style"}],["Course 1",0,"#5a83d6"],["Course 2",0,"#de421c"]],uniRankingData:[["Course","Ranking",{role:"style"}],["Course 1",0,"color: #5a83d6"],["Course 2",0,"color: #de421c"]],APIData:[],course1:[""],course2:[""],uniState1:null,uniState2:null,university1:null,university2:null,yearlyFeesOptions:{chart:{title:"Fees to be paid over years"},hAxis:{title:"Number of Years"},vAxis:{title:"Yearly Fees in $"},width:800,height:400},options:{hAxis:{title:"Amount Of Units Required To Graduate"},width:800,height:400},totalFeesOptions:{vAxis:{title:"Total Fees in $"},width:800,height:400},uniRankingOptions:{hAxis:{title:"2022 QS Rankings (Lower is better)"},width:800,height:400},atarOptions:{hAxis:{title:"ATAR is the adjusted rank (ATAR plus adjustment factors)"},width:800,height:400}}},methods:{onCourseChange1:function(){for(var t=1;t<6;t++)this.$set(this.yearlyFeesData[t],1,0);for(this.$set(this.yearlyFeesData[0],1,this.course1.university+" - "+this.course1.title),t=1;t<this.course1.duration+1;t++)this.$set(this.yearlyFeesData[t],1,parseFloat(this.course1.yearlyFees));this.$set(this.totalFeesData[1],0,this.course1.university+" - "+this.course1.title),this.$set(this.totalFeesData[1],1,parseFloat(this.course1.fees)),this.$set(this.guaranteedAtarData[1],0,this.course1.university+" - "+this.course1.title),this.$set(this.guaranteedAtarData[1],1,parseFloat(this.course1.guaranteedAtar)),this.$set(this.unitsData[1],0,this.course1.university+" - "+this.course1.title),this.$set(this.unitsData[1],1,parseInt(this.course1.units)),this.$set(this.uniRankingData[1],0,this.course1.university),this.$set(this.uniRankingData[1],1,parseInt(this.course1.uniRanking))},onCourseChange2:function(){for(var t=1;t<6;t++)this.$set(this.yearlyFeesData[t],2,0);for(this.$set(this.yearlyFeesData[0],2,this.course2.university+" - "+this.course2.title),t=1;t<this.course2.duration+1;t++)this.$set(this.yearlyFeesData[t],2,parseFloat(this.course2.yearlyFees));this.$set(this.totalFeesData[2],0,this.course2.university+" - "+this.course2.title),this.$set(this.totalFeesData[2],1,parseFloat(this.course2.fees)),this.$set(this.guaranteedAtarData[2],0,this.course2.university+" - "+this.course2.title),this.$set(this.guaranteedAtarData[2],1,parseFloat(this.course2.guaranteedAtar)),this.$set(this.unitsData[2],0,this.course2.university+" - "+this.course2.title),this.$set(this.unitsData[2],1,parseInt(this.course2.units)),this.$set(this.uniRankingData[2],0,this.course2.university),this.$set(this.uniRankingData[2],1,parseInt(this.course2.uniRanking))}},computed:{universityStates:function(){return Object(o["a"])(new Set(this.APIData.map((function(t){var e=t.state;return e}))))},filteredUnis1:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState1)}));return Object(o["a"])(new Set(e.map((function(t){var e=t.university;return e}))))},filteredUnis2:function(){var t=this,e=this.APIData.filter((function(e){return!e.state.indexOf(t.uniState2)}));return Object(o["a"])(new Set(e.map((function(t){var e=t.university;return e}))))},filteredCourses1:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university1)}))},filteredCourses2:function(){var t=this;return this.APIData.filter((function(e){return!e.university.indexOf(t.university2)}))},filteredCourseUrl1:function(){var t=this;return this.APIData.filter((function(e){return!e.url.indexOf(t.course1.url)}))},filteredCourseUrl2:function(){var t=this;return this.APIData.filter((function(e){return!e.url.indexOf(t.course2.url)}))}},created:function(){var t=this;d.get("/api/courses/").then((function(e){console.log("Successfully retrieved data from API"),t.APIData=e.data})).catch((function(t){console.log(t)}))}},y=f,C=(i("42fe"),i("2877")),_=Object(C["a"])(y,n,u,!1,null,null,null),m=_.exports,g={name:"App",components:{GoogleChart:m}},b=g,D=(i("034f"),Object(C["a"])(b,s,a,!1,null,null,null)),A=D.exports;function O(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var w={created:function(){var t=O(this);t&&(document.title=t)}};i("f9e3");r["a"].config.productionTip=!1,r["a"].mixin(w),r["a"].use(p.a),new r["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,e,i){},a61c:function(t,e,i){}});
//# sourceMappingURL=index.832fbbde.js.map