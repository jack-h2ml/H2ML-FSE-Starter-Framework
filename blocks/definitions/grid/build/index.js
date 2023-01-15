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
      editing
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
  //
  // Get InhtmlFormation about the current Block, and its children. 
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid","version":"0.1.0","title":"Grid","category":"design","description":"Display content in a Grid, across multiple Grid Area\'s, with blocks added to each Grid Area.","textdomain":"h2ml","keywords":["h2ml","grid"],"attributes":{"verticalAlignment":{"type":"string"},"colDefinitions":{"type":"object","default":{"count":3,"templates":["1fr","1fr","1fr"]}},"rowDefinitions":{"type":"object","default":{"count":4,"templates":["max-content","max-content","max-content","max-content"]}}},"supports":{"anchor":true,"align":["wide","full"],"reusable":true,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":false,"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2dyaWQuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3IvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3NhdmUuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvZWRpdG9yLnNjc3M/MjZkZiIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcz9hZDJlIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdG9yLnNjc3M/ZDRhZSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3N0eWxlLnNjc3M/NTYxMiIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBncmlkID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNy44IDE2LjVINWMtLjMgMC0uNS0uMi0uNS0uNXYtNi4yaDYuOHY2Ljd6bTAtOC4zSDQuNVY1YzAtLjMuMi0uNS41LS41aDYuMnY2Ljd6bTguMyA3LjhjMCAuMy0uMi41LS41LjVoLTYuMnYtNi44aDYuOFYxOXptMC03LjhoLTYuOFY0LjVIMTljLjMgMCAuNS4yLjUuNXY2LjJ6XCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JpZC5qcy5tYXAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Tm90aWNlLFxuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdFRvb2x0aXBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHR3aXRoRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgXG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgXG5cdGNyZWF0ZVJlZHV4U3RvcmUsIFxuXHRyZWdpc3RlclxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7XG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMsXG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyxcbn0gZnJvbSAnLi91dGlscy5qcydcblxuaW1wb3J0IHsgR3JpZEVkaXRvciB9IGZyb20gJy4vbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yJ1xuXG4vKlxuKiBSZWR1eCBzdG9yZSBodG1sRm9yIGhvbGRpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBoMm1sL2dyaWQtYXJlYSwgXG4qIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBoMm1sL2dyaWQtYXJlYSBpcyB2aXN1YWxseSBvbiB0b3AgaW4gdGhlIGVkaXRvci5cbiovXG5cbnJlZ2lzdGVyKGNyZWF0ZVJlZHV4U3RvcmUoXCJoMm1sL2dyaWRfYXJlYV9zdG9yZVwiLCB7XG5cdHJlZHVjZXIoc3RhdGUgPSB7XG5cdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdHZhbHVlOiBudWxsXG5cdFx0fSxcblx0fSwgYWN0aW9uKSB7XG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0Y2FzZSBcIlVQREFURV9TRUxFQ1RFRF9HUklEX0FSRUFcIjoge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdFx0XHQuLi5zdGF0ZS5zZWxlY3RlZCxcblx0XHRcdFx0XHRcdHZhbHVlOiBhY3Rpb24udmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0YWN0aW9uczoge1xuXHRcdHNldFNlbGVjdGVkR3JpZEFyZWEodmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiLFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdG9yczoge1xuXHRcdGdldFNlbGVjdGVkR3JpZEFyZWEoc3RhdGUpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5zZWxlY3RlZC52YWx1ZTtcblx0XHR9XG5cdH1cbn0pKTtcblxuLyoqXG4gKiBUaGUgQ29kZS5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdCA9ICh7XG5cdC8vIEF0dHJpYnV0ZXMuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH0sXG5cdFx0ZWRpdGluZ1xuXHR9LFxuXHQvLyBBdHRyaWJ1dGUgU2V0dGVycy5cblx0c2V0QWxpZ25tZW50LFxuXHRzZXRHcmlkTm9Db2xzT3JSb3dzLFxuXHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyxcblx0c2V0R3JpZEVkaXRpbmcsXG5cdC8vIFJlZHV4IFNldHRlcnMuXG5cdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZFxufSkgPT4ge1xuXG5cdC8vXG5cdC8vIEdldCBJbmh0bWxGb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgQmxvY2ssIGFuZCBpdHMgY2hpbGRyZW4uIFxuXHQvLyAoVXNlZCBodG1sRm9yIHNldHRpbmcgdGhlIGVkaXRvciBzdGFja2luZyBvcmRlciwgYW5kIGFkZGluZyAvIGVkaXRpbmcgR3JpZC1BcmVhJ3MpXG5cdC8vXG5cblx0Y29uc3QgeyBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCwgZ3JpZENoaWxkcmVuIH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQsIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gVmFyaWFibGVzLlxuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCA9IGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCA9IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCA/IGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgWydoMm1sL2dyaWQnXSwgdHJ1ZSlbMF0gOiBmYWxzZTtcblx0XHRjb25zdCBncmlkQ2hpbGRyZW4gPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdC8vIFJldHVybiBWYWx1ZXMuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCxcblx0XHRcdHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCxcblx0XHRcdGdyaWRDaGlsZHJlblxuXHRcdH07XG5cdH0sIFtdKTtcblxuXHQvL1xuXHQvLyBIYW5kbGUgdXBkYXRpbmcgdGhlIHN0YWNraW5nIG9yZGVyIGh0bWxGb3IgYW55IGN1cnJlbnRseSBzZWxlY3RlZCBHcmlkIEFyZWEncyB3aXRoaW4gdGhlIGVkaXRvci5cblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpO1xuXHR9LCBbc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkXSk7XG5cblx0Ly9cblx0Ly8gZm9jdXNUYXJnZXQgc3RhdGUsIHRoaXMgaXMgdXNlZCB0byBlbnN1cmUgd2UgYXV0by1mb2N1cyBvbiB0aGUgY29ycmVjdCBHcmlkIEFyZWEgd2hlbiBtYWtpbmcgY2hhbmdlcyB0byB0aGUgR3JpZC5cblx0Ly9cblxuXHRjb25zdCBbZm9jdXNUYXJnZXQsIHNldEZvY3VzVGFyZ2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdC8vIFxuXHQvLyBJZiBlaXRoZXIgb2YgdGhlIEdyaWQncyB0b3RhbCBudW1iZXIgb2YgY2hpbGRyZW4gY2hhbmdlcyAoYWRkaW5nKSwgb3IgaWYgdGhlICdyZXF1ZXN0RWRpdCcgYXR0cmlidXRlIG9mIG9uZSBvZiB0aGUgR3JpZCdzIFxuXHQvLyBjaGFuZ2VzICh1cGRhdGluZykgdGhlbiBkbyB0aGUgZm9sbG93aW5nOiBcblx0Ly8gXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBhbHJlYWR5IHNldCB0aGVuIHdlIGhhdmUganVzdCBmaW5pc2hlZCBlZGl0aW5nLCBhbmQgd2Ugc2hvdWxkIGRldGVybWluZSBpZiB3ZSBuZWVkIFxuXHQvLyB0byBmb2N1cyBvbiBhbiB1cGRhdGVkIEdyaWQgQXJlYS4gSW4gZWl0aGVyIGNhc2UgcmVzZXQgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIHRvIGZhbHNlLlxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgaXMgTk9UIHNldCB0aGVuIGRldGVybWluZSBpZiBhbnkgb2YgdGhlIEdyaWQncyBHcmlkLUFyZWEncyBhcmUgcmVxdWVzdGluZyBhbiBlZGl0LiBcblx0Ly8gSWYgc28sIGNhbGwgc2V0R3JpZEVkaXRpbmcuXG5cdC8vXG5cdC8vIFRoaXMgZG9lcyBub3QgaGFuZGxlIGFkZGluZyBhIG5ldyBncmlkIGFyZWEsIHRoYXQgaXMgZG9uZSBieSB0aGUgR3JpZCBpdHNlbGYgdGhyb3VnaCB0aGUgb25LZXlQcmVzcyBldmVudCwgb3IgaXQgaXMgXG5cdC8vIGRvbmUgYnkgdGhlIGdyaWRFZGl0b3IsIHVzaW5nIHRoZSBCbG9ja0FwcGVuZGVyIGJ1dHRvbi4gXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZihlZGl0aW5nKSB7XG5cdFx0XHQvLyBTZXQgdGhlIGZvY3VzVGFyZ2V0IGlmIG5lZWRlZC4gXG5cdFx0XHRpZihlZGl0aW5nLmNsaWVudElkKSBzZXRGb2N1c1RhcmdldChlZGl0aW5nKTtcblx0XHRcdC8vIFJlc2V0IHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZS4gXG5cdFx0XHRzZXRHcmlkRWRpdGluZyhmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERldGVybWluZSBpZiBhIEdyaWQgQXJlYSBpcyByZXF1ZXN0aW5nIHRvIGJlIHVwZGF0ZWQuIFxuXHRcdFx0Y29uc3QgY2hpbGRSZXF1ZXN0ZWRFZGl0ID0gZ3JpZENoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQuYXR0cmlidXRlcy5yZXF1ZXN0RWRpdCk7XG5cdFx0XHRpZihjaGlsZFJlcXVlc3RlZEVkaXQpIHtcblx0XHRcdFx0Ly8gUmUtZm9jdXMgb24gdGhlIEdyaWQsIGFzIGZvY3VzIHdpbGwgaGF2ZSBiZWVuIGNhcHR1cmVkIGJ5IHRoZSBHcmlkIEFyZWEuXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJsb2NrPVwiJHtjbGllbnRJZH1cIl1gKS5mb2N1cygpO1xuXHRcdFx0XHRzZXRHcmlkRWRpdGluZyhjaGlsZFJlcXVlc3RlZEVkaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgW2dyaWRDaGlsZHJlbiwgZ3JpZENoaWxkcmVuLmluY2x1ZGVzKGNoaWxkID0+IGNoaWxkLmF0dHJpYnV0ZXMucmVxdWVzdEVkaXQpXSk7XG5cblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGNoYW5nZXMgdG8gZmFsc2UsIGFuZCBhIGZvY3VzVGFyZ2V0IGlzIHNldCwgdGhlbiAuZm9jdXMoKSBvbiB0aGUgZm9jdXNUYXJnZXQncyBET00gZWxlbWVudCxcblx0Ly8gdGhlbiByZXNldCB0aGUgZm9jdXNUYXJnZXQgdG8gbnVsbC5cblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKCFlZGl0aW5nICYmIGZvY3VzVGFyZ2V0KSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Zm9jdXNUYXJnZXQuY2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHRzZXRGb2N1c1RhcmdldChudWxsKVxuXHR9LCBbZWRpdGluZ10pO1xuXG5cdC8vXG5cdC8vIFJlZ2lzdGVyIHRoZSBCbG9jayAvIElubmVyQmxvY2sgUHJvcHMuXG5cdC8vXG5cblx0Y29uc3QgbmV3R3JpZEFyZWFUZXh0ID0gX18oJ0FkZCBuZXcgR3JpZCBBcmVhJywgJ2gybWwnKTtcblx0Y29uc3QgeyBjaGlsZHJlbiwgLi4uaW5uZXJCbG9ja3NQcm9wcyB9ID0gdXNlSW5uZXJCbG9ja3NQcm9wcyhcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUFyZWFzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKDAsIGNvbENvdW50LCByb3dDb3VudCkgLyogMCA9PT0gJ2VkaXRvcicgKi8sXG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygwLCBjb2xUZW1wbGF0ZXMpIC8qIDAgPT09ICdlZGl0b3InICovLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMCwgcm93VGVtcGxhdGVzKSAvKiAwID09PSAnZWRpdG9yJyAqL1xuXHRcdFx0fSxcblx0XHRcdG9uS2V5UHJlc3M6IChlKSA9PiB7XG5cdFx0XHRcdGlmKGNsaWVudElkID09PSBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQpIHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdC8vIFZhcmlhYmxlcy5cblx0XHRcdFx0XHRjb25zdCB7IGtleSB9ID0gZTtcblx0XHRcdFx0XHRjb25zdCBlZGl0S2V5cyA9IFsnYScsICdBJ107XG5cdFx0XHRcdFx0Y29uc3QgZXhpdEtleXMgPSBbJ2MnLCAnQyddO1xuXHRcdFx0XHRcdC8vIEJpbmQga2V5cyB0byBhdHRyaWJ1dGUgc2V0dGVycy5cblx0XHRcdFx0XHRpZiAoZWRpdEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZWRpdGluZykgc2V0R3JpZEVkaXRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZXhpdEtleXMuaW5jbHVkZXMoa2V5KSkge1xuXHRcdFx0XHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSksIHtcblx0XHRcdGFsbG93ZWRCbG9ja3M6IFsnaDJtbC9ncmlkLWFyZWEnXSxcblx0XHR9XG5cdCk7XG5cblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldEFsaWdubWVudH1cblx0XHRcdFx0XHR2YWx1ZT17dmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBDb2x1bW5zYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sQ291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMCwgdmFsdWUpfSAvLyAwID09PSAnY29sJ1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBSb3dzYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cm93Q291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMSwgdmFsdWUpfSAvLyAxID09PSAncm93J1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoY29sQ291bnQgKiByb3dDb3VudCkgPiA0OSAmJlxuXHRcdFx0XHRcdFx0XHRcdCg8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBpc0Rpc21pc3NpYmxlPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUaGUgbnVtYmVyIG9mIGNlbGxzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcmVjb21tZW5kZWQgbGltaXQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2gybWwnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPilcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBDb2x1bW5zIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0e1suLi5BcnJheShjb2xDb3VudCldLm1hcCgoXywgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgY29sLXNldHRpbmdzLSR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3NwcmludGYoX18oXCJDb2x1bW4gJTEkZCBXaWR0aFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sVGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDAsIGksIHZhbHVlIC8qIDAgPT09ICdjb2wnICovKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgUm93cyBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkocm93Q291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHJvdy1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiUm93ICUxJGQgSGVpZ2h0XCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMSwgaSwgdmFsdWUpIC8qIDAgPT09ICdyb3cnICovfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30+XG5cdFx0XHRcdDxHcmlkRWRpdG9yXG5cdFx0XHRcdFx0Z3JpZENsaWVudElkPXtjbGllbnRJZH1cblx0XHRcdFx0XHRjb2xDb3VudD17Y29sQ291bnR9XG5cdFx0XHRcdFx0cm93Q291bnQ9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdGVkaXRpbmc9e2VkaXRpbmd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWFzXCI+XG5cdFx0XHRcdFx0eyEoZWRpdGluZykgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtuZXdHcmlkQXJlYVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkTmV3R3JpZEFyZWFcIj57bmV3R3JpZEFyZWFUZXh0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRHcmlkRWRpdGluZyh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBkPVwiTTE4IDExLjJoLTUuMlY2aC0xLjZ2NS4ySDZ2MS42aDUuMlYxOGgxLjZ2LTUuMkgxOHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9ucy5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRoZSBHcmlkIEFyZWEncyBXUCBhbGlnbm1lbnQgKFdpZGUsIEZ1bGwgZXRjKS5cblx0XHQvL1xuXHRcdHNldEFsaWdubWVudCh2ZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB2ZXJ0aWNhbEFsaWdubWVudCB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIG51bWJlciBvZiBjb2x1bW5zIC8gcm93cywgY2xlYW4gdXAgdGhlIHJlbGV2YW50IHRlbXBsYXRlcywgYW5kIGZpbmFsbHkgc2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgR3JpZCBBcmVhJ3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkTm9Db2xzT3JSb3dzKHR5cGUsIGNvdW50KSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHNldHRpbmcgQ29sdW1ucyBvciBSb3dzLCBhbmQgYWxzbyBnZXQgdGhlIG9wcG9zaXRlLlxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0Y29uc3Qgb3RoZXIgPSBvcHRpb25zW3R5cGUgXiAxXTtcblx0XHRcdHR5cGUgPSBvcHRpb25zW3R5cGVdO1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXhpc3RpbmcgQ29sdW1uIC8gUm93IGRlZmluaXRpb24uXG5cdFx0XHRjb25zdCBkZWZpbml0aW9ucyA9IHsgLi4uYXR0cmlidXRlc1tgJHt0eXBlfURlZmluaXRpb25zYF0gfTtcblx0XHRcdGNvbnN0IGNvdW50RGVsdGEgPSBjb3VudCAtIGRlZmluaXRpb25zLmNvdW50O1xuXHRcdFx0Ly8gQ2xlYW4gdXAgQ29sdW1uIC8gUm93IHRlbXBsYXRlcy5cblx0XHRcdGNvbnN0IHVuaXQgPSB0eXBlID09PSAnY29sJyA/ICcxZnInIDogJ21heC1jb250ZW50Jztcblx0XHRcdGRlZmluaXRpb25zLnRlbXBsYXRlcy5zcGxpY2UoLi4uY291bnREZWx0YSA+IDAgP1xuXHRcdFx0XHRbZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCwgMCwgLi4uQXJyYXkuZnJvbShBcnJheShjb3VudERlbHRhKSkubWFwKF8gPT4gdW5pdCldIDogLy8gQWRkaW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHRcdFtjb3VudCwgZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCAtIDFdIC8vIFJlbW92aW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHQpO1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBkZWZpbml0aW9uJ3MgY291bnQgdmFsdWUgYW5kIHRoZW4gc2V0IHRoZSBhdHRyYnV0ZS4gXG5cdFx0XHRkZWZpbml0aW9ucy5jb3VudCA9IGNvdW50O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGVtcGxhdGVzIGh0bWxGb3Igc3BlY2lmaWMgQ29sdW1ucyAvIFJvd3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyh0eXBlLCBpbmRleCwgdGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgZ2VuZXJhdGluZyBhIENvbHVtbnMgb3IgUm93cyB0ZW1wbGF0ZVxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBnaXZlbiBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgYW5kIHNldCB0aGUgYXR0cmlidXRlLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzW2luZGV4XSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiB1bml0O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgJ2VkaXRpbmcnIGF0dHJpYnV0ZVxuXHRcdC8vXG5cdFx0c2V0R3JpZEVkaXRpbmcodmFsdWUpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZWRpdGluZzogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFdoZW4gYSBHcmlkLUFyZWEgb3IgYW55IG9mIGl0J3MgY2hpbGRyZW4gYXJlIHNlbGN0ZWQsIHZpc3VhbGx5IG1vdmUgdGhhdCBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIFxuXHRcdC8vIHN0YWNraW5nIGNvbnRleHQuICh0aGlzIGlzIG5vdCBzYXZlZCBhcyBhbiBhdHRyaWJ1dGUsIGFuZCBpcyBwdXJlbHkgaHRtbEZvciBjb252ZW5pZW5jZSBpbiB0aGUgZWRpdG9yKS5cblx0XHQvL1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdGNvbnN0IHsgY2xpZW50SWQgfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgeyBzZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBkaXNwYXRjaCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHRcdGlmIChzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPT09IGNsaWVudElkKSB7XG5cdFx0XHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lLCBnZXRCbG9ja3MgfSA9IHJlZ2lzdHJ5LnNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcGFyZW50cyA9IGdldEJsb2NrKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCkubmFtZSAhPT0gJ2gybWwvZ3JpZC1hcmVhJyA/XG5cdFx0XHRcdFx0Z2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKSA6XG5cdFx0XHRcdFx0W3NlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgLi4uZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKV07XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlciA9IHBhcmVudHMucmVkdWNlKChyZXMsIHBhcmVudElkLCBpLCBzZWxmKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudEJsb2NrID0gZ2V0QmxvY2socGFyZW50SWQpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRCbG9jay5uYW1lID09PSAnaDJtbC9ncmlkLWFyZWEnKSB7XG5cdFx0XHRcdFx0XHRyZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGNsaWVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRcdFx0ZWRpdG9yU3RhY2tpbmdPcmRlcjogZ2V0QmxvY2tzKHNlbGZbKytpXSkucmVkdWNlKChyZXMsIGN1cikgPT4gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcywgMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEoe1xuXHRcdFx0XHRcdGNsaWVudElkOiBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsXG5cdFx0XHRcdFx0cGFyZW50czogc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICghc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKShHcmlkRWRpdCk7XG5cbi8qXG4gKiBFeHBvcnQgdGhlIEJsb2NrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkRWRpdFdyYXBwZXIgey4uLnByb3BzfSAvPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IGdyaWQgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHQvL1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlLFxufSk7XG5cbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IENvbHNSb3dIZWxwZXJJbm5lciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0aW5kZXhcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPHNwYW4+e2luZGV4fTwvc3Bhbj5cbn07XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyTGFiZWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGxhYmxlVHlwZSxcblx0XHRsYWJsZUNvdW50XG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLXJvd3MtaGVscGVyLXdyYXBgfT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdyaWQtJHtsYWJsZVR5cGUuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCl9cy1oZWxwZXJgfSAvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGxhYmxlQ291bnQpKS5tYXAoKF8sIGxhYmxlSW5kZXgpID0+IChcblx0XHRcdDxkaXZcblx0XHRcdFx0a2V5PXtgJHtsYWJsZVR5cGV9LWxhYmxlLWNlbGwtJHtsYWJsZUluZGV4fWB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtY29scy1yb3dzLWhlbHBlclwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0W2BncmlkJHtsYWJsZVR5cGV9U3RhcnRgXTogKytsYWJsZUluZGV4ICsgMSxcblx0XHRcdFx0XHRbYGdyaWQke2xhYmxlVHlwZSA9PT0gJ0NvbHVtbicgPyAnUm93JyA6ICdDb2x1bW4nfVN0YXJ0YF06IDEsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUb29sdGlwIHRleHQ9e3NwcmludGYoX18oJyUyJHMgJTEkZCcsICdoMm1sJyksIGxhYmxlSW5kZXgsIGxhYmxlVHlwZSl9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFibGVJbmRleH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdDwvZGl2PlxuXHRcdCkpfVxuXHQ8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJDZWxsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjZWxsTGFiZWwsXG5cdFx0Y2VsbFgsXG5cdFx0Y2VsbFksXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZUVudGVyLFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1hcmVhLWhlbHBlclwiXG5cdFx0ey4uLnsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciB9fVxuXHRcdGRhdGEteGNvb3Jkcz17Y2VsbFh9XG5cdFx0ZGF0YS15Y29vcmRzPXtjZWxsWX1cblx0XHRzdHlsZT17e1xuXHRcdFx0Z3JpZEFyZWE6IGAke2NlbGxZICsgMX0gLyAke2NlbGxYICsgMX0gLyAke2NlbGxZICsgMn0gLyAke2NlbGxYICsgMn1gXG5cdFx0fX1cblx0PlxuXHRcdHtgJHtjZWxsTGFiZWx9YH0gPHN1Yj57YCgke2NlbGxYfSwgJHtjZWxsWX0pYH08L3N1Yj5cblx0PC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyQXBwZW5kZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHN0eWxlLFxuXHRcdGNoaWxkcmVuXG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYS1hcHBlbmRlclwiXG5cdFx0XHRhcmVhPXtwcm9wcy5hcmVhID8gcHJvcHMuYXJlYSA6IG51bGx9XG5cdFx0XHR7Li4ueyBzdHlsZSB9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHRzZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHsgY3JlYXRlQmxvY2sgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRHcmlkSGVscGVyTGFiZWwsXG5cdEdyaWRIZWxwZXJDZWxsLFxuXHRHcmlkSGVscGVyQXBwZW5kZXJcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQgfSBmcm9tICcuLi8uLi91dGlscy5qcydcblxuLyoqXG4qIEV2ZW50IGNhbGxiYWNrIEZ1bmN0aW9uIGZvciBzdGFydGluZyAvIHVwZGF0aW5nIHRoZSBzZWxlY3Rpbmcgb2YgYSBHcmlkLUFyZWEgQXJlYVxuKi9cblxuY29uc3QgZG9HcmlkSGVscGVyU2VsZWN0aW9uID0gKGUsIGNvb3JkcywgcmVzKSA9PiB7XG5cdC8vIFJlc2V0IHRoZSBncmlkIGFyZWEgY29vcmRzIG9uIG1vdXNlZG93bi5cblx0aWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicpIHJlcyA9IG51bGw7XG5cdC8vIERldGVybWluZSBpZiB3ZSdyZSB1cGRhdGluZyBhbiBleGlzdGluZyBzZWxlY3Rpb24gKGRyYWdnaW5nKSwgb3Igc3RhcnRpbmcgYSBuZXcgb25lIChjbGlja2luZykuXG5cdGNvbnN0IHN0YXJ0WCA9IHJlcz8uc3RvcmU/LnggPyByZXM/LnN0b3JlPy54IDogTnVtYmVyKGNvb3Jkcy5jZWxsWCk7XG5cdGNvbnN0IHN0YXJ0WSA9IHJlcz8uc3RvcmU/LnkgPyByZXM/LnN0b3JlPy55IDogTnVtYmVyKGNvb3Jkcy5jZWxsWSk7XG5cdGNvbnN0IGVuZFggPSBOdW1iZXIoY29vcmRzLmNlbGxYKTtcblx0Y29uc3QgZW5kWSA9IE51bWJlcihjb29yZHMuY2VsbFkpO1xuXHQvLyBDYWxjdWxhdGUgYW5kIHN0b3JlIHRoZSBuZXcgQ29vcmRzIHZhbHVlcy5cblx0cmVzID0ge1xuXHRcdHN0b3JlOiB7XG5cdFx0XHR4OiBzdGFydFgsXG5cdFx0XHR5OiBzdGFydFksXG5cdFx0fSxcblx0XHRzdGFydDoge1xuXHRcdFx0eDogTWF0aC5taW4oc3RhcnRYLCBlbmRYKSxcblx0XHRcdHk6IE1hdGgubWluKHN0YXJ0WSwgZW5kWSlcblx0XHR9LFxuXHRcdGVuZDoge1xuXHRcdFx0eDogTWF0aC5tYXgoc3RhcnRYLCBlbmRYKSxcblx0XHRcdHk6IE1hdGgubWF4KHN0YXJ0WSwgZW5kWSksXG5cdFx0fVxuXHR9O1xuXHRyZXMucGFyc2VkID0gZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kKHJlcy5zdGFydC54LCByZXMuc3RhcnQueSwgcmVzLmVuZC54LCByZXMuZW5kLnkpO1xuXHRyZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIFNhdmUgRnVuY3Rpb25cbiAqL1xuXG5jb25zdCBkb0dyaWRIZWxwZXJTYXZlID0gKGdyaWRDbGllbnRJZCwgdGFyZ2V0LCBjb29yZHMpID0+IHtcblx0aWYgKHRhcmdldC5jbGllbnRJZCkge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHt1cGRhdGVCbG9ja0F0dHJpYnV0ZXN9ID0gZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gVXBkYXRlIHRoZSByZXF1ZXN0ZWQgR3JpZCBBcmVhLlxuXHRcdHVwZGF0ZUJsb2NrQXR0cmlidXRlcyh0YXJnZXQuY2xpZW50SWQsIHtcblx0XHRcdGdyaWRBcmVhOiBjb29yZHMsXG5cdFx0XHRyZXF1ZXN0RWRpdDogZmFsc2Vcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7IGdldEJsb2NrcyB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdGNvbnN0IHsgaW5zZXJ0QmxvY2sgfSA9IGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIEFkZGluZyBhIG5ldyBHcmlkIEFyZWEuXG5cdFx0Y29uc3Qge1xuXHRcdFx0bmV4dENoaWxkU3RhY2tpbmdPcmRlcixcblx0XHRcdG5leHRDaGlsZEluZGV4XG5cdFx0fSA9IGdldEJsb2NrcyhncmlkQ2xpZW50SWQpLnJlZHVjZShcblx0XHRcdChyZXMsIGN1ciwgaW5kKSA9PiB7XG5cdFx0XHRcdHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyID0gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlciA/IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgKyAxIDogcmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXI7XG5cdFx0XHRcdHJlcy5uZXh0Q2hpbGRJbmRleCA9IGluZCArIDE7XG5cdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHR9LCB7XG5cdFx0XHRuZXh0Q2hpbGRTdGFja2luZ09yZGVyOiAwLFxuXHRcdFx0bmV4dENoaWxkSW5kZXg6IDBcblx0XHR9XG5cdFx0KTtcblx0XHQvLyBJbnNlcnQgdGhlIG5ldyBHcmlkIEFyZWEuXG5cdFx0aW5zZXJ0QmxvY2soY3JlYXRlQmxvY2soJ2gybWwvZ3JpZC1hcmVhJywge1xuXHRcdFx0Z3JpZEFyZWE6IGNvb3Jkcyxcblx0XHRcdHN0YWNraW5nT3JkZXI6IG5leHRDaGlsZFN0YWNraW5nT3JkZXJcblx0XHR9KSwgbmV4dENoaWxkSW5kZXgsIGdyaWRDbGllbnRJZCk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgSlNYXG4gKi9cblxuZXhwb3J0IGNvbnN0IEdyaWRFZGl0b3IgPSAocHJvcHMpID0+IHtcblx0Ly8gUHJvcGVydGllcy5cblx0Y29uc3Qge1xuXHRcdGdyaWRDbGllbnRJZCxcblx0XHRjb2xDb3VudCxcblx0XHRyb3dDb3VudCxcblx0XHRlZGl0aW5nXG5cdH0gPSBwcm9wcztcblx0Ly8gU3RhdGUgTWFuYWdlcnMuXG5cdGNvbnN0IFtncmlkSGVscGVySXNEcmF3aW5nLCBzZXRHcmlkSGVscGVySXNEcmF3aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2dyaWRIZWxwZXJDYW5TYXZlLCBzZXRHcmlkSGVscGVyQ2FuU2F2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ29vcmRSZXMsIHNldEdyaWRIZWxwZXJDb29yZFJlc10gPSB1c2VTdGF0ZShudWxsKTtcblx0Ly8gVGhlIEpTWC5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1oZWxwZXJzXCI+XG5cdFx0PEdyaWRIZWxwZXJMYWJlbFxuXHRcdFx0bGFibGVUeXBlPVwiQ29sdW1uXCJcblx0XHRcdGxhYmxlQ291bnQ9e2NvbENvdW50fVxuXHRcdC8+XG5cdFx0PEdyaWRIZWxwZXJMYWJlbFxuXHRcdFx0bGFibGVUeXBlPVwiUm93XCJcblx0XHRcdGxhYmxlQ291bnQ9e3Jvd0NvdW50fVxuXHRcdC8+XG5cdFx0e0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQgKiByb3dDb3VudCkpLm1hcCgoXywgY2VsbEluZGV4KSA9PiB7XG5cdFx0XHRjZWxsSW5kZXgrKztcblx0XHRcdGNvbnN0IGNlbGxYID0gKChjZWxsSW5kZXggLSAxKSAlIGNvbENvdW50KSArIDE7XG5cdFx0XHRjb25zdCBjZWxsWSA9IE1hdGguZmxvb3IoKGNlbGxJbmRleCAtIDEpIC8gY29sQ291bnQpICsgMTtcblx0XHRcdHJldHVybiA8R3JpZEhlbHBlckNlbGxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRrZXk6IGBoZWxwZXItY2VsbC0ke2NlbGxJbmRleH1gLFxuXHRcdFx0XHRcdGNlbGxMYWJlbDogY2VsbEluZGV4LFxuXHRcdFx0XHRcdGNlbGxYLFxuXHRcdFx0XHRcdGNlbGxZLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiAoZWRpdGluZyA/IChlKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBFbmQgR3JpZCBBcmVhIFNlbGVjdGlvbi5cblx0XHRcdFx0XHRcdGNvbnN0IGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNhblNhdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdC8vIENsZWFudXAgdGhpcyBEb2N1bWVudCBldmVudCBsaXN0ZW5lci5cblx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0XHRcdFx0XHQvLyBSZXNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMoZG9HcmlkSGVscGVyU2VsZWN0aW9uKGUsIHsgY2VsbFgsIGNlbGxZIH0sIGdyaWRIZWxwZXJDb29yZFJlcykpO1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWQpLFxuXHRcdFx0XHRcdG9uTW91c2VFbnRlcjogKGdyaWRIZWxwZXJJc0RyYXdpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIEdyaWQgQXJlYSBTZWxlY3Rpb24uXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMoZG9HcmlkSGVscGVyU2VsZWN0aW9uKGUsIHsgY2VsbFgsIGNlbGxZIH0sIGdyaWRIZWxwZXJDb29yZFJlcykpO1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWQpXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdH0pfVxuXHRcdHtlZGl0aW5nICYmIChcblx0XHRcdDw+XG5cdFx0XHRcdHtlZGl0aW5nPy5jbGllbnRJZCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGVkaXQgdGhlIEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1hZGRpbmctZ3JpZC1hcmVhcy1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+e19fKFwiQ2xpY2sgYW5kIGRyYWdcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gYWRkIGEgbmV3IEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8R3JpZEhlbHBlckFwcGVuZGVyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0XHRcdHN0eWxlPXtncmlkSGVscGVyQ29vcmRSZXMgPyB7XG5cdFx0XHRcdFx0XHRncmlkQXJlYTogZ3JpZEhlbHBlckNvb3JkUmVzLnBhcnNlZCxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4J1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWR9XG5cdFx0XHRcdD4ge2dyaWRIZWxwZXJDYW5TYXZlICYmIChcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR0ZXh0PXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsPXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNob3dUb29sdGlwPXt0cnVlfVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4geyBcblx0XHRcdFx0XHRcdFx0Ly8gU2F2ZSB0aGUgbmV3IC8gdXBkYXRlZCBHcmlkIEFyZWEuXG5cdFx0XHRcdFx0XHRcdGRvR3JpZEhlbHBlclNhdmUoZ3JpZENsaWVudElkLCBlZGl0aW5nLCBncmlkSGVscGVyQ29vcmRSZXMpOyBcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgc3RhdGUuXG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDb29yZFJlcyhudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gV2UgdXNlIHVzZUVmZmVjdCBpbiB0aGUgbWFpbiBjb21wb25lbnQgdG8gcmVzZXQgdGhlIEdyaWRzICdlZGl0aW5nJyBhdHRyaXVidGUsIHNvIHdlIGRvbid0XG5cdFx0XHRcdFx0XHRcdC8vIG5lZWQgdG8gd29ycnkgYWJvdXQgZG9pbmcgaXQgaGVyZSwgdGhpcyBhbGxvd3MgdXMgdG8gbW9yZSBlYXNpbHkgZm9jdXMgb24gdGhlIGNvcnJlY3QgYmxvY2tzLlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+PC9CdXR0b24+XG5cdFx0XHRcdCl9IDwvR3JpZEhlbHBlckFwcGVuZGVyPlxuXHRcdFx0PC8+XG5cdFx0KX1cblx0PC9kaXY+XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93c1xufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG4vKipcbiAqIFRoZSBDb2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZSh7XG4gICAgYXR0cmlidXRlczoge1xuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fVxuXHR9LFxufSkge1xuICAgIC8vXG4gICAgY29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMuc2F2ZSh7IC4uLnVzZUJsb2NrUHJvcHMuc2F2ZSh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcygxLCBjb2xDb3VudCwgcm93Q291bnQpIC8qIDEgPT09ICdzYXZlJyAqLyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygxLCBjb2xUZW1wbGF0ZXMpIC8qIDEgPT09ICdzYXZlJyAqLyxcblx0XHRcdGdyaWRUZW1wbGF0ZVJvd3M6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygxLCByb3dUZW1wbGF0ZXMpIC8qIDEgPT09ICdzYXZlJyAqL1xuICAgICAgICB9XG4gICAgfSl9KTtcblx0Ly9cbiAgICByZXR1cm4gKFxuXHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz5cblx0KTtcbn07IiwiLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gY3NzU2FmZUJhc2U2NChzdHJpbmcpIHtcbiAgICByZXR1cm4gd2luZG93LmJ0b2Eoc3RyaW5nKS5yZXBsYWNlKC9cXFcvZywgJycpO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhKHgsIHkpIHtcbiAgICByZXR1cm4gY3NzU2FmZUJhc2U2NChgJHt5fS8ke3h9YCk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICAgIC8vXG4gICAgY29uc3Qgc3RhcnQgPSBjc3NTYWZlQmFzZTY0KGAke3N0YXJ0WX0vJHtzdGFydFh9YCk7XG4gICAgY29uc3QgZW5kID0gY3NzU2FmZUJhc2U2NChgJHtlbmRZfS8ke2VuZFh9YCk7XG4gICAgcmV0dXJuIGAke3N0YXJ0fSAvICR7c3RhcnR9IC8gJHtlbmR9IC8gJHtlbmR9YDtcbn1cblxuLy9cbi8vIEdlbmVyYXRlIHRoZSBncmlkLXRlbXBsYXRlLWFyZWFzLCBncmlkLXRlbXBsYXRlLWNvbHVtbnMsIGFuZCBncmlkLXRlbXBsYXRlLXJvd3MgQ1NTLlxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoY29udGV4dCwgY29sQ291bnQsIHJvd0NvdW50KSB7XG4gICAgaWYoY29udGV4dCkge1xuICAgICAgICAvLyBTYXZlXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHJvd0NvdW50KSkucmVkdWNlKChyb3dzUmVzLCBfLCByb3dzSSkgPT4gKFxuICAgICAgICAgICAgYCR7cm93c1Jlc31cXG5cIiR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoY29sc1JlcywgXywgY29sc0kpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y29sc1Jlc30gJHtnZW5lcmF0ZUdyaWRBcmVhKCsrY29sc0ksIHJvd3NJICsgMSl9YDtcbiAgICAgICAgICAgIH0sICcnKX1cImBcbiAgICAgICAgKSwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVkaXRvclxuICAgICAgICAvLyBJbiB0aGUgZWRpdG9yIG9ubHksIHdlIGFkZCBhbiBhZGRpdGlvbmFsIENvbHVtbiAvIFJvdyB0byB0aGUgR3JpZCBUZW1scGxhdGUgQXJlYXMsIFxuICAgICAgICAvLyB0byBhY2NvdW50IGZvciB0aGUgZ3JpZCBoZWxwZXJzLlxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcbiAgICAgICAgICAgIGAke3Jvd3NSZXN9XFxuXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGNvbHNSZXMsIF8sIGNvbHNJKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWA7XG4gICAgICAgICAgICB9LCAnLicpfVwiYFxuICAgICAgICApLCBgXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGVkaXRvclJlcywgXywgaSkgPT4gYCR7ZWRpdG9yUmVzfSAuYCwgJy4nKX1cImApO1xuICAgIH1cbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKGNvbnRleHQsIHRlbXBsYXRlcykge1xuICAgIGlmKGNvbnRleHQpIHtcbiAgICAgICAgLy8gU2F2ZVxuICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN9ICR7Y3VyfWA7XG4gICAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFZGl0b3JcbiAgICAgICAgLy8gSW4gdGhlIGVkaXRvciBvbmx5LCB3ZSBhZGQgYW4gYWRkaXRpb25hbCBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgdG8gYWNjb3VudCBmb3IgdGhlIGdyaWQgaGVscGVycy5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuICAgICAgICB9LCAnbWluLWNvbnRlbnQnKTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoMm1sX2dyaWRhcmVhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiTm90aWNlIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJSYW5nZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJJbnNwZWN0b3JDb250cm9scyIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJ1c2VCbG9ja1Byb3BzIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiX18iLCJfbiIsInNwcmludGYiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MiLCJHcmlkRWRpdG9yIiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25zIiwic2V0U2VsZWN0ZWRHcmlkQXJlYSIsInNlbGVjdG9ycyIsImdldFNlbGVjdGVkR3JpZEFyZWEiLCJHcmlkRWRpdCIsImF0dHJpYnV0ZXMiLCJ2ZXJ0aWNhbEFsaWdubWVudCIsImNvbERlZmluaXRpb25zIiwiY291bnQiLCJjb2xDb3VudCIsInRlbXBsYXRlcyIsImNvbFRlbXBsYXRlcyIsInJvd0RlZmluaXRpb25zIiwicm93Q291bnQiLCJyb3dUZW1wbGF0ZXMiLCJlZGl0aW5nIiwic2V0QWxpZ25tZW50Iiwic2V0R3JpZE5vQ29sc09yUm93cyIsInNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93Iiwic2V0R3JpZEVkaXRpbmciLCJzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQiLCJzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQiLCJncmlkQ2hpbGRyZW4iLCJzZWxlY3QiLCJnZXRCbG9ja3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSIsImZvY3VzVGFyZ2V0Iiwic2V0Rm9jdXNUYXJnZXQiLCJjaGlsZFJlcXVlc3RlZEVkaXQiLCJmaW5kIiwiY2hpbGQiLCJyZXF1ZXN0RWRpdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwiaW5jbHVkZXMiLCJuZXdHcmlkQXJlYVRleHQiLCJjaGlsZHJlbiIsImlubmVyQmxvY2tzUHJvcHMiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJvbktleVByZXNzIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsImVkaXRLZXlzIiwiZXhpdEtleXMiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwib3RoZXIiLCJkZWZpbml0aW9ucyIsImNvdW50RGVsdGEiLCJ1bml0Iiwic3BsaWNlIiwibGVuZ3RoIiwiZnJvbSIsImluZGV4IiwidGVtcGxhdGUiLCJnZXRCbG9jayIsInBhcmVudHMiLCJuYW1lIiwic2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyIiwicmVkdWNlIiwicmVzIiwicGFyZW50SWQiLCJzZWxmIiwicGFyZW50QmxvY2siLCJwdXNoIiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImN1ciIsInN0YWNraW5nT3JkZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiLCJDb2xzUm93SGVscGVySW5uZXIiLCJHcmlkSGVscGVyTGFiZWwiLCJsYWJsZVR5cGUiLCJsYWJsZUNvdW50Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJsYWJsZUluZGV4IiwiR3JpZEhlbHBlckNlbGwiLCJjZWxsTGFiZWwiLCJjZWxsWCIsImNlbGxZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlRW50ZXIiLCJncmlkQXJlYSIsIkdyaWRIZWxwZXJBcHBlbmRlciIsImFyZWEiLCJjcmVhdGVCbG9jayIsImdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCIsImRvR3JpZEhlbHBlclNlbGVjdGlvbiIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJzdGFydFkiLCJ5IiwiZW5kWCIsImVuZFkiLCJzdGFydCIsIk1hdGgiLCJtaW4iLCJlbmQiLCJtYXgiLCJwYXJzZWQiLCJkb0dyaWRIZWxwZXJTYXZlIiwiZ3JpZENsaWVudElkIiwidGFyZ2V0IiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJncmlkSGVscGVySXNEcmF3aW5nIiwic2V0R3JpZEhlbHBlcklzRHJhd2luZyIsImdyaWRIZWxwZXJDYW5TYXZlIiwic2V0R3JpZEhlbHBlckNhblNhdmUiLCJncmlkSGVscGVyQ29vcmRSZXMiLCJzZXRHcmlkSGVscGVyQ29vcmRSZXMiLCJjZWxsSW5kZXgiLCJmbG9vciIsImZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3NzU2FmZUJhc2U2NCIsInN0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZXBsYWNlIiwiZ2VuZXJhdGVHcmlkQXJlYSIsImNvbnRleHQiLCJyb3dzUmVzIiwicm93c0kiLCJjb2xzUmVzIiwiY29sc0kiLCJlZGl0b3JSZXMiXSwic291cmNlUm9vdCI6IiJ9