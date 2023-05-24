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
  if (settings?.attributes) {
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
  }
  return settings;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFQTtNQUFTLENBQUMsQ0FBQztNQUMvRCxJQUFJUyxVQUFVLElBQUk7UUFBQyxpQ0FBaUMsRUFBRUE7TUFBVSxDQUFDLENBQUM7TUFDbEUsSUFBSW1DLGFBQWEsQ0FBQ2dDLE1BQU0sSUFBSTtRQUFDLG9DQUFvQyxFQUFFNkMsTUFBTSxDQUFDN0UsYUFBYSxDQUFDeUIsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUFDLENBQUMsQ0FBQztNQUNwRyxJQUFJeEIsZ0JBQWdCLElBQUk7UUFBQywrQkFBK0IsRUFBRUE7TUFBZ0IsQ0FBQyxDQUFDO01BQzVFLElBQUlDLGNBQWMsSUFBSTtRQUFDLHVDQUF1QyxFQUFFQTtNQUFjLENBQUMsQ0FBQztNQUNoRixJQUFJQyxVQUFVLElBQUk7UUFBQyxnQ0FBZ0MsRUFBRTBFLE1BQU0sQ0FBQzFFLFVBQVU7TUFBQyxDQUFDLENBQUM7TUFDekUsSUFBSUMsaUJBQWlCLElBQUk7UUFBQyx5Q0FBeUMsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3hGLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMENBQTBDLEVBQUVBO01BQWtCLENBQUM7SUFDM0YsQ0FBQztFQUNGO0VBQ0EsT0FBT1AsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMvbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcz80M2U4Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LnNjc3M/YmI3YyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV29yZHByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuLyoqXG4gKiBJbnRlcm5hbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBoMm1sRmlsdGVyU3RvcmVcbn0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnYW5pbWF0ZS5jc3MvYW5pbWF0ZS5taW4uY3NzJztcblxuLyoqXG4gKiBQYXJzZSB0aGUgYW5pbWF0ZS5jc3Mgc3R5bGVzXG4gKi9cblxuY29uc3QgcGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMgPSAoKSA9PiBbLi4uZG9jdW1lbnQuc3R5bGVTaGVldHNdLnJlZHVjZSgocmVzLCBzdHlsZVNoZWV0KSA9PiB7XG5cdGlmKHN0eWxlU2hlZXQuaHJlZiAmJiBzdHlsZVNoZWV0LmhyZWYuaW5jbHVkZXMoJ2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0JykpIHtcblx0XHRjb25zb2xlLmRlYnVnKCdHZW5lcmF0aW5nIEFuaW1hdGUuY3NzIERlZmluaXRpb25zJylcblx0XHRyZXR1cm4gWy4uLnN0eWxlU2hlZXQuY3NzUnVsZXNdLnJlZHVjZSgocmVzLCBydWxlKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0Li4uKChcblx0XHRcdFx0T2JqZWN0LmdldFByb3RvdHlwZU9mKHJ1bGUpLmNvbnN0cnVjdG9yID09PSBDU1NTdHlsZVJ1bGVcblx0XHRcdFx0JiYgcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX18nKVxuXHRcdFx0XHQmJiAhcnVsZS5zZWxlY3RvclRleHQuaW5jbHVkZXMoJy5hbmltYXRlX19hbmltYXRlZCcpXG5cdFx0XHRcdCYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSB8fCBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnT3V0JykpIFxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dCAhPT0gJy5hbmltYXRlX19qYWNrSW5UaGVCb3gnXG5cdFx0XHQpICYmIChydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnSW4nKSBcblx0XHRcdFx0PyB7YW5pbWF0ZUluOiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVJbixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsYWJlbDogWy4uLnJ1bGUuc3R5bGUuYW5pbWF0aW9uTmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXS5yZWR1Y2UoKHJlcywgY3VyLCBpbmQpID0+IChcblx0XHRcdFx0XHRcdFx0YCR7cmVzfSR7IWluZCA/IGN1ci50b1VwcGVyQ2FzZSgpIDogY3VyfWBcblx0XHRcdFx0XHRcdCksICcnKSxcblx0XHRcdFx0XHRcdHZhbHVlOiBydWxlLnNlbGVjdG9yVGV4dC5yZXBsYWNlKC9bLixcXHNdL2csICcnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XX0gOiB7YW5pbWF0ZU91dDogW1xuXHRcdFx0XHRcdC4uLnJlcy5hbmltYXRlT3V0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSlcblx0XHRcdClcblx0XHR9KSwge1xuXHRcdFx0YW5pbWF0ZUluOiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dLFxuXHRcdFx0YW5pbWF0ZU91dDogW3tcblx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiByZXM7XG5cdH1cbn0sIFtdKTtcblxuLyoqXG4gKiBTdG9yZSB0aGUgXG4gKi9cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyA9ICgpID0+IHtcblx0Y29uc3Qge2hhc0dsb2JhbCwgZ2V0R2xvYmFsfSA9IHVzZVNlbGVjdChoMm1sRmlsdGVyU3RvcmUpO1xuXHRjb25zdCB7c2V0R2xvYmFsfSA9IGRpc3BhdGNoKGgybWxGaWx0ZXJTdG9yZSk7XG5cdGlmKCFoYXNHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnKSkge1xuXHRcdGNvbnNvbGUuZGVidWcoJ1NldHRpbmcgQW5pbWF0ZS5jc3MgRGVmaW5pdGlvbnMnKTtcblx0XHRzZXRHbG9iYWwoJ1BhcnNlZEFuaW1hdGVEb3RDU1MnLCBwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucygpKTtcblx0fTtcblx0cmV0dXJuIGdldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpO1xufSIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0RXh0ZXJuYWxMaW5rLFxuXHROb3RpY2UsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUZXh0IGFzIFRleHQsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCBhcyBUb29sc1BhbmVsLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEhpZGVBbmltYXRlSW5IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCxcblx0SGlkZUN1c3RvbUNsYXNzSGVscFRleHQsXG5cdEhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQsXG5cdEhpZGVTaG93T25TY3JvbGxVcEhlbHBUZXh0LFxuXHRIaWRlQnJlYWtwb2ludEhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCxcblx0SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0XG59IGZyb20gJy4uL0hlbHBUZXh0JztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEZpbHRlckluc3BlY3RvckNvbnRyb2xzID0gKHByb3BzKSA9PiB7XG5cdC8vXG5cdGNvbnN0IHtcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzOiB7XG5cdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0Y3VzdG9tQ2xhc3NlcyA9IFtdLFxuXHRcdFx0dHJpZ2dlclRocmVzaG9sZCxcblx0XHRcdHNob3dPblNjcm9sbFVwLFxuXHRcdFx0YnJlYWtwb2ludCxcblx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0YW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0fSxcblx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cyxcblx0XHRhbmltYXRpb25DbGFzc05hbWVzLFxuXHRcdHNldEF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXHQvL1xuXHRyZXR1cm4gKFxuXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxQYW5lbD5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkhpZGUgb24gU2Nyb2xsXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49e2ZhbHNlfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17J2gybWxIaWRlT25TY3JvbGxQYW5lbCd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VlN0YWNrXG5cdFx0XHRcdFx0XHRhcz17J2Rpdid9XG5cdFx0XHRcdFx0XHRzcGFjaW5nPXs0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOb3RpY2Vcblx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17ZmFsc2V9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17JzEycHgnfVxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPXsncmdiKDExNywgMTE3LCAxMTcpJ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyhcIldoZW4gYWRkaW5nIGFuaW1hdGlvbnMgd2hpY2ggdHJhbnNpdGlvbiBvZmYtc2NyZWVuIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCBib2R5IGhhcyB0aGVcIiwgJ2gybWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL292ZXJmbG93LXlcIj5vdmVyZmxvdy14PC9FeHRlcm5hbExpbms+IHtfXyhcInByb3BlcnR5IHNldCB0byBlaXRoZXIgJ2hpZGRlbicgb3IgJ2NsaXAnLlwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHQ8L05vdGljZT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogbmV3QW5pbWF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlT3V0fVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgT3V0JyBzdHlsZVwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3QW5pbWF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17YW5pbWF0aW9uQ2xhc3NOYW1lcy5hbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlNldCB0aGUgJ0FuaW1hdGUgSW4nIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZUluSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMCB9fVxuXHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2N1c3RvbUNsYXNzZXMuam9pbignLCAnKX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdDdXN0b21DbGFzc2VzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tQ2xhc3NlczogbmV3Q3VzdG9tQ2xhc3Nlcy5zcGxpdCgnLCcpLm1hcCh4ID0+IHgudHJpbSgpKS5maWx0ZXIoeCA9PiB4ICE9PSAnJylcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQ3VzdG9tIENsYXNzbmFtZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVDdXN0b21DbGFzc0hlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHsoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQgfHwgY3VzdG9tQ2xhc3Nlcy5sZW5ndGgpICYmIChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdUaHJlc2hvbGQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlclRocmVzaG9sZDogbmV3VGhyZXNob2xkID8gbmV3VGhyZXNob2xkIDogMTAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dHJpZ2dlclRocmVzaG9sZH1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezI1fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiVHJpZ2dlciBUaHJlc2hvbGRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dPblNjcm9sbFVwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd09uU2Nyb2xsVXA6ICFzaG93T25TY3JvbGxVcFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTaG93IG9uIHNjcm9sbCB1cFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVTaG93T25TY3JvbGxVcEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkhpZGUgb24gU2Nyb2xsIEFkZGl0aW9uYWwgU2V0dGluZ3NcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBicmVha3BvaW50ICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5icmVha3BvaW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJCcmVha3BvaW50XCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha3BvaW50OiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5icmVha3BvaW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YnJlYWtwb2ludH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0JyZWFrcG9pbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrcG9pbnQ6IG5ld0JyZWFrcG9pbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJCcmVha3BvaW50XCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVCcmVha3BvaW50SGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlSW5EdXJhdGlvbiAhPT0gb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZUluRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlSW5EdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uOiBuZXdEdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgSW4gRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBhbmltYXRlT3V0RHVyYXRpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZU91dER1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dER1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3RHVyYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIE91dCBEdXJhdGlvblwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvVlN0YWNrPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvUGFuZWw+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0KTtcbn0iLCIvKipcbiAqIFdvcmRQcmVzcyBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVPdXRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJUaGUgJ0FuaW1hdGUgT3V0JyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmV5b25kIHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZUluSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIEluJyBhbmltYXRpb24gcGxheXMgd2hlbiBzY3JvbGxpbmcgYmVsb3cgdGhlIHNwZWNpZmllZCB0cmlnZ2VyIHRocmVzaG9sZC5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVDdXN0b21DbGFzc0hlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIkFkZCBhIGNvbW1hIHNlcGVyYXRlZCBsaXN0IG9mIGN1c3RvbSAnQ2xhc3NuYW1lcycgdG8gdG9nZ2xlLCB0aGlzIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YsIG9yIGluIGFkZGl0aW9uIHRvLCB0aGUgcHJlZGVmaW5lZCBhbmltYXRpb25zIGFib3ZlLlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdUcmlnZ2VyIFRocmVzaG9sZCcsIHRoaXMgZGV0ZXJtaW5lcyBob3cgZmFyIHRoZSB1c2VyIG11c3Qgc2Nyb2xsIChpbiBweCdzKSBiZWZvcmUgdGhlIGJsb2NrIGlzIGhpZGRlbi5cIiwgJ2h0bWwnKX1cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzEwMCcuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlU2hvd09uU2Nyb2xsVXBIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJXaGVuIGVuYWJsZWQgdGhlIGJsb2NrIHdpbGwgYmUgc2hvd24gd2hlbiBzY3JvbGxpbmcgYmFjayB1cCB0aGUgcGFnZSBmcm9tIGFueSBwb2ludCwgcmF0aGVyIHRoYW4gd2FpdGluZyB1bnRpbCB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgYmFjayB0byB0aGUgdG9wIG9mIHRoZSBwYWdlLlwiLCAnaHRtbCcpfVxuXHRcdDwvc3Bhbj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkJ5IGRlZmF1bHQgdGhpcyBpcyBkaXNhYmxlZC5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVCcmVha3BvaW50SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiRGV0ZXJtZW5pbmcgd2hlbiB0aGlzIGJsb2NrJ3MgSGlkZSBvbiBTY3JvbGwgU2V0IHdpbGwgdGFrZSBlZmZlY3QgYnkgc2V0dGluZyBhICdCcmVhcG9pbnQnIFwiLCAnaHRtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvdGltZVwiPntfXyhcIk1lZGlhIFF1ZXJ5XCIsICdoMm1sJyl9PC9FeHRlcm5hbExpbms+LlxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBJbidcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8VlN0YWNrXG5cdFx0YXM9eydzcGFuJ31cblx0XHRzcGFjaW5nPXsxfVxuXHQ+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJTZXQgdGhpcyBibG9jaydzICdBbmltYXRlIE91dCdcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJkdXJhdGlvblwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgJzUwMG1zJy5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHV4U3RvcmUsIHJlZ2lzdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlUmVkdXhTdG9yZSgnaDJtbEZpbHRlclN0b3JlJywge1xuXHRyZWR1Y2VyKHN0YXRlID0ge1xuXHRcdGdsb2JhbHM6IHt9XG5cdH0sIGFjdGlvbikge1xuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgJ0gyTUxfU0VUX0dMT0JBTCc6IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRbYWN0aW9uLmtleV06IHtcblx0XHRcdFx0XHRcdC4uLihzdGF0ZVthY3Rpb24ua2V5XSAmJiBzdGF0ZS52YWx1ZSksXG5cdFx0XHRcdFx0XHQuLi5hY3Rpb24udmFsdWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHRzZXRHbG9iYWwoa2V5LCB2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogJ0gyTUxfU0VUX0dMT0JBTCcsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0dmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNlbGVjdG9yczoge1xuXHRcdGhhc0dsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0Lmhhc093bihzdGF0ZSwga2V5KTtcblx0XHR9LFxuXHRcdGdldEdsb2JhbChzdGF0ZSwga2V5KSB7XG5cdFx0XHRjb25zdCB7IFxuXHRcdFx0XHRba2V5XSA6IHZhbHVlc1xuXHRcdFx0fSA9IHN0YXRlO1xuXHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHR9LFxuXHR9LFxuXHRwZXJzaXN0OiBbICdwcmVmZXJlbmNlcycgXSxcbn0pO1xuXG5yZWdpc3RlcihzdG9yZSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmVcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHR1c2VTZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIExvY2FsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuaW1wb3J0IHtcblx0QW5pbWF0ZURvdENzc0RlZmluaXRpb25zXG59IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMnO1xuXG5pbXBvcnQgeyBcblx0RmlsdGVySW5zcGVjdG9yQ29udHJvbHMgXG59IGZyb20gJy4vZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0ZpbHRlckluc3BlY3RvckNvbnRyb2xzJztcblxuLypcbiAqIEdsb2JhbFxuICovXG5cbmNvbnN0IGVsZW1XaWxsSGlkZUNsYXNzID0gJ2FuaW1hdGVfX2FuaW1hdGVkJztcblxuY29uc3Qgb3B0aW9uYWxIaWRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0cyA9IHtcblx0YnJlYWtwb2ludDogJycsXG5cdGFuaW1hdGVJbkR1cmF0aW9uOiAnNTAwbXMnLFxuXHRhbmltYXRlT3V0RHVyYXRpb246ICc1MDBtcycsXG59XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtaGlkZS1vbi1zY3JvbGwtYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0aWYoc2V0dGluZ3M/LmF0dHJpYnV0ZXMpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiAnJyxcblx0XHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogJycsXG5cdFx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzZXM6IFtdLFxuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyVGhyZXNob2xkOiAxMDAsXG5cdFx0XHRcdFx0XHRcdHNob3dPblNjcm9sbFVwOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0Li4ub3B0aW9uYWxIaWRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2V0dGluZ3M7XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IGgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzLFxuXHRcdFx0fSxcblx0XHRcdGNsaWVudElkLFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHQvL1xuXHRcdGNvbnN0IHtnZXRCbG9ja1BhcmVudHMsIGdldEJsb2NrQXR0cmlidXRlc30gPSB1c2VTZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgaGFzRml4ZWRQb3NpdGlvblBhcmVudCA9IGdldEJsb2NrUGFyZW50cyhjbGllbnRJZCkuZmluZChwYXJlbnRDbGllbnRJZCA9PiAhIWdldEJsb2NrQXR0cmlidXRlcyhwYXJlbnRDbGllbnRJZCkuaDJtbFBvc2l0aW9uaW5nPy50eXBlKTtcblx0XHQvL1xuXHRcdGlmKGhhc0ZpeGVkUG9zaXRpb25QYXJlbnQpIHtcblx0XHRcdHJldHVybiAoPD5cblx0XHRcdFx0PEZpbHRlckluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdFx0ZXhpc3RpbmdBdHRyaWJ1dGVzPXtoMm1sSGlkZU9uU2Nyb2xsQXR0cmlidXRlc31cblx0XHRcdFx0XHRvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cz17b3B0aW9uYWxIaWRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c31cdFxuXHRcdFx0XHRcdGFuaW1hdGlvbkNsYXNzTmFtZXM9e0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucygpfVxuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCbG9ja0VkaXQgey4uLnByb3BzfS8+XG5cdFx0XHQ8Lz4pO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkSGlkZU9uU2Nyb2xsSW5zcGVjdG9yQ29udHJvbHNFZGl0Jylcbik7XG5cbi8qKlxuICogXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtaGlkZS1vbi1zY3JvbGwtc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHQvL1xuXHRcdGNvbnN0IHtjbGFzc05hbWU6IG9sZENsYXNzTmFtZX0gPSBwcm9wcztcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0Y3VzdG9tQ2xhc3Nlcyxcblx0XHRcdFx0dHJpZ2dlclRocmVzaG9sZCxcblx0XHRcdFx0c2hvd09uU2Nyb2xsVXAsXG5cdFx0XHRcdGJyZWFrcG9pbnQsXG5cdFx0XHRcdGFuaW1hdGVJbkR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHRcdH0gPSB7fVxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdC8vXG5cdFx0aWYgKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0IHx8IGN1c3RvbUNsYXNzZXM/Lmxlbmd0aCkge1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IChvbGRDbGFzc05hbWUgPyBvbGRDbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoY3VyICE9PSBlbGVtV2lsbEhpZGVDbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGVsZW1XaWxsSGlkZUNsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgZW5jb2RlID0gKGh0bWwpID0+IHtcblx0XHRcdFx0bGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xuXHRcdFx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGRvYy5ib2R5LnRleHRDb250ZW50KSB8fCBcIlwiO1xuXHRcdFx0fVxuXHRcdFx0Ly9cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRcdCdkYXRhLWhpZGUtb24tc2Nyb2xsJzogJycsXG5cdFx0XHRcdC4uLihhbmltYXRlSW4gJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWFuaW1hdGUtaW4nOiBhbmltYXRlSW59KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXQgJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWFuaW1hdGUtb3V0JzogYW5pbWF0ZU91dH0pLFxuXHRcdFx0XHQuLi4oY3VzdG9tQ2xhc3Nlcy5sZW5ndGggJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWN1c3RvbS1jbGFzc2VzJzogZW5jb2RlKGN1c3RvbUNsYXNzZXMuam9pbignICcpKX0pLFxuXHRcdFx0XHQuLi4odHJpZ2dlclRocmVzaG9sZCAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtdGhyZXNob2xkJzogdHJpZ2dlclRocmVzaG9sZH0pLFxuXHRcdFx0XHQuLi4oc2hvd09uU2Nyb2xsVXAgJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLXNob3ctb24tc2Nyb2xsLXVwJzogc2hvd09uU2Nyb2xsVXB9KSxcblx0XHRcdFx0Li4uKGJyZWFrcG9pbnQgJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWJyZWFrcG9pbnQnOiBlbmNvZGUoYnJlYWtwb2ludCl9KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbkR1cmF0aW9uICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1hbmltYXRlLWluLWR1cmF0aW9uJzogYW5pbWF0ZUluRHVyYXRpb259KSxcblx0XHRcdFx0Li4uKGFuaW1hdGVPdXREdXJhdGlvbiAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtYW5pbWF0ZS1vdXQtZHVyYXRpb24nOiBhbmltYXRlT3V0RHVyYXRpb259KVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb3BzO1xuXHR9XG4pO1xuXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0IiwiZGlzcGF0Y2giLCJzdG9yZSIsImgybWxGaWx0ZXJTdG9yZSIsInBhcnNlQW5pbWF0ZUNzc0RlZmluaXRpb25zIiwiZG9jdW1lbnQiLCJzdHlsZVNoZWV0cyIsInJlZHVjZSIsInJlcyIsInN0eWxlU2hlZXQiLCJocmVmIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwiZGVidWciLCJjc3NSdWxlcyIsInJ1bGUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwiQ1NTU3R5bGVSdWxlIiwic2VsZWN0b3JUZXh0IiwiYW5pbWF0ZUluIiwibGFiZWwiLCJzdHlsZSIsImFuaW1hdGlvbk5hbWUiLCJyZXBsYWNlIiwiY3VyIiwiaW5kIiwidG9VcHBlckNhc2UiLCJ2YWx1ZSIsImFuaW1hdGVPdXQiLCJBbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMiLCJoYXNHbG9iYWwiLCJnZXRHbG9iYWwiLCJzZXRHbG9iYWwiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiRXh0ZXJuYWxMaW5rIiwiTm90aWNlIiwiVG9nZ2xlQ29udHJvbCIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUZXh0IiwiVGV4dCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbCIsIlRvb2xzUGFuZWwiLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIiwiVG9vbHNQYW5lbEl0ZW0iLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwiX18iLCJIaWRlQW5pbWF0ZUluSGVscFRleHQiLCJIaWRlQW5pbWF0ZU91dEhlbHBUZXh0IiwiSGlkZUN1c3RvbUNsYXNzSGVscFRleHQiLCJIaWRlVHJpZ2dlclRocmVzaG9sZEhlbHBUZXh0IiwiSGlkZVNob3dPblNjcm9sbFVwSGVscFRleHQiLCJIaWRlQnJlYWtwb2ludEhlbHBUZXh0IiwiSGlkZUFuaW1hdGVJbkR1cmF0aW9uSGVscFRleHQiLCJIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQiLCJGaWx0ZXJJbnNwZWN0b3JDb250cm9scyIsInByb3BzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwiY3VzdG9tQ2xhc3NlcyIsInRyaWdnZXJUaHJlc2hvbGQiLCJzaG93T25TY3JvbGxVcCIsImJyZWFrcG9pbnQiLCJhbmltYXRlSW5EdXJhdGlvbiIsImFuaW1hdGVPdXREdXJhdGlvbiIsIm9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzIiwiYW5pbWF0aW9uQ2xhc3NOYW1lcyIsInNldEF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJpbml0aWFsT3BlbiIsImNsYXNzTmFtZSIsImFzIiwic3BhY2luZyIsImlzRGlzbWlzc2libGUiLCJzaXplIiwiY29sb3IiLCJvbkNoYW5nZSIsIm5ld0FuaW1hdGlvbiIsImgybWxIaWRlT25TY3JvbGwiLCJvcHRpb25zIiwiaGVscCIsIm1hcmdpbkJvdHRvbSIsIl9fbmV4dEhhc05vTWFyZ2luQm90dG9tIiwiam9pbiIsIm5ld0N1c3RvbUNsYXNzZXMiLCJzcGxpdCIsIm1hcCIsIngiLCJ0cmltIiwiZmlsdGVyIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJuZXdUaHJlc2hvbGQiLCJtaW4iLCJzdGVwIiwiY2hlY2tlZCIsInJlc2V0QWxsIiwiaGFzVmFsdWUiLCJvbkRlc2VsZWN0IiwiaXNTaG93bkJ5RGVmYXVsdCIsIm5ld0JyZWFrcG9pbnQiLCJuZXdEdXJhdGlvbiIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImdsb2JhbHMiLCJhY3Rpb24iLCJ0eXBlIiwia2V5IiwiYWN0aW9ucyIsInNlbGVjdG9ycyIsImhhc093biIsInZhbHVlcyIsInBlcnNpc3QiLCJhZGRGaWx0ZXIiLCJibG9ja0VkaXRvclN0b3JlIiwiY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQiLCJlbGVtV2lsbEhpZGVDbGFzcyIsIm9wdGlvbmFsSGlkZU9uU2Nyb2xsVmFsdWVzRGVmYXVsdHMiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJkZWZhdWx0IiwiQmxvY2tFZGl0IiwiaDJtbEhpZGVPblNjcm9sbEF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsImdldEJsb2NrUGFyZW50cyIsImdldEJsb2NrQXR0cmlidXRlcyIsImhhc0ZpeGVkUG9zaXRpb25QYXJlbnQiLCJmaW5kIiwicGFyZW50Q2xpZW50SWQiLCJoMm1sUG9zaXRpb25pbmciLCJvbGRDbGFzc05hbWUiLCJlbmNvZGUiLCJodG1sIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsInRleHRDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==