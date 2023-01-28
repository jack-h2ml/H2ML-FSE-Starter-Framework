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
      gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateAreas)(0, colCount, rowCount) /* 0 === 'editor' */,
      gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(0, colTemplates) /* 0 === 'editor' */,
      gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(0, rowTemplates) /* 0 === 'editor' */
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
    },
    ref: ref
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
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_local_components_GridEditor__WEBPACK_IMPORTED_MODULE_9__.GridEditor, {
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
    children,
    area
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid-grid-area-appender",
    area: area ? area : null,
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid","version":"0.1.0","title":"Grid","category":"design","description":"Display content in a Grid, across multiple Grid Areas, adding blocks to each Grid Area.","textdomain":"h2ml","keywords":["h2ml","grid"],"attributes":{"verticalAlignment":{"type":"string"},"colDefinitions":{"type":"object","default":{"count":3,"templates":["1fr","1fr","1fr"]}},"rowDefinitions":{"type":"object","default":{"count":4,"templates":["max-content","max-content","max-content","max-content"]}}},"supports":{"anchor":true,"align":["wide","full"],"reusable":true,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":["horizontal","vertical"],"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true,"margin":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9pY29ucy9idWlsZC1tb2R1bGUvbGlicmFyeS9ncmlkLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zYXZlLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja0VkaXRvclwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb25lbnRzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJjb21wb3NlXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJkYXRhXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJwcmltaXRpdmVzXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIkB3b3JkcHJlc3MvZWxlbWVudFwiO1xuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgU1ZHLCBQYXRoIH0gZnJvbSAnQHdvcmRwcmVzcy9wcmltaXRpdmVzJztcbmNvbnN0IGdyaWQgPSBjcmVhdGVFbGVtZW50KFNWRywge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCBjcmVhdGVFbGVtZW50KFBhdGgsIHtcbiAgZDogXCJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bS03LjggMTYuNUg1Yy0uMyAwLS41LS4yLS41LS41di02LjJoNi44djYuN3ptMC04LjNINC41VjVjMC0uMy4yLS41LjUtLjVoNi4ydjYuN3ptOC4zIDcuOGMwIC4zLS4yLjUtLjUuNWgtNi4ydi02LjhoNi44VjE5em0wLTcuOGgtNi44VjQuNUgxOWMuMyAwIC41LjIuNS41djYuMnpcIixcbiAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICBjbGlwUnVsZTogXCJldmVub2RkXCJcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGdyaWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncmlkLmpzLm1hcCIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHROb3RpY2UsXG5cdFBhbmVsLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdEJ1dHRvbixcblx0VG9vbHRpcFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0QmxvY2tDb250cm9scyxcblx0QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxuXHRzcHJpbnRmXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHdpdGhEaXNwYXRjaCxcblx0dXNlU2VsZWN0LFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQgeyBcblx0dXNlU3RhdGUsXG5cdHVzZUVmZmVjdFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuXG5pbXBvcnQgeyBcblx0Y3JlYXRlUmVkdXhTdG9yZSwgXG5cdHJlZ2lzdGVyXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cblxuaW1wb3J0IHtcblx0dXNlUmVmRWZmZWN0IFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7XG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMsXG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyxcbn0gZnJvbSAnLi91dGlscy5qcydcblxuaW1wb3J0IHsgR3JpZEVkaXRvciB9IGZyb20gJy4vbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yJ1xuXG4vKlxuKiBSZWR1eCBzdG9yZSBodG1sRm9yIGhvbGRpbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBoMm1sL2dyaWQtYXJlYSwgXG4qIFRoaXMgaXMgdXNlZCB0byBlbnN1cmUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBoMm1sL2dyaWQtYXJlYSBpcyB2aXN1YWxseSBvbiB0b3AgaW4gdGhlIGVkaXRvci5cbiovXG5cbnJlZ2lzdGVyKGNyZWF0ZVJlZHV4U3RvcmUoXCJoMm1sL2dyaWRfYXJlYV9zdG9yZVwiLCB7XG5cdHJlZHVjZXIoc3RhdGUgPSB7XG5cdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdHZhbHVlOiBudWxsXG5cdFx0fSxcblx0fSwgYWN0aW9uKSB7XG5cdFx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdFx0Y2FzZSBcIlVQREFURV9TRUxFQ1RFRF9HUklEX0FSRUFcIjoge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdFx0XHQuLi5zdGF0ZS5zZWxlY3RlZCxcblx0XHRcdFx0XHRcdHZhbHVlOiBhY3Rpb24udmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblx0YWN0aW9uczoge1xuXHRcdHNldFNlbGVjdGVkR3JpZEFyZWEodmFsdWUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHR5cGU6IFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiLFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0fTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdG9yczoge1xuXHRcdGdldFNlbGVjdGVkR3JpZEFyZWEoc3RhdGUpIHtcblx0XHRcdHJldHVybiBzdGF0ZS5zZWxlY3RlZC52YWx1ZTtcblx0XHR9XG5cdH1cbn0pKTtcblxuLyoqXG4gKiBUaGUgQ29kZS5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdCA9ICh7XG5cdC8vIEF0dHJpYnV0ZXMuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR2ZXJ0aWNhbEFsaWdubWVudCxcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH0sXG5cdFx0ZWRpdGluZ1xuXHR9LFxuXHQvLyBBdHRyaWJ1dGUgU2V0dGVycy5cblx0c2V0QWxpZ25tZW50LFxuXHRzZXRHcmlkTm9Db2xzT3JSb3dzLFxuXHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyxcblx0c2V0R3JpZEVkaXRpbmcsXG5cdC8vIFJlZHV4IFNldHRlcnMuXG5cdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIsXG5cdC8vIE90aGVyLlxuXHRjbGllbnRJZFxufSkgPT4ge1xuXHQvL1xuXHQvLyBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgQmxvY2ssIGFuZCBpdHMgY2hpbGRyZW4uIFxuXHQvLyAoVXNlZCBodG1sRm9yIHNldHRpbmcgdGhlIGVkaXRvciBzdGFja2luZyBvcmRlciwgYW5kIGFkZGluZyAvIGVkaXRpbmcgR3JpZC1BcmVhJ3MpXG5cdC8vXG5cblx0Y29uc3QgeyBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCwgZ3JpZENoaWxkcmVuIH0gPSB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzLCBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQsIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gVmFyaWFibGVzLlxuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCA9IGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCgpO1xuXHRcdGNvbnN0IHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCA9IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCA/IGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgWydoMm1sL2dyaWQnXSwgdHJ1ZSlbMF0gOiBmYWxzZTtcblx0XHRjb25zdCBncmlkQ2hpbGRyZW4gPSBnZXRCbG9ja3MoY2xpZW50SWQpO1xuXHRcdC8vIFJldHVybiBWYWx1ZXMuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCxcblx0XHRcdHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCxcblx0XHRcdGdyaWRDaGlsZHJlblxuXHRcdH07XG5cdH0sIFtdKTtcblxuXHQvL1xuXHQvLyBIYW5kbGUgdXBkYXRpbmcgdGhlIHN0YWNraW5nIG9yZGVyIGh0bWxGb3IgYW55IGN1cnJlbnRseSBzZWxlY3RlZCBHcmlkIEFyZWEncyB3aXRoaW4gdGhlIGVkaXRvci5cblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpO1xuXHR9LCBbc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkXSk7XG5cblx0Ly9cblx0Ly8gZm9jdXNUYXJnZXQgc3RhdGUsIHRoaXMgaXMgdXNlZCB0byBlbnN1cmUgd2UgYXV0by1mb2N1cyBvbiB0aGUgY29ycmVjdCBHcmlkIEFyZWEgd2hlbiBtYWtpbmcgY2hhbmdlcyB0byB0aGUgR3JpZC5cblx0Ly9cblxuXHRjb25zdCBbZm9jdXNUYXJnZXQsIHNldEZvY3VzVGFyZ2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdC8vIFxuXHQvLyBJZiBlaXRoZXIgb2YgdGhlIEdyaWQncyB0b3RhbCBudW1iZXIgb2YgY2hpbGRyZW4gY2hhbmdlcyAoYWRkaW5nKSwgb3IgaWYgdGhlICdyZXF1ZXN0RWRpdCcgYXR0cmlidXRlIG9mIG9uZSBvZiB0aGUgR3JpZCdzIFxuXHQvLyBjaGFuZ2VzICh1cGRhdGluZykgdGhlbiBkbyB0aGUgZm9sbG93aW5nOiBcblx0Ly8gXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBhbHJlYWR5IHNldCB0aGVuIHdlIGhhdmUganVzdCBmaW5pc2hlZCBlZGl0aW5nLCBhbmQgd2Ugc2hvdWxkIGRldGVybWluZSBpZiB3ZSBuZWVkIFxuXHQvLyB0byBmb2N1cyBvbiBhbiB1cGRhdGVkIEdyaWQgQXJlYS4gSW4gZWl0aGVyIGNhc2UgcmVzZXQgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIHRvIGZhbHNlLlxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgaXMgTk9UIHNldCB0aGVuIGRldGVybWluZSBpZiBhbnkgb2YgdGhlIEdyaWQncyBHcmlkLUFyZWEncyBhcmUgcmVxdWVzdGluZyBhbiBlZGl0LiBcblx0Ly8gSWYgc28sIGNhbGwgc2V0R3JpZEVkaXRpbmcuXG5cdC8vXG5cdC8vIFRoaXMgZG9lcyBub3QgaGFuZGxlIGFkZGluZyBhIG5ldyBncmlkIGFyZWEsIHRoYXQgaXMgZG9uZSBieSB0aGUgR3JpZCBpdHNlbGYgdGhyb3VnaCB0aGUgb25LZXlQcmVzcyBldmVudCwgb3IgaXQgaXMgXG5cdC8vIGRvbmUgYnkgdGhlIGdyaWRFZGl0b3IsIHVzaW5nIHRoZSBCbG9ja0FwcGVuZGVyIGJ1dHRvbi4gXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZighZWRpdGluZykge1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIGEgR3JpZCBBcmVhIGlzIHJlcXVlc3RpbmcgdG8gYmUgdXBkYXRlZC4gXG5cdFx0XHRjb25zdCBjaGlsZFJlcXVlc3RlZEVkaXQgPSBncmlkQ2hpbGRyZW4uZmluZChjaGlsZCA9PiBjaGlsZC5hdHRyaWJ1dGVzLnJlcXVlc3RFZGl0KTtcblx0XHRcdGlmKGNoaWxkUmVxdWVzdGVkRWRpdCkgc2V0R3JpZEVkaXRpbmcoY2hpbGRSZXF1ZXN0ZWRFZGl0KTtcblx0XHR9XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdC8vIFNldCB0aGUgZm9jdXNUYXJnZXQgaWYgbmVlZGVkLiBcblx0XHRcdGlmKGVkaXRpbmc/LmNsaWVudElkKSBzZXRGb2N1c1RhcmdldChlZGl0aW5nKTtcblx0XHRcdC8vIFJlc2V0IHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZS4gXG5cdFx0XHRzZXRHcmlkRWRpdGluZyhmYWxzZSk7XG5cdFx0fVxuXHR9LCBbZ3JpZENoaWxkcmVuXSk7XG5cblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGNoYW5nZXMgdG8gZmFsc2UsIGFuZCBhIGZvY3VzVGFyZ2V0IGlzIHNldCwgdGhlbiAuZm9jdXMoKSBvbiB0aGUgZm9jdXNUYXJnZXQncyBET00gZWxlbWVudCxcblx0Ly8gdGhlbiByZXNldCB0aGUgZm9jdXNUYXJnZXQgdG8gbnVsbC5cblx0Ly9cblx0XG5cdGNvbnN0IHJlZiA9IHVzZVJlZkVmZmVjdCgoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWxlbWVudDtcblx0XHRpZihlZGl0aW5nKSB7XG5cdFx0XHRvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJsb2NrPVwiJHtjbGllbnRJZH1cIl1gKS5mb2N1cygpO1xuXHRcdH0gZWxzZSBpZihmb2N1c1RhcmdldCkge1xuXHRcdFx0b3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Zm9jdXNUYXJnZXQuY2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHRcdHNldEZvY3VzVGFyZ2V0KG51bGwpXG5cdFx0fVxuXHR9LCBbZWRpdGluZ10pO1xuXG5cdC8vXG5cdC8vIFJlZ2lzdGVyIHRoZSBCbG9jayAvIElubmVyQmxvY2sgUHJvcHMuXG5cdC8vXG5cblx0Y29uc3QgbmV3R3JpZEFyZWFUZXh0ID0gX18oJ0FkZCBuZXcgR3JpZCBBcmVhJywgJ2gybWwnKTtcblx0Y29uc3QgeyBjaGlsZHJlbiwgLi4uaW5uZXJCbG9ja3NQcm9wcyB9ID0gdXNlSW5uZXJCbG9ja3NQcm9wcyhcblx0XHR1c2VCbG9ja1Byb3BzKHtcblx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUFyZWFzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKDAsIGNvbENvdW50LCByb3dDb3VudCkgLyogMCA9PT0gJ2VkaXRvcicgKi8sXG5cdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygwLCBjb2xUZW1wbGF0ZXMpIC8qIDAgPT09ICdlZGl0b3InICovLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMCwgcm93VGVtcGxhdGVzKSAvKiAwID09PSAnZWRpdG9yJyAqL1xuXHRcdFx0fSxcblx0XHRcdG9uS2V5UHJlc3M6IChlKSA9PiB7XG5cdFx0XHRcdGlmKGNsaWVudElkID09PSBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQpIHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdC8vIFZhcmlhYmxlcy5cblx0XHRcdFx0XHRjb25zdCB7IGtleSB9ID0gZTtcblx0XHRcdFx0XHRjb25zdCBlZGl0S2V5cyA9IFsnYScsICdBJ107XG5cdFx0XHRcdFx0Y29uc3QgZXhpdEtleXMgPSBbJ2MnLCAnQyddO1xuXHRcdFx0XHRcdC8vIEJpbmQga2V5cyB0byBhdHRyaWJ1dGUgc2V0dGVycy5cblx0XHRcdFx0XHRpZiAoZWRpdEtleXMuaW5jbHVkZXMoa2V5KSAmJiAhZWRpdGluZykgc2V0R3JpZEVkaXRpbmcodHJ1ZSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZXhpdEtleXMuaW5jbHVkZXMoa2V5KSkge1xuXHRcdFx0XHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZWY6IHJlZlxuXHRcdH0pLCB7XG5cdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ2gybWwvZ3JpZC1hcmVhJ10sXG5cdFx0fVxuXHQpO1xuXG5cdC8vXG5cdC8vIFRoZSBKU1guXG5cdC8vXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0XHRcdDxCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtzZXRBbGlnbm1lbnR9XG5cdFx0XHRcdFx0dmFsdWU9e3ZlcnRpY2FsQWxpZ25tZW50fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgU2V0dGluZ3MnLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17dHJ1ZX0+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oYEdyaWQgYXJlYSBudW1iZXIgb2YgQ29sdW1uc2AsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbENvdW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkTm9Db2xzT3JSb3dzKDAsIHZhbHVlKX0gLy8gMCA9PT0gJ2NvbCdcblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0X19uZXh0SGFzTm9NYXJnaW5Cb3R0b21cblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oYEdyaWQgYXJlYSBudW1iZXIgb2YgUm93c2AsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkTm9Db2xzT3JSb3dzKDEsIHZhbHVlKX0gLy8gMSA9PT0gJ3Jvdydcblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7KGNvbENvdW50ICogcm93Q291bnQpID4gNDkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxOb3RpY2Ugc3RhdHVzPVwid2FybmluZ1wiIGlzRGlzbWlzc2libGU9e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J1RoZSBudW1iZXIgb2YgY2VsbHMgaXMgZ3JlYXRlciB0aGFuIHRoZSByZWNvbW1lbmRlZCBsaW1pdC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnaDJtbCdcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9Ob3RpY2U+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdHcmlkIENvbHVtbnMgU2V0dGluZ3MnLCAnaDJtbCcpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHR7Wy4uLkFycmF5KGNvbENvdW50KV0ubWFwKChfLCBpKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Bjb2wtc2V0dGluZ3MtJHtpfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17c3ByaW50ZihfXyhcIkNvbHVtbiAlMSRkIFdpZHRoXCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMCwgaSwgdmFsdWUgLyogMCA9PT0gJ2NvbCcgKi8pfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBSb3dzIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0e1suLi5BcnJheShyb3dDb3VudCldLm1hcCgoXywgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgcm93LXNldHRpbmdzLSR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3NwcmludGYoX18oXCJSb3cgJTEkZCBIZWlnaHRcIiwgJ2gybWwnKSwgaSArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Jvd1RlbXBsYXRlc1tpXX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdygxLCBpLCB2YWx1ZSkgLyogMCA9PT0gJ3JvdycgKi99XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PC9QYW5lbD5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfT5cblx0XHRcdFx0PEdyaWRFZGl0b3Jcblx0XHRcdFx0XHRncmlkQ2xpZW50SWQ9e2NsaWVudElkfVxuXHRcdFx0XHRcdGNvbENvdW50PXtjb2xDb3VudH1cblx0XHRcdFx0XHRyb3dDb3VudD17cm93Q291bnR9XG5cdFx0XHRcdFx0ZWRpdGluZz17ZWRpdGluZ31cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWdyaWQtYXJlYXNcIj5cblx0XHRcdFx0XHR7IShlZGl0aW5nKSAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXItd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkTmV3R3JpZEFyZWFDb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb29sdGlwIHRleHQ9e25ld0dyaWRBcmVhVGV4dH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkTmV3R3JpZEFyZWFXcmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJhZGROZXdHcmlkQXJlYVwiPntuZXdHcmlkQXJlYVRleHR9PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImFkZE5ld0dyaWRBcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEdyaWRFZGl0aW5nKHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPjxwYXRoIGQ9XCJNMTggMTEuMmgtNS4yVjZoLTEuNnY1LjJINnYxLjZoNS4yVjE4aDEuNnYtNS4ySDE4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLypcbiAqIFRoZSBCbG9jayBBY3Rpb25zLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0V3JhcHBlciA9IHdpdGhEaXNwYXRjaChcblx0KGRpc3BhdGNoLCBvd25Qcm9wcywgcmVnaXN0cnkpID0+ICh7XG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGhlIEdyaWQgQXJlYSdzIFdQIGFsaWdubWVudCAoV2lkZSwgRnVsbCBldGMpLlxuXHRcdC8vXG5cdFx0c2V0QWxpZ25tZW50KHZlcnRpY2FsQWxpZ25tZW50KSB7XG5cdFx0XHRjb25zdCB7IHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHZlcnRpY2FsQWxpZ25tZW50IH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgbnVtYmVyIG9mIGNvbHVtbnMgLyByb3dzLCBjbGVhbiB1cCB0aGUgcmVsZXZhbnQgdGVtcGxhdGVzLCBhbmQgZmluYWxseSBzZXQgdGhlIHRvdGFsIG51bWJlciBvZiBHcmlkIEFyZWEncy5cblx0XHQvL1xuXHRcdHNldEdyaWROb0NvbHNPclJvd3ModHlwZSwgY291bnQpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgc2V0dGluZyBDb2x1bW5zIG9yIFJvd3MsIGFuZCBhbHNvIGdldCB0aGUgb3Bwb3NpdGUuXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWydjb2wnLCAncm93J107XG5cdFx0XHRjb25zdCBvdGhlciA9IG9wdGlvbnNbdHlwZSBeIDFdO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Y29uc3QgY291bnREZWx0YSA9IGNvdW50IC0gZGVmaW5pdGlvbnMuY291bnQ7XG5cdFx0XHQvLyBDbGVhbiB1cCBDb2x1bW4gLyBSb3cgdGVtcGxhdGVzLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzLnNwbGljZSguLi5jb3VudERlbHRhID4gMCA/XG5cdFx0XHRcdFtkZWZpbml0aW9ucy50ZW1wbGF0ZXMubGVuZ3RoLCAwLCAuLi5BcnJheS5mcm9tKEFycmF5KGNvdW50RGVsdGEpKS5tYXAoXyA9PiB1bml0KV0gOiAvLyBBZGRpbmcgQ29sdW1ucyAvIFJvd3Ncblx0XHRcdFx0W2NvdW50LCBkZWZpbml0aW9ucy50ZW1wbGF0ZXMubGVuZ3RoIC0gMV0gLy8gUmVtb3ZpbmcgQ29sdW1ucyAvIFJvd3Ncblx0XHRcdCk7XG5cdFx0XHQvLyBVcGRhdGUgdGhlIGRlZmluaXRpb24ncyBjb3VudCB2YWx1ZSBhbmQgdGhlbiBzZXQgdGhlIGF0dHJidXRlLiBcblx0XHRcdGRlZmluaXRpb25zLmNvdW50ID0gY291bnQ7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgW2Ake3R5cGV9RGVmaW5pdGlvbnNgXTogZGVmaW5pdGlvbnMgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFVwZGF0ZSB0ZW1wbGF0ZXMgaHRtbEZvciBzcGVjaWZpYyBDb2x1bW5zIC8gUm93cy5cblx0XHQvL1xuXHRcdHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KHR5cGUsIGluZGV4LCB0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdC8vIERldGVybWluZSBpZiB3ZSdyZSBnZW5lcmF0aW5nIGEgQ29sdW1ucyBvciBSb3dzIHRlbXBsYXRlXG5cdFx0XHRjb25zdCBvcHRpb25zID0gWydjb2wnLCAncm93J107XG5cdFx0XHR0eXBlID0gb3B0aW9uc1t0eXBlXTtcblx0XHRcdC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIGV4aXN0aW5nIENvbHVtbiAvIFJvdyBkZWZpbml0aW9uLlxuXHRcdFx0Y29uc3QgZGVmaW5pdGlvbnMgPSB7IC4uLmF0dHJpYnV0ZXNbYCR7dHlwZX1EZWZpbml0aW9uc2BdIH07XG5cdFx0XHQvLyBVcGRhdGUgdGhlIGdpdmVuIENvbHVtbiAvIFJvdyB0ZW1wbGF0ZSBhbmQgc2V0IHRoZSBhdHRyaWJ1dGUuXG5cdFx0XHRjb25zdCB1bml0ID0gdHlwZSA9PT0gJ2NvbCcgPyAnMWZyJyA6ICdtYXgtY29udGVudCc7XG5cdFx0XHRkZWZpbml0aW9ucy50ZW1wbGF0ZXNbaW5kZXhdID0gdGVtcGxhdGUgPyB0ZW1wbGF0ZSA6IHVuaXQ7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgW2Ake3R5cGV9RGVmaW5pdGlvbnNgXTogZGVmaW5pdGlvbnMgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFNldCB0aGUgR3JpZCAnZWRpdGluZycgYXR0cmlidXRlXG5cdFx0Ly9cblx0XHRzZXRHcmlkRWRpdGluZyh2YWx1ZSkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBlZGl0aW5nOiB2YWx1ZSB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gV2hlbiBhIEdyaWQtQXJlYSBvciBhbnkgb2YgaXQncyBjaGlsZHJlbiBhcmUgc2VsY3RlZCwgdmlzdWFsbHkgbW92ZSB0aGF0IGl0ZW0gdG8gdGhlIHRvcCBvZiB0aGUgXG5cdFx0Ly8gc3RhY2tpbmcgY29udGV4dC4gKHRoaXMgaXMgbm90IHNhdmVkIGFzIGFuIGF0dHJpYnV0ZSwgYW5kIGlzIHB1cmVseSBodG1sRm9yIGNvbnZlbmllbmNlIGluIHRoZSBlZGl0b3IpLlxuXHRcdC8vXG5cdFx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcihzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCkge1xuXHRcdFx0Y29uc3QgeyBjbGllbnRJZCB9ID0gb3duUHJvcHM7XG5cdFx0XHRjb25zdCB7IHNldFNlbGVjdGVkR3JpZEFyZWEgfSA9IGRpc3BhdGNoKCdoMm1sL2dyaWRfYXJlYV9zdG9yZScpO1xuXHRcdFx0aWYgKHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCA9PT0gY2xpZW50SWQpIHtcblx0XHRcdFx0Y29uc3QgeyBnZXRCbG9jaywgZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUsIGdldEJsb2NrcyB9ID0gcmVnaXN0cnkuc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHRjb25zdCBwYXJlbnRzID0gZ2V0QmxvY2soc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkKS5uYW1lICE9PSAnaDJtbC9ncmlkLWFyZWEnID9cblx0XHRcdFx0XHRnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIFsnaDJtbC9ncmlkJywgJ2gybWwvZ3JpZC1hcmVhJ10sIHRydWUpIDpcblx0XHRcdFx0XHRbc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCAuLi5nZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIFsnaDJtbC9ncmlkJywgJ2gybWwvZ3JpZC1hcmVhJ10sIHRydWUpXTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyID0gcGFyZW50cy5yZWR1Y2UoKHJlcywgcGFyZW50SWQsIGksIHNlbGYpID0+IHtcblx0XHRcdFx0XHRsZXQgcGFyZW50QmxvY2sgPSBnZXRCbG9jayhwYXJlbnRJZCk7XG5cdFx0XHRcdFx0aWYgKHBhcmVudEJsb2NrLm5hbWUgPT09ICdoMm1sL2dyaWQtYXJlYScpIHtcblx0XHRcdFx0XHRcdHJlcy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0Y2xpZW50SWQ6IHBhcmVudElkLFxuXHRcdFx0XHRcdFx0XHRlZGl0b3JTdGFja2luZ09yZGVyOiBnZXRCbG9ja3Moc2VsZlsrK2ldKS5yZWR1Y2UoKHJlcywgY3VyKSA9PiBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyID49IHJlcyA/IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgKyAxIDogcmVzLCAwKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZXM7XG5cdFx0XHRcdH0sIFtdKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh7XG5cdFx0XHRcdFx0Y2xpZW50SWQ6IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCxcblx0XHRcdFx0XHRwYXJlbnRzOiBzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKCFzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYShudWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG4pKEdyaWRFZGl0KTtcblxuLypcbiAqIEV4cG9ydCB0aGUgQmxvY2suXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdChwcm9wcykge1xuXHRyZXR1cm4gPEdyaWRFZGl0V3JhcHBlciB7Li4ucHJvcHN9IC8+O1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgZ3JpZCBhcyBpY29uIH0gZnJvbSAnQHdvcmRwcmVzcy9pY29ucyc7XG5cbi8qKlxuICogU3R5bGVcbiAqL1xuXG5pbXBvcnQgJy4vLi4vLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9zdHlsZS5zY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuLy4uL2Jsb2NrLmpzb24nO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBTYXZlIGZyb20gJy4vc2F2ZSdcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgQmxvY2tcbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YS5uYW1lLCB7XG5cdC8vXG5cdGljb24sXG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6IFNhdmUsXG59KTtcblxuIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0X18sXG5cdF9uLFxuXHRzcHJpbnRmXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIENvbXBvbmVudHNcbiAqL1xuXG5leHBvcnQgY29uc3QgQ29sc1Jvd0hlbHBlcklubmVyID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRpbmRleFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8c3Bhbj57aW5kZXh9PC9zcGFuPlxufTtcblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJMYWJlbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0bGFibGVUeXBlLFxuXHRcdGxhYmxlQ291bnRcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BncmlkLWNvbHMtcm93cy1oZWxwZXItd3JhcGB9PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgZ3JpZC0ke2xhYmxlVHlwZS5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKX1zLWhlbHBlcmB9IC8+XG5cdFx0e0FycmF5LmZyb20oQXJyYXkobGFibGVDb3VudCkpLm1hcCgoXywgbGFibGVJbmRleCkgPT4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRrZXk9e2Ake2xhYmxlVHlwZX0tbGFibGUtY2VsbC0ke2xhYmxlSW5kZXh9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1jb2xzLXJvd3MtaGVscGVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRbYGdyaWQke2xhYmxlVHlwZX1TdGFydGBdOiArK2xhYmxlSW5kZXggKyAxLFxuXHRcdFx0XHRcdFtgZ3JpZCR7bGFibGVUeXBlID09PSAnQ29sdW1uJyA/ICdSb3cnIDogJ0NvbHVtbid9U3RhcnRgXTogMSxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFRvb2x0aXAgdGV4dD17c3ByaW50ZihfXygnJTIkcyAlMSRkJywgJ2gybWwnKSwgbGFibGVJbmRleCwgbGFibGVUeXBlKX0+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxzcGFuPntsYWJsZUluZGV4fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0PC9kaXY+XG5cdFx0KSl9XG5cdDwvZGl2PlxufVxuXG5leHBvcnQgY29uc3QgR3JpZEhlbHBlckNlbGwgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGNlbGxMYWJlbCxcblx0XHRjZWxsWCxcblx0XHRjZWxsWSxcblx0XHRvbk1vdXNlRG93bixcblx0XHRvbk1vdXNlRW50ZXIsXG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxkaXZcblx0XHRjbGFzc05hbWU9XCJncmlkLWFyZWEtaGVscGVyXCJcblx0XHR7Li4ueyBvbk1vdXNlRG93biwgb25Nb3VzZUVudGVyIH19XG5cdFx0ZGF0YS14Y29vcmRzPXtjZWxsWH1cblx0XHRkYXRhLXljb29yZHM9e2NlbGxZfVxuXHRcdHN0eWxlPXt7XG5cdFx0XHRncmlkQXJlYTogYCR7Y2VsbFkgKyAxfSAvICR7Y2VsbFggKyAxfSAvICR7Y2VsbFkgKyAyfSAvICR7Y2VsbFggKyAyfWBcblx0XHR9fVxuXHQ+XG5cdFx0e2Ake2NlbGxMYWJlbH1gfSA8c3ViPntgKCR7Y2VsbFh9LCAke2NlbGxZfSlgfTwvc3ViPlxuXHQ8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJBcHBlbmRlciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0c3R5bGUsXG5cdFx0Y2hpbGRyZW4sXG5cdFx0YXJlYVxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0YXJlYT17YXJlYSA/IGFyZWEgOiBudWxsfVxuXHRcdFx0ey4uLnsgc3R5bGUgfX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcbn0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHtcblx0c2VsZWN0LFxuXHRkaXNwYXRjaFxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbXBvcnQge1xuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7IGNyZWF0ZUJsb2NrIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdXNlUmVmRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRHcmlkSGVscGVyTGFiZWwsXG5cdEdyaWRIZWxwZXJDZWxsLFxuXHRHcmlkSGVscGVyQXBwZW5kZXJcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMuanMnXG5cbi8qKlxuKiBFdmVudCBjYWxsYmFjayBGdW5jdGlvbiBmb3Igc3RhcnRpbmcgLyB1cGRhdGluZyB0aGUgc2VsZWN0aW5nIG9mIGEgR3JpZC1BcmVhIEFyZWFcbiovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNlbGVjdGlvbiA9IChlLCBjb29yZHMsIHJlcykgPT4ge1xuXHQvLyBSZXNldCB0aGUgZ3JpZCBhcmVhIGNvb3JkcyBvbiBtb3VzZWRvd24uXG5cdGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nKSByZXMgPSBudWxsO1xuXHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgdXBkYXRpbmcgYW4gZXhpc3Rpbmcgc2VsZWN0aW9uIChkcmFnZ2luZyksIG9yIHN0YXJ0aW5nIGEgbmV3IG9uZSAoY2xpY2tpbmcpLlxuXHRjb25zdCBzdGFydFggPSByZXM/LnN0b3JlPy54ID8gcmVzPy5zdG9yZT8ueCA6IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBzdGFydFkgPSByZXM/LnN0b3JlPy55ID8gcmVzPy5zdG9yZT8ueSA6IE51bWJlcihjb29yZHMuY2VsbFkpO1xuXHRjb25zdCBlbmRYID0gTnVtYmVyKGNvb3Jkcy5jZWxsWCk7XG5cdGNvbnN0IGVuZFkgPSBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Ly8gQ2FsY3VsYXRlIGFuZCBzdG9yZSB0aGUgbmV3IENvb3JkcyB2YWx1ZXMuXG5cdHJlcyA9IHtcblx0XHRzdG9yZToge1xuXHRcdFx0eDogc3RhcnRYLFxuXHRcdFx0eTogc3RhcnRZLFxuXHRcdH0sXG5cdFx0c3RhcnQ6IHtcblx0XHRcdHg6IE1hdGgubWluKHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1pbihzdGFydFksIGVuZFkpXG5cdFx0fSxcblx0XHRlbmQ6IHtcblx0XHRcdHg6IE1hdGgubWF4KHN0YXJ0WCwgZW5kWCksXG5cdFx0XHR5OiBNYXRoLm1heChzdGFydFksIGVuZFkpLFxuXHRcdH1cblx0fTtcblx0cmVzLnBhcnNlZCA9IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChyZXMuc3RhcnQueCwgcmVzLnN0YXJ0LnksIHJlcy5lbmQueCwgcmVzLmVuZC55KTtcblx0cmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBTYXZlIEZ1bmN0aW9uXG4gKi9cblxuY29uc3QgZG9HcmlkSGVscGVyU2F2ZSA9IChncmlkQ2xpZW50SWQsIHRhcmdldCwgY29vcmRzKSA9PiB7XG5cdGlmICh0YXJnZXQuY2xpZW50SWQpIHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7dXBkYXRlQmxvY2tBdHRyaWJ1dGVzfSA9IGRpc3BhdGNoKGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIFVwZGF0ZSB0aGUgcmVxdWVzdGVkIEdyaWQgQXJlYS5cblx0XHR1cGRhdGVCbG9ja0F0dHJpYnV0ZXModGFyZ2V0LmNsaWVudElkLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0cmVxdWVzdEVkaXQ6IGZhbHNlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRjb25zdCB7IGluc2VydEJsb2NrIH0gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBBZGRpbmcgYSBuZXcgR3JpZCBBcmVhLlxuXHRcdGNvbnN0IHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXIsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleFxuXHRcdH0gPSBnZXRCbG9ja3MoZ3JpZENsaWVudElkKS5yZWR1Y2UoXG5cdFx0XHQocmVzLCBjdXIsIGluZCkgPT4ge1xuXHRcdFx0XHRyZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlciA9IGN1ci5hdHRyaWJ1dGVzLnN0YWNraW5nT3JkZXIgPj0gcmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyO1xuXHRcdFx0XHRyZXMubmV4dENoaWxkSW5kZXggPSBpbmQgKyAxO1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fSwge1xuXHRcdFx0bmV4dENoaWxkU3RhY2tpbmdPcmRlcjogMCxcblx0XHRcdG5leHRDaGlsZEluZGV4OiAwXG5cdFx0fVxuXHRcdCk7XG5cdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgR3JpZCBBcmVhLlxuXHRcdGluc2VydEJsb2NrKGNyZWF0ZUJsb2NrKCdoMm1sL2dyaWQtYXJlYScsIHtcblx0XHRcdGdyaWRBcmVhOiBjb29yZHMsXG5cdFx0XHRzdGFja2luZ09yZGVyOiBuZXh0Q2hpbGRTdGFja2luZ09yZGVyXG5cdFx0fSksIG5leHRDaGlsZEluZGV4LCBncmlkQ2xpZW50SWQpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEpTWFxuICovXG5cbmV4cG9ydCBjb25zdCBHcmlkRWRpdG9yID0gKHByb3BzKSA9PiB7XG5cdC8vIFByb3BlcnRpZXMuXG5cdGNvbnN0IHtcblx0XHRncmlkQ2xpZW50SWQsXG5cdFx0Y29sQ291bnQsXG5cdFx0cm93Q291bnQsXG5cdFx0ZWRpdGluZ1xuXHR9ID0gcHJvcHM7XG5cdC8vIFN0YXRlIE1hbmFnZXJzLlxuXHRjb25zdCBbZ3JpZEhlbHBlcklzRHJhd2luZywgc2V0R3JpZEhlbHBlcklzRHJhd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ2FuU2F2ZSwgc2V0R3JpZEhlbHBlckNhblNhdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNvb3JkUmVzLCBzZXRHcmlkSGVscGVyQ29vcmRSZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cdC8vXG5cdC8vIEhhbmRsZSBGaW5pc2ggRWRpdGluZy5cblx0Ly9cblx0Y29uc3QgcmVmID0gdXNlUmVmRWZmZWN0KChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhID0gKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKHRydWUpO1xuXHRcdH1cblx0XHRpZihncmlkSGVscGVySXNEcmF3aW5nKSB7XG5cdFx0XHRvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHQvLyBDbGVhbnVwIHRoaXMgRG9jdW1lbnQgZXZlbnQgbGlzdGVuZXIuXG5cdFx0XHRvd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fTtcblx0fSwgW2dyaWRIZWxwZXJJc0RyYXdpbmddKTtcblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblx0cmV0dXJuIDxkaXYgXG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1oZWxwZXJzXCJcblx0XHRyZWY9e3JlZn1cblx0PlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIkNvbHVtblwiXG5cdFx0XHRsYWJsZUNvdW50PXtjb2xDb3VudH1cblx0XHQvPlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIlJvd1wiXG5cdFx0XHRsYWJsZUNvdW50PXtyb3dDb3VudH1cblx0XHQvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50ICogcm93Q291bnQpKS5tYXAoKF8sIGNlbGxJbmRleCkgPT4ge1xuXHRcdFx0Y2VsbEluZGV4Kys7XG5cdFx0XHRjb25zdCBjZWxsWCA9ICgoY2VsbEluZGV4IC0gMSkgJSBjb2xDb3VudCkgKyAxO1xuXHRcdFx0Y29uc3QgY2VsbFkgPSBNYXRoLmZsb29yKChjZWxsSW5kZXggLSAxKSAvIGNvbENvdW50KSArIDE7XG5cdFx0XHRyZXR1cm4gPEdyaWRIZWxwZXJDZWxsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0a2V5OiBgaGVscGVyLWNlbGwtJHtjZWxsSW5kZXh9YCxcblx0XHRcdFx0XHRjZWxsTGFiZWw6IGNlbGxJbmRleCxcblx0XHRcdFx0XHRjZWxsWCxcblx0XHRcdFx0XHRjZWxsWSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogKGVkaXRpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IChncmlkSGVscGVySXNEcmF3aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBHcmlkIEFyZWEgU2VsZWN0aW9uLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKVxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHR9KX1cblx0XHR7ZWRpdGluZyAmJiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7ZWRpdGluZz8uY2xpZW50SWQgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWFkZGluZy1ncmlkLWFyZWFzLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz57X18oXCJDbGljayBhbmQgZHJhZ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBlZGl0IHRoZSBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGFkZCBhIG5ldyBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PEdyaWRIZWxwZXJBcHBlbmRlclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdFx0XHRzdHlsZT17Z3JpZEhlbHBlckNvb3JkUmVzID8ge1xuXHRcdFx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRIZWxwZXJDb29yZFJlcy5wYXJzZWQsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCdcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkfVxuXHRcdFx0XHQ+IHtncmlkSGVscGVyQ2FuU2F2ZSAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGV4dD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17dHJ1ZX1cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHsgXG5cdFx0XHRcdFx0XHRcdC8vIFNhdmUgdGhlIG5ldyAvIHVwZGF0ZWQgR3JpZCBBcmVhLlxuXHRcdFx0XHRcdFx0XHRkb0dyaWRIZWxwZXJTYXZlKGdyaWRDbGllbnRJZCwgZWRpdGluZywgZ3JpZEhlbHBlckNvb3JkUmVzKTsgXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHN0YXRlLlxuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJDb29yZFJlcyhudWxsKTtcblx0XHRcdFx0XHRcdFx0Ly8gV2UgdXNlIHVzZUVmZmVjdCBpbiB0aGUgbWFpbiBjb21wb25lbnQgdG8gcmVzZXQgdGhlIEdyaWRzICdlZGl0aW5nJyBhdHRyaXVidGUsIHNvIHdlIGRvbid0XG5cdFx0XHRcdFx0XHRcdC8vIG5lZWQgdG8gd29ycnkgYWJvdXQgZG9pbmcgaXQgaGVyZSwgdGhpcyBhbGxvd3MgdXMgdG8gbW9yZSBlYXNpbHkgZm9jdXMgb24gdGhlIGNvcnJlY3QgYmxvY2tzLlxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+PC9CdXR0b24+XG5cdFx0XHRcdCl9IDwvR3JpZEhlbHBlckFwcGVuZGVyPlxuXHRcdFx0PC8+XG5cdFx0KX1cblx0PC9kaXY+XG59IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0dXNlSW5uZXJCbG9ja3NQcm9wcyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5pbXBvcnQge1xuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgIGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93c1xufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG4vKipcbiAqIFRoZSBDb2RlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2F2ZSh7XG4gICAgYXR0cmlidXRlczoge1xuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fVxuXHR9LFxufSkge1xuICAgIC8vXG4gICAgY29uc3QgaW5uZXJCbG9ja3NQcm9wcyA9IHVzZUlubmVyQmxvY2tzUHJvcHMuc2F2ZSh7IC4uLnVzZUJsb2NrUHJvcHMuc2F2ZSh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcygxLCBjb2xDb3VudCwgcm93Q291bnQpIC8qIDEgPT09ICdzYXZlJyAqLyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygxLCBjb2xUZW1wbGF0ZXMpIC8qIDEgPT09ICdzYXZlJyAqLyxcblx0XHRcdGdyaWRUZW1wbGF0ZVJvd3M6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygxLCByb3dUZW1wbGF0ZXMpIC8qIDEgPT09ICdzYXZlJyAqL1xuICAgICAgICB9XG4gICAgfSl9KTtcblx0Ly9cbiAgICByZXR1cm4gKFxuXHRcdDxkaXYgey4uLmlubmVyQmxvY2tzUHJvcHN9Lz5cblx0KTtcbn07IiwiLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gY3NzU2FmZUJhc2U2NChzdHJpbmcpIHtcbiAgICByZXR1cm4gd2luZG93LmJ0b2Eoc3RyaW5nKS5yZXBsYWNlKC9cXFcvZywgJycpO1xufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRBcmVhKHgsIHkpIHtcbiAgICByZXR1cm4gY3NzU2FmZUJhc2U2NChgJHt5fS8ke3h9YCk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICAgIC8vXG4gICAgY29uc3Qgc3RhcnQgPSBjc3NTYWZlQmFzZTY0KGAke3N0YXJ0WX0vJHtzdGFydFh9YCk7XG4gICAgY29uc3QgZW5kID0gY3NzU2FmZUJhc2U2NChgJHtlbmRZfS8ke2VuZFh9YCk7XG4gICAgcmV0dXJuIGAke3N0YXJ0fSAvICR7c3RhcnR9IC8gJHtlbmR9IC8gJHtlbmR9YDtcbn1cblxuLy9cbi8vIEdlbmVyYXRlIHRoZSBncmlkLXRlbXBsYXRlLWFyZWFzLCBncmlkLXRlbXBsYXRlLWNvbHVtbnMsIGFuZCBncmlkLXRlbXBsYXRlLXJvd3MgQ1NTLlxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoY29udGV4dCwgY29sQ291bnQsIHJvd0NvdW50KSB7XG4gICAgaWYoY29udGV4dCkge1xuICAgICAgICAvLyBTYXZlXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHJvd0NvdW50KSkucmVkdWNlKChyb3dzUmVzLCBfLCByb3dzSSkgPT4gKFxuICAgICAgICAgICAgYCR7cm93c1Jlc31cXG5cIiR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoY29sc1JlcywgXywgY29sc0kpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y29sc1Jlc30gJHtnZW5lcmF0ZUdyaWRBcmVhKCsrY29sc0ksIHJvd3NJICsgMSl9YDtcbiAgICAgICAgICAgIH0sICcnKX1cImBcbiAgICAgICAgKSwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVkaXRvclxuICAgICAgICAvLyBJbiB0aGUgZWRpdG9yIG9ubHksIHdlIGFkZCBhbiBhZGRpdGlvbmFsIENvbHVtbiAvIFJvdyB0byB0aGUgR3JpZCBUZW1scGxhdGUgQXJlYXMsIFxuICAgICAgICAvLyB0byBhY2NvdW50IGZvciB0aGUgZ3JpZCBoZWxwZXJzLlxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcbiAgICAgICAgICAgIGAke3Jvd3NSZXN9XFxuXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGNvbHNSZXMsIF8sIGNvbHNJKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWA7XG4gICAgICAgICAgICB9LCAnLicpfVwiYFxuICAgICAgICApLCBgXCIke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGVkaXRvclJlcywgXywgaSkgPT4gYCR7ZWRpdG9yUmVzfSAuYCwgJy4nKX1cImApO1xuICAgIH1cbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKGNvbnRleHQsIHRlbXBsYXRlcykge1xuICAgIGlmKGNvbnRleHQpIHtcbiAgICAgICAgLy8gU2F2ZVxuICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN9ICR7Y3VyfWA7XG4gICAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFZGl0b3JcbiAgICAgICAgLy8gSW4gdGhlIGVkaXRvciBvbmx5LCB3ZSBhZGQgYW4gYWRkaXRpb25hbCBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgdG8gYWNjb3VudCBmb3IgdGhlIGdyaWQgaGVscGVycy5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuICAgICAgICB9LCAnbWluLWNvbnRlbnQnKTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoMm1sX2dyaWRhcmVhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiTm90aWNlIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJSYW5nZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJJbnNwZWN0b3JDb250cm9scyIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJ1c2VCbG9ja1Byb3BzIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiX18iLCJfbiIsInNwcmludGYiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInVzZVJlZkVmZmVjdCIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MiLCJHcmlkRWRpdG9yIiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25zIiwic2V0U2VsZWN0ZWRHcmlkQXJlYSIsInNlbGVjdG9ycyIsImdldFNlbGVjdGVkR3JpZEFyZWEiLCJHcmlkRWRpdCIsImF0dHJpYnV0ZXMiLCJ2ZXJ0aWNhbEFsaWdubWVudCIsImNvbERlZmluaXRpb25zIiwiY291bnQiLCJjb2xDb3VudCIsInRlbXBsYXRlcyIsImNvbFRlbXBsYXRlcyIsInJvd0RlZmluaXRpb25zIiwicm93Q291bnQiLCJyb3dUZW1wbGF0ZXMiLCJlZGl0aW5nIiwic2V0QWxpZ25tZW50Iiwic2V0R3JpZE5vQ29sc09yUm93cyIsInNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93Iiwic2V0R3JpZEVkaXRpbmciLCJzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQiLCJzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQiLCJncmlkQ2hpbGRyZW4iLCJzZWxlY3QiLCJnZXRCbG9ja3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSIsImZvY3VzVGFyZ2V0Iiwic2V0Rm9jdXNUYXJnZXQiLCJjaGlsZFJlcXVlc3RlZEVkaXQiLCJmaW5kIiwiY2hpbGQiLCJyZXF1ZXN0RWRpdCIsInJlZiIsImVsZW1lbnQiLCJvd25lckRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwibmV3R3JpZEFyZWFUZXh0IiwiY2hpbGRyZW4iLCJpbm5lckJsb2Nrc1Byb3BzIiwic3R5bGUiLCJncmlkVGVtcGxhdGVBcmVhcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwib25LZXlQcmVzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJlZGl0S2V5cyIsImV4aXRLZXlzIiwiaW5jbHVkZXMiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwib3RoZXIiLCJkZWZpbml0aW9ucyIsImNvdW50RGVsdGEiLCJ1bml0Iiwic3BsaWNlIiwibGVuZ3RoIiwiZnJvbSIsImluZGV4IiwidGVtcGxhdGUiLCJnZXRCbG9jayIsInBhcmVudHMiLCJuYW1lIiwic2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyIiwicmVkdWNlIiwicmVzIiwicGFyZW50SWQiLCJzZWxmIiwicGFyZW50QmxvY2siLCJwdXNoIiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImN1ciIsInN0YWNraW5nT3JkZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiLCJDb2xzUm93SGVscGVySW5uZXIiLCJHcmlkSGVscGVyTGFiZWwiLCJsYWJsZVR5cGUiLCJsYWJsZUNvdW50Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJsYWJsZUluZGV4IiwiR3JpZEhlbHBlckNlbGwiLCJjZWxsTGFiZWwiLCJjZWxsWCIsImNlbGxZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlRW50ZXIiLCJncmlkQXJlYSIsIkdyaWRIZWxwZXJBcHBlbmRlciIsImFyZWEiLCJjcmVhdGVCbG9jayIsImdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCIsImRvR3JpZEhlbHBlclNlbGVjdGlvbiIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJzdGFydFkiLCJ5IiwiZW5kWCIsImVuZFkiLCJzdGFydCIsIk1hdGgiLCJtaW4iLCJlbmQiLCJtYXgiLCJwYXJzZWQiLCJkb0dyaWRIZWxwZXJTYXZlIiwiZ3JpZENsaWVudElkIiwidGFyZ2V0IiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJncmlkSGVscGVySXNEcmF3aW5nIiwic2V0R3JpZEhlbHBlcklzRHJhd2luZyIsImdyaWRIZWxwZXJDYW5TYXZlIiwic2V0R3JpZEhlbHBlckNhblNhdmUiLCJncmlkSGVscGVyQ29vcmRSZXMiLCJzZXRHcmlkSGVscGVyQ29vcmRSZXMiLCJmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2VsbEluZGV4IiwiZmxvb3IiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3NzU2FmZUJhc2U2NCIsInN0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZXBsYWNlIiwiZ2VuZXJhdGVHcmlkQXJlYSIsImNvbnRleHQiLCJyb3dzUmVzIiwicm93c0kiLCJjb2xzUmVzIiwiY29sc0kiLCJlZGl0b3JSZXMiXSwic291cmNlUm9vdCI6IiJ9