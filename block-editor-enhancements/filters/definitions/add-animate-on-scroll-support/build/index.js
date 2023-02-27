/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../common/AnimateDotCssDefinitions/index.js":
/*!******************************************************!*\
  !*** ../../common/AnimateDotCssDefinitions/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateDotCssDefinitions": function() { return /* binding */ AnimateDotCssDefinitions; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "../../store/index.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css/animate.min.css */ "../../common/AnimateDotCssDefinitions/node_modules/animate.css/animate.min.css");
/**
 * Wordpress Dependencies
 */



/**
 * Internal Dependencies
 */



/**
 * External Dependencies
 */



/**
 * Parse the animate.css styles
 */

const parseAnimateCssDefinitions = () => [...document.styleSheets].reduce((res, styleSheet) => {
  if (styleSheet.href && styleSheet.href.includes('add-animate-on-scroll-support')) {
    console.debug('Generating Animate.css Definitions');
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

/**
 * Store the 
 */

const AnimateDotCssDefinitions = () => {
  const {
    hasGlobal,
    getGlobal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_store__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    setGlobal
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.store);
  if (!hasGlobal('ParsedAnimateDotCSS')) {
    console.debug('Setting Animate.css Definitions');
    setGlobal('ParsedAnimateDotCSS', parseAnimateCssDefinitions());
  }
  ;
  return getGlobal('ParsedAnimateDotCSS');
};

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
    optionalAttributesDefaults,
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
          ...optionalAttributesDefaults
        }
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateInDuration !== optionalAttributesDefaults.animateInDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateInDuration: optionalAttributesDefaults.animateInDuration
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
    hasValue: () => animateOutDuration !== optionalAttributesDefaults.animateOutDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateOutDuration: optionalAttributesDefaults.animateOutDuration
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
    hasValue: () => animateThreshold !== optionalAttributesDefaults.animateThreshold,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Threshold", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateThreshold: optionalAttributesDefaults.animateThreshold
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
    hasValue: () => animateDirection !== optionalAttributesDefaults.animateDirection,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Direction", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateDirection: optionalAttributesDefaults.animateDirection
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
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '500ms'.", 'h2ml')));
const AnimateOutDurationHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Out'", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("duration", 'h2ml')), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '500ms'.", 'h2ml')));
const AnimateThresholdHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Animate Threshold', this determines how much of the block must be visible before the animations play.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '0.3', which is equal to 30% of the element being visible.", 'h2ml')));
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

/***/ "../../common/AnimateDotCssDefinitions/node_modules/animate.css/animate.min.css":
/*!**************************************************************************************!*\
  !*** ../../common/AnimateDotCssDefinitions/node_modules/animate.css/animate.min.css ***!
  \**************************************************************************************/
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _common_AnimateDotCssDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/AnimateDotCssDefinitions */ "../../common/AnimateDotCssDefinitions/index.js");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");

/**
 * WordPress Dependencies
 */





/**
 * Internal Dependencies
 */





/*
 * Global
 */

const animateIsAnimatedClass = 'animate__animated';
const optionalAnimateOnScrollValuesDefaults = {
  animateInDuration: '500ms',
  animateOutDuration: '500ms',
  animateThreshold: 0.3,
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
          ...optionalAnimateOnScrollValuesDefaults
        }
      }
    }
  };
});

/*
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'h2ml/add-animate-on-scroll-insepctor-controls-edit', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => props => {
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
  if (animateIn !== undefined || animateOut !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_6__.FilterInspectorControls, {
      existingAttributes: h2mlAnimateOnScrollAttributes,
      optionalAttributesDefaults: optionalAnimateOnScrollValuesDefaults,
      animationClassNames: (0,_common_AnimateDotCssDefinitions__WEBPACK_IMPORTED_MODULE_5__.AnimateDotCssDefinitions)(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUt5Qjs7QUFFekI7QUFDQTtBQUNBOztBQUlxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLE1BQU1JLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxVQUFVLEtBQUs7RUFDOUYsSUFBR0EsVUFBVSxDQUFDQyxJQUFJLElBQUlELFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUMsK0JBQStCLENBQUMsRUFBRTtJQUNoRkMsT0FBTyxDQUFDQyxLQUFLLENBQUMsb0NBQW9DLENBQUM7SUFDbkQsT0FBTyxDQUFDLEdBQUdKLFVBQVUsQ0FBQ0ssUUFBUSxDQUFDLENBQUNQLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVPLElBQUksTUFBTTtNQUN0RCxHQUFHUCxHQUFHO01BQ04sSUFDQ1EsTUFBTSxDQUFDQyxjQUFjLENBQUNGLElBQUksQ0FBQyxDQUFDRyxXQUFXLEtBQUtDLFlBQVksSUFDckRKLElBQUksQ0FBQ0ssWUFBWSxDQUFDVCxRQUFRLENBQUMsWUFBWSxDQUFDLElBQ3hDLENBQUNJLElBQUksQ0FBQ0ssWUFBWSxDQUFDVCxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FDaERJLElBQUksQ0FBQ0ssWUFBWSxDQUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUlJLElBQUksQ0FBQ0ssWUFBWSxDQUFDVCxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFDdkVJLElBQUksQ0FBQ0ssWUFBWSxLQUFLLHdCQUF3QixLQUM1Q0wsSUFBSSxDQUFDSyxZQUFZLENBQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FDbkM7UUFBQ1UsU0FBUyxFQUFFLENBQ2IsR0FBR2IsR0FBRyxDQUFDYSxTQUFTLEVBQ2hCO1VBQ0NDLEtBQUssRUFBRSxDQUFDLEdBQUdQLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxhQUFhLENBQUNDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVrQixHQUFHLEVBQUVDLEdBQUcsS0FDbkYsR0FBRW5CLEdBQUksR0FBRSxDQUFDbUIsR0FBRyxHQUFHRCxHQUFHLENBQUNFLFdBQVcsRUFBRSxHQUFHRixHQUFJLEVBQ3hDLEVBQUUsRUFBRSxDQUFDO1VBQ05HLEtBQUssRUFBRWQsSUFBSSxDQUFDSyxZQUFZLENBQUNLLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUMvQyxDQUFDO01BQ0QsQ0FBQyxHQUFHO1FBQUNLLFVBQVUsRUFBRSxDQUNqQixHQUFHdEIsR0FBRyxDQUFDc0IsVUFBVSxFQUNqQjtVQUNDUixLQUFLLEVBQUUsQ0FBQyxHQUFHUCxJQUFJLENBQUNRLEtBQUssQ0FBQ0MsYUFBYSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUNsQixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFa0IsR0FBRyxFQUFFQyxHQUFHLEtBQ25GLEdBQUVuQixHQUFJLEdBQUUsQ0FBQ21CLEdBQUcsR0FBR0QsR0FBRyxDQUFDRSxXQUFXLEVBQUUsR0FBR0YsR0FBSSxFQUN4QyxFQUFFLEVBQUUsQ0FBQztVQUNORyxLQUFLLEVBQUVkLElBQUksQ0FBQ0ssWUFBWSxDQUFDSyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDL0MsQ0FBQztNQUNELENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQyxFQUFFO01BQ0hKLFNBQVMsRUFBRSxDQUFDO1FBQ1hDLEtBQUssRUFBRSxNQUFNO1FBQ2JPLEtBQUssRUFBRTtNQUNSLENBQUMsQ0FBQztNQUNGQyxVQUFVLEVBQUUsQ0FBQztRQUNaUixLQUFLLEVBQUUsTUFBTTtRQUNiTyxLQUFLLEVBQUU7TUFDUixDQUFDO0lBQ0YsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxNQUFNO0lBQ04sT0FBT3JCLEdBQUc7RUFDWDtBQUNELENBQUMsRUFBRSxFQUFFLENBQUM7O0FBRU47QUFDQTtBQUNBOztBQUVPLE1BQU11Qix3QkFBd0IsR0FBRyxNQUFNO0VBQzdDLE1BQU07SUFBQ0MsU0FBUztJQUFFQztFQUFTLENBQUMsR0FBR2pDLDBEQUFTLENBQUNHLHlDQUFlLENBQUM7RUFDekQsTUFBTTtJQUFDK0I7RUFBUyxDQUFDLEdBQUdqQyx5REFBUSxDQUFDRSx5Q0FBZSxDQUFDO0VBQzdDLElBQUcsQ0FBQzZCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO0lBQ3JDcEIsT0FBTyxDQUFDQyxLQUFLLENBQUMsaUNBQWlDLENBQUM7SUFDaERxQixTQUFTLENBQUMscUJBQXFCLEVBQUU5QiwwQkFBMEIsRUFBRSxDQUFDO0VBQy9EO0VBQUM7RUFDRCxPQUFPNkIsU0FBUyxDQUFDLHFCQUFxQixDQUFDO0FBQ3hDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGRDtBQUNBO0FBQ0E7O0FBRTREO0FBYzdCO0FBRU07O0FBRXJDO0FBQ0E7QUFDQTs7QUFTdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFTyxNQUFNMEIsdUJBQXVCLEdBQUlDLEtBQUssSUFBSztFQUNqRDtFQUNBLE1BQU07SUFDTEMsa0JBQWtCO0lBQ2xCQSxrQkFBa0IsRUFBRTtNQUNuQnhDLFNBQVM7TUFDVFMsVUFBVTtNQUNWZ0MsaUJBQWlCO01BQ2pCQyxrQkFBa0I7TUFDbEJDLGdCQUFnQjtNQUNoQkM7SUFDRCxDQUFDO0lBQ0RDLDBCQUEwQjtJQUMxQkMsbUJBQW1CO0lBQ25CQztFQUNELENBQUMsR0FBR1IsS0FBSztFQUNUO0VBQ0EsT0FDQyxrRUFBQyxzRUFBaUIsUUFDakIsa0VBQUMsd0RBQUssUUFDTCxrRUFBQyw0REFBUztJQUNULEtBQUssRUFBRVIsbURBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUU7SUFDdkMsV0FBVyxFQUFFLEtBQU07SUFDbkIsU0FBUyxFQUFFO0VBQTJCLEdBRXRDLGtFQUFDLHVFQUFNO0lBQ04sRUFBRSxFQUFFLEtBQU07SUFDVixPQUFPLEVBQUU7RUFBRSxHQUVYLGtFQUFDLHlEQUFNO0lBQ04sYUFBYSxFQUFFO0VBQU0sR0FFckIsa0VBQUMscUVBQUk7SUFDSixJQUFJLEVBQUUsTUFBTztJQUNiLEtBQUssRUFBRTtFQUFxQixHQUUzQkEsbURBQUUsQ0FBQywwRkFBMEYsRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9FQUFDLCtEQUFZO0lBQUMsSUFBSSxFQUFDO0VBQTZELEdBQUMsWUFBVSxDQUFlLEtBQUMsRUFBQ0EsbURBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxNQUFNLENBQUMsQ0FDdlEsQ0FDQyxFQUNULGtFQUFDLGdFQUFhO0lBQ2IsUUFBUSxFQUFHaUIsWUFBWSxJQUFLO01BQzNCRCxhQUFhLENBQUM7UUFDYkUsbUJBQW1CLEVBQUU7VUFDcEIsR0FBR1Qsa0JBQWtCO1VBQ3JCeEMsU0FBUyxFQUFFZ0Q7UUFDWjtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixLQUFLLEVBQUVoRCxTQUFVO0lBQ2pCLE9BQU8sRUFBRThDLG1CQUFtQixDQUFDOUMsU0FBVTtJQUN2QyxLQUFLLEVBQUUrQixtREFBRSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBRTtJQUNoRCxJQUFJLEVBQUUsa0VBQUMsd0RBQWlCLE9BQUk7SUFDNUIsS0FBSyxFQUFFO01BQUVtQixZQUFZLEVBQUU7SUFBRSxDQUFFO0lBQzNCLHVCQUF1QixFQUFFO0VBQUssRUFDN0IsRUFDRixrRUFBQyxnRUFBYTtJQUNiLFFBQVEsRUFBR0YsWUFBWSxJQUFLO01BQzNCRCxhQUFhLENBQUM7UUFDYkUsbUJBQW1CLEVBQUU7VUFDcEIsR0FBR1Qsa0JBQWtCO1VBQ3JCL0IsVUFBVSxFQUFFdUM7UUFDYjtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixLQUFLLEVBQUV2QyxVQUFXO0lBQ2xCLE9BQU8sRUFBRXFDLG1CQUFtQixDQUFDckMsVUFBVztJQUN4QyxLQUFLLEVBQUVzQixtREFBRSxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBRTtJQUNqRCxJQUFJLEVBQUUsa0VBQUMseURBQWtCLE9BQUk7SUFDN0IsS0FBSyxFQUFFO01BQUVtQixZQUFZLEVBQUU7SUFBRSxDQUFFO0lBQzNCLHVCQUF1QixFQUFFO0VBQUssRUFDN0IsRUFDRCxDQUFDbEQsU0FBUyxJQUFJUyxVQUFVLEtBQ3hCLGtFQUFDLDJFQUFVO0lBQ1YsS0FBSyxFQUFFc0IsbURBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxNQUFNLENBQUU7SUFDM0QsUUFBUSxFQUFFLE1BQU07TUFDZmdCLGFBQWEsQ0FBQztRQUNiRSxtQkFBbUIsRUFBRTtVQUNwQixHQUFHVCxrQkFBa0I7VUFDckIsR0FBR0s7UUFDSjtNQUNELENBQUMsQ0FBQztJQUNIO0VBQUUsR0FFRixrRUFBQywrRUFBYztJQUNkLFFBQVEsRUFBRSxNQUFNSixpQkFBaUIsS0FBS0ksMEJBQTBCLENBQUNKLGlCQUFrQjtJQUNuRixLQUFLLEVBQUVWLG1EQUFFLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFFO0lBQ3pDLFVBQVUsRUFBRSxNQUFNO01BQ2pCZ0IsYUFBYSxDQUFDO1FBQ2JFLG1CQUFtQixFQUFFO1VBQ3BCLEdBQUdULGtCQUFrQjtVQUNyQkMsaUJBQWlCLEVBQUVJLDBCQUEwQixDQUFDSjtRQUMvQztNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixnQkFBZ0IsRUFBRTtFQUFNLEdBRXhCLGtFQUFDLDhEQUFXO0lBQ1gsS0FBSyxFQUFFQSxpQkFBa0I7SUFDekIsUUFBUSxFQUFHVSxXQUFXLElBQUs7TUFDMUJKLGFBQWEsQ0FBQztRQUNiRSxtQkFBbUIsRUFBRTtVQUNwQixHQUFHVCxrQkFBa0I7VUFDckJDLGlCQUFpQixFQUFFVTtRQUNwQjtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixLQUFLLEVBQUVwQixtREFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBRTtJQUN6QyxJQUFJLEVBQUUsa0VBQUMsZ0VBQXlCO0VBQUksRUFDbkMsQ0FDYyxFQUNqQixrRUFBQywrRUFBYztJQUNkLFFBQVEsRUFBRSxNQUFNVyxrQkFBa0IsS0FBS0csMEJBQTBCLENBQUNILGtCQUFtQjtJQUNyRixLQUFLLEVBQUVYLG1EQUFFLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFFO0lBQzFDLFVBQVUsRUFBRSxNQUFNO01BQ2pCZ0IsYUFBYSxDQUFDO1FBQ2JFLG1CQUFtQixFQUFFO1VBQ3BCLEdBQUdULGtCQUFrQjtVQUNyQkUsa0JBQWtCLEVBQUVHLDBCQUEwQixDQUFDSDtRQUNoRDtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixnQkFBZ0IsRUFBRTtFQUFNLEdBRXhCLGtFQUFDLDhEQUFXO0lBQ1gsS0FBSyxFQUFFQSxrQkFBbUI7SUFDMUIsUUFBUSxFQUFHUyxXQUFXLElBQUs7TUFDMUJKLGFBQWEsQ0FBQztRQUNiRSxtQkFBbUIsRUFBRTtVQUNwQixHQUFHVCxrQkFBa0I7VUFDckJFLGtCQUFrQixFQUFFUztRQUNyQjtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixLQUFLLEVBQUVwQixtREFBRSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBRTtJQUMxQyxJQUFJLEVBQUUsa0VBQUMsaUVBQTBCO0VBQUksRUFDcEMsQ0FDYyxFQUNqQixrRUFBQywrRUFBYztJQUNkLFFBQVEsRUFBRSxNQUFNYSxnQkFBZ0IsS0FBS0MsMEJBQTBCLENBQUNELGdCQUFpQjtJQUNqRixLQUFLLEVBQUViLG1EQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFFO0lBQ3ZDLFVBQVUsRUFBRSxNQUFNO01BQ2pCZ0IsYUFBYSxDQUFDO1FBQ2JFLG1CQUFtQixFQUFFO1VBQ3BCLEdBQUdULGtCQUFrQjtVQUNyQkksZ0JBQWdCLEVBQUVDLDBCQUEwQixDQUFDRDtRQUM5QztNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixnQkFBZ0IsRUFBRTtFQUFNLEdBRXhCLGtFQUFDLDhFQUFhO0lBQ2IsUUFBUSxFQUFHUSxZQUFZLElBQUs7TUFDM0JMLGFBQWEsQ0FBQztRQUNiRSxtQkFBbUIsRUFBRTtVQUNwQixHQUFHVCxrQkFBa0I7VUFDckJJLGdCQUFnQixFQUFFUTtRQUNuQjtNQUNELENBQUMsQ0FBQztJQUNILENBQUU7SUFDRixLQUFLLEVBQUVSLGdCQUFpQjtJQUN4QixHQUFHLEVBQUUsR0FBSTtJQUNULEdBQUcsRUFBRSxDQUFFO0lBQ1AsSUFBSSxFQUFFLEdBQUk7SUFDVixLQUFLLEVBQUViLG1EQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFFO0lBQ3ZDLElBQUksRUFBRSxrRUFBQywrREFBd0I7RUFBSSxFQUNsQyxDQUNjLEVBQ2pCLGtFQUFDLCtFQUFjO0lBQ2QsUUFBUSxFQUFFLE1BQU1ZLGdCQUFnQixLQUFLRSwwQkFBMEIsQ0FBQ0YsZ0JBQWlCO0lBQ2pGLEtBQUssRUFBRVosbURBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUU7SUFDdkMsVUFBVSxFQUFFLE1BQU07TUFDakJnQixhQUFhLENBQUM7UUFDYkUsbUJBQW1CLEVBQUU7VUFDcEIsR0FBR1Qsa0JBQWtCO1VBQ3JCRyxnQkFBZ0IsRUFBRUUsMEJBQTBCLENBQUNGO1FBQzlDO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBRTtJQUNGLGdCQUFnQixFQUFFO0VBQU0sR0FFeEIsa0VBQUMsZ0VBQWE7SUFDYixRQUFRLEVBQUdVLFlBQVksSUFBSztNQUMzQk4sYUFBYSxDQUFDO1FBQ2JFLG1CQUFtQixFQUFFO1VBQ3BCLEdBQUdULGtCQUFrQjtVQUNyQkcsZ0JBQWdCLEVBQUVVO1FBQ25CO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBRTtJQUNGLEtBQUssRUFBRVYsZ0JBQWlCO0lBQ3hCLE9BQU8sRUFBRSxDQUFDO01BQ1RuQyxLQUFLLEVBQUUsVUFBVTtNQUNqQlAsS0FBSyxFQUFFOEIsbURBQUUsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNO0lBQ3ZDLENBQUMsRUFBRTtNQUNGdkIsS0FBSyxFQUFFLFdBQVc7TUFDbEJQLEtBQUssRUFBRThCLG1EQUFFLENBQUMsV0FBVyxFQUFFLE1BQU07SUFDOUIsQ0FBQyxFQUFFO01BQ0Z2QixLQUFLLEVBQUUsTUFBTTtNQUNiUCxLQUFLLEVBQUU4QixtREFBRSxDQUFDLHFCQUFxQixFQUFFLE1BQU07SUFDeEMsQ0FBQyxDQUFFO0lBQ0gsS0FBSyxFQUFFQSxtREFBRSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBRTtJQUN2QyxJQUFJLEVBQUUsa0VBQUMsK0RBQXdCLE9BQUk7SUFDbkMsS0FBSyxFQUFFO01BQUVtQixZQUFZLEVBQUU7SUFBRSxDQUFFO0lBQzNCLHVCQUF1QixFQUFFO0VBQUssRUFDN0IsQ0FDYyxDQUVsQixDQUNPLENBQ0UsQ0FDTCxDQUNXO0FBRXRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVBEO0FBQ0E7QUFDQTs7QUFLK0I7QUFFTTs7QUFFckM7QUFDQTtBQUNBOztBQUVPLE1BQU1sQixpQkFBaUIsR0FBSU8sS0FBSyxJQUN0QyxnRkFDRVIsbURBQUUsQ0FBQyxzRUFBc0UsRUFBRSxNQUFNLENBQUMsQ0FFcEY7QUFHTSxNQUFNRSxrQkFBa0IsR0FBSU0sS0FBSyxJQUN2QyxnRkFDRVIsbURBQUUsQ0FBQyx5RUFBeUUsRUFBRSxNQUFNLENBQUMsQ0FFdkY7QUFHTSxNQUFNRyx5QkFBeUIsR0FBSUssS0FBSyxJQUM5QyxrRUFBQyx1RUFBTTtFQUNOLEVBQUUsRUFBRSxNQUFPO0VBQ1gsT0FBTyxFQUFFO0FBQUUsR0FFWCxnRkFDRVIsbURBQUUsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9FQUFDLCtEQUFZO0VBQUMsSUFBSSxFQUFDO0FBQXVELEdBQUVBLG1EQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFnQixLQUNqSyxDQUFPLEVBQ1AsZ0ZBQ0VBLG1EQUFFLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQ3BDLENBRVI7QUFHTSxNQUFNSSwwQkFBMEIsR0FBSUksS0FBSyxJQUMvQyxrRUFBQyx1RUFBTTtFQUNOLEVBQUUsRUFBRSxNQUFPO0VBQ1gsT0FBTyxFQUFFO0FBQUUsR0FFWCxnRkFDRVIsbURBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9FQUFDLCtEQUFZO0VBQUMsSUFBSSxFQUFDO0FBQXVELEdBQUVBLG1EQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFnQixLQUNsSyxDQUFPLEVBQ1AsZ0ZBQ0VBLG1EQUFFLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxDQUFDLENBQ3BDLENBRVI7QUFFTSxNQUFNSyx3QkFBd0IsR0FBSUcsS0FBSyxJQUM3QyxrRUFBQyx1RUFBTTtFQUNOLEVBQUUsRUFBRSxNQUFPO0VBQ1gsT0FBTyxFQUFFO0FBQUUsR0FFWCxnRkFDRVIsbURBQUUsQ0FBQyx5SEFBeUgsRUFBRSxNQUFNLENBQUMsQ0FDaEksRUFDUCxnRkFDRUEsbURBQUUsQ0FBQywrRUFBK0UsRUFBRSxNQUFNLENBQUMsQ0FDdEYsQ0FFUjtBQUVNLE1BQU1NLHdCQUF3QixHQUFJRSxLQUFLLElBQzdDLGtFQUFDLHVFQUFNO0VBQ04sRUFBRSxFQUFFLE1BQU87RUFDWCxPQUFPLEVBQUU7QUFBRSxHQUVYLGdGQUNFUixtREFBRSxDQUFDLHlHQUF5RyxFQUFFLE1BQU0sQ0FBQyxDQUNoSCxFQUNQLGdGQUNFQSxtREFBRSxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sQ0FBQyxDQUN2QyxDQUVSOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEY0RDtBQUV0RCxNQUFNbEQsS0FBSyxHQUFHeUUsaUVBQWdCLENBQUMsaUJBQWlCLEVBQUU7RUFDeERFLE9BQU8sR0FFSTtJQUFBLElBRkhDLEtBQUssdUVBQUc7TUFDZkMsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQUEsSUFBRUMsTUFBTTtJQUNSLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtNQUNsQixLQUFLLGlCQUFpQjtRQUFFO1VBQ3ZCLE9BQU87WUFDTixHQUFHSCxLQUFLO1lBQ1IsQ0FBQ0UsTUFBTSxDQUFDRSxHQUFHLEdBQUc7Y0FDYixJQUFJSixLQUFLLENBQUNFLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLElBQUlKLEtBQUssQ0FBQ2pELEtBQUssQ0FBQztjQUNyQyxHQUFHbUQsTUFBTSxDQUFDbkQ7WUFDWDtVQUNELENBQUM7UUFDRjtJQUFDO0lBRUYsT0FBT2lELEtBQUs7RUFDYixDQUFDO0VBQ0RLLE9BQU8sRUFBRTtJQUNSakQsU0FBUyxDQUFDZ0QsR0FBRyxFQUFFckQsS0FBSyxFQUFFO01BQ3JCLE9BQU87UUFDTm9ELElBQUksRUFBRSxpQkFBaUI7UUFDdkJDLEdBQUc7UUFDSHJEO01BQ0QsQ0FBQztJQUNGO0VBQ0QsQ0FBQztFQUNEdUQsU0FBUyxFQUFFO0lBQ1ZwRCxTQUFTLENBQUM4QyxLQUFLLEVBQUVJLEdBQUcsRUFBRTtNQUNyQixPQUFPbEUsTUFBTSxDQUFDcUUsTUFBTSxDQUFDUCxLQUFLLEVBQUVJLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBQ0RqRCxTQUFTLENBQUM2QyxLQUFLLEVBQUVJLEdBQUcsRUFBRTtNQUNyQixNQUFNO1FBQ0wsQ0FBQ0EsR0FBRyxHQUFJSTtNQUNULENBQUMsR0FBR1IsS0FBSztNQUNULE9BQU9RLE1BQU07SUFDZDtFQUNELENBQUM7RUFDREMsT0FBTyxFQUFFLENBQUUsYUFBYTtBQUN6QixDQUFDLENBQUM7QUFFRlgseURBQVEsQ0FBQzFFLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7QUMxQ2Y7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFNkM7QUFFUjtBQUUyQjs7QUFFaEU7QUFDQTtBQUNBOztBQUVzQjtBQUk0QjtBQUlzQjs7QUFFeEU7QUFDQTtBQUNBOztBQUVBLE1BQU13RixzQkFBc0IsR0FBRyxtQkFBbUI7QUFFbEQsTUFBTUMscUNBQXFDLEdBQUc7RUFDN0M3QixpQkFBaUIsRUFBRSxPQUFPO0VBQzFCQyxrQkFBa0IsRUFBRSxPQUFPO0VBQzNCRSxnQkFBZ0IsRUFBRSxHQUFHO0VBQ3JCRCxnQkFBZ0IsRUFBRTtBQUNuQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQXdCLDJEQUFTLENBQ1IsMEJBQTBCLEVBQzFCLHNDQUFzQyxFQUNyQ0ksUUFBUSxJQUFLO0VBQ2I7RUFDQSxNQUFNO0lBQ0xDLHFCQUFxQixHQUFHO0VBQ3pCLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxVQUFVO0VBQ3ZCLElBQUdELHFCQUFxQixFQUFFO0lBQ3pCakYsT0FBTyxDQUFDbUYsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUN2QjtFQUNBO0VBQ0EsT0FBTztJQUNOLEdBQUdILFFBQVE7SUFDWEUsVUFBVSxFQUFFO01BQ1gsR0FBR0YsUUFBUSxDQUFDRSxVQUFVO01BQ3RCeEIsbUJBQW1CLEVBQUU7UUFDcEJXLElBQUksRUFBRSxRQUFRO1FBQ2RlLE9BQU8sRUFBRTtVQUNSM0UsU0FBUyxFQUFFLEVBQUU7VUFDYlMsVUFBVSxFQUFFLEVBQUU7VUFDZCxHQUFHNkQ7UUFDSjtNQUNEO0lBQ0Q7RUFDRCxDQUFDO0FBQ0YsQ0FBQyxDQUNEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQUgsMkRBQVMsQ0FDUixrQkFBa0IsRUFDbEIsb0RBQW9ELEVBQ3BEQyw4RUFBMEIsQ0FBQ1EsU0FBUyxJQUFJckMsS0FBSyxJQUFJO0VBQ2hELE1BQU07SUFDTGtDLFVBQVUsRUFBRTtNQUNYeEIsbUJBQW1CLEVBQUU0Qiw2QkFBNkI7TUFDbEQ1QixtQkFBbUIsRUFBRTtRQUNwQmpELFNBQVM7UUFDVFM7TUFDRCxDQUFDLEdBQUcsQ0FBQztJQUNOLENBQUM7SUFDRHNDO0VBQ0QsQ0FBQyxHQUFHUixLQUFLO0VBQ1Q7RUFDQSxJQUFJdkMsU0FBUyxLQUFLOEUsU0FBUyxJQUFJckUsVUFBVSxLQUFLcUUsU0FBUyxFQUFFO0lBQ3hELE9BQVEsa0lBQ1Asa0VBQUMsa0hBQXVCO01BQ3ZCLGtCQUFrQixFQUFFRCw2QkFBOEI7TUFDbEQsMEJBQTBCLEVBQUVQLHFDQUFzQztNQUNsRSxtQkFBbUIsRUFBRTVELDBGQUF3QixFQUFHO01BQ2hELGFBQWEsRUFBRXFDO0lBQWMsRUFDNUIsRUFDRixrRUFBQyxTQUFTLEVBQUtSLEtBQUssQ0FBSSxDQUN0QjtFQUNKO0VBQ0EsT0FBTyxrRUFBQyxTQUFTLEVBQUtBLEtBQUssQ0FBSTtBQUNoQyxDQUFDLEVBQUUseUNBQXlDLENBQUMsQ0FDN0M7O0FBRUQ7QUFDQTtBQUNBOztBQUVBNEIsMkRBQVMsQ0FDUixrQ0FBa0MsRUFDbEMsd0NBQXdDLEVBQ3hDLENBQUM1QixLQUFLLEVBQUVxQixJQUFJLEVBQUVhLFVBQVUsS0FBSztFQUM1QjtFQUNBLE1BQU07SUFBQ00sU0FBUyxFQUFFQztFQUFZLENBQUMsR0FBR3pDLEtBQUs7RUFDdkMsTUFBTTtJQUNMVSxtQkFBbUIsRUFBRTtNQUNwQmpELFNBQVM7TUFDVFMsVUFBVTtNQUNWZ0MsaUJBQWlCO01BQ2pCQyxrQkFBa0I7TUFDbEJFLGdCQUFnQjtNQUNoQkQ7SUFDRCxDQUFDLEdBQUcsQ0FBQztFQUNOLENBQUMsR0FBRzhCLFVBQVU7RUFDZDtFQUNBLElBQUl6RSxTQUFTLElBQUlTLFVBQVUsRUFBRTtJQUM1QjtJQUNBLE1BQU1zRSxTQUFTLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUvRixNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFa0IsR0FBRyxLQUFLO01BQ3BGLE9BQVFBLEdBQUcsS0FBS2dFLHNCQUFzQixHQUFLLEdBQUVsRixHQUFJLElBQUdrQixHQUFJLEVBQUMsR0FBSSxHQUFFbEIsR0FBSSxFQUFDO0lBQ3JFLENBQUMsRUFBR2tGLHNCQUFzQixDQUFFO0lBQzVCO0lBQ0EsT0FBTztNQUNOLEdBQUc5QixLQUFLO01BQ1J3QyxTQUFTO01BQ1QsY0FBYyxFQUFFLEVBQUU7TUFDbEIsSUFBSS9FLFNBQVMsSUFBSTtRQUFDLGlCQUFpQixFQUFFQTtNQUFTLENBQUMsQ0FBQztNQUNoRCxJQUFJUyxVQUFVLElBQUk7UUFBQyxrQkFBa0IsRUFBRUE7TUFBVSxDQUFDLENBQUM7TUFDbkQsSUFBSWdDLGlCQUFpQixJQUFJO1FBQUMsMEJBQTBCLEVBQUVBO01BQWlCLENBQUMsQ0FBQztNQUN6RSxJQUFJQyxrQkFBa0IsSUFBSTtRQUFDLDJCQUEyQixFQUFFQTtNQUFrQixDQUFDLENBQUM7TUFDNUUsSUFBSUMsZ0JBQWdCLElBQUk7UUFBQyx3QkFBd0IsRUFBRUE7TUFBZ0IsQ0FBQyxDQUFDO01BQ3JFLElBQUlDLGdCQUFnQixJQUFJO1FBQUMsd0JBQXdCLEVBQUVBO01BQWdCLENBQUM7SUFDckUsQ0FBQztFQUNGO0VBQ0EsT0FBT0wsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMvbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcz80M2U4Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3M/YmI3YyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZHByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcblxuLyoqXG4gKiBQYXJzZSB0aGUgYW5pbWF0ZS5jc3Mgc3R5bGVzXG4gKi9cblxuY29uc3QgcGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMgPSAoKSA9PiBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLnJlZHVjZSgocmVzLCBzdHlsZVNoZWV0KSA9PiB7XG5cdGlmKHN0eWxlU2hlZXQuaHJlZiAmJiBzdHlsZVNoZWV0LmhyZWYuaW5jbHVkZXMoJ2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0JykpIHtcblx0XHRjb25zb2xlLmRlYnVnKCdHZW5lcmF0aW5nIEFuaW1hdGUuY3NzIERlZmluaXRpb25zJylcblx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0Li4uKChcblx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX18nKVxuXHRcdFx0XHQmJiAhcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX19hbmltYXRlZCcpXG5cdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dCAhPT0gJy5hbmltYXRlX19qYWNrSW5UaGVCb3gnXG5cdFx0XHQpICYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSBcblx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVJbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0gOiB7YW5pbWF0ZU91dDogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSlcblx0XHRcdClcblx0XHR9KSwge1xuXHRcdFx0YW5pbWF0ZUluOiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dLFxuXHRcdFx0YW5pbWF0ZU91dDogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZXM7XG5cdH1cbn0sIFtdKTtcblxuLyoqXG4gKiBTdG9yZSB0aGUgXG4gKi9cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyA9ICgpID0+IHtcblx0Y29uc3Qge2hhc0dsb2JhbCwgZ2V0R2xvYmFsfSA9IHVzZVNlbGVjdChoMm1sRmlsdGVyU3RvcmUpO1xuXHRjb25zdCB7c2V0R2xvYmFsfSA9IGRpc3BhdGNoKGgybWxGaWx0ZXJTdG9yZSk7XG5cdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkge1xuXHRcdGNvbnNvbGUuZGVidWcoJ1NldHRpbmcgQW5pbWF0ZS5jc3MgRGVmaW5pdGlvbnMnKTtcblx0XHRzZXRHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnLCBwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0fTtcblx0cmV0dXJuIGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xufSIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuICAgIF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0QW5pbWF0ZUluSGVscFRleHQsXG5cdEFuaW1hdGVPdXRIZWxwVGV4dCxcblx0QW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0QW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQsXG5cdEFuaW1hdGVUaHJlc2hvbGRIZWxwVGV4dCxcblx0QW5pbWF0ZURpcmVjdGlvbkhlbHBUZXh0XG59IGZyb20gJy4vLi4vSGVscFRleHQnO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgRmlsdGVySW5zcGVjdG9yQ29udHJvbHMgPSAocHJvcHMpID0+IHtcblx0Ly9cblx0Y29uc3Qge1xuXHRcdGV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXM6IHtcblx0XHRcdGFuaW1hdGVJbixcblx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdGFuaW1hdGVEaXJlY3Rpb24sXG5cdFx0XHRhbmltYXRlVGhyZXNob2xkXG5cdFx0fSxcblx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkFuaW1hdGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxBbmltYXRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlSW5IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZU91dEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cblx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0eyhhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgb24gU2Nyb2xsIEFkZGl0aW9uYWwgU2V0dGluZ3NcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ub3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHNcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IGFuaW1hdGVJbkR1cmF0aW9uICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVJbkR1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZU91dER1cmF0aW9uICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlVGhyZXNob2xkICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlVGhyZXNob2xkfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBUaHJlc2hvbGRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZVRocmVzaG9sZDogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZVRocmVzaG9sZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdUaHJlc2hvbGQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlVGhyZXNob2xkOiBuZXdUaHJlc2hvbGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVUaHJlc2hvbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MC4xfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBUaHJlc2hvbGRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVUaHJlc2hvbGRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlRGlyZWN0aW9uICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlRGlyZWN0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBEaXJlY3Rpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZURpcmVjdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZURpcmVjdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlRGlyZWN0aW9uOiBuZXdEaXJlY3Rpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVEaXJlY3Rpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdmb3J3YXJkcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFwiRm9yd2FyZHMgKERlZmF1bHQpXCIsICdoMm1sJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYmFja3dhcmRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXCJCYWNrd2FyZHNcIiwgJ2gybWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdib3RoJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXCJCb3RoIChFeHBlcmltZW50YWwpXCIsICdoMm1sJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0fV19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgRGlyZWN0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlRGlyZWN0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L1ZTdGFjaz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdCk7XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0RXh0ZXJuYWxMaW5rLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBJbicgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIHRoZSBibG9jayBpbnRvIHZpZXcuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVPdXRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgdGhlIGJsb2NrIG91dCBvZiB2aWV3LlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5cbmV4cG9ydCBjb25zdCBBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgSW4nXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgT3V0J1wiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcImR1cmF0aW9uXCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyAnNTAwbXMnLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZVRocmVzaG9sZEhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgVGhyZXNob2xkJywgdGhpcyBkZXRlcm1pbmVzIGhvdyBtdWNoIG9mIHRoZSBibG9jayBtdXN0IGJlIHZpc2libGUgYmVmb3JlIHRoZSBhbmltYXRpb25zIHBsYXkuXCIsICdodG1sJyl9XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICcwLjMnLCB3aGljaCBpcyBlcXVhbCB0byAzMCUgb2YgdGhlIGVsZW1lbnQgYmVpbmcgdmlzaWJsZS5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVEaXJlY3Rpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIERpcmVjdGlvbicsIHRoaXMgZGV0ZXJtaW5lcyB3aGljaCBzY3JvbGxpbmcgYmVoYXZpb3VycyB0cmlnZ2VyIHRoZSBhbmltYXRpb24uXCIsICdodG1sJyl9XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICdGb3J3YXJkcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1eFN0b3JlLCByZWdpc3RlciB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoJ2gybWxGaWx0ZXJTdG9yZScsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRnbG9iYWxzOiB7fVxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdIMk1MX1NFVF9HTE9CQUwnOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0W2FjdGlvbi5rZXldOiB7XG5cdFx0XHRcdFx0XHQuLi4oc3RhdGVbYWN0aW9uLmtleV0gJiYgc3RhdGUudmFsdWUpLFxuXHRcdFx0XHRcdFx0Li4uYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0R2xvYmFsKGtleSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6ICdIMk1MX1NFVF9HTE9CQUwnLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRoYXNHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5oYXNPd24oc3RhdGUsIGtleSk7XG5cdFx0fSxcblx0XHRnZXRHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0Y29uc3QgeyBcblx0XHRcdFx0W2tleV0gOiB2YWx1ZXNcblx0XHRcdH0gPSBzdGF0ZTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fSxcblx0fSxcblx0cGVyc2lzdDogWyAncHJlZmVyZW5jZXMnIF0sXG59KTtcblxucmVnaXN0ZXIoc3RvcmUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7XG5cdEFuaW1hdGVEb3RDc3NEZWZpbml0aW9uc1xufSBmcm9tICcuLi8uLi8uLi9jb21tb24vQW5pbWF0ZURvdENzc0RlZmluaXRpb25zJztcblxuaW1wb3J0IHtcblx0RmlsdGVySW5zcGVjdG9yQ29udHJvbHNcbn0gZnJvbSAnLi9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMnO1xuXG4vKlxuICogR2xvYmFsXG4gKi9cblxuY29uc3QgYW5pbWF0ZUlzQW5pbWF0ZWRDbGFzcyA9ICdhbmltYXRlX19hbmltYXRlZCc7XG5cbmNvbnN0IG9wdGlvbmFsQW5pbWF0ZU9uU2Nyb2xsVmFsdWVzRGVmYXVsdHMgPSB7XG5cdGFuaW1hdGVJbkR1cmF0aW9uOiAnNTAwbXMnLFxuXHRhbmltYXRlT3V0RHVyYXRpb246ICc1MDBtcycsXG5cdGFuaW1hdGVUaHJlc2hvbGQ6IDAuMyxcblx0YW5pbWF0ZURpcmVjdGlvbjogJ2ZvcndhcmRzJ1xufVxuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWFuaW1hdGUtb24tc2Nyb2xsLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdC8vXG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsID0gZmFsc2Vcblx0XHR9ID0gc2V0dGluZ3MuYXR0cmlidXRlcztcblx0XHRpZihoMm1sQW5pbWF0aW9uT25TY3JvbGwpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdUZXN0aW5nJyk7XG5cdFx0fVxuXHRcdC8vXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZUluOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6ICcnLFxuXHRcdFx0XHRcdFx0Li4ub3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuKTtcblxuLypcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0VkaXQnLFxuXHQnaDJtbC9hZGQtYW5pbWF0ZS1vbi1zY3JvbGwtaW5zZXBjdG9yLWNvbnRyb2xzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDogaDJtbEFuaW1hdGVPblNjcm9sbEF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0fSA9IHt9XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gIT09IHVuZGVmaW5lZCB8fCBhbmltYXRlT3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoPD5cblx0XHRcdFx0PEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzPXtoMm1sQW5pbWF0ZU9uU2Nyb2xsQXR0cmlidXRlc31cblx0XHRcdFx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cz17b3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c31cdFxuXHRcdFx0XHRcdGFuaW1hdGlvbkNsYXNzTmFtZXM9e0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucygpfVxuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPlxuXHRcdFx0PC8+KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZEFuaW1hdGVPblNjcm9sbEluc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLWFuaW1hdGUtb24tc2Nyb2xsLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQsXG5cdFx0XHRcdGFuaW1hdGVEaXJlY3Rpb24sXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkge1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IChvbGRDbGFzc05hbWUgPyBvbGRDbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoY3VyICE9PSBhbmltYXRlSXNBbmltYXRlZENsYXNzKSA/IGAke3Jlc30gJHtjdXJ9YCA6IGAke3Jlc31gXG5cdFx0XHR9LCAoYW5pbWF0ZUlzQW5pbWF0ZWRDbGFzcykpO1xuXHRcdFx0Ly9cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdCdkYXRhLWFuaW1hdGUnOiAnJyxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbiAmJiB7J2RhdGEtYW5pbWF0ZS1pbic6IGFuaW1hdGVJbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dCAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQnOiBhbmltYXRlT3V0fSksXG5cdFx0XHRcdC4uLihhbmltYXRlSW5EdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1pbi1kdXJhdGlvbic6IGFuaW1hdGVJbkR1cmF0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0RHVyYXRpb24gJiYgeydkYXRhLWFuaW1hdGUtb3V0LWR1cmF0aW9uJzogYW5pbWF0ZU91dER1cmF0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlRGlyZWN0aW9uICYmIHsnZGF0YS1hbmltYXRlLWRpcmVjdGlvbic6IGFuaW1hdGVEaXJlY3Rpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVUaHJlc2hvbGQgJiYgeydkYXRhLWFuaW1hdGUtVGhyZXNob2xkJzogYW5pbWF0ZVRocmVzaG9sZH0pLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9XG4pO1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInN0b3JlIiwiaDJtbEZpbHRlclN0b3JlIiwicGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwicmVkdWNlIiwicmVzIiwic3R5bGVTaGVldCIsImhyZWYiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJkZWJ1ZyIsImNzc1J1bGVzIiwicnVsZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJDU1NTdHlsZVJ1bGUiLCJzZWxlY3RvclRleHQiLCJhbmltYXRlSW4iLCJsYWJlbCIsInN0eWxlIiwiYW5pbWF0aW9uTmFtZSIsInJlcGxhY2UiLCJjdXIiLCJpbmQiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlIiwiYW5pbWF0ZU91dCIsIkFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyIsImhhc0dsb2JhbCIsImdldEdsb2JhbCIsInNldEdsb2JhbCIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJOb3RpY2UiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVGV4dCIsIlRleHQiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIl9fIiwiQW5pbWF0ZUluSGVscFRleHQiLCJBbmltYXRlT3V0SGVscFRleHQiLCJBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IiwiQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQiLCJBbmltYXRlVGhyZXNob2xkSGVscFRleHQiLCJBbmltYXRlRGlyZWN0aW9uSGVscFRleHQiLCJGaWx0ZXJJbnNwZWN0b3JDb250cm9scyIsInByb3BzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJhbmltYXRlRGlyZWN0aW9uIiwiYW5pbWF0ZVRocmVzaG9sZCIsIm9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzIiwiYW5pbWF0aW9uQ2xhc3NOYW1lcyIsInNldEF0dHJpYnV0ZXMiLCJuZXdBbmltYXRpb24iLCJoMm1sQW5pbWF0ZU9uU2Nyb2xsIiwibWFyZ2luQm90dG9tIiwibmV3RHVyYXRpb24iLCJuZXdUaHJlc2hvbGQiLCJuZXdEaXJlY3Rpb24iLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVnaXN0ZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJnbG9iYWxzIiwiYWN0aW9uIiwidHlwZSIsImtleSIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJoYXNPd24iLCJ2YWx1ZXMiLCJwZXJzaXN0IiwiYWRkRmlsdGVyIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJhbmltYXRlSXNBbmltYXRlZENsYXNzIiwib3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0cyIsInNldHRpbmdzIiwiaDJtbEFuaW1hdGlvbk9uU2Nyb2xsIiwiYXR0cmlidXRlcyIsImxvZyIsImRlZmF1bHQiLCJCbG9ja0VkaXQiLCJoMm1sQW5pbWF0ZU9uU2Nyb2xsQXR0cmlidXRlcyIsInVuZGVmaW5lZCIsImNsYXNzTmFtZSIsIm9sZENsYXNzTmFtZSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==