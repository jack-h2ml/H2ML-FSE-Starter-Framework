/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/getAnimateCssDefinitions/index.js":
/*!******************************************************!*\
  !*** ../../common/getAnimateCssDefinitions/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAnimateCssDefinitions": function() { return /* binding */ getAnimateCssDefinitions; }
/* harmony export */ });
const getAnimateCssDefinitions = () => [...document.styleSheets].reduce((res, styleSheet) => {
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
}, []);

/***/ }),

/***/ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js":
/*!***********************************************************************************!*\
  !*** ./src/editor_dependencies/local_components/FilterInspectorControls/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterInspectorControls": function() { return /* binding */ FilterInspectorControls; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HelpText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../HelpText */ "./src/editor_dependencies/local_components/HelpText/index.js");

/**
 * WordPress Dependencies
 */





/**
 * Internal Dependencies
 */



/**
 * The JSX
 */

const FilterInspectorControls = props => {
  //
  const {
    existingAttributes,
    existingAttributes: {
      animateIn,
      animateOut,
      animateInDuration,
      animateOutDuration,
      animateDirection,
      animateThreshold
    },
    defaultAttributes,
    animationClassNames,
    setAttributes
  } = props;
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate on Scroll", 'h2ml'),
    initialOpen: false,
    className: 'h2mlAnimateOnScrollPanel'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
    as: 'div',
    spacing: 4
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    isDismissible: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
    size: '12px',
    color: 'rgb(117, 117, 117)'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("When adding animations which transition off-screen ensure that the document body has the", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"
  }, "overflow-x"), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("property set to either 'hidden' or 'clip'.", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    onChange: newAnimation => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateIn: newAnimation
        }
      });
    },
    value: animateIn,
    options: animationClassNames.animateIn,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set the 'Animate In' style", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateInHelpText, null),
    style: {
      marginBottom: 0
    },
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    onChange: newAnimation => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateOut: newAnimation
        }
      });
    },
    value: animateOut,
    options: animationClassNames.animateOut,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set the 'Animate Out' style", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateOutHelpText, null),
    style: {
      marginBottom: 0
    },
    __nextHasNoMarginBottom: true
  }), (animateIn || animateOut) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate on Scroll Additional Settings", 'h2ml'),
    resetAll: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          ...defaultAttributes
        }
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateInDuration !== defaultAttributes.animateInDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateInDuration: defaultAttributes.animateInDuration
        }
      });
    },
    isShownByDefault: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: animateInDuration,
    onChange: newDuration => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateInDuration: newDuration
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateInDurationHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateOutDuration !== defaultAttributes.animateOutDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateOutDuration: defaultAttributes.animateOutDuration
        }
      });
    },
    isShownByDefault: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: animateOutDuration,
    onChange: newDuration => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateOutDuration: newDuration
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateOutDurationHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateThreshold !== defaultAttributes.animateThreshold,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Threshold", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateThreshold: defaultAttributes.animateThreshold
        }
      });
    },
    isShownByDefault: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    onChange: newThreshold => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateThreshold: newThreshold
        }
      });
    },
    value: animateThreshold,
    min: 0.1,
    max: 1,
    step: 0.1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Threshold", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateThresholdHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateDirection !== defaultAttributes.animateDirection,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Direction", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateDirection: defaultAttributes.animateDirection
        }
      });
    },
    isShownByDefault: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    onChange: newDirection => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateDirection: newDirection
        }
      });
    },
    value: animateDirection,
    options: [{
      value: 'forwards',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Forwards (Default)", 'h2ml')
    }, {
      value: 'backwards',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Backwards", 'h2ml')
    }, {
      value: 'both',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Both (Experimental)", 'h2ml')
    }],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Direction", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateDirectionHelpText, null),
    style: {
      marginBottom: 0
    },
    __nextHasNoMarginBottom: true
  })))))));
};

/***/ }),

/***/ "./src/editor_dependencies/local_components/HelpText/index.js":
/*!********************************************************************!*\
  !*** ./src/editor_dependencies/local_components/HelpText/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateDirectionHelpText": function() { return /* binding */ AnimateDirectionHelpText; },
/* harmony export */   "AnimateInDurationHelpText": function() { return /* binding */ AnimateInDurationHelpText; },
/* harmony export */   "AnimateInHelpText": function() { return /* binding */ AnimateInHelpText; },
/* harmony export */   "AnimateOutDurationHelpText": function() { return /* binding */ AnimateOutDurationHelpText; },
/* harmony export */   "AnimateOutHelpText": function() { return /* binding */ AnimateOutHelpText; },
/* harmony export */   "AnimateThresholdHelpText": function() { return /* binding */ AnimateThresholdHelpText; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress Dependencies
 */




/**
 * The JSX
 */

const AnimateInHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The 'Animate In' animation plays when scrolling the block into view.", 'h2ml'));
const AnimateOutHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The 'Animate Out' animation plays when scrolling the block out of view.", 'h2ml'));
const AnimateInDurationHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate In'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '750ms'.", 'h2ml')));
const AnimateOutDurationHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Out'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '750ms'.", 'h2ml')));
const AnimateThresholdHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Threshold', this determines how much of the block must be visible before the animations play.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '0.5', which is equal to 50% of the element being visible.", 'h2ml')));
const AnimateDirectionHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Direction', this determines which scrolling behaviours trigger the animation.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is 'Forwards'.", 'h2ml')));

/***/ }),

/***/ "../../store/index.js":
/*!****************************!*\
  !*** ../../store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('h2mlFilterStore', {
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      globals: {}
    };
    let action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case 'H2ML_SET_GLOBAL':
        {
          return {
            ...state,
            [action.key]: {
              ...(state[action.key] && state.value),
              ...action.value
            }
          };
        }
    }
    return state;
  },
  actions: {
    setGlobal(key, value) {
      return {
        type: 'H2ML_SET_GLOBAL',
        key,
        value
      };
    }
  },
  selectors: {
    hasGlobal(state, key) {
      return Object.hasOwn(state, key);
    },
    getGlobal(state, key) {
      const {
        [key]: values
      } = state;
      return values;
    }
  },
  persist: ['preferences']
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../store */ "../../store/index.js");
/* harmony import */ var _common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../common/getAnimateCssDefinitions */ "../../common/getAnimateCssDefinitions/index.js");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");

/**
 * WordPress Dependencies
 */






/**
 * Internal Dependencies
 */






/**
 * External Dependencies
 */



/*
 * Global
 */

const animateIsAnimatedClass = 'animate__animated';
const defaultAnimateOnScrollValues = {
  animateInDuration: '750ms',
  animateOutDuration: '750ms',
  animateThreshold: 0.5,
  animateDirection: 'forwards'
};

/** 
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'h2ml/add-animate-on-scroll-attribute', settings => {
  //
  const {
    h2mlAnimationOnScroll = false
  } = settings.attributes;
  if (h2mlAnimationOnScroll) {
    console.log('Testing');
  }
  //
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      h2mlAnimateOnScroll: {
        type: 'object',
        default: {
          animateIn: '',
          animateOut: '',
          ...defaultAnimateOnScrollValues
        }
      }
    }
  };
});

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'h2ml/add-animate-on-scroll-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    attributes: {
      h2mlAnimateOnScroll: h2mlAnimateOnScrollAttributes,
      h2mlAnimateOnScroll: {
        animateIn,
        animateOut
      } = {}
    },
    setAttributes
  } = props;
  //
  const {
    hasGlobal,
    getGlobal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    setGlobal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  if (!hasGlobal('ParsedAnimateDotCSS')) {
    setGlobal('ParsedAnimateDotCSS', (0,_common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_7__.getAnimateCssDefinitions)());
  }
  //
  if (animateIn !== undefined || animateOut !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_8__.FilterInspectorControls, {
      existingAttributes: h2mlAnimateOnScrollAttributes,
      defaultAttributes: defaultAnimateOnScrollValues,
      animationClassNames: getGlobal('ParsedAnimateDotCSS'),
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'addAnimateOnScrollInspectorControlsEdit'));

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveContent.extraProps', 'h2ml/add-animate-on-scroll-styles-save', (props, type, attributes) => {
  //
  const {
    className: oldClassName
  } = props;
  const {
    h2mlAnimateOnScroll: {
      animateIn,
      animateOut,
      animateInDuration,
      animateOutDuration,
      animateThreshold,
      animateDirection
    } = {}
  } = attributes;
  //
  if (animateIn || animateOut) {
    //
    const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
      return cur !== animateIsAnimatedClass ? `${res} ${cur}` : `${res}`;
    }, animateIsAnimatedClass);
    //
    return {
      ...props,
      className,
      'data-animate': '',
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
      }),
      ...(animateDirection && {
        'data-animate-direction': animateDirection
      }),
      ...(animateThreshold && {
        'data-animate-Threshold': animateThreshold
      })
    };
  }
  return props;
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBQyxpQkFBaUIsRUFBRUE7TUFBUyxDQUFDLENBQUM7TUFDaEQsSUFBSVMsVUFBVSxJQUFJO1FBQUMsa0JBQWtCLEVBQUVBO01BQVUsQ0FBQyxDQUFDO01BQ25ELElBQUk0QixpQkFBaUIsSUFBSTtRQUFDLDBCQUEwQixFQUFFQTtNQUFpQixDQUFDLENBQUM7TUFDekUsSUFBSUMsa0JBQWtCLElBQUk7UUFBQywyQkFBMkIsRUFBRUE7TUFBa0IsQ0FBQyxDQUFDO01BQzVFLElBQUlDLGdCQUFnQixJQUFJO1FBQUMsd0JBQXdCLEVBQUVBO01BQWdCLENBQUMsQ0FBQztNQUNyRSxJQUFJQyxnQkFBZ0IsSUFBSTtRQUFDLHdCQUF3QixFQUFFQTtNQUFnQixDQUFDO0lBQ3JFLENBQUM7RUFDRjtFQUNBLE9BQU9MLEtBQUs7QUFDYixDQUFDLENBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9nZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2VkaXRvcl9kZXBlbmRlbmNpZXMvbG9jYWxfY29tcG9uZW50cy9IZWxwVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uLi8uLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMgPSAoKSA9PiBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLnJlZHVjZSgocmVzLCBzdHlsZVNoZWV0KSA9PiB7XG5cdGlmKHN0eWxlU2hlZXQuaHJlZiAmJiBzdHlsZVNoZWV0LmhyZWYuaW5jbHVkZXMoJ2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0JykpIHtcblx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0Li4uKChcblx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX18nKVxuXHRcdFx0XHQmJiAhcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX19hbmltYXRlZCcpXG5cdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dCAhPT0gJy5hbmltYXRlX19qYWNrSW5UaGVCb3gnXG5cdFx0XHQpICYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSBcblx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVJbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0gOiB7YW5pbWF0ZU91dDogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSlcblx0XHRcdClcblx0XHR9KSwge1xuXHRcdFx0YW5pbWF0ZUluOiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dLFxuXHRcdFx0YW5pbWF0ZU91dDogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZXM7XG5cdH1cbn0sIFtdKTsiLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0Tm90aWNlLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG5cdF9fZXhwZXJpbWVudGFsVGV4dCBhcyBUZXh0LFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEFuaW1hdGVJbkhlbHBUZXh0LFxuXHRBbmltYXRlT3V0SGVscFRleHQsXG5cdEFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQsXG5cdEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0LFxuXHRBbmltYXRlVGhyZXNob2xkSGVscFRleHQsXG5cdEFuaW1hdGVEaXJlY3Rpb25IZWxwVGV4dFxufSBmcm9tICcuLy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHRhbmltYXRlRGlyZWN0aW9uLFxuXHRcdFx0YW5pbWF0ZVRocmVzaG9sZFxuXHRcdH0sXG5cdFx0ZGVmYXVsdEF0dHJpYnV0ZXMsXG5cdFx0YW5pbWF0aW9uQ2xhc3NOYW1lcyxcblx0XHRzZXRBdHRyaWJ1dGVzXG5cdH0gPSBwcm9wcztcblx0Ly9cblx0cmV0dXJuIChcblx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17X18oXCJBbmltYXRlIG9uIFNjcm9sbFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdGluaXRpYWxPcGVuPXtmYWxzZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9eydoMm1sQW5pbWF0ZU9uU2Nyb2xsUGFuZWwnfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZTdGFja1xuXHRcdFx0XHRcdFx0YXM9eydkaXYnfVxuXHRcdFx0XHRcdFx0c3BhY2luZz17NH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8Tm90aWNlXG5cdFx0XHRcdFx0XHRcdGlzRGlzbWlzc2libGU9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxuXHRcdFx0XHRcdFx0XHRcdHNpemU9eycxMnB4J31cblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17J3JnYigxMTcsIDExNywgMTE3KSd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7X18oXCJXaGVuIGFkZGluZyBhbmltYXRpb25zIHdoaWNoIHRyYW5zaXRpb24gb2ZmLXNjcmVlbiBlbnN1cmUgdGhhdCB0aGUgZG9jdW1lbnQgYm9keSBoYXMgdGhlXCIsICdoMm1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9vdmVyZmxvdy15XCI+b3ZlcmZsb3cteDwvRXh0ZXJuYWxMaW5rPiB7X18oXCJwcm9wZXJ0eSBzZXQgdG8gZWl0aGVyICdoaWRkZW4nIG9yICdjbGlwJy5cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0FuaW1hdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbjogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2FuaW1hdGlvbkNsYXNzTmFtZXMuYW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTZXQgdGhlICdBbmltYXRlIEluJyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZUluSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0FuaW1hdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6IG5ld0FuaW1hdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTZXQgdGhlICdBbmltYXRlIE91dCcgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVPdXRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpICYmIChcblx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIG9uIFNjcm9sbCBBZGRpdGlvbmFsIFNldHRpbmdzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVzZXRBbGw9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmRlZmF1bHRBdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlSW5EdXJhdGlvbiAhPT0gZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBkZWZhdWx0QXR0cmlidXRlcy5hbmltYXRlSW5EdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEdXJhdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IGFuaW1hdGVPdXREdXJhdGlvbiAhPT0gZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiBkZWZhdWx0QXR0cmlidXRlcy5hbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZVRocmVzaG9sZCAhPT0gZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZVRocmVzaG9sZH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgVGhyZXNob2xkXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQ6IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVUaHJlc2hvbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3VGhyZXNob2xkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVRocmVzaG9sZDogbmV3VGhyZXNob2xkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlVGhyZXNob2xkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49ezAuMX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGVwPXswLjF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgVGhyZXNob2xkXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlVGhyZXNob2xkSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZURpcmVjdGlvbiAhPT0gZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZURpcmVjdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgRGlyZWN0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVEaXJlY3Rpb246IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVEaXJlY3Rpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZURpcmVjdGlvbjogbmV3RGlyZWN0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlRGlyZWN0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZm9yd2FyZHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyhcIkZvcndhcmRzIChEZWZhdWx0KVwiLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2JhY2t3YXJkcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFwiQmFja3dhcmRzXCIsICdoMm1sJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYm90aCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFwiQm90aCAoRXhwZXJpbWVudGFsKVwiLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIERpcmVjdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZURpcmVjdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9WU3RhY2s+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9QYW5lbD5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHQpO1xufSIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEV4dGVybmFsTGluayxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogVGhlIEpTWFxuICovXG5cbmV4cG9ydCBjb25zdCBBbmltYXRlSW5IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgSW4nIGFuaW1hdGlvbiBwbGF5cyB3aGVuIHNjcm9sbGluZyB0aGUgYmxvY2sgaW50byB2aWV3LlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBbmltYXRlT3V0SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIE91dCcgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIHRoZSBibG9jayBvdXQgb2Ygdmlldy5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuXG5leHBvcnQgY29uc3QgQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIEluJ1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcImR1cmF0aW9uXCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnNzUwbXMnLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzc1MG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVUaHJlc2hvbGRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIFRocmVzaG9sZCcsIHRoaXMgZGV0ZXJtaW5lcyBob3cgbXVjaCBvZiB0aGUgYmxvY2sgbXVzdCBiZSB2aXNpYmxlIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBwbGF5LlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnMC41Jywgd2hpY2ggaXMgZXF1YWwgdG8gNTAlIG9mIHRoZSBlbGVtZW50IGJlaW5nIHZpc2libGUuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBBbmltYXRlRGlyZWN0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBEaXJlY3Rpb24nLCB0aGlzIGRldGVybWluZXMgd2hpY2ggc2Nyb2xsaW5nIGJlaGF2aW91cnMgdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnRm9yd2FyZHMnLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdXhTdG9yZSwgcmVnaXN0ZXIgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKCdoMm1sRmlsdGVyU3RvcmUnLCB7XG5cdHJlZHVjZXIoc3RhdGUgPSB7XG5cdFx0Z2xvYmFsczoge31cblx0fSwgYWN0aW9uKSB7XG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0Y2FzZSAnSDJNTF9TRVRfR0xPQkFMJzoge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdFthY3Rpb24ua2V5XToge1xuXHRcdFx0XHRcdFx0Li4uKHN0YXRlW2FjdGlvbi5rZXldICYmIHN0YXRlLnZhbHVlKSxcblx0XHRcdFx0XHRcdC4uLmFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0YWN0aW9uczoge1xuXHRcdHNldEdsb2JhbChrZXksIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0eXBlOiAnSDJNTF9TRVRfR0xPQkFMJyxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0aGFzR2xvYmFsKHN0YXRlLCBrZXkpIHtcblx0XHRcdHJldHVybiBPYmplY3QuaGFzT3duKHN0YXRlLCBrZXkpO1xuXHRcdH0sXG5cdFx0Z2V0R2xvYmFsKHN0YXRlLCBrZXkpIHtcblx0XHRcdGNvbnN0IHsgXG5cdFx0XHRcdFtrZXldIDogdmFsdWVzXG5cdFx0XHR9ID0gc3RhdGU7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH0sXG5cdH0sXG5cdHBlcnNpc3Q6IFsgJ3ByZWZlcmVuY2VzJyBdLFxufSk7XG5cbnJlZ2lzdGVyKHN0b3JlKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHtcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGgybWxGaWx0ZXJTdG9yZVxufSBmcm9tICcuLy4uLy4uLy4uL3N0b3JlJztcblxuaW1wb3J0IHtcblx0Z2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zXG59IGZyb20gJy4vLi4vLi4vLi4vY29tbW9uL2dldEFuaW1hdGVDc3NEZWZpbml0aW9ucyc7XG5cbmltcG9ydCB7XG5cdEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG59IGZyb20gJy4vZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzJztcblxuLyoqXG4gKiBFeHRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyc7XG5cbi8qXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBhbmltYXRlSXNBbmltYXRlZENsYXNzID0gJ2FuaW1hdGVfX2FuaW1hdGVkJztcblxuY29uc3QgZGVmYXVsdEFuaW1hdGVPblNjcm9sbFZhbHVlcyA9IHtcblx0YW5pbWF0ZUluRHVyYXRpb246ICc3NTBtcycsXG5cdGFuaW1hdGVPdXREdXJhdGlvbjogJzc1MG1zJyxcblx0YW5pbWF0ZVRocmVzaG9sZDogMC41LFxuXHRhbmltYXRlRGlyZWN0aW9uOiAnZm9yd2FyZHMnXG59XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtYW5pbWF0ZS1vbi1zY3JvbGwtYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGwgPSBmYWxzZVxuXHRcdH0gPSBzZXR0aW5ncy5hdHRyaWJ1dGVzO1xuXHRcdGlmKGgybWxBbmltYXRpb25PblNjcm9sbCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1Rlc3RpbmcnKTtcblx0XHR9XG5cdFx0Ly9cblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRhbmltYXRlSW46ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogJycsXG5cdFx0XHRcdFx0XHQuLi5kZWZhdWx0QW5pbWF0ZU9uU2Nyb2xsVmFsdWVzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1hbmltYXRlLW9uLXNjcm9sbC1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiBoMm1sQW5pbWF0ZU9uU2Nyb2xsQXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHR9ID0ge31cblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXHRcdC8vXG5cdFx0Y29uc3Qge2hhc0dsb2JhbCwgZ2V0R2xvYmFsfSA9IHVzZVNlbGVjdChoMm1sRmlsdGVyU3RvcmUpO1xuXHRcdGNvbnN0IHtzZXRHbG9iYWx9ID0gZGlzcGF0Y2goaDJtbEZpbHRlclN0b3JlKTtcblx0XHRpZighaGFzR2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJykpIHtcblx0XHRcdHNldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycsIGdldEFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0XHR9IFxuXHRcdC8vXG5cdFx0aWYgKGFuaW1hdGVJbiAhPT0gdW5kZWZpbmVkIHx8IGFuaW1hdGVPdXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICg8PlxuXHRcdFx0XHQ8RmlsdGVySW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0XHRleGlzdGluZ0F0dHJpYnV0ZXM9e2gybWxBbmltYXRlT25TY3JvbGxBdHRyaWJ1dGVzfVxuXHRcdFx0XHRcdGRlZmF1bHRBdHRyaWJ1dGVzPXtkZWZhdWx0QW5pbWF0ZU9uU2Nyb2xsVmFsdWVzfVx0XG5cdFx0XHRcdFx0YW5pbWF0aW9uQ2xhc3NOYW1lcz17Z2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJyl9XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcz17c2V0QXR0cmlidXRlc31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+XG5cdFx0XHQ8Lz4pO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkQW5pbWF0ZU9uU2Nyb2xsSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtYW5pbWF0ZS1vbi1zY3JvbGwtc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHQvL1xuXHRcdGNvbnN0IHtjbGFzc05hbWU6IG9sZENsYXNzTmFtZX0gPSBwcm9wcztcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZVRocmVzaG9sZCxcblx0XHRcdFx0YW5pbWF0ZURpcmVjdGlvbixcblx0XHRcdH0gPSB7fVxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdC8vXG5cdFx0aWYgKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChjdXIgIT09IGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MpID8gYCR7cmVzfSAke2N1cn1gIDogYCR7cmVzfWBcblx0XHRcdH0sIChhbmltYXRlSXNBbmltYXRlZENsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtYW5pbWF0ZSc6ICcnLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluICYmIHsnZGF0YS1hbmltYXRlLWluJzogYW5pbWF0ZUlufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0ICYmIHsnZGF0YS1hbmltYXRlLW91dCc6IGFuaW1hdGVPdXR9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbkR1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLWluLWR1cmF0aW9uJzogYW5pbWF0ZUluRHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXREdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVEaXJlY3Rpb24gJiYgeydkYXRhLWFuaW1hdGUtZGlyZWN0aW9uJzogYW5pbWF0ZURpcmVjdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZVRocmVzaG9sZCAmJiB7J2RhdGEtYW5pbWF0ZS1UaHJlc2hvbGQnOiBhbmltYXRlVGhyZXNob2xkfSksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cblxuIl0sIm5hbWVzIjpbImdldEFuaW1hdGVDc3NEZWZpbml0aW9ucyIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJyZWR1Y2UiLCJyZXMiLCJzdHlsZVNoZWV0IiwiaHJlZiIsImluY2x1ZGVzIiwiY3NzUnVsZXMiLCJydWxlIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsIkNTU1N0eWxlUnVsZSIsInNlbGVjdG9yVGV4dCIsImFuaW1hdGVJbiIsImxhYmVsIiwic3R5bGUiLCJhbmltYXRpb25OYW1lIiwicmVwbGFjZSIsImN1ciIsImluZCIsInRvVXBwZXJDYXNlIiwidmFsdWUiLCJhbmltYXRlT3V0IiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIk5vdGljZSIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUZXh0IiwiVGV4dCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCIsIlRvb2xzUGFuZWwiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIiwiVG9vbHNQYW5lbEl0ZW0iLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwiX18iLCJBbmltYXRlSW5IZWxwVGV4dCIsIkFuaW1hdGVPdXRIZWxwVGV4dCIsIkFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQiLCJBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsIkFuaW1hdGVUaHJlc2hvbGRIZWxwVGV4dCIsIkFuaW1hdGVEaXJlY3Rpb25IZWxwVGV4dCIsIkZpbHRlckluc3BlY3RvckNvbnRyb2xzIiwicHJvcHMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsImFuaW1hdGVEaXJlY3Rpb24iLCJhbmltYXRlVGhyZXNob2xkIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJhbmltYXRpb25DbGFzc05hbWVzIiwic2V0QXR0cmlidXRlcyIsIm5ld0FuaW1hdGlvbiIsImgybWxBbmltYXRlT25TY3JvbGwiLCJtYXJnaW5Cb3R0b20iLCJuZXdEdXJhdGlvbiIsIm5ld1RocmVzaG9sZCIsIm5ld0RpcmVjdGlvbiIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInN0b3JlIiwicmVkdWNlciIsInN0YXRlIiwiZ2xvYmFscyIsImFjdGlvbiIsInR5cGUiLCJrZXkiLCJhY3Rpb25zIiwic2V0R2xvYmFsIiwic2VsZWN0b3JzIiwiaGFzR2xvYmFsIiwiaGFzT3duIiwiZ2V0R2xvYmFsIiwidmFsdWVzIiwicGVyc2lzdCIsImFkZEZpbHRlciIsInVzZVNlbGVjdCIsImRpc3BhdGNoIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJoMm1sRmlsdGVyU3RvcmUiLCJhbmltYXRlSXNBbmltYXRlZENsYXNzIiwiZGVmYXVsdEFuaW1hdGVPblNjcm9sbFZhbHVlcyIsInNldHRpbmdzIiwiaDJtbEFuaW1hdGlvbk9uU2Nyb2xsIiwiYXR0cmlidXRlcyIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwiQmxvY2tFZGl0IiwiaDJtbEFuaW1hdGVPblNjcm9sbEF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJjbGFzc05hbWUiLCJvbGRDbGFzc05hbWUiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=