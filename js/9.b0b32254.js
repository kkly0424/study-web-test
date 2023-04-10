"use strict";(self["webpackChunkstudy_web"]=self["webpackChunkstudy_web"]||[]).push([[9],{6009:function(e,t,s){s.r(t),s.d(t,{default:function(){return F}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user"},[t("div",{staticClass:"user-main"},[t("div",{staticClass:"header"},[t("el-link",{attrs:{underline:!1}},[t("el-avatar",{attrs:{size:75,src:e.circleUrl}})],1),e._m(0)],1),t("div",{staticClass:"center"},[t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"userinfor",name:"first"}},[this.$store.state.home.userPage?t("user-info"):t("modify-user")],1),t("el-tab-pane",{attrs:{label:"classify",name:"second"}},[e._v("classify")]),t("el-tab-pane",{attrs:{label:"collect",name:"third"}},[e._v("collect")]),t("el-tab-pane",{attrs:{label:"tags",name:"fourth"}},[e._v("tags")])],1)],1)])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail"},[t("h4",{staticClass:"username"},[e._v("KKLY")]),t("p",{staticClass:"userdata"},[e._v(" visit："),t("span",[e._v("100")]),e._v("  works："),t("span",[e._v("2")]),e._v("  follows:"),t("span",[e._v("25")])])])}],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"modifyUser"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",rules:e.rules}},[t("el-form-item",{attrs:{label:"username",prop:"username"}},[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-input",{model:{value:e.Form.username,callback:function(t){e.$set(e.Form,"username",t)},expression:"Form.username"}})],1)],1),t("el-form-item",{attrs:{label:"gender",prop:"gender"}},[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-radio",{attrs:{label:"1"},model:{value:e.Form.gender,callback:function(t){e.$set(e.Form,"gender",t)},expression:"Form.gender"}},[e._v("male")]),t("el-radio",{attrs:{label:"0"},model:{value:e.Form.gender,callback:function(t){e.$set(e.Form,"gender",t)},expression:"Form.gender"}},[e._v("female")])],1)],1),t("el-form-item",{attrs:{label:"birthday",prop:"birthday"}},[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"choose date",format:"yyyy - MM - dd","value-format":"yyyy-MM-dd"},model:{value:e.Form.birthday,callback:function(t){e.$set(e.Form,"birthday",t)},expression:"Form.birthday"}})],1)],1),t("el-form-item",{attrs:{label:"favorite",prop:"favorite"}},[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-checkbox-group",{model:{value:e.Form.favorite,callback:function(t){e.$set(e.Form,"favorite",t)},expression:"Form.favorite"}},[e._l(e.Form.favorite,(function(e){return t("el-checkbox",{attrs:{label:e,name:"type"}})})),t("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-input",{attrs:{type:"text",placeholder:"input your favorite"},model:{value:e.newFavor,callback:function(t){e.newFavor=t},expression:"newFavor"}}),t("div",{staticStyle:{"text-align":"right",margin:"0"}},[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.visible=!1}}},[e._v("cancle")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addNewFavor}},[e._v("confirm")])],1),t("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v("ADD")])],1)],2)],1)],1),t("el-form-item",{attrs:{label:"quote",prop:"quote"}},[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-input",{attrs:{type:"textarea",resize:""},model:{value:e.Form.quote,callback:function(t){e.$set(e.Form,"quote",t)},expression:"Form.quote"}})],1)],1),t("el-form-item",[t("el-col",{attrs:{span:24,xs:24,sm:11}},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("modify")]),t("el-button",{on:{click:e.onReset}},[e._v("cancel")])],1)],1)],1)],1)},l=[],o=(s(7658),{data(){return{Form:{},rules:{username:[{required:!0,message:"invalid username",trigger:"blur"},{min:3,message:"between 3-5",trigger:"blur"}],gender:[{required:!0,message:"select your gender",trigger:"change"}],birthday:[{type:"date",required:!0,message:"invalid date",trigger:"blur"}],favorite:[{type:"array",required:!0,message:"input your favorite ",trigger:"change"}],quote:[{required:!0,message:"input your quote",trigger:"blur"}]},newFavor:"",visible:!1}},mounted(){this.getUser()},methods:{onSubmit(){this.$store.commit("modifyUserInfo",this.Form),this.$store.commit("toModifyPage"),this.$message({message:"modify successful!",type:"success"})},onReset(){this.$store.commit("toModifyPage")},addNewFavor(){""!==this.newFavor?(this.Form.favorite.push(this.newFavor),this.newFavor="",this.onSubmit(),this.visible=!this.visible):this.$message.error("invalid input")},getUser(){this.Form=JSON.parse(JSON.stringify(this.form))}},computed:{form(){return this.$store.getters.getUserInfo}}}),n=o,m=s(1001),c=(0,m.Z)(n,i,l,!1,null,null,null),u=c.exports,d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userInfo"},[t("el-descriptions",{staticClass:"margin-top",attrs:{column:1,size:e.size,border:""}},[t("template",{slot:"extra"},[t("el-link",{attrs:{type:"primary"},on:{click:e.handletoModify}},[e._v(" modify "),t("i",{staticClass:"el-icon-edit"})])],1),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-bank-card"}),e._v(" username ")]),e._v(" "+e._s(e.form.username)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-user"}),e._v(" gender ")]),e._v(" "+e._s(1==e.form.gender?"male":"female")+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-date"}),e._v(" birthday ")]),e._v(" "+e._s(e.form.birthday)+" ")],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-football"}),e._v(" favorite ")]),e._l(e.form.favorite,(function(s){return t("el-tag",[e._v(e._s(s))])}))],2),t("el-descriptions-item",[t("template",{slot:"label"},[t("i",{staticClass:"el-icon-data-line"}),e._v(" quote ")]),e._v(" "+e._s(e.form.quote)+" ")],2)],2)],1)},f=[],p={data(){return{size:"middle"}},methods:{handletoModify(){this.$store.commit("toModifyPage")}},computed:{form(){return this.$store.getters.getUserInfo}}},v=p,b=(0,m.Z)(v,d,f,!1,null,null,null),h=b.exports,g={data(){return{circleUrl:s(1131),activeName:"first"}},methods:{handleClick(e,t){console.log(e,t)}},computed:{},components:{ModifyUser:u,UserInfo:h}},y=g,_=(0,m.Z)(y,r,a,!1,null,"5c7ea8fb",null),F=_.exports}}]);
//# sourceMappingURL=9.b0b32254.js.map