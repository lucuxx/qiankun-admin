(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-371e9a4b"],{"66db":function(e,t,r){},"98f2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"register"},[r("canvas",{attrs:{id:"register",height:"943",width:"1920"}}),r("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("欢迎注册")])]),r("div",{staticStyle:{"margin-top":"20px"}},[r("el-form",{ref:"ruleForm",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"email",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入用户名",autocomplete:"new-password"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"new-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.goRegister}},[e._v("注册")])],1)],1)],1)])],1)},i=[],o=(r("28a5"),r("73bc")),n=r("9ab4"),s=r("60a3"),l=function(e){function t(){var t;return t=e.apply(this,arguments)||this,t.form={email:"",name:"",password:""},t.validatePass=function(e,t,r){""===t?r(new Error("请输入密码")):r()},t.rules={name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{validator:t.validatePass,trigger:"blur"}]},t}Object(o["a"])(t,e);var r=t.prototype;return r.goRegister=function(){var e=this,t=this.$refs.ruleForm;t.validate(function(t){if(!t)return!1;e.$api.register(e.form).then(function(t){var r=t.code,a=t.data;0===r?e.$router.push({path:"/login"}):e.$message.error(a)}).catch(function(e){console.log(e)})})},r.initbackground=function(){var e=this;this.$nextTick(function(){var t="0123456789!@#$%^&*()~_+℃☆○※";t=t.split("");var r=document.getElementById("register"),a=r.getContext("2d");r.height=window.innerHeight,r.width=window.innerWidth;for(var i=[],o=16,n=r.width/o,s=0;s<n;s++)i[s]=1;function l(){a.fillStyle="rgba(0, 0, 0, 0.09)",a.fillRect(0,0,r.width,r.height),a.fillStyle="green",a.font=o+"px";for(var e=0;e<n;e++){var s=t[Math.floor(Math.random()*t.length)];a.fillText(s,e*o,i[e]*o),i[e]*o>2*r.height/3&&Math.random()>.95&&(i[e]=0),i[e]++}}var c=setInterval(l,33);e.$once("hook:beforeDestroy",function(){clearInterval(c)})})},r.mounted=function(){this.initbackground(),window.addEventListener("resize",this.initbackground)},r.destroyed=function(){window.removeEventListener("resize",this.initbackground,!0)},t}(s["c"]);l=n["b"]([s["a"]],l);var c=l,d=c,u=(r("d863"),r("2877")),m=Object(u["a"])(d,a,i,!1,null,"3b2317ca",null);t["default"]=m.exports},d863:function(e,t,r){"use strict";var a=r("66db"),i=r.n(a);i.a}}]);
//# sourceMappingURL=chunk-371e9a4b.9617082a.js.map