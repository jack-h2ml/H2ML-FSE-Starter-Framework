/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/stack.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/stack.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stack);
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
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
      style: {
        color: {
          background: customBackgroundColor
        } = {}
      } = {}
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
  // If the Grid's number of children changes, determine if there are one or more children. 
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
    className: [!themeSupportsLayout ? 'wp-block-group__inner-container' : null],
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/stack.js");
/* harmony import */ var _common_styles_grid_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../common/styles/grid-styles/style.scss */ "../../common/styles/grid-styles/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../block.json */ "./block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
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
      gridArea,
      stackingOrder,
      verticalAlignment,
      backgroundColor,
      style: {
        color: {
          background: customBackgroundColor
        } = {}
      } = {}
    }
  } = _ref;
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        justifyContent: verticalAlignment,
        backgroundColor: customBackgroundColor ? customBackgroundColor : backgroundColor,
        gridArea: gridArea.parsed,
        zIndex: stackingOrder
      }
    })
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "../../common/styles/grid-styles/style.scss":
/*!**************************************************!*\
  !*** ../../common/styles/grid-styles/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid-area","version":"0.1.0","title":"Grid Area","parent":["h2ml/grid"],"category":"design","description":"A single Grid Area within a Grid block.","textdomain":"h2ml","attributes":{"verticalAlignment":{"type":"string","default":"start"},"style":{"type":"object","default":{"color":{"background":null}}},"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false}},"supports":{"__experimentalSettings":true,"__experimentalLayout":{"allowSizingOnChildren":false},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"border","label":"Border"}],"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
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
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3Jlc2l6ZS1jb3JuZXItbi1lLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9zdGFjay5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL2VkaXQuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL3NhdmUuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBQYXRoLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgcmVzaXplQ29ybmVyTkUgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTIuNSA0LjJ2MS42aDQuN0w1LjggMTcuMlYxMkg0LjJ2Ny44SDEydi0xLjZINi44TDE4LjIgNi44djQuN2gxLjZWNC4yelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCByZXNpemVDb3JuZXJORTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2l6ZS1jb3JuZXItbi1lLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3Qgc3RhY2sgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTYgNHY1LjJjMCAuMy0uMi41LS41LjVoLTdjLS4zLjEtLjUtLjItLjUtLjVWNEg2LjV2NS4yYzAgMS4xLjkgMiAyIDJoN2MxLjEgMCAyLS45IDItMlY0SDE2em0tLjUgOC44aC03Yy0xLjEgMC0yIC45LTIgMlYyMEg4di01LjJjMC0uMy4yLS41LjUtLjVoN2MuMyAwIC41LjIuNS41VjIwaDEuNXYtNS4yYzAtMS4yLS45LTItMi0yelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBzdGFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YWNrLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZVNldHRpbmcsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmVcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRUb29sYmFyR3JvdXAsIFxuXHRUb29sYmFyQnV0dG9uLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHR3aXRoRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgZ2V0QmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyByZXNpemVDb3JuZXJORSB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vKlxuICogVGhlIEVkaXQgRnVuY3Rpb24gQ29udGFpbmVyXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0cmVxdWVzdEVkaXQsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fSxcblx0Ly8gQXR0cmlidXRlIFNldHRlcnMuXG5cdHNldFZlcnRpY2FsQWxpZ25tZW50LFxuXHRzZXRSZXF1ZXN0RWRpdCxcblx0c2V0U3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkLFxufSkgPT4ge1xuXG5cdC8vXG5cdC8vIEdldCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbiAoVXNlZCBmb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyKS5cblx0Ly9cblxuXHRjb25zdCB7c2VsZWN0ZWRCbG9ja0NsaWVudElkLCBncmlkQXJlYUlkcywgaXNTZWxlY3RlZEdyaWRBcmVhLCBjaGlsZEJsb2NrcywgdGhlbWVTdXBwb3J0c0xheW91dH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRCbG9ja09yZGVyLCBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgZ2V0U2VsZWN0ZWRHcmlkQXJlYSB9ID0gc2VsZWN0KCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCByb290SWQgPSBnZXRCbG9ja1Jvb3RDbGllbnRJZChjbGllbnRJZCk7XG5cdFx0Y29uc3QgY2hpbGRCbG9ja3MgPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW0gPSBnZXRTZWxlY3RlZEdyaWRBcmVhKCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRCbG9ja0NsaWVudElkLFxuXHRcdFx0Y2hpbGRCbG9ja3M6IGNoaWxkQmxvY2tzLmxlbmd0aCA/IGNoaWxkQmxvY2tzIDogbnVsbCxcblx0XHRcdGdyaWRBcmVhSWRzOiBnZXRCbG9ja09yZGVyKHJvb3RJZCksXG5cdFx0XHRpc1NlbGVjdGVkR3JpZEFyZWE6IHNlbGVjdGVkR3JpZEl0ZW0/LnBhcmVudHMuZmluZChzZWxlY3RlZEdyaWRJdGVtID0+IHNlbGVjdGVkR3JpZEl0ZW0uY2xpZW50SWQgPT09IGNsaWVudElkKSxcblx0XHRcdHRoZW1lU3VwcG9ydHNMYXlvdXQ6IGdldFNldHRpbmdzKCk/LnN1cHBvcnRzTGF5b3V0LFxuXHRcdH07XG5cdH0sIFtdKTtcblx0XG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgbnVtYmVyIG9mIGNoaWxkcmVuIGNoYW5nZXMsIGRldGVybWluZSBpZiB0aGVyZSBhcmUgb25lIG9yIG1vcmUgY2hpbGRyZW4uIFxuXHQvLyBcblx0Ly8gSWYgdGhlcmUgaXMgb25lLCBhbmQgdGhhdCBpcyBhIE1lZGlhIG9yIGFuIEVtYmVkIGJsb2NrIHRoZW4gdXBkYXRlIHRoZSBjaGlsZCdzICdoMm1sQ2FuRmlsbEdyaWRBcmVhJyBhdHRyaWJ1dGUgdG8gdHJ1ZSxcblx0Ly8gYWxsb3dpbmcgdGhlIGNoaWxkIHRvIGNvdmVyIHRoZSBHcmlkIEFyZWEgKHRoaXMgaXMgYWRkZWQgaW4gb3VyIGZpbHRlcnMpLlxuXHQvL1xuXHQvLyBJZiB0aGVyZSBpcyBtdWx0aXBsZSwgc2V0IHRoZSAnaDJtbENhbkZpbGxHcmlkQXJlYScgYXR0cmlidXRlIHRvIGZhbHNlLlxuXHQvL1xuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZihjaGlsZEJsb2Nrcz8ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjaGlsZEJsb2Nrcy5mb3JFYWNoKGNoaWxkQmxvY2sgPT4ge1xuXHRcdFx0XHRjb25zdCB7Y2xpZW50SWQ6IGNoaWxkQ2xpZW50SWQsIG5hbWV9ID0gY2hpbGRCbG9jaztcblx0XHRcdFx0Y29uc3Qge2NhdGVnb3J5fSA9IGdldEJsb2NrVHlwZShuYW1lKTtcblx0XHRcdFx0aWYoWydtZWRpYScsICdlbWJlZCddLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyhjaGlsZENsaWVudElkLCB7aDJtbENhbkZpbGxHcmlkQXJlYTogdHJ1ZX0pO1x0XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZihjaGlsZEJsb2NrcykgeyBcblx0XHRcdGNoaWxkQmxvY2tzLmZvckVhY2goY2hpbGRCbG9jayA9PiB7XG5cdFx0XHRcdGNvbnN0IHtjbGllbnRJZDogY2hpbGRDbGllbnRJZCwgbmFtZX0gPSBjaGlsZEJsb2NrO1xuXHRcdFx0XHRjb25zdCB7Y2F0ZWdvcnl9ID0gZ2V0QmxvY2tUeXBlKG5hbWUpO1xuXHRcdFx0XHRpZihbJ21lZGlhJywgJ2VtYmVkJ10uaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKGNoaWxkQ2xpZW50SWQsIHtoMm1sQ2FuRmlsbEdyaWRBcmVhOiBmYWxzZX0pO1x0XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW2NoaWxkQmxvY2tzXSlcblxuXHQvL1xuXHQvLyBUaGUgR3JpZCBBcmVhIGxheW91dC5cblx0Ly9cblxuXHRjb25zdCBsYXlvdXQgPSB7IFxuXHRcdC4uLnVzZVNldHRpbmcoJ2xheW91dCcpLCBcblx0XHR0eXBlOiAnZmxleCcsIFxuXHRcdG9yaWVudGF0aW9uOiAndmVydGljYWwnXG5cdH07XG5cblx0Ly9cblx0Ly8gUmVnaXN0ZXIgdGhlIEJsb2NrIC8gSW5uZXJCbG9jayBQcm9wcy5cblx0Ly9cblx0XG5cdGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzKCBcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdGNsYXNzTmFtZTogW1xuXHRcdFx0XHQhdGhlbWVTdXBwb3J0c0xheW91dCA/ICd3cC1ibG9jay1ncm91cF9faW5uZXItY29udGFpbmVyJyA6IG51bGwsXG5cdFx0XHRdLFxuXHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGN1c3RvbUJhY2tncm91bmRDb2xvciA/IGN1c3RvbUJhY2tncm91bmRDb2xvciA6ICdudWxsJyxcblx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRBcmVhLnBhcnNlZCxcblx0XHRcdFx0ekluZGV4OiBpc1NlbGVjdGVkR3JpZEFyZWEgPyBpc1NlbGVjdGVkR3JpZEFyZWEuZWRpdG9yU3RhY2tpbmdPcmRlciA6IHN0YWNraW5nT3JkZXJcblx0XHRcdH0sXG5cdFx0XHQnYXJpYS1sYWJlbCc6IF9fKGBHcmlkLUFyZWEgKCR7Z3JpZEFyZWFJZHMuaW5kZXhPZihjbGllbnRJZCkgKyAxfSBvZiAke2dyaWRBcmVhSWRzLmxlbmd0aH0pYCwgJ2gybWwnKSxcblx0XHR9KSwge1xuXHRcdFx0cmVuZGVyQXBwZW5kZXI6IGNoaWxkQmxvY2tzXG5cdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdDogSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcixcblx0XHRcdF9fZXhwZXJpbWVudGFsTGF5b3V0OiB0aGVtZVN1cHBvcnRzTGF5b3V0ID8gbGF5b3V0IDogdW5kZWZpbmVkLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0VmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVzaXplIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzc2VkPXtyZXF1ZXN0RWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlcXVlc3RFZGl0KCFyZXF1ZXN0RWRpdCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oXCJHcmlkIEFyZWEgU2V0dGluZ3NcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aXNTaGlmdFN0ZXBFbmFibGVkID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge3NldFN0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdHNoaWZ0U3RlcCA9IHsxfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtzdGFja2luZ09yZGVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9uc1xuICovXG5cbmNvbnN0IEdyaWRBcmVhRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSBHcmlkIEFyZWEncyB2ZXJ0aWNhbCBhbGlnbm1lbnQgKFN0YXJ0LCBDZW50ZXIsIEVuZClcblx0XHQvL1xuXHRcdHNldFZlcnRpY2FsQWxpZ25tZW50KG5ld1ZlcnRpY2FsQWxpZ25tZW50KSB7XG5cdFx0XHRjb25zdCB7c2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdGNvbnN0IHZlcnRpY2FsQWxpZ25tZW50ID0gKCgpID0+IHtzd2l0Y2gobmV3VmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdFx0Y2FzZSAnY2VudGVyJzoge1xuXHRcdFx0XHRcdHJldHVybiAnY2VudGVyJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdib3R0b20nOiB7XG5cdFx0XHRcdFx0cmV0dXJuICdlbmQnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ3N0YXJ0Jztcblx0XHRcdFx0fVxuXHRcdFx0fX0pKCk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHt2ZXJ0aWNhbEFsaWdubWVudH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlICdyZXF1ZXN0RWRpdCcgYXR0cmlidXRlLCB0aGlzIGlzIHBpY2tlZCB1cCBieSB0aGUgcGFyZW50IEdyaWQgaW4gb3JkZXIgdG8gdXBkYXRlIHRoZSBHcmlkIEFyZWEncyBzaXplLlxuXHRcdC8vXG5cdFx0c2V0UmVxdWVzdEVkaXQodmFsdWUpIHtcblx0XHRcdGNvbnN0IHtjbGllbnRJZCwgc2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3JlcXVlc3RFZGl0OiB2YWx1ZX0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlICdzdGFja2luZ09yZGVyJyBhdHRyaWJ1dGUsIHRoaXMgZGV0ZXJtaW5lcyB0aGUgc2F2ZWQgei1pbmRleCBvZiBHcmlkIEFyZWEncyB3aXRoaW4gYSBHcmlkLlxuXHRcdC8vXG5cdFx0c2V0U3RhY2tpbmdPcmRlcihvcmRlcikge1xuXHRcdFx0Y29uc3Qge3NldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtzdGFja2luZ09yZGVyOiBOdW1iZXIob3JkZXIpfSk7XG5cdFx0fSxcblx0fSlcbikoR3JpZEFyZWFFZGl0KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdChwcm9wcykge1xuXHRyZXR1cm4gPEdyaWRBcmVhRWRpdFdyYXBwZXIgey4uLnByb3BzfS8+O1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgc3RhY2sgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBCbG9ja1xuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcblx0aWNvbixcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogU2F2ZVxufSk7IiwiLypcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyB1c2VJbm5lckJsb2Nrc1Byb3BzLCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG4vKlxuICogVGhlIFNhdmUgRnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlKHtcblx0YXR0cmlidXRlczoge1xuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0YmFja2dyb3VuZENvbG9yLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdH0gPSB7fSBcblx0XHR9ID0ge30gXG5cdH1cbn0pIHtcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMuc2F2ZSh7IC4uLnVzZUJsb2NrUHJvcHMuc2F2ZSh7XG4gICAgICAgIHN0eWxlOiB7XG5cdFx0XHRqdXN0aWZ5Q29udGVudDogdmVydGljYWxBbGlnbm1lbnQsIFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgOiBiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRncmlkQXJlYTogZ3JpZEFyZWEucGFyc2VkLFxuXHRcdFx0ekluZGV4OiBzdGFja2luZ09yZGVyXG5cdFx0fSxcbiAgICB9KX0pO1xuXG5cdHJldHVybiA8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+O1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwiLi9zdHlsZS1pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2thX2V4YW1wbGVfYmxvY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiLi9zdHlsZS1pbmRleFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIkJsb2NrQ29udHJvbHMiLCJCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciIsIkluc3BlY3RvckNvbnRyb2xzIiwiSW5uZXJCbG9ja3MiLCJ1c2VCbG9ja1Byb3BzIiwidXNlSW5uZXJCbG9ja3NQcm9wcyIsInVzZVNldHRpbmciLCJzdG9yZSIsImJsb2NrRWRpdG9yU3RvcmUiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlRvb2xiYXJHcm91cCIsIlRvb2xiYXJCdXR0b24iLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwid2l0aERpc3BhdGNoIiwidXNlU2VsZWN0IiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRCbG9ja1R5cGUiLCJyZXNpemVDb3JuZXJORSIsIl9fIiwiR3JpZEFyZWFFZGl0IiwiYXR0cmlidXRlcyIsInZlcnRpY2FsQWxpZ25tZW50IiwiZ3JpZEFyZWEiLCJzdGFja2luZ09yZGVyIiwicmVxdWVzdEVkaXQiLCJzdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImN1c3RvbUJhY2tncm91bmRDb2xvciIsInNldFZlcnRpY2FsQWxpZ25tZW50Iiwic2V0UmVxdWVzdEVkaXQiLCJzZXRTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJncmlkQXJlYUlkcyIsImlzU2VsZWN0ZWRHcmlkQXJlYSIsImNoaWxkQmxvY2tzIiwidGhlbWVTdXBwb3J0c0xheW91dCIsInNlbGVjdCIsImdldEJsb2NrcyIsImdldEJsb2NrT3JkZXIiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImdldFNldHRpbmdzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0U2VsZWN0ZWRHcmlkQXJlYSIsInJvb3RJZCIsInNlbGVjdGVkR3JpZEl0ZW0iLCJsZW5ndGgiLCJwYXJlbnRzIiwiZmluZCIsInN1cHBvcnRzTGF5b3V0IiwiZm9yRWFjaCIsImNoaWxkQmxvY2siLCJjaGlsZENsaWVudElkIiwibmFtZSIsImNhdGVnb3J5IiwiaW5jbHVkZXMiLCJ1cGRhdGVCbG9ja0F0dHJpYnV0ZXMiLCJoMm1sQ2FuRmlsbEdyaWRBcmVhIiwibGF5b3V0IiwidHlwZSIsIm9yaWVudGF0aW9uIiwiaW5uZXJCbG9ja3NQcm9wcyIsImNsYXNzTmFtZSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFyc2VkIiwiekluZGV4IiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImluZGV4T2YiLCJyZW5kZXJBcHBlbmRlciIsInVuZGVmaW5lZCIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJfX2V4cGVyaW1lbnRhbExheW91dCIsIkdyaWRBcmVhRWRpdFdyYXBwZXIiLCJvd25Qcm9wcyIsInJlZ2lzdHJ5IiwibmV3VmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWUiLCJvcmRlciIsIk51bWJlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwic3RhY2siLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9