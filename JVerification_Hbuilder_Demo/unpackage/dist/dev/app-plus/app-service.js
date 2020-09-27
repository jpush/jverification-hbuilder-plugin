(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \*****************************************************************************************************/
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
/*!****************************************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NLO0FBQ3RLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            return _vm.getCode()
          }
        }
      }),
      _c("button", {
        attrs: { _i: 12 },
        on: {
          click: function($event) {
            return _vm.setTimeWithConfig()
          }
        }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(13, "sc", "msg-box"), attrs: { _i: 13 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(14, "sc", "msg"), attrs: { _i: 14 } },
            [_vm._v(_vm._$s(14, "t0-0", _vm._s(_vm.msg)))]
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
/*!****************************************************************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');var _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv };\n\n  },\n  onLoad: function onLoad() {\n  },\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false },\n      function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000 },\n      function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:89\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: true,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000 },\n\n          {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true, // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          },\n          {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\" }] });\n\n\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setLogoImgPathFromJs: \"static/weixin.png\",\n          setLogBtnImgPathFromJs: \"static/login.png\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setStatusBarTransparent: true,\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee },\n\n          {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\" }] });\n\n\n      }\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\" });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPath: \"static/big.jpg\",\n          setAuthBGImgPath: \"static/bg.jpeg\",\n          privacyNeedClose: true, //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n    },\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content });\n\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\", //在此替换你的phoneNumber\n        signID: \"1\", //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:240\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImp2IiwidW5pIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsImRhdGEiLCJ0aXRsZSIsIm1zZyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJkZWJ1ZyIsInNldERlYnVnTW9kZSIsImluaXQiLCJzZWxmIiwidGltZW91dCIsImlzUHJvZHVjdGlvbiIsInJlc3VsdCIsInNob3dNb2RhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0luaXRTdWNjZXNzIiwiY2hlY2tWZXJpZnlFbmFibGUiLCJnZXRUb2tlbiIsInByZUxvZ2luIiwiY2xlYXJQcmVMb2dpbkNhY2hlIiwibG9naW5BdXRoIiwiYXV0b0ZpbmlzaCIsImV2ZW50Iiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnIiwiYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrIiwiaWQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TIiwibmF2Q29sb3IiLCJsb2dCdG5UZXh0IiwicHJpdmFjeVN0YXRlIiwiYXBwUHJpdmFjeUNvbG9yIiwiYWRkQ3VzdG9tVmlld3MiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsInRleHRGb250IiwidGV4dEFsaWdubWVudCIsIm51bWJlck9mTGluZXMiLCJjb3JuZXJSYWRpdXMiLCJ0ZXh0Q29sb3IiLCJib3R0b20iLCJpc0ZpbmlzaCIsImJhY2tncm91bmRJbWFnZVBhdGgiLCJyaWdodCIsImltYWdlUGF0aCIsInNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQiLCJzZXROYXZDb2xvciIsInNldExvZ0J0blRleHQiLCJzZXRQcml2YWN5U3RhdGUiLCJzZXRBcHBQcml2YWN5Q29sb3IiLCJzZXRMb2dvSW1nUGF0aEZyb21KcyIsInNldExvZ0J0bkltZ1BhdGhGcm9tSnMiLCJzZXRBdXRoQkdJbWdQYXRoRnJvbUpzIiwic2V0U3RhdHVzQmFyVHJhbnNwYXJlbnQiLCJmaW5pc2hGbGFnIiwidGV4dFNpemUiLCJhbGlnbiIsIm1hcmdpbnMiLCJiZ0NvbG9yIiwiYmdJbWdQYXRoIiwic2V0Q3VzdG9tRGlhbG9nIiwibmF2Q3VzdG9tIiwiYXV0b0xheW91dCIsInNob3dXaW5kb3ciLCJ3aW5kb3dDb25zdHJhaW50cyIsIndpbmRvd0JhY2tncm91bmRBbHBoYSIsImxvZ29JbWciLCJsb2dvQ29uc3RyYWludHMiLCJudW1iZXJDb25zdHJhaW50cyIsInNsb2dhbkNvbnN0cmFpbnRzIiwibG9nQnRuQ29uc3RyYWludHMiLCJsb2dCdG5UZXh0Q29sb3IiLCJ3aW5kb3dDb3JuZXJSYWRpdXMiLCJwcml2YWN5Q29uc3RyYWludHMiLCJjaGVja1ZpZXdDb25zdHJhaW50cyIsIndpbmRvd0Nsb3NlQnRuQ29uc3RyYWludHMiLCJsb2FkaW5nQ29uc3RyYWludHMiLCJ3aW5kb3dDbG9zZUJ0bkltZ3MiLCJ3aW5kb3dCYWNrZ3JvdW5kSW1hZ2UiLCJzZXREaWFsb2dUaGVtZSIsInNldExvZ29JbWdQYXRoIiwic2V0QXV0aEJHSW1nUGF0aCIsInByaXZhY3lOZWVkQ2xvc2UiLCJwcml2YWN5Q2xvc2VUaGVtZSIsImNvbnRlbnQiLCJnZXRDb2RlIiwicGhvbmVOdW1iZXIiLCJzaWduSUQiLCJ0ZW1wbGF0ZUlEIiwic2V0VGltZVdpdGhDb25maWciXSwibWFwcGluZ3MiOiJxSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBR0MsR0FBRyxDQUFDQyxtQkFBSixDQUF3QixrQkFBeEIsQ0FBWCxDO0FBQ2U7QUFDZEMsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsV0FBSyxFQUFFLE9BREQ7QUFFTkMsU0FBRyxFQUFFLEVBRkM7QUFHTkwsUUFBRSxFQUFG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cU1SO0FBQ0FDLFdBQU8sRUFBQyxtQkFBVTtBQUNqQixVQUFJbkYsSUFBSSxHQUFHLElBQVg7QUFDQUEsVUFBSSxDQUFDWCxFQUFMLENBQVE4RixPQUFSLENBQWdCO0FBQ2ZDLG1CQUFXLEVBQUksYUFEQSxFQUNlO0FBQzlCQyxjQUFNLEVBQUcsR0FGTSxFQUVXO0FBQzFCQyxrQkFBVSxFQUFHLEdBSEUsQ0FHVTtBQUhWLE9BQWhCLEVBSUUsVUFBQW5GLE1BQU0sRUFBRTtBQUNUSCxZQUFJLENBQUNJLFNBQUwsQ0FBZSxTQUFmLEVBQXlCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsTUFBZixDQUF6QjtBQUNBLE9BTkQsRUFNRSxVQUFBVyxLQUFLLEVBQUU7QUFDUixxQkFBWSxrQkFBZ0JULElBQUksQ0FBQ0MsU0FBTCxDQUFlUSxLQUFmLENBQTVCO0FBQ0EsT0FSRDtBQVNBLEtBak5PO0FBa05SO0FBQ0F5RSxxQkFBaUIsRUFBQyw2QkFBVTtBQUMzQixXQUFLbEcsRUFBTCxDQUFRa0csaUJBQVIsQ0FBMEIsSUFBMUI7QUFDQSxLQXJOTyxFQVZLLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5jb25zdCBqdiA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdKRy1KVmVyaWZpY2F0aW9uJylcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHRtc2c6IFwiXCIsXG5cdFx0XHRqdlxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Ly8g6K6+572uIGRlYnVnIOaooeW8j1xuXHRcdGRlYnVnOmZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmp2LnNldERlYnVnTW9kZSh0cnVlKTtcblx0XHR9LFxuXHRcdC8vIOWIneWni+WMllxuXHRcdGluaXQ6ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYuaW5pdCh7XG5cdFx0XHRcdHRpbWVvdXQ6NzAwMCxcblx0XHRcdFx0aXNQcm9kdWN0aW9uOmZhbHNlLFxuXHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2luaXQnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvLyDmmK/lkKbliJ3lp4vljJbmiJDlip9cblx0XHRpc0luaXRTdWNjZXNzOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmlzSW5pdFN1Y2Nlc3MocmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdpc0luaXRTdWNjZXNzJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDlvZPliY3nvZHnu5zmmK/lkKbmlK/mjIHorqTor4Fcblx0XHRjaGVja1ZlcmlmeUVuYWJsZTpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5jaGVja1ZlcmlmeUVuYWJsZShyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2NoZWNrVmVyaWZ5RW5hYmxlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDojrflj5borqTor4EgdG9rZW5cblx0XHRnZXRUb2tlbjpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5nZXRUb2tlbig1MDAwLHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnZ2V0VG9rZW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOS4gOmUrueZu+W9lemihOWPluWPt1xuXHRcdHByZUxvZ2luOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LnByZUxvZ2luKDUwMDAscmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdwcmVMb2dpbicsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5riF6Zmk6aKE5Y+W5Y+357yT5a2YXG5cdFx0Y2xlYXJQcmVMb2dpbkNhY2hlOmZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmp2LmNsZWFyUHJlTG9naW5DYWNoZSgpO1xuXHRcdH0sXG5cdFx0Ly8g5LiA6ZSu55m75b2VXG5cdFx0bG9naW5BdXRoOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmxvZ2luQXV0aCh7XG5cdFx0XHRcdGF1dG9GaW5pc2g6dHJ1ZSxcblx0XHRcdFx0dGltZW91dDo1MDAwXG5cdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnbG9naW5BdXRoJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0sZXZlbnQ9Pntcblx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbkF1dGhldmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiHquWumuS5ieaOiOadg+mhtemdoiBVSSDmoLflvI9cblx0XHRzZXRDdXN0b21VSVdpdGhDb25maWc6ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuanYuYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrKGlkPT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuXHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0bmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5p6B5YWJ6K6k6K+B5rWL6K+VXCIsXG5cdFx0XHRcdFx0cHJpdmFjeVN0YXRlOnRydWUsXG5cdFx0XHRcdFx0YXBwUHJpdmFjeUNvbG9yOlsweGZmMDAwMjAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHRcdHR5cGU6XCJsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMjAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDoyMCxcblx0XHRcdFx0XHRcdFx0dG9wOjMyMCxcblx0XHRcdFx0XHRcdFx0bGVmdDoxMDAsXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjoweGZmN2I2OGVlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Olwi6Ieq5a6a5LmJbGFiZWxcIixcblx0XHRcdFx0XHRcdFx0dGV4dEZvbnQ6MjAsXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbm1lbnQ6MTUsXG5cdFx0XHRcdFx0XHRcdG51bWJlck9mTGluZXM6Mixcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjEwLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6MHhmZjAwMDAwMFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTpcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRpZDogXCJidXR0b25UZXN0XCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjE4MCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjQ0LFxuXHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjIyLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OjUwLFxuXHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOlwi54K55Ye75rWL6K+VXCIsXG5cdFx0XHRcdFx0XHRcdGlzRmluaXNoOnRydWUsICAvLyDmmK/lkKblnKjmjojmnYPpobXpnaLpgJrov4foh6rlrprkuYnmjqfku7ZidXR0b27nmoTngrnlh7vlhbPpl63mjojmnYPpobXpnaJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlUGF0aDogXCJzdGF0aWMvYmlnLmpwZ1wiLCAvLyBidXR0b27mraPluLjmg4XlhrXkuIvog4zmma/lm77niYfot6/lvoRcblx0XHRcdFx0XHRcdFx0Ly8gbm9ybWFsSW1hZ2VQYXRoOlwic3RhdGljL2JnLmpwZWdcIiAgLy8g6K6+572uYnV0dG9u5Zu+54mH6Lev5b6EXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOlwiaW1hZ2VWaWV3XCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjUwLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoyNSxcblx0XHRcdFx0XHRcdFx0cmlnaHQ6LTEwMCxcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAtMTAwLFxuXHRcdFx0XHRcdFx0XHRpbWFnZVBhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHRcdH1dXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5qdi5hZGRDdXN0b21WaWV3c0NsaWNrQ2FsbGJhY2soaWQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnY3VzdG9tVmlld2NsaWNrJyxcImlkOlwiK2lkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRzZXRMb2dCdG5UZXh0OlwiIOaegeWFieiupOivgea1i+ivlSBcIixcblx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdHNldExvZ29JbWdQYXRoRnJvbUpzOlwic3RhdGljL3dlaXhpbi5wbmdcIixcblx0XHRcdFx0XHRzZXRMb2dCdG5JbWdQYXRoRnJvbUpzOlwic3RhdGljL2xvZ2luLnBuZ1wiLFxuXHRcdFx0XHRcdHNldEF1dGhCR0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvYmcuanBlZ1wiLFxuXHRcdFx0XHRcdHNldFN0YXR1c0JhclRyYW5zcGFyZW50OnRydWUsXG5cdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdHR5cGU6XCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRmaW5pc2hGbGFnOmZhbHNlLFxuXHRcdFx0XHRcdFx0aWQ6XCJpZDFcIixcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCxcblx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYl0dlwiLFxuXHRcdFx0XHRcdFx0dGV4dFNpemU6MjAsXG5cdFx0XHRcdFx0XHRhbGlnbjoxNSxcblx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMTAwLDAsMF0sXG5cdFx0XHRcdFx0XHRiZ0NvbG9yOjB4ZmY3YjY4ZWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6XCJpbWFnZVwiLFxuXHRcdFx0XHRcdFx0ZmluaXNoRmxhZzp0cnVlLFxuXHRcdFx0XHRcdFx0aWQ6XCJpZDJcIixcblx0XHRcdFx0XHRcdHdpZHRoOjUwLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OjUwLFxuXHRcdFx0XHRcdFx0YWxpZ246MTMsXG5cdFx0XHRcdFx0XHRtYXJnaW5zOlswLDAsMCwwXSxcblx0XHRcdFx0XHRcdGJnSW1nUGF0aDpcInN0YXRpYy9xcS5wbmdcIlxuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2V0Q3VzdG9tRGlhbG9nOmZ1bmN0aW9uKCl7XG5cdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdpT1Moe1xuXHRcdFx0XHRcdG5hdkN1c3RvbTp0cnVlLFxuXHRcdFx0XHRcdGF1dG9MYXlvdXQ6dHJ1ZSxcblx0XHRcdFx0XHRzaG93V2luZG93OnRydWUsXG5cdFx0XHRcdFx0d2luZG93Q29uc3RyYWludHM6WzAsMCwzMDAsMzAwXSxcblx0XHRcdFx0XHR3aW5kb3dCYWNrZ3JvdW5kQWxwaGE6IDAuMyxcblx0XHRcdFx0XHQvL2xvZ29cblx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0bG9nb0NvbnN0cmFpbnRzOlswLC0xMDAsNjAsNjBdLFxuXHRcdFx0XHRcdC8vbnVtYmVyXG5cdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTQyLDIwMCwxNF0sXG5cdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdHNsb2dhbkNvbnN0cmFpbnRzOlswLC0yMCwyMDAsMTRdLFxuXHRcdFx0XHRcdC8v55m75b2V5oyJ6ZKuXG5cdFx0XHRcdFx0bG9nQnRuQ29uc3RyYWludHM6WzAsMjAsMjIwLDQwXSxcblx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5LiA6ZSu55m75b2VXCIsXG5cdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdHdpbmRvd0Nvcm5lclJhZGl1czoxMCxcblx0XHRcdFx0XHRwcml2YWN5Q29uc3RyYWludHM6WzAsMTAwLDIwMCw0MF0sXG5cdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTAwLDEwLDEwXSxcblx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkNvbnN0cmFpbnRzOlstMTM1LC0xMzUsMjAsMjBdLFxuXHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkltZ3M6W1wic3RhdGljL3dpbmRvd0Nsb3NlXCIsXCJzdGF0aWMvd2luZG93Q2xvc2VcIl0sXG5cdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEltYWdlOlwic3RhdGljL2JnLmpwZWdcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRzZXRMb2dCdG5UZXh0OlwiIOaegeWFieiupOivgea1i+ivleW8ueeqlyBcIixcblx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdHNldERpYWxvZ1RoZW1lOlszMDAsIDQwMCwgMCwgMCwgZmFsc2VdLFxuXHRcdFx0XHRcdHNldExvZ29JbWdQYXRoOlwic3RhdGljL2JpZy5qcGdcIixcblx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRwcml2YWN5TmVlZENsb3NlOnRydWUsICAgICAgICAgICAgICAgICAgICAgICAvL+W8ueeql+aYr+WQpumcgOimgeWFs+mXreaMiemSriBcblx0XHRcdFx0XHRwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRzaG93TW9kYWw6ZnVuY3Rpb24odGl0bGUsY29udGVudCl7XG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdCAgICB0aXRsZSxcblx0XHRcdCAgICBjb250ZW50LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLm1zZyA9IGAke3RpdGxlfSA6JHtjb250ZW50fWA7XG5cdFx0fSxcblx0XHQvLyDojrflj5bpqozor4HnoIFcblx0XHRnZXRDb2RlOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmdldENvZGUoe1xuXHRcdFx0XHRwaG9uZU51bWJlciA6ICBcIjE4OTI1MjQxMTExXCIsIC8v5Zyo5q2k5pu/5o2i5L2g55qEcGhvbmVOdW1iZXJcblx0XHRcdFx0c2lnbklEIDogXCIxXCIsICAgICAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEc2lnbklEXG5cdFx0XHRcdHRlbXBsYXRlSUQgOiBcIjFcIiAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEdGVtcGxhdGVJRFxuXHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2dldENvZGUnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdldENvZGVFdmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiuvue9ruWJjeWQjuS4pOasoeiOt+WPlumqjOivgeeggeeahOaXtumXtOmXtOmalFxuXHRcdHNldFRpbWVXaXRoQ29uZmlnOmZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmp2LnNldFRpbWVXaXRoQ29uZmlnKDEwMDApXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

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
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
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
/*!**************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ0s7QUFDaEssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***************************************************************************************************************************!*\
  !*** D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1oQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Workspace/uniapp/code/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);