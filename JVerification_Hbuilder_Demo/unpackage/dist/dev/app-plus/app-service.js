(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("button", {
        attrs: { _i: 1 },
        on: {
          click: function($event) {
            return _vm.debug()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 2 },
        on: {
          click: function($event) {
            return _vm.init()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 3 },
        on: {
          click: function($event) {
            return _vm.isInitSuccess()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 4 },
        on: {
          click: function($event) {
            return _vm.checkVerifyEnable()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 5 },
        on: {
          click: function($event) {
            return _vm.getToken()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 6 },
        on: {
          click: function($event) {
            return _vm.preLogin()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 7 },
        on: {
          click: function($event) {
            return _vm.clearPreLoginCache()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 8 },
        on: {
          click: function($event) {
            return _vm.loginAuth()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 9 },
        on: {
          click: function($event) {
            return _vm.setCustomUIWithConfig()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 10 },
        on: {
          click: function($event) {
            return _vm.setCustomDialog()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 11 },
        on: {
          click: function($event) {
            return _vm.autoLayoutUI()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 12 },
        on: {
          click: function($event) {
            return _vm.getCode()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 13 },
        on: {
          click: function($event) {
            return _vm.setTimeWithConfig()
          }
        }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "msg-box"), attrs: { _i: 14 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(15, "sc", "msg"), attrs: { _i: 15 } },
            [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.msg)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVtQixDQUFnQixzb0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');var _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv };\n\n  },\n  onLoad: function onLoad() {\n  },\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false },\n      function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000 },\n      function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:90\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: true,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          // modalTransitionStyle:\"FlipHorizontal\",\n          // appPrivacys:[\n          // \t\"头部文字\",\n          // [\"、\",\"自定义条款1\",\"https://www.taobao.com/\",[\"内部自定义条款1\",0xff000000,12]],\n          // [\"、\",\"自定义条款2\",\"https://www.taobao.com/\",[\"内部自定义条款2\",0xff000000,12]],\n          // [\"、\",\"自定义条款3\",\"https://www.taobao.com/\",[\"内部自定义条款3\",0xff000000,12]],\n          // \"尾部文字\"],\n          // privacyTextAlignment:\"center\",\n          // authPageBackgroudVideo:{\n          // \tvideoPath:\"static/videoBg.mp4\",\n          // \tvideoPlaceHolderImagePath:\"static/big.jpg\",\n          // },\n          // privacyCheckToastMessage: \"请点击同意协议\",\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000 },\n\n          {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true, // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          },\n          {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\" }] });\n\n\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setPrivacyNameAndUrlBeanList: [{\n            name: \"条款1\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\" },\n          {\n            name: \"条款2\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \"\",\n            afterName: \"\" },\n          {\n            name: \"条款3\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\" }],\n\n          setAppPrivacyColor: [0xff4169E1, 0xffFF6347],\n          setLogoImgPathFromJs: \"static/weixin.png\",\n          setLogBtnImgPathFromJs: \"static/login.png\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setPrivacyNavReturnBtnPathFromJs: \"static/weixin.png\",\n          setPrivacyTextSize: 12,\n          setPrivacyCheckboxSize: 14,\n          enableHintToast: true,\n          setLoadingViewEnable: true,\n          setStatusBarTransparent: true,\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee },\n\n          {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\" }] });\n\n\n      }\n    },\n    autoLayoutUI: function autoLayoutUI() {//开发者可以自己布局授权页视图UI控件\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: false,\n          autoLayout: true,\n          showWindow: false,\n          navReturnHidden: false,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -200, 60, 60],\n          //number\n          numberConstraints: [0, -132, 200, 14],\n          //slogn\n          sloganConstraints: [0, -112, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, -80, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          privacyConstraints: [0, 180, 200, 40],\n          checkViewConstraints: [-108, 180, 10, 10],\n          loadingConstraints: [0, 0, 20, 20] });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          // setNavColor:0xff000000,\n          // setLogBtnText:\" 极光认证测试弹窗 \",\n          // setPrivacyState:false,\n          // setAppPrivacyColor:[0xff00f000,0xff000000],\n          // setDialogTheme:[300, 400, 0, 0, false],\n          // setLogoImgPathFromJs:\"static/big.jpg\",\n          // setAuthBGImgPathFromJs:\"static/bg.jpeg\",\n          // setDimAmount: 0.5,\n          // privacyNeedClose:true,           //弹窗是否需要关闭按钮 \n          // privacyCloseTheme:[10, 60, 0, 0],            //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n\n\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          // privacyCheckToastMessage:\"请点击同意协议\",\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\" });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPathFromJs: \"static/big.jpg\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setDimAmount: 0.5,\n          privacyNeedClose: true, //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n    },\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content });\n\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\", //在此替换你的phoneNumber\n        signID: \"1\", //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:317\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImp2IiwidW5pIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsImRhdGEiLCJ0aXRsZSIsIm1zZyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJkZWJ1ZyIsInNldERlYnVnTW9kZSIsImluaXQiLCJzZWxmIiwidGltZW91dCIsImlzUHJvZHVjdGlvbiIsInJlc3VsdCIsInNob3dNb2RhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0luaXRTdWNjZXNzIiwiY2hlY2tWZXJpZnlFbmFibGUiLCJnZXRUb2tlbiIsInByZUxvZ2luIiwiY2xlYXJQcmVMb2dpbkNhY2hlIiwibG9naW5BdXRoIiwiYXV0b0ZpbmlzaCIsImV2ZW50Iiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnIiwiYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrIiwiaWQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TIiwibmF2Q29sb3IiLCJsb2dCdG5UZXh0IiwicHJpdmFjeVN0YXRlIiwiYXBwUHJpdmFjeUNvbG9yIiwiYWRkQ3VzdG9tVmlld3MiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsInRleHRGb250IiwidGV4dEFsaWdubWVudCIsIm51bWJlck9mTGluZXMiLCJjb3JuZXJSYWRpdXMiLCJ0ZXh0Q29sb3IiLCJib3R0b20iLCJpc0ZpbmlzaCIsImJhY2tncm91bmRJbWFnZVBhdGgiLCJyaWdodCIsImltYWdlUGF0aCIsInNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQiLCJzZXROYXZDb2xvciIsInNldExvZ0J0blRleHQiLCJzZXRQcml2YWN5U3RhdGUiLCJzZXRQcml2YWN5TmFtZUFuZFVybEJlYW5MaXN0IiwibmFtZSIsInVybCIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJzZXRBcHBQcml2YWN5Q29sb3IiLCJzZXRMb2dvSW1nUGF0aEZyb21KcyIsInNldExvZ0J0bkltZ1BhdGhGcm9tSnMiLCJzZXRBdXRoQkdJbWdQYXRoRnJvbUpzIiwic2V0UHJpdmFjeU5hdlJldHVybkJ0blBhdGhGcm9tSnMiLCJzZXRQcml2YWN5VGV4dFNpemUiLCJzZXRQcml2YWN5Q2hlY2tib3hTaXplIiwiZW5hYmxlSGludFRvYXN0Iiwic2V0TG9hZGluZ1ZpZXdFbmFibGUiLCJzZXRTdGF0dXNCYXJUcmFuc3BhcmVudCIsImZpbmlzaEZsYWciLCJ0ZXh0U2l6ZSIsImFsaWduIiwibWFyZ2lucyIsImJnQ29sb3IiLCJiZ0ltZ1BhdGgiLCJhdXRvTGF5b3V0VUkiLCJuYXZDdXN0b20iLCJhdXRvTGF5b3V0Iiwic2hvd1dpbmRvdyIsIm5hdlJldHVybkhpZGRlbiIsImxvZ29JbWciLCJsb2dvQ29uc3RyYWludHMiLCJudW1iZXJDb25zdHJhaW50cyIsInNsb2dhbkNvbnN0cmFpbnRzIiwibG9nQnRuQ29uc3RyYWludHMiLCJsb2dCdG5UZXh0Q29sb3IiLCJwcml2YWN5Q29uc3RyYWludHMiLCJjaGVja1ZpZXdDb25zdHJhaW50cyIsImxvYWRpbmdDb25zdHJhaW50cyIsInNldEN1c3RvbURpYWxvZyIsIndpbmRvd0NvbnN0cmFpbnRzIiwid2luZG93QmFja2dyb3VuZEFscGhhIiwid2luZG93Q29ybmVyUmFkaXVzIiwid2luZG93Q2xvc2VCdG5Db25zdHJhaW50cyIsIndpbmRvd0Nsb3NlQnRuSW1ncyIsIndpbmRvd0JhY2tncm91bmRJbWFnZSIsInNldERpYWxvZ1RoZW1lIiwic2V0RGltQW1vdW50IiwicHJpdmFjeU5lZWRDbG9zZSIsInByaXZhY3lDbG9zZVRoZW1lIiwiY29udGVudCIsImdldENvZGUiLCJwaG9uZU51bWJlciIsInNpZ25JRCIsInRlbXBsYXRlSUQiLCJzZXRUaW1lV2l0aENvbmZpZyJdLCJtYXBwaW5ncyI6InFJQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TCxDQUFReUcsT0FBUixDQUFnQjtBQUNmQyxtQkFBVyxFQUFJLGFBREEsRUFDZTtBQUM5QkMsY0FBTSxFQUFHLEdBRk0sRUFFVztBQUMxQkMsa0JBQVUsRUFBRyxHQUhFLENBR1U7QUFIVixPQUFoQixFQUlFLFVBQUE5RixNQUFNLEVBQUU7QUFDVEgsWUFBSSxDQUFDSSxTQUFMLENBQWUsU0FBZixFQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILE1BQWYsQ0FBekI7QUFDQSxPQU5ELEVBTUUsVUFBQVcsS0FBSyxFQUFFO0FBQ1IscUJBQVksa0JBQWdCVCxJQUFJLENBQUNDLFNBQUwsQ0FBZVEsS0FBZixDQUE1QjtBQUNBLE9BUkQ7QUFTQSxLQTdSTztBQThSUjtBQUNBb0YscUJBQWlCLEVBQUMsNkJBQVU7QUFDM0IsV0FBSzdHLEVBQUwsQ0FBUTZHLGlCQUFSLENBQTBCLElBQTFCO0FBQ0EsS0FqU08sRUFWSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cblx0Y29uc3QganYgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignSkctSlZlcmlmaWNhdGlvbicpXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHRcdG1zZzogXCJcIixcblx0XHRcdFx0anZcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOiuvue9riBkZWJ1ZyDmqKHlvI9cblx0XHRcdGRlYnVnOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuc2V0RGVidWdNb2RlKHRydWUpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWIneWni+WMllxuXHRcdFx0aW5pdDpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaW5pdCh7XG5cdFx0XHRcdFx0dGltZW91dDo3MDAwLFxuXHRcdFx0XHRcdGlzUHJvZHVjdGlvbjpmYWxzZSxcblx0XHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaW5pdCcsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOaYr+WQpuWIneWni+WMluaIkOWKn1xuXHRcdFx0aXNJbml0U3VjY2VzczpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaXNJbml0U3VjY2VzcyhyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaXNJbml0U3VjY2VzcycsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5b2T5YmN572R57uc5piv5ZCm5pSv5oyB6K6k6K+BXG5cdFx0XHRjaGVja1ZlcmlmeUVuYWJsZTpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuY2hlY2tWZXJpZnlFbmFibGUocmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2NoZWNrVmVyaWZ5RW5hYmxlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5borqTor4EgdG9rZW5cblx0XHRcdGdldFRva2VuOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0c2VsZi5qdi5nZXRUb2tlbig1MDAwLHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRUb2tlbicsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2V6aKE5Y+W5Y+3XG5cdFx0XHRwcmVMb2dpbjpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYucHJlTG9naW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgncHJlTG9naW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOa4hemZpOmihOWPluWPt+e8k+WtmFxuXHRcdFx0Y2xlYXJQcmVMb2dpbkNhY2hlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuY2xlYXJQcmVMb2dpbkNhY2hlKCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2VXG5cdFx0XHRsb2dpbkF1dGg6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmxvZ2luQXV0aCh7XG5cdFx0XHRcdFx0YXV0b0ZpbmlzaDp0cnVlLFxuXHRcdFx0XHRcdHRpbWVvdXQ6NTAwMFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdsb2dpbkF1dGgnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9LGV2ZW50PT57XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbkF1dGhldmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOiHquWumuS5ieaOiOadg+mhtemdoiBVSSDmoLflvI9cblx0XHRcdHNldEN1c3RvbVVJV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuanYuYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrKGlkPT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2N1c3RvbVZpZXdjbGljaycsXCJpZDpcIitpZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIil7XG5cdFx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdpT1Moe1xuXHRcdFx0XHRcdFx0bmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdGxvZ0J0blRleHQ6XCLmnoHlhYnorqTor4HmtYvor5VcIixcblx0XHRcdFx0XHRcdHByaXZhY3lTdGF0ZTp0cnVlLFxuXHRcdFx0XHRcdFx0YXBwUHJpdmFjeUNvbG9yOlsweGZmMDAwMjAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0Ly8gbW9kYWxUcmFuc2l0aW9uU3R5bGU6XCJGbGlwSG9yaXpvbnRhbFwiLFxuXHRcdFx0XHRcdFx0Ly8gYXBwUHJpdmFjeXM6W1xuXHRcdFx0XHRcdFx0Ly8gXHRcIuWktOmDqOaWh+Wtl1wiLFxuXHRcdFx0XHRcdFx0Ly8gW1wi44CBXCIsXCLoh6rlrprkuYnmnaHmrL4xXCIsXCJodHRwczovL3d3dy50YW9iYW8uY29tL1wiLFtcIuWGhemDqOiHquWumuS5ieadoeasvjFcIiwweGZmMDAwMDAwLDEyXV0sXG5cdFx0XHRcdFx0XHQvLyBbXCLjgIFcIixcIuiHquWumuS5ieadoeasvjJcIixcImh0dHBzOi8vd3d3LnRhb2Jhby5jb20vXCIsW1wi5YaF6YOo6Ieq5a6a5LmJ5p2h5qy+MlwiLDB4ZmYwMDAwMDAsMTJdXSxcblx0XHRcdFx0XHRcdC8vIFtcIuOAgVwiLFwi6Ieq5a6a5LmJ5p2h5qy+M1wiLFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbS9cIixbXCLlhoXpg6joh6rlrprkuYnmnaHmrL4zXCIsMHhmZjAwMDAwMCwxMl1dLFxuXHRcdFx0XHRcdFx0Ly8gXCLlsL7pg6jmloflrZdcIl0sXG5cdFx0XHRcdFx0XHQvLyBwcml2YWN5VGV4dEFsaWdubWVudDpcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0Ly8gYXV0aFBhZ2VCYWNrZ3JvdWRWaWRlbzp7XG5cdFx0XHRcdFx0XHQvLyBcdHZpZGVvUGF0aDpcInN0YXRpYy92aWRlb0JnLm1wNFwiLFxuXHRcdFx0XHRcdFx0Ly8gXHR2aWRlb1BsYWNlSG9sZGVySW1hZ2VQYXRoOlwic3RhdGljL2JpZy5qcGdcIixcblx0XHRcdFx0XHRcdC8vIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcml2YWN5Q2hlY2tUb2FzdE1lc3NhZ2U6IFwi6K+354K55Ye75ZCM5oSP5Y2P6K6uXCIsXG5cdFx0XHRcdFx0XHRhZGRDdXN0b21WaWV3czpbe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6XCJsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOjEyMCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6MjAsXG5cdFx0XHRcdFx0XHRcdFx0dG9wOjMyMCxcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OjEwMCxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6MHhmZjdiNjhlZSxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Olwi6Ieq5a6a5LmJbGFiZWxcIixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Rm9udDoyMCxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ25tZW50OjE1LFxuXHRcdFx0XHRcdFx0XHRcdG51bWJlck9mTGluZXM6Mixcblx0XHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOjB4ZmYwMDAwMDBcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHRpZDogXCJidXR0b25UZXN0XCIsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6MTgwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDo0NCxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MjIsXG5cdFx0XHRcdFx0XHRcdFx0bGVmdDo1MCxcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6XCLngrnlh7vmtYvor5VcIixcblx0XHRcdFx0XHRcdFx0XHRpc0ZpbmlzaDp0cnVlLCAgLy8g5piv5ZCm5Zyo5o6I5p2D6aG16Z2i6YCa6L+H6Ieq5a6a5LmJ5o6n5Lu2YnV0dG9u55qE54K55Ye75YWz6Zet5o6I5p2D6aG16Z2iXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlUGF0aDogXCJzdGF0aWMvYmlnLmpwZ1wiLCAvLyBidXR0b27mraPluLjmg4XlhrXkuIvog4zmma/lm77niYfot6/lvoRcblx0XHRcdFx0XHRcdFx0XHQvLyBub3JtYWxJbWFnZVBhdGg6XCJzdGF0aWMvYmcuanBlZ1wiICAvLyDorr7nva5idXR0b27lm77niYfot6/lvoRcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6XCJpbWFnZVZpZXdcIixcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDo1MCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjI1LFxuXHRcdFx0XHRcdFx0XHRcdHJpZ2h0Oi0xMDAsXG5cdFx0XHRcdFx0XHRcdFx0Ym90dG9tOiAtMTAwLFxuXHRcdFx0XHRcdFx0XHRcdGltYWdlUGF0aDpcInN0YXRpYy9xcS5wbmdcIlxuXHRcdFx0XHRcdFx0XHR9XVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuanYuYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrKGlkPT57XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnY3VzdG9tVmlld2NsaWNrJyxcImlkOlwiK2lkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+VIFwiLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeU5hbWVBbmRVcmxCZWFuTGlzdDpbe1xuXHRcdFx0XHRcdFx0XHRuYW1lOlwi5p2h5qy+MVwiLFxuXHRcdFx0XHRcdFx0XHR1cmw6XCJodHRwczovL3d3dy5qaWd1YW5nLmNuL2Fib3V0XCIsXG5cdFx0XHRcdFx0XHRcdGJlZm9yZU5hbWU6XCIsXCIsXG5cdFx0XHRcdFx0XHRcdGFmdGVyTmFtZTpcIixcIlxuXHRcdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRcdG5hbWU6XCLmnaHmrL4yXCIsXG5cdFx0XHRcdFx0XHRcdHVybDpcImh0dHBzOi8vd3d3LmppZ3VhbmcuY24vYWJvdXRcIixcblx0XHRcdFx0XHRcdFx0YmVmb3JlTmFtZTpcIlwiLFxuXHRcdFx0XHRcdFx0XHRhZnRlck5hbWU6XCJcIlxuXHRcdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRcdG5hbWU6XCLmnaHmrL4zXCIsXG5cdFx0XHRcdFx0XHRcdHVybDpcImh0dHBzOi8vd3d3LmppZ3VhbmcuY24vYWJvdXRcIixcblx0XHRcdFx0XHRcdFx0YmVmb3JlTmFtZTpcIixcIixcblx0XHRcdFx0XHRcdFx0YWZ0ZXJOYW1lOlwiLFwiXG5cdFx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRcdHNldEFwcFByaXZhY3lDb2xvcjpbMHhmZjQxNjlFMSwweGZmRkY2MzQ3XSxcblx0XHRcdFx0XHRcdHNldExvZ29JbWdQYXRoRnJvbUpzOlwic3RhdGljL3dlaXhpbi5wbmdcIixcblx0XHRcdFx0XHRcdHNldExvZ0J0bkltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvbG9naW4ucG5nXCIsXG5cdFx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdHNldFByaXZhY3lOYXZSZXR1cm5CdG5QYXRoRnJvbUpzOlwic3RhdGljL3dlaXhpbi5wbmdcIixcblx0XHRcdFx0XHRcdHNldFByaXZhY3lUZXh0U2l6ZToxMixcblx0XHRcdFx0XHRcdHNldFByaXZhY3lDaGVja2JveFNpemU6MTQsXG5cdFx0XHRcdFx0XHRlbmFibGVIaW50VG9hc3Q6dHJ1ZSxcblx0XHRcdFx0XHRcdHNldExvYWRpbmdWaWV3RW5hYmxlOnRydWUsXG5cdFx0XHRcdFx0XHRzZXRTdGF0dXNCYXJUcmFuc3BhcmVudDp0cnVlLFxuXHRcdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdFx0dHlwZTpcInRleHRcIixcblx0XHRcdFx0XHRcdFx0ZmluaXNoRmxhZzpmYWxzZSxcblx0XHRcdFx0XHRcdFx0aWQ6XCJpZDFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTAwLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYl0dlwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0U2l6ZToyMCxcblx0XHRcdFx0XHRcdFx0YWxpZ246MTUsXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMTAwLDAsMF0sXG5cdFx0XHRcdFx0XHRcdGJnQ29sb3I6MHhmZjdiNjhlZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTpcImltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6dHJ1ZSxcblx0XHRcdFx0XHRcdFx0aWQ6XCJpZDJcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0YWxpZ246MTMsXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMCwwLDBdLFxuXHRcdFx0XHRcdFx0XHRiZ0ltZ1BhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhdXRvTGF5b3V0VUk6ZnVuY3Rpb24oKXsgLy/lvIDlj5HogIXlj6/ku6Xoh6rlt7HluIPlsYDmjojmnYPpobXop4blm75VSeaOp+S7tlxuXHRcdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0XHRuYXZDdXN0b206ZmFsc2UsXG5cdFx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0XHRzaG93V2luZG93OmZhbHNlLFxuXHRcdFx0XHRcdFx0bmF2UmV0dXJuSGlkZGVuOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0XHRsb2dvQ29uc3RyYWludHM6WzAsLTIwMCw2MCw2MF0sXG5cdFx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTEzMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdFx0c2xvZ2FuQ29uc3RyYWludHM6WzAsLTExMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly/nmbvlvZXmjInpkq5cblx0XHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLC04MCwyMjAsNDBdLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdFx0cHJpdmFjeUNvbnN0cmFpbnRzOlswLDE4MCwyMDAsNDBdLFxuXHRcdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTgwLDEwLDEwXSxcblx0XHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0Ly8gc2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdC8vIHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdFx0Ly8gc2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly8gc2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0Ly8gc2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0XHQvLyBzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0XHQvLyBzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdC8vIHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdFx0Ly8gcHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHQvLyBwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2V0Q3VzdG9tRGlhbG9nOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRcdC8vIHByaXZhY3lDaGVja1RvYXN0TWVzc2FnZTpcIuivt+eCueWHu+WQjOaEj+WNj+iurlwiLFxuXHRcdFx0XHRcdFx0bmF2Q3VzdG9tOnRydWUsXG5cdFx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0XHRzaG93V2luZG93OnRydWUsXG5cdFx0XHRcdFx0XHR3aW5kb3dDb25zdHJhaW50czpbMCwwLDMwMCwzMDBdLFxuXHRcdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEFscGhhOiAwLjMsXG5cdFx0XHRcdFx0XHQvL2xvZ29cblx0XHRcdFx0XHRcdGxvZ29JbWc6XCJzdGF0aWMvbG9nby5wbmdcIixcblx0XHRcdFx0XHRcdGxvZ29Db25zdHJhaW50czpbMCwtMTAwLDYwLDYwXSxcblx0XHRcdFx0XHRcdC8vbnVtYmVyXG5cdFx0XHRcdFx0XHRudW1iZXJDb25zdHJhaW50czpbMCwtNDIsMjAwLDE0XSxcblx0XHRcdFx0XHRcdC8vc2xvZ25cblx0XHRcdFx0XHRcdHNsb2dhbkNvbnN0cmFpbnRzOlswLC0yMCwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly/nmbvlvZXmjInpkq5cblx0XHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLDIwLDIyMCw0MF0sXG5cdFx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5LiA6ZSu55m75b2VXCIsXG5cdFx0XHRcdFx0XHRsb2dCdG5UZXh0Q29sb3I6MHgwMDAwRkYsXG5cdFx0XHRcdFx0XHR3aW5kb3dDb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0XHRwcml2YWN5Q29uc3RyYWludHM6WzAsMTAwLDIwMCw0MF0sXG5cdFx0XHRcdFx0XHRjaGVja1ZpZXdDb25zdHJhaW50czpbLTEwOCwxMDAsMTAsMTBdLFxuXHRcdFx0XHRcdFx0d2luZG93Q2xvc2VCdG5Db25zdHJhaW50czpbLTEzNSwtMTM1LDIwLDIwXSxcblx0XHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHRcdHdpbmRvd0Nsb3NlQnRuSW1nczpbXCJzdGF0aWMvd2luZG93Q2xvc2VcIixcInN0YXRpYy93aW5kb3dDbG9zZVwiXSxcblx0XHRcdFx0XHRcdHdpbmRvd0JhY2tncm91bmRJbWFnZTpcInN0YXRpYy9iZy5qcGVnXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0c2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0XHRzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdFx0cHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHRwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2hvd01vZGFsOmZ1bmN0aW9uKHRpdGxlLGNvbnRlbnQpe1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0ICAgIHRpdGxlLFxuXHRcdFx0XHQgICAgY29udGVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubXNnID0gYCR7dGl0bGV9IDoke2NvbnRlbnR9YDtcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5bpqozor4HnoIFcblx0XHRcdGdldENvZGU6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmdldENvZGUoe1xuXHRcdFx0XHRcdHBob25lTnVtYmVyIDogIFwiMTg5MjUyNDExMTFcIiwgLy/lnKjmraTmm7/mjaLkvaDnmoRwaG9uZU51bWJlclxuXHRcdFx0XHRcdHNpZ25JRCA6IFwiMVwiLCAgICAgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHNpZ25JRFxuXHRcdFx0XHRcdHRlbXBsYXRlSUQgOiBcIjFcIiAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEdGVtcGxhdGVJRFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRDb2RlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZ2V0Q29kZUV2ZW50OlwiK0pTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6K6+572u5YmN5ZCO5Lik5qyh6I635Y+W6aqM6K+B56CB55qE5pe26Ze06Ze06ZqUXG5cdFx0XHRzZXRUaW1lV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmp2LnNldFRpbWVXaXRoQ29uZmlnKDEwMDApXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 10 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/jiguang/AndroidStudioProjects/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);