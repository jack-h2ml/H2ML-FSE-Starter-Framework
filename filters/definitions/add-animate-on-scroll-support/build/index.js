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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRUMsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO01BQ3BGLE9BQVFBLEdBQUcsS0FBS3RCLGNBQWMsR0FBSyxHQUFFcUIsR0FBSSxJQUFHQyxHQUFJLEVBQUMsR0FBSSxHQUFFRCxHQUFJLEVBQUM7SUFDN0QsQ0FBQyxFQUFHckIsY0FBYyxDQUFFO0lBQ3BCO0lBQ0EsT0FBTztNQUNOLEdBQUdKLEtBQUs7TUFDUnFCLFNBQVM7TUFDVCxJQUFJLENBQUNYLFNBQVMsSUFBSUMsVUFBVSxLQUFLO1FBQUMsY0FBYyxFQUFFO01BQUUsQ0FBQyxDQUFDO01BQ3RELElBQUlELFNBQVMsSUFBSTtRQUFDLGlCQUFpQixFQUFFQTtNQUFTLENBQUMsQ0FBQztNQUNoRCxJQUFJQyxVQUFVLElBQUk7UUFBQyxrQkFBa0IsRUFBRUE7TUFBVSxDQUFDLENBQUM7TUFDbkQsSUFBSUMsaUJBQWlCLElBQUk7UUFBQywwQkFBMEIsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3pFLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMkJBQTJCLEVBQUVBO01BQWtCLENBQUM7SUFDNUUsQ0FBQztFQUNGO0VBQ0EsT0FBT2IsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuICAgIF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuLyoqIFxuICogSGVscGVyIENvbXBvbmVudHNcbiAqL1xuXG5jb25zdCBBbmltYXRlSW5IZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiVGhlICdBbmltYXRlIEluJyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgdGhlIGJsb2NrIGludG8gdmlldy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmNvbnN0IEFuaW1hdGVPdXRIZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiVGhlICdBbmltYXRlIE91dCcgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIHRoZSBibG9jayBvdXQgb2Ygdmlldy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmNvbnN0IEFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8VlN0YWNrIFxuXHRcdFx0YXM9eydzcGFuJ31cblx0XHRcdHNwYWNpbmc9ezF9XG5cdFx0PlxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgSW4nXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzIDUwMG1zLlwiLCAnaDJtbCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvVlN0YWNrPlxuXHQpO1xufVxuXG5jb25zdCBBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWU3RhY2sgXG5cdFx0XHRhcz17J3NwYW4nfVxuXHRcdFx0c3BhY2luZz17MX1cblx0XHQ+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBPdXQnXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzIDUwMG1zLlwiLCAnaDJtbCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvVlN0YWNrPlxuXHQpO1xufVxuXG4vKlxuICogR2xvYmFsXG4gKi9cblxuY29uc3QgYW5pbWF0aW9uQ2xhc3MgPSAnYW5pbWF0ZV9fYW5pbWF0ZWQnO1xuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWFuaW1hdGlvbi1vbi1zY3JvbGwtYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRhbmltYXRlSW46ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246ICcnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0fSA9IHt9XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHRpZiAoYW5pbWF0ZUluICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9e19fKFwiQW5pbWF0ZSBvbiBTY3JvbGxcIiwgJ2gybWwnKX0gXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxBbmltYXRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8VlN0YWNrIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9eydkaXYnfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3BhY2luZz17NH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW46IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIERvd24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluRG93bidcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBMZWZ0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJbkxlZnQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gVXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluVXAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gUmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluUmlnaHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTZXQgdGhlICdBbmltYXRlIEluJyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZUluSGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Cb3R0b206MH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IERvd24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dERvd24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IExlZnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dExlZnQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IFVwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXRVcCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQgUmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dFJpZ2h0J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBPdXQnIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlT3V0SGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Cb3R0b206MH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdHsoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkFuaW1hdGlvbiBBZGRpdGlvbmFsIFNldHRpbmdzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+ICEhYW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogbmV3RHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiAhIWFuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L1ZTdGFjaz5cblx0XHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XHRcblx0XHRcdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8QmxvY2tFZGl0IHsuLi5wcm9wc30vPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRBbmltYXRpb25PblNjcm9sbEluc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Ly9cblx0XHRpZiAoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpIHtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSAob2xkQ2xhc3NOYW1lID8gb2xkQ2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXSkucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGN1ciAhPT0gYW5pbWF0aW9uQ2xhc3MpID8gYCR7cmVzfSAke2N1cn1gIDogYCR7cmVzfWBcblx0XHRcdH0sIChhbmltYXRpb25DbGFzcykpO1xuXHRcdFx0Ly9cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdC4uLigoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpICYmIHsnZGF0YS1hbmltYXRlJzogJyd9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbiAmJiB7J2RhdGEtYW5pbWF0ZS1pbic6IGFuaW1hdGVJbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dCAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQnOiBhbmltYXRlT3V0fSksXG5cdFx0XHRcdC4uLihhbmltYXRlSW5EdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1pbi1kdXJhdGlvbic6IGFuaW1hdGVJbkR1cmF0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0RHVyYXRpb24gJiYgeydkYXRhLWFuaW1hdGUtb3V0LWR1cmF0aW9uJzogYW5pbWF0ZU91dER1cmF0aW9ufSksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cblxuIl0sIm5hbWVzIjpbImFkZEZpbHRlciIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCIsIlRvb2xzUGFuZWwiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIiwiVG9vbHNQYW5lbEl0ZW0iLCJfXyIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiQW5pbWF0ZUluSGVscFRleHQiLCJwcm9wcyIsIkFuaW1hdGVPdXRIZWxwVGV4dCIsIkFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQiLCJBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsImFuaW1hdGlvbkNsYXNzIiwic2V0dGluZ3MiLCJhdHRyaWJ1dGVzIiwiaDJtbEFuaW1hdGlvbk9uU2Nyb2xsIiwidHlwZSIsImRlZmF1bHQiLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJCbG9ja0VkaXQiLCJzZXRBdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwidmFsdWUiLCJsYWJlbCIsIm1hcmdpbkJvdHRvbSIsIm5ld0R1cmF0aW9uIiwiY2xhc3NOYW1lIiwib2xkQ2xhc3NOYW1lIiwic3BsaXQiLCJyZWR1Y2UiLCJyZXMiLCJjdXIiXSwic291cmNlUm9vdCI6IiJ9