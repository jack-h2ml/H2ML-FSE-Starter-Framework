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
  if (style) console.log(style);
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
    console.log('TEST');
    if (editing) {
      console.log('Hello World!');
      // Set the focusTarget if needed. 
      if (editing.clientId) setFocusTarget(editing);
      // Reset the Grid's 'editing' attribute. 
      setGridEditing(false);
    } else {
      // Determine if a Grid Area is requesting to be updated. 
      const childRequestedEdit = gridChildren.find(child => child.attributes.requestEdit);
      if (childRequestedEdit) {
        console.log(clientId);
        // Re-focus on the Grid, as focus will have been captured by the Grid Area.
        //document.querySelector(`[data-block="${clientId}"]`).focus();
        setGridEditing(childRequestedEdit);
      }
    }
  }, [gridChildren, gridChildren.includes(child => child.attributes.requestEdit)]);

  //
  // If the Grid's 'editing' attribute changes to false, and a focusTarget is set, then .focus() on the focusTarget's DOM element,
  // then reset the focusTarget to null.
  //

  /*
  useEffect(() => {
  	if(!editing && focusTarget) document.querySelector(`[data-block="${focusTarget.clientId}"]`).focus();
  	setFocusTarget(null)
  }, [editing]);
  */

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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/local_components/GridEditor/components/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils.js */ "./src/utils.js");

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
  res.parsed = (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridAreaStartEnd)(res.start.x, res.start.y, res.end.x, res.end.y);
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
  //
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useRefEffect)(element => {
    const {
      ownerDocument
    } = element;
    const {
      defaultView
    } = ownerDocument;
    //defaultView.addEventListener( ... );
    console.log(ownerDocument);
    return () => {
      //defaultView.removeEventListener( ... );
    };
  }, []);

  // The JSX.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-helpers",
    ref: ref
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_7__.GridHelperLabel, {
    lableType: "Column",
    lableCount: colCount
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_7__.GridHelperLabel, {
    lableType: "Row",
    lableCount: rowCount
  }), Array.from(Array(colCount * rowCount)).map((_, cellIndex) => {
    cellIndex++;
    const cellX = (cellIndex - 1) % colCount + 1;
    const cellY = Math.floor((cellIndex - 1) / colCount) + 1;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_7__.GridHelperCell, {
      key: `helper-cell-${cellIndex}`,
      cellLabel: cellIndex,
      cellX,
      cellY,
      onMouseDown: editing ? e => {
        console.log('test mouse down.', document);
        // End Grid Area Selection.
        const finishSelectingGridArea = () => {
          // Reset State.
          setGridHelperIsDrawing(false);
          // Set State.
          setGridHelperCanSave(true);
          // Cleanup this Document event listener.
          window.removeEventListener('mouseup', finishSelectingGridArea);
        };
        window.addEventListener('mouseup', finishSelectingGridArea);
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Click and drag", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to add a new Grid Area, when you're done click", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save Grid Area", 'h2ml')), ", ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("press", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("E", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("or", 'h2ml'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("C", 'h2ml')), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to cancel.", 'h2ml'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Don't forget to "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update", 'h2ml')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" the post when you're done.", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_7__.GridHelperAppender, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9ncmlkLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGdyaWQgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03LjggMTYuNUg1Yy0uMyAwLS41LS4yLS41LS41di02LjJoNi44djYuN3ptMC04LjNINC41VjVjMC0uMy4yLS41LjUtLjVoNi4ydjYuN3ptOC4zIDcuOGMwIC4zLS4yLjUtLjUuNWgtNi4ydi02LjhoNi44VjE5em0wLTcuOGgtNi44VjQuNUgxOWMuMyAwIC41LjIuNS41djYuMnpcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmlkLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHROb3RpY2UsXG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0VG9vbHRpcFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxuXHRzcHJpbnRmXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBcblx0Y3JlYXRlUmVkdXhTdG9yZSwgXG5cdHJlZ2lzdGVyXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5cbmltcG9ydCAnLi8uLi8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzJztcblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzLFxufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5pbXBvcnQgeyBHcmlkRWRpdG9yIH0gZnJvbSAnLi9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3InXG5cbi8qXG4qIFJlZHV4IHN0b3JlIGh0bWxGb3IgaG9sZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhLCBcbiogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhIGlzIHZpc3VhbGx5IG9uIHRvcCBpbiB0aGUgZWRpdG9yLlxuKi9cblxucmVnaXN0ZXIoY3JlYXRlUmVkdXhTdG9yZShcImgybWwvZ3JpZF9hcmVhX3N0b3JlXCIsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRzZWxlY3RlZDoge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9LFxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0XHRcdC4uLnN0YXRlLnNlbGVjdGVkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCIsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0Z2V0U2VsZWN0ZWRHcmlkQXJlYShzdGF0ZSkge1xuXHRcdFx0cmV0dXJuIHN0YXRlLnNlbGVjdGVkLnZhbHVlO1xuXHRcdH1cblx0fVxufSkpO1xuXG4vKipcbiAqIFRoZSBDb2RlLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fSxcblx0XHRlZGl0aW5nLFxuXHRcdHN0eWxlXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRBbGlnbm1lbnQsXG5cdHNldEdyaWROb0NvbHNPclJvd3MsXG5cdHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93LFxuXHRzZXRHcmlkRWRpdGluZyxcblx0Ly8gUmVkdXggU2V0dGVycy5cblx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkXG59KSA9PiB7XG5cdGlmKHN0eWxlKSBjb25zb2xlLmxvZyhzdHlsZSk7XG5cdC8vXG5cdC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbi4gXG5cdC8vIChVc2VkIGh0bWxGb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyLCBhbmQgYWRkaW5nIC8gZWRpdGluZyBHcmlkLUFyZWEncylcblx0Ly9cblxuXHRjb25zdCB7IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLCBncmlkQ2hpbGRyZW4gfSA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCwgZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkID0gZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkID0gc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkID8gZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCddLCB0cnVlKVswXSA6IGZhbHNlO1xuXHRcdGNvbnN0IGdyaWRDaGlsZHJlbiA9IGdldEJsb2NrcyhjbGllbnRJZCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLFxuXHRcdFx0c2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLFxuXHRcdFx0Z3JpZENoaWxkcmVuXG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdC8vXG5cdC8vIEhhbmRsZSB1cGRhdGluZyB0aGUgc3RhY2tpbmcgb3JkZXIgaHRtbEZvciBhbnkgY3VycmVudGx5IHNlbGVjdGVkIEdyaWQgQXJlYSdzIHdpdGhpbiB0aGUgZWRpdG9yLlxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcihzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCk7XG5cdH0sIFtzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWRdKTtcblxuXHQvL1xuXHQvLyBmb2N1c1RhcmdldCBzdGF0ZSwgdGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB3ZSBhdXRvLWZvY3VzIG9uIHRoZSBjb3JyZWN0IEdyaWQgQXJlYSB3aGVuIG1ha2luZyBjaGFuZ2VzIHRvIHRoZSBHcmlkLlxuXHQvL1xuXG5cdGNvbnN0IFtmb2N1c1RhcmdldCwgc2V0Rm9jdXNUYXJnZXRdID0gdXNlU3RhdGUobnVsbCk7XG5cblx0Ly8gXG5cdC8vIElmIGVpdGhlciBvZiB0aGUgR3JpZCdzIHRvdGFsIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzIChhZGRpbmcpLCBvciBpZiB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUgb2Ygb25lIG9mIHRoZSBHcmlkJ3MgXG5cdC8vIGNoYW5nZXMgKHVwZGF0aW5nKSB0aGVuIGRvIHRoZSBmb2xsb3dpbmc6IFxuXHQvLyBcblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGlzIGFscmVhZHkgc2V0IHRoZW4gd2UgaGF2ZSBqdXN0IGZpbmlzaGVkIGVkaXRpbmcsIGFuZCB3ZSBzaG91bGQgZGV0ZXJtaW5lIGlmIHdlIG5lZWQgXG5cdC8vIHRvIGZvY3VzIG9uIGFuIHVwZGF0ZWQgR3JpZCBBcmVhLiBJbiBlaXRoZXIgY2FzZSByZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgdG8gZmFsc2UuXG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBOT1Qgc2V0IHRoZW4gZGV0ZXJtaW5lIGlmIGFueSBvZiB0aGUgR3JpZCdzIEdyaWQtQXJlYSdzIGFyZSByZXF1ZXN0aW5nIGFuIGVkaXQuIFxuXHQvLyBJZiBzbywgY2FsbCBzZXRHcmlkRWRpdGluZy5cblx0Ly9cblx0Ly8gVGhpcyBkb2VzIG5vdCBoYW5kbGUgYWRkaW5nIGEgbmV3IGdyaWQgYXJlYSwgdGhhdCBpcyBkb25lIGJ5IHRoZSBHcmlkIGl0c2VsZiB0aHJvdWdoIHRoZSBvbktleVByZXNzIGV2ZW50LCBvciBpdCBpcyBcblx0Ly8gZG9uZSBieSB0aGUgZ3JpZEVkaXRvciwgdXNpbmcgdGhlIEJsb2NrQXBwZW5kZXIgYnV0dG9uLiBcblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCdURVNUJyk7XG5cdFx0aWYoZWRpdGluZykge1xuXHRcdFx0Y29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIScpO1xuXHRcdFx0Ly8gU2V0IHRoZSBmb2N1c1RhcmdldCBpZiBuZWVkZWQuIFxuXHRcdFx0aWYoZWRpdGluZy5jbGllbnRJZCkgc2V0Rm9jdXNUYXJnZXQoZWRpdGluZyk7XG5cdFx0XHQvLyBSZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUuIFxuXHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgYSBHcmlkIEFyZWEgaXMgcmVxdWVzdGluZyB0byBiZSB1cGRhdGVkLiBcblx0XHRcdGNvbnN0IGNoaWxkUmVxdWVzdGVkRWRpdCA9IGdyaWRDaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmF0dHJpYnV0ZXMucmVxdWVzdEVkaXQpO1xuXHRcdFx0aWYoY2hpbGRSZXF1ZXN0ZWRFZGl0KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNsaWVudElkKTtcblx0XHRcdFx0Ly8gUmUtZm9jdXMgb24gdGhlIEdyaWQsIGFzIGZvY3VzIHdpbGwgaGF2ZSBiZWVuIGNhcHR1cmVkIGJ5IHRoZSBHcmlkIEFyZWEuXG5cdFx0XHRcdC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmxvY2s9XCIke2NsaWVudElkfVwiXWApLmZvY3VzKCk7XG5cdFx0XHRcdHNldEdyaWRFZGl0aW5nKGNoaWxkUmVxdWVzdGVkRWRpdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBbZ3JpZENoaWxkcmVuLCBncmlkQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGQgPT4gY2hpbGQuYXR0cmlidXRlcy5yZXF1ZXN0RWRpdCldKTtcblxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgY2hhbmdlcyB0byBmYWxzZSwgYW5kIGEgZm9jdXNUYXJnZXQgaXMgc2V0LCB0aGVuIC5mb2N1cygpIG9uIHRoZSBmb2N1c1RhcmdldCdzIERPTSBlbGVtZW50LFxuXHQvLyB0aGVuIHJlc2V0IHRoZSBmb2N1c1RhcmdldCB0byBudWxsLlxuXHQvL1xuXHRcblxuXHQvKlxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKCFlZGl0aW5nICYmIGZvY3VzVGFyZ2V0KSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Zm9jdXNUYXJnZXQuY2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHRzZXRGb2N1c1RhcmdldChudWxsKVxuXHR9LCBbZWRpdGluZ10pO1xuXHQqL1xuXG5cdC8vXG5cdC8vIFJlZ2lzdGVyIHRoZSBCbG9jayAvIElubmVyQmxvY2sgUHJvcHMuXG5cdC8vXG5cblx0Y29uc3QgbmV3R3JpZEFyZWFUZXh0ID0gX18oJ0FkZCBuZXcgR3JpZCBBcmVhJywgJ2gybWwnKTtcblx0Y29uc3QgeyBjaGlsZHJlbiwgLi4uaW5uZXJCbG9ja3NQcm9wcyB9ID0gdXNlSW5uZXJCbG9ja3NQcm9wcyhcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUFyZWFzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKDAsIGNvbENvdW50LCByb3dDb3VudCkgLyogMCA9PT0gJ2VkaXRvcicgKi8sXG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygwLCBjb2xUZW1wbGF0ZXMpIC8qIDAgPT09ICdlZGl0b3InICovLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMCwgcm93VGVtcGxhdGVzKSAvKiAwID09PSAnZWRpdG9yJyAqL1xuXHRcdFx0fSxcblx0XHRcdG9uS2V5UHJlc3M6IChlKSA9PiB7XG5cdFx0XHRcdGlmKGNsaWVudElkID09PSBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQpIHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdC8vIFZhcmlhYmxlcy5cblx0XHRcdFx0XHRjb25zdCB7IGtleSB9ID0gZTtcblx0XHRcdFx0XHRjb25zdCBlZGl0S2V5cyA9IFsnYScsICdBJ107XG5cdFx0XHRcdFx0Y29uc3QgZXhpdEtleXMgPSBbJ2MnLCAnQyddO1xuXHRcdFx0XHRcdC8vIEJpbmQga2V5cyB0byBhdHRyaWJ1dGUgc2V0dGVycy5cblx0XHRcdFx0XHRpZiAoZWRpdEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZWRpdGluZykgc2V0R3JpZEVkaXRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZXhpdEtleXMuaW5jbHVkZXMoa2V5KSkge1xuXHRcdFx0XHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSksIHtcblx0XHRcdGFsbG93ZWRCbG9ja3M6IFsnaDJtbC9ncmlkLWFyZWEnXSxcblx0XHR9XG5cdCk7XG5cblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldEFsaWdubWVudH1cblx0XHRcdFx0XHR2YWx1ZT17dmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBDb2x1bW5zYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sQ291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMCwgdmFsdWUpfSAvLyAwID09PSAnY29sJ1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBSb3dzYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cm93Q291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMSwgdmFsdWUpfSAvLyAxID09PSAncm93J1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoY29sQ291bnQgKiByb3dDb3VudCkgPiA0OSAmJlxuXHRcdFx0XHRcdFx0XHRcdCg8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBpc0Rpc21pc3NpYmxlPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUaGUgbnVtYmVyIG9mIGNlbGxzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcmVjb21tZW5kZWQgbGltaXQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2gybWwnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPilcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBDb2x1bW5zIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0e1suLi5BcnJheShjb2xDb3VudCldLm1hcCgoXywgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgY29sLXNldHRpbmdzLSR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3NwcmludGYoX18oXCJDb2x1bW4gJTEkZCBXaWR0aFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sVGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDAsIGksIHZhbHVlIC8qIDAgPT09ICdjb2wnICovKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgUm93cyBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkocm93Q291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHJvdy1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiUm93ICUxJGQgSGVpZ2h0XCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMSwgaSwgdmFsdWUpIC8qIDAgPT09ICdyb3cnICovfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30+XG5cdFx0XHRcdDxHcmlkRWRpdG9yXG5cdFx0XHRcdFx0Z3JpZENsaWVudElkPXtjbGllbnRJZH1cblx0XHRcdFx0XHRjb2xDb3VudD17Y29sQ291bnR9XG5cdFx0XHRcdFx0cm93Q291bnQ9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdGVkaXRpbmc9e2VkaXRpbmd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWFzXCI+XG5cdFx0XHRcdFx0eyEoZWRpdGluZykgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtuZXdHcmlkQXJlYVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkTmV3R3JpZEFyZWFcIj57bmV3R3JpZEFyZWFUZXh0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRHcmlkRWRpdGluZyh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBkPVwiTTE4IDExLjJoLTUuMlY2aC0xLjZ2NS4ySDZ2MS42aDUuMlYxOGgxLjZ2LTUuMkgxOHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9ucy5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRoZSBHcmlkIEFyZWEncyBXUCBhbGlnbm1lbnQgKFdpZGUsIEZ1bGwgZXRjKS5cblx0XHQvL1xuXHRcdHNldEFsaWdubWVudCh2ZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB2ZXJ0aWNhbEFsaWdubWVudCB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIG51bWJlciBvZiBjb2x1bW5zIC8gcm93cywgY2xlYW4gdXAgdGhlIHJlbGV2YW50IHRlbXBsYXRlcywgYW5kIGZpbmFsbHkgc2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgR3JpZCBBcmVhJ3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkTm9Db2xzT3JSb3dzKHR5cGUsIGNvdW50KSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHNldHRpbmcgQ29sdW1ucyBvciBSb3dzLCBhbmQgYWxzbyBnZXQgdGhlIG9wcG9zaXRlLlxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0Y29uc3Qgb3RoZXIgPSBvcHRpb25zW3R5cGUgXiAxXTtcblx0XHRcdHR5cGUgPSBvcHRpb25zW3R5cGVdO1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXhpc3RpbmcgQ29sdW1uIC8gUm93IGRlZmluaXRpb24uXG5cdFx0XHRjb25zdCBkZWZpbml0aW9ucyA9IHsgLi4uYXR0cmlidXRlc1tgJHt0eXBlfURlZmluaXRpb25zYF0gfTtcblx0XHRcdGNvbnN0IGNvdW50RGVsdGEgPSBjb3VudCAtIGRlZmluaXRpb25zLmNvdW50O1xuXHRcdFx0Ly8gQ2xlYW4gdXAgQ29sdW1uIC8gUm93IHRlbXBsYXRlcy5cblx0XHRcdGNvbnN0IHVuaXQgPSB0eXBlID09PSAnY29sJyA/ICcxZnInIDogJ21heC1jb250ZW50Jztcblx0XHRcdGRlZmluaXRpb25zLnRlbXBsYXRlcy5zcGxpY2UoLi4uY291bnREZWx0YSA+IDAgP1xuXHRcdFx0XHRbZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCwgMCwgLi4uQXJyYXkuZnJvbShBcnJheShjb3VudERlbHRhKSkubWFwKF8gPT4gdW5pdCldIDogLy8gQWRkaW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHRcdFtjb3VudCwgZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCAtIDFdIC8vIFJlbW92aW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHQpO1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBkZWZpbml0aW9uJ3MgY291bnQgdmFsdWUgYW5kIHRoZW4gc2V0IHRoZSBhdHRyYnV0ZS4gXG5cdFx0XHRkZWZpbml0aW9ucy5jb3VudCA9IGNvdW50O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGVtcGxhdGVzIGh0bWxGb3Igc3BlY2lmaWMgQ29sdW1ucyAvIFJvd3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyh0eXBlLCBpbmRleCwgdGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgZ2VuZXJhdGluZyBhIENvbHVtbnMgb3IgUm93cyB0ZW1wbGF0ZVxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBnaXZlbiBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgYW5kIHNldCB0aGUgYXR0cmlidXRlLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzW2luZGV4XSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiB1bml0O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgJ2VkaXRpbmcnIGF0dHJpYnV0ZVxuXHRcdC8vXG5cdFx0c2V0R3JpZEVkaXRpbmcodmFsdWUpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZWRpdGluZzogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFdoZW4gYSBHcmlkLUFyZWEgb3IgYW55IG9mIGl0J3MgY2hpbGRyZW4gYXJlIHNlbGN0ZWQsIHZpc3VhbGx5IG1vdmUgdGhhdCBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIFxuXHRcdC8vIHN0YWNraW5nIGNvbnRleHQuICh0aGlzIGlzIG5vdCBzYXZlZCBhcyBhbiBhdHRyaWJ1dGUsIGFuZCBpcyBwdXJlbHkgaHRtbEZvciBjb252ZW5pZW5jZSBpbiB0aGUgZWRpdG9yKS5cblx0XHQvL1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdGNvbnN0IHsgY2xpZW50SWQgfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgeyBzZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBkaXNwYXRjaCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHRcdGlmIChzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPT09IGNsaWVudElkKSB7XG5cdFx0XHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lLCBnZXRCbG9ja3MgfSA9IHJlZ2lzdHJ5LnNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcGFyZW50cyA9IGdldEJsb2NrKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCkubmFtZSAhPT0gJ2gybWwvZ3JpZC1hcmVhJyA/XG5cdFx0XHRcdFx0Z2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKSA6XG5cdFx0XHRcdFx0W3NlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgLi4uZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKV07XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlciA9IHBhcmVudHMucmVkdWNlKChyZXMsIHBhcmVudElkLCBpLCBzZWxmKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudEJsb2NrID0gZ2V0QmxvY2socGFyZW50SWQpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRCbG9jay5uYW1lID09PSAnaDJtbC9ncmlkLWFyZWEnKSB7XG5cdFx0XHRcdFx0XHRyZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGNsaWVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRcdFx0ZWRpdG9yU3RhY2tpbmdPcmRlcjogZ2V0QmxvY2tzKHNlbGZbKytpXSkucmVkdWNlKChyZXMsIGN1cikgPT4gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcywgMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEoe1xuXHRcdFx0XHRcdGNsaWVudElkOiBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsXG5cdFx0XHRcdFx0cGFyZW50czogc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICghc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKShHcmlkRWRpdCk7XG5cbi8qXG4gKiBFeHBvcnQgdGhlIEJsb2NrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkRWRpdFdyYXBwZXIgey4uLnByb3BzfSAvPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IGdyaWQgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHQvL1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlLFxufSk7XG5cbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IENvbHNSb3dIZWxwZXJJbm5lciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0aW5kZXhcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPHNwYW4+e2luZGV4fTwvc3Bhbj5cbn07XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyTGFiZWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGxhYmxlVHlwZSxcblx0XHRsYWJsZUNvdW50XG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLXJvd3MtaGVscGVyLXdyYXBgfT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdyaWQtJHtsYWJsZVR5cGUuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCl9cy1oZWxwZXJgfSAvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGxhYmxlQ291bnQpKS5tYXAoKF8sIGxhYmxlSW5kZXgpID0+IChcblx0XHRcdDxkaXZcblx0XHRcdFx0a2V5PXtgJHtsYWJsZVR5cGV9LWxhYmxlLWNlbGwtJHtsYWJsZUluZGV4fWB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtY29scy1yb3dzLWhlbHBlclwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0W2BncmlkJHtsYWJsZVR5cGV9U3RhcnRgXTogKytsYWJsZUluZGV4ICsgMSxcblx0XHRcdFx0XHRbYGdyaWQke2xhYmxlVHlwZSA9PT0gJ0NvbHVtbicgPyAnUm93JyA6ICdDb2x1bW4nfVN0YXJ0YF06IDEsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUb29sdGlwIHRleHQ9e3NwcmludGYoX18oJyUyJHMgJTEkZCcsICdoMm1sJyksIGxhYmxlSW5kZXgsIGxhYmxlVHlwZSl9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFibGVJbmRleH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdDwvZGl2PlxuXHRcdCkpfVxuXHQ8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJDZWxsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjZWxsTGFiZWwsXG5cdFx0Y2VsbFgsXG5cdFx0Y2VsbFksXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZUVudGVyLFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1hcmVhLWhlbHBlclwiXG5cdFx0ey4uLnsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciB9fVxuXHRcdGRhdGEteGNvb3Jkcz17Y2VsbFh9XG5cdFx0ZGF0YS15Y29vcmRzPXtjZWxsWX1cblx0XHRzdHlsZT17e1xuXHRcdFx0Z3JpZEFyZWE6IGAke2NlbGxZICsgMX0gLyAke2NlbGxYICsgMX0gLyAke2NlbGxZICsgMn0gLyAke2NlbGxYICsgMn1gXG5cdFx0fX1cblx0PlxuXHRcdHtgJHtjZWxsTGFiZWx9YH0gPHN1Yj57YCgke2NlbGxYfSwgJHtjZWxsWX0pYH08L3N1Yj5cblx0PC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyQXBwZW5kZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHN0eWxlLFxuXHRcdGNoaWxkcmVuXG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYS1hcHBlbmRlclwiXG5cdFx0XHRhcmVhPXtwcm9wcy5hcmVhID8gcHJvcHMuYXJlYSA6IG51bGx9XG5cdFx0XHR7Li4ueyBzdHlsZSB9fVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHRzZWxlY3QsXG5cdGRpc3BhdGNoXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7XG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHsgY3JlYXRlQmxvY2sgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IFxuXHR1c2VTdGF0ZSwgXG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG5cdHVzZVJlZkVmZmVjdCBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRHcmlkSGVscGVyTGFiZWwsXG5cdEdyaWRIZWxwZXJDZWxsLFxuXHRHcmlkSGVscGVyQXBwZW5kZXJcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5cbi8qKlxuKiBFdmVudCBjYWxsYmFjayBGdW5jdGlvbiBmb3Igc3RhcnRpbmcgLyB1cGRhdGluZyB0aGUgc2VsZWN0aW5nIG9mIGEgR3JpZC1BcmVhIEFyZWFcbiovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNlbGVjdGlvbiA9IChlLCBjb29yZHMsIHJlcykgPT4ge1xuXHQvLyBSZXNldCB0aGUgZ3JpZCBhcmVhIGNvb3JkcyBvbiBtb3VzZWRvd24uXG5cdGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nKSByZXMgPSBudWxsO1xuXHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgdXBkYXRpbmcgYW4gZXhpc3Rpbmcgc2VsZWN0aW9uIChkcmFnZ2luZyksIG9yIHN0YXJ0aW5nIGEgbmV3IG9uZSAoY2xpY2tpbmcpLlxuXHRjb25zdCBzdGFydFggPSByZXM/LnN0b3JlPy54ID8gcmVzPy5zdG9yZT8ueCA6IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBzdGFydFkgPSByZXM/LnN0b3JlPy55ID8gcmVzPy5zdG9yZT8ueSA6IE51bWJlcihjb29yZHMuY2VsbFkpO1xuXHRjb25zdCBlbmRYID0gTnVtYmVyKGNvb3Jkcy5jZWxsWCk7XG5cdGNvbnN0IGVuZFkgPSBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Ly8gQ2FsY3VsYXRlIGFuZCBzdG9yZSB0aGUgbmV3IENvb3JkcyB2YWx1ZXMuXG5cdHJlcyA9IHtcblx0XHRzdG9yZToge1xuXHRcdFx0eDogc3RhcnRYLFxuXHRcdFx0eTogc3RhcnRZLFxuXHRcdH0sXG5cdFx0c3RhcnQ6IHtcblx0XHRcdHg6IE1hdGgubWluKHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1pbihzdGFydFksIGVuZFkpXG5cdFx0fSxcblx0XHRlbmQ6IHtcblx0XHRcdHg6IE1hdGgubWF4KHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1heChzdGFydFksIGVuZFkpLFxuXHRcdH1cblx0fTtcblx0cmVzLnBhcnNlZCA9IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChyZXMuc3RhcnQueCwgcmVzLnN0YXJ0LnksIHJlcy5lbmQueCwgcmVzLmVuZC55KTtcblx0cmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBTYXZlIEZ1bmN0aW9uXG4gKi9cblxuY29uc3QgZG9HcmlkSGVscGVyU2F2ZSA9IChncmlkQ2xpZW50SWQsIHRhcmdldCwgY29vcmRzKSA9PiB7XG5cdGlmICh0YXJnZXQuY2xpZW50SWQpIHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7dXBkYXRlQmxvY2tBdHRyaWJ1dGVzfSA9IGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIFVwZGF0ZSB0aGUgcmVxdWVzdGVkIEdyaWQgQXJlYS5cblx0XHR1cGRhdGVCbG9ja0F0dHJpYnV0ZXModGFyZ2V0LmNsaWVudElkLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0cmVxdWVzdEVkaXQ6IGZhbHNlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRjb25zdCB7IGluc2VydEJsb2NrIH0gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBBZGRpbmcgYSBuZXcgR3JpZCBBcmVhLlxuXHRcdGNvbnN0IHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXIsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleFxuXHRcdH0gPSBnZXRCbG9ja3MoZ3JpZENsaWVudElkKS5yZWR1Y2UoXG5cdFx0XHQocmVzLCBjdXIsIGluZCkgPT4ge1xuXHRcdFx0XHRyZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlciA9IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgPj0gcmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyO1xuXHRcdFx0XHRyZXMubmV4dENoaWxkSW5kZXggPSBpbmQgKyAxO1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSwge1xuXHRcdFx0bmV4dENoaWxkU3RhY2tpbmdPcmRlcjogMCxcblx0XHRcdG5leHRDaGlsZEluZGV4OiAwXG5cdFx0fVxuXHRcdCk7XG5cdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgR3JpZCBBcmVhLlxuXHRcdGluc2VydEJsb2NrKGNyZWF0ZUJsb2NrKCdoMm1sL2dyaWQtYXJlYScsIHtcblx0XHRcdGdyaWRBcmVhOiBjb29yZHMsXG5cdFx0XHRzdGFja2luZ09yZGVyOiBuZXh0Q2hpbGRTdGFja2luZ09yZGVyXG5cdFx0fSksIG5leHRDaGlsZEluZGV4LCBncmlkQ2xpZW50SWQpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEpTWFxuICovXG5cbmV4cG9ydCBjb25zdCBHcmlkRWRpdG9yID0gKHByb3BzKSA9PiB7XG5cdC8vIFByb3BlcnRpZXMuXG5cdGNvbnN0IHtcblx0XHRncmlkQ2xpZW50SWQsXG5cdFx0Y29sQ291bnQsXG5cdFx0cm93Q291bnQsXG5cdFx0ZWRpdGluZ1xuXHR9ID0gcHJvcHM7XG5cdC8vIFN0YXRlIE1hbmFnZXJzLlxuXHRjb25zdCBbZ3JpZEhlbHBlcklzRHJhd2luZywgc2V0R3JpZEhlbHBlcklzRHJhd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ2FuU2F2ZSwgc2V0R3JpZEhlbHBlckNhblNhdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNvb3JkUmVzLCBzZXRHcmlkSGVscGVyQ29vcmRSZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cdC8vXG5cdGNvbnN0IHJlZiA9IHVzZVJlZkVmZmVjdCggKCBlbGVtZW50ICkgPT4ge1xuXHRcdGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWxlbWVudDtcblx0XHRjb25zdCB7IGRlZmF1bHRWaWV3IH0gPSBvd25lckRvY3VtZW50O1xuXHRcdC8vZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lciggLi4uICk7XG5cdFx0Y29uc29sZS5sb2cob3duZXJEb2N1bWVudCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHQgIC8vZGVmYXVsdFZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lciggLi4uICk7XG5cdFx0fTtcblx0fSwgW10gKTtcblxuXHQvLyBUaGUgSlNYLlxuXHRyZXR1cm4gPGRpdiBcblx0XHRjbGFzc05hbWU9XCJncmlkLWhlbHBlcnNcIlxuXHRcdHJlZj17cmVmfVxuXHQ+XG5cdFx0PEdyaWRIZWxwZXJMYWJlbFxuXHRcdFx0bGFibGVUeXBlPVwiQ29sdW1uXCJcblx0XHRcdGxhYmxlQ291bnQ9e2NvbENvdW50fVxuXHRcdC8+XG5cdFx0PEdyaWRIZWxwZXJMYWJlbFxuXHRcdFx0bGFibGVUeXBlPVwiUm93XCJcblx0XHRcdGxhYmxlQ291bnQ9e3Jvd0NvdW50fVxuXHRcdC8+XG5cdFx0e0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQgKiByb3dDb3VudCkpLm1hcCgoXywgY2VsbEluZGV4KSA9PiB7XG5cdFx0XHRjZWxsSW5kZXgrKztcblx0XHRcdGNvbnN0IGNlbGxYID0gKChjZWxsSW5kZXggLSAxKSAlIGNvbENvdW50KSArIDE7XG5cdFx0XHRjb25zdCBjZWxsWSA9IE1hdGguZmxvb3IoKGNlbGxJbmRleCAtIDEpIC8gY29sQ291bnQpICsgMTtcblx0XHRcdHJldHVybiA8R3JpZEhlbHBlckNlbGxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRrZXk6IGBoZWxwZXItY2VsbC0ke2NlbGxJbmRleH1gLFxuXHRcdFx0XHRcdGNlbGxMYWJlbDogY2VsbEluZGV4LFxuXHRcdFx0XHRcdGNlbGxYLFxuXHRcdFx0XHRcdGNlbGxZLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiAoZWRpdGluZyA/IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygndGVzdCBtb3VzZSBkb3duLicsIGRvY3VtZW50KTtcblx0XHRcdFx0XHRcdC8vIEVuZCBHcmlkIEFyZWEgU2VsZWN0aW9uLlxuXHRcdFx0XHRcdFx0Y29uc3QgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IFN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0Ly8gU2V0IFN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdFx0Ly8gQ2xlYW51cCB0aGlzIERvY3VtZW50IGV2ZW50IGxpc3RlbmVyLlxuXHRcdFx0XHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZmluaXNoU2VsZWN0aW5nR3JpZEFyZWEpO1xuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IChncmlkSGVscGVySXNEcmF3aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBHcmlkIEFyZWEgU2VsZWN0aW9uLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKVxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHR9KX1cblx0XHR7ZWRpdGluZyAmJiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7ZWRpdGluZz8uY2xpZW50SWQgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWFkZGluZy1ncmlkLWFyZWFzLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz57X18oXCJDbGljayBhbmQgZHJhZ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBlZGl0IHRoZSBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGFkZCBhIG5ldyBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PEdyaWRIZWxwZXJBcHBlbmRlclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdFx0XHRzdHlsZT17Z3JpZEhlbHBlckNvb3JkUmVzID8ge1xuXHRcdFx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRIZWxwZXJDb29yZFJlcy5wYXJzZWQsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCdcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkfVxuXHRcdFx0XHQ+IHtncmlkSGVscGVyQ2FuU2F2ZSAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGV4dD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17dHJ1ZX1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHsgXG5cdFx0XHRcdFx0XHRcdC8vIFNhdmUgdGhlIG5ldyAvIHVwZGF0ZWQgR3JpZCBBcmVhLlxuXHRcdFx0XHRcdFx0XHRkb0dyaWRIZWxwZXJTYXZlKGdyaWRDbGllbnRJZCwgZWRpdGluZywgZ3JpZEhlbHBlckNvb3JkUmVzKTsgXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNhblNhdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMobnVsbCk7XG5cdFx0XHRcdFx0XHRcdC8vIFdlIHVzZSB1c2VFZmZlY3QgaW4gdGhlIG1haW4gY29tcG9uZW50IHRvIHJlc2V0IHRoZSBHcmlkcyAnZWRpdGluZycgYXR0cml1YnRlLCBzbyB3ZSBkb24ndFxuXHRcdFx0XHRcdFx0XHQvLyBuZWVkIHRvIHdvcnJ5IGFib3V0IGRvaW5nIGl0IGhlcmUsIHRoaXMgYWxsb3dzIHVzIHRvIG1vcmUgZWFzaWx5IGZvY3VzIG9uIHRoZSBjb3JyZWN0IGJsb2Nrcy5cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PjwvQnV0dG9uPlxuXHRcdFx0XHQpfSA8L0dyaWRIZWxwZXJBcHBlbmRlcj5cblx0XHRcdDwvPlxuXHRcdCl9XG5cdDwvZGl2PlxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcbiAgICBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3Ncbn0gZnJvbSAnLi91dGlscy5qcydcblxuLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuICAgIGF0dHJpYnV0ZXM6IHtcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH1cblx0fSxcbn0pIHtcbiAgICAvL1xuICAgIGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoMSwgY29sQ291bnQsIHJvd0NvdW50KSAvKiAxID09PSAnc2F2ZScgKi8sXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgY29sVGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi8sXG5cdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgcm93VGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi9cbiAgICAgICAgfVxuICAgIH0pfSk7XG5cdC8vXG4gICAgcmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdCk7XG59OyIsIi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc1NhZmVCYXNlNjQoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5idG9hKHN0cmluZykucmVwbGFjZSgvXFxXL2csICcnKTtcbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkQXJlYSh4LCB5KSB7XG4gICAgcmV0dXJuIGNzc1NhZmVCYXNlNjQoYCR7eX0vJHt4fWApO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcbiAgICAvL1xuICAgIGNvbnN0IHN0YXJ0ID0gY3NzU2FmZUJhc2U2NChgJHtzdGFydFl9LyR7c3RhcnRYfWApO1xuICAgIGNvbnN0IGVuZCA9IGNzc1NhZmVCYXNlNjQoYCR7ZW5kWX0vJHtlbmRYfWApO1xuICAgIHJldHVybiBgJHtzdGFydH0gLyAke3N0YXJ0fSAvICR7ZW5kfSAvICR7ZW5kfWA7XG59XG5cbi8vXG4vLyBHZW5lcmF0ZSB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcywgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zLCBhbmQgZ3JpZC10ZW1wbGF0ZS1yb3dzIENTUy5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKGNvbnRleHQsIGNvbENvdW50LCByb3dDb3VudCkge1xuICAgIGlmKGNvbnRleHQpIHtcbiAgICAgICAgLy8gU2F2ZVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcbiAgICAgICAgICAgIGAke3Jvd3NSZXN9XFxuXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGNvbHNSZXMsIF8sIGNvbHNJKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWA7XG4gICAgICAgICAgICB9LCAnJyl9XCJgXG4gICAgICAgICksICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFZGl0b3JcbiAgICAgICAgLy8gSW4gdGhlIGVkaXRvciBvbmx5LCB3ZSBhZGQgYW4gYWRkaXRpb25hbCBDb2x1bW4gLyBSb3cgdG8gdGhlIEdyaWQgVGVtbHBsYXRlIEFyZWFzLCBcbiAgICAgICAgLy8gdG8gYWNjb3VudCBmb3IgdGhlIGdyaWQgaGVscGVycy5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkocm93Q291bnQpKS5yZWR1Y2UoKHJvd3NSZXMsIF8sIHJvd3NJKSA9PiAoXG4gICAgICAgICAgICBgJHtyb3dzUmVzfVxcblwiJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChjb2xzUmVzLCBfLCBjb2xzSSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb2xzUmVzfSAke2dlbmVyYXRlR3JpZEFyZWEoKytjb2xzSSwgcm93c0kgKyAxKX1gO1xuICAgICAgICAgICAgfSwgJy4nKX1cImBcbiAgICAgICAgKSwgYFwiJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChlZGl0b3JSZXMsIF8sIGkpID0+IGAke2VkaXRvclJlc30gLmAsICcuJyl9XCJgKTtcbiAgICB9XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyhjb250ZXh0LCB0ZW1wbGF0ZXMpIHtcbiAgICBpZihjb250ZXh0KSB7XG4gICAgICAgIC8vIFNhdmVcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuICAgICAgICB9LCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRWRpdG9yXG4gICAgICAgIC8vIEluIHRoZSBlZGl0b3Igb25seSwgd2UgYWRkIGFuIGFkZGl0aW9uYWwgQ29sdW1uIC8gUm93IHRlbXBsYXRlIHRvIGFjY291bnQgZm9yIHRoZSBncmlkIGhlbHBlcnMuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZXMucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc30gJHtjdXJ9YDtcbiAgICAgICAgfSwgJ21pbi1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja3NcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvbmVudHNcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImNvbXBvc2VcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImRhdGFcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImVsZW1lbnRcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImkxOG5cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcInByaW1pdGl2ZXNcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwiLi9zdHlsZS1pbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2gybWxfZ3JpZGFyZWFcIl0gPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiLi9zdHlsZS1pbmRleFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIk5vdGljZSIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiUmFuZ2VDb250cm9sIiwiVGV4dENvbnRyb2wiLCJCdXR0b24iLCJUb29sdGlwIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJ1c2VJbm5lckJsb2Nrc1Byb3BzIiwiQmxvY2tDb250cm9scyIsIkJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyIiwidXNlQmxvY2tQcm9wcyIsInN0b3JlIiwiYmxvY2tFZGl0b3JTdG9yZSIsIl9fIiwiX24iLCJzcHJpbnRmIiwid2l0aERpc3BhdGNoIiwidXNlU2VsZWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVnaXN0ZXIiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzIiwiZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzIiwiR3JpZEVkaXRvciIsInJlZHVjZXIiLCJzdGF0ZSIsInNlbGVjdGVkIiwidmFsdWUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9ucyIsInNldFNlbGVjdGVkR3JpZEFyZWEiLCJzZWxlY3RvcnMiLCJnZXRTZWxlY3RlZEdyaWRBcmVhIiwiR3JpZEVkaXQiLCJhdHRyaWJ1dGVzIiwidmVydGljYWxBbGlnbm1lbnQiLCJjb2xEZWZpbml0aW9ucyIsImNvdW50IiwiY29sQ291bnQiLCJ0ZW1wbGF0ZXMiLCJjb2xUZW1wbGF0ZXMiLCJyb3dEZWZpbml0aW9ucyIsInJvd0NvdW50Iiwicm93VGVtcGxhdGVzIiwiZWRpdGluZyIsInN0eWxlIiwic2V0QWxpZ25tZW50Iiwic2V0R3JpZE5vQ29sc09yUm93cyIsInNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93Iiwic2V0R3JpZEVkaXRpbmciLCJzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkIiwic2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkIiwiZ3JpZENoaWxkcmVuIiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUiLCJmb2N1c1RhcmdldCIsInNldEZvY3VzVGFyZ2V0IiwiY2hpbGRSZXF1ZXN0ZWRFZGl0IiwiZmluZCIsImNoaWxkIiwicmVxdWVzdEVkaXQiLCJpbmNsdWRlcyIsIm5ld0dyaWRBcmVhVGV4dCIsImNoaWxkcmVuIiwiaW5uZXJCbG9ja3NQcm9wcyIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJvbktleVByZXNzIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsImVkaXRLZXlzIiwiZXhpdEtleXMiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwib3RoZXIiLCJkZWZpbml0aW9ucyIsImNvdW50RGVsdGEiLCJ1bml0Iiwic3BsaWNlIiwibGVuZ3RoIiwiZnJvbSIsImluZGV4IiwidGVtcGxhdGUiLCJnZXRCbG9jayIsInBhcmVudHMiLCJuYW1lIiwic2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyIiwicmVkdWNlIiwicmVzIiwicGFyZW50SWQiLCJzZWxmIiwicGFyZW50QmxvY2siLCJwdXNoIiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImN1ciIsInN0YWNraW5nT3JkZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiLCJDb2xzUm93SGVscGVySW5uZXIiLCJHcmlkSGVscGVyTGFiZWwiLCJsYWJsZVR5cGUiLCJsYWJsZUNvdW50Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJsYWJsZUluZGV4IiwiR3JpZEhlbHBlckNlbGwiLCJjZWxsTGFiZWwiLCJjZWxsWCIsImNlbGxZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlRW50ZXIiLCJncmlkQXJlYSIsIkdyaWRIZWxwZXJBcHBlbmRlciIsImFyZWEiLCJjcmVhdGVCbG9jayIsInVzZVJlZkVmZmVjdCIsImdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCIsImRvR3JpZEhlbHBlclNlbGVjdGlvbiIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJzdGFydFkiLCJ5IiwiZW5kWCIsImVuZFkiLCJzdGFydCIsIk1hdGgiLCJtaW4iLCJlbmQiLCJtYXgiLCJwYXJzZWQiLCJkb0dyaWRIZWxwZXJTYXZlIiwiZ3JpZENsaWVudElkIiwidGFyZ2V0IiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJncmlkSGVscGVySXNEcmF3aW5nIiwic2V0R3JpZEhlbHBlcklzRHJhd2luZyIsImdyaWRIZWxwZXJDYW5TYXZlIiwic2V0R3JpZEhlbHBlckNhblNhdmUiLCJncmlkSGVscGVyQ29vcmRSZXMiLCJzZXRHcmlkSGVscGVyQ29vcmRSZXMiLCJyZWYiLCJlbGVtZW50Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiY2VsbEluZGV4IiwiZmxvb3IiLCJkb2N1bWVudCIsImZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3NzU2FmZUJhc2U2NCIsInN0cmluZyIsImJ0b2EiLCJyZXBsYWNlIiwiZ2VuZXJhdGVHcmlkQXJlYSIsImNvbnRleHQiLCJyb3dzUmVzIiwicm93c0kiLCJjb2xzUmVzIiwiY29sc0kiLCJlZGl0b3JSZXMiXSwic291cmNlUm9vdCI6IiJ9