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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUk3QkEsU0FBUyxDQUFDdEMsT0FBTyxDQUFDOEIsUUFBUSxJQUFJOUQsbUJBQW1CLENBQUMsQ0FBQzZELE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7RUFDdEUsQ0FBQztBQUNGOzs7Ozs7Ozs7OztBQzdJQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUV3RDtBQUV4REwsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ25EdkUseUVBQTJCLENBQUMsZ0JBQWdCLENBQUM7QUFDOUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL0FuaW1hdGVPblNjcm9sbC9BbmltYXRlT25TY3JvbGwuc2NzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0ICcuL0FuaW1hdGVPblNjcm9sbC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIEgybWxBbmltYXRlT25TY3JvbGwge1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyID0gbnVsbDtcblx0c3RhdGljICNlbGVtZW50cyA9IG5ldyBNYXAoKTtcblx0Ly9cblx0c3RhdGljICNjdXJyRWxlbSA9IG51bGw7XG5cdHN0YXRpYyAjY3VyckVsZW1EYXRhID0gbnVsbFxuXHQvL1xuXHRzdGF0aWMgI3RocmVzaG9sZEFycmF5ID0gc3RlcHMgPT4gQXJyYXkuZnJvbShBcnJheShzdGVwcyArIDEpKS5yZWR1Y2UoKGN1ciwgXywgaW5kZXgpID0+IFsuLi5jdXIsIGluZGV4IC8gc3RlcHMgfHwgMF0sIFtdKTtcblx0Ly9cblx0c3RhdGljICN0b2dnbGVDdXJyZW50RWxlbWVudCA9IChzaG93KSA9PiB7IFxuXHRcdGNvbnN0IGVsZW1EYXRhID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW1EYXRhXG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbSxcblx0XHRcdGFuaW1hdGVJbixcblx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHR9ID0gZWxlbURhdGE7XG5cdFx0Ly9cblx0XHRjb25zdCBhbmltYXRlRHVyYXRpb24gPSBzaG93ID8gYW5pbWF0ZUluRHVyYXRpb24gOiBhbmltYXRlT3V0RHVyYXRpb247XG5cdFx0Y29uc3QgY2xhc3NUb1JlbW92ZSA9IHNob3cgPyBhbmltYXRlT3V0IDogYW5pbWF0ZUluO1xuXHRcdGNvbnN0IGNsYXNzVG9BZGQgPSAhc2hvdyA/IGFuaW1hdGVPdXQgOiBhbmltYXRlSW47XG5cdFx0Ly9cblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KCctLWFuaW1hdGUtZHVyYXRpb24nLCBhbmltYXRlRHVyYXRpb24pO1xuXHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNvYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcblx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0d2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBFbGVtZW50IFN0b3JlXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jZWxlbWVudHM7XG5cdFx0XHRcdC8vIEdldCBFbGVtZW50J3MgJiBzdGF0ZS5cblx0XHRcdFx0Y29uc3Qgd3JhcHBlckVsZW0gPSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbSA9IGVudHJ5LnRhcmdldDtcblx0XHRcdFx0Y29uc3QgZWxlbURhdGEgPSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGEgPSBlbGVtZW50cy5nZXQod3JhcHBlckVsZW0pO1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUsXG5cdFx0XHRcdFx0aXNTaG93bixcblx0XHRcdFx0XHRwcmV2WSxcblx0XHRcdFx0XHRwcmV2UmF0aW8sXG5cdFx0XHRcdH0gPSBlbGVtRGF0YTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgY3VyclkgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QueTtcblx0XHRcdFx0Y29uc3QgY3VyclJhdGlvID0gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW87XG5cdFx0XHRcdGNvbnN0IGlzSW50ZXJzZWN0aW5nID0gY3VyclJhdGlvID4gMC41O1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBzY3JvbGxpbmdEaXJlY3Rpb24gPSBwcmV2WSA+IGN1cnJZOyAvLyBUcnVlID0gZG93biwgRmFsc2UgPSB1cFxuXHRcdFx0XHRjb25zdCBkb0FuaW1hdGVJbiA9IHByZXZSYXRpbyA8IGN1cnJSYXRpbztcblx0XHRcdFx0Ly9cblx0XHRcdFx0aWYoaXNTaG93biAhPT0gISFpc1Nob3duKSB7XG5cdFx0XHRcdFx0Ly8gRmlyZXMgdGhlIGZpcnN0IHRpbWUgYW4gZWxlbWVudCBpcyBhZGRlZC5cblx0XHRcdFx0XHRpZighaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRcdC8vIElmIGVsZW1lbnQgaXMgb2Zmc2NyZWVuLCBhZGQgdGhlIGFuaW1hdGVPdXQgY2xhc3MuXG5cdFx0XHRcdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudChmYWxzZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKGFuaW1hdGVPbkxvYWRWaXNpYmxlKSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBlbGVtZW50IGlzIG9uc2NyZWVuLCBhbmQgaXMgYW5pbWF0ZU9uTG9hZFZpc2libGUgaXMgdHJ1ZSwgYWRkIHRoZSBhbmltYXRlSW4gY2xhc3MuXG5cdFx0XHRcdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZihpc1Nob3duICE9PSBpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdC8vIE9ubHkgZmlyZXMgb25jZSB0aGUgZWxlbWVudHMgaW5pdGlhbCBzdGF0ZSBoYXMgYmVlbiBzZXQsIFxuXHRcdFx0XHRcdC8vIHRoZSBlbGVtZW50IGlzIGFib3ZlIC8gYmVsb3cgdGhlIGludGVyc2VjdGlvbiB0aHJlc2hvbGQsXG5cdFx0XHRcdFx0Ly8gYW5kIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGluIGFuIGFuaW1hdGlvbiBjeWNsZS4gXG5cdFx0XHRcdFx0aWYoZG9BbmltYXRlSW4pIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI3RvZ2dsZUN1cnJlbnRFbGVtZW50KGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gXG5cdFx0XHRcdC8vIFVwZGF0ZSBlbGVtZW50IHN0YXRlXG5cdFx0XHRcdGVsZW1lbnRzLnNldCh3cmFwcGVyRWxlbSwge1xuXHRcdFx0XHRcdC4uLmVsZW1EYXRhLFxuXHRcdFx0XHRcdGlzU2hvd246IGlzSW50ZXJzZWN0aW5nLFxuXHRcdFx0XHRcdHByZXZZOiBjdXJyWSxcblx0XHRcdFx0XHRwcmV2UmF0aW86IGN1cnJSYXRpb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyT3B0aW9ucyA9IHtcblx0XHR0aHJlc2hvbGQ6IEgybWxBbmltYXRlT25TY3JvbGwuI3RocmVzaG9sZEFycmF5KDIwKSxcblx0XHRyb290TWFyZ2luOiAnMHB4IDIwMCUnXG5cdH1cblx0Ly9cblx0Ly9cblx0Ly9cblx0c3RhdGljICN3cmFwID0gKGVsZW0pID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT25TY3JvbGxXcmFwcGVyJywgJ2FsaWduZnVsbCcpO1xuXHRcdGVsZW0ucmVwbGFjZVdpdGgod3JhcHBlcik7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKVxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjcHJlcGFyZSA9IChzZWxlY3RvcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGFuaW1hdGVJbiA9IG51bGwsXG5cdFx0XHRcdGFuaW1hdGVPdXQgPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSA9IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbiA9ICc1MDBtcycsXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbiA9ICc1MDBtcydcblx0XHRcdH0gPSBlbGVtLmRhdGFzZXQ7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3Qgd3JhcHBlckVsZW0gPSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiN3cmFwKGVsZW0pO1xuXHRcdFx0Ly9cblx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzLnNldCh3cmFwcGVyRWxlbSwge1xuXHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVPbkxvYWRWaXNpYmxlLFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uLFxuXHRcdFx0XHRpc1Nob3duOiB1bmRlZmluZWQsXG5cdFx0XHRcdHByZXZZOiAwLFxuXHRcdFx0XHRwcmV2UmF0aW86IDAsXG5cdFx0XHR9KTtcblx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI29ic2VydmVyLm9ic2VydmUod3JhcHBlckVsZW0pO1xuXHRcdH0pO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjaW5pdE9ic2VydmVyID0gKCkgPT4ge1xuXHRcdEgybWxBbmltYXRlT25TY3JvbGwuI29ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXJDYWxsYmFjaywgXG5cdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlck9wdGlvbnNcblx0XHQpO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyBhbmltYXRlID0gKC4uLnNlbGVjdG9ycykgPT4ge1xuXHRcdC8vIElmIHRoZSBvYnNlcnZlciBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpc2VkLCBpbml0aWFsaXNlIGl0LiBcblx0XHRpZighSDJtbEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIpIEgybWxBbmltYXRlT25TY3JvbGwuI2luaXRPYnNlcnZlcigpO1xuXHRcdC8vIEJlZ2luIG9ic2VydmluZyBiYXNlZCBvbiB0aGUgcGFzc2VkIHF1ZXJ5U2VsZWN0b3JzLlxuXHRcdHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IEgybWxBbmltYXRlT25TY3JvbGwuI3ByZXBhcmUoc2VsZWN0b3IpKTtcblx0fVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmltcG9ydCB7IEgybWxBbmltYXRlT25TY3JvbGwgfSBmcm9tICcuL0FuaW1hdGVPblNjcm9sbCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdEgybWxBbmltYXRlT25TY3JvbGwuYW5pbWF0ZSgnW2RhdGEtYW5pbWF0ZV0nKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkgybWxBbmltYXRlT25TY3JvbGwiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiTWFwIiwiY3VyckVsZW0iLCJjdXJyRWxlbURhdGEiLCJ0aHJlc2hvbGRBcnJheSIsInN0ZXBzIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiY3VyIiwiXyIsImluZGV4IiwidG9nZ2xlQ3VycmVudEVsZW1lbnQiLCJzaG93IiwiZWxlbURhdGEiLCJlbGVtIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGVJbkR1cmF0aW9uIiwiYW5pbWF0ZU91dER1cmF0aW9uIiwiYW5pbWF0ZUR1cmF0aW9uIiwiY2xhc3NUb1JlbW92ZSIsImNsYXNzVG9BZGQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZXJDYWxsYmFjayIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwid3JhcHBlckVsZW0iLCJ0YXJnZXQiLCJnZXQiLCJhbmltYXRlT25Mb2FkVmlzaWJsZSIsImlzU2hvd24iLCJwcmV2WSIsInByZXZSYXRpbyIsImN1cnJZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwieSIsImN1cnJSYXRpbyIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJzY3JvbGxpbmdEaXJlY3Rpb24iLCJkb0FuaW1hdGVJbiIsInNldCIsIm9ic2VydmVyT3B0aW9ucyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJ3cmFwIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiYXBwZW5kQ2hpbGQiLCJwcmVwYXJlIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsIm9ic2VydmUiLCJpbml0T2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImFuaW1hdGUiLCJzZWxlY3RvcnMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==