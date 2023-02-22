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
/* harmony import */ var _HelpText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HelpText */ "./src/editor_dependencies/local_components/HelpText/index.js");

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store */ "../../store/index.js");
/* harmony import */ var _common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/getAnimateCssDefinitions */ "../../common/getAnimateCssDefinitions/index.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");

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

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'h2ml/add-hide-on-scroll-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => props => {
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
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    const {
      setGlobal
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store);
    if (!hasGlobal('ParsedAnimateDotCSS')) setGlobal('ParsedAnimateDotCSS', (0,_common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_8__.getAnimateCssDefinitions)());
    //

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_10__.FilterInspectorControls, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSSxJQUFJLENBQUNDLGNBQWMsSUFBSSxDQUFDLENBQUNILGtCQUFrQixDQUFDRyxjQUFjLENBQUMsQ0FBQ0MsZUFBZSxFQUFFOUIsSUFBSSxDQUFDO0VBQzNJO0VBQ0EsSUFBRzJCLHNCQUFzQixFQUFFO0lBRTFCO0lBQ0EsTUFBTTtNQUFDdEIsU0FBUztNQUFFRTtJQUFTLENBQUMsR0FBR0ssMERBQVMsQ0FBQ0cseUNBQWUsQ0FBQztJQUN6RCxNQUFNO01BQUNaO0lBQVMsQ0FBQyxHQUFHVSx5REFBUSxDQUFDRSx5Q0FBZSxDQUFDO0lBQzdDLElBQUcsQ0FBQ1YsU0FBUyxDQUFDLHFCQUFxQixDQUFDLEVBQUVGLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRXhFLDBGQUF3QixFQUFFLENBQUM7SUFDbEc7O0lBRUEsT0FBUSxrSUFDUCxrRUFBQyxtSEFBdUI7TUFDdkIsa0JBQWtCLEVBQUU0RiwwQkFBMkI7TUFDL0MsaUJBQWlCLEVBQUVOLHlCQUEwQjtNQUM3QyxtQkFBbUIsRUFBRVYsU0FBUyxDQUFDLHFCQUFxQixDQUFFO01BQ3RELGFBQWEsRUFBRXBCO0lBQWMsRUFDNUIsRUFDRixrRUFBQyxTQUFTLEVBQUtQLEtBQUssQ0FBRyxDQUNyQjtFQUNKO0VBQ0EsT0FBTyxrRUFBQyxTQUFTLEVBQUtBLEtBQUssQ0FBSTtBQUNoQyxDQUFDLEVBQUUsc0NBQXNDLENBQUMsQ0FDMUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9nZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2VkaXRvcl9kZXBlbmRlbmNpZXMvbG9jYWxfY29tcG9uZW50cy9IZWxwVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uLi8uLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3M/ZGE0NyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5zY3NzP2JiN2MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zID0gKCkgPT4gWy4uLmRvY3VtZW50LnN0eWxlU2hlZXRzXS5yZWR1Y2UoKHJlcywgc3R5bGVTaGVldCkgPT4ge1xuXHRpZihzdHlsZVNoZWV0LmhyZWYgJiYgc3R5bGVTaGVldC5ocmVmLmluY2x1ZGVzKCdhZGQtYW5pbWF0ZS1vbi1zY3JvbGwtc3VwcG9ydCcpKSB7XG5cdFx0cmV0dXJuIFsuLi5zdHlsZVNoZWV0LmNzc1J1bGVzXS5yZWR1Y2UoKHJlcywgcnVsZSkgPT4gKHtcblx0XHRcdC4uLnJlcyxcblx0XHRcdC4uLigoXG5cdFx0XHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZihydWxlKS5jb25zdHJ1Y3RvciA9PT0gQ1NTU3R5bGVSdWxlXG5cdFx0XHRcdCYmIHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCcuYW5pbWF0ZV9fJylcblx0XHRcdFx0JiYgIXJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCcuYW5pbWF0ZV9fYW5pbWF0ZWQnKVxuXHRcdFx0XHQmJiAocnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ0luJykgfHwgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ091dCcpKSBcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQgIT09ICcuYW5pbWF0ZV9famFja0luVGhlQm94J1xuXHRcdFx0KSAmJiAocnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ0luJykgXG5cdFx0XHRcdD8ge2FuaW1hdGVJbjogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlSW4sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6IFsuLi5ydWxlLnN0eWxlLmFuaW1hdGlvbk5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKV0ucmVkdWNlKChyZXMsIGN1ciwgaW5kKSA9PiAoXG5cdFx0XHRcdFx0XHRcdGAke3Jlc30keyFpbmQgPyBjdXIudG9VcHBlckNhc2UoKSA6IGN1cn1gXG5cdFx0XHRcdFx0XHQpLCAnJyksXG5cdFx0XHRcdFx0XHR2YWx1ZTogcnVsZS5zZWxlY3RvclRleHQucmVwbGFjZSgvWy4sXFxzXS9nLCAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF19IDoge2FuaW1hdGVPdXQ6IFtcblx0XHRcdFx0XHQuLi5yZXMuYW5pbWF0ZU91dCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0pXG5cdFx0XHQpXG5cdFx0fSksIHtcblx0XHRcdGFuaW1hdGVJbjogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XSxcblx0XHRcdGFuaW1hdGVPdXQ6IFt7XG5cdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fV1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVzO1xuXHR9XG59LCBbXSk7IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdE5vdGljZSxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRleHQgYXMgVGV4dCxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0SGlkZUFuaW1hdGVJbkhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZU91dEhlbHBUZXh0LFxuXHRIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0XG59IGZyb20gJy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHR0cmlnZ2VyVGhyZXNob2xkXG5cdFx0fSxcblx0XHRkZWZhdWx0QXR0cmlidXRlcyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkhpZGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxIaWRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZUluSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7KGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3VGhyZXNob2xkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJUaHJlc2hvbGQ6IG5ld1RocmVzaG9sZCA/IG5ld1RocmVzaG9sZCA6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RyaWdnZXJUaHJlc2hvbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwPXsyNX1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRyaWdnZXIgVGhyZXNob2xkXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJIaWRlIG9uIFNjcm9sbCBBZGRpdGlvbmFsIFNldHRpbmdzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5kZWZhdWx0QXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZUluRHVyYXRpb24gIT09IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZUluRHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZU91dER1cmF0aW9uICE9PSBkZWZhdWx0QXR0cmlidXRlcy5hbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L1ZTdGFjaz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdCk7XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0RXh0ZXJuYWxMaW5rLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIE91dCcgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJleW9uZCB0aGUgc3BlY2lmaWVkIHRyaWdnZXIgdGhyZXNob2xkLlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBJbicgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJlbG93IHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ1RyaWdnZXIgVGhyZXNob2xkJywgdGhpcyBkZXRlcm1pbmVzIGhvdyBmYXIgdGhlIHVzZXIgbXVzdCBzY3JvbGwgKGluIHB4J3MpIGJlZm9yZSB0aGUgYmxvY2sgaXMgaGlkZGVuLlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnMTAwJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgSW4nXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBPdXQnXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1eFN0b3JlLCByZWdpc3RlciB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoJ2gybWxGaWx0ZXJTdG9yZScsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRnbG9iYWxzOiB7fVxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdIMk1MX1NFVF9HTE9CQUwnOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0W2FjdGlvbi5rZXldOiB7XG5cdFx0XHRcdFx0XHQuLi4oc3RhdGVbYWN0aW9uLmtleV0gJiYgc3RhdGUudmFsdWUpLFxuXHRcdFx0XHRcdFx0Li4uYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0R2xvYmFsKGtleSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6ICdIMk1MX1NFVF9HTE9CQUwnLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRoYXNHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5oYXNPd24oc3RhdGUsIGtleSk7XG5cdFx0fSxcblx0XHRnZXRHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0Y29uc3QgeyBcblx0XHRcdFx0W2tleV0gOiB2YWx1ZXNcblx0XHRcdH0gPSBzdGF0ZTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fSxcblx0fSxcblx0cGVyc2lzdDogWyAncHJlZmVyZW5jZXMnIF0sXG59KTtcblxucmVnaXN0ZXIoc3RvcmUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGgybWxGaWx0ZXJTdG9yZVxufSBmcm9tICcuLi8uLi8uLi9zdG9yZSc7XG5cbmltcG9ydCB7XG5cdGdldEFuaW1hdGVDc3NEZWZpbml0aW9uc1xufSBmcm9tICcuLi8uLi8uLi9jb21tb24vZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zJztcblxuLyoqXG4gKiBFeHRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJ2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgeyBGaWx0ZXJJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJy4vZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzJztcblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGVsZW1XaWxsSGlkZUNsYXNzID0gJ2FuaW1hdGVfX2FuaW1hdGVkJztcblxuY29uc3QgZGVmYXVsdEhpZGVPblNjcm9sbFZhbHVlcyA9IHtcblx0YW5pbWF0ZUluRHVyYXRpb246ICc1MDBtcycsXG5cdGFuaW1hdGVPdXREdXJhdGlvbjogJzUwMG1zJyxcbn1cblxuLyoqIFxuICogVGhlIEZpbHRlclxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXG5cdCdoMm1sL2FkZC1oaWRlLW9uLXNjcm9sbC1hdHRyaWJ1dGUnLFxuXHQoc2V0dGluZ3MpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRhbmltYXRlSW46ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlVGhyZXNob2xkOiAxMDAsXG5cdFx0XHRcdFx0XHQuLi5kZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1oaWRlLW9uLXNjcm9sbC1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiBoMm1sSGlkZU9uU2Nyb2xsQXR0cmlidXRlcyxcblx0XHRcdH0sXG5cdFx0XHRjbGllbnRJZCxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0Ly9cblx0XHRjb25zdCB7Z2V0QmxvY2tQYXJlbnRzLCBnZXRCbG9ja0F0dHJpYnV0ZXN9ID0gdXNlU2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IGhhc0ZpeGVkUG9zaXRpb25QYXJlbnQgPSBnZXRCbG9ja1BhcmVudHMoY2xpZW50SWQpLmZpbmQocGFyZW50Q2xpZW50SWQgPT4gISFnZXRCbG9ja0F0dHJpYnV0ZXMocGFyZW50Q2xpZW50SWQpLmgybWxQb3NpdGlvbmluZz8udHlwZSk7XG5cdFx0Ly9cblx0XHRpZihoYXNGaXhlZFBvc2l0aW9uUGFyZW50KSB7XG5cblx0XHRcdC8vXG5cdFx0XHRjb25zdCB7aGFzR2xvYmFsLCBnZXRHbG9iYWx9ID0gdXNlU2VsZWN0KGgybWxGaWx0ZXJTdG9yZSk7XG5cdFx0XHRjb25zdCB7c2V0R2xvYmFsfSA9IGRpc3BhdGNoKGgybWxGaWx0ZXJTdG9yZSk7XG5cdFx0XHRpZighaGFzR2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJykpIHNldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycsIGdldEFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0XHRcdC8vXG5cblx0XHRcdHJldHVybiAoPD5cblx0XHRcdFx0PEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzPXtoMm1sSGlkZU9uU2Nyb2xsQXR0cmlidXRlc31cblx0XHRcdFx0XHRkZWZhdWx0QXR0cmlidXRlcz17ZGVmYXVsdEhpZGVPblNjcm9sbFZhbHVlc31cdFxuXHRcdFx0XHRcdGFuaW1hdGlvbkNsYXNzTmFtZXM9e2dldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpfVxuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHQ8Lz4pO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkSGlkZU9uU2Nyb2xsSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKlxuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtc2F2ZScsXG5cdChwcm9wcywgdHlwZSwgYXR0cmlidXRlcykgPT4ge1xuXHRcdC8vXG5cdFx0Y29uc3Qge2NsYXNzTmFtZTogb2xkQ2xhc3NOYW1lfSA9IHByb3BzO1xuXHRcdGNvbnN0IHtcblx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQsXG5cdFx0XHRcdGFuaW1hdGVEaXJlY3Rpb25cblx0XHRcdH0gPSB7fVxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdC8vXG5cdFx0aWYgKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChjdXIgIT09IGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MpID8gYCR7cmVzfSAke2N1cn1gIDogYCR7cmVzfWBcblx0XHRcdH0sIChhbmltYXRlSXNBbmltYXRlZENsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtYW5pbWF0ZSc6ICcnLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluICYmIHsnZGF0YS1hbmltYXRlLWluJzogYW5pbWF0ZUlufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0ICYmIHsnZGF0YS1hbmltYXRlLW91dCc6IGFuaW1hdGVPdXR9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbkR1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLWluLWR1cmF0aW9uJzogYW5pbWF0ZUluRHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXREdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVEaXJlY3Rpb24gJiYgeydkYXRhLWFuaW1hdGUtZGlyZWN0aW9uJzogYW5pbWF0ZURpcmVjdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZVRocmVzaG9sZCAmJiB7J2RhdGEtYW5pbWF0ZS1UaHJlc2hvbGQnOiBhbmltYXRlVGhyZXNob2xkfSksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG4qL1xuXG4iXSwibmFtZXMiOlsiZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsInJlZHVjZSIsInJlcyIsInN0eWxlU2hlZXQiLCJocmVmIiwiaW5jbHVkZXMiLCJjc3NSdWxlcyIsInJ1bGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwiQ1NTU3R5bGVSdWxlIiwic2VsZWN0b3JUZXh0IiwiYW5pbWF0ZUluIiwibGFiZWwiLCJzdHlsZSIsImFuaW1hdGlvbk5hbWUiLCJyZXBsYWNlIiwiY3VyIiwiaW5kIiwidG9VcHBlckNhc2UiLCJ2YWx1ZSIsImFuaW1hdGVPdXQiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiRXh0ZXJuYWxMaW5rIiwiTm90aWNlIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRleHQiLCJUZXh0IiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJfXyIsIkhpZGVBbmltYXRlSW5IZWxwVGV4dCIsIkhpZGVBbmltYXRlT3V0SGVscFRleHQiLCJIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0IiwiSGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQiLCJIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQiLCJGaWx0ZXJJbnNwZWN0b3JDb250cm9scyIsInByb3BzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJ0cmlnZ2VyVGhyZXNob2xkIiwiZGVmYXVsdEF0dHJpYnV0ZXMiLCJhbmltYXRpb25DbGFzc05hbWVzIiwic2V0QXR0cmlidXRlcyIsIm5ld0FuaW1hdGlvbiIsImgybWxIaWRlT25TY3JvbGwiLCJtYXJnaW5Cb3R0b20iLCJuZXdUaHJlc2hvbGQiLCJuZXdEdXJhdGlvbiIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInN0b3JlIiwicmVkdWNlciIsInN0YXRlIiwiZ2xvYmFscyIsImFjdGlvbiIsInR5cGUiLCJrZXkiLCJhY3Rpb25zIiwic2V0R2xvYmFsIiwic2VsZWN0b3JzIiwiaGFzR2xvYmFsIiwiaGFzT3duIiwiZ2V0R2xvYmFsIiwidmFsdWVzIiwicGVyc2lzdCIsImFkZEZpbHRlciIsImJsb2NrRWRpdG9yU3RvcmUiLCJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiaDJtbEZpbHRlclN0b3JlIiwiZWxlbVdpbGxIaWRlQ2xhc3MiLCJkZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzIiwic2V0dGluZ3MiLCJhdHRyaWJ1dGVzIiwiZGVmYXVsdCIsImFuaW1hdGVUaHJlc2hvbGQiLCJCbG9ja0VkaXQiLCJoMm1sSGlkZU9uU2Nyb2xsQXR0cmlidXRlcyIsImNsaWVudElkIiwiZ2V0QmxvY2tQYXJlbnRzIiwiZ2V0QmxvY2tBdHRyaWJ1dGVzIiwiaGFzRml4ZWRQb3NpdGlvblBhcmVudCIsImZpbmQiLCJwYXJlbnRDbGllbnRJZCIsImgybWxQb3NpdGlvbmluZyJdLCJzb3VyY2VSb290IjoiIn0=