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
      console.log(elem.dataset.breakpointDefinitions, atob(elem.dataset.breakpointDefinitions));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sR0FBSWQsQ0FBQyxJQUFLO0lBQ3ZCaEQsc0JBQXNCLENBQUMsQ0FBQ3NELGtCQUFrQixDQUN6Q3RELHNCQUFzQixDQUFDLENBQUMyRCxVQUFVLENBQUMsR0FBR0ksUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQ3BIO0VBQ0YsQ0FBQztBQUNGOzs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040RDtBQUU1REQsUUFBUSxDQUFDTCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTFELCtFQUE4QixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL21vbml0b3JCcmVha3BvaW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIMm1sTW9uaXRvckJyZWFrcG9pbnRzIHtcblx0Ly9cblx0c3RhdGljICNkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbiA9IChlbmNvZGVkQnJlYWtwb2ludERlZmluaXRpb24pID0+IEpTT04ucGFyc2UoYXRvYihlbmNvZGVkQnJlYWtwb2ludERlZmluaXRpb24pKTtcblx0Ly9cblx0c3RhdGljICNncmlkcyA9IG5ldyBNYXAoKTtcblx0c3RhdGljICNHcmlkID0gY2xhc3Mge1xuXHRcdC8vXG5cdFx0YWRkVG9NZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkobWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KSB7XG5cdFx0XHR0aGlzLmRlY29kZWRCcmVha3BvaW50cy5mb3JFYWNoKChbbWVkaWFRdWVyeVN0cmluZ10pID0+IHtcblx0XHRcdFx0Y29uc3QgYnJlYWtwb2ludERlZmluZWRJbmRleCA9IG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheS5maW5kSW5kZXgoKFtleGlzdGluZ01lZGlhUXVlcnlTdHJpbmddKSA9PiBleGlzdGluZ01lZGlhUXVlcnlTdHJpbmcgPT09IG1lZGlhUXVlcnlTdHJpbmcpO1xuXHRcdFx0XHRpZihicmVha3BvaW50RGVmaW5lZEluZGV4IDwgMCkge1xuXHRcdFx0XHRcdG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheS5wdXNoKFtcblx0XHRcdFx0XHRcdG1lZGlhUXVlcnlTdHJpbmcsXG5cdFx0XHRcdFx0XHRbdGhpcy5lbGVtXVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheVticmVha3BvaW50RGVmaW5lZEluZGV4XVsxXS5wdXNoKHRoaXMuZWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0Ly9cblx0XHQjY3VycmVudFByZWNlZGVuY2UgPSBudWxsO1xuXHRcdCNkb1VwZGF0ZSgpIHtcdFxuXHRcdFx0Y29uc3QgW1xuXHRcdFx0XHRtZWRpYVF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRicmVha3BvaW50RGVmaW5pdG9uXG5cdFx0XHRdID0gdGhpcy5kZWNvZGVkQnJlYWtwb2ludHNbdGhpcy4jY3VycmVudFByZWNlZGVuY2VdO1xuXHRcdFx0Ly9cblx0XHRcdE9iamVjdC5lbnRyaWVzKGJyZWFrcG9pbnREZWZpbml0b24pLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9cblx0XHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoW2NoaWxkLCBjaGlsZEJyZWFrcG9pbnREZWZpbml0aW9uc10pID0+IHtcblx0XHRcdFx0Y29uc3QgY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbiA9IGNoaWxkQnJlYWtwb2ludERlZmluaXRpb25zW21lZGlhUXVlcnlTdHJpbmddO1xuXHRcdFx0XHRpZihjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0Y2hpbGQuc3R5bGUuZ3JpZEFyZWEgPSBjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uLmNvb3Jkcztcblx0XHRcdFx0XHRjaGlsZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdG1heWJlVXBkYXRlKG1lZGlhUXVlcnlTdHJpbmcsIG1hdGNoZXMpIHtcblx0XHRcdGxldCBicmVha3BvaW50SW5kZXggPSB0aGlzLmRlY29kZWRCcmVha3BvaW50cy5maW5kSW5kZXgoKFt0aGlzTWVkaWFRdWVyeVN0cmluZ10pID0+IHRoaXNNZWRpYVF1ZXJ5U3RyaW5nID09PSBtZWRpYVF1ZXJ5U3RyaW5nKTtcblx0XHRcdGlmKCFtYXRjaGVzKSB3aGlsZShicmVha3BvaW50SW5kZXggPiAwICYmICF3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmRlY29kZWRCcmVha3BvaW50c1stLWJyZWFrcG9pbnRJbmRleF0pLm1hdGNoZXMpO1xuXHRcdFx0aWYodGhpcy4jY3VycmVudFByZWNlZGVuY2UgIT09IGJyZWFrcG9pbnRJbmRleCkge1xuXHRcdFx0XHR0aGlzLiNjdXJyZW50UHJlY2VkZW5jZSA9IGJyZWFrcG9pbnRJbmRleDtcblx0XHRcdFx0dGhpcy4jZG9VcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9cblx0XHRjb25zdHJ1Y3RvcihlbGVtKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0ZWxlbS5kYXRhc2V0LmJyZWFrcG9pbnREZWZpbml0aW9ucyxcblx0XHRcdFx0YXRvYihlbGVtLmRhdGFzZXQuYnJlYWtwb2ludERlZmluaXRpb25zKVxuXHRcdFx0KTtcblx0XHRcdC8vXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHtcblx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0ZGVjb2RlZEJyZWFrcG9pbnRzOiBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbihlbGVtLmRhdGFzZXQuYnJlYWtwb2ludERlZmluaXRpb25zKSxcblx0XHRcdFx0Y2hpbGRyZW46IFsuLi5lbGVtLmNoaWxkcmVuXS5tYXAoY2hpbGQgPT4gW1xuXHRcdFx0XHRcdGNoaWxkLFxuXHRcdFx0XHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2RlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uKGNoaWxkLmRhdGFzZXQuYnJlYWtwb2ludERlZmluaXRpb25zKVxuXHRcdFx0XHRdKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdC8vXG5cdHN0YXRpYyAjbWVkaWFRdWVyeUV2ZW50ID0gKGUpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRtZWRpYSwgXG5cdFx0XHRtYXRjaGVzLCBcblx0XHRcdHRhcmdldFxuXHRcdH0gPSBlO1xuXHRcdC8vXG5cdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jbWVkaWFRdWVyaWVzLmdldCh0YXJnZXQpLmZvckVhY2goZ3JpZEVsZW0gPT4ge1xuXHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jZ3JpZHMuZ2V0KGdyaWRFbGVtKS5tYXliZVVwZGF0ZShtZWRpYSwgbWF0Y2hlcyk7XG5cdFx0fSk7XG5cdH1cblx0Ly9cblx0c3RhdGljICNtZWRpYVF1ZXJpZXMgPSBuZXcgTWFwKCk7XG5cdHN0YXRpYyAjYWN0aXZlTWVkaWFRdWVyaWVzID0gKHBhcnNlZE1lZGlhUXVlcmllcykgPT4ge1xuXHRcdHBhcnNlZE1lZGlhUXVlcmllcy5mb3JFYWNoKChbbWVkaWFRdWVyeVN0cmluZywgZ3JpZHNdKSA9PiB7XG5cdFx0XHRjb25zdCBtZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnlTdHJpbmcpO1xuXHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jbWVkaWFRdWVyaWVzLnNldChtZWRpYVF1ZXJ5TGlzdCwgZ3JpZHMpO1xuXHRcdFx0Ly9cblx0XHRcdG1lZGlhUXVlcnlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIEgybWxNb25pdG9yQnJlYWtwb2ludHMuI21lZGlhUXVlcnlFdmVudCk7XG5cdFx0XHRpZihtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzKSBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJ5RXZlbnQoe1xuXHRcdFx0XHRtZWRpYTogbWVkaWFRdWVyeVN0cmluZyxcblx0XHRcdFx0bWF0Y2hlczogbWVkaWFRdWVyeUxpc3QubWF0Y2hlcyxcblx0XHRcdFx0dGFyZ2V0OiBtZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXHQvL1xuXHRzdGF0aWMgI3BhcnNlR3JpZHMgPSAoLi4uZWxlbXMpID0+IGVsZW1zLnJlZHVjZSgobWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5LCBlbGVtKSA9PiB7XG5cdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jZ3JpZHMuc2V0KFxuXHRcdFx0ZWxlbSwgXG5cdFx0XHRuZXcgSDJtbE1vbml0b3JCcmVha3BvaW50cy4jR3JpZChlbGVtKS5hZGRUb01lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheShtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkpXG5cdFx0KTtcblx0XHRyZXR1cm4gbWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5O1xuXHR9LCBbXSk7XG5cdC8vXG5cdHN0YXRpYyBtb25pdG9yID0gKGUpID0+IHtcdFxuXHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2FjdGl2ZU1lZGlhUXVlcmllcyhcblx0XHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI3BhcnNlR3JpZHMoLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwLWJsb2NrLWgybWwtZ3JpZFtkYXRhLWJyZWFrcG9pbnQtZGVmaW5pdGlvbnNdJykpXG5cdFx0KTtcblx0fVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtIMm1sTW9uaXRvckJyZWFrcG9pbnRzfSBmcm9tICcuL21vbml0b3JCcmVha3BvaW50cyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLm1vbml0b3IpIl0sIm5hbWVzIjpbIkgybWxNb25pdG9yQnJlYWtwb2ludHMiLCJkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbiIsImVuY29kZWRCcmVha3BvaW50RGVmaW5pdGlvbiIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJncmlkcyIsIk1hcCIsIkdyaWQiLCJhZGRUb01lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSIsIm1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSIsImRlY29kZWRCcmVha3BvaW50cyIsImZvckVhY2giLCJtZWRpYVF1ZXJ5U3RyaW5nIiwiYnJlYWtwb2ludERlZmluZWRJbmRleCIsImZpbmRJbmRleCIsImV4aXN0aW5nTWVkaWFRdWVyeVN0cmluZyIsInB1c2giLCJlbGVtIiwiY3VycmVudFByZWNlZGVuY2UiLCJkb1VwZGF0ZSIsImJyZWFrcG9pbnREZWZpbml0b24iLCJPYmplY3QiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJ2YWx1ZSIsInN0eWxlIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNoaWxkQnJlYWtwb2ludERlZmluaXRpb25zIiwiY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbiIsImdyaWRBcmVhIiwiY29vcmRzIiwiZGlzcGxheSIsIm1heWJlVXBkYXRlIiwibWF0Y2hlcyIsImJyZWFrcG9pbnRJbmRleCIsInRoaXNNZWRpYVF1ZXJ5U3RyaW5nIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImNvbnN0cnVjdG9yIiwiY29uc29sZSIsImxvZyIsImRhdGFzZXQiLCJicmVha3BvaW50RGVmaW5pdGlvbnMiLCJhc3NpZ24iLCJtYXAiLCJtZWRpYVF1ZXJ5RXZlbnQiLCJlIiwibWVkaWEiLCJ0YXJnZXQiLCJtZWRpYVF1ZXJpZXMiLCJnZXQiLCJncmlkRWxlbSIsImFjdGl2ZU1lZGlhUXVlcmllcyIsInBhcnNlZE1lZGlhUXVlcmllcyIsIm1lZGlhUXVlcnlMaXN0Iiwic2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnNlR3JpZHMiLCJlbGVtcyIsInJlZHVjZSIsIm1vbml0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwic291cmNlUm9vdCI6IiJ9