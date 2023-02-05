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
  static #prepare = selector => {
    document.querySelectorAll(selector).forEach(elem => {
      const {
        animateIn = null,
        animateOut = null,
        animateOnLoadVisible = false,
        animateDuration = '0.3s'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVvRDtBQUVwREwsUUFBUSxDQUFDaUIsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNuRHJFLHFFQUF1QixDQUFDLGdCQUFnQixDQUFDO0FBQzFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvQW5pbWF0ZU9uU2Nyb2xsL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvQW5pbWF0ZU9uU2Nyb2xsLnNjc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi9BbmltYXRlT25TY3JvbGwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlT25TY3JvbGwge1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyID0gbnVsbDtcblx0c3RhdGljICNlbGVtZW50cyA9IG5ldyBNYXAoKTtcblx0Ly9cblx0c3RhdGljICNjdXJyRWxlbSA9IG51bGw7XG5cdHN0YXRpYyAjY3VyckVsZW1EYXRhID0gbnVsbFxuXHQvL1xuXHRzdGF0aWMgI3RocmVzaG9sZEFycmF5ID0gc3RlcHMgPT4gQXJyYXkuZnJvbShBcnJheShzdGVwcyArIDEpKS5yZWR1Y2UoKGN1ciwgXywgaW5kZXgpID0+IFsuLi5jdXIsIGluZGV4IC8gc3RlcHMgfHwgMF0sIFtdKTtcblx0Ly9cblx0c3RhdGljICN0b2dnbGVDdXJyZW50RWxlbWVudCA9IChzaG93KSA9PiB7IFxuXHRcdGNvbnN0IGVsZW1EYXRhID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGFcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtLFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0YW5pbWF0ZU91dFxuXHRcdH0gPSBlbGVtRGF0YTtcblx0XHQvL1xuXHRcdGNvbnN0IGNsYXNzVG9SZW1vdmUgPSBzaG93ID8gYW5pbWF0ZU91dCA6IGFuaW1hdGVJbjtcblx0XHRjb25zdCBjbGFzc1RvQWRkID0gIXNob3cgPyBhbmltYXRlT3V0IDogYW5pbWF0ZUluO1xuXHRcdC8vXG5cdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzVG9SZW1vdmUpO1xuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgU3RvcmVcblx0XHRcdFx0Y29uc3QgZWxlbWVudHMgPSBBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzO1xuXHRcdFx0XHQvLyBHZXQgRWxlbWVudCdzICYgc3RhdGUuXG5cdFx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbSA9IGVudHJ5LnRhcmdldDtcblx0XHRcdFx0Y29uc3QgZWxlbURhdGEgPSBBbmltYXRlT25TY3JvbGwuI2N1cnJFbGVtRGF0YSA9IGVsZW1lbnRzLmdldCh3cmFwcGVyRWxlbSk7XG5cdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0XHRpc1Nob3duLFxuXHRcdFx0XHRcdHByZXZZLFxuXHRcdFx0XHRcdHByZXZSYXRpbyxcblx0XHRcdFx0fSA9IGVsZW1EYXRhO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBjdXJyWSA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC55O1xuXHRcdFx0XHRjb25zdCBjdXJyUmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbztcblx0XHRcdFx0Y29uc3QgaXNJbnRlcnNlY3RpbmcgPSBjdXJyUmF0aW8gPiAwLjU7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNjcm9sbGluZ0RpcmVjdGlvbiA9IHByZXZZID4gY3Vyclk7IC8vIFRydWUgPSBkb3duLCBGYWxzZSA9IHVwXG5cdFx0XHRcdGNvbnN0IGRvQW5pbWF0ZUluID0gcHJldlJhdGlvIDwgY3VyclJhdGlvO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRpZihpc1Nob3duICE9PSAhIWlzU2hvd24pIHtcblx0XHRcdFx0XHQvLyBGaXJlcyB0aGUgZmlyc3QgdGltZSBhbiBlbGVtZW50IGlzIGFkZGVkLlxuXHRcdFx0XHRcdGlmKCFpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvZmZzY3JlZW4sIGFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihhbmltYXRlT25Mb2FkVmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvbnNjcmVlbiwgYW5kIGlzIGFuaW1hdGVPbkxvYWRWaXNpYmxlIGlzIHRydWUsIGFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZihpc1Nob3duICE9PSBpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdC8vIE9ubHkgZmlyZXMgb25jZSB0aGUgZWxlbWVudHMgaW5pdGlhbCBzdGF0ZSBoYXMgYmVlbiBzZXQsIFxuXHRcdFx0XHRcdC8vIHRoZSBlbGVtZW50IGlzIGFib3ZlIC8gYmVsb3cgdGhlIGludGVyc2VjdGlvbiB0aHJlc2hvbGQsXG5cdFx0XHRcdFx0Ly8gYW5kIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGluIGFuIGFuaW1hdGlvbiBjeWNsZS4gXG5cdFx0XHRcdFx0aWYoZG9BbmltYXRlSW4pIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQWRkIHRoZSBhbmltYXRlT3V0IGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudChmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHQvLyBVcGRhdGUgZWxlbWVudCBzdGF0ZVxuXHRcdFx0XHRlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0XHQuLi5lbGVtRGF0YSxcblx0XHRcdFx0XHRpc1Nob3duOiBpc0ludGVyc2VjdGluZyxcblx0XHRcdFx0XHRwcmV2WTogY3VyclksXG5cdFx0XHRcdFx0cHJldlJhdGlvOiBjdXJyUmF0aW9cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlck9wdGlvbnMgPSB7XG5cdFx0dGhyZXNob2xkOiBBbmltYXRlT25TY3JvbGwuI3RocmVzaG9sZEFycmF5KDIwKSxcblx0XHRyb290TWFyZ2luOiAnMHB4IDIwMCUnXG5cdH1cblx0Ly9cblx0Ly9cblx0Ly9cblx0c3RhdGljICN3cmFwID0gKGVsZW0pID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT25TY3JvbGxXcmFwcGVyJywgJ2FsaWduZnVsbCcpO1xuXHRcdGVsZW0ucmVwbGFjZVdpdGgod3JhcHBlcik7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKVxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjcHJlcGFyZSA9IChzZWxlY3RvcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGFuaW1hdGVJbiA9IG51bGwsXG5cdFx0XHRcdGFuaW1hdGVPdXQgPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSA9IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRlRHVyYXRpb24gPSAnMC4zcycsXG5cdFx0XHR9ID0gZWxlbS5kYXRhc2V0O1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gQW5pbWF0ZU9uU2Nyb2xsLiN3cmFwKGVsZW0pO1xuXHRcdFx0ZWxlbS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hbmltYXRlLWR1cmF0aW9uJywgYW5pbWF0ZUR1cmF0aW9uKTtcblx0XHRcdC8vXG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzLnNldCh3cmFwcGVyRWxlbSwge1xuXHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVPbkxvYWRWaXNpYmxlLFxuXHRcdFx0XHRhbmltYXRlRHVyYXRpb24sXG5cdFx0XHRcdGlzU2hvd246IHVuZGVmaW5lZCxcblx0XHRcdFx0cHJldlk6IDAsXG5cdFx0XHRcdHByZXZSYXRpbzogMCxcblx0XHRcdH0pO1xuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlci5vYnNlcnZlKHdyYXBwZXJFbGVtKTtcblx0XHR9KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI2luaXRPYnNlcnZlciA9ICgpID0+IHtcblx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlckNhbGxiYWNrLCBcblx0XHRcdEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXJPcHRpb25zXG5cdFx0KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgYW5pbWF0ZSA9ICguLi5zZWxlY3RvcnMpID0+IHtcblx0XHQvLyBJZiB0aGUgb2JzZXJ2ZXIgaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXNlZCwgaW5pdGlhbGlzZSBpdC4gXG5cdFx0aWYoIUFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIpIEFuaW1hdGVPblNjcm9sbC4jaW5pdE9ic2VydmVyKCk7XG5cdFx0Ly8gQmVnaW4gb2JzZXJ2aW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgcXVlcnlTZWxlY3RvcnMuXG5cdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gQW5pbWF0ZU9uU2Nyb2xsLiNwcmVwYXJlKHNlbGVjdG9yKSk7XG5cdH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogVGhlIENvZGVcbiAqL1xuXG5pbXBvcnQgeyBBbmltYXRlT25TY3JvbGwgfSBmcm9tICcuL0FuaW1hdGVPblNjcm9sbCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdEFuaW1hdGVPblNjcm9sbC5hbmltYXRlKCdbZGF0YS1hbmltYXRlXScpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5pbWF0ZU9uU2Nyb2xsIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsIk1hcCIsImN1cnJFbGVtIiwiY3VyckVsZW1EYXRhIiwidGhyZXNob2xkQXJyYXkiLCJzdGVwcyIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImN1ciIsIl8iLCJpbmRleCIsInRvZ2dsZUN1cnJlbnRFbGVtZW50Iiwic2hvdyIsImVsZW1EYXRhIiwiZWxlbSIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJjbGFzc1RvUmVtb3ZlIiwiY2xhc3NUb0FkZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9ic2VydmVyQ2FsbGJhY2siLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5Iiwid2luZG93IiwicmVxdWVzdElkbGVDYWxsYmFjayIsIndyYXBwZXJFbGVtIiwidGFyZ2V0IiwiZ2V0IiwiYW5pbWF0ZU9uTG9hZFZpc2libGUiLCJpc1Nob3duIiwicHJldlkiLCJwcmV2UmF0aW8iLCJjdXJyWSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInkiLCJjdXJyUmF0aW8iLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwic2Nyb2xsaW5nRGlyZWN0aW9uIiwiZG9BbmltYXRlSW4iLCJzZXQiLCJvYnNlcnZlck9wdGlvbnMiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwid3JhcCIsIndyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZXBsYWNlV2l0aCIsImFwcGVuZENoaWxkIiwicHJlcGFyZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVEdXJhdGlvbiIsImRhdGFzZXQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidW5kZWZpbmVkIiwib2JzZXJ2ZSIsImluaXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiYW5pbWF0ZSIsInNlbGVjdG9ycyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9