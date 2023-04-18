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
  d: "M17.5 4v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4H8v5a.5.5 0 0 0 .5.5h7A.5.5 0 0 0 16 9V4h1.5Zm0 16v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v5H8v-5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5h1.5Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stack);
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "./src/deprecated/v1/save.js":
/*!***********************************!*\
  !*** ./src/deprecated/v1/save.js ***!
  \***********************************/
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
      className: 'is-layout-flex',
      style: {
        justifyContent: verticalAlignment,
        ...(!backgroundColor && {
          backgroundColor: customBackgroundColor
        }),
        gridArea: defaultGridArea,
        zIndex: stackingOrder,
        alignItems: 'unset'
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
      gridArea,
      stackingOrder,
      requestEdit,
      number,
      breakpointDefinitions
    },
    // Attribute Setters.
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/stack.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../block.json */ "./block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _deprecated_v1_block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated/v1/block.json */ "./src/deprecated/v1/block.json");
/* harmony import */ var _deprecated_v1_save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated/v1/save */ "./src/deprecated/v1/save.js");
/**
 * WordPress dependencies
 */




/**
 * Style
 */



/**
 * Internal dependencies
 */

// Current




// Deprecated



/**
 * Register the Block
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: [{
    attributes: _deprecated_v1_block_json__WEBPACK_IMPORTED_MODULE_5__.attributes,
    supports: _deprecated_v1_block_json__WEBPACK_IMPORTED_MODULE_5__.supports,
    save: _deprecated_v1_save__WEBPACK_IMPORTED_MODULE_6__["default"]
  }]
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
      stackingOrder,
      breakpointDefinitions,
      gridArea: {
        parsed: defaultGridArea
      }
    }
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: {
      zIndex: stackingOrder,
      gridArea: defaultGridArea
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
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid-area","version":"0.1.0","title":"Grid Area","parent":["h2ml/grid"],"category":"design","description":"A single Grid Area within a Grid block.","textdomain":"h2ml","attributes":{"gridArea":{"type":"object","default":{"start":{"x":1,"y":1},"end":{"x":1,"y":1},"parsed":"MS8x"}},"stackingOrder":{"type":"number","default":0},"requestEdit":{"type":"boolean","default":false},"number":{"type":"number","default":null},"breakpointDefinitions":{"type":"object","default":{}}},"supports":{"__experimentalSettings":true,"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"allowEditing":true,"default":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top","orientation":"vertical"}},"anchor":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":true,"padding":true,"__experimentalDefaultControls":{"blockGap":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

/***/ }),

/***/ "./src/deprecated/v1/block.json":
/*!**************************************!*\
  !*** ./src/deprecated/v1/block.json ***!
  \**************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0EsMkZBQTJGLCtDQUErQztVQUMxSSIsInNvdXJjZXMiOlsid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9yZXNpemUtY29ybmVyLW4tZS5qcyIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvc3RhY2suanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9kZXByZWNhdGVkL3YxL3NhdmUuanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2EtZXhhbXBsZS1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thLWV4YW1wbGUtYmxvY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9rYS1leGFtcGxlLWJsb2NrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgUGF0aCwgU1ZHIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHJlc2l6ZUNvcm5lck5FID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTEyLjUgNC4ydjEuNmg0LjdMNS44IDE3LjJWMTJINC4ydjcuOEgxMnYtMS42SDYuOEwxOC4yIDYuOHY0LjdoMS42VjQuMnpcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgcmVzaXplQ29ybmVyTkU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNpemUtY29ybmVyLW4tZS5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IHN0YWNrID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE3LjUgNHY1YTIgMiAwIDAgMS0yIDJoLTdhMiAyIDAgMCAxLTItMlY0SDh2NWEuNS41IDAgMCAwIC41LjVoN0EuNS41IDAgMCAwIDE2IDlWNGgxLjVabTAgMTZ2LTVhMiAyIDAgMCAwLTItMmgtN2EyIDIgMCAwIDAtMiAydjVIOHYtNWEuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAuNS41djVoMS41WlwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBzdGFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YWNrLmpzLm1hcCIsIi8qXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsIFxuXHR1c2VCbG9ja1Byb3BzXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLypcbiAqIFRoZSBTYXZlIEZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZSh7XG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRncmlkQXJlYToge1xuXHRcdFx0cGFyc2VkOiBkZWZhdWx0R3JpZEFyZWFcblx0XHR9LFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0YmFja2dyb3VuZENvbG9yLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdH0gPSB7fSBcblx0XHR9ID0ge30sXG5cdFx0YnJlYWtwb2ludERlZmluaXRpb25zXG5cdH1cbn0pIHtcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMuc2F2ZSh7IC4uLnVzZUJsb2NrUHJvcHMuc2F2ZSh7XG5cdFx0Y2xhc3NOYW1lOiAnaXMtbGF5b3V0LWZsZXgnLFxuICAgICAgICBzdHlsZToge1xuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IHZlcnRpY2FsQWxpZ25tZW50LCBcblx0XHRcdC4uLighYmFja2dyb3VuZENvbG9yICYmICh7YmFja2dyb3VuZENvbG9yOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3J9KSksXG5cdFx0XHRncmlkQXJlYTogZGVmYXVsdEdyaWRBcmVhLFxuXHRcdFx0ekluZGV4OiBzdGFja2luZ09yZGVyLFxuXHRcdFx0YWxpZ25JdGVtczogJ3Vuc2V0J1xuXHRcdH0sXG5cdFx0J2RhdGEtYnJlYWtwb2ludC1kZWZpbml0aW9ucyc6IE9iamVjdC5rZXlzKGJyZWFrcG9pbnREZWZpbml0aW9ucykgPyBidG9hKEpTT04uc3RyaW5naWZ5KE9iamVjdC52YWx1ZXMoYnJlYWtwb2ludERlZmluaXRpb25zKS5yZWR1Y2UoKHJlcywgYnJlYWtwb2ludERlZmluaXRpb24pID0+ICh7XG5cdFx0XHQuLi5yZXMsXG5cdFx0XHRbYCR7YnJlYWtwb2ludERlZmluaXRpb24ubWVkaWFRdWVyeX1gXToge1xuXHRcdFx0XHQuLi4oYnJlYWtwb2ludERlZmluaXRpb24uY29vcmRzID8ge1xuXHRcdFx0XHRcdGdyaWRBcmVhOiBicmVha3BvaW50RGVmaW5pdGlvbi5jb29yZHMsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnXG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XHRcblx0XHR9KSwge30pKSkgOiB1bmRlZmluZWRcbiAgICB9KX0pO1xuXG5cdHJldHVybiA8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+O1xufVxuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdElubmVyQmxvY2tzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHR1c2VTZXR0aW5nLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0VG9vbGJhckdyb3VwLCBcblx0VG9vbGJhckJ1dHRvbixcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIGFzIE51bWJlckNvbnRyb2xcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0d2l0aERpc3BhdGNoLFxuXHR1c2VTZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IFxuXHR1c2VFZmZlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgZ2V0QmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyByZXNpemVDb3JuZXJORSB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbi8qXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vKlxuICogVGhlIEVkaXQgRnVuY3Rpb24gQ29udGFpbmVyXG4gKi9cblxuY29uc3QgR3JpZEFyZWFFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdGdyaWRBcmVhLFxuXHRcdHN0YWNraW5nT3JkZXIsXG5cdFx0cmVxdWVzdEVkaXQsXG5cdFx0bnVtYmVyLFxuXHRcdGJyZWFrcG9pbnREZWZpbml0aW9uc1xuXHR9LFxuXHQvLyBBdHRyaWJ1dGUgU2V0dGVycy5cblx0c2V0UmVxdWVzdEVkaXQsXG5cdHNldFN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZFxufSkgPT4ge1xuXHRcblx0Ly9cblx0Ly8gR2V0IEluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IEJsb2NrLCBhbmQgaXRzIGNoaWxkcmVuIChVc2VkIGZvciBzZXR0aW5nIHRoZSBlZGl0b3Igc3RhY2tpbmcgb3JkZXIpLlxuXHQvL1xuXG5cdGNvbnN0IHtzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIGdyaWRBcmVhSWRzLCBpc1NlbGVjdGVkR3JpZEFyZWEsIGNoaWxkQmxvY2tzLCB0aGVtZVN1cHBvcnRzTGF5b3V0fSA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MsIGdldEJsb2NrT3JkZXIsIGdldEJsb2NrUm9vdENsaWVudElkLCBnZXRTZXR0aW5ncywgZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgeyBnZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBzZWxlY3QoJ2gybWwvZ3JpZF9hcmVhX3N0b3JlJyk7XG5cdFx0Ly8gVmFyaWFibGVzLlxuXHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tDbGllbnRJZCA9IGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpO1xuXHRcdGNvbnN0IHJvb3RJZCA9IGdldEJsb2NrUm9vdENsaWVudElkKGNsaWVudElkKTtcblx0XHRjb25zdCBjaGlsZEJsb2NrcyA9IGdldEJsb2NrcyhjbGllbnRJZCk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbSA9IGdldFNlbGVjdGVkR3JpZEFyZWEoKTtcblx0XHQvLyBSZXR1cm4gVmFsdWVzLlxuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RlZEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRjaGlsZEJsb2NrczogY2hpbGRCbG9ja3MubGVuZ3RoID8gY2hpbGRCbG9ja3MgOiBudWxsLFxuXHRcdFx0Z3JpZEFyZWFJZHM6IGdldEJsb2NrT3JkZXIocm9vdElkKSxcblx0XHRcdGlzU2VsZWN0ZWRHcmlkQXJlYTogc2VsZWN0ZWRHcmlkSXRlbT8ucGFyZW50cy5maW5kKHNlbGVjdGVkR3JpZEl0ZW0gPT4gc2VsZWN0ZWRHcmlkSXRlbS5jbGllbnRJZCA9PT0gY2xpZW50SWQpLFxuXHRcdFx0dGhlbWVTdXBwb3J0c0xheW91dDogZ2V0U2V0dGluZ3MoKT8uc3VwcG9ydHNMYXlvdXQsXG5cdFx0fTtcblx0fSwgW10pO1xuXHRcblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQgQXJlYSdzIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzLCBkZXRlcm1pbmUgaWYgdGhlcmUgYXJlIG9uZSBvciBtb3JlIGNoaWxkcmVuLiBcblx0Ly8gXG5cdC8vIElmIHRoZXJlIGlzIG9uZSwgYW5kIHRoYXQgaXMgYSBNZWRpYSBvciBhbiBFbWJlZCBibG9jayB0aGVuIHVwZGF0ZSB0aGUgY2hpbGQncyAnaDJtbENhbkZpbGxHcmlkQXJlYScgYXR0cmlidXRlIHRvIHRydWUsXG5cdC8vIGFsbG93aW5nIHRoZSBjaGlsZCB0byBjb3ZlciB0aGUgR3JpZCBBcmVhICh0aGlzIGlzIGFkZGVkIGluIG91ciBmaWx0ZXJzKS5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgbXVsdGlwbGUsIHNldCB0aGUgJ2gybWxDYW5GaWxsR3JpZEFyZWEnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoY2hpbGRCbG9ja3M/Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y2hpbGRCbG9ja3MuZm9yRWFjaChjaGlsZEJsb2NrID0+IHtcblx0XHRcdFx0Y29uc3Qge2NsaWVudElkOiBjaGlsZENsaWVudElkLCBuYW1lfSA9IGNoaWxkQmxvY2s7XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yeX0gPSBnZXRCbG9ja1R5cGUobmFtZSk7XG5cdFx0XHRcdGlmKFsnbWVkaWEnLCAnZW1iZWQnXS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoY2hpbGRDbGllbnRJZCwge2gybWxDYW5GaWxsR3JpZEFyZWE6IHRydWV9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYoY2hpbGRCbG9ja3MpIHsgXG5cdFx0XHRjaGlsZEJsb2Nrcy5mb3JFYWNoKGNoaWxkQmxvY2sgPT4ge1xuXHRcdFx0XHRjb25zdCB7Y2xpZW50SWQ6IGNoaWxkQ2xpZW50SWQsIG5hbWV9ID0gY2hpbGRCbG9jaztcblx0XHRcdFx0Y29uc3Qge2NhdGVnb3J5fSA9IGdldEJsb2NrVHlwZShuYW1lKTtcblx0XHRcdFx0aWYoWydtZWRpYScsICdlbWJlZCddLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuXHRcdFx0XHRcdGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpLnVwZGF0ZUJsb2NrQXR0cmlidXRlcyhjaGlsZENsaWVudElkLCB7aDJtbENhbkZpbGxHcmlkQXJlYTogZmFsc2V9KTtcdFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtjaGlsZEJsb2Nrc10pO1xuXG5cdC8vXG5cdC8vIFRoZSBHcmlkIEFyZWEgbGF5b3V0LlxuXHQvL1xuXG5cdGNvbnN0IGxheW91dCA9IHsgXG5cdFx0Li4udXNlU2V0dGluZygnbGF5b3V0JyksIFxuXHRcdHR5cGU6ICdmbGV4JywgXG5cdFx0b3JpZW50YXRpb246ICd2ZXJ0aWNhbCdcblx0fTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXHRcblx0Y29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMoIFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0Y2xhc3NOYW1lOiBbYGgybWxHcmlkQXJlYSR7bnVtYmVyfWBdLFxuXHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRBcmVhLnBhcnNlZCxcblx0XHRcdFx0ekluZGV4OiBpc1NlbGVjdGVkR3JpZEFyZWEgPyBpc1NlbGVjdGVkR3JpZEFyZWEuZWRpdG9yU3RhY2tpbmdPcmRlciA6IHN0YWNraW5nT3JkZXJcblx0XHRcdH0sXG5cdFx0XHQnYXJpYS1sYWJlbCc6IF9fKGBHcmlkLUFyZWEgKCR7Z3JpZEFyZWFJZHMuaW5kZXhPZihjbGllbnRJZCkgKyAxfSBvZiAke2dyaWRBcmVhSWRzLmxlbmd0aH0pYCwgJ2gybWwnKSxcblx0XHR9KSwge1xuXHRcdFx0cmVuZGVyQXBwZW5kZXI6IGNoaWxkQmxvY2tzXG5cdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdDogSW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlcixcblx0XHRcdF9fZXhwZXJpbWVudGFsTGF5b3V0OiB0aGVtZVN1cHBvcnRzTGF5b3V0ID8gbGF5b3V0IDogdW5kZWZpbmVkLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3Jlc2l6ZUNvcm5lck5FfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiUmVzaXplIEdyaWQgQXJlYVwiLCAnaDJtbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzc2VkPXtyZXF1ZXN0RWRpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlcXVlc3RFZGl0KCFyZXF1ZXN0RWRpdCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oXCJHcmlkIEFyZWEgU2V0dGluZ3NcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0aXNTaGlmdFN0ZXBFbmFibGVkID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge3NldFN0YWNraW5nT3JkZXJ9XG5cdFx0XHRcdFx0XHRcdHNoaWZ0U3RlcCA9IHsxfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHtzdGFja2luZ09yZGVyfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9uc1xuICovXG5cbmNvbnN0IEdyaWRBcmVhRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSAncmVxdWVzdEVkaXQnIGF0dHJpYnV0ZSwgdGhpcyBpcyBwaWNrZWQgdXAgYnkgdGhlIHBhcmVudCBHcmlkIGluIG9yZGVyIHRvIHVwZGF0ZSB0aGUgR3JpZCBBcmVhJ3Mgc2l6ZS5cblx0XHQvL1xuXHRcdHNldFJlcXVlc3RFZGl0KHZhbHVlKSB7XG5cdFx0XHRjb25zdCB7Y2xpZW50SWQsIHNldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtyZXF1ZXN0RWRpdDogdmFsdWV9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSAnc3RhY2tpbmdPcmRlcicgYXR0cmlidXRlLCB0aGlzIGRldGVybWluZXMgdGhlIHNhdmVkIHotaW5kZXggb2YgR3JpZCBBcmVhJ3Mgd2l0aGluIGEgR3JpZC5cblx0XHQvL1xuXHRcdHNldFN0YWNraW5nT3JkZXIob3JkZXIpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7c3RhY2tpbmdPcmRlcjogTnVtYmVyKG9yZGVyKX0pO1xuXHRcdH0sXG5cdH0pXG4pKEdyaWRBcmVhRWRpdCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkQXJlYUVkaXRXcmFwcGVyIHsuLi5wcm9wc30vPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IHN0YWNrIGFzIGljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcblxuLyoqXG4gKiBTdHlsZVxuICovXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG4vLyBDdXJyZW50XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnO1xuXG4vLyBEZXByZWNhdGVkXG5pbXBvcnQgbWV0YWRhdGFWMSBmcm9tICcuL2RlcHJlY2F0ZWQvdjEvYmxvY2suanNvbic7XG5pbXBvcnQgU2F2ZVYxIGZyb20gJy4vZGVwcmVjYXRlZC92MS9zYXZlJztcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgQmxvY2tcbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG5cdGljb24sXG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6IFNhdmUsXG5cdGRlcHJlY2F0ZWQ6IFt7XG5cdFx0YXR0cmlidXRlczogbWV0YWRhdGFWMS5hdHRyaWJ1dGVzLFxuXHRcdHN1cHBvcnRzOiBtZXRhZGF0YVYxLnN1cHBvcnRzLFxuXHRcdHNhdmU6IFNhdmVWMVxuICAgIH1dLFxufSk7IiwiLypcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHR1c2VCbG9ja1Byb3BzLFxuXHRJbm5lckJsb2Nrc1xufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qXG4gKiBUaGUgU2F2ZSBGdW5jdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c3RhY2tpbmdPcmRlcixcblx0XHRicmVha3BvaW50RGVmaW5pdGlvbnMsXG5cdFx0Z3JpZEFyZWE6IHtcblx0XHRcdHBhcnNlZDogZGVmYXVsdEdyaWRBcmVhXG5cdFx0fSxcblx0fVxufSkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcy5zYXZlKHtcblx0XHRzdHlsZToge1xuXHRcdFx0ekluZGV4OiBzdGFja2luZ09yZGVyLFxuXHRcdFx0Z3JpZEFyZWE6IGRlZmF1bHRHcmlkQXJlYVxuXHRcdH0sXG5cdFx0J2RhdGEtYnJlYWtwb2ludC1kZWZpbml0aW9ucyc6IE9iamVjdC5rZXlzKGJyZWFrcG9pbnREZWZpbml0aW9ucykgPyBidG9hKEpTT04uc3RyaW5naWZ5KE9iamVjdC52YWx1ZXMoYnJlYWtwb2ludERlZmluaXRpb25zKS5yZWR1Y2UoKHJlcywgYnJlYWtwb2ludERlZmluaXRpb24pID0+ICh7XG5cdFx0XHQuLi5yZXMsXG5cdFx0XHRbYCR7YnJlYWtwb2ludERlZmluaXRpb24ubWVkaWFRdWVyeX1gXToge1xuXHRcdFx0XHQuLi4oYnJlYWtwb2ludERlZmluaXRpb24uY29vcmRzID8ge1xuXHRcdFx0XHRcdGdyaWRBcmVhOiBicmVha3BvaW50RGVmaW5pdGlvbi5jb29yZHMsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnXG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSksIHt9KSkpIDogdW5kZWZpbmVkXG5cdH0pO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuXHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtrYV9leGFtcGxlX2Jsb2NrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2thX2V4YW1wbGVfYmxvY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcIi4vc3R5bGUtaW5kZXhcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwidXNlQmxvY2tQcm9wcyIsIlNhdmUiLCJfcmVmIiwiYXR0cmlidXRlcyIsImdyaWRBcmVhIiwicGFyc2VkIiwiZGVmYXVsdEdyaWRBcmVhIiwic3RhY2tpbmdPcmRlciIsInZlcnRpY2FsQWxpZ25tZW50IiwiYmFja2dyb3VuZENvbG9yIiwic3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJjdXN0b21CYWNrZ3JvdW5kQ29sb3IiLCJicmVha3BvaW50RGVmaW5pdGlvbnMiLCJpbm5lckJsb2Nrc1Byb3BzIiwic2F2ZSIsImNsYXNzTmFtZSIsImp1c3RpZnlDb250ZW50IiwiekluZGV4IiwiYWxpZ25JdGVtcyIsIk9iamVjdCIsImtleXMiLCJidG9hIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhbHVlcyIsInJlZHVjZSIsInJlcyIsImJyZWFrcG9pbnREZWZpbml0aW9uIiwibWVkaWFRdWVyeSIsImNvb3JkcyIsImRpc3BsYXkiLCJ1bmRlZmluZWQiLCJjcmVhdGVFbGVtZW50IiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiSW5uZXJCbG9ja3MiLCJ1c2VTZXR0aW5nIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJUb29sYmFyR3JvdXAiLCJUb29sYmFyQnV0dG9uIiwiX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sIiwiTnVtYmVyQ29udHJvbCIsIndpdGhEaXNwYXRjaCIsInVzZVNlbGVjdCIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZ2V0QmxvY2tUeXBlIiwicmVzaXplQ29ybmVyTkUiLCJfXyIsIkdyaWRBcmVhRWRpdCIsInJlcXVlc3RFZGl0IiwibnVtYmVyIiwic2V0UmVxdWVzdEVkaXQiLCJzZXRTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJncmlkQXJlYUlkcyIsImlzU2VsZWN0ZWRHcmlkQXJlYSIsImNoaWxkQmxvY2tzIiwidGhlbWVTdXBwb3J0c0xheW91dCIsInNlbGVjdCIsImdldEJsb2NrcyIsImdldEJsb2NrT3JkZXIiLCJnZXRCbG9ja1Jvb3RDbGllbnRJZCIsImdldFNldHRpbmdzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0U2VsZWN0ZWRHcmlkQXJlYSIsInJvb3RJZCIsInNlbGVjdGVkR3JpZEl0ZW0iLCJsZW5ndGgiLCJwYXJlbnRzIiwiZmluZCIsInN1cHBvcnRzTGF5b3V0IiwiZm9yRWFjaCIsImNoaWxkQmxvY2siLCJjaGlsZENsaWVudElkIiwibmFtZSIsImNhdGVnb3J5IiwiaW5jbHVkZXMiLCJ1cGRhdGVCbG9ja0F0dHJpYnV0ZXMiLCJoMm1sQ2FuRmlsbEdyaWRBcmVhIiwibGF5b3V0IiwidHlwZSIsIm9yaWVudGF0aW9uIiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImluZGV4T2YiLCJyZW5kZXJBcHBlbmRlciIsIkJ1dHRvbkJsb2NrQXBwZW5kZXIiLCJfX2V4cGVyaW1lbnRhbExheW91dCIsIkZyYWdtZW50IiwiaWNvbiIsImxhYmVsIiwiaXNQcmVzc2VkIiwib25DbGljayIsInRpdGxlIiwiaW5pdGlhbE9wZW4iLCJpc1NoaWZ0U3RlcEVuYWJsZWQiLCJvbkNoYW5nZSIsInNoaWZ0U3RlcCIsInZhbHVlIiwiR3JpZEFyZWFFZGl0V3JhcHBlciIsIm93blByb3BzIiwicmVnaXN0cnkiLCJzZXRBdHRyaWJ1dGVzIiwib3JkZXIiLCJOdW1iZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsInN0YWNrIiwibWV0YWRhdGEiLCJtZXRhZGF0YVYxIiwiU2F2ZVYxIiwiZWRpdCIsImRlcHJlY2F0ZWQiLCJzdXBwb3J0cyIsImJsb2NrUHJvcHMiLCJDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==