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
      spacing: 4
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Notice, {
      isDismissible: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalText, {
      size: '12px',
      color: 'rgb(117, 117, 117)'
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("When adding animations which transition off-screen ensure that the document body has the", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"
    }, "overflow-x"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("property set to either 'hidden' or 'clip'.", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
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
      ...((animateIn || animateOut) && {
        'data-animate': ''
      }),
      ...(animateIn && {
        'data-animate-in': animateIn
      }),
      ...(animateOut && {
        'data-animate-out': animateOut
      }),
      ...(animateInDuration && {
        'data-animate-in-duration': animateInDuration
      }),
      ...(animateOutDuration && {
        'data-animate-out-duration': animateOutDuration
      })
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQgeyBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0Tm90aWNlLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG5cdF9fZXhwZXJpbWVudGFsVGV4dCBhcyBUZXh0LFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbi8qKiBcbiAqIEhlbHBlciBDb21wb25lbnRzXG4gKi9cblxuY29uc3QgQW5pbWF0ZUluSGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBJbicgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIHRoZSBibG9jayBpbnRvIHZpZXcuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuXG5jb25zdCBBbmltYXRlT3V0SGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBPdXQnIGFuaW1hdGlvbiBwbGF5cyB3aGVuIHNjcm9sbGluZyB0aGUgYmxvY2sgb3V0IG9mIHZpZXcuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuXG5jb25zdCBBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFZTdGFjayBcblx0XHRcdGFzPXsnc3Bhbid9XG5cdFx0XHRzcGFjaW5nPXsxfVxuXHRcdD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIEluJ1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcImR1cmF0aW9uXCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyA1MDBtcy5cIiwgJ2gybWwnKX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L1ZTdGFjaz5cblx0KTtcbn1cblxuY29uc3QgQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VlN0YWNrIFxuXHRcdFx0YXM9eydzcGFuJ31cblx0XHRcdHNwYWNpbmc9ezF9XG5cdFx0PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgT3V0J1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcImR1cmF0aW9uXCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyA1MDBtcy5cIiwgJ2gybWwnKX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L1ZTdGFjaz5cblx0KTtcbn1cblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGFuaW1hdGlvbkNsYXNzID0gJ2FuaW1hdGVfX2FuaW1hdGVkJztcblxuLyoqIFxuICogVGhlIEZpbHRlclxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXG5cdCdoMm1sL2FkZC1hbmltYXRpb24tb24tc2Nyb2xsLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZUluOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuKTtcblxuLypcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0VkaXQnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctaW5zZXBjdG9yLWNvbnRyb2xzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdH0gPSB7fVxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0aWYgKGFuaW1hdGVJbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtfXyhcIkFuaW1hdGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9IFxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxPcGVuPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eydoMm1sQW5pbWF0ZU9uU2Nyb2xsUGFuZWwnfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFZTdGFjayBcblx0XHRcdFx0XHRcdFx0XHRcdGFzPXsnZGl2J31cblx0XHRcdFx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5vdGljZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rpc21pc3NpYmxlPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXsnMTJweCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9eydyZ2IoMTE3LCAxMTcsIDExNyknfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKFwiV2hlbiBhZGRpbmcgYW5pbWF0aW9ucyB3aGljaCB0cmFuc2l0aW9uIG9mZi1zY3JlZW4gZW5zdXJlIHRoYXQgdGhlIGRvY3VtZW50IGJvZHkgaGFzIHRoZVwiLCAnaDJtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cteVwiPm92ZXJmbG93LXg8L0V4dGVybmFsTGluaz4ge19fKFwicHJvcGVydHkgc2V0IHRvIGVpdGhlciAnaGlkZGVuJyBvciAnY2xpcCcuXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJbkRvd24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gTGVmdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5MZWZ0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIFVwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJblVwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIFJpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJblJpZ2h0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBJbicgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVJbkhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luQm90dG9tOjB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXREb3duJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBMZWZ0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXRMZWZ0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBVcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0VXAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IFJpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXRSaWdodCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fV19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZU91dEhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luQm90dG9tOjB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBbmltYXRpb24gQWRkaXRpb25hbCBTZXR0aW5nc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRBbGw9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiAhIWFuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBJbiBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246IG5ld0R1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gISFhbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEdXJhdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9WU3RhY2s+XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5Plx0XG5cdFx0XHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkQW5pbWF0aW9uT25TY3JvbGxJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtc2F2ZScsXG5cdChwcm9wcywgdHlwZSwgYXR0cmlidXRlcykgPT4ge1xuXHRcdC8vXG5cdFx0Y29uc3Qge2NsYXNzTmFtZTogb2xkQ2xhc3NOYW1lfSA9IHByb3BzO1xuXHRcdGNvbnN0IHtcblx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdH0gPSB7fVxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdC8vXG5cdFx0aWYgKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChjdXIgIT09IGFuaW1hdGlvbkNsYXNzKSA/IGAke3Jlc30gJHtjdXJ9YCA6IGAke3Jlc31gXG5cdFx0XHR9LCAoYW5pbWF0aW9uQ2xhc3MpKTtcblx0XHRcdC8vXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHQuLi4oKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSAmJiB7J2RhdGEtYW5pbWF0ZSc6ICcnfSksXG5cdFx0XHRcdC4uLihhbmltYXRlSW4gJiYgeydkYXRhLWFuaW1hdGUtaW4nOiBhbmltYXRlSW59KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXQgJiYgeydkYXRhLWFuaW1hdGUtb3V0JzogYW5pbWF0ZU91dH0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluRHVyYXRpb24gJiYgeydkYXRhLWFuaW1hdGUtaW4tZHVyYXRpb24nOiBhbmltYXRlSW5EdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dER1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLW91dC1kdXJhdGlvbic6IGFuaW1hdGVPdXREdXJhdGlvbn0pLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9XG4pO1xuXG5cbiJdLCJuYW1lcyI6WyJhZGRGaWx0ZXIiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiRXh0ZXJuYWxMaW5rIiwiTm90aWNlIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRleHQiLCJUZXh0IiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJBbmltYXRlSW5IZWxwVGV4dCIsInByb3BzIiwiQW5pbWF0ZU91dEhlbHBUZXh0IiwiQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IiwiYW5pbWF0aW9uQ2xhc3MiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJoMm1sQW5pbWF0aW9uT25TY3JvbGwiLCJ0eXBlIiwiZGVmYXVsdCIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsIkJsb2NrRWRpdCIsInNldEF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImxhYmVsIiwibWFyZ2luQm90dG9tIiwibmV3RHVyYXRpb24iLCJjbGFzc05hbWUiLCJvbGRDbGFzc05hbWUiLCJzcGxpdCIsInJlZHVjZSIsInJlcyIsImN1ciJdLCJzb3VyY2VSb290IjoiIn0=