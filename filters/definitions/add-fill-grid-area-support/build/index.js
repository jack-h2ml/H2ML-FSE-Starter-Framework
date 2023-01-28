/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const resizeCornerNE = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */








/*
 * Global
 */

const fillGridAreaClass = 'fillGridArea';
const allowedFillChildCategories = ['media', 'embed'];

/*
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'h2ml/add-canFillGridArea-attribute', settings => {
  const {
    category
  } = settings;
  if (allowedFillChildCategories.includes(category)) {
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        h2mlFillGridArea: {
          type: 'boolean',
          default: false
        },
        h2mlCanFillGridArea: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  return settings;
});

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockListBlock', 'h2ml/add-fillGridArea-class-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockListBlock => props => {
  const {
    attributes: {
      h2mlCanFillGridArea,
      h2mlFillGridArea
    }
  } = props;
  if (h2mlCanFillGridArea) {
    const className = h2mlCanFillGridArea && h2mlFillGridArea ? fillGridAreaClass : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: className
    }));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
}, 'withCustomAttributeClass'));

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'h2ml/add-canFillGridArea-class-blockEdit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    attributes: {
      h2mlCanFillGridArea,
      h2mlFillGridArea
    },
    setAttributes
  } = props;
  //
  if (h2mlCanFillGridArea) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Cover Grid Area", 'h2ml'),
      isPressed: h2mlFillGridArea,
      onClick: () => {
        setAttributes({
          h2mlFillGridArea: !h2mlFillGridArea
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
}, 'showCanFillGridAreaToolbarButton'));

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.getSaveContent.extraProps', 'h2ml/add-fillGridArea-class-save', (props, type, attributes) => {
  //
  const {
    className: oldClassName
  } = props;
  const {
    h2mlCanFillGridArea,
    h2mlFillGridArea
  } = attributes;
  //
  const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
    return cur !== fillGridAreaClass ? `${res} ${cur}` : `${res}`;
  }, h2mlCanFillGridArea && h2mlFillGridArea ? fillGridAreaClass : '');
  //
  return {
    ...props,
    className
  };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLElBQUlILGdCQUFnQixHQUFJTixpQkFBaUIsR0FBRyxFQUFFLENBQUM7RUFDdEU7RUFDQSxPQUFPO0lBQ0gsR0FBR1csS0FBSztJQUNSQztFQUNKLENBQUM7QUFDTCxDQUFDLENBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvcmVzaXplLWNvcm5lci1uLWUuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBQYXRoLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgcmVzaXplQ29ybmVyTkUgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTIuNSA0LjJ2MS42aDQuN0w1LjggMTcuMlYxMkg0LjJ2Ny44SDEydi0xLjZINi44TDE4LjIgNi44djQuN2gxLjZWNC4yelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCByZXNpemVDb3JuZXJORTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2l6ZS1jb3JuZXItbi1lLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQgeyBCbG9ja0NvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuICAgIFRvb2xiYXJHcm91cCxcbiAgICBUb29sYmFyQnV0dG9uXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7X199IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IHJlc2l6ZUNvcm5lck5FIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGZpbGxHcmlkQXJlYUNsYXNzID0gJ2ZpbGxHcmlkQXJlYSc7XG5jb25zdCBhbGxvd2VkRmlsbENoaWxkQ2F0ZWdvcmllcyA9IFsnbWVkaWEnLCAnZW1iZWQnXTtcblxuLypcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG4gICAgJ2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXG4gICAgJ2gybWwvYWRkLWNhbkZpbGxHcmlkQXJlYS1hdHRyaWJ1dGUnLFxuICAgIChzZXR0aW5ncykgPT4ge1xuICAgICAgICBjb25zdCB7Y2F0ZWdvcnl9ID0gc2V0dGluZ3M7XG4gICAgICAgIGlmKGFsbG93ZWRGaWxsQ2hpbGRDYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncywgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLCBcbiAgICAgICAgICAgICAgICAgICAgaDJtbEZpbGxHcmlkQXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaDJtbENhbkZpbGxHcmlkQXJlYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuICAgICdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLFxuICAgICdoMm1sL2FkZC1maWxsR3JpZEFyZWEtY2xhc3MtZWRpdCcsXG4gICAgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tMaXN0QmxvY2sgPT4gcHJvcHMgPT4ge1xuICAgICAgICBjb25zdCB7YXR0cmlidXRlczoge1xuICAgICAgICAgICAgaDJtbENhbkZpbGxHcmlkQXJlYSxcbiAgICAgICAgICAgIGgybWxGaWxsR3JpZEFyZWFcbiAgICAgICAgfX0gPSBwcm9wcztcblx0XHRpZihoMm1sQ2FuRmlsbEdyaWRBcmVhKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSAoaDJtbENhbkZpbGxHcmlkQXJlYSAmJiBoMm1sRmlsbEdyaWRBcmVhKSA/IGZpbGxHcmlkQXJlYUNsYXNzIDogJyc7XG4gICAgICAgIFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPjtcdFxuXHRcdH1cbiAgICAgICAgcmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IC8+O1xuICAgIH0sICd3aXRoQ3VzdG9tQXR0cmlidXRlQ2xhc3MnIClcbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG4gICAgJ2VkaXRvci5CbG9ja0VkaXQnLFxuICAgICdoMm1sL2FkZC1jYW5GaWxsR3JpZEFyZWEtY2xhc3MtYmxvY2tFZGl0JyxcbiAgICBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgaDJtbENhbkZpbGxHcmlkQXJlYSxcbiAgICAgICAgICAgICAgICBoMm1sRmlsbEdyaWRBcmVhXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXNcbiAgICAgICAgfSA9IHByb3BzO1xuICAgICAgICAvL1xuICAgICAgICBpZihoMm1sQ2FuRmlsbEdyaWRBcmVhKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIkNvdmVyIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlc3NlZD17aDJtbEZpbGxHcmlkQXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoe2gybWxGaWxsR3JpZEFyZWE6ICFoMm1sRmlsbEdyaWRBcmVhfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbGJhckdyb3VwPlxuICAgICAgICAgICAgICAgIDwvQmxvY2tDb250cm9scz5cbiAgICAgICAgICAgICAgICA8QmxvY2tFZGl0IHsuLi5wcm9wc30vPlxuICAgICAgICAgICAgPC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz47XG4gICAgfSwgJ3Nob3dDYW5GaWxsR3JpZEFyZWFUb29sYmFyQnV0dG9uJyApXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcbiAgICAnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuICAgICdoMm1sL2FkZC1maWxsR3JpZEFyZWEtY2xhc3Mtc2F2ZScsXG4gICAgKHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWU6IG9sZENsYXNzTmFtZX0gPSBwcm9wcztcbiAgICAgICAgY29uc3Qge2gybWxDYW5GaWxsR3JpZEFyZWEsIGgybWxGaWxsR3JpZEFyZWF9ID0gYXR0cmlidXRlcztcbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoY3VyICE9PSBmaWxsR3JpZEFyZWFDbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuICAgICAgICB9LCAoaDJtbENhbkZpbGxHcmlkQXJlYSAmJiBoMm1sRmlsbEdyaWRBcmVhKSA/IGZpbGxHcmlkQXJlYUNsYXNzIDogJycpO1xuICAgICAgICAvL1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfTtcbiAgICB9XG4pO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJhZGRGaWx0ZXIiLCJCbG9ja0NvbnRyb2xzIiwiVG9vbGJhckdyb3VwIiwiVG9vbGJhckJ1dHRvbiIsIl9fIiwicmVzaXplQ29ybmVyTkUiLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsImZpbGxHcmlkQXJlYUNsYXNzIiwiYWxsb3dlZEZpbGxDaGlsZENhdGVnb3JpZXMiLCJzZXR0aW5ncyIsImNhdGVnb3J5IiwiaW5jbHVkZXMiLCJhdHRyaWJ1dGVzIiwiaDJtbEZpbGxHcmlkQXJlYSIsInR5cGUiLCJkZWZhdWx0IiwiaDJtbENhbkZpbGxHcmlkQXJlYSIsIkJsb2NrTGlzdEJsb2NrIiwicHJvcHMiLCJjbGFzc05hbWUiLCJCbG9ja0VkaXQiLCJzZXRBdHRyaWJ1dGVzIiwib2xkQ2xhc3NOYW1lIiwic3BsaXQiLCJyZWR1Y2UiLCJyZXMiLCJjdXIiXSwic291cmNlUm9vdCI6IiJ9