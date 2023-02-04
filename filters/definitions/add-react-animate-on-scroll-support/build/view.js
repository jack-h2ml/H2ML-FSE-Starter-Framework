/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
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
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/**
 * Testing
 */


const scrollObserver = class {
  //
  #observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      window.requestIdleCallback(() => {
        if (entry.target.dataset.animateOnce) {
          if (!entry.target.classList.has(entry.target.dataset.animatein)) {
            entry.target.classList.add(entry.target.dataset.animatein);
            option.onshow ? option.onshow(entry) : false;
            showCount++;
          }
        } else {
          if (entry.isIntersecting) {
            if (entry.target.dataset.animatein) {
              entry.target.classList.remove(entry.target.dataset.animateout);
              entry.target.classList.add(entry.target.dataset.animatein);
            }
          } else {
            if (entry.target.dataset.animatein) {
              entry.target.classList.remove(entry.target.dataset.animatein);
              entry.target.classList.add(entry.target.dataset.animateout);
            }
          }
        }
      });
    });
  }, {
    threshold: 0.25
  });
  //
  #observe = selector => {
    document.querySelectorAll(selector).forEach(elem => this.#observer.observe(elem));
  };
  //
  constructor(selector, option) {
    if (Array.isArray(selector)) {
      selector.forEach(this.#observe);
    } else {
      this.#observe(selector);
    }
  }
};
document.addEventListener('DOMContentLoaded', () => {
  new scrollObserver('[data-animate]');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDeEI7RUFDRDtBQUNELENBQUM7QUFFREMsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ25ELElBQUk5QixjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFDckMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFRlc3RpbmdcbiAqL1xuXG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIjtcblxuY29uc3Qgc2Nyb2xsT2JzZXJ2ZXIgPSBjbGFzcyB7XG5cdC8vXG5cdCNvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRcdGlmIChlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlT25jZSkge1xuXHRcdFx0XHRcdGlmICghZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5oYXMoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKSkge1xuXHRcdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKVxuXHRcdFx0XHRcdFx0b3B0aW9uLm9uc2hvdyA/IG9wdGlvbi5vbnNob3coZW50cnkpIDogZmFsc2Vcblx0XHRcdFx0XHRcdHNob3dDb3VudCsrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuXHRcdFx0XHRcdFx0aWYoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKSB7XG5cdFx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVvdXQpO1xuXHRcdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlaW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbikge1xuXHRcdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlaW4pO1xuXHRcdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlb3V0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LCB7XG5cdFx0dGhyZXNob2xkOiAwLjI1XG5cdH0pO1xuXHQvL1xuXHQjb2JzZXJ2ZSA9IChzZWxlY3RvcikgPT4ge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goZWxlbSA9PiB0aGlzLiNvYnNlcnZlci5vYnNlcnZlKGVsZW0pKVxuXHR9XG5cdC8vXG5cdGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb24pIHtcblx0XHRpZihBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuXHRcdFx0c2VsZWN0b3IuZm9yRWFjaCh0aGlzLiNvYnNlcnZlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiNvYnNlcnZlKHNlbGVjdG9yKVxuXHRcdH1cblx0fVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRuZXcgc2Nyb2xsT2JzZXJ2ZXIoJ1tkYXRhLWFuaW1hdGVdJyk7XG59KTtcbiJdLCJuYW1lcyI6WyJzY3JvbGxPYnNlcnZlciIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5Iiwid2luZG93IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInRhcmdldCIsImRhdGFzZXQiLCJhbmltYXRlT25jZSIsImNsYXNzTGlzdCIsImhhcyIsImFuaW1hdGVpbiIsImFkZCIsIm9wdGlvbiIsIm9uc2hvdyIsInNob3dDb3VudCIsImlzSW50ZXJzZWN0aW5nIiwicmVtb3ZlIiwiYW5pbWF0ZW91dCIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwiaXNBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9