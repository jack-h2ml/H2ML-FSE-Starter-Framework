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
      console.log(newCustomClasses.split(',').map(x => x.trim()));
      setAttributes({
        h2mlHideOnScroll: {
          ...existingAttributes,
          customClasses: newCustomClasses.split(',').map(x => x.trim())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7SUFDdEQsQ0FBQztJQUNEO0lBQ0EsT0FBTztNQUNOLEdBQUdoRSxLQUFLO01BQ1J1RCxTQUFTO01BQ1QscUJBQXFCLEVBQUUsRUFBRTtNQUN6QixJQUFJakcsU0FBUyxJQUFJO1FBQUMsZ0NBQWdDLEVBQUVBO01BQVMsQ0FBQyxDQUFDO01BQy9ELElBQUlTLFVBQVUsSUFBSTtRQUFDLGlDQUFpQyxFQUFFQTtNQUFVLENBQUMsQ0FBQztNQUNsRSxJQUFJbUMsYUFBYSxDQUFDbUIsTUFBTSxJQUFJO1FBQUMsb0NBQW9DLEVBQUVvQyxNQUFNLENBQUN2RCxhQUFhLENBQUNZLElBQUksQ0FBQyxHQUFHLENBQUM7TUFBQyxDQUFDLENBQUM7TUFDcEcsSUFBSVgsZ0JBQWdCLElBQUk7UUFBQywrQkFBK0IsRUFBRUE7TUFBZ0IsQ0FBQyxDQUFDO01BQzVFLElBQUlDLGNBQWMsSUFBSTtRQUFDLHVDQUF1QyxFQUFFQTtNQUFjLENBQUMsQ0FBQztNQUNoRixJQUFJQyxVQUFVLElBQUk7UUFBQyxnQ0FBZ0MsRUFBRW9ELE1BQU0sQ0FBQ3BELFVBQVU7TUFBQyxDQUFDLENBQUM7TUFDekUsSUFBSUMsaUJBQWlCLElBQUk7UUFBQyx5Q0FBeUMsRUFBRUE7TUFBaUIsQ0FBQyxDQUFDO01BQ3hGLElBQUlDLGtCQUFrQixJQUFJO1FBQUMsMENBQTBDLEVBQUVBO01BQWtCLENBQUM7SUFDM0YsQ0FBQztFQUNGO0VBQ0EsT0FBT1AsS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi4vLi4vY29tbW9uL0FuaW1hdGVEb3RDc3NEZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9lZGl0b3JfZGVwZW5kZW5jaWVzL2xvY2FsX2NvbXBvbmVudHMvRmlsdGVySW5zcGVjdG9yQ29udHJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvZWRpdG9yX2RlcGVuZGVuY2llcy9sb2NhbF9jb21wb25lbnRzL0hlbHBUZXh0L2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4uLy4uL2NvbW1vbi9BbmltYXRlRG90Q3NzRGVmaW5pdGlvbnMvbm9kZV9tb2R1bGVzL2FuaW1hdGUuY3NzL2FuaW1hdGUubWluLmNzcyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXb3JkcHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG4vKipcbiAqIEludGVybmFsIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGgybWxGaWx0ZXJTdG9yZVxufSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cbi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MnO1xuXG4vKipcbiAqIFBhcnNlIHRoZSBhbmltYXRlLmNzcyBzdHlsZXNcbiAqL1xuXG5jb25zdCBwYXJzZUFuaW1hdGVDc3NEZWZpbml0aW9ucyA9ICgpID0+IFsuLi5kb2N1bWVudC5zdHlsZVNoZWV0c10ucmVkdWNlKChyZXMsIHN0eWxlU2hlZXQpID0+IHtcblx0aWYoc3R5bGVTaGVldC5ocmVmICYmIHN0eWxlU2hlZXQuaHJlZi5pbmNsdWRlcygnYWRkLWFuaW1hdGUtb24tc2Nyb2xsLXN1cHBvcnQnKSkge1xuXHRcdGNvbnNvbGUuZGVidWcoJ0dlbmVyYXRpbmcgQW5pbWF0ZS5jc3MgRGVmaW5pdGlvbnMnKVxuXHRcdHJldHVybiBbLi4uc3R5bGVTaGVldC5jc3NSdWxlc10ucmVkdWNlKChyZXMsIHJ1bGUpID0+ICh7XG5cdFx0XHQuLi5yZXMsXG5cdFx0XHQuLi4oKFxuXHRcdFx0XHRPYmplY3QuZ2V0UHJvdG90eXBlT2YocnVsZSkuY29uc3RydWN0b3IgPT09IENTU1N0eWxlUnVsZVxuXHRcdFx0XHQmJiBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnLmFuaW1hdGVfXycpXG5cdFx0XHRcdCYmICFydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnLmFuaW1hdGVfX2FuaW1hdGVkJylcblx0XHRcdFx0JiYgKHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdJbicpIHx8IHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdPdXQnKSkgXG5cdFx0XHRcdCYmIHJ1bGUuc2VsZWN0b3JUZXh0ICE9PSAnLmFuaW1hdGVfX2phY2tJblRoZUJveCdcblx0XHRcdCkgJiYgKHJ1bGUuc2VsZWN0b3JUZXh0LmluY2x1ZGVzKCdJbicpIFxuXHRcdFx0XHQ/IHthbmltYXRlSW46IFtcblx0XHRcdFx0XHQuLi5yZXMuYW5pbWF0ZUluLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGxhYmVsOiBbLi4ucnVsZS5zdHlsZS5hbmltYXRpb25OYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIildLnJlZHVjZSgocmVzLCBjdXIsIGluZCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRgJHtyZXN9JHshaW5kID8gY3VyLnRvVXBwZXJDYXNlKCkgOiBjdXJ9YFxuXHRcdFx0XHRcdFx0KSwgJycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ1bGUuc2VsZWN0b3JUZXh0LnJlcGxhY2UoL1suLFxcc10vZywgJycpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdfSA6IHthbmltYXRlT3V0OiBbXG5cdFx0XHRcdFx0Li4ucmVzLmFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bGFiZWw6IFsuLi5ydWxlLnN0eWxlLmFuaW1hdGlvbk5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKV0ucmVkdWNlKChyZXMsIGN1ciwgaW5kKSA9PiAoXG5cdFx0XHRcdFx0XHRcdGAke3Jlc30keyFpbmQgPyBjdXIudG9VcHBlckNhc2UoKSA6IGN1cn1gXG5cdFx0XHRcdFx0XHQpLCAnJyksXG5cdFx0XHRcdFx0XHR2YWx1ZTogcnVsZS5zZWxlY3RvclRleHQucmVwbGFjZSgvWy4sXFxzXS9nLCAnJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF19KVxuXHRcdFx0KVxuXHRcdH0pLCB7XG5cdFx0XHRhbmltYXRlSW46IFt7XG5cdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fV0sXG5cdFx0XHRhbmltYXRlT3V0OiBbe1xuXHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1dXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHJlcztcblx0fVxufSwgW10pO1xuXG4vKipcbiAqIFN0b3JlIHRoZSBcbiAqL1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZURvdENzc0RlZmluaXRpb25zID0gKCkgPT4ge1xuXHRjb25zdCB7aGFzR2xvYmFsLCBnZXRHbG9iYWx9ID0gdXNlU2VsZWN0KGgybWxGaWx0ZXJTdG9yZSk7XG5cdGNvbnN0IHtzZXRHbG9iYWx9ID0gZGlzcGF0Y2goaDJtbEZpbHRlclN0b3JlKTtcblx0aWYoIWhhc0dsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycpKSB7XG5cdFx0Y29uc29sZS5kZWJ1ZygnU2V0dGluZyBBbmltYXRlLmNzcyBEZWZpbml0aW9ucycpO1xuXHRcdHNldEdsb2JhbCgnUGFyc2VkQW5pbWF0ZURvdENTUycsIHBhcnNlQW5pbWF0ZUNzc0RlZmluaXRpb25zKCkpO1xuXHR9O1xuXHRyZXR1cm4gZ2V0R2xvYmFsKCdQYXJzZWRBbmltYXRlRG90Q1NTJyk7XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdE5vdGljZSxcblx0VG9nZ2xlQ29udHJvbCxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRleHQgYXMgVGV4dCxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG5cdF9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0gYXMgVG9vbHNQYW5lbEl0ZW0sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qKlxuICogSW50ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0SGlkZUFuaW1hdGVJbkhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZU91dEhlbHBUZXh0LFxuXHRIaWRlQ3VzdG9tQ2xhc3NIZWxwVGV4dCxcblx0SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCxcblx0SGlkZVNob3dPblNjcm9sbFVwSGVscFRleHQsXG5cdEhpZGVCcmVha3BvaW50SGVscFRleHQsXG5cdEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0LFxuXHRIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHRcbn0gZnJvbSAnLi4vSGVscFRleHQnO1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgRmlsdGVySW5zcGVjdG9yQ29udHJvbHMgPSAocHJvcHMpID0+IHtcblx0Ly9cblx0Y29uc3Qge1xuXHRcdGV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRleGlzdGluZ0F0dHJpYnV0ZXM6IHtcblx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRjdXN0b21DbGFzc2VzID0gW10sXG5cdFx0XHR0cmlnZ2VyVGhyZXNob2xkLFxuXHRcdFx0c2hvd09uU2Nyb2xsVXAsXG5cdFx0XHRicmVha3BvaW50LFxuXHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRhbmltYXRlT3V0RHVyYXRpb25cblx0XHR9LFxuXHRcdG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLFxuXHRcdGFuaW1hdGlvbkNsYXNzTmFtZXMsXG5cdFx0c2V0QXR0cmlidXRlc1xuXHR9ID0gcHJvcHM7XG5cdC8vXG5cdHJldHVybiAoXG5cdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PFBhbmVsPlxuXHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0dGl0bGU9e19fKFwiSGlkZSBvbiBTY3JvbGxcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRpbml0aWFsT3Blbj17ZmFsc2V9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsnaDJtbEhpZGVPblNjcm9sbFBhbmVsJ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWU3RhY2tcblx0XHRcdFx0XHRcdGFzPXsnZGl2J31cblx0XHRcdFx0XHRcdHNwYWNpbmc9ezR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE5vdGljZVxuXHRcdFx0XHRcdFx0XHRpc0Rpc21pc3NpYmxlPXtmYWxzZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFRleHRcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsnMTJweCd9XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9eydyZ2IoMTE3LCAxMTcsIDExNyknfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e19fKFwiV2hlbiBhZGRpbmcgYW5pbWF0aW9ucyB3aGljaCB0cmFuc2l0aW9uIG9mZi1zY3JlZW4gZW5zdXJlIHRoYXQgdGhlIGRvY3VtZW50IGJvZHkgaGFzIHRoZVwiLCAnaDJtbCcpfSA8RXh0ZXJuYWxMaW5rIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1Mvb3ZlcmZsb3cteVwiPm92ZXJmbG93LXg8L0V4dGVybmFsTGluaz4ge19fKFwicHJvcGVydHkgc2V0IHRvIGVpdGhlciAnaGlkZGVuJyBvciAnY2xpcCcuXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdBbmltYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiBuZXdBbmltYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2FuaW1hdGlvbkNsYXNzTmFtZXMuYW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBPdXQnIHN0eWxlXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQW5pbWF0ZU91dEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX1cblx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b209e3RydWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdBbmltYXRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW46IG5ld0FuaW1hdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXthbmltYXRpb25DbGFzc05hbWVzLmFuaW1hdGVJbn1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2V0IHRoZSAnQW5pbWF0ZSBJbicgc3R5bGVcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVBbmltYXRlSW5IZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19XG5cdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tPXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Y3VzdG9tQ2xhc3Nlcy5qb2luKCcsICcpfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0N1c3RvbUNsYXNzZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhuZXdDdXN0b21DbGFzc2VzLnNwbGl0KCcsJykubWFwKHggPT4geC50cmltKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21DbGFzc2VzOiBuZXdDdXN0b21DbGFzc2VzLnNwbGl0KCcsJykubWFwKHggPT4geC50cmltKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkN1c3RvbSBDbGFzc25hbWVzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQ3VzdG9tQ2xhc3NIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7KGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0IHx8IGN1c3RvbUNsYXNzZXMubGVuZ3RoKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3VGhyZXNob2xkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJUaHJlc2hvbGQ6IG5ld1RocmVzaG9sZCA/IG5ld1RocmVzaG9sZCA6IDEwMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RyaWdnZXJUaHJlc2hvbGR9XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwPXsyNX1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRyaWdnZXIgVGhyZXNob2xkXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZVRyaWdnZXJUaHJlc2hvbGRIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93T25TY3JvbGxVcH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dPblNjcm9sbFVwOiAhc2hvd09uU2Nyb2xsVXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU2hvdyBvbiBzY3JvbGwgdXBcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlU2hvd09uU2Nyb2xsVXBIZWxwVGV4dCAvPn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJIaWRlIG9uIFNjcm9sbCBBZGRpdGlvbmFsIFNldHRpbmdzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5leGlzdGluZ0F0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5vcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYnJlYWtwb2ludCAhPT0gb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYnJlYWtwb2ludH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQnJlYWtwb2ludFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoMm1sSGlkZU9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtwb2ludDogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYnJlYWtwb2ludFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2JyZWFrcG9pbnR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdCcmVha3BvaW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha3BvaW50OiBuZXdCcmVha3BvaW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQnJlYWtwb2ludFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxIaWRlQnJlYWtwb2ludEhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZUluRHVyYXRpb24gIT09IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVJbkR1cmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogb3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMuYW5pbWF0ZUluRHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW5EdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW5EdXJhdGlvbjogbmV3RHVyYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJBbmltYXRlIEluIER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17PEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gYW5pbWF0ZU91dER1cmF0aW9uICE9PSBvcHRpb25hbEF0dHJpYnV0ZXNEZWZhdWx0cy5hbmltYXRlT3V0RHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkFuaW1hdGUgT3V0IER1cmF0aW9uXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uZXhpc3RpbmdBdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzLmFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXREdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld0R1cmF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmV4aXN0aW5nQXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0RHVyYXRpb246IG5ld0R1cmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiQW5pbWF0ZSBPdXQgRHVyYXRpb25cIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8SGlkZUFuaW1hdGVPdXREdXJhdGlvbkhlbHBUZXh0IC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L1ZTdGFjaz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L1BhbmVsPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdCk7XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgRGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0RXh0ZXJuYWxMaW5rLFxuXHRfX2V4cGVyaW1lbnRhbFZTdGFjayBhcyBWU3RhY2ssXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlT3V0SGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e19fKFwiVGhlICdBbmltYXRlIE91dCcgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJleW9uZCB0aGUgc3BlY2lmaWVkIHRyaWdnZXIgdGhyZXNob2xkLlwiLCAnaDJtbCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZUFuaW1hdGVJbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtfXyhcIlRoZSAnQW5pbWF0ZSBJbicgYW5pbWF0aW9uIHBsYXlzIHdoZW4gc2Nyb2xsaW5nIGJlbG93IHRoZSBzcGVjaWZpZWQgdHJpZ2dlciB0aHJlc2hvbGQuXCIsICdoMm1sJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQ3VzdG9tQ2xhc3NIZWxwVGV4dCA9IChwcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7X18oXCJBZGQgYSBjb21tYSBzZXBlcmF0ZWQgbGlzdCBvZiBjdXN0b20gJ0NsYXNzbmFtZXMnIHRvIHRvZ2dsZSwgdGhpcyBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mLCBvciBpbiBhZGRpdGlvbiB0bywgdGhlIHByZWRlZmluZWQgYW5pbWF0aW9ucyBhYm92ZS5cIiwgJ2gybWwnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnVHJpZ2dlciBUaHJlc2hvbGQnLCB0aGlzIGRldGVybWluZXMgaG93IGZhciB0aGUgdXNlciBtdXN0IHNjcm9sbCAoaW4gcHgncykgYmVmb3JlIHRoZSBibG9jayBpcyBoaWRkZW4uXCIsICdodG1sJyl9XG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICcxMDAnLlwiLCAnaDJtbCcpfVxuXHRcdDwvc3Bhbj5cblx0PC9WU3RhY2s+XG4pO1xuXG5leHBvcnQgY29uc3QgSGlkZVNob3dPblNjcm9sbFVwSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiV2hlbiBlbmFibGVkIHRoZSBibG9jayB3aWxsIGJlIHNob3duIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgdGhlIHBhZ2UgZnJvbSBhbnkgcG9pbnQsIHJhdGhlciB0aGFuIHdhaXRpbmcgdW50aWwgdGhlIHVzZXIgaGFzIHNjcm9sbGVkIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cIiwgJ2h0bWwnKX1cblx0XHQ8L3NwYW4+XG5cdFx0PHNwYW4+XG5cdFx0XHR7X18oXCJCeSBkZWZhdWx0IHRoaXMgaXMgZGlzYWJsZWQuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQnJlYWtwb2ludEhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIkRldGVybWVuaW5nIHdoZW4gdGhpcyBibG9jaydzIEhpZGUgb24gU2Nyb2xsIFNldCB3aWxsIHRha2UgZWZmZWN0IGJ5IHNldHRpbmcgYSAnQnJlYXBvaW50JyBcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RpbWVcIj57X18oXCJNZWRpYSBRdWVyeVwiLCAnaDJtbCcpfTwvRXh0ZXJuYWxMaW5rPi5cblx0XHQ8L3NwYW4+XG5cdDwvVlN0YWNrPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhpZGVBbmltYXRlSW5EdXJhdGlvbkhlbHBUZXh0ID0gKHByb3BzKSA9PiAoXG5cdDxWU3RhY2tcblx0XHRhcz17J3NwYW4nfVxuXHRcdHNwYWNpbmc9ezF9XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3MgJ0FuaW1hdGUgSW4nXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG5cbmV4cG9ydCBjb25zdCBIaWRlQW5pbWF0ZU91dER1cmF0aW9uSGVscFRleHQgPSAocHJvcHMpID0+IChcblx0PFZTdGFja1xuXHRcdGFzPXsnc3Bhbid9XG5cdFx0c3BhY2luZz17MX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0IHRoaXMgYmxvY2sncyAnQW5pbWF0ZSBPdXQnXCIsICdodG1sJyl9IDxFeHRlcm5hbExpbmsgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy90aW1lXCI+e19fKFwiZHVyYXRpb25cIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz4uXG5cdFx0PC9zcGFuPlxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiQnkgZGVmYXVsdCB0aGlzIGlzICc1MDBtcycuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L1ZTdGFjaz5cbik7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1eFN0b3JlLCByZWdpc3RlciB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVJlZHV4U3RvcmUoJ2gybWxGaWx0ZXJTdG9yZScsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRnbG9iYWxzOiB7fVxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdIMk1MX1NFVF9HTE9CQUwnOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0W2FjdGlvbi5rZXldOiB7XG5cdFx0XHRcdFx0XHQuLi4oc3RhdGVbYWN0aW9uLmtleV0gJiYgc3RhdGUudmFsdWUpLFxuXHRcdFx0XHRcdFx0Li4uYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0R2xvYmFsKGtleSwgdmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6ICdIMk1MX1NFVF9HTE9CQUwnLFxuXHRcdFx0XHRrZXksXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRoYXNHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5oYXNPd24oc3RhdGUsIGtleSk7XG5cdFx0fSxcblx0XHRnZXRHbG9iYWwoc3RhdGUsIGtleSkge1xuXHRcdFx0Y29uc3QgeyBcblx0XHRcdFx0W2tleV0gOiB2YWx1ZXNcblx0XHRcdH0gPSBzdGF0ZTtcblx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0fSxcblx0fSxcblx0cGVyc2lzdDogWyAncHJlZmVyZW5jZXMnIF0sXG59KTtcblxucmVnaXN0ZXIoc3RvcmUpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIERlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBMb2NhbCBEZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7XG5cdEFuaW1hdGVEb3RDc3NEZWZpbml0aW9uc1xufSBmcm9tICcuLi8uLi8uLi9jb21tb24vQW5pbWF0ZURvdENzc0RlZmluaXRpb25zJztcblxuaW1wb3J0IHsgXG5cdEZpbHRlckluc3BlY3RvckNvbnRyb2xzIFxufSBmcm9tICcuL2VkaXRvcl9kZXBlbmRlbmNpZXMvbG9jYWxfY29tcG9uZW50cy9GaWx0ZXJJbnNwZWN0b3JDb250cm9scyc7XG5cbi8qXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBlbGVtV2lsbEhpZGVDbGFzcyA9ICdhbmltYXRlX19hbmltYXRlZCc7XG5cbmNvbnN0IG9wdGlvbmFsSGlkZU9uU2Nyb2xsVmFsdWVzRGVmYXVsdHMgPSB7XG5cdGJyZWFrcG9pbnQ6ICcnLFxuXHRhbmltYXRlSW5EdXJhdGlvbjogJzUwMG1zJyxcblx0YW5pbWF0ZU91dER1cmF0aW9uOiAnNTAwbXMnLFxufVxuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWhpZGUtb24tc2Nyb2xsLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Li4uc2V0dGluZ3MuYXR0cmlidXRlcyxcblx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzZXM6IFtdLFxuXHRcdFx0XHRcdFx0dHJpZ2dlclRocmVzaG9sZDogMTAwLFxuXHRcdFx0XHRcdFx0c2hvd09uU2Nyb2xsVXA6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Li4ub3B0aW9uYWxIaWRlT25TY3JvbGxWYWx1ZXNEZWZhdWx0c1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuKTtcblxuLypcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0VkaXQnLFxuXHQnaDJtbC9hZGQtaGlkZS1vbi1zY3JvbGwtaW5zZXBjdG9yLWNvbnRyb2xzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0aDJtbEhpZGVPblNjcm9sbDogaDJtbEhpZGVPblNjcm9sbEF0dHJpYnV0ZXMsXG5cdFx0XHR9LFxuXHRcdFx0Y2xpZW50SWQsXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXHRcdC8vXG5cdFx0Y29uc3Qge2dldEJsb2NrUGFyZW50cywgZ2V0QmxvY2tBdHRyaWJ1dGVzfSA9IHVzZVNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRjb25zdCBoYXNGaXhlZFBvc2l0aW9uUGFyZW50ID0gZ2V0QmxvY2tQYXJlbnRzKGNsaWVudElkKS5maW5kKHBhcmVudENsaWVudElkID0+ICEhZ2V0QmxvY2tBdHRyaWJ1dGVzKHBhcmVudENsaWVudElkKS5oMm1sUG9zaXRpb25pbmc/LnR5cGUpO1xuXHRcdC8vXG5cdFx0aWYoaGFzRml4ZWRQb3NpdGlvblBhcmVudCkge1xuXHRcdFx0cmV0dXJuICg8PlxuXHRcdFx0XHQ8RmlsdGVySW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdFx0XHRleGlzdGluZ0F0dHJpYnV0ZXM9e2gybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzfVxuXHRcdFx0XHRcdG9wdGlvbmFsQXR0cmlidXRlc0RlZmF1bHRzPXtvcHRpb25hbEhpZGVPblNjcm9sbFZhbHVlc0RlZmF1bHRzfVx0XG5cdFx0XHRcdFx0YW5pbWF0aW9uQ2xhc3NOYW1lcz17QW5pbWF0ZURvdENzc0RlZmluaXRpb25zKCl9XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcz17c2V0QXR0cmlidXRlc31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdDwvPik7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRIaWRlT25TY3JvbGxJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsXG5cdCdoMm1sL2FkZC1oaWRlLW9uLXNjcm9sbC1zdHlsZXMtc2F2ZScsXG5cdChwcm9wcywgdHlwZSwgYXR0cmlidXRlcykgPT4ge1xuXHRcdC8vXG5cdFx0Y29uc3Qge2NsYXNzTmFtZTogb2xkQ2xhc3NOYW1lfSA9IHByb3BzO1xuXHRcdGNvbnN0IHtcblx0XHRcdGgybWxIaWRlT25TY3JvbGw6IHtcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRjdXN0b21DbGFzc2VzLFxuXHRcdFx0XHR0cmlnZ2VyVGhyZXNob2xkLFxuXHRcdFx0XHRzaG93T25TY3JvbGxVcCxcblx0XHRcdFx0YnJlYWtwb2ludCxcblx0XHRcdFx0YW5pbWF0ZUluRHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPdXREdXJhdGlvblxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Ly9cblx0XHRpZiAoYW5pbWF0ZUluIHx8IGFuaW1hdGVPdXQgfHwgY3VzdG9tQ2xhc3Nlcz8ubGVuZ3RoKSB7XG5cdFx0XHQvL1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lID0gKG9sZENsYXNzTmFtZSA/IG9sZENsYXNzTmFtZS5zcGxpdCgnICcpIDogW10pLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIChjdXIgIT09IGVsZW1XaWxsSGlkZUNsYXNzKSA/IGAke3Jlc30gJHtjdXJ9YCA6IGAke3Jlc31gXG5cdFx0XHR9LCAoZWxlbVdpbGxIaWRlQ2xhc3MpKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCBlbmNvZGUgPSAoaHRtbCkgPT4ge1xuXHRcdFx0XHRsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG5cdFx0XHRcdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZG9jLmJvZHkudGV4dENvbnRlbnQpIHx8IFwiXCI7XG5cdFx0XHR9XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtaGlkZS1vbi1zY3JvbGwnOiAnJyxcblx0XHRcdFx0Li4uKGFuaW1hdGVJbiAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtYW5pbWF0ZS1pbic6IGFuaW1hdGVJbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dCAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtYW5pbWF0ZS1vdXQnOiBhbmltYXRlT3V0fSksXG5cdFx0XHRcdC4uLihjdXN0b21DbGFzc2VzLmxlbmd0aCAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtY3VzdG9tLWNsYXNzZXMnOiBlbmNvZGUoY3VzdG9tQ2xhc3Nlcy5qb2luKCcgJykpfSksXG5cdFx0XHRcdC4uLih0cmlnZ2VyVGhyZXNob2xkICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC10aHJlc2hvbGQnOiB0cmlnZ2VyVGhyZXNob2xkfSksXG5cdFx0XHRcdC4uLihzaG93T25TY3JvbGxVcCAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtc2hvdy1vbi1zY3JvbGwtdXAnOiBzaG93T25TY3JvbGxVcH0pLFxuXHRcdFx0XHQuLi4oYnJlYWtwb2ludCAmJiB7J2RhdGEtaGlkZS1vbi1zY3JvbGwtYnJlYWtwb2ludCc6IGVuY29kZShicmVha3BvaW50KX0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZUluRHVyYXRpb24gJiYgeydkYXRhLWhpZGUtb24tc2Nyb2xsLWFuaW1hdGUtaW4tZHVyYXRpb24nOiBhbmltYXRlSW5EdXJhdGlvbn0pLFxuXHRcdFx0XHQuLi4oYW5pbWF0ZU91dER1cmF0aW9uICYmIHsnZGF0YS1oaWRlLW9uLXNjcm9sbC1hbmltYXRlLW91dC1kdXJhdGlvbic6IGFuaW1hdGVPdXREdXJhdGlvbn0pXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInN0b3JlIiwiaDJtbEZpbHRlclN0b3JlIiwicGFyc2VBbmltYXRlQ3NzRGVmaW5pdGlvbnMiLCJkb2N1bWVudCIsInN0eWxlU2hlZXRzIiwicmVkdWNlIiwicmVzIiwic3R5bGVTaGVldCIsImhyZWYiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJkZWJ1ZyIsImNzc1J1bGVzIiwicnVsZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY29uc3RydWN0b3IiLCJDU1NTdHlsZVJ1bGUiLCJzZWxlY3RvclRleHQiLCJhbmltYXRlSW4iLCJsYWJlbCIsInN0eWxlIiwiYW5pbWF0aW9uTmFtZSIsInJlcGxhY2UiLCJjdXIiLCJpbmQiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlIiwiYW5pbWF0ZU91dCIsIkFuaW1hdGVEb3RDc3NEZWZpbml0aW9ucyIsImhhc0dsb2JhbCIsImdldEdsb2JhbCIsInNldEdsb2JhbCIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJFeHRlcm5hbExpbmsiLCJOb3RpY2UiLCJUb2dnbGVDb250cm9sIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRleHQiLCJUZXh0IiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJfXyIsIkhpZGVBbmltYXRlSW5IZWxwVGV4dCIsIkhpZGVBbmltYXRlT3V0SGVscFRleHQiLCJIaWRlQ3VzdG9tQ2xhc3NIZWxwVGV4dCIsIkhpZGVUcmlnZ2VyVGhyZXNob2xkSGVscFRleHQiLCJIaWRlU2hvd09uU2Nyb2xsVXBIZWxwVGV4dCIsIkhpZGVCcmVha3BvaW50SGVscFRleHQiLCJIaWRlQW5pbWF0ZUluRHVyYXRpb25IZWxwVGV4dCIsIkhpZGVBbmltYXRlT3V0RHVyYXRpb25IZWxwVGV4dCIsIkZpbHRlckluc3BlY3RvckNvbnRyb2xzIiwicHJvcHMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJjdXN0b21DbGFzc2VzIiwidHJpZ2dlclRocmVzaG9sZCIsInNob3dPblNjcm9sbFVwIiwiYnJlYWtwb2ludCIsImFuaW1hdGVJbkR1cmF0aW9uIiwiYW5pbWF0ZU91dER1cmF0aW9uIiwib3B0aW9uYWxBdHRyaWJ1dGVzRGVmYXVsdHMiLCJhbmltYXRpb25DbGFzc05hbWVzIiwic2V0QXR0cmlidXRlcyIsIm5ld0FuaW1hdGlvbiIsImgybWxIaWRlT25TY3JvbGwiLCJtYXJnaW5Cb3R0b20iLCJqb2luIiwibmV3Q3VzdG9tQ2xhc3NlcyIsImxvZyIsInNwbGl0IiwibWFwIiwieCIsInRyaW0iLCJsZW5ndGgiLCJuZXdUaHJlc2hvbGQiLCJuZXdCcmVha3BvaW50IiwibmV3RHVyYXRpb24iLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVnaXN0ZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJnbG9iYWxzIiwiYWN0aW9uIiwidHlwZSIsImtleSIsImFjdGlvbnMiLCJzZWxlY3RvcnMiLCJoYXNPd24iLCJ2YWx1ZXMiLCJwZXJzaXN0IiwiYWRkRmlsdGVyIiwiYmxvY2tFZGl0b3JTdG9yZSIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiZWxlbVdpbGxIaWRlQ2xhc3MiLCJvcHRpb25hbEhpZGVPblNjcm9sbFZhbHVlc0RlZmF1bHRzIiwic2V0dGluZ3MiLCJhdHRyaWJ1dGVzIiwiZGVmYXVsdCIsIkJsb2NrRWRpdCIsImgybWxIaWRlT25TY3JvbGxBdHRyaWJ1dGVzIiwiY2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHMiLCJnZXRCbG9ja0F0dHJpYnV0ZXMiLCJoYXNGaXhlZFBvc2l0aW9uUGFyZW50IiwiZmluZCIsInBhcmVudENsaWVudElkIiwiaDJtbFBvc2l0aW9uaW5nIiwiY2xhc3NOYW1lIiwib2xkQ2xhc3NOYW1lIiwiZW5jb2RlIiwiaHRtbCIsImRvYyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCIsImJvZHkiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=