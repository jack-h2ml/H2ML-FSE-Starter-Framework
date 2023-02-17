/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const resizeCornerNE = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stack.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stack.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stack = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 4v5.2c0 .3-.2.5-.5.5h-7c-.3.1-.5-.2-.5-.5V4H6.5v5.2c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V4H16zm-.5 8.8h-7c-1.1 0-2 .9-2 2V20H8v-5.2c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5V20h1.5v-5.2c0-1.2-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stack);
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");

/**
 * WordPress dependencies
 */









/*
 * Internal dependencies
 */



/*
 * The Edit Function Container
 */

const GridAreaEdit = _ref => {
  let {
    // Attributes.
    attributes: {
      verticalAlignment,
      gridArea,
      stackingOrder,
      requestEdit,
      number,
      style: {
        color: {
          background: customBackgroundColor
        } = {}
      } = {},
      breakpointDefinitions
    },
    // Attribute Setters.
    setVerticalAlignment,
    setRequestEdit,
    setStackingOrder,
    // Other.
    clientId
  } = _ref;
  //
  // Get Information about the current Block, and its children (Used for setting the editor stacking order).
  //

  const {
    selectedBlockClientId,
    gridAreaIds,
    isSelectedGridArea,
    childBlocks,
    themeSupportsLayout
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    // Hooks.
    const {
      getBlocks,
      getBlockOrder,
      getBlockRootClientId,
      getSettings,
      getSelectedBlockClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
    const {
      getSelectedGridArea
    } = select('h2ml/grid_area_store');
    // Variables.
    const selectedBlockClientId = getSelectedBlockClientId();
    const rootId = getBlockRootClientId(clientId);
    const childBlocks = getBlocks(clientId);
    const selectedGridItem = getSelectedGridArea();
    // Return Values.
    return {
      selectedBlockClientId,
      childBlocks: childBlocks.length ? childBlocks : null,
      gridAreaIds: getBlockOrder(rootId),
      isSelectedGridArea: selectedGridItem?.parents.find(selectedGridItem => selectedGridItem.clientId === clientId),
      themeSupportsLayout: getSettings()?.supportsLayout
    };
  }, []);

  //
  // If the Grid Area's number of children changes, determine if there are one or more children. 
  // 
  // If there is one, and that is a Media or an Embed block then update the child's 'h2mlCanFillGridArea' attribute to true,
  // allowing the child to cover the Grid Area (this is added in our filters).
  //
  // If there is multiple, set the 'h2mlCanFillGridArea' attribute to false.
  //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (childBlocks?.length === 1) {
      childBlocks.forEach(childBlock => {
        const {
          clientId: childClientId,
          name
        } = childBlock;
        const {
          category
        } = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockType)(name);
        if (['media', 'embed'].includes(category)) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).updateBlockAttributes(childClientId, {
            h2mlCanFillGridArea: true
          });
        }
      });
    } else if (childBlocks) {
      childBlocks.forEach(childBlock => {
        const {
          clientId: childClientId,
          name
        } = childBlock;
        const {
          category
        } = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.getBlockType)(name);
        if (['media', 'embed'].includes(category)) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).updateBlockAttributes(childClientId, {
            h2mlCanFillGridArea: false
          });
        }
      });
    }
  }, [childBlocks]);

  //
  // The Grid Area layout.
  //

  const layout = {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSetting)('layout'),
    type: 'flex',
    orientation: 'vertical'
  };

  //
  // Register the Block / InnerBlock Props.
  //

  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: [`h2mlGridArea${number}`],
    style: {
      justifyContent: verticalAlignment,
      backgroundColor: customBackgroundColor ? customBackgroundColor : 'null',
      gridArea: gridArea.parsed,
      zIndex: isSelectedGridArea ? isSelectedGridArea.editorStackingOrder : stackingOrder
    },
    'aria-label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Grid-Area (${gridAreaIds.indexOf(clientId) + 1} of ${gridAreaIds.length})`, 'h2ml')
  }), {
    renderAppender: childBlocks ? undefined : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender,
    __experimentalLayout: themeSupportsLayout ? layout : undefined
  });

  //
  // The JSX.
  //

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockVerticalAlignmentToolbar, {
    value: verticalAlignment,
    onChange: setVerticalAlignment
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Resize Grid Area", 'h2ml'),
    isPressed: requestEdit,
    onClick: () => setRequestEdit(!requestEdit)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Grid Area Settings", 'h2ml'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Stacking Order", 'h2ml'),
    isShiftStepEnabled: true,
    onChange: setStackingOrder,
    shiftStep: 1,
    value: stackingOrder
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
};

/*
 * The Block Actions
 */

const GridAreaEditWrapper = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)((dispatch, ownProps, registry) => ({
  //
  // Set the Grid Area's vertical alignment (Start, Center, End)
  //
  setVerticalAlignment(newVerticalAlignment) {
    const {
      setAttributes
    } = ownProps;
    const verticalAlignment = (() => {
      switch (newVerticalAlignment) {
        case 'center':
          {
            return 'center';
          }
        case 'bottom':
          {
            return 'end';
          }
        default:
          {
            return 'start';
          }
      }
    })();
    setAttributes({
      verticalAlignment
    });
  },
  //
  // Set the 'requestEdit' attribute, this is picked up by the parent Grid in order to update the Grid Area's size.
  //
  setRequestEdit(value) {
    const {
      clientId,
      setAttributes
    } = ownProps;
    setAttributes({
      requestEdit: value
    });
  },
  //
  // Set the 'stackingOrder' attribute, this determines the saved z-index of Grid Area's within a Grid.
  //
  setStackingOrder(order) {
    const {
      setAttributes
    } = ownProps;
    setAttributes({
      stackingOrder: Number(order)
    });
  }
}))(GridAreaEdit);
function Edit(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GridAreaEditWrapper, props);
}
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/stack.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../block.json */ "./block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * WordPress dependencies
 */




/**
 * Style
 */



/**
 * Internal dependencies
 */





/**
 * Register the Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/*
 * WordPress dependencies
 */



/*
 * The Save Function
 */

function Save(_ref) {
  let {
    attributes: {
      gridArea: {
        parsed: defaultGridArea
      },
      stackingOrder,
      verticalAlignment,
      backgroundColor,
      style: {
        color: {
          background: customBackgroundColor
        } = {}
      } = {},
      breakpointDefinitions
    }
  } = _ref;
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        justifyContent: verticalAlignment,
        ...(!backgroundColor && {
          backgroundColor: customBackgroundColor
        }),
        gridArea: defaultGridArea,
        zIndex: stackingOrder
      },
      'data-breakpoint-definitions': Object.keys(breakpointDefinitions) ? btoa(JSON.stringify(Object.values(breakpointDefinitions).reduce((res, breakpointDefinition) => ({
        ...res,
        [`${breakpointDefinition.mediaQuery}`]: {
          ...(breakpointDefinition.coords ? {
            gridArea: breakpointDefinition.coords,
            display: 'flex'
          } : {
            display: 'none'
          })
        }
      }), {}))) : undefined
    })
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
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

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid-area","version":"0.1.0","title":"Grid Area","parent":["h2ml/grid"],"category":"design","description":"A single Grid Area within a Grid block.","textdomain":"h2ml","attributes":{"verticalAlignment":{"type":"string","default":"start"},"style":{"type":"object","default":{"color":{"background":null}}},"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false},"number":{"type":"number","default":null},"breakpointDefinitions":{"type":"object","default":{}}},"supports":{"__experimentalSettings":true,"__experimentalLayout":{"allowSizingOnChildren":false},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkka_example_block"] = self["webpackChunkka_example_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0EsMkZBQTJGLCtDQUErQztVQUMxSSIsInNvdXJjZXMiOlsid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9yZXNpemUtY29ybmVyLW4tZS5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvc3RhY2suanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHJlc2l6ZUNvcm5lck5FID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTEyLjUgNC4ydjEuNmg0LjdMNS44IDE3LjJWMTJINC4ydjcuOEgxMnYtMS42SDYuOEwxOC4yIDYuOHY0LjdoMS42VjQuMnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcmVzaXplQ29ybmVyTkU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNpemUtY29ybmVyLW4tZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHN0YWNrID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE2IDR2NS4yYzAgLjMtLjIuNS0uNS41aC03Yy0uMy4xLS41LS4yLS41LS41VjRINi41djUuMmMwIDEuMS45IDIgMiAyaDdjMS4xIDAgMi0uOSAyLTJWNEgxNnptLS41IDguOGgtN2MtMS4xIDAtMiAuOS0yIDJWMjBIOHYtNS4yYzAtLjMuMi0uNS41LS41aDdjLjMgMCAuNS4yLjUuNVYyMGgxLjV2LTUuMmMwLTEuMi0uOS0yLTItMnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgc3RhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFjay5qcy5tYXAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhcixcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHR1c2VTZXR0aW5nLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0VG9vbGJhckdyb3VwLCBcblx0VG9vbGJhckJ1dHRvbixcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0d2l0aERpc3BhdGNoLFxuXHR1c2VTZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IFxuXHR1c2VFZmZlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgZ2V0QmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyByZXNpemVDb3JuZXJORSB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vKlxuICogVGhlIEVkaXQgRnVuY3Rpb24gQ29udGFpbmVyXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0cmVxdWVzdEVkaXQsXG5cdFx0bnVtYmVyLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdH0gPSB7fSBcblx0XHR9ID0ge30sXG5cdFx0YnJlYWtwb2ludERlZmluaXRpb25zXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRWZXJ0aWNhbEFsaWdubWVudCxcblx0c2V0UmVxdWVzdEVkaXQsXG5cdHNldFN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZFxufSkgPT4ge1xuXHRcblx0Ly9cblx0Ly8gR2V0IEluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IEJsb2NrLCBhbmQgaXRzIGNoaWxkcmVuIChVc2VkIGZvciBzZXR0aW5nIHRoZSBlZGl0b3Igc3RhY2tpbmcgb3JkZXIpLlxuXHQvL1xuXG5cdGNvbnN0IHtzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIGdyaWRBcmVhSWRzLCBpc1NlbGVjdGVkR3JpZEFyZWEsIGNoaWxkQmxvY2tzLCB0aGVtZVN1cHBvcnRzTGF5b3V0fSA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MsIGdldEJsb2NrT3JkZXIsIGdldEJsb2NrUm9vdENsaWVudElkLCBnZXRTZXR0aW5ncywgZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgeyBnZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBzZWxlY3QoJ2gybWwvZ3JpZF9hcmVhX3N0b3JlJyk7XG5cdFx0Ly8gVmFyaWFibGVzLlxuXHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tDbGllbnRJZCA9IGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpO1xuXHRcdGNvbnN0IHJvb3RJZCA9IGdldEJsb2NrUm9vdENsaWVudElkKGNsaWVudElkKTtcblx0XHRjb25zdCBjaGlsZEJsb2NrcyA9IGdldEJsb2NrcyhjbGllbnRJZCk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbSA9IGdldFNlbGVjdGVkR3JpZEFyZWEoKTtcblx0XHQvLyBSZXR1cm4gVmFsdWVzLlxuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RlZEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRjaGlsZEJsb2NrczogY2hpbGRCbG9ja3MubGVuZ3RoID8gY2hpbGRCbG9ja3MgOiBudWxsLFxuXHRcdFx0Z3JpZEFyZWFJZHM6IGdldEJsb2NrT3JkZXIocm9vdElkKSxcblx0XHRcdGlzU2VsZWN0ZWRHcmlkQXJlYTogc2VsZWN0ZWRHcmlkSXRlbT8ucGFyZW50cy5maW5kKHNlbGVjdGVkR3JpZEl0ZW0gPT4gc2VsZWN0ZWRHcmlkSXRlbS5jbGllbnRJZCA9PT0gY2xpZW50SWQpLFxuXHRcdFx0dGhlbWVTdXBwb3J0c0xheW91dDogZ2V0U2V0dGluZ3MoKT8uc3VwcG9ydHNMYXlvdXQsXG5cdFx0fTtcblx0fSwgW10pO1xuXHRcblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQgQXJlYSdzIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzLCBkZXRlcm1pbmUgaWYgdGhlcmUgYXJlIG9uZSBvciBtb3JlIGNoaWxkcmVuLiBcblx0Ly8gXG5cdC8vIElmIHRoZXJlIGlzIG9uZSwgYW5kIHRoYXQgaXMgYSBNZWRpYSBvciBhbiBFbWJlZCBibG9jayB0aGVuIHVwZGF0ZSB0aGUgY2hpbGQncyAnaDJtbENhbkZpbGxHcmlkQXJlYScgYXR0cmlidXRlIHRvIHRydWUsXG5cdC8vIGFsbG93aW5nIHRoZSBjaGlsZCB0byBjb3ZlciB0aGUgR3JpZCBBcmVhICh0aGlzIGlzIGFkZGVkIGluIG91ciBmaWx0ZXJzKS5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgbXVsdGlwbGUsIHNldCB0aGUgJ2gybWxDYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoY2hpbGRCbG9ja3M/Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2gybWxDYW5GaWxsR3JpZEFyZWE6IHRydWV9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYoY2hpbGRCbG9ja3MpIHsgXG5cdFx0XHRjaGlsZEJsb2Nrcy5mb3JFYWNoKGNoaWxkQmxvY2sgPT4ge1xuXHRcdFx0XHRjb25zdCB7Y2xpZW50SWQ6IGNoaWxkQ2xpZW50SWQsIG5hbWV9ID0gY2hpbGRCbG9jaztcblx0XHRcdFx0Y29uc3Qge2NhdGVnb3J5fSA9IGdldEJsb2NrVHlwZShuYW1lKTtcblx0XHRcdFx0aWYoWydtZWRpYScsICdlbWJlZCddLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyhjaGlsZENsaWVudElkLCB7aDJtbENhbkZpbGxHcmlkQXJlYTogZmFsc2V9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtjaGlsZEJsb2Nrc10pO1xuXG5cdC8vXG5cdC8vIFRoZSBHcmlkIEFyZWEgbGF5b3V0LlxuXHQvL1xuXG5cdGNvbnN0IGxheW91dCA9IHsgXG5cdFx0Li4udXNlU2V0dGluZygnbGF5b3V0JyksIFxuXHRcdHR5cGU6ICdmbGV4JywgXG5cdFx0b3JpZW50YXRpb246ICd2ZXJ0aWNhbCdcblx0fTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXHRcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0Y2xhc3NOYW1lOiBbYGgybWxHcmlkQXJlYSR7bnVtYmVyfWBdLFxuXHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGN1c3RvbUJhY2tncm91bmRDb2xvciA/IGN1c3RvbUJhY2tncm91bmRDb2xvciA6ICdudWxsJyxcblx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRBcmVhLnBhcnNlZCxcblx0XHRcdFx0ekluZGV4OiBpc1NlbGVjdGVkR3JpZEFyZWEgPyBpc1NlbGVjdGVkR3JpZEFyZWEuZWRpdG9yU3RhY2tpbmdPcmRlciA6IHN0YWNraW5nT3JkZXJcblx0XHRcdH0sXG5cdFx0XHQnYXJpYS1sYWJlbCc6IF9fKGBHcmlkLUFyZWEgKCR7Z3JpZEFyZWFJZHMuaW5kZXhPZihjbGllbnRJZCkgKyAxfSBvZiAke2dyaWRBcmVhSWRzLmxlbmd0aH0pYCwgJ2gybWwnKSxcblx0XHR9KSwge1xuXHRcdFx0cmVuZGVyQXBwZW5kZXI6IGNoaWxkQmxvY2tzXG5cdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdDogSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcixcblx0XHRcdF9fZXhwZXJpbWVudGFsTGF5b3V0OiB0aGVtZVN1cHBvcnRzTGF5b3V0ID8gbGF5b3V0IDogdW5kZWZpbmVkLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0VmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVzaXplIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzc2VkPXtyZXF1ZXN0RWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlcXVlc3RFZGl0KCFyZXF1ZXN0RWRpdCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oXCJHcmlkIEFyZWEgU2V0dGluZ3NcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aXNTaGlmdFN0ZXBFbmFibGVkID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge3NldFN0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdHNoaWZ0U3RlcCA9IHsxfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtzdGFja2luZ09yZGVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9uc1xuICovXG5cbmNvbnN0IEdyaWRBcmVhRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSBHcmlkIEFyZWEncyB2ZXJ0aWNhbCBhbGlnbm1lbnQgKFN0YXJ0LCBDZW50ZXIsIEVuZClcblx0XHQvL1xuXHRcdHNldFZlcnRpY2FsQWxpZ25tZW50KG5ld1ZlcnRpY2FsQWxpZ25tZW50KSB7XG5cdFx0XHRjb25zdCB7c2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdGNvbnN0IHZlcnRpY2FsQWxpZ25tZW50ID0gKCgpID0+IHtzd2l0Y2gobmV3VmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdFx0Y2FzZSAnY2VudGVyJzoge1xuXHRcdFx0XHRcdHJldHVybiAnY2VudGVyJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdib3R0b20nOiB7XG5cdFx0XHRcdFx0cmV0dXJuICdlbmQnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ3N0YXJ0Jztcblx0XHRcdFx0fVxuXHRcdFx0fX0pKCk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHt2ZXJ0aWNhbEFsaWdubWVudH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlICdyZXF1ZXN0RWRpdCcgYXR0cmlidXRlLCB0aGlzIGlzIHBpY2tlZCB1cCBieSB0aGUgcGFyZW50IEdyaWQgaW4gb3JkZXIgdG8gdXBkYXRlIHRoZSBHcmlkIEFyZWEncyBzaXplLlxuXHRcdC8vXG5cdFx0c2V0UmVxdWVzdEVkaXQodmFsdWUpIHtcblx0XHRcdGNvbnN0IHtjbGllbnRJZCwgc2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3JlcXVlc3RFZGl0OiB2YWx1ZX0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlICdzdGFja2luZ09yZGVyJyBhdHRyaWJ1dGUsIHRoaXMgZGV0ZXJtaW5lcyB0aGUgc2F2ZWQgei1pbmRleCBvZiBHcmlkIEFyZWEncyB3aXRoaW4gYSBHcmlkLlxuXHRcdC8vXG5cdFx0c2V0U3RhY2tpbmdPcmRlcihvcmRlcikge1xuXHRcdFx0Y29uc3Qge3NldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtzdGFja2luZ09yZGVyOiBOdW1iZXIob3JkZXIpfSk7XG5cdFx0fSxcblx0fSlcbikoR3JpZEFyZWFFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdChwcm9wcykge1xuXHRyZXR1cm4gPEdyaWRBcmVhRWRpdFdyYXBwZXIgey4uLnByb3BzfS8+O1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgc3RhY2sgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlXG59KTsiLCIvKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLCBcblx0dXNlQmxvY2tQcm9wc1xufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qXG4gKiBUaGUgU2F2ZSBGdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Z3JpZEFyZWE6IHtcblx0XHRcdHBhcnNlZDogZGVmYXVsdEdyaWRBcmVhXG5cdFx0fSxcblx0XHRzdGFja2luZ09yZGVyLFxuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGJhY2tncm91bmRDb2xvcixcblx0XHRzdHlsZToge1xuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0YmFja2dyb3VuZDogY3VzdG9tQmFja2dyb3VuZENvbG9yXG5cdFx0XHR9ID0ge30gXG5cdFx0fSA9IHt9LFxuXHRcdGJyZWFrcG9pbnREZWZpbml0aW9uc1xuXHR9XG59KSB7XG5cdGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IHZlcnRpY2FsQWxpZ25tZW50LCBcblx0XHRcdC4uLighYmFja2dyb3VuZENvbG9yICYmICh7YmFja2dyb3VuZENvbG9yOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3J9KSksXG5cdFx0XHRncmlkQXJlYTogZGVmYXVsdEdyaWRBcmVhLFxuXHRcdFx0ekluZGV4OiBzdGFja2luZ09yZGVyXG5cdFx0fSxcblx0XHQnZGF0YS1icmVha3BvaW50LWRlZmluaXRpb25zJzogT2JqZWN0LmtleXMoYnJlYWtwb2ludERlZmluaXRpb25zKSA/IGJ0b2EoSlNPTi5zdHJpbmdpZnkoT2JqZWN0LnZhbHVlcyhicmVha3BvaW50RGVmaW5pdGlvbnMpLnJlZHVjZSgocmVzLCBicmVha3BvaW50RGVmaW5pdGlvbikgPT4gKHtcblx0XHRcdC4uLnJlcyxcblx0XHRcdFtgJHticmVha3BvaW50RGVmaW5pdGlvbi5tZWRpYVF1ZXJ5fWBdOiB7XG5cdFx0XHRcdC4uLihicmVha3BvaW50RGVmaW5pdGlvbi5jb29yZHMgPyB7XG5cdFx0XHRcdFx0Z3JpZEFyZWE6IGJyZWFrcG9pbnREZWZpbml0aW9uLmNvb3Jkcyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCdcblx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZSdcblx0XHRcdFx0fSlcblx0XHRcdH1cdFxuXHRcdH0pLCB7fSkpKSA6IHVuZGVmaW5lZFxuICAgIH0pfSk7XG5cblx0cmV0dXJuIDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz47XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcIi4vc3R5bGUtaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoZnVuY3Rpb24oaWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tpZF0gIT09IDA7IH0pKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2thX2V4YW1wbGVfYmxvY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiLi9zdHlsZS1pbmRleFwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkJsb2NrQ29udHJvbHMiLCJCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciIsIkluc3BlY3RvckNvbnRyb2xzIiwiSW5uZXJCbG9ja3MiLCJ1c2VCbG9ja1Byb3BzIiwidXNlSW5uZXJCbG9ja3NQcm9wcyIsInVzZVNldHRpbmciLCJzdG9yZSIsImJsb2NrRWRpdG9yU3RvcmUiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlRvb2xiYXJHcm91cCIsIlRvb2xiYXJCdXR0b24iLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwid2l0aERpc3BhdGNoIiwidXNlU2VsZWN0IiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRCbG9ja1R5cGUiLCJyZXNpemVDb3JuZXJORSIsIl9fIiwiR3JpZEFyZWFFZGl0IiwiYXR0cmlidXRlcyIsInZlcnRpY2FsQWxpZ25tZW50IiwiZ3JpZEFyZWEiLCJzdGFja2luZ09yZGVyIiwicmVxdWVzdEVkaXQiLCJudW1iZXIiLCJzdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImN1c3RvbUJhY2tncm91bmRDb2xvciIsImJyZWFrcG9pbnREZWZpbml0aW9ucyIsInNldFZlcnRpY2FsQWxpZ25tZW50Iiwic2V0UmVxdWVzdEVkaXQiLCJzZXRTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJncmlkQXJlYUlkcyIsImlzU2VsZWN0ZWRHcmlkQXJlYSIsImNoaWxkQmxvY2tzIiwidGhlbWVTdXBwb3J0c0xheW91dCIsInNlbGVjdCIsImdldEJsb2NrcyIsImdldEJsb2NrT3JkZXIiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImdldFNldHRpbmdzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0U2VsZWN0ZWRHcmlkQXJlYSIsInJvb3RJZCIsInNlbGVjdGVkR3JpZEl0ZW0iLCJsZW5ndGgiLCJwYXJlbnRzIiwiZmluZCIsInN1cHBvcnRzTGF5b3V0IiwiZm9yRWFjaCIsImNoaWxkQmxvY2siLCJjaGlsZENsaWVudElkIiwibmFtZSIsImNhdGVnb3J5IiwiaW5jbHVkZXMiLCJ1cGRhdGVCbG9ja0F0dHJpYnV0ZXMiLCJoMm1sQ2FuRmlsbEdyaWRBcmVhIiwibGF5b3V0IiwidHlwZSIsIm9yaWVudGF0aW9uIiwiaW5uZXJCbG9ja3NQcm9wcyIsImNsYXNzTmFtZSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFyc2VkIiwiekluZGV4IiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImluZGV4T2YiLCJyZW5kZXJBcHBlbmRlciIsInVuZGVmaW5lZCIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJfX2V4cGVyaW1lbnRhbExheW91dCIsIkdyaWRBcmVhRWRpdFdyYXBwZXIiLCJvd25Qcm9wcyIsInJlZ2lzdHJ5IiwibmV3VmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWUiLCJvcmRlciIsIk51bWJlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwic3RhY2siLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiLCJkZWZhdWx0R3JpZEFyZWEiLCJPYmplY3QiLCJrZXlzIiwiYnRvYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJyZXMiLCJicmVha3BvaW50RGVmaW5pdGlvbiIsIm1lZGlhUXVlcnkiLCJjb29yZHMiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==