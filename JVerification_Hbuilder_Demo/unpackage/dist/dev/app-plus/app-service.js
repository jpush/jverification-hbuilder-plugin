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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar jv = uni.requireNativePlugin('JG-JVerification');\nvar _default = {\n  data: function data() {\n    return {\n      title: 'Hello',\n      msg: \"\",\n      jv: jv\n    };\n  },\n  onLoad: function onLoad() {},\n  methods: {\n    // 设置 debug 模式\n    debug: function debug() {\n      this.jv.setDebugMode(true);\n    },\n    // 初始化\n    init: function init() {\n      var self = this;\n      self.jv.init({\n        timeout: 7000,\n        isProduction: false\n      }, function (result) {\n        self.showModal('init', JSON.stringify(result));\n      });\n    },\n    // 是否初始化成功\n    isInitSuccess: function isInitSuccess() {\n      var self = this;\n      self.jv.isInitSuccess(function (result) {\n        self.showModal('isInitSuccess', JSON.stringify(result));\n      });\n    },\n    // 当前网络是否支持认证\n    checkVerifyEnable: function checkVerifyEnable() {\n      var self = this;\n      self.jv.checkVerifyEnable(function (result) {\n        self.showModal('checkVerifyEnable', JSON.stringify(result));\n      });\n    },\n    // 获取认证 token\n    getToken: function getToken() {\n      var self = this;\n      self.jv.getToken(5000, function (result) {\n        self.showModal('getToken', JSON.stringify(result));\n      });\n    },\n    // 一键登录预取号\n    preLogin: function preLogin() {\n      var self = this;\n      self.jv.preLogin(5000, function (result) {\n        self.showModal('preLogin', JSON.stringify(result));\n      });\n    },\n    // 清除预取号缓存\n    clearPreLoginCache: function clearPreLoginCache() {\n      this.jv.clearPreLoginCache();\n    },\n    // 一键登录\n    loginAuth: function loginAuth() {\n      var self = this;\n      self.jv.loginAuth({\n        autoFinish: true,\n        timeout: 5000\n      }, function (result) {\n        self.showModal('loginAuth', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"loginAuthevent:\" + JSON.stringify(event), \" at pages/index/index.vue:90\");\n      });\n    },\n    // 自定义授权页面 UI 样式\n    setCustomUIWithConfig: function setCustomUIWithConfig() {\n      var self = this;\n      this.jv.addCustomViewsClickCallback(function (id) {\n        self.showModal('customViewclick', \"id:\" + id);\n      });\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navColor: 0xff000000,\n          logBtnText: \"极光认证测试\",\n          privacyState: false,\n          appPrivacyColor: [0xff000200, 0xff000000],\n          modalTransitionStyle: \"FlipHorizontal\",\n          appPrivacys: [\"头部文字\", [\"、\", \"自定义条款1\", \"https://www.taobao.com/\", \"内部自定义条款1\"], [\"、\", \"自定义条款2\", \"https://www.taobao.com/\", \"内部自定义条款2\"], [\"、\", \"自定义条款3\", \"https://www.taobao.com/\", \"内部自定义条款3\"], \"尾部文字\"],\n          isAlertPrivacyVC: true,\n          privacyCheckToastMessage: \"请点击同意协议\",\n          navTransparent: true,\n          agreementNavBackgroundColor: 0xff7b68ee,\n          privacyTextAlignment: \"center\",\n          // authPageBackgroudVideo:{\n          // \tvideoPath:\"static/videoBg.mp4\",\n          // \tvideoPlaceHolderImagePath:\"static/big.jpg\",\n          // },\n          addCustomViews: [{\n            type: \"label\",\n            width: 120,\n            height: 20,\n            top: 320,\n            left: 100,\n            backgroundColor: 0xff7b68ee,\n            text: \"自定义label\",\n            textFont: 20,\n            textAlignment: 15,\n            numberOfLines: 2,\n            cornerRadius: 10,\n            textColor: 0xff000000\n          }, {\n            type: \"button\",\n            id: \"buttonTest\",\n            width: 180,\n            height: 44,\n            textColor: 0xff000000,\n            cornerRadius: 22,\n            left: 50,\n            bottom: -100,\n            title: \"点击测试\",\n            isFinish: true,\n            // 是否在授权页面通过自定义控件button的点击关闭授权页面\n            backgroundImagePath: \"static/big.jpg\" // button正常情况下背景图片路径\n            // normalImagePath:\"static/bg.jpeg\"  // 设置button图片路径\n          }, {\n            type: \"imageView\",\n            width: 50,\n            height: 50,\n            cornerRadius: 25,\n            right: -100,\n            bottom: -100,\n            imagePath: \"static/qq.png\"\n          }]\n        });\n      } else {\n        this.jv.addCustomViewsClickCallback(function (id) {\n          self.showModal('customViewclick', \"id:\" + id);\n        });\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试 \",\n          setPrivacyState: false,\n          setPrivacyNameAndUrlBeanList: [{\n            name: \"条款1\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\"\n          }, {\n            name: \"条款2\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \"\",\n            afterName: \"\"\n          }, {\n            name: \"条款3\",\n            url: \"https://www.jiguang.cn/about\",\n            beforeName: \",\",\n            afterName: \",\"\n          }],\n          setAppPrivacyColor: [0xff4169E1, 0xffFF6347],\n          setLogoImgPathFromJs: \"static/weixin.png\",\n          setLogBtnImgPathFromJs: \"static/login.png\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setPrivacyNavReturnBtnPathFromJs: \"static/weixin.png\",\n          setPrivacyTextSize: 12,\n          setPrivacyCheckboxSize: 14,\n          enableHintToast: true,\n          enableHintToastText: \"自定义提示linux\",\n          setLoadingViewEnable: true,\n          setStatusBarTransparent: true,\n          addCustomViews: [{\n            type: \"text\",\n            finishFlag: false,\n            id: \"id1\",\n            width: 100,\n            height: 50,\n            text: \"自定义tv\",\n            textSize: 20,\n            align: 15,\n            margins: [100, 100, 0, 0],\n            textAlignment: 4,\n            textViewGravity: 2,\n            bgColor: 0xff7b68ee\n          }, {\n            type: \"image\",\n            finishFlag: true,\n            id: \"id2\",\n            width: 50,\n            height: 50,\n            align: 13,\n            margins: [0, 0, 0, 0],\n            bgImgPath: \"static/qq.png\"\n          }]\n        });\n      }\n    },\n    autoLayoutUI: function autoLayoutUI() {\n      //开发者可以自己布局授权页视图UI控件\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          navCustom: false,\n          autoLayout: true,\n          showWindow: false,\n          navReturnHidden: false,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -200, 60, 60],\n          //number\n          numberConstraints: [0, -132, 200, 14],\n          //slogn\n          sloganConstraints: [0, -112, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, -80, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          privacyConstraints: [0, 180, 200, 40],\n          checkViewConstraints: [-108, 180, 10, 10],\n          loadingConstraints: [0, 0, 20, 20]\n        });\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          // setNavColor:0xff000000,\n          // setLogBtnText:\" 极光认证测试弹窗 \",\n          // setPrivacyState:false,\n          // setAppPrivacyColor:[0xff00f000,0xff000000],\n          // setDialogTheme:[300, 400, 0, 0, false],\n          // setLogoImgPathFromJs:\"static/big.jpg\",\n          // setAuthBGImgPathFromJs:\"static/bg.jpeg\",\n          // setDimAmount: 0.5,\n          // privacyNeedClose:true,           //弹窗是否需要关闭按钮 \n          // privacyCloseTheme:[10, 60, 0, 0],            //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n    },\n    setCustomDialog: function setCustomDialog() {\n      if (uni.getSystemInfoSync().platform == \"ios\") {\n        this.jv.setCustomUIWithConfigiOS({\n          // privacyCheckToastMessage:\"请点击同意协议\",\n          navCustom: true,\n          autoLayout: true,\n          showWindow: true,\n          windowConstraints: [0, 0, 300, 300],\n          windowBackgroundAlpha: 0.3,\n          //logo\n          logoImg: \"static/logo.png\",\n          logoConstraints: [0, -100, 60, 60],\n          //number\n          numberConstraints: [0, -42, 200, 14],\n          //slogn\n          sloganConstraints: [0, -20, 200, 14],\n          //登录按钮\n          logBtnConstraints: [0, 20, 220, 40],\n          logBtnText: \"一键登录\",\n          logBtnTextColor: 0x0000FF,\n          windowCornerRadius: 10,\n          privacyConstraints: [0, 100, 200, 40],\n          checkViewConstraints: [-108, 100, 10, 10],\n          windowCloseBtnConstraints: [-135, -135, 20, 20],\n          loadingConstraints: [0, 0, 20, 20],\n          windowCloseBtnImgs: [\"static/windowClose\", \"static/windowClose\"],\n          windowBackgroundImage: \"static/bg.jpeg\"\n        });\n      } else {\n        this.jv.setCustomUIWithConfigAndroid({\n          setNavColor: 0xff000000,\n          setLogBtnText: \" 极光认证测试弹窗 \",\n          setPrivacyState: false,\n          setAppPrivacyColor: [0xff00f000, 0xff000000],\n          setDialogTheme: [300, 400, 0, 0, false],\n          setLogoImgPathFromJs: \"static/big.jpg\",\n          setAuthBGImgPathFromJs: \"static/bg.jpeg\",\n          setDimAmount: 0.5,\n          privacyNeedClose: true,\n          //弹窗是否需要关闭按钮 \n          privacyCloseTheme: [10, 60, 0, 0] //弹窗关闭按钮偏移量 privacyNeedClose为true时，必须设置它的偏移量\n        });\n      }\n    },\n\n    showModal: function showModal(title, content) {\n      uni.showModal({\n        title: title,\n        content: content\n      });\n      this.msg = \"\".concat(title, \" :\").concat(content);\n    },\n    // 获取验证码\n    getCode: function getCode() {\n      var self = this;\n      self.jv.getCode({\n        phoneNumber: \"18925241111\",\n        //在此替换你的phoneNumber\n        signID: \"1\",\n        //在此替换你的signID\n        templateID: \"1\" //在此替换你的templateID\n      }, function (result) {\n        self.showModal('getCode', JSON.stringify(result));\n      }, function (event) {\n        __f__(\"log\", \"getCodeEvent:\" + JSON.stringify(event), \" at pages/index/index.vue:322\");\n      });\n    },\n    // 设置前后两次获取验证码的时间间隔\n    setTimeWithConfig: function setTimeWithConfig() {\n      this.jv.setTimeWithConfig(1000);\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsIm1zZyIsImp2Iiwib25Mb2FkIiwibWV0aG9kcyIsImRlYnVnIiwiaW5pdCIsInNlbGYiLCJ0aW1lb3V0IiwiaXNQcm9kdWN0aW9uIiwiaXNJbml0U3VjY2VzcyIsImNoZWNrVmVyaWZ5RW5hYmxlIiwiZ2V0VG9rZW4iLCJwcmVMb2dpbiIsImNsZWFyUHJlTG9naW5DYWNoZSIsImxvZ2luQXV0aCIsImF1dG9GaW5pc2giLCJzZXRDdXN0b21VSVdpdGhDb25maWciLCJuYXZDb2xvciIsImxvZ0J0blRleHQiLCJwcml2YWN5U3RhdGUiLCJhcHBQcml2YWN5Q29sb3IiLCJtb2RhbFRyYW5zaXRpb25TdHlsZSIsImFwcFByaXZhY3lzIiwiaXNBbGVydFByaXZhY3lWQyIsInByaXZhY3lDaGVja1RvYXN0TWVzc2FnZSIsIm5hdlRyYW5zcGFyZW50IiwiYWdyZWVtZW50TmF2QmFja2dyb3VuZENvbG9yIiwicHJpdmFjeVRleHRBbGlnbm1lbnQiLCJhZGRDdXN0b21WaWV3cyIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0IiwidGV4dEZvbnQiLCJ0ZXh0QWxpZ25tZW50IiwibnVtYmVyT2ZMaW5lcyIsImNvcm5lclJhZGl1cyIsInRleHRDb2xvciIsImlkIiwiYm90dG9tIiwiaXNGaW5pc2giLCJiYWNrZ3JvdW5kSW1hZ2VQYXRoIiwicmlnaHQiLCJpbWFnZVBhdGgiLCJzZXROYXZDb2xvciIsInNldExvZ0J0blRleHQiLCJzZXRQcml2YWN5U3RhdGUiLCJzZXRQcml2YWN5TmFtZUFuZFVybEJlYW5MaXN0IiwibmFtZSIsInVybCIsImJlZm9yZU5hbWUiLCJhZnRlck5hbWUiLCJzZXRBcHBQcml2YWN5Q29sb3IiLCJzZXRMb2dvSW1nUGF0aEZyb21KcyIsInNldExvZ0J0bkltZ1BhdGhGcm9tSnMiLCJzZXRBdXRoQkdJbWdQYXRoRnJvbUpzIiwic2V0UHJpdmFjeU5hdlJldHVybkJ0blBhdGhGcm9tSnMiLCJzZXRQcml2YWN5VGV4dFNpemUiLCJzZXRQcml2YWN5Q2hlY2tib3hTaXplIiwiZW5hYmxlSGludFRvYXN0IiwiZW5hYmxlSGludFRvYXN0VGV4dCIsInNldExvYWRpbmdWaWV3RW5hYmxlIiwic2V0U3RhdHVzQmFyVHJhbnNwYXJlbnQiLCJmaW5pc2hGbGFnIiwidGV4dFNpemUiLCJhbGlnbiIsIm1hcmdpbnMiLCJ0ZXh0Vmlld0dyYXZpdHkiLCJiZ0NvbG9yIiwiYmdJbWdQYXRoIiwiYXV0b0xheW91dFVJIiwibmF2Q3VzdG9tIiwiYXV0b0xheW91dCIsInNob3dXaW5kb3ciLCJuYXZSZXR1cm5IaWRkZW4iLCJsb2dvSW1nIiwibG9nb0NvbnN0cmFpbnRzIiwibnVtYmVyQ29uc3RyYWludHMiLCJzbG9nYW5Db25zdHJhaW50cyIsImxvZ0J0bkNvbnN0cmFpbnRzIiwibG9nQnRuVGV4dENvbG9yIiwicHJpdmFjeUNvbnN0cmFpbnRzIiwiY2hlY2tWaWV3Q29uc3RyYWludHMiLCJsb2FkaW5nQ29uc3RyYWludHMiLCJzZXRDdXN0b21EaWFsb2ciLCJ3aW5kb3dDb25zdHJhaW50cyIsIndpbmRvd0JhY2tncm91bmRBbHBoYSIsIndpbmRvd0Nvcm5lclJhZGl1cyIsIndpbmRvd0Nsb3NlQnRuQ29uc3RyYWludHMiLCJ3aW5kb3dDbG9zZUJ0bkltZ3MiLCJ3aW5kb3dCYWNrZ3JvdW5kSW1hZ2UiLCJzZXREaWFsb2dUaGVtZSIsInNldERpbUFtb3VudCIsInByaXZhY3lOZWVkQ2xvc2UiLCJwcml2YWN5Q2xvc2VUaGVtZSIsInNob3dNb2RhbCIsInVuaSIsImNvbnRlbnQiLCJnZXRDb2RlIiwicGhvbmVOdW1iZXIiLCJzaWduSUQiLCJ0ZW1wbGF0ZUlEIiwic2V0VGltZVdpdGhDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDLDJCQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBQztRQUNBQztRQUNBQztNQUNBO1FBQ0FGO01BQ0E7SUFDQTtJQUNBO0lBQ0FHO01BQ0E7TUFDQUg7UUFDQUE7TUFDQTtJQUNBO0lBQ0E7SUFDQUk7TUFDQTtNQUNBSjtRQUNBQTtNQUNBO0lBQ0E7SUFDQTtJQUNBSztNQUNBO01BQ0FMO1FBQ0FBO01BQ0E7SUFDQTtJQUNBO0lBQ0FNO01BQ0E7TUFDQU47UUFDQUE7TUFDQTtJQUNBO0lBQ0E7SUFDQU87TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBUjtRQUNBUztRQUNBUjtNQUNBO1FBQ0FEO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBVTtNQUNBO01BQ0E7UUFDQVY7TUFDQTtNQUNBO1FBQ0E7VUFDQVc7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUM7VUFDQUMsY0FDQSxRQUNBLHdEQUNBLHdEQUNBLHdEQUNBO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7VUFDQSxHQUNBO1lBQ0FYO1lBQ0FZO1lBQ0FYO1lBQ0FDO1lBQ0FTO1lBQ0FEO1lBQ0FOO1lBQ0FTO1lBQ0EzQztZQUNBNEM7WUFBQTtZQUNBQztZQUNBO1VBQ0EsR0FDQTtZQUNBZjtZQUNBQztZQUNBQztZQUNBUTtZQUNBTTtZQUNBSDtZQUNBSTtVQUNBO1FBQ0E7TUFDQTtRQUNBO1VBQ0F4QztRQUNBO1FBQ0E7VUFDQXlDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1VBQ0E7WUFDQUg7WUFDQUM7WUFDQUM7WUFDQUM7VUFDQTtZQUNBSDtZQUNBQztZQUNBQztZQUNBQztVQUNBO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FyQztZQUNBQztZQUNBcUM7WUFDQXpCO1lBQ0FYO1lBQ0FDO1lBQ0FJO1lBQ0FnQztZQUNBQztZQUNBQztZQUNBaEM7WUFDQWlDO1lBQ0FDO1VBQ0EsR0FDQTtZQUNBMUM7WUFDQXFDO1lBQ0F6QjtZQUNBWDtZQUNBQztZQUNBcUM7WUFDQUM7WUFDQUc7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtVQUNBQztVQUNBQztVQUNBQztVQUNBQztVQUNBO1VBQ0FDO1VBQ0FDO1VBQ0E7VUFDQUM7VUFDQTtVQUNBQztVQUNBO1VBQ0FDO1VBQ0FoRTtVQUNBaUU7VUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtNQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUFBLENBQ0E7TUFDQTtJQUlBO0lBQ0FDO01BQ0E7UUFDQTtVQUNBO1VBQ0FiO1VBQ0FDO1VBQ0FDO1VBQ0FZO1VBQ0FDO1VBQ0E7VUFDQVg7VUFDQUM7VUFDQTtVQUNBQztVQUNBO1VBQ0FDO1VBQ0E7VUFDQUM7VUFDQWhFO1VBQ0FpRTtVQUNBTztVQUNBTjtVQUNBQztVQUNBTTtVQUNBTDtVQUNBTTtVQUNBQztRQUNBO01BQ0E7UUFDQTtVQUNBOUM7VUFDQUM7VUFDQUM7VUFDQU07VUFDQXVDO1VBQ0F0QztVQUNBRTtVQUNBcUM7VUFDQUM7VUFBQTtVQUNBQztRQUNBO01BQ0E7SUFFQTs7SUFDQUM7TUFDQUM7UUFDQXBHO1FBQ0FxRztNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQS9GO1FBQ0FnRztRQUFBO1FBQ0FDO1FBQUE7UUFDQUM7TUFDQTtRQUNBbEc7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FtRztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJkZWJ1ZygpXCI+6K6+572uZGVidWfmqKHlvI88L2J1dHRvbj5cblx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiaW5pdCgpXCI+5Yid5aeL5YyWPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImlzSW5pdFN1Y2Nlc3MoKVwiPuWIneWni+WMluaYr+WQpuaIkOWKnzwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJjaGVja1ZlcmlmeUVuYWJsZSgpXCI+5piv5ZCm5pSv5oyB6aqM6K+BPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImdldFRva2VuKClcIj7ojrflj5Z0b2tlbjwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJwcmVMb2dpbigpXCI+5LiA6ZSu55m75b2V6aKE5Y+W5Y+3PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImNsZWFyUHJlTG9naW5DYWNoZSgpXCI+5riF6Zmk6aKE5Y+W5Y+357yT5a2YPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImxvZ2luQXV0aCgpXCI+6K+35rGC5o6I5p2D5LiA6ZSu55m75b2VPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInNldEN1c3RvbVVJV2l0aENvbmZpZygpXCI+6Ieq5a6a5LmJ5o6I5p2D6aG16Z2i5qC35byPPC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cInNldEN1c3RvbURpYWxvZygpXCI+6Ieq5a6a5LmJ5by556qX5o6I5p2D6aG1PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImF1dG9MYXlvdXRVSSgpXCI+6Ieq5Yqo5biD5bGA5o6I5p2D6aG1PC9idXR0b24+XG5cdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImdldENvZGUoKVwiPuiOt+WPlumqjOivgeeggTwvYnV0dG9uPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJzZXRUaW1lV2l0aENvbmZpZygpXCI+6K6+572u6I635Y+W6aqM6K+B56CB5pe26Ze06Ze06ZqUPC9idXR0b24+XG5cdFx0PHZpZXcgY2xhc3M9XCJtc2ctYm94XCIgPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJtc2dcIj57e21zZ319PC90ZXh0PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Y29uc3QganYgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignSkctSlZlcmlmaWNhdGlvbicpXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGl0bGU6ICdIZWxsbycsXG5cdFx0XHRcdG1zZzogXCJcIixcblx0XHRcdFx0anZcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOiuvue9riBkZWJ1ZyDmqKHlvI9cblx0XHRcdGRlYnVnOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuc2V0RGVidWdNb2RlKHRydWUpO1xuXHRcdFx0fSxcblx0XHRcdC8vIOWIneWni+WMllxuXHRcdFx0aW5pdDpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaW5pdCh7XG5cdFx0XHRcdFx0dGltZW91dDo3MDAwLFxuXHRcdFx0XHRcdGlzUHJvZHVjdGlvbjpmYWxzZSxcblx0XHRcdFx0fSxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaW5pdCcsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8vIOaYr+WQpuWIneWni+WMluaIkOWKn1xuXHRcdFx0aXNJbml0U3VjY2VzczpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuaXNJbml0U3VjY2VzcyhyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgnaXNJbml0U3VjY2VzcycsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5b2T5YmN572R57uc5piv5ZCm5pSv5oyB6K6k6K+BXG5cdFx0XHRjaGVja1ZlcmlmeUVuYWJsZTpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYuY2hlY2tWZXJpZnlFbmFibGUocmVzdWx0PT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2NoZWNrVmVyaWZ5RW5hYmxlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5borqTor4EgdG9rZW5cblx0XHRcdGdldFRva2VuOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0c2VsZi5qdi5nZXRUb2tlbig1MDAwLHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRUb2tlbicsSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2V6aKE5Y+W5Y+3XG5cdFx0XHRwcmVMb2dpbjpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHNlbGYuanYucHJlTG9naW4oNTAwMCxyZXN1bHQ9Pntcblx0XHRcdFx0XHRzZWxmLnNob3dNb2RhbCgncHJlTG9naW4nLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOa4hemZpOmihOWPluWPt+e8k+WtmFxuXHRcdFx0Y2xlYXJQcmVMb2dpbkNhY2hlOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuanYuY2xlYXJQcmVMb2dpbkNhY2hlKCk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8g5LiA6ZSu55m75b2VXG5cdFx0XHRsb2dpbkF1dGg6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmxvZ2luQXV0aCh7XG5cdFx0XHRcdFx0YXV0b0ZpbmlzaDp0cnVlLFxuXHRcdFx0XHRcdHRpbWVvdXQ6NTAwMFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdsb2dpbkF1dGgnLEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXHRcdFx0XHR9LGV2ZW50PT57XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbkF1dGhldmVudDpcIitKU09OLnN0cmluZ2lmeShldmVudCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8vIOiHquWumuS5ieaOiOadg+mhtemdoiBVSSDmoLflvI9cblx0XHRcdHNldEN1c3RvbVVJV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuanYuYWRkQ3VzdG9tVmlld3NDbGlja0NhbGxiYWNrKGlkPT57XG5cdFx0XHRcdFx0c2VsZi5zaG93TW9kYWwoJ2N1c3RvbVZpZXdjbGljaycsXCJpZDpcIitpZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0XHRuYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuaegeWFieiupOivgea1i+ivlVwiLFxuXHRcdFx0XHRcdFx0cHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0YXBwUHJpdmFjeUNvbG9yOlsweGZmMDAwMjAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0bW9kYWxUcmFuc2l0aW9uU3R5bGU6XCJGbGlwSG9yaXpvbnRhbFwiLFxuXHRcdFx0XHRcdFx0YXBwUHJpdmFjeXM6W1xuXHRcdFx0XHRcdFx0XHRcIuWktOmDqOaWh+Wtl1wiLFxuXHRcdFx0XHRcdFx0W1wi44CBXCIsXCLoh6rlrprkuYnmnaHmrL4xXCIsXCJodHRwczovL3d3dy50YW9iYW8uY29tL1wiLFwi5YaF6YOo6Ieq5a6a5LmJ5p2h5qy+MVwiXSxcblx0XHRcdFx0XHRcdFtcIuOAgVwiLFwi6Ieq5a6a5LmJ5p2h5qy+MlwiLFwiaHR0cHM6Ly93d3cudGFvYmFvLmNvbS9cIixcIuWGhemDqOiHquWumuS5ieadoeasvjJcIl0sXG5cdFx0XHRcdFx0XHRbXCLjgIFcIixcIuiHquWumuS5ieadoeasvjNcIixcImh0dHBzOi8vd3d3LnRhb2Jhby5jb20vXCIsXCLlhoXpg6joh6rlrprkuYnmnaHmrL4zXCJdLFxuXHRcdFx0XHRcdFx0XCLlsL7pg6jmloflrZdcIl0sXG5cdFx0XHRcdFx0XHRpc0FsZXJ0UHJpdmFjeVZDOnRydWUsXG5cdFx0XHRcdFx0XHRwcml2YWN5Q2hlY2tUb2FzdE1lc3NhZ2U6XCLor7fngrnlh7vlkIzmhI/ljY/orq5cIixcblx0XHRcdFx0XHRcdG5hdlRyYW5zcGFyZW50OnRydWUsXG5cdFx0XHRcdFx0XHRhZ3JlZW1lbnROYXZCYWNrZ3JvdW5kQ29sb3I6MHhmZjdiNjhlZSxcblx0XHRcdFx0XHRcdHByaXZhY3lUZXh0QWxpZ25tZW50OlwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHQvLyBhdXRoUGFnZUJhY2tncm91ZFZpZGVvOntcblx0XHRcdFx0XHRcdC8vIFx0dmlkZW9QYXRoOlwic3RhdGljL3ZpZGVvQmcubXA0XCIsXG5cdFx0XHRcdFx0XHQvLyBcdHZpZGVvUGxhY2VIb2xkZXJJbWFnZVBhdGg6XCJzdGF0aWMvYmlnLmpwZ1wiLFxuXHRcdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImxhYmVsXCIsXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6MTIwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDoyMCxcblx0XHRcdFx0XHRcdFx0XHR0b3A6MzIwLFxuXHRcdFx0XHRcdFx0XHRcdGxlZnQ6MTAwLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjoweGZmN2I2OGVlLFxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6XCLoh6rlrprkuYlsYWJlbFwiLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRGb250OjIwLFxuXHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbm1lbnQ6MTUsXG5cdFx0XHRcdFx0XHRcdFx0bnVtYmVyT2ZMaW5lczoyLFxuXHRcdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoxMCxcblx0XHRcdFx0XHRcdFx0XHR0ZXh0Q29sb3I6MHhmZjAwMDAwMFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBcImJ1dHRvblRlc3RcIixcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDoxODAsXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjQ0LFxuXHRcdFx0XHRcdFx0XHRcdHRleHRDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0XHRcdGNvcm5lclJhZGl1czoyMixcblx0XHRcdFx0XHRcdFx0XHRsZWZ0OjUwLFxuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogLTEwMCxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTpcIueCueWHu+a1i+ivlVwiLFxuXHRcdFx0XHRcdFx0XHRcdGlzRmluaXNoOnRydWUsICAvLyDmmK/lkKblnKjmjojmnYPpobXpnaLpgJrov4foh6rlrprkuYnmjqfku7ZidXR0b27nmoTngrnlh7vlhbPpl63mjojmnYPpobXpnaJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2VQYXRoOiBcInN0YXRpYy9iaWcuanBnXCIsIC8vIGJ1dHRvbuato+W4uOaDheWGteS4i+iDjOaZr+WbvueJh+i3r+W+hFxuXHRcdFx0XHRcdFx0XHRcdC8vIG5vcm1hbEltYWdlUGF0aDpcInN0YXRpYy9iZy5qcGVnXCIgIC8vIOiuvue9rmJ1dHRvbuWbvueJh+i3r+W+hFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTpcImltYWdlVmlld1wiLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOjUwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0XHRjb3JuZXJSYWRpdXM6MjUsXG5cdFx0XHRcdFx0XHRcdFx0cmlnaHQ6LTEwMCxcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IC0xMDAsXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VQYXRoOlwic3RhdGljL3FxLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdH1dXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5qdi5hZGRDdXN0b21WaWV3c0NsaWNrQ2FsbGJhY2soaWQ9Pntcblx0XHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdjdXN0b21WaWV3Y2xpY2snLFwiaWQ6XCIraWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnQW5kcm9pZCh7XG5cdFx0XHRcdFx0XHRzZXROYXZDb2xvcjoweGZmMDAwMDAwLFxuXHRcdFx0XHRcdFx0c2V0TG9nQnRuVGV4dDpcIiDmnoHlhYnorqTor4HmtYvor5UgXCIsXG5cdFx0XHRcdFx0XHRzZXRQcml2YWN5U3RhdGU6ZmFsc2UsXG5cdFx0XHRcdFx0XHRzZXRQcml2YWN5TmFtZUFuZFVybEJlYW5MaXN0Olt7XG5cdFx0XHRcdFx0XHRcdG5hbWU6XCLmnaHmrL4xXCIsXG5cdFx0XHRcdFx0XHRcdHVybDpcImh0dHBzOi8vd3d3LmppZ3VhbmcuY24vYWJvdXRcIixcblx0XHRcdFx0XHRcdFx0YmVmb3JlTmFtZTpcIixcIixcblx0XHRcdFx0XHRcdFx0YWZ0ZXJOYW1lOlwiLFwiXG5cdFx0XHRcdFx0XHR9LHtcblx0XHRcdFx0XHRcdFx0bmFtZTpcIuadoeasvjJcIixcblx0XHRcdFx0XHRcdFx0dXJsOlwiaHR0cHM6Ly93d3cuamlndWFuZy5jbi9hYm91dFwiLFxuXHRcdFx0XHRcdFx0XHRiZWZvcmVOYW1lOlwiXCIsXG5cdFx0XHRcdFx0XHRcdGFmdGVyTmFtZTpcIlwiXG5cdFx0XHRcdFx0XHR9LHtcblx0XHRcdFx0XHRcdFx0bmFtZTpcIuadoeasvjNcIixcblx0XHRcdFx0XHRcdFx0dXJsOlwiaHR0cHM6Ly93d3cuamlndWFuZy5jbi9hYm91dFwiLFxuXHRcdFx0XHRcdFx0XHRiZWZvcmVOYW1lOlwiLFwiLFxuXHRcdFx0XHRcdFx0XHRhZnRlck5hbWU6XCIsXCJcblx0XHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmNDE2OUUxLDB4ZmZGRjYzNDddLFxuXHRcdFx0XHRcdFx0c2V0TG9nb0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvd2VpeGluLnBuZ1wiLFxuXHRcdFx0XHRcdFx0c2V0TG9nQnRuSW1nUGF0aEZyb21KczpcInN0YXRpYy9sb2dpbi5wbmdcIixcblx0XHRcdFx0XHRcdHNldEF1dGhCR0ltZ1BhdGhGcm9tSnM6XCJzdGF0aWMvYmcuanBlZ1wiLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeU5hdlJldHVybkJ0blBhdGhGcm9tSnM6XCJzdGF0aWMvd2VpeGluLnBuZ1wiLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeVRleHRTaXplOjEyLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeUNoZWNrYm94U2l6ZToxNCxcblx0XHRcdFx0XHRcdGVuYWJsZUhpbnRUb2FzdDp0cnVlLFxuXHRcdFx0XHRcdFx0ZW5hYmxlSGludFRvYXN0VGV4dDpcIuiHquWumuS5ieaPkOekumxpbnV4XCIsXG5cdFx0XHRcdFx0XHRzZXRMb2FkaW5nVmlld0VuYWJsZTp0cnVlLFxuXHRcdFx0XHRcdFx0c2V0U3RhdHVzQmFyVHJhbnNwYXJlbnQ6dHJ1ZSxcblx0XHRcdFx0XHRcdGFkZEN1c3RvbVZpZXdzOlt7XG5cdFx0XHRcdFx0XHRcdHR5cGU6XCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGlkOlwiaWQxXCIsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCxcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjUwLFxuXHRcdFx0XHRcdFx0XHR0ZXh0Olwi6Ieq5a6a5LmJdHZcIixcblx0XHRcdFx0XHRcdFx0dGV4dFNpemU6MjAsXG5cdFx0XHRcdFx0XHRcdGFsaWduOjE1LFxuXHRcdFx0XHRcdFx0XHRtYXJnaW5zOlsxMDAsMTAwLDAsMF0sXG5cdFx0XHRcdFx0XHRcdHRleHRBbGlnbm1lbnQ6NCxcblx0XHRcdFx0XHRcdFx0dGV4dFZpZXdHcmF2aXR5OjIsXG5cdFx0XHRcdFx0XHRcdGJnQ29sb3I6MHhmZjdiNjhlZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHlwZTpcImltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdGZpbmlzaEZsYWc6dHJ1ZSxcblx0XHRcdFx0XHRcdFx0aWQ6XCJpZDJcIixcblx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXG5cdFx0XHRcdFx0XHRcdGhlaWdodDo1MCxcblx0XHRcdFx0XHRcdFx0YWxpZ246MTMsXG5cdFx0XHRcdFx0XHRcdG1hcmdpbnM6WzAsMCwwLDBdLFxuXHRcdFx0XHRcdFx0XHRiZ0ltZ1BhdGg6XCJzdGF0aWMvcXEucG5nXCJcblx0XHRcdFx0XHRcdH1dLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhdXRvTGF5b3V0VUk6ZnVuY3Rpb24oKXsgLy/lvIDlj5HogIXlj6/ku6Xoh6rlt7HluIPlsYDmjojmnYPpobXop4blm75VSeaOp+S7tlxuXHRcdFx0XHRpZih1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ2lPUyh7XG5cdFx0XHRcdFx0XHRuYXZDdXN0b206ZmFsc2UsXG5cdFx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0XHRzaG93V2luZG93OmZhbHNlLFxuXHRcdFx0XHRcdFx0bmF2UmV0dXJuSGlkZGVuOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly9sb2dvXG5cdFx0XHRcdFx0XHRsb2dvSW1nOlwic3RhdGljL2xvZ28ucG5nXCIsXG5cdFx0XHRcdFx0XHRsb2dvQ29uc3RyYWludHM6WzAsLTIwMCw2MCw2MF0sXG5cdFx0XHRcdFx0XHQvL251bWJlclxuXHRcdFx0XHRcdFx0bnVtYmVyQ29uc3RyYWludHM6WzAsLTEzMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly9zbG9nblxuXHRcdFx0XHRcdFx0c2xvZ2FuQ29uc3RyYWludHM6WzAsLTExMiwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly/nmbvlvZXmjInpkq5cblx0XHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLC04MCwyMjAsNDBdLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dDpcIuS4gOmUrueZu+W9lVwiLFxuXHRcdFx0XHRcdFx0bG9nQnRuVGV4dENvbG9yOjB4MDAwMEZGLFxuXHRcdFx0XHRcdFx0cHJpdmFjeUNvbnN0cmFpbnRzOlswLDE4MCwyMDAsNDBdLFxuXHRcdFx0XHRcdFx0Y2hlY2tWaWV3Q29uc3RyYWludHM6Wy0xMDgsMTgwLDEwLDEwXSxcblx0XHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0Ly8gc2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdC8vIHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdFx0Ly8gc2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0Ly8gc2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0Ly8gc2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0XHQvLyBzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0XHQvLyBzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdC8vIHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdFx0Ly8gcHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHQvLyBwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2V0Q3VzdG9tRGlhbG9nOmZ1bmN0aW9uKCl7XG5cdFx0XHRcdGlmKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCIpe1xuXHRcdFx0XHRcdHRoaXMuanYuc2V0Q3VzdG9tVUlXaXRoQ29uZmlnaU9TKHtcblx0XHRcdFx0XHRcdC8vIHByaXZhY3lDaGVja1RvYXN0TWVzc2FnZTpcIuivt+eCueWHu+WQjOaEj+WNj+iurlwiLFxuXHRcdFx0XHRcdFx0bmF2Q3VzdG9tOnRydWUsXG5cdFx0XHRcdFx0XHRhdXRvTGF5b3V0OnRydWUsXG5cdFx0XHRcdFx0XHRzaG93V2luZG93OnRydWUsXG5cdFx0XHRcdFx0XHR3aW5kb3dDb25zdHJhaW50czpbMCwwLDMwMCwzMDBdLFxuXHRcdFx0XHRcdFx0d2luZG93QmFja2dyb3VuZEFscGhhOiAwLjMsXG5cdFx0XHRcdFx0XHQvL2xvZ29cblx0XHRcdFx0XHRcdGxvZ29JbWc6XCJzdGF0aWMvbG9nby5wbmdcIixcblx0XHRcdFx0XHRcdGxvZ29Db25zdHJhaW50czpbMCwtMTAwLDYwLDYwXSxcblx0XHRcdFx0XHRcdC8vbnVtYmVyXG5cdFx0XHRcdFx0XHRudW1iZXJDb25zdHJhaW50czpbMCwtNDIsMjAwLDE0XSxcblx0XHRcdFx0XHRcdC8vc2xvZ25cblx0XHRcdFx0XHRcdHNsb2dhbkNvbnN0cmFpbnRzOlswLC0yMCwyMDAsMTRdLFxuXHRcdFx0XHRcdFx0Ly/nmbvlvZXmjInpkq5cblx0XHRcdFx0XHRcdGxvZ0J0bkNvbnN0cmFpbnRzOlswLDIwLDIyMCw0MF0sXG5cdFx0XHRcdFx0XHRsb2dCdG5UZXh0Olwi5LiA6ZSu55m75b2VXCIsXG5cdFx0XHRcdFx0XHRsb2dCdG5UZXh0Q29sb3I6MHgwMDAwRkYsXG5cdFx0XHRcdFx0XHR3aW5kb3dDb3JuZXJSYWRpdXM6MTAsXG5cdFx0XHRcdFx0XHRwcml2YWN5Q29uc3RyYWludHM6WzAsMTAwLDIwMCw0MF0sXG5cdFx0XHRcdFx0XHRjaGVja1ZpZXdDb25zdHJhaW50czpbLTEwOCwxMDAsMTAsMTBdLFxuXHRcdFx0XHRcdFx0d2luZG93Q2xvc2VCdG5Db25zdHJhaW50czpbLTEzNSwtMTM1LDIwLDIwXSxcblx0XHRcdFx0XHRcdGxvYWRpbmdDb25zdHJhaW50czpbMCwwLDIwLDIwXSxcblx0XHRcdFx0XHRcdHdpbmRvd0Nsb3NlQnRuSW1nczpbXCJzdGF0aWMvd2luZG93Q2xvc2VcIixcInN0YXRpYy93aW5kb3dDbG9zZVwiXSxcblx0XHRcdFx0XHRcdHdpbmRvd0JhY2tncm91bmRJbWFnZTpcInN0YXRpYy9iZy5qcGVnXCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHR0aGlzLmp2LnNldEN1c3RvbVVJV2l0aENvbmZpZ0FuZHJvaWQoe1xuXHRcdFx0XHRcdFx0c2V0TmF2Q29sb3I6MHhmZjAwMDAwMCxcblx0XHRcdFx0XHRcdHNldExvZ0J0blRleHQ6XCIg5p6B5YWJ6K6k6K+B5rWL6K+V5by556qXIFwiLFxuXHRcdFx0XHRcdFx0c2V0UHJpdmFjeVN0YXRlOmZhbHNlLFxuXHRcdFx0XHRcdFx0c2V0QXBwUHJpdmFjeUNvbG9yOlsweGZmMDBmMDAwLDB4ZmYwMDAwMDBdLFxuXHRcdFx0XHRcdFx0c2V0RGlhbG9nVGhlbWU6WzMwMCwgNDAwLCAwLCAwLCBmYWxzZV0sXG5cdFx0XHRcdFx0XHRzZXRMb2dvSW1nUGF0aEZyb21KczpcInN0YXRpYy9iaWcuanBnXCIsXG5cdFx0XHRcdFx0XHRzZXRBdXRoQkdJbWdQYXRoRnJvbUpzOlwic3RhdGljL2JnLmpwZWdcIixcblx0XHRcdFx0XHRcdHNldERpbUFtb3VudDogMC41LFxuXHRcdFx0XHRcdFx0cHJpdmFjeU5lZWRDbG9zZTp0cnVlLCAgICAgICAgICAgLy/lvLnnqpfmmK/lkKbpnIDopoHlhbPpl63mjInpkq4gXG5cdFx0XHRcdFx0XHRwcml2YWN5Q2xvc2VUaGVtZTpbMTAsIDYwLCAwLCAwXSwgICAgICAgICAgICAvL+W8ueeql+WFs+mXreaMiemSruWBj+enu+mHjyBwcml2YWN5TmVlZENsb3Nl5Li6dHJ1ZeaXtu+8jOW/hemhu+iuvue9ruWug+eahOWBj+enu+mHj1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdFx0c2hvd01vZGFsOmZ1bmN0aW9uKHRpdGxlLGNvbnRlbnQpe1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0ICAgIHRpdGxlLFxuXHRcdFx0XHQgICAgY29udGVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubXNnID0gYCR7dGl0bGV9IDoke2NvbnRlbnR9YDtcblx0XHRcdH0sXG5cdFx0XHQvLyDojrflj5bpqozor4HnoIFcblx0XHRcdGdldENvZGU6ZnVuY3Rpb24oKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRzZWxmLmp2LmdldENvZGUoe1xuXHRcdFx0XHRcdHBob25lTnVtYmVyIDogIFwiMTg5MjUyNDExMTFcIiwgLy/lnKjmraTmm7/mjaLkvaDnmoRwaG9uZU51bWJlclxuXHRcdFx0XHRcdHNpZ25JRCA6IFwiMVwiLCAgICAgICAgICAgICAvL+WcqOatpOabv+aNouS9oOeahHNpZ25JRFxuXHRcdFx0XHRcdHRlbXBsYXRlSUQgOiBcIjFcIiAgICAgICAgIC8v5Zyo5q2k5pu/5o2i5L2g55qEdGVtcGxhdGVJRFxuXHRcdFx0XHR9LHJlc3VsdD0+e1xuXHRcdFx0XHRcdHNlbGYuc2hvd01vZGFsKCdnZXRDb2RlJyxKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblx0XHRcdFx0fSxldmVudD0+e1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZ2V0Q29kZUV2ZW50OlwiK0pTT04uc3RyaW5naWZ5KGV2ZW50KSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g6K6+572u5YmN5ZCO5Lik5qyh6I635Y+W6aqM6K+B56CB55qE5pe26Ze06Ze06ZqUXG5cdFx0XHRzZXRUaW1lV2l0aENvbmZpZzpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLmp2LnNldFRpbWVXaXRoQ29uZmlnKDEwMDApXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuY29udGVudCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdG1hcmdpbjogMTAwcnB4O1xuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xuXHR9XG5cdC5tc2ctYm94e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblx0Lm1zZyB7XG5cdFx0Zm9udC1zaXplOiAyNXJweDtcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdH1cblx0XHRcblx0YnV0dG9ue1xuXHRcdG1hcmdpbjogNXJweDtcblx0fVxuXHRcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

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