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

const allowedPositioningBlocksNames = ['core/template-part', 'core/group', 'core/columns', 'h2ml/grid', 'h2ml/grid-area'];

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
        ...Object.keys(positioningValues).reduce((previous, key) => {
          return {
            ...previous,
            ...(positioningValues[key] && {
              [key]: positioningValues[key]
            })
          };
        }, {}),
        zIndex: positioningStackingOrder
      }
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUU7UUFDTixHQUFHakIsS0FBSyxDQUFDaUIsS0FBSztRQUNkQyxRQUFRLEVBQUVSLGVBQWU7UUFDekIsR0FBR2EsTUFBTSxDQUFDTSxJQUFJLENBQUNqQixpQkFBaUIsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQ08sUUFBUSxFQUFFQyxHQUFHLEtBQUs7VUFDM0QsT0FBTztZQUNOLEdBQUdELFFBQVE7WUFDWCxJQUFLcEIsaUJBQWlCLENBQUNxQixHQUFHLENBQUMsSUFBSztjQUFDLENBQUNBLEdBQUcsR0FBR3JCLGlCQUFpQixDQUFDcUIsR0FBRztZQUFDLENBQUM7VUFDaEUsQ0FBQztRQUNGLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNOcEIsTUFBTSxFQUFFQztNQUNUO0lBQ0QsQ0FBQztFQUNGO0VBQ0EsT0FBT2QsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG4gICAgX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSBhcyBUb29sc1BhbmVsSXRlbSxcblx0X19leHBlcmltZW50YWxCb3hDb250cm9sIGFzIEJveENvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKiogXG4gKiBIZWxwZXIgQ29tcG9uZW50c1xuICovXG5cbmNvbnN0IFNlbGVjdEhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFZTdGFjayBcblx0XHRcdGFzPXsnc3Bhbid9XG5cdFx0XHRzcGFjaW5nPXsxfVxuXHRcdD5cblx0XHRcdDxzcGFuIHsuLi5wcm9wc30+XG5cdFx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3NcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQ1NTL3Bvc2l0aW9uXCI+e19fKFwiUG9zaXRpb24gUHJvcGVydHlcIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJDdXJyZW50bHkgb25seSwgJ1N0YXRpYycgKGRlZmF1bHQpLCAnUmVsYXRpdmUnLCBhbmQgJ1N0aWNreScgYXJlIHN1cHBvcnRlZC5cIiwgJ2gybWwnKX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L1ZTdGFjaz5cblx0KTtcbn1cblxuLyoqXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBhbGxvd2VkUG9zaXRpb25pbmdCbG9ja3NOYW1lcyA9IFsnY29yZS90ZW1wbGF0ZS1wYXJ0JywgJ2NvcmUvZ3JvdXAnLCAnY29yZS9jb2x1bW5zJywgJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddO1xuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gc2V0dGluZ3M7XG5cdFx0aWYgKGFsbG93ZWRQb3NpdGlvbmluZ0Jsb2Nrc05hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0J3R5cGUnOiAnJyxcblx0XHRcdFx0XHRcdFx0J3ZhbHVlcyc6IHtcblx0XHRcdFx0XHRcdFx0XHQndG9wJzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J3JpZ2h0JzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdCdsZWZ0JzogJydcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3pJbmRleCc6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuKTtcblxuLyoqXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0xpc3RCbG9jayA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHtcblx0XHRcdGgybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHR9ID0ge30sXG5cdFx0XHR3cmFwcGVyUHJvcHMgPSB7fVxuXHRcdH19ID0gcHJvcHM7XG5cdFx0aWYocG9zaXRpb25pbmdUeXBlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiA8QmxvY2tMaXN0QmxvY2sgey4uLnByb3BzfSBjbGFzc05hbWU9eydoMm1sLXRlc3RpbmcnfSB3cmFwcGVyUHJvcHM9e3tcblx0XHRcdFx0Li4ud3JhcHBlclByb3BzLFxuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAocG9zaXRpb25pbmdUeXBlID09PSAnZml4ZWQnID8gJ3N0aWNreScgOiBwb3NpdGlvbmluZ1R5cGUpLFxuXHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdH1cblx0XHRcdH19Lz47XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tMaXN0QmxvY2sgey4uLnByb3BzfS8+O1xuXHR9LCAnYWRkUG9zaXRpb25pbmdTdHlsZXNFZGl0Jylcbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0gPSB7fVxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0aWYgKHBvc2l0aW9uaW5nVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oXCJQb3NpdGlvbmluZ1wiLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwb3NpdGlvbmluZ1R5cGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1N0YXRpYycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZpeGVkJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdmaXhlZCdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdSZWxhdGl2ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAncmVsYXRpdmUnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnU3RpY2t5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdzdGlja3knXG5cdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxTZWxlY3RIZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0eyhwb3NpdGlvbmluZ1R5cGUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykucmVkdWNlKChuZXdWYWx1ZXMsIGVudHJ5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlc1tlbnRyeVswXV0gPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHt9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5yZWR1Y2UoKG5ld1ZhbHVlcywgZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdWYWx1ZXNbZW50cnlbMF1dID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpZGVzPXtPYmplY3Qua2V5cyhwb3NpdGlvbmluZ1ZhbHVlcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9e3Bvc2l0aW9uaW5nVmFsdWVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdQb3NpdGlvbmluZ1ZhbHVlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm5ld1Bvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTdGFja2luZyBPcmRlclwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsobmV3WkluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IG5ld1pJbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZFBvc2l0aW9uaW5nSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0aWYgKHBvc2l0aW9uaW5nVHlwZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Li4ucHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHQuLi5PYmplY3Qua2V5cyhwb3NpdGlvbmluZ1ZhbHVlcykucmVkdWNlKChwcmV2aW91cywga2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQuLi5wcmV2aW91cyxcblx0XHRcdFx0XHRcdFx0Li4uKChwb3NpdGlvbmluZ1ZhbHVlc1trZXldKSAmJiB7W2tleV06IHBvc2l0aW9uaW5nVmFsdWVzW2tleV19KVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9LCB7fSksXG5cdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9XG4pO1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbImFkZEZpbHRlciIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiRXh0ZXJuYWxMaW5rIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxCb3hDb250cm9sIiwiQm94Q29udHJvbCIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJfXyIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiU2VsZWN0SGVscFRleHQiLCJwcm9wcyIsImFsbG93ZWRQb3NpdGlvbmluZ0Jsb2Nrc05hbWVzIiwic2V0dGluZ3MiLCJuYW1lIiwiaW5jbHVkZXMiLCJhdHRyaWJ1dGVzIiwiaDJtbFBvc2l0aW9uaW5nIiwidHlwZSIsImRlZmF1bHQiLCJCbG9ja0xpc3RCbG9jayIsInBvc2l0aW9uaW5nVHlwZSIsInZhbHVlcyIsInBvc2l0aW9uaW5nVmFsdWVzIiwiekluZGV4IiwicG9zaXRpb25pbmdTdGFja2luZ09yZGVyIiwid3JhcHBlclByb3BzIiwidW5kZWZpbmVkIiwic3R5bGUiLCJwb3NpdGlvbiIsIkJsb2NrRWRpdCIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZSIsImxhYmVsIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsIm5ld1ZhbHVlcyIsImVudHJ5IiwiZmlsdGVyIiwia2V5cyIsIm5ld1Bvc2l0aW9uaW5nVmFsdWVzIiwibmV3WkluZGV4IiwicHJldmlvdXMiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9