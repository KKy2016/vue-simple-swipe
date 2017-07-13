/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_item_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_0_1_vue_loader_lib_template_compiler_index_id_data_v_6a6d01f5_node_modules_13_0_1_vue_loader_lib_selector_type_template_index_0_swipe_item_vue__ = __webpack_require__(4);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_0_1_vue_loader_lib_template_compiler_index_id_data_v_6a6d01f5_node_modules_13_0_1_vue_loader_lib_selector_type_template_index_0_swipe_item_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\swipe-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipe-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a6d01f5", Component.options)
  } else {
    hotAPI.reload("data-v-6a6d01f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_0_1_vue_loader_lib_template_compiler_index_id_data_v_566bb1db_node_modules_13_0_1_vue_loader_lib_selector_type_template_index_0_swipe_vue__ = __webpack_require__(3);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_0_1_vue_loader_lib_selector_type_script_index_0_swipe_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_0_1_vue_loader_lib_template_compiler_index_id_data_v_566bb1db_node_modules_13_0_1_vue_loader_lib_selector_type_template_index_0_swipe_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\swipe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swipe.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-566bb1db", Component.options)
  } else {
    hotAPI.reload("data-v-566bb1db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swipe-container"
  }, [_c('div', {
    staticClass: "swipe-item-container"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.indicator) ? _c('div', {
    staticClass: "swipe-indicators"
  }, _vm._l((_vm.pages), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "swipe-indicator",
      class: {
        'active': (index == _vm.current)
      }
    })
  })) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-566bb1db", esExports)
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swipe-item"
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6a6d01f5", esExports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    mounted: function mounted() {
        this.$parent.reInitPage();
    },
    destroyed: function destroyed() {
        this.$parent.reInitPage();
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            ready: false,
            width: 0,
            current: 0,
            pages: [],
            autoTimer: null,
            reInitPageTimer: null,
            posX: 0,
            posX_move: 0,
            animating: false
        };
    },


    props: {
        speed: {
            type: Number,
            default: 300
        },

        auto: {
            type: Number,
            default: 3000
        },

        indicator: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        init: function init() {
            var _this = this;

            this.initPages();
            // 自动播放
            if (this.auto > this.speed) this.autoPlay();

            // 滑动
            var el = this.$el;
            el.addEventListener('touchstart', function (ev) {
                _this.doTouchStart(ev);
            }, false);
            el.addEventListener('touchmove', function (ev) {
                _this.doTouchMove(ev);
            }, false);
            el.addEventListener('touchend', function () {
                _this.doTouchEnd();
            }, false);
        },
        doTouchStart: function doTouchStart(ev) {
            if (this.animating) return;

            clearInterval(this.autoTimer);

            var index = this.current,
                pages = this.pages,
                width = this.width,
                len = pages.length,
                current = pages[index],
                prev = pages[index - 1],
                next = pages[index + 1];

            if (!prev) prev = pages[len - 1];
            if (!next) next = pages[0];

            prev.style.display = 'block';
            next.style.display = 'block';
            this.translate(prev, -width);
            this.translate(next, width);

            // 记录下落点位置
            this.posX = ev.touches[0].pageX;
        },
        doTouchMove: function doTouchMove(ev) {
            if (this.animating) return;

            var posX_move = ev.touches[0].pageX,
                offset = posX_move - this.posX,
                index = this.current,
                pages = this.pages,
                width = this.width,
                len = pages.length,
                current = pages[index],
                prev = pages[index - 1],
                next = pages[index + 1];

            this.posX_move = posX_move;

            if (!prev) prev = pages[len - 1];
            if (!next) next = pages[0];

            this.translate(current, offset);
            if (offset > 0) {
                this.translate(prev, -(width - offset));
            } else {
                this.translate(next, width + offset);
            }
        },
        doTouchEnd: function doTouchEnd() {
            var _this2 = this;

            if (this.animating) return;

            var posX_end = this.posX_move,
                offset = posX_end - this.posX,
                absOffset = Math.abs(offset),
                index = this.current,
                pages = this.pages,
                width = this.width,
                len = pages.length,
                current = pages[index],
                prev = pages[index - 1],
                next = pages[index + 1],
                speed = this.speed;

            if (!prev) prev = pages[len - 1];
            if (!next) next = pages[0];

            var callback = function callback(dir) {
                return function () {
                    var current = _this2.current;
                    current = current + dir;
                    _this2.current = current >= 0 ? current % len : len + current % len;

                    _this2.autoPlay();
                };
            };

            if (absOffset > width / 3) {
                if (offset > 0) {
                    this.translate(current, width, speed);
                    this.translate(prev, 0, speed, callback(-1));
                } else {
                    this.translate(current, -width, speed);
                    this.translate(next, 0, speed, callback(1));
                }
            } else {
                this.translate(current, 0, speed);
                if (offset > 0) {
                    this.translate(prev, -width, speed, callback(0));
                } else {
                    this.translate(next, width, speed, callback(0));
                }
            }
        },

        // 获取item
        initPages: function initPages() {
            var _this3 = this;

            this.pages = [];

            var childRen = this.$children;
            childRen.forEach(function (child) {
                _this3.pages.push(child.$el);
            });
            console.log(this.current);
            this.classAssign();
        },
        autoPlay: function autoPlay() {
            var _this4 = this;

            clearInterval(this.autoTimer);

            this.autoTimer = setInterval(function () {
                _this4.next();
            }, this.auto);
        },
        next: function next() {
            var _this5 = this;

            var index = this.current,
                pages = this.pages,
                len = pages.length,
                width = this.width,
                speed = this.speed,
                current = pages[index],
                next = pages[index + 1];

            if (!next) next = pages[0];

            next.style.display = 'block';
            this.translate(next, width);

            var callback = function callback() {
                var current = _this5.current;
                current++;
                _this5.current = current % _this5.pages.length;

                _this5.classAssign();
            };

            setTimeout(function () {
                _this5.translate(current, -width, speed);
                _this5.translate(next, 0, speed, callback);
            }, 10);
        },
        classAssign: function classAssign() {
            var _this6 = this;

            this.pages.forEach(function (page, index) {
                if (index == _this6.current) {
                    page.classList.add('active');
                    page.style.display = 'block';
                    page.style.webkitTransform = 'translateX(0)';
                } else {
                    page.style.display = 'none';
                    page.style.webkitTransform = 'translateX(-100%)';
                    page.classList.remove('active');
                }
            });
        },
        translate: function translate(target, offset, speed, callback) {
            var _this7 = this;

            if (speed) {
                this.animating = true;

                target.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
                // 注意这里
                setTimeout(function () {
                    target.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
                }, 50);

                // 一定要移除监听事件
                var fn = function fn() {
                    if (callback) callback();

                    _this7.animating = false;

                    target.removeEventListener('webkitTransitionEnd', fn, false);
                };
                target.addEventListener('webkitTransitionEnd', fn, false);
            } else {
                target.style.webkitTransition = '';
                target.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
            }
        },
        reInitPage: function reInitPage() {
            var _this8 = this;

            if (!this.ready) return;

            clearTimeout(this.reInitPageTimer);
            this.reInitPageTimer = setTimeout(function () {
                _this8.current = 0;
                _this8.initPages();
            }, 100);
        }
    },

    mounted: function mounted() {
        this.ready = true;
        this.width = this.$el.clientWidth;
        this.init();
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.swipeItem = exports.swipe = undefined;

var _swipe = __webpack_require__(2);

var _swipe2 = _interopRequireDefault(_swipe);

var _swipeItem = __webpack_require__(1);

var _swipeItem2 = _interopRequireDefault(_swipeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.vueSwipe = {
    swipe: _swipe2.default,
    swipeItem: _swipeItem2.default
};

exports.swipe = _swipe2.default;
exports.swipeItem = _swipeItem2.default;

/***/ })
/******/ ]);