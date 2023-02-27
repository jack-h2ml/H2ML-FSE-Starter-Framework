/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view_dependencies/monitorBreakpoints/index.js":
/*!***********************************************************!*\
  !*** ./src/view_dependencies/monitorBreakpoints/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H2mlMonitorBreakpoints": function() { return /* binding */ H2mlMonitorBreakpoints; }
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
          Object.entries(childBreakPointDefinition).forEach(_ref5 => {
            let [property, value] = _ref5;
            child.style[property] = value;
          });
        } else {
          child.style.display = 'none';
        }
      });
    }
    maybeUpdate(mediaQueryString, matches) {
      let breakpointIndex = this.decodedBreakpoints.findIndex(_ref6 => {
        let [thisMediaQueryString] = _ref6;
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
    parsedMediaQueries.forEach(_ref7 => {
      let [mediaQueryString, grids] = _ref7;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_dependencies_monitorBreakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_dependencies/monitorBreakpoints */ "./src/view_dependencies/monitorBreakpoints/index.js");

document.addEventListener('DOMContentLoaded', _view_dependencies_monitorBreakpoints__WEBPACK_IMPORTED_MODULE_0__.H2mlMonitorBreakpoints.monitor);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0IsQ0FBQyxDQUFDdUQsVUFBVSxDQUFDLEdBQUdJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUNwSDtFQUNGLENBQUM7QUFDRjs7Ozs7O1VDMUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044RTtBQUU5RUQsUUFBUSxDQUFDTCxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRXRELGlHQUE4QixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3ZpZXdfZGVwZW5kZW5jaWVzL21vbml0b3JCcmVha3BvaW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIMm1sTW9uaXRvckJyZWFrcG9pbnRzIHtcblx0Ly9cblx0c3RhdGljICNkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbiA9IChlbmNvZGVkQnJlYWtwb2ludERlZmluaXRpb24pID0+IEpTT04ucGFyc2UoYXRvYihlbmNvZGVkQnJlYWtwb2ludERlZmluaXRpb24pKTtcblx0Ly9cblx0c3RhdGljICNncmlkcyA9IG5ldyBNYXAoKTtcblx0c3RhdGljICNHcmlkID0gY2xhc3Mge1xuXHRcdC8vXG5cdFx0YWRkVG9NZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkobWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KSB7XG5cdFx0XHR0aGlzLmRlY29kZWRCcmVha3BvaW50cy5mb3JFYWNoKChbbWVkaWFRdWVyeVN0cmluZ10pID0+IHtcblx0XHRcdFx0Y29uc3QgYnJlYWtwb2ludERlZmluZWRJbmRleCA9IG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheS5maW5kSW5kZXgoKFtleGlzdGluZ01lZGlhUXVlcnlTdHJpbmddKSA9PiBleGlzdGluZ01lZGlhUXVlcnlTdHJpbmcgPT09IG1lZGlhUXVlcnlTdHJpbmcpO1xuXHRcdFx0XHRpZihicmVha3BvaW50RGVmaW5lZEluZGV4IDwgMCkge1xuXHRcdFx0XHRcdG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheS5wdXNoKFtcblx0XHRcdFx0XHRcdG1lZGlhUXVlcnlTdHJpbmcsXG5cdFx0XHRcdFx0XHRbdGhpcy5lbGVtXVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheVticmVha3BvaW50RGVmaW5lZEluZGV4XVsxXS5wdXNoKHRoaXMuZWxlbSlcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0Ly9cblx0XHQjY3VycmVudFByZWNlZGVuY2UgPSBudWxsO1xuXHRcdCNkb1VwZGF0ZSgpIHtcdFxuXHRcdFx0Y29uc3QgW1xuXHRcdFx0XHRtZWRpYVF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRicmVha3BvaW50RGVmaW5pdG9uXG5cdFx0XHRdID0gdGhpcy5kZWNvZGVkQnJlYWtwb2ludHNbdGhpcy4jY3VycmVudFByZWNlZGVuY2VdO1xuXHRcdFx0Ly9cblx0XHRcdE9iamVjdC5lbnRyaWVzKGJyZWFrcG9pbnREZWZpbml0b24pLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWxlbS5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9cblx0XHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoW2NoaWxkLCBjaGlsZEJyZWFrcG9pbnREZWZpbml0aW9uc10pID0+IHtcblx0XHRcdFx0Y29uc3QgY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbiA9IGNoaWxkQnJlYWtwb2ludERlZmluaXRpb25zW21lZGlhUXVlcnlTdHJpbmddO1xuXHRcdFx0XHRpZihjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMoY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbikuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcblx0XHRcdFx0XHRcdGNoaWxkLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdG1heWJlVXBkYXRlKG1lZGlhUXVlcnlTdHJpbmcsIG1hdGNoZXMpIHtcblx0XHRcdGxldCBicmVha3BvaW50SW5kZXggPSB0aGlzLmRlY29kZWRCcmVha3BvaW50cy5maW5kSW5kZXgoKFt0aGlzTWVkaWFRdWVyeVN0cmluZ10pID0+IHRoaXNNZWRpYVF1ZXJ5U3RyaW5nID09PSBtZWRpYVF1ZXJ5U3RyaW5nKTtcblx0XHRcdGlmKCFtYXRjaGVzKSB3aGlsZShicmVha3BvaW50SW5kZXggPiAwICYmICF3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmRlY29kZWRCcmVha3BvaW50c1stLWJyZWFrcG9pbnRJbmRleF0pLm1hdGNoZXMpO1xuXHRcdFx0aWYodGhpcy4jY3VycmVudFByZWNlZGVuY2UgIT09IGJyZWFrcG9pbnRJbmRleCkge1xuXHRcdFx0XHR0aGlzLiNjdXJyZW50UHJlY2VkZW5jZSA9IGJyZWFrcG9pbnRJbmRleDtcblx0XHRcdFx0dGhpcy4jZG9VcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly9cblx0XHRjb25zdHJ1Y3RvcihlbGVtKSB7XG5cdFx0XHQvL1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCB7XG5cdFx0XHRcdGVsZW0sXG5cdFx0XHRcdGRlY29kZWRCcmVha3BvaW50czogSDJtbE1vbml0b3JCcmVha3BvaW50cy4jZGVjb2RlQnJlYWtwb2ludERlZmluaXRpb24oZWxlbS5kYXRhc2V0LmJyZWFrcG9pbnREZWZpbml0aW9ucyksXG5cdFx0XHRcdGNoaWxkcmVuOiBbLi4uZWxlbS5jaGlsZHJlbl0ubWFwKGNoaWxkID0+IFtcblx0XHRcdFx0XHRjaGlsZCxcblx0XHRcdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbihjaGlsZC5kYXRhc2V0LmJyZWFrcG9pbnREZWZpbml0aW9ucylcblx0XHRcdFx0XSlcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQvL1xuXHRzdGF0aWMgI21lZGlhUXVlcnlFdmVudCA9IChlKSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bWVkaWEsIFxuXHRcdFx0bWF0Y2hlcywgXG5cdFx0XHR0YXJnZXRcblx0XHR9ID0gZTtcblx0XHQvL1xuXHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI21lZGlhUXVlcmllcy5nZXQodGFyZ2V0KS5mb3JFYWNoKGdyaWRFbGVtID0+IHtcblx0XHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2dyaWRzLmdldChncmlkRWxlbSkubWF5YmVVcGRhdGUobWVkaWEsIG1hdGNoZXMpO1xuXHRcdH0pO1xuXHR9XG5cdC8vXG5cdHN0YXRpYyAjbWVkaWFRdWVyaWVzID0gbmV3IE1hcCgpO1xuXHRzdGF0aWMgI2FjdGl2ZU1lZGlhUXVlcmllcyA9IChwYXJzZWRNZWRpYVF1ZXJpZXMpID0+IHtcblx0XHRwYXJzZWRNZWRpYVF1ZXJpZXMuZm9yRWFjaCgoW21lZGlhUXVlcnlTdHJpbmcsIGdyaWRzXSkgPT4ge1xuXHRcdFx0Y29uc3QgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5U3RyaW5nKTtcblx0XHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI21lZGlhUXVlcmllcy5zZXQobWVkaWFRdWVyeUxpc3QsIGdyaWRzKTtcblx0XHRcdC8vXG5cdFx0XHRtZWRpYVF1ZXJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJ5RXZlbnQpO1xuXHRcdFx0aWYobWVkaWFRdWVyeUxpc3QubWF0Y2hlcykgSDJtbE1vbml0b3JCcmVha3BvaW50cy4jbWVkaWFRdWVyeUV2ZW50KHtcblx0XHRcdFx0bWVkaWE6IG1lZGlhUXVlcnlTdHJpbmcsXG5cdFx0XHRcdG1hdGNoZXM6IG1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMsXG5cdFx0XHRcdHRhcmdldDogbWVkaWFRdWVyeUxpc3Rcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblx0Ly9cblx0c3RhdGljICNwYXJzZUdyaWRzID0gKC4uLmVsZW1zKSA9PiBlbGVtcy5yZWR1Y2UoKG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSwgZWxlbSkgPT4ge1xuXHRcdEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2dyaWRzLnNldChcblx0XHRcdGVsZW0sIFxuXHRcdFx0bmV3IEgybWxNb25pdG9yQnJlYWtwb2ludHMuI0dyaWQoZWxlbSkuYWRkVG9NZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkobWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KVxuXHRcdCk7XG5cdFx0cmV0dXJuIG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheTtcblx0fSwgW10pO1xuXHQvL1xuXHRzdGF0aWMgbW9uaXRvciA9IChlKSA9PiB7XHRcblx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNhY3RpdmVNZWRpYVF1ZXJpZXMoXG5cdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNwYXJzZUdyaWRzKC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1oMm1sLWdyaWRbZGF0YS1icmVha3BvaW50LWRlZmluaXRpb25zXScpKVxuXHRcdCk7XG5cdH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0gybWxNb25pdG9yQnJlYWtwb2ludHN9IGZyb20gJy4vdmlld19kZXBlbmRlbmNpZXMvbW9uaXRvckJyZWFrcG9pbnRzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEgybWxNb25pdG9yQnJlYWtwb2ludHMubW9uaXRvcik7Il0sIm5hbWVzIjpbIkgybWxNb25pdG9yQnJlYWtwb2ludHMiLCJkZWNvZGVCcmVha3BvaW50RGVmaW5pdGlvbiIsImVuY29kZWRCcmVha3BvaW50RGVmaW5pdGlvbiIsIkpTT04iLCJwYXJzZSIsImF0b2IiLCJncmlkcyIsIk1hcCIsIkdyaWQiLCJhZGRUb01lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSIsIm1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSIsImRlY29kZWRCcmVha3BvaW50cyIsImZvckVhY2giLCJtZWRpYVF1ZXJ5U3RyaW5nIiwiYnJlYWtwb2ludERlZmluZWRJbmRleCIsImZpbmRJbmRleCIsImV4aXN0aW5nTWVkaWFRdWVyeVN0cmluZyIsInB1c2giLCJlbGVtIiwiY3VycmVudFByZWNlZGVuY2UiLCJkb1VwZGF0ZSIsImJyZWFrcG9pbnREZWZpbml0b24iLCJPYmplY3QiLCJlbnRyaWVzIiwicHJvcGVydHkiLCJ2YWx1ZSIsInN0eWxlIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNoaWxkQnJlYWtwb2ludERlZmluaXRpb25zIiwiY2hpbGRCcmVha1BvaW50RGVmaW5pdGlvbiIsImRpc3BsYXkiLCJtYXliZVVwZGF0ZSIsIm1hdGNoZXMiLCJicmVha3BvaW50SW5kZXgiLCJ0aGlzTWVkaWFRdWVyeVN0cmluZyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJjb25zdHJ1Y3RvciIsImFzc2lnbiIsImRhdGFzZXQiLCJicmVha3BvaW50RGVmaW5pdGlvbnMiLCJtYXAiLCJtZWRpYVF1ZXJ5RXZlbnQiLCJlIiwibWVkaWEiLCJ0YXJnZXQiLCJtZWRpYVF1ZXJpZXMiLCJnZXQiLCJncmlkRWxlbSIsImFjdGl2ZU1lZGlhUXVlcmllcyIsInBhcnNlZE1lZGlhUXVlcmllcyIsIm1lZGlhUXVlcnlMaXN0Iiwic2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnNlR3JpZHMiLCJlbGVtcyIsInJlZHVjZSIsIm1vbml0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwic291cmNlUm9vdCI6IiJ9