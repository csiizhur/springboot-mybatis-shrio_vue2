webpackJsonp([6],{265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(278),o=n(303),i=n(8),r=i(a.a,o.a,null,null,null);t.default=r.exports},272:function(e,t,n){"use strict";function a(e){return n.i(V.a)({url:"/bugLevel/bugLevelPageInfo",method:"get",params:e})}function o(e){return n.i(V.a)({url:"/bugLevel/insert",method:"post",params:e})}function i(e){return n.i(V.a)({url:"/bugLevel/update",method:"post",params:e})}function r(e){return n.i(V.a)({url:"/bugLevel/delete",method:"post",params:e})}function l(e){return n.i(V.a)({url:"/functionType/pageInfo",method:"get",params:e})}function u(e){return n.i(V.a)({url:"/functionType/getInfo",method:"get",params:e})}function s(e){return n.i(V.a)({url:"/functionType/insert",method:"post",params:e})}function c(e){return n.i(V.a)({url:"/functionType/update",method:"post",params:e})}function d(e){return n.i(V.a)({url:"/functionType/delete",method:"post",params:e})}function m(e){return n.i(V.a)({url:"/difficultLevel/pageInfo",method:"get",params:e})}function f(e){return n.i(V.a)({url:"/difficultLevel/getInfo",method:"get",params:e})}function p(e){return n.i(V.a)({url:"/difficultLevel/insert",method:"post",params:e})}function h(e){return n.i(V.a)({url:"/difficultLevel/update",method:"post",params:e})}function g(e){return n.i(V.a)({url:"/difficultLevel/delete",method:"post",params:e})}function v(e){return n.i(V.a)({url:"/employee/pageInfo",method:"get",params:e})}function b(e){return n.i(V.a)({url:"/employee/getInfo",method:"get",params:e})}function _(e){return n.i(V.a)({url:"/employee/insert",method:"post",params:e})}function y(e){return n.i(V.a)({url:"/employee/update",method:"post",params:e})}function w(e){return n.i(V.a)({url:"/employee/delete",method:"post",params:e})}function k(e){return n.i(V.a)({url:"/module/modulePageInfo",method:"get",params:e})}function I(e){return n.i(V.a)({url:"/module/insert",method:"post",params:e})}function S(e){return n.i(V.a)({url:"/module/update",method:"post",params:e})}function L(e){return n.i(V.a)({url:"/module/delete",method:"post",params:e})}function z(e){return n.i(V.a)({url:"/page/pagePageInfo",method:"get",params:e})}function C(e){return n.i(V.a)({url:"/page/insert",method:"post",params:e})}function D(e){return n.i(V.a)({url:"/page/update",method:"post",params:e})}function x(e){return n.i(V.a)({url:"/page/delete",method:"post",params:e})}function N(e){return n.i(V.a)({url:"/project/projectPageInfo",method:"get",params:e})}function j(e){return n.i(V.a)({url:"/project/insert",method:"post",params:e})}function E(e){return n.i(V.a)({url:"/project/update",method:"post",params:e})}function F(e){return n.i(V.a)({url:"/project/delete",method:"post",params:e})}t.B=a,t.C=o,t.D=i,t.E=r,t.m=l,t.q=u,t.n=s,t.o=c,t.p=d,t.w=m,t.A=f,t.x=p,t.y=h,t.z=g,t.r=v,t.v=b,t.s=_,t.t=y,t.u=w,t.i=k,t.j=I,t.k=S,t.l=L,t.e=z,t.f=C,t.g=D,t.h=x,t.a=N,t.b=j,t.c=E,t.d=F;var V=n(90)},278:function(e,t,n){"use strict";var a=n(28),o=n.n(a),i=n(272);t.a={data:function(){return{list:null,listLoading:!0,isEdit:0,form:{moduleName:""},params:{moduleId:""},pages:{total:"",pageNum:1,pageSize:10},dialogFormVisible:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,n.i(i.i)(this.pages).then(function(t){console.log(t),e.pages.total=t.data.totalPage,e.list=t.data.result,e.listLoading=!1})},insertModule:function(){var e=this;return new o.a(function(t,a){n.i(i.j)(e.form).then(function(n){console.log(12),e.dialogFormVisible=!1,t(),e.fetchData()}).catch(function(e){a(e)})})},updateModule:function(){var e=this;return new o.a(function(t,a){n.i(i.k)(e.form).then(function(n){e.dialogFormVisible=!1,t(),e.fetchData()}).catch(function(e){a(e.msg)})})},deleteModule:function(){var e=this;return new o.a(function(t,a){n.i(i.l)(e.params).then(function(n){e.dialogFormVisible=!1,t(),e.fetchData()}).catch(function(e){a(e.msg)})})},handleShow:function(e,t,n){this.dialogFormVisible=!0,0==n?(this.isEdit=0,this.form.moduleName=t.moduleName):1==n?(this.form=t,this.isEdit=1):(this.form=t,this.isEdit=2)},handleSure:function(){console.log(this.isEdit+"===="),0==this.isEdit?this.insertModule():1==this.isEdit&&this.updateModule()},handleDelete:function(e,t){var n=this;this.$confirm("确认删除？").then(function(e){console.log(t.moduleId+"======"),n.params.moduleId=t.moduleId,n.deleteModule(),done()}).catch(function(e){})},handleSizeChange:function(e){this.pages.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.pages.pageNum=e,this.fetchData()}}}},303:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{on:{click:function(t){e.handleShow("","",0)}}},[e._v("新增模块信息")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"moduleId"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.moduleId)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"模块名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.moduleName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(t.row.updateTime))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleShow(t.$index,t.row,2)}}},[e._v("查看")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){e.handleShow(t.$index,t.row,1)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"current-page":e.currentPage6,"page-size":e.pages.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper",total:e.pages.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),n("el-dialog",{attrs:{title:"新增模块",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"模块名称","label-width":e.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.moduleName,callback:function(t){e.form.moduleName=t},expression:"form.moduleName"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSure()}}},[e._v("确 定")])],1)],1)],1)},o=[],i={render:a,staticRenderFns:o};t.a=i}});
//# sourceMappingURL=6.296e74ba0405a4fd4993.js.map