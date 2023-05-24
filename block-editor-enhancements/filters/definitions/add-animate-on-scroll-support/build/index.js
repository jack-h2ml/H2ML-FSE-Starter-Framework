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
      animateCustomClasses,
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: animateCustomClasses?.join(', '),
    onChange: newCustomClasses => {
      setAttributes({
        h2mlAnimateOnScroll: {
          ...existingAttributes,
          animateCustomClasses: newCustomClasses.split(',').map(x => x.trim()).filter(x => x !== '')
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom Classnames", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.AnimateCustomClassHelpText, null)
  }), (animateIn || animateOut || animateCustomClasses) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
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
/* harmony export */   "AnimateCustomClassHelpText": function() { return /* binding */ AnimateCustomClassHelpText; },
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
const AnimateCustomClassHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add a comma seperated list of custom 'Classnames' to toggle, this can be used instead of, or in addition to, the predefined animations above.", 'h2ml')));

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
  if (settings?.attributes) {
    //
    const {
      h2mlAnimationOnScroll = false
    } = settings.attributes;
    //
    if (!settings.name?.includes('gravityforms')) {
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
              animateCustomClasses: [],
              ...optionalAnimateOnScrollValuesDefaults
            }
          }
        }
      };
    }
  }
  return settings;
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
        animateOut,
        animateCustomClasses
      } = {}
    },
    setAttributes
  } = props;
  //
  if (animateIn !== undefined || animateOut !== undefined || animateCustomClasses !== undefined) {
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
      animateCustomClasses,
      animateInDuration,
      animateOutDuration,
      animateThreshold,
      animateDirection
    } = {}
  } = attributes;
  //
  if (animateIn || animateOut || animateCustomClasses?.length) {
    //
    const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
      return cur !== animateIsAnimatedClass ? `${res} ${cur}` : `${res}`;
    }, animateIsAnimatedClass);
    //
    const encode = html => {
      let doc = new DOMParser().parseFromString(html, 'text/html');
      return encodeURIComponent(doc.body.textContent) || "";
    };
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
      ...(animateCustomClasses?.length && {
        'data-animate-custom-classes': encode(animateCustomClasses.join(' '))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFPSSxrQkFBa0IsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7SUFDdEQsQ0FBQztJQUNEO0lBQ0EsT0FBTztNQUNOLEdBQUcvRSxLQUFLO01BQ1JhLFNBQVM7TUFDVCxjQUFjLEVBQUUsRUFBRTtNQUNsQixJQUFJckQsU0FBUyxJQUFJO1FBQUMsaUJBQWlCLEVBQUVBO01BQVMsQ0FBQyxDQUFDO01BQ2hELElBQUlTLFVBQVUsSUFBSTtRQUFDLGtCQUFrQixFQUFFQTtNQUFVLENBQUMsQ0FBQztNQUNuRCxJQUFJaUMsb0JBQW9CLEVBQUU4QyxNQUFNLElBQUk7UUFBQyw2QkFBNkIsRUFBRXdCLE1BQU0sQ0FBQ3RFLG9CQUFvQixDQUFDd0IsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUFDLENBQUMsQ0FBQztNQUM1RyxJQUFJdkIsaUJBQWlCLElBQUk7UUFBQywwQkFBMEIsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3pFLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMkJBQTJCLEVBQUVBO01BQWtCLENBQUMsQ0FBQztNQUM1RSxJQUFJQyxnQkFBZ0IsSUFBSTtRQUFDLHdCQUF3QixFQUFFQTtNQUFnQixDQUFDLENBQUM7TUFDckUsSUFBSUMsZ0JBQWdCLElBQUk7UUFBQyx3QkFBd0IsRUFBRUE7TUFBZ0IsQ0FBQyxDQUFDO01BQ3JFLElBQUlBLGdCQUFnQixJQUFJO1FBQUMsd0JBQXdCLEVBQUVBO01BQWdCLENBQUM7SUFDckUsQ0FBQztFQUNGO0VBQ0EsT0FBT04sS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMvbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcz80M2U4Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3M/YmI3YyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZHByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcblxuLyoqXG4gKiBQYXJzZSB0aGUgYW5pbWF0ZS5jc3Mgc3R5bGVzXG4gKi9cblxuY29uc3QgcGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMgPSAoKSA9PiBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLnJlZHVjZSgocmVzLCBzdHlsZVNoZWV0KSA9PiB7XG5cdGlmKHN0eWxlU2hlZXQuaHJlZiAmJiBzdHlsZVNoZWV0LmhyZWYuaW5jbHVkZXMoJ2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0JykpIHtcblx0XHRjb25zb2xlLmRlYnVnKCdHZW5lcmF0aW5nIEFuaW1hdGUuY3NzIERlZmluaXRpb25zJylcblx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0Li4uKChcblx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX18nKVxuXHRcdFx0XHQmJiAhcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX19hbmltYXRlZCcpXG5cdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dCAhPT0gJy5hbmltYXRlX19qYWNrSW5UaGVCb3gnXG5cdFx0XHQpICYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSBcblx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVJbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0gOiB7YW5pbWF0ZU91dDogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSlcblx0XHRcdClcblx0XHR9KSwge1xuXHRcdFx0YW5pbWF0ZUluOiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dLFxuXHRcdFx0YW5pbWF0ZU91dDogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZXM7XG5cdH1cbn0sIFtdKTtcblxuLyoqXG4gKiBTdG9yZSB0aGUgXG4gKi9cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyA9ICgpID0+IHtcblx0Y29uc3Qge2hhc0dsb2JhbCwgZ2V0R2xvYmFsfSA9IHVzZVNlbGVjdChoMm1sRmlsdGVyU3RvcmUpO1xuXHRjb25zdCB7c2V0R2xvYmFsfSA9IGRpc3BhdGNoKGgybWxGaWx0ZXJTdG9yZSk7XG5cdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkge1xuXHRcdGNvbnNvbGUuZGVidWcoJ1NldHRpbmcgQW5pbWF0ZS5jc3MgRGVmaW5pdGlvbnMnKTtcblx0XHRzZXRHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnLCBwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0fTtcblx0cmV0dXJuIGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xufSIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuICAgIF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0QW5pbWF0ZUluSGVscFRleHQsXG5cdEFuaW1hdGVPdXRIZWxwVGV4dCxcblx0QW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0QW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQsXG5cdEFuaW1hdGVUaHJlc2hvbGRIZWxwVGV4dCxcblx0QW5pbWF0ZURpcmVjdGlvbkhlbHBUZXh0LFxuXHRBbmltYXRlQ3VzdG9tQ2xhc3NIZWxwVGV4dFxufSBmcm9tICcuLy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUN1c3RvbUNsYXNzZXMsXG5cdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbixcblx0XHRcdGFuaW1hdGVEaXJlY3Rpb24sXG5cdFx0XHRhbmltYXRlVGhyZXNob2xkXG5cdFx0fSxcblx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkFuaW1hdGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxBbmltYXRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlSW5IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZU91dEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cblx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlQ3VzdG9tQ2xhc3Nlcz8uam9pbignLCAnKX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdDdXN0b21DbGFzc2VzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUN1c3RvbUNsYXNzZXM6IG5ld0N1c3RvbUNsYXNzZXMuc3BsaXQoJywnKS5tYXAoeCA9PiB4LnRyaW0oKSkuZmlsdGVyKHggPT4geCAhPT0gJycpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkN1c3RvbSBDbGFzc25hbWVzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxBbmltYXRlQ3VzdG9tQ2xhc3NIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7KGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0IHx8IGFuaW1hdGVDdXN0b21DbGFzc2VzKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBvbiBTY3JvbGwgQWRkaXRpb25hbCBTZXR0aW5nc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5vcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZUluRHVyYXRpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBJbiBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZUluRHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBJbiBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlT3V0RHVyYXRpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxBbmltYXRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdEdXJhdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IGFuaW1hdGVUaHJlc2hvbGQgIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVUaHJlc2hvbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIFRocmVzaG9sZFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlVGhyZXNob2xkOiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlVGhyZXNob2xkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld1RocmVzaG9sZCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVUaHJlc2hvbGQ6IG5ld1RocmVzaG9sZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZVRocmVzaG9sZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXswLjF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heD17MX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIFRocmVzaG9sZFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8QW5pbWF0ZVRocmVzaG9sZEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IGFuaW1hdGVEaXJlY3Rpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVEaXJlY3Rpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIERpcmVjdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlRGlyZWN0aW9uOiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlRGlyZWN0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0RpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVEaXJlY3Rpb246IG5ld0RpcmVjdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZURpcmVjdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2ZvcndhcmRzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXCJGb3J3YXJkcyAoRGVmYXVsdClcIiwgJ2gybWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdiYWNrd2FyZHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyhcIkJhY2t3YXJkc1wiLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2JvdGgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyhcIkJvdGggKEV4cGVyaW1lbnRhbClcIiwgJ2gybWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBEaXJlY3Rpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEFuaW1hdGVEaXJlY3Rpb25IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0KTtcbn0iLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZUluSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIEluJyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgdGhlIGJsb2NrIGludG8gdmlldy5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuXG5leHBvcnQgY29uc3QgQW5pbWF0ZU91dEhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBPdXQnIGFuaW1hdGlvbiBwbGF5cyB3aGVuIHNjcm9sbGluZyB0aGUgYmxvY2sgb3V0IG9mIHZpZXcuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuXG5leHBvcnQgY29uc3QgQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBPdXQnXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBBbmltYXRlVGhyZXNob2xkSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBUaHJlc2hvbGQnLCB0aGlzIGRldGVybWluZXMgaG93IG11Y2ggb2YgdGhlIGJsb2NrIG11c3QgYmUgdmlzaWJsZSBiZWZvcmUgdGhlIGFuaW1hdGlvbnMgcGxheS5cIiwgJ2h0bWwnKX1cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzAuMycsIHdoaWNoIGlzIGVxdWFsIHRvIDMwJSBvZiB0aGUgZWxlbWVudCBiZWluZyB2aXNpYmxlLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZURpcmVjdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgRGlyZWN0aW9uJywgdGhpcyBkZXRlcm1pbmVzIHdoaWNoIHNjcm9sbGluZyBiZWhhdmlvdXJzIHRyaWdnZXIgdGhlIGFuaW1hdGlvbi5cIiwgJ2h0bWwnKX1cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJ0ZvcndhcmRzJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVDdXN0b21DbGFzc0hlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkFkZCBhIGNvbW1hIHNlcGVyYXRlZCBsaXN0IG9mIGN1c3RvbSAnQ2xhc3NuYW1lcycgdG8gdG9nZ2xlLCB0aGlzIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YsIG9yIGluIGFkZGl0aW9uIHRvLCB0aGUgcHJlZGVmaW5lZCBhbmltYXRpb25zIGFib3ZlLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdXhTdG9yZSwgcmVnaXN0ZXIgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKCdoMm1sRmlsdGVyU3RvcmUnLCB7XG5cdHJlZHVjZXIoc3RhdGUgPSB7XG5cdFx0Z2xvYmFsczoge31cblx0fSwgYWN0aW9uKSB7XG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0Y2FzZSAnSDJNTF9TRVRfR0xPQkFMJzoge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdFthY3Rpb24ua2V5XToge1xuXHRcdFx0XHRcdFx0Li4uKHN0YXRlW2FjdGlvbi5rZXldICYmIHN0YXRlLnZhbHVlKSxcblx0XHRcdFx0XHRcdC4uLmFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0YWN0aW9uczoge1xuXHRcdHNldEdsb2JhbChrZXksIHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0eXBlOiAnSDJNTF9TRVRfR0xPQkFMJyxcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0aGFzR2xvYmFsKHN0YXRlLCBrZXkpIHtcblx0XHRcdHJldHVybiBPYmplY3QuaGFzT3duKHN0YXRlLCBrZXkpO1xuXHRcdH0sXG5cdFx0Z2V0R2xvYmFsKHN0YXRlLCBrZXkpIHtcblx0XHRcdGNvbnN0IHsgXG5cdFx0XHRcdFtrZXldIDogdmFsdWVzXG5cdFx0XHR9ID0gc3RhdGU7XG5cdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdH0sXG5cdH0sXG5cdHBlcnNpc3Q6IFsgJ3ByZWZlcmVuY2VzJyBdLFxufSk7XG5cbnJlZ2lzdGVyKHN0b3JlKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQge1xuXHRBbmltYXRlRG90Q3NzRGVmaW5pdGlvbnNcbn0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyc7XG5cbmltcG9ydCB7XG5cdEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG59IGZyb20gJy4vZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzJztcblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MgPSAnYW5pbWF0ZV9fYW5pbWF0ZWQnO1xuXG5jb25zdCBvcHRpb25hbEFuaW1hdGVPblNjcm9sbFZhbHVlc0RlZmF1bHRzID0ge1xuXHRhbmltYXRlSW5EdXJhdGlvbjogJzUwMG1zJyxcblx0YW5pbWF0ZU91dER1cmF0aW9uOiAnNTAwbXMnLFxuXHRhbmltYXRlVGhyZXNob2xkOiAwLjMsXG5cdGFuaW1hdGVEaXJlY3Rpb246ICdmb3J3YXJkcydcbn1cblxuLyoqIFxuICogVGhlIEZpbHRlclxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXG5cdCdoMm1sL2FkZC1hbmltYXRlLW9uLXNjcm9sbC1hdHRyaWJ1dGUnLFxuXHQoc2V0dGluZ3MpID0+IHtcblx0XHQvL1xuXHRcdGlmKHNldHRpbmdzPy5hdHRyaWJ1dGVzKSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGwgPSBmYWxzZVxuXHRcdFx0fSA9IHNldHRpbmdzLmF0dHJpYnV0ZXM7XG5cdFx0XHQvL1xuXHRcdFx0aWYoIXNldHRpbmdzLm5hbWU/LmluY2x1ZGVzKCdncmF2aXR5Zm9ybXMnKSkge1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRlQ3VzdG9tQ2xhc3NlczogW10sXG5cdFx0XHRcdFx0XHRcdFx0Li4ub3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVx0XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1hbmltYXRlLW9uLXNjcm9sbC1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sQW5pbWF0ZU9uU2Nyb2xsOiBoMm1sQW5pbWF0ZU9uU2Nyb2xsQXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdGFuaW1hdGVDdXN0b21DbGFzc2VzXG5cdFx0XHRcdH0gPSB7fVxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0Ly9cblx0XHRpZiAoYW5pbWF0ZUluICE9PSB1bmRlZmluZWQgfHwgYW5pbWF0ZU91dCAhPT0gdW5kZWZpbmVkIHx8IGFuaW1hdGVDdXN0b21DbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoPD5cblx0XHRcdFx0PEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzPXtoMm1sQW5pbWF0ZU9uU2Nyb2xsQXR0cmlidXRlc31cblx0XHRcdFx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cz17b3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c31cdFxuXHRcdFx0XHRcdGFuaW1hdGlvbkNsYXNzTmFtZXM9e0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucygpfVxuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPlxuXHRcdFx0PC8+KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZEFuaW1hdGVPblNjcm9sbEluc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLWFuaW1hdGUtb24tc2Nyb2xsLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGVPblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGFuaW1hdGVDdXN0b21DbGFzc2VzLFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlVGhyZXNob2xkLFxuXHRcdFx0XHRhbmltYXRlRGlyZWN0aW9uXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCB8fCBhbmltYXRlQ3VzdG9tQ2xhc3Nlcz8ubGVuZ3RoKSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChjdXIgIT09IGFuaW1hdGVJc0FuaW1hdGVkQ2xhc3MpID8gYCR7cmVzfSAke2N1cn1gIDogYCR7cmVzfWBcblx0XHRcdH0sIChhbmltYXRlSXNBbmltYXRlZENsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgZW5jb2RlID0gKGh0bWwpID0+IHtcblx0XHRcdFx0bGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuXHRcdFx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGRvYy5ib2R5LnRleHRDb250ZW50KSB8fCBcIlwiO1xuXHRcdFx0fVxuXHRcdFx0Ly9cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdCdkYXRhLWFuaW1hdGUnOiAnJyxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbiAmJiB7J2RhdGEtYW5pbWF0ZS1pbic6IGFuaW1hdGVJbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dCAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQnOiBhbmltYXRlT3V0fSksXG5cdFx0XHRcdC4uLihhbmltYXRlQ3VzdG9tQ2xhc3Nlcz8ubGVuZ3RoICYmIHsnZGF0YS1hbmltYXRlLWN1c3RvbS1jbGFzc2VzJzogZW5jb2RlKGFuaW1hdGVDdXN0b21DbGFzc2VzLmpvaW4oJyAnKSl9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbkR1cmF0aW9uICYmIHsnZGF0YS1hbmltYXRlLWluLWR1cmF0aW9uJzogYW5pbWF0ZUluRHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXREdXJhdGlvbiAmJiB7J2RhdGEtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVEaXJlY3Rpb24gJiYgeydkYXRhLWFuaW1hdGUtZGlyZWN0aW9uJzogYW5pbWF0ZURpcmVjdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZVRocmVzaG9sZCAmJiB7J2RhdGEtYW5pbWF0ZS1UaHJlc2hvbGQnOiBhbmltYXRlVGhyZXNob2xkfSksXG5cdFx0XHRcdC4uLihhbmltYXRlVGhyZXNob2xkICYmIHsnZGF0YS1hbmltYXRlLVRocmVzaG9sZCc6IGFuaW1hdGVUaHJlc2hvbGR9KSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcblxuXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0IiwiZGlzcGF0Y2giLCJzdG9yZSIsImgybWxGaWx0ZXJTdG9yZSIsInBhcnNlQW5pbWF0ZUNzc0RlZmluaXRpb25zIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsInJlZHVjZSIsInJlcyIsInN0eWxlU2hlZXQiLCJocmVmIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwiZGVidWciLCJjc3NSdWxlcyIsInJ1bGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwiQ1NTU3R5bGVSdWxlIiwic2VsZWN0b3JUZXh0IiwiYW5pbWF0ZUluIiwibGFiZWwiLCJzdHlsZSIsImFuaW1hdGlvbk5hbWUiLCJyZXBsYWNlIiwiY3VyIiwiaW5kIiwidG9VcHBlckNhc2UiLCJ2YWx1ZSIsImFuaW1hdGVPdXQiLCJBbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMiLCJoYXNHbG9iYWwiLCJnZXRHbG9iYWwiLCJzZXRHbG9iYWwiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiRXh0ZXJuYWxMaW5rIiwiTm90aWNlIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRleHQiLCJUZXh0IiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJfXyIsIkFuaW1hdGVJbkhlbHBUZXh0IiwiQW5pbWF0ZU91dEhlbHBUZXh0IiwiQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IiwiQW5pbWF0ZVRocmVzaG9sZEhlbHBUZXh0IiwiQW5pbWF0ZURpcmVjdGlvbkhlbHBUZXh0IiwiQW5pbWF0ZUN1c3RvbUNsYXNzSGVscFRleHQiLCJGaWx0ZXJJbnNwZWN0b3JDb250cm9scyIsInByb3BzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwiYW5pbWF0ZUN1c3RvbUNsYXNzZXMiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsImFuaW1hdGVEaXJlY3Rpb24iLCJhbmltYXRlVGhyZXNob2xkIiwib3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMiLCJhbmltYXRpb25DbGFzc05hbWVzIiwic2V0QXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImluaXRpYWxPcGVuIiwiY2xhc3NOYW1lIiwiYXMiLCJzcGFjaW5nIiwiaXNEaXNtaXNzaWJsZSIsInNpemUiLCJjb2xvciIsIm9uQ2hhbmdlIiwibmV3QW5pbWF0aW9uIiwiaDJtbEFuaW1hdGVPblNjcm9sbCIsIm9wdGlvbnMiLCJoZWxwIiwibWFyZ2luQm90dG9tIiwiX19uZXh0SGFzTm9NYXJnaW5Cb3R0b20iLCJqb2luIiwibmV3Q3VzdG9tQ2xhc3NlcyIsInNwbGl0IiwibWFwIiwieCIsInRyaW0iLCJmaWx0ZXIiLCJyZXNldEFsbCIsImhhc1ZhbHVlIiwib25EZXNlbGVjdCIsImlzU2hvd25CeURlZmF1bHQiLCJuZXdEdXJhdGlvbiIsIm5ld1RocmVzaG9sZCIsIm1pbiIsIm1heCIsInN0ZXAiLCJuZXdEaXJlY3Rpb24iLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVnaXN0ZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJnbG9iYWxzIiwiYWN0aW9uIiwidHlwZSIsImtleSIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJoYXNPd24iLCJ2YWx1ZXMiLCJwZXJzaXN0IiwiYWRkRmlsdGVyIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJhbmltYXRlSXNBbmltYXRlZENsYXNzIiwib3B0aW9uYWxBbmltYXRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0cyIsInNldHRpbmdzIiwiYXR0cmlidXRlcyIsImgybWxBbmltYXRpb25PblNjcm9sbCIsIm5hbWUiLCJkZWZhdWx0IiwiQmxvY2tFZGl0IiwiaDJtbEFuaW1hdGVPblNjcm9sbEF0dHJpYnV0ZXMiLCJGcmFnbWVudCIsIm9sZENsYXNzTmFtZSIsImVuY29kZSIsImh0bWwiLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJib2R5IiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9