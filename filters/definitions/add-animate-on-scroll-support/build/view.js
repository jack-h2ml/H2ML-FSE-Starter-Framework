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
        //console.log(entry)
        if (entry.target.dataset.animateOnce) {
          if (!entry.target.classList.has(entry.target.dataset.animatein)) {
            entry.target.classList.add(entry.target.dataset.animatein);
          }
        } else {
          if (entry.intersectionRect.x) {
            entry.target.classList.remove(entry.target.dataset.animateout);
            entry.target.classList.add(entry.target.dataset.animatein);
          } else {
            entry.target.classList.remove(entry.target.dataset.animatein);
            entry.target.classList.add(entry.target.dataset.animateout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFRlc3RpbmdcbiAqL1xuXG5pbXBvcnQgXCJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3NcIjtcblxuY29uc3Qgc2Nyb2xsT2JzZXJ2ZXIgPSBjbGFzcyB7XG5cdC8vXG5cdCNvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuXHRcdGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2coZW50cnkpXG5cdFx0XHRcdGlmIChlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlT25jZSkge1xuXHRcdFx0XHRcdGlmICghZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5oYXMoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKSkge1xuXHRcdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmVjdC54KSB7XG5cdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlb3V0KTtcblx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKTtcblx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVvdXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sIHtcblx0XHR0aHJlc2hvbGQ6IDAuMjVcblx0fSk7XG5cdC8vXG5cdCNvYnNlcnZlID0gKHNlbGVjdG9yKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaChlbGVtID0+IHRoaXMuI29ic2VydmVyLm9ic2VydmUoZWxlbSkpXG5cdH1cblx0Ly9cblx0Y29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbikge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRzZWxlY3Rvci5mb3JFYWNoKHRoaXMuI29ic2VydmUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI29ic2VydmUoc2VsZWN0b3IpXG5cdFx0fVxuXHR9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG5ldyBzY3JvbGxPYnNlcnZlcignW2RhdGEtYW5pbWF0ZV0nKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNjcm9sbE9ic2VydmVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwidGFyZ2V0IiwiZGF0YXNldCIsImFuaW1hdGVPbmNlIiwiY2xhc3NMaXN0IiwiaGFzIiwiYW5pbWF0ZWluIiwiYWRkIiwiaW50ZXJzZWN0aW9uUmVjdCIsIngiLCJyZW1vdmUiLCJhbmltYXRlb3V0IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImNvbnN0cnVjdG9yIiwib3B0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=