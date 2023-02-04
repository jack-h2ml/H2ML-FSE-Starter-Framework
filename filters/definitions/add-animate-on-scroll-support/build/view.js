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
          if (entry.isIntersecting) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRXFDO0FBRXJDLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0VBQzVCO0VBQ0EsQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFFQyxPQUFPLElBQUs7SUFDakRBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLElBQUk7TUFDeEJDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsTUFBTTtRQUNoQztRQUNBLElBQUlGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsRUFBRTtVQUNyQyxJQUFJLENBQUNMLEtBQUssQ0FBQ0csTUFBTSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDLEVBQUU7WUFDaEVSLEtBQUssQ0FBQ0csTUFBTSxDQUFDRyxTQUFTLENBQUNHLEdBQUcsQ0FBQ1QsS0FBSyxDQUFDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0ksU0FBUyxDQUFDO1VBQzNEO1FBQ0QsQ0FBQyxNQUFNO1VBQ04sSUFBSVIsS0FBSyxDQUFDVSxjQUFjLEVBQUU7WUFDekJWLEtBQUssQ0FBQ0csTUFBTSxDQUFDRyxTQUFTLENBQUNLLE1BQU0sQ0FBQ1gsS0FBSyxDQUFDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1EsVUFBVSxDQUFDO1lBQzlEWixLQUFLLENBQUNHLE1BQU0sQ0FBQ0csU0FBUyxDQUFDRyxHQUFHLENBQUNULEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxPQUFPLENBQUNJLFNBQVMsQ0FBQztVQUMzRCxDQUFDLE1BQ0k7WUFDSlIsS0FBSyxDQUFDRyxNQUFNLENBQUNHLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDWCxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSSxTQUFTLENBQUM7WUFDN0RSLEtBQUssQ0FBQ0csTUFBTSxDQUFDRyxTQUFTLENBQUNHLEdBQUcsQ0FBQ1QsS0FBSyxDQUFDRyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1EsVUFBVSxDQUFDO1VBQzVEO1FBQ0Q7TUFDRCxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFDSCxDQUFDLEVBQUU7SUFDRkMsU0FBUyxFQUFFO0VBQ1osQ0FBQyxDQUFDO0VBQ0Y7RUFDQSxDQUFDQyxPQUFPLEdBQUlDLFFBQVEsSUFBSztJQUN4QkMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0YsUUFBUSxDQUFDLENBQUNoQixPQUFPLENBQUNtQixJQUFJLElBQUksSUFBSSxDQUFDLENBQUN0QixRQUFRLENBQUNrQixPQUFPLENBQUNJLElBQUksQ0FBQyxDQUFDO0VBQ2xGLENBQUM7RUFDRDtFQUNBQyxXQUFXLENBQUNKLFFBQVEsRUFBRUssTUFBTSxFQUFFO0lBQzdCLElBQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUCxRQUFRLENBQUMsRUFBRTtNQUMzQkEsUUFBUSxDQUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDZSxPQUFPLENBQUM7SUFDaEMsQ0FBQyxNQUFNO01BQ04sSUFBSSxDQUFDLENBQUNBLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO0lBQ3hCO0VBQ0Q7QUFDRCxDQUFDO0FBRURDLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNuRCxJQUFJNUIsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBUZXN0aW5nXG4gKi9cblxuaW1wb3J0IFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzXCI7XG5cbmNvbnN0IHNjcm9sbE9ic2VydmVyID0gY2xhc3Mge1xuXHQvL1xuXHQjb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcblx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0d2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4ge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGVudHJ5KVxuXHRcdFx0XHRpZiAoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZU9uY2UpIHtcblx0XHRcdFx0XHRpZiAoIWVudHJ5LnRhcmdldC5jbGFzc0xpc3QuaGFzKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbikpIHtcblx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlb3V0KTtcblx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKTtcblx0XHRcdFx0XHRcdGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVvdXQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sIHtcblx0XHR0aHJlc2hvbGQ6IDAuMjVcblx0fSk7XG5cdC8vXG5cdCNvYnNlcnZlID0gKHNlbGVjdG9yKSA9PiB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaChlbGVtID0+IHRoaXMuI29ic2VydmVyLm9ic2VydmUoZWxlbSkpXG5cdH1cblx0Ly9cblx0Y29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbikge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRzZWxlY3Rvci5mb3JFYWNoKHRoaXMuI29ic2VydmUpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuI29ic2VydmUoc2VsZWN0b3IpXG5cdFx0fVxuXHR9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG5ldyBzY3JvbGxPYnNlcnZlcignW2RhdGEtYW5pbWF0ZV0nKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNjcm9sbE9ic2VydmVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJ3aW5kb3ciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwidGFyZ2V0IiwiZGF0YXNldCIsImFuaW1hdGVPbmNlIiwiY2xhc3NMaXN0IiwiaGFzIiwiYW5pbWF0ZWluIiwiYWRkIiwiaXNJbnRlcnNlY3RpbmciLCJyZW1vdmUiLCJhbmltYXRlb3V0IiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImNvbnN0cnVjdG9yIiwib3B0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=