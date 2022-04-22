(window["julkaisut-webpack"] = window["julkaisut-webpack"] || []).push([["/scripts/app"],{

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tablesaw_dist_tablesaw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tablesaw/dist/tablesaw */ "./node_modules/tablesaw/dist/tablesaw.js");
/* harmony import */ var tablesaw_dist_tablesaw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tablesaw_dist_tablesaw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dropdown */ "./assets/scripts/components/dropdown.js");
/* harmony import */ var _components_toggler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toggler */ "./assets/scripts/components/toggler.js");


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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
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






 // Set a CSS variable with the real height of the viewport

var appHeight = function appHeight() {
  var doc = document.documentElement;
  doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
};

window.addEventListener('resize', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(appHeight, 150));
appHeight();

window.euCookieComplianceLoadScripts = function () {
  var scripts = document.querySelectorAll('script[data-consent]');

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    script.type = 'text/javascript';
    script.replaceWith(script);
  }
};

window.TablesawConfig = {
  i18n: {
    modeStack: Drupal.t('Stack'),
    modeSwipe: Drupal.t('Swipe'),
    modeToggle: Drupal.t('Toggle'),
    modeSwitchColumnsAbbreviated: Drupal.t('Cols'),
    modeSwitchColumns: Drupal.t('Columns'),
    columnToggleButton: Drupal.t('Columns'),
    columnToggleError: Drupal.t('No eligible columns.'),
    sort: Drupal.t('Sort'),
    swipePreviousColumn: Drupal.t('Previous column'),
    swipeNextColumn: Drupal.t('Next column')
  }
};
Drupal.behaviors.julkaisutTheme = {
  attach: function attach(context, settings) {
    var _window$jQuery, _window$jQuery$ui, _window$jQuery$ui$aut, _window$jQuery$ui$aut2, _window$jQuery$ui$aut3;

    if (matchMedia('(min-width: 1024px)').matches) {
      this.desktopMenu(context);
    } else {
      this.mobileMenu(context);
    }

    if ((_window$jQuery = __webpack_provided_window_dot_jQuery) !== null && _window$jQuery !== void 0 && (_window$jQuery$ui = _window$jQuery.ui) !== null && _window$jQuery$ui !== void 0 && (_window$jQuery$ui$aut = _window$jQuery$ui.autocomplete) !== null && _window$jQuery$ui$aut !== void 0 && (_window$jQuery$ui$aut2 = _window$jQuery$ui$aut.prototype) !== null && _window$jQuery$ui$aut2 !== void 0 && (_window$jQuery$ui$aut3 = _window$jQuery$ui$aut2.options) !== null && _window$jQuery$ui$aut3 !== void 0 && _window$jQuery$ui$aut3.messages) {
      this.translateJqueryUiMessages();
    }

    this.cookieConsent(context);
    this.bookMenu(context);
    this.responsiveTables(context);
    this.clipboard(context.querySelectorAll('[data-clipboard-text]')); // By having the anchor point to an unexisting element it will
    // automatically scroll to the top

    this.scrollToTop(context.querySelectorAll('[href="#top"]'));
    this.markExternalLinks(context.querySelectorAll('a[target="_blank"]'));

    if (__webpack_provided_window_dot_jQuery && settings.views && settings.views.ajaxViews) {
      __webpack_provided_window_dot_jQuery(context).on('views_infinite_scroll.new_content', this.focusNewContent);
    }
  },
  translateJqueryUiMessages: function translateJqueryUiMessages() {
    jQuery.ui.autocomplete.prototype.options.messages = _objectSpread(_objectSpread({}, jQuery.ui.autocomplete.prototype.options.messages), {}, {
      noResults: Drupal.t('No search results.'),
      results: function results(count) {
        if (count > 0) {
          return Drupal.t('@count results are available, use up and down arrow keys to navigate.', {
            '@count': count
          });
        }

        return Drupal.t('@count result is available, use up and down arrow keys to navigate.', {
          '@count': count
        });
      }
    });
  },
  markExternalLinks: function markExternalLinks(links) {
    var icon = document.createElement('i');
    icon.classList.add('hds-icon', 'hds-icon--link-external', 'external-link-icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('title', Drupal.t('Open in new window'));
    var srLabel = document.createElement('span');
    srLabel.classList.add('visually-hidden');
    srLabel.textContent = Drupal.t('Open in new window');

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.appendChild(icon.cloneNode(true));
      link.appendChild(srLabel.cloneNode(true));
      link.classList.add('is-external-link');
    }
  },
  focusNewContent: function focusNewContent(e, newRows) {
    // Exit if there's no focused element
    if (!document.activeElement || !document.hasFocus()) {
      return;
    }

    var pagerWrapper = e.target.nextElementSibling;

    if (!pagerWrapper) {
      return;
    } // Exit unless the pager was selected


    var pager = pagerWrapper.querySelector('a');

    if (pager !== document.activeElement) {
      return;
    } // Move focus to the first new element.


    setTimeout(function () {
      var firstLink = newRows.querySelector('a');

      if (firstLink) {
        firstLink.focus();
      }
    });
  },
  scrollToTop: function scrollToTop(links) {
    var focusLogo = function focusLogo() {
      return document.querySelector('[rel="home"]').focus();
    };

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', focusLogo);
    }
  },
  bookMenu: function bookMenu(context) {
    var submenuTriggers = context.querySelectorAll('.book-tree__submenu-trigger, .book-tree__trigger');

    for (var i = 0; i < submenuTriggers.length; i++) {
      var trigger = submenuTriggers[i];
      Object(_components_toggler__WEBPACK_IMPORTED_MODULE_6__["toggler"])(trigger);
    }
  },
  responsiveTables: function responsiveTables(context) {
    // Tablesaw.init() method has an issue when domcontentloaded fires while readystate is
    // still interactive so we handle it ourselves.
    if (document.readyState !== 'loading') {
      tablesaw_dist_tablesaw__WEBPACK_IMPORTED_MODULE_3___default.a._init(context);

      return;
    }

    document.addEventListener('DOMContentLoaded', function () {
      tablesaw_dist_tablesaw__WEBPACK_IMPORTED_MODULE_3___default.a._init(context);
    });
  },
  desktopMenu: function desktopMenu(context) {
    var navigation = context.querySelector('.site-navigation');
    var trigger = context.querySelector('.site-languages__button');

    if (navigation) {
      Object(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__["menu"])(navigation);
    }

    if (trigger) {
      Object(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__["button"])(trigger);
      Object(_components_toggler__WEBPACK_IMPORTED_MODULE_6__["toggler"])(trigger);
    }
  },
  mobileMenu: function mobileMenu(context) {
    var trigger = context.querySelector('.site-hamburger-button');
    var html = context.getElementsByTagName('html')[0];

    if (trigger) {
      Object(_components_toggler__WEBPACK_IMPORTED_MODULE_6__["toggler"])(trigger); // Trap focus within the mobile menu while it's open.

      var mobileMenu = document.getElementById(trigger.getAttribute('aria-controls'));

      if (mobileMenu) {
        var mobileMenuFocusTrap = Object(focus_trap__WEBPACK_IMPORTED_MODULE_4__["createFocusTrap"])(mobileMenu);
        trigger.addEventListener('click', function () {
          var isExpanded = trigger.getAttribute('aria-expanded') === 'true';

          if (isExpanded) {
            mobileMenuFocusTrap.deactivate();
            html.style.overflow = "scroll";
          } else {
            mobileMenuFocusTrap.activate();
            html.style.overflow = "hidden";
          }
        });
      }
    }

    var submenuTriggers = context.querySelectorAll('.site-navigation__submenu-trigger');

    for (var i = 0; i < submenuTriggers.length; i++) {
      var _trigger = submenuTriggers[i];

      _trigger.addEventListener('click', function (e) {
        var item = e.target.closest('[aria-haspopup]');
        Object(_components_toggler__WEBPACK_IMPORTED_MODULE_6__["toggle"])(item);
        e.preventDefault();
      });
    }
  },
  clipboard: function clipboard(elements) {
    if (!elements.length) {
      return;
    }

    new clipboard__WEBPACK_IMPORTED_MODULE_2___default.a(elements);
  },
  cookieConsent: function cookieConsent(context) {
    var withdrawTriggers = context.querySelectorAll('.do-withdraw-cookie-consent');

    for (var i = 0; i < withdrawTriggers.length; i++) {
      withdrawTriggers[i].addEventListener('click', function () {
        Drupal.eu_cookie_compliance.setStatus(null);
        location.reload();
      });
    }
  }
}; // Change book navigation from fixed to static when scroll to footer

var bookNav = document.querySelector('.book-navigation');
var footer = document.querySelector('.site__footer');

function checkOffset() {
  function getRectTop(el) {
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  if (bookNav) {
    if (document.body.scrollTop + window.innerHeight < getRectTop(footer) + document.body.scrollTop + 48) bookNav.style.position = 'fixed'; // restore when you scroll up
    else bookNav.style.position = 'static';
  }
}

document.addEventListener("scroll", function () {
  checkOffset();
});

(function () {
  window.rnsData = {
    apiKey: 'oyp8ikjx4fndltql',
    categories: ['Julkaisut']
  };
  var s = document.createElement('script');
  s.src = 'https://cdn.reactandshare.com/plugin/rns.js';
  document.body.appendChild(s);
})(); // Change text for publicated pdf


var publicated = document.querySelector('.publicated');
var pdfButton = document.querySelector('.wp-block-button__link');

if (publicated) {
  pdfButton.textContent = Drupal.t("Read the accessible publication below");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/scripts/components/dropdown.js":
/*!***********************************************!*\
  !*** ./assets/scripts/components/dropdown.js ***!
  \***********************************************/
/*! exports provided: button, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
function open(el) {
  el.setAttribute('aria-expanded', true);
}

function close(el) {
  el.setAttribute('aria-expanded', false);
}

function keydownListener(e) {
  var currentLink = e.target; // The element that would trigger a submenu

  var currentItem = currentLink.matches('[aria-haspopup]') ? currentLink : currentLink.closest('[aria-haspopup');
  var isInSubmenu = !!currentLink.closest('[role="menu"]');
  var nextItem = currentLink.matches('a') ? currentLink.parentElement.nextElementSibling : currentLink.nextElementSibling;
  var prevItem = currentLink.matches('a') ? currentLink.parentElement.previousElementSibling : currentLink.previousElementSibling;
  var nextLink = nextItem ? nextItem.querySelector('a') : null;
  var prevLink = prevItem ? prevItem.querySelector('a') : null; // Either current submenu or inner submenu

  var submenu = isInSubmenu ? currentLink.closest('[role="menu"]') : currentLink.parentElement.querySelector('[role="menu"]'); // The closest tabbable element which is a parent

  var parentLink = isInSubmenu ? submenu.parentElement.querySelector('a, button') : null; // The closest parent element that triggers a submenu

  var parentItem = parentLink ? parentLink.matches('[aria-haspopup') ? parentLink : parentLink.closest('[aria-haspopup') : null;

  switch (e.key) {
    case 'Down':
    case 'ArrowDown':
      // If it's in a submenu, go to next. If not, open submenu
      if (isInSubmenu) {
        if (nextLink) {
          nextLink.focus();
          e.preventDefault();
        } else if (nextItem) {
          nextItem.focus();
          e.preventDefault();
        }
      } else if (submenu) {
        open(currentItem);
        submenu.querySelector('[role="menuitem"]').focus();
        e.preventDefault();
      }

      break;

    case 'Up':
    case 'ArrowUp':
      // If it's in a submenu, go to previous until there's more then exit
      if (isInSubmenu) {
        if (prevLink) {
          prevLink.focus();
        } else if (parentLink) {
          parentLink.focus();
          close(parentItem);
        }

        e.preventDefault();
      }

      break;

    case 'Left':
    case 'ArrowLeft':
      // If it's in a submenu exit, otherwise previous link
      if (isInSubmenu) {
        parentLink.focus();
        close(currentItem);
        e.preventDefault();
      } else if (prevLink) {
        prevLink.focus();
        e.preventDefault();
      }

      break;

    case 'Right':
    case 'ArrowRight':
      // Next link
      if (nextLink) {
        nextLink.focus();
        e.preventDefault();
      }

      break;

    case 'Esc':
    case 'Escape':
      if (parentItem) {
        close(parentItem);
      }

      break;
  }
}

function button(button) {
  var parent = button.parentNode;
  parent.addEventListener('mouseout', function () {
    return requestAnimationFrame(function () {
      return close(button);
    });
  }); // On mouseover close all other submenus

  parent.addEventListener('mouseover', function () {
    return requestAnimationFrame(function () {
      open(button);
    });
  });
  parent.addEventListener('keydown', keydownListener);
}
function menu(menu) {
  var triggers = menu.querySelectorAll('[aria-haspopup="true"]');

  var _loop = function _loop(i) {
    var trigger = triggers[i];
    trigger.addEventListener('mouseout', function () {
      return requestAnimationFrame(function () {
        return close(trigger);
      });
    }); // On mouseover close all other submenus

    trigger.addEventListener('mouseover', function () {
      return requestAnimationFrame(function () {
        Array.from(triggers).slice(i, 1).forEach(close);
        open(trigger);
      });
    });
  };

  for (var i = 0; i < triggers.length; i++) {
    _loop(i);
  }

  menu.addEventListener('keydown', keydownListener);
}

/***/ }),

/***/ "./assets/scripts/components/toggler.js":
/*!**********************************************!*\
  !*** ./assets/scripts/components/toggler.js ***!
  \**********************************************/
/*! exports provided: open, close, toggle, toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggler", function() { return toggler; });
function open(el) {
  el.setAttribute('aria-expanded', true);
}
function close(el) {
  el.setAttribute('aria-expanded', false);
}
function toggle(el) {
  var isExpanded = el.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }

  if (el.dataset.toggleLabel) {
    var currentLabel = el.getAttribute('aria-label');
    el.setAttribute('aria-label', el.dataset.toggleLabel);
    el.dataset.toggleLabel = currentLabel;
  }

  var controls = el.getAttribute('aria-controls');

  if (controls) {
    controls.split(' ').forEach(function (selector) {
      var el = document.getElementById(selector);

      if (isExpanded) {
        el.classList.remove('is-active');
      } else {
        el.classList.add('is-active');
      }
    });
  }
}
function toggler(el) {
  el.addEventListener('keydown', function (e) {
    var isExpanded = el.getAttribute('aria-expanded') === 'true';
    var targetId = el.getAttribute('aria-controls');
    var target = document.getElementById(targetId);

    switch (e.key) {
      case 'Enter':
      case 'Space':
      case ' ':
        toggle(el);
        e.preventDefault();
        break;

      case 'Esc':
      case 'Escape':
        if (isExpanded) {
          toggle(el);
        }

        break;
    } // Manage escape to close the current controlled target popup


    if (target) {
      target.addEventListener('keydown', function (e) {
        switch (e.key) {
          case 'Esc':
          case 'Escape':
            var wrapper = e.target.closest('[id]');

            if (isExpanded && targetId === wrapper.id) {
              toggle(el);
              el.focus();
            }

            break;
        }
      });
    }
  });
  el.addEventListener('click', function (e) {
    e.preventDefault();
    requestAnimationFrame(function () {
      return toggle(el);
    });
  });
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/styles/editor.scss":
/*!***********************************!*\
  !*** ./assets/styles/editor.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/styles/print.scss":
/*!**********************************!*\
  !*** ./assets/styles/print.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************!*\
  !*** multi ./assets/scripts/app.js ./assets/styles/app.scss ./assets/styles/print.scss ./assets/styles/editor.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/doktor/project/genero/public/themes/custom/julkaisut/assets/scripts/app.js */"./assets/scripts/app.js");
__webpack_require__(/*! /home/doktor/project/genero/public/themes/custom/julkaisut/assets/styles/app.scss */"./assets/styles/app.scss");
__webpack_require__(/*! /home/doktor/project/genero/public/themes/custom/julkaisut/assets/styles/print.scss */"./assets/styles/print.scss");
module.exports = __webpack_require__(/*! /home/doktor/project/genero/public/themes/custom/julkaisut/assets/styles/editor.scss */"./assets/styles/editor.scss");


/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map