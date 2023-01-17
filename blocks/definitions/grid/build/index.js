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
/* harmony import */ var _common_styles_grid_styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../common/styles/grid-styles/editor.scss */ "../../common/styles/grid-styles/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _local_components_GridEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./local_components/GridEditor */ "./src/local_components/GridEditor/index.js");

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
      verticalAlignment,
      colDefinitions: {
        count: colCount,
        templates: colTemplates
      },
      rowDefinitions: {
        count: rowCount,
        templates: rowTemplates
      },
      editing,
      style
    },
    // Attribute Setters.
    setAlignment,
    setGridNoColsOrRows,
    setGridTemplateColumnOrRow,
    setGridEditing,
    // Redux Setters.
    setGridAreasEditorStackingOrder,
    // Other.
    clientId
  } = _ref;
  console.log(style);
  //
  // Get information about the current Block, and its children. 
  // (Used htmlFor setting the editor stacking order, and adding / editing Grid-Area's)
  //

  const {
    selectedGridItemClientId,
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
    const selectedGridItemClientId = getSelectedBlockClientId();
    const selectedGridItemRootBlockClientId = selectedGridItemClientId ? getBlockParentsByBlockName(selectedGridItemClientId, ['h2ml/grid'], true)[0] : false;
    const gridChildren = getBlocks(clientId);
    // Return Values.
    return {
      selectedGridItemClientId,
      selectedGridItemRootBlockClientId,
      gridChildren
    };
  }, []);

  //
  // Handle updating the stacking order htmlFor any currently selected Grid Area's within the editor.
  //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId);
  }, [selectedGridItemClientId]);

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
    if (editing) {
      // Set the focusTarget if needed. 
      if (editing.clientId) setFocusTarget(editing);
      // Reset the Grid's 'editing' attribute. 
      setGridEditing(false);
    } else {
      // Determine if a Grid Area is requesting to be updated. 
      const childRequestedEdit = gridChildren.find(child => child.attributes.requestEdit);
      if (childRequestedEdit) {
        // Re-focus on the Grid, as focus will have been captured by the Grid Area.
        document.querySelector(`[data-block="${clientId}"]`).focus();
        setGridEditing(childRequestedEdit);
      }
    }
  }, [gridChildren, gridChildren.includes(child => child.attributes.requestEdit)]);

  //
  // If the Grid's 'editing' attribute changes to false, and a focusTarget is set, then .focus() on the focusTarget's DOM element,
  // then reset the focusTarget to null.
  //

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!editing && focusTarget) document.querySelector(`[data-block="${focusTarget.clientId}"]`).focus();
    setFocusTarget(null);
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
      gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateGridTemplateAreas)(0, colCount, rowCount) /* 0 === 'editor' */,
      gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateGridTemplateColumnsOrRows)(0, colTemplates) /* 0 === 'editor' */,
      gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.generateGridTemplateColumnsOrRows)(0, rowTemplates) /* 0 === 'editor' */
    },

    onKeyPress: e => {
      if (clientId === selectedGridItemClientId) {
        e.stopPropagation();
        // Variables.
        const {
          key
        } = e;
        const editKeys = ['a', 'A'];
        const exitKeys = ['c', 'C'];
        // Bind keys to attribute setters.
        if (editKeys.includes(key) && !editing) setGridEditing(true);else if (exitKeys.includes(key)) {
          setGridEditing(false);
          setGridEditing(false);
        }
        ;
      }
    }
  }), {
    allowedBlocks: ['h2ml/grid-area']
  });

  //
  // The JSX.
  //

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockVerticalAlignmentToolbar, {
    onChange: setAlignment,
    value: verticalAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Grid Settings', 'h2ml'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Grid area number of Columns`, 'h2ml'),
    value: colCount,
    onChange: value => setGridNoColsOrRows(0, value) // 0 === 'col'
    ,
    min: 1,
    max: 8
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Grid area number of Rows`, 'h2ml'),
    value: rowCount,
    onChange: value => setGridNoColsOrRows(1, value) // 1 === 'row'
    ,
    min: 1,
    max: 8
  }), colCount * rowCount > 49 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('The number of cells is greater than the recommended limit.', 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Grid Columns Settings', 'h2ml'),
    initialOpen: false
  }, [...Array(colCount)].map((_, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: `col-settings-${i}`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column %1$d Width", 'h2ml'), i + 1),
    value: colTemplates[i],
    onChange: value => setGridTemplateColumnOrRow(0, i, value /* 0 === 'col' */)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Grid Rows Settings', 'h2ml'),
    initialOpen: false
  }, [...Array(rowCount)].map((_, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: `row-settings-${i}`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Row %1$d Height", 'h2ml'), i + 1),
    value: rowTemplates[i],
    onChange: value => setGridTemplateColumnOrRow(1, i, value) /* 0 === 'row' */
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_local_components_GridEditor__WEBPACK_IMPORTED_MODULE_8__.GridEditor, {
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
  // Update the Grid Area's WP alignment (Wide, Full etc).
  //
  setAlignment(verticalAlignment) {
    const {
      setAttributes
    } = ownProps;
    setAttributes({
      verticalAlignment
    });
  },
  //
  // Update number of columns / rows, clean up the relevant templates, and finally set the total number of Grid Area's.
  //
  setGridNoColsOrRows(type, count) {
    const {
      attributes,
      setAttributes
    } = ownProps;
    // Determine if we're setting Columns or Rows, and also get the opposite.
    const options = ['col', 'row'];
    const other = options[type ^ 1];
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
  // Update templates htmlFor specific Columns / Rows.
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
    const definitions = {
      ...attributes[`${type}Definitions`]
    };
    // Update the given Column / Row template and set the attribute.
    const unit = type === 'col' ? '1fr' : 'max-content';
    definitions.templates[index] = template ? template : unit;
    setAttributes({
      [`${type}Definitions`]: definitions
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
  setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId) {
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
      const parents = getBlock(selectedGridItemClientId).name !== 'h2ml/grid-area' ? getBlockParentsByBlockName(selectedGridItemClientId, ['h2ml/grid', 'h2ml/grid-area'], true) : [selectedGridItemClientId, ...getBlockParentsByBlockName(selectedGridItemClientId, ['h2ml/grid', 'h2ml/grid-area'], true)];
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
        clientId: selectedGridItemClientId,
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

/***/ "./src/local_components/GridEditor/components/index.js":
/*!*************************************************************!*\
  !*** ./src/local_components/GridEditor/components/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColsRowHelperInner": () => (/* binding */ ColsRowHelperInner),
/* harmony export */   "GridHelperAppender": () => (/* binding */ GridHelperAppender),
/* harmony export */   "GridHelperCell": () => (/* binding */ GridHelperCell),
/* harmony export */   "GridHelperLabel": () => (/* binding */ GridHelperLabel)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */




/**
 * Components
 */

const ColsRowHelperInner = props => {
  const {
    index
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, index);
};
const GridHelperLabel = props => {
  const {
    lableType,
    lableCount
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid-cols-rows-helper-wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `grid-${lableType.substring(0, 3).toLowerCase()}s-helper`
  }), Array.from(Array(lableCount)).map((_, lableIndex) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: `${lableType}-lable-cell-${lableIndex}`,
    className: "grid-cols-rows-helper",
    style: {
      [`grid${lableType}Start`]: ++lableIndex + 1,
      [`grid${lableType === 'Column' ? 'Row' : 'Column'}Start`]: 1
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%2$s %1$d', 'h2ml'), lableIndex, lableType)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, lableIndex))))));
};
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
      gridArea: `${cellY + 1} / ${cellX + 1} / ${cellY + 2} / ${cellX + 2}`
    }
  }, `${cellLabel}`, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("sub", null, `(${cellX}, ${cellY})`));
};
const GridHelperAppender = props => {
  const {
    style,
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-grid-area-appender",
    area: props.area ? props.area : null,
    style
  }, children);
};

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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/local_components/GridEditor/components/index.js");
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
  // The JSX.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-helpers"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.GridHelperLabel, {
    lableType: "Column",
    lableCount: colCount
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.GridHelperLabel, {
    lableType: "Row",
    lableCount: rowCount
  }), Array.from(Array(colCount * rowCount)).map((_, cellIndex) => {
    cellIndex++;
    const cellX = (cellIndex - 1) % colCount + 1;
    const cellY = Math.floor((cellIndex - 1) / colCount) + 1;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.GridHelperCell, {
      key: `helper-cell-${cellIndex}`,
      cellLabel: cellIndex,
      cellX,
      cellY,
      onMouseDown: editing ? e => {
        // End Grid Area Selection.
        const finishSelectingGridArea = () => {
          // Reset State.
          setGridHelperIsDrawing(false);
          // Set State.
          setGridHelperCanSave(true);
          // Cleanup this Document event listener.
          document.removeEventListener('mouseup', finishSelectingGridArea);
        };
        document.addEventListener('mouseup', finishSelectingGridArea);
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Click and drag", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to add a new Grid Area, when you're done click", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save Grid Area", 'h2ml')), ", ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("press", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("E", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("or", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("C", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to cancel.", 'h2ml'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't forget to "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update", 'h2ml')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" the post when you're done.", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_6__.GridHelperAppender, {
    className: "grid-grid-area-appender",
    style: gridHelperCoordRes ? {
      gridArea: gridHelperCoordRes.parsed,
      display: 'flex'
    } : undefined
  }, " ", gridHelperCanSave && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    text: editing?.clientId ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Grid Area', 'h2ml') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Grid Area', 'h2ml'),
    label: editing?.clientId ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Update Grid Area', 'h2ml') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Grid Area', 'h2ml'),
    showTooltip: true,
    variant: "primary",
    onClick: () => {
      // Save the new / updated Grid Area.
      doGridHelperSave(gridClientId, editing, gridHelperCoordRes);
      // Reset state.
      setGridHelperIsDrawing(false);
      setGridHelperCanSave(false);
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
        gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateAreas)(1, colCount, rowCount) /* 1 === 'save' */,
        gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateColumnsOrRows)(1, colTemplates) /* 1 === 'save' */,
        gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.generateGridTemplateColumnsOrRows)(1, rowTemplates) /* 1 === 'save' */
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

function generateGridTemplateAreas(context, colCount, rowCount) {
  if (context) {
    // Save
    return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `${rowsRes}\n"${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
      return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`;
    }, '')}"`, '');
  } else {
    // Editor
    // In the editor only, we add an additional Column / Row to the Grid Temlplate Areas, 
    // to account for the grid helpers.
    return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `${rowsRes}\n"${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
      return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`;
    }, '.')}"`, `"${Array.from(Array(colCount)).reduce((editorRes, _, i) => `${editorRes} .`, '.')}"`);
  }
}

//
//
//

function generateGridTemplateColumnsOrRows(context, templates) {
  if (context) {
    // Save
    return templates.reduce((res, cur) => {
      return `${res} ${cur}`;
    }, '');
  } else {
    // Editor
    // In the editor only, we add an additional Column / Row template to account for the grid helpers.
    return templates.reduce((res, cur) => {
      return `${res} ${cur}`;
    }, 'min-content');
  }
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid","version":"0.1.0","title":"Grid","category":"design","description":"Display content in a Grid, across multiple Grid Area\'s, with blocks added to each Grid Area.","textdomain":"h2ml","keywords":["h2ml","grid"],"attributes":{"verticalAlignment":{"type":"string"},"colDefinitions":{"type":"object","default":{"count":3,"templates":["1fr","1fr","1fr"]}},"rowDefinitions":{"type":"object","default":{"count":4,"templates":["max-content","max-content","max-content","max-content"]}}},"supports":{"anchor":true,"align":["wide","full"],"reusable":true,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":["horizontal","vertical"],"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true,"margin":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9ncmlkLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGdyaWQgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03LjggMTYuNUg1Yy0uMyAwLS41LS4yLS41LS41di02LjJoNi44djYuN3ptMC04LjNINC41VjVjMC0uMy4yLS41LjUtLjVoNi4ydjYuN3ptOC4zIDcuOGMwIC4zLS4yLjUtLjUuNWgtNi4ydi02LjhoNi44VjE5em0wLTcuOGgtNi44VjQuNUgxOWMuMyAwIC41LjIuNS41djYuMnpcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmlkLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHROb3RpY2UsXG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0VG9vbHRpcFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxuXHRzcHJpbnRmXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBcblx0Y3JlYXRlUmVkdXhTdG9yZSwgXG5cdHJlZ2lzdGVyXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5cbmltcG9ydCAnLi8uLi8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzJztcblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzLFxufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5pbXBvcnQgeyBHcmlkRWRpdG9yIH0gZnJvbSAnLi9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3InXG5cbi8qXG4qIFJlZHV4IHN0b3JlIGh0bWxGb3IgaG9sZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhLCBcbiogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhIGlzIHZpc3VhbGx5IG9uIHRvcCBpbiB0aGUgZWRpdG9yLlxuKi9cblxucmVnaXN0ZXIoY3JlYXRlUmVkdXhTdG9yZShcImgybWwvZ3JpZF9hcmVhX3N0b3JlXCIsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRzZWxlY3RlZDoge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9LFxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0XHRcdC4uLnN0YXRlLnNlbGVjdGVkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCIsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0Z2V0U2VsZWN0ZWRHcmlkQXJlYShzdGF0ZSkge1xuXHRcdFx0cmV0dXJuIHN0YXRlLnNlbGVjdGVkLnZhbHVlO1xuXHRcdH1cblx0fVxufSkpO1xuXG4vKipcbiAqIFRoZSBDb2RlLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fSxcblx0XHRlZGl0aW5nLFxuXHRcdHN0eWxlXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRBbGlnbm1lbnQsXG5cdHNldEdyaWROb0NvbHNPclJvd3MsXG5cdHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93LFxuXHRzZXRHcmlkRWRpdGluZyxcblx0Ly8gUmVkdXggU2V0dGVycy5cblx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkXG59KSA9PiB7XG5cdGNvbnNvbGUubG9nKHN0eWxlKTtcblx0Ly9cblx0Ly8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IEJsb2NrLCBhbmQgaXRzIGNoaWxkcmVuLiBcblx0Ly8gKFVzZWQgaHRtbEZvciBzZXR0aW5nIHRoZSBlZGl0b3Igc3RhY2tpbmcgb3JkZXIsIGFuZCBhZGRpbmcgLyBlZGl0aW5nIEdyaWQtQXJlYSdzKVxuXHQvL1xuXG5cdGNvbnN0IHsgc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQsIGdyaWRDaGlsZHJlbiB9ID0gdXNlU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7IGdldEJsb2NrcywgZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkLCBnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPSBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQgPyBnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIFsnaDJtbC9ncmlkJ10sIHRydWUpWzBdIDogZmFsc2U7XG5cdFx0Y29uc3QgZ3JpZENoaWxkcmVuID0gZ2V0QmxvY2tzKGNsaWVudElkKTtcblx0XHQvLyBSZXR1cm4gVmFsdWVzLlxuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsXG5cdFx0XHRzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRncmlkQ2hpbGRyZW5cblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Ly9cblx0Ly8gSGFuZGxlIHVwZGF0aW5nIHRoZSBzdGFja2luZyBvcmRlciBodG1sRm9yIGFueSBjdXJyZW50bHkgc2VsZWN0ZWQgR3JpZCBBcmVhJ3Mgd2l0aGluIHRoZSBlZGl0b3IuXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKTtcblx0fSwgW3NlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZF0pO1xuXG5cdC8vXG5cdC8vIGZvY3VzVGFyZ2V0IHN0YXRlLCB0aGlzIGlzIHVzZWQgdG8gZW5zdXJlIHdlIGF1dG8tZm9jdXMgb24gdGhlIGNvcnJlY3QgR3JpZCBBcmVhIHdoZW4gbWFraW5nIGNoYW5nZXMgdG8gdGhlIEdyaWQuXG5cdC8vXG5cblx0Y29uc3QgW2ZvY3VzVGFyZ2V0LCBzZXRGb2N1c1RhcmdldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXHQvLyBcblx0Ly8gSWYgZWl0aGVyIG9mIHRoZSBHcmlkJ3MgdG90YWwgbnVtYmVyIG9mIGNoaWxkcmVuIGNoYW5nZXMgKGFkZGluZyksIG9yIGlmIHRoZSAncmVxdWVzdEVkaXQnIGF0dHJpYnV0ZSBvZiBvbmUgb2YgdGhlIEdyaWQncyBcblx0Ly8gY2hhbmdlcyAodXBkYXRpbmcpIHRoZW4gZG8gdGhlIGZvbGxvd2luZzogXG5cdC8vIFxuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgaXMgYWxyZWFkeSBzZXQgdGhlbiB3ZSBoYXZlIGp1c3QgZmluaXNoZWQgZWRpdGluZywgYW5kIHdlIHNob3VsZCBkZXRlcm1pbmUgaWYgd2UgbmVlZCBcblx0Ly8gdG8gZm9jdXMgb24gYW4gdXBkYXRlZCBHcmlkIEFyZWEuIEluIGVpdGhlciBjYXNlIHJlc2V0IHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGlzIE5PVCBzZXQgdGhlbiBkZXRlcm1pbmUgaWYgYW55IG9mIHRoZSBHcmlkJ3MgR3JpZC1BcmVhJ3MgYXJlIHJlcXVlc3RpbmcgYW4gZWRpdC4gXG5cdC8vIElmIHNvLCBjYWxsIHNldEdyaWRFZGl0aW5nLlxuXHQvL1xuXHQvLyBUaGlzIGRvZXMgbm90IGhhbmRsZSBhZGRpbmcgYSBuZXcgZ3JpZCBhcmVhLCB0aGF0IGlzIGRvbmUgYnkgdGhlIEdyaWQgaXRzZWxmIHRocm91Z2ggdGhlIG9uS2V5UHJlc3MgZXZlbnQsIG9yIGl0IGlzIFxuXHQvLyBkb25lIGJ5IHRoZSBncmlkRWRpdG9yLCB1c2luZyB0aGUgQmxvY2tBcHBlbmRlciBidXR0b24uIFxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoZWRpdGluZykge1xuXHRcdFx0Ly8gU2V0IHRoZSBmb2N1c1RhcmdldCBpZiBuZWVkZWQuIFxuXHRcdFx0aWYoZWRpdGluZy5jbGllbnRJZCkgc2V0Rm9jdXNUYXJnZXQoZWRpdGluZyk7XG5cdFx0XHQvLyBSZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUuIFxuXHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgYSBHcmlkIEFyZWEgaXMgcmVxdWVzdGluZyB0byBiZSB1cGRhdGVkLiBcblx0XHRcdGNvbnN0IGNoaWxkUmVxdWVzdGVkRWRpdCA9IGdyaWRDaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmF0dHJpYnV0ZXMucmVxdWVzdEVkaXQpO1xuXHRcdFx0aWYoY2hpbGRSZXF1ZXN0ZWRFZGl0KSB7XG5cdFx0XHRcdC8vIFJlLWZvY3VzIG9uIHRoZSBHcmlkLCBhcyBmb2N1cyB3aWxsIGhhdmUgYmVlbiBjYXB0dXJlZCBieSB0aGUgR3JpZCBBcmVhLlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Y2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHRcdFx0c2V0R3JpZEVkaXRpbmcoY2hpbGRSZXF1ZXN0ZWRFZGl0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIFtncmlkQ2hpbGRyZW4sIGdyaWRDaGlsZHJlbi5pbmNsdWRlcyhjaGlsZCA9PiBjaGlsZC5hdHRyaWJ1dGVzLnJlcXVlc3RFZGl0KV0pO1xuXG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBjaGFuZ2VzIHRvIGZhbHNlLCBhbmQgYSBmb2N1c1RhcmdldCBpcyBzZXQsIHRoZW4gLmZvY3VzKCkgb24gdGhlIGZvY3VzVGFyZ2V0J3MgRE9NIGVsZW1lbnQsXG5cdC8vIHRoZW4gcmVzZXQgdGhlIGZvY3VzVGFyZ2V0IHRvIG51bGwuXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZighZWRpdGluZyAmJiBmb2N1c1RhcmdldCkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmxvY2s9XCIke2ZvY3VzVGFyZ2V0LmNsaWVudElkfVwiXWApLmZvY3VzKCk7XG5cdFx0c2V0Rm9jdXNUYXJnZXQobnVsbClcblx0fSwgW2VkaXRpbmddKTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXG5cdGNvbnN0IG5ld0dyaWRBcmVhVGV4dCA9IF9fKCdBZGQgbmV3IEdyaWQgQXJlYScsICdoMm1sJyk7XG5cdGNvbnN0IHsgY2hpbGRyZW4sIC4uLmlubmVyQmxvY2tzUHJvcHMgfSA9IHVzZUlubmVyQmxvY2tzUHJvcHMoXG5cdFx0dXNlQmxvY2tQcm9wcyh7XG5cdFx0XHRzdHlsZToge1xuXHRcdFx0XHRncmlkVGVtcGxhdGVBcmVhczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcygwLCBjb2xDb3VudCwgcm93Q291bnQpIC8qIDAgPT09ICdlZGl0b3InICovLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMCwgY29sVGVtcGxhdGVzKSAvKiAwID09PSAnZWRpdG9yJyAqLyxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlUm93czogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKDAsIHJvd1RlbXBsYXRlcykgLyogMCA9PT0gJ2VkaXRvcicgKi9cblx0XHRcdH0sXG5cdFx0XHRvbktleVByZXNzOiAoZSkgPT4ge1xuXHRcdFx0XHRpZihjbGllbnRJZCA9PT0gc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkKSB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0XHRcdFx0Y29uc3QgeyBrZXkgfSA9IGU7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdEtleXMgPSBbJ2EnLCAnQSddO1xuXHRcdFx0XHRcdGNvbnN0IGV4aXRLZXlzID0gWydjJywgJ0MnXTtcblx0XHRcdFx0XHQvLyBCaW5kIGtleXMgdG8gYXR0cmlidXRlIHNldHRlcnMuXG5cdFx0XHRcdFx0aWYgKGVkaXRLZXlzLmluY2x1ZGVzKGtleSkgJiYgIWVkaXRpbmcpIHNldEdyaWRFZGl0aW5nKHRydWUpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGV4aXRLZXlzLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdFx0XHRcdHNldEdyaWRFZGl0aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldEdyaWRFZGl0aW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pLCB7XG5cdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ2gybWwvZ3JpZC1hcmVhJ10sXG5cdFx0fVxuXHQpO1xuXG5cdC8vXG5cdC8vIFRoZSBKU1guXG5cdC8vXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRBbGlnbm1lbnR9XG5cdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgU2V0dGluZ3MnLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17dHJ1ZX0+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oYEdyaWQgYXJlYSBudW1iZXIgb2YgQ29sdW1uc2AsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbENvdW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkTm9Db2xzT3JSb3dzKDAsIHZhbHVlKX0gLy8gMCA9PT0gJ2NvbCdcblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oYEdyaWQgYXJlYSBudW1iZXIgb2YgUm93c2AsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkTm9Db2xzT3JSb3dzKDEsIHZhbHVlKX0gLy8gMSA9PT0gJ3Jvdydcblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7KGNvbENvdW50ICogcm93Q291bnQpID4gNDkgJiZcblx0XHRcdFx0XHRcdFx0XHQoPE5vdGljZSBzdGF0dXM9XCJ3YXJuaW5nXCIgaXNEaXNtaXNzaWJsZT17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnVGhlIG51bWJlciBvZiBjZWxscyBpcyBncmVhdGVyIHRoYW4gdGhlIHJlY29tbWVuZGVkIGxpbWl0LicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdoMm1sJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L05vdGljZT4pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgQ29sdW1ucyBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkoY29sQ291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YGNvbC1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiQ29sdW1uICUxJGQgV2lkdGhcIiwgJ2gybWwnKSwgaSArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbFRlbXBsYXRlc1tpXX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdygwLCBpLCB2YWx1ZSAvKiAwID09PSAnY29sJyAqLyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdHcmlkIFJvd3MgU2V0dGluZ3MnLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHR7Wy4uLkFycmF5KHJvd0NvdW50KV0ubWFwKChfLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Byb3ctc2V0dGluZ3MtJHtpfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17c3ByaW50ZihfXyhcIlJvdyAlMSRkIEhlaWdodFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cm93VGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDEsIGksIHZhbHVlKSAvKiAwID09PSAncm93JyAqL31cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L1BhbmVsPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9PlxuXHRcdFx0XHQ8R3JpZEVkaXRvclxuXHRcdFx0XHRcdGdyaWRDbGllbnRJZD17Y2xpZW50SWR9XG5cdFx0XHRcdFx0Y29sQ291bnQ9e2NvbENvdW50fVxuXHRcdFx0XHRcdHJvd0NvdW50PXtyb3dDb3VudH1cblx0XHRcdFx0XHRlZGl0aW5nPXtlZGl0aW5nfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhc1wiPlxuXHRcdFx0XHRcdHshKGVkaXRpbmcpICYmIChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYS1hcHBlbmRlci13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYUNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXAgdGV4dD17bmV3R3JpZEFyZWFUZXh0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImFkZE5ld0dyaWRBcmVhXCI+e25ld0dyaWRBcmVhVGV4dH08L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiYWRkTmV3R3JpZEFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWRkTmV3R3JpZEFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0R3JpZEVkaXRpbmcodHJ1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+PHBhdGggZD1cIk0xOCAxMS4yaC01LjJWNmgtMS42djUuMkg2djEuNmg1LjJWMThoMS42di01LjJIMTh6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vKlxuICogVGhlIEJsb2NrIEFjdGlvbnMuXG4gKi9cblxuY29uc3QgR3JpZEVkaXRXcmFwcGVyID0gd2l0aERpc3BhdGNoKFxuXHQoZGlzcGF0Y2gsIG93blByb3BzLCByZWdpc3RyeSkgPT4gKHtcblx0XHQvL1xuXHRcdC8vIFVwZGF0ZSB0aGUgR3JpZCBBcmVhJ3MgV1AgYWxpZ25tZW50IChXaWRlLCBGdWxsIGV0YykuXG5cdFx0Ly9cblx0XHRzZXRBbGlnbm1lbnQodmVydGljYWxBbGlnbm1lbnQpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdmVydGljYWxBbGlnbm1lbnQgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFVwZGF0ZSBudW1iZXIgb2YgY29sdW1ucyAvIHJvd3MsIGNsZWFuIHVwIHRoZSByZWxldmFudCB0ZW1wbGF0ZXMsIGFuZCBmaW5hbGx5IHNldCB0aGUgdG90YWwgbnVtYmVyIG9mIEdyaWQgQXJlYSdzLlxuXHRcdC8vXG5cdFx0c2V0R3JpZE5vQ29sc09yUm93cyh0eXBlLCBjb3VudCkge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdC8vIERldGVybWluZSBpZiB3ZSdyZSBzZXR0aW5nIENvbHVtbnMgb3IgUm93cywgYW5kIGFsc28gZ2V0IHRoZSBvcHBvc2l0ZS5cblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbJ2NvbCcsICdyb3cnXTtcblx0XHRcdGNvbnN0IG90aGVyID0gb3B0aW9uc1t0eXBlIF4gMV07XG5cdFx0XHR0eXBlID0gb3B0aW9uc1t0eXBlXTtcblx0XHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGV4aXN0aW5nIENvbHVtbiAvIFJvdyBkZWZpbml0aW9uLlxuXHRcdFx0Y29uc3QgZGVmaW5pdGlvbnMgPSB7IC4uLmF0dHJpYnV0ZXNbYCR7dHlwZX1EZWZpbml0aW9uc2BdIH07XG5cdFx0XHRjb25zdCBjb3VudERlbHRhID0gY291bnQgLSBkZWZpbml0aW9ucy5jb3VudDtcblx0XHRcdC8vIENsZWFuIHVwIENvbHVtbiAvIFJvdyB0ZW1wbGF0ZXMuXG5cdFx0XHRjb25zdCB1bml0ID0gdHlwZSA9PT0gJ2NvbCcgPyAnMWZyJyA6ICdtYXgtY29udGVudCc7XG5cdFx0XHRkZWZpbml0aW9ucy50ZW1wbGF0ZXMuc3BsaWNlKC4uLmNvdW50RGVsdGEgPiAwID9cblx0XHRcdFx0W2RlZmluaXRpb25zLnRlbXBsYXRlcy5sZW5ndGgsIDAsIC4uLkFycmF5LmZyb20oQXJyYXkoY291bnREZWx0YSkpLm1hcChfID0+IHVuaXQpXSA6IC8vIEFkZGluZyBDb2x1bW5zIC8gUm93c1xuXHRcdFx0XHRbY291bnQsIGRlZmluaXRpb25zLnRlbXBsYXRlcy5sZW5ndGggLSAxXSAvLyBSZW1vdmluZyBDb2x1bW5zIC8gUm93c1xuXHRcdFx0KTtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZGVmaW5pdGlvbidzIGNvdW50IHZhbHVlIGFuZCB0aGVuIHNldCB0aGUgYXR0cmJ1dGUuIFxuXHRcdFx0ZGVmaW5pdGlvbnMuY291bnQgPSBjb3VudDtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBbYCR7dHlwZX1EZWZpbml0aW9uc2BdOiBkZWZpbml0aW9ucyB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRlbXBsYXRlcyBodG1sRm9yIHNwZWNpZmljIENvbHVtbnMgLyBSb3dzLlxuXHRcdC8vXG5cdFx0c2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3codHlwZSwgaW5kZXgsIHRlbXBsYXRlKSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIGdlbmVyYXRpbmcgYSBDb2x1bW5zIG9yIFJvd3MgdGVtcGxhdGVcblx0XHRcdGNvbnN0IG9wdGlvbnMgPSBbJ2NvbCcsICdyb3cnXTtcblx0XHRcdHR5cGUgPSBvcHRpb25zW3R5cGVdO1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXhpc3RpbmcgQ29sdW1uIC8gUm93IGRlZmluaXRpb24uXG5cdFx0XHRjb25zdCBkZWZpbml0aW9ucyA9IHsgLi4uYXR0cmlidXRlc1tgJHt0eXBlfURlZmluaXRpb25zYF0gfTtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZ2l2ZW4gQ29sdW1uIC8gUm93IHRlbXBsYXRlIGFuZCBzZXQgdGhlIGF0dHJpYnV0ZS5cblx0XHRcdGNvbnN0IHVuaXQgPSB0eXBlID09PSAnY29sJyA/ICcxZnInIDogJ21heC1jb250ZW50Jztcblx0XHRcdGRlZmluaXRpb25zLnRlbXBsYXRlc1tpbmRleF0gPSB0ZW1wbGF0ZSA/IHRlbXBsYXRlIDogdW5pdDtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBbYCR7dHlwZX1EZWZpbml0aW9uc2BdOiBkZWZpbml0aW9ucyB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gU2V0IHRoZSBHcmlkICdlZGl0aW5nJyBhdHRyaWJ1dGVcblx0XHQvL1xuXHRcdHNldEdyaWRFZGl0aW5nKHZhbHVlKSB7XG5cdFx0XHRjb25zdCB7IHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGVkaXRpbmc6IHZhbHVlIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBXaGVuIGEgR3JpZC1BcmVhIG9yIGFueSBvZiBpdCdzIGNoaWxkcmVuIGFyZSBzZWxjdGVkLCB2aXN1YWxseSBtb3ZlIHRoYXQgaXRlbSB0byB0aGUgdG9wIG9mIHRoZSBcblx0XHQvLyBzdGFja2luZyBjb250ZXh0LiAodGhpcyBpcyBub3Qgc2F2ZWQgYXMgYW4gYXR0cmlidXRlLCBhbmQgaXMgcHVyZWx5IGh0bWxGb3IgY29udmVuaWVuY2UgaW4gdGhlIGVkaXRvcikuXG5cdFx0Ly9cblx0XHRzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRjb25zdCB7IGNsaWVudElkIH0gPSBvd25Qcm9wcztcblx0XHRcdGNvbnN0IHsgc2V0U2VsZWN0ZWRHcmlkQXJlYSB9ID0gZGlzcGF0Y2goJ2gybWwvZ3JpZF9hcmVhX3N0b3JlJyk7XG5cdFx0XHRpZiAoc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkID09PSBjbGllbnRJZCkge1xuXHRcdFx0XHRjb25zdCB7IGdldEJsb2NrLCBnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSwgZ2V0QmxvY2tzIH0gPSByZWdpc3RyeS5zZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHBhcmVudHMgPSBnZXRCbG9jayhzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQpLm5hbWUgIT09ICdoMm1sL2dyaWQtYXJlYScgP1xuXHRcdFx0XHRcdGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgWydoMm1sL2dyaWQnLCAnaDJtbC9ncmlkLWFyZWEnXSwgdHJ1ZSkgOlxuXHRcdFx0XHRcdFtzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIC4uLmdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgWydoMm1sL2dyaWQnLCAnaDJtbC9ncmlkLWFyZWEnXSwgdHJ1ZSldO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXIgPSBwYXJlbnRzLnJlZHVjZSgocmVzLCBwYXJlbnRJZCwgaSwgc2VsZikgPT4ge1xuXHRcdFx0XHRcdGxldCBwYXJlbnRCbG9jayA9IGdldEJsb2NrKHBhcmVudElkKTtcblx0XHRcdFx0XHRpZiAocGFyZW50QmxvY2submFtZSA9PT0gJ2gybWwvZ3JpZC1hcmVhJykge1xuXHRcdFx0XHRcdFx0cmVzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRjbGllbnRJZDogcGFyZW50SWQsXG5cdFx0XHRcdFx0XHRcdGVkaXRvclN0YWNraW5nT3JkZXI6IGdldEJsb2NrcyhzZWxmWysraV0pLnJlZHVjZSgocmVzLCBjdXIpID0+IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgPj0gcmVzID8gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciArIDEgOiByZXMsIDApXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdFx0fSwgW10pO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRzZXRTZWxlY3RlZEdyaWRBcmVhKHtcblx0XHRcdFx0XHRjbGllbnRJZDogc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLFxuXHRcdFx0XHRcdHBhcmVudHM6IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoIXNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCkge1xuXHRcdFx0XHRzZXRTZWxlY3RlZEdyaWRBcmVhKG51bGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSlcbikoR3JpZEVkaXQpO1xuXG4vKlxuICogRXhwb3J0IHRoZSBCbG9jay5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHByb3BzKSB7XG5cdHJldHVybiA8R3JpZEVkaXRXcmFwcGVyIHsuLi5wcm9wc30gLz47XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyBncmlkIGFzIGljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcblxuLyoqXG4gKiBTdHlsZVxuICovXG5cbmltcG9ydCAnLi8uLi8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vLi4vYmxvY2suanNvbic7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IFNhdmUgZnJvbSAnLi9zYXZlJ1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBCbG9ja1xuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhLm5hbWUsIHtcblx0Ly9cblx0aWNvbixcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogU2F2ZSxcbn0pO1xuXG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRfXyxcblx0X24sXG5cdHNwcmludGZcbn0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbi8qKlxuICogQ29tcG9uZW50c1xuICovXG5cbmV4cG9ydCBjb25zdCBDb2xzUm93SGVscGVySW5uZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGluZGV4XG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxzcGFuPntpbmRleH08L3NwYW4+XG59O1xuXG5leHBvcnQgY29uc3QgR3JpZEhlbHBlckxhYmVsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRsYWJsZVR5cGUsXG5cdFx0bGFibGVDb3VudFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGdyaWQtY29scy1yb3dzLWhlbHBlci13cmFwYH0+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2BncmlkLSR7bGFibGVUeXBlLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpfXMtaGVscGVyYH0gLz5cblx0XHR7QXJyYXkuZnJvbShBcnJheShsYWJsZUNvdW50KSkubWFwKChfLCBsYWJsZUluZGV4KSA9PiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGtleT17YCR7bGFibGVUeXBlfS1sYWJsZS1jZWxsLSR7bGFibGVJbmRleH1gfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJncmlkLWNvbHMtcm93cy1oZWxwZXJcIlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFtgZ3JpZCR7bGFibGVUeXBlfVN0YXJ0YF06ICsrbGFibGVJbmRleCArIDEsXG5cdFx0XHRcdFx0W2BncmlkJHtsYWJsZVR5cGUgPT09ICdDb2x1bW4nID8gJ1JvdycgOiAnQ29sdW1uJ31TdGFydGBdOiAxLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtzcHJpbnRmKF9fKCclMiRzICUxJGQnLCAnaDJtbCcpLCBsYWJsZUluZGV4LCBsYWJsZVR5cGUpfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PHNwYW4+e2xhYmxlSW5kZXh9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpKX1cblx0PC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyQ2VsbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0Y2VsbExhYmVsLFxuXHRcdGNlbGxYLFxuXHRcdGNlbGxZLFxuXHRcdG9uTW91c2VEb3duLFxuXHRcdG9uTW91c2VFbnRlcixcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPGRpdlxuXHRcdGNsYXNzTmFtZT1cImdyaWQtYXJlYS1oZWxwZXJcIlxuXHRcdHsuLi57IG9uTW91c2VEb3duLCBvbk1vdXNlRW50ZXIgfX1cblx0XHRkYXRhLXhjb29yZHM9e2NlbGxYfVxuXHRcdGRhdGEteWNvb3Jkcz17Y2VsbFl9XG5cdFx0c3R5bGU9e3tcblx0XHRcdGdyaWRBcmVhOiBgJHtjZWxsWSArIDF9IC8gJHtjZWxsWCArIDF9IC8gJHtjZWxsWSArIDJ9IC8gJHtjZWxsWCArIDJ9YFxuXHRcdH19XG5cdD5cblx0XHR7YCR7Y2VsbExhYmVsfWB9IDxzdWI+e2AoJHtjZWxsWH0sICR7Y2VsbFl9KWB9PC9zdWI+XG5cdDwvZGl2PlxufVxuXG5leHBvcnQgY29uc3QgR3JpZEhlbHBlckFwcGVuZGVyID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRzdHlsZSxcblx0XHRjaGlsZHJlblxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0YXJlYT17cHJvcHMuYXJlYSA/IHByb3BzLmFyZWEgOiBudWxsfVxuXHRcdFx0ey4uLnsgc3R5bGUgfX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcbn0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHtcblx0c2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7IGNyZWF0ZUJsb2NrIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0R3JpZEhlbHBlckxhYmVsLFxuXHRHcmlkSGVscGVyQ2VsbCxcblx0R3JpZEhlbHBlckFwcGVuZGVyXG59IGZyb20gJy4vY29tcG9uZW50cydcblxuaW1wb3J0IHsgZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5cbi8qKlxuKiBFdmVudCBjYWxsYmFjayBGdW5jdGlvbiBmb3Igc3RhcnRpbmcgLyB1cGRhdGluZyB0aGUgc2VsZWN0aW5nIG9mIGEgR3JpZC1BcmVhIEFyZWFcbiovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNlbGVjdGlvbiA9IChlLCBjb29yZHMsIHJlcykgPT4ge1xuXHQvLyBSZXNldCB0aGUgZ3JpZCBhcmVhIGNvb3JkcyBvbiBtb3VzZWRvd24uXG5cdGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nKSByZXMgPSBudWxsO1xuXHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgdXBkYXRpbmcgYW4gZXhpc3Rpbmcgc2VsZWN0aW9uIChkcmFnZ2luZyksIG9yIHN0YXJ0aW5nIGEgbmV3IG9uZSAoY2xpY2tpbmcpLlxuXHRjb25zdCBzdGFydFggPSByZXM/LnN0b3JlPy54ID8gcmVzPy5zdG9yZT8ueCA6IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBzdGFydFkgPSByZXM/LnN0b3JlPy55ID8gcmVzPy5zdG9yZT8ueSA6IE51bWJlcihjb29yZHMuY2VsbFkpO1xuXHRjb25zdCBlbmRYID0gTnVtYmVyKGNvb3Jkcy5jZWxsWCk7XG5cdGNvbnN0IGVuZFkgPSBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Ly8gQ2FsY3VsYXRlIGFuZCBzdG9yZSB0aGUgbmV3IENvb3JkcyB2YWx1ZXMuXG5cdHJlcyA9IHtcblx0XHRzdG9yZToge1xuXHRcdFx0eDogc3RhcnRYLFxuXHRcdFx0eTogc3RhcnRZLFxuXHRcdH0sXG5cdFx0c3RhcnQ6IHtcblx0XHRcdHg6IE1hdGgubWluKHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1pbihzdGFydFksIGVuZFkpXG5cdFx0fSxcblx0XHRlbmQ6IHtcblx0XHRcdHg6IE1hdGgubWF4KHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1heChzdGFydFksIGVuZFkpLFxuXHRcdH1cblx0fTtcblx0cmVzLnBhcnNlZCA9IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChyZXMuc3RhcnQueCwgcmVzLnN0YXJ0LnksIHJlcy5lbmQueCwgcmVzLmVuZC55KTtcblx0cmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBTYXZlIEZ1bmN0aW9uXG4gKi9cblxuY29uc3QgZG9HcmlkSGVscGVyU2F2ZSA9IChncmlkQ2xpZW50SWQsIHRhcmdldCwgY29vcmRzKSA9PiB7XG5cdGlmICh0YXJnZXQuY2xpZW50SWQpIHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7dXBkYXRlQmxvY2tBdHRyaWJ1dGVzfSA9IGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIFVwZGF0ZSB0aGUgcmVxdWVzdGVkIEdyaWQgQXJlYS5cblx0XHR1cGRhdGVCbG9ja0F0dHJpYnV0ZXModGFyZ2V0LmNsaWVudElkLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0cmVxdWVzdEVkaXQ6IGZhbHNlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRjb25zdCB7IGluc2VydEJsb2NrIH0gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBBZGRpbmcgYSBuZXcgR3JpZCBBcmVhLlxuXHRcdGNvbnN0IHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXIsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleFxuXHRcdH0gPSBnZXRCbG9ja3MoZ3JpZENsaWVudElkKS5yZWR1Y2UoXG5cdFx0XHQocmVzLCBjdXIsIGluZCkgPT4ge1xuXHRcdFx0XHRyZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlciA9IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgPj0gcmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyO1xuXHRcdFx0XHRyZXMubmV4dENoaWxkSW5kZXggPSBpbmQgKyAxO1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSwge1xuXHRcdFx0bmV4dENoaWxkU3RhY2tpbmdPcmRlcjogMCxcblx0XHRcdG5leHRDaGlsZEluZGV4OiAwXG5cdFx0fVxuXHRcdCk7XG5cdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgR3JpZCBBcmVhLlxuXHRcdGluc2VydEJsb2NrKGNyZWF0ZUJsb2NrKCdoMm1sL2dyaWQtYXJlYScsIHtcblx0XHRcdGdyaWRBcmVhOiBjb29yZHMsXG5cdFx0XHRzdGFja2luZ09yZGVyOiBuZXh0Q2hpbGRTdGFja2luZ09yZGVyXG5cdFx0fSksIG5leHRDaGlsZEluZGV4LCBncmlkQ2xpZW50SWQpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEpTWFxuICovXG5cbmV4cG9ydCBjb25zdCBHcmlkRWRpdG9yID0gKHByb3BzKSA9PiB7XG5cdC8vIFByb3BlcnRpZXMuXG5cdGNvbnN0IHtcblx0XHRncmlkQ2xpZW50SWQsXG5cdFx0Y29sQ291bnQsXG5cdFx0cm93Q291bnQsXG5cdFx0ZWRpdGluZ1xuXHR9ID0gcHJvcHM7XG5cdC8vIFN0YXRlIE1hbmFnZXJzLlxuXHRjb25zdCBbZ3JpZEhlbHBlcklzRHJhd2luZywgc2V0R3JpZEhlbHBlcklzRHJhd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ2FuU2F2ZSwgc2V0R3JpZEhlbHBlckNhblNhdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNvb3JkUmVzLCBzZXRHcmlkSGVscGVyQ29vcmRSZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cdC8vIFRoZSBKU1guXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaGVscGVyc1wiPlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIkNvbHVtblwiXG5cdFx0XHRsYWJsZUNvdW50PXtjb2xDb3VudH1cblx0XHQvPlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIlJvd1wiXG5cdFx0XHRsYWJsZUNvdW50PXtyb3dDb3VudH1cblx0XHQvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50ICogcm93Q291bnQpKS5tYXAoKF8sIGNlbGxJbmRleCkgPT4ge1xuXHRcdFx0Y2VsbEluZGV4Kys7XG5cdFx0XHRjb25zdCBjZWxsWCA9ICgoY2VsbEluZGV4IC0gMSkgJSBjb2xDb3VudCkgKyAxO1xuXHRcdFx0Y29uc3QgY2VsbFkgPSBNYXRoLmZsb29yKChjZWxsSW5kZXggLSAxKSAvIGNvbENvdW50KSArIDE7XG5cdFx0XHRyZXR1cm4gPEdyaWRIZWxwZXJDZWxsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0a2V5OiBgaGVscGVyLWNlbGwtJHtjZWxsSW5kZXh9YCxcblx0XHRcdFx0XHRjZWxsTGFiZWw6IGNlbGxJbmRleCxcblx0XHRcdFx0XHRjZWxsWCxcblx0XHRcdFx0XHRjZWxsWSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogKGVkaXRpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gRW5kIEdyaWQgQXJlYSBTZWxlY3Rpb24uXG5cdFx0XHRcdFx0XHRjb25zdCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSA9ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKHRydWUpO1xuXHRcdFx0XHRcdFx0XHQvLyBDbGVhbnVwIHRoaXMgRG9jdW1lbnQgZXZlbnQgbGlzdGVuZXIuXG5cdFx0XHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEpO1xuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IChncmlkSGVscGVySXNEcmF3aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBHcmlkIEFyZWEgU2VsZWN0aW9uLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKVxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHR9KX1cblx0XHR7ZWRpdGluZyAmJiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7ZWRpdGluZz8uY2xpZW50SWQgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWFkZGluZy1ncmlkLWFyZWFzLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz57X18oXCJDbGljayBhbmQgZHJhZ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBlZGl0IHRoZSBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGFkZCBhIG5ldyBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PEdyaWRIZWxwZXJBcHBlbmRlclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdFx0XHRzdHlsZT17Z3JpZEhlbHBlckNvb3JkUmVzID8ge1xuXHRcdFx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRIZWxwZXJDb29yZFJlcy5wYXJzZWQsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCdcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkfVxuXHRcdFx0XHQ+IHtncmlkSGVscGVyQ2FuU2F2ZSAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGV4dD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17dHJ1ZX1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHsgXG5cdFx0XHRcdFx0XHRcdC8vIFNhdmUgdGhlIG5ldyAvIHVwZGF0ZWQgR3JpZCBBcmVhLlxuXHRcdFx0XHRcdFx0XHRkb0dyaWRIZWxwZXJTYXZlKGdyaWRDbGllbnRJZCwgZWRpdGluZywgZ3JpZEhlbHBlckNvb3JkUmVzKTsgXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNhblNhdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMobnVsbCk7XG5cdFx0XHRcdFx0XHRcdC8vIFdlIHVzZSB1c2VFZmZlY3QgaW4gdGhlIG1haW4gY29tcG9uZW50IHRvIHJlc2V0IHRoZSBHcmlkcyAnZWRpdGluZycgYXR0cml1YnRlLCBzbyB3ZSBkb24ndFxuXHRcdFx0XHRcdFx0XHQvLyBuZWVkIHRvIHdvcnJ5IGFib3V0IGRvaW5nIGl0IGhlcmUsIHRoaXMgYWxsb3dzIHVzIHRvIG1vcmUgZWFzaWx5IGZvY3VzIG9uIHRoZSBjb3JyZWN0IGJsb2Nrcy5cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PjwvQnV0dG9uPlxuXHRcdFx0XHQpfSA8L0dyaWRIZWxwZXJBcHBlbmRlcj5cblx0XHRcdDwvPlxuXHRcdCl9XG5cdDwvZGl2PlxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcbiAgICBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3Ncbn0gZnJvbSAnLi91dGlscy5qcydcblxuLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuICAgIGF0dHJpYnV0ZXM6IHtcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH1cblx0fSxcbn0pIHtcbiAgICAvL1xuICAgIGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoMSwgY29sQ291bnQsIHJvd0NvdW50KSAvKiAxID09PSAnc2F2ZScgKi8sXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgY29sVGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi8sXG5cdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgcm93VGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi9cbiAgICAgICAgfVxuICAgIH0pfSk7XG5cdC8vXG4gICAgcmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdCk7XG59OyIsIi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc1NhZmVCYXNlNjQoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5idG9hKHN0cmluZykucmVwbGFjZSgvXFxXL2csICcnKTtcbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkQXJlYSh4LCB5KSB7XG4gICAgcmV0dXJuIGNzc1NhZmVCYXNlNjQoYCR7eX0vJHt4fWApO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcbiAgICAvL1xuICAgIGNvbnN0IHN0YXJ0ID0gY3NzU2FmZUJhc2U2NChgJHtzdGFydFl9LyR7c3RhcnRYfWApO1xuICAgIGNvbnN0IGVuZCA9IGNzc1NhZmVCYXNlNjQoYCR7ZW5kWX0vJHtlbmRYfWApO1xuICAgIHJldHVybiBgJHtzdGFydH0gLyAke3N0YXJ0fSAvICR7ZW5kfSAvICR7ZW5kfWA7XG59XG5cbi8vXG4vLyBHZW5lcmF0ZSB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcywgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zLCBhbmQgZ3JpZC10ZW1wbGF0ZS1yb3dzIENTUy5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKGNvbnRleHQsIGNvbENvdW50LCByb3dDb3VudCkge1xuICAgIGlmKGNvbnRleHQpIHtcbiAgICAgICAgLy8gU2F2ZVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcbiAgICAgICAgICAgIGAke3Jvd3NSZXN9XFxuXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGNvbHNSZXMsIF8sIGNvbHNJKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWA7XG4gICAgICAgICAgICB9LCAnJyl9XCJgXG4gICAgICAgICksICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFZGl0b3JcbiAgICAgICAgLy8gSW4gdGhlIGVkaXRvciBvbmx5LCB3ZSBhZGQgYW4gYWRkaXRpb25hbCBDb2x1bW4gLyBSb3cgdG8gdGhlIEdyaWQgVGVtbHBsYXRlIEFyZWFzLCBcbiAgICAgICAgLy8gdG8gYWNjb3VudCBmb3IgdGhlIGdyaWQgaGVscGVycy5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkocm93Q291bnQpKS5yZWR1Y2UoKHJvd3NSZXMsIF8sIHJvd3NJKSA9PiAoXG4gICAgICAgICAgICBgJHtyb3dzUmVzfVxcblwiJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChjb2xzUmVzLCBfLCBjb2xzSSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb2xzUmVzfSAke2dlbmVyYXRlR3JpZEFyZWEoKytjb2xzSSwgcm93c0kgKyAxKX1gO1xuICAgICAgICAgICAgfSwgJy4nKX1cImBcbiAgICAgICAgKSwgYFwiJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChlZGl0b3JSZXMsIF8sIGkpID0+IGAke2VkaXRvclJlc30gLmAsICcuJyl9XCJgKTtcbiAgICB9XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyhjb250ZXh0LCB0ZW1wbGF0ZXMpIHtcbiAgICBpZihjb250ZXh0KSB7XG4gICAgICAgIC8vIFNhdmVcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuICAgICAgICB9LCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRWRpdG9yXG4gICAgICAgIC8vIEluIHRoZSBlZGl0b3Igb25seSwgd2UgYWRkIGFuIGFkZGl0aW9uYWwgQ29sdW1uIC8gUm93IHRlbXBsYXRlIHRvIGFjY291bnQgZm9yIHRoZSBncmlkIGhlbHBlcnMuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZXMucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc30gJHtjdXJ9YDtcbiAgICAgICAgfSwgJ21pbi1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwiLi9zdHlsZS1pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2gybWxfZ3JpZGFyZWFcIl0gPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiLi9zdHlsZS1pbmRleFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIk5vdGljZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiUmFuZ2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJUb29sdGlwIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwidXNlQmxvY2tQcm9wcyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIl9fIiwiX24iLCJzcHJpbnRmIiwid2l0aERpc3BhdGNoIiwidXNlU2VsZWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVnaXN0ZXIiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzIiwiZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzIiwiR3JpZEVkaXRvciIsInJlZHVjZXIiLCJzdGF0ZSIsInNlbGVjdGVkIiwidmFsdWUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9ucyIsInNldFNlbGVjdGVkR3JpZEFyZWEiLCJzZWxlY3RvcnMiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwiR3JpZEVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJjb2xEZWZpbml0aW9ucyIsImNvdW50IiwiY29sQ291bnQiLCJ0ZW1wbGF0ZXMiLCJjb2xUZW1wbGF0ZXMiLCJyb3dEZWZpbml0aW9ucyIsInJvd0NvdW50Iiwicm93VGVtcGxhdGVzIiwiZWRpdGluZyIsInN0eWxlIiwic2V0QWxpZ25tZW50Iiwic2V0R3JpZE5vQ29sc09yUm93cyIsInNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93Iiwic2V0R3JpZEVkaXRpbmciLCJzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkIiwic2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkIiwiZ3JpZENoaWxkcmVuIiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUiLCJmb2N1c1RhcmdldCIsInNldEZvY3VzVGFyZ2V0IiwiY2hpbGRSZXF1ZXN0ZWRFZGl0IiwiZmluZCIsImNoaWxkIiwicmVxdWVzdEVkaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImluY2x1ZGVzIiwibmV3R3JpZEFyZWFUZXh0IiwiY2hpbGRyZW4iLCJpbm5lckJsb2Nrc1Byb3BzIiwiZ3JpZFRlbXBsYXRlQXJlYXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsIm9uS2V5UHJlc3MiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwiZWRpdEtleXMiLCJleGl0S2V5cyIsImFsbG93ZWRCbG9ja3MiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiR3JpZEVkaXRXcmFwcGVyIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInJlZ2lzdHJ5Iiwic2V0QXR0cmlidXRlcyIsIm9wdGlvbnMiLCJvdGhlciIsImRlZmluaXRpb25zIiwiY291bnREZWx0YSIsInVuaXQiLCJzcGxpY2UiLCJsZW5ndGgiLCJmcm9tIiwiaW5kZXgiLCJ0ZW1wbGF0ZSIsImdldEJsb2NrIiwicGFyZW50cyIsIm5hbWUiLCJzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXIiLCJyZWR1Y2UiLCJyZXMiLCJwYXJlbnRJZCIsInNlbGYiLCJwYXJlbnRCbG9jayIsInB1c2giLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiY3VyIiwic3RhY2tpbmdPcmRlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImljb24iLCJtZXRhZGF0YSIsIlNhdmUiLCJlZGl0Iiwic2F2ZSIsIkNvbHNSb3dIZWxwZXJJbm5lciIsIkdyaWRIZWxwZXJMYWJlbCIsImxhYmxlVHlwZSIsImxhYmxlQ291bnQiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImxhYmxlSW5kZXgiLCJHcmlkSGVscGVyQ2VsbCIsImNlbGxMYWJlbCIsImNlbGxYIiwiY2VsbFkiLCJvbk1vdXNlRG93biIsIm9uTW91c2VFbnRlciIsImdyaWRBcmVhIiwiR3JpZEhlbHBlckFwcGVuZGVyIiwiYXJlYSIsImNyZWF0ZUJsb2NrIiwiZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIiwiZG9HcmlkSGVscGVyU2VsZWN0aW9uIiwiY29vcmRzIiwic3RhcnRYIiwieCIsIk51bWJlciIsInN0YXJ0WSIsInkiLCJlbmRYIiwiZW5kWSIsInN0YXJ0IiwiTWF0aCIsIm1pbiIsImVuZCIsIm1heCIsInBhcnNlZCIsImRvR3JpZEhlbHBlclNhdmUiLCJncmlkQ2xpZW50SWQiLCJ0YXJnZXQiLCJ1cGRhdGVCbG9ja0F0dHJpYnV0ZXMiLCJpbnNlcnRCbG9jayIsIm5leHRDaGlsZFN0YWNraW5nT3JkZXIiLCJuZXh0Q2hpbGRJbmRleCIsImluZCIsImdyaWRIZWxwZXJJc0RyYXdpbmciLCJzZXRHcmlkSGVscGVySXNEcmF3aW5nIiwiZ3JpZEhlbHBlckNhblNhdmUiLCJzZXRHcmlkSGVscGVyQ2FuU2F2ZSIsImdyaWRIZWxwZXJDb29yZFJlcyIsInNldEdyaWRIZWxwZXJDb29yZFJlcyIsImNlbGxJbmRleCIsImZsb29yIiwiZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuZGVmaW5lZCIsImRpc3BsYXkiLCJjc3NTYWZlQmFzZTY0Iiwic3RyaW5nIiwid2luZG93IiwiYnRvYSIsInJlcGxhY2UiLCJnZW5lcmF0ZUdyaWRBcmVhIiwiY29udGV4dCIsInJvd3NSZXMiLCJyb3dzSSIsImNvbHNSZXMiLCJjb2xzSSIsImVkaXRvclJlcyJdLCJzb3VyY2VSb290IjoiIn0=