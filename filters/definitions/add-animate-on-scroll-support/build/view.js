/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AnimateOnScroll/index.js":
/*!**************************************!*\
  !*** ./src/AnimateOnScroll/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2mlAnimateOnScroll": () => (/* binding */ H2mlAnimateOnScroll)
/* harmony export */ });
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var _AnimateOnScroll_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimateOnScroll.scss */ "./src/AnimateOnScroll/AnimateOnScroll.scss");


class H2mlAnimateOnScroll {
  //
  static #observer = null;
  static #elements = new Map();
  //
  static #currElem = null;
  static #currElemData = null;
  //
  static #thresholdArray = steps => Array.from(Array(steps + 1)).reduce((cur, _, index) => [...cur, index / steps || 0], []);
  //
  static #toggleCurrentElement = show => {
    const elemData = H2mlAnimateOnScroll.#currElemData;
    const {
      elem,
      animateIn,
      animateOut,
      animateInDuration,
      animateOutDuration
    } = elemData;
    //
    const animateDuration = show ? animateInDuration : animateOutDuration;
    const classToRemove = show ? animateOut : animateIn;
    const classToAdd = !show ? animateOut : animateIn;
    //
    elem.style.setProperty('--animate-duration', animateDuration);
    elem.classList.remove(classToRemove);
    elem.classList.add(classToAdd);
  };
  //
  static #observerCallback = entries => {
    entries.forEach(entry => {
      window.requestIdleCallback(() => {
        // Element Store
        const elements = H2mlAnimateOnScroll.#elements;
        // Get Element's & state.
        const wrapperElem = H2mlAnimateOnScroll.#currElem = entry.target;
        const elemData = H2mlAnimateOnScroll.#currElemData = elements.get(wrapperElem);
        const {
          animateOnLoadVisible,
          isShown,
          prevY,
          prevRatio
        } = elemData;
        //
        const currY = entry.boundingClientRect.y;
        const currRatio = entry.intersectionRatio;
        const isIntersecting = currRatio > 0.5;
        //
        const scrollingDirection = prevY > currY; // True = down, False = up
        const doAnimateIn = prevRatio < currRatio;
        //
        if (isShown !== !!isShown) {
          // Fires the first time an element is added.
          if (!isIntersecting) {
            // If element is offscreen, add the animateOut class.
            H2mlAnimateOnScroll.#toggleCurrentElement(false);
          } else if (animateOnLoadVisible) {
            // If element is onscreen, and is animateOnLoadVisible is true, add the animateIn class.
            H2mlAnimateOnScroll.#toggleCurrentElement(true);
          }
        } else if (isShown !== isIntersecting) {
          // Only fires once the elements initial state has been set, 
          // the element is above / below the intersection threshold,
          // and the element is not already in an animation cycle. 
          if (doAnimateIn) {
            // Add the animateIn class.
            H2mlAnimateOnScroll.#toggleCurrentElement(true);
          } else {
            // Add the animateOut class.
            H2mlAnimateOnScroll.#toggleCurrentElement(false);
          }
        }
        // Update element state
        elements.set(wrapperElem, {
          ...elemData,
          isShown: isIntersecting,
          prevY: currY,
          prevRatio: currRatio
        });
      });
    });
  };
  //
  static #observerOptions = {
    threshold: H2mlAnimateOnScroll.#thresholdArray(20),
    rootMargin: '0px 200%'
  };
  //
  //
  //
  static #wrap = elem => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
    elem.replaceWith(wrapper);
    wrapper.appendChild(elem);
    return wrapper;
  };
  //
  static #prepare = selector => {
    document.querySelectorAll(selector).forEach(elem => {
      const {
        animateIn = null,
        animateOut = null,
        animateOnLoadVisible = false,
        animateInDuration = '500ms',
        animateOutDuration = '500ms'
      } = elem.dataset;
      //
      const wrapperElem = H2mlAnimateOnScroll.#wrap(elem);
      //
      H2mlAnimateOnScroll.#elements.set(wrapperElem, {
        elem,
        animateIn,
        animateOut,
        animateOnLoadVisible,
        animateInDuration,
        animateOutDuration,
        isShown: undefined,
        prevY: 0,
        prevRatio: 0
      });
      H2mlAnimateOnScroll.#observer.observe(wrapperElem);
    });
  };
  //
  static #initObserver = () => {
    H2mlAnimateOnScroll.#observer = new IntersectionObserver(H2mlAnimateOnScroll.#observerCallback, H2mlAnimateOnScroll.#observerOptions);
  };
  //
  static animate = function () {
    // If the observer has not yet been initialised, initialise it. 
    if (!H2mlAnimateOnScroll.#observer) H2mlAnimateOnScroll.#initObserver();
    // Begin observing based on the passed querySelectors.
    for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    selectors.forEach(selector => H2mlAnimateOnScroll.#prepare(selector));
  };
}

/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/AnimateOnScroll/AnimateOnScroll.scss":
/*!**************************************************!*\
  !*** ./src/AnimateOnScroll/AnimateOnScroll.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimateOnScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimateOnScroll */ "./src/AnimateOnScroll/index.js");
/**
 * The Code
 */


document.addEventListener('DOMContentLoaded', () => {
  _AnimateOnScroll__WEBPACK_IMPORTED_MODULE_0__.H2mlAnimateOnScroll.animate('[data-animate]');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUk3QkEsU0FBUyxDQUFDdEMsT0FBTyxDQUFDOEIsUUFBUSxJQUFJOUQsbUJBQW1CLENBQUMsQ0FBQzZELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDdEUsQ0FBQztBQUNGOzs7Ozs7Ozs7OztBQzdJQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUV3RDtBQUV4REwsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ25EdkUseUVBQTJCLENBQUMsZ0JBQWdCLENBQUM7QUFDOUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzP2RhNDciLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvQW5pbWF0ZU9uU2Nyb2xsL0FuaW1hdGVPblNjcm9sbC5zY3NzPzFmODQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi9BbmltYXRlT25TY3JvbGwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBIMm1sQW5pbWF0ZU9uU2Nyb2xsIHtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlciA9IG51bGw7XG5cdHN0YXRpYyAjZWxlbWVudHMgPSBuZXcgTWFwKCk7XG5cdC8vXG5cdHN0YXRpYyAjY3VyckVsZW0gPSBudWxsO1xuXHRzdGF0aWMgI2N1cnJFbGVtRGF0YSA9IG51bGxcblx0Ly9cblx0c3RhdGljICN0aHJlc2hvbGRBcnJheSA9IHN0ZXBzID0+IEFycmF5LmZyb20oQXJyYXkoc3RlcHMgKyAxKSkucmVkdWNlKChjdXIsIF8sIGluZGV4KSA9PiBbLi4uY3VyLCBpbmRleCAvIHN0ZXBzIHx8IDBdLCBbXSk7XG5cdC8vXG5cdHN0YXRpYyAjdG9nZ2xlQ3VycmVudEVsZW1lbnQgPSAoc2hvdykgPT4geyBcblx0XHRjb25zdCBlbGVtRGF0YSA9IEgybWxBbmltYXRlT25TY3JvbGwuI2N1cnJFbGVtRGF0YVxuXHRcdGNvbnN0IHtcblx0XHRcdGVsZW0sXG5cdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0fSA9IGVsZW1EYXRhO1xuXHRcdC8vXG5cdFx0Y29uc3QgYW5pbWF0ZUR1cmF0aW9uID0gc2hvdyA/IGFuaW1hdGVJbkR1cmF0aW9uIDogYW5pbWF0ZU91dER1cmF0aW9uO1xuXHRcdGNvbnN0IGNsYXNzVG9SZW1vdmUgPSBzaG93ID8gYW5pbWF0ZU91dCA6IGFuaW1hdGVJbjtcblx0XHRjb25zdCBjbGFzc1RvQWRkID0gIXNob3cgPyBhbmltYXRlT3V0IDogYW5pbWF0ZUluO1xuXHRcdC8vXG5cdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hbmltYXRlLWR1cmF0aW9uJywgYW5pbWF0ZUR1cmF0aW9uKTtcblx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb1JlbW92ZSk7XG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzKSA9PiB7XG5cdFx0ZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHtcblx0XHRcdFx0Ly8gRWxlbWVudCBTdG9yZVxuXHRcdFx0XHRjb25zdCBlbGVtZW50cyA9IEgybWxBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzO1xuXHRcdFx0XHQvLyBHZXQgRWxlbWVudCdzICYgc3RhdGUuXG5cdFx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW0gPSBlbnRyeS50YXJnZXQ7XG5cdFx0XHRcdGNvbnN0IGVsZW1EYXRhID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW1EYXRhID0gZWxlbWVudHMuZ2V0KHdyYXBwZXJFbGVtKTtcblx0XHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRcdGFuaW1hdGVPbkxvYWRWaXNpYmxlLFxuXHRcdFx0XHRcdGlzU2hvd24sXG5cdFx0XHRcdFx0cHJldlksXG5cdFx0XHRcdFx0cHJldlJhdGlvLFxuXHRcdFx0XHR9ID0gZWxlbURhdGE7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IGN1cnJZID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0Lnk7XG5cdFx0XHRcdGNvbnN0IGN1cnJSYXRpbyA9IGVudHJ5LmludGVyc2VjdGlvblJhdGlvO1xuXHRcdFx0XHRjb25zdCBpc0ludGVyc2VjdGluZyA9IGN1cnJSYXRpbyA+IDAuNTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3Qgc2Nyb2xsaW5nRGlyZWN0aW9uID0gcHJldlkgPiBjdXJyWTsgLy8gVHJ1ZSA9IGRvd24sIEZhbHNlID0gdXBcblx0XHRcdFx0Y29uc3QgZG9BbmltYXRlSW4gPSBwcmV2UmF0aW8gPCBjdXJyUmF0aW87XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGlmKGlzU2hvd24gIT09ICEhaXNTaG93bikge1xuXHRcdFx0XHRcdC8vIEZpcmVzIHRoZSBmaXJzdCB0aW1lIGFuIGVsZW1lbnQgaXMgYWRkZWQuXG5cdFx0XHRcdFx0aWYoIWlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBlbGVtZW50IGlzIG9mZnNjcmVlbiwgYWRkIHRoZSBhbmltYXRlT3V0IGNsYXNzLlxuXHRcdFx0XHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihhbmltYXRlT25Mb2FkVmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvbnNjcmVlbiwgYW5kIGlzIGFuaW1hdGVPbkxvYWRWaXNpYmxlIGlzIHRydWUsIGFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoaXNTaG93biAhPT0gaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHQvLyBPbmx5IGZpcmVzIG9uY2UgdGhlIGVsZW1lbnRzIGluaXRpYWwgc3RhdGUgaGFzIGJlZW4gc2V0LCBcblx0XHRcdFx0XHQvLyB0aGUgZWxlbWVudCBpcyBhYm92ZSAvIGJlbG93IHRoZSBpbnRlcnNlY3Rpb24gdGhyZXNob2xkLFxuXHRcdFx0XHRcdC8vIGFuZCB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeSBpbiBhbiBhbmltYXRpb24gY3ljbGUuIFxuXHRcdFx0XHRcdGlmKGRvQW5pbWF0ZUluKSB7XG5cdFx0XHRcdFx0XHQvLyBBZGQgdGhlIGFuaW1hdGVJbiBjbGFzcy5cblx0XHRcdFx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI3RvZ2dsZUN1cnJlbnRFbGVtZW50KHRydWUpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBBZGQgdGhlIGFuaW1hdGVPdXQgY2xhc3MuXG5cdFx0XHRcdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudChmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHQvLyBVcGRhdGUgZWxlbWVudCBzdGF0ZVxuXHRcdFx0XHRlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0XHQuLi5lbGVtRGF0YSxcblx0XHRcdFx0XHRpc1Nob3duOiBpc0ludGVyc2VjdGluZyxcblx0XHRcdFx0XHRwcmV2WTogY3VyclksXG5cdFx0XHRcdFx0cHJldlJhdGlvOiBjdXJyUmF0aW9cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlck9wdGlvbnMgPSB7XG5cdFx0dGhyZXNob2xkOiBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiN0aHJlc2hvbGRBcnJheSgyMCksXG5cdFx0cm9vdE1hcmdpbjogJzBweCAyMDAlJ1xuXHR9XG5cdC8vXG5cdC8vXG5cdC8vXG5cdHN0YXRpYyAjd3JhcCA9IChlbGVtKSA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZU9uU2Nyb2xsV3JhcHBlcicsICdhbGlnbmZ1bGwnKTtcblx0XHRlbGVtLnJlcGxhY2VXaXRoKHdyYXBwZXIpO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSlcblx0XHRyZXR1cm4gd3JhcHBlcjtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI3ByZXBhcmUgPSAoc2VsZWN0b3IpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW0gPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRhbmltYXRlSW4gPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT3V0ID0gbnVsbCxcblx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUgPSBmYWxzZSxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24gPSAnNTAwbXMnLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb24gPSAnNTAwbXMnXG5cdFx0XHR9ID0gZWxlbS5kYXRhc2V0O1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jd3JhcChlbGVtKTtcblx0XHRcdC8vXG5cdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdFx0aXNTaG93bjogdW5kZWZpbmVkLFxuXHRcdFx0XHRwcmV2WTogMCxcblx0XHRcdFx0cHJldlJhdGlvOiAwLFxuXHRcdFx0fSk7XG5cdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlci5vYnNlcnZlKHdyYXBwZXJFbGVtKTtcblx0XHR9KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI2luaXRPYnNlcnZlciA9ICgpID0+IHtcblx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI29ic2VydmVyQ2FsbGJhY2ssIFxuXHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXJPcHRpb25zXG5cdFx0KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgYW5pbWF0ZSA9ICguLi5zZWxlY3RvcnMpID0+IHtcblx0XHQvLyBJZiB0aGUgb2JzZXJ2ZXIgaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXNlZCwgaW5pdGlhbGlzZSBpdC4gXG5cdFx0aWYoIUgybWxBbmltYXRlT25TY3JvbGwuI29ic2VydmVyKSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNpbml0T2JzZXJ2ZXIoKTtcblx0XHQvLyBCZWdpbiBvYnNlcnZpbmcgYmFzZWQgb24gdGhlIHBhc3NlZCBxdWVyeVNlbGVjdG9ycy5cblx0XHRzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNwcmVwYXJlKHNlbGVjdG9yKSk7XG5cdH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogVGhlIENvZGVcbiAqL1xuXG5pbXBvcnQgeyBIMm1sQW5pbWF0ZU9uU2Nyb2xsIH0gZnJvbSAnLi9BbmltYXRlT25TY3JvbGwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLmFuaW1hdGUoJ1tkYXRhLWFuaW1hdGVdJyk7XG59KTtcbiJdLCJuYW1lcyI6WyJIMm1sQW5pbWF0ZU9uU2Nyb2xsIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsIk1hcCIsImN1cnJFbGVtIiwiY3VyckVsZW1EYXRhIiwidGhyZXNob2xkQXJyYXkiLCJzdGVwcyIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImN1ciIsIl8iLCJpbmRleCIsInRvZ2dsZUN1cnJlbnRFbGVtZW50Iiwic2hvdyIsImVsZW1EYXRhIiwiZWxlbSIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsImFuaW1hdGVEdXJhdGlvbiIsImNsYXNzVG9SZW1vdmUiLCJjbGFzc1RvQWRkIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9ic2VydmVyQ2FsbGJhY2siLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5Iiwid2luZG93IiwicmVxdWVzdElkbGVDYWxsYmFjayIsIndyYXBwZXJFbGVtIiwidGFyZ2V0IiwiZ2V0IiwiYW5pbWF0ZU9uTG9hZFZpc2libGUiLCJpc1Nob3duIiwicHJldlkiLCJwcmV2UmF0aW8iLCJjdXJyWSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJjdXJyUmF0aW8iLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwic2Nyb2xsaW5nRGlyZWN0aW9uIiwiZG9BbmltYXRlSW4iLCJzZXQiLCJvYnNlcnZlck9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwid3JhcCIsIndyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsImFwcGVuZENoaWxkIiwicHJlcGFyZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGFzZXQiLCJ1bmRlZmluZWQiLCJvYnNlcnZlIiwiaW5pdE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJhbmltYXRlIiwic2VsZWN0b3JzIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=