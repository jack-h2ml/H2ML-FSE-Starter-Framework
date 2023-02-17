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
  console.log(backgroundColor, customBackgroundColor);
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        justifyContent: verticalAlignment,
        ...(!customBackgroundColor && {
          backgroundColor: 'red'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDa0Q7QUFDbEQsdUJBQXVCLGlFQUFhLENBQUMsc0RBQUc7QUFDeEM7QUFDQTtBQUNBLENBQUMsRUFBRSxpRUFBYSxDQUFDLHVEQUFJO0FBQ3JCO0FBQ0EsQ0FBQztBQUNELCtEQUFlLGNBQWMsRUFBQztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDYm1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDa0Q7QUFDbEQsY0FBYyxpRUFBYSxDQUFDLHNEQUFHO0FBQy9CO0FBQ0E7QUFDQSxDQUFDLEVBQUUsaUVBQWEsQ0FBQyx1REFBSTtBQUNyQjtBQUNBLENBQUM7QUFDRCwrREFBZSxLQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztBQVdpQztBQVFGO0FBTU47QUFJRztBQUVxQjtBQUVDO0FBRWI7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNc0IsWUFBWSxHQUFHLFFBcUJmO0VBQUEsSUFyQmdCO0lBQ3JCO0lBQ0FDLFVBQVUsRUFBRTtNQUNYQyxpQkFBaUI7TUFDakJDLFFBQVE7TUFDUkMsYUFBYTtNQUNiQyxXQUFXO01BQ1hDLE1BQU07TUFDTkMsS0FBSyxFQUFFO1FBQ05DLEtBQUssRUFBRTtVQUNOQyxVQUFVLEVBQUVDO1FBQ2IsQ0FBQyxHQUFHLENBQUM7TUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ05DO0lBQ0QsQ0FBQztJQUNEO0lBQ0FDLG9CQUFvQjtJQUNwQkMsY0FBYztJQUNkQyxnQkFBZ0I7SUFDaEI7SUFDQUM7RUFDRCxDQUFDO0VBRUE7RUFDQTtFQUNBOztFQUVBLE1BQU07SUFBQ0MscUJBQXFCO0lBQUVDLFdBQVc7SUFBRUMsa0JBQWtCO0lBQUVDLFdBQVc7SUFBRUM7RUFBbUIsQ0FBQyxHQUFHMUIsMERBQVMsQ0FBRTJCLE1BQU0sSUFBSztJQUN4SDtJQUNBLE1BQU07TUFBRUMsU0FBUztNQUFFQyxhQUFhO01BQUVDLG9CQUFvQjtNQUFFQyxXQUFXO01BQUVDO0lBQXlCLENBQUMsR0FBR0wsTUFBTSxDQUFDbkMsMERBQWdCLENBQUM7SUFDMUgsTUFBTTtNQUFFeUM7SUFBb0IsQ0FBQyxHQUFHTixNQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDOUQ7SUFDQSxNQUFNTCxxQkFBcUIsR0FBR1Usd0JBQXdCLEVBQUU7SUFDeEQsTUFBTUUsTUFBTSxHQUFHSixvQkFBb0IsQ0FBQ1QsUUFBUSxDQUFDO0lBQzdDLE1BQU1JLFdBQVcsR0FBR0csU0FBUyxDQUFDUCxRQUFRLENBQUM7SUFDdkMsTUFBTWMsZ0JBQWdCLEdBQUdGLG1CQUFtQixFQUFFO0lBQzlDO0lBQ0EsT0FBTztNQUNOWCxxQkFBcUI7TUFDckJHLFdBQVcsRUFBRUEsV0FBVyxDQUFDVyxNQUFNLEdBQUdYLFdBQVcsR0FBRyxJQUFJO01BQ3BERixXQUFXLEVBQUVNLGFBQWEsQ0FBQ0ssTUFBTSxDQUFDO01BQ2xDVixrQkFBa0IsRUFBRVcsZ0JBQWdCLEVBQUVFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSCxnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUNkLFFBQVEsS0FBS0EsUUFBUSxDQUFDO01BQzlHSyxtQkFBbUIsRUFBRUssV0FBVyxFQUFFLEVBQUVRO0lBQ3JDLENBQUM7RUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDOztFQUVOO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFyQyw2REFBUyxDQUFDLE1BQU07SUFDZixJQUFHdUIsV0FBVyxFQUFFVyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzdCWCxXQUFXLENBQUNlLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJO1FBQ2pDLE1BQU07VUFBQ3BCLFFBQVEsRUFBRXFCLGFBQWE7VUFBRUM7UUFBSSxDQUFDLEdBQUdGLFVBQVU7UUFDbEQsTUFBTTtVQUFDRztRQUFRLENBQUMsR0FBR3pDLCtEQUFZLENBQUN3QyxJQUFJLENBQUM7UUFDckMsSUFBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQ0UsUUFBUSxDQUFDRCxRQUFRLENBQUMsRUFBRTtVQUN6QzNDLHlEQUFRLENBQUNULDBEQUFnQixDQUFDLENBQUNzRCxxQkFBcUIsQ0FBQ0osYUFBYSxFQUFFO1lBQUNLLG1CQUFtQixFQUFFO1VBQUksQ0FBQyxDQUFDO1FBQzdGO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxNQUFNLElBQUd0QixXQUFXLEVBQUU7TUFDdEJBLFdBQVcsQ0FBQ2UsT0FBTyxDQUFDQyxVQUFVLElBQUk7UUFDakMsTUFBTTtVQUFDcEIsUUFBUSxFQUFFcUIsYUFBYTtVQUFFQztRQUFJLENBQUMsR0FBR0YsVUFBVTtRQUNsRCxNQUFNO1VBQUNHO1FBQVEsQ0FBQyxHQUFHekMsK0RBQVksQ0FBQ3dDLElBQUksQ0FBQztRQUNyQyxJQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDRSxRQUFRLENBQUNELFFBQVEsQ0FBQyxFQUFFO1VBQ3pDM0MseURBQVEsQ0FBQ1QsMERBQWdCLENBQUMsQ0FBQ3NELHFCQUFxQixDQUFDSixhQUFhLEVBQUU7WUFBQ0ssbUJBQW1CLEVBQUU7VUFBSyxDQUFDLENBQUM7UUFDOUY7TUFDRCxDQUFDLENBQUM7SUFDSDtFQUNELENBQUMsRUFBRSxDQUFDdEIsV0FBVyxDQUFDLENBQUM7O0VBRWpCO0VBQ0E7RUFDQTs7RUFFQSxNQUFNdUIsTUFBTSxHQUFHO0lBQ2QsR0FBRzFELG1FQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3ZCMkQsSUFBSSxFQUFFLE1BQU07SUFDWkMsV0FBVyxFQUFFO0VBQ2QsQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7O0VBRUEsTUFBTUMsZ0JBQWdCLEdBQUc5RCw0RUFBbUIsQ0FDM0NELHNFQUFhLENBQUM7SUFDYmdFLFNBQVMsRUFBRSxDQUFFLGVBQWN4QyxNQUFPLEVBQUMsQ0FBQztJQUNwQ0MsS0FBSyxFQUFFO01BQ053QyxjQUFjLEVBQUU3QyxpQkFBaUI7TUFDakM4QyxlQUFlLEVBQUV0QyxxQkFBcUIsR0FBR0EscUJBQXFCLEdBQUcsTUFBTTtNQUN2RVAsUUFBUSxFQUFFQSxRQUFRLENBQUM4QyxNQUFNO01BQ3pCQyxNQUFNLEVBQUVoQyxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUNpQyxtQkFBbUIsR0FBRy9DO0lBQ3ZFLENBQUM7SUFDRCxZQUFZLEVBQUVMLG1EQUFFLENBQUUsY0FBYWtCLFdBQVcsQ0FBQ21DLE9BQU8sQ0FBQ3JDLFFBQVEsQ0FBQyxHQUFHLENBQUUsT0FBTUUsV0FBVyxDQUFDYSxNQUFPLEdBQUUsRUFBRSxNQUFNO0VBQ3JHLENBQUMsQ0FBQyxFQUFFO0lBQ0h1QixjQUFjLEVBQUVsQyxXQUFXLEdBQ3hCbUMsU0FBUyxHQUNUekUsb0ZBQStCO0lBQ2xDMkUsb0JBQW9CLEVBQUVwQyxtQkFBbUIsR0FBR3NCLE1BQU0sR0FBR1k7RUFDdEQsQ0FBQyxDQUNEOztFQUVEO0VBQ0E7RUFDQTs7RUFFQSxPQUNDLGtJQUNDLGtFQUFDLGtFQUFhLFFBQ2Isa0VBQUMsa0ZBQTZCO0lBQzdCLEtBQUssRUFBRXBELGlCQUFrQjtJQUN6QixRQUFRLEVBQUVVO0VBQXFCLEVBQzlCLEVBQ1Usa0VBQUMsK0RBQVksUUFDVCxrRUFBQyxnRUFBYTtJQUNWLElBQUksRUFBRWQsd0RBQWU7SUFDckIsS0FBSyxFQUFFQyxtREFBRSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBRTtJQUN0QyxTQUFTLEVBQUVNLFdBQVk7SUFDdkIsT0FBTyxFQUFFLE1BQU1RLGNBQWMsQ0FBQyxDQUFDUixXQUFXO0VBQUUsRUFDOUMsQ0FDUyxDQUNaLEVBQ2hCLGtFQUFDLHNFQUFpQixRQUNqQixrRUFBQyx3REFBSyxRQUNMLGtFQUFDLDREQUFTO0lBQUMsS0FBSyxFQUFHTixtREFBRSxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBRTtJQUFDLFdBQVcsRUFBRTtFQUFLLEdBQ3RFLGtFQUFDLDhFQUFhO0lBQ2IsS0FBSyxFQUFFQSxtREFBRSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBRTtJQUNwQyxrQkFBa0IsRUFBSSxJQUFLO0lBQzNCLFFBQVEsRUFBSWUsZ0JBQWlCO0lBQzdCLFNBQVMsRUFBSSxDQUFFO0lBQ2YsS0FBSyxFQUFJVjtFQUFjLEVBQ3RCLENBQ1MsQ0FDTCxDQUNXLEVBQ3BCLHlFQUFTeUMsZ0JBQWdCLENBQUcsQ0FDMUI7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNWSxtQkFBbUIsR0FBR2hFLDZEQUFZLENBQ3ZDLENBQUNFLFFBQVEsRUFBRStELFFBQVEsRUFBRUMsUUFBUSxNQUFNO0VBQ2xDO0VBQ0E7RUFDQTtFQUNBL0Msb0JBQW9CLENBQUNnRCxvQkFBb0IsRUFBRTtJQUMxQyxNQUFNO01BQUNDO0lBQWEsQ0FBQyxHQUFHSCxRQUFRO0lBQ2hDLE1BQU14RCxpQkFBaUIsR0FBRyxDQUFDLE1BQU07TUFBQyxRQUFPMEQsb0JBQW9CO1FBQzVELEtBQUssUUFBUTtVQUFFO1lBQ2QsT0FBTyxRQUFRO1VBQ2hCO1FBQ0EsS0FBSyxRQUFRO1VBQUU7WUFDZCxPQUFPLEtBQUs7VUFDYjtRQUNBO1VBQVM7WUFDUixPQUFPLE9BQU87VUFDZjtNQUFDO0lBQ0QsQ0FBQyxHQUFHO0lBQ0xDLGFBQWEsQ0FBQztNQUFDM0Q7SUFBaUIsQ0FBQyxDQUFDO0VBQ25DLENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQVcsY0FBYyxDQUFDaUQsS0FBSyxFQUFFO0lBQ3JCLE1BQU07TUFBQy9DLFFBQVE7TUFBRThDO0lBQWEsQ0FBQyxHQUFHSCxRQUFRO0lBQzFDRyxhQUFhLENBQUM7TUFBQ3hELFdBQVcsRUFBRXlEO0lBQUssQ0FBQyxDQUFDO0VBQ3BDLENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQWhELGdCQUFnQixDQUFDaUQsS0FBSyxFQUFFO0lBQ3ZCLE1BQU07TUFBQ0Y7SUFBYSxDQUFDLEdBQUdILFFBQVE7SUFDaENHLGFBQWEsQ0FBQztNQUFDekQsYUFBYSxFQUFFNEQsTUFBTSxDQUFDRCxLQUFLO0lBQUMsQ0FBQyxDQUFDO0VBQzlDO0FBQ0QsQ0FBQyxDQUFDLENBQ0YsQ0FBQy9ELFlBQVksQ0FBQztBQUVBLFNBQVNpRSxJQUFJLENBQUNDLEtBQUssRUFBRTtFQUNuQyxPQUFPLGtFQUFDLG1CQUFtQixFQUFLQSxLQUFLLENBQUc7QUFDekM7QUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09EO0FBQ0E7QUFDQTs7QUFFc0Q7QUFFTDs7QUFFakQ7QUFDQTtBQUNBOztBQUVzQjs7QUFFdEI7QUFDQTtBQUNBOztBQUV1QztBQUNiO0FBQ0E7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQUMsb0VBQWlCLENBQUNHLDZDQUFhLEVBQUU7RUFDaENELElBQUk7RUFDSkcsSUFBSSxFQUFFUCw2Q0FBSTtFQUNWUSxJQUFJLEVBQUVGLDZDQUFJQTtBQUNYLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRjtBQUNBO0FBQ0E7O0FBS2lDOztBQUVqQztBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBSSxPQWV6QjtFQUFBLElBZjBCO0lBQzVCdEUsVUFBVSxFQUFFO01BQ1hFLFFBQVEsRUFBRTtRQUNUOEMsTUFBTSxFQUFFeUI7TUFDVCxDQUFDO01BQ0R0RSxhQUFhO01BQ2JGLGlCQUFpQjtNQUNqQjhDLGVBQWU7TUFDZnpDLEtBQUssRUFBRTtRQUNOQyxLQUFLLEVBQUU7VUFDTkMsVUFBVSxFQUFFQztRQUNiLENBQUMsR0FBRyxDQUFDO01BQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNOQztJQUNEO0VBQ0QsQ0FBQztFQUNBZ0UsT0FBTyxDQUFDQyxHQUFHLENBQUM1QixlQUFlLEVBQUV0QyxxQkFBcUIsQ0FBQztFQUNuRCxNQUFNbUMsZ0JBQWdCLEdBQUc5RCw2RUFBd0IsQ0FBQztJQUFFLEdBQUdELHVFQUFrQixDQUFDO01BQ25FeUIsS0FBSyxFQUFFO1FBQ1p3QyxjQUFjLEVBQUU3QyxpQkFBaUI7UUFDakMsSUFBSSxDQUFDUSxxQkFBcUIsSUFBSztVQUFDc0MsZUFBZSxFQUFFO1FBQUssQ0FBRSxDQUFDO1FBQ3pEN0MsUUFBUSxFQUFFdUUsZUFBZTtRQUN6QnhCLE1BQU0sRUFBRTlDO01BQ1QsQ0FBQztNQUNELDZCQUE2QixFQUFFeUUsTUFBTSxDQUFDQyxJQUFJLENBQUNuRSxxQkFBcUIsQ0FBQyxHQUFHb0UsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osTUFBTSxDQUFDSyxNQUFNLENBQUN2RSxxQkFBcUIsQ0FBQyxDQUFDd0UsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsb0JBQW9CLE1BQU07UUFDbkssR0FBR0QsR0FBRztRQUNOLENBQUUsR0FBRUMsb0JBQW9CLENBQUNDLFVBQVcsRUFBQyxHQUFHO1VBQ3ZDLElBQUlELG9CQUFvQixDQUFDRSxNQUFNLEdBQUc7WUFDakNwRixRQUFRLEVBQUVrRixvQkFBb0IsQ0FBQ0UsTUFBTTtZQUNyQ0MsT0FBTyxFQUFFO1VBQ1YsQ0FBQyxHQUFHO1lBQ0hBLE9BQU8sRUFBRTtVQUNWLENBQUM7UUFDRjtNQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHbEM7SUFDVixDQUFDO0VBQUMsQ0FBQyxDQUFDO0VBRVAsT0FBTyx5RUFBU1QsZ0JBQWdCLENBQUc7QUFDcEM7Ozs7Ozs7Ozs7O0FDbkRBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkMsb0hBQW9ILGlEQUFpRDtXQUNySztXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBLDJGQUEyRiwrQ0FBK0M7VUFDMUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvcmVzaXplLWNvcm5lci1uLWUuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3N0YWNrLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvc2F2ZS5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCByZXNpemVDb3JuZXJORSA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xMi41IDQuMnYxLjZoNC43TDUuOCAxNy4yVjEySDQuMnY3LjhIMTJ2LTEuNkg2LjhMMTguMiA2Ljh2NC43aDEuNlY0LjJ6XCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZUNvcm5lck5FO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzaXplLWNvcm5lci1uLWUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBzdGFjayA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xNiA0djUuMmMwIC4zLS4yLjUtLjUuNWgtN2MtLjMuMS0uNS0uMi0uNS0uNVY0SDYuNXY1LjJjMCAxLjEuOSAyIDIgMmg3YzEuMSAwIDItLjkgMi0yVjRIMTZ6bS0uNSA4LjhoLTdjLTEuMSAwLTIgLjktMiAyVjIwSDh2LTUuMmMwLS4zLjItLjUuNS0uNWg3Yy4zIDAgLjUuMi41LjVWMjBoMS41di01LjJjMC0xLjItLjktMi0yLTJ6XCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHN0YWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhY2suanMubWFwIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcblx0dXNlQmxvY2tQcm9wcyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlU2V0dGluZyxcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZVxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFRvb2xiYXJHcm91cCwgXG5cdFRvb2xiYXJCdXR0b24sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBcblx0dXNlRWZmZWN0XG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IGdldEJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgcmVzaXplQ29ybmVyTkUgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLypcbiAqIFRoZSBFZGl0IEZ1bmN0aW9uIENvbnRhaW5lclxuICovXG5cbmNvbnN0IEdyaWRBcmVhRWRpdCA9ICh7XG5cdC8vIEF0dHJpYnV0ZXMuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRncmlkQXJlYSxcblx0XHRzdGFja2luZ09yZGVyLFxuXHRcdHJlcXVlc3RFZGl0LFxuXHRcdG51bWJlcixcblx0XHRzdHlsZToge1xuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0YmFja2dyb3VuZDogY3VzdG9tQmFja2dyb3VuZENvbG9yXG5cdFx0XHR9ID0ge30gXG5cdFx0fSA9IHt9LFxuXHRcdGJyZWFrcG9pbnREZWZpbml0aW9uc1xuXHR9LFxuXHQvLyBBdHRyaWJ1dGUgU2V0dGVycy5cblx0c2V0VmVydGljYWxBbGlnbm1lbnQsXG5cdHNldFJlcXVlc3RFZGl0LFxuXHRzZXRTdGFja2luZ09yZGVyLFxuXHQvLyBPdGhlci5cblx0Y2xpZW50SWRcbn0pID0+IHtcblx0XG5cdC8vXG5cdC8vIEdldCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbiAoVXNlZCBmb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyKS5cblx0Ly9cblxuXHRjb25zdCB7c2VsZWN0ZWRCbG9ja0NsaWVudElkLCBncmlkQXJlYUlkcywgaXNTZWxlY3RlZEdyaWRBcmVhLCBjaGlsZEJsb2NrcywgdGhlbWVTdXBwb3J0c0xheW91dH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRCbG9ja09yZGVyLCBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgZ2V0U2VsZWN0ZWRHcmlkQXJlYSB9ID0gc2VsZWN0KCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCByb290SWQgPSBnZXRCbG9ja1Jvb3RDbGllbnRJZChjbGllbnRJZCk7XG5cdFx0Y29uc3QgY2hpbGRCbG9ja3MgPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW0gPSBnZXRTZWxlY3RlZEdyaWRBcmVhKCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRCbG9ja0NsaWVudElkLFxuXHRcdFx0Y2hpbGRCbG9ja3M6IGNoaWxkQmxvY2tzLmxlbmd0aCA/IGNoaWxkQmxvY2tzIDogbnVsbCxcblx0XHRcdGdyaWRBcmVhSWRzOiBnZXRCbG9ja09yZGVyKHJvb3RJZCksXG5cdFx0XHRpc1NlbGVjdGVkR3JpZEFyZWE6IHNlbGVjdGVkR3JpZEl0ZW0/LnBhcmVudHMuZmluZChzZWxlY3RlZEdyaWRJdGVtID0+IHNlbGVjdGVkR3JpZEl0ZW0uY2xpZW50SWQgPT09IGNsaWVudElkKSxcblx0XHRcdHRoZW1lU3VwcG9ydHNMYXlvdXQ6IGdldFNldHRpbmdzKCk/LnN1cHBvcnRzTGF5b3V0LFxuXHRcdH07XG5cdH0sIFtdKTtcblx0XG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkIEFyZWEncyBudW1iZXIgb2YgY2hpbGRyZW4gY2hhbmdlcywgZGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBvbmUgb3IgbW9yZSBjaGlsZHJlbi4gXG5cdC8vIFxuXHQvLyBJZiB0aGVyZSBpcyBvbmUsIGFuZCB0aGF0IGlzIGEgTWVkaWEgb3IgYW4gRW1iZWQgYmxvY2sgdGhlbiB1cGRhdGUgdGhlIGNoaWxkJ3MgJ2gybWxDYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byB0cnVlLFxuXHQvLyBhbGxvd2luZyB0aGUgY2hpbGQgdG8gY292ZXIgdGhlIEdyaWQgQXJlYSAodGhpcyBpcyBhZGRlZCBpbiBvdXIgZmlsdGVycykuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIG11bHRpcGxlLCBzZXQgdGhlICdoMm1sQ2FuRmlsbEdyaWRBcmVhJyBhdHRyaWJ1dGUgdG8gZmFsc2UuXG5cdC8vXG5cdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKGNoaWxkQmxvY2tzPy5sZW5ndGggPT09IDEpIHtcblx0XHRcdGNoaWxkQmxvY2tzLmZvckVhY2goY2hpbGRCbG9jayA9PiB7XG5cdFx0XHRcdGNvbnN0IHtjbGllbnRJZDogY2hpbGRDbGllbnRJZCwgbmFtZX0gPSBjaGlsZEJsb2NrO1xuXHRcdFx0XHRjb25zdCB7Y2F0ZWdvcnl9ID0gZ2V0QmxvY2tUeXBlKG5hbWUpO1xuXHRcdFx0XHRpZihbJ21lZGlhJywgJ2VtYmVkJ10uaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKGNoaWxkQ2xpZW50SWQsIHtoMm1sQ2FuRmlsbEdyaWRBcmVhOiB0cnVlfSk7XHRcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmKGNoaWxkQmxvY2tzKSB7IFxuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2gybWxDYW5GaWxsR3JpZEFyZWE6IGZhbHNlfSk7XHRcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbY2hpbGRCbG9ja3NdKTtcblxuXHQvL1xuXHQvLyBUaGUgR3JpZCBBcmVhIGxheW91dC5cblx0Ly9cblxuXHRjb25zdCBsYXlvdXQgPSB7IFxuXHRcdC4uLnVzZVNldHRpbmcoJ2xheW91dCcpLCBcblx0XHR0eXBlOiAnZmxleCcsIFxuXHRcdG9yaWVudGF0aW9uOiAndmVydGljYWwnXG5cdH07XG5cblx0Ly9cblx0Ly8gUmVnaXN0ZXIgdGhlIEJsb2NrIC8gSW5uZXJCbG9jayBQcm9wcy5cblx0Ly9cblx0XG5cdGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzKCBcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdGNsYXNzTmFtZTogW2BoMm1sR3JpZEFyZWEke251bWJlcn1gXSxcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiB2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgOiAnbnVsbCcsXG5cdFx0XHRcdGdyaWRBcmVhOiBncmlkQXJlYS5wYXJzZWQsXG5cdFx0XHRcdHpJbmRleDogaXNTZWxlY3RlZEdyaWRBcmVhID8gaXNTZWxlY3RlZEdyaWRBcmVhLmVkaXRvclN0YWNraW5nT3JkZXIgOiBzdGFja2luZ09yZGVyXG5cdFx0XHR9LFxuXHRcdFx0J2FyaWEtbGFiZWwnOiBfXyhgR3JpZC1BcmVhICgke2dyaWRBcmVhSWRzLmluZGV4T2YoY2xpZW50SWQpICsgMX0gb2YgJHtncmlkQXJlYUlkcy5sZW5ndGh9KWAsICdoMm1sJyksXG5cdFx0fSksIHtcblx0XHRcdHJlbmRlckFwcGVuZGVyOiBjaGlsZEJsb2Nrc1xuXHRcdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0XHQ6IElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIsXG5cdFx0XHRfX2V4cGVyaW1lbnRhbExheW91dDogdGhlbWVTdXBwb3J0c0xheW91dCA/IGxheW91dCA6IHVuZGVmaW5lZCxcblx0XHR9XG5cdCk7XG5cblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblx0XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHQ8QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHR2YWx1ZT17dmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHQvPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtyZXNpemVDb3JuZXJORX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIlJlc2l6ZSBHcmlkIEFyZWFcIiwgJ2gybWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJlc3NlZD17cmVxdWVzdEVkaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSZXF1ZXN0RWRpdCghcmVxdWVzdEVkaXQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVG9vbGJhckdyb3VwPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKFwiR3JpZCBBcmVhIFNldHRpbmdzXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlN0YWNraW5nIE9yZGVyXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdGlzU2hpZnRTdGVwRW5hYmxlZCA9IHt0cnVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZSA9IHtzZXRTdGFja2luZ09yZGVyfVxuXHRcdFx0XHRcdFx0XHRzaGlmdFN0ZXAgPSB7MX1cblx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7c3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30vPlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vKlxuICogVGhlIEJsb2NrIEFjdGlvbnNcbiAqL1xuXG5jb25zdCBHcmlkQXJlYUVkaXRXcmFwcGVyID0gd2l0aERpc3BhdGNoKFxuXHQoZGlzcGF0Y2gsIG93blByb3BzLCByZWdpc3RyeSkgPT4gKHtcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgR3JpZCBBcmVhJ3MgdmVydGljYWwgYWxpZ25tZW50IChTdGFydCwgQ2VudGVyLCBFbmQpXG5cdFx0Ly9cblx0XHRzZXRWZXJ0aWNhbEFsaWdubWVudChuZXdWZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0Y29uc3Qge3NldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRjb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9ICgoKSA9PiB7c3dpdGNoKG5ld1ZlcnRpY2FsQWxpZ25tZW50KSB7XG5cdFx0XHRcdGNhc2UgJ2NlbnRlcic6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ2NlbnRlcic7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnYm90dG9tJzoge1xuXHRcdFx0XHRcdHJldHVybiAnZW5kJztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdFx0cmV0dXJuICdzdGFydCc7XG5cdFx0XHRcdH1cblx0XHRcdH19KSgpO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7dmVydGljYWxBbGlnbm1lbnR9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSAncmVxdWVzdEVkaXQnIGF0dHJpYnV0ZSwgdGhpcyBpcyBwaWNrZWQgdXAgYnkgdGhlIHBhcmVudCBHcmlkIGluIG9yZGVyIHRvIHVwZGF0ZSB0aGUgR3JpZCBBcmVhJ3Mgc2l6ZS5cblx0XHQvL1xuXHRcdHNldFJlcXVlc3RFZGl0KHZhbHVlKSB7XG5cdFx0XHRjb25zdCB7Y2xpZW50SWQsIHNldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtyZXF1ZXN0RWRpdDogdmFsdWV9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSAnc3RhY2tpbmdPcmRlcicgYXR0cmlidXRlLCB0aGlzIGRldGVybWluZXMgdGhlIHNhdmVkIHotaW5kZXggb2YgR3JpZCBBcmVhJ3Mgd2l0aGluIGEgR3JpZC5cblx0XHQvL1xuXHRcdHNldFN0YWNraW5nT3JkZXIob3JkZXIpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7c3RhY2tpbmdPcmRlcjogTnVtYmVyKG9yZGVyKX0pO1xuXHRcdH0sXG5cdH0pXG4pKEdyaWRBcmVhRWRpdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkQXJlYUVkaXRXcmFwcGVyIHsuLi5wcm9wc30vPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IHN0YWNrIGFzIGljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcblxuLyoqXG4gKiBTdHlsZVxuICovXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBCbG9ja1xuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcblx0aWNvbixcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogU2F2ZVxufSk7IiwiLypcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBcblx0dXNlSW5uZXJCbG9ja3NQcm9wcywgXG5cdHVzZUJsb2NrUHJvcHNcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG4vKlxuICogVGhlIFNhdmUgRnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlKHtcblx0YXR0cmlidXRlczoge1xuXHRcdGdyaWRBcmVhOiB7XG5cdFx0XHRwYXJzZWQ6IGRlZmF1bHRHcmlkQXJlYVxuXHRcdH0sXG5cdFx0c3RhY2tpbmdPcmRlcixcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSxcblx0XHRicmVha3BvaW50RGVmaW5pdGlvbnNcblx0fVxufSkge1xuXHRjb25zb2xlLmxvZyhiYWNrZ3JvdW5kQ29sb3IsIGN1c3RvbUJhY2tncm91bmRDb2xvcik7XG5cdGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IHZlcnRpY2FsQWxpZ25tZW50LCBcblx0XHRcdC4uLighY3VzdG9tQmFja2dyb3VuZENvbG9yICYmICh7YmFja2dyb3VuZENvbG9yOiAncmVkJ30pKSxcblx0XHRcdGdyaWRBcmVhOiBkZWZhdWx0R3JpZEFyZWEsXG5cdFx0XHR6SW5kZXg6IHN0YWNraW5nT3JkZXJcblx0XHR9LFxuXHRcdCdkYXRhLWJyZWFrcG9pbnQtZGVmaW5pdGlvbnMnOiBPYmplY3Qua2V5cyhicmVha3BvaW50RGVmaW5pdGlvbnMpID8gYnRvYShKU09OLnN0cmluZ2lmeShPYmplY3QudmFsdWVzKGJyZWFrcG9pbnREZWZpbml0aW9ucykucmVkdWNlKChyZXMsIGJyZWFrcG9pbnREZWZpbml0aW9uKSA9PiAoe1xuXHRcdFx0Li4ucmVzLFxuXHRcdFx0W2Ake2JyZWFrcG9pbnREZWZpbml0aW9uLm1lZGlhUXVlcnl9YF06IHtcblx0XHRcdFx0Li4uKGJyZWFrcG9pbnREZWZpbml0aW9uLmNvb3JkcyA/IHtcblx0XHRcdFx0XHRncmlkQXJlYTogYnJlYWtwb2ludERlZmluaXRpb24uY29vcmRzLFxuXHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4J1xuXHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdGRpc3BsYXk6ICdub25lJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fVx0XG5cdFx0fSksIHt9KSkpIDogdW5kZWZpbmVkXG4gICAgfSl9KTtcblxuXHRyZXR1cm4gPGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30vPjtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwiLi9zdHlsZS1pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtrYV9leGFtcGxlX2Jsb2NrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJJbm5lckJsb2NrcyIsInVzZUJsb2NrUHJvcHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlU2V0dGluZyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiVG9vbGJhckdyb3VwIiwiVG9vbGJhckJ1dHRvbiIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldEJsb2NrVHlwZSIsInJlc2l6ZUNvcm5lck5FIiwiX18iLCJHcmlkQXJlYUVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJncmlkQXJlYSIsInN0YWNraW5nT3JkZXIiLCJyZXF1ZXN0RWRpdCIsIm51bWJlciIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY3VzdG9tQmFja2dyb3VuZENvbG9yIiwiYnJlYWtwb2ludERlZmluaXRpb25zIiwic2V0VmVydGljYWxBbGlnbm1lbnQiLCJzZXRSZXF1ZXN0RWRpdCIsInNldFN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdyaWRBcmVhSWRzIiwiaXNTZWxlY3RlZEdyaWRBcmVhIiwiY2hpbGRCbG9ja3MiLCJ0aGVtZVN1cHBvcnRzTGF5b3V0Iiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0QmxvY2tPcmRlciIsImdldEJsb2NrUm9vdENsaWVudElkIiwiZ2V0U2V0dGluZ3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwicm9vdElkIiwic2VsZWN0ZWRHcmlkSXRlbSIsImxlbmd0aCIsInBhcmVudHMiLCJmaW5kIiwic3VwcG9ydHNMYXlvdXQiLCJmb3JFYWNoIiwiY2hpbGRCbG9jayIsImNoaWxkQ2xpZW50SWQiLCJuYW1lIiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImgybWxDYW5GaWxsR3JpZEFyZWEiLCJsYXlvdXQiLCJ0eXBlIiwib3JpZW50YXRpb24iLCJpbm5lckJsb2Nrc1Byb3BzIiwiY2xhc3NOYW1lIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJzZWQiLCJ6SW5kZXgiLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiaW5kZXhPZiIsInJlbmRlckFwcGVuZGVyIiwidW5kZWZpbmVkIiwiQnV0dG9uQmxvY2tBcHBlbmRlciIsIl9fZXhwZXJpbWVudGFsTGF5b3V0IiwiR3JpZEFyZWFFZGl0V3JhcHBlciIsIm93blByb3BzIiwicmVnaXN0cnkiLCJuZXdWZXJ0aWNhbEFsaWdubWVudCIsInNldEF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm9yZGVyIiwiTnVtYmVyIiwiRWRpdCIsInByb3BzIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJzdGFjayIsImljb24iLCJtZXRhZGF0YSIsIlNhdmUiLCJlZGl0Iiwic2F2ZSIsImRlZmF1bHRHcmlkQXJlYSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiYnRvYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJyZXMiLCJicmVha3BvaW50RGVmaW5pdGlvbiIsIm1lZGlhUXVlcnkiLCJjb29yZHMiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==