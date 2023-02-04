/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/**
 * WordPress dependencies
 */







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
          duration: '',
          animateOnce: ''
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
        duration,
        animateOnce
      } = {}
    },
    setAttributes
  } = props;
  if (animateIn !== undefined) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Animation on Scroll", 'h2ml'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      onChange: value => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn: value,
            animateOut,
            duration,
            animateOnce
          }
        });
      },
      value: animateIn,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Fade in',
        value: 'animate__fadeIn'
      }, {
        label: 'Fade in Down',
        value: 'animate__fadeInDown'
      }, {
        label: 'Fade in Left',
        value: 'animate__fadeInLeft'
      }, {
        label: 'Fade in Up',
        value: 'animate__fadeInUp'
      }, {
        label: 'Fade in Right',
        value: 'animate__fadeInRight'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      onChange: value => {
        setAttributes({
          h2mlAnimationOnScroll: {
            animateIn,
            animateOut: value,
            duration,
            animateOnce
          }
        });
      },
      value: animateOut,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: 'Fade out',
        value: 'animate__fadeOut'
      }, {
        label: 'Fade out Down',
        value: 'animate__fadeOutDown'
      }, {
        label: 'Fade out Left',
        value: 'animate__fadeOutLeft'
      }, {
        label: 'Fade out Up',
        value: 'animate__fadeOutUp'
      }, {
        label: 'Fade out Right',
        value: 'animate__fadeOutRight'
      }]
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
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
      duration,
      animateOnce
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
      'data-animate': '',
      'data-animatein': animateIn,
      'data-animateout': animateOut
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsR0FBR1AsVUFBVTtFQUNkO0VBQ0EsSUFBSUksU0FBUyxJQUFJQyxVQUFVLEVBQUU7SUFDNUI7SUFDQSxNQUFNUyxTQUFTLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUVDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsS0FBSztNQUNwRixPQUFRQSxHQUFHLEtBQUtyQixjQUFjLEdBQUssR0FBRW9CLEdBQUksSUFBR0MsR0FBSSxFQUFDLEdBQUksR0FBRUQsR0FBSSxFQUFDO0lBQzdELENBQUMsRUFBR3BCLGNBQWMsQ0FBRTtJQUNwQjtJQUNBLE9BQU87TUFDTixHQUFHVyxLQUFLO01BQ1JLLFNBQVM7TUFDVCxjQUFjLEVBQUUsRUFBRTtNQUNsQixnQkFBZ0IsRUFBRVYsU0FBUztNQUMzQixpQkFBaUIsRUFBRUM7SUFDcEIsQ0FBQztFQUNGO0VBQ0EsT0FBT0ksS0FBSztBQUNiLENBQUMsQ0FDRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImhvb2tzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaG9va3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGFkZEZpbHRlciB9IGZyb20gJ0B3b3JkcHJlc3MvaG9va3MnO1xuXG5pbXBvcnQgeyBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxuXHRfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwgYXMgVG9vbHNQYW5lbCxcbiAgICBfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWxJdGVtIGFzIFRvb2xzUGFuZWxJdGVtLFxuXHRfX2V4cGVyaW1lbnRhbEJveENvbnRyb2wgYXMgQm94Q29udHJvbCxcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qXG4gKiBHbG9iYWxcbiAqL1xuXG5jb25zdCBhbmltYXRpb25DbGFzcyA9ICdhbmltYXRlX19hbmltYXRlZCc7XG5cbi8qKiBcbiAqIFRoZSBGaWx0ZXJcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUnLFxuXHQnaDJtbC9hZGQtYW5pbWF0aW9uLW9uLXNjcm9sbC1hdHRyaWJ1dGUnLFxuXHQoc2V0dGluZ3MpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdGFuaW1hdGVJbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT3V0OiAnJyxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAnJyxcblx0XHRcdFx0XHRcdGFuaW1hdGVPbmNlOiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuKTtcblxuLypcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0VkaXQnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctaW5zZXBjdG9yLWNvbnRyb2xzLWVkaXQnLFxuXHRjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4gcHJvcHMgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRcdFx0YW5pbWF0ZU9uY2Vcblx0XHRcdFx0fSA9IHt9XG5cdFx0XHR9LFxuXHRcdFx0c2V0QXR0cmlidXRlc1xuXHRcdH0gPSBwcm9wcztcblx0XHRpZiAoYW5pbWF0ZUluICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIkFuaW1hdGlvbiBvbiBTY3JvbGxcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlSW46IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZU9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRlSW59XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW4nXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5Eb3duJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gTGVmdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluTGVmdCdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIFVwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5VcCdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIFJpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlSW5SaWdodCdcblx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPdXQ6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZU91dH1cblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1t7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnTm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0J1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IERvd24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXREb3duJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IExlZnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXRMZWZ0J1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IFVwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0VXAnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBvdXQgUmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVPdXRSaWdodCdcblx0XHRcdFx0XHRcdFx0XHRcdH1dfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0ey8qKHBvc2l0aW9uaW5nVHlwZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb29scyBQYW5lbCAoZGVmYXVsdCBleGFtcGxlKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc2V0QWxsPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5yZWR1Y2UoKG5ld1ZhbHVlcywgZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3VmFsdWVzW2VudHJ5WzBdXSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3VmFsdWVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5maWx0ZXIoZW50cnkgPT4gZW50cnlbMF0gIT09ICd6SW5kZXgnICYmICEhZW50cnlbMV0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlBvc2l0aW9uIFZhbHVlc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogT2JqZWN0LmVudHJpZXMocG9zaXRpb25pbmdWYWx1ZXMpLnJlZHVjZSgobmV3VmFsdWVzLCBlbnRyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlc1tlbnRyeVswXV0gPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3VmFsdWVzO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7fSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlBvc2l0aW9uIFZhbHVlc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2lkZXM9e09iamVjdC5rZXlzKHBvc2l0aW9uaW5nVmFsdWVzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlcz17cG9zaXRpb25pbmdWYWx1ZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5ld1Bvc2l0aW9uaW5nVmFsdWVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubmV3UG9zaXRpb25pbmdWYWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogcG9zaXRpb25pbmdTdGFja2luZ09yZGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvb2xzUGFuZWxJdGVtXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzVmFsdWU9eygpID0+IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5maWx0ZXIoZW50cnkgPT4gZW50cnlbMF0gIT09ICd6SW5kZXgnICYmICEhZW50cnlbMV0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID0ge3Bvc2l0aW9uaW5nU3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0geyhuZXdaSW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ucG9zaXRpb25pbmdWYWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogbmV3WkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaGlmdFN0ZXAgPSB7MX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hpZnRTdGVwRW5hYmxlZCA9IHt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWw+XG5cdFx0XHRcdFx0XHRcdFx0KSovfVxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8QmxvY2tFZGl0IHsuLi5wcm9wc30vPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRBbmltYXRpb25PblNjcm9sbEluc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLXN0eWxlcy1zYXZlJyxcblx0KHByb3BzLCB0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG5cdFx0Ly9cblx0XHRjb25zdCB7Y2xhc3NOYW1lOiBvbGRDbGFzc05hbWV9ID0gcHJvcHM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0YW5pbWF0ZU91dCxcblx0XHRcdFx0ZHVyYXRpb24sXG5cdFx0XHRcdGFuaW1hdGVPbmNlXG5cdFx0XHR9ID0ge31cblx0XHR9ID0gYXR0cmlidXRlcztcblx0XHQvL1xuXHRcdGlmIChhbmltYXRlSW4gfHwgYW5pbWF0ZU91dCkge1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IChvbGRDbGFzc05hbWUgPyBvbGRDbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoY3VyICE9PSBhbmltYXRpb25DbGFzcykgPyBgJHtyZXN9ICR7Y3VyfWAgOiBgJHtyZXN9YFxuXHRcdFx0fSwgKGFuaW1hdGlvbkNsYXNzKSk7XG5cdFx0XHQvL1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0J2RhdGEtYW5pbWF0ZSc6ICcnLFxuXHRcdFx0XHQnZGF0YS1hbmltYXRlaW4nOiBhbmltYXRlSW4sXG5cdFx0XHRcdCdkYXRhLWFuaW1hdGVvdXQnOiBhbmltYXRlT3V0XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cblxuIl0sIm5hbWVzIjpbImFkZEZpbHRlciIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJTZWxlY3RDb250cm9sIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJfX2V4cGVyaW1lbnRhbFRvb2xzUGFuZWwiLCJUb29sc1BhbmVsIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSIsIlRvb2xzUGFuZWxJdGVtIiwiX19leHBlcmltZW50YWxCb3hDb250cm9sIiwiQm94Q29udHJvbCIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJfXyIsImNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50IiwiYW5pbWF0aW9uQ2xhc3MiLCJzZXR0aW5ncyIsImF0dHJpYnV0ZXMiLCJoMm1sQW5pbWF0aW9uT25TY3JvbGwiLCJ0eXBlIiwiZGVmYXVsdCIsImFuaW1hdGVJbiIsImFuaW1hdGVPdXQiLCJkdXJhdGlvbiIsImFuaW1hdGVPbmNlIiwiQmxvY2tFZGl0IiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwidmFsdWUiLCJsYWJlbCIsImNsYXNzTmFtZSIsIm9sZENsYXNzTmFtZSIsInNwbGl0IiwicmVkdWNlIiwicmVzIiwiY3VyIl0sInNvdXJjZVJvb3QiOiIifQ==