(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/main.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 14));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 15));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!*****************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages.json ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!****************************************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
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
          click: function ($event) {
            return _vm.debug()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 2 },
        on: {
          click: function ($event) {
            return _vm.init()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 3 },
        on: {
          click: function ($event) {
            return _vm.isInitSuccess()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 4 },
        on: {
          click: function ($event) {
            return _vm.checkVerifyEnable()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 5 },
        on: {
          click: function ($event) {
            return _vm.getToken()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 6 },
        on: {
          click: function ($event) {
            return _vm.preLogin()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 7 },
        on: {
          click: function ($event) {
            return _vm.clearPreLoginCache()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 8 },
        on: {
          click: function ($event) {
            return _vm.loginAuth()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 9 },
        on: {
          click: function ($event) {
            return _vm.setCustomUIWithConfig()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 10 },
        on: {
          click: function ($event) {
            return _vm.setCustomDialog()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 11 },
        on: {
          click: function ($event) {
            return _vm.autoLayoutUI()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 12 },
        on: {
          click: function ($event) {
            return _vm.getCode()
          },
        },
      }),
      _c("button", {
        attrs: { _i: 13 },
        on: {
          click: function ($event) {
            return _vm.setTimeWithConfig()
          },
        },
      }),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "msg-box"), attrs: { _i: 14 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(15, "sc", "msg"), attrs: { _i: 15 } },
            [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.msg)))]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');\nvar _default = {\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv\n    };\n  },\n  onLoad: function onLoad() {},\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false\n      }, function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000\n      }, function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:90\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: false,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          modalTransitionStyle: \"FlipHorizontal\",\n          appPrivacys: [\"头部文字\", [\"、\", \"自定义条款1\", \"https://www.taobao.com/\", \"内部自定义条款1\"], [\"、\", \"自定义条款2\", \"https://www.taobao.com/\", \"内部自定义条款2\"], [\"、\", \"自定义条款3\", \"https://www.taobao.com/\", \"内部自定义条款3\"], \"尾部文字\"],\n          isAlertPrivacyVC: true,\n          privacyCheckToastMessage: \"请点击同意协议\",\n          navTransparent: true,\n          agreementNavBackgroundColor: 0xff7b68ee,\n          privacyTextAlignment: \"center\",\n          // authPageBackgroudVideo:{\n          // \tvideoPath:\"static/videoBg.mp4\",\n          // \tvideoPlaceHolderImagePath:\"static/big.jpg\",\n          // },\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000\n          }, {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true,\n            // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          }, {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\"\n          }]\n        });\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setPrivacyNameAndUrlBeanList: [{\n            name: \"条款1\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\"\n          }, {\n            name: \"条款2\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \"\",\n            afterName: \"\"\n          }, {\n            name: \"条款3\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\"\n          }],\n          setAppPrivacyColor: [0xff4169E1, 0xffFF6347],\n          setLogoImgPathFromJs: \"static/weixin.png\",\n          setLogBtnImgPathFromJs: \"static/login.png\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setPrivacyNavReturnBtnPathFromJs: \"static/weixin.png\",\n          setPrivacyTextSize: 12,\n          setPrivacyCheckboxSize: 14,\n          enableHintToast: true,\n          enableHintToastText: \"自定义提示linux\",\n          setLoadingViewEnable: true,\n          setStatusBarTransparent: true,\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [0, 100, 0, 0],\n            bgColor: 0xff7b68ee\n          }, {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\"\n          }]\n        });\n      }\n    },\n    autoLayoutUI: function autoLayoutUI() {\n      //开发者可以自己布局授权页视图UI控件\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: false,\n          autoLayout: true,\n          showWindow: false,\n          navReturnHidden: false,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -200, 60, 60],\n          //number\n          numberConstraints: [0, -132, 200, 14],\n          //slogn\n          sloganConstraints: [0, -112, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, -80, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          privacyConstraints: [0, 180, 200, 40],\n          checkViewConstraints: [-108, 180, 10, 10],\n          loadingConstraints: [0, 0, 20, 20]\n        });\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          // setNavColor:0xff000000,\n          // setLogBtnText:\" 极光认证测试弹窗 \",\n          // setPrivacyState:false,\n          // setAppPrivacyColor:[0xff00f000,0xff000000],\n          // setDialogTheme:[300, 400, 0, 0, false],\n          // setLogoImgPathFromJs:\"static/big.jpg\",\n          // setAuthBGImgPathFromJs:\"static/bg.jpeg\",\n          // setDimAmount: 0.5,\n          // privacyNeedClose:true,           //弹窗是否需要关闭按钮 \n          // privacyCloseTheme:[10, 60, 0, 0],            //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          // privacyCheckToastMessage:\"请点击同意协议\",\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\"\n        });\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPathFromJs: \"static/big.jpg\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setDimAmount: 0.5,\n          privacyNeedClose: true,\n          //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n    },\n\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content\n      });\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\",\n        //在此替换你的phoneNumber\n        signID: \"1\",\n        //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:320\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImp2IiwidW5pIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsImRhdGEiLCJ0aXRsZSIsIm1zZyIsIm9uTG9hZCIsIm1ldGhvZHMiLCJkZWJ1ZyIsInNldERlYnVnTW9kZSIsImluaXQiLCJzZWxmIiwidGltZW91dCIsImlzUHJvZHVjdGlvbiIsInJlc3VsdCIsInNob3dNb2RhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc0luaXRTdWNjZXNzIiwiY2hlY2tWZXJpZnlFbmFibGUiLCJnZXRUb2tlbiIsInByZUxvZ2luIiwiY2xlYXJQcmVMb2dpbkNhY2hlIiwibG9naW5BdXRoIiwiYXV0b0ZpbmlzaCIsImV2ZW50Iiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnIiwiYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrIiwiaWQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwic2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TIiwibmF2Q29sb3IiLCJsb2dCdG5UZXh0IiwicHJpdmFjeVN0YXRlIiwiYXBwUHJpdmFjeUNvbG9yIiwibW9kYWxUcmFuc2l0aW9uU3R5bGUiLCJhcHBQcml2YWN5cyIsImlzQWxlcnRQcml2YWN5VkMiLCJwcml2YWN5Q2hlY2tUb2FzdE1lc3NhZ2UiLCJuYXZUcmFuc3BhcmVudCIsImFncmVlbWVudE5hdkJhY2tncm91bmRDb2xvciIsInByaXZhY3lUZXh0QWxpZ25tZW50IiwiYWRkQ3VzdG9tVmlld3MiLCJ0eXBlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dCIsInRleHRGb250IiwidGV4dEFsaWdubWVudCIsIm51bWJlck9mTGluZXMiLCJjb3JuZXJSYWRpdXMiLCJ0ZXh0Q29sb3IiLCJib3R0b20iLCJpc0ZpbmlzaCIsImJhY2tncm91bmRJbWFnZVBhdGgiLCJyaWdodCIsImltYWdlUGF0aCIsInNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQiLCJzZXROYXZDb2xvciIsInNldExvZ0J0blRleHQiLCJzZXRQcml2YWN5U3RhdGUiLCJzZXRQcml2YWN5TmFtZUFuZFVybEJlYW5MaXN0IiwibmFtZSIsInVybCIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJzZXRBcHBQcml2YWN5Q29sb3IiLCJzZXRMb2dvSW1nUGF0aEZyb21KcyIsInNldExvZ0J0bkltZ1BhdGhGcm9tSnMiLCJzZXRBdXRoQkdJbWdQYXRoRnJvbUpzIiwic2V0UHJpdmFjeU5hdlJldHVybkJ0blBhdGhGcm9tSnMiLCJzZXRQcml2YWN5VGV4dFNpemUiLCJzZXRQcml2YWN5Q2hlY2tib3hTaXplIiwiZW5hYmxlSGludFRvYXN0IiwiZW5hYmxlSGludFRvYXN0VGV4dCIsInNldExvYWRpbmdWaWV3RW5hYmxlIiwic2V0U3RhdHVzQmFyVHJhbnNwYXJlbnQiLCJmaW5pc2hGbGFnIiwidGV4dFNpemUiLCJhbGlnbiIsIm1hcmdpbnMiLCJiZ0NvbG9yIiwiYmdJbWdQYXRoIiwiYXV0b0xheW91dFVJIiwibmF2Q3VzdG9tIiwiYXV0b0xheW91dCIsInNob3dXaW5kb3ciLCJuYXZSZXR1cm5IaWRkZW4iLCJsb2dvSW1nIiwibG9nb0NvbnN0cmFpbnRzIiwibnVtYmVyQ29uc3RyYWludHMiLCJzbG9nYW5Db25zdHJhaW50cyIsImxvZ0J0bkNvbnN0cmFpbnRzIiwibG9nQnRuVGV4dENvbG9yIiwicHJpdmFjeUNvbnN0cmFpbnRzIiwiY2hlY2tWaWV3Q29uc3RyYWludHMiLCJsb2FkaW5nQ29uc3RyYWludHMiLCJzZXRDdXN0b21EaWFsb2ciLCJ3aW5kb3dDb25zdHJhaW50cyIsIndpbmRvd0JhY2tncm91bmRBbHBoYSIsIndpbmRvd0Nvcm5lclJhZGl1cyIsIndpbmRvd0Nsb3NlQnRuQ29uc3RyYWludHMiLCJ3aW5kb3dDbG9zZUJ0bkltZ3MiLCJ3aW5kb3dCYWNrZ3JvdW5kSW1hZ2UiLCJzZXREaWFsb2dUaGVtZSIsInNldERpbUFtb3VudCIsInByaXZhY3lOZWVkQ2xvc2UiLCJwcml2YWN5Q2xvc2VUaGVtZSIsImNvbnRlbnQiLCJnZXRDb2RlIiwicGhvbmVOdW1iZXIiLCJzaWduSUQiLCJ0ZW1wbGF0ZUlEIiwic2V0VGltZVdpdGhDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxFQUFFLEdBQUdDLEdBQUcsQ0FBQ0MsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7QUFBQSxlQUN2QztFQUNkQyxJQUFJLGtCQUFHO0lBQ04sT0FBTztNQUNOQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxHQUFHLEVBQUUsRUFBRTtNQUNQTCxFQUFFLEVBQUZBO0lBQ0QsQ0FBQztFQUNGLENBQUM7RUFDRE0sTUFBTSxvQkFBRyxDQUNULENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1I7SUFDQUMsS0FBSyxFQUFDLGlCQUFVO01BQ2YsSUFBSSxDQUFDUixFQUFFLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNEO0lBQ0FDLElBQUksRUFBQyxnQkFBVTtNQUNkLElBQUlDLElBQUksR0FBRyxJQUFJO01BQ2ZBLElBQUksQ0FBQ1gsRUFBRSxDQUFDVSxJQUFJLENBQUM7UUFDWkUsT0FBTyxFQUFDLElBQUk7UUFDWkMsWUFBWSxFQUFDO01BQ2QsQ0FBQyxFQUFDLFVBQUFDLE1BQU0sRUFBRTtRQUNUSCxJQUFJLENBQUNJLFNBQVMsQ0FBQyxNQUFNLEVBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxNQUFNLENBQUMsQ0FBQztNQUM5QyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBQ0Q7SUFDQUksYUFBYSxFQUFDLHlCQUFVO01BQ3ZCLElBQUlQLElBQUksR0FBRyxJQUFJO01BQ2ZBLElBQUksQ0FBQ1gsRUFBRSxDQUFDa0IsYUFBYSxDQUFDLFVBQUFK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QiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuY29uc3QganYgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignSkctSlZlcmlmaWNhdGlvbicpXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpdGxlOiAnSGVsbG8nLFxuXHRcdFx0bXNnOiBcIlwiLFxuXHRcdFx0anZcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC8vIOiuvue9riBkZWJ1ZyDmqKHlvI9cblx0XHRkZWJ1ZzpmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5qdi5zZXREZWJ1Z01vZGUodHJ1ZSk7XG5cdFx0fSxcblx0XHQvLyDliJ3lp4vljJZcblx0XHRpbml0OmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmluaXQoe1xuXHRcdFx0XHR0aW1lb3V0OjcwMDAsXG5cdFx0XHRcdGlzUHJvZHVjdGlvbjpmYWxzZSxcblx0XHRcdH0scmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdpbml0JyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0Ly8g5piv5ZCm5Yid5aeL5YyW5oiQ5YqfXG5cdFx0aXNJbml0U3VjY2VzczpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5pc0luaXRTdWNjZXNzKHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaXNJbml0U3VjY2VzcycsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g5b2T5YmN572R57uc5piv5ZCm5pSv5oyB6K6k6K+BXG5cdFx0Y2hlY2tWZXJpZnlFbmFibGU6ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYuY2hlY2tWZXJpZnlFbmFibGUocmVzdWx0PT57XG5cdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjaGVja1ZlcmlmeUVuYWJsZScsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0Ly8g6I635Y+W6K6k6K+BIHRva2VuXG5cdFx0Z2V0VG9rZW46ZnVuY3Rpb24oKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYuanYuZ2V0VG9rZW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2dldFRva2VuJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDkuIDplK7nmbvlvZXpooTlj5blj7dcblx0XHRwcmVMb2dpbjpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5wcmVMb2dpbig1MDAwLHJlc3VsdD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgncHJlTG9naW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOa4hemZpOmihOWPluWPt+e8k+WtmFxuXHRcdGNsZWFyUHJlTG9naW5DYWNoZTpmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5qdi5jbGVhclByZUxvZ2luQ2FjaGUoKTtcblx0XHR9LFxuXHRcdC8vIOS4gOmUrueZu+W9lVxuXHRcdGxvZ2luQXV0aDpmdW5jdGlvbigpe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5qdi5sb2dpbkF1dGgoe1xuXHRcdFx0XHRhdXRvRmluaXNoOnRydWUsXG5cdFx0XHRcdHRpbWVvdXQ6NTAwMFxuXHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2xvZ2luQXV0aCcsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHR9LGV2ZW50PT57XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwibG9naW5BdXRoZXZlbnQ6XCIrSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvLyDoh6rlrprkuYnmjojmnYPpobXpnaIgVUkg5qC35byPXG5cdFx0c2V0Q3VzdG9tVUlXaXRoQ29uZmlnOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzLmp2LmFkZEN1c3RvbVZpZXdzQ2xpY2tDYWxsYmFjayhpZD0+e1xuXHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnY3VzdG9tVmlld2NsaWNrJyxcImlkOlwiK2lkKTtcblx0XHRcdH0pO1xuXHRcdFx0aWYodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gXCJpb3NcIil7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRuYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdGxvZ0J0blRleHQ6XCLmnoHlhYnorqTor4HmtYvor5VcIixcblx0XHRcdFx0XHRwcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0YXBwUHJpdmFjeUNvbG9yOlsweGZmMDAwMjAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdG1vZGFsVHJhbnNpdGlvblN0eWxlOlwiRmxpcEhvcml6b250YWxcIixcblx0XHRcdFx0XHRhcHBQcml2YWN5czpbXG5cdFx0XHRcdFx0XHRcIuWktOmDqOaWh+Wtl1wiLFxuXHRcdFx0XHRcdFtcIuOAgVwiLFwi6Ieq5a6a5LmJ5p2h5qy+MVwiLFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbS9cIixcIuWGhemDqOiHquWumuS5ieadoeasvjFcIl0sXG5cdFx0XHRcdFx0W1wi44CBXCIsXCLoh6rlrprkuYnmnaHmrL4yXCIsXCJodHRwczovL3d3dy50YW9iYW8uY29tL1wiLFwi5YaF6YOo6Ieq5a6a5LmJ5p2h5qy+MlwiXSxcblx0XHRcdFx0XHRbXCLjgIFcIixcIuiHquWumuS5ieadoeasvjNcIixcImh0dHBzOi8vd3d3LnRhb2Jhby5jb20vXCIsXCLlhoXpg6joh6rlrprkuYnmnaHmrL4zXCJdLFxuXHRcdFx0XHRcdFwi5bC+6YOo5paH5a2XXCJdLFxuXHRcdFx0XHRcdGlzQWxlcnRQcml2YWN5VkM6dHJ1ZSxcblx0XHRcdFx0XHRwcml2YWN5Q2hlY2tUb2FzdE1lc3NhZ2U6XCLor7fngrnlh7vlkIzmhI/ljY/orq5cIixcblx0XHRcdFx0XHRuYXZUcmFuc3BhcmVudDp0cnVlLFxuXHRcdFx0XHRcdGFncmVlbWVudE5hdkJhY2tncm91bmRDb2xvcjoweGZmN2I2OGVlLFxuXHRcdFx0XHRcdHByaXZhY3lUZXh0QWxpZ25tZW50OlwiY2VudGVyXCIsXG5cdFx0XHRcdFx0Ly8gYXV0aFBhZ2VCYWNrZ3JvdWRWaWRlbzp7XG5cdFx0XHRcdFx0Ly8gXHR2aWRlb1BhdGg6XCJzdGF0aWMvdmlkZW9CZy5tcDRcIixcblx0XHRcdFx0XHQvLyBcdHZpZGVvUGxhY2VIb2xkZXJJbWFnZVBhdGg6XCJzdGF0aWMvYmlnLmpwZ1wiLFxuXHRcdFx0XHRcdC8vIH0sXG5cdFx0XHRcdFx0YWRkQ3VzdG9tVmlld3M6W3tcblx0XHRcdFx0XHRcdFx0dHlwZTpcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEyMCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjIwLFxuXHRcdFx0XHRcdFx0XHR0b3A6MzIwLFxuXHRcdFx0XHRcdFx0XHRsZWZ0OjEwMCxcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOjB4ZmY3YjY4ZWUsXG5cdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYlsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Rm9udDoyMCxcblx0XHRcdFx0XHRcdFx0dGV4dEFsaWdubWVudDoxNSxcblx0XHRcdFx0XHRcdFx0bnVtYmVyT2ZMaW5lczoyLFxuXHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0eXBlOlwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdGlkOiBcImJ1dHRvblRlc3RcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTgwLFxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6NDQsXG5cdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MjIsXG5cdFx0XHRcdFx0XHRcdGxlZnQ6NTAsXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogLTEwMCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6XCLngrnlh7vmtYvor5VcIixcblx0XHRcdFx0XHRcdFx0aXNGaW5pc2g6dHJ1ZSwgIC8vIOaYr+WQpuWcqOaOiOadg+mhtemdoumAmui/h+iHquWumuS5ieaOp+S7tmJ1dHRvbueahOeCueWHu+WFs+mXreaOiOadg+mhtemdolxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2VQYXRoOiBcInN0YXRpYy9iaWcuanBnXCIsIC8vIGJ1dHRvbuato+W4uOaDheWGteS4i+iDjOaZr+WbvueJh+i3r+W+hFxuXHRcdFx0XHRcdFx0XHQvLyBub3JtYWxJbWFnZVBhdGg6XCJzdGF0aWMvYmcuanBlZ1wiICAvLyDorr7nva5idXR0b27lm77niYfot6/lvoRcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6XCJpbWFnZVZpZXdcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0Y29ybmVyUmFkaXVzOjI1LFxuXHRcdFx0XHRcdFx0XHRyaWdodDotMTAwLFxuXHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdGltYWdlUGF0aDpcInN0YXRpYy9xcS5wbmdcIlxuXHRcdFx0XHRcdFx0fV1cblx0XHRcdFx0fSlcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLmp2LmFkZEN1c3RvbVZpZXdzQ2xpY2tDYWxsYmFjayhpZD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdBbmRyb2lkKHtcblx0XHRcdFx0XHRzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+VIFwiLFxuXHRcdFx0XHRcdHNldFByaXZhY3lTdGF0ZTpmYWxzZSxcblx0XHRcdFx0XHRzZXRQcml2YWN5TmFtZUFuZFVybEJlYW5MaXN0Olt7XG5cdFx0XHRcdFx0XHRuYW1lOlwi5p2h5qy+MVwiLFxuXHRcdFx0XHRcdFx0dXJsOlwiaHR0cHM6Ly93d3cuamlndWFuZy5jbi9hYm91dFwiLFxuXHRcdFx0XHRcdFx0YmVmb3JlTmFtZTpcIixcIixcblx0XHRcdFx0XHRcdGFmdGVyTmFtZTpcIixcIlxuXHRcdFx0XHRcdH0se1xuXHRcdFx0XHRcdFx0bmFtZTpcIuadoeasvjJcIixcblx0XHRcdFx0XHRcdHVybDpcImh0dHBzOi8vd3d3LmppZ3VhbmcuY24vYWJvdXRcIixcblx0XHRcdFx0XHRcdGJlZm9yZU5hbWU6XCJcIixcblx0XHRcdFx0XHRcdGFmdGVyTmFtZTpcIlwiXG5cdFx0XHRcdFx0fSx7XG5cdFx0XHRcdFx0XHRuYW1lOlwi5p2h5qy+M1wiLFxuXHRcdFx0XHRcdFx0dXJsOlwiaHR0cHM6Ly93d3cuamlndWFuZy5jbi9hYm91dFwiLFxuXHRcdFx0XHRcdFx0YmVmb3JlTmFtZTpcIixcIixcblx0XHRcdFx0XHRcdGFmdGVyTmFtZTpcIixcIlxuXHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdHNldEFwcFByaXZhY3lDb2xvcjpbMHhmZjQxNjlFMSwweGZmRkY2MzQ3XSxcblx0XHRcdFx0XHRzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy93ZWl4aW4ucG5nXCIsXG5cdFx0XHRcdFx0c2V0TG9nQnRuSW1nUGF0aEZyb21KczpcInN0YXRpYy9sb2dpbi5wbmdcIixcblx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRzZXRQcml2YWN5TmF2UmV0dXJuQnRuUGF0aEZyb21KczpcInN0YXRpYy93ZWl4aW4ucG5nXCIsXG5cdFx0XHRcdFx0c2V0UHJpdmFjeVRleHRTaXplOjEyLFxuXHRcdFx0XHRcdHNldFByaXZhY3lDaGVja2JveFNpemU6MTQsXG5cdFx0XHRcdFx0ZW5hYmxlSGludFRvYXN0OnRydWUsXG5cdFx0XHRcdFx0ZW5hYmxlSGludFRvYXN0VGV4dDpcIuiHquWumuS5ieaPkOekumxpbnV4XCIsXG5cdFx0XHRcdFx0c2V0TG9hZGluZ1ZpZXdFbmFibGU6dHJ1ZSxcblx0XHRcdFx0XHRzZXRTdGF0dXNCYXJUcmFuc3BhcmVudDp0cnVlLFxuXHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHR0eXBlOlwidGV4dFwiLFxuXHRcdFx0XHRcdFx0ZmluaXNoRmxhZzpmYWxzZSxcblx0XHRcdFx0XHRcdGlkOlwiaWQxXCIsXG5cdFx0XHRcdFx0XHR3aWR0aDoxMDAsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6NTAsXG5cdFx0XHRcdFx0XHR0ZXh0Olwi6Ieq5a6a5LmJdHZcIixcblx0XHRcdFx0XHRcdHRleHRTaXplOjIwLFxuXHRcdFx0XHRcdFx0YWxpZ246MTUsXG5cdFx0XHRcdFx0XHRtYXJnaW5zOlswLDEwMCwwLDBdLFxuXHRcdFx0XHRcdFx0YmdDb2xvcjoweGZmN2I2OGVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOlwiaW1hZ2VcIixcblx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6dHJ1ZSxcblx0XHRcdFx0XHRcdGlkOlwiaWQyXCIsXG5cdFx0XHRcdFx0XHR3aWR0aDo1MCxcblx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdGFsaWduOjEzLFxuXHRcdFx0XHRcdFx0bWFyZ2luczpbMCwwLDAsMF0sXG5cdFx0XHRcdFx0XHRiZ0ltZ1BhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHRcdGF1dG9MYXlvdXRVSTpmdW5jdGlvbigpeyAvL+W8gOWPkeiAheWPr+S7peiHquW3seW4g+WxgOaOiOadg+mhteinhuWbvlVJ5o6n5Lu2XG5cdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdpT1Moe1xuXHRcdFx0XHRcdG5hdkN1c3RvbTpmYWxzZSxcblx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0c2hvd1dpbmRvdzpmYWxzZSxcblx0XHRcdFx0XHRuYXZSZXR1cm5IaWRkZW46ZmFsc2UsXG5cdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0bG9nb0ltZzpcInN0YXRpYy9sb2dvLnBuZ1wiLFxuXHRcdFx0XHRcdGxvZ29Db25zdHJhaW50czpbMCwtMjAwLDYwLDYwXSxcblx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdG51bWJlckNvbnN0cmFpbnRzOlswLC0xMzIsMjAwLDE0XSxcblx0XHRcdFx0XHQvL3Nsb2duXG5cdFx0XHRcdFx0c2xvZ2FuQ29uc3RyYWludHM6WzAsLTExMiwyMDAsMTRdLFxuXHRcdFx0XHRcdC8v55m75b2V5oyJ6ZKuXG5cdFx0XHRcdFx0bG9nQnRuQ29uc3RyYWludHM6WzAsLTgwLDIyMCw0MF0sXG5cdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdGxvZ0J0blRleHRDb2xvcjoweDAwMDBGRixcblx0XHRcdFx0XHRwcml2YWN5Q29uc3RyYWludHM6WzAsMTgwLDIwMCw0MF0sXG5cdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTgwLDEwLDEwXSxcblx0XHRcdFx0XHRsb2FkaW5nQ29uc3RyYWludHM6WzAsMCwyMCwyMF0sXG5cdFx0XHRcdH0pXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdBbmRyb2lkKHtcblx0XHRcdFx0XHQvLyBzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdC8vIHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdC8vIHNldFByaXZhY3lTdGF0ZTpmYWxzZSxcblx0XHRcdFx0XHQvLyBzZXRBcHBQcml2YWN5Q29sb3I6WzB4ZmYwMGYwMDAsMHhmZjAwMDAwMF0sXG5cdFx0XHRcdFx0Ly8gc2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0Ly8gc2V0TG9nb0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvYmlnLmpwZ1wiLFxuXHRcdFx0XHRcdC8vIHNldEF1dGhCR0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvYmcuanBlZ1wiLFxuXHRcdFx0XHRcdC8vIHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdC8vIHByaXZhY3lOZWVkQ2xvc2U6dHJ1ZSwgICAgICAgICAgIC8v5by556qX5piv5ZCm6ZyA6KaB5YWz6Zet5oyJ6ZKuIFxuXHRcdFx0XHRcdC8vIHByaXZhY3lDbG9zZVRoZW1lOlsxMCwgNjAsIDAsIDBdLCAgICAgICAgICAgIC8v5by556qX5YWz6Zet5oyJ6ZKu5YGP56e76YePIHByaXZhY3lOZWVkQ2xvc2XkuLp0cnVl5pe277yM5b+F6aG76K6+572u5a6D55qE5YGP56e76YePXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcblx0XHRcdFxuXHRcdH0sXG5cdFx0c2V0Q3VzdG9tRGlhbG9nOmZ1bmN0aW9uKCl7XG5cdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0dGhpcy5qdi5zZXRDdXN0b21VSVdpdGhDb25maWdpT1Moe1xuXHRcdFx0XHRcdC8vIHByaXZhY3lDaGVja1RvYXN0TWVzc2FnZTpcIuivt+eCueWHu+WQjOaEj+WNj+iurlwiLFxuXHRcdFx0XHRcdG5hdkN1c3RvbTp0cnVlLFxuXHRcdFx0XHRcdGF1dG9MYXlvdXQ6dHJ1ZSxcblx0XHRcdFx0XHRzaG93V2luZG93OnRydWUsXG5cdFx0XHRcdFx0d2luZG93Q29uc3RyYWludHM6WzAsMCwzMDAsMzAwXSxcblx0XHRcdFx0XHR3aW5kb3dCYWNrZ3JvdW5kQWxwaGE6IDAuMyxcblx0XHRcdFx0XHQvL2xvZ29cblx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0bG9nb0NvbnN0cmFpbnRzOlswLC0xMDAsNjAsNjBdLFxuXHRcdFx0XHRcdC8vbnVtYmVyXG5cdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTQyLDIwMCwxNF0sXG5cdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdHNsb2dhbkNvbnN0cmFpbnRzOlswLC0yMCwyMDAsMTRdLFxuXHRcdFx0XHRcdC8v55m75b2V5oyJ6ZKuXG5cdFx0XHRcdFx0bG9nQnRuQ29uc3RyYWludHM6WzAsMjAsMjIwLDQwXSxcblx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5LiA6ZSu55m75b2VXCIsXG5cdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdHdpbmRvd0Nvcm5lclJhZGl1czoxMCxcblx0XHRcdFx0XHRwcml2YWN5Q29uc3RyYWludHM6WzAsMTAwLDIwMCw0MF0sXG5cdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTAwLDEwLDEwXSxcblx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkNvbnN0cmFpbnRzOlstMTM1LC0xMzUsMjAsMjBdLFxuXHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHR3aW5kb3dDbG9zZUJ0bkltZ3M6W1wic3RhdGljL3dpbmRvd0Nsb3NlXCIsXCJzdGF0aWMvd2luZG93Q2xvc2VcIl0sXG5cdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEltYWdlOlwic3RhdGljL2JnLmpwZWdcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRzZXRMb2dCdG5UZXh0OlwiIOaegeWFieiupOivgea1i+ivleW8ueeqlyBcIixcblx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdHNldERpYWxvZ1RoZW1lOlszMDAsIDQwMCwgMCwgMCwgZmFsc2VdLFxuXHRcdFx0XHRcdHNldExvZ29JbWdQYXRoRnJvbUpzOlwic3RhdGljL2JpZy5qcGdcIixcblx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRzZXREaW1BbW91bnQ6IDAuNSxcblx0XHRcdFx0XHRwcml2YWN5TmVlZENsb3NlOnRydWUsICAgICAgICAgICAvL+W8ueeql+aYr+WQpumcgOimgeWFs+mXreaMiemSriBcblx0XHRcdFx0XHRwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fSxcblx0XHRzaG93TW9kYWw6ZnVuY3Rpb24odGl0bGUsY29udGVudCl7XG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdCAgICB0aXRsZSxcblx0XHRcdCAgICBjb250ZW50LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLm1zZyA9IGAke3RpdGxlfSA6JHtjb250ZW50fWA7XG5cdFx0fSxcblx0XHQvLyDojrflj5bpqozor4HnoIFcblx0XHRnZXRDb2RlOmZ1bmN0aW9uKCl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZWxmLmp2LmdldENvZGUoe1xuXHRcdFx0XHRwaG9uZU51bWJlciA6ICBcIjE4OTI1MjQxMTExXCIsIC8v5Zyo5q2k5pu/5o2i5L2g55qEcGhvbmVOdW1iZXJcblx0XHRcdFx0c2lnbklEIDogXCIxXCIsICAgICAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEc2lnbklEXG5cdFx0XHRcdHRlbXBsYXRlSUQgOiBcIjFcIiAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEdGVtcGxhdGVJRFxuXHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2dldENvZGUnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdldENvZGVFdmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOiuvue9ruWJjeWQjuS4pOasoeiOt+WPlumqjOivgeeggeeahOaXtumXtOmXtOmalFxuXHRcdHNldFRpbWVXaXRoQ29uZmlnOmZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmp2LnNldFRpbWVXaXRoQ29uZmlnKDEwMDApXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 15 */
/*!**************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***************************************************************************************************************************************!*\
  !*** /Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/douban/Documents/极光工作/JG_CODE/jverification-hbuilder-plugin/JVerification_Hbuilder_Demo/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ })
],[[0,"app-config"]]]);