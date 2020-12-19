(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*******************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \**********************************************************************************************************/
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
/*!*********************************************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');var _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv };\n\n  },\n  onLoad: function onLoad() {\n  },\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false },\n      function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000 },\n      function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:90\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: true,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000 },\n\n          {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true, // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          },\n          {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\" }] });\n\n\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setLogoImgPathFromJs: \"static/weixin.png\",\n          setLogBtnImgPathFromJs: \"static/login.png\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setLoadingViewEnable: true,\n          setStatusBarTransparent: true,\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee },\n\n          {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\" }] });\n\n\n      }\n    },\n    autoLayoutUI: function autoLayoutUI() {//开发者可以自己布局授权页视图UI控件\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: false,\n          autoLayout: true,\n          showWindow: false,\n          navReturnHidden: false,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -200, 60, 60],\n          //number\n          numberConstraints: [0, -132, 200, 14],\n          //slogn\n          sloganConstraints: [0, -112, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, -80, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          privacyConstraints: [0, 180, 200, 40],\n          checkViewConstraints: [-108, 180, 10, 10],\n          loadingConstraints: [0, 0, 20, 20] });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          // setNavColor:0xff000000,\n          // setLogBtnText:\" 极光认证测试弹窗 \",\n          // setPrivacyState:false,\n          // setAppPrivacyColor:[0xff00f000,0xff000000],\n          // setDialogTheme:[300, 400, 0, 0, false],\n          // setLogoImgPathFromJs:\"static/big.jpg\",\n          // setAuthBGImgPathFromJs:\"static/bg.jpeg\",\n          // setDimAmount: 0.5,\n          // privacyNeedClose:true,           //弹窗是否需要关闭按钮 \n          // privacyCloseTheme:[10, 60, 0, 0],            //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n\n\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\" });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPathFromJs: \"static/big.jpg\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setDimAmount: 0.5,\n          privacyNeedClose: true, //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n    },\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content });\n\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\", //在此替换你的phoneNumber\n        signID: \"1\", //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:283\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEscUQ7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsYUFGQTtBQUdBLFlBSEE7O0FBS0EsR0FQQTtBQVFBLFFBUkEsb0JBUUE7QUFDQSxHQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDJCQUZBO0FBR0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQWRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXJCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBNUJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FuQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQTFDQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQSxLQTlDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEscUJBRkE7QUFHQTtBQUNBO0FBQ0EsT0FMQSxFQUtBO0FBQ0E7QUFDQSxPQVBBO0FBUUEsS0ExREE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQUNBLDhCQURBO0FBRUEsOEJBRkE7QUFHQSw0QkFIQTtBQUlBLG1EQUpBO0FBS0E7QUFDQSx5QkFEQTtBQUVBLHNCQUZBO0FBR0Esc0JBSEE7QUFJQSxvQkFKQTtBQUtBLHFCQUxBO0FBTUEsdUNBTkE7QUFPQSw0QkFQQTtBQVFBLHdCQVJBO0FBU0EsNkJBVEE7QUFVQSw0QkFWQTtBQVdBLDRCQVhBO0FBWUEsaUNBWkE7O0FBY0E7QUFDQSwwQkFEQTtBQUVBLDRCQUZBO0FBR0Esc0JBSEE7QUFJQSxzQkFKQTtBQUtBLGlDQUxBO0FBTUEsNEJBTkE7QUFPQSxvQkFQQTtBQVFBLHdCQVJBO0FBU0EseUJBVEE7QUFVQSwwQkFWQSxFQVVBO0FBQ0EsaURBWEEsQ0FXQTtBQUNBO0FBWkEsV0FkQTtBQTRCQTtBQUNBLDZCQURBO0FBRUEscUJBRkE7QUFHQSxzQkFIQTtBQUlBLDRCQUpBO0FBS0EsdUJBTEE7QUFNQSx3QkFOQTtBQU9BLHNDQVBBLEVBNUJBLENBTEE7OztBQTJDQSxPQTVDQSxNQTRDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQSxpQ0FEQTtBQUVBLG1DQUZBO0FBR0EsZ0NBSEE7QUFJQSxzREFKQTtBQUtBLG1EQUxBO0FBTUEsb0RBTkE7QUFPQSxrREFQQTtBQVFBLG9DQVJBO0FBU0EsdUNBVEE7QUFVQTtBQUNBLHdCQURBO0FBRUEsNkJBRkE7QUFHQSxxQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSx5QkFOQTtBQU9BLHdCQVBBO0FBUUEscUJBUkE7QUFTQSxtQ0FUQTtBQVVBLCtCQVZBOztBQVlBO0FBQ0EseUJBREE7QUFFQSw0QkFGQTtBQUdBLHFCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHFCQU5BO0FBT0EsaUNBUEE7QUFRQSxzQ0FSQSxFQVpBLENBVkE7OztBQWlDQTtBQUNBLEtBcEpBO0FBcUpBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7QUFHQSwyQkFIQTtBQUlBLGdDQUpBO0FBS0E7QUFDQSxvQ0FOQTtBQU9BLDRDQVBBO0FBUUE7QUFDQSwrQ0FUQTtBQVVBO0FBQ0EsK0NBWEE7QUFZQTtBQUNBLDhDQWJBO0FBY0EsNEJBZEE7QUFlQSxtQ0FmQTtBQWdCQSwrQ0FoQkE7QUFpQkEsbURBakJBO0FBa0JBLDRDQWxCQTs7QUFvQkEsT0FyQkEsTUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTs7OztBQUlBLEtBNUxBO0FBNkxBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsMEJBRkE7QUFHQSwwQkFIQTtBQUlBLDZDQUpBO0FBS0Esb0NBTEE7QUFNQTtBQUNBLG9DQVBBO0FBUUEsNENBUkE7QUFTQTtBQUNBLDhDQVZBO0FBV0E7QUFDQSw4Q0FaQTtBQWFBO0FBQ0EsNkNBZEE7QUFlQSw0QkFmQTtBQWdCQSxtQ0FoQkE7QUFpQkEsZ0NBakJBO0FBa0JBLCtDQWxCQTtBQW1CQSxtREFuQkE7QUFvQkEseURBcEJBO0FBcUJBLDRDQXJCQTtBQXNCQSwwRUF0QkE7QUF1QkEsaURBdkJBOztBQXlCQSxPQTFCQSxNQTBCQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxxQ0FGQTtBQUdBLGdDQUhBO0FBSUEsc0RBSkE7QUFLQSxpREFMQTtBQU1BLGdEQU5BO0FBT0Esa0RBUEE7QUFRQSwyQkFSQTtBQVNBLGdDQVRBLEVBU0E7QUFDQSwyQ0FWQSxDQVVBO0FBVkE7QUFZQTs7QUFFQSxLQXZPQTtBQXdPQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx3QkFGQTs7QUFJQTtBQUNBLEtBOU9BO0FBK09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREEsRUFDQTtBQUNBLG1CQUZBLEVBRUE7QUFDQSx1QkFIQSxDQUdBO0FBSEEsU0FJQTtBQUNBO0FBQ0EsT0FOQSxFQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0EzUEE7QUE0UEE7QUFDQTtBQUNBO0FBQ0EsS0EvUEEsRUFWQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJkZWJ1ZygpXCI+6K6+572uZGVidWfmqKHlvI88L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiaW5pdCgpXCI+5Yid5aeL5YyWPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImlzSW5pdFN1Y2Nlc3MoKVwiPuWIneWni+WMluaYr+WQpuaIkOWKnzwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJjaGVja1ZlcmlmeUVuYWJsZSgpXCI+5piv5ZCm5pSv5oyB6aqM6K+BPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImdldFRva2VuKClcIj7ojrflj5Z0b2tlbjwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJwcmVMb2dpbigpXCI+5LiA6ZSu55m75b2V6aKE5Y+W5Y+3PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImNsZWFyUHJlTG9naW5DYWNoZSgpXCI+5riF6Zmk6aKE5Y+W5Y+357yT5a2YPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImxvZ2luQXV0aCgpXCI+6K+35rGC5o6I5p2D5LiA6ZSu55m75b2VPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInNldEN1c3RvbVVJV2l0aENvbmZpZygpXCI+6Ieq5a6a5LmJ5o6I5p2D6aG16Z2i5qC35byPPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInNldEN1c3RvbURpYWxvZygpXCI+6Ieq5a6a5LmJ5by556qX5o6I5p2D6aG1PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImF1dG9MYXlvdXRVSSgpXCI+6Ieq5Yqo5biD5bGA5o6I5p2D6aG1PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImdldENvZGUoKVwiPuiOt+WPlumqjOivgeeggTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzZXRUaW1lV2l0aENvbmZpZygpXCI+6K6+572u6I635Y+W6aqM6K+B56CB5pe26Ze06Ze06ZqUPC9idXR0b24+XG5cdFx0PHZpZXcgY2xhc3M9XCJtc2ctYm94XCIgPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJtc2dcIj57e21zZ319PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Y29uc3QganYgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignSkctSlZlcmlmaWNhdGlvbicpXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHRcdG1zZzogXCJcIixcblx0XHRcdFx0anZcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOiuvue9riBkZWJ1ZyDmqKHlvI9cblx0XHRcdGRlYnVnOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuc2V0RGVidWdNb2RlKHRydWUpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWIneWni+WMllxuXHRcdFx0aW5pdDpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaW5pdCh7XG5cdFx0XHRcdFx0dGltZW91dDo3MDAwLFxuXHRcdFx0XHRcdGlzUHJvZHVjdGlvbjpmYWxzZSxcblx0XHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaW5pdCcsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOaYr+WQpuWIneWni+WMluaIkOWKn1xuXHRcdFx0aXNJbml0U3VjY2VzczpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaXNJbml0U3VjY2VzcyhyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaXNJbml0U3VjY2VzcycsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5b2T5YmN572R57uc5piv5ZCm5pSv5oyB6K6k6K+BXG5cdFx0XHRjaGVja1ZlcmlmeUVuYWJsZTpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuY2hlY2tWZXJpZnlFbmFibGUocmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2NoZWNrVmVyaWZ5RW5hYmxlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5borqTor4EgdG9rZW5cblx0XHRcdGdldFRva2VuOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0c2VsZi5qdi5nZXRUb2tlbig1MDAwLHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRUb2tlbicsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2V6aKE5Y+W5Y+3XG5cdFx0XHRwcmVMb2dpbjpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYucHJlTG9naW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgncHJlTG9naW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOa4hemZpOmihOWPluWPt+e8k+WtmFxuXHRcdFx0Y2xlYXJQcmVMb2dpbkNhY2hlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuY2xlYXJQcmVMb2dpbkNhY2hlKCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2VXG5cdFx0XHRsb2dpbkF1dGg6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmxvZ2luQXV0aCh7XG5cdFx0XHRcdFx0YXV0b0ZpbmlzaDp0cnVlLFxuXHRcdFx0XHRcdHRpbWVvdXQ6NTAwMFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdsb2dpbkF1dGgnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9LGV2ZW50PT57XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbkF1dGhldmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOiHquWumuS5ieaOiOadg+mhtemdoiBVSSDmoLflvI9cblx0XHRcdHNldEN1c3RvbVVJV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuanYuYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrKGlkPT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2N1c3RvbVZpZXdjbGljaycsXCJpZDpcIitpZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIil7XG5cdFx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdpT1Moe1xuXHRcdFx0XHRcdFx0bmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdGxvZ0J0blRleHQ6XCLmnoHlhYnorqTor4HmtYvor5VcIixcblx0XHRcdFx0XHRcdHByaXZhY3lTdGF0ZTp0cnVlLFxuXHRcdFx0XHRcdFx0YXBwUHJpdmFjeUNvbG9yOlsweGZmMDAwMjAwLDB4ZmYwMDAwMDBdLFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdFx0XHR0eXBlOlwibGFiZWxcIixcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDoxMjAsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjIwLFxuXHRcdFx0XHRcdFx0XHRcdHRvcDozMjAsXG5cdFx0XHRcdFx0XHRcdFx0bGVmdDoxMDAsXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOjB4ZmY3YjY4ZWUsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDpcIuiHquWumuS5iWxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dEZvbnQ6MjAsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWdubWVudDoxNSxcblx0XHRcdFx0XHRcdFx0XHRudW1iZXJPZkxpbmVzOjIsXG5cdFx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjEwLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOlwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IFwiYnV0dG9uVGVzdFwiLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOjE4MCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6NDQsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dENvbG9yOjB4ZmYwMDAwMDAsXG5cdFx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjIyLFxuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6NTAsXG5cdFx0XHRcdFx0XHRcdFx0Ym90dG9tOiAtMTAwLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOlwi54K55Ye75rWL6K+VXCIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGaW5pc2g6dHJ1ZSwgIC8vIOaYr+WQpuWcqOaOiOadg+mhtemdoumAmui/h+iHquWumuS5ieaOp+S7tmJ1dHRvbueahOeCueWHu+WFs+mXreaOiOadg+mhtemdolxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZVBhdGg6IFwic3RhdGljL2JpZy5qcGdcIiwgLy8gYnV0dG9u5q2j5bi45oOF5Ya15LiL6IOM5pmv5Zu+54mH6Lev5b6EXG5cdFx0XHRcdFx0XHRcdFx0Ly8gbm9ybWFsSW1hZ2VQYXRoOlwic3RhdGljL2JnLmpwZWdcIiAgLy8g6K6+572uYnV0dG9u5Zu+54mH6Lev5b6EXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOlwiaW1hZ2VWaWV3XCIsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjUwLFxuXHRcdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoyNSxcblx0XHRcdFx0XHRcdFx0XHRyaWdodDotMTAwLFxuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTEwMCxcblx0XHRcdFx0XHRcdFx0XHRpbWFnZVBhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LmFkZEN1c3RvbVZpZXdzQ2xpY2tDYWxsYmFjayhpZD0+e1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2N1c3RvbVZpZXdjbGljaycsXCJpZDpcIitpZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdBbmRyb2lkKHtcblx0XHRcdFx0XHRcdHNldE5hdkNvbG9yOjB4ZmYwMDAwMDAsXG5cdFx0XHRcdFx0XHRzZXRMb2dCdG5UZXh0OlwiIOaegeWFieiupOivgea1i+ivlSBcIixcblx0XHRcdFx0XHRcdHNldFByaXZhY3lTdGF0ZTpmYWxzZSxcblx0XHRcdFx0XHRcdHNldEFwcFByaXZhY3lDb2xvcjpbMHhmZjAwZjAwMCwweGZmMDAwMDAwXSxcblx0XHRcdFx0XHRcdHNldExvZ29JbWdQYXRoRnJvbUpzOlwic3RhdGljL3dlaXhpbi5wbmdcIixcblx0XHRcdFx0XHRcdHNldExvZ0J0bkltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvbG9naW4ucG5nXCIsXG5cdFx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdHNldExvYWRpbmdWaWV3RW5hYmxlOnRydWUsXG5cdFx0XHRcdFx0XHRzZXRTdGF0dXNCYXJUcmFuc3BhcmVudDp0cnVlLFxuXHRcdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdFx0dHlwZTpcInRleHRcIixcblx0XHRcdFx0XHRcdFx0ZmluaXNoRmxhZzpmYWxzZSxcblx0XHRcdFx0XHRcdFx0aWQ6XCJpZDFcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTAwLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYl0dlwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0U2l6ZToyMCxcblx0XHRcdFx0XHRcdFx0YWxpZ246MTUsXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMTAwLDAsMF0sXG5cdFx0XHRcdFx0XHRcdGJnQ29sb3I6MHhmZjdiNjhlZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTpcImltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6dHJ1ZSxcblx0XHRcdFx0XHRcdFx0aWQ6XCJpZDJcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0YWxpZ246MTMsXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMCwwLDBdLFxuXHRcdFx0XHRcdFx0XHRiZ0ltZ1BhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhdXRvTGF5b3V0VUk6ZnVuY3Rpb24oKXsgLy/lvIDlj5HogIXlj6/ku6Xoh6rlt7HluIPlsYDmjojmnYPpobXop4blm75VSeaOp+S7tlxuXHRcdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0XHRuYXZDdXN0b206ZmFsc2UsXG5cdFx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0XHRzaG93V2luZG93OmZhbHNlLFxuXHRcdFx0XHRcdFx0bmF2UmV0dXJuSGlkZGVuOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0XHRsb2dvQ29uc3RyYWludHM6WzAsLTIwMCw2MCw2MF0sXG5cdFx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTEzMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdFx0c2xvZ2FuQ29uc3RyYWludHM6WzAsLTExMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly/nmbvlvZXmjInpkq5cblx0XHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLC04MCwyMjAsNDBdLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdFx0cHJpdmFjeUNvbnN0cmFpbnRzOlswLDE4MCwyMDAsNDBdLFxuXHRcdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTgwLDEwLDEwXSxcblx0XHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0Ly8gc2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdC8vIHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdFx0Ly8gc2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly8gc2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0Ly8gc2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0XHQvLyBzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0XHQvLyBzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdC8vIHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdFx0Ly8gcHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHQvLyBwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2V0Q3VzdG9tRGlhbG9nOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRcdG5hdkN1c3RvbTp0cnVlLFxuXHRcdFx0XHRcdFx0YXV0b0xheW91dDp0cnVlLFxuXHRcdFx0XHRcdFx0c2hvd1dpbmRvdzp0cnVlLFxuXHRcdFx0XHRcdFx0d2luZG93Q29uc3RyYWludHM6WzAsMCwzMDAsMzAwXSxcblx0XHRcdFx0XHRcdHdpbmRvd0JhY2tncm91bmRBbHBoYTogMC4zLFxuXHRcdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0XHRsb2dvQ29uc3RyYWludHM6WzAsLTEwMCw2MCw2MF0sXG5cdFx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTQyLDIwMCwxNF0sXG5cdFx0XHRcdFx0XHQvL3Nsb2duXG5cdFx0XHRcdFx0XHRzbG9nYW5Db25zdHJhaW50czpbMCwtMjAsMjAwLDE0XSxcblx0XHRcdFx0XHRcdC8v55m75b2V5oyJ6ZKuXG5cdFx0XHRcdFx0XHRsb2dCdG5Db25zdHJhaW50czpbMCwyMCwyMjAsNDBdLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdFx0d2luZG93Q29ybmVyUmFkaXVzOjEwLFxuXHRcdFx0XHRcdFx0cHJpdmFjeUNvbnN0cmFpbnRzOlswLDEwMCwyMDAsNDBdLFxuXHRcdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTAwLDEwLDEwXSxcblx0XHRcdFx0XHRcdHdpbmRvd0Nsb3NlQnRuQ29uc3RyYWludHM6Wy0xMzUsLTEzNSwyMCwyMF0sXG5cdFx0XHRcdFx0XHRsb2FkaW5nQ29uc3RyYWludHM6WzAsMCwyMCwyMF0sXG5cdFx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkltZ3M6W1wic3RhdGljL3dpbmRvd0Nsb3NlXCIsXCJzdGF0aWMvd2luZG93Q2xvc2VcIl0sXG5cdFx0XHRcdFx0XHR3aW5kb3dCYWNrZ3JvdW5kSW1hZ2U6XCJzdGF0aWMvYmcuanBlZ1wiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdBbmRyb2lkKHtcblx0XHRcdFx0XHRcdHNldE5hdkNvbG9yOjB4ZmYwMDAwMDAsXG5cdFx0XHRcdFx0XHRzZXRMb2dCdG5UZXh0OlwiIOaegeWFieiupOivgea1i+ivleW8ueeqlyBcIixcblx0XHRcdFx0XHRcdHNldFByaXZhY3lTdGF0ZTpmYWxzZSxcblx0XHRcdFx0XHRcdHNldEFwcFByaXZhY3lDb2xvcjpbMHhmZjAwZjAwMCwweGZmMDAwMDAwXSxcblx0XHRcdFx0XHRcdHNldERpYWxvZ1RoZW1lOlszMDAsIDQwMCwgMCwgMCwgZmFsc2VdLFxuXHRcdFx0XHRcdFx0c2V0TG9nb0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvYmlnLmpwZ1wiLFxuXHRcdFx0XHRcdFx0c2V0QXV0aEJHSW1nUGF0aEZyb21KczpcInN0YXRpYy9iZy5qcGVnXCIsXG5cdFx0XHRcdFx0XHRzZXREaW1BbW91bnQ6IDAuNSxcblx0XHRcdFx0XHRcdHByaXZhY3lOZWVkQ2xvc2U6dHJ1ZSwgICAgICAgICAgIC8v5by556qX5piv5ZCm6ZyA6KaB5YWz6Zet5oyJ6ZKuIFxuXHRcdFx0XHRcdFx0cHJpdmFjeUNsb3NlVGhlbWU6WzEwLCA2MCwgMCwgMF0sICAgICAgICAgICAgLy/lvLnnqpflhbPpl63mjInpkq7lgY/np7vph48gcHJpdmFjeU5lZWRDbG9zZeS4unRydWXml7bvvIzlv4Xpobvorr7nva7lroPnmoTlgY/np7vph49cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdHNob3dNb2RhbDpmdW5jdGlvbih0aXRsZSxjb250ZW50KXtcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdCAgICB0aXRsZSxcblx0XHRcdFx0ICAgIGNvbnRlbnQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm1zZyA9IGAke3RpdGxlfSA6JHtjb250ZW50fWA7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g6I635Y+W6aqM6K+B56CBXG5cdFx0XHRnZXRDb2RlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0c2VsZi5qdi5nZXRDb2RlKHtcblx0XHRcdFx0XHRwaG9uZU51bWJlciA6ICBcIjE4OTI1MjQxMTExXCIsIC8v5Zyo5q2k5pu/5o2i5L2g55qEcGhvbmVOdW1iZXJcblx0XHRcdFx0XHRzaWduSUQgOiBcIjFcIiwgICAgICAgICAgICAgLy/lnKjmraTmm7/mjaLkvaDnmoRzaWduSURcblx0XHRcdFx0XHR0ZW1wbGF0ZUlEIDogXCIxXCIgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHRlbXBsYXRlSURcblx0XHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnZ2V0Q29kZScsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0sZXZlbnQ9Pntcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImdldENvZGVFdmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOiuvue9ruWJjeWQjuS4pOasoeiOt+WPlumqjOivgeeggeeahOaXtumXtOmXtOmalFxuXHRcdFx0c2V0VGltZVdpdGhDb25maWc6ZnVuY3Rpb24oKXtcblx0XHRcdFx0dGhpcy5qdi5zZXRUaW1lV2l0aENvbmZpZygxMDAwKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LmNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRtYXJnaW46IDEwMHJweDtcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcblx0fVxuXHQubXNnLWJveHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cdC5tc2cge1xuXHRcdGZvbnQtc2l6ZTogMjVycHg7XG5cdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHR9XG5cdFx0XG5cdGJ1dHRvbntcblx0XHRtYXJnaW46IDVycHg7XG5cdH1cblx0XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

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
/*!*******************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************************************************************************************************************!*\
  !*** /Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/allan/Documents/GitHub/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);