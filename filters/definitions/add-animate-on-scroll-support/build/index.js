/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");

/**
 * WordPress Dependencies
 */







/**
 * Internal Dependencies
 */



/** 
 * Helper Components
 */

const AnimateInHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("The 'Animate In' animation plays when scrolling the block into view.", 'h2ml'));
};
const AnimateOutHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("The 'Animate Out' animation plays when scrolling the block out of view.", 'h2ml'));
};
const AnimateInDurationHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
    as: 'span',
    spacing: 1
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Set this block's 'Animate In'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("By default this is 500ms.", 'h2ml')));
};
const AnimateOutDurationHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
    as: 'span',
    spacing: 1
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Set this block's 'Animate Out'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("By default this is 500ms.", 'h2ml')));
};

/*
 * Global
 */

const animationClass = 'animate__animated';

/** 
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'h2ml/add-animation-on-scroll-attribute', settings => {
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      h2mlAnimationOnScroll: {
        type: 'object',
        default: {
          animateIn: '',
          animateOut: '',
          animateInDuration: '',
          animateOutDuration: ''
        }
      }
    }
  };
});

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'h2ml/add-positioning-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    attributes: {
      h2mlAnimationOnScroll: {
        animateIn,
        animateOut,
        animateInDuration,
        animateOutDuration
      } = {}
    },
    setAttributes
  } = props;
  if (animateIn !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animate on Scroll", 'h2ml'),
      initialOpen: false,
      className: 'h2mlAnimateOnScrollPanel'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
      as: 'div',
      spacing: 3
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      onChange: value => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn: value,
            animateOut,
            animateInDuration,
            animateOutDuration
          }
        });
      },
      value: animateIn,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Fade in',
        value: 'animate__fadeIn'
      }, {
        label: 'Fade in Down',
        value: 'animate__fadeInDown'
      }, {
        label: 'Fade in Left',
        value: 'animate__fadeInLeft'
      }, {
        label: 'Fade in Up',
        value: 'animate__fadeInUp'
      }, {
        label: 'Fade in Right',
        value: 'animate__fadeInRight'
      }],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Set the 'Animate In' style", 'h2ml'),
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimateInHelpText, null),
      style: {
        marginBottom: 0
      },
      __nextHasNoMarginBottom: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      onChange: value => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut: value,
            animateInDuration,
            animateOutDuration
          }
        });
      },
      value: animateOut,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Fade out',
        value: 'animate__fadeOut'
      }, {
        label: 'Fade out Down',
        value: 'animate__fadeOutDown'
      }, {
        label: 'Fade out Left',
        value: 'animate__fadeOutLeft'
      }, {
        label: 'Fade out Up',
        value: 'animate__fadeOutUp'
      }, {
        label: 'Fade out Right',
        value: 'animate__fadeOutRight'
      }],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Set the 'Animate Out' style", 'h2ml'),
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimateOutHelpText, null),
      style: {
        marginBottom: 0
      },
      __nextHasNoMarginBottom: true
    }), (animateIn || animateOut) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanel, {
      label: "Animation Additional Settings",
      resetAll: () => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut,
            animateInDuration: '',
            animateOutDuration: ''
          }
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!animateInDuration,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animate In Duration", 'h2ml'),
      onDeselect: () => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut,
            animateInDuration: '',
            animateOutDuration
          }
        });
      },
      isShownByDefault: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      value: animateInDuration,
      onChange: newDuration => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut,
            animateInDuration: newDuration,
            animateOutDuration
          }
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animate In Duration", 'h2ml'),
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimateInDurationHelpText, null)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToolsPanelItem, {
      hasValue: () => !!animateOutDuration,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animate Out Duration", 'h2ml'),
      onDeselect: () => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut,
            animateInDuration,
            animateOutDuration: ''
          }
        });
      },
      isShownByDefault: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      value: animateOutDuration,
      onChange: newDuration => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut,
            animateInDuration,
            animateOutDuration: newDuration
          }
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animate Out Duration", 'h2ml'),
      help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimateOutDurationHelpText, null)
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'addAnimationOnScrollInspectorControlsEdit'));

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveContent.extraProps', 'h2ml/add-positioning-styles-save', (props, type, attributes) => {
  //
  const {
    className: oldClassName
  } = props;
  const {
    h2mlAnimationOnScroll: {
      animateIn,
      animateOut,
      animateInDuration,
      animateOutDuration
    } = {}
  } = attributes;
  //
  if (animateIn || animateOut) {
    //
    const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
      return cur !== animationClass ? `${res} ${cur}` : `${res}`;
    }, animationClass);
    //
    return {
      ...props,
      className,
      'data-animate': '',
      'data-animate-in': animateIn,
      'data-animate-out': animateOut,
      'data-animate-in-duration': animateInDuration,
      'data-animate-out-duration': animateOutDuration
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRUMsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO01BQ3BGLE9BQVFBLEdBQUcsS0FBS3RCLGNBQWMsR0FBSyxHQUFFcUIsR0FBSSxJQUFHQyxHQUFJLEVBQUMsR0FBSSxHQUFFRCxHQUFJLEVBQUM7SUFDN0QsQ0FBQyxFQUFHckIsY0FBYyxDQUFFO0lBQ3BCO0lBQ0EsT0FBTztNQUNOLEdBQUdKLEtBQUs7TUFDUnFCLFNBQVM7TUFDVCxjQUFjLEVBQUUsRUFBRTtNQUNsQixpQkFBaUIsRUFBRVgsU0FBUztNQUM1QixrQkFBa0IsRUFBRUMsVUFBVTtNQUM5QiwwQkFBMEIsRUFBRUMsaUJBQWlCO01BQzdDLDJCQUEyQixFQUFFQztJQUM5QixDQUFDO0VBQ0Y7RUFDQSxPQUFPYixLQUFLO0FBQ2IsQ0FBQyxDQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG4gICAgX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSBhcyBUb29sc1BhbmVsSXRlbSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG4vKiogXG4gKiBIZWxwZXIgQ29tcG9uZW50c1xuICovXG5cbmNvbnN0IEFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgSW4nIGFuaW1hdGlvbiBwbGF5cyB3aGVuIHNjcm9sbGluZyB0aGUgYmxvY2sgaW50byB2aWV3LlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuY29uc3QgQW5pbWF0ZU91dEhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgdGhlIGJsb2NrIG91dCBvZiB2aWV3LlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuY29uc3QgQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWU3RhY2sgXG5cdFx0XHRhcz17J3NwYW4nfVxuXHRcdFx0c3BhY2luZz17MX1cblx0XHQ+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgNTAwbXMuXCIsICdoMm1sJyl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9WU3RhY2s+XG5cdCk7XG59XG5cbmNvbnN0IEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFZTdGFjayBcblx0XHRcdGFzPXsnc3Bhbid9XG5cdFx0XHRzcGFjaW5nPXsxfVxuXHRcdD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgNTAwbXMuXCIsICdoMm1sJyl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9WU3RhY2s+XG5cdCk7XG59XG5cbi8qXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBhbmltYXRpb25DbGFzcyA9ICdhbmltYXRlX19hbmltYXRlZCc7XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtYW5pbWF0aW9uLW9uLXNjcm9sbC1hdHRyaWJ1dGUnLFxuXHQoc2V0dGluZ3MpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHR9ID0ge31cblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXHRcdGlmIChhbmltYXRlSW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT17X18oXCJBbmltYXRlIG9uIFNjcm9sbFwiLCAnaDJtbCcpfSBcblx0XHRcdFx0XHRcdFx0XHRpbml0aWFsT3Blbj17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsnaDJtbEFuaW1hdGVPblNjcm9sbFBhbmVsJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxWU3RhY2sgXG5cdFx0XHRcdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcGFjaW5nPXszfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbjogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW4nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gRG93bicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5Eb3duJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIExlZnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluTGVmdCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBVcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5VcCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBSaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5SaWdodCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fV19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlSW5IZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpbkJvdHRvbTowfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogdmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQgRG93bicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0RG93bidcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQgTGVmdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0TGVmdCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQgVXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dFVwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBSaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0UmlnaHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTZXQgdGhlICdBbmltYXRlIE91dCcgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVPdXRIZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpbkJvdHRvbTowfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyhhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQW5pbWF0aW9uIEFkZGl0aW9uYWwgU2V0dGluZ3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gISFhbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEdXJhdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBJbiBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+ICEhYW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cdFxuXHRcdFx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZEFuaW1hdGlvbk9uU2Nyb2xsSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHQvL1xuXHRcdGNvbnN0IHtjbGFzc05hbWU6IG9sZENsYXNzTmFtZX0gPSBwcm9wcztcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkge1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IChvbGRDbGFzc05hbWUgPyBvbGRDbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoY3VyICE9PSBhbmltYXRpb25DbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGFuaW1hdGlvbkNsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtYW5pbWF0ZSc6ICcnLFxuXHRcdFx0XHQnZGF0YS1hbmltYXRlLWluJzogYW5pbWF0ZUluLFxuXHRcdFx0XHQnZGF0YS1hbmltYXRlLW91dCc6IGFuaW1hdGVPdXQsXG5cdFx0XHRcdCdkYXRhLWFuaW1hdGUtaW4tZHVyYXRpb24nOiBhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0J2RhdGEtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcblxuXG4iXSwibmFtZXMiOlsiYWRkRmlsdGVyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJBbmltYXRlSW5IZWxwVGV4dCIsInByb3BzIiwiQW5pbWF0ZU91dEhlbHBUZXh0IiwiQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IiwiYW5pbWF0aW9uQ2xhc3MiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJoMm1sQW5pbWF0aW9uT25TY3JvbGwiLCJ0eXBlIiwiZGVmYXVsdCIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsIkJsb2NrRWRpdCIsInNldEF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImxhYmVsIiwibWFyZ2luQm90dG9tIiwibmV3RHVyYXRpb24iLCJjbGFzc05hbWUiLCJvbGRDbGFzc05hbWUiLCJzcGxpdCIsInJlZHVjZSIsInJlcyIsImN1ciJdLCJzb3VyY2VSb290IjoiIn0=