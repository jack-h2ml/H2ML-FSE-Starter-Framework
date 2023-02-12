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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STdCQSxTQUFTLENBQUN2QyxPQUFPLENBQUMrQixRQUFRLElBQUkvRCxtQkFBbUIsQ0FBQyxDQUFDOEQsT0FBTyxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUN0RSxDQUFDO0FBQ0Y7Ozs7Ozs7Ozs7O0FDN0lBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRXdEO0FBRXhETCxRQUFRLENBQUNjLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDbkR4RSx5RUFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL0FuaW1hdGVPblNjcm9sbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3M/ZGE0NyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvQW5pbWF0ZU9uU2Nyb2xsLnNjc3M/MWY4NCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0ICcuL0FuaW1hdGVPblNjcm9sbC5zY3NzJztcblxuZXhwb3J0IGNsYXNzIEgybWxBbmltYXRlT25TY3JvbGwge1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyID0gbnVsbDtcblx0c3RhdGljICNlbGVtZW50cyA9IG5ldyBNYXAoKTtcblx0Ly9cblx0c3RhdGljICNjdXJyRWxlbSA9IG51bGw7XG5cdHN0YXRpYyAjY3VyckVsZW1EYXRhID0gbnVsbFxuXHQvL1xuXHRzdGF0aWMgI3RocmVzaG9sZEFycmF5ID0gc3RlcHMgPT4gQXJyYXkuZnJvbShBcnJheShzdGVwcyArIDEpKS5yZWR1Y2UoKGN1ciwgXywgaW5kZXgpID0+IFsuLi5jdXIsIGluZGV4IC8gc3RlcHMgfHwgMF0sIFtdKTtcblx0Ly9cblx0c3RhdGljICN0b2dnbGVDdXJyZW50RWxlbWVudCA9IChzaG93KSA9PiB7IFxuXHRcdGNvbnN0IGVsZW1EYXRhID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jY3VyckVsZW1EYXRhXG5cdFx0Y29uc3Qge1xuXHRcdFx0ZWxlbSxcblx0XHRcdGFuaW1hdGVJbixcblx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHR9ID0gZWxlbURhdGE7XG5cdFx0Ly9cblx0XHRjb25zdCBhbmltYXRlRHVyYXRpb24gPSBzaG93ID8gYW5pbWF0ZUluRHVyYXRpb24gOiBhbmltYXRlT3V0RHVyYXRpb247XG5cdFx0Y29uc3QgY2xhc3NUb1JlbW92ZSA9IHNob3cgPyBhbmltYXRlT3V0IDogYW5pbWF0ZUluO1xuXHRcdGNvbnN0IGNsYXNzVG9BZGQgPSAhc2hvdyA/IGFuaW1hdGVPdXQgOiBhbmltYXRlSW47XG5cdFx0Ly9cblx0XHRlbGVtLnN0eWxlLnNldFByb3BlcnR5KCctLWFuaW1hdGUtZHVyYXRpb24nLCBhbmltYXRlRHVyYXRpb24pO1xuXHRcdGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNvYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXMpID0+IHtcblx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0d2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBFbGVtZW50IFN0b3JlXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzID0gSDJtbEFuaW1hdGVPblNjcm9sbC4jZWxlbWVudHM7XG5cdFx0XHRcdC8vIEdldCBFbGVtZW50J3MgJiBzdGF0ZS5cblx0XHRcdFx0Y29uc3Qgd3JhcHBlckVsZW0gPSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbSA9IGVudHJ5LnRhcmdldDtcblx0XHRcdFx0Y29uc3QgZWxlbURhdGEgPSBIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGEgPSBlbGVtZW50cy5nZXQod3JhcHBlckVsZW0pO1xuXHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUsXG5cdFx0XHRcdFx0aXNTaG93bixcblx0XHRcdFx0XHRwcmV2WSxcblx0XHRcdFx0XHRwcmV2UmF0aW8sXG5cdFx0XHRcdH0gPSBlbGVtRGF0YTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgY3VyclkgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QueTtcblx0XHRcdFx0Y29uc3QgY3VyclJhdGlvID0gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW87XG5cdFx0XHRcdGNvbnN0IGlzSW50ZXJzZWN0aW5nID0gY3VyclJhdGlvID4gMC41O1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBzY3JvbGxpbmdEaXJlY3Rpb24gPSBwcmV2WSA+IGN1cnJZOyAvLyBUcnVlID0gZG93biwgRmFsc2UgPSB1cFxuXHRcdFx0XHRjb25zdCBkb0FuaW1hdGVJbiA9IHByZXZSYXRpbyA8IGN1cnJSYXRpbztcblx0XHRcdFx0Ly9cblx0XHRcdFx0aWYoaXNTaG93biAhPT0gISFpc1Nob3duKSB7XG5cdFx0XHRcdFx0Ly8gRmlyZXMgdGhlIGZpcnN0IHRpbWUgYW4gZWxlbWVudCBpcyBhZGRlZC5cblx0XHRcdFx0XHRpZighaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHRcdC8vIElmIGVsZW1lbnQgaXMgb2Zmc2NyZWVuLCBhZGQgdGhlIGFuaW1hdGVPdXQgY2xhc3MuXG5cdFx0XHRcdFx0XHRBbmltYXRlT25TY3JvbGwuI3RvZ2dsZUN1cnJlbnRFbGVtZW50KGZhbHNlKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYoYW5pbWF0ZU9uTG9hZFZpc2libGUpIHtcblx0XHRcdFx0XHRcdC8vIElmIGVsZW1lbnQgaXMgb25zY3JlZW4sIGFuZCBpcyBhbmltYXRlT25Mb2FkVmlzaWJsZSBpcyB0cnVlLCBhZGQgdGhlIGFuaW1hdGVJbiBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYoaXNTaG93biAhPT0gaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0XHQvLyBPbmx5IGZpcmVzIG9uY2UgdGhlIGVsZW1lbnRzIGluaXRpYWwgc3RhdGUgaGFzIGJlZW4gc2V0LCBcblx0XHRcdFx0XHQvLyB0aGUgZWxlbWVudCBpcyBhYm92ZSAvIGJlbG93IHRoZSBpbnRlcnNlY3Rpb24gdGhyZXNob2xkLFxuXHRcdFx0XHRcdC8vIGFuZCB0aGUgZWxlbWVudCBpcyBub3QgYWxyZWFkeSBpbiBhbiBhbmltYXRpb24gY3ljbGUuIFxuXHRcdFx0XHRcdGlmKGRvQW5pbWF0ZUluKSB7XG5cdFx0XHRcdFx0XHQvLyBBZGQgdGhlIGFuaW1hdGVJbiBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQodHJ1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBcblx0XHRcdFx0Ly8gVXBkYXRlIGVsZW1lbnQgc3RhdGVcblx0XHRcdFx0ZWxlbWVudHMuc2V0KHdyYXBwZXJFbGVtLCB7XG5cdFx0XHRcdFx0Li4uZWxlbURhdGEsXG5cdFx0XHRcdFx0aXNTaG93bjogaXNJbnRlcnNlY3RpbmcsXG5cdFx0XHRcdFx0cHJldlk6IGN1cnJZLFxuXHRcdFx0XHRcdHByZXZSYXRpbzogY3VyclJhdGlvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cdC8vXG5cdHN0YXRpYyAjb2JzZXJ2ZXJPcHRpb25zID0ge1xuXHRcdHRocmVzaG9sZDogSDJtbEFuaW1hdGVPblNjcm9sbC4jdGhyZXNob2xkQXJyYXkoMjApLFxuXHRcdHJvb3RNYXJnaW46ICcwcHggMjAwJSdcblx0fVxuXHQvL1xuXHQvL1xuXHQvL1xuXHRzdGF0aWMgI3dyYXAgPSAoZWxlbSkgPT4ge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVPblNjcm9sbFdyYXBwZXInLCAnYWxpZ25mdWxsJyk7XG5cdFx0ZWxlbS5yZXBsYWNlV2l0aCh3cmFwcGVyKTtcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGVsZW0pXG5cdFx0cmV0dXJuIHdyYXBwZXI7XG5cdH1cblx0Ly9cblx0c3RhdGljICNwcmVwYXJlID0gKHNlbGVjdG9yKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaChlbGVtID0+IHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0YW5pbWF0ZUluID0gbnVsbCxcblx0XHRcdFx0YW5pbWF0ZU91dCA9IG51bGwsXG5cdFx0XHRcdGFuaW1hdGVPbkxvYWRWaXNpYmxlID0gZmFsc2UsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uID0gJzUwMG1zJyxcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uID0gJzUwMG1zJ1xuXHRcdFx0fSA9IGVsZW0uZGF0YXNldDtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCB3cmFwcGVyRWxlbSA9IEgybWxBbmltYXRlT25TY3JvbGwuI3dyYXAoZWxlbSk7XG5cdFx0XHQvL1xuXHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jZWxlbWVudHMuc2V0KHdyYXBwZXJFbGVtLCB7XG5cdFx0XHRcdGVsZW0sXG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0YW5pbWF0ZU9uTG9hZFZpc2libGUsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHRcdGlzU2hvd246IHVuZGVmaW5lZCxcblx0XHRcdFx0cHJldlk6IDAsXG5cdFx0XHRcdHByZXZSYXRpbzogMCxcblx0XHRcdH0pO1xuXHRcdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyRWxlbSk7XG5cdFx0fSk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNpbml0T2JzZXJ2ZXIgPSAoKSA9PiB7XG5cdFx0SDJtbEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdFx0XHRIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlckNhbGxiYWNrLCBcblx0XHRcdEgybWxBbmltYXRlT25TY3JvbGwuI29ic2VydmVyT3B0aW9uc1xuXHRcdCk7XG5cdH1cblx0Ly9cblx0c3RhdGljIGFuaW1hdGUgPSAoLi4uc2VsZWN0b3JzKSA9PiB7XG5cdFx0Ly8gSWYgdGhlIG9ic2VydmVyIGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGlzZWQsIGluaXRpYWxpc2UgaXQuIFxuXHRcdGlmKCFIMm1sQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlcikgSDJtbEFuaW1hdGVPblNjcm9sbC4jaW5pdE9ic2VydmVyKCk7XG5cdFx0Ly8gQmVnaW4gb2JzZXJ2aW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgcXVlcnlTZWxlY3RvcnMuXG5cdFx0c2VsZWN0b3JzLmZvckVhY2goc2VsZWN0b3IgPT4gSDJtbEFuaW1hdGVPblNjcm9sbC4jcHJlcGFyZShzZWxlY3RvcikpO1xuXHR9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFRoZSBDb2RlXG4gKi9cblxuaW1wb3J0IHsgSDJtbEFuaW1hdGVPblNjcm9sbCB9IGZyb20gJy4vQW5pbWF0ZU9uU2Nyb2xsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0SDJtbEFuaW1hdGVPblNjcm9sbC5hbmltYXRlKCdbZGF0YS1hbmltYXRlXScpO1xufSk7XG4iXSwibmFtZXMiOlsiSDJtbEFuaW1hdGVPblNjcm9sbCIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJNYXAiLCJjdXJyRWxlbSIsImN1cnJFbGVtRGF0YSIsInRocmVzaG9sZEFycmF5Iiwic3RlcHMiLCJBcnJheSIsImZyb20iLCJyZWR1Y2UiLCJjdXIiLCJfIiwiaW5kZXgiLCJ0b2dnbGVDdXJyZW50RWxlbWVudCIsInNob3ciLCJlbGVtRGF0YSIsImVsZW0iLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJhbmltYXRlRHVyYXRpb24iLCJjbGFzc1RvUmVtb3ZlIiwiY2xhc3NUb0FkZCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvYnNlcnZlckNhbGxiYWNrIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsIndpbmRvdyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJ3cmFwcGVyRWxlbSIsInRhcmdldCIsImdldCIsImFuaW1hdGVPbkxvYWRWaXNpYmxlIiwiaXNTaG93biIsInByZXZZIiwicHJldlJhdGlvIiwiY3VyclkiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY3VyclJhdGlvIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsInNjcm9sbGluZ0RpcmVjdGlvbiIsImRvQW5pbWF0ZUluIiwiQW5pbWF0ZU9uU2Nyb2xsIiwic2V0Iiwib2JzZXJ2ZXJPcHRpb25zIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsIndyYXAiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJhcHBlbmRDaGlsZCIsInByZXBhcmUiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhc2V0IiwidW5kZWZpbmVkIiwib2JzZXJ2ZSIsImluaXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiYW5pbWF0ZSIsInNlbGVjdG9ycyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9