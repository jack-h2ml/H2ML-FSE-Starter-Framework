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


const scrollObserver = (selector, option) => {
  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      window.requestIdleCallback(() => {
        let showCount = 0;
        if (option?.once) {
          if (showCount === 0 && entry.isIntersecting) {
            entry.target.classList.add('shown');
            option.onshow ? option.onshow(entry) : false;
            showCount++;
          }
        } else {
          if (entry.isIntersecting) {
            if (entry.target.dataset.animatein) {
              entry.target.classList.add(entry.target.dataset.animatein);
            }
            if (option && option.onshow) option.onshow(entry);
          } else {
            if (entry.target.dataset.animatein) {
              entry.target.classList.remove(entry.target.dataset.animatein);
            }
            if (option && option.onhide) option.onhide(entry);
          }
        }
      });
    });
  }, option);
  if (Array.isArray(selector)) selector.forEach(qAll);else qAll(selector);
  function qAll(selector) {
    const item = document.querySelectorAll(selector);
    item.forEach(i => observer.observe(i));
  }
};
document.addEventListener('DOMContentLoaded', () => {
  scrollObserver('[data-animate]');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRXFDO0FBRXJDLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxRQUFRLEVBQUVDLE1BQU0sS0FBSztFQUN6QyxJQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQW9CLENBQUVDLE9BQU8sSUFBSztJQUNqREEsT0FBTyxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBSTtNQUNyQkMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxNQUFNO1FBQzdCLElBQUlDLFNBQVMsR0FBRyxDQUFDO1FBQ2pCLElBQUlSLE1BQU0sRUFBRVMsSUFBSSxFQUFFO1VBQ2QsSUFBSUQsU0FBUyxLQUFLLENBQUMsSUFBSUgsS0FBSyxDQUFDSyxjQUFjLEVBQUU7WUFDekNMLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbkNiLE1BQU0sQ0FBQ2MsTUFBTSxHQUFHZCxNQUFNLENBQUNjLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDLEdBQUcsS0FBSztZQUM1Q0csU0FBUyxFQUFFO1VBQ2Y7UUFDSixDQUFDLE1BQ0k7VUFDRCxJQUFJSCxLQUFLLENBQUNLLGNBQWMsRUFBRTtZQUN4QyxJQUFHTCxLQUFLLENBQUNNLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxTQUFTLEVBQUU7Y0FDbENYLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSyxDQUFDTSxNQUFNLENBQUNJLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDO1lBQzNEO1lBQ2tCLElBQUloQixNQUFNLElBQUlBLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFZCxNQUFNLENBQUNjLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDO1VBQ3JELENBQUMsTUFDSTtZQUNELElBQUdBLEtBQUssQ0FBQ00sTUFBTSxDQUFDSSxPQUFPLENBQUNDLFNBQVMsRUFBRTtjQUNwRFgsS0FBSyxDQUFDTSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDWixLQUFLLENBQUNNLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxTQUFTLENBQUM7WUFDOUQ7WUFDa0IsSUFBSWhCLE1BQU0sSUFBSUEsTUFBTSxDQUFDa0IsTUFBTSxFQUFFbEIsTUFBTSxDQUFDa0IsTUFBTSxDQUFDYixLQUFLLENBQUM7VUFDckQ7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsRUFBRUwsTUFBTSxDQUFDO0VBRVYsSUFBSW1CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDckIsUUFBUSxDQUFDLEVBQ3ZCQSxRQUFRLENBQUNLLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQyxNQUV0QkEsSUFBSSxDQUFDdEIsUUFBUSxDQUFDO0VBR2xCLFNBQVNzQixJQUFJLENBQUN0QixRQUFRLEVBQUU7SUFDcEIsTUFBTXVCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ3pCLFFBQVEsQ0FBQztJQUNoRHVCLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ3FCLENBQUMsSUFBSXhCLFFBQVEsQ0FBQ3lCLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDLENBQUM7RUFDMUM7QUFDSixDQUFDO0FBRURGLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNuRDdCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogVGVzdGluZ1xuICovXG5cbmltcG9ydCBcImFuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzc1wiO1xuXG5jb25zdCBzY3JvbGxPYnNlcnZlciA9IChzZWxlY3Rvciwgb3B0aW9uKSA9PiB7XG4gICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNob3dDb3VudCA9IDBcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uPy5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG93Q291bnQgPT09IDAgJiYgZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93bicpXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ub25zaG93ID8gb3B0aW9uLm9uc2hvdyhlbnRyeSkgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NvdW50KytcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0XHRpZihlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlaW4pIHtcblx0XHRcdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoZW50cnkudGFyZ2V0LmRhdGFzZXQuYW5pbWF0ZWluKTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLm9uc2hvdykgb3B0aW9uLm9uc2hvdyhlbnRyeSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJ5LnRhcmdldC5kYXRhc2V0LmFuaW1hdGVpbikge1xuXHRcdFx0XHRcdFx0XHRlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShlbnRyeS50YXJnZXQuZGF0YXNldC5hbmltYXRlaW4pO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24ub25oaWRlKSBvcHRpb24ub25oaWRlKGVudHJ5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LCBvcHRpb24pXG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpXG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2gocUFsbClcbiAgICBlbHNlXG4gICAgICAgIHFBbGwoc2VsZWN0b3IpXG5cblxuICAgIGZ1bmN0aW9uIHFBbGwoc2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIGl0ZW0uZm9yRWFjaChpID0+IG9ic2VydmVyLm9ic2VydmUoaSkpXG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRzY3JvbGxPYnNlcnZlcignW2RhdGEtYW5pbWF0ZV0nKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNjcm9sbE9ic2VydmVyIiwic2VsZWN0b3IiLCJvcHRpb24iLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsIndpbmRvdyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzaG93Q291bnQiLCJvbmNlIiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbnNob3ciLCJkYXRhc2V0IiwiYW5pbWF0ZWluIiwicmVtb3ZlIiwib25oaWRlIiwiQXJyYXkiLCJpc0FycmF5IiwicUFsbCIsIml0ZW0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwib2JzZXJ2ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9