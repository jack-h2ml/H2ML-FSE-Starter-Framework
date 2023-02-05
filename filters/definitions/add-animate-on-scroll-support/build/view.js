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
  /*
  static #wrap = (elem) => {
  	const wrapper = document.createElement('div');
  	wrapper.classList.add('animateOnScrollWrapper', 'alignfull');
  	elem.replaceWith(wrapper);
  	wrapper.appendChild(elem)
  	return wrapper;
  }
  */
  static #wrap = elem => {
    const outerWrapper = document.createElement('div');
    outerWrapper.classList.add('animateOnScrollOuterWrapper', 'alignfull');
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('animateOnScrollInnerWrapper', 'alignfull');
    elem.replaceWith(outerWrapper);
    innerWrapper.appendChild(elem);
    outerWrapper.appendChild(innerWrapper);
    return outerWrapper;
  };

  //
  static #prepare = selector => {
    document.querySelectorAll(selector).forEach(elem => {
      const {
        animateIn = null,
        animateOut = null,
        animateOnLoadVisible = false,
        animateDuration = '0.6s'
      } = elem.dataset;
      //
      const wrapperElem = AnimateOnScroll.#wrap(elem);
      elem.style.setProperty('--animate-duration', animateDuration);
      //
      AnimateOnScroll.#elements.set(wrapperElem, {
        elem,
        animateIn,
        animateOut,
        animateOnLoadVisible,
        animateDuration,
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
    selectors.forEach(selector => AnimateOnScroll.#prepare(selector));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtJQUM5RDtJQUFBLGtDQUhvQkcsU0FBUztNQUFUQSxTQUFTO0lBQUE7SUFJN0JBLFNBQVMsQ0FBQzFDLE9BQU8sQ0FBQytCLFFBQVEsSUFBSTFELGVBQWUsQ0FBQyxDQUFDeUQsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNsRSxDQUFDO0FBQ0Y7Ozs7Ozs7Ozs7O0FDekpBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRW9EO0FBRXBETixRQUFRLENBQUNrQixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ25EdEUscUVBQXVCLENBQUMsZ0JBQWdCLENBQUM7QUFDMUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzP2RhNDciLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvQW5pbWF0ZU9uU2Nyb2xsL0FuaW1hdGVPblNjcm9sbC5zY3NzPzFmODQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi9BbmltYXRlT25TY3JvbGwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlT25TY3JvbGwge1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyID0gbnVsbDtcblx0c3RhdGljICNlbGVtZW50cyA9IG5ldyBNYXAoKTtcblx0Ly9cblx0c3RhdGljICNjdXJyRWxlbSA9IG51bGw7XG5cdHN0YXRpYyAjY3VyckVsZW1EYXRhID0gbnVsbFxuXHQvL1xuXHRzdGF0aWMgI3RocmVzaG9sZEFycmF5ID0gc3RlcHMgPT4gQXJyYXkuZnJvbShBcnJheShzdGVwcyArIDEpKS5yZWR1Y2UoKGN1ciwgXywgaW5kZXgpID0+IFsuLi5jdXIsIGluZGV4IC8gc3RlcHMgfHwgMF0sIFtdKTtcblx0Ly9cblx0c3RhdGljICN0b2dnbGVDdXJyZW50RWxlbWVudCA9IChzaG93KSA9PiB7IFxuXHRcdGNvbnN0IGVsZW1EYXRhID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGFcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtLFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0YW5pbWF0ZU91dFxuXHRcdH0gPSBlbGVtRGF0YTtcblx0XHQvL1xuXHRcdGNvbnN0IGNsYXNzVG9SZW1vdmUgPSBzaG93ID8gYW5pbWF0ZU91dCA6IGFuaW1hdGVJbjtcblx0XHRjb25zdCBjbGFzc1RvQWRkID0gIXNob3cgPyBhbmltYXRlT3V0IDogYW5pbWF0ZUluO1xuXHRcdC8vXG5cdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzVG9SZW1vdmUpO1xuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgU3RvcmVcblx0XHRcdFx0Y29uc3QgZWxlbWVudHMgPSBBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzO1xuXHRcdFx0XHQvLyBHZXQgRWxlbWVudCdzICYgc3RhdGUuXG5cdFx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbSA9IGVudHJ5LnRhcmdldDtcblx0XHRcdFx0Y29uc3QgZWxlbURhdGEgPSBBbmltYXRlT25TY3JvbGwuI2N1cnJFbGVtRGF0YSA9IGVsZW1lbnRzLmdldCh3cmFwcGVyRWxlbSk7XG5cdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0XHRpc1Nob3duLFxuXHRcdFx0XHRcdHByZXZZLFxuXHRcdFx0XHRcdHByZXZSYXRpbyxcblx0XHRcdFx0fSA9IGVsZW1EYXRhO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBjdXJyWSA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC55O1xuXHRcdFx0XHRjb25zdCBjdXJyUmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbztcblx0XHRcdFx0Y29uc3QgaXNJbnRlcnNlY3RpbmcgPSBjdXJyUmF0aW8gPiAwLjU7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNjcm9sbGluZ0RpcmVjdGlvbiA9IHByZXZZID4gY3Vyclk7IC8vIFRydWUgPSBkb3duLCBGYWxzZSA9IHVwXG5cdFx0XHRcdGNvbnN0IGRvQW5pbWF0ZUluID0gcHJldlJhdGlvIDwgY3VyclJhdGlvO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRpZihpc1Nob3duICE9PSAhIWlzU2hvd24pIHtcblx0XHRcdFx0XHQvLyBGaXJlcyB0aGUgZmlyc3QgdGltZSBhbiBlbGVtZW50IGlzIGFkZGVkLlxuXHRcdFx0XHRcdGlmKCFpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvZmZzY3JlZW4sIGFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihhbmltYXRlT25Mb2FkVmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvbnNjcmVlbiwgYW5kIGlzIGFuaW1hdGVPbkxvYWRWaXNpYmxlIGlzIHRydWUsIGFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZihpc1Nob3duICE9PSBpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdC8vIE9ubHkgZmlyZXMgb25jZSB0aGUgZWxlbWVudHMgaW5pdGlhbCBzdGF0ZSBoYXMgYmVlbiBzZXQsIFxuXHRcdFx0XHRcdC8vIHRoZSBlbGVtZW50IGlzIGFib3ZlIC8gYmVsb3cgdGhlIGludGVyc2VjdGlvbiB0aHJlc2hvbGQsXG5cdFx0XHRcdFx0Ly8gYW5kIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGluIGFuIGFuaW1hdGlvbiBjeWNsZS4gXG5cdFx0XHRcdFx0aWYoZG9BbmltYXRlSW4pIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQWRkIHRoZSBhbmltYXRlT3V0IGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudChmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHQvLyBVcGRhdGUgZWxlbWVudCBzdGF0ZVxuXHRcdFx0XHRlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0XHQuLi5lbGVtRGF0YSxcblx0XHRcdFx0XHRpc1Nob3duOiBpc0ludGVyc2VjdGluZyxcblx0XHRcdFx0XHRwcmV2WTogY3VyclksXG5cdFx0XHRcdFx0cHJldlJhdGlvOiBjdXJyUmF0aW9cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlck9wdGlvbnMgPSB7XG5cdFx0dGhyZXNob2xkOiBBbmltYXRlT25TY3JvbGwuI3RocmVzaG9sZEFycmF5KDIwKSxcblx0XHRyb290TWFyZ2luOiAnMHB4IDIwMCUnXG5cdH1cblx0Ly9cblx0Ly9cblx0Ly9cblx0Lypcblx0c3RhdGljICN3cmFwID0gKGVsZW0pID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT25TY3JvbGxXcmFwcGVyJywgJ2FsaWduZnVsbCcpO1xuXHRcdGVsZW0ucmVwbGFjZVdpdGgod3JhcHBlcik7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKVxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cdCovXG5cdHN0YXRpYyAjd3JhcCA9IChlbGVtKSA9PiB7XG5cdFx0Y29uc3Qgb3V0ZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0b3V0ZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVPblNjcm9sbE91dGVyV3JhcHBlcicsICdhbGlnbmZ1bGwnKTtcblxuXHRcdGNvbnN0IGlubmVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGlubmVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT25TY3JvbGxJbm5lcldyYXBwZXInLCAnYWxpZ25mdWxsJyk7XG5cdFx0XG5cdFx0ZWxlbS5yZXBsYWNlV2l0aChvdXRlcldyYXBwZXIpO1xuXHRcdFxuXHRcdGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKTtcblx0XHRvdXRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcblx0XHRcblx0XHRyZXR1cm4gb3V0ZXJXcmFwcGVyO1xuXHR9XG5cdFxuXHQvL1xuXHRzdGF0aWMgI3ByZXBhcmUgPSAoc2VsZWN0b3IpID0+IHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW0gPT4ge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRhbmltYXRlSW4gPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT3V0ID0gbnVsbCxcblx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUgPSBmYWxzZSxcblx0XHRcdFx0YW5pbWF0ZUR1cmF0aW9uID0gJzAuNnMnLFxuXHRcdFx0fSA9IGVsZW0uZGF0YXNldDtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCB3cmFwcGVyRWxlbSA9IEFuaW1hdGVPblNjcm9sbC4jd3JhcChlbGVtKTtcblx0XHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tYW5pbWF0ZS1kdXJhdGlvbicsIGFuaW1hdGVEdXJhdGlvbik7XG5cdFx0XHQvL1xuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0YW5pbWF0ZUR1cmF0aW9uLFxuXHRcdFx0XHRpc1Nob3duOiB1bmRlZmluZWQsXG5cdFx0XHRcdHByZXZZOiAwLFxuXHRcdFx0XHRwcmV2UmF0aW86IDAsXG5cdFx0XHR9KTtcblx0XHRcdEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyRWxlbSk7XG5cdFx0fSk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNpbml0T2JzZXJ2ZXIgPSAoKSA9PiB7XG5cdFx0QW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcblx0XHRcdEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXJDYWxsYmFjaywgXG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyT3B0aW9uc1xuXHRcdCk7XG5cdH1cblx0Ly9cblx0c3RhdGljIGFuaW1hdGUgPSAoLi4uc2VsZWN0b3JzKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIG9ic2VydmVyIGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGlzZWQsIGluaXRpYWxpc2UgaXQuIFxuXHRcdGlmKCFBbmltYXRlT25TY3JvbGwuI29ic2VydmVyKSBBbmltYXRlT25TY3JvbGwuI2luaXRPYnNlcnZlcigpO1xuXHRcdC8vIEJlZ2luIG9ic2VydmluZyBiYXNlZCBvbiB0aGUgcGFzc2VkIHF1ZXJ5U2VsZWN0b3JzLlxuXHRcdHNlbGVjdG9ycy5mb3JFYWNoKHNlbGVjdG9yID0+IEFuaW1hdGVPblNjcm9sbC4jcHJlcGFyZShzZWxlY3RvcikpO1xuXHR9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFRoZSBDb2RlXG4gKi9cblxuaW1wb3J0IHsgQW5pbWF0ZU9uU2Nyb2xsIH0gZnJvbSAnLi9BbmltYXRlT25TY3JvbGwnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRBbmltYXRlT25TY3JvbGwuYW5pbWF0ZSgnW2RhdGEtYW5pbWF0ZV0nKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFuaW1hdGVPblNjcm9sbCIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJNYXAiLCJjdXJyRWxlbSIsImN1cnJFbGVtRGF0YSIsInRocmVzaG9sZEFycmF5Iiwic3RlcHMiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJjdXIiLCJfIiwiaW5kZXgiLCJ0b2dnbGVDdXJyZW50RWxlbWVudCIsInNob3ciLCJlbGVtRGF0YSIsImVsZW0iLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiY2xhc3NUb1JlbW92ZSIsImNsYXNzVG9BZGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlckNhbGxiYWNrIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsIndpbmRvdyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJ3cmFwcGVyRWxlbSIsInRhcmdldCIsImdldCIsImFuaW1hdGVPbkxvYWRWaXNpYmxlIiwiaXNTaG93biIsInByZXZZIiwicHJldlJhdGlvIiwiY3VyclkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY3VyclJhdGlvIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsInNjcm9sbGluZ0RpcmVjdGlvbiIsImRvQW5pbWF0ZUluIiwic2V0Iiwib2JzZXJ2ZXJPcHRpb25zIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIndyYXAiLCJvdXRlcldyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lcldyYXBwZXIiLCJyZXBsYWNlV2l0aCIsImFwcGVuZENoaWxkIiwicHJlcGFyZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVEdXJhdGlvbiIsImRhdGFzZXQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidW5kZWZpbmVkIiwib2JzZXJ2ZSIsImluaXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiYW5pbWF0ZSIsInNlbGVjdG9ycyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9