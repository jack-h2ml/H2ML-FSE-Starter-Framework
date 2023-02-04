/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

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
  return root.Date.now();
};

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
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
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
    var time = now();
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
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
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

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

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
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
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

module.exports = throttle;


/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-animation-on-scroll/dist/esm/components/AnimationOnScroll.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-animation-on-scroll/dist/esm/components/AnimationOnScroll.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationOnScroll": () => (/* binding */ AnimationOnScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


const animatedClass = 'animate__animated';
const serverSide = typeof window === 'undefined';
let scrollableParentRefInitialValue = undefined;

if (!serverSide) {
  scrollableParentRefInitialValue = window;
}

const AnimationOnScroll = ({
  offset = 150,
  duration = 1,
  style: styleProps,
  className: classNameProps,
  initiallyVisible = false,
  animateIn,
  afterAnimatedIn,
  animateOut,
  delay = 0,
  animatePreScroll = true,
  afterAnimatedOut,
  scrollableParentSelector,
  animateOnce = false,
  children
}) => {
  const [classes, setClasses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(animatedClass);
  const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    animationDuration: `${duration}s`,
    opacity: initiallyVisible ? 1 : 0
  });
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animating = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const visibilityRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    onScreen: false,
    inViewport: false
  });
  const delayedAnimationTORef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const callbackTORef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const scrollableParentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(scrollableParentRefInitialValue);
  const getElementTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(elm => {
    let yPos = 0;

    while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
      yPos += elm.offsetTop + elm.clientTop;
      elm = elm.offsetParent;
    }

    return yPos;
  }, []);
  const getScrollPos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scrollableParentRef.current.pageYOffset !== undefined) {
      return scrollableParentRef.current.pageYOffset;
    }

    return scrollableParentRef.current.scrollTop;
  }, [scrollableParentRef]);
  const getScrollableParentHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (scrollableParentRef.current.innerHeight !== undefined) {
      return scrollableParentRef.current.innerHeight;
    }

    return scrollableParentRef.current.clientHeight;
  }, [scrollableParentRef]);
  const getViewportTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return getScrollPos() + offset;
  }, [offset, getScrollPos]);
  const getViewportBottom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return getScrollPos() + getScrollableParentHeight() - offset;
  }, [offset, getScrollPos, getScrollableParentHeight]);
  const isInViewport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y => {
    return y >= getViewportTop() && y <= getViewportBottom();
  }, [getViewportTop, getViewportBottom]);
  const isAboveViewport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y => {
    return y < getViewportTop();
  }, [getViewportTop]);
  const isBelowViewport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y => {
    return y > getViewportBottom();
  }, [getViewportBottom]);
  const inViewport = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((elementTop, elementBottom) => {
    return isInViewport(elementTop) || isInViewport(elementBottom) || isAboveViewport(elementTop) && isBelowViewport(elementBottom);
  }, [isInViewport, isAboveViewport, isBelowViewport]);
  const isAboveScreen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y => {
    return y < getScrollPos();
  }, [getScrollPos]);
  const isBelowScreen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(y => {
    return y > getScrollPos() + getScrollableParentHeight();
  }, [getScrollPos, getScrollableParentHeight]);
  const onScreen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((elementTop, elementBottom) => {
    return !isAboveScreen(elementBottom) && !isBelowScreen(elementTop);
  }, [isAboveScreen, isBelowScreen]);
  const getVisibility = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const elementTop = getElementTop(node.current) - getElementTop(scrollableParentRef.current);
    const elementBottom = elementTop + node.current.clientHeight;
    return {
      inViewport: inViewport(elementTop, elementBottom),
      onScreen: onScreen(elementTop, elementBottom)
    };
  }, [getElementTop, node, inViewport, onScreen, scrollableParentRef]);
  const visibilityHasChanged = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((previousVis, currentVis) => {
    return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
  }, []);
  const animate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((animation, callback) => {
    delayedAnimationTORef.current = setTimeout(() => {
      animating.current = true;
      setClasses(`${animatedClass} ${animation}`);
      setStyle({
        animationDuration: `${duration}s`
      });
      callbackTORef.current = setTimeout(callback, duration * 1000);
    }, delay);
  }, [animating, delay, duration]);
  const animateInTrigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback => {
    animate(animateIn, () => {
      if (!animateOnce) {
        setStyle({
          animationDuration: `${duration}s`,
          opacity: 1
        });
        animating.current = false;
      }

      const vis = getVisibility();

      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animateIn, animateOnce, duration, animate, getVisibility]);
  const animateOutTrigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(callback => {
    animate(animateOut, () => {
      setClasses(animatedClass);
      setStyle({
        animationDuration: `${duration}s`,
        opacity: 0
      });
      const vis = getVisibility();

      if (vis.inViewport && animateIn) {
        animateInTrigger(afterAnimatedIn);
      } else {
        animating.current = false;
      }

      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animate, animateIn, duration, afterAnimatedIn, animateInTrigger, animateOut, getVisibility]);
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!animating.current) {
      const {
        current: visibility
      } = visibilityRef;
      const currentVis = getVisibility();

      if (visibilityHasChanged(visibility, currentVis)) {
        clearTimeout(delayedAnimationTORef.current);

        if (!currentVis.onScreen) {
          setClasses(animatedClass);
          setStyle({
            animationDuration: `${duration}s`,
            opacity: initiallyVisible ? 1 : 0
          });
        } else if (currentVis.inViewport && animateIn) {
          animateInTrigger(afterAnimatedIn);
        } else if (currentVis.onScreen && visibility.inViewport && animateOut && node.current.style.opacity === '1') {
          animateOutTrigger(afterAnimatedOut);
        }

        visibilityRef.current = currentVis;
      }
    }
  }, [afterAnimatedIn, afterAnimatedOut, animateIn, animateInTrigger, animateOut, duration, initiallyVisible, visibilityHasChanged, animateOutTrigger, getVisibility]);
  const listener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(() => {
    handleScroll();
  }, 50), [handleScroll]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!serverSide) {
      const parentSelector = scrollableParentSelector;
      scrollableParentRef.current = parentSelector ? document.querySelector(parentSelector) : window;

      if (scrollableParentRef.current && scrollableParentRef.current.addEventListener) {
        scrollableParentRef.current.addEventListener('scroll', listener);
      } else {
        console.warn(`Cannot find element by locator: ${scrollableParentSelector}`);
      }

      if (animatePreScroll) {
        handleScroll();
      }

      return () => {
        clearTimeout(delayedAnimationTORef.current);
        clearTimeout(callbackTORef.current);

        if (window && window.removeEventListener) {
          window.removeEventListener('scroll', listener);
        }
      };
    }
  }, [handleScroll, scrollableParentSelector, scrollableParentRef, listener, animatePreScroll]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: node,
    className: classNameProps ? `${classNameProps} ${classes}` : classes,
    style: Object.assign({}, style, styleProps)
  }, children);
};
//# sourceMappingURL=AnimationOnScroll.js.map

/***/ }),

/***/ "./node_modules/react-animation-on-scroll/dist/esm/components/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-animation-on-scroll/dist/esm/components/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationOnScroll": () => (/* reexport safe */ _AnimationOnScroll__WEBPACK_IMPORTED_MODULE_0__.AnimationOnScroll)
/* harmony export */ });
/* harmony import */ var _AnimationOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationOnScroll */ "./node_modules/react-animation-on-scroll/dist/esm/components/AnimationOnScroll.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-animation-on-scroll/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-animation-on-scroll/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationOnScroll": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.AnimationOnScroll)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/react-animation-on-scroll/dist/esm/components/index.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animation-on-scroll */ "./node_modules/react-animation-on-scroll/dist/esm/index.js");
/**
 * Testing
 */



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvcmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbC9kaXN0L2VzbS9jb21wb25lbnRzL0FuaW1hdGlvbk9uU2Nyb2xsLmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFuaW1hdGlvbi1vbi1zY3JvbGwvZGlzdC9lc20vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9yZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmNvbnN0IGFuaW1hdGVkQ2xhc3MgPSAnYW5pbWF0ZV9fYW5pbWF0ZWQnO1xuY29uc3Qgc2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xubGV0IHNjcm9sbGFibGVQYXJlbnRSZWZJbml0aWFsVmFsdWUgPSB1bmRlZmluZWQ7XG5cbmlmICghc2VydmVyU2lkZSkge1xuICBzY3JvbGxhYmxlUGFyZW50UmVmSW5pdGlhbFZhbHVlID0gd2luZG93O1xufVxuXG5leHBvcnQgY29uc3QgQW5pbWF0aW9uT25TY3JvbGwgPSAoe1xuICBvZmZzZXQgPSAxNTAsXG4gIGR1cmF0aW9uID0gMSxcbiAgc3R5bGU6IHN0eWxlUHJvcHMsXG4gIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcHMsXG4gIGluaXRpYWxseVZpc2libGUgPSBmYWxzZSxcbiAgYW5pbWF0ZUluLFxuICBhZnRlckFuaW1hdGVkSW4sXG4gIGFuaW1hdGVPdXQsXG4gIGRlbGF5ID0gMCxcbiAgYW5pbWF0ZVByZVNjcm9sbCA9IHRydWUsXG4gIGFmdGVyQW5pbWF0ZWRPdXQsXG4gIHNjcm9sbGFibGVQYXJlbnRTZWxlY3RvcixcbiAgYW5pbWF0ZU9uY2UgPSBmYWxzZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgW2NsYXNzZXMsIHNldENsYXNzZXNdID0gdXNlU3RhdGUoYW5pbWF0ZWRDbGFzcyk7XG4gIGNvbnN0IFtzdHlsZSwgc2V0U3R5bGVdID0gdXNlU3RhdGUoe1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYCxcbiAgICBvcGFjaXR5OiBpbml0aWFsbHlWaXNpYmxlID8gMSA6IDBcbiAgfSk7XG4gIGNvbnN0IG5vZGUgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGFuaW1hdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHZpc2liaWxpdHlSZWYgPSB1c2VSZWYoe1xuICAgIG9uU2NyZWVuOiBmYWxzZSxcbiAgICBpblZpZXdwb3J0OiBmYWxzZVxuICB9KTtcbiAgY29uc3QgZGVsYXllZEFuaW1hdGlvblRPUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gIGNvbnN0IGNhbGxiYWNrVE9SZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgY29uc3Qgc2Nyb2xsYWJsZVBhcmVudFJlZiA9IHVzZVJlZihzY3JvbGxhYmxlUGFyZW50UmVmSW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgZ2V0RWxlbWVudFRvcCA9IHVzZUNhbGxiYWNrKGVsbSA9PiB7XG4gICAgbGV0IHlQb3MgPSAwO1xuXG4gICAgd2hpbGUgKGVsbSAmJiBlbG0ub2Zmc2V0VG9wICE9PSB1bmRlZmluZWQgJiYgZWxtLmNsaWVudFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB5UG9zICs9IGVsbS5vZmZzZXRUb3AgKyBlbG0uY2xpZW50VG9wO1xuICAgICAgZWxtID0gZWxtLm9mZnNldFBhcmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geVBvcztcbiAgfSwgW10pO1xuICBjb25zdCBnZXRTY3JvbGxQb3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHNjcm9sbGFibGVQYXJlbnRSZWYuY3VycmVudC5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsYWJsZVBhcmVudFJlZi5jdXJyZW50LnBhZ2VZT2Zmc2V0O1xuICAgIH1cblxuICAgIHJldHVybiBzY3JvbGxhYmxlUGFyZW50UmVmLmN1cnJlbnQuc2Nyb2xsVG9wO1xuICB9LCBbc2Nyb2xsYWJsZVBhcmVudFJlZl0pO1xuICBjb25zdCBnZXRTY3JvbGxhYmxlUGFyZW50SGVpZ2h0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzY3JvbGxhYmxlUGFyZW50UmVmLmN1cnJlbnQuaW5uZXJIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHNjcm9sbGFibGVQYXJlbnRSZWYuY3VycmVudC5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2Nyb2xsYWJsZVBhcmVudFJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgfSwgW3Njcm9sbGFibGVQYXJlbnRSZWZdKTtcbiAgY29uc3QgZ2V0Vmlld3BvcnRUb3AgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIGdldFNjcm9sbFBvcygpICsgb2Zmc2V0O1xuICB9LCBbb2Zmc2V0LCBnZXRTY3JvbGxQb3NdKTtcbiAgY29uc3QgZ2V0Vmlld3BvcnRCb3R0b20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIGdldFNjcm9sbFBvcygpICsgZ2V0U2Nyb2xsYWJsZVBhcmVudEhlaWdodCgpIC0gb2Zmc2V0O1xuICB9LCBbb2Zmc2V0LCBnZXRTY3JvbGxQb3MsIGdldFNjcm9sbGFibGVQYXJlbnRIZWlnaHRdKTtcbiAgY29uc3QgaXNJblZpZXdwb3J0ID0gdXNlQ2FsbGJhY2soeSA9PiB7XG4gICAgcmV0dXJuIHkgPj0gZ2V0Vmlld3BvcnRUb3AoKSAmJiB5IDw9IGdldFZpZXdwb3J0Qm90dG9tKCk7XG4gIH0sIFtnZXRWaWV3cG9ydFRvcCwgZ2V0Vmlld3BvcnRCb3R0b21dKTtcbiAgY29uc3QgaXNBYm92ZVZpZXdwb3J0ID0gdXNlQ2FsbGJhY2soeSA9PiB7XG4gICAgcmV0dXJuIHkgPCBnZXRWaWV3cG9ydFRvcCgpO1xuICB9LCBbZ2V0Vmlld3BvcnRUb3BdKTtcbiAgY29uc3QgaXNCZWxvd1ZpZXdwb3J0ID0gdXNlQ2FsbGJhY2soeSA9PiB7XG4gICAgcmV0dXJuIHkgPiBnZXRWaWV3cG9ydEJvdHRvbSgpO1xuICB9LCBbZ2V0Vmlld3BvcnRCb3R0b21dKTtcbiAgY29uc3QgaW5WaWV3cG9ydCA9IHVzZUNhbGxiYWNrKChlbGVtZW50VG9wLCBlbGVtZW50Qm90dG9tKSA9PiB7XG4gICAgcmV0dXJuIGlzSW5WaWV3cG9ydChlbGVtZW50VG9wKSB8fCBpc0luVmlld3BvcnQoZWxlbWVudEJvdHRvbSkgfHwgaXNBYm92ZVZpZXdwb3J0KGVsZW1lbnRUb3ApICYmIGlzQmVsb3dWaWV3cG9ydChlbGVtZW50Qm90dG9tKTtcbiAgfSwgW2lzSW5WaWV3cG9ydCwgaXNBYm92ZVZpZXdwb3J0LCBpc0JlbG93Vmlld3BvcnRdKTtcbiAgY29uc3QgaXNBYm92ZVNjcmVlbiA9IHVzZUNhbGxiYWNrKHkgPT4ge1xuICAgIHJldHVybiB5IDwgZ2V0U2Nyb2xsUG9zKCk7XG4gIH0sIFtnZXRTY3JvbGxQb3NdKTtcbiAgY29uc3QgaXNCZWxvd1NjcmVlbiA9IHVzZUNhbGxiYWNrKHkgPT4ge1xuICAgIHJldHVybiB5ID4gZ2V0U2Nyb2xsUG9zKCkgKyBnZXRTY3JvbGxhYmxlUGFyZW50SGVpZ2h0KCk7XG4gIH0sIFtnZXRTY3JvbGxQb3MsIGdldFNjcm9sbGFibGVQYXJlbnRIZWlnaHRdKTtcbiAgY29uc3Qgb25TY3JlZW4gPSB1c2VDYWxsYmFjaygoZWxlbWVudFRvcCwgZWxlbWVudEJvdHRvbSkgPT4ge1xuICAgIHJldHVybiAhaXNBYm92ZVNjcmVlbihlbGVtZW50Qm90dG9tKSAmJiAhaXNCZWxvd1NjcmVlbihlbGVtZW50VG9wKTtcbiAgfSwgW2lzQWJvdmVTY3JlZW4sIGlzQmVsb3dTY3JlZW5dKTtcbiAgY29uc3QgZ2V0VmlzaWJpbGl0eSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50VG9wID0gZ2V0RWxlbWVudFRvcChub2RlLmN1cnJlbnQpIC0gZ2V0RWxlbWVudFRvcChzY3JvbGxhYmxlUGFyZW50UmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgbm9kZS5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgaW5WaWV3cG9ydDogaW5WaWV3cG9ydChlbGVtZW50VG9wLCBlbGVtZW50Qm90dG9tKSxcbiAgICAgIG9uU2NyZWVuOiBvblNjcmVlbihlbGVtZW50VG9wLCBlbGVtZW50Qm90dG9tKVxuICAgIH07XG4gIH0sIFtnZXRFbGVtZW50VG9wLCBub2RlLCBpblZpZXdwb3J0LCBvblNjcmVlbiwgc2Nyb2xsYWJsZVBhcmVudFJlZl0pO1xuICBjb25zdCB2aXNpYmlsaXR5SGFzQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKChwcmV2aW91c1ZpcywgY3VycmVudFZpcykgPT4ge1xuICAgIHJldHVybiBwcmV2aW91c1Zpcy5pblZpZXdwb3J0ICE9PSBjdXJyZW50VmlzLmluVmlld3BvcnQgfHwgcHJldmlvdXNWaXMub25TY3JlZW4gIT09IGN1cnJlbnRWaXMub25TY3JlZW47XG4gIH0sIFtdKTtcbiAgY29uc3QgYW5pbWF0ZSA9IHVzZUNhbGxiYWNrKChhbmltYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgZGVsYXllZEFuaW1hdGlvblRPUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFuaW1hdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHNldENsYXNzZXMoYCR7YW5pbWF0ZWRDbGFzc30gJHthbmltYXRpb259YCk7XG4gICAgICBzZXRTdHlsZSh7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYFxuICAgICAgfSk7XG4gICAgICBjYWxsYmFja1RPUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkdXJhdGlvbiAqIDEwMDApO1xuICAgIH0sIGRlbGF5KTtcbiAgfSwgW2FuaW1hdGluZywgZGVsYXksIGR1cmF0aW9uXSk7XG4gIGNvbnN0IGFuaW1hdGVJblRyaWdnZXIgPSB1c2VDYWxsYmFjayhjYWxsYmFjayA9PiB7XG4gICAgYW5pbWF0ZShhbmltYXRlSW4sICgpID0+IHtcbiAgICAgIGlmICghYW5pbWF0ZU9uY2UpIHtcbiAgICAgICAgc2V0U3R5bGUoe1xuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYCxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuICAgICAgICBhbmltYXRpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2aXMgPSBnZXRWaXNpYmlsaXR5KCk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayh2aXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbYW5pbWF0aW5nLCBhbmltYXRlSW4sIGFuaW1hdGVPbmNlLCBkdXJhdGlvbiwgYW5pbWF0ZSwgZ2V0VmlzaWJpbGl0eV0pO1xuICBjb25zdCBhbmltYXRlT3V0VHJpZ2dlciA9IHVzZUNhbGxiYWNrKGNhbGxiYWNrID0+IHtcbiAgICBhbmltYXRlKGFuaW1hdGVPdXQsICgpID0+IHtcbiAgICAgIHNldENsYXNzZXMoYW5pbWF0ZWRDbGFzcyk7XG4gICAgICBzZXRTdHlsZSh7XG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbn1zYCxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSk7XG4gICAgICBjb25zdCB2aXMgPSBnZXRWaXNpYmlsaXR5KCk7XG5cbiAgICAgIGlmICh2aXMuaW5WaWV3cG9ydCAmJiBhbmltYXRlSW4pIHtcbiAgICAgICAgYW5pbWF0ZUluVHJpZ2dlcihhZnRlckFuaW1hdGVkSW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHZpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFthbmltYXRpbmcsIGFuaW1hdGUsIGFuaW1hdGVJbiwgZHVyYXRpb24sIGFmdGVyQW5pbWF0ZWRJbiwgYW5pbWF0ZUluVHJpZ2dlciwgYW5pbWF0ZU91dCwgZ2V0VmlzaWJpbGl0eV0pO1xuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFhbmltYXRpbmcuY3VycmVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyZW50OiB2aXNpYmlsaXR5XG4gICAgICB9ID0gdmlzaWJpbGl0eVJlZjtcbiAgICAgIGNvbnN0IGN1cnJlbnRWaXMgPSBnZXRWaXNpYmlsaXR5KCk7XG5cbiAgICAgIGlmICh2aXNpYmlsaXR5SGFzQ2hhbmdlZCh2aXNpYmlsaXR5LCBjdXJyZW50VmlzKSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVsYXllZEFuaW1hdGlvblRPUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmICghY3VycmVudFZpcy5vblNjcmVlbikge1xuICAgICAgICAgIHNldENsYXNzZXMoYW5pbWF0ZWRDbGFzcyk7XG4gICAgICAgICAgc2V0U3R5bGUoe1xuICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGAke2R1cmF0aW9ufXNgLFxuICAgICAgICAgICAgb3BhY2l0eTogaW5pdGlhbGx5VmlzaWJsZSA/IDEgOiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpcy5pblZpZXdwb3J0ICYmIGFuaW1hdGVJbikge1xuICAgICAgICAgIGFuaW1hdGVJblRyaWdnZXIoYWZ0ZXJBbmltYXRlZEluKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlzLm9uU2NyZWVuICYmIHZpc2liaWxpdHkuaW5WaWV3cG9ydCAmJiBhbmltYXRlT3V0ICYmIG5vZGUuY3VycmVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcbiAgICAgICAgICBhbmltYXRlT3V0VHJpZ2dlcihhZnRlckFuaW1hdGVkT3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpc2liaWxpdHlSZWYuY3VycmVudCA9IGN1cnJlbnRWaXM7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYWZ0ZXJBbmltYXRlZEluLCBhZnRlckFuaW1hdGVkT3V0LCBhbmltYXRlSW4sIGFuaW1hdGVJblRyaWdnZXIsIGFuaW1hdGVPdXQsIGR1cmF0aW9uLCBpbml0aWFsbHlWaXNpYmxlLCB2aXNpYmlsaXR5SGFzQ2hhbmdlZCwgYW5pbWF0ZU91dFRyaWdnZXIsIGdldFZpc2liaWxpdHldKTtcbiAgY29uc3QgbGlzdGVuZXIgPSB1c2VNZW1vKCgpID0+IHRocm90dGxlKCgpID0+IHtcbiAgICBoYW5kbGVTY3JvbGwoKTtcbiAgfSwgNTApLCBbaGFuZGxlU2Nyb2xsXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXJ2ZXJTaWRlKSB7XG4gICAgICBjb25zdCBwYXJlbnRTZWxlY3RvciA9IHNjcm9sbGFibGVQYXJlbnRTZWxlY3RvcjtcbiAgICAgIHNjcm9sbGFibGVQYXJlbnRSZWYuY3VycmVudCA9IHBhcmVudFNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3RvcikgOiB3aW5kb3c7XG5cbiAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50UmVmLmN1cnJlbnQgJiYgc2Nyb2xsYWJsZVBhcmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgc2Nyb2xsYWJsZVBhcmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IGZpbmQgZWxlbWVudCBieSBsb2NhdG9yOiAke3Njcm9sbGFibGVQYXJlbnRTZWxlY3Rvcn1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVQcmVTY3JvbGwpIHtcbiAgICAgICAgaGFuZGxlU2Nyb2xsKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWxheWVkQW5pbWF0aW9uVE9SZWYuY3VycmVudCk7XG4gICAgICAgIGNsZWFyVGltZW91dChjYWxsYmFja1RPUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW2hhbmRsZVNjcm9sbCwgc2Nyb2xsYWJsZVBhcmVudFNlbGVjdG9yLCBzY3JvbGxhYmxlUGFyZW50UmVmLCBsaXN0ZW5lciwgYW5pbWF0ZVByZVNjcm9sbF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogbm9kZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3BzID8gYCR7Y2xhc3NOYW1lUHJvcHN9ICR7Y2xhc3Nlc31gIDogY2xhc3NlcyxcbiAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHN0eWxlUHJvcHMpXG4gIH0sIGNoaWxkcmVuKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BbmltYXRpb25PblNjcm9sbC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL0FuaW1hdGlvbk9uU2Nyb2xsJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogVGVzdGluZ1xuICovXG5cbmltcG9ydCBcImFuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tICdyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsJztcbiJdLCJuYW1lcyI6WyJBbmltYXRpb25PblNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=