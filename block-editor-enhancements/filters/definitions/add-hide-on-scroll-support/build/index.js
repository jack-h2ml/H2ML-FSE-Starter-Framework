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
      customClasses = [],
      triggerThreshold,
      showOnScrollUp,
      breakpoint,
      animateInDuration,
      animateOutDuration
    },
    optionalAttributesDefaults,
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: customClasses.join(', '),
    onChange: newCustomClasses => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          customClasses: newCustomClasses.split(',').map(x => x.trim()).filter(x => x !== '')
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom Classnames", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideCustomClassHelpText, null)
  }), (animateIn || animateOut || customClasses.length) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: showOnScrollUp,
    onChange: () => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          showOnScrollUp: !showOnScrollUp
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show on scroll up", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideShowOnScrollUpHelpText, null)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide on Scroll Additional Settings", 'h2ml'),
    resetAll: () => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          ...optionalAttributesDefaults
        }
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => breakpoint !== optionalAttributesDefaults.breakpoint,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Breakpoint", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          breakpoint: optionalAttributesDefaults.breakpoint
        }
      });
    },
    isShownByDefault: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: breakpoint,
    onChange: newBreakpoint => {
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          breakpoint: newBreakpoint
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Breakpoint", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideBreakpointHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateInDuration !== optionalAttributesDefaults.animateInDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlHideOnScroll: {
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
        h2mlHideOnScroll: {
          ...existingAttributes,
          animateInDuration: newDuration
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate In Duration", 'h2ml'),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_HelpText__WEBPACK_IMPORTED_MODULE_4__.HideAnimateInDurationHelpText, null)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => animateOutDuration !== optionalAttributesDefaults.animateOutDuration,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Animate Out Duration", 'h2ml'),
    onDeselect: () => {
      setAttributes({
        h2mlHideOnScroll: {
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
/* harmony export */   "HideBreakpointHelpText": function() { return /* binding */ HideBreakpointHelpText; },
/* harmony export */   "HideCustomClassHelpText": function() { return /* binding */ HideCustomClassHelpText; },
/* harmony export */   "HideShowOnScrollUpHelpText": function() { return /* binding */ HideShowOnScrollUpHelpText; },
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
const HideCustomClassHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add a comma seperated list of custom 'Classnames' to toggle, this can be used instead of, or in addition to, the predefined animations above.", 'h2ml'));
const HideTriggerThresholdHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Set this block's 'Trigger Threshold', this determines how far the user must scroll (in px's) before the block is hidden.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is '100'.", 'h2ml')));
const HideShowOnScrollUpHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("When enabled the block will be shown when scrolling back up the page from any point, rather than waiting until the user has scrolled back to the top of the page.", 'html')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("By default this is disabled.", 'h2ml')));
const HideBreakpointHelpText = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
  as: 'span',
  spacing: 1
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Determening when this block's Hide on Scroll Set will take effect by setting a 'Breapoint' ", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/time"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Media Query", 'h2ml')), "."));
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _common_AnimateDotCssDefinitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/AnimateDotCssDefinitions */ "../../common/AnimateDotCssDefinitions/index.js");
/* harmony import */ var _editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor_dependencies/local_components/FilterInspectorControls */ "./src/editor_dependencies/local_components/FilterInspectorControls/index.js");

/**
 * WordPress Dependencies
 */







/**
 * Local Dependencies
 */





/*
 * Global
 */

const elemWillHideClass = 'animate__animated';
const optionalHideOnScrollValuesDefaults = {
  breakpoint: '',
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
          customClasses: [],
          triggerThreshold: 100,
          showOnScrollUp: false,
          ...optionalHideOnScrollValuesDefaults
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_editor_dependencies_local_components_FilterInspectorControls__WEBPACK_IMPORTED_MODULE_8__.FilterInspectorControls, {
      existingAttributes: h2mlHideOnScrollAttributes,
      optionalAttributesDefaults: optionalHideOnScrollValuesDefaults,
      animationClassNames: (0,_common_AnimateDotCssDefinitions__WEBPACK_IMPORTED_MODULE_7__.AnimateDotCssDefinitions)(),
      setAttributes: setAttributes
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
}, 'addHideOnScrollInspectorControlsEdit'));

/**
 * 
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveContent.extraProps', 'h2ml/add-hide-on-scroll-styles-save', (props, type, attributes) => {
  //
  const {
    className: oldClassName
  } = props;
  const {
    h2mlHideOnScroll: {
      animateIn,
      animateOut,
      customClasses,
      triggerThreshold,
      showOnScrollUp,
      breakpoint,
      animateInDuration,
      animateOutDuration
    } = {}
  } = attributes;
  //
  if (animateIn || animateOut || customClasses?.length) {
    //
    const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
      return cur !== elemWillHideClass ? `${res} ${cur}` : `${res}`;
    }, elemWillHideClass);
    //
    const encode = html => {
      let doc = new DOMParser().parseFromString(html, 'text/html');
      return encodeURIComponent(doc.body.textContent) || "";
    };
    //
    return {
      ...props,
      className,
      'data-hide-on-scroll': '',
      ...(animateIn && {
        'data-hide-on-scroll-animate-in': animateIn
      }),
      ...(animateOut && {
        'data-hide-on-scroll-animate-out': animateOut
      }),
      ...(customClasses.length && {
        'data-hide-on-scroll-custom-classes': encode(customClasses.join(' '))
      }),
      ...(triggerThreshold && {
        'data-hide-on-scroll-threshold': triggerThreshold
      }),
      ...(showOnScrollUp && {
        'data-hide-on-scroll-show-on-scroll-up': showOnScrollUp
      }),
      ...(breakpoint && {
        'data-hide-on-scroll-breakpoint': encode(breakpoint)
      }),
      ...(animateInDuration && {
        'data-hide-on-scroll-animate-in-duration': animateInDuration
      }),
      ...(animateOutDuration && {
        'data-hide-on-scroll-animate-out-duration': animateOutDuration
      })
    };
  }
  return props;
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtNQUN6QixJQUFJakcsU0FBUyxJQUFJO1FBQUMsZ0NBQWdDLEVBQUVBO01BQVMsQ0FBQyxDQUFDO01BQy9ELElBQUlTLFVBQVUsSUFBSTtRQUFDLGlDQUFpQyxFQUFFQTtNQUFVLENBQUMsQ0FBQztNQUNsRSxJQUFJbUMsYUFBYSxDQUFDbUIsTUFBTSxJQUFJO1FBQUMsb0NBQW9DLEVBQUVvQyxNQUFNLENBQUN2RCxhQUFhLENBQUNZLElBQUksQ0FBQyxHQUFHLENBQUM7TUFBQyxDQUFDLENBQUM7TUFDcEcsSUFBSVgsZ0JBQWdCLElBQUk7UUFBQywrQkFBK0IsRUFBRUE7TUFBZ0IsQ0FBQyxDQUFDO01BQzVFLElBQUlDLGNBQWMsSUFBSTtRQUFDLHVDQUF1QyxFQUFFQTtNQUFjLENBQUMsQ0FBQztNQUNoRixJQUFJQyxVQUFVLElBQUk7UUFBQyxnQ0FBZ0MsRUFBRW9ELE1BQU0sQ0FBQ3BELFVBQVU7TUFBQyxDQUFDLENBQUM7TUFDekUsSUFBSUMsaUJBQWlCLElBQUk7UUFBQyx5Q0FBeUMsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3hGLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMENBQTBDLEVBQUVBO01BQWtCLENBQUM7SUFDM0YsQ0FBQztFQUNGO0VBQ0EsT0FBT1AsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMvbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcz80M2U4Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3M/YmI3YyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZHByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcblxuLyoqXG4gKiBQYXJzZSB0aGUgYW5pbWF0ZS5jc3Mgc3R5bGVzXG4gKi9cblxuY29uc3QgcGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMgPSAoKSA9PiBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLnJlZHVjZSgocmVzLCBzdHlsZVNoZWV0KSA9PiB7XG5cdGlmKHN0eWxlU2hlZXQuaHJlZiAmJiBzdHlsZVNoZWV0LmhyZWYuaW5jbHVkZXMoJ2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0JykpIHtcblx0XHRjb25zb2xlLmRlYnVnKCdHZW5lcmF0aW5nIEFuaW1hdGUuY3NzIERlZmluaXRpb25zJylcblx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0Li4uKChcblx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX18nKVxuXHRcdFx0XHQmJiAhcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX19hbmltYXRlZCcpXG5cdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dCAhPT0gJy5hbmltYXRlX19qYWNrSW5UaGVCb3gnXG5cdFx0XHQpICYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSBcblx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVJbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0gOiB7YW5pbWF0ZU91dDogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSlcblx0XHRcdClcblx0XHR9KSwge1xuXHRcdFx0YW5pbWF0ZUluOiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dLFxuXHRcdFx0YW5pbWF0ZU91dDogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZXM7XG5cdH1cbn0sIFtdKTtcblxuLyoqXG4gKiBTdG9yZSB0aGUgXG4gKi9cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyA9ICgpID0+IHtcblx0Y29uc3Qge2hhc0dsb2JhbCwgZ2V0R2xvYmFsfSA9IHVzZVNlbGVjdChoMm1sRmlsdGVyU3RvcmUpO1xuXHRjb25zdCB7c2V0R2xvYmFsfSA9IGRpc3BhdGNoKGgybWxGaWx0ZXJTdG9yZSk7XG5cdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkge1xuXHRcdGNvbnNvbGUuZGVidWcoJ1NldHRpbmcgQW5pbWF0ZS5jc3MgRGVmaW5pdGlvbnMnKTtcblx0XHRzZXRHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnLCBwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0fTtcblx0cmV0dXJuIGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xufSIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEhpZGVBbmltYXRlSW5IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCxcblx0SGlkZUN1c3RvbUNsYXNzSGVscFRleHQsXG5cdEhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQsXG5cdEhpZGVTaG93T25TY3JvbGxVcEhlbHBUZXh0LFxuXHRIaWRlQnJlYWtwb2ludEhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0XG59IGZyb20gJy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0Y3VzdG9tQ2xhc3NlcyA9IFtdLFxuXHRcdFx0dHJpZ2dlclRocmVzaG9sZCxcblx0XHRcdHNob3dPblNjcm9sbFVwLFxuXHRcdFx0YnJlYWtwb2ludCxcblx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0fSxcblx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkhpZGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxIaWRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZUluSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2N1c3RvbUNsYXNzZXMuam9pbignLCAnKX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdDdXN0b21DbGFzc2VzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tQ2xhc3NlczogbmV3Q3VzdG9tQ2xhc3Nlcy5zcGxpdCgnLCcpLm1hcCh4ID0+IHgudHJpbSgpKS5maWx0ZXIoeCA9PiB4ICE9PSAnJylcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQ3VzdG9tIENsYXNzbmFtZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVDdXN0b21DbGFzc0hlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQgfHwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGgpICYmIChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdUaHJlc2hvbGQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlclRocmVzaG9sZDogbmV3VGhyZXNob2xkID8gbmV3VGhyZXNob2xkIDogMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dHJpZ2dlclRocmVzaG9sZH1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezI1fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiVHJpZ2dlciBUaHJlc2hvbGRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dPblNjcm9sbFVwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd09uU2Nyb2xsVXA6ICFzaG93T25TY3JvbGxVcFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTaG93IG9uIHNjcm9sbCB1cFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVTaG93T25TY3JvbGxVcEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkhpZGUgb24gU2Nyb2xsIEFkZGl0aW9uYWwgU2V0dGluZ3NcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBicmVha3BvaW50ICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5icmVha3BvaW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJCcmVha3BvaW50XCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha3BvaW50OiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5icmVha3BvaW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YnJlYWtwb2ludH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0JyZWFrcG9pbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IG5ld0JyZWFrcG9pbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJCcmVha3BvaW50XCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVCcmVha3BvaW50SGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlSW5EdXJhdGlvbiAhPT0gb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlSW5EdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlT3V0RHVyYXRpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0KTtcbn0iLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmV5b25kIHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZUluSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIEluJyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmVsb3cgdGhlIHNwZWNpZmllZCB0cmlnZ2VyIHRocmVzaG9sZC5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVDdXN0b21DbGFzc0hlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIkFkZCBhIGNvbW1hIHNlcGVyYXRlZCBsaXN0IG9mIGN1c3RvbSAnQ2xhc3NuYW1lcycgdG8gdG9nZ2xlLCB0aGlzIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YsIG9yIGluIGFkZGl0aW9uIHRvLCB0aGUgcHJlZGVmaW5lZCBhbmltYXRpb25zIGFib3ZlLlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdUcmlnZ2VyIFRocmVzaG9sZCcsIHRoaXMgZGV0ZXJtaW5lcyBob3cgZmFyIHRoZSB1c2VyIG11c3Qgc2Nyb2xsIChpbiBweCdzKSBiZWZvcmUgdGhlIGJsb2NrIGlzIGhpZGRlbi5cIiwgJ2h0bWwnKX1cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzEwMCcuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlU2hvd09uU2Nyb2xsVXBIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJXaGVuIGVuYWJsZWQgdGhlIGJsb2NrIHdpbGwgYmUgc2hvd24gd2hlbiBzY3JvbGxpbmcgYmFjayB1cCB0aGUgcGFnZSBmcm9tIGFueSBwb2ludCwgcmF0aGVyIHRoYW4gd2FpdGluZyB1bnRpbCB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgYmFjayB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyBkaXNhYmxlZC5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVCcmVha3BvaW50SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiRGV0ZXJtZW5pbmcgd2hlbiB0aGlzIGJsb2NrJ3MgSGlkZSBvbiBTY3JvbGwgU2V0IHdpbGwgdGFrZSBlZmZlY3QgYnkgc2V0dGluZyBhICdCcmVhcG9pbnQnIFwiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcIk1lZGlhIFF1ZXJ5XCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHV4U3RvcmUsIHJlZ2lzdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlUmVkdXhTdG9yZSgnaDJtbEZpbHRlclN0b3JlJywge1xuXHRyZWR1Y2VyKHN0YXRlID0ge1xuXHRcdGdsb2JhbHM6IHt9XG5cdH0sIGFjdGlvbikge1xuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgJ0gyTUxfU0VUX0dMT0JBTCc6IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRbYWN0aW9uLmtleV06IHtcblx0XHRcdFx0XHRcdC4uLihzdGF0ZVthY3Rpb24ua2V5XSAmJiBzdGF0ZS52YWx1ZSksXG5cdFx0XHRcdFx0XHQuLi5hY3Rpb24udmFsdWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHRzZXRHbG9iYWwoa2V5LCB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogJ0gyTUxfU0VUX0dMT0JBTCcsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNlbGVjdG9yczoge1xuXHRcdGhhc0dsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0Lmhhc093bihzdGF0ZSwga2V5KTtcblx0XHR9LFxuXHRcdGdldEdsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRjb25zdCB7IFxuXHRcdFx0XHRba2V5XSA6IHZhbHVlc1xuXHRcdFx0fSA9IHN0YXRlO1xuXHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHR9LFxuXHR9LFxuXHRwZXJzaXN0OiBbICdwcmVmZXJlbmNlcycgXSxcbn0pO1xuXG5yZWdpc3RlcihzdG9yZSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmVcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHR1c2VTZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIExvY2FsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuaW1wb3J0IHtcblx0QW5pbWF0ZURvdENzc0RlZmluaXRpb25zXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMnO1xuXG5pbXBvcnQgeyBcblx0RmlsdGVySW5zcGVjdG9yQ29udHJvbHMgXG59IGZyb20gJy4vZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzJztcblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGVsZW1XaWxsSGlkZUNsYXNzID0gJ2FuaW1hdGVfX2FuaW1hdGVkJztcblxuY29uc3Qgb3B0aW9uYWxIaWRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0cyA9IHtcblx0YnJlYWtwb2ludDogJycsXG5cdGFuaW1hdGVJbkR1cmF0aW9uOiAnNTAwbXMnLFxuXHRhbmltYXRlT3V0RHVyYXRpb246ICc1MDBtcycsXG59XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtaGlkZS1vbi1zY3JvbGwtYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdFx0YW5pbWF0ZUluOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6ICcnLFxuXHRcdFx0XHRcdFx0Y3VzdG9tQ2xhc3NlczogW10sXG5cdFx0XHRcdFx0XHR0cmlnZ2VyVGhyZXNob2xkOiAxMDAsXG5cdFx0XHRcdFx0XHRzaG93T25TY3JvbGxVcDogZmFsc2UsXG5cdFx0XHRcdFx0XHQuLi5vcHRpb25hbEhpZGVPblNjcm9sbFZhbHVlc0RlZmF1bHRzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4pO1xuXG4vKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1oaWRlLW9uLXNjcm9sbC1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiBoMm1sSGlkZU9uU2Nyb2xsQXR0cmlidXRlcyxcblx0XHRcdH0sXG5cdFx0XHRjbGllbnRJZCxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0Ly9cblx0XHRjb25zdCB7Z2V0QmxvY2tQYXJlbnRzLCBnZXRCbG9ja0F0dHJpYnV0ZXN9ID0gdXNlU2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IGhhc0ZpeGVkUG9zaXRpb25QYXJlbnQgPSBnZXRCbG9ja1BhcmVudHMoY2xpZW50SWQpLmZpbmQocGFyZW50Q2xpZW50SWQgPT4gISFnZXRCbG9ja0F0dHJpYnV0ZXMocGFyZW50Q2xpZW50SWQpLmgybWxQb3NpdGlvbmluZz8udHlwZSk7XG5cdFx0Ly9cblx0XHRpZihoYXNGaXhlZFBvc2l0aW9uUGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gKDw+XG5cdFx0XHRcdDxGaWx0ZXJJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0XHRcdGV4aXN0aW5nQXR0cmlidXRlcz17aDJtbEhpZGVPblNjcm9sbEF0dHJpYnV0ZXN9XG5cdFx0XHRcdFx0b3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHM9e29wdGlvbmFsSGlkZU9uU2Nyb2xsVmFsdWVzRGVmYXVsdHN9XHRcblx0XHRcdFx0XHRhbmltYXRpb25DbGFzc05hbWVzPXtBbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMoKX1cblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzPXtzZXRBdHRyaWJ1dGVzfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QmxvY2tFZGl0IHsuLi5wcm9wc30vPlxuXHRcdFx0PC8+KTtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0VkaXQgey4uLnByb3BzfSAvPjtcblx0fSwgJ2FkZEhpZGVPblNjcm9sbEluc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGN1c3RvbUNsYXNzZXMsXG5cdFx0XHRcdHRyaWdnZXJUaHJlc2hvbGQsXG5cdFx0XHRcdHNob3dPblNjcm9sbFVwLFxuXHRcdFx0XHRicmVha3BvaW50LFxuXHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbixcblx0XHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCB8fCBjdXN0b21DbGFzc2VzPy5sZW5ndGgpIHtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSAob2xkQ2xhc3NOYW1lID8gb2xkQ2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXSkucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGN1ciAhPT0gZWxlbVdpbGxIaWRlQ2xhc3MpID8gYCR7cmVzfSAke2N1cn1gIDogYCR7cmVzfWBcblx0XHRcdH0sIChlbGVtV2lsbEhpZGVDbGFzcykpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGVuY29kZSA9IChodG1sKSA9PiB7XG5cdFx0XHRcdGxldCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcblx0XHRcdFx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChkb2MuYm9keS50ZXh0Q29udGVudCkgfHwgXCJcIjtcblx0XHRcdH1cblx0XHRcdC8vXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHQnZGF0YS1oaWRlLW9uLXNjcm9sbCc6ICcnLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1hbmltYXRlLWluJzogYW5pbWF0ZUlufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0ICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1hbmltYXRlLW91dCc6IGFuaW1hdGVPdXR9KSxcblx0XHRcdFx0Li4uKGN1c3RvbUNsYXNzZXMubGVuZ3RoICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1jdXN0b20tY2xhc3Nlcyc6IGVuY29kZShjdXN0b21DbGFzc2VzLmpvaW4oJyAnKSl9KSxcblx0XHRcdFx0Li4uKHRyaWdnZXJUaHJlc2hvbGQgJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLXRocmVzaG9sZCc6IHRyaWdnZXJUaHJlc2hvbGR9KSxcblx0XHRcdFx0Li4uKHNob3dPblNjcm9sbFVwICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1zaG93LW9uLXNjcm9sbC11cCc6IHNob3dPblNjcm9sbFVwfSksXG5cdFx0XHRcdC4uLihicmVha3BvaW50ICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1icmVha3BvaW50JzogZW5jb2RlKGJyZWFrcG9pbnQpfSksXG5cdFx0XHRcdC4uLihhbmltYXRlSW5EdXJhdGlvbiAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtYW5pbWF0ZS1pbi1kdXJhdGlvbic6IGFuaW1hdGVJbkR1cmF0aW9ufSksXG5cdFx0XHRcdC4uLihhbmltYXRlT3V0RHVyYXRpb24gJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWFuaW1hdGUtb3V0LWR1cmF0aW9uJzogYW5pbWF0ZU91dER1cmF0aW9ufSlcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wcztcblx0fVxuKTtcblxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdCIsImRpc3BhdGNoIiwic3RvcmUiLCJoMm1sRmlsdGVyU3RvcmUiLCJwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucyIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJyZWR1Y2UiLCJyZXMiLCJzdHlsZVNoZWV0IiwiaHJlZiIsImluY2x1ZGVzIiwiY29uc29sZSIsImRlYnVnIiwiY3NzUnVsZXMiLCJydWxlIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsIkNTU1N0eWxlUnVsZSIsInNlbGVjdG9yVGV4dCIsImFuaW1hdGVJbiIsImxhYmVsIiwic3R5bGUiLCJhbmltYXRpb25OYW1lIiwicmVwbGFjZSIsImN1ciIsImluZCIsInRvVXBwZXJDYXNlIiwidmFsdWUiLCJhbmltYXRlT3V0IiwiQW5pbWF0ZURvdENzc0RlZmluaXRpb25zIiwiaGFzR2xvYmFsIiwiZ2V0R2xvYmFsIiwic2V0R2xvYmFsIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIk5vdGljZSIsIlRvZ2dsZUNvbnRyb2wiLCJfX2V4cGVyaW1lbnRhbFZTdGFjayIsIlZTdGFjayIsIl9fZXhwZXJpbWVudGFsVGV4dCIsIlRleHQiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIl9fIiwiSGlkZUFuaW1hdGVJbkhlbHBUZXh0IiwiSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCIsIkhpZGVDdXN0b21DbGFzc0hlbHBUZXh0IiwiSGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCIsIkhpZGVTaG93T25TY3JvbGxVcEhlbHBUZXh0IiwiSGlkZUJyZWFrcG9pbnRIZWxwVGV4dCIsIkhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IiwiSGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IiwiRmlsdGVySW5zcGVjdG9yQ29udHJvbHMiLCJwcm9wcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImN1c3RvbUNsYXNzZXMiLCJ0cmlnZ2VyVGhyZXNob2xkIiwic2hvd09uU2Nyb2xsVXAiLCJicmVha3BvaW50IiwiYW5pbWF0ZUluRHVyYXRpb24iLCJhbmltYXRlT3V0RHVyYXRpb24iLCJvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cyIsImFuaW1hdGlvbkNsYXNzTmFtZXMiLCJzZXRBdHRyaWJ1dGVzIiwibmV3QW5pbWF0aW9uIiwiaDJtbEhpZGVPblNjcm9sbCIsIm1hcmdpbkJvdHRvbSIsImpvaW4iLCJuZXdDdXN0b21DbGFzc2VzIiwic3BsaXQiLCJtYXAiLCJ4IiwidHJpbSIsImZpbHRlciIsImxlbmd0aCIsIm5ld1RocmVzaG9sZCIsIm5ld0JyZWFrcG9pbnQiLCJuZXdEdXJhdGlvbiIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInJlZHVjZXIiLCJzdGF0ZSIsImdsb2JhbHMiLCJhY3Rpb24iLCJ0eXBlIiwia2V5IiwiYWN0aW9ucyIsInNlbGVjdG9ycyIsImhhc093biIsInZhbHVlcyIsInBlcnNpc3QiLCJhZGRGaWx0ZXIiLCJibG9ja0VkaXRvclN0b3JlIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJlbGVtV2lsbEhpZGVDbGFzcyIsIm9wdGlvbmFsSGlkZU9uU2Nyb2xsVmFsdWVzRGVmYXVsdHMiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJkZWZhdWx0IiwiQmxvY2tFZGl0IiwiaDJtbEhpZGVPblNjcm9sbEF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsImdldEJsb2NrUGFyZW50cyIsImdldEJsb2NrQXR0cmlidXRlcyIsImhhc0ZpeGVkUG9zaXRpb25QYXJlbnQiLCJmaW5kIiwicGFyZW50Q2xpZW50SWQiLCJoMm1sUG9zaXRpb25pbmciLCJjbGFzc05hbWUiLCJvbGRDbGFzc05hbWUiLCJlbmNvZGUiLCJodG1sIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsInRleHRDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==