/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/monitorBreakpoints/index.js":
/*!*****************************************!*\
  !*** ./src/monitorBreakpoints/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2mlMonitorBreakpoints": () => (/* binding */ H2mlMonitorBreakpoints)
/* harmony export */ });
class H2mlMonitorBreakpoints {
  //
  static #decodeBreakpointDefinition = encodedBreakpointDefinition => JSON.parse(atob(encodedBreakpointDefinition));
  //
  static #grids = new Map();
  static #Grid = class {
    //
    addToMediaQueriesConstuctorArray(mediaQueriesConstuctorArray) {
      this.decodedBreakpoints.forEach(_ref => {
        let [mediaQueryString] = _ref;
        const breakpointDefinedIndex = mediaQueriesConstuctorArray.findIndex(_ref2 => {
          let [existingMediaQueryString] = _ref2;
          return existingMediaQueryString === mediaQueryString;
        });
        if (breakpointDefinedIndex < 0) {
          mediaQueriesConstuctorArray.push([mediaQueryString, [this.elem]]);
        } else {
          mediaQueriesConstuctorArray[breakpointDefinedIndex][1].push(this.elem);
        }
      });
      return this;
    }
    //
    #currentPrecedence = null;
    #doUpdate() {
      const [mediaQueryString, breakpointDefiniton] = this.decodedBreakpoints[this.#currentPrecedence];
      //
      Object.entries(breakpointDefiniton).forEach(_ref3 => {
        let [property, value] = _ref3;
        this.elem.style[property] = value;
      });
      //
      this.children.forEach(_ref4 => {
        let [child, childBreakpointDefinitions] = _ref4;
        const childBreakPointDefinition = childBreakpointDefinitions[mediaQueryString];
        if (childBreakPointDefinition) {
          child.style.gridArea = childBreakPointDefinition.coords;
          child.style.display = 'flex';
        } else {
          child.style.display = 'none';
        }
      });
    }
    maybeUpdate(mediaQueryString, matches) {
      let breakpointIndex = this.decodedBreakpoints.findIndex(_ref5 => {
        let [thisMediaQueryString] = _ref5;
        return thisMediaQueryString === mediaQueryString;
      });
      if (!matches) while (breakpointIndex > 0 && !window.matchMedia(this.decodedBreakpoints[--breakpointIndex]).matches);
      if (this.#currentPrecedence !== breakpointIndex) {
        this.#currentPrecedence = breakpointIndex;
        this.#doUpdate();
      }
    }
    //
    constructor(elem) {
      //
      Object.assign(this, {
        elem,
        decodedBreakpoints: H2mlMonitorBreakpoints.#decodeBreakpointDefinition(elem.dataset.breakpointDefinitions),
        children: [...elem.children].map(child => [child, H2mlMonitorBreakpoints.#decodeBreakpointDefinition(child.dataset.breakpointDefinitions)])
      });
    }
  };
  //
  static #mediaQueryEvent = e => {
    const {
      media,
      matches,
      target
    } = e;
    //
    H2mlMonitorBreakpoints.#mediaQueries.get(target).forEach(gridElem => {
      H2mlMonitorBreakpoints.#grids.get(gridElem).maybeUpdate(media, matches);
    });
  };
  //
  static #mediaQueries = new Map();
  static #activeMediaQueries = parsedMediaQueries => {
    parsedMediaQueries.forEach(_ref6 => {
      let [mediaQueryString, grids] = _ref6;
      const mediaQueryList = window.matchMedia(mediaQueryString);
      H2mlMonitorBreakpoints.#mediaQueries.set(mediaQueryList, grids);
      //
      mediaQueryList.addEventListener('change', H2mlMonitorBreakpoints.#mediaQueryEvent);
      if (mediaQueryList.matches) H2mlMonitorBreakpoints.#mediaQueryEvent({
        media: mediaQueryString,
        matches: mediaQueryList.matches,
        target: mediaQueryList
      });
    });
  };
  //
  static #parseGrids = function () {
    for (var _len = arguments.length, elems = new Array(_len), _key = 0; _key < _len; _key++) {
      elems[_key] = arguments[_key];
    }
    return elems.reduce((mediaQueriesConstuctorArray, elem) => {
      H2mlMonitorBreakpoints.#grids.set(elem, new H2mlMonitorBreakpoints.#Grid(elem).addToMediaQueriesConstuctorArray(mediaQueriesConstuctorArray));
      return mediaQueriesConstuctorArray;
    }, []);
  };
  //
  static monitor = e => {
    H2mlMonitorBreakpoints.#activeMediaQueries(H2mlMonitorBreakpoints.#parseGrids(...document.querySelectorAll('.wp-block-h2ml-grid[data-breakpoint-definitions]')));
  };
}

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
/* harmony import */ var _monitorBreakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitorBreakpoints */ "./src/monitorBreakpoints/index.js");

document.addEventListener('DOMContentLoaded', _monitorBreakpoints__WEBPACK_IMPORTED_MODULE_0__.H2mlMonitorBreakpoints.monitor);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtELENBQUMsQ0FBQyxDQUNwSDtFQUNGLENBQUM7QUFDRjs7Ozs7O1VDekdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEQ7QUFFNURELFFBQVEsQ0FBQ0wsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUV4RCwrRUFBOEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9tb25pdG9yQnJlYWtwb2ludHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSDJtbE1vbml0b3JCcmVha3BvaW50cyB7XG5cdC8vXG5cdHN0YXRpYyAjZGVjb2RlQnJlYWtwb2ludERlZmluaXRpb24gPSAoZW5jb2RlZEJyZWFrcG9pbnREZWZpbml0aW9uKSA9PiBKU09OLnBhcnNlKGF0b2IoZW5jb2RlZEJyZWFrcG9pbnREZWZpbml0aW9uKSk7XG5cdC8vXG5cdHN0YXRpYyAjZ3JpZHMgPSBuZXcgTWFwKCk7XG5cdHN0YXRpYyAjR3JpZCA9IGNsYXNzIHtcblx0XHQvL1xuXHRcdGFkZFRvTWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSkge1xuXHRcdFx0dGhpcy5kZWNvZGVkQnJlYWtwb2ludHMuZm9yRWFjaCgoW21lZGlhUXVlcnlTdHJpbmddKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJyZWFrcG9pbnREZWZpbmVkSW5kZXggPSBtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkuZmluZEluZGV4KChbZXhpc3RpbmdNZWRpYVF1ZXJ5U3RyaW5nXSkgPT4gZXhpc3RpbmdNZWRpYVF1ZXJ5U3RyaW5nID09PSBtZWRpYVF1ZXJ5U3RyaW5nKTtcblx0XHRcdFx0aWYoYnJlYWtwb2ludERlZmluZWRJbmRleCA8IDApIHtcblx0XHRcdFx0XHRtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkucHVzaChbXG5cdFx0XHRcdFx0XHRtZWRpYVF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRcdFx0W3RoaXMuZWxlbV1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXlbYnJlYWtwb2ludERlZmluZWRJbmRleF1bMV0ucHVzaCh0aGlzLmVsZW0pXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdC8vXG5cdFx0I2N1cnJlbnRQcmVjZWRlbmNlID0gbnVsbDtcblx0XHQjZG9VcGRhdGUoKSB7XHRcblx0XHRcdGNvbnN0IFtcblx0XHRcdFx0bWVkaWFRdWVyeVN0cmluZyxcblx0XHRcdFx0YnJlYWtwb2ludERlZmluaXRvblxuXHRcdFx0XSA9IHRoaXMuZGVjb2RlZEJyZWFrcG9pbnRzW3RoaXMuI2N1cnJlbnRQcmVjZWRlbmNlXTtcblx0XHRcdC8vXG5cdFx0XHRPYmplY3QuZW50cmllcyhicmVha3BvaW50RGVmaW5pdG9uKS5mb3JFYWNoKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuXHRcdFx0XHR0aGlzLmVsZW0uc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vXG5cdFx0XHR0aGlzLmNoaWxkcmVuLmZvckVhY2goKFtjaGlsZCwgY2hpbGRCcmVha3BvaW50RGVmaW5pdGlvbnNdKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNoaWxkQnJlYWtQb2ludERlZmluaXRpb24gPSBjaGlsZEJyZWFrcG9pbnREZWZpbml0aW9uc1ttZWRpYVF1ZXJ5U3RyaW5nXTtcblx0XHRcdFx0aWYoY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbikge1xuXHRcdFx0XHRcdGNoaWxkLnN0eWxlLmdyaWRBcmVhID0gY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbi5jb29yZHM7XG5cdFx0XHRcdFx0Y2hpbGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0XHRtYXliZVVwZGF0ZShtZWRpYVF1ZXJ5U3RyaW5nLCBtYXRjaGVzKSB7XG5cdFx0XHRsZXQgYnJlYWtwb2ludEluZGV4ID0gdGhpcy5kZWNvZGVkQnJlYWtwb2ludHMuZmluZEluZGV4KChbdGhpc01lZGlhUXVlcnlTdHJpbmddKSA9PiB0aGlzTWVkaWFRdWVyeVN0cmluZyA9PT0gbWVkaWFRdWVyeVN0cmluZyk7XG5cdFx0XHRpZighbWF0Y2hlcykgd2hpbGUoYnJlYWtwb2ludEluZGV4ID4gMCAmJiAhd2luZG93Lm1hdGNoTWVkaWEodGhpcy5kZWNvZGVkQnJlYWtwb2ludHNbLS1icmVha3BvaW50SW5kZXhdKS5tYXRjaGVzKTtcblx0XHRcdGlmKHRoaXMuI2N1cnJlbnRQcmVjZWRlbmNlICE9PSBicmVha3BvaW50SW5kZXgpIHtcblx0XHRcdFx0dGhpcy4jY3VycmVudFByZWNlZGVuY2UgPSBicmVha3BvaW50SW5kZXg7XG5cdFx0XHRcdHRoaXMuI2RvVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vXG5cdFx0Y29uc3RydWN0b3IoZWxlbSkge1xuXHRcdFx0Ly9cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywge1xuXHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRkZWNvZGVkQnJlYWtwb2ludHM6IEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2RlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uKGVsZW0uZGF0YXNldC5icmVha3BvaW50RGVmaW5pdGlvbnMpLFxuXHRcdFx0XHRjaGlsZHJlbjogWy4uLmVsZW0uY2hpbGRyZW5dLm1hcChjaGlsZCA9PiBbXG5cdFx0XHRcdFx0Y2hpbGQsXG5cdFx0XHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jZGVjb2RlQnJlYWtwb2ludERlZmluaXRpb24oY2hpbGQuZGF0YXNldC5icmVha3BvaW50RGVmaW5pdGlvbnMpXG5cdFx0XHRcdF0pXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Ly9cblx0c3RhdGljICNtZWRpYVF1ZXJ5RXZlbnQgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhLCBcblx0XHRcdG1hdGNoZXMsIFxuXHRcdFx0dGFyZ2V0XG5cdFx0fSA9IGU7XG5cdFx0Ly9cblx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJpZXMuZ2V0KHRhcmdldCkuZm9yRWFjaChncmlkRWxlbSA9PiB7XG5cdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNncmlkcy5nZXQoZ3JpZEVsZW0pLm1heWJlVXBkYXRlKG1lZGlhLCBtYXRjaGVzKTtcblx0XHR9KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI21lZGlhUXVlcmllcyA9IG5ldyBNYXAoKTtcblx0c3RhdGljICNhY3RpdmVNZWRpYVF1ZXJpZXMgPSAocGFyc2VkTWVkaWFRdWVyaWVzKSA9PiB7XG5cdFx0cGFyc2VkTWVkaWFRdWVyaWVzLmZvckVhY2goKFttZWRpYVF1ZXJ5U3RyaW5nLCBncmlkc10pID0+IHtcblx0XHRcdGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeVN0cmluZyk7XG5cdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJpZXMuc2V0KG1lZGlhUXVlcnlMaXN0LCBncmlkcyk7XG5cdFx0XHQvL1xuXHRcdFx0bWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgSDJtbE1vbml0b3JCcmVha3BvaW50cy4jbWVkaWFRdWVyeUV2ZW50KTtcblx0XHRcdGlmKG1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIEgybWxNb25pdG9yQnJlYWtwb2ludHMuI21lZGlhUXVlcnlFdmVudCh7XG5cdFx0XHRcdG1lZGlhOiBtZWRpYVF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRtYXRjaGVzOiBtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzLFxuXHRcdFx0XHR0YXJnZXQ6IG1lZGlhUXVlcnlMaXN0XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cdC8vXG5cdHN0YXRpYyAjcGFyc2VHcmlkcyA9ICguLi5lbGVtcykgPT4gZWxlbXMucmVkdWNlKChtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXksIGVsZW0pID0+IHtcblx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNncmlkcy5zZXQoXG5cdFx0XHRlbGVtLCBcblx0XHRcdG5ldyBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNHcmlkKGVsZW0pLmFkZFRvTWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSlcblx0XHQpO1xuXHRcdHJldHVybiBtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXk7XG5cdH0sIFtdKTtcblx0Ly9cblx0c3RhdGljIG1vbml0b3IgPSAoZSkgPT4ge1x0XG5cdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jYWN0aXZlTWVkaWFRdWVyaWVzKFxuXHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jcGFyc2VHcmlkcyguLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2staDJtbC1ncmlkW2RhdGEtYnJlYWtwb2ludC1kZWZpbml0aW9uc10nKSlcblx0XHQpO1xuXHR9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0gybWxNb25pdG9yQnJlYWtwb2ludHN9IGZyb20gJy4vbW9uaXRvckJyZWFrcG9pbnRzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEgybWxNb25pdG9yQnJlYWtwb2ludHMubW9uaXRvcikiXSwibmFtZXMiOlsiSDJtbE1vbml0b3JCcmVha3BvaW50cyIsImRlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uIiwiZW5jb2RlZEJyZWFrcG9pbnREZWZpbml0aW9uIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsImdyaWRzIiwiTWFwIiwiR3JpZCIsImFkZFRvTWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5IiwibWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5IiwiZGVjb2RlZEJyZWFrcG9pbnRzIiwiZm9yRWFjaCIsIm1lZGlhUXVlcnlTdHJpbmciLCJicmVha3BvaW50RGVmaW5lZEluZGV4IiwiZmluZEluZGV4IiwiZXhpc3RpbmdNZWRpYVF1ZXJ5U3RyaW5nIiwicHVzaCIsImVsZW0iLCJjdXJyZW50UHJlY2VkZW5jZSIsImRvVXBkYXRlIiwiYnJlYWtwb2ludERlZmluaXRvbiIsIk9iamVjdCIsImVudHJpZXMiLCJwcm9wZXJ0eSIsInZhbHVlIiwic3R5bGUiLCJjaGlsZHJlbiIsImNoaWxkIiwiY2hpbGRCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uIiwiZ3JpZEFyZWEiLCJjb29yZHMiLCJkaXNwbGF5IiwibWF5YmVVcGRhdGUiLCJtYXRjaGVzIiwiYnJlYWtwb2ludEluZGV4IiwidGhpc01lZGlhUXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY29uc3RydWN0b3IiLCJhc3NpZ24iLCJkYXRhc2V0IiwiYnJlYWtwb2ludERlZmluaXRpb25zIiwibWFwIiwibWVkaWFRdWVyeUV2ZW50IiwiZSIsIm1lZGlhIiwidGFyZ2V0IiwibWVkaWFRdWVyaWVzIiwiZ2V0IiwiZ3JpZEVsZW0iLCJhY3RpdmVNZWRpYVF1ZXJpZXMiLCJwYXJzZWRNZWRpYVF1ZXJpZXMiLCJtZWRpYVF1ZXJ5TGlzdCIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJzZUdyaWRzIiwiZWxlbXMiLCJyZWR1Y2UiLCJtb25pdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==