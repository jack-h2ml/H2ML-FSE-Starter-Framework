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
      console.log(elem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsQ0FBQyxHQUFHSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FDcEg7RUFDRixDQUFDO0FBQ0Y7Ozs7OztVQzFHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjREO0FBRTVERCxRQUFRLENBQUNMLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFMUQsK0VBQThCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbW9uaXRvckJyZWFrcG9pbnRzL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEgybWxNb25pdG9yQnJlYWtwb2ludHMge1xuXHQvL1xuXHRzdGF0aWMgI2RlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uID0gKGVuY29kZWRCcmVha3BvaW50RGVmaW5pdGlvbikgPT4gSlNPTi5wYXJzZShhdG9iKGVuY29kZWRCcmVha3BvaW50RGVmaW5pdGlvbikpO1xuXHQvL1xuXHRzdGF0aWMgI2dyaWRzID0gbmV3IE1hcCgpO1xuXHRzdGF0aWMgI0dyaWQgPSBjbGFzcyB7XG5cdFx0Ly9cblx0XHRhZGRUb01lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheShtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXkpIHtcblx0XHRcdHRoaXMuZGVjb2RlZEJyZWFrcG9pbnRzLmZvckVhY2goKFttZWRpYVF1ZXJ5U3RyaW5nXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBicmVha3BvaW50RGVmaW5lZEluZGV4ID0gbWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5LmZpbmRJbmRleCgoW2V4aXN0aW5nTWVkaWFRdWVyeVN0cmluZ10pID0+IGV4aXN0aW5nTWVkaWFRdWVyeVN0cmluZyA9PT0gbWVkaWFRdWVyeVN0cmluZyk7XG5cdFx0XHRcdGlmKGJyZWFrcG9pbnREZWZpbmVkSW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0bWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5LnB1c2goW1xuXHRcdFx0XHRcdFx0bWVkaWFRdWVyeVN0cmluZyxcblx0XHRcdFx0XHRcdFt0aGlzLmVsZW1dXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5W2JyZWFrcG9pbnREZWZpbmVkSW5kZXhdWzFdLnB1c2godGhpcy5lbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHQvL1xuXHRcdCNjdXJyZW50UHJlY2VkZW5jZSA9IG51bGw7XG5cdFx0I2RvVXBkYXRlKCkge1x0XG5cdFx0XHRjb25zdCBbXG5cdFx0XHRcdG1lZGlhUXVlcnlTdHJpbmcsXG5cdFx0XHRcdGJyZWFrcG9pbnREZWZpbml0b25cblx0XHRcdF0gPSB0aGlzLmRlY29kZWRCcmVha3BvaW50c1t0aGlzLiNjdXJyZW50UHJlY2VkZW5jZV07XG5cdFx0XHQvL1xuXHRcdFx0T2JqZWN0LmVudHJpZXMoYnJlYWtwb2ludERlZmluaXRvbikuZm9yRWFjaCgoW3Byb3BlcnR5LCB2YWx1ZV0pID0+IHtcblx0XHRcdFx0dGhpcy5lbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHQvL1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKChbY2hpbGQsIGNoaWxkQnJlYWtwb2ludERlZmluaXRpb25zXSkgPT4ge1xuXHRcdFx0XHRjb25zdCBjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uID0gY2hpbGRCcmVha3BvaW50RGVmaW5pdGlvbnNbbWVkaWFRdWVyeVN0cmluZ107XG5cdFx0XHRcdGlmKGNoaWxkQnJlYWtQb2ludERlZmluaXRpb24pIHtcblx0XHRcdFx0XHRjaGlsZC5zdHlsZS5ncmlkQXJlYSA9IGNoaWxkQnJlYWtQb2ludERlZmluaXRpb24uY29vcmRzO1xuXHRcdFx0XHRcdGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0bWF5YmVVcGRhdGUobWVkaWFRdWVyeVN0cmluZywgbWF0Y2hlcykge1xuXHRcdFx0bGV0IGJyZWFrcG9pbnRJbmRleCA9IHRoaXMuZGVjb2RlZEJyZWFrcG9pbnRzLmZpbmRJbmRleCgoW3RoaXNNZWRpYVF1ZXJ5U3RyaW5nXSkgPT4gdGhpc01lZGlhUXVlcnlTdHJpbmcgPT09IG1lZGlhUXVlcnlTdHJpbmcpO1xuXHRcdFx0aWYoIW1hdGNoZXMpIHdoaWxlKGJyZWFrcG9pbnRJbmRleCA+IDAgJiYgIXdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuZGVjb2RlZEJyZWFrcG9pbnRzWy0tYnJlYWtwb2ludEluZGV4XSkubWF0Y2hlcyk7XG5cdFx0XHRpZih0aGlzLiNjdXJyZW50UHJlY2VkZW5jZSAhPT0gYnJlYWtwb2ludEluZGV4KSB7XG5cdFx0XHRcdHRoaXMuI2N1cnJlbnRQcmVjZWRlbmNlID0gYnJlYWtwb2ludEluZGV4O1xuXHRcdFx0XHR0aGlzLiNkb1VwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvL1xuXHRcdGNvbnN0cnVjdG9yKGVsZW0pIHtcblx0XHRcdGNvbnNvbGUubG9nKGVsZW0pO1xuXHRcdFx0Ly9cblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywge1xuXHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRkZWNvZGVkQnJlYWtwb2ludHM6IEgybWxNb25pdG9yQnJlYWtwb2ludHMuI2RlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uKGVsZW0uZGF0YXNldC5icmVha3BvaW50RGVmaW5pdGlvbnMpLFxuXHRcdFx0XHRjaGlsZHJlbjogWy4uLmVsZW0uY2hpbGRyZW5dLm1hcChjaGlsZCA9PiBbXG5cdFx0XHRcdFx0Y2hpbGQsXG5cdFx0XHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jZGVjb2RlQnJlYWtwb2ludERlZmluaXRpb24oY2hpbGQuZGF0YXNldC5icmVha3BvaW50RGVmaW5pdGlvbnMpXG5cdFx0XHRcdF0pXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Ly9cblx0c3RhdGljICNtZWRpYVF1ZXJ5RXZlbnQgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1lZGlhLCBcblx0XHRcdG1hdGNoZXMsIFxuXHRcdFx0dGFyZ2V0XG5cdFx0fSA9IGU7XG5cdFx0Ly9cblx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJpZXMuZ2V0KHRhcmdldCkuZm9yRWFjaChncmlkRWxlbSA9PiB7XG5cdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNncmlkcy5nZXQoZ3JpZEVsZW0pLm1heWJlVXBkYXRlKG1lZGlhLCBtYXRjaGVzKTtcblx0XHR9KTtcblx0fVxuXHQvL1xuXHRzdGF0aWMgI21lZGlhUXVlcmllcyA9IG5ldyBNYXAoKTtcblx0c3RhdGljICNhY3RpdmVNZWRpYVF1ZXJpZXMgPSAocGFyc2VkTWVkaWFRdWVyaWVzKSA9PiB7XG5cdFx0cGFyc2VkTWVkaWFRdWVyaWVzLmZvckVhY2goKFttZWRpYVF1ZXJ5U3RyaW5nLCBncmlkc10pID0+IHtcblx0XHRcdGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeVN0cmluZyk7XG5cdFx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNtZWRpYVF1ZXJpZXMuc2V0KG1lZGlhUXVlcnlMaXN0LCBncmlkcyk7XG5cdFx0XHQvL1xuXHRcdFx0bWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgSDJtbE1vbml0b3JCcmVha3BvaW50cy4jbWVkaWFRdWVyeUV2ZW50KTtcblx0XHRcdGlmKG1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIEgybWxNb25pdG9yQnJlYWtwb2ludHMuI21lZGlhUXVlcnlFdmVudCh7XG5cdFx0XHRcdG1lZGlhOiBtZWRpYVF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRtYXRjaGVzOiBtZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzLFxuXHRcdFx0XHR0YXJnZXQ6IG1lZGlhUXVlcnlMaXN0XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cdC8vXG5cdHN0YXRpYyAjcGFyc2VHcmlkcyA9ICguLi5lbGVtcykgPT4gZWxlbXMucmVkdWNlKChtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXksIGVsZW0pID0+IHtcblx0XHRIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNncmlkcy5zZXQoXG5cdFx0XHRlbGVtLCBcblx0XHRcdG5ldyBIMm1sTW9uaXRvckJyZWFrcG9pbnRzLiNHcmlkKGVsZW0pLmFkZFRvTWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5KG1lZGlhUXVlcmllc0NvbnN0dWN0b3JBcnJheSlcblx0XHQpO1xuXHRcdHJldHVybiBtZWRpYVF1ZXJpZXNDb25zdHVjdG9yQXJyYXk7XG5cdH0sIFtdKTtcblx0Ly9cblx0c3RhdGljIG1vbml0b3IgPSAoZSkgPT4ge1x0XG5cdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jYWN0aXZlTWVkaWFRdWVyaWVzKFxuXHRcdFx0SDJtbE1vbml0b3JCcmVha3BvaW50cy4jcGFyc2VHcmlkcyguLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3AtYmxvY2staDJtbC1ncmlkW2RhdGEtYnJlYWtwb2ludC1kZWZpbml0aW9uc10nKSlcblx0XHQpO1xuXHR9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0gybWxNb25pdG9yQnJlYWtwb2ludHN9IGZyb20gJy4vbW9uaXRvckJyZWFrcG9pbnRzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIEgybWxNb25pdG9yQnJlYWtwb2ludHMubW9uaXRvcikiXSwibmFtZXMiOlsiSDJtbE1vbml0b3JCcmVha3BvaW50cyIsImRlY29kZUJyZWFrcG9pbnREZWZpbml0aW9uIiwiZW5jb2RlZEJyZWFrcG9pbnREZWZpbml0aW9uIiwiSlNPTiIsInBhcnNlIiwiYXRvYiIsImdyaWRzIiwiTWFwIiwiR3JpZCIsImFkZFRvTWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5IiwibWVkaWFRdWVyaWVzQ29uc3R1Y3RvckFycmF5IiwiZGVjb2RlZEJyZWFrcG9pbnRzIiwiZm9yRWFjaCIsIm1lZGlhUXVlcnlTdHJpbmciLCJicmVha3BvaW50RGVmaW5lZEluZGV4IiwiZmluZEluZGV4IiwiZXhpc3RpbmdNZWRpYVF1ZXJ5U3RyaW5nIiwicHVzaCIsImVsZW0iLCJjdXJyZW50UHJlY2VkZW5jZSIsImRvVXBkYXRlIiwiYnJlYWtwb2ludERlZmluaXRvbiIsIk9iamVjdCIsImVudHJpZXMiLCJwcm9wZXJ0eSIsInZhbHVlIiwic3R5bGUiLCJjaGlsZHJlbiIsImNoaWxkIiwiY2hpbGRCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJjaGlsZEJyZWFrUG9pbnREZWZpbml0aW9uIiwiZ3JpZEFyZWEiLCJjb29yZHMiLCJkaXNwbGF5IiwibWF5YmVVcGRhdGUiLCJtYXRjaGVzIiwiYnJlYWtwb2ludEluZGV4IiwidGhpc01lZGlhUXVlcnlTdHJpbmciLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY29uc3RydWN0b3IiLCJjb25zb2xlIiwibG9nIiwiYXNzaWduIiwiZGF0YXNldCIsImJyZWFrcG9pbnREZWZpbml0aW9ucyIsIm1hcCIsIm1lZGlhUXVlcnlFdmVudCIsImUiLCJtZWRpYSIsInRhcmdldCIsIm1lZGlhUXVlcmllcyIsImdldCIsImdyaWRFbGVtIiwiYWN0aXZlTWVkaWFRdWVyaWVzIiwicGFyc2VkTWVkaWFRdWVyaWVzIiwibWVkaWFRdWVyeUxpc3QiLCJzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyc2VHcmlkcyIsImVsZW1zIiwicmVkdWNlIiwibW9uaXRvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VSb290IjoiIn0=