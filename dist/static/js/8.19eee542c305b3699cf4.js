webpackJsonp([8],{263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(276),o=n(305),r=n(8),i=r(a.a,o.a,null,null,null);t.default=i.exports},272:function(e,t,n){"use strict";function a(e){return n.i(T.a)({url:"/bugLevel/bugLevelPageInfo",method:"get",params:e})}function o(e){return n.i(T.a)({url:"/bugLevel/insert",method:"post",params:e})}function r(e){return n.i(T.a)({url:"/bugLevel/update",method:"post",params:e})}function i(e){return n.i(T.a)({url:"/bugLevel/delete",method:"post",params:e})}function l(e){return n.i(T.a)({url:"/functionType/pageInfo",method:"get",params:e})}function u(e){return n.i(T.a)({url:"/functionType/getInfo",method:"get",params:e})}function s(e){return n.i(T.a)({url:"/functionType/insert",method:"post",params:e})}function m(e){return n.i(T.a)({url:"/functionType/update",method:"post",params:e})}function c(e){return n.i(T.a)({url:"/functionType/delete",method:"post",params:e})}function f(e){return n.i(T.a)({url:"/difficultLevel/pageInfo",method:"get",params:e})}function p(e){return n.i(T.a)({url:"/difficultLevel/getInfo",method:"get",params:e})}function d(e){return n.i(T.a)({url:"/difficultLevel/insert",method:"post",params:e})}function h(e){return n.i(T.a)({url:"/difficultLevel/update",method:"post",params:e})}function g(e){return n.i(T.a)({url:"/difficultLevel/delete",method:"post",params:e})}function v(e){return n.i(T.a)({url:"/employee/pageInfo",method:"get",params:e})}function b(e){return n.i(T.a)({url:"/employee/getInfo",method:"get",params:e})}function y(e){return n.i(T.a)({url:"/employee/insert",method:"post",params:e})}function _(e){return n.i(T.a)({url:"/employee/update",method:"post",params:e})}function w(e){return n.i(T.a)({url:"/employee/delete",method:"post",params:e})}function k(e){return n.i(T.a)({url:"/module/modulePageInfo",method:"get",params:e})}function L(e){return n.i(T.a)({url:"/module/insert",method:"post",params:e})}function I(e){return n.i(T.a)({url:"/module/update",method:"post",params:e})}function S(e){return n.i(T.a)({url:"/module/delete",method:"post",params:e})}function x(e){return n.i(T.a)({url:"/page/pagePageInfo",method:"get",params:e})}function z(e){return n.i(T.a)({url:"/page/insert",method:"post",params:e})}function C(e){return n.i(T.a)({url:"/page/update",method:"post",params:e})}function F(e){return n.i(T.a)({url:"/page/delete",method:"post",params:e})}function N(e){return n.i(T.a)({url:"/project/projectPageInfo",method:"get",params:e})}function D(e){return n.i(T.a)({url:"/project/insert",method:"post",params:e})}function V(e){return n.i(T.a)({url:"/project/update",method:"post",params:e})}function j(e){return n.i(T.a)({url:"/project/delete",method:"post",params:e})}t.B=a,t.C=o,t.D=r,t.E=i,t.m=l,t.q=u,t.n=s,t.o=m,t.p=c,t.w=f,t.A=p,t.x=d,t.y=h,t.z=g,t.r=v,t.v=b,t.s=y,t.t=_,t.u=w,t.i=k,t.j=L,t.k=I,t.l=S,t.e=x,t.f=z,t.g=C,t.h=F,t.a=N,t.b=D,t.c=V,t.d=j;var T=n(90)},276:function(e,t,n){"use strict";var a=n(28),o=n.n(a),r=n(272);t.a={data:function(){return{list:null,listLoading:!0,state:"insert",form:{employeeName:""},params:{employeeId:""},pages:{total:"",pageNum:1,pageSize:10},dialogFormVisible:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,n.i(r.r)(this.pages).then(function(t){console.log(t),e.pages.total=t.data.totalPage,e.list=t.data.result,e.listLoading=!1})},insertEmployee:function(){var e=this;return new o.a(function(t,a){n.i(r.s)(e.form).then(function(n){e.dialogFormVisible=!1,t()}).catch(function(e){a(e)})})},updateEmployee:function(){var e=this;return new o.a(function(t,a){n.i(r.t)(e.form).then(function(n){e.dialogFormVisible=!1,t()}).catch(function(e){a(e.msg)})})},deleteEmployee:function(){var e=this;return new o.a(function(t,a){n.i(r.u)(e.params).then(function(n){e.dialogFormVisible=!1,t()}).catch(function(e){a(e.msg)})})},getEmployeeInfo:function(){var e=this;return new o.a(function(t,a){n.i(r.v)(e.params).then(function(n){e.dialogFormVisible=!1,t()}).catch(function(e){a(e.msg)})})},handleShow:function(e,t,n){this.dialogFormVisible=!0,"insert"==n?this.state="insert":"update"==n?(this.form.employeeId=t.employeeId,this.form.employeeName=t.employeeName,this.state="update"):"show"==n&&(this.form=t,this.state="show")},handleSure:function(){"insert"==this.state?n.i(r.s)(this.form):"update"==this.state?n.i(r.t)(this.form):"show"==this.state&&n.i(r.v)(this.form)},handleDelete:function(e,t){var a=this;this.$confirm("确认删除？").then(function(e){a.params.employeeId=t.employeeId,n.i(r.u)(a.params),done()}).catch(function(e){})},handleSizeChange:function(e){this.pages.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.pages.pageNum=e,this.fetchData()}}}},305:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{on:{click:function(t){e.handleShow("","","insert")}}},[e._v("新增员工信息")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"员工ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.employeeId)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"员工姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.employeeName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.gender))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"工龄(年)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.workingYears))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"职位",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.duty))])]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleShow(t.$index,t.row,"show")}}},[e._v("查看")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){e.handleShow(t.$index,t.row,"update")}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage6,"page-size":e.pages.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:e.pages.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),n("el-dialog",{attrs:{title:"新增员工信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"员工姓名","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.employeeName,callback:function(t){e.form.employeeName=t},expression:"form.employeeName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.gender,callback:function(t){e.form.gender=t},expression:"form.gender"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"工龄(年)","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.workingYears,callback:function(t){e.form.workingYears=t},expression:"form.workingYears"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"职位","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.duty,callback:function(t){e.form.duty=t},expression:"form.duty"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"入职时间","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.hireTime,callback:function(t){e.form.hireTime=t},expression:"form.hireTime"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSure()}}},[e._v("确 定")])],1)],1)],1)},o=[],r={render:a,staticRenderFns:o};t.a=r}});
//# sourceMappingURL=8.19eee542c305b3699cf4.js.map