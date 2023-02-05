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
/* harmony export */   "AnimateOnScroll": () => (/* binding */ AnimateOnScroll)
/* harmony export */ });
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var _AnimateOnScroll_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimateOnScroll.scss */ "./src/AnimateOnScroll/AnimateOnScroll.scss");


class AnimateOnScroll {
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
    const elemData = AnimateOnScroll.#currElemData;
    const {
      elem,
      animateIn,
      animateOut
    } = elemData;
    //
    const classToRemove = show ? animateOut : animateIn;
    const classToAdd = !show ? animateOut : animateIn;
    //
    elem.classList.remove(classToRemove);
    elem.classList.add(classToAdd);
  };
  //
  static #observerCallback = entries => {
    entries.forEach(entry => {
      window.requestIdleCallback(() => {
        // Element Store
        const elements = AnimateOnScroll.#elements;
        // Get Element's & state.
        const wrapperElem = AnimateOnScroll.#currElem = entry.target;
        const elemData = AnimateOnScroll.#currElemData = elements.get(wrapperElem);
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
            AnimateOnScroll.#toggleCurrentElement(false);
          } else if (animateOnLoadVisible) {
            // If element is onscreen, and is animateOnLoadVisible is true, add the animateIn class.
            AnimateOnScroll.#toggleCurrentElement(true);
          }
        } else if (isShown !== isIntersecting) {
          // Only fires once the elements initial state has been set, 
          // the element is above / below the intersection threshold,
          // and the element is not already in an animation cycle. 
          if (doAnimateIn) {
            // Add the animateIn class.
            AnimateOnScroll.#toggleCurrentElement(true);
          } else {
            // Add the animateOut class.
            AnimateOnScroll.#toggleCurrentElement(false);
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
    threshold: AnimateOnScroll.#thresholdArray(20),
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
  static #observe = selector => {
    document.querySelectorAll(selector).forEach(elem => {
      const {
        animateIn = null,
        animateOut = null,
        animateOnLoadVisible = false,
        scrollAnimationDuration = '5s'
      } = elem.dataset;
      //
      const wrapperElem = AnimateOnScroll.#wrap(elem);
      //
      AnimateOnScroll.#elements.set(wrapperElem, {
        elem,
        animateIn,
        animateOut,
        animateOnLoadVisible,
        scrollAnimationDuration,
        isShown: undefined,
        prevY: 0,
        prevRatio: 0
      });
      AnimateOnScroll.#observer.observe(wrapperElem);
    });
  };
  //
  static #initObserver = () => {
    AnimateOnScroll.#observer = new IntersectionObserver(AnimateOnScroll.#observerCallback, AnimateOnScroll.#observerOptions);
  };
  //
  static animate = function () {
    // If the observer has not yet been initialised, initialise it. 
    if (!AnimateOnScroll.#observer) AnimateOnScroll.#initObserver();
    // Begin observing based on the passed querySelectors.
    for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    selectors.forEach(selector => AnimateOnScroll.#observe(selector));
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
  _AnimateOnScroll__WEBPACK_IMPORTED_MODULE_0__.AnimateOnScroll.animate('[data-animate]');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRW9EO0FBRXBETCxRQUFRLENBQUNjLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbkRsRSxxRUFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL0FuaW1hdGVPblNjcm9sbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvQW5pbWF0ZU9uU2Nyb2xsL0FuaW1hdGVPblNjcm9sbC5zY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgJy4vQW5pbWF0ZU9uU2Nyb2xsLnNjc3MnO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0ZU9uU2Nyb2xsIHtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlciA9IG51bGw7XG5cdHN0YXRpYyAjZWxlbWVudHMgPSBuZXcgTWFwKCk7XG5cdC8vXG5cdHN0YXRpYyAjY3VyckVsZW0gPSBudWxsO1xuXHRzdGF0aWMgI2N1cnJFbGVtRGF0YSA9IG51bGxcblx0Ly9cblx0c3RhdGljICN0aHJlc2hvbGRBcnJheSA9IHN0ZXBzID0+IEFycmF5LmZyb20oQXJyYXkoc3RlcHMgKyAxKSkucmVkdWNlKChjdXIsIF8sIGluZGV4KSA9PiBbLi4uY3VyLCBpbmRleCAvIHN0ZXBzIHx8IDBdLCBbXSk7XG5cdC8vXG5cdHN0YXRpYyAjdG9nZ2xlQ3VycmVudEVsZW1lbnQgPSAoc2hvdykgPT4geyBcblx0XHRjb25zdCBlbGVtRGF0YSA9IEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW1EYXRhXG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbSxcblx0XHRcdGFuaW1hdGVJbixcblx0XHRcdGFuaW1hdGVPdXRcblx0XHR9ID0gZWxlbURhdGE7XG5cdFx0Ly9cblx0XHRjb25zdCBjbGFzc1RvUmVtb3ZlID0gc2hvdyA/IGFuaW1hdGVPdXQgOiBhbmltYXRlSW47XG5cdFx0Y29uc3QgY2xhc3NUb0FkZCA9ICFzaG93ID8gYW5pbWF0ZU91dCA6IGFuaW1hdGVJbjtcblx0XHQvL1xuXHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNvYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcblx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0d2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBFbGVtZW50IFN0b3JlXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzID0gQW5pbWF0ZU9uU2Nyb2xsLiNlbGVtZW50cztcblx0XHRcdFx0Ly8gR2V0IEVsZW1lbnQncyAmIHN0YXRlLlxuXHRcdFx0XHRjb25zdCB3cmFwcGVyRWxlbSA9IEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW0gPSBlbnRyeS50YXJnZXQ7XG5cdFx0XHRcdGNvbnN0IGVsZW1EYXRhID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGEgPSBlbGVtZW50cy5nZXQod3JhcHBlckVsZW0pO1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUsXG5cdFx0XHRcdFx0aXNTaG93bixcblx0XHRcdFx0XHRwcmV2WSxcblx0XHRcdFx0XHRwcmV2UmF0aW8sXG5cdFx0XHRcdH0gPSBlbGVtRGF0YTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgY3VyclkgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QueTtcblx0XHRcdFx0Y29uc3QgY3VyclJhdGlvID0gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW87XG5cdFx0XHRcdGNvbnN0IGlzSW50ZXJzZWN0aW5nID0gY3VyclJhdGlvID4gMC41O1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBzY3JvbGxpbmdEaXJlY3Rpb24gPSBwcmV2WSA+IGN1cnJZOyAvLyBUcnVlID0gZG93biwgRmFsc2UgPSB1cFxuXHRcdFx0XHRjb25zdCBkb0FuaW1hdGVJbiA9IHByZXZSYXRpbyA8IGN1cnJSYXRpbztcblx0XHRcdFx0Ly9cblx0XHRcdFx0aWYoaXNTaG93biAhPT0gISFpc1Nob3duKSB7XG5cdFx0XHRcdFx0Ly8gRmlyZXMgdGhlIGZpcnN0IHRpbWUgYW4gZWxlbWVudCBpcyBhZGRlZC5cblx0XHRcdFx0XHRpZighaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRcdC8vIElmIGVsZW1lbnQgaXMgb2Zmc2NyZWVuLCBhZGQgdGhlIGFuaW1hdGVPdXQgY2xhc3MuXG5cdFx0XHRcdFx0XHRBbmltYXRlT25TY3JvbGwuI3RvZ2dsZUN1cnJlbnRFbGVtZW50KGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYoYW5pbWF0ZU9uTG9hZFZpc2libGUpIHtcblx0XHRcdFx0XHRcdC8vIElmIGVsZW1lbnQgaXMgb25zY3JlZW4sIGFuZCBpcyBhbmltYXRlT25Mb2FkVmlzaWJsZSBpcyB0cnVlLCBhZGQgdGhlIGFuaW1hdGVJbiBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoaXNTaG93biAhPT0gaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHQvLyBPbmx5IGZpcmVzIG9uY2UgdGhlIGVsZW1lbnRzIGluaXRpYWwgc3RhdGUgaGFzIGJlZW4gc2V0LCBcblx0XHRcdFx0XHQvLyB0aGUgZWxlbWVudCBpcyBhYm92ZSAvIGJlbG93IHRoZSBpbnRlcnNlY3Rpb24gdGhyZXNob2xkLFxuXHRcdFx0XHRcdC8vIGFuZCB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeSBpbiBhbiBhbmltYXRpb24gY3ljbGUuIFxuXHRcdFx0XHRcdGlmKGRvQW5pbWF0ZUluKSB7XG5cdFx0XHRcdFx0XHQvLyBBZGQgdGhlIGFuaW1hdGVJbiBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBcblx0XHRcdFx0Ly8gVXBkYXRlIGVsZW1lbnQgc3RhdGVcblx0XHRcdFx0ZWxlbWVudHMuc2V0KHdyYXBwZXJFbGVtLCB7XG5cdFx0XHRcdFx0Li4uZWxlbURhdGEsXG5cdFx0XHRcdFx0aXNTaG93bjogaXNJbnRlcnNlY3RpbmcsXG5cdFx0XHRcdFx0cHJldlk6IGN1cnJZLFxuXHRcdFx0XHRcdHByZXZSYXRpbzogY3VyclJhdGlvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cdC8vXG5cdHN0YXRpYyAjb2JzZXJ2ZXJPcHRpb25zID0ge1xuXHRcdHRocmVzaG9sZDogQW5pbWF0ZU9uU2Nyb2xsLiN0aHJlc2hvbGRBcnJheSgyMCksXG5cdFx0cm9vdE1hcmdpbjogJzBweCAyMDAlJ1xuXHR9XG5cdC8vXG5cdC8vXG5cdC8vXG5cdHN0YXRpYyAjd3JhcCA9IChlbGVtKSA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZU9uU2Nyb2xsV3JhcHBlcicsICdhbGlnbmZ1bGwnKTtcblx0XHRlbGVtLnJlcGxhY2VXaXRoKHdyYXBwZXIpO1xuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbSlcblx0XHRyZXR1cm4gd3JhcHBlcjtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI29ic2VydmUgPSAoc2VsZWN0b3IpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW0gPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRhbmltYXRlSW4gPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT3V0ID0gbnVsbCxcblx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUgPSBmYWxzZSxcblx0XHRcdFx0c2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24gPSAnNXMnLFxuXHRcdFx0fSA9IGVsZW0uZGF0YXNldDtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCB3cmFwcGVyRWxlbSA9IEFuaW1hdGVPblNjcm9sbC4jd3JhcChlbGVtKTtcblx0XHRcdC8vXG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzLnNldCh3cmFwcGVyRWxlbSwge1xuXHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVPbkxvYWRWaXNpYmxlLFxuXHRcdFx0XHRzY3JvbGxBbmltYXRpb25EdXJhdGlvbixcblx0XHRcdFx0aXNTaG93bjogdW5kZWZpbmVkLFxuXHRcdFx0XHRwcmV2WTogMCxcblx0XHRcdFx0cHJldlJhdGlvOiAwLFxuXHRcdFx0fSk7XG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyLm9ic2VydmUod3JhcHBlckVsZW0pO1xuXHRcdH0pO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjaW5pdE9ic2VydmVyID0gKCkgPT4ge1xuXHRcdEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyQ2FsbGJhY2ssIFxuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlck9wdGlvbnNcblx0XHQpO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyBhbmltYXRlID0gKC4uLnNlbGVjdG9ycykgPT4ge1xuXHRcdC8vIElmIHRoZSBvYnNlcnZlciBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpc2VkLCBpbml0aWFsaXNlIGl0LiBcblx0XHRpZighQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlcikgQW5pbWF0ZU9uU2Nyb2xsLiNpbml0T2JzZXJ2ZXIoKTtcblx0XHQvLyBCZWdpbiBvYnNlcnZpbmcgYmFzZWQgb24gdGhlIHBhc3NlZCBxdWVyeVNlbGVjdG9ycy5cblx0XHRzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBBbmltYXRlT25TY3JvbGwuI29ic2VydmUoc2VsZWN0b3IpKTtcblx0fVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmltcG9ydCB7IEFuaW1hdGVPblNjcm9sbCB9IGZyb20gJy4vQW5pbWF0ZU9uU2Nyb2xsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0QW5pbWF0ZU9uU2Nyb2xsLmFuaW1hdGUoJ1tkYXRhLWFuaW1hdGVdJyk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmltYXRlT25TY3JvbGwiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiTWFwIiwiY3VyckVsZW0iLCJjdXJyRWxlbURhdGEiLCJ0aHJlc2hvbGRBcnJheSIsInN0ZXBzIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiY3VyIiwiXyIsImluZGV4IiwidG9nZ2xlQ3VycmVudEVsZW1lbnQiLCJzaG93IiwiZWxlbURhdGEiLCJlbGVtIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImNsYXNzVG9SZW1vdmUiLCJjbGFzc1RvQWRkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZXJDYWxsYmFjayIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwid3JhcHBlckVsZW0iLCJ0YXJnZXQiLCJnZXQiLCJhbmltYXRlT25Mb2FkVmlzaWJsZSIsImlzU2hvd24iLCJwcmV2WSIsInByZXZSYXRpbyIsImN1cnJZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwieSIsImN1cnJSYXRpbyIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJzY3JvbGxpbmdEaXJlY3Rpb24iLCJkb0FuaW1hdGVJbiIsInNldCIsIm9ic2VydmVyT3B0aW9ucyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJ3cmFwIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiYXBwZW5kQ2hpbGQiLCJvYnNlcnZlIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsQW5pbWF0aW9uRHVyYXRpb24iLCJkYXRhc2V0IiwidW5kZWZpbmVkIiwiaW5pdE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJhbmltYXRlIiwic2VsZWN0b3JzIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=