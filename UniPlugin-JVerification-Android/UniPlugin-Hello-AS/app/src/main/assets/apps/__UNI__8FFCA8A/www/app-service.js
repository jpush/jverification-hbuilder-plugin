(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"03fb":function(t,e,n){"use strict";var o=n("4ea4"),i=o(n("9523"));n("85c6");var r=o(n("8bbf")),a=o(n("55a8"));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}r.default.config.productionTip=!1,a.default.mpType="app";var c=new r.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a.default));c.$mount()},"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function r(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),c="";if(s.length>1){var u=s.pop();c=s.join("---COMMA---"),0===u.indexOf(" at ")?c+=u:c+="---COMMA---"+u}else c=s[0];console[a](c)}n.r(e),n.d(e,"log",(function(){return a})),n.d(e,"default",(function(){return s}))},"3ef7":function(t,e,n){"use strict";n.r(e);var o=n("8180"),i=n("79fe");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var a=n("f0c5"),s=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=s.exports},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"55a8":function(t,e,n){"use strict";n.r(e);var o=n("af6d");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var r=n("f0c5"),a=Object(r["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=a.exports},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"79fe":function(t,e,n){"use strict";n.r(e);var o=n("e164"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},8180:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("button",{attrs:{_i:1},on:{click:function(e){return t.debug()}}}),n("button",{attrs:{_i:2},on:{click:function(e){return t.init()}}}),n("button",{attrs:{_i:3},on:{click:function(e){return t.isInitSuccess()}}}),n("button",{attrs:{_i:4},on:{click:function(e){return t.checkVerifyEnable()}}}),n("button",{attrs:{_i:5},on:{click:function(e){return t.getToken()}}}),n("button",{attrs:{_i:6},on:{click:function(e){return t.preLogin()}}}),n("button",{attrs:{_i:7},on:{click:function(e){return t.clearPreLoginCache()}}}),n("button",{attrs:{_i:8},on:{click:function(e){return t.loginAuth()}}}),n("button",{attrs:{_i:9},on:{click:function(e){return t.setCustomUIWithConfig()}}}),n("button",{attrs:{_i:10},on:{click:function(e){return t.setCustomDialog()}}}),n("button",{attrs:{_i:11},on:{click:function(e){return t.autoLayoutUI()}}}),n("button",{attrs:{_i:12},on:{click:function(e){return t.getCode()}}}),n("button",{attrs:{_i:13},on:{click:function(e){return t.setTimeWithConfig()}}}),n("button",{attrs:{_i:14},on:{click:function(e){return t.setLocationEanable()}}}),n("view",{staticClass:t._$s(15,"sc","msg-box"),attrs:{_i:15}},[n("text",{staticClass:t._$s(16,"sc","msg"),attrs:{_i:16}},[t._v(t._$s(16,"t0-0",t._s(t.msg)))])])])},i=[]},"85c6":function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var o=uni.requireGlobal();ArrayBuffer=o.ArrayBuffer,Int8Array=o.Int8Array,Uint8Array=o.Uint8Array,Uint8ClampedArray=o.Uint8ClampedArray,Int16Array=o.Int16Array,Uint16Array=o.Uint16Array,Int32Array=o.Int32Array,Uint32Array=o.Uint32Array,Float32Array=o.Float32Array,Float64Array=o.Float64Array,BigInt64Array=o.BigInt64Array,BigUint64Array=o.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("3ef7").default)}))},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var o=n("a395");t.exports=function(t,e,n){return e=o(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},a395:function(t,e,n){var o=n("7037")["default"],i=n("e50d");t.exports=function(t){var e=i(t,"string");return"symbol"===o(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},af6d:function(t,e,n){"use strict";n.r(e);var o=n("f642"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},e164:function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("9523")),r=uni.requireNativePlugin("JG-JVerification"),a={data:function(){return{title:"Hello",msg:"",jv:r}},onLoad:function(){},methods:{debug:function(){this.jv.setDebugMode(!0)},init:function(){var t=this;t.jv.init({timeout:7e3,isProduction:!1},(function(e){t.showModal("init",JSON.stringify(e))}))},isInitSuccess:function(){var t=this;t.jv.isInitSuccess((function(e){t.showModal("isInitSuccess",JSON.stringify(e))}))},checkVerifyEnable:function(){var t=this;t.jv.checkVerifyEnable((function(e){t.showModal("checkVerifyEnable",JSON.stringify(e))}))},getToken:function(){var t=this;t.jv.getToken(5e3,(function(e){t.showModal("getToken",JSON.stringify(e))}))},preLogin:function(){var t=this;t.jv.preLogin(5e3,(function(e){t.showModal("preLogin",JSON.stringify(e))}))},clearPreLoginCache:function(){this.jv.clearPreLoginCache()},loginAuth:function(){var e=this;e.jv.loginAuth({autoFinish:!0,timeout:5e3},(function(t){e.showModal("loginAuth",JSON.stringify(t))}),(function(e){t("log","loginAuthevent:"+JSON.stringify(e)," at pages/index/index.vue:92")}))},setCustomUIWithConfig:function(){var t,e=this;(this.jv.addCustomViewsClickCallback((function(t){e.showModal("customViewclick","id:"+t)})),"ios"==uni.getSystemInfoSync().platform)?this.jv.setCustomUIWithConfigiOS({navColor:4278190080,logBtnText:"\u6781\u5149\u8ba4\u8bc1\u6d4b\u8bd5",privacyState:!1,appPrivacyColor:[4278190592,4278190080],modalTransitionStyle:"FlipHorizontal",appPrivacys:["\u5934\u90e8\u6587\u5b57",["\u3001","\u81ea\u5b9a\u4e49\u6761\u6b3e1","https://www.taobao.com/","\u5185\u90e8\u81ea\u5b9a\u4e49\u6761\u6b3e1"],["\u3001","\u81ea\u5b9a\u4e49\u6761\u6b3e2","https://www.taobao.com/","\u5185\u90e8\u81ea\u5b9a\u4e49\u6761\u6b3e2"],["\u3001","\u81ea\u5b9a\u4e49\u6761\u6b3e3","https://www.taobao.com/","\u5185\u90e8\u81ea\u5b9a\u4e49\u6761\u6b3e3"],"\u5c3e\u90e8\u6587\u5b57"],isAlertPrivacyVC:!0,privacyCheckToastMessage:"\u8bf7\u70b9\u51fb\u540c\u610f\u534f\u8bae",navTransparent:!0,agreementNavBackgroundColor:4286277870,privacyTextAlignment:"center",addCustomViews:[{type:"label",width:120,height:20,top:320,left:100,backgroundColor:4286277870,text:"\u81ea\u5b9a\u4e49label",textFont:20,textAlignment:15,numberOfLines:2,cornerRadius:10,textColor:4278190080},{type:"button",id:"buttonTest",width:180,height:44,textColor:4278190080,cornerRadius:22,left:50,bottom:-100,title:"\u70b9\u51fb\u6d4b\u8bd5",isFinish:!0,backgroundImagePath:"static/big.jpg"},{type:"imageView",width:50,height:50,cornerRadius:25,right:-100,bottom:-100,imagePath:"static/qq.png"}]}):(this.jv.addCustomViewsClickCallback((function(t){e.showModal("customViewclick","id:"+t)})),this.jv.setCustomUIWithConfigAndroid({setNavColor:4278190080,setLogBtnText:" \u6781\u5149\u8ba4\u8bc1\u6d4b\u8bd5 ",setPrivacyState:!1,setPrivacyNameAndUrlBeanList:[{name:"\u6761\u6b3e1",url:"https://www.jiguang.cn/about",beforeName:",",afterName:","},{name:"\u6761\u6b3e2",url:"https://www.jiguang.cn/about",beforeName:"",afterName:""},{name:"\u6761\u6b3e3",url:"https://www.jiguang.cn/about",beforeName:",",afterName:","}],setAppPrivacyColor:[4282477025,4294927175],setLogoImgPathFromJs:"static/weixin.png",setLogBtnImgPathFromJs:"static/login.png",setAuthBGImgPathFromJs:"static/bg.jpeg",setPrivacyNavReturnBtnPathFromJs:"static/weixin.png",setPrivacyTextSize:12,setPrivacyCheckboxSize:14,enableHintToast:!0,enableHintToastText:"\u81ea\u5b9a\u4e49\u63d0\u793alinux",setLoadingViewEnable:!0,setStatusBarTransparent:!0,setPrivacyCheckDialogConfig:(t={enablePrivacyCheckDialog:!0,setPrivacyCheckDialogTitleTextSize:18,setPrivacyCheckDialogTitleTextColor:4282477025,setPrivacyCheckDialogContentTextGravity:"left",setPrivacyCheckDialogContentTextSize:16,setPrivacyCheckDialogLogBtnImgPath:"static/login.png",setPrivacyCheckDialogLogBtnTextColor:4294927175,setPrivacyCheckDialogGravity:"center"},(0,i.default)(t,"setPrivacyCheckDialogGravity","center"),(0,i.default)(t,"setPrivacyCheckDialogLogBtnWidth",150),(0,i.default)(t,"setPrivacyCheckDialogLogBtnHeight",50),t),addCustomViews:[{type:"text",finishFlag:!1,id:"id1",width:100,height:50,text:"\u81ea\u5b9a\u4e49tv",textSize:20,align:15,margins:[100,100,0,0],textAlignment:4,textViewGravity:2,bgColor:4286277870},{type:"image",finishFlag:!0,id:"id2",width:50,height:50,align:13,margins:[0,0,0,0],bgImgPath:"static/qq.png"}]}))},autoLayoutUI:function(){"ios"==uni.getSystemInfoSync().platform?this.jv.setCustomUIWithConfigiOS({navCustom:!1,autoLayout:!0,showWindow:!1,navReturnHidden:!1,logoImg:"static/logo.png",logoConstraints:[0,-200,60,60],numberConstraints:[0,-132,200,14],sloganConstraints:[0,-112,200,14],logBtnConstraints:[0,-80,220,40],logBtnText:"\u4e00\u952e\u767b\u5f55",logBtnTextColor:255,privacyConstraints:[0,180,200,40],checkViewConstraints:[-108,180,10,10],loadingConstraints:[0,0,20,20]}):this.jv.setCustomUIWithConfigAndroid({})},setCustomDialog:function(){"ios"==uni.getSystemInfoSync().platform?this.jv.setCustomUIWithConfigiOS({navCustom:!0,autoLayout:!0,showWindow:!0,windowConstraints:[0,0,300,300],windowBackgroundAlpha:.3,logoImg:"static/logo.png",logoConstraints:[0,-100,60,60],numberConstraints:[0,-42,200,14],sloganConstraints:[0,-20,200,14],logBtnConstraints:[0,20,220,40],logBtnText:"\u4e00\u952e\u767b\u5f55",logBtnTextColor:255,windowCornerRadius:10,privacyConstraints:[0,100,200,40],checkViewConstraints:[-108,100,10,10],windowCloseBtnConstraints:[-135,-135,20,20],loadingConstraints:[0,0,20,20],windowCloseBtnImgs:["static/windowClose","static/windowClose"],windowBackgroundImage:"static/bg.jpeg"}):this.jv.setCustomUIWithConfigAndroid({setNavColor:4278190080,setLogBtnText:" \u6781\u5149\u8ba4\u8bc1\u6d4b\u8bd5\u5f39\u7a97 ",setPrivacyState:!1,setAppPrivacyColor:[4278251520,4278190080],setDialogTheme:[300,400,0,0,!1],setLogoImgPathFromJs:"static/big.jpg",setAuthBGImgPathFromJs:"static/bg.jpeg",setDimAmount:.5,privacyNeedClose:!0,privacyCloseTheme:[10,60,0,0]})},showModal:function(t,e){uni.showModal({title:t,content:e}),this.msg="".concat(t," :").concat(e)},getCode:function(){var e=this;e.jv.getCode({phoneNumber:"18925241111",signID:"1",templateID:"1"},(function(t){e.showModal("getCode",JSON.stringify(t))}),(function(e){t("log","getCodeEvent:"+JSON.stringify(e)," at pages/index/index.vue:342")}))},setTimeWithConfig:function(){this.jv.setTimeWithConfig(1e3)},setLocationEanable:function(){this.jv.setLocationEanable(!1)}}};e.default=a}).call(this,n("0de9")["default"])},e50d:function(t,e,n){var o=n("7037")["default"];t.exports=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,i,r,a,s,c,u){var l,f="function"===typeof t?t.options:t;if(c){f.components||(f.components={});var g=Object.prototype.hasOwnProperty;for(var d in c)g.call(c,d)&&!g.call(f.components,d)&&(f.components[d]=c[d])}if(u&&("function"===typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),r&&(f._scopeId="data-v-"+r),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var p=f.render;f.render=function(t,e){return l.call(e),p(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return o}))},f642:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])}},[["03fb","app-config"]]]);