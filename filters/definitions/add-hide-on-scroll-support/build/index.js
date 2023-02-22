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
      animateOut,
      animateIn,
      animateInDuration,
      animateOutDuration,
      triggerThreshold
    },
    defaultAttributes,
    animationClassNames,
    setAttributes
  } = props;
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide on Scroll", 'h2ml'),
    initialOpen: false,
    className: 'h2mlHideOnScrollPanel'
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
        h2mlHideOnScroll: {
          ...existingAttributes,
          animateOut: newAnimation
        }
      });
    },
    value: animateOut,
    options: animationClassNames.animateOut,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set the 'Animate Out' style", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideAnimateOutHelpText, null),
    style: {
      marginBottom: 0
    },
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    onChange: newAnimation => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          animateIn: newAnimation
        }
      });
    },
    value: animateIn,
    options: animationClassNames.animateIn,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Set the 'Animate In' style", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideAnimateInHelpText, null),
    style: {
      marginBottom: 0
    },
    __nextHasNoMarginBottom: true
  }), (animateIn || animateOut) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    onChange: newThreshold => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          triggerThreshold: newThreshold ? newThreshold : 100
        }
      });
    },
    value: triggerThreshold,
    min: 1,
    step: 25,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Trigger Threshold", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideTriggerThresholdHelpText, null)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide on Scroll Additional Settings", 'h2ml'),
    resetAll: () => {
      setAttributes({
        h2mlHideOnScroll: {
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
        h2mlHideOnScroll: {
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
        h2mlHideOnScroll: {
          ...existingAttributes,
          animateInDuration: newDuration
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideAnimateInDurationHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateOutDuration !== defaultAttributes.animateOutDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlHideOnScroll: {
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
        h2mlHideOnScroll: {
          ...existingAttributes,
          animateOutDuration: newDuration
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideAnimateOutDurationHelpText, null)
  }))))))));
};

/***/ }),

/***/ "./src/editor_dependencies/local_components/HelpText/index.js":
/*!********************************************************************!*\
  !*** ./src/editor_dependencies/local_components/HelpText/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideAnimateInDurationHelpText": function() { return /* binding */ HideAnimateInDurationHelpText; },
/* harmony export */   "HideAnimateInHelpText": function() { return /* binding */ HideAnimateInHelpText; },
/* harmony export */   "HideAnimateOutDurationHelpText": function() { return /* binding */ HideAnimateOutDurationHelpText; },
/* harmony export */   "HideAnimateOutHelpText": function() { return /* binding */ HideAnimateOutHelpText; },
/* harmony export */   "HideTriggerThresholdHelpText": function() { return /* binding */ HideTriggerThresholdHelpText; }
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

const HideAnimateOutHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The 'Animate Out' animation plays when scrolling beyond the specified trigger threshold.", 'h2ml'));
const HideAnimateInHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The 'Animate In' animation plays when scrolling below the specified trigger threshold.", 'h2ml'));
const HideTriggerThresholdHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Trigger Threshold', this determines how far the user must scroll (in px's) before the block is hidden.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '100'.", 'h2ml')));
const HideAnimateInDurationHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate In'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '500ms'.", 'h2ml')));
const HideAnimateOutDurationHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Out'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '500ms'.", 'h2ml')));

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../store */ "../../store/index.js");
/* harmony import */ var _common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../common/getAnimateCssDefinitions */ "../../common/getAnimateCssDefinitions/index.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");

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

const elemWillHideClass = 'animate__animated';
const defaultHideOnScrollValues = {
  animateInDuration: '500ms',
  animateOutDuration: '500ms'
};

/** 
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'h2ml/add-hide-on-scroll-attribute', settings => {
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      h2mlHideOnScroll: {
        type: 'object',
        default: {
          animateIn: '',
          animateOut: '',
          animateThreshold: 100,
          ...defaultHideOnScrollValues
        }
      }
    }
  };
});

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'h2ml/add-hide-on-scroll-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockEdit => props => {
  const {
    attributes: {
      h2mlHideOnScroll: h2mlHideOnScrollAttributes
    },
    clientId,
    setAttributes
  } = props;
  //
  const {
    getBlockParents,
    getBlockAttributes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const hasFixedPositionParent = getBlockParents(clientId).find(parentClientId => !!getBlockAttributes(parentClientId).h2mlPositioning?.type);
  //
  if (hasFixedPositionParent) {
    //
    const {
      hasGlobal,
      getGlobal
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      setGlobal
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store);
    if (!hasGlobal('ParsedAnimateDotCSS')) setGlobal('ParsedAnimateDotCSS', (0,_common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_9__.getAnimateCssDefinitions)());
    const animationClassNames = getGlobal('ParsedAnimateDotCSS');
    //

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_11__.FilterInspectorControls, {
      existingAttributes: h2mlHideOnScrollAttributes,
      defaultAttributes: defaultHideOnScrollValues,
      animationClassNames: getGlobal('ParsedAnimateDotCSS'),
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'addHideOnScrollInspectorControlsEdit'));

/**
 * 
 *

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-positioning-styles-save',
	(props, type, attributes) => {
		//
		const {className: oldClassName} = props;
		const {
			h2mlAnimationOnScroll: {
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
				return (cur !== animateIsAnimatedClass) ? `${res} ${cur}` : `${res}`
			}, (animateIsAnimatedClass));
			//
			return {
				...props,
				className,
				'data-animate': '',
				...(animateIn && {'data-animate-in': animateIn}),
				...(animateOut && {'data-animate-out': animateOut}),
				...(animateInDuration && {'data-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-animate-out-duration': animateOutDuration}),
				...(animateDirection && {'data-animate-direction': animateDirection}),
				...(animateThreshold && {'data-animate-Threshold': animateThreshold}),
			};
		}
		return props;
	}
);
*/
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL2dldEFuaW1hdGVDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEFuaW1hdGVDc3NEZWZpbml0aW9ucyA9ICgpID0+IFsuLi5kb2N1bWVudC5zdHlsZVNoZWV0c10ucmVkdWNlKChyZXMsIHN0eWxlU2hlZXQpID0+IHtcblx0aWYoc3R5bGVTaGVldC5ocmVmICYmIHN0eWxlU2hlZXQuaHJlZi5pbmNsdWRlcygnYWRkLWFuaW1hdGUtb24tc2Nyb2xsLXN1cHBvcnQnKSkge1xuXHRcdHJldHVybiBbLi4uc3R5bGVTaGVldC5jc3NSdWxlc10ucmVkdWNlKChyZXMsIHJ1bGUpID0+ICh7XG5cdFx0XHQuLi5yZXMsXG5cdFx0XHQuLi4oKFxuXHRcdFx0XHRPYmplY3QuZ2V0UHJvdG90eXBlT2YocnVsZSkuY29uc3RydWN0b3IgPT09IENTU1N0eWxlUnVsZVxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnLmFuaW1hdGVfXycpXG5cdFx0XHRcdCYmICFydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnLmFuaW1hdGVfX2FuaW1hdGVkJylcblx0XHRcdFx0JiYgKHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdJbicpIHx8IHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdPdXQnKSkgXG5cdFx0XHRcdCYmIHJ1bGUuc2VsZWN0b3JUZXh0ICE9PSAnLmFuaW1hdGVfX2phY2tJblRoZUJveCdcblx0XHRcdCkgJiYgKHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdJbicpIFxuXHRcdFx0XHQ/IHthbmltYXRlSW46IFtcblx0XHRcdFx0XHQuLi5yZXMuYW5pbWF0ZUluLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSA6IHthbmltYXRlT3V0OiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6IFsuLi5ydWxlLnN0eWxlLmFuaW1hdGlvbk5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKV0ucmVkdWNlKChyZXMsIGN1ciwgaW5kKSA9PiAoXG5cdFx0XHRcdFx0XHRcdGAke3Jlc30keyFpbmQgPyBjdXIudG9VcHBlckNhc2UoKSA6IGN1cn1gXG5cdFx0XHRcdFx0XHQpLCAnJyksXG5cdFx0XHRcdFx0XHR2YWx1ZTogcnVsZS5zZWxlY3RvclRleHQucmVwbGFjZSgvWy4sXFxzXS9nLCAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF19KVxuXHRcdFx0KVxuXHRcdH0pLCB7XG5cdFx0XHRhbmltYXRlSW46IFt7XG5cdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fV0sXG5cdFx0XHRhbmltYXRlT3V0OiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHJlcztcblx0fVxufSwgW10pOyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEhpZGVBbmltYXRlSW5IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCxcblx0SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQsXG5cdEhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dFxufSBmcm9tICcuLy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHR0cmlnZ2VyVGhyZXNob2xkXG5cdFx0fSxcblx0XHRkZWZhdWx0QXR0cmlidXRlcyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkhpZGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxIaWRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZUluSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7KGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3VGhyZXNob2xkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJUaHJlc2hvbGQ6IG5ld1RocmVzaG9sZCA/IG5ld1RocmVzaG9sZCA6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RyaWdnZXJUaHJlc2hvbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwPXsyNX1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRyaWdnZXIgVGhyZXNob2xkXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJIaWRlIG9uIFNjcm9sbCBBZGRpdGlvbmFsIFNldHRpbmdzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5kZWZhdWx0QXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZUluRHVyYXRpb24gIT09IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZUluRHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZU91dER1cmF0aW9uICE9PSBkZWZhdWx0QXR0cmlidXRlcy5hbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L1ZTdGFjaz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdCk7XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0RXh0ZXJuYWxMaW5rLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIE91dCcgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJleW9uZCB0aGUgc3BlY2lmaWVkIHRyaWdnZXIgdGhyZXNob2xkLlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBJbicgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJlbG93IHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ1RyaWdnZXIgVGhyZXNob2xkJywgdGhpcyBkZXRlcm1pbmVzIGhvdyBmYXIgdGhlIHVzZXIgbXVzdCBzY3JvbGwgKGluIHB4J3MpIGJlZm9yZSB0aGUgYmxvY2sgaXMgaGlkZGVuLlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnMTAwJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgSW4nXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBPdXQnXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1eFN0b3JlLCByZWdpc3RlciB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoJ2gybWxGaWx0ZXJTdG9yZScsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRnbG9iYWxzOiB7fVxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdIMk1MX1NFVF9HTE9CQUwnOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0W2FjdGlvbi5rZXldOiB7XG5cdFx0XHRcdFx0XHQuLi4oc3RhdGVbYWN0aW9uLmtleV0gJiYgc3RhdGUudmFsdWUpLFxuXHRcdFx0XHRcdFx0Li4uYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0R2xvYmFsKGtleSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6ICdIMk1MX1NFVF9HTE9CQUwnLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRoYXNHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5oYXNPd24oc3RhdGUsIGtleSk7XG5cdFx0fSxcblx0XHRnZXRHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0Y29uc3QgeyBcblx0XHRcdFx0W2tleV0gOiB2YWx1ZXNcblx0XHRcdH0gPSBzdGF0ZTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fSxcblx0fSxcblx0cGVyc2lzdDogWyAncHJlZmVyZW5jZXMnIF0sXG59KTtcblxucmVnaXN0ZXIoc3RvcmUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZVxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEV4dGVybmFsTGluayxcblx0Tm90aWNlLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG5cdF9fZXhwZXJpbWVudGFsVGV4dCBhcyBUZXh0LFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi8uLi8uLi8uLi9zdG9yZSc7XG5cbmltcG9ydCB7XG5cdGdldEFuaW1hdGVDc3NEZWZpbml0aW9uc1xufSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi9nZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCB7IEZpbHRlckluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnLi9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMnO1xuXG4vKlxuICogR2xvYmFsXG4gKi9cblxuY29uc3QgZWxlbVdpbGxIaWRlQ2xhc3MgPSAnYW5pbWF0ZV9fYW5pbWF0ZWQnO1xuXG5jb25zdCBkZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzID0ge1xuXHRhbmltYXRlSW5EdXJhdGlvbjogJzUwMG1zJyxcblx0YW5pbWF0ZU91dER1cmF0aW9uOiAnNTAwbXMnLFxufVxuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQ6IDEwMCxcblx0XHRcdFx0XHRcdC4uLmRlZmF1bHRIaWRlT25TY3JvbGxWYWx1ZXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IGgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzLFxuXHRcdFx0fSxcblx0XHRcdGNsaWVudElkLFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHQvL1xuXHRcdGNvbnN0IHtnZXRCbG9ja1BhcmVudHMsIGdldEJsb2NrQXR0cmlidXRlc30gPSB1c2VTZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgaGFzRml4ZWRQb3NpdGlvblBhcmVudCA9IGdldEJsb2NrUGFyZW50cyhjbGllbnRJZCkuZmluZChwYXJlbnRDbGllbnRJZCA9PiAhIWdldEJsb2NrQXR0cmlidXRlcyhwYXJlbnRDbGllbnRJZCkuaDJtbFBvc2l0aW9uaW5nPy50eXBlKTtcblx0XHQvL1xuXHRcdGlmKGhhc0ZpeGVkUG9zaXRpb25QYXJlbnQpIHtcblxuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IHtoYXNHbG9iYWwsIGdldEdsb2JhbH0gPSB1c2VTZWxlY3QoaDJtbEZpbHRlclN0b3JlKTtcblx0XHRcdGNvbnN0IHtzZXRHbG9iYWx9ID0gZGlzcGF0Y2goaDJtbEZpbHRlclN0b3JlKTtcblx0XHRcdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkgc2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJywgZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zKCkpO1xuXHRcdFx0Y29uc3QgYW5pbWF0aW9uQ2xhc3NOYW1lcyA9IGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xuXHRcdFx0Ly9cblxuXHRcdFx0cmV0dXJuICg8PlxuXHRcdFx0XHQ8RmlsdGVySW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0XHRleGlzdGluZ0F0dHJpYnV0ZXM9e2gybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzfVxuXHRcdFx0XHRcdGRlZmF1bHRBdHRyaWJ1dGVzPXtkZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzfVx0XG5cdFx0XHRcdFx0YW5pbWF0aW9uQ2xhc3NOYW1lcz17Z2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJyl9XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcz17c2V0QXR0cmlidXRlc31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdDwvPik7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRIaWRlT25TY3JvbGxJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZVRocmVzaG9sZCxcblx0XHRcdFx0YW5pbWF0ZURpcmVjdGlvblxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Ly9cblx0XHRpZiAoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpIHtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSAob2xkQ2xhc3NOYW1lID8gb2xkQ2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXSkucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGN1ciAhPT0gYW5pbWF0ZUlzQW5pbWF0ZWRDbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MpKTtcblx0XHRcdC8vXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHQnZGF0YS1hbmltYXRlJzogJycsXG5cdFx0XHRcdC4uLihhbmltYXRlSW4gJiYgeydkYXRhLWFuaW1hdGUtaW4nOiBhbmltYXRlSW59KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXQgJiYgeydkYXRhLWFuaW1hdGUtb3V0JzogYW5pbWF0ZU91dH0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluRHVyYXRpb24gJiYgeydkYXRhLWFuaW1hdGUtaW4tZHVyYXRpb24nOiBhbmltYXRlSW5EdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dER1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLW91dC1kdXJhdGlvbic6IGFuaW1hdGVPdXREdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZURpcmVjdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1kaXJlY3Rpb24nOiBhbmltYXRlRGlyZWN0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlVGhyZXNob2xkICYmIHsnZGF0YS1hbmltYXRlLVRocmVzaG9sZCc6IGFuaW1hdGVUaHJlc2hvbGR9KSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcbiovXG5cbiJdLCJuYW1lcyI6WyJnZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwicmVkdWNlIiwicmVzIiwic3R5bGVTaGVldCIsImhyZWYiLCJpbmNsdWRlcyIsImNzc1J1bGVzIiwicnVsZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJDU1NTdHlsZVJ1bGUiLCJzZWxlY3RvclRleHQiLCJhbmltYXRlSW4iLCJsYWJlbCIsInN0eWxlIiwiYW5pbWF0aW9uTmFtZSIsInJlcGxhY2UiLCJjdXIiLCJpbmQiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlIiwiYW5pbWF0ZU91dCIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJOb3RpY2UiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVGV4dCIsIlRleHQiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIl9fIiwiSGlkZUFuaW1hdGVJbkhlbHBUZXh0IiwiSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCIsIkhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQiLCJIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsIkZpbHRlckluc3BlY3RvckNvbnRyb2xzIiwicHJvcHMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsInRyaWdnZXJUaHJlc2hvbGQiLCJkZWZhdWx0QXR0cmlidXRlcyIsImFuaW1hdGlvbkNsYXNzTmFtZXMiLCJzZXRBdHRyaWJ1dGVzIiwibmV3QW5pbWF0aW9uIiwiaDJtbEhpZGVPblNjcm9sbCIsIm1hcmdpbkJvdHRvbSIsIm5ld1RocmVzaG9sZCIsIm5ld0R1cmF0aW9uIiwiY3JlYXRlUmVkdXhTdG9yZSIsInJlZ2lzdGVyIiwic3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJnbG9iYWxzIiwiYWN0aW9uIiwidHlwZSIsImtleSIsImFjdGlvbnMiLCJzZXRHbG9iYWwiLCJzZWxlY3RvcnMiLCJoYXNHbG9iYWwiLCJoYXNPd24iLCJnZXRHbG9iYWwiLCJ2YWx1ZXMiLCJwZXJzaXN0IiwiYWRkRmlsdGVyIiwiYmxvY2tFZGl0b3JTdG9yZSIsInVzZVNlbGVjdCIsImRpc3BhdGNoIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJoMm1sRmlsdGVyU3RvcmUiLCJlbGVtV2lsbEhpZGVDbGFzcyIsImRlZmF1bHRIaWRlT25TY3JvbGxWYWx1ZXMiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJkZWZhdWx0IiwiYW5pbWF0ZVRocmVzaG9sZCIsIkJsb2NrRWRpdCIsImgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzIiwiY2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHMiLCJnZXRCbG9ja0F0dHJpYnV0ZXMiLCJoYXNGaXhlZFBvc2l0aW9uUGFyZW50IiwiZmluZCIsInBhcmVudENsaWVudElkIiwiaDJtbFBvc2l0aW9uaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==