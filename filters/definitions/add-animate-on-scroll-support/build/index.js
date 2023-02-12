/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");

/**
 * WordPress Dependencies
 */








/**
 * Internal Dependencies
 */



/**
 * External Dependencies
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
  const animations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...document.styleSheets].reduce((res, styleSheet) => {
    if (styleSheet.href && styleSheet.href.includes('add-animate-on-scroll-support')) {
      return [...styleSheet.cssRules].reduce((res, rule) => ({
        ...res,
        ...(Object.getPrototypeOf(rule).constructor === CSSStyleRule && rule.selectorText.includes('.animate__') && !rule.selectorText.includes('.animate__animated') && (rule.selectorText.includes('In') || rule.selectorText.includes('Out')) && rule.selectorText !== '.animate__jackInTheBox' && (rule.selectorText.includes('In') ? {
          animateIn: [...res.animateIn, {
            label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => `${res}${!ind ? cur.toUpperCase() : cur}`, ''),
            value: rule.selectorText.replace(/[.,\s]/g, '')
          }]
        } : {
          animateOut: [...res.animateOut, {
            label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => `${res}${!ind ? cur.toUpperCase() : cur}`, ''),
            value: rule.selectorText.replace(/[.,\s]/g, '')
          }]
        }))
      }), {
        animateIn: [{
          label: 'None',
          value: ''
        }],
        animateOut: [{
          label: 'None',
          value: ''
        }]
      });
    } else {
      return res;
    }
  }, []), []);
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
      options: animations.animateIn,
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
      options: animations.animateOut,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDbkQsSUFBSUMsaUJBQWlCLElBQUk7UUFBQywwQkFBMEIsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3pFLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMkJBQTJCLEVBQUVBO01BQWtCLENBQUM7SUFDNUUsQ0FBQztFQUNGO0VBQ0EsT0FBT2IsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQgeyBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0Tm90aWNlLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG5cdF9fZXhwZXJpbWVudGFsVGV4dCBhcyBUZXh0LFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBcblx0dXNlU3RhdGUsXG5cdHVzZU1lbW8sXG5cdHVzZUVmZmVjdFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuXG4vKiogXG4gKiBIZWxwZXIgQ29tcG9uZW50c1xuICovXG5cbmNvbnN0IEFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgSW4nIGFuaW1hdGlvbiBwbGF5cyB3aGVuIHNjcm9sbGluZyB0aGUgYmxvY2sgaW50byB2aWV3LlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuY29uc3QgQW5pbWF0ZU91dEhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgdGhlIGJsb2NrIG91dCBvZiB2aWV3LlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuY29uc3QgQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxWU3RhY2sgXG5cdFx0XHRhcz17J3NwYW4nfVxuXHRcdFx0c3BhY2luZz17MX1cblx0XHQ+XG5cdFx0XHQ8c3Bhbj5cblx0XHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgNTAwbXMuXCIsICdoMm1sJyl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9WU3RhY2s+XG5cdCk7XG59XG5cbmNvbnN0IEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFZTdGFjayBcblx0XHRcdGFzPXsnc3Bhbid9XG5cdFx0XHRzcGFjaW5nPXsxfVxuXHRcdD5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgNTAwbXMuXCIsICdoMm1sJyl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9WU3RhY2s+XG5cdCk7XG59XG5cbi8qXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBhbmltYXRpb25DbGFzcyA9ICdhbmltYXRlX19hbmltYXRlZCc7XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtYW5pbWF0aW9uLW9uLXNjcm9sbC1hdHRyaWJ1dGUnLFxuXHQoc2V0dGluZ3MpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHR9ID0ge31cblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9ucyA9IHVzZU1lbW8oKCkgPT4gWy4uLmRvY3VtZW50LnN0eWxlU2hlZXRzXS5yZWR1Y2UoKHJlcywgc3R5bGVTaGVldCkgPT4ge1xuXHRcdFx0aWYoc3R5bGVTaGVldC5ocmVmICYmIHN0eWxlU2hlZXQuaHJlZi5pbmNsdWRlcygnYWRkLWFuaW1hdGUtb24tc2Nyb2xsLXN1cHBvcnQnKSkge1xuXHRcdFx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0XHRcdC4uLnJlcyxcblx0XHRcdFx0XHQuLi4oKFxuXHRcdFx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0XHRcdCYmIHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCcuYW5pbWF0ZV9fJylcblx0XHRcdFx0XHRcdCYmICFydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnLmFuaW1hdGVfX2FuaW1hdGVkJylcblx0XHRcdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQgIT09ICcuYW5pbWF0ZV9famFja0luVGhlQm94J1xuXHRcdFx0XHRcdCkgJiYgKHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdJbicpIFxuXHRcdFx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdGAke3Jlc30keyFpbmQgPyBjdXIudG9VcHBlckNhc2UoKSA6IGN1cn1gXG5cdFx0XHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRdfSA6IHthbmltYXRlT3V0OiBbXG5cdFx0XHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IFsuLi5ydWxlLnN0eWxlLmFuaW1hdGlvbk5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKV0ucmVkdWNlKChyZXMsIGN1ciwgaW5kKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogcnVsZS5zZWxlY3RvclRleHQucmVwbGFjZSgvWy4sXFxzXS9nLCAnJylcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XX0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KSwge1xuXHRcdFx0XHRcdGFuaW1hdGVJbjogW3tcblx0XHRcdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHR9XSxcblx0XHRcdFx0XHRhbmltYXRlT3V0OiBbe1xuXHRcdFx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0XHRcdH1dXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH1cblx0XHR9LCBbXSksIFtdKTtcblx0XHRcblx0XHRpZiAoYW5pbWF0ZUluICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9e19fKFwiQW5pbWF0ZSBvbiBTY3JvbGxcIiwgJ2gybWwnKX0gXG5cdFx0XHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxBbmltYXRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8VlN0YWNrIFxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9eydkaXYnfVxuXHRcdFx0XHRcdFx0XHRcdFx0c3BhY2luZz17NH1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Tm90aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGlzbWlzc2libGU9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9eycxMnB4J31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj17J3JnYigxMTcsIDExNywgMTE3KSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oXCJXaGVuIGFkZGluZyBhbmltYXRpb25zIHdoaWNoIHRyYW5zaXRpb24gb2ZmLXNjcmVlbiBlbnN1cmUgdGhhdCB0aGUgZG9jdW1lbnQgYm9keSBoYXMgdGhlXCIsICdoMm1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyZmxvdy15XCI+b3ZlcmZsb3cteDwvRXh0ZXJuYWxMaW5rPiB7X18oXCJwcm9wZXJ0eSBzZXQgdG8gZWl0aGVyICdoaWRkZW4nIG9yICdjbGlwJy5cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW46IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25zLmFuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBJbicgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVJbkhlbHBUZXh0Lz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luQm90dG9tOjB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9ucy5hbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTZXQgdGhlICdBbmltYXRlIE91dCcgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVPdXRIZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpbkJvdHRvbTowfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0eyhhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQW5pbWF0aW9uIEFkZGl0aW9uYWwgU2V0dGluZ3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gISFhbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEdXJhdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBJbiBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+ICEhYW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cdFxuXHRcdFx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZEFuaW1hdGlvbk9uU2Nyb2xsSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHQvL1xuXHRcdGNvbnN0IHtjbGFzc05hbWU6IG9sZENsYXNzTmFtZX0gPSBwcm9wcztcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkge1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IChvbGRDbGFzc05hbWUgPyBvbGRDbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoY3VyICE9PSBhbmltYXRpb25DbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGFuaW1hdGlvbkNsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0Li4uKChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkgJiYgeydkYXRhLWFuaW1hdGUnOiAnJ30pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluICYmIHsnZGF0YS1hbmltYXRlLWluJzogYW5pbWF0ZUlufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0ICYmIHsnZGF0YS1hbmltYXRlLW91dCc6IGFuaW1hdGVPdXR9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbkR1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLWluLWR1cmF0aW9uJzogYW5pbWF0ZUluRHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXREdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb259KSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcblxuXG4iXSwibmFtZXMiOlsiYWRkRmlsdGVyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIk5vdGljZSIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUZXh0IiwiVGV4dCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCIsIlRvb2xzUGFuZWwiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIiwiVG9vbHNQYW5lbEl0ZW0iLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VFZmZlY3QiLCJfXyIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiQW5pbWF0ZUluSGVscFRleHQiLCJwcm9wcyIsIkFuaW1hdGVPdXRIZWxwVGV4dCIsIkFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQiLCJBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsImFuaW1hdGlvbkNsYXNzIiwic2V0dGluZ3MiLCJhdHRyaWJ1dGVzIiwiaDJtbEFuaW1hdGlvbk9uU2Nyb2xsIiwidHlwZSIsImRlZmF1bHQiLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJCbG9ja0VkaXQiLCJzZXRBdHRyaWJ1dGVzIiwiYW5pbWF0aW9ucyIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJyZWR1Y2UiLCJyZXMiLCJzdHlsZVNoZWV0IiwiaHJlZiIsImluY2x1ZGVzIiwiY3NzUnVsZXMiLCJydWxlIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsIkNTU1N0eWxlUnVsZSIsInNlbGVjdG9yVGV4dCIsImxhYmVsIiwic3R5bGUiLCJhbmltYXRpb25OYW1lIiwicmVwbGFjZSIsImN1ciIsImluZCIsInRvVXBwZXJDYXNlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXJnaW5Cb3R0b20iLCJuZXdEdXJhdGlvbiIsImNsYXNzTmFtZSIsIm9sZENsYXNzTmFtZSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==