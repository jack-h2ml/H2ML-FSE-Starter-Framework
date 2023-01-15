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
      backgroundColor,
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
  // If there is one, and that is a Media or an Embed block then update the child's 'canFillGridArea' attribute to true,
  // allowing the child to cover the Grid Area (this is added in our filters).
  //
  // If there is multiple, set the 'canFillGridArea' attribute to false.
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
            canFillGridArea: true
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
            canFillGridArea: false
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
      backgroundColor: customBackgroundColor ? customBackgroundColor : backgroundColor,
      gridArea: gridArea.parsed,
      zIndex: isSelectedGridArea ? isSelectedGridArea.editorStackingOrder : stackingOrder
    },
    'aria-label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Grid-Area (${gridAreaIds.indexOf(clientId) + 1} of ${gridAreaIds.length})`, 'h2ml'),
    onKeyPress: e => {
      if (clientId === selectedBlockClientId) {
        e.stopPropagation();
        if (e.key === 'e' || e.key === 'E') setRequestEdit(!requestEdit);
      }
    }
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Grid Area Settings', 'h2ml'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Stacking Order', 'h2ml'),
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid-area","version":"0.1.0","title":"Grid Area","parent":["h2ml/grid"],"category":"design","description":"A single Grid Area within a Grid block.","textdomain":"h2ml","attributes":{"verticalAlignment":{"type":"string","default":"start"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"},"style":{"type":"object","default":{"color":{"background":null}}},"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false}},"supports":{"__experimentalSettings":true,"__experimentalLayout":{"allowSizingOnChildren":false},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"border","label":"Border"}],"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvcmVzaXplLWNvcm5lci1uLWUuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3N0YWNrLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvc2F2ZS5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcz9hZDJlIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdG9yLnNjc3M/ZDRhZSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL3N0eWxlLnNjc3M/NTYxMiIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFBhdGgsIFNWRyB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCByZXNpemVDb3JuZXJORSA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xMi41IDQuMnYxLjZoNC43TDUuOCAxNy4yVjEySDQuMnY3LjhIMTJ2LTEuNkg2LjhMMTguMiA2Ljh2NC43aDEuNlY0LjJ6XCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZUNvcm5lck5FO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzaXplLWNvcm5lci1uLWUuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBzdGFjayA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xNiA0djUuMmMwIC4zLS4yLjUtLjUuNWgtN2MtLjMuMS0uNS0uMi0uNS0uNVY0SDYuNXY1LjJjMCAxLjEuOSAyIDIgMmg3YzEuMSAwIDItLjkgMi0yVjRIMTZ6bS0uNSA4LjhoLTdjLTEuMSAwLTIgLjktMiAyVjIwSDh2LTUuMmMwLS4zLjItLjUuNS0uNWg3Yy4zIDAgLjUuMi41LjVWMjBoMS41di01LjJjMC0xLjItLjktMi0yLTJ6XCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IHN0YWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhY2suanMubWFwIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRJbm5lckJsb2Nrcyxcblx0dXNlQmxvY2tQcm9wcyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlU2V0dGluZyxcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZVxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFRvb2xiYXJHcm91cCwgXG5cdFRvb2xiYXJCdXR0b24sXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBnZXRCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IHJlc2l6ZUNvcm5lck5FIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuLypcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8qXG4gKiBUaGUgRWRpdCBGdW5jdGlvbiBDb250YWluZXJcbiAqL1xuXG5jb25zdCBHcmlkQXJlYUVkaXQgPSAoe1xuXHQvLyBBdHRyaWJ1dGVzLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0YmFja2dyb3VuZENvbG9yLFxuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0cmVxdWVzdEVkaXQsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fSxcblx0Ly8gQXR0cmlidXRlIFNldHRlcnMuXG5cdHNldFZlcnRpY2FsQWxpZ25tZW50LFxuXHRzZXRSZXF1ZXN0RWRpdCxcblx0c2V0U3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkLFxufSkgPT4ge1xuXG5cdC8vXG5cdC8vIEdldCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbiAoVXNlZCBmb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyKS5cblx0Ly9cblxuXHRjb25zdCB7c2VsZWN0ZWRCbG9ja0NsaWVudElkLCBncmlkQXJlYUlkcywgaXNTZWxlY3RlZEdyaWRBcmVhLCBjaGlsZEJsb2NrcywgdGhlbWVTdXBwb3J0c0xheW91dH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRCbG9ja09yZGVyLCBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgZ2V0U2VsZWN0ZWRHcmlkQXJlYSB9ID0gc2VsZWN0KCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCByb290SWQgPSBnZXRCbG9ja1Jvb3RDbGllbnRJZChjbGllbnRJZCk7XG5cdFx0Y29uc3QgY2hpbGRCbG9ja3MgPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW0gPSBnZXRTZWxlY3RlZEdyaWRBcmVhKCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRCbG9ja0NsaWVudElkLFxuXHRcdFx0Y2hpbGRCbG9ja3M6IGNoaWxkQmxvY2tzLmxlbmd0aCA/IGNoaWxkQmxvY2tzIDogbnVsbCxcblx0XHRcdGdyaWRBcmVhSWRzOiBnZXRCbG9ja09yZGVyKHJvb3RJZCksXG5cdFx0XHRpc1NlbGVjdGVkR3JpZEFyZWE6IHNlbGVjdGVkR3JpZEl0ZW0/LnBhcmVudHMuZmluZChzZWxlY3RlZEdyaWRJdGVtID0+IHNlbGVjdGVkR3JpZEl0ZW0uY2xpZW50SWQgPT09IGNsaWVudElkKSxcblx0XHRcdHRoZW1lU3VwcG9ydHNMYXlvdXQ6IGdldFNldHRpbmdzKCk/LnN1cHBvcnRzTGF5b3V0LFxuXHRcdH07XG5cdH0sIFtdKTtcblx0XG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgbnVtYmVyIG9mIGNoaWxkcmVuIGNoYW5nZXMsIGRldGVybWluZSBpZiB0aGVyZSBhcmUgb25lIG9yIG1vcmUgY2hpbGRyZW4uIFxuXHQvLyBcblx0Ly8gSWYgdGhlcmUgaXMgb25lLCBhbmQgdGhhdCBpcyBhIE1lZGlhIG9yIGFuIEVtYmVkIGJsb2NrIHRoZW4gdXBkYXRlIHRoZSBjaGlsZCdzICdjYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byB0cnVlLFxuXHQvLyBhbGxvd2luZyB0aGUgY2hpbGQgdG8gY292ZXIgdGhlIEdyaWQgQXJlYSAodGhpcyBpcyBhZGRlZCBpbiBvdXIgZmlsdGVycykuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIG11bHRpcGxlLCBzZXQgdGhlICdjYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoY2hpbGRCbG9ja3M/Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2NhbkZpbGxHcmlkQXJlYTogdHJ1ZX0pO1x0XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZihjaGlsZEJsb2NrcykgeyBcblx0XHRcdGNoaWxkQmxvY2tzLmZvckVhY2goY2hpbGRCbG9jayA9PiB7XG5cdFx0XHRcdGNvbnN0IHtjbGllbnRJZDogY2hpbGRDbGllbnRJZCwgbmFtZX0gPSBjaGlsZEJsb2NrO1xuXHRcdFx0XHRjb25zdCB7Y2F0ZWdvcnl9ID0gZ2V0QmxvY2tUeXBlKG5hbWUpO1xuXHRcdFx0XHRpZihbJ21lZGlhJywgJ2VtYmVkJ10uaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKGNoaWxkQ2xpZW50SWQsIHtjYW5GaWxsR3JpZEFyZWE6IGZhbHNlfSk7XHRcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbY2hpbGRCbG9ja3NdKVxuXG5cdC8vXG5cdC8vIFRoZSBHcmlkIEFyZWEgbGF5b3V0LlxuXHQvL1xuXG5cdGNvbnN0IGxheW91dCA9IHsgXG5cdFx0Li4udXNlU2V0dGluZygnbGF5b3V0JyksIFxuXHRcdHR5cGU6ICdmbGV4JywgXG5cdFx0b3JpZW50YXRpb246ICd2ZXJ0aWNhbCdcblx0fTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXHRcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHRcdCF0aGVtZVN1cHBvcnRzTGF5b3V0ID8gJ3dwLWJsb2NrLWdyb3VwX19pbm5lci1jb250YWluZXInIDogbnVsbCxcblx0XHRcdF0sXG5cdFx0XHRzdHlsZToge1xuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogdmVydGljYWxBbGlnbm1lbnQsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY3VzdG9tQmFja2dyb3VuZENvbG9yID8gY3VzdG9tQmFja2dyb3VuZENvbG9yIDogYmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRncmlkQXJlYTogZ3JpZEFyZWEucGFyc2VkLFxuXHRcdFx0XHR6SW5kZXg6IGlzU2VsZWN0ZWRHcmlkQXJlYSA/IGlzU2VsZWN0ZWRHcmlkQXJlYS5lZGl0b3JTdGFja2luZ09yZGVyIDogc3RhY2tpbmdPcmRlclxuXHRcdFx0fSxcblx0XHRcdCdhcmlhLWxhYmVsJzogX18oYEdyaWQtQXJlYSAoJHtncmlkQXJlYUlkcy5pbmRleE9mKGNsaWVudElkKSArIDF9IG9mICR7Z3JpZEFyZWFJZHMubGVuZ3RofSlgLCAnaDJtbCcpLFxuXHRcdFx0b25LZXlQcmVzczogKGUpID0+IHtcblx0XHRcdFx0aWYoY2xpZW50SWQgPT09IHNlbGVjdGVkQmxvY2tDbGllbnRJZCkge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKGUua2V5ID09PSAnZScgfHwgZS5rZXkgPT09ICdFJykgc2V0UmVxdWVzdEVkaXQoIXJlcXVlc3RFZGl0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KSwge1xuXHRcdFx0cmVuZGVyQXBwZW5kZXI6IGNoaWxkQmxvY2tzXG5cdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdDogSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcixcblx0XHRcdF9fZXhwZXJpbWVudGFsTGF5b3V0OiB0aGVtZVN1cHBvcnRzTGF5b3V0ID8gbGF5b3V0IDogdW5kZWZpbmVkLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0VmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVzaXplIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzc2VkPXtyZXF1ZXN0RWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlcXVlc3RFZGl0KCFyZXF1ZXN0RWRpdCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0dyaWQgQXJlYSBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3RhY2tpbmcgT3JkZXInLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7c2V0U3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0ge3N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLypcbiAqIFRoZSBCbG9jayBBY3Rpb25zXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0V3JhcHBlciA9IHdpdGhEaXNwYXRjaChcblx0KGRpc3BhdGNoLCBvd25Qcm9wcywgcmVnaXN0cnkpID0+ICh7XG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgQXJlYSdzIHZlcnRpY2FsIGFsaWdubWVudCAoU3RhcnQsIENlbnRlciwgRW5kKVxuXHRcdC8vXG5cdFx0c2V0VmVydGljYWxBbGlnbm1lbnQobmV3VmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSAoKCkgPT4ge3N3aXRjaChuZXdWZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0XHRjYXNlICdjZW50ZXInOiB7XG5cdFx0XHRcdFx0cmV0dXJuICdjZW50ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ2JvdHRvbSc6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ2VuZCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9fSkoKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3ZlcnRpY2FsQWxpZ25tZW50fSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUsIHRoaXMgaXMgcGlja2VkIHVwIGJ5IHRoZSBwYXJlbnQgR3JpZCBpbiBvcmRlciB0byB1cGRhdGUgdGhlIEdyaWQgQXJlYSdzIHNpemUuXG5cdFx0Ly9cblx0XHRzZXRSZXF1ZXN0RWRpdCh2YWx1ZSkge1xuXHRcdFx0Y29uc3Qge2NsaWVudElkLCBzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7cmVxdWVzdEVkaXQ6IHZhbHVlfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3N0YWNraW5nT3JkZXInIGF0dHJpYnV0ZSwgdGhpcyBkZXRlcm1pbmVzIHRoZSBzYXZlZCB6LWluZGV4IG9mIEdyaWQgQXJlYSdzIHdpdGhpbiBhIEdyaWQuXG5cdFx0Ly9cblx0XHRzZXRTdGFja2luZ09yZGVyKG9yZGVyKSB7XG5cdFx0XHRjb25zdCB7c2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3N0YWNraW5nT3JkZXI6IE51bWJlcihvcmRlcil9KTtcblx0XHR9LFxuXHR9KVxuKShHcmlkQXJlYUVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHByb3BzKSB7XG5cdHJldHVybiA8R3JpZEFyZWFFZGl0V3JhcHBlciB7Li4ucHJvcHN9Lz47XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyBzdGFjayBhcyBpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8qKlxuICogU3R5bGVcbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlXG59KTsiLCIvKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHVzZUlubmVyQmxvY2tzUHJvcHMsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qXG4gKiBUaGUgU2F2ZSBGdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Z3JpZEFyZWEsXG5cdFx0c3RhY2tpbmdPcmRlcixcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fVxufSkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKHtcbiAgICAgICAgc3R5bGU6IHtcblx0XHRcdGp1c3RpZnlDb250ZW50OiB2ZXJ0aWNhbEFsaWdubWVudCwgXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGN1c3RvbUJhY2tncm91bmRDb2xvciA/IGN1c3RvbUJhY2tncm91bmRDb2xvciA6IGJhY2tncm91bmRDb2xvcixcblx0XHRcdGdyaWRBcmVhOiBncmlkQXJlYS5wYXJzZWQsXG5cdFx0XHR6SW5kZXg6IHN0YWNraW5nT3JkZXJcblx0XHR9LFxuICAgIH0pfSk7XG5cblx0cmV0dXJuIDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz47XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtrYV9leGFtcGxlX2Jsb2NrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJJbm5lckJsb2NrcyIsInVzZUJsb2NrUHJvcHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlU2V0dGluZyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiVG9vbGJhckdyb3VwIiwiVG9vbGJhckJ1dHRvbiIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldEJsb2NrVHlwZSIsInJlc2l6ZUNvcm5lck5FIiwiX18iLCJHcmlkQXJlYUVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmlkQXJlYSIsInN0YWNraW5nT3JkZXIiLCJyZXF1ZXN0RWRpdCIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY3VzdG9tQmFja2dyb3VuZENvbG9yIiwic2V0VmVydGljYWxBbGlnbm1lbnQiLCJzZXRSZXF1ZXN0RWRpdCIsInNldFN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdyaWRBcmVhSWRzIiwiaXNTZWxlY3RlZEdyaWRBcmVhIiwiY2hpbGRCbG9ja3MiLCJ0aGVtZVN1cHBvcnRzTGF5b3V0Iiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0QmxvY2tPcmRlciIsImdldEJsb2NrUm9vdENsaWVudElkIiwiZ2V0U2V0dGluZ3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwicm9vdElkIiwic2VsZWN0ZWRHcmlkSXRlbSIsImxlbmd0aCIsInBhcmVudHMiLCJmaW5kIiwic3VwcG9ydHNMYXlvdXQiLCJmb3JFYWNoIiwiY2hpbGRCbG9jayIsImNoaWxkQ2xpZW50SWQiLCJuYW1lIiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImNhbkZpbGxHcmlkQXJlYSIsImxheW91dCIsInR5cGUiLCJvcmllbnRhdGlvbiIsImlubmVyQmxvY2tzUHJvcHMiLCJjbGFzc05hbWUiLCJqdXN0aWZ5Q29udGVudCIsInBhcnNlZCIsInpJbmRleCIsImVkaXRvclN0YWNraW5nT3JkZXIiLCJpbmRleE9mIiwib25LZXlQcmVzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJyZW5kZXJBcHBlbmRlciIsInVuZGVmaW5lZCIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJfX2V4cGVyaW1lbnRhbExheW91dCIsIkdyaWRBcmVhRWRpdFdyYXBwZXIiLCJvd25Qcm9wcyIsInJlZ2lzdHJ5IiwibmV3VmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWUiLCJvcmRlciIsIk51bWJlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwic3RhY2siLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9