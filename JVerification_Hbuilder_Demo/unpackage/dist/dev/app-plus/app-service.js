(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!******************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 9));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \*********************************************************************************************************************************/
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
/*!********************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6bee4b60&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiZWU0YjYwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvcWlud2VubGFuL0RvY3VtZW50cy9wbHVnaW5Db2RlL2hidWlsZGVyUGx1Z2luL2p2ZXJpZmljYXRpb24taGJ1aWxkZXItcGx1Z2luL0pWZXJpZmljYXRpb25fSGJ1aWxkZXJfRGVtby9wYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=6bee4b60&mpType=page ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6bee4b60&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6bee4b60_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=6bee4b60&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!********************************************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');var _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv };\n\n  },\n  onLoad: function onLoad() {\n  },\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false },\n      function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000 },\n      function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:89\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: true,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000 },\n\n          {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true, // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          },\n          {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\" }] });\n\n\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setLogoImgPath: \"static/weixin.png\",\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee },\n\n          {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\" }] });\n\n\n      }\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\" });\n\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPath: \"static/big.jpg\",\n          setAuthBGImgPath: \"static/bg.jpeg\",\n          privacyNeedClose: true, //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n\n    },\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content });\n\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\", //在此替换你的phoneNumber\n        signID: \"1\", //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:237\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxxRDtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxhQUZBO0FBR0EsWUFIQTs7QUFLQSxHQVBBO0FBUUEsUUFSQSxvQkFRQTtBQUNBLEdBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsMkJBRkE7QUFHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBZEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0E1QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQW5DQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBMUNBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBLEtBOUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0E7QUFDQSxPQUxBLEVBS0E7QUFDQTtBQUNBLE9BUEE7QUFRQSxLQTFEQTtBQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTs7QUFJQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw4QkFGQTtBQUdBLDRCQUhBO0FBSUEsbURBSkE7QUFLQTtBQUNBLHlCQURBO0FBRUEsc0JBRkE7QUFHQSxzQkFIQTtBQUlBLG9CQUpBO0FBS0EscUJBTEE7QUFNQSx1Q0FOQTtBQU9BLDRCQVBBO0FBUUEsd0JBUkE7QUFTQSw2QkFUQTtBQVVBLDRCQVZBO0FBV0EsNEJBWEE7QUFZQSxpQ0FaQTs7QUFjQTtBQUNBLDBCQURBO0FBRUEsNEJBRkE7QUFHQSxzQkFIQTtBQUlBLHNCQUpBO0FBS0EsaUNBTEE7QUFNQSw0QkFOQTtBQU9BLG9CQVBBO0FBUUEsd0JBUkE7QUFTQSx5QkFUQTtBQVVBLDBCQVZBLEVBVUE7QUFDQSxpREFYQSxDQVdBO0FBQ0E7QUFaQSxXQWRBO0FBNEJBO0FBQ0EsNkJBREE7QUFFQSxxQkFGQTtBQUdBLHNCQUhBO0FBSUEsNEJBSkE7QUFLQSx1QkFMQTtBQU1BLHdCQU5BO0FBT0Esc0NBUEEsRUE1QkEsQ0FMQTs7O0FBMkNBLE9BNUNBLE1BNENBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBLGlDQURBO0FBRUEsbUNBRkE7QUFHQSxnQ0FIQTtBQUlBLHNEQUpBO0FBS0EsNkNBTEE7QUFNQTtBQUNBLHdCQURBO0FBRUEsNkJBRkE7QUFHQSxxQkFIQTtBQUlBLHNCQUpBO0FBS0Esc0JBTEE7QUFNQSx5QkFOQTtBQU9BLHdCQVBBO0FBUUEscUJBUkE7QUFTQSxtQ0FUQTtBQVVBLCtCQVZBOztBQVlBO0FBQ0EseUJBREE7QUFFQSw0QkFGQTtBQUdBLHFCQUhBO0FBSUEscUJBSkE7QUFLQSxzQkFMQTtBQU1BLHFCQU5BO0FBT0EsaUNBUEE7QUFRQSxzQ0FSQSxFQVpBLENBTkE7OztBQTZCQTtBQUNBLEtBaEpBO0FBaUpBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsMEJBRkE7QUFHQSwwQkFIQTtBQUlBLDZDQUpBO0FBS0Esb0NBTEE7QUFNQTtBQUNBLG9DQVBBO0FBUUEsNENBUkE7QUFTQTtBQUNBLDhDQVZBO0FBV0E7QUFDQSw4Q0FaQTtBQWFBO0FBQ0EsNkNBZEE7QUFlQSw0QkFmQTtBQWdCQSxtQ0FoQkE7QUFpQkEsZ0NBakJBO0FBa0JBLCtDQWxCQTtBQW1CQSxtREFuQkE7QUFvQkEseURBcEJBO0FBcUJBLDRDQXJCQTtBQXNCQSwwRUF0QkE7QUF1QkEsaURBdkJBOztBQXlCQSxPQTFCQSxNQTBCQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxxQ0FGQTtBQUdBLGdDQUhBO0FBSUEsc0RBSkE7QUFLQSxpREFMQTtBQU1BLDBDQU5BO0FBT0EsNENBUEE7QUFRQSxnQ0FSQSxFQVFBO0FBQ0EsMkNBVEEsQ0FTQTtBQVRBO0FBV0E7O0FBRUEsS0ExTEE7QUEyTEE7QUFDQTtBQUNBLG9CQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSxLQWpNQTtBQWtNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBLEVBQ0E7QUFDQSxtQkFGQSxFQUVBO0FBQ0EsdUJBSEEsQ0FHQTtBQUhBLFNBSUE7QUFDQTtBQUNBLE9BTkEsRUFNQTtBQUNBO0FBQ0EsT0FSQTtBQVNBLEtBOU1BO0FBK01BO0FBQ0E7QUFDQTtBQUNBLEtBbE5BLEVBVkEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiZGVidWcoKVwiPuiuvue9rmRlYnVn5qih5byPPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImluaXQoKVwiPuWIneWni+WMljwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJpc0luaXRTdWNjZXNzKClcIj7liJ3lp4vljJbmmK/lkKbmiJDlip88L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiY2hlY2tWZXJpZnlFbmFibGUoKVwiPuaYr+WQpuaUr+aMgemqjOivgTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJnZXRUb2tlbigpXCI+6I635Y+WdG9rZW48L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwicHJlTG9naW4oKVwiPuS4gOmUrueZu+W9lemihOWPluWPtzwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJjbGVhclByZUxvZ2luQ2FjaGUoKVwiPua4hemZpOmihOWPluWPt+e8k+WtmDwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJsb2dpbkF1dGgoKVwiPuivt+axguaOiOadg+S4gOmUrueZu+W9lTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzZXRDdXN0b21VSVdpdGhDb25maWcoKVwiPuiHquWumuS5ieaOiOadg+mhtemdouagt+W8jzwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzZXRDdXN0b21EaWFsb2coKVwiPuiHquWumuS5ieW8ueeql+aOiOadg+mhtTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJnZXRDb2RlKClcIj7ojrflj5bpqozor4HnoIE8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic2V0VGltZVdpdGhDb25maWcoKVwiPuiuvue9ruiOt+WPlumqjOivgeeggeaXtumXtOmXtOmalDwvYnV0dG9uPlxuXHRcdDx2aWV3IGNsYXNzPVwibXNnLWJveFwiID5cblx0XHRcdDx0ZXh0IGNsYXNzPVwibXNnXCI+e3ttc2d9fTwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGNvbnN0IGp2ID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ0pHLUpWZXJpZmljYXRpb24nKVxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRpdGxlOiAnSGVsbG8nLFxuXHRcdFx0XHRtc2c6IFwiXCIsXG5cdFx0XHRcdGp2XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvLyDorr7nva4gZGVidWcg5qih5byPXG5cdFx0XHRkZWJ1ZzpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmp2LnNldERlYnVnTW9kZSh0cnVlKTtcblx0XHRcdH0sXG5cdFx0XHQvLyDliJ3lp4vljJZcblx0XHRcdGluaXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmluaXQoe1xuXHRcdFx0XHRcdHRpbWVvdXQ6NzAwMCxcblx0XHRcdFx0XHRpc1Byb2R1Y3Rpb246ZmFsc2UsXG5cdFx0XHRcdH0scmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2luaXQnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHQvLyDmmK/lkKbliJ3lp4vljJbmiJDlip9cblx0XHRcdGlzSW5pdFN1Y2Nlc3M6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmlzSW5pdFN1Y2Nlc3MocmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2lzSW5pdFN1Y2Nlc3MnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOW9k+WJjee9kee7nOaYr+WQpuaUr+aMgeiupOivgVxuXHRcdFx0Y2hlY2tWZXJpZnlFbmFibGU6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmNoZWNrVmVyaWZ5RW5hYmxlKHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjaGVja1ZlcmlmeUVuYWJsZScsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6I635Y+W6K6k6K+BIHRva2VuXG5cdFx0XHRnZXRUb2tlbjpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuZ2V0VG9rZW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnZ2V0VG9rZW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOS4gOmUrueZu+W9lemihOWPluWPt1xuXHRcdFx0cHJlTG9naW46ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LnByZUxvZ2luKDUwMDAscmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ3ByZUxvZ2luJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDmuIXpmaTpooTlj5blj7fnvJPlrZhcblx0XHRcdGNsZWFyUHJlTG9naW5DYWNoZTpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmp2LmNsZWFyUHJlTG9naW5DYWNoZSgpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOS4gOmUrueZu+W9lVxuXHRcdFx0bG9naW5BdXRoOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0c2VsZi5qdi5sb2dpbkF1dGgoe1xuXHRcdFx0XHRcdGF1dG9GaW5pc2g6dHJ1ZSxcblx0XHRcdFx0XHR0aW1lb3V0OjUwMDBcblx0XHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnbG9naW5BdXRoJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibG9naW5BdXRoZXZlbnQ6XCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDoh6rlrprkuYnmjojmnYPpobXpnaIgVUkg5qC35byPXG5cdFx0XHRzZXRDdXN0b21VSVdpdGhDb25maWc6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmp2LmFkZEN1c3RvbVZpZXdzQ2xpY2tDYWxsYmFjayhpZD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRcdG5hdkNvbG9yOjB4ZmYwMDAwMDAsXG5cdFx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5p6B5YWJ6K6k6K+B5rWL6K+VXCIsXG5cdFx0XHRcdFx0XHRwcml2YWN5U3RhdGU6dHJ1ZSxcblx0XHRcdFx0XHRcdGFwcFByaXZhY3lDb2xvcjpbMHhmZjAwMDIwMCwweGZmMDAwMDAwXSxcblx0XHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6MTIwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDoyMCxcblx0XHRcdFx0XHRcdFx0XHR0b3A6MzIwLFxuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6MTAwLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjoweGZmN2I2OGVlLFxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYlsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRGb250OjIwLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbm1lbnQ6MTUsXG5cdFx0XHRcdFx0XHRcdFx0bnVtYmVyT2ZMaW5lczoyLFxuXHRcdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoxMCxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6MHhmZjAwMDAwMFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBcImJ1dHRvblRlc3RcIixcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDoxODAsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjQ0LFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoyMixcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OjUwLFxuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTEwMCxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIueCueWHu+a1i+ivlVwiLFxuXHRcdFx0XHRcdFx0XHRcdGlzRmluaXNoOnRydWUsICAvLyDmmK/lkKblnKjmjojmnYPpobXpnaLpgJrov4foh6rlrprkuYnmjqfku7ZidXR0b27nmoTngrnlh7vlhbPpl63mjojmnYPpobXpnaJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2VQYXRoOiBcInN0YXRpYy9iaWcuanBnXCIsIC8vIGJ1dHRvbuato+W4uOaDheWGteS4i+iDjOaZr+WbvueJh+i3r+W+hFxuXHRcdFx0XHRcdFx0XHRcdC8vIG5vcm1hbEltYWdlUGF0aDpcInN0YXRpYy9iZy5qcGVnXCIgIC8vIOiuvue9rmJ1dHRvbuWbvueJh+i3r+W+hFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImltYWdlVmlld1wiLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOjUwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MjUsXG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6LTEwMCxcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VQYXRoOlwic3RhdGljL3FxLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdH1dXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5qdi5hZGRDdXN0b21WaWV3c0NsaWNrQ2FsbGJhY2soaWQ9Pntcblx0XHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0XHRzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0c2V0TG9nQnRuVGV4dDpcIiDmnoHlhYnorqTor4HmtYvor5UgXCIsXG5cdFx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0XHRzZXRBcHBQcml2YWN5Q29sb3I6WzB4ZmYwMGYwMDAsMHhmZjAwMDAwMF0sXG5cdFx0XHRcdFx0XHRzZXRMb2dvSW1nUGF0aDpcInN0YXRpYy93ZWl4aW4ucG5nXCIsXG5cdFx0XHRcdFx0XHRhZGRDdXN0b21WaWV3czpbe1xuXHRcdFx0XHRcdFx0XHR0eXBlOlwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRmaW5pc2hGbGFnOmZhbHNlLFxuXHRcdFx0XHRcdFx0XHRpZDpcImlkMVwiLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMDAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0dGV4dDpcIuiHquWumuS5iXR2XCIsXG5cdFx0XHRcdFx0XHRcdHRleHRTaXplOjIwLFxuXHRcdFx0XHRcdFx0XHRhbGlnbjoxNSxcblx0XHRcdFx0XHRcdFx0bWFyZ2luczpbMCwxMDAsMCwwXSxcblx0XHRcdFx0XHRcdFx0YmdDb2xvcjoweGZmN2I2OGVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOlwiaW1hZ2VcIixcblx0XHRcdFx0XHRcdFx0ZmluaXNoRmxhZzp0cnVlLFxuXHRcdFx0XHRcdFx0XHRpZDpcImlkMlwiLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDo1MCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjUwLFxuXHRcdFx0XHRcdFx0XHRhbGlnbjoxMyxcblx0XHRcdFx0XHRcdFx0bWFyZ2luczpbMCwwLDAsMF0sXG5cdFx0XHRcdFx0XHRcdGJnSW1nUGF0aDpcInN0YXRpYy9xcS5wbmdcIlxuXHRcdFx0XHRcdFx0fV0sXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHNldEN1c3RvbURpYWxvZzpmdW5jdGlvbigpe1xuXHRcdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0XHRuYXZDdXN0b206dHJ1ZSxcblx0XHRcdFx0XHRcdGF1dG9MYXlvdXQ6dHJ1ZSxcblx0XHRcdFx0XHRcdHNob3dXaW5kb3c6dHJ1ZSxcblx0XHRcdFx0XHRcdHdpbmRvd0NvbnN0cmFpbnRzOlswLDAsMzAwLDMwMF0sXG5cdFx0XHRcdFx0XHR3aW5kb3dCYWNrZ3JvdW5kQWxwaGE6IDAuMyxcblx0XHRcdFx0XHRcdC8vbG9nb1xuXHRcdFx0XHRcdFx0bG9nb0ltZzpcInN0YXRpYy9sb2dvLnBuZ1wiLFxuXHRcdFx0XHRcdFx0bG9nb0NvbnN0cmFpbnRzOlswLC0xMDAsNjAsNjBdLFxuXHRcdFx0XHRcdFx0Ly9udW1iZXJcblx0XHRcdFx0XHRcdG51bWJlckNvbnN0cmFpbnRzOlswLC00MiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdFx0c2xvZ2FuQ29uc3RyYWludHM6WzAsLTIwLDIwMCwxNF0sXG5cdFx0XHRcdFx0XHQvL+eZu+W9leaMiemSrlxuXHRcdFx0XHRcdFx0bG9nQnRuQ29uc3RyYWludHM6WzAsMjAsMjIwLDQwXSxcblx0XHRcdFx0XHRcdGxvZ0J0blRleHQ6XCLkuIDplK7nmbvlvZVcIixcblx0XHRcdFx0XHRcdGxvZ0J0blRleHRDb2xvcjoweDAwMDBGRixcblx0XHRcdFx0XHRcdHdpbmRvd0Nvcm5lclJhZGl1czoxMCxcblx0XHRcdFx0XHRcdHByaXZhY3lDb25zdHJhaW50czpbMCwxMDAsMjAwLDQwXSxcblx0XHRcdFx0XHRcdGNoZWNrVmlld0NvbnN0cmFpbnRzOlstMTA4LDEwMCwxMCwxMF0sXG5cdFx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkNvbnN0cmFpbnRzOlstMTM1LC0xMzUsMjAsMjBdLFxuXHRcdFx0XHRcdFx0bG9hZGluZ0NvbnN0cmFpbnRzOlswLDAsMjAsMjBdLFxuXHRcdFx0XHRcdFx0d2luZG93Q2xvc2VCdG5JbWdzOltcInN0YXRpYy93aW5kb3dDbG9zZVwiLFwic3RhdGljL3dpbmRvd0Nsb3NlXCJdLFxuXHRcdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEltYWdlOlwic3RhdGljL2JnLmpwZWdcIlxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0XHRzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0c2V0TG9nQnRuVGV4dDpcIiDmnoHlhYnorqTor4HmtYvor5XlvLnnqpcgXCIsXG5cdFx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0XHRzZXRBcHBQcml2YWN5Q29sb3I6WzB4ZmYwMGYwMDAsMHhmZjAwMDAwMF0sXG5cdFx0XHRcdFx0XHRzZXREaWFsb2dUaGVtZTpbMzAwLCA0MDAsIDAsIDAsIGZhbHNlXSxcblx0XHRcdFx0XHRcdHNldExvZ29JbWdQYXRoOlwic3RhdGljL2JpZy5qcGdcIixcblx0XHRcdFx0XHRcdHNldEF1dGhCR0ltZ1BhdGg6XCJzdGF0aWMvYmcuanBlZ1wiLFxuXHRcdFx0XHRcdFx0cHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHRwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2hvd01vZGFsOmZ1bmN0aW9uKHRpdGxlLGNvbnRlbnQpe1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0ICAgIHRpdGxlLFxuXHRcdFx0XHQgICAgY29udGVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubXNnID0gYCR7dGl0bGV9IDoke2NvbnRlbnR9YDtcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5bpqozor4HnoIFcblx0XHRcdGdldENvZGU6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmdldENvZGUoe1xuXHRcdFx0XHRcdHBob25lTnVtYmVyIDogIFwiMTg5MjUyNDExMTFcIiwgLy/lnKjmraTmm7/mjaLkvaDnmoRwaG9uZU51bWJlclxuXHRcdFx0XHRcdHNpZ25JRCA6IFwiMVwiLCAgICAgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHNpZ25JRFxuXHRcdFx0XHRcdHRlbXBsYXRlSUQgOiBcIjFcIiAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEdGVtcGxhdGVJRFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRDb2RlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZ2V0Q29kZUV2ZW50OlwiK0pTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6K6+572u5YmN5ZCO5Lik5qyh6I635Y+W6aqM6K+B56CB55qE5pe26Ze06Ze06ZqUXG5cdFx0XHRzZXRUaW1lV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmp2LnNldFRpbWVXaXRoQ29uZmlnKDEwMDApXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuY29udGVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbjogMTAwcnB4O1xuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xuXHR9XG5cdC5tc2ctYm94e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0Lm1zZyB7XG5cdFx0Zm9udC1zaXplOiAyNXJweDtcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdH1cblx0XHRcblx0YnV0dG9ue1xuXHRcdG1hcmdpbjogNXJweDtcblx0fVxuXHRcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

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
/*!******************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 8);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9xaW53ZW5sYW4vRG9jdW1lbnRzL3BsdWdpbkNvZGUvaGJ1aWxkZXJQbHVnaW4vanZlcmlmaWNhdGlvbi1oYnVpbGRlci1wbHVnaW4vSlZlcmlmaWNhdGlvbl9IYnVpbGRlcl9EZW1vL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/qinwenlan/Documents/pluginCode/hbuilderPlugin/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ })
],[[0,"app-config"]]]);