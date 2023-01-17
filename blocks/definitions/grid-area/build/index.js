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
      backgroundColor: customBackgroundColor ? customBackgroundColor : 'null',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L3Jlc2l6ZS1jb3JuZXItbi1lLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9zdGFjay5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL2VkaXQuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL3NhdmUuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBQYXRoLCBTVkcgfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgcmVzaXplQ29ybmVyTkUgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTIuNSA0LjJ2MS42aDQuN0w1LjggMTcuMlYxMkg0LjJ2Ny44SDEydi0xLjZINi44TDE4LjIgNi44djQuN2gxLjZWNC4yelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCByZXNpemVDb3JuZXJORTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2l6ZS1jb3JuZXItbi1lLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3Qgc3RhY2sgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTYgNHY1LjJjMCAuMy0uMi41LS41LjVoLTdjLS4zLjEtLjUtLjItLjUtLjVWNEg2LjV2NS4yYzAgMS4xLjkgMiAyIDJoN2MxLjEgMCAyLS45IDItMlY0SDE2em0tLjUgOC44aC03Yy0xLjEgMC0yIC45LTIgMlYyMEg4di01LjJjMC0uMy4yLS41LjUtLjVoN2MuMyAwIC41LjIuNS41VjIwaDEuNXYtNS4yYzAtMS4yLS45LTItMi0yelwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBzdGFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YWNrLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0SW5uZXJCbG9ja3MsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZVNldHRpbmcsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmVcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRUb29sYmFyR3JvdXAsIFxuXHRUb29sYmFyQnV0dG9uLFxuXHRfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wgYXMgTnVtYmVyQ29udHJvbFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHR3aXRoRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgZ2V0QmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyByZXNpemVDb3JuZXJORSB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vKlxuICogVGhlIEVkaXQgRnVuY3Rpb24gQ29udGFpbmVyXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0cmVxdWVzdEVkaXQsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fSxcblx0Ly8gQXR0cmlidXRlIFNldHRlcnMuXG5cdHNldFZlcnRpY2FsQWxpZ25tZW50LFxuXHRzZXRSZXF1ZXN0RWRpdCxcblx0c2V0U3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkLFxufSkgPT4ge1xuXG5cdC8vXG5cdC8vIEdldCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbiAoVXNlZCBmb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyKS5cblx0Ly9cblxuXHRjb25zdCB7c2VsZWN0ZWRCbG9ja0NsaWVudElkLCBncmlkQXJlYUlkcywgaXNTZWxlY3RlZEdyaWRBcmVhLCBjaGlsZEJsb2NrcywgdGhlbWVTdXBwb3J0c0xheW91dH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRCbG9ja09yZGVyLCBnZXRCbG9ja1Jvb3RDbGllbnRJZCwgZ2V0U2V0dGluZ3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgZ2V0U2VsZWN0ZWRHcmlkQXJlYSB9ID0gc2VsZWN0KCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCByb290SWQgPSBnZXRCbG9ja1Jvb3RDbGllbnRJZChjbGllbnRJZCk7XG5cdFx0Y29uc3QgY2hpbGRCbG9ja3MgPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW0gPSBnZXRTZWxlY3RlZEdyaWRBcmVhKCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRCbG9ja0NsaWVudElkLFxuXHRcdFx0Y2hpbGRCbG9ja3M6IGNoaWxkQmxvY2tzLmxlbmd0aCA/IGNoaWxkQmxvY2tzIDogbnVsbCxcblx0XHRcdGdyaWRBcmVhSWRzOiBnZXRCbG9ja09yZGVyKHJvb3RJZCksXG5cdFx0XHRpc1NlbGVjdGVkR3JpZEFyZWE6IHNlbGVjdGVkR3JpZEl0ZW0/LnBhcmVudHMuZmluZChzZWxlY3RlZEdyaWRJdGVtID0+IHNlbGVjdGVkR3JpZEl0ZW0uY2xpZW50SWQgPT09IGNsaWVudElkKSxcblx0XHRcdHRoZW1lU3VwcG9ydHNMYXlvdXQ6IGdldFNldHRpbmdzKCk/LnN1cHBvcnRzTGF5b3V0LFxuXHRcdH07XG5cdH0sIFtdKTtcblx0XG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgbnVtYmVyIG9mIGNoaWxkcmVuIGNoYW5nZXMsIGRldGVybWluZSBpZiB0aGVyZSBhcmUgb25lIG9yIG1vcmUgY2hpbGRyZW4uIFxuXHQvLyBcblx0Ly8gSWYgdGhlcmUgaXMgb25lLCBhbmQgdGhhdCBpcyBhIE1lZGlhIG9yIGFuIEVtYmVkIGJsb2NrIHRoZW4gdXBkYXRlIHRoZSBjaGlsZCdzICdjYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byB0cnVlLFxuXHQvLyBhbGxvd2luZyB0aGUgY2hpbGQgdG8gY292ZXIgdGhlIEdyaWQgQXJlYSAodGhpcyBpcyBhZGRlZCBpbiBvdXIgZmlsdGVycykuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIG11bHRpcGxlLCBzZXQgdGhlICdjYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoY2hpbGRCbG9ja3M/Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2NhbkZpbGxHcmlkQXJlYTogdHJ1ZX0pO1x0XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZihjaGlsZEJsb2NrcykgeyBcblx0XHRcdGNoaWxkQmxvY2tzLmZvckVhY2goY2hpbGRCbG9jayA9PiB7XG5cdFx0XHRcdGNvbnN0IHtjbGllbnRJZDogY2hpbGRDbGllbnRJZCwgbmFtZX0gPSBjaGlsZEJsb2NrO1xuXHRcdFx0XHRjb25zdCB7Y2F0ZWdvcnl9ID0gZ2V0QmxvY2tUeXBlKG5hbWUpO1xuXHRcdFx0XHRpZihbJ21lZGlhJywgJ2VtYmVkJ10uaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSkudXBkYXRlQmxvY2tBdHRyaWJ1dGVzKGNoaWxkQ2xpZW50SWQsIHtjYW5GaWxsR3JpZEFyZWE6IGZhbHNlfSk7XHRcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbY2hpbGRCbG9ja3NdKVxuXG5cdC8vXG5cdC8vIFRoZSBHcmlkIEFyZWEgbGF5b3V0LlxuXHQvL1xuXG5cdGNvbnN0IGxheW91dCA9IHsgXG5cdFx0Li4udXNlU2V0dGluZygnbGF5b3V0JyksIFxuXHRcdHR5cGU6ICdmbGV4JywgXG5cdFx0b3JpZW50YXRpb246ICd2ZXJ0aWNhbCdcblx0fTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXHRcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHRcdCF0aGVtZVN1cHBvcnRzTGF5b3V0ID8gJ3dwLWJsb2NrLWdyb3VwX19pbm5lci1jb250YWluZXInIDogbnVsbCxcblx0XHRcdF0sXG5cdFx0XHRzdHlsZToge1xuXHRcdFx0XHRqdXN0aWZ5Q29udGVudDogdmVydGljYWxBbGlnbm1lbnQsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogY3VzdG9tQmFja2dyb3VuZENvbG9yID8gY3VzdG9tQmFja2dyb3VuZENvbG9yIDogJ251bGwnLFxuXHRcdFx0XHRncmlkQXJlYTogZ3JpZEFyZWEucGFyc2VkLFxuXHRcdFx0XHR6SW5kZXg6IGlzU2VsZWN0ZWRHcmlkQXJlYSA/IGlzU2VsZWN0ZWRHcmlkQXJlYS5lZGl0b3JTdGFja2luZ09yZGVyIDogc3RhY2tpbmdPcmRlclxuXHRcdFx0fSxcblx0XHRcdCdhcmlhLWxhYmVsJzogX18oYEdyaWQtQXJlYSAoJHtncmlkQXJlYUlkcy5pbmRleE9mKGNsaWVudElkKSArIDF9IG9mICR7Z3JpZEFyZWFJZHMubGVuZ3RofSlgLCAnaDJtbCcpLFxuXHRcdFx0b25LZXlQcmVzczogKGUpID0+IHtcblx0XHRcdFx0aWYoY2xpZW50SWQgPT09IHNlbGVjdGVkQmxvY2tDbGllbnRJZCkge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0aWYgKGUua2V5ID09PSAnZScgfHwgZS5rZXkgPT09ICdFJykgc2V0UmVxdWVzdEVkaXQoIXJlcXVlc3RFZGl0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KSwge1xuXHRcdFx0cmVuZGVyQXBwZW5kZXI6IGNoaWxkQmxvY2tzXG5cdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdDogSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcixcblx0XHRcdF9fZXhwZXJpbWVudGFsTGF5b3V0OiB0aGVtZVN1cHBvcnRzTGF5b3V0ID8gbGF5b3V0IDogdW5kZWZpbmVkLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0VmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVzaXplIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzc2VkPXtyZXF1ZXN0RWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlcXVlc3RFZGl0KCFyZXF1ZXN0RWRpdCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ0dyaWQgQXJlYSBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3RhY2tpbmcgT3JkZXInLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7c2V0U3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0ge3N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLypcbiAqIFRoZSBCbG9jayBBY3Rpb25zXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0V3JhcHBlciA9IHdpdGhEaXNwYXRjaChcblx0KGRpc3BhdGNoLCBvd25Qcm9wcywgcmVnaXN0cnkpID0+ICh7XG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgQXJlYSdzIHZlcnRpY2FsIGFsaWdubWVudCAoU3RhcnQsIENlbnRlciwgRW5kKVxuXHRcdC8vXG5cdFx0c2V0VmVydGljYWxBbGlnbm1lbnQobmV3VmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSAoKCkgPT4ge3N3aXRjaChuZXdWZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0XHRjYXNlICdjZW50ZXInOiB7XG5cdFx0XHRcdFx0cmV0dXJuICdjZW50ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ2JvdHRvbSc6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ2VuZCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9fSkoKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3ZlcnRpY2FsQWxpZ25tZW50fSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUsIHRoaXMgaXMgcGlja2VkIHVwIGJ5IHRoZSBwYXJlbnQgR3JpZCBpbiBvcmRlciB0byB1cGRhdGUgdGhlIEdyaWQgQXJlYSdzIHNpemUuXG5cdFx0Ly9cblx0XHRzZXRSZXF1ZXN0RWRpdCh2YWx1ZSkge1xuXHRcdFx0Y29uc3Qge2NsaWVudElkLCBzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7cmVxdWVzdEVkaXQ6IHZhbHVlfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3N0YWNraW5nT3JkZXInIGF0dHJpYnV0ZSwgdGhpcyBkZXRlcm1pbmVzIHRoZSBzYXZlZCB6LWluZGV4IG9mIEdyaWQgQXJlYSdzIHdpdGhpbiBhIEdyaWQuXG5cdFx0Ly9cblx0XHRzZXRTdGFja2luZ09yZGVyKG9yZGVyKSB7XG5cdFx0XHRjb25zdCB7c2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3N0YWNraW5nT3JkZXI6IE51bWJlcihvcmRlcil9KTtcblx0XHR9LFxuXHR9KVxuKShHcmlkQXJlYUVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHByb3BzKSB7XG5cdHJldHVybiA8R3JpZEFyZWFFZGl0V3JhcHBlciB7Li4ucHJvcHN9Lz47XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyBzdGFjayBhcyBpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8qKlxuICogU3R5bGVcbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlXG59KTsiLCIvKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHVzZUlubmVyQmxvY2tzUHJvcHMsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qXG4gKiBUaGUgU2F2ZSBGdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Z3JpZEFyZWEsXG5cdFx0c3RhY2tpbmdPcmRlcixcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fVxufSkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKHtcbiAgICAgICAgc3R5bGU6IHtcblx0XHRcdGp1c3RpZnlDb250ZW50OiB2ZXJ0aWNhbEFsaWdubWVudCwgXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGN1c3RvbUJhY2tncm91bmRDb2xvciA/IGN1c3RvbUJhY2tncm91bmRDb2xvciA6IGJhY2tncm91bmRDb2xvcixcblx0XHRcdGdyaWRBcmVhOiBncmlkQXJlYS5wYXJzZWQsXG5cdFx0XHR6SW5kZXg6IHN0YWNraW5nT3JkZXJcblx0XHR9LFxuICAgIH0pfSk7XG5cblx0cmV0dXJuIDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz47XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtrYV9leGFtcGxlX2Jsb2NrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJJbm5lckJsb2NrcyIsInVzZUJsb2NrUHJvcHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlU2V0dGluZyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiVG9vbGJhckdyb3VwIiwiVG9vbGJhckJ1dHRvbiIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldEJsb2NrVHlwZSIsInJlc2l6ZUNvcm5lck5FIiwiX18iLCJHcmlkQXJlYUVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJncmlkQXJlYSIsInN0YWNraW5nT3JkZXIiLCJyZXF1ZXN0RWRpdCIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY3VzdG9tQmFja2dyb3VuZENvbG9yIiwic2V0VmVydGljYWxBbGlnbm1lbnQiLCJzZXRSZXF1ZXN0RWRpdCIsInNldFN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdyaWRBcmVhSWRzIiwiaXNTZWxlY3RlZEdyaWRBcmVhIiwiY2hpbGRCbG9ja3MiLCJ0aGVtZVN1cHBvcnRzTGF5b3V0Iiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0QmxvY2tPcmRlciIsImdldEJsb2NrUm9vdENsaWVudElkIiwiZ2V0U2V0dGluZ3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwicm9vdElkIiwic2VsZWN0ZWRHcmlkSXRlbSIsImxlbmd0aCIsInBhcmVudHMiLCJmaW5kIiwic3VwcG9ydHNMYXlvdXQiLCJmb3JFYWNoIiwiY2hpbGRCbG9jayIsImNoaWxkQ2xpZW50SWQiLCJuYW1lIiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImNhbkZpbGxHcmlkQXJlYSIsImxheW91dCIsInR5cGUiLCJvcmllbnRhdGlvbiIsImlubmVyQmxvY2tzUHJvcHMiLCJjbGFzc05hbWUiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInBhcnNlZCIsInpJbmRleCIsImVkaXRvclN0YWNraW5nT3JkZXIiLCJpbmRleE9mIiwib25LZXlQcmVzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJyZW5kZXJBcHBlbmRlciIsInVuZGVmaW5lZCIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJfX2V4cGVyaW1lbnRhbExheW91dCIsIkdyaWRBcmVhRWRpdFdyYXBwZXIiLCJvd25Qcm9wcyIsInJlZ2lzdHJ5IiwibmV3VmVydGljYWxBbGlnbm1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwidmFsdWUiLCJvcmRlciIsIk51bWJlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwic3RhY2siLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9