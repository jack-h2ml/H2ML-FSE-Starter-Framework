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
        animateInDuration = '500ms',
        animateOutDuration = '500ms'
      } = elem.dataset;
      //
      const wrapperElem = AnimateOnScroll.#wrap(elem);
      //
      AnimateOnScroll.#elements.set(wrapperElem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ0w7QUFFekIsTUFBTUEsZUFBZSxDQUFDO0VBQzVCO0VBQ0EsT0FBTyxDQUFDQyxRQUFRLEdBQUcsSUFBSTtFQUN2QixPQUFPLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxHQUFHLEVBQUU7RUFDNUI7RUFDQSxPQUFPLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQ3ZCLE9BQU8sQ0FBQ0MsWUFBWSxHQUFHLElBQUk7RUFDM0I7RUFDQSxPQUFPLENBQUNDLGNBQWMsR0FBR0MsS0FBSyxJQUFJQyxLQUFLLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsQ0FBQyxFQUFFQyxLQUFLLEtBQUssQ0FBQyxHQUFHRixHQUFHLEVBQUVFLEtBQUssR0FBR04sS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUMxSDtFQUNBLE9BQU8sQ0FBQ08sb0JBQW9CLEdBQUlDLElBQUksSUFBSztJQUN4QyxNQUFNQyxRQUFRLEdBQUdoQixlQUFlLENBQUMsQ0FBQ0ssWUFBWTtJQUM5QyxNQUFNO01BQ0xZLElBQUk7TUFDSkMsU0FBUztNQUNUQyxVQUFVO01BQ1ZDLGlCQUFpQjtNQUNqQkM7SUFDRCxDQUFDLEdBQUdMLFFBQVE7SUFDWjtJQUNBLE1BQU1NLGVBQWUsR0FBR1AsSUFBSSxHQUFHSyxpQkFBaUIsR0FBR0Msa0JBQWtCO0lBQ3JFLE1BQU1FLGFBQWEsR0FBR1IsSUFBSSxHQUFHSSxVQUFVLEdBQUdELFNBQVM7SUFDbkQsTUFBTU0sVUFBVSxHQUFHLENBQUNULElBQUksR0FBR0ksVUFBVSxHQUFHRCxTQUFTO0lBQ2pEO0lBQ0FELElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxXQUFXLENBQUMsb0JBQW9CLEVBQUVKLGVBQWUsQ0FBQztJQUM3REwsSUFBSSxDQUFDVSxTQUFTLENBQUNDLE1BQU0sQ0FBQ0wsYUFBYSxDQUFDO0lBQ3BDTixJQUFJLENBQUNVLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDTCxVQUFVLENBQUM7RUFDL0IsQ0FBQztFQUNEO0VBQ0EsT0FBTyxDQUFDTSxnQkFBZ0IsR0FBSUMsT0FBTyxJQUFLO0lBQ3ZDQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO01BQ3hCQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDLE1BQU07UUFDaEM7UUFDQSxNQUFNakMsUUFBUSxHQUFHRixlQUFlLENBQUMsQ0FBQ0UsUUFBUTtRQUMxQztRQUNBLE1BQU1rQyxXQUFXLEdBQUdwQyxlQUFlLENBQUMsQ0FBQ0ksUUFBUSxHQUFHNkIsS0FBSyxDQUFDSSxNQUFNO1FBQzVELE1BQU1yQixRQUFRLEdBQUdoQixlQUFlLENBQUMsQ0FBQ0ssWUFBWSxHQUFHSCxRQUFRLENBQUNvQyxHQUFHLENBQUNGLFdBQVcsQ0FBQztRQUMxRSxNQUFNO1VBQ0xHLG9CQUFvQjtVQUNwQkMsT0FBTztVQUNQQyxLQUFLO1VBQ0xDO1FBQ0QsQ0FBQyxHQUFHMUIsUUFBUTtRQUNaO1FBQ0EsTUFBTTJCLEtBQUssR0FBR1YsS0FBSyxDQUFDVyxrQkFBa0IsQ0FBQ0MsQ0FBQztRQUN4QyxNQUFNQyxTQUFTLEdBQUdiLEtBQUssQ0FBQ2MsaUJBQWlCO1FBQ3pDLE1BQU1DLGNBQWMsR0FBR0YsU0FBUyxHQUFHLEdBQUc7UUFDdEM7UUFDQSxNQUFNRyxrQkFBa0IsR0FBR1IsS0FBSyxHQUFHRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxNQUFNTyxXQUFXLEdBQUdSLFNBQVMsR0FBR0ksU0FBUztRQUN6QztRQUNBLElBQUdOLE9BQU8sS0FBSyxDQUFDLENBQUNBLE9BQU8sRUFBRTtVQUN6QjtVQUNBLElBQUcsQ0FBQ1EsY0FBYyxFQUFFO1lBQ25CO1lBQ0FoRCxlQUFlLENBQUMsQ0FBQ2Msb0JBQW9CLENBQUMsS0FBSyxDQUFDO1VBQzdDLENBQUMsTUFBTSxJQUFHeUIsb0JBQW9CLEVBQUU7WUFDL0I7WUFDQXZDLGVBQWUsQ0FBQyxDQUFDYyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7VUFDNUM7UUFDRCxDQUFDLE1BQU0sSUFBRzBCLE9BQU8sS0FBS1EsY0FBYyxFQUFFO1VBQ3JDO1VBQ0E7VUFDQTtVQUNBLElBQUdFLFdBQVcsRUFBRTtZQUNmO1lBQ0FsRCxlQUFlLENBQUMsQ0FBQ2Msb0JBQW9CLENBQUMsSUFBSSxDQUFDO1VBQzVDLENBQUMsTUFBTTtZQUNOO1lBQ0FkLGVBQWUsQ0FBQyxDQUFDYyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7VUFDN0M7UUFDRDtRQUNBO1FBQ0FaLFFBQVEsQ0FBQ2lELEdBQUcsQ0FBQ2YsV0FBVyxFQUFFO1VBQ3pCLEdBQUdwQixRQUFRO1VBQ1h3QixPQUFPLEVBQUVRLGNBQWM7VUFDdkJQLEtBQUssRUFBRUUsS0FBSztVQUNaRCxTQUFTLEVBQUVJO1FBQ1osQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0gsQ0FBQztFQUNEO0VBQ0EsT0FBTyxDQUFDTSxlQUFlLEdBQUc7SUFDekJDLFNBQVMsRUFBRXJELGVBQWUsQ0FBQyxDQUFDTSxjQUFjLENBQUMsRUFBRSxDQUFDO0lBQzlDZ0QsVUFBVSxFQUFFO0VBQ2IsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBLE9BQU8sQ0FBQ0MsSUFBSSxHQUFJdEMsSUFBSSxJQUFLO0lBQ3hCLE1BQU11QyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3Q0YsT0FBTyxDQUFDN0IsU0FBUyxDQUFDRSxHQUFHLENBQUMsd0JBQXdCLEVBQUUsV0FBVyxDQUFDO0lBQzVEWixJQUFJLENBQUMwQyxXQUFXLENBQUNILE9BQU8sQ0FBQztJQUN6QkEsT0FBTyxDQUFDSSxXQUFXLENBQUMzQyxJQUFJLENBQUM7SUFDekIsT0FBT3VDLE9BQU87RUFDZixDQUFDO0VBQ0Q7RUFDQSxPQUFPLENBQUNLLE9BQU8sR0FBSUMsUUFBUSxJQUFLO0lBQy9CTCxRQUFRLENBQUNNLGdCQUFnQixDQUFDRCxRQUFRLENBQUMsQ0FBQzlCLE9BQU8sQ0FBQ2YsSUFBSSxJQUFJO01BQ25ELE1BQU07UUFDTEMsU0FBUyxHQUFHLElBQUk7UUFDaEJDLFVBQVUsR0FBRyxJQUFJO1FBQ2pCb0Isb0JBQW9CLEdBQUcsS0FBSztRQUM1Qm5CLGlCQUFpQixHQUFHLE9BQU87UUFDM0JDLGtCQUFrQixHQUFHO01BQ3RCLENBQUMsR0FBR0osSUFBSSxDQUFDK0MsT0FBTztNQUNoQjtNQUNBLE1BQU01QixXQUFXLEdBQUdwQyxlQUFlLENBQUMsQ0FBQ3VELElBQUksQ0FBQ3RDLElBQUksQ0FBQztNQUMvQztNQUNBakIsZUFBZSxDQUFDLENBQUNFLFFBQVEsQ0FBQ2lELEdBQUcsQ0FBQ2YsV0FBVyxFQUFFO1FBQzFDbkIsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVm9CLG9CQUFvQjtRQUNwQm5CLGlCQUFpQjtRQUNqQkMsa0JBQWtCO1FBQ2xCbUIsT0FBTyxFQUFFeUIsU0FBUztRQUNsQnhCLEtBQUssRUFBRSxDQUFDO1FBQ1JDLFNBQVMsRUFBRTtNQUNaLENBQUMsQ0FBQztNQUNGMUMsZUFBZSxDQUFDLENBQUNDLFFBQVEsQ0FBQ2lFLE9BQU8sQ0FBQzlCLFdBQVcsQ0FBQztJQUMvQyxDQUFDLENBQUM7RUFDSCxDQUFDO0VBQ0Q7RUFDQSxPQUFPLENBQUMrQixZQUFZLEdBQUcsTUFBTTtJQUM1Qm5FLGVBQWUsQ0FBQyxDQUFDQyxRQUFRLEdBQUcsSUFBSW1FLG9CQUFvQixDQUNuRHBFLGVBQWUsQ0FBQyxDQUFDOEIsZ0JBQWdCLEVBQ2pDOUIsZUFBZSxDQUFDLENBQUNvRCxlQUFlLENBQ2hDO0VBQ0YsQ0FBQztFQUNEO0VBQ0EsT0FBT2lCLE9BQU8sR0FBRyxZQUFrQjtJQUNsQztJQUNBLElBQUcsQ0FBQ3JFLGVBQWUsQ0FBQyxDQUFDQyxRQUFRLEVBQUVELGVBQWUsQ0FBQyxDQUFDbUUsWUFBWSxFQUFFO0lBQzlEO0lBQUEsa0NBSG9CRyxTQUFTO01BQVRBLFNBQVM7SUFBQTtJQUk3QkEsU0FBUyxDQUFDdEMsT0FBTyxDQUFDOEIsUUFBUSxJQUFJOUQsZUFBZSxDQUFDLENBQUM2RCxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0VBQ2xFLENBQUM7QUFDRjs7Ozs7Ozs7Ozs7QUM3SUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFb0Q7QUFFcERMLFFBQVEsQ0FBQ2MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNuRHZFLHFFQUF1QixDQUFDLGdCQUFnQixDQUFDO0FBQzFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvQW5pbWF0ZU9uU2Nyb2xsL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9BbmltYXRlT25TY3JvbGwvQW5pbWF0ZU9uU2Nyb2xsLnNjc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCAnLi9BbmltYXRlT25TY3JvbGwuc2Nzcyc7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlT25TY3JvbGwge1xuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyID0gbnVsbDtcblx0c3RhdGljICNlbGVtZW50cyA9IG5ldyBNYXAoKTtcblx0Ly9cblx0c3RhdGljICNjdXJyRWxlbSA9IG51bGw7XG5cdHN0YXRpYyAjY3VyckVsZW1EYXRhID0gbnVsbFxuXHQvL1xuXHRzdGF0aWMgI3RocmVzaG9sZEFycmF5ID0gc3RlcHMgPT4gQXJyYXkuZnJvbShBcnJheShzdGVwcyArIDEpKS5yZWR1Y2UoKGN1ciwgXywgaW5kZXgpID0+IFsuLi5jdXIsIGluZGV4IC8gc3RlcHMgfHwgMF0sIFtdKTtcblx0Ly9cblx0c3RhdGljICN0b2dnbGVDdXJyZW50RWxlbWVudCA9IChzaG93KSA9PiB7IFxuXHRcdGNvbnN0IGVsZW1EYXRhID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbURhdGFcblx0XHRjb25zdCB7XG5cdFx0XHRlbGVtLFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uLFxuXHRcdH0gPSBlbGVtRGF0YTtcblx0XHQvL1xuXHRcdGNvbnN0IGFuaW1hdGVEdXJhdGlvbiA9IHNob3cgPyBhbmltYXRlSW5EdXJhdGlvbiA6IGFuaW1hdGVPdXREdXJhdGlvbjtcblx0XHRjb25zdCBjbGFzc1RvUmVtb3ZlID0gc2hvdyA/IGFuaW1hdGVPdXQgOiBhbmltYXRlSW47XG5cdFx0Y29uc3QgY2xhc3NUb0FkZCA9ICFzaG93ID8gYW5pbWF0ZU91dCA6IGFuaW1hdGVJbjtcblx0XHQvL1xuXHRcdGVsZW0uc3R5bGUuc2V0UHJvcGVydHkoJy0tYW5pbWF0ZS1kdXJhdGlvbicsIGFuaW1hdGVEdXJhdGlvbik7XG5cdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzVG9SZW1vdmUpO1xuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI29ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllcykgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgU3RvcmVcblx0XHRcdFx0Y29uc3QgZWxlbWVudHMgPSBBbmltYXRlT25TY3JvbGwuI2VsZW1lbnRzO1xuXHRcdFx0XHQvLyBHZXQgRWxlbWVudCdzICYgc3RhdGUuXG5cdFx0XHRcdGNvbnN0IHdyYXBwZXJFbGVtID0gQW5pbWF0ZU9uU2Nyb2xsLiNjdXJyRWxlbSA9IGVudHJ5LnRhcmdldDtcblx0XHRcdFx0Y29uc3QgZWxlbURhdGEgPSBBbmltYXRlT25TY3JvbGwuI2N1cnJFbGVtRGF0YSA9IGVsZW1lbnRzLmdldCh3cmFwcGVyRWxlbSk7XG5cdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0XHRpc1Nob3duLFxuXHRcdFx0XHRcdHByZXZZLFxuXHRcdFx0XHRcdHByZXZSYXRpbyxcblx0XHRcdFx0fSA9IGVsZW1EYXRhO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBjdXJyWSA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdC55O1xuXHRcdFx0XHRjb25zdCBjdXJyUmF0aW8gPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbztcblx0XHRcdFx0Y29uc3QgaXNJbnRlcnNlY3RpbmcgPSBjdXJyUmF0aW8gPiAwLjU7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNjcm9sbGluZ0RpcmVjdGlvbiA9IHByZXZZID4gY3Vyclk7IC8vIFRydWUgPSBkb3duLCBGYWxzZSA9IHVwXG5cdFx0XHRcdGNvbnN0IGRvQW5pbWF0ZUluID0gcHJldlJhdGlvIDwgY3VyclJhdGlvO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRpZihpc1Nob3duICE9PSAhIWlzU2hvd24pIHtcblx0XHRcdFx0XHQvLyBGaXJlcyB0aGUgZmlyc3QgdGltZSBhbiBlbGVtZW50IGlzIGFkZGVkLlxuXHRcdFx0XHRcdGlmKCFpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvZmZzY3JlZW4sIGFkZCB0aGUgYW5pbWF0ZU91dCBjbGFzcy5cblx0XHRcdFx0XHRcdEFuaW1hdGVPblNjcm9sbC4jdG9nZ2xlQ3VycmVudEVsZW1lbnQoZmFsc2UpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZihhbmltYXRlT25Mb2FkVmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0Ly8gSWYgZWxlbWVudCBpcyBvbnNjcmVlbiwgYW5kIGlzIGFuaW1hdGVPbkxvYWRWaXNpYmxlIGlzIHRydWUsIGFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZihpc1Nob3duICE9PSBpc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdC8vIE9ubHkgZmlyZXMgb25jZSB0aGUgZWxlbWVudHMgaW5pdGlhbCBzdGF0ZSBoYXMgYmVlbiBzZXQsIFxuXHRcdFx0XHRcdC8vIHRoZSBlbGVtZW50IGlzIGFib3ZlIC8gYmVsb3cgdGhlIGludGVyc2VjdGlvbiB0aHJlc2hvbGQsXG5cdFx0XHRcdFx0Ly8gYW5kIHRoZSBlbGVtZW50IGlzIG5vdCBhbHJlYWR5IGluIGFuIGFuaW1hdGlvbiBjeWNsZS4gXG5cdFx0XHRcdFx0aWYoZG9BbmltYXRlSW4pIHtcblx0XHRcdFx0XHRcdC8vIEFkZCB0aGUgYW5pbWF0ZUluIGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudCh0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQWRkIHRoZSBhbmltYXRlT3V0IGNsYXNzLlxuXHRcdFx0XHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiN0b2dnbGVDdXJyZW50RWxlbWVudChmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHQvLyBVcGRhdGUgZWxlbWVudCBzdGF0ZVxuXHRcdFx0XHRlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0XHQuLi5lbGVtRGF0YSxcblx0XHRcdFx0XHRpc1Nob3duOiBpc0ludGVyc2VjdGluZyxcblx0XHRcdFx0XHRwcmV2WTogY3VyclksXG5cdFx0XHRcdFx0cHJldlJhdGlvOiBjdXJyUmF0aW9cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0Ly9cblx0c3RhdGljICNvYnNlcnZlck9wdGlvbnMgPSB7XG5cdFx0dGhyZXNob2xkOiBBbmltYXRlT25TY3JvbGwuI3RocmVzaG9sZEFycmF5KDIwKSxcblx0XHRyb290TWFyZ2luOiAnMHB4IDIwMCUnXG5cdH1cblx0Ly9cblx0Ly9cblx0Ly9cblx0c3RhdGljICN3cmFwID0gKGVsZW0pID0+IHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT25TY3JvbGxXcmFwcGVyJywgJ2FsaWduZnVsbCcpO1xuXHRcdGVsZW0ucmVwbGFjZVdpdGgod3JhcHBlcik7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChlbGVtKVxuXHRcdHJldHVybiB3cmFwcGVyO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjcHJlcGFyZSA9IChzZWxlY3RvcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdGFuaW1hdGVJbiA9IG51bGwsXG5cdFx0XHRcdGFuaW1hdGVPdXQgPSBudWxsLFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSA9IGZhbHNlLFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbiA9ICc1MDBtcycsXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbiA9ICc1MDBtcydcblx0XHRcdH0gPSBlbGVtLmRhdGFzZXQ7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3Qgd3JhcHBlckVsZW0gPSBBbmltYXRlT25TY3JvbGwuI3dyYXAoZWxlbSk7XG5cdFx0XHQvL1xuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNlbGVtZW50cy5zZXQod3JhcHBlckVsZW0sIHtcblx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRhbmltYXRlT25Mb2FkVmlzaWJsZSxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdFx0aXNTaG93bjogdW5kZWZpbmVkLFxuXHRcdFx0XHRwcmV2WTogMCxcblx0XHRcdFx0cHJldlJhdGlvOiAwLFxuXHRcdFx0fSk7XG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyLm9ic2VydmUod3JhcHBlckVsZW0pO1xuXHRcdH0pO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjaW5pdE9ic2VydmVyID0gKCkgPT4ge1xuXHRcdEFuaW1hdGVPblNjcm9sbC4jb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG5cdFx0XHRBbmltYXRlT25TY3JvbGwuI29ic2VydmVyQ2FsbGJhY2ssIFxuXHRcdFx0QW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlck9wdGlvbnNcblx0XHQpO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyBhbmltYXRlID0gKC4uLnNlbGVjdG9ycykgPT4ge1xuXHRcdC8vIElmIHRoZSBvYnNlcnZlciBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpc2VkLCBpbml0aWFsaXNlIGl0LiBcblx0XHRpZighQW5pbWF0ZU9uU2Nyb2xsLiNvYnNlcnZlcikgQW5pbWF0ZU9uU2Nyb2xsLiNpbml0T2JzZXJ2ZXIoKTtcblx0XHQvLyBCZWdpbiBvYnNlcnZpbmcgYmFzZWQgb24gdGhlIHBhc3NlZCBxdWVyeVNlbGVjdG9ycy5cblx0XHRzZWxlY3RvcnMuZm9yRWFjaChzZWxlY3RvciA9PiBBbmltYXRlT25TY3JvbGwuI3ByZXBhcmUoc2VsZWN0b3IpKTtcblx0fVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmltcG9ydCB7IEFuaW1hdGVPblNjcm9sbCB9IGZyb20gJy4vQW5pbWF0ZU9uU2Nyb2xsJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0QW5pbWF0ZU9uU2Nyb2xsLmFuaW1hdGUoJ1tkYXRhLWFuaW1hdGVdJyk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmltYXRlT25TY3JvbGwiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiTWFwIiwiY3VyckVsZW0iLCJjdXJyRWxlbURhdGEiLCJ0aHJlc2hvbGRBcnJheSIsInN0ZXBzIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiY3VyIiwiXyIsImluZGV4IiwidG9nZ2xlQ3VycmVudEVsZW1lbnQiLCJzaG93IiwiZWxlbURhdGEiLCJlbGVtIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGVJbkR1cmF0aW9uIiwiYW5pbWF0ZU91dER1cmF0aW9uIiwiYW5pbWF0ZUR1cmF0aW9uIiwiY2xhc3NUb1JlbW92ZSIsImNsYXNzVG9BZGQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZXJDYWxsYmFjayIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwid3JhcHBlckVsZW0iLCJ0YXJnZXQiLCJnZXQiLCJhbmltYXRlT25Mb2FkVmlzaWJsZSIsImlzU2hvd24iLCJwcmV2WSIsInByZXZSYXRpbyIsImN1cnJZIiwiYm91bmRpbmdDbGllbnRSZWN0IiwieSIsImN1cnJSYXRpbyIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJzY3JvbGxpbmdEaXJlY3Rpb24iLCJkb0FuaW1hdGVJbiIsInNldCIsIm9ic2VydmVyT3B0aW9ucyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJ3cmFwIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoIiwiYXBwZW5kQ2hpbGQiLCJwcmVwYXJlIiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsIm9ic2VydmUiLCJpbml0T2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImFuaW1hdGUiLCJzZWxlY3RvcnMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==