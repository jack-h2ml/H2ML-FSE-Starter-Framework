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
/* harmony import */ var _editor_dependencies_local_components_HelpText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor_dependencies/local_components/HelpText */ "./src/editor_dependencies/local_components/HelpText/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../store */ "../../store/index.js");
/* harmony import */ var _common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../common/getAnimateCssDefinitions */ "../../common/getAnimateCssDefinitions/index.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");

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
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    const {
      setGlobal
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
    if (!hasGlobal('ParsedAnimateDotCSS')) setGlobal('ParsedAnimateDotCSS', (0,_common_getAnimateCssDefinitions__WEBPACK_IMPORTED_MODULE_10__.getAnimateCssDefinitions)());
    const animationClassNames = getGlobal('ParsedAnimateDotCSS');
    //

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_12__.FilterInspectorControls, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uLi8uLi9jb21tb24vZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2VkaXRvcl9kZXBlbmRlbmNpZXMvbG9jYWxfY29tcG9uZW50cy9GaWx0ZXJJbnNwZWN0b3JDb250cm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvSGVscFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zID0gKCkgPT4gWy4uLmRvY3VtZW50LnN0eWxlU2hlZXRzXS5yZWR1Y2UoKHJlcywgc3R5bGVTaGVldCkgPT4ge1xuXHRpZihzdHlsZVNoZWV0LmhyZWYgJiYgc3R5bGVTaGVldC5ocmVmLmluY2x1ZGVzKCdhZGQtYW5pbWF0ZS1vbi1zY3JvbGwtc3VwcG9ydCcpKSB7XG5cdFx0cmV0dXJuIFsuLi5zdHlsZVNoZWV0LmNzc1J1bGVzXS5yZWR1Y2UoKHJlcywgcnVsZSkgPT4gKHtcblx0XHRcdC4uLnJlcyxcblx0XHRcdC4uLigoXG5cdFx0XHRcdE9iamVjdC5nZXRQcm90b3R5cGVPZihydWxlKS5jb25zdHJ1Y3RvciA9PT0gQ1NTU3R5bGVSdWxlXG5cdFx0XHRcdCYmIHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCcuYW5pbWF0ZV9fJylcblx0XHRcdFx0JiYgIXJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCcuYW5pbWF0ZV9fYW5pbWF0ZWQnKVxuXHRcdFx0XHQmJiAocnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ0luJykgfHwgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ091dCcpKSBcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQgIT09ICcuYW5pbWF0ZV9famFja0luVGhlQm94J1xuXHRcdFx0KSAmJiAocnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJ0luJykgXG5cdFx0XHRcdD8ge2FuaW1hdGVJbjogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlSW4sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6IFsuLi5ydWxlLnN0eWxlLmFuaW1hdGlvbk5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKV0ucmVkdWNlKChyZXMsIGN1ciwgaW5kKSA9PiAoXG5cdFx0XHRcdFx0XHRcdGAke3Jlc30keyFpbmQgPyBjdXIudG9VcHBlckNhc2UoKSA6IGN1cn1gXG5cdFx0XHRcdFx0XHQpLCAnJyksXG5cdFx0XHRcdFx0XHR2YWx1ZTogcnVsZS5zZWxlY3RvclRleHQucmVwbGFjZSgvWy4sXFxzXS9nLCAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF19IDoge2FuaW1hdGVPdXQ6IFtcblx0XHRcdFx0XHQuLi5yZXMuYW5pbWF0ZU91dCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0pXG5cdFx0XHQpXG5cdFx0fSksIHtcblx0XHRcdGFuaW1hdGVJbjogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XSxcblx0XHRcdGFuaW1hdGVPdXQ6IFt7XG5cdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fV1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVzO1xuXHR9XG59LCBbXSk7IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdE5vdGljZSxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRleHQgYXMgVGV4dCxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0SGlkZUFuaW1hdGVJbkhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZU91dEhlbHBUZXh0LFxuXHRIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0XG59IGZyb20gJy4vLi4vSGVscFRleHQnO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgRmlsdGVySW5zcGVjdG9yQ29udHJvbHMgPSAocHJvcHMpID0+IHtcblx0Ly9cblx0Y29uc3Qge1xuXHRcdGV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXM6IHtcblx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdHRyaWdnZXJUaHJlc2hvbGRcblx0XHR9LFxuXHRcdGRlZmF1bHRBdHRyaWJ1dGVzLFxuXHRcdGFuaW1hdGlvbkNsYXNzTmFtZXMsXG5cdFx0c2V0QXR0cmlidXRlc1xuXHR9ID0gcHJvcHM7XG5cdC8vXG5cdHJldHVybiAoXG5cdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PFBhbmVsPlxuXHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0dGl0bGU9e19fKFwiSGlkZSBvbiBTY3JvbGxcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRpbml0aWFsT3Blbj17ZmFsc2V9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsnaDJtbEhpZGVPblNjcm9sbFBhbmVsJ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWU3RhY2tcblx0XHRcdFx0XHRcdGFzPXsnZGl2J31cblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE5vdGljZVxuXHRcdFx0XHRcdFx0XHRpc0Rpc21pc3NpYmxlPXtmYWxzZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsnMTJweCd9XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9eydyZ2IoMTE3LCAxMTcsIDExNyknfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e19fKFwiV2hlbiBhZGRpbmcgYW5pbWF0aW9ucyB3aGljaCB0cmFuc2l0aW9uIG9mZi1zY3JlZW4gZW5zdXJlIHRoYXQgdGhlIGRvY3VtZW50IGJvZHkgaGFzIHRoZVwiLCAnaDJtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cteVwiPm92ZXJmbG93LXg8L0V4dGVybmFsTGluaz4ge19fKFwicHJvcGVydHkgc2V0IHRvIGVpdGhlciAnaGlkZGVuJyBvciAnY2xpcCcuXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdBbmltYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2FuaW1hdGlvbkNsYXNzTmFtZXMuYW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBPdXQnIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZU91dEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cblx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdBbmltYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW46IG5ld0FuaW1hdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBJbicgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVBbmltYXRlSW5IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpICYmIChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdUaHJlc2hvbGQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlclRocmVzaG9sZDogbmV3VGhyZXNob2xkID8gbmV3VGhyZXNob2xkIDogMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dHJpZ2dlclRocmVzaG9sZH1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezI1fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiVHJpZ2dlciBUaHJlc2hvbGRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkhpZGUgb24gU2Nyb2xsIEFkZGl0aW9uYWwgU2V0dGluZ3NcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmRlZmF1bHRBdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlSW5EdXJhdGlvbiAhPT0gZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBkZWZhdWx0QXR0cmlidXRlcy5hbmltYXRlSW5EdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlT3V0RHVyYXRpb24gIT09IGRlZmF1bHRBdHRyaWJ1dGVzLmFuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogZGVmYXVsdEF0dHJpYnV0ZXMuYW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0KTtcbn0iLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmV5b25kIHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZUluSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIEluJyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmVsb3cgdGhlIHNwZWNpZmllZCB0cmlnZ2VyIHRocmVzaG9sZC5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnVHJpZ2dlciBUaHJlc2hvbGQnLCB0aGlzIGRldGVybWluZXMgaG93IGZhciB0aGUgdXNlciBtdXN0IHNjcm9sbCAoaW4gcHgncykgYmVmb3JlIHRoZSBibG9jayBpcyBoaWRkZW4uXCIsICdodG1sJyl9XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICcxMDAnLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHV4U3RvcmUsIHJlZ2lzdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlUmVkdXhTdG9yZSgnaDJtbEZpbHRlclN0b3JlJywge1xuXHRyZWR1Y2VyKHN0YXRlID0ge1xuXHRcdGdsb2JhbHM6IHt9XG5cdH0sIGFjdGlvbikge1xuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgJ0gyTUxfU0VUX0dMT0JBTCc6IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRbYWN0aW9uLmtleV06IHtcblx0XHRcdFx0XHRcdC4uLihzdGF0ZVthY3Rpb24ua2V5XSAmJiBzdGF0ZS52YWx1ZSksXG5cdFx0XHRcdFx0XHQuLi5hY3Rpb24udmFsdWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHRzZXRHbG9iYWwoa2V5LCB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogJ0gyTUxfU0VUX0dMT0JBTCcsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNlbGVjdG9yczoge1xuXHRcdGhhc0dsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0Lmhhc093bihzdGF0ZSwga2V5KTtcblx0XHR9LFxuXHRcdGdldEdsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRjb25zdCB7IFxuXHRcdFx0XHRba2V5XSA6IHZhbHVlc1xuXHRcdFx0fSA9IHN0YXRlO1xuXHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHR9LFxuXHR9LFxuXHRwZXJzaXN0OiBbICdwcmVmZXJlbmNlcycgXSxcbn0pO1xuXG5yZWdpc3RlcihzdG9yZSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuICAgIF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7XG5cdEhpZGVBbmltYXRlSW5IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCxcblx0SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQsXG5cdEhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCxcbn0gZnJvbSAnLi9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvSGVscFRleHQnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi8uLi8uLi8uLi9zdG9yZSc7XG5cbmltcG9ydCB7XG5cdGdldEFuaW1hdGVDc3NEZWZpbml0aW9uc1xufSBmcm9tICcuLy4uLy4uLy4uL2NvbW1vbi9nZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcbmltcG9ydCB7IEZpbHRlckluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnLi9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMnO1xuXG4vKlxuICogR2xvYmFsXG4gKi9cblxuY29uc3QgZWxlbVdpbGxIaWRlQ2xhc3MgPSAnYW5pbWF0ZV9fYW5pbWF0ZWQnO1xuXG5jb25zdCBkZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzID0ge1xuXHRhbmltYXRlSW5EdXJhdGlvbjogJzUwMG1zJyxcblx0YW5pbWF0ZU91dER1cmF0aW9uOiAnNTAwbXMnLFxufVxuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQ6IDEwMCxcblx0XHRcdFx0XHRcdC4uLmRlZmF1bHRIaWRlT25TY3JvbGxWYWx1ZXNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IGgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzLFxuXHRcdFx0fSxcblx0XHRcdGNsaWVudElkLFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHQvL1xuXHRcdGNvbnN0IHtnZXRCbG9ja1BhcmVudHMsIGdldEJsb2NrQXR0cmlidXRlc30gPSB1c2VTZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgaGFzRml4ZWRQb3NpdGlvblBhcmVudCA9IGdldEJsb2NrUGFyZW50cyhjbGllbnRJZCkuZmluZChwYXJlbnRDbGllbnRJZCA9PiAhIWdldEJsb2NrQXR0cmlidXRlcyhwYXJlbnRDbGllbnRJZCkuaDJtbFBvc2l0aW9uaW5nPy50eXBlKTtcblx0XHQvL1xuXHRcdGlmKGhhc0ZpeGVkUG9zaXRpb25QYXJlbnQpIHtcblxuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IHtoYXNHbG9iYWwsIGdldEdsb2JhbH0gPSB1c2VTZWxlY3QoaDJtbEZpbHRlclN0b3JlKTtcblx0XHRcdGNvbnN0IHtzZXRHbG9iYWx9ID0gZGlzcGF0Y2goaDJtbEZpbHRlclN0b3JlKTtcblx0XHRcdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkgc2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJywgZ2V0QW5pbWF0ZUNzc0RlZmluaXRpb25zKCkpO1xuXHRcdFx0Y29uc3QgYW5pbWF0aW9uQ2xhc3NOYW1lcyA9IGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xuXHRcdFx0Ly9cblxuXHRcdFx0cmV0dXJuICg8PlxuXHRcdFx0XHQ8RmlsdGVySW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0XHRleGlzdGluZ0F0dHJpYnV0ZXM9e2gybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzfVxuXHRcdFx0XHRcdGRlZmF1bHRBdHRyaWJ1dGVzPXtkZWZhdWx0SGlkZU9uU2Nyb2xsVmFsdWVzfVx0XG5cdFx0XHRcdFx0YW5pbWF0aW9uQ2xhc3NOYW1lcz17Z2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJyl9XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcz17c2V0QXR0cmlidXRlc31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdDwvPik7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRIaWRlT25TY3JvbGxJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZVRocmVzaG9sZCxcblx0XHRcdFx0YW5pbWF0ZURpcmVjdGlvblxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Ly9cblx0XHRpZiAoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQpIHtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSAob2xkQ2xhc3NOYW1lID8gb2xkQ2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXSkucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGN1ciAhPT0gYW5pbWF0ZUlzQW5pbWF0ZWRDbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MpKTtcblx0XHRcdC8vXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHQnZGF0YS1hbmltYXRlJzogJycsXG5cdFx0XHRcdC4uLihhbmltYXRlSW4gJiYgeydkYXRhLWFuaW1hdGUtaW4nOiBhbmltYXRlSW59KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXQgJiYgeydkYXRhLWFuaW1hdGUtb3V0JzogYW5pbWF0ZU91dH0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluRHVyYXRpb24gJiYgeydkYXRhLWFuaW1hdGUtaW4tZHVyYXRpb24nOiBhbmltYXRlSW5EdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dER1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLW91dC1kdXJhdGlvbic6IGFuaW1hdGVPdXREdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZURpcmVjdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1kaXJlY3Rpb24nOiBhbmltYXRlRGlyZWN0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlVGhyZXNob2xkICYmIHsnZGF0YS1hbmltYXRlLVRocmVzaG9sZCc6IGFuaW1hdGVUaHJlc2hvbGR9KSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcbiovXG5cbiJdLCJuYW1lcyI6WyJnZXRBbmltYXRlQ3NzRGVmaW5pdGlvbnMiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwicmVkdWNlIiwicmVzIiwic3R5bGVTaGVldCIsImhyZWYiLCJpbmNsdWRlcyIsImNzc1J1bGVzIiwicnVsZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJDU1NTdHlsZVJ1bGUiLCJzZWxlY3RvclRleHQiLCJhbmltYXRlSW4iLCJsYWJlbCIsInN0eWxlIiwiYW5pbWF0aW9uTmFtZSIsInJlcGxhY2UiLCJjdXIiLCJpbmQiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlIiwiYW5pbWF0ZU91dCIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJOb3RpY2UiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVGV4dCIsIlRleHQiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIl9fIiwiSGlkZUFuaW1hdGVJbkhlbHBUZXh0IiwiSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCIsIkhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQiLCJIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsIkZpbHRlckluc3BlY3RvckNvbnRyb2xzIiwicHJvcHMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsInRyaWdnZXJUaHJlc2hvbGQiLCJkZWZhdWx0QXR0cmlidXRlcyIsImFuaW1hdGlvbkNsYXNzTmFtZXMiLCJzZXRBdHRyaWJ1dGVzIiwibmV3QW5pbWF0aW9uIiwiaDJtbEhpZGVPblNjcm9sbCIsIm1hcmdpbkJvdHRvbSIsIm5ld1RocmVzaG9sZCIsIm5ld0R1cmF0aW9uIiwiY3JlYXRlUmVkdXhTdG9yZSIsInJlZ2lzdGVyIiwic3RvcmUiLCJyZWR1Y2VyIiwic3RhdGUiLCJnbG9iYWxzIiwiYWN0aW9uIiwidHlwZSIsImtleSIsImFjdGlvbnMiLCJzZXRHbG9iYWwiLCJzZWxlY3RvcnMiLCJoYXNHbG9iYWwiLCJoYXNPd24iLCJnZXRHbG9iYWwiLCJ2YWx1ZXMiLCJwZXJzaXN0IiwiYWRkRmlsdGVyIiwiYmxvY2tFZGl0b3JTdG9yZSIsInVzZVNlbGVjdCIsImRpc3BhdGNoIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJoMm1sRmlsdGVyU3RvcmUiLCJlbGVtV2lsbEhpZGVDbGFzcyIsImRlZmF1bHRIaWRlT25TY3JvbGxWYWx1ZXMiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJkZWZhdWx0IiwiYW5pbWF0ZVRocmVzaG9sZCIsIkJsb2NrRWRpdCIsImgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzIiwiY2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHMiLCJnZXRCbG9ja0F0dHJpYnV0ZXMiLCJoYXNGaXhlZFBvc2l0aW9uUGFyZW50IiwiZmluZCIsInBhcmVudENsaWVudElkIiwiaDJtbFBvc2l0aW9uaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==