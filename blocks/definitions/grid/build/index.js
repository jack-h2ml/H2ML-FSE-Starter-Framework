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
/* harmony import */ var _local_components_HelpText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./local_components/HelpText */ "./src/local_components/HelpText/index.js");

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
    initialOpen: true,
    className: 'h2mlGridSettingsPanel'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    as: 'div',
    spacing: 4
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid area number of Columns", 'h2ml'),
    value: colCount,
    onChange: value => setGridNoColsOrRows(0, value) // 0 === 'col'
    ,
    min: 1,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_local_components_HelpText__WEBPACK_IMPORTED_MODULE_10__.GridNoColsHelpText, null),
    __nextHasNoMarginBottom: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid area number of Rows", 'h2ml'),
    value: rowCount,
    onChange: value => setGridNoColsOrRows(1, value) // 1 === 'row'
    ,
    min: 1,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_local_components_HelpText__WEBPACK_IMPORTED_MODULE_10__.GridNoRowsHelpText, null),
    __nextHasNoMarginBottom: true
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

/***/ "./src/local_components/HelpText/index.js":
/*!************************************************!*\
  !*** ./src/local_components/HelpText/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridNoColsHelpText": () => (/* binding */ GridNoColsHelpText),
/* harmony export */   "GridNoRowsHelpText": () => (/* binding */ GridNoRowsHelpText)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */



/** 
 * Helper Components
 */

const GridNoColsHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set's the number of Columns for the Grid.", 'h2ml'));
};
const GridNoRowsHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set's the number of Rows for the Grid.", 'h2ml'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvZ3JpZC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2VkaXQuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2xvY2FsX2NvbXBvbmVudHMvSGVscFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGdyaWQgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03LjggMTYuNUg1Yy0uMyAwLS41LS4yLS41LS41di02LjJoNi44djYuN3ptMC04LjNINC41VjVjMC0uMy4yLS41LjUtLjVoNi4ydjYuN3ptOC4zIDcuOGMwIC4zLS4yLjUtLjUuNWgtNi4ydi02LjhoNi44VjE5em0wLTcuOGgtNi44VjQuNUgxOWMuMyAwIC41LjIuNS41djYuMnpcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmlkLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHROb3RpY2UsXG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0VG9vbHRpcCxcblx0X19leHBlcmltZW50YWxWU3RhY2sgYXMgVlN0YWNrLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxuXHRzcHJpbnRmXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBcblx0Y3JlYXRlUmVkdXhTdG9yZSwgXG5cdHJlZ2lzdGVyXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cblxuaW1wb3J0IHtcblx0dXNlUmVmRWZmZWN0IFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7XG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMsXG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IEdyaWRFZGl0b3IgfSBmcm9tICcuL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvcic7XG5cbmltcG9ydCB7XG5cdEdyaWROb0NvbHNIZWxwVGV4dCxcblx0R3JpZE5vUm93c0hlbHBUZXh0XG59IGZyb20gJy4vbG9jYWxfY29tcG9uZW50cy9IZWxwVGV4dCc7XG5cbi8qXG4qIFJlZHV4IHN0b3JlIGh0bWxGb3IgaG9sZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhLCBcbiogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhIGlzIHZpc3VhbGx5IG9uIHRvcCBpbiB0aGUgZWRpdG9yLlxuKi9cblxucmVnaXN0ZXIoY3JlYXRlUmVkdXhTdG9yZShcImgybWwvZ3JpZF9hcmVhX3N0b3JlXCIsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRzZWxlY3RlZDoge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9LFxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0XHRcdC4uLnN0YXRlLnNlbGVjdGVkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCIsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0Z2V0U2VsZWN0ZWRHcmlkQXJlYShzdGF0ZSkge1xuXHRcdFx0cmV0dXJuIHN0YXRlLnNlbGVjdGVkLnZhbHVlO1xuXHRcdH1cblx0fVxufSkpO1xuXG4vKipcbiAqIFRoZSBDb2RlLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdG1pbkhlaWdodCxcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH0sXG5cdFx0ZWRpdGluZ1xuXHR9LFxuXHQvLyBBdHRyaWJ1dGUgU2V0dGVycy5cblx0c2V0R3JpZE5vQ29sc09yUm93cyxcblx0c2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3csXG5cdHNldEdyaWRNaW5IZWlnaHQsXG5cdHNldEdyaWRFZGl0aW5nLFxuXHQvLyBSZWR1eCBTZXR0ZXJzLlxuXHRzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyLFxuXHQvLyBPdGhlci5cblx0Y2xpZW50SWRcbn0pID0+IHtcblxuXHQvL1xuXHQvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgQmxvY2ssIGFuZCBpdHMgY2hpbGRyZW4uIFxuXHQvLyAoVXNlZCBodG1sRm9yIHNldHRpbmcgdGhlIGVkaXRvciBzdGFja2luZyBvcmRlciwgYW5kIGFkZGluZyAvIGVkaXRpbmcgR3JpZC1BcmVhJ3MpXG5cdC8vXG5cblx0Y29uc3QgeyBzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCwgZ3JpZENoaWxkcmVuIH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQsIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gVmFyaWFibGVzLlxuXHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tDbGllbnRJZCA9IGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCA9IHNlbGVjdGVkQmxvY2tDbGllbnRJZCA/IGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lKHNlbGVjdGVkQmxvY2tDbGllbnRJZCwgWydoMm1sL2dyaWQnXSwgdHJ1ZSlbMF0gOiBmYWxzZTtcblx0XHRjb25zdCBncmlkQ2hpbGRyZW4gPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdC8vIFJldHVybiBWYWx1ZXMuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdGVkQmxvY2tDbGllbnRJZCxcblx0XHRcdHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCxcblx0XHRcdGdyaWRDaGlsZHJlblxuXHRcdH07XG5cdH0sIFtdKTtcblxuXHQvL1xuXHQvLyBIYW5kbGUgdXBkYXRpbmcgdGhlIHN0YWNraW5nIG9yZGVyIGh0bWxGb3IgYW55IGN1cnJlbnRseSBzZWxlY3RlZCBHcmlkIEFyZWEncyB3aXRoaW4gdGhlIGVkaXRvci5cblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpO1xuXHR9LCBbc2VsZWN0ZWRCbG9ja0NsaWVudElkXSk7XG5cblx0Ly9cblx0Ly8gZm9jdXNUYXJnZXQgc3RhdGUsIHRoaXMgaXMgdXNlZCB0byBlbnN1cmUgd2UgYXV0by1mb2N1cyBvbiB0aGUgY29ycmVjdCBHcmlkIEFyZWEgd2hlbiBtYWtpbmcgY2hhbmdlcyB0byB0aGUgR3JpZC5cblx0Ly9cblxuXHRjb25zdCBbZm9jdXNUYXJnZXQsIHNldEZvY3VzVGFyZ2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdC8vIFxuXHQvLyBJZiBlaXRoZXIgb2YgdGhlIEdyaWQncyB0b3RhbCBudW1iZXIgb2YgY2hpbGRyZW4gY2hhbmdlcyAoYWRkaW5nKSwgb3IgaWYgdGhlICdyZXF1ZXN0RWRpdCcgYXR0cmlidXRlIG9mIG9uZSBvZiB0aGUgR3JpZCdzIFxuXHQvLyBjaGFuZ2VzICh1cGRhdGluZykgdGhlbiBkbyB0aGUgZm9sbG93aW5nOiBcblx0Ly8gXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBhbHJlYWR5IHNldCB0aGVuIHdlIGhhdmUganVzdCBmaW5pc2hlZCBlZGl0aW5nLCBhbmQgd2Ugc2hvdWxkIGRldGVybWluZSBpZiB3ZSBuZWVkIFxuXHQvLyB0byBmb2N1cyBvbiBhbiB1cGRhdGVkIEdyaWQgQXJlYS4gSW4gZWl0aGVyIGNhc2UgcmVzZXQgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIHRvIGZhbHNlLlxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgaXMgTk9UIHNldCB0aGVuIGRldGVybWluZSBpZiBhbnkgb2YgdGhlIEdyaWQncyBHcmlkLUFyZWEncyBhcmUgcmVxdWVzdGluZyBhbiBlZGl0LiBcblx0Ly8gSWYgc28sIGNhbGwgc2V0R3JpZEVkaXRpbmcuXG5cdC8vXG5cdC8vIFRoaXMgZG9lcyBub3QgaGFuZGxlIGFkZGluZyBhIG5ldyBncmlkIGFyZWEsIHRoYXQgaXMgZG9uZSBieSB0aGUgR3JpZCBpdHNlbGYgdGhyb3VnaCB0aGUgb25LZXlQcmVzcyBldmVudCwgb3IgaXQgaXMgXG5cdC8vIGRvbmUgYnkgdGhlIGdyaWRFZGl0b3IsIHVzaW5nIHRoZSBCbG9ja0FwcGVuZGVyIGJ1dHRvbi4gXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZighZWRpdGluZykge1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIGEgR3JpZCBBcmVhIGlzIHJlcXVlc3RpbmcgdG8gYmUgdXBkYXRlZC4gXG5cdFx0XHRjb25zdCBjaGlsZFJlcXVlc3RlZEVkaXQgPSBncmlkQ2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZC5hdHRyaWJ1dGVzLnJlcXVlc3RFZGl0KTtcblx0XHRcdGlmKGNoaWxkUmVxdWVzdGVkRWRpdCkgc2V0R3JpZEVkaXRpbmcoY2hpbGRSZXF1ZXN0ZWRFZGl0KTtcblx0XHR9XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgZm9jdXNUYXJnZXQgaWYgbmVlZGVkLiBcblx0XHRcdGlmKGVkaXRpbmc/LmNsaWVudElkKSBzZXRGb2N1c1RhcmdldChlZGl0aW5nKTtcblx0XHRcdC8vIFJlc2V0IHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZS4gXG5cdFx0XHRzZXRHcmlkRWRpdGluZyhmYWxzZSk7XG5cdFx0fVxuXHR9LCBbZ3JpZENoaWxkcmVuXSk7XG5cblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGNoYW5nZXMgdG8gZmFsc2UsIGFuZCBhIGZvY3VzVGFyZ2V0IGlzIHNldCwgdGhlbiAuZm9jdXMoKSBvbiB0aGUgZm9jdXNUYXJnZXQncyBET00gZWxlbWVudCxcblx0Ly8gdGhlbiByZXNldCB0aGUgZm9jdXNUYXJnZXQgdG8gbnVsbC5cblx0Ly9cblx0XG5cdGNvbnN0IHJlZiA9IHVzZVJlZkVmZmVjdCgoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWxlbWVudDtcblx0XHRpZihlZGl0aW5nKSB7XG5cdFx0XHRvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJsb2NrPVwiJHtjbGllbnRJZH1cIl1gKS5mb2N1cygpO1xuXHRcdH0gZWxzZSBpZihmb2N1c1RhcmdldCkge1xuXHRcdFx0b3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Zm9jdXNUYXJnZXQuY2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHRcdHNldEZvY3VzVGFyZ2V0KG51bGwpXG5cdFx0fVxuXHR9LCBbZWRpdGluZ10pO1xuXG5cdC8vXG5cdC8vIFJlZ2lzdGVyIHRoZSBCbG9jayAvIElubmVyQmxvY2sgUHJvcHMuXG5cdC8vXG5cblx0Y29uc3QgbmV3R3JpZEFyZWFUZXh0ID0gX18oJ0FkZCBuZXcgR3JpZCBBcmVhJywgJ2gybWwnKTtcblx0Y29uc3QgeyBjaGlsZHJlbiwgLi4uaW5uZXJCbG9ja3NQcm9wcyB9ID0gdXNlSW5uZXJCbG9ja3NQcm9wcyhcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdG1pbkhlaWdodCxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoY29sQ291bnQsIHJvd0NvdW50KSxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKGNvbFRlbXBsYXRlcyksXG5cdFx0XHRcdGdyaWRUZW1wbGF0ZVJvd3M6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyhyb3dUZW1wbGF0ZXMpXG5cdFx0XHR9LFxuXHRcdFx0cmVmOiByZWZcblx0XHR9KSwge1xuXHRcdFx0YWxsb3dlZEJsb2NrczogWydoMm1sL2dyaWQtYXJlYSddLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHR7Lyo8QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0QWxpZ25tZW50fVxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0Lz4qL31cblx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgXG5cdFx0XHRcdFx0XHR0aXRsZT17X18oXCJHcmlkIFNldHRpbmdzXCIsICdoMm1sJyl9IFxuXHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49e3RydWV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eydoMm1sR3JpZFNldHRpbmdzUGFuZWwnfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxWU3RhY2sgXG5cdFx0XHRcdFx0XHRcdGFzPXsnZGl2J31cblx0XHRcdFx0XHRcdFx0c3BhY2luZz17NH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkdyaWQgYXJlYSBudW1iZXIgb2YgQ29sdW1uc1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xDb3VudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZE5vQ29sc09yUm93cygwLCB2YWx1ZSl9IC8vIDAgPT09ICdjb2wnXG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxHcmlkTm9Db2xzSGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkdyaWQgYXJlYSBudW1iZXIgb2YgUm93c1wiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dDb3VudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZE5vQ29sc09yUm93cygxLCB2YWx1ZSl9IC8vIDEgPT09ICdyb3cnXG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9ezxHcmlkTm9Sb3dzSGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbT17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyhjb2xDb3VudCAqIHJvd0NvdW50KSA+IDQ5ICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBpc0Rpc21pc3NpYmxlPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUaGUgbnVtYmVyIG9mIGNlbGxzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcmVjb21tZW5kZWQgbGltaXQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2gybWwnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9WU3RhY2s+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIkdyaWQgQ29sdW1ucyBTZXR0aW5nc1wiLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHR7Wy4uLkFycmF5KGNvbENvdW50KV0ubWFwKChfLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Bjb2wtc2V0dGluZ3MtJHtpfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17c3ByaW50ZihfXyhcIkNvbHVtbiAlMSRkIFdpZHRoXCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMCwgaSwgdmFsdWUgLyogMCA9PT0gJ2NvbCcgKi8pfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIkdyaWQgUm93cyBTZXR0aW5nc1wiLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHR7Wy4uLkFycmF5KHJvd0NvdW50KV0ubWFwKChfLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Byb3ctc2V0dGluZ3MtJHtpfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17c3ByaW50ZihfXyhcIlJvdyAlMSRkIEhlaWdodFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cm93VGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDEsIGksIHZhbHVlKSAvKiAwID09PSAncm93JyAqL31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oXCJHcmlkIE1pbmltdW0gSGVpZ2h0XCIsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIkdyaWQgTWluaW11bSBIZWlnaHRcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bWluSGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtuZXdNaW5IZWlnaHQgPT4gc2V0R3JpZE1pbkhlaWdodChuZXdNaW5IZWlnaHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30+XG5cdFx0XHRcdDxHcmlkRWRpdG9yXG5cdFx0XHRcdFx0Z3JpZENsaWVudElkPXtjbGllbnRJZH1cblx0XHRcdFx0XHRjb2xDb3VudD17Y29sQ291bnR9XG5cdFx0XHRcdFx0cm93Q291bnQ9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdGVkaXRpbmc9e2VkaXRpbmd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWFzXCI+XG5cdFx0XHRcdFx0eyEoZWRpdGluZykgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtuZXdHcmlkQXJlYVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkTmV3R3JpZEFyZWFcIj57bmV3R3JpZEFyZWFUZXh0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRHcmlkRWRpdGluZyh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBkPVwiTTE4IDExLjJoLTUuMlY2aC0xLjZ2NS4ySDZ2MS42aDUuMlYxOGgxLjZ2LTUuMkgxOHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9ucy5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIG51bWJlciBvZiBjb2x1bW5zIC8gcm93cywgY2xlYW4gdXAgdGhlIHJlbGV2YW50IHRlbXBsYXRlcywgYW5kIGZpbmFsbHkgc2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgR3JpZCBBcmVhJ3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkTm9Db2xzT3JSb3dzKHR5cGUsIGNvdW50KSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHNldHRpbmcgQ29sdW1ucyBvciBSb3dzLlxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Y29uc3QgY291bnREZWx0YSA9IGNvdW50IC0gZGVmaW5pdGlvbnMuY291bnQ7XG5cdFx0XHQvLyBDbGVhbiB1cCBDb2x1bW4gLyBSb3cgdGVtcGxhdGVzLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzLnNwbGljZSguLi5jb3VudERlbHRhID4gMCA/XG5cdFx0XHRcdFtkZWZpbml0aW9ucy50ZW1wbGF0ZXMubGVuZ3RoLCAwLCAuLi5BcnJheS5mcm9tKEFycmF5KGNvdW50RGVsdGEpKS5tYXAoXyA9PiB1bml0KV0gOiAvLyBBZGRpbmcgQ29sdW1ucyAvIFJvd3Ncblx0XHRcdFx0W2NvdW50LCBkZWZpbml0aW9ucy50ZW1wbGF0ZXMubGVuZ3RoIC0gMV0gLy8gUmVtb3ZpbmcgQ29sdW1ucyAvIFJvd3Ncblx0XHRcdCk7XG5cdFx0XHQvLyBVcGRhdGUgdGhlIGRlZmluaXRpb24ncyBjb3VudCB2YWx1ZSBhbmQgdGhlbiBzZXQgdGhlIGF0dHJidXRlLiBcblx0XHRcdGRlZmluaXRpb25zLmNvdW50ID0gY291bnQ7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgW2Ake3R5cGV9RGVmaW5pdGlvbnNgXTogZGVmaW5pdGlvbnMgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFVwZGF0ZSB0ZW1wbGF0ZXMgaHRtbCBmb3Igc3BlY2lmaWMgQ29sdW1ucyAvIFJvd3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyh0eXBlLCBpbmRleCwgdGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgZ2VuZXJhdGluZyBhIENvbHVtbnMgb3IgUm93cyB0ZW1wbGF0ZVxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0Y291bnQsIFxuXHRcdFx0XHR0ZW1wbGF0ZXNcblx0XHRcdH0gPSBhdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXTtcblx0XHRcdGNvbnN0IHRlbXBsYXRlc0NvcHkgPSBbLi4udGVtcGxhdGVzXTtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZ2l2ZW4gQ29sdW1uIC8gUm93IHRlbXBsYXRlIGFuZCBzZXQgdGhlIGF0dHJpYnV0ZS5cblx0XHRcdGNvbnN0IHVuaXQgPSAodHlwZSA9PT0gJ2NvbCcpID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0dGVtcGxhdGVzQ29weVtpbmRleF0gPSAodGVtcGxhdGUgPyB0ZW1wbGF0ZSA6IHVuaXQpO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IHtcblx0XHRcdFx0Y291bnQsXG5cdFx0XHRcdHRlbXBsYXRlczogdGVtcGxhdGVzQ29weVxuXHRcdFx0fSB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRoZSBHcmlkJ3MgTWluaW11bSBIZWlnaHRcblx0XHQvL1x0XG5cdFx0c2V0R3JpZE1pbkhlaWdodChtaW5IZWlnaHQpIHtcblx0XHRcdGNvbnN0IHtzZXRBdHRyaWJ1dGVzfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IG1pbkhlaWdodCB9KVxuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgJ2VkaXRpbmcnIGF0dHJpYnV0ZVxuXHRcdC8vXG5cdFx0c2V0R3JpZEVkaXRpbmcodmFsdWUpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZWRpdGluZzogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFdoZW4gYSBHcmlkLUFyZWEgb3IgYW55IG9mIGl0J3MgY2hpbGRyZW4gYXJlIHNlbGN0ZWQsIHZpc3VhbGx5IG1vdmUgdGhhdCBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIFxuXHRcdC8vIHN0YWNraW5nIGNvbnRleHQuICh0aGlzIGlzIG5vdCBzYXZlZCBhcyBhbiBhdHRyaWJ1dGUsIGFuZCBpcyBwdXJlbHkgaHRtbEZvciBjb252ZW5pZW5jZSBpbiB0aGUgZWRpdG9yKS5cblx0XHQvL1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdGNvbnN0IHsgY2xpZW50SWQgfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgeyBzZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBkaXNwYXRjaCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHRcdGlmIChzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPT09IGNsaWVudElkKSB7XG5cdFx0XHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lLCBnZXRCbG9ja3MgfSA9IHJlZ2lzdHJ5LnNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcGFyZW50cyA9IGdldEJsb2NrKHNlbGVjdGVkQmxvY2tDbGllbnRJZCkubmFtZSAhPT0gJ2gybWwvZ3JpZC1hcmVhJyA/XG5cdFx0XHRcdFx0Z2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKSA6XG5cdFx0XHRcdFx0W3NlbGVjdGVkQmxvY2tDbGllbnRJZCwgLi4uZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKV07XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlciA9IHBhcmVudHMucmVkdWNlKChyZXMsIHBhcmVudElkLCBpLCBzZWxmKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudEJsb2NrID0gZ2V0QmxvY2socGFyZW50SWQpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRCbG9jay5uYW1lID09PSAnaDJtbC9ncmlkLWFyZWEnKSB7XG5cdFx0XHRcdFx0XHRyZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGNsaWVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRcdFx0ZWRpdG9yU3RhY2tpbmdPcmRlcjogZ2V0QmxvY2tzKHNlbGZbKytpXSkucmVkdWNlKChyZXMsIGN1cikgPT4gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcywgMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEoe1xuXHRcdFx0XHRcdGNsaWVudElkOiBzZWxlY3RlZEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRcdFx0cGFyZW50czogc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICghc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKShHcmlkRWRpdCk7XG5cbi8qXG4gKiBFeHBvcnQgdGhlIEJsb2NrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkRWRpdFdyYXBwZXIgey4uLnByb3BzfSAvPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IGdyaWQgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHQvL1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlLFxufSk7XG5cbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcbn0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHtcblx0c2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7IGNyZWF0ZUJsb2NrIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdXNlUmVmRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuLyoqXG4qIEV2ZW50IGNhbGxiYWNrIEZ1bmN0aW9uIGZvciBzdGFydGluZyAvIHVwZGF0aW5nIHRoZSBzZWxlY3Rpbmcgb2YgYSBHcmlkLUFyZWEgQXJlYVxuKi9cblxuY29uc3QgZG9HcmlkSGVscGVyU2VsZWN0aW9uID0gKGUsIGNvb3JkcywgcmVzKSA9PiB7XG5cdC8vIFJlc2V0IHRoZSBncmlkIGFyZWEgY29vcmRzIG9uIG1vdXNlZG93bi5cblx0aWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHJlcyA9IG51bGw7XG5cdC8vIERldGVybWluZSBpZiB3ZSdyZSB1cGRhdGluZyBhbiBleGlzdGluZyBzZWxlY3Rpb24gKGRyYWdnaW5nKSwgb3Igc3RhcnRpbmcgYSBuZXcgb25lIChjbGlja2luZykuXG5cdGNvbnN0IHN0YXJ0WCA9IHJlcz8uc3RvcmU/LnggPyByZXM/LnN0b3JlPy54IDogTnVtYmVyKGNvb3Jkcy5jZWxsWCk7XG5cdGNvbnN0IHN0YXJ0WSA9IHJlcz8uc3RvcmU/LnkgPyByZXM/LnN0b3JlPy55IDogTnVtYmVyKGNvb3Jkcy5jZWxsWSk7XG5cdGNvbnN0IGVuZFggPSBOdW1iZXIoY29vcmRzLmNlbGxYKTtcblx0Y29uc3QgZW5kWSA9IE51bWJlcihjb29yZHMuY2VsbFkpO1xuXHQvLyBDYWxjdWxhdGUgYW5kIHN0b3JlIHRoZSBuZXcgQ29vcmRzIHZhbHVlcy5cblx0cmVzID0ge1xuXHRcdHN0b3JlOiB7XG5cdFx0XHR4OiBzdGFydFgsXG5cdFx0XHR5OiBzdGFydFksXG5cdFx0fSxcblx0XHRzdGFydDoge1xuXHRcdFx0eDogTWF0aC5taW4oc3RhcnRYLCBlbmRYKSxcblx0XHRcdHk6IE1hdGgubWluKHN0YXJ0WSwgZW5kWSlcblx0XHR9LFxuXHRcdGVuZDoge1xuXHRcdFx0eDogTWF0aC5tYXgoc3RhcnRYLCBlbmRYKSxcblx0XHRcdHk6IE1hdGgubWF4KHN0YXJ0WSwgZW5kWSksXG5cdFx0fVxuXHR9O1xuXHRyZXMucGFyc2VkID0gZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kKHJlcy5zdGFydC54LCByZXMuc3RhcnQueSwgcmVzLmVuZC54LCByZXMuZW5kLnkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFNhdmUgRnVuY3Rpb25cbiAqL1xuXG5jb25zdCBkb0dyaWRIZWxwZXJTYXZlID0gKGdyaWRDbGllbnRJZCwgdGFyZ2V0LCBjb29yZHMpID0+IHtcblx0aWYgKHRhcmdldC5jbGllbnRJZCkge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHt1cGRhdGVCbG9ja0F0dHJpYnV0ZXN9ID0gZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gVXBkYXRlIHRoZSByZXF1ZXN0ZWQgR3JpZCBBcmVhLlxuXHRcdHVwZGF0ZUJsb2NrQXR0cmlidXRlcyh0YXJnZXQuY2xpZW50SWQsIHtcblx0XHRcdGdyaWRBcmVhOiBjb29yZHMsXG5cdFx0XHRyZXF1ZXN0RWRpdDogZmFsc2Vcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7IGdldEJsb2NrcyB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgaW5zZXJ0QmxvY2sgfSA9IGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIEFkZGluZyBhIG5ldyBHcmlkIEFyZWEuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bmV4dENoaWxkU3RhY2tpbmdPcmRlcixcblx0XHRcdG5leHRDaGlsZEluZGV4XG5cdFx0fSA9IGdldEJsb2NrcyhncmlkQ2xpZW50SWQpLnJlZHVjZShcblx0XHRcdChyZXMsIGN1ciwgaW5kKSA9PiB7XG5cdFx0XHRcdHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyID0gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlciA/IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgKyAxIDogcmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXI7XG5cdFx0XHRcdHJlcy5uZXh0Q2hpbGRJbmRleCA9IGluZCArIDE7XG5cdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHR9LCB7XG5cdFx0XHRuZXh0Q2hpbGRTdGFja2luZ09yZGVyOiAwLFxuXHRcdFx0bmV4dENoaWxkSW5kZXg6IDBcblx0XHR9XG5cdFx0KTtcblx0XHQvLyBJbnNlcnQgdGhlIG5ldyBHcmlkIEFyZWEuXG5cdFx0aW5zZXJ0QmxvY2soY3JlYXRlQmxvY2soJ2gybWwvZ3JpZC1hcmVhJywge1xuXHRcdFx0Z3JpZEFyZWE6IGNvb3Jkcyxcblx0XHRcdHN0YWNraW5nT3JkZXI6IG5leHRDaGlsZFN0YWNraW5nT3JkZXJcblx0XHR9KSwgbmV4dENoaWxkSW5kZXgsIGdyaWRDbGllbnRJZCk7XG5cdH1cbn1cblxuLyoqIFxuICogTG9jYWwgQ29tcG9uZW50bnNcbiAqL1xuXG5jb25zdCBHcmlkSGVscGVyQ2VsbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0Y2VsbExhYmVsLFxuXHRcdGNlbGxYLFxuXHRcdGNlbGxZLFxuXHRcdG9uTW91c2VEb3duLFxuXHRcdG9uTW91c2VFbnRlcixcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT1cImdyaWQtYXJlYS1oZWxwZXJcIlxuXHRcdHsuLi57IG9uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIgfX1cblx0XHRkYXRhLXhjb29yZHM9e2NlbGxYfVxuXHRcdGRhdGEteWNvb3Jkcz17Y2VsbFl9XG5cdFx0c3R5bGU9e3tcblx0XHRcdGdyaWRBcmVhOiBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQoY2VsbFggLCBjZWxsWSwgY2VsbFgsIGNlbGxZKVxuXHRcdH19XG5cdD5cblx0XHQ8c3Bhbj5cblx0XHRcdHtgJHtjZWxsTGFiZWx9YH0gPHN1Yj57YCgke2NlbGxYfSwgJHtjZWxsWX0pYH08L3N1Yj5cblx0XHQ8L3NwYW4+XG5cdDwvZGl2PlxufVxuXG5jb25zdCBHcmlkSGVscGVyQXBwZW5kZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHN0eWxlLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGFyZWFcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdGFyZWE9e2FyZWEgPyBhcmVhIDogbnVsbH1cblx0XHRcdHsuLi57IHN0eWxlIH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEdyaWRFZGl0b3IgPSAocHJvcHMpID0+IHtcblx0Ly8gUHJvcGVydGllcy5cblx0Y29uc3Qge1xuXHRcdGdyaWRDbGllbnRJZCxcblx0XHRjb2xDb3VudCxcblx0XHRyb3dDb3VudCxcblx0XHRlZGl0aW5nXG5cdH0gPSBwcm9wcztcblx0Ly8gU3RhdGUgTWFuYWdlcnMuXG5cdGNvbnN0IFtncmlkSGVscGVySXNEcmF3aW5nLCBzZXRHcmlkSGVscGVySXNEcmF3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2dyaWRIZWxwZXJDYW5TYXZlLCBzZXRHcmlkSGVscGVyQ2FuU2F2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ29vcmRSZXMsIHNldEdyaWRIZWxwZXJDb29yZFJlc10gPSB1c2VTdGF0ZShudWxsKTtcblx0Ly9cblx0Ly8gSGFuZGxlIEZpbmlzaCBFZGl0aW5nLlxuXHQvL1xuXHRjb25zdCByZWYgPSB1c2VSZWZFZmZlY3QoKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCB7IG93bmVyRG9jdW1lbnQgfSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEgPSAoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBTdGF0ZS5cblx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0Ly8gU2V0IFN0YXRlLlxuXHRcdFx0c2V0R3JpZEhlbHBlckNhblNhdmUodHJ1ZSk7XG5cdFx0fVxuXHRcdGlmKGdyaWRIZWxwZXJJc0RyYXdpbmcpIHtcblx0XHRcdG93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhKTtcblx0XHR9XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdC8vIENsZWFudXAgdGhpcyBEb2N1bWVudCBldmVudCBsaXN0ZW5lci5cblx0XHRcdG93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhKTtcblx0XHR9O1xuXHR9LCBbZ3JpZEhlbHBlcklzRHJhd2luZ10pO1xuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXHRyZXR1cm4gPGRpdiBcblx0XHRjbGFzc05hbWU9XCJncmlkLWhlbHBlcnNcIlxuXHRcdHJlZj17cmVmfVxuXHQ+XG5cdFx0e0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQgKiByb3dDb3VudCkpLm1hcCgoXywgY2VsbEluZGV4KSA9PiB7XG5cdFx0XHRjZWxsSW5kZXgrKztcblx0XHRcdGNvbnN0IGNlbGxYID0gKChjZWxsSW5kZXggLSAxKSAlIGNvbENvdW50KSArIDE7XG5cdFx0XHRjb25zdCBjZWxsWSA9IE1hdGguZmxvb3IoKGNlbGxJbmRleCAtIDEpIC8gY29sQ291bnQpICsgMTtcblx0XHRcdHJldHVybiA8R3JpZEhlbHBlckNlbGxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRrZXk6IGBoZWxwZXItY2VsbC0ke2NlbGxJbmRleH1gLFxuXHRcdFx0XHRcdGNlbGxMYWJlbDogY2VsbEluZGV4LFxuXHRcdFx0XHRcdGNlbGxYLFxuXHRcdFx0XHRcdGNlbGxZLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiAoZWRpdGluZyA/IChlKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBSZXNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMoZG9HcmlkSGVscGVyU2VsZWN0aW9uKGUsIHsgY2VsbFgsIGNlbGxZIH0sIGdyaWRIZWxwZXJDb29yZFJlcykpO1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWQpLFxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcjogKGdyaWRIZWxwZXJJc0RyYXdpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIEdyaWQgQXJlYSBTZWxlY3Rpb24uXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMoZG9HcmlkSGVscGVyU2VsZWN0aW9uKGUsIHsgY2VsbFgsIGNlbGxZIH0sIGdyaWRIZWxwZXJDb29yZFJlcykpO1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWQpXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdH0pfVxuXHRcdHtlZGl0aW5nICYmIChcblx0XHRcdDw+XG5cdFx0XHRcdHtlZGl0aW5nPy5jbGllbnRJZCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGVkaXQgdGhlIEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1hZGRpbmctZ3JpZC1hcmVhcy1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+e19fKFwiQ2xpY2sgYW5kIGRyYWdcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gYWRkIGEgbmV3IEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8R3JpZEhlbHBlckFwcGVuZGVyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0XHRcdHN0eWxlPXtncmlkSGVscGVyQ29vcmRSZXMgPyB7XG5cdFx0XHRcdFx0XHRncmlkQXJlYTogZ3JpZEhlbHBlckNvb3JkUmVzLnBhcnNlZCxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4J1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWR9XG5cdFx0XHRcdD4gXG5cdFx0XHRcdHtncmlkSGVscGVyQ2FuU2F2ZSAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGV4dD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17ZmFsc2V9XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHQvLyBTYXZlIHRoZSBuZXcgLyB1cGRhdGVkIEdyaWQgQXJlYS5cblx0XHRcdFx0XHRcdFx0ZG9HcmlkSGVscGVyU2F2ZShncmlkQ2xpZW50SWQsIGVkaXRpbmcsIGdyaWRIZWxwZXJDb29yZFJlcyk7IFxuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCBzdGF0ZS5cblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMobnVsbCk7XG5cdFx0XHRcdFx0XHRcdC8vIFdlIHVzZSB1c2VFZmZlY3QgaW4gdGhlIG1haW4gY29tcG9uZW50IHRvIHJlc2V0IHRoZSBHcmlkcyAnZWRpdGluZycgYXR0cml1YnRlLCBzbyB3ZSBkb24ndFxuXHRcdFx0XHRcdFx0XHQvLyBuZWVkIHRvIHdvcnJ5IGFib3V0IGRvaW5nIGl0IGhlcmUsIHRoaXMgYWxsb3dzIHVzIHRvIG1vcmUgZWFzaWx5IGZvY3VzIG9uIHRoZSBjb3JyZWN0IGJsb2Nrcy5cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PjwvQnV0dG9uPlxuXHRcdFx0XHQpfSA8L0dyaWRIZWxwZXJBcHBlbmRlcj5cblx0XHRcdDwvPlxuXHRcdCl9XG5cdDwvZGl2PlxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5cbi8qKiBcbiAqIEhlbHBlciBDb21wb25lbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IEdyaWROb0NvbHNIZWxwVGV4dCA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuPlxuXHRcdFx0e19fKFwiU2V0J3MgdGhlIG51bWJlciBvZiBDb2x1bW5zIGZvciB0aGUgR3JpZC5cIiwgJ2gybWwnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkTm9Sb3dzSGVscFRleHQgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8c3Bhbj5cblx0XHRcdHtfXyhcIlNldCdzIHRoZSBudW1iZXIgb2YgUm93cyBmb3IgdGhlIEdyaWQuXCIsICdoMm1sJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcbiAgICBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3Ncbn0gZnJvbSAnLi91dGlscy5qcydcblxuLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuICAgIGF0dHJpYnV0ZXM6IHtcblx0XHRtaW5IZWlnaHQsXG5cdFx0Y29sRGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiBjb2xDb3VudCxcblx0XHRcdHRlbXBsYXRlczogY29sVGVtcGxhdGVzXG5cdFx0fSxcblx0XHRyb3dEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IHJvd0NvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiByb3dUZW1wbGF0ZXNcblx0XHR9XG5cdH0sXG59KSB7XG4gICAgLy9cbiAgICBjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKHtcbiAgICAgICAgc3R5bGU6IHtcblx0XHRcdG1pbkhlaWdodCxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKGNvbENvdW50LCByb3dDb3VudCksXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoY29sVGVtcGxhdGVzKSxcblx0XHRcdGdyaWRUZW1wbGF0ZVJvd3M6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyhyb3dUZW1wbGF0ZXMpXG4gICAgICAgIH1cbiAgICB9KX0pO1xuXHQvL1xuICAgIHJldHVybiAoXG5cdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30vPlxuXHQpO1xufTsiLCIvL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBjc3NTYWZlQmFzZTY0KHN0cmluZykge1xuXHRyZXR1cm4gd2luZG93LmJ0b2Eoc3RyaW5nKS5yZXBsYWNlKC9cXFcvZywgJycpO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhKHgsIHkpIHtcblx0cmV0dXJuIGNzc1NhZmVCYXNlNjQoYCR7eX0vJHt4fWApO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcblx0Ly9cblx0Y29uc3Qgc3RhcnQgPSBjc3NTYWZlQmFzZTY0KGAke3N0YXJ0WX0vJHtzdGFydFh9YCk7XG5cdGNvbnN0IGVuZCA9IGNzc1NhZmVCYXNlNjQoYCR7ZW5kWX0vJHtlbmRYfWApO1xuXHRyZXR1cm4gYCR7c3RhcnR9IC8gJHtzdGFydH0gLyAke2VuZH0gLyAke2VuZH1gO1xufVxuXG4vL1xuLy8gR2VuZXJhdGUgdGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMsIGdyaWQtdGVtcGxhdGUtY29sdW1ucywgYW5kIGdyaWQtdGVtcGxhdGUtcm93cyBDU1MuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyhjb2xDb3VudCwgcm93Q291bnQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oQXJyYXkocm93Q291bnQpKS5yZWR1Y2UoKHJvd3NSZXMsIF8sIHJvd3NJKSA9PiAoXG5cdFx0YCR7cm93c1Jlc30nJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChjb2xzUmVzLCBfLCBjb2xzSSkgPT4ge1xuXHRcdFx0cmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWAudHJpbSgpO1xuXHRcdH0sICcnKX0nYFxuXHQpLCAnJyk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyh0ZW1wbGF0ZXMpIHtcblx0cmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0cmV0dXJuIGAke3Jlc30gJHtjdXJ9YDtcblx0fSwgJycpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwiLi9zdHlsZS1pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2gybWxfZ3JpZGFyZWFcIl0gPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiLi9zdHlsZS1pbmRleFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIk5vdGljZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiUmFuZ2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJUb29sdGlwIiwiX19leHBlcmltZW50YWxWU3RhY2siLCJWU3RhY2siLCJJbnNwZWN0b3JDb250cm9scyIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJ1c2VCbG9ja1Byb3BzIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiX18iLCJfbiIsInNwcmludGYiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInVzZVJlZkVmZmVjdCIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MiLCJHcmlkRWRpdG9yIiwiR3JpZE5vQ29sc0hlbHBUZXh0IiwiR3JpZE5vUm93c0hlbHBUZXh0IiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25zIiwic2V0U2VsZWN0ZWRHcmlkQXJlYSIsInNlbGVjdG9ycyIsImdldFNlbGVjdGVkR3JpZEFyZWEiLCJHcmlkRWRpdCIsImF0dHJpYnV0ZXMiLCJtaW5IZWlnaHQiLCJjb2xEZWZpbml0aW9ucyIsImNvdW50IiwiY29sQ291bnQiLCJ0ZW1wbGF0ZXMiLCJjb2xUZW1wbGF0ZXMiLCJyb3dEZWZpbml0aW9ucyIsInJvd0NvdW50Iiwicm93VGVtcGxhdGVzIiwiZWRpdGluZyIsInNldEdyaWROb0NvbHNPclJvd3MiLCJzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyIsInNldEdyaWRNaW5IZWlnaHQiLCJzZXRHcmlkRWRpdGluZyIsInNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIiLCJjbGllbnRJZCIsInNlbGVjdGVkQmxvY2tDbGllbnRJZCIsInNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCIsImdyaWRDaGlsZHJlbiIsInNlbGVjdCIsImdldEJsb2NrcyIsImdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCIsImdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lIiwiZm9jdXNUYXJnZXQiLCJzZXRGb2N1c1RhcmdldCIsImNoaWxkUmVxdWVzdGVkRWRpdCIsImZpbmQiLCJjaGlsZCIsInJlcXVlc3RFZGl0IiwicmVmIiwiZWxlbWVudCIsIm93bmVyRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJuZXdHcmlkQXJlYVRleHQiLCJjaGlsZHJlbiIsImlubmVyQmxvY2tzUHJvcHMiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIm5ld01pbkhlaWdodCIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiZGVmaW5pdGlvbnMiLCJjb3VudERlbHRhIiwidW5pdCIsInNwbGljZSIsImxlbmd0aCIsImZyb20iLCJpbmRleCIsInRlbXBsYXRlIiwidGVtcGxhdGVzQ29weSIsImdldEJsb2NrIiwicGFyZW50cyIsIm5hbWUiLCJzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXIiLCJyZWR1Y2UiLCJyZXMiLCJwYXJlbnRJZCIsInNlbGYiLCJwYXJlbnRCbG9jayIsInB1c2giLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiY3VyIiwic3RhY2tpbmdPcmRlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImljb24iLCJtZXRhZGF0YSIsIlNhdmUiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUJsb2NrIiwiZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIiwiZG9HcmlkSGVscGVyU2VsZWN0aW9uIiwiZSIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJjZWxsWCIsInN0YXJ0WSIsInkiLCJjZWxsWSIsImVuZFgiLCJlbmRZIiwic3RhcnQiLCJNYXRoIiwibWluIiwiZW5kIiwibWF4IiwicGFyc2VkIiwiZG9HcmlkSGVscGVyU2F2ZSIsImdyaWRDbGllbnRJZCIsInRhcmdldCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImdyaWRBcmVhIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJHcmlkSGVscGVyQ2VsbCIsImNlbGxMYWJlbCIsIm9uTW91c2VEb3duIiwib25Nb3VzZUVudGVyIiwiR3JpZEhlbHBlckFwcGVuZGVyIiwiYXJlYSIsImdyaWRIZWxwZXJJc0RyYXdpbmciLCJzZXRHcmlkSGVscGVySXNEcmF3aW5nIiwiZ3JpZEhlbHBlckNhblNhdmUiLCJzZXRHcmlkSGVscGVyQ2FuU2F2ZSIsImdyaWRIZWxwZXJDb29yZFJlcyIsInNldEdyaWRIZWxwZXJDb29yZFJlcyIsImZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjZWxsSW5kZXgiLCJmbG9vciIsImtleSIsInVuZGVmaW5lZCIsImRpc3BsYXkiLCJjc3NTYWZlQmFzZTY0Iiwic3RyaW5nIiwid2luZG93IiwiYnRvYSIsInJlcGxhY2UiLCJnZW5lcmF0ZUdyaWRBcmVhIiwicm93c1JlcyIsInJvd3NJIiwiY29sc1JlcyIsImNvbHNJIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=