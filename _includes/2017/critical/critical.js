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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * matches : matches(el, selector)
 * Checks if a given element `el` matches `selector`.
 * Compare with [$.fn.is](http://api.jquery.com/is/).
 *
 *     var matches = require('dom101/matches');
 *
 *     matches(button, ':focus');
 */

function matches (el, selector) {
  var _matches = el.matches ||
    el.matchesSelector ||
    el.msMatchesSelector ||
    el.mozMatchesSelector ||
    el.webkitMatchesSelector ||
    el.oMatchesSelector

  if (_matches) {
    return _matches.call(el, selector)
  } else if (el.parentNode) {
    // IE8 and below
    var nodes = el.parentNode.querySelectorAll(selector)
    for (var i = nodes.length; i--; 0) {
      if (nodes[i] === el) return true
    }
    return false
  }
}

module.exports = matches


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var each = __webpack_require__(4)

/**
 * addClass : addClass(el, className)
 * Adds a class name to an element. Compare with `$.fn.addClass`.
 *
 *     var addClass = require('dom101/add-class');
 *
 *     addClass(el, 'active');
 */

function addClass (el, className) {
  if (!className) return

  if (Array.isArray(className)) {
    each(className, function (className) {
      addClass(el, className)
    })

    return
  }

  if (el.classList) {
    var classNames = className.split(' ').filter(Boolean)
    each(classNames, function (className) {
      el.classList.add(className)
    })
  } else {
    el.className += ' ' + className
  }
}

module.exports = addClass


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom101_add_class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dom101_add_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom101_on__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom101_on___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dom101_on__);
/*
 * This is the "critical path" JavaScript that will be included INLINE on every
 * page. Keep this as small as possible!
 */





// Transform the main body markup to make it readable.
const body = document.querySelector('[data-js-main-body]');

if (body) {
  Object(__WEBPACK_IMPORTED_MODULE_0__wrapify__["a" /* default */])(body);
  __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default()(body, '-wrapified');
}

// Be "done" when we're done, or after a certain timeout.
__WEBPACK_IMPORTED_MODULE_2_dom101_on___default()(window, 'load', done);
setTimeout(done, 5000);

let isDone;
function done() {
  if (isDone) return;
  __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default()(document.documentElement, 'LoadDone');
  isDone = true;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapify;
/* unused harmony export groupify */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom101_matches__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom101_matches___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dom101_matches__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom101_add_class__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dom101_add_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_dom__ = __webpack_require__(5);




/**
 * Wraps h2 sections into h2-section.
 * Wraps h3 sections into h3-section.
 *
 * @private
 */

function wrapify(root) {
  // These are your H2 sections. Returns a list of .h2-section nodes.
  const sections = wrapifyH2(root);

  // For each h2 section, wrap the H3's in them
  sections.forEach(section => {
    const bodies = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["d" /* findChildren */])(section, '[data-js-h3-section-list]');
    bodies.forEach(body => {
      wrapifyH3(body);
    });
  });
}

/**
 * Wraps h2 sections into h2-section.
 * Creates and HTML structure like so:
 *
 *     .h2-section
 *       h2.
 *         (title)
 *       .body.h3-section-list.
 *         (body goes here)
 *
 * @private
 */

function wrapifyH2(root) {
  return groupify(root, {
    tag: 'h2',
    wrapperFn: () => Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["c" /* createDiv */])({ class: 'h2-section' }),
    bodyFn: () => Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["c" /* createDiv */])({
      class: 'body h3-section-list',
      'data-js-h3-section-list': ''
    })
  });
}

/**
 * Wraps h3 sections into h3-section.
 * Creates and HTML structure like so:
 *
 *     .h3-section
 *       h3.
 *         (title)
 *       .body.
 *         (body goes here)
 *
 * @private
 */

function wrapifyH3(root) {
  return groupify(root, {
    tag: 'h3',
    wrapperFn: () => Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["c" /* createDiv */])({ class: 'h3-section' }),
    bodyFn: () => Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["c" /* createDiv */])({ class: 'body' })
  });
}

/**
 * Groups all headings (a `tag` selector) under wrappers like `.h2-section`
 * (build by `wrapperFn()`).
 * @private
 */

function groupify(el, { tag, wrapperFn, bodyFn }) {
  const first = el.children[0];
  let result = [];

  // Handle the markup before the first h2
  if (first && !__WEBPACK_IMPORTED_MODULE_0_dom101_matches___default()(first, tag)) {
    const sibs = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["e" /* nextUntil */])(first, tag);
    result.push(wrap(first, null, [first, ...sibs]));
  }

  // Find all h3's inside it
  const children = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["d" /* findChildren */])(el, tag);

  children.forEach(child => {
    const sibs = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["e" /* nextUntil */])(child, tag);
    result.push(wrap(child, child, sibs));
  });

  return result;

  function wrap(pivot, first, sibs) {
    const wrap = wrapperFn();

    const pivotClass = pivot.className;
    if (pivotClass) __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default()(wrap, pivotClass);
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["b" /* before */])(pivot, wrap);

    const body = bodyFn();
    if (pivotClass) __WEBPACK_IMPORTED_MODULE_1_dom101_add_class___default()(body, pivotClass);
    Object(__WEBPACK_IMPORTED_MODULE_2__helpers_dom__["a" /* appendMany */])(body, sibs);

    if (first) wrap.appendChild(first);
    wrap.appendChild(body);

    return wrap;
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * each : each(list, fn)
 * Iterates through `list` (an array or an object). This is useful when dealing
 * with NodeLists like `document.querySelectorAll`.
 *
 *     var each = require('dom101/each');
 *     var qa = require('dom101/query-selector-all');
 *
 *     each(qa('.button'), function (el) {
 *       addClass('el', 'selected');
 *     });
 */

function each (list, fn) {
  var i
  var len = list.length
  var idx

  if (typeof len === 'number') {
    for (i = 0; i < len; i++) {
      fn(list[i], i)
    }
  } else {
    idx = 0
    for (i in list) {
      if (list.hasOwnProperty(i)) {
        fn(list[i], i, idx++)
      }
    }
  }

  return list
}

module.exports = each


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appendMany;
/* harmony export (immutable) */ __webpack_exports__["e"] = nextUntil;
/* harmony export (immutable) */ __webpack_exports__["b"] = before;
/* harmony export (immutable) */ __webpack_exports__["d"] = findChildren;
/* harmony export (immutable) */ __webpack_exports__["c"] = createDiv;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom101_matches__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom101_matches___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dom101_matches__);


/*
 * Just like jQuery.append
 */

function appendMany(el, children) {
  children.forEach(child => {
    el.appendChild(child);
  });
}

/*
 * Just like jQuery.nextUntil
 */

function nextUntil(el, selector) {
  const nextEl = el.nextSibling;
  return nextUntilTick(nextEl, selector, []);
}

function nextUntilTick(el, selector, acc) {
  if (!el) return acc;

  const isMatch = __WEBPACK_IMPORTED_MODULE_0_dom101_matches___default()(el, selector);
  if (isMatch) return acc;

  return nextUntilTick(el.nextSibling, selector, [...acc, el]);
}

/*
 * Just like jQuery.before
 */

function before(reference, newNode) {
  reference.parentNode.insertBefore(newNode, reference);
}

/*
 * Like jQuery.children('selector')
 */

function findChildren(el, selector) {
  return [].slice.call(el.children).filter(child => __WEBPACK_IMPORTED_MODULE_0_dom101_matches___default()(child, selector));
}

/**
 * Creates a div
 * @private
 *
 * @example
 *
 *     createDiv({ class: 'foo' })
 */

function createDiv(props) {
  const d = document.createElement('div');
  Object.keys(props).forEach(key => {
    d.setAttribute(key, props[key]);
  });
  return d;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * on : on(el, event, fn)
 * Adds an event handler.
 *
 *     var on = require('dom101/on');
 *
 *     on(el, 'click', function () {
 *       ...
 *     });
 */

function on (el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler)
  } else {
    el.attachEvent('on' + event, function () {
      handler.call(el)
    })
  }
}

module.exports = on


/***/ })
/******/ ]);