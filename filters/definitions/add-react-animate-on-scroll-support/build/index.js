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
  const {
    h2mlAnimationOnScroll: {
      animateIn,
      animateOut,
      duration,
      animateOnce
    } = {}
  } = attributes;
  if (animateIn || animateOut) {
    return {
      ...props,
      animateIn,
      animateOut
    };
  }
  return props;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtFQUNBLE9BQU9JLEtBQUs7QUFDYixDQUFDLENBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJob29rc1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImhvb2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBhZGRGaWx0ZXIgfSBmcm9tICdAd29yZHByZXNzL2hvb2tzJztcblxuaW1wb3J0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFNlbGVjdENvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG4gICAgX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSBhcyBUb29sc1BhbmVsSXRlbSxcblx0X19leHBlcmltZW50YWxCb3hDb250cm9sIGFzIEJveENvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKiogXG4gKiBUaGUgRmlsdGVyXG4gKi9cblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLWFuaW1hdGlvbi1vbi1zY3JvbGwtYXR0cmlidXRlJyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHQuLi5zZXR0aW5ncy5hdHRyaWJ1dGVzLFxuXHRcdFx0XHRoMm1sQW5pbWF0aW9uT25TY3JvbGw6IHtcblx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0XHRhbmltYXRlSW46ICcnLFxuXHRcdFx0XHRcdFx0YW5pbWF0ZU91dDogJycsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogJycsXG5cdFx0XHRcdFx0XHRhbmltYXRlT25jZTogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbik7XG5cbi8qXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdlZGl0b3IuQmxvY2tFZGl0Jyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWluc2VwY3Rvci1jb250cm9scy1lZGl0Jyxcblx0Y3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tFZGl0ID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRcdGFuaW1hdGVPbmNlXG5cdFx0XHRcdH0gPSB7fVxuXHRcdFx0fSxcblx0XHRcdHNldEF0dHJpYnV0ZXNcblx0XHR9ID0gcHJvcHM7XG5cdFx0aWYgKGFuaW1hdGVJbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oXCJBbmltYXRpb24gb24gU2Nyb2xsXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbEFuaW1hdGlvbk9uU2Nyb2xsOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZUluOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVPbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0ZUlufVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdOb25lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgaW4gRG93bicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluRG93bidcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIGluIExlZnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2FuaW1hdGVfX2ZhZGVJbkxlZnQnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBVcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluVXAnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRmFkZSBpbiBSaWdodCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZUluUmlnaHQnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVJbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT3V0OiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlT25jZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2FuaW1hdGVPdXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ05vbmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dCdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0RG93bidcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBMZWZ0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0TGVmdCdcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGYWRlIG91dCBVcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnYW5pbWF0ZV9fZmFkZU91dFVwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ0ZhZGUgb3V0IFJpZ2h0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdhbmltYXRlX19mYWRlT3V0UmlnaHQnXG5cdFx0XHRcdFx0XHRcdFx0XHR9XX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdHsvKihwb3NpdGlvbmluZ1R5cGUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVG9vbHMgUGFuZWwgKGRlZmF1bHQgZXhhbXBsZSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNldEFsbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykucmVkdWNlKChuZXdWYWx1ZXMsIGVudHJ5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1ZhbHVlc1tlbnRyeVswXV0gPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHt9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IE9iamVjdC5lbnRyaWVzKHBvc2l0aW9uaW5nVmFsdWVzKS5yZWR1Y2UoKG5ld1ZhbHVlcywgZW50cnkpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdWYWx1ZXNbZW50cnlbMF1dID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ld1ZhbHVlcztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaG93bkJ5RGVmYXVsdD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJQb3NpdGlvbiBWYWx1ZXNcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpZGVzPXtPYmplY3Qua2V5cyhwb3NpdGlvbmluZ1ZhbHVlcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM9e3Bvc2l0aW9uaW5nVmFsdWVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXdQb3NpdGlvbmluZ1ZhbHVlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm5ld1Bvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUb29sc1BhbmVsSXRlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1ZhbHVlPXsoKSA9PiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykuZmlsdGVyKGVudHJ5ID0+IGVudHJ5WzBdICE9PSAnekluZGV4JyAmJiAhIWVudHJ5WzFdKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTdGFja2luZyBPcmRlclwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGVzZWxlY3Q9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogcG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHpJbmRleDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHsobmV3WkluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe2gybWxQb3NpdGlvbmluZzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnBvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6IG5ld1pJbmRleFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsPlxuXHRcdFx0XHRcdFx0XHRcdCkqL31cblx0XHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0PEJsb2NrRWRpdCB7Li4ucHJvcHN9Lz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gPEJsb2NrRWRpdCB7Li4ucHJvcHN9IC8+O1xuXHR9LCAnYWRkQW5pbWF0aW9uT25TY3JvbGxJbnNwZWN0b3JDb250cm9sc0VkaXQnKVxuKTtcblxuLyoqXG4gKiBcbiAqL1xuXG5hZGRGaWx0ZXIoXG5cdCdibG9ja3MuZ2V0U2F2ZUNvbnRlbnQuZXh0cmFQcm9wcycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtc2F2ZScsXG5cdChwcm9wcywgdHlwZSwgYXR0cmlidXRlcykgPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGgybWxBbmltYXRpb25PblNjcm9sbDoge1xuXHRcdFx0XHRhbmltYXRlSW4sXG5cdFx0XHRcdGFuaW1hdGVPdXQsXG5cdFx0XHRcdGR1cmF0aW9uLFxuXHRcdFx0XHRhbmltYXRlT25jZVxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0aWYgKGFuaW1hdGVJbiB8fCBhbmltYXRlT3V0KSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0YW5pbWF0ZUluLFxuXHRcdFx0XHRhbmltYXRlT3V0XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cbiJdLCJuYW1lcyI6WyJhZGRGaWx0ZXIiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsQm94Q29udHJvbCIsIkJveENvbnRyb2wiLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwiX18iLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsInNldHRpbmdzIiwiYXR0cmlidXRlcyIsImgybWxBbmltYXRpb25PblNjcm9sbCIsInR5cGUiLCJkZWZhdWx0IiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImR1cmF0aW9uIiwiYW5pbWF0ZU9uY2UiLCJCbG9ja0VkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==