/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */







/** 
 * Helper Components
 */

const SelectHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalVStack, {
    as: 'span',
    spacing: 1
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", props, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Set this block's", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
    href: "https://developer.mozilla.org/docs/Web/CSS/position"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Position Property", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Currently only, 'Static' (default), 'Relative', and 'Sticky' are supported.", 'h2ml')));
};

/**
 * Global
 */

const allowedPositioningBlocksNames = ['core/group', 'core/columns', 'h2ml/grid', 'core/template-part'];

/** 
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.registerBlockType', 'h2ml/add-positioning-attribute', settings => {
  const {
    name
  } = settings;
  if (allowedPositioningBlocksNames.includes(name)) {
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        h2mlPositioning: {
          type: 'object',
          default: {
            'type': '',
            'values': {
              'top': '',
              'right': '',
              'bottom': '',
              'left': ''
            },
            'zIndex': ''
          }
        }
      }
    };
  }
  return settings;
});

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockListBlock', 'h2ml/add-positioning-styles-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockListBlock => props => {
  const {
    attributes: {
      h2mlPositioning: {
        type: positioningType,
        values: positioningValues,
        zIndex: positioningStackingOrder
      } = {},
      wrapperProps = {}
    }
  } = props;
  if (positioningType !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: 'h2ml-testing',
      wrapperProps: {
        ...wrapperProps,
        style: {
          position: positioningType,
          ...positioningValues,
          zIndex: positioningStackingOrder
        }
      }
    }));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
}, 'addPositioningStylesEdit'));

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('editor.BlockEdit', 'h2ml/add-positioning-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    attributes: {
      h2mlPositioning: {
        type: positioningType,
        values: positioningValues,
        zIndex: positioningStackingOrder
      } = {}
    },
    setAttributes
  } = props;
  if (positioningType !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Positioning", 'h2ml'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: value => {
        setAttributes({
          h2mlPositioning: {
            type: value,
            values: positioningValues
          }
        });
      },
      value: positioningType,
      options: [{
        label: 'Static',
        value: ''
      }, {
        label: 'Relative',
        value: 'relative'
      }, {
        label: 'Sticky',
        value: 'sticky'
      }],
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectHelpText, null)
    }), positioningType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanel, {
      label: "Tools Panel (default example)",
      resetAll: () => {
        setAttributes({
          h2mlPositioning: {
            type: positioningType,
            values: Object.entries(positioningValues).reduce((newValues, entry) => {
              newValues[entry[0]] = '';
              return newValues;
            }, {}),
            zIndex: ''
          }
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
      hasValue: () => Object.entries(positioningValues).filter(entry => entry[0] !== 'zIndex' && !!entry[1]),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Position Values", 'h2ml'),
      onDeselect: () => {
        setAttributes({
          h2mlPositioning: {
            type: positioningType,
            values: Object.entries(positioningValues).reduce((newValues, entry) => {
              newValues[entry[0]] = '';
              return newValues;
            }, {}),
            zIndex: positioningStackingOrder
          }
        });
      },
      isShownByDefault: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Position Values", 'h2ml'),
      sides: Object.keys(positioningValues),
      values: positioningValues,
      onChange: newPositioningValues => {
        setAttributes({
          h2mlPositioning: {
            type: positioningType,
            values: {
              ...positioningValues,
              ...newPositioningValues
            },
            zIndex: positioningStackingOrder
          }
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
      hasValue: () => Object.entries(positioningValues).filter(entry => entry[0] !== 'zIndex' && !!entry[1]),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Stacking Order", 'h2ml'),
      onDeselect: () => {
        setAttributes({
          h2mlPositioning: {
            type: positioningType,
            values: positioningValues,
            zIndex: ''
          }
        });
      },
      isShownByDefault: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Stacking Order", 'h2ml'),
      value: positioningStackingOrder,
      onChange: newZIndex => {
        setAttributes({
          h2mlPositioning: {
            type: positioningType,
            values: {
              ...positioningValues
            },
            zIndex: newZIndex
          }
        });
      },
      shiftStep: 1,
      isShiftStepEnabled: true
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
}, 'addPositioningInspectorControlsEdit'));

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('blocks.getSaveContent.extraProps', 'h2ml/add-positioning-styles-save', (props, type, attributes) => {
  const {
    h2mlPositioning: {
      type: positioningType,
      values: positioningValues,
      zIndex: positioningStackingOrder
    } = {}
  } = attributes;
  if (positioningType) {
    return {
      ...props,
      style: {
        ...props.style,
        position: positioningType,
        ...positioningValues,
        zIndex: positioningStackingOrder
      }
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ1Q7SUFDRCxDQUFDO0VBQ0Y7RUFDQSxPQUFPZCxLQUFLO0FBQ2IsQ0FBQyxDQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbEJveENvbnRyb2wgYXMgQm94Q29udHJvbCxcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKiBcbiAqIEhlbHBlciBDb21wb25lbnRzXG4gKi9cblxuY29uc3QgU2VsZWN0SGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VlN0YWNrIFxuXHRcdFx0YXM9eydzcGFuJ31cblx0XHRcdHNwYWNpbmc9ezF9XG5cdFx0PlxuXHRcdFx0PHNwYW4gey4uLnByb3BzfT5cblx0XHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2snc1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9DU1MvcG9zaXRpb25cIj57X18oXCJQb3NpdGlvbiBQcm9wZXJ0eVwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIkN1cnJlbnRseSBvbmx5LCAnU3RhdGljJyAoZGVmYXVsdCksICdSZWxhdGl2ZScsIGFuZCAnU3RpY2t5JyBhcmUgc3VwcG9ydGVkLlwiLCAnaDJtbCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvVlN0YWNrPlxuXHQpO1xufVxuXG4vKipcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGFsbG93ZWRQb3NpdGlvbmluZ0Jsb2Nrc05hbWVzID0gWydjb3JlL2dyb3VwJywgJ2NvcmUvY29sdW1ucycsICdoMm1sL2dyaWQnLCAnY29yZS90ZW1wbGF0ZS1wYXJ0J107XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSBzZXR0aW5ncztcblx0XHRpZiAoYWxsb3dlZFBvc2l0aW9uaW5nQmxvY2tzTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0XHQndHlwZSc6ICcnLFxuXHRcdFx0XHRcdFx0XHQndmFsdWVzJzoge1xuXHRcdFx0XHRcdFx0XHRcdCd0b3AnOiAnJyxcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAnJyxcblx0XHRcdFx0XHRcdFx0XHQnYm90dG9tJzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J2xlZnQnOiAnJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnekluZGV4JzogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0xpc3RCbG9jaycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrTGlzdEJsb2NrID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge1xuXHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdH0gPSB7fSxcblx0XHRcdHdyYXBwZXJQcm9wcyA9IHt9XG5cdFx0fX0gPSBwcm9wcztcblx0XHRpZihwb3NpdGlvbmluZ1R5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17J2gybWwtdGVzdGluZyd9IHdyYXBwZXJQcm9wcz17e1xuXHRcdFx0XHQuLi53cmFwcGVyUHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9XG5cdFx0XHR9fS8+O1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrTGlzdEJsb2NrIHsuLi5wcm9wc30vPjtcblx0fSwgJ2FkZFBvc2l0aW9uaW5nU3R5bGVzRWRpdCcpXG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9ID0ge31cblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXHRcdGlmIChwb3NpdGlvbmluZ1R5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiUG9zaXRpb25pbmdcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cG9zaXRpb25pbmdUeXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTdGF0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdSZWxhdGl2ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAncmVsYXRpdmUnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnU3RpY2t5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdzdGlja3knXG5cdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxTZWxlY3RIZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0eyhwb3NpdGlvbmluZ1R5cGUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykucmVkdWNlKChuZXdWYWx1ZXMsIGVudHJ5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlc1tlbnRyeVswXV0gPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHt9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5yZWR1Y2UoKG5ld1ZhbHVlcywgZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdWYWx1ZXNbZW50cnlbMF1dID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpZGVzPXtPYmplY3Qua2V5cyhwb3NpdGlvbmluZ1ZhbHVlcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9e3Bvc2l0aW9uaW5nVmFsdWVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdQb3NpdGlvbmluZ1ZhbHVlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm5ld1Bvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTdGFja2luZyBPcmRlclwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsobmV3WkluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IG5ld1pJbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZFBvc2l0aW9uaW5nSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0aWYgKHBvc2l0aW9uaW5nVHlwZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Li4ucHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiYWRkRmlsdGVyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCIsIlRvb2xzUGFuZWwiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIiwiVG9vbHNQYW5lbEl0ZW0iLCJfX2V4cGVyaW1lbnRhbEJveENvbnRyb2wiLCJCb3hDb250cm9sIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIl9fIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJTZWxlY3RIZWxwVGV4dCIsInByb3BzIiwiYWxsb3dlZFBvc2l0aW9uaW5nQmxvY2tzTmFtZXMiLCJzZXR0aW5ncyIsIm5hbWUiLCJpbmNsdWRlcyIsImF0dHJpYnV0ZXMiLCJoMm1sUG9zaXRpb25pbmciLCJ0eXBlIiwiZGVmYXVsdCIsIkJsb2NrTGlzdEJsb2NrIiwicG9zaXRpb25pbmdUeXBlIiwidmFsdWVzIiwicG9zaXRpb25pbmdWYWx1ZXMiLCJ6SW5kZXgiLCJwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXIiLCJ3cmFwcGVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzdHlsZSIsInBvc2l0aW9uIiwiQmxvY2tFZGl0Iiwic2V0QXR0cmlidXRlcyIsInZhbHVlIiwibGFiZWwiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwibmV3VmFsdWVzIiwiZW50cnkiLCJmaWx0ZXIiLCJrZXlzIiwibmV3UG9zaXRpb25pbmdWYWx1ZXMiLCJuZXdaSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9