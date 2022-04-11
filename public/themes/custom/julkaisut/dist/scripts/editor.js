(window["julkaisut-webpack"] = window["julkaisut-webpack"] || []).push([["/scripts/editor"],{

/***/ "./assets/scripts/editor.js":
/*!**********************************!*\
  !*** ./assets/scripts/editor.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);







var drupalSettings = window.drupalSettings;
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/image', {
    name: 'koros-basic-top',
    label: 'Basic Koros Top'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/paragraph', {
    name: 'excerpt',
    label: 'Excerpt'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/table', {
    name: 'numeric-with-labels',
    label: 'Numeric (with label on left)'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/table', {
    name: 'numeric',
    label: 'Numeric (all cells)'
  });
});

drupalSettings.gutenberg._listeners.init.push(function () {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["unregisterBlockStyle"])('core/quote', 'large');
  var unsubscribe = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["subscribe"])(function () {
    if (drupalSettings.path.currentPath !== 'node/add/article') {
      unsubscribe();
      return;
    }

    var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor'),
        getBlocks = _select.getBlocks;

    var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["dispatch"])('core/block-editor'),
        resetBlocks = _dispatch.resetBlocks;

    var blocks = getBlocks();

    if (Array.isArray(blocks)) {
      unsubscribe();
      setTimeout(function () {
        blocks = getBlocks();

        if (blocks.length === 0) {
          resetBlocks(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["synchronizeBlocksWithTemplate"])(blocks, [["core/paragraph", {
            "placeholder": "Write an introduction",
            "className": "is-style-excerpt"
          }], ["core/paragraph", {
            "placeholder": "Add text or type / to add blocks"
          }]]));
        }
      }, 500);
    }
  });
});

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'julkaisut/fix-drupal-media-attributes', Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/image') {
      props.attributes.mediaAttrs = {};

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes.caption) === 'object') {
        props.attributes.caption = props.attributes.caption.rendered;
      }
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockListBlock, props);
  };
}));

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./assets/scripts/editor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/doktor/project/genero/public/themes/custom/julkaisut/assets/scripts/editor.js */"./assets/scripts/editor.js");


/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!*******************************************!*\
  !*** external {"this":["wp","domReady"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ })

},[[1,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=editor.js.map