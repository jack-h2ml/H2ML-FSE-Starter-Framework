/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/grid.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/grid.js ***!
  \********************************************************************/
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

const grid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.8 16.5H5c-.3 0-.5-.2-.5-.5v-6.2h6.8v6.7zm0-8.3H4.5V5c0-.3.2-.5.5-.5h6.2v6.7zm8.3 7.8c0 .3-.2.5-.5.5h-6.2v-6.8h6.8V19zm0-7.8h-6.8V4.5H19c.3 0 .5.2.5.5v6.2z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grid);
//# sourceMappingURL=grid.js.map

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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_styles_grid_styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../common/styles/grid-styles/editor.scss */ "../../common/styles/grid-styles/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _local_components_GridEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local_components/GridEditor */ "./src/local_components/GridEditor/index.js");

/**
 * WordPress dependencies.
 */









/**
 * Internal dependencies.
 */






/*
* Redux store htmlFor holding the currently selected h2ml/grid-area, 
* This is used to ensure the currently selected h2ml/grid-area is visually on top in the editor.
*/

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.register)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.createReduxStore)("h2ml/grid_area_store", {
  reducer() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      selected: {
        value: null
      }
    };
    let action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case "UPDATE_SELECTED_GRID_AREA":
        {
          return {
            ...state,
            selected: {
              ...state.selected,
              value: action.value
            }
          };
        }
    }
    return state;
  },
  actions: {
    setSelectedGridArea(value) {
      return {
        type: "UPDATE_SELECTED_GRID_AREA",
        value
      };
    }
  },
  selectors: {
    getSelectedGridArea(state) {
      return state.selected.value;
    }
  }
}));

/**
 * The Code.
 */

const GridEdit = _ref => {
  let {
    // Attributes.
    attributes: {
      minHeight,
      colDefinitions: {
        count: colCount,
        templates: colTemplates
      },
      rowDefinitions: {
        count: rowCount,
        templates: rowTemplates
      },
      editing
    },
    // Attribute Setters.
    setGridNoColsOrRows,
    setGridTemplateColumnOrRow,
    setGridMinHeight,
    setGridEditing,
    // Redux Setters.
    setGridAreasEditorStackingOrder,
    // Other.
    clientId
  } = _ref;
  //
  // Get information about the current Block, and its children. 
  // (Used htmlFor setting the editor stacking order, and adding / editing Grid-Area's)
  //

  const {
    selectedBlockClientId,
    selectedGridItemRootBlockClientId,
    gridChildren
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    // Hooks.
    const {
      getBlocks,
      getSelectedBlockClientId,
      getBlockParentsByBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    // Variables.
    const selectedBlockClientId = getSelectedBlockClientId();
    const selectedGridItemRootBlockClientId = selectedBlockClientId ? getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid'], true)[0] : false;
    const gridChildren = getBlocks(clientId);
    // Return Values.
    return {
      selectedBlockClientId,
      selectedGridItemRootBlockClientId,
      gridChildren
    };
  }, []);

  //
  // Handle updating the stacking order htmlFor any currently selected Grid Area's within the editor.
  //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGridAreasEditorStackingOrder(selectedBlockClientId, selectedGridItemRootBlockClientId);
  }, [selectedBlockClientId]);

  //
  // focusTarget state, this is used to ensure we auto-focus on the correct Grid Area when making changes to the Grid.
  //

  const [focusTarget, setFocusTarget] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // 
  // If either of the Grid's total number of children changes (adding), or if the 'requestEdit' attribute of one of the Grid's 
  // changes (updating) then do the following: 
  // 
  // If the Grid's 'editing' attribute is already set then we have just finished editing, and we should determine if we need 
  // to focus on an updated Grid Area. In either case reset the Grid's 'editing' attribute to false.
  //
  // If the Grid's 'editing' attribute is NOT set then determine if any of the Grid's Grid-Area's are requesting an edit. 
  // If so, call setGridEditing.
  //
  // This does not handle adding a new grid area, that is done by the Grid itself through the onKeyPress event, or it is 
  // done by the gridEditor, using the BlockAppender button. 
  //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!editing) {
      // Determine if a Grid Area is requesting to be updated. 
      const childRequestedEdit = gridChildren.find(child => child.attributes.requestEdit);
      if (childRequestedEdit) setGridEditing(childRequestedEdit);
    }
    return () => {
      // Set the focusTarget if needed. 
      if (editing?.clientId) setFocusTarget(editing);
      // Reset the Grid's 'editing' attribute. 
      setGridEditing(false);
    };
  }, [gridChildren]);

  //
  // If the Grid's 'editing' attribute changes to false, and a focusTarget is set, then .focus() on the focusTarget's DOM element,
  // then reset the focusTarget to null.
  //

  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useRefEffect)(element => {
    const {
      ownerDocument
    } = element;
    if (editing) {
      ownerDocument.querySelector(`[data-block="${clientId}"]`).focus();
    } else if (focusTarget) {
      ownerDocument.querySelector(`[data-block="${focusTarget.clientId}"]`).focus();
      setFocusTarget(null);
    }
  }, [editing]);

  //
  // Register the Block / InnerBlock Props.
  //

  const newGridAreaText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add new Grid Area', 'h2ml');
  const {
    children,
    ...innerBlocksProps
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: {
      minHeight,
      gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateAreas)(colCount, rowCount),
      gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(colTemplates),
      gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(rowTemplates)
    },
    ref: ref
  }), {
    allowedBlocks: ['h2ml/grid-area']
  });

  //
  // The JSX.
  //

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid Settings", 'h2ml'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid area number of Columns", 'h2ml'),
    value: colCount,
    onChange: value => setGridNoColsOrRows(0, value) // 0 === 'col'
    ,
    min: 1,
    max: 8
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid area number of Rows", 'h2ml'),
    value: rowCount,
    onChange: value => setGridNoColsOrRows(1, value) // 1 === 'row'
    ,
    min: 1,
    max: 8
  }), colCount * rowCount > 49 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('The number of cells is greater than the recommended limit.', 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid Columns Settings", 'h2ml'),
    initialOpen: false
  }, [...Array(colCount)].map((_, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: `col-settings-${i}`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column %1$d Width", 'h2ml'), i + 1),
    value: colTemplates[i],
    onChange: value => setGridTemplateColumnOrRow(0, i, value /* 0 === 'col' */)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid Rows Settings", 'h2ml'),
    initialOpen: false
  }, [...Array(rowCount)].map((_, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: `row-settings-${i}`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Row %1$d Height", 'h2ml'), i + 1),
    value: rowTemplates[i],
    onChange: value => setGridTemplateColumnOrRow(1, i, value) /* 0 === 'row' */
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid Minimum Height", 'h2ml'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid Minimum Height", 'h2ml'),
    value: minHeight,
    onChange: newMinHeight => setGridMinHeight(newMinHeight)
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_local_components_GridEditor__WEBPACK_IMPORTED_MODULE_9__.GridEditor, {
    gridClientId: clientId,
    colCount: colCount,
    rowCount: rowCount,
    editing: editing
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-grid-areas"
  }, !editing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-grid-area-appender-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "addNewGridAreaContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: newGridAreaText
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "addNewGridAreaWrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "addNewGridArea"
  }, newGridAreaText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    id: "addNewGridArea",
    className: "addNewGridArea",
    isSmall: true,
    onClick: () => setGridEditing(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
  })))))))))));
};

/*
 * The Block Actions.
 */

const GridEditWrapper = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)((dispatch, ownProps, registry) => ({
  //
  // Update number of columns / rows, clean up the relevant templates, and finally set the total number of Grid Area's.
  //
  setGridNoColsOrRows(type, count) {
    const {
      attributes,
      setAttributes
    } = ownProps;
    // Determine if we're setting Columns or Rows.
    const options = ['col', 'row'];
    type = options[type];
    // Create a copy of the existing Column / Row definition.
    const definitions = {
      ...attributes[`${type}Definitions`]
    };
    const countDelta = count - definitions.count;
    // Clean up Column / Row templates.
    const unit = type === 'col' ? '1fr' : 'max-content';
    definitions.templates.splice(...(countDelta > 0 ? [definitions.templates.length, 0, ...Array.from(Array(countDelta)).map(_ => unit)] :
    // Adding Columns / Rows
    [count, definitions.templates.length - 1]) // Removing Columns / Rows
    );
    // Update the definition's count value and then set the attrbute. 
    definitions.count = count;
    setAttributes({
      [`${type}Definitions`]: definitions
    });
  },
  //
  // Update templates html for specific Columns / Rows.
  //
  setGridTemplateColumnOrRow(type, index, template) {
    const {
      attributes,
      setAttributes
    } = ownProps;
    // Determine if we're generating a Columns or Rows template
    const options = ['col', 'row'];
    type = options[type];
    // Create a copy of the existing Column / Row definition.
    const {
      count,
      templates
    } = attributes[`${type}Definitions`];
    const templatesCopy = [...templates];
    // Update the given Column / Row template and set the attribute.
    const unit = type === 'col' ? '1fr' : 'max-content';
    templatesCopy[index] = template ? template : unit;
    setAttributes({
      [`${type}Definitions`]: {
        count,
        templates: templatesCopy
      }
    });
  },
  //
  // Update the Grid's Minimum Height
  //	
  setGridMinHeight(minHeight) {
    const {
      setAttributes
    } = ownProps;
    setAttributes({
      minHeight
    });
  },
  //
  // Set the Grid 'editing' attribute
  //
  setGridEditing(value) {
    const {
      setAttributes
    } = ownProps;
    setAttributes({
      editing: value
    });
  },
  //
  // When a Grid-Area or any of it's children are selcted, visually move that item to the top of the 
  // stacking context. (this is not saved as an attribute, and is purely htmlFor convenience in the editor).
  //
  setGridAreasEditorStackingOrder(selectedBlockClientId, selectedGridItemRootBlockClientId) {
    const {
      clientId
    } = ownProps;
    const {
      setSelectedGridArea
    } = dispatch('h2ml/grid_area_store');
    if (selectedGridItemRootBlockClientId === clientId) {
      const {
        getBlock,
        getBlockParentsByBlockName,
        getBlocks
      } = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
      //
      const parents = getBlock(selectedBlockClientId).name !== 'h2ml/grid-area' ? getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid', 'h2ml/grid-area'], true) : [selectedBlockClientId, ...getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid', 'h2ml/grid-area'], true)];
      //
      const selectedBlockParentsStackingOrder = parents.reduce((res, parentId, i, self) => {
        let parentBlock = getBlock(parentId);
        if (parentBlock.name === 'h2ml/grid-area') {
          res.push({
            clientId: parentId,
            editorStackingOrder: getBlocks(self[++i]).reduce((res, cur) => cur.attributes.stackingOrder >= res ? cur.attributes.stackingOrder + 1 : res, 0)
          });
        }
        return res;
      }, []);
      //
      setSelectedGridArea({
        clientId: selectedBlockClientId,
        parents: selectedBlockParentsStackingOrder
      });
    } else if (!selectedGridItemRootBlockClientId) {
      setSelectedGridArea(null);
    }
  }
}))(GridEdit);

/*
 * Export the Block.
 */

function Edit(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GridEditWrapper, props);
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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/grid.js");
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
  //
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/local_components/GridEditor/index.js":
/*!**************************************************!*\
  !*** ./src/local_components/GridEditor/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridEditor": () => (/* binding */ GridEditor)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



/**
* Event callback Function for starting / updating the selecting of a Grid-Area Area
*/

const doGridHelperSelection = (e, coords, res) => {
  // Reset the grid area coords on mousedown.
  if (e.type === 'mousedown') res = null;
  // Determine if we're updating an existing selection (dragging), or starting a new one (clicking).
  const startX = res?.store?.x ? res?.store?.x : Number(coords.cellX);
  const startY = res?.store?.y ? res?.store?.y : Number(coords.cellY);
  const endX = Number(coords.cellX);
  const endY = Number(coords.cellY);
  // Calculate and store the new Coords values.
  res = {
    store: {
      x: startX,
      y: startY
    },
    start: {
      x: Math.min(startX, endX),
      y: Math.min(startY, endY)
    },
    end: {
      x: Math.max(startX, endX),
      y: Math.max(startY, endY)
    }
  };
  res.parsed = (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateGridAreaStartEnd)(res.start.x, res.start.y, res.end.x, res.end.y);
  return res;
};

/**
 * Save Function
 */

const doGridHelperSave = (gridClientId, target, coords) => {
  if (target.clientId) {
    // Hooks.
    const {
      updateBlockAttributes
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    // Update the requested Grid Area.
    updateBlockAttributes(target.clientId, {
      gridArea: coords,
      requestEdit: false
    });
  } else {
    // Hooks.
    const {
      getBlocks
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      insertBlock
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    // Adding a new Grid Area.
    const {
      nextChildStackingOrder,
      nextChildIndex
    } = getBlocks(gridClientId).reduce((res, cur, ind) => {
      res.nextChildStackingOrder = cur.attributes.stackingOrder >= res.nextChildStackingOrder ? cur.attributes.stackingOrder + 1 : res.nextChildStackingOrder;
      res.nextChildIndex = ind + 1;
      return res;
    }, {
      nextChildStackingOrder: 0,
      nextChildIndex: 0
    });
    // Insert the new Grid Area.
    insertBlock((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)('h2ml/grid-area', {
      gridArea: coords,
      stackingOrder: nextChildStackingOrder
    }), nextChildIndex, gridClientId);
  }
};

/** 
 * Local Componentns
 */

const GridHelperCell = props => {
  const {
    cellLabel,
    cellX,
    cellY,
    onMouseDown,
    onMouseEnter
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-area-helper",
    onMouseDown,
    onMouseEnter,
    "data-xcoords": cellX,
    "data-ycoords": cellY,
    style: {
      gridArea: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateGridAreaStartEnd)(cellX, cellY, cellX, cellY)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, `${cellLabel}`, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, `(${cellX}, ${cellY})`)));
};
const GridHelperAppender = props => {
  const {
    style,
    children,
    area
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-grid-area-appender",
    area: area ? area : null,
    style
  }, children);
};

/**
 * The JSX
 */

const GridEditor = props => {
  // Properties.
  const {
    gridClientId,
    colCount,
    rowCount,
    editing
  } = props;
  // State Managers.
  const [gridHelperIsDrawing, setGridHelperIsDrawing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [gridHelperCanSave, setGridHelperCanSave] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [gridHelperCoordRes, setGridHelperCoordRes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  //
  // Handle Finish Editing.
  //
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useRefEffect)(element => {
    const {
      ownerDocument
    } = element;
    const finishSelectingGridArea = () => {
      // Reset State.
      setGridHelperIsDrawing(false);
      // Set State.
      setGridHelperCanSave(true);
    };
    if (gridHelperIsDrawing) {
      ownerDocument.addEventListener('mouseup', finishSelectingGridArea);
    }
    return () => {
      // Cleanup this Document event listener.
      ownerDocument.removeEventListener('mouseup', finishSelectingGridArea);
    };
  }, [gridHelperIsDrawing]);
  //
  // The JSX.
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-helpers",
    ref: ref
  }, Array.from(Array(colCount * rowCount)).map((_, cellIndex) => {
    cellIndex++;
    const cellX = (cellIndex - 1) % colCount + 1;
    const cellY = Math.floor((cellIndex - 1) / colCount) + 1;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GridHelperCell, {
      key: `helper-cell-${cellIndex}`,
      cellLabel: cellIndex,
      cellX,
      cellY,
      onMouseDown: editing ? e => {
        // Reset State.
        setGridHelperCanSave(false);
        // Set State.
        setGridHelperIsDrawing(true);
        setGridHelperCoordRes(doGridHelperSelection(e, {
          cellX,
          cellY
        }, gridHelperCoordRes));
      } : undefined,
      onMouseEnter: gridHelperIsDrawing ? e => {
        // Update Grid Area Selection.
        setGridHelperCoordRes(doGridHelperSelection(e, {
          cellX,
          cellY
        }, gridHelperCoordRes));
      } : undefined
    });
  }), editing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, editing?.clientId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-adding-grid-areas-notice"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Click and drag", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to edit the Grid Area, when you're done click", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save Grid Area", 'h2ml')), ", ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("press", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("E", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("or", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("C", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to cancel.", 'h2ml'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't forget to "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update", 'h2ml')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" the post when you're done.", 'h2ml'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-adding-grid-areas-notice"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Click and drag", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to add a new Grid Area, when you're done click", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save Grid Area", 'h2ml')), ", ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("press", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("E", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("or", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("C", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to cancel.", 'h2ml'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't forget to "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update", 'h2ml')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" the post when you're done.", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GridHelperAppender, {
    className: "grid-grid-area-appender",
    style: gridHelperCoordRes ? {
      gridArea: gridHelperCoordRes.parsed,
      display: 'flex'
    } : undefined
  }, gridHelperCanSave && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    text: editing?.clientId ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Grid Area', 'h2ml') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Grid Area', 'h2ml'),
    label: editing?.clientId ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Grid Area', 'h2ml') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Grid Area', 'h2ml'),
    showTooltip: false,
    variant: "primary",
    onClick: () => {
      // Save the new / updated Grid Area.
      doGridHelperSave(gridClientId, editing, gridHelperCoordRes);
      // Reset state.
      setGridHelperIsDrawing(false);
      setGridHelperIsDrawing(false);
      setGridHelperCoordRes(null);
      // We use useEffect in the main component to reset the Grids 'editing' attriubte, so we don't
      // need to worry about doing it here, this allows us to more easily focus on the correct blocks.
    }
  }), " ")));
};

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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies.
 */



/**
 * The Code
 */

function Save(_ref) {
  let {
    attributes: {
      minHeight,
      colDefinitions: {
        count: colCount,
        templates: colTemplates
      },
      rowDefinitions: {
        count: rowCount,
        templates: rowTemplates
      }
    }
  } = _ref;
  //
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save({
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        minHeight,
        gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateAreas)(colCount, rowCount),
        gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateColumnsOrRows)(colTemplates),
        gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateColumnsOrRows)(rowTemplates)
      }
    })
  });
  //
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}
;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssSafeBase64": () => (/* binding */ cssSafeBase64),
/* harmony export */   "generateGridArea": () => (/* binding */ generateGridArea),
/* harmony export */   "generateGridAreaStartEnd": () => (/* binding */ generateGridAreaStartEnd),
/* harmony export */   "generateGridTemplateAreas": () => (/* binding */ generateGridTemplateAreas),
/* harmony export */   "generateGridTemplateColumnsOrRows": () => (/* binding */ generateGridTemplateColumnsOrRows)
/* harmony export */ });
//
//
//

function cssSafeBase64(string) {
  return window.btoa(string).replace(/\W/g, '');
}

//
//
//

function generateGridArea(x, y) {
  return cssSafeBase64(`${y}/${x}`);
}

//
//
//

function generateGridAreaStartEnd(startX, startY, endX, endY) {
  //
  const start = cssSafeBase64(`${startY}/${startX}`);
  const end = cssSafeBase64(`${endY}/${endX}`);
  return `${start} / ${start} / ${end} / ${end}`;
}

//
// Generate the grid-template-areas, grid-template-columns, and grid-template-rows CSS.
//

function generateGridTemplateAreas(colCount, rowCount) {
  return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `${rowsRes}'${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
    return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`.trim();
  }, '')}'`, '');
}

//
//
//

function generateGridTemplateColumnsOrRows(templates) {
  return templates.reduce((res, cur) => {
    return `${res} ${cur}`;
  }, '');
}

/***/ }),

/***/ "../../common/styles/grid-styles/editor.scss":
/*!***************************************************!*\
  !*** ../../common/styles/grid-styles/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid","version":"0.1.0","title":"Grid","category":"design","description":"Display content in a Grid, across multiple Grid Areas, adding blocks to each Grid Area.","textdomain":"h2ml","keywords":["h2ml","grid"],"attributes":{"minHeight":{"type":"string","default":"min-content"},"colDefinitions":{"type":"object","default":{"count":3,"templates":["1fr","1fr","1fr"]}},"rowDefinitions":{"type":"object","default":{"count":4,"templates":["max-content","max-content","max-content","max-content"]}}},"supports":{"anchor":true,"align":["wide","full"],"reusable":true,"html":true,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":["horizontal","vertical"],"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true,"margin":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkh2ml_gridarea"] = self["webpackChunkh2ml_gridarea"] || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9ncmlkLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvc2F2ZS5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBncmlkID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNy44IDE2LjVINWMtLjMgMC0uNS0uMi0uNS0uNXYtNi4yaDYuOHY2Ljd6bTAtOC4zSDQuNVY1YzAtLjMuMi0uNS41LS41aDYuMnY2Ljd6bTguMyA3LjhjMCAuMy0uMi41LS41LjVoLTYuMnYtNi44aDYuOFYxOXptMC03LjhoLTYuOFY0LjVIMTljLjMgMCAuNS4yLjUuNXY2LjJ6XCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JpZC5qcy5tYXAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Tm90aWNlLFxuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdFRvb2x0aXBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHR3aXRoRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgXG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgXG5cdGNyZWF0ZVJlZHV4U3RvcmUsIFxuXHRyZWdpc3RlclxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5cbmltcG9ydCB7XG5cdHVzZVJlZkVmZmVjdCBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQge1xuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzLFxuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MsXG59IGZyb20gJy4vdXRpbHMuanMnXG5cbmltcG9ydCB7IEdyaWRFZGl0b3IgfSBmcm9tICcuL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvcidcblxuLypcbiogUmVkdXggc3RvcmUgaHRtbEZvciBob2xkaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaDJtbC9ncmlkLWFyZWEsIFxuKiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaDJtbC9ncmlkLWFyZWEgaXMgdmlzdWFsbHkgb24gdG9wIGluIHRoZSBlZGl0b3IuXG4qL1xuXG5yZWdpc3RlcihjcmVhdGVSZWR1eFN0b3JlKFwiaDJtbC9ncmlkX2FyZWFfc3RvcmVcIiwge1xuXHRyZWR1Y2VyKHN0YXRlID0ge1xuXHRcdHNlbGVjdGVkOiB7XG5cdFx0XHR2YWx1ZTogbnVsbFxuXHRcdH0sXG5cdH0sIGFjdGlvbikge1xuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCI6IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRcdFx0Li4uc3RhdGUuc2VsZWN0ZWQsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHRzZXRTZWxlY3RlZEdyaWRBcmVhKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9HUklEX0FSRUFcIixcblx0XHRcdFx0dmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRnZXRTZWxlY3RlZEdyaWRBcmVhKHN0YXRlKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuc2VsZWN0ZWQudmFsdWU7XG5cdFx0fVxuXHR9XG59KSk7XG5cbi8qKlxuICogVGhlIENvZGUuXG4gKi9cblxuY29uc3QgR3JpZEVkaXQgPSAoe1xuXHQvLyBBdHRyaWJ1dGVzLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0bWluSGVpZ2h0LFxuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fSxcblx0XHRlZGl0aW5nXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRHcmlkTm9Db2xzT3JSb3dzLFxuXHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyxcblx0c2V0R3JpZE1pbkhlaWdodCxcblx0c2V0R3JpZEVkaXRpbmcsXG5cdC8vIFJlZHV4IFNldHRlcnMuXG5cdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZFxufSkgPT4ge1xuXG5cdC8vXG5cdC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbi4gXG5cdC8vIChVc2VkIGh0bWxGb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyLCBhbmQgYWRkaW5nIC8gZWRpdGluZyBHcmlkLUFyZWEncylcblx0Ly9cblxuXHRjb25zdCB7IHNlbGVjdGVkQmxvY2tDbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLCBncmlkQ2hpbGRyZW4gfSA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCwgZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRCbG9ja0NsaWVudElkID0gZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkID0gc2VsZWN0ZWRCbG9ja0NsaWVudElkID8gZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBbJ2gybWwvZ3JpZCddLCB0cnVlKVswXSA6IGZhbHNlO1xuXHRcdGNvbnN0IGdyaWRDaGlsZHJlbiA9IGdldEJsb2NrcyhjbGllbnRJZCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRCbG9ja0NsaWVudElkLFxuXHRcdFx0c2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLFxuXHRcdFx0Z3JpZENoaWxkcmVuXG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdC8vXG5cdC8vIEhhbmRsZSB1cGRhdGluZyB0aGUgc3RhY2tpbmcgb3JkZXIgaHRtbEZvciBhbnkgY3VycmVudGx5IHNlbGVjdGVkIEdyaWQgQXJlYSdzIHdpdGhpbiB0aGUgZWRpdG9yLlxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcihzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCk7XG5cdH0sIFtzZWxlY3RlZEJsb2NrQ2xpZW50SWRdKTtcblxuXHQvL1xuXHQvLyBmb2N1c1RhcmdldCBzdGF0ZSwgdGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB3ZSBhdXRvLWZvY3VzIG9uIHRoZSBjb3JyZWN0IEdyaWQgQXJlYSB3aGVuIG1ha2luZyBjaGFuZ2VzIHRvIHRoZSBHcmlkLlxuXHQvL1xuXG5cdGNvbnN0IFtmb2N1c1RhcmdldCwgc2V0Rm9jdXNUYXJnZXRdID0gdXNlU3RhdGUobnVsbCk7XG5cblx0Ly8gXG5cdC8vIElmIGVpdGhlciBvZiB0aGUgR3JpZCdzIHRvdGFsIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzIChhZGRpbmcpLCBvciBpZiB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUgb2Ygb25lIG9mIHRoZSBHcmlkJ3MgXG5cdC8vIGNoYW5nZXMgKHVwZGF0aW5nKSB0aGVuIGRvIHRoZSBmb2xsb3dpbmc6IFxuXHQvLyBcblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGlzIGFscmVhZHkgc2V0IHRoZW4gd2UgaGF2ZSBqdXN0IGZpbmlzaGVkIGVkaXRpbmcsIGFuZCB3ZSBzaG91bGQgZGV0ZXJtaW5lIGlmIHdlIG5lZWQgXG5cdC8vIHRvIGZvY3VzIG9uIGFuIHVwZGF0ZWQgR3JpZCBBcmVhLiBJbiBlaXRoZXIgY2FzZSByZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgdG8gZmFsc2UuXG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBOT1Qgc2V0IHRoZW4gZGV0ZXJtaW5lIGlmIGFueSBvZiB0aGUgR3JpZCdzIEdyaWQtQXJlYSdzIGFyZSByZXF1ZXN0aW5nIGFuIGVkaXQuIFxuXHQvLyBJZiBzbywgY2FsbCBzZXRHcmlkRWRpdGluZy5cblx0Ly9cblx0Ly8gVGhpcyBkb2VzIG5vdCBoYW5kbGUgYWRkaW5nIGEgbmV3IGdyaWQgYXJlYSwgdGhhdCBpcyBkb25lIGJ5IHRoZSBHcmlkIGl0c2VsZiB0aHJvdWdoIHRoZSBvbktleVByZXNzIGV2ZW50LCBvciBpdCBpcyBcblx0Ly8gZG9uZSBieSB0aGUgZ3JpZEVkaXRvciwgdXNpbmcgdGhlIEJsb2NrQXBwZW5kZXIgYnV0dG9uLiBcblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKCFlZGl0aW5nKSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgYSBHcmlkIEFyZWEgaXMgcmVxdWVzdGluZyB0byBiZSB1cGRhdGVkLiBcblx0XHRcdGNvbnN0IGNoaWxkUmVxdWVzdGVkRWRpdCA9IGdyaWRDaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmF0dHJpYnV0ZXMucmVxdWVzdEVkaXQpO1xuXHRcdFx0aWYoY2hpbGRSZXF1ZXN0ZWRFZGl0KSBzZXRHcmlkRWRpdGluZyhjaGlsZFJlcXVlc3RlZEVkaXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Ly8gU2V0IHRoZSBmb2N1c1RhcmdldCBpZiBuZWVkZWQuIFxuXHRcdFx0aWYoZWRpdGluZz8uY2xpZW50SWQpIHNldEZvY3VzVGFyZ2V0KGVkaXRpbmcpO1xuXHRcdFx0Ly8gUmVzZXQgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlLiBcblx0XHRcdHNldEdyaWRFZGl0aW5nKGZhbHNlKTtcblx0XHR9XG5cdH0sIFtncmlkQ2hpbGRyZW5dKTtcblxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgY2hhbmdlcyB0byBmYWxzZSwgYW5kIGEgZm9jdXNUYXJnZXQgaXMgc2V0LCB0aGVuIC5mb2N1cygpIG9uIHRoZSBmb2N1c1RhcmdldCdzIERPTSBlbGVtZW50LFxuXHQvLyB0aGVuIHJlc2V0IHRoZSBmb2N1c1RhcmdldCB0byBudWxsLlxuXHQvL1xuXHRcblx0Y29uc3QgcmVmID0gdXNlUmVmRWZmZWN0KChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbGVtZW50O1xuXHRcdGlmKGVkaXRpbmcpIHtcblx0XHRcdG93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmxvY2s9XCIke2NsaWVudElkfVwiXWApLmZvY3VzKCk7XG5cdFx0fSBlbHNlIGlmKGZvY3VzVGFyZ2V0KSB7XG5cdFx0XHRvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJsb2NrPVwiJHtmb2N1c1RhcmdldC5jbGllbnRJZH1cIl1gKS5mb2N1cygpO1xuXHRcdFx0c2V0Rm9jdXNUYXJnZXQobnVsbClcblx0XHR9XG5cdH0sIFtlZGl0aW5nXSk7XG5cblx0Ly9cblx0Ly8gUmVnaXN0ZXIgdGhlIEJsb2NrIC8gSW5uZXJCbG9jayBQcm9wcy5cblx0Ly9cblxuXHRjb25zdCBuZXdHcmlkQXJlYVRleHQgPSBfXygnQWRkIG5ldyBHcmlkIEFyZWEnLCAnaDJtbCcpO1xuXHRjb25zdCB7IGNoaWxkcmVuLCAuLi5pbm5lckJsb2Nrc1Byb3BzIH0gPSB1c2VJbm5lckJsb2Nrc1Byb3BzKFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0bWluSGVpZ2h0LFxuXHRcdFx0XHRncmlkVGVtcGxhdGVBcmVhczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyhjb2xDb3VudCwgcm93Q291bnQpLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoY29sVGVtcGxhdGVzKSxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlUm93czogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKHJvd1RlbXBsYXRlcylcblx0XHRcdH0sXG5cdFx0XHRyZWY6IHJlZlxuXHRcdH0pLCB7XG5cdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ2gybWwvZ3JpZC1hcmVhJ10sXG5cdFx0fVxuXHQpO1xuXG5cdC8vXG5cdC8vIFRoZSBKU1guXG5cdC8vXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdHsvKjxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRBbGlnbm1lbnR9XG5cdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHQvPiovfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oXCJHcmlkIFNldHRpbmdzXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkdyaWQgYXJlYSBudW1iZXIgb2YgQ29sdW1uc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xDb3VudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZE5vQ29sc09yUm93cygwLCB2YWx1ZSl9IC8vIDAgPT09ICdjb2wnXG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17OH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiR3JpZCBhcmVhIG51bWJlciBvZiBSb3dzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkTm9Db2xzT3JSb3dzKDEsIHZhbHVlKX0gLy8gMSA9PT0gJ3Jvdydcblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7KGNvbENvdW50ICogcm93Q291bnQpID4gNDkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxOb3RpY2Ugc3RhdHVzPVwid2FybmluZ1wiIGlzRGlzbWlzc2libGU9e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J1RoZSBudW1iZXIgb2YgY2VsbHMgaXMgZ3JlYXRlciB0aGFuIHRoZSByZWNvbW1lbmRlZCBsaW1pdC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaDJtbCdcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiR3JpZCBDb2x1bW5zIFNldHRpbmdzXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkoY29sQ291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YGNvbC1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiQ29sdW1uICUxJGQgV2lkdGhcIiwgJ2gybWwnKSwgaSArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbFRlbXBsYXRlc1tpXX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdygwLCBpLCB2YWx1ZSAvKiAwID09PSAnY29sJyAqLyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiR3JpZCBSb3dzIFNldHRpbmdzXCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkocm93Q291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHJvdy1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiUm93ICUxJGQgSGVpZ2h0XCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMSwgaSwgdmFsdWUpIC8qIDAgPT09ICdyb3cnICovfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIkdyaWQgTWluaW11bSBIZWlnaHRcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiR3JpZCBNaW5pbXVtIEhlaWdodFwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXttaW5IZWlnaHR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e25ld01pbkhlaWdodCA9PiBzZXRHcmlkTWluSGVpZ2h0KG5ld01pbkhlaWdodCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfT5cblx0XHRcdFx0PEdyaWRFZGl0b3Jcblx0XHRcdFx0XHRncmlkQ2xpZW50SWQ9e2NsaWVudElkfVxuXHRcdFx0XHRcdGNvbENvdW50PXtjb2xDb3VudH1cblx0XHRcdFx0XHRyb3dDb3VudD17cm93Q291bnR9XG5cdFx0XHRcdFx0ZWRpdGluZz17ZWRpdGluZ31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYXNcIj5cblx0XHRcdFx0XHR7IShlZGl0aW5nKSAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXItd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkTmV3R3JpZEFyZWFDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwIHRleHQ9e25ld0dyaWRBcmVhVGV4dH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkTmV3R3JpZEFyZWFXcmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhZGROZXdHcmlkQXJlYVwiPntuZXdHcmlkQXJlYVRleHR9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImFkZE5ld0dyaWRBcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEdyaWRFZGl0aW5nKHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPjxwYXRoIGQ9XCJNMTggMTEuMmgtNS4yVjZoLTEuNnY1LjJINnYxLjZoNS4yVjE4aDEuNnYtNS4ySDE4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLypcbiAqIFRoZSBCbG9jayBBY3Rpb25zLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0V3JhcHBlciA9IHdpdGhEaXNwYXRjaChcblx0KGRpc3BhdGNoLCBvd25Qcm9wcywgcmVnaXN0cnkpID0+ICh7XG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgbnVtYmVyIG9mIGNvbHVtbnMgLyByb3dzLCBjbGVhbiB1cCB0aGUgcmVsZXZhbnQgdGVtcGxhdGVzLCBhbmQgZmluYWxseSBzZXQgdGhlIHRvdGFsIG51bWJlciBvZiBHcmlkIEFyZWEncy5cblx0XHQvL1xuXHRcdHNldEdyaWROb0NvbHNPclJvd3ModHlwZSwgY291bnQpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgc2V0dGluZyBDb2x1bW5zIG9yIFJvd3MuXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWydjb2wnLCAncm93J107XG5cdFx0XHR0eXBlID0gb3B0aW9uc1t0eXBlXTtcblx0XHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGV4aXN0aW5nIENvbHVtbiAvIFJvdyBkZWZpbml0aW9uLlxuXHRcdFx0Y29uc3QgZGVmaW5pdGlvbnMgPSB7IC4uLmF0dHJpYnV0ZXNbYCR7dHlwZX1EZWZpbml0aW9uc2BdIH07XG5cdFx0XHRjb25zdCBjb3VudERlbHRhID0gY291bnQgLSBkZWZpbml0aW9ucy5jb3VudDtcblx0XHRcdC8vIENsZWFuIHVwIENvbHVtbiAvIFJvdyB0ZW1wbGF0ZXMuXG5cdFx0XHRjb25zdCB1bml0ID0gdHlwZSA9PT0gJ2NvbCcgPyAnMWZyJyA6ICdtYXgtY29udGVudCc7XG5cdFx0XHRkZWZpbml0aW9ucy50ZW1wbGF0ZXMuc3BsaWNlKC4uLmNvdW50RGVsdGEgPiAwID9cblx0XHRcdFx0W2RlZmluaXRpb25zLnRlbXBsYXRlcy5sZW5ndGgsIDAsIC4uLkFycmF5LmZyb20oQXJyYXkoY291bnREZWx0YSkpLm1hcChfID0+IHVuaXQpXSA6IC8vIEFkZGluZyBDb2x1bW5zIC8gUm93c1xuXHRcdFx0XHRbY291bnQsIGRlZmluaXRpb25zLnRlbXBsYXRlcy5sZW5ndGggLSAxXSAvLyBSZW1vdmluZyBDb2x1bW5zIC8gUm93c1xuXHRcdFx0KTtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZGVmaW5pdGlvbidzIGNvdW50IHZhbHVlIGFuZCB0aGVuIHNldCB0aGUgYXR0cmJ1dGUuIFxuXHRcdFx0ZGVmaW5pdGlvbnMuY291bnQgPSBjb3VudDtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBbYCR7dHlwZX1EZWZpbml0aW9uc2BdOiBkZWZpbml0aW9ucyB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRlbXBsYXRlcyBodG1sIGZvciBzcGVjaWZpYyBDb2x1bW5zIC8gUm93cy5cblx0XHQvL1xuXHRcdHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KHR5cGUsIGluZGV4LCB0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdC8vIERldGVybWluZSBpZiB3ZSdyZSBnZW5lcmF0aW5nIGEgQ29sdW1ucyBvciBSb3dzIHRlbXBsYXRlXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWydjb2wnLCAncm93J107XG5cdFx0XHR0eXBlID0gb3B0aW9uc1t0eXBlXTtcblx0XHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGV4aXN0aW5nIENvbHVtbiAvIFJvdyBkZWZpbml0aW9uLlxuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRjb3VudCwgXG5cdFx0XHRcdHRlbXBsYXRlc1xuXHRcdFx0fSA9IGF0dHJpYnV0ZXNbYCR7dHlwZX1EZWZpbml0aW9uc2BdO1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVzQ29weSA9IFsuLi50ZW1wbGF0ZXNdO1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBnaXZlbiBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgYW5kIHNldCB0aGUgYXR0cmlidXRlLlxuXHRcdFx0Y29uc3QgdW5pdCA9ICh0eXBlID09PSAnY29sJykgPyAnMWZyJyA6ICdtYXgtY29udGVudCc7XG5cdFx0XHR0ZW1wbGF0ZXNDb3B5W2luZGV4XSA9ICh0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogdW5pdCk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgW2Ake3R5cGV9RGVmaW5pdGlvbnNgXToge1xuXHRcdFx0XHRjb3VudCxcblx0XHRcdFx0dGVtcGxhdGVzOiB0ZW1wbGF0ZXNDb3B5XG5cdFx0XHR9IH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGhlIEdyaWQncyBNaW5pbXVtIEhlaWdodFxuXHRcdC8vXHRcblx0XHRzZXRHcmlkTWluSGVpZ2h0KG1pbkhlaWdodCkge1xuXHRcdFx0Y29uc3Qge3NldEF0dHJpYnV0ZXN9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbWluSGVpZ2h0IH0pXG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgR3JpZCAnZWRpdGluZycgYXR0cmlidXRlXG5cdFx0Ly9cblx0XHRzZXRHcmlkRWRpdGluZyh2YWx1ZSkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBlZGl0aW5nOiB2YWx1ZSB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gV2hlbiBhIEdyaWQtQXJlYSBvciBhbnkgb2YgaXQncyBjaGlsZHJlbiBhcmUgc2VsY3RlZCwgdmlzdWFsbHkgbW92ZSB0aGF0IGl0ZW0gdG8gdGhlIHRvcCBvZiB0aGUgXG5cdFx0Ly8gc3RhY2tpbmcgY29udGV4dC4gKHRoaXMgaXMgbm90IHNhdmVkIGFzIGFuIGF0dHJpYnV0ZSwgYW5kIGlzIHB1cmVseSBodG1sRm9yIGNvbnZlbmllbmNlIGluIHRoZSBlZGl0b3IpLlxuXHRcdC8vXG5cdFx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcihzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCkge1xuXHRcdFx0Y29uc3QgeyBjbGllbnRJZCB9ID0gb3duUHJvcHM7XG5cdFx0XHRjb25zdCB7IHNldFNlbGVjdGVkR3JpZEFyZWEgfSA9IGRpc3BhdGNoKCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdFx0aWYgKHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCA9PT0gY2xpZW50SWQpIHtcblx0XHRcdFx0Y29uc3QgeyBnZXRCbG9jaywgZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUsIGdldEJsb2NrcyB9ID0gcmVnaXN0cnkuc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBwYXJlbnRzID0gZ2V0QmxvY2soc2VsZWN0ZWRCbG9ja0NsaWVudElkKS5uYW1lICE9PSAnaDJtbC9ncmlkLWFyZWEnID9cblx0XHRcdFx0XHRnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIFsnaDJtbC9ncmlkJywgJ2gybWwvZ3JpZC1hcmVhJ10sIHRydWUpIDpcblx0XHRcdFx0XHRbc2VsZWN0ZWRCbG9ja0NsaWVudElkLCAuLi5nZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIFsnaDJtbC9ncmlkJywgJ2gybWwvZ3JpZC1hcmVhJ10sIHRydWUpXTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyID0gcGFyZW50cy5yZWR1Y2UoKHJlcywgcGFyZW50SWQsIGksIHNlbGYpID0+IHtcblx0XHRcdFx0XHRsZXQgcGFyZW50QmxvY2sgPSBnZXRCbG9jayhwYXJlbnRJZCk7XG5cdFx0XHRcdFx0aWYgKHBhcmVudEJsb2NrLm5hbWUgPT09ICdoMm1sL2dyaWQtYXJlYScpIHtcblx0XHRcdFx0XHRcdHJlcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ6IHBhcmVudElkLFxuXHRcdFx0XHRcdFx0XHRlZGl0b3JTdGFja2luZ09yZGVyOiBnZXRCbG9ja3Moc2VsZlsrK2ldKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyID49IHJlcyA/IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgKyAxIDogcmVzLCAwKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH0sIFtdKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh7XG5cdFx0XHRcdFx0Y2xpZW50SWQ6IHNlbGVjdGVkQmxvY2tDbGllbnRJZCxcblx0XHRcdFx0XHRwYXJlbnRzOiBzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKCFzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYShudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG4pKEdyaWRFZGl0KTtcblxuLypcbiAqIEV4cG9ydCB0aGUgQmxvY2suXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdChwcm9wcykge1xuXHRyZXR1cm4gPEdyaWRFZGl0V3JhcHBlciB7Li4ucHJvcHN9IC8+O1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgZ3JpZCBhcyBpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8qKlxuICogU3R5bGVcbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSdcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgQmxvY2tcbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG5cdC8vXG5cdGljb24sXG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6IFNhdmUsXG59KTtcblxuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHRzZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHsgY3JlYXRlQmxvY2sgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyB1c2VSZWZFZmZlY3QgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG4vKipcbiogRXZlbnQgY2FsbGJhY2sgRnVuY3Rpb24gZm9yIHN0YXJ0aW5nIC8gdXBkYXRpbmcgdGhlIHNlbGVjdGluZyBvZiBhIEdyaWQtQXJlYSBBcmVhXG4qL1xuXG5jb25zdCBkb0dyaWRIZWxwZXJTZWxlY3Rpb24gPSAoZSwgY29vcmRzLCByZXMpID0+IHtcblx0Ly8gUmVzZXQgdGhlIGdyaWQgYXJlYSBjb29yZHMgb24gbW91c2Vkb3duLlxuXHRpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykgcmVzID0gbnVsbDtcblx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHVwZGF0aW5nIGFuIGV4aXN0aW5nIHNlbGVjdGlvbiAoZHJhZ2dpbmcpLCBvciBzdGFydGluZyBhIG5ldyBvbmUgKGNsaWNraW5nKS5cblx0Y29uc3Qgc3RhcnRYID0gcmVzPy5zdG9yZT8ueCA/IHJlcz8uc3RvcmU/LnggOiBOdW1iZXIoY29vcmRzLmNlbGxYKTtcblx0Y29uc3Qgc3RhcnRZID0gcmVzPy5zdG9yZT8ueSA/IHJlcz8uc3RvcmU/LnkgOiBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Y29uc3QgZW5kWCA9IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBlbmRZID0gTnVtYmVyKGNvb3Jkcy5jZWxsWSk7XG5cdC8vIENhbGN1bGF0ZSBhbmQgc3RvcmUgdGhlIG5ldyBDb29yZHMgdmFsdWVzLlxuXHRyZXMgPSB7XG5cdFx0c3RvcmU6IHtcblx0XHRcdHg6IHN0YXJ0WCxcblx0XHRcdHk6IHN0YXJ0WSxcblx0XHR9LFxuXHRcdHN0YXJ0OiB7XG5cdFx0XHR4OiBNYXRoLm1pbihzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5taW4oc3RhcnRZLCBlbmRZKVxuXHRcdH0sXG5cdFx0ZW5kOiB7XG5cdFx0XHR4OiBNYXRoLm1heChzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5tYXgoc3RhcnRZLCBlbmRZKSxcblx0XHR9XG5cdH07XG5cdHJlcy5wYXJzZWQgPSBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQocmVzLnN0YXJ0LngsIHJlcy5zdGFydC55LCByZXMuZW5kLngsIHJlcy5lbmQueSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8qKlxuICogU2F2ZSBGdW5jdGlvblxuICovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNhdmUgPSAoZ3JpZENsaWVudElkLCB0YXJnZXQsIGNvb3JkcykgPT4ge1xuXHRpZiAodGFyZ2V0LmNsaWVudElkKSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3Qge3VwZGF0ZUJsb2NrQXR0cmlidXRlc30gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBVcGRhdGUgdGhlIHJlcXVlc3RlZCBHcmlkIEFyZWEuXG5cdFx0dXBkYXRlQmxvY2tBdHRyaWJ1dGVzKHRhcmdldC5jbGllbnRJZCwge1xuXHRcdFx0Z3JpZEFyZWE6IGNvb3Jkcyxcblx0XHRcdHJlcXVlc3RFZGl0OiBmYWxzZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgeyBpbnNlcnRCbG9jayB9ID0gZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gQWRkaW5nIGEgbmV3IEdyaWQgQXJlYS5cblx0XHRjb25zdCB7XG5cdFx0XHRuZXh0Q2hpbGRTdGFja2luZ09yZGVyLFxuXHRcdFx0bmV4dENoaWxkSW5kZXhcblx0XHR9ID0gZ2V0QmxvY2tzKGdyaWRDbGllbnRJZCkucmVkdWNlKFxuXHRcdFx0KHJlcywgY3VyLCBpbmQpID0+IHtcblx0XHRcdFx0cmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPSBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyID49IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyID8gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciArIDEgOiByZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlcjtcblx0XHRcdFx0cmVzLm5leHRDaGlsZEluZGV4ID0gaW5kICsgMTtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0sIHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXI6IDAsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleDogMFxuXHRcdH1cblx0XHQpO1xuXHRcdC8vIEluc2VydCB0aGUgbmV3IEdyaWQgQXJlYS5cblx0XHRpbnNlcnRCbG9jayhjcmVhdGVCbG9jaygnaDJtbC9ncmlkLWFyZWEnLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0c3RhY2tpbmdPcmRlcjogbmV4dENoaWxkU3RhY2tpbmdPcmRlclxuXHRcdH0pLCBuZXh0Q2hpbGRJbmRleCwgZ3JpZENsaWVudElkKTtcblx0fVxufVxuXG4vKiogXG4gKiBMb2NhbCBDb21wb25lbnRuc1xuICovXG5cbmNvbnN0IEdyaWRIZWxwZXJDZWxsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjZWxsTGFiZWwsXG5cdFx0Y2VsbFgsXG5cdFx0Y2VsbFksXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZUVudGVyLFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1hcmVhLWhlbHBlclwiXG5cdFx0ey4uLnsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciB9fVxuXHRcdGRhdGEteGNvb3Jkcz17Y2VsbFh9XG5cdFx0ZGF0YS15Y29vcmRzPXtjZWxsWX1cblx0XHRzdHlsZT17e1xuXHRcdFx0Z3JpZEFyZWE6IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChjZWxsWCAsIGNlbGxZLCBjZWxsWCwgY2VsbFkpXG5cdFx0fX1cblx0PlxuXHRcdDxzcGFuPlxuXHRcdFx0e2Ake2NlbGxMYWJlbH1gfSA8c3ViPntgKCR7Y2VsbFh9LCAke2NlbGxZfSlgfTwvc3ViPlxuXHRcdDwvc3Bhbj5cblx0PC9kaXY+XG59XG5cbmNvbnN0IEdyaWRIZWxwZXJBcHBlbmRlciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0c3R5bGUsXG5cdFx0Y2hpbGRyZW4sXG5cdFx0YXJlYVxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0YXJlYT17YXJlYSA/IGFyZWEgOiBudWxsfVxuXHRcdFx0ey4uLnsgc3R5bGUgfX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgR3JpZEVkaXRvciA9IChwcm9wcykgPT4ge1xuXHQvLyBQcm9wZXJ0aWVzLlxuXHRjb25zdCB7XG5cdFx0Z3JpZENsaWVudElkLFxuXHRcdGNvbENvdW50LFxuXHRcdHJvd0NvdW50LFxuXHRcdGVkaXRpbmdcblx0fSA9IHByb3BzO1xuXHQvLyBTdGF0ZSBNYW5hZ2Vycy5cblx0Y29uc3QgW2dyaWRIZWxwZXJJc0RyYXdpbmcsIHNldEdyaWRIZWxwZXJJc0RyYXdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNhblNhdmUsIHNldEdyaWRIZWxwZXJDYW5TYXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2dyaWRIZWxwZXJDb29yZFJlcywgc2V0R3JpZEhlbHBlckNvb3JkUmVzXSA9IHVzZVN0YXRlKG51bGwpO1xuXHQvL1xuXHQvLyBIYW5kbGUgRmluaXNoIEVkaXRpbmcuXG5cdC8vXG5cdGNvbnN0IHJlZiA9IHVzZVJlZkVmZmVjdCgoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWxlbWVudDtcblx0XHRjb25zdCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSA9ICgpID0+IHtcblx0XHRcdC8vIFJlc2V0IFN0YXRlLlxuXHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZSh0cnVlKTtcblx0XHR9XG5cdFx0aWYoZ3JpZEhlbHBlcklzRHJhd2luZykge1xuXHRcdFx0b3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Ly8gQ2xlYW51cCB0aGlzIERvY3VtZW50IGV2ZW50IGxpc3RlbmVyLlxuXHRcdFx0b3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEpO1xuXHRcdH07XG5cdH0sIFtncmlkSGVscGVySXNEcmF3aW5nXSk7XG5cdC8vXG5cdC8vIFRoZSBKU1guXG5cdC8vXG5cdHJldHVybiA8ZGl2IFxuXHRcdGNsYXNzTmFtZT1cImdyaWQtaGVscGVyc1wiXG5cdFx0cmVmPXtyZWZ9XG5cdD5cblx0XHR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCAqIHJvd0NvdW50KSkubWFwKChfLCBjZWxsSW5kZXgpID0+IHtcblx0XHRcdGNlbGxJbmRleCsrO1xuXHRcdFx0Y29uc3QgY2VsbFggPSAoKGNlbGxJbmRleCAtIDEpICUgY29sQ291bnQpICsgMTtcblx0XHRcdGNvbnN0IGNlbGxZID0gTWF0aC5mbG9vcigoY2VsbEluZGV4IC0gMSkgLyBjb2xDb3VudCkgKyAxO1xuXHRcdFx0cmV0dXJuIDxHcmlkSGVscGVyQ2VsbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdGtleTogYGhlbHBlci1jZWxsLSR7Y2VsbEluZGV4fWAsXG5cdFx0XHRcdFx0Y2VsbExhYmVsOiBjZWxsSW5kZXgsXG5cdFx0XHRcdFx0Y2VsbFgsXG5cdFx0XHRcdFx0Y2VsbFksXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IChlZGl0aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIFJlc2V0IFN0YXRlLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNhblNhdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0Ly8gU2V0IFN0YXRlLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyh0cnVlKTtcblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDb29yZFJlcyhkb0dyaWRIZWxwZXJTZWxlY3Rpb24oZSwgeyBjZWxsWCwgY2VsbFkgfSwgZ3JpZEhlbHBlckNvb3JkUmVzKSk7XG5cdFx0XHRcdFx0fSA6IHVuZGVmaW5lZCksXG5cdFx0XHRcdFx0b25Nb3VzZUVudGVyOiAoZ3JpZEhlbHBlcklzRHJhd2luZyA/IChlKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgR3JpZCBBcmVhIFNlbGVjdGlvbi5cblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDb29yZFJlcyhkb0dyaWRIZWxwZXJTZWxlY3Rpb24oZSwgeyBjZWxsWCwgY2VsbFkgfSwgZ3JpZEhlbHBlckNvb3JkUmVzKSk7XG5cdFx0XHRcdFx0fSA6IHVuZGVmaW5lZClcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0fSl9XG5cdFx0e2VkaXRpbmcgJiYgKFxuXHRcdFx0PD5cblx0XHRcdFx0e2VkaXRpbmc/LmNsaWVudElkID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1hZGRpbmctZ3JpZC1hcmVhcy1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+e19fKFwiQ2xpY2sgYW5kIGRyYWdcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gZWRpdCB0aGUgR3JpZCBBcmVhLCB3aGVuIHlvdSdyZSBkb25lIGNsaWNrXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiU2F2ZSBHcmlkIEFyZWFcIiwgJ2gybWwnKX08L3N0cm9uZz4sIHtfXyhcInByZXNzXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiRVwiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJvclwiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkNcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gY2FuY2VsLlwiLCAnaDJtbCcpfTxiciAvPntfXyhcIkRvbid0IGZvcmdldCB0byBcIil9PHN0cm9uZz57X18oXCJVcGRhdGVcIiwgJ2gybWwnKX08L3N0cm9uZz57X18oXCIgdGhlIHBvc3Qgd2hlbiB5b3UncmUgZG9uZS5cIiwgJ2gybWwnKX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWFkZGluZy1ncmlkLWFyZWFzLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz57X18oXCJDbGljayBhbmQgZHJhZ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBhZGQgYSBuZXcgR3JpZCBBcmVhLCB3aGVuIHlvdSdyZSBkb25lIGNsaWNrXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiU2F2ZSBHcmlkIEFyZWFcIiwgJ2gybWwnKX08L3N0cm9uZz4sIHtfXyhcInByZXNzXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiRVwiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJvclwiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkNcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gY2FuY2VsLlwiLCAnaDJtbCcpfTxiciAvPntfXyhcIkRvbid0IGZvcmdldCB0byBcIil9PHN0cm9uZz57X18oXCJVcGRhdGVcIiwgJ2gybWwnKX08L3N0cm9uZz57X18oXCIgdGhlIHBvc3Qgd2hlbiB5b3UncmUgZG9uZS5cIiwgJ2gybWwnKX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxHcmlkSGVscGVyQXBwZW5kZXJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYS1hcHBlbmRlclwiXG5cdFx0XHRcdFx0c3R5bGU9e2dyaWRIZWxwZXJDb29yZFJlcyA/IHtcblx0XHRcdFx0XHRcdGdyaWRBcmVhOiBncmlkSGVscGVyQ29vcmRSZXMucGFyc2VkLFxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnXG5cdFx0XHRcdFx0fSA6IHVuZGVmaW5lZH1cblx0XHRcdFx0PiBcblx0XHRcdFx0e2dyaWRIZWxwZXJDYW5TYXZlICYmIChcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR0ZXh0PXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsPXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNob3dUb29sdGlwPXtmYWxzZX1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHsgXG5cdFx0XHRcdFx0XHRcdC8vIFNhdmUgdGhlIG5ldyAvIHVwZGF0ZWQgR3JpZCBBcmVhLlxuXHRcdFx0XHRcdFx0XHRkb0dyaWRIZWxwZXJTYXZlKGdyaWRDbGllbnRJZCwgZWRpdGluZywgZ3JpZEhlbHBlckNvb3JkUmVzKTsgXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDb29yZFJlcyhudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gV2UgdXNlIHVzZUVmZmVjdCBpbiB0aGUgbWFpbiBjb21wb25lbnQgdG8gcmVzZXQgdGhlIEdyaWRzICdlZGl0aW5nJyBhdHRyaXVidGUsIHNvIHdlIGRvbid0XG5cdFx0XHRcdFx0XHRcdC8vIG5lZWQgdG8gd29ycnkgYWJvdXQgZG9pbmcgaXQgaGVyZSwgdGhpcyBhbGxvd3MgdXMgdG8gbW9yZSBlYXNpbHkgZm9jdXMgb24gdGhlIGNvcnJlY3QgYmxvY2tzLlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+PC9CdXR0b24+XG5cdFx0XHRcdCl9IDwvR3JpZEhlbHBlckFwcGVuZGVyPlxuXHRcdFx0PC8+XG5cdFx0KX1cblx0PC9kaXY+XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93c1xufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG4vKipcbiAqIFRoZSBDb2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZSh7XG4gICAgYXR0cmlidXRlczoge1xuXHRcdG1pbkhlaWdodCxcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH1cblx0fSxcbn0pIHtcbiAgICAvL1xuICAgIGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuXHRcdFx0bWluSGVpZ2h0LFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoY29sQ291bnQsIHJvd0NvdW50KSxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyhjb2xUZW1wbGF0ZXMpLFxuXHRcdFx0Z3JpZFRlbXBsYXRlUm93czogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKHJvd1RlbXBsYXRlcylcbiAgICAgICAgfVxuICAgIH0pfSk7XG5cdC8vXG4gICAgcmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdCk7XG59OyIsIi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc1NhZmVCYXNlNjQoc3RyaW5nKSB7XG5cdHJldHVybiB3aW5kb3cuYnRvYShzdHJpbmcpLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWEoeCwgeSkge1xuXHRyZXR1cm4gY3NzU2FmZUJhc2U2NChgJHt5fS8ke3h9YCk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuXHQvL1xuXHRjb25zdCBzdGFydCA9IGNzc1NhZmVCYXNlNjQoYCR7c3RhcnRZfS8ke3N0YXJ0WH1gKTtcblx0Y29uc3QgZW5kID0gY3NzU2FmZUJhc2U2NChgJHtlbmRZfS8ke2VuZFh9YCk7XG5cdHJldHVybiBgJHtzdGFydH0gLyAke3N0YXJ0fSAvICR7ZW5kfSAvICR7ZW5kfWA7XG59XG5cbi8vXG4vLyBHZW5lcmF0ZSB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcywgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zLCBhbmQgZ3JpZC10ZW1wbGF0ZS1yb3dzIENTUy5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKGNvbENvdW50LCByb3dDb3VudCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcblx0XHRgJHtyb3dzUmVzfScke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGNvbHNSZXMsIF8sIGNvbHNJKSA9PiB7XG5cdFx0XHRyZXR1cm4gYCR7Y29sc1Jlc30gJHtnZW5lcmF0ZUdyaWRBcmVhKCsrY29sc0ksIHJvd3NJICsgMSl9YC50cmltKCk7XG5cdFx0fSwgJycpfSdgXG5cdCksICcnKTtcbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKHRlbXBsYXRlcykge1xuXHRyZXR1cm4gdGVtcGxhdGVzLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRyZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuXHR9LCAnJyk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoMm1sX2dyaWRhcmVhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiTm90aWNlIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJSYW5nZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJJbnNwZWN0b3JDb250cm9scyIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJ1c2VCbG9ja1Byb3BzIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiX18iLCJfbiIsInNwcmludGYiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInVzZVJlZkVmZmVjdCIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MiLCJHcmlkRWRpdG9yIiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25zIiwic2V0U2VsZWN0ZWRHcmlkQXJlYSIsInNlbGVjdG9ycyIsImdldFNlbGVjdGVkR3JpZEFyZWEiLCJHcmlkRWRpdCIsImF0dHJpYnV0ZXMiLCJtaW5IZWlnaHQiLCJjb2xEZWZpbml0aW9ucyIsImNvdW50IiwiY29sQ291bnQiLCJ0ZW1wbGF0ZXMiLCJjb2xUZW1wbGF0ZXMiLCJyb3dEZWZpbml0aW9ucyIsInJvd0NvdW50Iiwicm93VGVtcGxhdGVzIiwiZWRpdGluZyIsInNldEdyaWROb0NvbHNPclJvd3MiLCJzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyIsInNldEdyaWRNaW5IZWlnaHQiLCJzZXRHcmlkRWRpdGluZyIsInNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsInNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCIsImdyaWRDaGlsZHJlbiIsInNlbGVjdCIsImdldEJsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lIiwiZm9jdXNUYXJnZXQiLCJzZXRGb2N1c1RhcmdldCIsImNoaWxkUmVxdWVzdGVkRWRpdCIsImZpbmQiLCJjaGlsZCIsInJlcXVlc3RFZGl0IiwicmVmIiwiZWxlbWVudCIsIm93bmVyRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJuZXdHcmlkQXJlYVRleHQiLCJjaGlsZHJlbiIsImlubmVyQmxvY2tzUHJvcHMiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIm5ld01pbkhlaWdodCIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiZGVmaW5pdGlvbnMiLCJjb3VudERlbHRhIiwidW5pdCIsInNwbGljZSIsImxlbmd0aCIsImZyb20iLCJpbmRleCIsInRlbXBsYXRlIiwidGVtcGxhdGVzQ29weSIsImdldEJsb2NrIiwicGFyZW50cyIsIm5hbWUiLCJzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXIiLCJyZWR1Y2UiLCJyZXMiLCJwYXJlbnRJZCIsInNlbGYiLCJwYXJlbnRCbG9jayIsInB1c2giLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiY3VyIiwic3RhY2tpbmdPcmRlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImljb24iLCJtZXRhZGF0YSIsIlNhdmUiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUJsb2NrIiwiZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIiwiZG9HcmlkSGVscGVyU2VsZWN0aW9uIiwiZSIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJjZWxsWCIsInN0YXJ0WSIsInkiLCJjZWxsWSIsImVuZFgiLCJlbmRZIiwic3RhcnQiLCJNYXRoIiwibWluIiwiZW5kIiwibWF4IiwicGFyc2VkIiwiZG9HcmlkSGVscGVyU2F2ZSIsImdyaWRDbGllbnRJZCIsInRhcmdldCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImdyaWRBcmVhIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJHcmlkSGVscGVyQ2VsbCIsImNlbGxMYWJlbCIsIm9uTW91c2VEb3duIiwib25Nb3VzZUVudGVyIiwiR3JpZEhlbHBlckFwcGVuZGVyIiwiYXJlYSIsImdyaWRIZWxwZXJJc0RyYXdpbmciLCJzZXRHcmlkSGVscGVySXNEcmF3aW5nIiwiZ3JpZEhlbHBlckNhblNhdmUiLCJzZXRHcmlkSGVscGVyQ2FuU2F2ZSIsImdyaWRIZWxwZXJDb29yZFJlcyIsInNldEdyaWRIZWxwZXJDb29yZFJlcyIsImZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjZWxsSW5kZXgiLCJmbG9vciIsImtleSIsInVuZGVmaW5lZCIsImRpc3BsYXkiLCJjc3NTYWZlQmFzZTY0Iiwic3RyaW5nIiwid2luZG93IiwiYnRvYSIsInJlcGxhY2UiLCJnZW5lcmF0ZUdyaWRBcmVhIiwicm93c1JlcyIsInJvd3NJIiwiY29sc1JlcyIsImNvbHNJIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=