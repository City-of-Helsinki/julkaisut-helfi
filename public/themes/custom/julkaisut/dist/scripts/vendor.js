(window["julkaisut-webpack"] = window["julkaisut-webpack"] || []).push([["/scripts/vendor"],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(3);
var delegate = __webpack_require__(4);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(0);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);

// CONCATENATED MODULE: ./src/clipboard-action.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var clipboard_action_ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = select_default()(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = select_default()(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }
            document.activeElement.blur();
            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (clipboard_action_ClipboardAction);
// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(1);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);

// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(2);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);

// CONCATENATED MODULE: ./src/clipboard.js
var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clipboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var clipboard_Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        clipboard_classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    clipboard_createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = listen_default()(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(tiny_emitter_default.a);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

/* harmony default export */ var clipboard = __webpack_exports__["default"] = (clipboard_Clipboard);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 6.2.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function _defineProperty(obj, key, value) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // @type {{ firstTabbableNode: HTMLElement, lastTabbableNode: HTMLElement }}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);
      return {
        firstTabbableNode: tabbableNodes[0],
        lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
      };
    });
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (config.clickOutsideDeactivates) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (containersContain(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (e.shiftKey) {
      var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
        var firstTabbableNode = _ref.firstTabbableNode;
        return e.target === firstTabbableNode;
      });

      if (startOfGroupIndex >= 0) {
        var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
        var destinationGroup = state.tabbableGroups[destinationGroupIndex];
        destinationNode = destinationGroup.lastTabbableNode;
      }
    } else {
      var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
        var lastTabbableNode = _ref2.lastTabbableNode;
        return e.target === lastTabbableNode;
      });

      if (lastOfGroupIndex >= 0) {
        var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

        var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
        destinationNode = _destinationGroup.firstTabbableNode;
      }
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (config.clickOutsideDeactivates) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

      if (onActivate) {
        onActivate();
      }

      addListeners();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay(function () {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }

      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/shoestring/dist/shoestring-dev.js":
/*!********************************************************!*\
  !*** ./node_modules/shoestring/dist/shoestring-dev.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Shoestring - v2.0.1 - 2017-05-24
* http://github.com/filamentgroup/shoestring/
* Copyright (c) 2017 Scott Jehl, Filament Group, Inc; Licensed MIT & GPLv2 */ 
(function( factory ) {
	if( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! shoestring */ "./node_modules/shoestring/dist/shoestring-dev.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function () {
	var win = typeof window !== "undefined" ? window : this;
	var doc = win.document;


	/**
	 * The shoestring object constructor.
	 *
	 * @param {string,object} prim The selector to find or element to wrap.
	 * @param {object} sec The context in which to match the `prim` selector.
	 * @returns shoestring
	 * @this window
	 */
	function shoestring( prim, sec ){
		var pType = typeof( prim ),
				ret = [],
				sel;

		// return an empty shoestring object
		if( !prim ){
			return new Shoestring( ret );
		}

		// ready calls
		if( prim.call ){
			return shoestring.ready( prim );
		}

		// handle re-wrapping shoestring objects
		if( prim.constructor === Shoestring && !sec ){
			return prim;
		}

		// if string starting with <, make html
		if( pType === "string" && prim.indexOf( "<" ) === 0 ){
			var dfrag = doc.createElement( "div" );

			dfrag.innerHTML = prim;

			// TODO depends on children (circular)
			return shoestring( dfrag ).children().each(function(){
				dfrag.removeChild( this );
			});
		}

		// if string, it's a selector, use qsa
		if( pType === "string" ){
			if( sec ){
				return shoestring( sec ).find( prim );
			}

			try {
				sel = doc.querySelectorAll( prim );
			} catch( e ) {
				shoestring.error( 'queryselector', prim );
			}

			return new Shoestring( sel, prim );
		}

		// array like objects or node lists
		if( Object.prototype.toString.call( pType ) === '[object Array]' ||
				(win.NodeList && prim instanceof win.NodeList) ){

			return new Shoestring( prim, prim );
		}

		// if it's an array, use all the elements
		if( prim.constructor === Array ){
			return new Shoestring( prim, prim );
		}

		// otherwise assume it's an object the we want at an index
		return new Shoestring( [prim], prim );
	}

	var Shoestring = function( ret, prim ) {
		this.length = 0;
		this.selector = prim;
		shoestring.merge(this, ret);
	};

	// TODO only required for tests
	Shoestring.prototype.reverse = [].reverse;

	// For adding element set methods
	shoestring.fn = Shoestring.prototype;

	shoestring.Shoestring = Shoestring;

	// For extending objects
	// TODO move to separate module when we use prototypes
	shoestring.extend = function( first, second ){
		for( var i in second ){
			if( second.hasOwnProperty( i ) ){
				first[ i ] = second[ i ];
			}
		}

		return first;
	};

	// taken directly from jQuery
	shoestring.merge = function( first, second ) {
		var len, j, i;

		len = +second.length,
		j = 0,
		i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	};

	// expose
	win.shoestring = shoestring;



	shoestring.enUS = {
		errors: {
			"prefix": "Shoestring does not support",

			"ajax-url-query": "data with urls that have existing query params",
			"children-selector" : "passing selectors into .child, try .children().filter( selector )",
			"click": "the click method. Try using .on( 'click', function(){}) or .trigger( 'click' ) instead.",
			"css-get" : "getting computed attributes from the DOM.",
			"data-attr-alias": "the data method aliased to `data-` DOM attributes.",
			"each-length": "objects without a length passed into each",
			"has-class" : "the hasClass method. Try using .is( '.klassname' ) instead.",
			"html-function" : "passing a function into .html. Try generating the html you're passing in an outside function",
			"index-shoestring-object": "an index call with a shoestring object argument. Use .get(0) on the argument instead.",
			"live-delegate" : "the .live or .delegate methods. Use .bind or .on instead.",
			"map": "the map method. Try using .each to make a new object.",
			"next-selector" : "passing selectors into .next, try .next().filter( selector )",
			"off-delegate" : ".off( events, selector, handler ) or .off( events, selector ). Use .off( eventName, callback ) instead.",
			"next-until" : "the .nextUntil method. Use .next in a loop until you reach the selector, don't include the selector",
			"on-delegate" : "the .on method with three or more arguments. Using .on( eventName, callback ) instead.",
			"outer-width": "the outerWidth method. Try combining .width() with .css for padding-left, padding-right, and the border of the left and right side.",
			"prev-selector" : "passing selectors into .prev, try .prev().filter( selector )",
			"prevall-selector" : "passing selectors into .prevAll, try .prevAll().filter( selector )",
			"queryselector": "all CSS selectors on querySelector (varies per browser support). Specifically, this failed: ",
			"siblings-selector": "passing selector into siblings not supported, try .siblings().find( ... )",
			"show-hide": "the show or hide methods. Use display: block (or whatever you'd like it to be) or none instead",
			"text-setter": "setting text via the .text method.",
			"toggle-class" : "the toggleClass method. Try using addClass or removeClass instead.",
			"trim": "the trim method. Use String.prototype.trim."
		}
	};

	shoestring.error = function( id, str ) {
		var errors = shoestring.enUS.errors;
		throw new Error( errors.prefix + " " + errors[id] + ( str ? " " + str : "" ) );
	};



	/**
	 * Make an HTTP request to a url.
	 *
	 * **NOTE** the following options are supported:
	 *
	 * - *method* - The HTTP method used with the request. Default: `GET`.
	 * - *data* - Raw object with keys and values to pass with request as query params. Default `null`.
	 * - *headers* - Set of request headers to add. Default `{}`.
	 * - *async* - Whether the opened request is asynchronouse. Default `true`.
	 * - *success* - Callback for successful request and response. Passed the response data.
	 * - *error* - Callback for failed request and response.
	 * - *cancel* - Callback for cancelled request and response.
	 *
	 * @param {string} url The url to request.
	 * @param {object} options The options object, see Notes.
	 * @return shoestring
	 * @this shoestring
	 */

	shoestring.ajax = function( url, options ) {
		var params = "", req = new XMLHttpRequest(), settings, key;

		settings = shoestring.extend( {}, shoestring.ajax.settings );

		if( options ){
			shoestring.extend( settings, options );
		}

		if( !url ){
			url = settings.url;
		}

		if( !req || !url ){
			return;
		}

		// create parameter string from data object
		if( settings.data ){
			for( key in settings.data ){
				if( settings.data.hasOwnProperty( key ) ){
					if( params !== "" ){
						params += "&";
					}
					params += encodeURIComponent( key ) + "=" +
						encodeURIComponent( settings.data[key] );
				}
			}
		}

		// append params to url for GET requests
		if( settings.method === "GET" && params ){
						if( url.indexOf("?") >= 0 ){
				shoestring.error( 'ajax-url-query' );
			}
			
			url += "?" + params;
		}

		req.open( settings.method, url, settings.async );

		if( req.setRequestHeader ){
			req.setRequestHeader( "X-Requested-With", "XMLHttpRequest" );

			// Set 'Content-type' header for POST requests
			if( settings.method === "POST" && params ){
				req.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
			}

			for( key in settings.headers ){
				if( settings.headers.hasOwnProperty( key ) ){
					req.setRequestHeader(key, settings.headers[ key ]);
				}
			}
		}

		req.onreadystatechange = function () {
			if( req.readyState === 4 ){
				// Trim the whitespace so shoestring('<div>') works
				var res = (req.responseText || '').replace(/^\s+|\s+$/g, '');
				if( req.status.toString().indexOf( "0" ) === 0 ){
					return settings.cancel( res, req.status, req );
				}
				else if ( req.status.toString().match( /^(4|5)/ ) && RegExp.$1 ){
					return settings.error( res, req.status, req );
				}
				else if (settings.success) {
					return settings.success( res, req.status, req );
				}
			}
		};

		if( req.readyState === 4 ){
			return req;
		}

		// Send request
		if( settings.method === "POST" && params ){
			req.send( params );
		} else {
			req.send();
		}

		return req;
	};

	shoestring.ajax.settings = {
		success: function(){},
		error: function(){},
		cancel: function(){},
		method: "GET",
		async: true,
		data: null,
		headers: {}
	};



	/**
	 * Helper function wrapping a call to [ajax](ajax.js.html) using the `GET` method.
	 *
	 * @param {string} url The url to GET from.
	 * @param {function} callback Callback to invoke on success.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.get = function( url, callback ){
		return shoestring.ajax( url, { success: callback } );
	};



  /**
	 * Load the HTML response from `url` into the current set of elements.
	 *
	 * @param {string} url The url to GET from.
	 * @param {function} callback Callback to invoke after HTML is inserted.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.load = function( url, callback ){
		var self = this,
			args = arguments,
			intCB = function( data ){
				self.each(function(){
					shoestring( this ).html( data );
				});

				if( callback ){
					callback.apply( self, args );
				}
		  };

		shoestring.ajax( url, { success: intCB } );
		return this;
	};



	/**
	 * Helper function wrapping a call to [ajax](ajax.js.html) using the `POST` method.
	 *
	 * @param {string} url The url to POST to.
	 * @param {object} data The data to send.
	 * @param {function} callback Callback to invoke on success.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.post = function( url, data, callback ){
		return shoestring.ajax( url, { data: data, method: "POST", success: callback } );
	};



	/**
	 * Iterates over `shoestring` collections.
	 *
	 * @param {function} callback The callback to be invoked on each element and index
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.each = function( callback ){
		return shoestring.each( this, callback );
	};

	shoestring.each = function( collection, callback ) {
		var val;
		if( !( "length" in collection ) ) {
			shoestring.error( 'each-length' );
		}
		for( var i = 0, il = collection.length; i < il; i++ ){
			val = callback.call( collection[i], i, collection[i] );
			if( val === false ){
				break;
			}
		}

		return collection;
	};



  /**
	 * Check for array membership.
	 *
	 * @param {object} needle The thing to find.
	 * @param {object} haystack The thing to find the needle in.
	 * @return {boolean}
	 * @this window
	 */
	shoestring.inArray = function( needle, haystack ){
		var isin = -1;
		for( var i = 0, il = haystack.length; i < il; i++ ){
			if( haystack.hasOwnProperty( i ) && haystack[ i ] === needle ){
				isin = i;
			}
		}
		return isin;
	};



  /**
	 * Bind callbacks to be run when the DOM is "ready".
	 *
	 * @param {function} fn The callback to be run
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.ready = function( fn ){
		if( ready && fn ){
			fn.call( doc );
		}
		else if( fn ){
			readyQueue.push( fn );
		}
		else {
			runReady();
		}

		return [doc];
	};

	// TODO necessary?
	shoestring.fn.ready = function( fn ){
		shoestring.ready( fn );
		return this;
	};

	// Empty and exec the ready queue
	var ready = false,
		readyQueue = [],
		runReady = function(){
			if( !ready ){
				while( readyQueue.length ){
					readyQueue.shift().call( doc );
				}
				ready = true;
			}
		};

	// If DOM is already ready at exec time, depends on the browser.
	// From: https://github.com/mobify/mobifyjs/blob/526841be5509e28fc949038021799e4223479f8d/src/capture.js#L128
	if (doc.attachEvent ? doc.readyState === "complete" : doc.readyState !== "loading") {
		runReady();
	} else {
		doc.addEventListener( "DOMContentLoaded", runReady, false );
		doc.addEventListener( "readystatechange", runReady, false );
		win.addEventListener( "load", runReady, false );
	}



  /**
	 * Checks the current set of elements against the selector, if one matches return `true`.
	 *
	 * @param {string} selector The selector to check.
	 * @return {boolean}
	 * @this {shoestring}
	 */
	shoestring.fn.is = function( selector ){
		var ret = false, self = this, parents, check;

		// assume a dom element
		if( typeof selector !== "string" ){
			// array-like, ie shoestring objects or element arrays
			if( selector.length && selector[0] ){
				check = selector;
			} else {
				check = [selector];
			}

			return _checkElements(this, check);
		}

		parents = this.parent();

		if( !parents.length ){
			parents = shoestring( doc );
		}

		parents.each(function( i, e ) {
			var children;

				try {
					children = e.querySelectorAll( selector );
				} catch( e ) {
					shoestring.error( 'queryselector', selector );
				}

			ret = _checkElements( self, children );
		});

		return ret;
	};

	function _checkElements(needles, haystack){
		var ret = false;

		needles.each(function() {
			var j = 0;

			while( j < haystack.length ){
				if( this === haystack[j] ){
					ret = true;
				}

				j++;
			}
		});

		return ret;
	}



	/**
	 * Get data attached to the first element or set data values on all elements in the current set.
	 *
	 * @param {string} name The data attribute name.
	 * @param {any} value The value assigned to the data attribute.
	 * @return {any|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.data = function( name, value ){
		if( name !== undefined ){
			if( value !== undefined ){
				return this.each(function(){
					if( !this.shoestringData ){
						this.shoestringData = {};
					}

					this.shoestringData[ name ] = value;
				});
			}
			else {
				if( this[ 0 ] ) {
					if( this[ 0 ].shoestringData ) {
						return this[ 0 ].shoestringData[ name ];
					}
					if( shoestring( this[ 0 ] ).is( "[data-" + name + "]" ) ){
						shoestring.error( 'data-attr-alias' );
					}
				}
			}
		}
		else {
			return this[ 0 ] ? this[ 0 ].shoestringData || {} : undefined;
		}
	};


	/**
	 * Remove data associated with `name` or all the data, for each element in the current set.
	 *
	 * @param {string} name The data attribute name.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeData = function( name ){
		return this.each(function(){
			if( name !== undefined && this.shoestringData ){
				this.shoestringData[ name ] = undefined;
				delete this.shoestringData[ name ];
			}	else {
				this[ 0 ].shoestringData = {};
			}
		});
	};



	/**
	 * An alias for the `shoestring` constructor.
	 */
	win.$ = shoestring;



	/**
	 * Add a class to each DOM element in the set of elements.
	 *
	 * @param {string} className The name of the class to be added.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.addClass = function( className ){
		var classes = className.replace(/^\s+|\s+$/g, '').split( " " );

		return this.each(function(){
			for( var i = 0, il = classes.length; i < il; i++ ){
				if( this.className !== undefined &&
						(this.className === "" ||
						!this.className.match( new RegExp( "(^|\\s)" + classes[ i ] + "($|\\s)"))) ){
					this.className += " " + classes[ i ];
				}
			}
		});
	};



  /**
	 * Add elements matching the selector to the current set.
	 *
	 * @param {string} selector The selector for the elements to add from the DOM
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.add = function( selector ){
		var ret = [];
		this.each(function(){
			ret.push( this );
		});

		shoestring( selector ).each(function(){
			ret.push( this );
		});

		return shoestring( ret );
	};



	/**
	 * Insert an element or HTML string after each element in the current set.
	 *
	 * @param {string|HTMLElement} fragment The HTML or HTMLElement to insert.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.after = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		if( fragment.length > 1 ){
			fragment = fragment.reverse();
		}
		return this.each(function( i ){
			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				var insertEl = i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ];
				this.parentNode.insertBefore( insertEl, this.nextSibling );
			}
		});
	};



	/**
	 * Insert an element or HTML string as the last child of each element in the set.
	 *
	 * @param {string|HTMLElement} fragment The HTML or HTMLElement to insert.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.append = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){
			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				this.appendChild( i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ] );
			}
		});
	};



	/**
	 * Insert the current set as the last child of the elements matching the selector.
	 *
	 * @param {string} selector The selector after which to append the current set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.appendTo = function( selector ){
		return this.each(function(){
			shoestring( selector ).append( this );
		});
	};



  /**
	 * Get the value of the first element of the set or set the value of all the elements in the set.
	 *
	 * @param {string} name The attribute name.
	 * @param {string} value The new value for the attribute.
	 * @return {shoestring|string|undefined}
	 * @this {shoestring}
	 */
	shoestring.fn.attr = function( name, value ){
		var nameStr = typeof( name ) === "string";

		if( value !== undefined || !nameStr ){
			return this.each(function(){
				if( nameStr ){
					this.setAttribute( name, value );
				}	else {
					for( var i in name ){
						if( name.hasOwnProperty( i ) ){
							this.setAttribute( i, name[ i ] );
						}
					}
				}
			});
		} else {
			return this[ 0 ] ? this[ 0 ].getAttribute( name ) : undefined;
		}
	};



	/**
	 * Insert an element or HTML string before each element in the current set.
	 *
	 * @param {string|HTMLElement} fragment The HTML or HTMLElement to insert.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.before = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){
			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				this.parentNode.insertBefore( i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ], this );
			}
		});
	};



	/**
	 * Get the children of the current collection.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.children = function(){
				if( arguments.length > 0 ){
			shoestring.error( 'children-selector' );
		}
				var ret = [],
			childs,
			j;
		this.each(function(){
			childs = this.children;
			j = -1;

			while( j++ < childs.length-1 ){
				if( shoestring.inArray(  childs[ j ], ret ) === -1 ){
					ret.push( childs[ j ] );
				}
			}
		});
		return shoestring(ret);
	};



	/**
	 * Clone and return the current set of nodes into a new `shoestring` object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.clone = function() {
		var ret = [];

		this.each(function() {
			ret.push( this.cloneNode( true ) );
		});

		return shoestring( ret );
	};



	/**
	 * Find an element matching the selector in the set of the current element and its parents.
	 *
	 * @param {string} selector The selector used to identify the target element.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.closest = function( selector ){
		var ret = [];

		if( !selector ){
			return shoestring( ret );
		}

		this.each(function(){
			var element, $self = shoestring( element = this );

			if( $self.is(selector) ){
				ret.push( this );
				return;
			}

			while( element.parentElement ) {
				if( shoestring(element.parentElement).is(selector) ){
					ret.push( element.parentElement );
					break;
				}

				element = element.parentElement;
			}
		});

		return shoestring( ret );
	};



  shoestring.cssExceptions = {
		'float': [ 'cssFloat' ]
	};



	(function() {
		var cssExceptions = shoestring.cssExceptions;

		// marginRight instead of margin-right
		function convertPropertyName( str ) {
			return str.replace( /\-([A-Za-z])/g, function ( match, character ) {
				return character.toUpperCase();
			});
		}

		function _getStyle( element, property ) {
			return win.getComputedStyle( element, null ).getPropertyValue( property );
		}

		var vendorPrefixes = [ '', '-webkit-', '-ms-', '-moz-', '-o-', '-khtml-' ];

		/**
		 * Private function for getting the computed style of an element.
		 *
		 * **NOTE** Please use the [css](../css.js.html) method instead.
		 *
		 * @method _getStyle
		 * @param {HTMLElement} element The element we want the style property for.
		 * @param {string} property The css property we want the style for.
		 */
		shoestring._getStyle = function( element, property ) {
			var convert, value, j, k;

			if( cssExceptions[ property ] ) {
				for( j = 0, k = cssExceptions[ property ].length; j < k; j++ ) {
					value = _getStyle( element, cssExceptions[ property ][ j ] );

					if( value ) {
						return value;
					}
				}
			}

			for( j = 0, k = vendorPrefixes.length; j < k; j++ ) {
				convert = convertPropertyName( vendorPrefixes[ j ] + property );

				// VendorprefixKeyName || key-name
				value = _getStyle( element, convert );

				if( convert !== property ) {
					value = value || _getStyle( element, property );
				}

				if( vendorPrefixes[ j ] ) {
					// -vendorprefix-key-name
					value = value || _getStyle( element, vendorPrefixes[ j ] + property );
				}

				if( value ) {
					return value;
				}
			}

			return undefined;
		};
	})();



	(function() {
		var cssExceptions = shoestring.cssExceptions;

		// marginRight instead of margin-right
		function convertPropertyName( str ) {
			return str.replace( /\-([A-Za-z])/g, function ( match, character ) {
				return character.toUpperCase();
			});
		}

		/**
		 * Private function for setting the style of an element.
		 *
		 * **NOTE** Please use the [css](../css.js.html) method instead.
		 *
		 * @method _setStyle
		 * @param {HTMLElement} element The element we want to style.
		 * @param {string} property The property being used to style the element.
		 * @param {string} value The css value for the style property.
		 */
		shoestring._setStyle = function( element, property, value ) {
			var convertedProperty = convertPropertyName(property);

			element.style[ property ] = value;

			if( convertedProperty !== property ) {
				element.style[ convertedProperty ] = value;
			}

			if( cssExceptions[ property ] ) {
				for( var j = 0, k = cssExceptions[ property ].length; j<k; j++ ) {
					element.style[ cssExceptions[ property ][ j ] ] = value;
				}
			}
		};
	})();



	/**
	 * Get the compute style property of the first element or set the value of a style property
	 * on all elements in the set.
	 *
	 * @method _setStyle
	 * @param {string} property The property being used to style the element.
	 * @param {string|undefined} value The css value for the style property.
	 * @return {string|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.css = function( property, value ){
		if( !this[0] ){
			return;
		}

		if( typeof property === "object" ) {
			return this.each(function() {
				for( var key in property ) {
					if( property.hasOwnProperty( key ) ) {
						shoestring._setStyle( this, key, property[key] );
					}
				}
			});
		}	else {
			// assignment else retrieve first
			if( value !== undefined ){
				return this.each(function(){
					shoestring._setStyle( this, property, value );
				});
			}

			return shoestring._getStyle( this[0], property );
		}
	};



	/**
	 * Returns the indexed element wrapped in a new `shoestring` object.
	 *
	 * @param {integer} index The index of the element to wrap and return.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.eq = function( index ){
		if( this[index] ){
			return shoestring( this[index] );
		}

		return shoestring([]);
	};



	/**
	 * Filter out the current set if they do *not* match the passed selector or
	 * the supplied callback returns false
	 *
	 * @param {string,function} selector The selector or boolean return value callback used to filter the elements.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.filter = function( selector ){
		var ret = [];

		this.each(function( index ){
			var wsel;

			if( typeof selector === 'function' ) {
				if( selector.call( this, index ) !== false ) {
					ret.push( this );
				}
			// document node
			} else if( this.nodeType === 9 ){
				if( this === selector ) {
					ret.push( this );
				}
			} else {
				if( !this.parentNode ){
					var context = shoestring( doc.createDocumentFragment() );

					context[ 0 ].appendChild( this );
					wsel = shoestring( selector, context );
				} else {
					wsel = shoestring( selector, this.parentNode );
				}

				if( shoestring.inArray( this, wsel ) > -1 ){
					ret.push( this );
				}
			}
		});

		return shoestring( ret );
	};



	/**
	 * Find descendant elements of the current collection.
	 *
	 * @param {string} selector The selector used to find the children
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.find = function( selector ){
		var ret = [],
			finds;
		this.each(function(){
			try {
				finds = this.querySelectorAll( selector );
			} catch( e ) {
				shoestring.error( 'queryselector', selector );
			}

			for( var i = 0, il = finds.length; i < il; i++ ){
				ret = ret.concat( finds[i] );
			}
		});
		return shoestring( ret );
	};



	/**
	 * Returns the first element of the set wrapped in a new `shoestring` object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.first = function(){
		return this.eq( 0 );
	};



	/**
	 * Returns the raw DOM node at the passed index.
	 *
	 * @param {integer} index The index of the element to wrap and return.
	 * @return {HTMLElement|undefined|array}
	 * @this shoestring
	 */
	shoestring.fn.get = function( index ){

		// return an array of elements if index is undefined
		if( index === undefined ){
			var elements = [];

			for( var i = 0; i < this.length; i++ ){
				elements.push( this[ i ] );
			}

			return elements;
		} else {
			return this[ index ];
		}
	};



	/**
	 * Private function for setting/getting the offset property for height/width.
	 *
	 * **NOTE** Please use the [width](width.js.html) or [height](height.js.html) methods instead.
	 *
	 * @param {shoestring} set The set of elements.
	 * @param {string} name The string "height" or "width".
	 * @param {float|undefined} value The value to assign.
	 * @return shoestring
	 * @this window
	 */
	shoestring._dimension = function( set, name, value ){
		var offsetName;

		if( value === undefined ){
			offsetName = name.replace(/^[a-z]/, function( letter ) {
				return letter.toUpperCase();
			});

			return set[ 0 ][ "offset" + offsetName ];
		} else {
			// support integer values as pixels
			value = typeof value === "string" ? value : value + "px";

			return set.each(function(){
				this.style[ name ] = value;
			});
		}
	};



	/**
	 * Gets the height value of the first element or sets the height for the whole set.
	 *
	 * @param {float|undefined} value The value to assign.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.height = function( value ){
		return shoestring._dimension( this, "height", value );
	};



	var set = function( html ){
		if( typeof html === "string" || typeof html === "number" ){
			return this.each(function(){
				this.innerHTML = "" + html;
			});
		} else {
			var h = "";
			if( typeof html.length !== "undefined" ){
				for( var i = 0, l = html.length; i < l; i++ ){
					h += html[i].outerHTML;
				}
			} else {
				h = html.outerHTML;
			}
			return this.each(function(){
				this.innerHTML = h;
			});
		}
	};
	/**
	 * Gets or sets the `innerHTML` from all the elements in the set.
	 *
	 * @param {string|undefined} html The html to assign
	 * @return {string|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.html = function( html ){
				if( !!html && typeof html === "function" ){
			shoestring.error( 'html-function' );
		}
				if( typeof html !== "undefined" ){
			return set.call( this, html );
		} else { // get
			var pile = "";

			this.each(function(){
				pile += this.innerHTML;
			});

			return pile;
		}
	};



	(function() {
		function _getIndex( set, test ) {
			var i, result, element;

			for( i = result = 0; i < set.length; i++ ) {
				element = set.item ? set.item(i) : set[i];

				if( test(element) ){
					return result;
				}

				// ignore text nodes, etc
				// NOTE may need to be more permissive
				if( element.nodeType === 1 ){
					result++;
				}
			}

			return -1;
		}

		/**
		 * Find the index in the current set for the passed selector.
		 * Without a selector it returns the index of the first node within the array of its siblings.
		 *
		 * @param {string|undefined} selector The selector used to search for the index.
		 * @return {integer}
		 * @this {shoestring}
		 */
		shoestring.fn.index = function( selector ){
			var self, children;

			self = this;

			// no arg? check the children, otherwise check each element that matches
			if( selector === undefined ){
				children = ( ( this[ 0 ] && this[0].parentNode ) || doc.documentElement).childNodes;

				// check if the element matches the first of the set
				return _getIndex(children, function( element ) {
					return self[0] === element;
				});
			} else {
				if( selector.constructor === shoestring.Shoestring ) {
					shoestring.error( "index-shoestring-object" );
				}

				// check if the element matches the first selected node from the parent
				return _getIndex(self, function( element ) {
					return element === (shoestring( selector, element.parentNode )[ 0 ]);
				});
			}
		};
	})();



	/**
	 * Insert the current set after the elements matching the selector.
	 *
	 * @param {string} selector The selector after which to insert the current set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.insertAfter = function( selector ){
		return this.each(function(){
			shoestring( selector ).after( this );
		});
	};



	/**
	 * Insert the current set before the elements matching the selector.
	 *
	 * @param {string} selector The selector before which to insert the current set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.insertBefore = function( selector ){
		return this.each(function(){
			shoestring( selector ).before( this );
		});
	};



	/**
	 * Returns the last element of the set wrapped in a new `shoestring` object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.last = function(){
		return this.eq( this.length - 1 );
	};



	/**
	 * Returns a `shoestring` object with the set of siblings of each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.next = function(){
				if( arguments.length > 0 ){
			shoestring.error( 'next-selector' );
		}
		
		var result = [];

		// TODO need to implement map
		this.each(function() {
			var children, item, found;

			// get the child nodes for this member of the set
			children = shoestring( this.parentNode )[0].childNodes;

			for( var i = 0; i < children.length; i++ ){
				item = children.item( i );

				// found the item we needed (found) which means current item value is
				// the next node in the list, as long as it's viable grab it
				// NOTE may need to be more permissive
				if( found && item.nodeType === 1 ){
					result.push( item );
					break;
				}

				// find the current item and mark it as found
				if( item === this ){
					found = true;
				}
			}
		});

		return shoestring( result );
	};



	/**
	 * Removes elements from the current set.
	 *
	 * @param {string} selector The selector to use when removing the elements.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.not = function( selector ){
		var ret = [];

		this.each(function(){
			var found = shoestring( selector, this.parentNode );

			if( shoestring.inArray(this, found) === -1 ){
				ret.push( this );
			}
		});

		return shoestring( ret );
	};



	/**
	 * Returns an object with the `top` and `left` properties corresponging to the first elements offsets.
	 *
	 * @return object
	 * @this shoestring
	 */
	shoestring.fn.offset = function(){
		return {
			top: this[ 0 ].offsetTop,
			left: this[ 0 ].offsetLeft
		};
	};



	/**
	 * Returns the set of first parents for each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.parent = function(){
		var ret = [],
			parent;

		this.each(function(){
			// no parent node, assume top level
			// jQuery parent: return the document object for <html> or the parent node if it exists
			parent = (this === doc.documentElement ? doc : this.parentNode);

			// if there is a parent and it's not a document fragment
			if( parent && parent.nodeType !== 11 ){
				ret.push( parent );
			}
		});

		return shoestring(ret);
	};



	/**
	 * Returns the set of all parents matching the selector if provided for each element in the current set.
	 *
	 * @param {string} selector The selector to check the parents with.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.parents = function( selector ){
		var ret = [];

		this.each(function(){
			var curr = this, match;

			while( curr.parentElement && !match ){
				curr = curr.parentElement;

				if( selector ){
					if( curr === shoestring( selector )[0] ){
						match = true;

						if( shoestring.inArray( curr, ret ) === -1 ){
							ret.push( curr );
						}
					}
				} else {
					if( shoestring.inArray( curr, ret ) === -1 ){
						ret.push( curr );
					}
				}
			}
		});

		return shoestring(ret);
	};



	/**
	 * Add an HTML string or element before the children of each element in the current set.
	 *
	 * @param {string|HTMLElement} fragment The HTML string or element to add.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prepend = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){

			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				var insertEl = i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ];
				if ( this.firstChild ){
					this.insertBefore( insertEl, this.firstChild );
				} else {
					this.appendChild( insertEl );
				}
			}
		});
	};



	/**
	 * Add each element of the current set before the children of the selected elements.
	 *
	 * @param {string} selector The selector for the elements to add the current set to..
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prependTo = function( selector ){
		return this.each(function(){
			shoestring( selector ).prepend( this );
		});
	};



	/**
	 * Returns a `shoestring` object with the set of *one* siblingx before each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prev = function(){
				if( arguments.length > 0 ){
			shoestring.error( 'prev-selector' );
		}
		
		var result = [];

		// TODO need to implement map
		this.each(function() {
			var children, item, found;

			// get the child nodes for this member of the set
			children = shoestring( this.parentNode )[0].childNodes;

			for( var i = children.length -1; i >= 0; i-- ){
				item = children.item( i );

				// found the item we needed (found) which means current item value is
				// the next node in the list, as long as it's viable grab it
				// NOTE may need to be more permissive
				if( found && item.nodeType === 1 ){
					result.push( item );
					break;
				}

				// find the current item and mark it as found
				if( item === this ){
					found = true;
				}
			}
		});

		return shoestring( result );
	};



	/**
	 * Returns a `shoestring` object with the set of *all* siblings before each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prevAll = function(){
				if( arguments.length > 0 ){
			shoestring.error( 'prevall-selector' );
		}
		
		var result = [];

		this.each(function() {
			var $previous = shoestring( this ).prev();

			while( $previous.length ){
				result.push( $previous[0] );
				$previous = $previous.prev();
			}
		});

		return shoestring( result );
	};



	// Property normalization, a subset taken from jQuery src
	shoestring.propFix = {
		"class": "className",
		contenteditable: "contentEditable",
		"for": "htmlFor",
		readonly: "readOnly",
		tabindex: "tabIndex"
	};



	/**
	 * Gets the property value from the first element or sets the property value on all elements of the currrent set.
   *
	 * @param {string} name The property name.
   * @param {any} value The property value.
	 * @return {any|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.prop = function( name, value ){
		if( !this[0] ){
			return;
		}

		name = shoestring.propFix[ name ] || name;

		if( value !== undefined ){
			return this.each(function(){
				this[ name ] = value;
			});
		}	else {
			return this[ 0 ][ name ];
		}
	};



	/**
	 * Remove an attribute from each element in the current set.
	 *
	 * @param {string} name The name of the attribute.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeAttr = function( name ){
		return this.each(function(){
			this.removeAttribute( name );
		});
	};



	/**
	 * Remove a class from each DOM element in the set of elements.
	 *
	 * @param {string} className The name of the class to be removed.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeClass = function( cname ){
		var classes = cname.replace(/^\s+|\s+$/g, '').split( " " );

		return this.each(function(){
			var newClassName, regex;

			for( var i = 0, il = classes.length; i < il; i++ ){
				if( this.className !== undefined ){
					regex = new RegExp( "(^|\\s)" + classes[ i ] + "($|\\s)", "gmi" );
					newClassName = this.className.replace( regex, " " );

					this.className = newClassName.replace(/^\s+|\s+$/g, '');
				}
			}
		});
	};



	/**
	 * Remove the current set of elements from the DOM.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.remove = function(){
		return this.each(function(){
			if( this.parentNode ) {
				this.parentNode.removeChild( this );
			}
		});
	};



	/**
	 * Remove a proprety from each element in the current set.
	 *
	 * @param {string} name The name of the property.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeProp = function( property ){
		var name = shoestring.propFix[ property ] || property;

		return this.each(function(){
			this[ name ] = undefined;
			delete this[ name ];
		});
	};



	/**
	 * Replace each element in the current set with that argument HTML string or HTMLElement.
	 *
	 * @param {string|HTMLElement} fragment The value to assign.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.replaceWith = function( fragment ){
		if( typeof( fragment ) === "string" ){
			fragment = shoestring( fragment );
		}

		var ret = [];

		if( fragment.length > 1 ){
			fragment = fragment.reverse();
		}
		this.each(function( i ){
			var clone = this.cloneNode( true ),
				insertEl;
			ret.push( clone );

			// If there is no parentNode, this is pointless, drop it.
			if( !this.parentNode ){ return; }

			if( fragment.length === 1 ){
				insertEl = i > 0 ? fragment[ 0 ].cloneNode( true ) : fragment[ 0 ];
				this.parentNode.replaceChild( insertEl, this );
			} else {
				for( var j = 0, jl = fragment.length; j < jl; j++ ){
					insertEl = i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ];
					this.parentNode.insertBefore( insertEl, this.nextSibling );
				}
				this.parentNode.removeChild( this );
			}
		});

		return shoestring( ret );
	};



	shoestring.inputTypes = [
		"text",
		"hidden",
		"password",
		"color",
		"date",
		"datetime",
		// "datetime\-local" matched by datetime
		"email",
		"month",
		"number",
		"range",
		"search",
		"tel",
		"time",
		"url",
		"week"
	];

	shoestring.inputTypeTest = new RegExp( shoestring.inputTypes.join( "|" ) );


	/**
	 * Serialize child input element values into an object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.serialize = function(){
		var data = {};

		shoestring( "input, select", this ).each(function(){
			var type = this.type, name = this.name,	value = this.value;

			if( shoestring.inputTypeTest.test( type ) ||
					( type === "checkbox" || type === "radio" ) &&
					this.checked ){

				data[ name ] = value;
			}	else if( this.nodeName === "SELECT" ){
				data[ name ] = this.options[ this.selectedIndex ].nodeValue;
			}
		});

		return data;
	};



  /**
	 * Get all of the sibling elements for each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.siblings = function(){
				if( arguments.length > 0 ) {
			shoestring.error( 'siblings-selector' );
		}
		
		if( !this.length ) {
			return shoestring( [] );
		}

		var sibs = [], el = this[ 0 ].parentNode.firstChild;

		do {
			if( el.nodeType === 1 && el !== this[ 0 ] ) {
				sibs.push( el );
			}

      el = el.nextSibling;
		} while( el );

		return shoestring( sibs );
	};



	var getText = function( elem ){
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

  /**
	 * Recursively retrieve the text content of the each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.text = function() {
				if( arguments.length > 0 ){
			shoestring.error( 'text-setter' );
		}
		
		return getText( this );
	};




	/**
	 * Get the value of the first element or set the value of all elements in the current set.
	 *
	 * @param {string} value The value to set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.val = function( value ){
		var el;
		if( value !== undefined ){
			return this.each(function(){
				if( this.tagName === "SELECT" ){
					var optionSet, option,
						options = this.options,
						values = [],
						i = options.length,
						newIndex;

					values[0] = value;
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = shoestring.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
							newIndex = i;
						}
					}
					// force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						this.selectedIndex = -1;
					} else {
						this.selectedIndex = newIndex;
					}
				} else {
					this.value = value;
				}
			});
		} else {
			el = this[0];

			if( el.tagName === "SELECT" ){
				if( el.selectedIndex < 0 ){ return ""; }
				return el.options[ el.selectedIndex ].value;
			} else {
				return el.value;
			}
		}
	};



	/**
	 * Gets the width value of the first element or sets the width for the whole set.
	 *
	 * @param {float|undefined} value The value to assign.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.width = function( value ){
		return shoestring._dimension( this, "width", value );
	};



	/**
	 * Wraps the child elements in the provided HTML.
	 *
	 * @param {string} html The wrapping HTML.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.wrapInner = function( html ){
		return this.each(function(){
			var inH = this.innerHTML;

			this.innerHTML = "";
			shoestring( this ).append( shoestring( html ).html( inH ) );
		});
	};



	function initEventCache( el, evt ) {
		if ( !el.shoestringData ) {
			el.shoestringData = {};
		}
		if ( !el.shoestringData.events ) {
			el.shoestringData.events = {};
		}
		if ( !el.shoestringData.loop ) {
			el.shoestringData.loop = {};
		}
		if ( !el.shoestringData.events[ evt ] ) {
			el.shoestringData.events[ evt ] = [];
		}
	}

	function addToEventCache( el, evt, eventInfo ) {
		var obj = {};
		obj.isCustomEvent = eventInfo.isCustomEvent;
		obj.callback = eventInfo.callfunc;
		obj.originalCallback = eventInfo.originalCallback;
		obj.namespace = eventInfo.namespace;

		el.shoestringData.events[ evt ].push( obj );

		if( eventInfo.customEventLoop ) {
			el.shoestringData.loop[ evt ] = eventInfo.customEventLoop;
		}
	}

	/**
	 * Bind a callback to an event for the currrent set of elements.
	 *
	 * @param {string} evt The event(s) to watch for.
	 * @param {object,function} data Data to be included with each event or the callback.
	 * @param {function} originalCallback Callback to be invoked when data is define.d.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.bind = function( evt, data, originalCallback ){

				if( arguments.length > 3 ){
			shoestring.error( 'on-delegate' );
		}
		if( typeof data === "string" ){
			shoestring.error( 'on-delegate' );
		}
				if( typeof data === "function" ){
			originalCallback = data;
			data = null;
		}

		var evts = evt.split( " " );

		// NOTE the `triggeredElement` is purely for custom events from IE
		function encasedCallback( e, namespace, triggeredElement ){
			var result;

			if( e._namespace && e._namespace !== namespace ) {
				return;
			}

			e.data = data;
			e.namespace = e._namespace;

			var returnTrue = function(){
				return true;
			};

			e.isDefaultPrevented = function(){
				return false;
			};

			var originalPreventDefault = e.preventDefault;
			var preventDefaultConstructor = function(){
				if( originalPreventDefault ) {
					return function(){
						e.isDefaultPrevented = returnTrue;
						originalPreventDefault.call(e);
					};
				} else {
					return function(){
						e.isDefaultPrevented = returnTrue;
						e.returnValue = false;
					};
				}
			};

			// thanks https://github.com/jonathantneal/EventListener
			e.target = triggeredElement || e.target || e.srcElement;
			e.preventDefault = preventDefaultConstructor();
			e.stopPropagation = e.stopPropagation || function () {
				e.cancelBubble = true;
			};

			result = originalCallback.apply(this, [ e ].concat( e._args ) );

			if( result === false ){
				e.preventDefault();
				e.stopPropagation();
			}

			return result;
		}

		return this.each(function(){
			var domEventCallback,
				customEventCallback,
				customEventLoop,
				oEl = this;

			for( var i = 0, il = evts.length; i < il; i++ ){
				var split = evts[ i ].split( "." ),
					evt = split[ 0 ],
					namespace = split.length > 0 ? split[ 1 ] : null;

				domEventCallback = function( originalEvent ) {
					if( oEl.ssEventTrigger ) {
						originalEvent._namespace = oEl.ssEventTrigger._namespace;
						originalEvent._args = oEl.ssEventTrigger._args;

						oEl.ssEventTrigger = null;
					}
					return encasedCallback.call( oEl, originalEvent, namespace );
				};
				customEventCallback = null;
				customEventLoop = null;

				initEventCache( this, evt );

				this.addEventListener( evt, domEventCallback, false );

				addToEventCache( this, evt, {
					callfunc: customEventCallback || domEventCallback,
					isCustomEvent: !!customEventCallback,
					customEventLoop: customEventLoop,
					originalCallback: originalCallback,
					namespace: namespace
				});
			}
		});
	};

	shoestring.fn.on = shoestring.fn.bind;

		shoestring.fn.live = function(){
		shoestring.error( 'live-delegate' );
	};

	shoestring.fn.delegate = function(){
		shoestring.error( 'live-delegate' );
	};
	


	/**
	 * Unbind a previous bound callback for an event.
	 *
	 * @param {string} event The event(s) the callback was bound to..
	 * @param {function} callback Callback to unbind.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.unbind = function( event, callback ){

				if( arguments.length >= 3 || typeof callback === "string" ){
			shoestring.error( 'off-delegate' );
		}
		
		var evts = event ? event.split( " " ) : [];

		return this.each(function(){
			if( !this.shoestringData || !this.shoestringData.events ) {
				return;
			}

			if( !evts.length ) {
				unbindAll.call( this );
			} else {
				var split, evt, namespace;
				for( var i = 0, il = evts.length; i < il; i++ ){
					split = evts[ i ].split( "." ),
					evt = split[ 0 ],
					namespace = split.length > 0 ? split[ 1 ] : null;

					if( evt ) {
						unbind.call( this, evt, namespace, callback );
					} else {
						unbindAll.call( this, namespace, callback );
					}
				}
			}
		});
	};

	function unbind( evt, namespace, callback ) {
		var bound = this.shoestringData.events[ evt ];
		if( !(bound && bound.length) ) {
			return;
		}

		var matched = [], j, jl;
		for( j = 0, jl = bound.length; j < jl; j++ ) {
			if( !namespace || namespace === bound[ j ].namespace ) {
				if( callback === undefined || callback === bound[ j ].originalCallback ) {
					this.removeEventListener( evt, bound[ j ].callback, false );
					matched.push( j );
				}
			}
		}

		for( j = 0, jl = matched.length; j < jl; j++ ) {
			this.shoestringData.events[ evt ].splice( j, 1 );
		}
	}

	function unbindAll( namespace, callback ) {
		for( var evtKey in this.shoestringData.events ) {
			unbind.call( this, evtKey, namespace, callback );
		}
	}

	shoestring.fn.off = shoestring.fn.unbind;


	/**
	 * Bind a callback to an event for the currrent set of elements, unbind after one occurence.
	 *
	 * @param {string} event The event(s) to watch for.
	 * @param {function} callback Callback to invoke on the event.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.one = function( event, callback ){
		var evts = event.split( " " );

		return this.each(function(){
			var thisevt, cbs = {},	$t = shoestring( this );

			for( var i = 0, il = evts.length; i < il; i++ ){
				thisevt = evts[ i ];

				cbs[ thisevt ] = function( e ){
					var $t = shoestring( this );

					for( var j in cbs ) {
						$t.unbind( j, cbs[ j ] );
					}

					return callback.apply( this, [ e ].concat( e._args ) );
				};

				$t.bind( thisevt, cbs[ thisevt ] );
			}
		});
	};



	/**
	 * Trigger an event on the first element in the set, no bubbling, no defaults.
	 *
	 * @param {string} event The event(s) to trigger.
	 * @param {object} args Arguments to append to callback invocations.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.triggerHandler = function( event, args ){
		var e = event.split( " " )[ 0 ],
			el = this[ 0 ],
			ret;

		// See this.fireEvent( 'on' + evts[ i ], document.createEventObject() ); instead of click() etc in trigger.
		if( doc.createEvent && el.shoestringData && el.shoestringData.events && el.shoestringData.events[ e ] ){
			var bindings = el.shoestringData.events[ e ];
			for (var i in bindings ){
				if( bindings.hasOwnProperty( i ) ){
					event = doc.createEvent( "Event" );
					event.initEvent( e, true, true );
					event._args = args;
					args.unshift( event );

					ret = bindings[ i ].originalCallback.apply( event.target, args );
				}
			}
		}

		return ret;
	};



	/**
	 * Trigger an event on each of the DOM elements in the current set.
	 *
	 * @param {string} event The event(s) to trigger.
	 * @param {object} args Arguments to append to callback invocations.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.trigger = function( event, args ){
		var evts = event.split( " " );

		return this.each(function(){
			var split, evt, namespace;
			for( var i = 0, il = evts.length; i < il; i++ ){
				split = evts[ i ].split( "." ),
				evt = split[ 0 ],
				namespace = split.length > 0 ? split[ 1 ] : null;

				if( evt === "click" ){
					if( this.tagName === "INPUT" && this.type === "checkbox" && this.click ){
						this.click();
						return false;
					}
				}

				if( doc.createEvent ){
					var event = doc.createEvent( "Event" );
					event.initEvent( evt, true, true );
					event._args = args;
					event._namespace = namespace;

					this.dispatchEvent( event );
				}
			}
		});
	};




		shoestring.fn.hasClass = function(){
		shoestring.error( 'has-class' );
	};
	


		shoestring.fn.hide = function(){
		shoestring.error( 'show-hide' );
	};
	


		shoestring.fn.outerWidth = function(){
		shoestring.error( 'outer-width' );
	};
	


		shoestring.fn.show = function(){
		shoestring.error( 'show-hide' );
	};
	


		shoestring.fn.click = function(){
		shoestring.error( 'click' );
	};
	


		shoestring.map = function(){
		shoestring.error( 'map' );
	};
	


		shoestring.fn.map = function(){
		shoestring.error( 'map' );
	};
	


		shoestring.trim = function(){
		shoestring.error( 'trim' );
	};
	


	(function() {
		shoestring.trackedMethodsKey = "shoestringMethods";

		// simple check for localStorage from Modernizr - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
		function supportsStorage() {
			var mod = "modernizr";
			try {
				localStorage.setItem(mod, mod);
				localStorage.removeItem(mod);
				return true;
			} catch(e) {
				return false;
			}
		}

		// return a new function closed over the old implementation
		function recordProxy( old, name ) {
			return function() {
				var tracked;
				try {
					tracked = JSON.parse(win.localStorage.getItem( shoestring.trackedMethodsKey ) || "{}");
				} catch (e) {
					if( e instanceof SyntaxError) {
						tracked = {};
					}
				}

				tracked[ name ] = true;
				win.localStorage.setItem( shoestring.trackedMethodsKey, JSON.stringify(tracked) );

				return old.apply(this, arguments);
			};
		}

		// proxy each of the methods defined on fn
		if( supportsStorage() ){
			for( var method in shoestring.fn ){
				if( shoestring.fn.hasOwnProperty(method) ) {
					shoestring.fn[ method ] = recordProxy(shoestring.fn[ method ], method);
				}
			}
		}
	})();



	return shoestring;
}));


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.1.4
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;
  var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  while (node) {
    if (getComputedStyle(node).display === 'none') {
      return true;
    }

    node = node.parentElement;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable);
  return candidates;
};

var isTabbable = function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/tablesaw/dist/tablesaw.js":
/*!************************************************!*\
  !*** ./node_modules/tablesaw/dist/tablesaw.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Tablesaw - v3.1.2 - 2019-03-19
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2019 Filament Group; Licensed MIT */
/*! Shoestring - v2.0.0 - 2017-02-14
* http://github.com/filamentgroup/shoestring/
* Copyright (c) 2017 Scott Jehl, Filament Group, Inc; Licensed MIT & GPLv2 */ 
(function( factory ) {
	if( true ) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! shoestring */ "./node_modules/shoestring/dist/shoestring-dev.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function () {
	var win = typeof window !== "undefined" ? window : this;
	var doc = win.document;


	/**
	 * The shoestring object constructor.
	 *
	 * @param {string,object} prim The selector to find or element to wrap.
	 * @param {object} sec The context in which to match the `prim` selector.
	 * @returns shoestring
	 * @this window
	 */
	function shoestring( prim, sec ){
		var pType = typeof( prim ),
				ret = [],
				sel;

		// return an empty shoestring object
		if( !prim ){
			return new Shoestring( ret );
		}

		// ready calls
		if( prim.call ){
			return shoestring.ready( prim );
		}

		// handle re-wrapping shoestring objects
		if( prim.constructor === Shoestring && !sec ){
			return prim;
		}

		// if string starting with <, make html
		if( pType === "string" && prim.indexOf( "<" ) === 0 ){
			var dfrag = doc.createElement( "div" );

			dfrag.innerHTML = prim;

			// TODO depends on children (circular)
			return shoestring( dfrag ).children().each(function(){
				dfrag.removeChild( this );
			});
		}

		// if string, it's a selector, use qsa
		if( pType === "string" ){
			if( sec ){
				return shoestring( sec ).find( prim );
			}

				sel = doc.querySelectorAll( prim );

			return new Shoestring( sel, prim );
		}

		// array like objects or node lists
		if( Object.prototype.toString.call( pType ) === '[object Array]' ||
				(win.NodeList && prim instanceof win.NodeList) ){

			return new Shoestring( prim, prim );
		}

		// if it's an array, use all the elements
		if( prim.constructor === Array ){
			return new Shoestring( prim, prim );
		}

		// otherwise assume it's an object the we want at an index
		return new Shoestring( [prim], prim );
	}

	var Shoestring = function( ret, prim ) {
		this.length = 0;
		this.selector = prim;
		shoestring.merge(this, ret);
	};

	// TODO only required for tests
	Shoestring.prototype.reverse = [].reverse;

	// For adding element set methods
	shoestring.fn = Shoestring.prototype;

	shoestring.Shoestring = Shoestring;

	// For extending objects
	// TODO move to separate module when we use prototypes
	shoestring.extend = function( first, second ){
		for( var i in second ){
			if( second.hasOwnProperty( i ) ){
				first[ i ] = second[ i ];
			}
		}

		return first;
	};

	// taken directly from jQuery
	shoestring.merge = function( first, second ) {
		var len, j, i;

		len = +second.length,
		j = 0,
		i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	};

	// expose
	win.shoestring = shoestring;



	/**
	 * Iterates over `shoestring` collections.
	 *
	 * @param {function} callback The callback to be invoked on each element and index
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.each = function( callback ){
		return shoestring.each( this, callback );
	};

	shoestring.each = function( collection, callback ) {
		var val;
		for( var i = 0, il = collection.length; i < il; i++ ){
			val = callback.call( collection[i], i, collection[i] );
			if( val === false ){
				break;
			}
		}

		return collection;
	};



  /**
	 * Check for array membership.
	 *
	 * @param {object} needle The thing to find.
	 * @param {object} haystack The thing to find the needle in.
	 * @return {boolean}
	 * @this window
	 */
	shoestring.inArray = function( needle, haystack ){
		var isin = -1;
		for( var i = 0, il = haystack.length; i < il; i++ ){
			if( haystack.hasOwnProperty( i ) && haystack[ i ] === needle ){
				isin = i;
			}
		}
		return isin;
	};



  /**
	 * Bind callbacks to be run when the DOM is "ready".
	 *
	 * @param {function} fn The callback to be run
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.ready = function( fn ){
		if( ready && fn ){
			fn.call( doc );
		}
		else if( fn ){
			readyQueue.push( fn );
		}
		else {
			runReady();
		}

		return [doc];
	};

	// TODO necessary?
	shoestring.fn.ready = function( fn ){
		shoestring.ready( fn );
		return this;
	};

	// Empty and exec the ready queue
	var ready = false,
		readyQueue = [],
		runReady = function(){
			if( !ready ){
				while( readyQueue.length ){
					readyQueue.shift().call( doc );
				}
				ready = true;
			}
		};

	// If DOM is already ready at exec time, depends on the browser.
	// From: https://github.com/mobify/mobifyjs/blob/526841be5509e28fc949038021799e4223479f8d/src/capture.js#L128
	if (doc.attachEvent ? doc.readyState === "complete" : doc.readyState !== "loading") {
		runReady();
	} else {
		doc.addEventListener( "DOMContentLoaded", runReady, false );
		doc.addEventListener( "readystatechange", runReady, false );
		win.addEventListener( "load", runReady, false );
	}



  /**
	 * Checks the current set of elements against the selector, if one matches return `true`.
	 *
	 * @param {string} selector The selector to check.
	 * @return {boolean}
	 * @this {shoestring}
	 */
	shoestring.fn.is = function( selector ){
		var ret = false, self = this, parents, check;

		// assume a dom element
		if( typeof selector !== "string" ){
			// array-like, ie shoestring objects or element arrays
			if( selector.length && selector[0] ){
				check = selector;
			} else {
				check = [selector];
			}

			return _checkElements(this, check);
		}

		parents = this.parent();

		if( !parents.length ){
			parents = shoestring( doc );
		}

		parents.each(function( i, e ) {
			var children;

					children = e.querySelectorAll( selector );

			ret = _checkElements( self, children );
		});

		return ret;
	};

	function _checkElements(needles, haystack){
		var ret = false;

		needles.each(function() {
			var j = 0;

			while( j < haystack.length ){
				if( this === haystack[j] ){
					ret = true;
				}

				j++;
			}
		});

		return ret;
	}



	/**
	 * Get data attached to the first element or set data values on all elements in the current set.
	 *
	 * @param {string} name The data attribute name.
	 * @param {any} value The value assigned to the data attribute.
	 * @return {any|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.data = function( name, value ){
		if( name !== undefined ){
			if( value !== undefined ){
				return this.each(function(){
					if( !this.shoestringData ){
						this.shoestringData = {};
					}

					this.shoestringData[ name ] = value;
				});
			}
			else {
				if( this[ 0 ] ) {
					if( this[ 0 ].shoestringData ) {
						return this[ 0 ].shoestringData[ name ];
					}
				}
			}
		}
		else {
			return this[ 0 ] ? this[ 0 ].shoestringData || {} : undefined;
		}
	};


	/**
	 * Remove data associated with `name` or all the data, for each element in the current set.
	 *
	 * @param {string} name The data attribute name.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeData = function( name ){
		return this.each(function(){
			if( name !== undefined && this.shoestringData ){
				this.shoestringData[ name ] = undefined;
				delete this.shoestringData[ name ];
			}	else {
				this[ 0 ].shoestringData = {};
			}
		});
	};



	/**
	 * An alias for the `shoestring` constructor.
	 */
	win.$ = shoestring;



	/**
	 * Add a class to each DOM element in the set of elements.
	 *
	 * @param {string} className The name of the class to be added.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.addClass = function( className ){
		var classes = className.replace(/^\s+|\s+$/g, '').split( " " );

		return this.each(function(){
			for( var i = 0, il = classes.length; i < il; i++ ){
				if( this.className !== undefined &&
						(this.className === "" ||
						!this.className.match( new RegExp( "(^|\\s)" + classes[ i ] + "($|\\s)"))) ){
					this.className += " " + classes[ i ];
				}
			}
		});
	};



  /**
	 * Add elements matching the selector to the current set.
	 *
	 * @param {string} selector The selector for the elements to add from the DOM
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.add = function( selector ){
		var ret = [];
		this.each(function(){
			ret.push( this );
		});

		shoestring( selector ).each(function(){
			ret.push( this );
		});

		return shoestring( ret );
	};



	/**
	 * Insert an element or HTML string as the last child of each element in the set.
	 *
	 * @param {string|HTMLElement} fragment The HTML or HTMLElement to insert.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.append = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){
			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				this.appendChild( i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ] );
			}
		});
	};



	/**
	 * Insert the current set as the last child of the elements matching the selector.
	 *
	 * @param {string} selector The selector after which to append the current set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.appendTo = function( selector ){
		return this.each(function(){
			shoestring( selector ).append( this );
		});
	};



  /**
	 * Get the value of the first element of the set or set the value of all the elements in the set.
	 *
	 * @param {string} name The attribute name.
	 * @param {string} value The new value for the attribute.
	 * @return {shoestring|string|undefined}
	 * @this {shoestring}
	 */
	shoestring.fn.attr = function( name, value ){
		var nameStr = typeof( name ) === "string";

		if( value !== undefined || !nameStr ){
			return this.each(function(){
				if( nameStr ){
					this.setAttribute( name, value );
				}	else {
					for( var i in name ){
						if( name.hasOwnProperty( i ) ){
							this.setAttribute( i, name[ i ] );
						}
					}
				}
			});
		} else {
			return this[ 0 ] ? this[ 0 ].getAttribute( name ) : undefined;
		}
	};



	/**
	 * Insert an element or HTML string before each element in the current set.
	 *
	 * @param {string|HTMLElement} fragment The HTML or HTMLElement to insert.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.before = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){
			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				this.parentNode.insertBefore( i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ], this );
			}
		});
	};



	/**
	 * Get the children of the current collection.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.children = function(){
				var ret = [],
			childs,
			j;
		this.each(function(){
			childs = this.children;
			j = -1;

			while( j++ < childs.length-1 ){
				if( shoestring.inArray(  childs[ j ], ret ) === -1 ){
					ret.push( childs[ j ] );
				}
			}
		});
		return shoestring(ret);
	};



	/**
	 * Find an element matching the selector in the set of the current element and its parents.
	 *
	 * @param {string} selector The selector used to identify the target element.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.closest = function( selector ){
		var ret = [];

		if( !selector ){
			return shoestring( ret );
		}

		this.each(function(){
			var element, $self = shoestring( element = this );

			if( $self.is(selector) ){
				ret.push( this );
				return;
			}

			while( element.parentElement ) {
				if( shoestring(element.parentElement).is(selector) ){
					ret.push( element.parentElement );
					break;
				}

				element = element.parentElement;
			}
		});

		return shoestring( ret );
	};



  shoestring.cssExceptions = {
		'float': [ 'cssFloat' ]
	};



	(function() {
		var cssExceptions = shoestring.cssExceptions;

		// IE8 uses marginRight instead of margin-right
		function convertPropertyName( str ) {
			return str.replace( /\-([A-Za-z])/g, function ( match, character ) {
				return character.toUpperCase();
			});
		}

		function _getStyle( element, property ) {
			return win.getComputedStyle( element, null ).getPropertyValue( property );
		}

		var vendorPrefixes = [ '', '-webkit-', '-ms-', '-moz-', '-o-', '-khtml-' ];

		/**
		 * Private function for getting the computed style of an element.
		 *
		 * **NOTE** Please use the [css](../css.js.html) method instead.
		 *
		 * @method _getStyle
		 * @param {HTMLElement} element The element we want the style property for.
		 * @param {string} property The css property we want the style for.
		 */
		shoestring._getStyle = function( element, property ) {
			var convert, value, j, k;

			if( cssExceptions[ property ] ) {
				for( j = 0, k = cssExceptions[ property ].length; j < k; j++ ) {
					value = _getStyle( element, cssExceptions[ property ][ j ] );

					if( value ) {
						return value;
					}
				}
			}

			for( j = 0, k = vendorPrefixes.length; j < k; j++ ) {
				convert = convertPropertyName( vendorPrefixes[ j ] + property );

				// VendorprefixKeyName || key-name
				value = _getStyle( element, convert );

				if( convert !== property ) {
					value = value || _getStyle( element, property );
				}

				if( vendorPrefixes[ j ] ) {
					// -vendorprefix-key-name
					value = value || _getStyle( element, vendorPrefixes[ j ] + property );
				}

				if( value ) {
					return value;
				}
			}

			return undefined;
		};
	})();



	(function() {
		var cssExceptions = shoestring.cssExceptions;

		// IE8 uses marginRight instead of margin-right
		function convertPropertyName( str ) {
			return str.replace( /\-([A-Za-z])/g, function ( match, character ) {
				return character.toUpperCase();
			});
		}

		/**
		 * Private function for setting the style of an element.
		 *
		 * **NOTE** Please use the [css](../css.js.html) method instead.
		 *
		 * @method _setStyle
		 * @param {HTMLElement} element The element we want to style.
		 * @param {string} property The property being used to style the element.
		 * @param {string} value The css value for the style property.
		 */
		shoestring._setStyle = function( element, property, value ) {
			var convertedProperty = convertPropertyName(property);

			element.style[ property ] = value;

			if( convertedProperty !== property ) {
				element.style[ convertedProperty ] = value;
			}

			if( cssExceptions[ property ] ) {
				for( var j = 0, k = cssExceptions[ property ].length; j<k; j++ ) {
					element.style[ cssExceptions[ property ][ j ] ] = value;
				}
			}
		};
	})();



	/**
	 * Get the compute style property of the first element or set the value of a style property
	 * on all elements in the set.
	 *
	 * @method _setStyle
	 * @param {string} property The property being used to style the element.
	 * @param {string|undefined} value The css value for the style property.
	 * @return {string|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.css = function( property, value ){
		if( !this[0] ){
			return;
		}

		if( typeof property === "object" ) {
			return this.each(function() {
				for( var key in property ) {
					if( property.hasOwnProperty( key ) ) {
						shoestring._setStyle( this, key, property[key] );
					}
				}
			});
		}	else {
			// assignment else retrieve first
			if( value !== undefined ){
				return this.each(function(){
					shoestring._setStyle( this, property, value );
				});
			}

			return shoestring._getStyle( this[0], property );
		}
	};



	/**
	 * Returns the indexed element wrapped in a new `shoestring` object.
	 *
	 * @param {integer} index The index of the element to wrap and return.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.eq = function( index ){
		if( this[index] ){
			return shoestring( this[index] );
		}

		return shoestring([]);
	};



	/**
	 * Filter out the current set if they do *not* match the passed selector or
	 * the supplied callback returns false
	 *
	 * @param {string,function} selector The selector or boolean return value callback used to filter the elements.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.filter = function( selector ){
		var ret = [];

		this.each(function( index ){
			var wsel;

			if( typeof selector === 'function' ) {
				if( selector.call( this, index ) !== false ) {
					ret.push( this );
				}
			} else {
				if( !this.parentNode ){
					var context = shoestring( doc.createDocumentFragment() );

					context[ 0 ].appendChild( this );
					wsel = shoestring( selector, context );
				} else {
					wsel = shoestring( selector, this.parentNode );
				}

				if( shoestring.inArray( this, wsel ) > -1 ){
					ret.push( this );
				}
			}
		});

		return shoestring( ret );
	};



	/**
	 * Find descendant elements of the current collection.
	 *
	 * @param {string} selector The selector used to find the children
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.find = function( selector ){
		var ret = [],
			finds;
		this.each(function(){
				finds = this.querySelectorAll( selector );

			for( var i = 0, il = finds.length; i < il; i++ ){
				ret = ret.concat( finds[i] );
			}
		});
		return shoestring( ret );
	};



	/**
	 * Returns the first element of the set wrapped in a new `shoestring` object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.first = function(){
		return this.eq( 0 );
	};



	/**
	 * Returns the raw DOM node at the passed index.
	 *
	 * @param {integer} index The index of the element to wrap and return.
	 * @return {HTMLElement|undefined|array}
	 * @this shoestring
	 */
	shoestring.fn.get = function( index ){

		// return an array of elements if index is undefined
		if( index === undefined ){
			var elements = [];

			for( var i = 0; i < this.length; i++ ){
				elements.push( this[ i ] );
			}

			return elements;
		} else {
			return this[ index ];
		}
	};



	var set = function( html ){
		if( typeof html === "string" || typeof html === "number" ){
			return this.each(function(){
				this.innerHTML = "" + html;
			});
		} else {
			var h = "";
			if( typeof html.length !== "undefined" ){
				for( var i = 0, l = html.length; i < l; i++ ){
					h += html[i].outerHTML;
				}
			} else {
				h = html.outerHTML;
			}
			return this.each(function(){
				this.innerHTML = h;
			});
		}
	};
	/**
	 * Gets or sets the `innerHTML` from all the elements in the set.
	 *
	 * @param {string|undefined} html The html to assign
	 * @return {string|shoestring}
	 * @this shoestring
	 */
	shoestring.fn.html = function( html ){
				if( typeof html !== "undefined" ){
			return set.call( this, html );
		} else { // get
			var pile = "";

			this.each(function(){
				pile += this.innerHTML;
			});

			return pile;
		}
	};



	(function() {
		function _getIndex( set, test ) {
			var i, result, element;

			for( i = result = 0; i < set.length; i++ ) {
				element = set.item ? set.item(i) : set[i];

				if( test(element) ){
					return result;
				}

				// ignore text nodes, etc
				// NOTE may need to be more permissive
				if( element.nodeType === 1 ){
					result++;
				}
			}

			return -1;
		}

		/**
		 * Find the index in the current set for the passed selector.
		 * Without a selector it returns the index of the first node within the array of its siblings.
		 *
		 * @param {string|undefined} selector The selector used to search for the index.
		 * @return {integer}
		 * @this {shoestring}
		 */
		shoestring.fn.index = function( selector ){
			var self, children;

			self = this;

			// no arg? check the children, otherwise check each element that matches
			if( selector === undefined ){
				children = ( ( this[ 0 ] && this[0].parentNode ) || doc.documentElement).childNodes;

				// check if the element matches the first of the set
				return _getIndex(children, function( element ) {
					return self[0] === element;
				});
			} else {

				// check if the element matches the first selected node from the parent
				return _getIndex(self, function( element ) {
					return element === (shoestring( selector, element.parentNode )[ 0 ]);
				});
			}
		};
	})();



	/**
	 * Insert the current set before the elements matching the selector.
	 *
	 * @param {string} selector The selector before which to insert the current set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.insertBefore = function( selector ){
		return this.each(function(){
			shoestring( selector ).before( this );
		});
	};



	/**
	 * Returns the last element of the set wrapped in a new `shoestring` object.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.last = function(){
		return this.eq( this.length - 1 );
	};



	/**
	 * Returns a `shoestring` object with the set of siblings of each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.next = function(){
		
		var result = [];

		// TODO need to implement map
		this.each(function() {
			var children, item, found;

			// get the child nodes for this member of the set
			children = shoestring( this.parentNode )[0].childNodes;

			for( var i = 0; i < children.length; i++ ){
				item = children.item( i );

				// found the item we needed (found) which means current item value is
				// the next node in the list, as long as it's viable grab it
				// NOTE may need to be more permissive
				if( found && item.nodeType === 1 ){
					result.push( item );
					break;
				}

				// find the current item and mark it as found
				if( item === this ){
					found = true;
				}
			}
		});

		return shoestring( result );
	};



	/**
	 * Removes elements from the current set.
	 *
	 * @param {string} selector The selector to use when removing the elements.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.not = function( selector ){
		var ret = [];

		this.each(function(){
			var found = shoestring( selector, this.parentNode );

			if( shoestring.inArray(this, found) === -1 ){
				ret.push( this );
			}
		});

		return shoestring( ret );
	};



	/**
	 * Returns the set of first parents for each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.parent = function(){
		var ret = [],
			parent;

		this.each(function(){
			// no parent node, assume top level
			// jQuery parent: return the document object for <html> or the parent node if it exists
			parent = (this === doc.documentElement ? doc : this.parentNode);

			// if there is a parent and it's not a document fragment
			if( parent && parent.nodeType !== 11 ){
				ret.push( parent );
			}
		});

		return shoestring(ret);
	};



	/**
	 * Add an HTML string or element before the children of each element in the current set.
	 *
	 * @param {string|HTMLElement} fragment The HTML string or element to add.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prepend = function( fragment ){
		if( typeof( fragment ) === "string" || fragment.nodeType !== undefined ){
			fragment = shoestring( fragment );
		}

		return this.each(function( i ){

			for( var j = 0, jl = fragment.length; j < jl; j++ ){
				var insertEl = i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ];
				if ( this.firstChild ){
					this.insertBefore( insertEl, this.firstChild );
				} else {
					this.appendChild( insertEl );
				}
			}
		});
	};



	/**
	 * Returns a `shoestring` object with the set of *one* siblingx before each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prev = function(){
		
		var result = [];

		// TODO need to implement map
		this.each(function() {
			var children, item, found;

			// get the child nodes for this member of the set
			children = shoestring( this.parentNode )[0].childNodes;

			for( var i = children.length -1; i >= 0; i-- ){
				item = children.item( i );

				// found the item we needed (found) which means current item value is
				// the next node in the list, as long as it's viable grab it
				// NOTE may need to be more permissive
				if( found && item.nodeType === 1 ){
					result.push( item );
					break;
				}

				// find the current item and mark it as found
				if( item === this ){
					found = true;
				}
			}
		});

		return shoestring( result );
	};



	/**
	 * Returns a `shoestring` object with the set of *all* siblings before each element in the original set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.prevAll = function(){
		
		var result = [];

		this.each(function() {
			var $previous = shoestring( this ).prev();

			while( $previous.length ){
				result.push( $previous[0] );
				$previous = $previous.prev();
			}
		});

		return shoestring( result );
	};



	/**
	 * Remove an attribute from each element in the current set.
	 *
	 * @param {string} name The name of the attribute.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeAttr = function( name ){
		return this.each(function(){
			this.removeAttribute( name );
		});
	};



	/**
	 * Remove a class from each DOM element in the set of elements.
	 *
	 * @param {string} className The name of the class to be removed.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.removeClass = function( cname ){
		var classes = cname.replace(/^\s+|\s+$/g, '').split( " " );

		return this.each(function(){
			var newClassName, regex;

			for( var i = 0, il = classes.length; i < il; i++ ){
				if( this.className !== undefined ){
					regex = new RegExp( "(^|\\s)" + classes[ i ] + "($|\\s)", "gmi" );
					newClassName = this.className.replace( regex, " " );

					this.className = newClassName.replace(/^\s+|\s+$/g, '');
				}
			}
		});
	};



	/**
	 * Remove the current set of elements from the DOM.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.remove = function(){
		return this.each(function(){
			if( this.parentNode ) {
				this.parentNode.removeChild( this );
			}
		});
	};



	/**
	 * Replace each element in the current set with that argument HTML string or HTMLElement.
	 *
	 * @param {string|HTMLElement} fragment The value to assign.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.replaceWith = function( fragment ){
		if( typeof( fragment ) === "string" ){
			fragment = shoestring( fragment );
		}

		var ret = [];

		if( fragment.length > 1 ){
			fragment = fragment.reverse();
		}
		this.each(function( i ){
			var clone = this.cloneNode( true ),
				insertEl;
			ret.push( clone );

			// If there is no parentNode, this is pointless, drop it.
			if( !this.parentNode ){ return; }

			if( fragment.length === 1 ){
				insertEl = i > 0 ? fragment[ 0 ].cloneNode( true ) : fragment[ 0 ];
				this.parentNode.replaceChild( insertEl, this );
			} else {
				for( var j = 0, jl = fragment.length; j < jl; j++ ){
					insertEl = i > 0 ? fragment[ j ].cloneNode( true ) : fragment[ j ];
					this.parentNode.insertBefore( insertEl, this.nextSibling );
				}
				this.parentNode.removeChild( this );
			}
		});

		return shoestring( ret );
	};



  /**
	 * Get all of the sibling elements for each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.siblings = function(){
		
		if( !this.length ) {
			return shoestring( [] );
		}

		var sibs = [], el = this[ 0 ].parentNode.firstChild;

		do {
			if( el.nodeType === 1 && el !== this[ 0 ] ) {
				sibs.push( el );
			}

      el = el.nextSibling;
		} while( el );

		return shoestring( sibs );
	};



	var getText = function( elem ){
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

  /**
	 * Recursively retrieve the text content of the each element in the current set.
	 *
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.text = function() {
		
		return getText( this );
	};




	/**
	 * Get the value of the first element or set the value of all elements in the current set.
	 *
	 * @param {string} value The value to set.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.val = function( value ){
		var el;
		if( value !== undefined ){
			return this.each(function(){
				if( this.tagName === "SELECT" ){
					var optionSet, option,
						options = this.options,
						values = [],
						i = options.length,
						newIndex;

					values[0] = value;
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = shoestring.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
							newIndex = i;
						}
					}
					// force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						this.selectedIndex = -1;
					} else {
						this.selectedIndex = newIndex;
					}
				} else {
					this.value = value;
				}
			});
		} else {
			el = this[0];

			if( el.tagName === "SELECT" ){
				if( el.selectedIndex < 0 ){ return ""; }
				return el.options[ el.selectedIndex ].value;
			} else {
				return el.value;
			}
		}
	};



	/**
	 * Private function for setting/getting the offset property for height/width.
	 *
	 * **NOTE** Please use the [width](width.js.html) or [height](height.js.html) methods instead.
	 *
	 * @param {shoestring} set The set of elements.
	 * @param {string} name The string "height" or "width".
	 * @param {float|undefined} value The value to assign.
	 * @return shoestring
	 * @this window
	 */
	shoestring._dimension = function( set, name, value ){
		var offsetName;

		if( value === undefined ){
			offsetName = name.replace(/^[a-z]/, function( letter ) {
				return letter.toUpperCase();
			});

			return set[ 0 ][ "offset" + offsetName ];
		} else {
			// support integer values as pixels
			value = typeof value === "string" ? value : value + "px";

			return set.each(function(){
				this.style[ name ] = value;
			});
		}
	};



	/**
	 * Gets the width value of the first element or sets the width for the whole set.
	 *
	 * @param {float|undefined} value The value to assign.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.width = function( value ){
		return shoestring._dimension( this, "width", value );
	};



	/**
	 * Wraps the child elements in the provided HTML.
	 *
	 * @param {string} html The wrapping HTML.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.wrapInner = function( html ){
		return this.each(function(){
			var inH = this.innerHTML;

			this.innerHTML = "";
			shoestring( this ).append( shoestring( html ).html( inH ) );
		});
	};



	function initEventCache( el, evt ) {
		if ( !el.shoestringData ) {
			el.shoestringData = {};
		}
		if ( !el.shoestringData.events ) {
			el.shoestringData.events = {};
		}
		if ( !el.shoestringData.loop ) {
			el.shoestringData.loop = {};
		}
		if ( !el.shoestringData.events[ evt ] ) {
			el.shoestringData.events[ evt ] = [];
		}
	}

	function addToEventCache( el, evt, eventInfo ) {
		var obj = {};
		obj.isCustomEvent = eventInfo.isCustomEvent;
		obj.callback = eventInfo.callfunc;
		obj.originalCallback = eventInfo.originalCallback;
		obj.namespace = eventInfo.namespace;

		el.shoestringData.events[ evt ].push( obj );

		if( eventInfo.customEventLoop ) {
			el.shoestringData.loop[ evt ] = eventInfo.customEventLoop;
		}
	}

	/**
	 * Bind a callback to an event for the currrent set of elements.
	 *
	 * @param {string} evt The event(s) to watch for.
	 * @param {object,function} data Data to be included with each event or the callback.
	 * @param {function} originalCallback Callback to be invoked when data is define.d.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.bind = function( evt, data, originalCallback ){

				if( typeof data === "function" ){
			originalCallback = data;
			data = null;
		}

		var evts = evt.split( " " );

		// NOTE the `triggeredElement` is purely for custom events from IE
		function encasedCallback( e, namespace, triggeredElement ){
			var result;

			if( e._namespace && e._namespace !== namespace ) {
				return;
			}

			e.data = data;
			e.namespace = e._namespace;

			var returnTrue = function(){
				return true;
			};

			e.isDefaultPrevented = function(){
				return false;
			};

			var originalPreventDefault = e.preventDefault;
			var preventDefaultConstructor = function(){
				if( originalPreventDefault ) {
					return function(){
						e.isDefaultPrevented = returnTrue;
						originalPreventDefault.call(e);
					};
				} else {
					return function(){
						e.isDefaultPrevented = returnTrue;
						e.returnValue = false;
					};
				}
			};

			// thanks https://github.com/jonathantneal/EventListener
			e.target = triggeredElement || e.target || e.srcElement;
			e.preventDefault = preventDefaultConstructor();
			e.stopPropagation = e.stopPropagation || function () {
				e.cancelBubble = true;
			};

			result = originalCallback.apply(this, [ e ].concat( e._args ) );

			if( result === false ){
				e.preventDefault();
				e.stopPropagation();
			}

			return result;
		}

		return this.each(function(){
			var domEventCallback,
				customEventCallback,
				customEventLoop,
				oEl = this;

			for( var i = 0, il = evts.length; i < il; i++ ){
				var split = evts[ i ].split( "." ),
					evt = split[ 0 ],
					namespace = split.length > 0 ? split[ 1 ] : null;

				domEventCallback = function( originalEvent ) {
					if( oEl.ssEventTrigger ) {
						originalEvent._namespace = oEl.ssEventTrigger._namespace;
						originalEvent._args = oEl.ssEventTrigger._args;

						oEl.ssEventTrigger = null;
					}
					return encasedCallback.call( oEl, originalEvent, namespace );
				};
				customEventCallback = null;
				customEventLoop = null;

				initEventCache( this, evt );

				this.addEventListener( evt, domEventCallback, false );

				addToEventCache( this, evt, {
					callfunc: customEventCallback || domEventCallback,
					isCustomEvent: !!customEventCallback,
					customEventLoop: customEventLoop,
					originalCallback: originalCallback,
					namespace: namespace
				});
			}
		});
	};

	shoestring.fn.on = shoestring.fn.bind;

	


	/**
	 * Unbind a previous bound callback for an event.
	 *
	 * @param {string} event The event(s) the callback was bound to..
	 * @param {function} callback Callback to unbind.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.unbind = function( event, callback ){

		
		var evts = event ? event.split( " " ) : [];

		return this.each(function(){
			if( !this.shoestringData || !this.shoestringData.events ) {
				return;
			}

			if( !evts.length ) {
				unbindAll.call( this );
			} else {
				var split, evt, namespace;
				for( var i = 0, il = evts.length; i < il; i++ ){
					split = evts[ i ].split( "." ),
					evt = split[ 0 ],
					namespace = split.length > 0 ? split[ 1 ] : null;

					if( evt ) {
						unbind.call( this, evt, namespace, callback );
					} else {
						unbindAll.call( this, namespace, callback );
					}
				}
			}
		});
	};

	function unbind( evt, namespace, callback ) {
		var bound = this.shoestringData.events[ evt ];
		if( !(bound && bound.length) ) {
			return;
		}

		var matched = [], j, jl;
		for( j = 0, jl = bound.length; j < jl; j++ ) {
			if( !namespace || namespace === bound[ j ].namespace ) {
				if( callback === undefined || callback === bound[ j ].originalCallback ) {
					this.removeEventListener( evt, bound[ j ].callback, false );
					matched.push( j );
				}
			}
		}

		for( j = 0, jl = matched.length; j < jl; j++ ) {
			this.shoestringData.events[ evt ].splice( j, 1 );
		}
	}

	function unbindAll( namespace, callback ) {
		for( var evtKey in this.shoestringData.events ) {
			unbind.call( this, evtKey, namespace, callback );
		}
	}

	shoestring.fn.off = shoestring.fn.unbind;


	/**
	 * Bind a callback to an event for the currrent set of elements, unbind after one occurence.
	 *
	 * @param {string} event The event(s) to watch for.
	 * @param {function} callback Callback to invoke on the event.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.one = function( event, callback ){
		var evts = event.split( " " );

		return this.each(function(){
			var thisevt, cbs = {},	$t = shoestring( this );

			for( var i = 0, il = evts.length; i < il; i++ ){
				thisevt = evts[ i ];

				cbs[ thisevt ] = function( e ){
					var $t = shoestring( this );

					for( var j in cbs ) {
						$t.unbind( j, cbs[ j ] );
					}

					return callback.apply( this, [ e ].concat( e._args ) );
				};

				$t.bind( thisevt, cbs[ thisevt ] );
			}
		});
	};



	/**
	 * Trigger an event on the first element in the set, no bubbling, no defaults.
	 *
	 * @param {string} event The event(s) to trigger.
	 * @param {object} args Arguments to append to callback invocations.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.triggerHandler = function( event, args ){
		var e = event.split( " " )[ 0 ],
			el = this[ 0 ],
			ret;

		// See this.fireEvent( 'on' + evts[ i ], document.createEventObject() ); instead of click() etc in trigger.
		if( doc.createEvent && el.shoestringData && el.shoestringData.events && el.shoestringData.events[ e ] ){
			var bindings = el.shoestringData.events[ e ];
			for (var i in bindings ){
				if( bindings.hasOwnProperty( i ) ){
					event = doc.createEvent( "Event" );
					event.initEvent( e, true, true );
					event._args = args;
					args.unshift( event );

					ret = bindings[ i ].originalCallback.apply( event.target, args );
				}
			}
		}

		return ret;
	};



	/**
	 * Trigger an event on each of the DOM elements in the current set.
	 *
	 * @param {string} event The event(s) to trigger.
	 * @param {object} args Arguments to append to callback invocations.
	 * @return shoestring
	 * @this shoestring
	 */
	shoestring.fn.trigger = function( event, args ){
		var evts = event.split( " " );

		return this.each(function(){
			var split, evt, namespace;
			for( var i = 0, il = evts.length; i < il; i++ ){
				split = evts[ i ].split( "." ),
				evt = split[ 0 ],
				namespace = split.length > 0 ? split[ 1 ] : null;

				if( evt === "click" ){
					if( this.tagName === "INPUT" && this.type === "checkbox" && this.click ){
						this.click();
						return false;
					}
				}

				if( doc.createEvent ){
					var event = doc.createEvent( "Event" );
					event.initEvent( evt, true, true );
					event._args = args;
					event._namespace = namespace;

					this.dispatchEvent( event );
				}
			}
		});
	};



	return shoestring;
}));

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! shoestring */ "./node_modules/shoestring/dist/shoestring-dev.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (shoestring) {
      return (root.Tablesaw = factory(shoestring, root));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof window !== "undefined" ? window : this, function ($, window) {
	"use strict";

  var document = window.document;
// Account for Tablesaw being loaded either before or after the DOMContentLoaded event is fired.
var domContentLoadedTriggered = /complete|loaded/.test(document.readyState);
document.addEventListener("DOMContentLoaded", function() {
	domContentLoadedTriggered = true;
});

var Tablesaw = {
	i18n: {
		modeStack: "Stack",
		modeSwipe: "Swipe",
		modeToggle: "Toggle",
		modeSwitchColumnsAbbreviated: "Cols",
		modeSwitchColumns: "Columns",
		columnToggleButton: "Columns",
		columnToggleError: "No eligible columns.",
		sort: "Sort",
		swipePreviousColumn: "Previous column",
		swipeNextColumn: "Next column"
	},
	// cut the mustard
	mustard:
		"head" in document && // IE9+, Firefox 4+, Safari 5.1+, Mobile Safari 4.1+, Opera 11.5+, Android 2.3+
		(!window.blackberry || window.WebKitPoint) && // only WebKit Blackberry (OS 6+)
		!window.operamini,
	$: $,
	_init: function(element) {
		Tablesaw.$(element || document).trigger("enhance.tablesaw");
	},
	init: function(element) {
		// Account for Tablesaw being loaded either before or after the DOMContentLoaded event is fired.
		domContentLoadedTriggered =
			domContentLoadedTriggered || /complete|loaded/.test(document.readyState);
		if (!domContentLoadedTriggered) {
			if ("addEventListener" in document) {
				// Use raw DOMContentLoaded instead of shoestring (may have issues in Android 2.3, exhibited by stack table)
				document.addEventListener("DOMContentLoaded", function() {
					Tablesaw._init(element);
				});
			}
		} else {
			Tablesaw._init(element);
		}
	}
};

$(document).on("enhance.tablesaw", function() {
	// Extend i18n config, if one exists.
	if (typeof TablesawConfig !== "undefined" && TablesawConfig.i18n) {
		Tablesaw.i18n = $.extend(Tablesaw.i18n, TablesawConfig.i18n || {});
	}

	Tablesaw.i18n.modes = [
		Tablesaw.i18n.modeStack,
		Tablesaw.i18n.modeSwipe,
		Tablesaw.i18n.modeToggle
	];
});

if (Tablesaw.mustard) {
	$(document.documentElement).addClass("tablesaw-enhanced");
}

(function() {
	var pluginName = "tablesaw";
	var classes = {
		toolbar: "tablesaw-bar"
	};
	var events = {
		create: "tablesawcreate",
		destroy: "tablesawdestroy",
		refresh: "tablesawrefresh",
		resize: "tablesawresize"
	};
	var defaultMode = "stack";
	var initSelector = "table";
	var initFilterSelector = "[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]";
	var defaultConfig = {};

	Tablesaw.events = events;

	var Table = function(element) {
		if (!element) {
			throw new Error("Tablesaw requires an element.");
		}

		this.table = element;
		this.$table = $(element);

		// only one <thead> and <tfoot> are allowed, per the specification
		this.$thead = this.$table
			.children()
			.filter("thead")
			.eq(0);

		// multiple <tbody> are allowed, per the specification
		this.$tbody = this.$table.children().filter("tbody");

		this.mode = this.$table.attr("data-tablesaw-mode") || defaultMode;

		this.$toolbar = null;

		this.attributes = {
			subrow: "data-tablesaw-subrow",
			ignorerow: "data-tablesaw-ignorerow"
		};

		this.init();
	};

	Table.prototype.init = function() {
		if (!this.$thead.length) {
			throw new Error("tablesaw: a <thead> is required, but none was found.");
		}

		if (!this.$thead.find("th").length) {
			throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?");
		}

		// assign an id if there is none
		if (!this.$table.attr("id")) {
			this.$table.attr("id", pluginName + "-" + Math.round(Math.random() * 10000));
		}

		this.createToolbar();

		this._initCells();

		this.$table.data(pluginName, this);

		this.$table.trigger(events.create, [this]);
	};

	Table.prototype.getConfig = function(pluginSpecificConfig) {
		// shoestring extend doesn’t support arbitrary args
		var configs = $.extend(defaultConfig, pluginSpecificConfig || {});
		return $.extend(configs, typeof TablesawConfig !== "undefined" ? TablesawConfig : {});
	};

	Table.prototype._getPrimaryHeaderRow = function() {
		return this._getHeaderRows().eq(0);
	};

	Table.prototype._getHeaderRows = function() {
		return this.$thead
			.children()
			.filter("tr")
			.filter(function() {
				return !$(this).is("[data-tablesaw-ignorerow]");
			});
	};

	Table.prototype._getRowIndex = function($row) {
		return $row.prevAll().length;
	};

	Table.prototype._getHeaderRowIndeces = function() {
		var self = this;
		var indeces = [];
		this._getHeaderRows().each(function() {
			indeces.push(self._getRowIndex($(this)));
		});
		return indeces;
	};

	Table.prototype._getPrimaryHeaderCells = function($row) {
		return ($row || this._getPrimaryHeaderRow()).find("th");
	};

	Table.prototype._$getCells = function(th) {
		var self = this;
		return $(th)
			.add(th.cells)
			.filter(function() {
				var $t = $(this);
				var $row = $t.parent();
				var hasColspan = $t.is("[colspan]");
				// no subrows or ignored rows (keep cells in ignored rows that do not have a colspan)
				return (
					!$row.is("[" + self.attributes.subrow + "]") &&
					(!$row.is("[" + self.attributes.ignorerow + "]") || !hasColspan)
				);
			});
	};

	Table.prototype._getVisibleColspan = function() {
		var colspan = 0;
		this._getPrimaryHeaderCells().each(function() {
			var $t = $(this);
			if ($t.css("display") !== "none") {
				colspan += parseInt($t.attr("colspan"), 10) || 1;
			}
		});
		return colspan;
	};

	Table.prototype.getColspanForCell = function($cell) {
		var visibleColspan = this._getVisibleColspan();
		var visibleSiblingColumns = 0;
		if ($cell.closest("tr").data("tablesaw-rowspanned")) {
			visibleSiblingColumns++;
		}

		$cell.siblings().each(function() {
			var $t = $(this);
			var colColspan = parseInt($t.attr("colspan"), 10) || 1;

			if ($t.css("display") !== "none") {
				visibleSiblingColumns += colColspan;
			}
		});
		// console.log( $cell[ 0 ], visibleColspan, visibleSiblingColumns );

		return visibleColspan - visibleSiblingColumns;
	};

	Table.prototype.isCellInColumn = function(header, cell) {
		return $(header)
			.add(header.cells)
			.filter(function() {
				return this === cell;
			}).length;
	};

	Table.prototype.updateColspanCells = function(cls, header, userAction) {
		var self = this;
		var primaryHeaderRow = self._getPrimaryHeaderRow();

		// find persistent column rowspans
		this.$table.find("[rowspan][data-tablesaw-priority]").each(function() {
			var $t = $(this);
			if ($t.attr("data-tablesaw-priority") !== "persist") {
				return;
			}

			var $row = $t.closest("tr");
			var rowspan = parseInt($t.attr("rowspan"), 10);
			if (rowspan > 1) {
				$row = $row.next();

				$row.data("tablesaw-rowspanned", true);

				rowspan--;
			}
		});

		this.$table
			.find("[colspan],[data-tablesaw-maxcolspan]")
			.filter(function() {
				// is not in primary header row
				return $(this).closest("tr")[0] !== primaryHeaderRow[0];
			})
			.each(function() {
				var $cell = $(this);

				if (userAction === undefined || self.isCellInColumn(header, this)) {
				} else {
					// if is not a user action AND the cell is not in the updating column, kill it
					return;
				}

				var colspan = self.getColspanForCell($cell);

				if (cls && userAction !== undefined) {
					// console.log( colspan === 0 ? "addClass" : "removeClass", $cell );
					$cell[colspan === 0 ? "addClass" : "removeClass"](cls);
				}

				// cache original colspan
				var maxColspan = parseInt($cell.attr("data-tablesaw-maxcolspan"), 10);
				if (!maxColspan) {
					$cell.attr("data-tablesaw-maxcolspan", $cell.attr("colspan"));
				} else if (colspan > maxColspan) {
					colspan = maxColspan;
				}

				// console.log( this, "setting colspan to ", colspan );
				$cell.attr("colspan", colspan);
			});
	};

	Table.prototype._findPrimaryHeadersForCell = function(cell) {
		var $headerRow = this._getPrimaryHeaderRow();
		var headerRowIndex = this._getRowIndex($headerRow);
		var results = [];

		for (var rowNumber = 0; rowNumber < this.headerMapping.length; rowNumber++) {
			if (rowNumber === headerRowIndex) {
				continue;
			}

			for (var colNumber = 0; colNumber < this.headerMapping[rowNumber].length; colNumber++) {
				if (this.headerMapping[rowNumber][colNumber] === cell) {
					results.push(this.headerMapping[headerRowIndex][colNumber]);
				}
			}
		}

		return results;
	};

	// used by init cells
	Table.prototype.getRows = function() {
		var self = this;
		return this.$table.find("tr").filter(function() {
			return $(this)
				.closest("table")
				.is(self.$table);
		});
	};

	// used by sortable
	Table.prototype.getBodyRows = function(tbody) {
		return (tbody ? $(tbody) : this.$tbody).children().filter("tr");
	};

	Table.prototype.getHeaderCellIndex = function(cell) {
		var lookup = this.headerMapping[0];
		for (var colIndex = 0; colIndex < lookup.length; colIndex++) {
			if (lookup[colIndex] === cell) {
				return colIndex;
			}
		}

		return -1;
	};

	Table.prototype._initCells = function() {
		// re-establish original colspans
		this.$table.find("[data-tablesaw-maxcolspan]").each(function() {
			var $t = $(this);
			$t.attr("colspan", $t.attr("data-tablesaw-maxcolspan"));
		});

		var $rows = this.getRows();
		var columnLookup = [];

		$rows.each(function(rowNumber) {
			columnLookup[rowNumber] = [];
		});

		$rows.each(function(rowNumber) {
			var coltally = 0;
			var $t = $(this);
			var children = $t.children();

			children.each(function() {
				var colspan = parseInt(
					this.getAttribute("data-tablesaw-maxcolspan") || this.getAttribute("colspan"),
					10
				);
				var rowspan = parseInt(this.getAttribute("rowspan"), 10);

				// set in a previous rowspan
				while (columnLookup[rowNumber][coltally]) {
					coltally++;
				}

				columnLookup[rowNumber][coltally] = this;

				// TODO? both colspan and rowspan
				if (colspan) {
					for (var k = 0; k < colspan - 1; k++) {
						coltally++;
						columnLookup[rowNumber][coltally] = this;
					}
				}
				if (rowspan) {
					for (var j = 1; j < rowspan; j++) {
						columnLookup[rowNumber + j][coltally] = this;
					}
				}

				coltally++;
			});
		});

		var headerRowIndeces = this._getHeaderRowIndeces();
		for (var colNumber = 0; colNumber < columnLookup[0].length; colNumber++) {
			for (var headerIndex = 0, k = headerRowIndeces.length; headerIndex < k; headerIndex++) {
				var headerCol = columnLookup[headerRowIndeces[headerIndex]][colNumber];

				var rowNumber = headerRowIndeces[headerIndex];
				var rowCell;

				if (!headerCol.cells) {
					headerCol.cells = [];
				}

				while (rowNumber < columnLookup.length) {
					rowCell = columnLookup[rowNumber][colNumber];

					if (headerCol !== rowCell) {
						headerCol.cells.push(rowCell);
					}

					rowNumber++;
				}
			}
		}

		this.headerMapping = columnLookup;
	};

	Table.prototype.refresh = function() {
		this._initCells();

		this.$table.trigger(events.refresh, [this]);
	};

	Table.prototype._getToolbarAnchor = function() {
		var $parent = this.$table.parent();
		if ($parent.is(".tablesaw-overflow")) {
			return $parent;
		}
		return this.$table;
	};

	Table.prototype._getToolbar = function($anchor) {
		if (!$anchor) {
			$anchor = this._getToolbarAnchor();
		}
		return $anchor.prev().filter("." + classes.toolbar);
	};

	Table.prototype.createToolbar = function() {
		// Insert the toolbar
		// TODO move this into a separate component
		var $anchor = this._getToolbarAnchor();
		var $toolbar = this._getToolbar($anchor);
		if (!$toolbar.length) {
			$toolbar = $("<div>")
				.addClass(classes.toolbar)
				.insertBefore($anchor);
		}
		this.$toolbar = $toolbar;

		if (this.mode) {
			this.$toolbar.addClass("tablesaw-mode-" + this.mode);
		}
	};

	Table.prototype.destroy = function() {
		// Don’t remove the toolbar, just erase the classes on it.
		// Some of the table features are not yet destroy-friendly.
		this._getToolbar().each(function() {
			this.className = this.className.replace(/\btablesaw-mode\-\w*\b/gi, "");
		});

		var tableId = this.$table.attr("id");
		$(document).off("." + tableId);
		$(window).off("." + tableId);

		// other plugins
		this.$table.trigger(events.destroy, [this]);

		this.$table.removeData(pluginName);
	};

	// Collection method.
	$.fn[pluginName] = function() {
		return this.each(function() {
			var $t = $(this);

			if ($t.data(pluginName)) {
				return;
			}

			new Table(this);
		});
	};

	var $doc = $(document);
	$doc.on("enhance.tablesaw", function(e) {
		// Cut the mustard
		if (Tablesaw.mustard) {
			var $target = $(e.target);
			if ($target.parent().length) {
				$target = $target.parent();
			}

			$target
				.find(initSelector)
				.filter(initFilterSelector)
				[pluginName]();
		}
	});

	// Avoid a resize during scroll:
	// Some Mobile devices trigger a resize during scroll (sometimes when
	// doing elastic stretch at the end of the document or from the
	// location bar hide)
	var isScrolling = false;
	var scrollTimeout;
	$doc.on("scroll.tablesaw", function() {
		isScrolling = true;

		window.clearTimeout(scrollTimeout);
		scrollTimeout = window.setTimeout(function() {
			isScrolling = false;
		}, 300); // must be greater than the resize timeout below
	});

	var resizeTimeout;
	$(window).on("resize", function() {
		if (!isScrolling) {
			window.clearTimeout(resizeTimeout);
			resizeTimeout = window.setTimeout(function() {
				$doc.trigger(events.resize);
			}, 150); // must be less than the scrolling timeout above.
		}
	});

	Tablesaw.Table = Table;
})();

(function() {
	var classes = {
		stackTable: "tablesaw-stack",
		cellLabels: "tablesaw-cell-label",
		cellContentLabels: "tablesaw-cell-content"
	};

	var data = {
		key: "tablesaw-stack"
	};

	var attrs = {
		labelless: "data-tablesaw-no-labels",
		hideempty: "data-tablesaw-hide-empty"
	};

	var Stack = function(element, tablesaw) {
		this.tablesaw = tablesaw;
		this.$table = $(element);

		this.labelless = this.$table.is("[" + attrs.labelless + "]");
		this.hideempty = this.$table.is("[" + attrs.hideempty + "]");

		this.$table.data(data.key, this);
	};

	Stack.prototype.init = function() {
		this.$table.addClass(classes.stackTable);

		if (this.labelless) {
			return;
		}

		var self = this;

		this.$table
			.find("th, td")
			.filter(function() {
				return !$(this).closest("thead").length;
			})
			.filter(function() {
				return (
					!$(this).is("[" + attrs.labelless + "]") &&
					!$(this)
						.closest("tr")
						.is("[" + attrs.labelless + "]") &&
					(!self.hideempty || !!$(this).html())
				);
			})
			.each(function() {
				var $newHeader = $(document.createElement("b")).addClass(classes.cellLabels);
				var $cell = $(this);

				$(self.tablesaw._findPrimaryHeadersForCell(this)).each(function(index) {
					var $header = $(this.cloneNode(true));
					// TODO decouple from sortable better
					// Changed from .text() in https://github.com/filamentgroup/tablesaw/commit/b9c12a8f893ec192830ec3ba2d75f062642f935b
					// to preserve structural html in headers, like <a>
					var $sortableButton = $header.find(".tablesaw-sortable-btn");
					$header.find(".tablesaw-sortable-arrow").remove();

					// TODO decouple from checkall better
					var $checkall = $header.find("[data-tablesaw-checkall]");
					$checkall.closest("label").remove();
					if ($checkall.length) {
						$newHeader = $([]);
						return;
					}

					if (index > 0) {
						$newHeader.append(document.createTextNode(", "));
					}

					var parentNode = $sortableButton.length ? $sortableButton[0] : $header[0];
					var el;
					while ((el = parentNode.firstChild)) {
						$newHeader[0].appendChild(el);
					}
				});

				if ($newHeader.length && !$cell.find("." + classes.cellContentLabels).length) {
					$cell.wrapInner("<span class='" + classes.cellContentLabels + "'></span>");
				}

				// Update if already exists.
				var $label = $cell.find("." + classes.cellLabels);
				if (!$label.length) {
					$cell.prepend(document.createTextNode(" "));
					$cell.prepend($newHeader);
				} else {
					// only if changed
					$label.replaceWith($newHeader);
				}
			});
	};

	Stack.prototype.destroy = function() {
		this.$table.removeClass(classes.stackTable);
		this.$table.find("." + classes.cellLabels).remove();
		this.$table.find("." + classes.cellContentLabels).each(function() {
			$(this).replaceWith($(this.childNodes));
		});
	};

	// on tablecreate, init
	$(document)
		.on(Tablesaw.events.create, function(e, tablesaw) {
			if (tablesaw.mode === "stack") {
				var table = new Stack(tablesaw.table, tablesaw);
				table.init();
			}
		})
		.on(Tablesaw.events.refresh, function(e, tablesaw) {
			if (tablesaw.mode === "stack") {
				$(tablesaw.table)
					.data(data.key)
					.init();
			}
		})
		.on(Tablesaw.events.destroy, function(e, tablesaw) {
			if (tablesaw.mode === "stack") {
				$(tablesaw.table)
					.data(data.key)
					.destroy();
			}
		});

	Tablesaw.Stack = Stack;
})();

(function() {
	var pluginName = "tablesawbtn",
		methods = {
			_create: function() {
				return $(this).each(function() {
					$(this)
						.trigger("beforecreate." + pluginName)
						[pluginName]("_init")
						.trigger("create." + pluginName);
				});
			},
			_init: function() {
				var oEl = $(this),
					sel = this.getElementsByTagName("select")[0];

				if (sel) {
					// TODO next major version: remove .btn-select
					$(this)
						.addClass("btn-select tablesaw-btn-select")
						[pluginName]("_select", sel);
				}
				return oEl;
			},
			_select: function(sel) {
				var update = function(oEl, sel) {
					var opts = $(sel).find("option");
					var label = document.createElement("span");
					var el;
					var children;
					var found = false;

					label.setAttribute("aria-hidden", "true");
					label.innerHTML = "&#160;";

					opts.each(function() {
						var opt = this;
						if (opt.selected) {
							label.innerHTML = opt.text;
						}
					});

					children = oEl.childNodes;
					if (opts.length > 0) {
						for (var i = 0, l = children.length; i < l; i++) {
							el = children[i];

							if (el && el.nodeName.toUpperCase() === "SPAN") {
								oEl.replaceChild(label, el);
								found = true;
							}
						}

						if (!found) {
							oEl.insertBefore(label, oEl.firstChild);
						}
					}
				};

				update(this, sel);
				// todo should this be tablesawrefresh?
				$(this).on("change refresh", function() {
					update(this, sel);
				});
			}
		};

	// Collection method.
	$.fn[pluginName] = function(arrg, a, b, c) {
		return this.each(function() {
			// if it's a method
			if (arrg && typeof arrg === "string") {
				return $.fn[pluginName].prototype[arrg].call(this, a, b, c);
			}

			// don't re-init
			if ($(this).data(pluginName + "active")) {
				return $(this);
			}

			$(this).data(pluginName + "active", true);

			$.fn[pluginName].prototype._create.call(this);
		});
	};

	// add methods
	$.extend($.fn[pluginName].prototype, methods);

	// TODO OOP this and add to Tablesaw object
})();

(function() {
	var data = {
		key: "tablesaw-coltoggle"
	};

	var ColumnToggle = function(element) {
		this.$table = $(element);

		if (!this.$table.length) {
			return;
		}

		this.tablesaw = this.$table.data("tablesaw");

		this.attributes = {
			btnTarget: "data-tablesaw-columntoggle-btn-target",
			set: "data-tablesaw-columntoggle-set"
		};

		this.classes = {
			columnToggleTable: "tablesaw-columntoggle",
			columnBtnContain: "tablesaw-columntoggle-btnwrap tablesaw-advance",
			columnBtn: "tablesaw-columntoggle-btn tablesaw-nav-btn down",
			popup: "tablesaw-columntoggle-popup",
			priorityPrefix: "tablesaw-priority-"
		};

		this.set = [];
		this.$headers = this.tablesaw._getPrimaryHeaderCells();

		this.$table.data(data.key, this);
	};

	// Column Toggle Sets (one column chooser can control multiple tables)
	ColumnToggle.prototype.initSet = function() {
		var set = this.$table.attr(this.attributes.set);
		if (set) {
			// Should not include the current table
			var table = this.$table[0];
			this.set = $("table[" + this.attributes.set + "='" + set + "']")
				.filter(function() {
					return this !== table;
				})
				.get();
		}
	};

	ColumnToggle.prototype.init = function() {
		if (!this.$table.length) {
			return;
		}

		var tableId,
			id,
			$menuButton,
			$popup,
			$menu,
			$btnContain,
			self = this;

		var cfg = this.tablesaw.getConfig({
			getColumnToggleLabelTemplate: function(text) {
				return "<label><input type='checkbox' checked>" + text + "</label>";
			}
		});

		this.$table.addClass(this.classes.columnToggleTable);

		tableId = this.$table.attr("id");
		id = tableId + "-popup";
		$btnContain = $("<div class='" + this.classes.columnBtnContain + "'></div>");
		// TODO next major version: remove .btn
		$menuButton = $(
			"<a href='#" +
				id +
				"' class='btn tablesaw-btn btn-micro " +
				this.classes.columnBtn +
				"' data-popup-link>" +
				"<span>" +
				Tablesaw.i18n.columnToggleButton +
				"</span></a>"
		);
		$popup = $("<div class='" + this.classes.popup + "' id='" + id + "'></div>");
		$menu = $("<div class='tablesaw-btn-group'></div>");

		this.$popup = $popup;

		var hasNonPersistentHeaders = false;
		this.$headers.each(function() {
			var $this = $(this),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = self.tablesaw._$getCells(this);

			if (priority && priority !== "persist") {
				$cells.addClass(self.classes.priorityPrefix + priority);

				$(cfg.getColumnToggleLabelTemplate($this.text()))
					.appendTo($menu)
					.find('input[type="checkbox"]')
					.data("tablesaw-header", this);

				hasNonPersistentHeaders = true;
			}
		});

		if (!hasNonPersistentHeaders) {
			$menu.append("<label>" + Tablesaw.i18n.columnToggleError + "</label>");
		}

		$menu.appendTo($popup);

		function onToggleCheckboxChange(checkbox) {
			var checked = checkbox.checked;

			var header = self.getHeaderFromCheckbox(checkbox);
			var $cells = self.tablesaw._$getCells(header);

			$cells[!checked ? "addClass" : "removeClass"]("tablesaw-toggle-cellhidden");
			$cells[checked ? "addClass" : "removeClass"]("tablesaw-toggle-cellvisible");

			self.updateColspanCells(header, checked);

			self.$table.trigger("tablesawcolumns");
		}

		// bind change event listeners to inputs - TODO: move to a private method?
		$menu.find('input[type="checkbox"]').on("change", function(e) {
			onToggleCheckboxChange(e.target);

			if (self.set.length) {
				var index;
				$(self.$popup)
					.find("input[type='checkbox']")
					.each(function(j) {
						if (this === e.target) {
							index = j;
							return false;
						}
					});

				$(self.set).each(function() {
					var checkbox = $(this)
						.data(data.key)
						.$popup.find("input[type='checkbox']")
						.get(index);
					if (checkbox) {
						checkbox.checked = e.target.checked;
						onToggleCheckboxChange(checkbox);
					}
				});
			}
		});

		$menuButton.appendTo($btnContain);

		// Use a different target than the toolbar
		var $btnTarget = $(this.$table.attr(this.attributes.btnTarget));
		$btnContain.appendTo($btnTarget.length ? $btnTarget : this.tablesaw.$toolbar);

		function closePopup(event) {
			// Click came from inside the popup, ignore.
			if (event && $(event.target).closest("." + self.classes.popup).length) {
				return;
			}

			$(document).off("click." + tableId);
			$menuButton.removeClass("up").addClass("down");
			$btnContain.removeClass("visible");
		}

		var closeTimeout;
		function openPopup() {
			$btnContain.addClass("visible");
			$menuButton.removeClass("down").addClass("up");

			$(document).off("click." + tableId, closePopup);

			window.clearTimeout(closeTimeout);
			closeTimeout = window.setTimeout(function() {
				$(document).on("click." + tableId, closePopup);
			}, 15);
		}

		$menuButton.on("click.tablesaw", function(event) {
			event.preventDefault();

			if (!$btnContain.is(".visible")) {
				openPopup();
			} else {
				closePopup();
			}
		});

		$popup.appendTo($btnContain);

		this.$menu = $menu;

		// Fix for iOS not rendering shadows correctly when using `-webkit-overflow-scrolling`
		var $overflow = this.$table.closest(".tablesaw-overflow");
		if ($overflow.css("-webkit-overflow-scrolling")) {
			var timeout;
			$overflow.on("scroll", function() {
				var $div = $(this);
				window.clearTimeout(timeout);
				timeout = window.setTimeout(function() {
					$div.css("-webkit-overflow-scrolling", "auto");
					window.setTimeout(function() {
						$div.css("-webkit-overflow-scrolling", "touch");
					}, 0);
				}, 100);
			});
		}

		$(window).on(Tablesaw.events.resize + "." + tableId, function() {
			self.refreshToggle();
		});

		this.initSet();
		this.refreshToggle();
	};

	ColumnToggle.prototype.getHeaderFromCheckbox = function(checkbox) {
		return $(checkbox).data("tablesaw-header");
	};

	ColumnToggle.prototype.refreshToggle = function() {
		var self = this;
		var invisibleColumns = 0;
		this.$menu.find("input").each(function() {
			var header = self.getHeaderFromCheckbox(this);
			this.checked =
				self.tablesaw
					._$getCells(header)
					.eq(0)
					.css("display") === "table-cell";
		});

		this.updateColspanCells();
	};

	ColumnToggle.prototype.updateColspanCells = function(header, userAction) {
		this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden", header, userAction);
	};

	ColumnToggle.prototype.destroy = function() {
		this.$table.removeClass(this.classes.columnToggleTable);
		this.$table.find("th, td").each(function() {
			var $cell = $(this);
			$cell.removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible");

			this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, "");
		});
	};

	// on tablecreate, init
	$(document).on(Tablesaw.events.create, function(e, tablesaw) {
		if (tablesaw.mode === "columntoggle") {
			var table = new ColumnToggle(tablesaw.table);
			table.init();
		}
	});

	$(document).on(Tablesaw.events.destroy, function(e, tablesaw) {
		if (tablesaw.mode === "columntoggle") {
			$(tablesaw.table)
				.data(data.key)
				.destroy();
		}
	});

	$(document).on(Tablesaw.events.refresh, function(e, tablesaw) {
		if (tablesaw.mode === "columntoggle") {
			$(tablesaw.table)
				.data(data.key)
				.refreshToggle();
		}
	});

	Tablesaw.ColumnToggle = ColumnToggle;
})();

(function() {
	function getSortValue(cell) {
		var text = [];
		$(cell.childNodes).each(function() {
			var $el = $(this);
			if ($el.is("input, select")) {
				text.push($el.val());
			} else if ($el.is(".tablesaw-cell-label")) {
			} else {
				text.push(($el.text() || "").replace(/^\s+|\s+$/g, ""));
			}
		});

		return text.join("");
	}

	var pluginName = "tablesaw-sortable",
		initSelector = "table[data-" + pluginName + "]",
		sortableSwitchSelector = "[data-" + pluginName + "-switch]",
		attrs = {
			sortCol: "data-tablesaw-sortable-col",
			defaultCol: "data-tablesaw-sortable-default-col",
			numericCol: "data-tablesaw-sortable-numeric",
			subRow: "data-tablesaw-subrow",
			ignoreRow: "data-tablesaw-ignorerow"
		},
		classes = {
			head: pluginName + "-head",
			ascend: pluginName + "-ascending",
			descend: pluginName + "-descending",
			switcher: pluginName + "-switch",
			tableToolbar: "tablesaw-bar-section",
			sortButton: pluginName + "-btn"
		},
		methods = {
			_create: function(o) {
				return $(this).each(function() {
					var init = $(this).data(pluginName + "-init");
					if (init) {
						return false;
					}
					$(this)
						.data(pluginName + "-init", true)
						.trigger("beforecreate." + pluginName)
						[pluginName]("_init", o)
						.trigger("create." + pluginName);
				});
			},
			_init: function() {
				var el = $(this);
				var tblsaw = el.data("tablesaw");
				var heads;
				var $switcher;

				function addClassToHeads(h) {
					$.each(h, function(i, v) {
						$(v).addClass(classes.head);
					});
				}

				function makeHeadsActionable(h, fn) {
					$.each(h, function(i, col) {
						var b = $("<button class='" + classes.sortButton + "'/>");
						b.on("click", { col: col }, fn);
						$(col)
							.wrapInner(b)
							.find("button")
							.append("<span class='tablesaw-sortable-arrow'>");
					});
				}

				function clearOthers(headcells) {
					$.each(headcells, function(i, v) {
						var col = $(v);
						col.removeAttr(attrs.defaultCol);
						col.removeClass(classes.ascend);
						col.removeClass(classes.descend);
					});
				}

				function headsOnAction(e) {
					if ($(e.target).is("a[href]")) {
						return;
					}

					e.stopPropagation();
					var headCell = $(e.target).closest("[" + attrs.sortCol + "]"),
						v = e.data.col,
						newSortValue = heads.index(headCell[0]);

					clearOthers(
						headCell
							.closest("thead")
							.find("th")
							.filter(function() {
								return this !== headCell[0];
							})
					);
					if (headCell.is("." + classes.descend) || !headCell.is("." + classes.ascend)) {
						el[pluginName]("sortBy", v, true);
						newSortValue += "_asc";
					} else {
						el[pluginName]("sortBy", v);
						newSortValue += "_desc";
					}
					if ($switcher) {
						$switcher
							.find("select")
							.val(newSortValue)
							.trigger("refresh");
					}

					e.preventDefault();
				}

				function handleDefault(heads) {
					$.each(heads, function(idx, el) {
						var $el = $(el);
						if ($el.is("[" + attrs.defaultCol + "]")) {
							if (!$el.is("." + classes.descend)) {
								$el.addClass(classes.ascend);
							}
						}
					});
				}

				function addSwitcher(heads) {
					$switcher = $("<div>")
						.addClass(classes.switcher)
						.addClass(classes.tableToolbar);

					var html = ["<label>" + Tablesaw.i18n.sort + ":"];

					// TODO next major version: remove .btn
					html.push('<span class="btn tablesaw-btn"><select>');
					heads.each(function(j) {
						var $t = $(this);
						var isDefaultCol = $t.is("[" + attrs.defaultCol + "]");
						var isDescending = $t.is("." + classes.descend);

						var hasNumericAttribute = $t.is("[" + attrs.numericCol + "]");
						var numericCount = 0;
						// Check only the first four rows to see if the column is numbers.
						var numericCountMax = 5;

						$(this.cells.slice(0, numericCountMax)).each(function() {
							if (!isNaN(parseInt(getSortValue(this), 10))) {
								numericCount++;
							}
						});
						var isNumeric = numericCount === numericCountMax;
						if (!hasNumericAttribute) {
							$t.attr(attrs.numericCol, isNumeric ? "" : "false");
						}

						html.push(
							"<option" +
								(isDefaultCol && !isDescending ? " selected" : "") +
								' value="' +
								j +
								'_asc">' +
								$t.text() +
								" " +
								(isNumeric ? "&#x2191;" : "(A-Z)") +
								"</option>"
						);
						html.push(
							"<option" +
								(isDefaultCol && isDescending ? " selected" : "") +
								' value="' +
								j +
								'_desc">' +
								$t.text() +
								" " +
								(isNumeric ? "&#x2193;" : "(Z-A)") +
								"</option>"
						);
					});
					html.push("</select></span></label>");

					$switcher.html(html.join(""));

					var $firstChild = tblsaw.$toolbar.children().eq(0);
					if ($firstChild.length) {
						$switcher.insertBefore($firstChild);
					} else {
						$switcher.appendTo(tblsaw.$toolbar);
					}
					$switcher.find(".tablesaw-btn").tablesawbtn();
					$switcher.find("select").on("change", function() {
						var val = $(this)
								.val()
								.split("_"),
							head = heads.eq(val[0]);

						clearOthers(head.siblings());
						el[pluginName]("sortBy", head.get(0), val[1] === "asc");
					});
				}

				el.addClass(pluginName);

				heads = el
					.children()
					.filter("thead")
					.find("th[" + attrs.sortCol + "]");

				addClassToHeads(heads);
				makeHeadsActionable(heads, headsOnAction);
				handleDefault(heads);

				if (el.is(sortableSwitchSelector)) {
					addSwitcher(heads);
				}
			},
			sortRows: function(rows, colNum, ascending, col, tbody) {
				function convertCells(cellArr, belongingToTbody) {
					var cells = [];
					$.each(cellArr, function(i, cell) {
						var row = cell.parentNode;
						var $row = $(row);
						// next row is a subrow
						var subrows = [];
						var $next = $row.next();
						while ($next.is("[" + attrs.subRow + "]")) {
							subrows.push($next[0]);
							$next = $next.next();
						}

						var tbody = row.parentNode;

						// current row is a subrow
						if ($row.is("[" + attrs.subRow + "]")) {
						} else if (tbody === belongingToTbody) {
							cells.push({
								element: cell,
								cell: getSortValue(cell),
								row: row,
								subrows: subrows.length ? subrows : null,
								ignored: $row.is("[" + attrs.ignoreRow + "]")
							});
						}
					});
					return cells;
				}

				function getSortFxn(ascending, forceNumeric) {
					var fn,
						regex = /[^\-\+\d\.]/g;
					if (ascending) {
						fn = function(a, b) {
							if (a.ignored || b.ignored) {
								return 0;
							}
							if (forceNumeric) {
								return (
									parseFloat(a.cell.replace(regex, "")) - parseFloat(b.cell.replace(regex, ""))
								);
							} else {
								return a.cell.toLowerCase() > b.cell.toLowerCase() ? 1 : -1;
							}
						};
					} else {
						fn = function(a, b) {
							if (a.ignored || b.ignored) {
								return 0;
							}
							if (forceNumeric) {
								return (
									parseFloat(b.cell.replace(regex, "")) - parseFloat(a.cell.replace(regex, ""))
								);
							} else {
								return a.cell.toLowerCase() < b.cell.toLowerCase() ? 1 : -1;
							}
						};
					}
					return fn;
				}

				function convertToRows(sorted) {
					var newRows = [],
						i,
						l;
					for (i = 0, l = sorted.length; i < l; i++) {
						newRows.push(sorted[i].row);
						if (sorted[i].subrows) {
							newRows.push(sorted[i].subrows);
						}
					}
					return newRows;
				}

				var fn;
				var sorted;
				var cells = convertCells(col.cells, tbody);

				var customFn = $(col).data("tablesaw-sort");

				fn =
					(customFn && typeof customFn === "function" ? customFn(ascending) : false) ||
					getSortFxn(
						ascending,
						$(col).is("[" + attrs.numericCol + "]") &&
							!$(col).is("[" + attrs.numericCol + '="false"]')
					);

				sorted = cells.sort(fn);

				rows = convertToRows(sorted);

				return rows;
			},
			makeColDefault: function(col, a) {
				var c = $(col);
				c.attr(attrs.defaultCol, "true");
				if (a) {
					c.removeClass(classes.descend);
					c.addClass(classes.ascend);
				} else {
					c.removeClass(classes.ascend);
					c.addClass(classes.descend);
				}
			},
			sortBy: function(col, ascending) {
				var el = $(this);
				var colNum;
				var tbl = el.data("tablesaw");
				tbl.$tbody.each(function() {
					var tbody = this;
					var $tbody = $(this);
					var rows = tbl.getBodyRows(tbody);
					var sortedRows;
					var map = tbl.headerMapping[0];
					var j, k;

					// find the column number that we’re sorting
					for (j = 0, k = map.length; j < k; j++) {
						if (map[j] === col) {
							colNum = j;
							break;
						}
					}

					sortedRows = el[pluginName]("sortRows", rows, colNum, ascending, col, tbody);

					// replace Table rows
					for (j = 0, k = sortedRows.length; j < k; j++) {
						$tbody.append(sortedRows[j]);
					}
				});

				el[pluginName]("makeColDefault", col, ascending);

				el.trigger("tablesaw-sorted");
			}
		};

	// Collection method.
	$.fn[pluginName] = function(arrg) {
		var args = Array.prototype.slice.call(arguments, 1),
			returnVal;

		// if it's a method
		if (arrg && typeof arrg === "string") {
			returnVal = $.fn[pluginName].prototype[arrg].apply(this[0], args);
			return typeof returnVal !== "undefined" ? returnVal : $(this);
		}
		// check init
		if (!$(this).data(pluginName + "-active")) {
			$(this).data(pluginName + "-active", true);
			$.fn[pluginName].prototype._create.call(this, arrg);
		}
		return $(this);
	};
	// add methods
	$.extend($.fn[pluginName].prototype, methods);

	$(document).on(Tablesaw.events.create, function(e, Tablesaw) {
		if (Tablesaw.$table.is(initSelector)) {
			Tablesaw.$table[pluginName]();
		}
	});

	// TODO OOP this and add to Tablesaw object
})();

(function() {
	var classes = {
		hideBtn: "disabled",
		persistWidths: "tablesaw-fix-persist",
		hiddenCol: "tablesaw-swipe-cellhidden",
		persistCol: "tablesaw-swipe-cellpersist",
		allColumnsVisible: "tablesaw-all-cols-visible"
	};
	var attrs = {
		disableTouchEvents: "data-tablesaw-no-touch",
		ignorerow: "data-tablesaw-ignorerow",
		subrow: "data-tablesaw-subrow"
	};

	function createSwipeTable(tbl, $table) {
		var tblsaw = $table.data("tablesaw");

		var $btns = $("<div class='tablesaw-advance'></div>");
		// TODO next major version: remove .btn
		var $prevBtn = $(
			"<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>" +
				Tablesaw.i18n.swipePreviousColumn +
				"</a>"
		).appendTo($btns);
		// TODO next major version: remove .btn
		var $nextBtn = $(
			"<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>" +
				Tablesaw.i18n.swipeNextColumn +
				"</a>"
		).appendTo($btns);

		var $headerCells = tbl._getPrimaryHeaderCells();
		var $headerCellsNoPersist = $headerCells.not('[data-tablesaw-priority="persist"]');
		var headerWidths = [];
		var headerWidthsNoPersist = [];
		var $head = $(document.head || "head");
		var tableId = $table.attr("id");

		if (!$headerCells.length) {
			throw new Error("tablesaw swipe: no header cells found.");
		}

		$table.addClass("tablesaw-swipe");

		function initMinHeaderWidths() {
			$table.css({
				width: "1px"
			});

			// remove any hidden columns
			$table.find("." + classes.hiddenCol).removeClass(classes.hiddenCol);

			headerWidths = [];
			headerWidthsNoPersist = [];
			// Calculate initial widths
			$headerCells.each(function() {
				var width = this.offsetWidth;
				headerWidths.push(width);
				if (!isPersistent(this)) {
					headerWidthsNoPersist.push(width);
				}
			});

			// reset props
			$table.css({
				width: ""
			});
		}

		initMinHeaderWidths();

		$btns.appendTo(tblsaw.$toolbar);

		if (!tableId) {
			tableId = "tableswipe-" + Math.round(Math.random() * 10000);
			$table.attr("id", tableId);
		}

		function showColumn(headerCell) {
			tblsaw._$getCells(headerCell).removeClass(classes.hiddenCol);
		}

		function hideColumn(headerCell) {
			tblsaw._$getCells(headerCell).addClass(classes.hiddenCol);
		}

		function persistColumn(headerCell) {
			tblsaw._$getCells(headerCell).addClass(classes.persistCol);
		}

		function isPersistent(headerCell) {
			return $(headerCell).is('[data-tablesaw-priority="persist"]');
		}

		function unmaintainWidths() {
			$table.removeClass(classes.persistWidths);
			$("#" + tableId + "-persist").remove();
		}

		function maintainWidths() {
			var prefix = "#" + tableId + ".tablesaw-swipe ";
			var styles = [];
			var tableWidth = $table.width();
			var tableWidthNoPersistantColumns = tableWidth;
			var hash = [];
			var newHash;

			// save persistent column widths (as long as they take up less than 75% of table width)
			$headerCells.each(function(index) {
				var width;
				if (isPersistent(this)) {
					width = this.offsetWidth;
					tableWidthNoPersistantColumns -= width;

					if (width < tableWidth * 0.75) {
						hash.push(index + "-" + width);
						styles.push(
							prefix +
								" ." +
								classes.persistCol +
								":nth-child(" +
								(index + 1) +
								") { width: " +
								width +
								"px; }"
						);
					}
				}
			});
			newHash = hash.join("_");

			if (styles.length) {
				$table.addClass(classes.persistWidths);
				var $style = $("#" + tableId + "-persist");
				// If style element not yet added OR if the widths have changed
				if (!$style.length || $style.data("tablesaw-hash") !== newHash) {
					// Remove existing
					$style.remove();

					$("<style>" + styles.join("\n") + "</style>")
						.attr("id", tableId + "-persist")
						.data("tablesaw-hash", newHash)
						.appendTo($head);
				}
			}

			return tableWidthNoPersistantColumns;
		}

		function getNext() {
			var next = [];
			var checkFound;
			$headerCellsNoPersist.each(function(i) {
				var $t = $(this);
				var isHidden = $t.css("display") === "none" || $t.is("." + classes.hiddenCol);

				if (!isHidden && !checkFound) {
					checkFound = true;
					next[0] = i;
				} else if (isHidden && checkFound) {
					next[1] = i;

					return false;
				}
			});

			return next;
		}

		function getPrev() {
			var next = getNext();
			return [next[1] - 1, next[0] - 1];
		}

		function canNavigate(pair) {
			return pair[1] > -1 && pair[1] < $headerCellsNoPersist.length;
		}

		function matchesMedia() {
			var matchMedia = $table.attr("data-tablesaw-swipe-media");
			return !matchMedia || ("matchMedia" in window && window.matchMedia(matchMedia).matches);
		}

		function fakeBreakpoints() {
			if (!matchesMedia()) {
				return;
			}

			var containerWidth = $table.parent().width(),
				persist = [],
				sum = 0,
				sums = [],
				visibleNonPersistantCount = $headerCells.length;

			$headerCells.each(function(index) {
				var $t = $(this),
					isPersist = $t.is('[data-tablesaw-priority="persist"]');

				persist.push(isPersist);
				sum += headerWidths[index];
				sums.push(sum);

				// is persistent or is hidden
				if (isPersist || sum > containerWidth) {
					visibleNonPersistantCount--;
				}
			});

			// We need at least one column to swipe.
			var needsNonPersistentColumn = visibleNonPersistantCount === 0;

			$headerCells.each(function(index) {
				if (sums[index] > containerWidth) {
					hideColumn(this);
				}
			});

			var firstPersist = true;
			$headerCells.each(function(index) {
				if (persist[index]) {
					// for visual box-shadow
					persistColumn(this);

					if (firstPersist) {
						tblsaw._$getCells(this).css("width", sums[index] + "px");
						firstPersist = false;
					}
					return;
				}

				if (sums[index] <= containerWidth || needsNonPersistentColumn) {
					needsNonPersistentColumn = false;
					showColumn(this);
					tblsaw.updateColspanCells(classes.hiddenCol, this, true);
				}
			});

			unmaintainWidths();

			$table.trigger("tablesawcolumns");
		}

		function goForward() {
			navigate(true);
		}
		function goBackward() {
			navigate(false);
		}

		function navigate(isNavigateForward) {
			var pair;
			if (isNavigateForward) {
				pair = getNext();
			} else {
				pair = getPrev();
			}

			if (canNavigate(pair)) {
				if (isNaN(pair[0])) {
					if (isNavigateForward) {
						pair[0] = 0;
					} else {
						pair[0] = $headerCellsNoPersist.length - 1;
					}
				}

				var roomForColumnsWidth = maintainWidths();
				var hideColumnIndex = pair[0];
				var showColumnIndex = pair[1];

				// Hide one column, show one or more based on how much space was freed up
				var columnToShow;
				var columnToHide = $headerCellsNoPersist.get(hideColumnIndex);
				var wasAtLeastOneColumnShown = false;
				var atLeastOneColumnIsVisible = false;

				hideColumn(columnToHide);
				tblsaw.updateColspanCells(classes.hiddenCol, columnToHide, true);

				var columnIndex = hideColumnIndex + (isNavigateForward ? 1 : -1);
				while (columnIndex >= 0 && columnIndex < headerWidthsNoPersist.length) {
					roomForColumnsWidth -= headerWidthsNoPersist[columnIndex];

					var $columnToShow = $headerCellsNoPersist.eq(columnIndex);
					if ($columnToShow.is(".tablesaw-swipe-cellhidden")) {
						if (roomForColumnsWidth > 0) {
							columnToShow = $columnToShow.get(0);
							wasAtLeastOneColumnShown = true;
							atLeastOneColumnIsVisible = true;
							showColumn(columnToShow);
							tblsaw.updateColspanCells(classes.hiddenCol, columnToShow, false);
						}
					} else {
						atLeastOneColumnIsVisible = true;
					}

					if (isNavigateForward) {
						columnIndex++;
					} else {
						columnIndex--;
					}
				}

				if (!atLeastOneColumnIsVisible) {
					// if no columns are showing, at least show the first one we were aiming for.
					columnToShow = $headerCellsNoPersist.get(showColumnIndex);
					showColumn(columnToShow);
					tblsaw.updateColspanCells(classes.hiddenCol, columnToShow, false);
				} else if (
					!wasAtLeastOneColumnShown &&
					canNavigate(isNavigateForward ? getNext() : getPrev())
				) {
					// if our one new column was hidden but no new columns were shown, let’s navigate again automatically.
					navigate(isNavigateForward);
				}
				$table.trigger("tablesawcolumns");
			}
		}

		$prevBtn.add($nextBtn).on("click", function(e) {
			if (!!$(e.target).closest($nextBtn).length) {
				goForward();
			} else {
				goBackward();
			}
			e.preventDefault();
		});

		function getCoord(event, key) {
			return (event.touches || event.originalEvent.touches)[0][key];
		}

		if (!$table.is("[" + attrs.disableTouchEvents + "]")) {
			$table.on("touchstart.swipetoggle", function(e) {
				var originX = getCoord(e, "pageX");
				var originY = getCoord(e, "pageY");
				var x;
				var y;
				var scrollTop = window.pageYOffset;

				$(window).off(Tablesaw.events.resize, fakeBreakpoints);

				$(this)
					.on("touchmove.swipetoggle", function(e) {
						x = getCoord(e, "pageX");
						y = getCoord(e, "pageY");
					})
					.on("touchend.swipetoggle", function() {
						var cfg = tbl.getConfig({
							swipeHorizontalThreshold: 30,
							swipeVerticalThreshold: 30
						});

						// This config code is a little awkward because shoestring doesn’t support deep $.extend
						// Trying to work around when devs only override one of (not both) horizontalThreshold or
						// verticalThreshold in their TablesawConfig.
						// @TODO major version bump: remove cfg.swipe, move to just use the swipePrefix keys
						var verticalThreshold = cfg.swipe
							? cfg.swipe.verticalThreshold
							: cfg.swipeVerticalThreshold;
						var horizontalThreshold = cfg.swipe
							? cfg.swipe.horizontalThreshold
							: cfg.swipeHorizontalThreshold;

						var isPageScrolled = Math.abs(window.pageYOffset - scrollTop) >= verticalThreshold;
						var isVerticalSwipe = Math.abs(y - originY) >= verticalThreshold;

						if (!isVerticalSwipe && !isPageScrolled) {
							if (x - originX < -1 * horizontalThreshold) {
								goForward();
							}
							if (x - originX > horizontalThreshold) {
								goBackward();
							}
						}

						window.setTimeout(function() {
							$(window).on(Tablesaw.events.resize, fakeBreakpoints);
						}, 300);

						$(this).off("touchmove.swipetoggle touchend.swipetoggle");
					});
			});
		}

		$table
			.on("tablesawcolumns.swipetoggle", function() {
				var canGoPrev = canNavigate(getPrev());
				var canGoNext = canNavigate(getNext());
				$prevBtn[canGoPrev ? "removeClass" : "addClass"](classes.hideBtn);
				$nextBtn[canGoNext ? "removeClass" : "addClass"](classes.hideBtn);

				tblsaw.$toolbar[!canGoPrev && !canGoNext ? "addClass" : "removeClass"](
					classes.allColumnsVisible
				);
			})
			.on("tablesawnext.swipetoggle", function() {
				goForward();
			})
			.on("tablesawprev.swipetoggle", function() {
				goBackward();
			})
			.on(Tablesaw.events.destroy + ".swipetoggle", function() {
				var $t = $(this);

				$t.removeClass("tablesaw-swipe");
				tblsaw.$toolbar.find(".tablesaw-advance").remove();
				$(window).off(Tablesaw.events.resize, fakeBreakpoints);

				$t.off(".swipetoggle");
			})
			.on(Tablesaw.events.refresh, function() {
				unmaintainWidths();
				initMinHeaderWidths();
				fakeBreakpoints();
			});

		fakeBreakpoints();
		$(window).on(Tablesaw.events.resize, fakeBreakpoints);
	}

	// on tablecreate, init
	$(document).on(Tablesaw.events.create, function(e, tablesaw) {
		if (tablesaw.mode === "swipe") {
			createSwipeTable(tablesaw, tablesaw.$table);
		}
	});

	// TODO OOP this and add to Tablesaw object
})();

(function() {
	var MiniMap = {
		attr: {
			init: "data-tablesaw-minimap"
		},
		show: function(table) {
			var mq = table.getAttribute(MiniMap.attr.init);

			if (mq === "") {
				// value-less but exists
				return true;
			} else if (mq && "matchMedia" in window) {
				// has a mq value
				return window.matchMedia(mq).matches;
			}

			return false;
		}
	};

	function createMiniMap($table) {
		var tblsaw = $table.data("tablesaw");
		var $btns = $('<div class="tablesaw-advance minimap">');
		var $dotNav = $('<ul class="tablesaw-advance-dots">').appendTo($btns);
		var hideDot = "tablesaw-advance-dots-hide";
		var $headerCells = $table.data("tablesaw")._getPrimaryHeaderCells();

		// populate dots
		$headerCells.each(function() {
			$dotNav.append("<li><i></i></li>");
		});

		$btns.appendTo(tblsaw.$toolbar);

		function showHideNav() {
			if (!MiniMap.show($table[0])) {
				$btns.css("display", "none");
				return;
			}
			$btns.css("display", "block");

			// show/hide dots
			var dots = $dotNav.find("li").removeClass(hideDot);
			$table.find("thead th").each(function(i) {
				if ($(this).css("display") === "none") {
					dots.eq(i).addClass(hideDot);
				}
			});
		}

		// run on init and resize
		showHideNav();
		$(window).on(Tablesaw.events.resize, showHideNav);

		$table
			.on("tablesawcolumns.minimap", function() {
				showHideNav();
			})
			.on(Tablesaw.events.destroy + ".minimap", function() {
				var $t = $(this);

				tblsaw.$toolbar.find(".tablesaw-advance").remove();
				$(window).off(Tablesaw.events.resize, showHideNav);

				$t.off(".minimap");
			});
	}

	// on tablecreate, init
	$(document).on(Tablesaw.events.create, function(e, tablesaw) {
		if (
			(tablesaw.mode === "swipe" || tablesaw.mode === "columntoggle") &&
			tablesaw.$table.is("[ " + MiniMap.attr.init + "]")
		) {
			createMiniMap(tablesaw.$table);
		}
	});

	// TODO OOP this better
	Tablesaw.MiniMap = MiniMap;
})();

(function() {
	var S = {
		selectors: {
			init: "table[data-tablesaw-mode-switch]"
		},
		attributes: {
			excludeMode: "data-tablesaw-mode-exclude"
		},
		classes: {
			main: "tablesaw-modeswitch",
			toolbar: "tablesaw-bar-section"
		},
		modes: ["stack", "swipe", "columntoggle"],
		init: function(table) {
			var $table = $(table);
			var tblsaw = $table.data("tablesaw");
			var ignoreMode = $table.attr(S.attributes.excludeMode);
			var $toolbar = tblsaw.$toolbar;
			var $switcher = $("<div>").addClass(S.classes.main + " " + S.classes.toolbar);

			var html = [
					'<label><span class="abbreviated">' +
						Tablesaw.i18n.modeSwitchColumnsAbbreviated +
						'</span><span class="longform">' +
						Tablesaw.i18n.modeSwitchColumns +
						"</span>:"
				],
				dataMode = $table.attr("data-tablesaw-mode"),
				isSelected;

			// TODO next major version: remove .btn
			html.push('<span class="btn tablesaw-btn"><select>');
			for (var j = 0, k = S.modes.length; j < k; j++) {
				if (ignoreMode && ignoreMode.toLowerCase() === S.modes[j]) {
					continue;
				}

				isSelected = dataMode === S.modes[j];

				html.push(
					"<option" +
						(isSelected ? " selected" : "") +
						' value="' +
						S.modes[j] +
						'">' +
						Tablesaw.i18n.modes[j] +
						"</option>"
				);
			}
			html.push("</select></span></label>");

			$switcher.html(html.join(""));

			var $otherToolbarItems = $toolbar.find(".tablesaw-advance").eq(0);
			if ($otherToolbarItems.length) {
				$switcher.insertBefore($otherToolbarItems);
			} else {
				$switcher.appendTo($toolbar);
			}

			$switcher.find(".tablesaw-btn").tablesawbtn();
			$switcher.find("select").on("change", function(event) {
				return S.onModeChange.call(table, event, $(this).val());
			});
		},
		onModeChange: function(event, val) {
			var $table = $(this);
			var tblsaw = $table.data("tablesaw");
			var $switcher = tblsaw.$toolbar.find("." + S.classes.main);

			$switcher.remove();
			tblsaw.destroy();

			$table.attr("data-tablesaw-mode", val);
			$table.tablesaw();
		}
	};

	$(document).on(Tablesaw.events.create, function(e, Tablesaw) {
		if (Tablesaw.$table.is(S.selectors.init)) {
			S.init(Tablesaw.table);
		}
	});

	// TODO OOP this and add to Tablesaw object
})();

(function() {
	var pluginName = "tablesawCheckAll";

	function CheckAll(tablesaw) {
		this.tablesaw = tablesaw;
		this.$table = tablesaw.$table;

		this.attr = "data-tablesaw-checkall";
		this.checkAllSelector = "[" + this.attr + "]";
		this.forceCheckedSelector = "[" + this.attr + "-checked]";
		this.forceUncheckedSelector = "[" + this.attr + "-unchecked]";
		this.checkboxSelector = 'input[type="checkbox"]';

		this.$triggers = null;
		this.$checkboxes = null;

		if (this.$table.data(pluginName)) {
			return;
		}
		this.$table.data(pluginName, this);
		this.init();
	}

	CheckAll.prototype._filterCells = function($checkboxes) {
		return $checkboxes
			.filter(function() {
				return !$(this)
					.closest("tr")
					.is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]");
			})
			.find(this.checkboxSelector)
			.not(this.checkAllSelector);
	};

	// With buttons you can use a scoping selector like: data-tablesaw-checkall="#my-scoped-id input[type='checkbox']"
	CheckAll.prototype.getCheckboxesForButton = function(button) {
		return this._filterCells($($(button).attr(this.attr)));
	};

	CheckAll.prototype.getCheckboxesForCheckbox = function(checkbox) {
		return this._filterCells($($(checkbox).closest("th")[0].cells));
	};

	CheckAll.prototype.init = function() {
		var self = this;
		this.$table.find(this.checkAllSelector).each(function() {
			var $trigger = $(this);
			if ($trigger.is(self.checkboxSelector)) {
				self.addCheckboxEvents(this);
			} else {
				self.addButtonEvents(this);
			}
		});
	};

	CheckAll.prototype.addButtonEvents = function(trigger) {
		var self = this;

		// Update body checkboxes when header checkbox is changed
		$(trigger).on("click", function(event) {
			event.preventDefault();

			var $checkboxes = self.getCheckboxesForButton(this);

			var allChecked = true;
			$checkboxes.each(function() {
				if (!this.checked) {
					allChecked = false;
				}
			});

			var setChecked;
			if ($(this).is(self.forceCheckedSelector)) {
				setChecked = true;
			} else if ($(this).is(self.forceUncheckedSelector)) {
				setChecked = false;
			} else {
				setChecked = allChecked ? false : true;
			}

			$checkboxes.each(function() {
				this.checked = setChecked;

				$(this).trigger("change." + pluginName);
			});
		});
	};

	CheckAll.prototype.addCheckboxEvents = function(trigger) {
		var self = this;

		// Update body checkboxes when header checkbox is changed
		$(trigger).on("change", function() {
			var setChecked = this.checked;

			self.getCheckboxesForCheckbox(this).each(function() {
				this.checked = setChecked;
			});
		});

		var $checkboxes = self.getCheckboxesForCheckbox(trigger);

		// Update header checkbox when body checkboxes are changed
		$checkboxes.on("change." + pluginName, function() {
			var checkedCount = 0;
			$checkboxes.each(function() {
				if (this.checked) {
					checkedCount++;
				}
			});

			var allSelected = checkedCount === $checkboxes.length;

			trigger.checked = allSelected;

			// only indeterminate if some are selected (not all and not none)
			trigger.indeterminate = checkedCount !== 0 && !allSelected;
		});
	};

	// on tablecreate, init
	$(document).on(Tablesaw.events.create, function(e, tablesaw) {
		new CheckAll(tablesaw);
	});

	Tablesaw.CheckAll = CheckAll;
})();

	return Tablesaw;
}));


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=vendor.js.map