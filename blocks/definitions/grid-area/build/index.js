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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9yZXNpemUtY29ybmVyLW4tZS5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvc3RhY2suanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHJlc2l6ZUNvcm5lck5FID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTEyLjUgNC4ydjEuNmg0LjdMNS44IDE3LjJWMTJINC4ydjcuOEgxMnYtMS42SDYuOEwxOC4yIDYuOHY0LjdoMS42VjQuMnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcmVzaXplQ29ybmVyTkU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNpemUtY29ybmVyLW4tZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHN0YWNrID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE2IDR2NS4yYzAgLjMtLjIuNS0uNS41aC03Yy0uMy4xLS41LS4yLS41LS41VjRINi41djUuMmMwIDEuMS45IDIgMiAyaDdjMS4xIDAgMi0uOSAyLTJWNEgxNnptLS41IDguOGgtN2MtMS4xIDAtMiAuOS0yIDJWMjBIOHYtNS4yYzAtLjMuMi0uNS41LS41aDdjLjMgMCAuNS4yLjUuNVYyMGgxLjV2LTUuMmMwLTEuMi0uOS0yLTItMnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgc3RhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFjay5qcy5tYXAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhcixcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHR1c2VTZXR0aW5nLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0VG9vbGJhckdyb3VwLCBcblx0VG9vbGJhckJ1dHRvbixcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0d2l0aERpc3BhdGNoLFxuXHR1c2VTZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IGdldEJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgcmVzaXplQ29ybmVyTkUgfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcblxuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG4vKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLypcbiAqIFRoZSBFZGl0IEZ1bmN0aW9uIENvbnRhaW5lclxuICovXG5cbmNvbnN0IEdyaWRBcmVhRWRpdCA9ICh7XG5cdC8vIEF0dHJpYnV0ZXMuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRncmlkQXJlYSxcblx0XHRzdGFja2luZ09yZGVyLFxuXHRcdHJlcXVlc3RFZGl0LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdH0gPSB7fSBcblx0XHR9ID0ge30gXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRWZXJ0aWNhbEFsaWdubWVudCxcblx0c2V0UmVxdWVzdEVkaXQsXG5cdHNldFN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZCxcbn0pID0+IHtcblxuXHQvL1xuXHQvLyBHZXQgSW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgQmxvY2ssIGFuZCBpdHMgY2hpbGRyZW4gKFVzZWQgZm9yIHNldHRpbmcgdGhlIGVkaXRvciBzdGFja2luZyBvcmRlcikuXG5cdC8vXG5cblx0Y29uc3Qge3NlbGVjdGVkQmxvY2tDbGllbnRJZCwgZ3JpZEFyZWFJZHMsIGlzU2VsZWN0ZWRHcmlkQXJlYSwgY2hpbGRCbG9ja3MsIHRoZW1lU3VwcG9ydHNMYXlvdXR9ID0gdXNlU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7IGdldEJsb2NrcywgZ2V0QmxvY2tPcmRlciwgZ2V0QmxvY2tSb290Q2xpZW50SWQsIGdldFNldHRpbmdzLCBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRjb25zdCB7IGdldFNlbGVjdGVkR3JpZEFyZWEgfSA9IHNlbGVjdCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRCbG9ja0NsaWVudElkID0gZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCk7XG5cdFx0Y29uc3Qgcm9vdElkID0gZ2V0QmxvY2tSb290Q2xpZW50SWQoY2xpZW50SWQpO1xuXHRcdGNvbnN0IGNoaWxkQmxvY2tzID0gZ2V0QmxvY2tzKGNsaWVudElkKTtcblx0XHRjb25zdCBzZWxlY3RlZEdyaWRJdGVtID0gZ2V0U2VsZWN0ZWRHcmlkQXJlYSgpO1xuXHRcdC8vIFJldHVybiBWYWx1ZXMuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdGVkQmxvY2tDbGllbnRJZCxcblx0XHRcdGNoaWxkQmxvY2tzOiBjaGlsZEJsb2Nrcy5sZW5ndGggPyBjaGlsZEJsb2NrcyA6IG51bGwsXG5cdFx0XHRncmlkQXJlYUlkczogZ2V0QmxvY2tPcmRlcihyb290SWQpLFxuXHRcdFx0aXNTZWxlY3RlZEdyaWRBcmVhOiBzZWxlY3RlZEdyaWRJdGVtPy5wYXJlbnRzLmZpbmQoc2VsZWN0ZWRHcmlkSXRlbSA9PiBzZWxlY3RlZEdyaWRJdGVtLmNsaWVudElkID09PSBjbGllbnRJZCksXG5cdFx0XHR0aGVtZVN1cHBvcnRzTGF5b3V0OiBnZXRTZXR0aW5ncygpPy5zdXBwb3J0c0xheW91dCxcblx0XHR9O1xuXHR9LCBbXSk7XG5cdFxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzLCBkZXRlcm1pbmUgaWYgdGhlcmUgYXJlIG9uZSBvciBtb3JlIGNoaWxkcmVuLiBcblx0Ly8gXG5cdC8vIElmIHRoZXJlIGlzIG9uZSwgYW5kIHRoYXQgaXMgYSBNZWRpYSBvciBhbiBFbWJlZCBibG9jayB0aGVuIHVwZGF0ZSB0aGUgY2hpbGQncyAnaDJtbENhbkZpbGxHcmlkQXJlYScgYXR0cmlidXRlIHRvIHRydWUsXG5cdC8vIGFsbG93aW5nIHRoZSBjaGlsZCB0byBjb3ZlciB0aGUgR3JpZCBBcmVhICh0aGlzIGlzIGFkZGVkIGluIG91ciBmaWx0ZXJzKS5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgbXVsdGlwbGUsIHNldCB0aGUgJ2gybWxDYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoY2hpbGRCbG9ja3M/Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2gybWxDYW5GaWxsR3JpZEFyZWE6IHRydWV9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYoY2hpbGRCbG9ja3MpIHsgXG5cdFx0XHRjaGlsZEJsb2Nrcy5mb3JFYWNoKGNoaWxkQmxvY2sgPT4ge1xuXHRcdFx0XHRjb25zdCB7Y2xpZW50SWQ6IGNoaWxkQ2xpZW50SWQsIG5hbWV9ID0gY2hpbGRCbG9jaztcblx0XHRcdFx0Y29uc3Qge2NhdGVnb3J5fSA9IGdldEJsb2NrVHlwZShuYW1lKTtcblx0XHRcdFx0aWYoWydtZWRpYScsICdlbWJlZCddLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyhjaGlsZENsaWVudElkLCB7aDJtbENhbkZpbGxHcmlkQXJlYTogZmFsc2V9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtjaGlsZEJsb2Nrc10pXG5cblx0Ly9cblx0Ly8gVGhlIEdyaWQgQXJlYSBsYXlvdXQuXG5cdC8vXG5cblx0Y29uc3QgbGF5b3V0ID0geyBcblx0XHQuLi51c2VTZXR0aW5nKCdsYXlvdXQnKSwgXG5cdFx0dHlwZTogJ2ZsZXgnLCBcblx0XHRvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJ1xuXHR9O1xuXG5cdC8vXG5cdC8vIFJlZ2lzdGVyIHRoZSBCbG9jayAvIElubmVyQmxvY2sgUHJvcHMuXG5cdC8vXG5cdFxuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcyggXG5cdFx0dXNlQmxvY2tQcm9wcyh7XG5cdFx0XHRjbGFzc05hbWU6IFtcblx0XHRcdFx0IXRoZW1lU3VwcG9ydHNMYXlvdXQgPyAnd3AtYmxvY2stZ3JvdXBfX2lubmVyLWNvbnRhaW5lcicgOiBudWxsLFxuXHRcdFx0XSxcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdGp1c3RpZnlDb250ZW50OiB2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgPyBjdXN0b21CYWNrZ3JvdW5kQ29sb3IgOiAnbnVsbCcsXG5cdFx0XHRcdGdyaWRBcmVhOiBncmlkQXJlYS5wYXJzZWQsXG5cdFx0XHRcdHpJbmRleDogaXNTZWxlY3RlZEdyaWRBcmVhID8gaXNTZWxlY3RlZEdyaWRBcmVhLmVkaXRvclN0YWNraW5nT3JkZXIgOiBzdGFja2luZ09yZGVyXG5cdFx0XHR9LFxuXHRcdFx0J2FyaWEtbGFiZWwnOiBfXyhgR3JpZC1BcmVhICgke2dyaWRBcmVhSWRzLmluZGV4T2YoY2xpZW50SWQpICsgMX0gb2YgJHtncmlkQXJlYUlkcy5sZW5ndGh9KWAsICdoMm1sJyksXG5cdFx0XHRvbktleVByZXNzOiAoZSkgPT4ge1xuXHRcdFx0XHRpZihjbGllbnRJZCA9PT0gc2VsZWN0ZWRCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRpZiAoZS5rZXkgPT09ICdlJyB8fCBlLmtleSA9PT0gJ0UnKSBzZXRSZXF1ZXN0RWRpdCghcmVxdWVzdEVkaXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pLCB7XG5cdFx0XHRyZW5kZXJBcHBlbmRlcjogY2hpbGRCbG9ja3Ncblx0XHRcdFx0PyB1bmRlZmluZWRcblx0XHRcdFx0OiBJbm5lckJsb2Nrcy5CdXR0b25CbG9ja0FwcGVuZGVyLFxuXHRcdFx0X19leHBlcmltZW50YWxMYXlvdXQ6IHRoZW1lU3VwcG9ydHNMYXlvdXQgPyBsYXlvdXQgOiB1bmRlZmluZWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8vXG5cdC8vIFRoZSBKU1guXG5cdC8vXG5cdFxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRWZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0Lz5cbiAgICAgICAgICAgICAgICA8VG9vbGJhckdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhckJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVzaXplQ29ybmVyTkV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oXCJSZXNpemUgR3JpZCBBcmVhXCIsICdoMm1sJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ByZXNzZWQ9e3JlcXVlc3RFZGl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVxdWVzdEVkaXQoIXJlcXVlc3RFZGl0KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXJHcm91cD5cblx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyhcIkdyaWQgQXJlYSBTZXR0aW5nc1wiLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17dHJ1ZX0+XG5cdFx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTdGFja2luZyBPcmRlclwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRpc1NoaWZ0U3RlcEVuYWJsZWQgPSB7dHJ1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7c2V0U3RhY2tpbmdPcmRlcn1cblx0XHRcdFx0XHRcdFx0c2hpZnRTdGVwID0gezF9XG5cdFx0XHRcdFx0XHRcdHZhbHVlID0ge3N0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLypcbiAqIFRoZSBCbG9jayBBY3Rpb25zXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0V3JhcHBlciA9IHdpdGhEaXNwYXRjaChcblx0KGRpc3BhdGNoLCBvd25Qcm9wcywgcmVnaXN0cnkpID0+ICh7XG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgQXJlYSdzIHZlcnRpY2FsIGFsaWdubWVudCAoU3RhcnQsIENlbnRlciwgRW5kKVxuXHRcdC8vXG5cdFx0c2V0VmVydGljYWxBbGlnbm1lbnQobmV3VmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSAoKCkgPT4ge3N3aXRjaChuZXdWZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0XHRjYXNlICdjZW50ZXInOiB7XG5cdFx0XHRcdFx0cmV0dXJuICdjZW50ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ2JvdHRvbSc6IHtcblx0XHRcdFx0XHRyZXR1cm4gJ2VuZCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRcdHJldHVybiAnc3RhcnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9fSkoKTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3ZlcnRpY2FsQWxpZ25tZW50fSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUsIHRoaXMgaXMgcGlja2VkIHVwIGJ5IHRoZSBwYXJlbnQgR3JpZCBpbiBvcmRlciB0byB1cGRhdGUgdGhlIEdyaWQgQXJlYSdzIHNpemUuXG5cdFx0Ly9cblx0XHRzZXRSZXF1ZXN0RWRpdCh2YWx1ZSkge1xuXHRcdFx0Y29uc3Qge2NsaWVudElkLCBzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7cmVxdWVzdEVkaXQ6IHZhbHVlfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgJ3N0YWNraW5nT3JkZXInIGF0dHJpYnV0ZSwgdGhpcyBkZXRlcm1pbmVzIHRoZSBzYXZlZCB6LWluZGV4IG9mIEdyaWQgQXJlYSdzIHdpdGhpbiBhIEdyaWQuXG5cdFx0Ly9cblx0XHRzZXRTdGFja2luZ09yZGVyKG9yZGVyKSB7XG5cdFx0XHRjb25zdCB7c2V0QXR0cmlidXRlc30gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoe3N0YWNraW5nT3JkZXI6IE51bWJlcihvcmRlcil9KTtcblx0XHR9LFxuXHR9KVxuKShHcmlkQXJlYUVkaXQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHByb3BzKSB7XG5cdHJldHVybiA8R3JpZEFyZWFFZGl0V3JhcHBlciB7Li4ucHJvcHN9Lz47XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyBzdGFjayBhcyBpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8qKlxuICogU3R5bGVcbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSc7XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlXG59KTsiLCIvKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHVzZUlubmVyQmxvY2tzUHJvcHMsIHVzZUJsb2NrUHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qXG4gKiBUaGUgU2F2ZSBGdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Z3JpZEFyZWEsXG5cdFx0c3RhY2tpbmdPcmRlcixcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGN1c3RvbUJhY2tncm91bmRDb2xvclxuXHRcdFx0fSA9IHt9IFxuXHRcdH0gPSB7fSBcblx0fVxufSkge1xuXHRjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKHtcbiAgICAgICAgc3R5bGU6IHtcblx0XHRcdGp1c3RpZnlDb250ZW50OiB2ZXJ0aWNhbEFsaWdubWVudCwgXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGN1c3RvbUJhY2tncm91bmRDb2xvciA/IGN1c3RvbUJhY2tncm91bmRDb2xvciA6IGJhY2tncm91bmRDb2xvcixcblx0XHRcdGdyaWRBcmVhOiBncmlkQXJlYS5wYXJzZWQsXG5cdFx0XHR6SW5kZXg6IHN0YWNraW5nT3JkZXJcblx0XHR9LFxuICAgIH0pfSk7XG5cblx0cmV0dXJuIDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz47XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5ra2FfZXhhbXBsZV9ibG9ja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtrYV9leGFtcGxlX2Jsb2NrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJJbm5lckJsb2NrcyIsInVzZUJsb2NrUHJvcHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlU2V0dGluZyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiVG9vbGJhckdyb3VwIiwiVG9vbGJhckJ1dHRvbiIsIl9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCIsIk51bWJlckNvbnRyb2wiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldEJsb2NrVHlwZSIsInJlc2l6ZUNvcm5lck5FIiwiX18iLCJHcmlkQXJlYUVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJncmlkQXJlYSIsInN0YWNraW5nT3JkZXIiLCJyZXF1ZXN0RWRpdCIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiY3VzdG9tQmFja2dyb3VuZENvbG9yIiwic2V0VmVydGljYWxBbGlnbm1lbnQiLCJzZXRSZXF1ZXN0RWRpdCIsInNldFN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdyaWRBcmVhSWRzIiwiaXNTZWxlY3RlZEdyaWRBcmVhIiwiY2hpbGRCbG9ja3MiLCJ0aGVtZVN1cHBvcnRzTGF5b3V0Iiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0QmxvY2tPcmRlciIsImdldEJsb2NrUm9vdENsaWVudElkIiwiZ2V0U2V0dGluZ3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwicm9vdElkIiwic2VsZWN0ZWRHcmlkSXRlbSIsImxlbmd0aCIsInBhcmVudHMiLCJmaW5kIiwic3VwcG9ydHNMYXlvdXQiLCJmb3JFYWNoIiwiY2hpbGRCbG9jayIsImNoaWxkQ2xpZW50SWQiLCJuYW1lIiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImgybWxDYW5GaWxsR3JpZEFyZWEiLCJsYXlvdXQiLCJ0eXBlIiwib3JpZW50YXRpb24iLCJpbm5lckJsb2Nrc1Byb3BzIiwiY2xhc3NOYW1lIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJzZWQiLCJ6SW5kZXgiLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiaW5kZXhPZiIsIm9uS2V5UHJlc3MiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwicmVuZGVyQXBwZW5kZXIiLCJ1bmRlZmluZWQiLCJCdXR0b25CbG9ja0FwcGVuZGVyIiwiX19leHBlcmltZW50YWxMYXlvdXQiLCJHcmlkQXJlYUVkaXRXcmFwcGVyIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsIm5ld1ZlcnRpY2FsQWxpZ25tZW50Iiwic2V0QXR0cmlidXRlcyIsInZhbHVlIiwib3JkZXIiLCJOdW1iZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsInN0YWNrIiwiaWNvbiIsIm1ldGFkYXRhIiwiU2F2ZSIsImVkaXQiLCJzYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==