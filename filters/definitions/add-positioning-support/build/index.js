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
          position: positioningType === 'fixed' ? 'sticky' : positioningType,
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
        label: 'Fixed',
        value: 'fixed'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TixHQUFHakIsS0FBSyxDQUFDaUIsS0FBSztRQUNkQyxRQUFRLEVBQUVSLGVBQWU7UUFDekIsR0FBR0UsaUJBQWlCO1FBQ3BCQyxNQUFNLEVBQUVDO01BQ1Q7SUFDRCxDQUFDO0VBQ0Y7RUFDQSxPQUFPZCxLQUFLO0FBQ2IsQ0FBQyxDQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbEJveENvbnRyb2wgYXMgQm94Q29udHJvbCxcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKiBcbiAqIEhlbHBlciBDb21wb25lbnRzXG4gKi9cblxuY29uc3QgU2VsZWN0SGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VlN0YWNrIFxuXHRcdFx0YXM9eydzcGFuJ31cblx0XHRcdHNwYWNpbmc9ezF9XG5cdFx0PlxuXHRcdFx0PHNwYW4gey4uLnByb3BzfT5cblx0XHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2snc1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kb2NzL1dlYi9DU1MvcG9zaXRpb25cIj57X18oXCJQb3NpdGlvbiBQcm9wZXJ0eVwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIkN1cnJlbnRseSBvbmx5LCAnU3RhdGljJyAoZGVmYXVsdCksICdSZWxhdGl2ZScsIGFuZCAnU3RpY2t5JyBhcmUgc3VwcG9ydGVkLlwiLCAnaDJtbCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvVlN0YWNrPlxuXHQpO1xufVxuXG4vKipcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGFsbG93ZWRQb3NpdGlvbmluZ0Jsb2Nrc05hbWVzID0gWydjb3JlL2dyb3VwJywgJ2NvcmUvY29sdW1ucycsICdoMm1sL2dyaWQnLCAnY29yZS90ZW1wbGF0ZS1wYXJ0J107XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSBzZXR0aW5ncztcblx0XHRpZiAoYWxsb3dlZFBvc2l0aW9uaW5nQmxvY2tzTmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0XHQndHlwZSc6ICcnLFxuXHRcdFx0XHRcdFx0XHQndmFsdWVzJzoge1xuXHRcdFx0XHRcdFx0XHRcdCd0b3AnOiAnJyxcblx0XHRcdFx0XHRcdFx0XHQncmlnaHQnOiAnJyxcblx0XHRcdFx0XHRcdFx0XHQnYm90dG9tJzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J2xlZnQnOiAnJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnekluZGV4JzogJydcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0xpc3RCbG9jaycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrTGlzdEJsb2NrID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge1xuXHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdH0gPSB7fSxcblx0XHRcdHdyYXBwZXJQcm9wcyA9IHt9XG5cdFx0fX0gPSBwcm9wcztcblx0XHRpZihwb3NpdGlvbmluZ1R5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17J2gybWwtdGVzdGluZyd9IHdyYXBwZXJQcm9wcz17e1xuXHRcdFx0XHQuLi53cmFwcGVyUHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IChwb3NpdGlvbmluZ1R5cGUgPT09ICdmaXhlZCcgPyAnc3RpY2t5JyA6IHBvc2l0aW9uaW5nVHlwZSksXG5cdFx0XHRcdFx0Li4ucG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fVxuXHRcdFx0fX0vPjtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9Lz47XG5cdH0sICdhZGRQb3NpdGlvbmluZ1N0eWxlc0VkaXQnKVxuKTtcblxuLypcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0VkaXQnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctaW5zZXBjdG9yLWNvbnRyb2xzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fSA9IHt9XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHRpZiAocG9zaXRpb25pbmdUeXBlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIlBvc2l0aW9uaW5nXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Bvc2l0aW9uaW5nVHlwZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnU3RhdGljJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRml4ZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2ZpeGVkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1JlbGF0aXZlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdyZWxhdGl2ZSdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTdGlja3knLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3N0aWNreSdcblx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PFNlbGVjdEhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR7KHBvc2l0aW9uaW5nVHlwZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29scyBQYW5lbCAoZGVmYXVsdCBleGFtcGxlKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5yZWR1Y2UoKG5ld1ZhbHVlcywgZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3VmFsdWVzW2VudHJ5WzBdXSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3VmFsdWVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5maWx0ZXIoZW50cnkgPT4gZW50cnlbMF0gIT09ICd6SW5kZXgnICYmICEhZW50cnlbMV0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlBvc2l0aW9uIFZhbHVlc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogT2JqZWN0LmVudHJpZXMocG9zaXRpb25pbmdWYWx1ZXMpLnJlZHVjZSgobmV3VmFsdWVzLCBlbnRyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlc1tlbnRyeVswXV0gPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3VmFsdWVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7fSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlBvc2l0aW9uIFZhbHVlc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2lkZXM9e09iamVjdC5rZXlzKHBvc2l0aW9uaW5nVmFsdWVzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcz17cG9zaXRpb25pbmdWYWx1ZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld1Bvc2l0aW9uaW5nVmFsdWVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubmV3UG9zaXRpb25pbmdWYWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5maWx0ZXIoZW50cnkgPT4gZW50cnlbMF0gIT09ICd6SW5kZXgnICYmICEhZW50cnlbMV0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID0ge3Bvc2l0aW9uaW5nU3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyhuZXdaSW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ucG9zaXRpb25pbmdWYWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogbmV3WkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGlmdFN0ZXAgPSB7MX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hpZnRTdGVwRW5hYmxlZCA9IHt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkUG9zaXRpb25pbmdJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtc2F2ZScsXG5cdChwcm9wcywgdHlwZSwgYXR0cmlidXRlcykgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGgybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHRpZiAocG9zaXRpb25pbmdUeXBlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHQuLi5wcm9wcy5zdHlsZSxcblx0XHRcdFx0XHRwb3NpdGlvbjogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJhZGRGaWx0ZXIiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsQm94Q29udHJvbCIsIkJveENvbnRyb2wiLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwiX18iLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsIlNlbGVjdEhlbHBUZXh0IiwicHJvcHMiLCJhbGxvd2VkUG9zaXRpb25pbmdCbG9ja3NOYW1lcyIsInNldHRpbmdzIiwibmFtZSIsImluY2x1ZGVzIiwiYXR0cmlidXRlcyIsImgybWxQb3NpdGlvbmluZyIsInR5cGUiLCJkZWZhdWx0IiwiQmxvY2tMaXN0QmxvY2siLCJwb3NpdGlvbmluZ1R5cGUiLCJ2YWx1ZXMiLCJwb3NpdGlvbmluZ1ZhbHVlcyIsInpJbmRleCIsInBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlciIsIndyYXBwZXJQcm9wcyIsInVuZGVmaW5lZCIsInN0eWxlIiwicG9zaXRpb24iLCJCbG9ja0VkaXQiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWUiLCJsYWJlbCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJuZXdWYWx1ZXMiLCJlbnRyeSIsImZpbHRlciIsImtleXMiLCJuZXdQb3NpdGlvbmluZ1ZhbHVlcyIsIm5ld1pJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=