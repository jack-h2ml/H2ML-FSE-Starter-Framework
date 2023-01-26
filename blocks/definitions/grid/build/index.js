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
      //
      console.log('x2');
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
        console.log('aye');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDa0Q7QUFDbEQsYUFBYSxpRUFBYSxDQUFDLHNEQUFHO0FBQzlCO0FBQ0E7QUFDQSxDQUFDLEVBQUUsaUVBQWEsQ0FBQyx1REFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsSUFBSSxFQUFDO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQVUrQjtBQVNFO0FBTVI7QUFLQTtBQUtHO0FBS0g7QUFLRzs7QUFFNUI7QUFDQTtBQUNBOztBQUUwRDtBQUVuQztBQUtKO0FBRXVDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQXNCLHlEQUFRLENBQUNELGlFQUFnQixDQUFDLHNCQUFzQixFQUFFO0VBQ2pETSxPQUFPLEdBSUk7SUFBQSxJQUpIQyxLQUFLLHVFQUFHO01BQ2ZDLFFBQVEsRUFBRTtRQUNUQyxLQUFLLEVBQUU7TUFDUjtJQUNELENBQUM7SUFBQSxJQUFFQyxNQUFNO0lBQ1IsUUFBUUEsTUFBTSxDQUFDQyxJQUFJO01BQ2xCLEtBQUssMkJBQTJCO1FBQUU7VUFDakMsT0FBTztZQUNOLEdBQUdKLEtBQUs7WUFDUkMsUUFBUSxFQUFFO2NBQ1QsR0FBR0QsS0FBSyxDQUFDQyxRQUFRO2NBQ2pCQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0Q7WUFDZjtVQUNELENBQUM7UUFDRjtJQUFDO0lBRUYsT0FBT0YsS0FBSztFQUNiLENBQUM7RUFDREssT0FBTyxFQUFFO0lBQ1JDLG1CQUFtQixDQUFDSixLQUFLLEVBQUU7TUFDMUIsT0FBTztRQUNORSxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDRjtNQUNELENBQUM7SUFDRjtFQUNELENBQUM7RUFDREssU0FBUyxFQUFFO0lBQ1ZDLG1CQUFtQixDQUFDUixLQUFLLEVBQUU7TUFDMUIsT0FBT0EsS0FBSyxDQUFDQyxRQUFRLENBQUNDLEtBQUs7SUFDNUI7RUFDRDtBQUNELENBQUMsQ0FBQyxDQUFDOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxNQUFNTyxRQUFRLEdBQUcsUUF3Qlg7RUFBQSxJQXhCWTtJQUNqQjtJQUNBQyxVQUFVLEVBQUU7TUFDWEMsaUJBQWlCO01BQ2pCQyxjQUFjLEVBQUU7UUFDZkMsS0FBSyxFQUFFQyxRQUFRO1FBQ2ZDLFNBQVMsRUFBRUM7TUFDWixDQUFDO01BQ0RDLGNBQWMsRUFBRTtRQUNmSixLQUFLLEVBQUVLLFFBQVE7UUFDZkgsU0FBUyxFQUFFSTtNQUNaLENBQUM7TUFDREMsT0FBTztNQUNQQztJQUNELENBQUM7SUFDRDtJQUNBQyxZQUFZO0lBQ1pDLG1CQUFtQjtJQUNuQkMsMEJBQTBCO0lBQzFCQyxjQUFjO0lBQ2Q7SUFDQUMsK0JBQStCO0lBQy9CO0lBQ0FDO0VBQ0QsQ0FBQztFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLE1BQU07SUFBRUMsd0JBQXdCO0lBQUVDLGlDQUFpQztJQUFFQztFQUFhLENBQUMsR0FBR3hDLDBEQUFTLENBQUV5QyxNQUFNLElBQUs7SUFDM0c7SUFDQSxNQUFNO01BQUVDLFNBQVM7TUFBRUMsd0JBQXdCO01BQUVDO0lBQTJCLENBQUMsR0FBR0gsTUFBTSxDQUFDOUMsMERBQWdCLENBQUM7SUFDcEc7SUFDQSxNQUFNMkMsd0JBQXdCLEdBQUdLLHdCQUF3QixFQUFFO0lBQzNELE1BQU1KLGlDQUFpQyxHQUFHRCx3QkFBd0IsR0FBR00sMEJBQTBCLENBQUNOLHdCQUF3QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztJQUN6SixNQUFNRSxZQUFZLEdBQUdFLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDO0lBQ3hDO0lBQ0EsT0FBTztNQUNOQyx3QkFBd0I7TUFDeEJDLGlDQUFpQztNQUNqQ0M7SUFDRCxDQUFDO0VBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7RUFFTjtFQUNBO0VBQ0E7O0VBRUF0Qyw2REFBUyxDQUFDLE1BQU07SUFDZmtDLCtCQUErQixDQUFDRSx3QkFBd0IsRUFBRUMsaUNBQWlDLENBQUM7RUFDN0YsQ0FBQyxFQUFFLENBQUNELHdCQUF3QixDQUFDLENBQUM7O0VBRTlCO0VBQ0E7RUFDQTs7RUFFQSxNQUFNLENBQUNPLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUc3Qyw0REFBUSxDQUFDLElBQUksQ0FBQzs7RUFFcEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFDLDZEQUFTLENBQUMsTUFBTTtJQUNmLElBQUcsQ0FBQzRCLE9BQU8sRUFBRTtNQUNaO01BQ0EsTUFBTWlCLGtCQUFrQixHQUFHUCxZQUFZLENBQUNRLElBQUksQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUM3QixVQUFVLENBQUM4QixXQUFXLENBQUM7TUFDbkYsSUFBR0gsa0JBQWtCLEVBQUVaLGNBQWMsQ0FBQ1ksa0JBQWtCLENBQUM7SUFDMUQ7SUFDQSxPQUFPLE1BQU07TUFDWjtNQUNBLElBQUdqQixPQUFPLEVBQUVPLFFBQVEsRUFBRVMsY0FBYyxDQUFDaEIsT0FBTyxDQUFDO01BQzdDO01BQ0FLLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztFQUNGLENBQUMsRUFBRSxDQUFDSyxZQUFZLENBQUMsQ0FBQzs7RUFFbEI7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsTUFBTVcsR0FBRyxHQUFHOUMsZ0VBQVksQ0FBRStDLE9BQU8sSUFBSztJQUNyQyxNQUFNO01BQUVDO0lBQWMsQ0FBQyxHQUFHRCxPQUFPO0lBQ2pDLElBQUd0QixPQUFPLEVBQUU7TUFDWHVCLGFBQWEsQ0FBQ0MsYUFBYSxDQUFFLGdCQUFlakIsUUFBUyxJQUFHLENBQUMsQ0FBQ2tCLEtBQUssRUFBRTtJQUNsRSxDQUFDLE1BQU0sSUFBR1YsV0FBVyxFQUFFO01BQ3RCUSxhQUFhLENBQUNDLGFBQWEsQ0FBRSxnQkFBZVQsV0FBVyxDQUFDUixRQUFTLElBQUcsQ0FBQyxDQUFDa0IsS0FBSyxFQUFFO01BQzdFVCxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQ3JCO0VBQ0QsQ0FBQyxFQUFFLENBQUNoQixPQUFPLENBQUMsQ0FBQzs7RUFFYjtFQUNBO0VBQ0E7O0VBRUEsTUFBTTBCLGVBQWUsR0FBRzVELG1EQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO0VBQ3ZELE1BQU07SUFBRTZELFFBQVE7SUFBRSxHQUFHQztFQUFpQixDQUFDLEdBQUdwRSw0RUFBbUIsQ0FDNURHLHNFQUFhLENBQUM7SUFDYnNDLEtBQUssRUFBRTtNQUNONEIsaUJBQWlCLEVBQUVyRCxvRUFBeUIsQ0FBQyxDQUFDLEVBQUVrQixRQUFRLEVBQUVJLFFBQVEsQ0FBQyxDQUFDO01BQ3BFZ0MsbUJBQW1CLEVBQUVyRCw0RUFBaUMsQ0FBQyxDQUFDLEVBQUVtQixZQUFZLENBQUMsQ0FBQztNQUN4RW1DLGdCQUFnQixFQUFFdEQsNEVBQWlDLENBQUMsQ0FBQyxFQUFFc0IsWUFBWSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7SUFDRGlDLFVBQVUsRUFBR0MsQ0FBQyxJQUFLO01BQ2xCLElBQUcxQixRQUFRLEtBQUtDLHdCQUF3QixFQUFFO1FBQ3pDeUIsQ0FBQyxDQUFDQyxlQUFlLEVBQUU7UUFDbkI7UUFDQSxNQUFNO1VBQUVDO1FBQUksQ0FBQyxHQUFHRixDQUFDO1FBQ2pCLE1BQU1HLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsTUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMzQjtRQUNBLElBQUlELFFBQVEsQ0FBQ0UsUUFBUSxDQUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDbkMsT0FBTyxFQUFFSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FDeEQsSUFBSWdDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDSCxHQUFHLENBQUMsRUFBRTtVQUNoQzlCLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDdEI7UUFBQztNQUNGO0lBQ0QsQ0FBQztJQUNEZ0IsR0FBRyxFQUFFQTtFQUNOLENBQUMsQ0FBQyxFQUFFO0lBQ0hrQixhQUFhLEVBQUUsQ0FBQyxnQkFBZ0I7RUFDakMsQ0FBQyxDQUNEOztFQUVEO0VBQ0E7RUFDQTs7RUFFQSxPQUNDLGtJQUNDLGtFQUFDLGtFQUFhLFFBQ2Isa0VBQUMsa0ZBQTZCO0lBQzdCLFFBQVEsRUFBRXJDLFlBQWE7SUFDdkIsS0FBSyxFQUFFWDtFQUFrQixFQUN4QixDQUNhLEVBQ2hCLGtFQUFDLHNFQUFpQixRQUNqQixrRUFBQyx3REFBSyxRQUNMLGtFQUFDLDREQUFTO0lBQUMsS0FBSyxFQUFFekIsbURBQUUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFFO0lBQUMsV0FBVyxFQUFFO0VBQUssR0FDaEUsa0VBQUMsNERBQVMsUUFDVCxrRUFBQywrREFBWTtJQUNaLHVCQUF1QjtJQUN2QixLQUFLLEVBQUVBLG1EQUFFLENBQUUsNkJBQTRCLEVBQUUsTUFBTSxDQUFFO0lBQ2pELEtBQUssRUFBRTRCLFFBQVM7SUFDaEIsUUFBUSxFQUFFWixLQUFLLElBQUlxQixtQkFBbUIsQ0FBQyxDQUFDLEVBQUVyQixLQUFLLENBQUUsQ0FBQztJQUFBO0lBQ2xELEdBQUcsRUFBRSxDQUFFO0lBQ1AsR0FBRyxFQUFFO0VBQUUsRUFDTixFQUNGLGtFQUFDLCtEQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLEtBQUssRUFBRWhCLG1EQUFFLENBQUUsMEJBQXlCLEVBQUUsTUFBTSxDQUFFO0lBQzlDLEtBQUssRUFBRWdDLFFBQVM7SUFDaEIsUUFBUSxFQUFFaEIsS0FBSyxJQUFJcUIsbUJBQW1CLENBQUMsQ0FBQyxFQUFFckIsS0FBSyxDQUFFLENBQUM7SUFBQTtJQUNsRCxHQUFHLEVBQUUsQ0FBRTtJQUNQLEdBQUcsRUFBRTtFQUFFLEVBQ04sRUFDQVksUUFBUSxHQUFHSSxRQUFRLEdBQUksRUFBRSxJQUN6QixrRUFBQyx5REFBTTtJQUFDLE1BQU0sRUFBQyxTQUFTO0lBQUMsYUFBYSxFQUFFO0VBQU0sR0FDN0NoQyxtREFBRSxDQUNGLDREQUE0RCxFQUM1RCxNQUFNLENBQ04sQ0FDUSxDQUVBLEVBQ1osa0VBQUMsNERBQVM7SUFBQyxLQUFLLEVBQUVBLG1EQUFFLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFFO0lBQUMsV0FBVyxFQUFFO0VBQU0sR0FDeEUsQ0FBQyxHQUFHMEUsS0FBSyxDQUFDOUMsUUFBUSxDQUFDLENBQUMsQ0FBQytDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FDOUIsa0VBQUMsOERBQVc7SUFDWCxHQUFHLEVBQUcsZ0JBQWVBLENBQUUsRUFBRTtJQUN6QixLQUFLLEVBQUUzRSx3REFBTyxDQUFDRixtREFBRSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFNkUsQ0FBQyxHQUFHLENBQUMsQ0FBRTtJQUN2RCxLQUFLLEVBQUUvQyxZQUFZLENBQUMrQyxDQUFDLENBQUU7SUFDdkIsUUFBUSxFQUFFN0QsS0FBSyxJQUFJc0IsMEJBQTBCLENBQUMsQ0FBQyxFQUFFdUMsQ0FBQyxFQUFFN0QsS0FBSyxDQUFDO0VBQW1CLEVBRTlFLENBQUMsQ0FDUyxFQUNaLGtFQUFDLDREQUFTO0lBQUMsS0FBSyxFQUFFaEIsbURBQUUsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUU7SUFBQyxXQUFXLEVBQUU7RUFBTSxHQUNyRSxDQUFDLEdBQUcwRSxLQUFLLENBQUMxQyxRQUFRLENBQUMsQ0FBQyxDQUFDMkMsR0FBRyxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUM5QixrRUFBQyw4REFBVztJQUNYLEdBQUcsRUFBRyxnQkFBZUEsQ0FBRSxFQUFFO0lBQ3pCLEtBQUssRUFBRTNFLHdEQUFPLENBQUNGLG1EQUFFLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLEVBQUU2RSxDQUFDLEdBQUcsQ0FBQyxDQUFFO0lBQ3JELEtBQUssRUFBRTVDLFlBQVksQ0FBQzRDLENBQUMsQ0FBRTtJQUN2QixRQUFRLEVBQUU3RCxLQUFLLElBQUlzQiwwQkFBMEIsQ0FBQyxDQUFDLEVBQUV1QyxDQUFDLEVBQUU3RCxLQUFLLENBQUMsQ0FBQztFQUFrQixFQUU5RSxDQUFDLENBQ1MsQ0FDRCxDQUNMLENBQ1csRUFDcEIseUVBQVM4QyxnQkFBZ0IsRUFDeEIsa0VBQUMsb0VBQVU7SUFDVixZQUFZLEVBQUVyQixRQUFTO0lBQ3ZCLFFBQVEsRUFBRWIsUUFBUztJQUNuQixRQUFRLEVBQUVJLFFBQVM7SUFDbkIsT0FBTyxFQUFFRTtFQUFRLEVBQ2hCLEVBQ0Y7SUFBSyxTQUFTLEVBQUM7RUFBaUIsR0FDOUIsQ0FBRUEsT0FBUSxJQUNWLGtJQUNFMkIsUUFBUSxFQUNUO0lBQUssU0FBUyxFQUFDO0VBQThCLEdBQzVDO0lBQUssU0FBUyxFQUFDO0VBQXlCLEdBQ3ZDLGtFQUFDLDBEQUFPO0lBQUMsSUFBSSxFQUFFRDtFQUFnQixHQUM5QjtJQUFLLFNBQVMsRUFBQztFQUFvQixHQUNsQztJQUFPLE9BQU8sRUFBQztFQUFnQixHQUFFQSxlQUFlLENBQVMsRUFDekQsa0VBQUMseURBQU07SUFDTixFQUFFLEVBQUMsZ0JBQWdCO0lBQ25CLFNBQVMsRUFBQyxnQkFBZ0I7SUFDMUIsT0FBTztJQUNQLE9BQU8sRUFBRSxNQUFNckIsY0FBYyxDQUFDLElBQUk7RUFBRSxHQUVwQztJQUFLLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUMsV0FBVztJQUFDLEtBQUssRUFBQyxJQUFJO0lBQUMsTUFBTSxFQUFDLElBQUk7SUFBQyxlQUFZLE1BQU07SUFBQyxTQUFTLEVBQUM7RUFBTyxHQUFDO0lBQU0sQ0FBQyxFQUFDO0VBQW9ELEVBQVEsQ0FBTSxDQUMxTCxDQUNKLENBQ0csQ0FDTCxDQUNELENBRVAsQ0FDSSxDQUNELENBQ0o7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNdUMsZUFBZSxHQUFHM0UsNkRBQVksQ0FDbkMsQ0FBQzRFLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLE1BQU07RUFDbEM7RUFDQTtFQUNBO0VBQ0E3QyxZQUFZLENBQUNYLGlCQUFpQixFQUFFO0lBQy9CLE1BQU07TUFBRXlEO0lBQWMsQ0FBQyxHQUFHRixRQUFRO0lBQ2xDRSxhQUFhLENBQUM7TUFBRXpEO0lBQWtCLENBQUMsQ0FBQztFQUNyQyxDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0FZLG1CQUFtQixDQUFDbkIsSUFBSSxFQUFFUyxLQUFLLEVBQUU7SUFDaEMsTUFBTTtNQUFFSCxVQUFVO01BQUUwRDtJQUFjLENBQUMsR0FBR0YsUUFBUTtJQUM5QztJQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDOUIsTUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUNqRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQy9CQSxJQUFJLEdBQUdpRSxPQUFPLENBQUNqRSxJQUFJLENBQUM7SUFDcEI7SUFDQSxNQUFNbUUsV0FBVyxHQUFHO01BQUUsR0FBRzdELFVBQVUsQ0FBRSxHQUFFTixJQUFLLGFBQVk7SUFBRSxDQUFDO0lBQzNELE1BQU1vRSxVQUFVLEdBQUczRCxLQUFLLEdBQUcwRCxXQUFXLENBQUMxRCxLQUFLO0lBQzVDO0lBQ0EsTUFBTTRELElBQUksR0FBR3JFLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLGFBQWE7SUFDbkRtRSxXQUFXLENBQUN4RCxTQUFTLENBQUMyRCxNQUFNLENBQUMsSUFBR0YsVUFBVSxHQUFHLENBQUMsR0FDN0MsQ0FBQ0QsV0FBVyxDQUFDeEQsU0FBUyxDQUFDNEQsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHZixLQUFLLENBQUNnQixJQUFJLENBQUNoQixLQUFLLENBQUNZLFVBQVUsQ0FBQyxDQUFDLENBQUNYLEdBQUcsQ0FBQ0MsQ0FBQyxJQUFJVyxJQUFJLENBQUMsQ0FBQztJQUFHO0lBQ3JGLENBQUM1RCxLQUFLLEVBQUUwRCxXQUFXLENBQUN4RCxTQUFTLENBQUM0RCxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUM7SUFBQSxDQUMxQztJQUNEO0lBQ0FKLFdBQVcsQ0FBQzFELEtBQUssR0FBR0EsS0FBSztJQUN6QnVELGFBQWEsQ0FBQztNQUFFLENBQUUsR0FBRWhFLElBQUssYUFBWSxHQUFHbUU7SUFBWSxDQUFDLENBQUM7RUFDdkQsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBL0MsMEJBQTBCLENBQUNwQixJQUFJLEVBQUV5RSxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUNqRCxNQUFNO01BQUVwRSxVQUFVO01BQUUwRDtJQUFjLENBQUMsR0FBR0YsUUFBUTtJQUM5QztJQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDOUJqRSxJQUFJLEdBQUdpRSxPQUFPLENBQUNqRSxJQUFJLENBQUM7SUFDcEI7SUFDQSxNQUFNbUUsV0FBVyxHQUFHO01BQUUsR0FBRzdELFVBQVUsQ0FBRSxHQUFFTixJQUFLLGFBQVk7SUFBRSxDQUFDO0lBQzNEO0lBQ0EsTUFBTXFFLElBQUksR0FBR3JFLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxHQUFHLGFBQWE7SUFDbkRtRSxXQUFXLENBQUN4RCxTQUFTLENBQUM4RCxLQUFLLENBQUMsR0FBR0MsUUFBUSxHQUFHQSxRQUFRLEdBQUdMLElBQUk7SUFDekRMLGFBQWEsQ0FBQztNQUFFLENBQUUsR0FBRWhFLElBQUssYUFBWSxHQUFHbUU7SUFBWSxDQUFDLENBQUM7RUFDdkQsQ0FBQztFQUNEO0VBQ0E7RUFDQTtFQUNBOUMsY0FBYyxDQUFDdkIsS0FBSyxFQUFFO0lBQ3JCLE1BQU07TUFBRWtFO0lBQWMsQ0FBQyxHQUFHRixRQUFRO0lBQ2xDRSxhQUFhLENBQUM7TUFBRWhELE9BQU8sRUFBRWxCO0lBQU0sQ0FBQyxDQUFDO0VBQ2xDLENBQUM7RUFDRDtFQUNBO0VBQ0E7RUFDQTtFQUNBd0IsK0JBQStCLENBQUNFLHdCQUF3QixFQUFFQyxpQ0FBaUMsRUFBRTtJQUM1RixNQUFNO01BQUVGO0lBQVMsQ0FBQyxHQUFHdUMsUUFBUTtJQUM3QixNQUFNO01BQUU1RDtJQUFvQixDQUFDLEdBQUcyRCxRQUFRLENBQUMsc0JBQXNCLENBQUM7SUFDaEUsSUFBSXBDLGlDQUFpQyxLQUFLRixRQUFRLEVBQUU7TUFDbkQsTUFBTTtRQUFFb0QsUUFBUTtRQUFFN0MsMEJBQTBCO1FBQUVGO01BQVUsQ0FBQyxHQUFHbUMsUUFBUSxDQUFDcEMsTUFBTSxDQUFDOUMsMERBQWdCLENBQUM7TUFDN0Y7TUFDQSxNQUFNK0YsT0FBTyxHQUFHRCxRQUFRLENBQUNuRCx3QkFBd0IsQ0FBQyxDQUFDcUQsSUFBSSxLQUFLLGdCQUFnQixHQUMzRS9DLDBCQUEwQixDQUFDTix3QkFBd0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUMzRixDQUFDQSx3QkFBd0IsRUFBRSxHQUFHTSwwQkFBMEIsQ0FBQ04sd0JBQXdCLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztNQUMzSDtNQUNBLE1BQU1zRCxpQ0FBaUMsR0FBR0YsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxRQUFRLEVBQUV0QixDQUFDLEVBQUV1QixJQUFJLEtBQUs7UUFDcEYsSUFBSUMsV0FBVyxHQUFHUixRQUFRLENBQUNNLFFBQVEsQ0FBQztRQUNwQyxJQUFJRSxXQUFXLENBQUNOLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtVQUMxQ0csR0FBRyxDQUFDSSxJQUFJLENBQUM7WUFDUjdELFFBQVEsRUFBRTBELFFBQVE7WUFDbEJJLG1CQUFtQixFQUFFekQsU0FBUyxDQUFDc0QsSUFBSSxDQUFDLEVBQUV2QixDQUFDLENBQUMsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRU0sR0FBRyxLQUFLQSxHQUFHLENBQUNoRixVQUFVLENBQUNpRixhQUFhLElBQUlQLEdBQUcsR0FBR00sR0FBRyxDQUFDaEYsVUFBVSxDQUFDaUYsYUFBYSxHQUFHLENBQUMsR0FBR1AsR0FBRyxFQUFFLENBQUM7VUFDL0ksQ0FBQyxDQUFDO1FBQ0g7UUFDQSxPQUFPQSxHQUFHO01BQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUNOO01BQ0E5RSxtQkFBbUIsQ0FBQztRQUNuQnFCLFFBQVEsRUFBRUMsd0JBQXdCO1FBQ2xDb0QsT0FBTyxFQUFFRTtNQUNWLENBQUMsQ0FBQztJQUNILENBQUMsTUFBTSxJQUFJLENBQUNyRCxpQ0FBaUMsRUFBRTtNQUM5Q3ZCLG1CQUFtQixDQUFDLElBQUksQ0FBQztJQUMxQjtFQUNEO0FBQ0QsQ0FBQyxDQUFDLENBQ0YsQ0FBQ0csUUFBUSxDQUFDOztBQUVYO0FBQ0E7QUFDQTs7QUFFZSxTQUFTbUYsSUFBSSxDQUFDQyxLQUFLLEVBQUU7RUFDbkMsT0FBTyxrRUFBQyxlQUFlLEVBQUtBLEtBQUssQ0FBSTtBQUN0QztBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGJEO0FBQ0E7QUFDQTs7QUFFc0Q7QUFFTjs7QUFFaEQ7QUFDQTtBQUNBOztBQUV5RDtBQUVuQzs7QUFFdEI7QUFDQTtBQUNBOztBQUV1QztBQUNiO0FBQ0Q7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQUMsb0VBQWlCLENBQUNHLDZDQUFhLEVBQUU7RUFDaEM7RUFDQUQsSUFBSTtFQUNKRyxJQUFJLEVBQUVQLDZDQUFJO0VBQ1ZRLElBQUksRUFBRUYsNkNBQUlBO0FBQ1gsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Y7QUFDQTtBQUNBOztBQU15QjtBQUV1Qjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVPLE1BQU1HLGtCQUFrQixHQUFJUixLQUFLLElBQUs7RUFDNUMsTUFBTTtJQUNMaEI7RUFDRCxDQUFDLEdBQUdnQixLQUFLO0VBQ1QsT0FBTyxnRkFBT2hCLEtBQUssQ0FBUTtBQUM1QixDQUFDO0FBRU0sTUFBTXlCLGVBQWUsR0FBSVQsS0FBSyxJQUFLO0VBQ3pDLE1BQU07SUFDTFUsU0FBUztJQUNUQztFQUNELENBQUMsR0FBR1gsS0FBSztFQUNULE9BQU87SUFBSyxTQUFTLEVBQUc7RUFBNEIsR0FDbkQ7SUFBSyxTQUFTLEVBQUcsUUFBT1UsU0FBUyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUc7RUFBVSxFQUFHLEVBQzVFOUMsS0FBSyxDQUFDZ0IsSUFBSSxDQUFDaEIsS0FBSyxDQUFDNEMsVUFBVSxDQUFDLENBQUMsQ0FBQzNDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUU2QyxVQUFVLEtBQ2hEO0lBQ0MsR0FBRyxFQUFHLEdBQUVKLFNBQVUsZUFBY0ksVUFBVyxFQUFFO0lBQzdDLFNBQVMsRUFBQyx1QkFBdUI7SUFDakMsS0FBSyxFQUFFO01BQ04sQ0FBRSxPQUFNSixTQUFVLE9BQU0sR0FBRyxFQUFFSSxVQUFVLEdBQUcsQ0FBQztNQUMzQyxDQUFFLE9BQU1KLFNBQVMsS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHLFFBQVMsT0FBTSxHQUFHO0lBQzVEO0VBQUUsR0FFRixrRUFBQywwREFBTztJQUFDLElBQUksRUFBRW5ILHdEQUFPLENBQUNGLG1EQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxFQUFFeUgsVUFBVSxFQUFFSixTQUFTO0VBQUUsR0FDdEUsK0VBQ0MsZ0ZBQU9JLFVBQVUsQ0FBUSxDQUNwQixDQUNHLENBRVgsQ0FBQyxDQUNHO0FBQ1AsQ0FBQztBQUVNLE1BQU1DLGNBQWMsR0FBSWYsS0FBSyxJQUFLO0VBQ3hDLE1BQU07SUFDTGdCLFNBQVM7SUFDVEMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLFdBQVc7SUFDWEM7RUFDRCxDQUFDLEdBQUdwQixLQUFLO0VBQ1QsT0FBTztJQUNOLFNBQVMsRUFBQyxrQkFBa0I7SUFDdEJtQixXQUFXO0lBQUVDLFlBQVk7SUFDL0IsZ0JBQWNILEtBQU07SUFDcEIsZ0JBQWNDLEtBQU07SUFDcEIsS0FBSyxFQUFFO01BQ05HLFFBQVEsRUFBRyxHQUFFSCxLQUFLLEdBQUcsQ0FBRSxNQUFLRCxLQUFLLEdBQUcsQ0FBRSxNQUFLQyxLQUFLLEdBQUcsQ0FBRSxNQUFLRCxLQUFLLEdBQUcsQ0FBRTtJQUNyRTtFQUFFLEdBRUEsR0FBRUQsU0FBVSxFQUFDLEVBQUMsR0FBQyxpRkFBTyxJQUFHQyxLQUFNLEtBQUlDLEtBQU0sR0FBRSxDQUFPLENBQy9DO0FBQ1AsQ0FBQztBQUVNLE1BQU1JLGtCQUFrQixHQUFJdEIsS0FBSyxJQUFLO0VBQzVDLE1BQU07SUFDTHhFLEtBQUs7SUFDTDBCLFFBQVE7SUFDUnFFO0VBQ0QsQ0FBQyxHQUFHdkIsS0FBSztFQUNULE9BQ0M7SUFDQyxTQUFTLEVBQUMseUJBQXlCO0lBQ25DLElBQUksRUFBRXVCLElBQUksR0FBR0EsSUFBSSxHQUFHLElBQUs7SUFDbkIvRjtFQUFLLEdBRVYwQixRQUFRLENBQ0o7QUFFUixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZEO0FBQ0E7QUFDQTs7QUFLeUI7QUFLQTtBQUlRO0FBRWU7QUFFUztBQUVWO0FBRUc7O0FBRWxEO0FBQ0E7QUFDQTs7QUFNc0I7QUFFbUM7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNd0UscUJBQXFCLEdBQUcsQ0FBQ2xFLENBQUMsRUFBRW1FLE1BQU0sRUFBRXBDLEdBQUcsS0FBSztFQUNqRDtFQUNBLElBQUkvQixDQUFDLENBQUNqRCxJQUFJLEtBQUssV0FBVyxFQUFFZ0YsR0FBRyxHQUFHLElBQUk7RUFDdEM7RUFDQSxNQUFNcUMsTUFBTSxHQUFHckMsR0FBRyxFQUFFcEcsS0FBSyxFQUFFMEksQ0FBQyxHQUFHdEMsR0FBRyxFQUFFcEcsS0FBSyxFQUFFMEksQ0FBQyxHQUFHQyxNQUFNLENBQUNILE1BQU0sQ0FBQ1YsS0FBSyxDQUFDO0VBQ25FLE1BQU1jLE1BQU0sR0FBR3hDLEdBQUcsRUFBRXBHLEtBQUssRUFBRTZJLENBQUMsR0FBR3pDLEdBQUcsRUFBRXBHLEtBQUssRUFBRTZJLENBQUMsR0FBR0YsTUFBTSxDQUFDSCxNQUFNLENBQUNULEtBQUssQ0FBQztFQUNuRSxNQUFNZSxJQUFJLEdBQUdILE1BQU0sQ0FBQ0gsTUFBTSxDQUFDVixLQUFLLENBQUM7RUFDakMsTUFBTWlCLElBQUksR0FBR0osTUFBTSxDQUFDSCxNQUFNLENBQUNULEtBQUssQ0FBQztFQUNqQztFQUNBM0IsR0FBRyxHQUFHO0lBQ0xwRyxLQUFLLEVBQUU7TUFDTjBJLENBQUMsRUFBRUQsTUFBTTtNQUNUSSxDQUFDLEVBQUVEO0lBQ0osQ0FBQztJQUNESSxLQUFLLEVBQUU7TUFDTk4sQ0FBQyxFQUFFTyxJQUFJLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTSxFQUFFSyxJQUFJLENBQUM7TUFDekJELENBQUMsRUFBRUksSUFBSSxDQUFDQyxHQUFHLENBQUNOLE1BQU0sRUFBRUcsSUFBSTtJQUN6QixDQUFDO0lBQ0RJLEdBQUcsRUFBRTtNQUNKVCxDQUFDLEVBQUVPLElBQUksQ0FBQ0csR0FBRyxDQUFDWCxNQUFNLEVBQUVLLElBQUksQ0FBQztNQUN6QkQsQ0FBQyxFQUFFSSxJQUFJLENBQUNHLEdBQUcsQ0FBQ1IsTUFBTSxFQUFFRyxJQUFJO0lBQ3pCO0VBQ0QsQ0FBQztFQUNEM0MsR0FBRyxDQUFDaUQsTUFBTSxHQUFHZixtRUFBd0IsQ0FBQ2xDLEdBQUcsQ0FBQzRDLEtBQUssQ0FBQ04sQ0FBQyxFQUFFdEMsR0FBRyxDQUFDNEMsS0FBSyxDQUFDSCxDQUFDLEVBQUV6QyxHQUFHLENBQUMrQyxHQUFHLENBQUNULENBQUMsRUFBRXRDLEdBQUcsQ0FBQytDLEdBQUcsQ0FBQ04sQ0FBQyxDQUFDO0VBQ3JGLE9BQU96QyxHQUFHO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsTUFBTWtELGdCQUFnQixHQUFHLENBQUNDLFlBQVksRUFBRUMsTUFBTSxFQUFFaEIsTUFBTSxLQUFLO0VBQzFELElBQUlnQixNQUFNLENBQUM3RyxRQUFRLEVBQUU7SUFDcEI7SUFDQSxNQUFNO01BQUM4RztJQUFxQixDQUFDLEdBQUd4RSx5REFBUSxDQUFDaEYsMERBQWdCLENBQUM7SUFDMUQ7SUFDQXdKLHFCQUFxQixDQUFDRCxNQUFNLENBQUM3RyxRQUFRLEVBQUU7TUFDdEN1RixRQUFRLEVBQUVNLE1BQU07TUFDaEJoRixXQUFXLEVBQUU7SUFDZCxDQUFDLENBQUM7RUFDSCxDQUFDLE1BQU07SUFDTjtJQUNBLE1BQU07TUFBRVI7SUFBVSxDQUFDLEdBQUdELHVEQUFNLENBQUM5QywwREFBZ0IsQ0FBQztJQUM5QyxNQUFNO01BQUV5SjtJQUFZLENBQUMsR0FBR3pFLHlEQUFRLENBQUNoRiwwREFBZ0IsQ0FBQztJQUNsRDtJQUNBLE1BQU07TUFDTDBKLHNCQUFzQjtNQUN0QkM7SUFDRCxDQUFDLEdBQUc1RyxTQUFTLENBQUN1RyxZQUFZLENBQUMsQ0FBQ3BELE1BQU0sQ0FDakMsQ0FBQ0MsR0FBRyxFQUFFTSxHQUFHLEVBQUVtRCxHQUFHLEtBQUs7TUFDbEJ6RCxHQUFHLENBQUN1RCxzQkFBc0IsR0FBR2pELEdBQUcsQ0FBQ2hGLFVBQVUsQ0FBQ2lGLGFBQWEsSUFBSVAsR0FBRyxDQUFDdUQsc0JBQXNCLEdBQUdqRCxHQUFHLENBQUNoRixVQUFVLENBQUNpRixhQUFhLEdBQUcsQ0FBQyxHQUFHUCxHQUFHLENBQUN1RCxzQkFBc0I7TUFDdkp2RCxHQUFHLENBQUN3RCxjQUFjLEdBQUdDLEdBQUcsR0FBRyxDQUFDO01BQzVCLE9BQU96RCxHQUFHO0lBQ1gsQ0FBQyxFQUFFO01BQ0h1RCxzQkFBc0IsRUFBRSxDQUFDO01BQ3pCQyxjQUFjLEVBQUU7SUFDakIsQ0FBQyxDQUNBO0lBQ0Q7SUFDQUYsV0FBVyxDQUFDckIsOERBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtNQUN6Q0gsUUFBUSxFQUFFTSxNQUFNO01BQ2hCN0IsYUFBYSxFQUFFZ0Q7SUFDaEIsQ0FBQyxDQUFDLEVBQUVDLGNBQWMsRUFBRUwsWUFBWSxDQUFDO0VBQ2xDO0FBQ0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRU8sTUFBTXpJLFVBQVUsR0FBSStGLEtBQUssSUFBSztFQUNwQztFQUNBLE1BQU07SUFDTDBDLFlBQVk7SUFDWnpILFFBQVE7SUFDUkksUUFBUTtJQUNSRTtFQUNELENBQUMsR0FBR3lFLEtBQUs7RUFDVDtFQUNBLE1BQU0sQ0FBQ2lELG1CQUFtQixFQUFFQyxzQkFBc0IsQ0FBQyxHQUFHeEosNERBQVEsQ0FBQyxLQUFLLENBQUM7RUFDckUsTUFBTSxDQUFDeUosaUJBQWlCLEVBQUVDLG9CQUFvQixDQUFDLEdBQUcxSiw0REFBUSxDQUFDLEtBQUssQ0FBQztFQUNqRSxNQUFNLENBQUMySixrQkFBa0IsRUFBRUMscUJBQXFCLENBQUMsR0FBRzVKLDREQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2xFO0VBQ0E7RUFDQTtFQUNBLE1BQU1rRCxHQUFHLEdBQUc5QyxnRUFBWSxDQUFFK0MsT0FBTyxJQUFLO0lBQ3JDLE1BQU07TUFBRUM7SUFBYyxDQUFDLEdBQUdELE9BQU87SUFDakMsTUFBTTBHLHVCQUF1QixHQUFHLE1BQU07TUFDckM7TUFDQUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO01BQ2pCO01BQ0FQLHNCQUFzQixDQUFDLEtBQUssQ0FBQztNQUM3QjtNQUNBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUdILG1CQUFtQixFQUFFO01BQ3ZCbkcsYUFBYSxDQUFDNEcsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSCx1QkFBdUIsQ0FBQztJQUNuRTtJQUNBLE9BQU8sTUFBTTtNQUNaO01BQ0F6RyxhQUFhLENBQUM2RyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVKLHVCQUF1QixDQUFDO0lBQ3RFLENBQUM7RUFDRixDQUFDLEVBQUUsQ0FBQ04sbUJBQW1CLENBQUMsQ0FBQztFQUN6QjtFQUNBO0VBQ0E7RUFDQSxPQUFPO0lBQ04sU0FBUyxFQUFDLGNBQWM7SUFDeEIsR0FBRyxFQUFFckc7RUFBSSxHQUVULGtFQUFDLHdEQUFlO0lBQ2YsU0FBUyxFQUFDLFFBQVE7SUFDbEIsVUFBVSxFQUFFM0I7RUFBUyxFQUNwQixFQUNGLGtFQUFDLHdEQUFlO0lBQ2YsU0FBUyxFQUFDLEtBQUs7SUFDZixVQUFVLEVBQUVJO0VBQVMsRUFDcEIsRUFDRDBDLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQzlDLFFBQVEsR0FBR0ksUUFBUSxDQUFDLENBQUMsQ0FBQzJDLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEVBQUUyRixTQUFTLEtBQUs7SUFDN0RBLFNBQVMsRUFBRTtJQUNYLE1BQU0zQyxLQUFLLEdBQUksQ0FBQzJDLFNBQVMsR0FBRyxDQUFDLElBQUkzSSxRQUFRLEdBQUksQ0FBQztJQUM5QyxNQUFNaUcsS0FBSyxHQUFHa0IsSUFBSSxDQUFDeUIsS0FBSyxDQUFDLENBQUNELFNBQVMsR0FBRyxDQUFDLElBQUkzSSxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQ3hELE9BQU8sa0VBQUMsdURBQWM7TUFFcEJ5QyxHQUFHLEVBQUcsZUFBY2tHLFNBQVUsRUFBQztNQUMvQjVDLFNBQVMsRUFBRTRDLFNBQVM7TUFDcEIzQyxLQUFLO01BQ0xDLEtBQUs7TUFDTEMsV0FBVyxFQUFHNUYsT0FBTyxHQUFJaUMsQ0FBQyxJQUFLO1FBQzlCO1FBQ0E0RixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7UUFDM0I7UUFDQUYsc0JBQXNCLENBQUMsSUFBSSxDQUFDO1FBQzVCSSxxQkFBcUIsQ0FBQzVCLHFCQUFxQixDQUFDbEUsQ0FBQyxFQUFFO1VBQUV5RCxLQUFLO1VBQUVDO1FBQU0sQ0FBQyxFQUFFbUMsa0JBQWtCLENBQUMsQ0FBQztNQUN0RixDQUFDLEdBQUdTLFNBQVU7TUFDZDFDLFlBQVksRUFBRzZCLG1CQUFtQixHQUFJekYsQ0FBQyxJQUFLO1FBQzNDZ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ2xCO1FBQ0FILHFCQUFxQixDQUFDNUIscUJBQXFCLENBQUNsRSxDQUFDLEVBQUU7VUFBRXlELEtBQUs7VUFBRUM7UUFBTSxDQUFDLEVBQUVtQyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3RGLENBQUMsR0FBR1M7SUFBVSxFQUVkO0VBQ0gsQ0FBQyxDQUFDLEVBQ0R2SSxPQUFPLElBQ1Asa0lBQ0VBLE9BQU8sRUFBRU8sUUFBUSxHQUNqQjtJQUFLLFNBQVMsRUFBQztFQUErQixHQUM3Qyw2RUFBRyxrRkFBU3pDLG1EQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQVUsS0FBQyxFQUFDQSxtREFBRSxDQUFDLCtDQUErQyxFQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsb0ZBQVNBLG1EQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQVUsTUFBRSxFQUFDQSxtREFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9GQUFTQSxtREFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBVSxLQUFDLEVBQUNBLG1EQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsb0ZBQVNBLG1EQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFVLEtBQUMsRUFBQ0EsbURBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUMsNkVBQU0sRUFBQ0EsbURBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLGtGQUFTQSxtREFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBVSxFQUFDQSxtREFBRSxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFLLENBQzFaLEdBRU47SUFBSyxTQUFTLEVBQUM7RUFBK0IsR0FDN0MsNkVBQUcsa0ZBQVNBLG1EQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQVUsS0FBQyxFQUFDQSxtREFBRSxDQUFDLGdEQUFnRCxFQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsb0ZBQVNBLG1EQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQVUsTUFBRSxFQUFDQSxtREFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9GQUFTQSxtREFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBVSxLQUFDLEVBQUNBLG1EQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFDLEdBQUMsb0ZBQVNBLG1EQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFVLEtBQUMsRUFBQ0EsbURBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUMsNkVBQU0sRUFBQ0EsbURBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLGtGQUFTQSxtREFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBVSxFQUFDQSxtREFBRSxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxDQUFLLENBRWphLEVBQ0Qsa0VBQUMsMkRBQWtCO0lBQ2xCLFNBQVMsRUFBQyx5QkFBeUI7SUFDbkMsS0FBSyxFQUFFZ0ssa0JBQWtCLEdBQUc7TUFDM0JoQyxRQUFRLEVBQUVnQyxrQkFBa0IsQ0FBQ2IsTUFBTTtNQUNuQ3VCLE9BQU8sRUFBRTtJQUNWLENBQUMsR0FBR0Q7RUFBVSxHQUNkLEdBQUMsRUFBQ1gsaUJBQWlCLElBQ25CLGtFQUFDLHlEQUFNO0lBQ04sSUFBSSxFQUFFNUgsT0FBTyxFQUFFTyxRQUFRLEdBQ3RCekMsbURBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsR0FDOUJBLG1EQUFFLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FDMUI7SUFDRCxLQUFLLEVBQUVrQyxPQUFPLEVBQUVPLFFBQVEsR0FDdkJ6QyxtREFBRSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxHQUM5QkEsbURBQUUsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUMxQjtJQUNELFdBQVcsRUFBRSxJQUFLO0lBQ2xCLE9BQU8sRUFBQyxTQUFTO0lBQ2pCLE9BQU8sRUFBRSxNQUFNO01BQ2Q7TUFDQW9KLGdCQUFnQixDQUFDQyxZQUFZLEVBQUVuSCxPQUFPLEVBQUU4SCxrQkFBa0IsQ0FBQztNQUMzRDtNQUNBSCxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7TUFDN0JBLHNCQUFzQixDQUFDLEtBQUssQ0FBQztNQUM3QkkscUJBQXFCLENBQUMsSUFBSSxDQUFDO01BQzNCO01BQ0E7SUFDRDtFQUFFLEVBRUgsRUFBQyxHQUFDLENBQXFCLENBRXpCLENBQ0k7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JPRDtBQUNBO0FBQ0E7O0FBS2lDOztBQUVqQztBQUNBO0FBQ0E7O0FBS21COztBQUVuQjtBQUNBO0FBQ0E7O0FBRWUsU0FBU2pELElBQUksT0FXekI7RUFBQSxJQVgwQjtJQUN6QnhGLFVBQVUsRUFBRTtNQUNkRSxjQUFjLEVBQUU7UUFDZkMsS0FBSyxFQUFFQyxRQUFRO1FBQ2ZDLFNBQVMsRUFBRUM7TUFDWixDQUFDO01BQ0RDLGNBQWMsRUFBRTtRQUNmSixLQUFLLEVBQUVLLFFBQVE7UUFDZkgsU0FBUyxFQUFFSTtNQUNaO0lBQ0Q7RUFDRCxDQUFDO0VBQ0c7RUFDQSxNQUFNNkIsZ0JBQWdCLEdBQUdwRSw2RUFBd0IsQ0FBQztJQUFFLEdBQUdHLHVFQUFrQixDQUFDO01BQ3RFc0MsS0FBSyxFQUFFO1FBQ0g0QixpQkFBaUIsRUFBRXJELG9FQUF5QixDQUFDLENBQUMsRUFBRWtCLFFBQVEsRUFBRUksUUFBUSxDQUFDLENBQUM7UUFDcEVnQyxtQkFBbUIsRUFBRXJELDRFQUFpQyxDQUFDLENBQUMsRUFBRW1CLFlBQVksQ0FBQyxDQUFDO1FBQ2pGbUMsZ0JBQWdCLEVBQUV0RCw0RUFBaUMsQ0FBQyxDQUFDLEVBQUVzQixZQUFZLENBQUMsQ0FBQztNQUNoRTtJQUNKLENBQUM7RUFBQyxDQUFDLENBQUM7RUFDUDtFQUNHLE9BQ0YseUVBQVM2QixnQkFBZ0IsQ0FBRztBQUU5QjtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0Q7QUFDQTtBQUNBOztBQUVPLFNBQVM2RyxhQUFhLENBQUNDLE1BQU0sRUFBRTtFQUNsQyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsTUFBTSxDQUFDLENBQUNHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTQyxnQkFBZ0IsQ0FBQ3hDLENBQUMsRUFBRUcsQ0FBQyxFQUFFO0VBQ25DLE9BQU9nQyxhQUFhLENBQUUsR0FBRWhDLENBQUUsSUFBR0gsQ0FBRSxFQUFDLENBQUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVPLFNBQVNKLHdCQUF3QixDQUFDRyxNQUFNLEVBQUVHLE1BQU0sRUFBRUUsSUFBSSxFQUFFQyxJQUFJLEVBQUU7RUFDakU7RUFDQSxNQUFNQyxLQUFLLEdBQUc2QixhQUFhLENBQUUsR0FBRWpDLE1BQU8sSUFBR0gsTUFBTyxFQUFDLENBQUM7RUFDbEQsTUFBTVUsR0FBRyxHQUFHMEIsYUFBYSxDQUFFLEdBQUU5QixJQUFLLElBQUdELElBQUssRUFBQyxDQUFDO0VBQzVDLE9BQVEsR0FBRUUsS0FBTSxNQUFLQSxLQUFNLE1BQUtHLEdBQUksTUFBS0EsR0FBSSxFQUFDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTs7QUFFTyxTQUFTdkkseUJBQXlCLENBQUN1SyxPQUFPLEVBQUVySixRQUFRLEVBQUVJLFFBQVEsRUFBRTtFQUNuRSxJQUFHaUosT0FBTyxFQUFFO0lBQ1I7SUFDQSxPQUFPdkcsS0FBSyxDQUFDZ0IsSUFBSSxDQUFDaEIsS0FBSyxDQUFDMUMsUUFBUSxDQUFDLENBQUMsQ0FBQ2lFLE1BQU0sQ0FBQyxDQUFDaUYsT0FBTyxFQUFFdEcsQ0FBQyxFQUFFdUcsS0FBSyxLQUN2RCxHQUFFRCxPQUFRLE1BQUt4RyxLQUFLLENBQUNnQixJQUFJLENBQUNoQixLQUFLLENBQUM5QyxRQUFRLENBQUMsQ0FBQyxDQUFDcUUsTUFBTSxDQUFDLENBQUNtRixPQUFPLEVBQUV4RyxDQUFDLEVBQUV5RyxLQUFLLEtBQUs7TUFDdEUsT0FBUSxHQUFFRCxPQUFRLElBQUdKLGdCQUFnQixDQUFDLEVBQUVLLEtBQUssRUFBRUYsS0FBSyxHQUFHLENBQUMsQ0FBRSxFQUFDO0lBQy9ELENBQUMsRUFBRSxFQUFFLENBQUUsR0FDVixFQUFFLEVBQUUsQ0FBQztFQUNWLENBQUMsTUFBTTtJQUNIO0lBQ0E7SUFDQTtJQUNBLE9BQU96RyxLQUFLLENBQUNnQixJQUFJLENBQUNoQixLQUFLLENBQUMxQyxRQUFRLENBQUMsQ0FBQyxDQUFDaUUsTUFBTSxDQUFDLENBQUNpRixPQUFPLEVBQUV0RyxDQUFDLEVBQUV1RyxLQUFLLEtBQ3ZELEdBQUVELE9BQVEsTUFBS3hHLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQzlDLFFBQVEsQ0FBQyxDQUFDLENBQUNxRSxNQUFNLENBQUMsQ0FBQ21GLE9BQU8sRUFBRXhHLENBQUMsRUFBRXlHLEtBQUssS0FBSztNQUN0RSxPQUFRLEdBQUVELE9BQVEsSUFBR0osZ0JBQWdCLENBQUMsRUFBRUssS0FBSyxFQUFFRixLQUFLLEdBQUcsQ0FBQyxDQUFFLEVBQUM7SUFDL0QsQ0FBQyxFQUFFLEdBQUcsQ0FBRSxHQUNYLEVBQUcsSUFBR3pHLEtBQUssQ0FBQ2dCLElBQUksQ0FBQ2hCLEtBQUssQ0FBQzlDLFFBQVEsQ0FBQyxDQUFDLENBQUNxRSxNQUFNLENBQUMsQ0FBQ3FGLFNBQVMsRUFBRTFHLENBQUMsRUFBRUMsQ0FBQyxLQUFNLEdBQUV5RyxTQUFVLElBQUcsRUFBRSxHQUFHLENBQUUsR0FBRSxDQUFDO0VBQzdGO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVPLFNBQVMzSyxpQ0FBaUMsQ0FBQ3NLLE9BQU8sRUFBRXBKLFNBQVMsRUFBRTtFQUNsRSxJQUFHb0osT0FBTyxFQUFFO0lBQ1I7SUFDQSxPQUFPcEosU0FBUyxDQUFDb0UsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRU0sR0FBRyxLQUFLO01BQ2xDLE9BQVEsR0FBRU4sR0FBSSxJQUFHTSxHQUFJLEVBQUM7SUFDMUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNWLENBQUMsTUFBTTtJQUNIO0lBQ0E7SUFDQSxPQUFPM0UsU0FBUyxDQUFDb0UsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRU0sR0FBRyxLQUFLO01BQ2xDLE9BQVEsR0FBRU4sR0FBSSxJQUFHTSxHQUFJLEVBQUM7SUFDMUIsQ0FBQyxFQUFFLGFBQWEsQ0FBQztFQUNyQjtBQUNKOzs7Ozs7Ozs7OztBQ3BFQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL25vZGVfbW9kdWxlcy9Ad29yZHByZXNzL2ljb25zL2J1aWxkLW1vZHVsZS9saWJyYXJ5L2dyaWQuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3IvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3NhdmUuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJibG9ja3NcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImVsZW1lbnRcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInByaW1pdGl2ZXNcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiQHdvcmRwcmVzcy9lbGVtZW50XCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBTVkcsIFBhdGggfSBmcm9tICdAd29yZHByZXNzL3ByaW1pdGl2ZXMnO1xuY29uc3QgZ3JpZCA9IGNyZWF0ZUVsZW1lbnQoU1ZHLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCJcbn0sIGNyZWF0ZUVsZW1lbnQoUGF0aCwge1xuICBkOiBcIk0xOSAzSDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptLTcuOCAxNi41SDVjLS4zIDAtLjUtLjItLjUtLjV2LTYuMmg2Ljh2Ni43em0wLTguM0g0LjVWNWMwLS4zLjItLjUuNS0uNWg2LjJ2Ni43em04LjMgNy44YzAgLjMtLjIuNS0uNS41aC02LjJ2LTYuOGg2LjhWMTl6bTAtNy44aC02LjhWNC41SDE5Yy4zIDAgLjUuMi41LjV2Ni4yelwiLFxuICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gIGNsaXBSdWxlOiBcImV2ZW5vZGRcIlxufSkpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyaWQuanMubWFwIiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxuICovXG5cbmltcG9ydCB7XG5cdE5vdGljZSxcblx0UGFuZWwsXG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0QnV0dG9uLFxuXHRUb29sdGlwXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHRCbG9ja0NvbnRyb2xzLFxuXHRCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhcixcblx0dXNlQmxvY2tQcm9wcyxcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRfXyxcblx0X24sXG5cdHNwcmludGZcbn0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHtcblx0d2l0aERpc3BhdGNoLFxuXHR1c2VTZWxlY3QsXG59IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmltcG9ydCB7IFxuXHR1c2VTdGF0ZSxcblx0dXNlRWZmZWN0XG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IFxuXHRjcmVhdGVSZWR1eFN0b3JlLCBcblx0cmVnaXN0ZXJcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuXG5pbXBvcnQge1xuXHR1c2VSZWZFZmZlY3QgXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5cbmltcG9ydCAnLi8uLi8uLi8uLi9jb21tb24vc3R5bGVzL2dyaWQtc3R5bGVzL2VkaXRvci5zY3NzJztcblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzLFxufSBmcm9tICcuL3V0aWxzLmpzJ1xuXG5pbXBvcnQgeyBHcmlkRWRpdG9yIH0gZnJvbSAnLi9sb2NhbF9jb21wb25lbnRzL0dyaWRFZGl0b3InXG5cbi8qXG4qIFJlZHV4IHN0b3JlIGh0bWxGb3IgaG9sZGluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhLCBcbiogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGgybWwvZ3JpZC1hcmVhIGlzIHZpc3VhbGx5IG9uIHRvcCBpbiB0aGUgZWRpdG9yLlxuKi9cblxucmVnaXN0ZXIoY3JlYXRlUmVkdXhTdG9yZShcImgybWwvZ3JpZF9hcmVhX3N0b3JlXCIsIHtcblx0cmVkdWNlcihzdGF0ZSA9IHtcblx0XHRzZWxlY3RlZDoge1xuXHRcdFx0dmFsdWU6IG51bGxcblx0XHR9LFxuXHR9LCBhY3Rpb24pIHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIFwiVVBEQVRFX1NFTEVDVEVEX0dSSURfQVJFQVwiOiB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0XHRcdC4uLnN0YXRlLnNlbGVjdGVkLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGFjdGlvbi52YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9LFxuXHRhY3Rpb25zOiB7XG5cdFx0c2V0U2VsZWN0ZWRHcmlkQXJlYSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dHlwZTogXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCIsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9O1xuXHRcdH1cblx0fSxcblx0c2VsZWN0b3JzOiB7XG5cdFx0Z2V0U2VsZWN0ZWRHcmlkQXJlYShzdGF0ZSkge1xuXHRcdFx0cmV0dXJuIHN0YXRlLnNlbGVjdGVkLnZhbHVlO1xuXHRcdH1cblx0fVxufSkpO1xuXG4vKipcbiAqIFRoZSBDb2RlLlxuICovXG5cbmNvbnN0IEdyaWRFZGl0ID0gKHtcblx0Ly8gQXR0cmlidXRlcy5cblx0YXR0cmlidXRlczoge1xuXHRcdHZlcnRpY2FsQWxpZ25tZW50LFxuXHRcdGNvbERlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogY29sQ291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IGNvbFRlbXBsYXRlc1xuXHRcdH0sXG5cdFx0cm93RGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiByb3dDb3VudCxcblx0XHRcdHRlbXBsYXRlczogcm93VGVtcGxhdGVzXG5cdFx0fSxcblx0XHRlZGl0aW5nLFxuXHRcdHN0eWxlXG5cdH0sXG5cdC8vIEF0dHJpYnV0ZSBTZXR0ZXJzLlxuXHRzZXRBbGlnbm1lbnQsXG5cdHNldEdyaWROb0NvbHNPclJvd3MsXG5cdHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93LFxuXHRzZXRHcmlkRWRpdGluZyxcblx0Ly8gUmVkdXggU2V0dGVycy5cblx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcixcblx0Ly8gT3RoZXIuXG5cdGNsaWVudElkXG59KSA9PiB7XG5cdC8vXG5cdC8vIEdldCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBCbG9jaywgYW5kIGl0cyBjaGlsZHJlbi4gXG5cdC8vIChVc2VkIGh0bWxGb3Igc2V0dGluZyB0aGUgZWRpdG9yIHN0YWNraW5nIG9yZGVyLCBhbmQgYWRkaW5nIC8gZWRpdGluZyBHcmlkLUFyZWEncylcblx0Ly9cblxuXHRjb25zdCB7IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLCBncmlkQ2hpbGRyZW4gfSA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3QgeyBnZXRCbG9ja3MsIGdldFNlbGVjdGVkQmxvY2tDbGllbnRJZCwgZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUgfSA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkID0gZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkKCk7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkID0gc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkID8gZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCddLCB0cnVlKVswXSA6IGZhbHNlO1xuXHRcdGNvbnN0IGdyaWRDaGlsZHJlbiA9IGdldEJsb2NrcyhjbGllbnRJZCk7XG5cdFx0Ly8gUmV0dXJuIFZhbHVlcy5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLFxuXHRcdFx0c2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkLFxuXHRcdFx0Z3JpZENoaWxkcmVuXG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdC8vXG5cdC8vIEhhbmRsZSB1cGRhdGluZyB0aGUgc3RhY2tpbmcgb3JkZXIgaHRtbEZvciBhbnkgY3VycmVudGx5IHNlbGVjdGVkIEdyaWQgQXJlYSdzIHdpdGhpbiB0aGUgZWRpdG9yLlxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlcihzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsIHNlbGVjdGVkR3JpZEl0ZW1Sb290QmxvY2tDbGllbnRJZCk7XG5cdH0sIFtzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWRdKTtcblxuXHQvL1xuXHQvLyBmb2N1c1RhcmdldCBzdGF0ZSwgdGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB3ZSBhdXRvLWZvY3VzIG9uIHRoZSBjb3JyZWN0IEdyaWQgQXJlYSB3aGVuIG1ha2luZyBjaGFuZ2VzIHRvIHRoZSBHcmlkLlxuXHQvL1xuXG5cdGNvbnN0IFtmb2N1c1RhcmdldCwgc2V0Rm9jdXNUYXJnZXRdID0gdXNlU3RhdGUobnVsbCk7XG5cblx0Ly8gXG5cdC8vIElmIGVpdGhlciBvZiB0aGUgR3JpZCdzIHRvdGFsIG51bWJlciBvZiBjaGlsZHJlbiBjaGFuZ2VzIChhZGRpbmcpLCBvciBpZiB0aGUgJ3JlcXVlc3RFZGl0JyBhdHRyaWJ1dGUgb2Ygb25lIG9mIHRoZSBHcmlkJ3MgXG5cdC8vIGNoYW5nZXMgKHVwZGF0aW5nKSB0aGVuIGRvIHRoZSBmb2xsb3dpbmc6IFxuXHQvLyBcblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGlzIGFscmVhZHkgc2V0IHRoZW4gd2UgaGF2ZSBqdXN0IGZpbmlzaGVkIGVkaXRpbmcsIGFuZCB3ZSBzaG91bGQgZGV0ZXJtaW5lIGlmIHdlIG5lZWQgXG5cdC8vIHRvIGZvY3VzIG9uIGFuIHVwZGF0ZWQgR3JpZCBBcmVhLiBJbiBlaXRoZXIgY2FzZSByZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgdG8gZmFsc2UuXG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBpcyBOT1Qgc2V0IHRoZW4gZGV0ZXJtaW5lIGlmIGFueSBvZiB0aGUgR3JpZCdzIEdyaWQtQXJlYSdzIGFyZSByZXF1ZXN0aW5nIGFuIGVkaXQuIFxuXHQvLyBJZiBzbywgY2FsbCBzZXRHcmlkRWRpdGluZy5cblx0Ly9cblx0Ly8gVGhpcyBkb2VzIG5vdCBoYW5kbGUgYWRkaW5nIGEgbmV3IGdyaWQgYXJlYSwgdGhhdCBpcyBkb25lIGJ5IHRoZSBHcmlkIGl0c2VsZiB0aHJvdWdoIHRoZSBvbktleVByZXNzIGV2ZW50LCBvciBpdCBpcyBcblx0Ly8gZG9uZSBieSB0aGUgZ3JpZEVkaXRvciwgdXNpbmcgdGhlIEJsb2NrQXBwZW5kZXIgYnV0dG9uLiBcblx0Ly9cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmKCFlZGl0aW5nKSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgYSBHcmlkIEFyZWEgaXMgcmVxdWVzdGluZyB0byBiZSB1cGRhdGVkLiBcblx0XHRcdGNvbnN0IGNoaWxkUmVxdWVzdGVkRWRpdCA9IGdyaWRDaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLmF0dHJpYnV0ZXMucmVxdWVzdEVkaXQpO1xuXHRcdFx0aWYoY2hpbGRSZXF1ZXN0ZWRFZGl0KSBzZXRHcmlkRWRpdGluZyhjaGlsZFJlcXVlc3RlZEVkaXQpO1xuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0Ly8gU2V0IHRoZSBmb2N1c1RhcmdldCBpZiBuZWVkZWQuIFxuXHRcdFx0aWYoZWRpdGluZz8uY2xpZW50SWQpIHNldEZvY3VzVGFyZ2V0KGVkaXRpbmcpO1xuXHRcdFx0Ly8gUmVzZXQgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlLiBcblx0XHRcdHNldEdyaWRFZGl0aW5nKGZhbHNlKTtcblx0XHR9XG5cdH0sIFtncmlkQ2hpbGRyZW5dKTtcblxuXHQvL1xuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgY2hhbmdlcyB0byBmYWxzZSwgYW5kIGEgZm9jdXNUYXJnZXQgaXMgc2V0LCB0aGVuIC5mb2N1cygpIG9uIHRoZSBmb2N1c1RhcmdldCdzIERPTSBlbGVtZW50LFxuXHQvLyB0aGVuIHJlc2V0IHRoZSBmb2N1c1RhcmdldCB0byBudWxsLlxuXHQvL1xuXHRcblx0Y29uc3QgcmVmID0gdXNlUmVmRWZmZWN0KChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbGVtZW50O1xuXHRcdGlmKGVkaXRpbmcpIHtcblx0XHRcdG93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmxvY2s9XCIke2NsaWVudElkfVwiXWApLmZvY3VzKCk7XG5cdFx0fSBlbHNlIGlmKGZvY3VzVGFyZ2V0KSB7XG5cdFx0XHRvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJsb2NrPVwiJHtmb2N1c1RhcmdldC5jbGllbnRJZH1cIl1gKS5mb2N1cygpO1xuXHRcdFx0c2V0Rm9jdXNUYXJnZXQobnVsbClcblx0XHR9XG5cdH0sIFtlZGl0aW5nXSk7XG5cblx0Ly9cblx0Ly8gUmVnaXN0ZXIgdGhlIEJsb2NrIC8gSW5uZXJCbG9jayBQcm9wcy5cblx0Ly9cblxuXHRjb25zdCBuZXdHcmlkQXJlYVRleHQgPSBfXygnQWRkIG5ldyBHcmlkIEFyZWEnLCAnaDJtbCcpO1xuXHRjb25zdCB7IGNoaWxkcmVuLCAuLi5pbm5lckJsb2Nrc1Byb3BzIH0gPSB1c2VJbm5lckJsb2Nrc1Byb3BzKFxuXHRcdHVzZUJsb2NrUHJvcHMoe1xuXHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0Z3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoMCwgY29sQ291bnQsIHJvd0NvdW50KSAvKiAwID09PSAnZWRpdG9yJyAqLyxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKDAsIGNvbFRlbXBsYXRlcykgLyogMCA9PT0gJ2VkaXRvcicgKi8sXG5cdFx0XHRcdGdyaWRUZW1wbGF0ZVJvd3M6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cygwLCByb3dUZW1wbGF0ZXMpIC8qIDAgPT09ICdlZGl0b3InICovXG5cdFx0XHR9LFxuXHRcdFx0b25LZXlQcmVzczogKGUpID0+IHtcblx0XHRcdFx0aWYoY2xpZW50SWQgPT09IHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCkge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0Ly8gVmFyaWFibGVzLlxuXHRcdFx0XHRcdGNvbnN0IHsga2V5IH0gPSBlO1xuXHRcdFx0XHRcdGNvbnN0IGVkaXRLZXlzID0gWydhJywgJ0EnXTtcblx0XHRcdFx0XHRjb25zdCBleGl0S2V5cyA9IFsnYycsICdDJ107XG5cdFx0XHRcdFx0Ly8gQmluZCBrZXlzIHRvIGF0dHJpYnV0ZSBzZXR0ZXJzLlxuXHRcdFx0XHRcdGlmIChlZGl0S2V5cy5pbmNsdWRlcyhrZXkpICYmICFlZGl0aW5nKSBzZXRHcmlkRWRpdGluZyh0cnVlKTtcblx0XHRcdFx0XHRlbHNlIGlmIChleGl0S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG5cdFx0XHRcdFx0XHRzZXRHcmlkRWRpdGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlZjogcmVmXG5cdFx0fSksIHtcblx0XHRcdGFsbG93ZWRCbG9ja3M6IFsnaDJtbC9ncmlkLWFyZWEnXSxcblx0XHR9XG5cdCk7XG5cblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldEFsaWdubWVudH1cblx0XHRcdFx0XHR2YWx1ZT17dmVydGljYWxBbGlnbm1lbnR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbD5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBDb2x1bW5zYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sQ291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMCwgdmFsdWUpfSAvLyAwID09PSAnY29sJ1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRfX25leHRIYXNOb01hcmdpbkJvdHRvbVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhgR3JpZCBhcmVhIG51bWJlciBvZiBSb3dzYCwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cm93Q291bnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWROb0NvbHNPclJvd3MoMSwgdmFsdWUpfSAvLyAxID09PSAncm93J1xuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezh9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoY29sQ291bnQgKiByb3dDb3VudCkgPiA0OSAmJlxuXHRcdFx0XHRcdFx0XHRcdCg8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBpc0Rpc21pc3NpYmxlPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUaGUgbnVtYmVyIG9mIGNlbGxzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcmVjb21tZW5kZWQgbGltaXQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2gybWwnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPilcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBDb2x1bW5zIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0e1suLi5BcnJheShjb2xDb3VudCldLm1hcCgoXywgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgY29sLXNldHRpbmdzLSR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3NwcmludGYoX18oXCJDb2x1bW4gJTEkZCBXaWR0aFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sVGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDAsIGksIHZhbHVlIC8qIDAgPT09ICdjb2wnICovKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgUm93cyBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkocm93Q291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHJvdy1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiUm93ICUxJGQgSGVpZ2h0XCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMSwgaSwgdmFsdWUpIC8qIDAgPT09ICdyb3cnICovfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30+XG5cdFx0XHRcdDxHcmlkRWRpdG9yXG5cdFx0XHRcdFx0Z3JpZENsaWVudElkPXtjbGllbnRJZH1cblx0XHRcdFx0XHRjb2xDb3VudD17Y29sQ291bnR9XG5cdFx0XHRcdFx0cm93Q291bnQ9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdGVkaXRpbmc9e2VkaXRpbmd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWFzXCI+XG5cdFx0XHRcdFx0eyEoZWRpdGluZykgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtuZXdHcmlkQXJlYVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkTmV3R3JpZEFyZWFcIj57bmV3R3JpZEFyZWFUZXh0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRHcmlkRWRpdGluZyh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBkPVwiTTE4IDExLjJoLTUuMlY2aC0xLjZ2NS4ySDZ2MS42aDUuMlYxOGgxLjZ2LTUuMkgxOHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9ucy5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRoZSBHcmlkIEFyZWEncyBXUCBhbGlnbm1lbnQgKFdpZGUsIEZ1bGwgZXRjKS5cblx0XHQvL1xuXHRcdHNldEFsaWdubWVudCh2ZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB2ZXJ0aWNhbEFsaWdubWVudCB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIG51bWJlciBvZiBjb2x1bW5zIC8gcm93cywgY2xlYW4gdXAgdGhlIHJlbGV2YW50IHRlbXBsYXRlcywgYW5kIGZpbmFsbHkgc2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgR3JpZCBBcmVhJ3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkTm9Db2xzT3JSb3dzKHR5cGUsIGNvdW50KSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHNldHRpbmcgQ29sdW1ucyBvciBSb3dzLCBhbmQgYWxzbyBnZXQgdGhlIG9wcG9zaXRlLlxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0Y29uc3Qgb3RoZXIgPSBvcHRpb25zW3R5cGUgXiAxXTtcblx0XHRcdHR5cGUgPSBvcHRpb25zW3R5cGVdO1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXhpc3RpbmcgQ29sdW1uIC8gUm93IGRlZmluaXRpb24uXG5cdFx0XHRjb25zdCBkZWZpbml0aW9ucyA9IHsgLi4uYXR0cmlidXRlc1tgJHt0eXBlfURlZmluaXRpb25zYF0gfTtcblx0XHRcdGNvbnN0IGNvdW50RGVsdGEgPSBjb3VudCAtIGRlZmluaXRpb25zLmNvdW50O1xuXHRcdFx0Ly8gQ2xlYW4gdXAgQ29sdW1uIC8gUm93IHRlbXBsYXRlcy5cblx0XHRcdGNvbnN0IHVuaXQgPSB0eXBlID09PSAnY29sJyA/ICcxZnInIDogJ21heC1jb250ZW50Jztcblx0XHRcdGRlZmluaXRpb25zLnRlbXBsYXRlcy5zcGxpY2UoLi4uY291bnREZWx0YSA+IDAgP1xuXHRcdFx0XHRbZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCwgMCwgLi4uQXJyYXkuZnJvbShBcnJheShjb3VudERlbHRhKSkubWFwKF8gPT4gdW5pdCldIDogLy8gQWRkaW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHRcdFtjb3VudCwgZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCAtIDFdIC8vIFJlbW92aW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHQpO1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBkZWZpbml0aW9uJ3MgY291bnQgdmFsdWUgYW5kIHRoZW4gc2V0IHRoZSBhdHRyYnV0ZS4gXG5cdFx0XHRkZWZpbml0aW9ucy5jb3VudCA9IGNvdW50O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGVtcGxhdGVzIGh0bWxGb3Igc3BlY2lmaWMgQ29sdW1ucyAvIFJvd3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyh0eXBlLCBpbmRleCwgdGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgZ2VuZXJhdGluZyBhIENvbHVtbnMgb3IgUm93cyB0ZW1wbGF0ZVxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBnaXZlbiBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgYW5kIHNldCB0aGUgYXR0cmlidXRlLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzW2luZGV4XSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiB1bml0O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgJ2VkaXRpbmcnIGF0dHJpYnV0ZVxuXHRcdC8vXG5cdFx0c2V0R3JpZEVkaXRpbmcodmFsdWUpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZWRpdGluZzogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFdoZW4gYSBHcmlkLUFyZWEgb3IgYW55IG9mIGl0J3MgY2hpbGRyZW4gYXJlIHNlbGN0ZWQsIHZpc3VhbGx5IG1vdmUgdGhhdCBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIFxuXHRcdC8vIHN0YWNraW5nIGNvbnRleHQuICh0aGlzIGlzIG5vdCBzYXZlZCBhcyBhbiBhdHRyaWJ1dGUsIGFuZCBpcyBwdXJlbHkgaHRtbEZvciBjb252ZW5pZW5jZSBpbiB0aGUgZWRpdG9yKS5cblx0XHQvL1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdGNvbnN0IHsgY2xpZW50SWQgfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgeyBzZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBkaXNwYXRjaCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHRcdGlmIChzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPT09IGNsaWVudElkKSB7XG5cdFx0XHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lLCBnZXRCbG9ja3MgfSA9IHJlZ2lzdHJ5LnNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcGFyZW50cyA9IGdldEJsb2NrKHNlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCkubmFtZSAhPT0gJ2gybWwvZ3JpZC1hcmVhJyA/XG5cdFx0XHRcdFx0Z2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKSA6XG5cdFx0XHRcdFx0W3NlbGVjdGVkR3JpZEl0ZW1DbGllbnRJZCwgLi4uZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKV07XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlciA9IHBhcmVudHMucmVkdWNlKChyZXMsIHBhcmVudElkLCBpLCBzZWxmKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudEJsb2NrID0gZ2V0QmxvY2socGFyZW50SWQpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRCbG9jay5uYW1lID09PSAnaDJtbC9ncmlkLWFyZWEnKSB7XG5cdFx0XHRcdFx0XHRyZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGNsaWVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRcdFx0ZWRpdG9yU3RhY2tpbmdPcmRlcjogZ2V0QmxvY2tzKHNlbGZbKytpXSkucmVkdWNlKChyZXMsIGN1cikgPT4gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcywgMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEoe1xuXHRcdFx0XHRcdGNsaWVudElkOiBzZWxlY3RlZEdyaWRJdGVtQ2xpZW50SWQsXG5cdFx0XHRcdFx0cGFyZW50czogc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICghc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKShHcmlkRWRpdCk7XG5cbi8qXG4gKiBFeHBvcnQgdGhlIEJsb2NrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkRWRpdFdyYXBwZXIgey4uLnByb3BzfSAvPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IGdyaWQgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHQvL1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlLFxufSk7XG5cbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IENvbHNSb3dIZWxwZXJJbm5lciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0aW5kZXhcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPHNwYW4+e2luZGV4fTwvc3Bhbj5cbn07XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyTGFiZWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGxhYmxlVHlwZSxcblx0XHRsYWJsZUNvdW50XG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLXJvd3MtaGVscGVyLXdyYXBgfT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdyaWQtJHtsYWJsZVR5cGUuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCl9cy1oZWxwZXJgfSAvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGxhYmxlQ291bnQpKS5tYXAoKF8sIGxhYmxlSW5kZXgpID0+IChcblx0XHRcdDxkaXZcblx0XHRcdFx0a2V5PXtgJHtsYWJsZVR5cGV9LWxhYmxlLWNlbGwtJHtsYWJsZUluZGV4fWB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtY29scy1yb3dzLWhlbHBlclwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0W2BncmlkJHtsYWJsZVR5cGV9U3RhcnRgXTogKytsYWJsZUluZGV4ICsgMSxcblx0XHRcdFx0XHRbYGdyaWQke2xhYmxlVHlwZSA9PT0gJ0NvbHVtbicgPyAnUm93JyA6ICdDb2x1bW4nfVN0YXJ0YF06IDEsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUb29sdGlwIHRleHQ9e3NwcmludGYoX18oJyUyJHMgJTEkZCcsICdoMm1sJyksIGxhYmxlSW5kZXgsIGxhYmxlVHlwZSl9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFibGVJbmRleH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdDwvZGl2PlxuXHRcdCkpfVxuXHQ8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJDZWxsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjZWxsTGFiZWwsXG5cdFx0Y2VsbFgsXG5cdFx0Y2VsbFksXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZUVudGVyLFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1hcmVhLWhlbHBlclwiXG5cdFx0ey4uLnsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciB9fVxuXHRcdGRhdGEteGNvb3Jkcz17Y2VsbFh9XG5cdFx0ZGF0YS15Y29vcmRzPXtjZWxsWX1cblx0XHRzdHlsZT17e1xuXHRcdFx0Z3JpZEFyZWE6IGAke2NlbGxZICsgMX0gLyAke2NlbGxYICsgMX0gLyAke2NlbGxZICsgMn0gLyAke2NlbGxYICsgMn1gXG5cdFx0fX1cblx0PlxuXHRcdHtgJHtjZWxsTGFiZWx9YH0gPHN1Yj57YCgke2NlbGxYfSwgJHtjZWxsWX0pYH08L3N1Yj5cblx0PC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyQXBwZW5kZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHN0eWxlLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGFyZWFcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdGFyZWE9e2FyZWEgPyBhcmVhIDogbnVsbH1cblx0XHRcdHsuLi57IHN0eWxlIH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRfXyxcblx0X24sXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHtcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQgeyBjcmVhdGVCbG9jayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZVJlZkVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0R3JpZEhlbHBlckxhYmVsLFxuXHRHcmlkSGVscGVyQ2VsbCxcblx0R3JpZEhlbHBlckFwcGVuZGVyXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG4vKipcbiogRXZlbnQgY2FsbGJhY2sgRnVuY3Rpb24gZm9yIHN0YXJ0aW5nIC8gdXBkYXRpbmcgdGhlIHNlbGVjdGluZyBvZiBhIEdyaWQtQXJlYSBBcmVhXG4qL1xuXG5jb25zdCBkb0dyaWRIZWxwZXJTZWxlY3Rpb24gPSAoZSwgY29vcmRzLCByZXMpID0+IHtcblx0Ly8gUmVzZXQgdGhlIGdyaWQgYXJlYSBjb29yZHMgb24gbW91c2Vkb3duLlxuXHRpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykgcmVzID0gbnVsbDtcblx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHVwZGF0aW5nIGFuIGV4aXN0aW5nIHNlbGVjdGlvbiAoZHJhZ2dpbmcpLCBvciBzdGFydGluZyBhIG5ldyBvbmUgKGNsaWNraW5nKS5cblx0Y29uc3Qgc3RhcnRYID0gcmVzPy5zdG9yZT8ueCA/IHJlcz8uc3RvcmU/LnggOiBOdW1iZXIoY29vcmRzLmNlbGxYKTtcblx0Y29uc3Qgc3RhcnRZID0gcmVzPy5zdG9yZT8ueSA/IHJlcz8uc3RvcmU/LnkgOiBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Y29uc3QgZW5kWCA9IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBlbmRZID0gTnVtYmVyKGNvb3Jkcy5jZWxsWSk7XG5cdC8vIENhbGN1bGF0ZSBhbmQgc3RvcmUgdGhlIG5ldyBDb29yZHMgdmFsdWVzLlxuXHRyZXMgPSB7XG5cdFx0c3RvcmU6IHtcblx0XHRcdHg6IHN0YXJ0WCxcblx0XHRcdHk6IHN0YXJ0WSxcblx0XHR9LFxuXHRcdHN0YXJ0OiB7XG5cdFx0XHR4OiBNYXRoLm1pbihzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5taW4oc3RhcnRZLCBlbmRZKVxuXHRcdH0sXG5cdFx0ZW5kOiB7XG5cdFx0XHR4OiBNYXRoLm1heChzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5tYXgoc3RhcnRZLCBlbmRZKSxcblx0XHR9XG5cdH07XG5cdHJlcy5wYXJzZWQgPSBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQocmVzLnN0YXJ0LngsIHJlcy5zdGFydC55LCByZXMuZW5kLngsIHJlcy5lbmQueSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8qKlxuICogU2F2ZSBGdW5jdGlvblxuICovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNhdmUgPSAoZ3JpZENsaWVudElkLCB0YXJnZXQsIGNvb3JkcykgPT4ge1xuXHRpZiAodGFyZ2V0LmNsaWVudElkKSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3Qge3VwZGF0ZUJsb2NrQXR0cmlidXRlc30gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBVcGRhdGUgdGhlIHJlcXVlc3RlZCBHcmlkIEFyZWEuXG5cdFx0dXBkYXRlQmxvY2tBdHRyaWJ1dGVzKHRhcmdldC5jbGllbnRJZCwge1xuXHRcdFx0Z3JpZEFyZWE6IGNvb3Jkcyxcblx0XHRcdHJlcXVlc3RFZGl0OiBmYWxzZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgeyBpbnNlcnRCbG9jayB9ID0gZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gQWRkaW5nIGEgbmV3IEdyaWQgQXJlYS5cblx0XHRjb25zdCB7XG5cdFx0XHRuZXh0Q2hpbGRTdGFja2luZ09yZGVyLFxuXHRcdFx0bmV4dENoaWxkSW5kZXhcblx0XHR9ID0gZ2V0QmxvY2tzKGdyaWRDbGllbnRJZCkucmVkdWNlKFxuXHRcdFx0KHJlcywgY3VyLCBpbmQpID0+IHtcblx0XHRcdFx0cmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPSBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyID49IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyID8gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciArIDEgOiByZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlcjtcblx0XHRcdFx0cmVzLm5leHRDaGlsZEluZGV4ID0gaW5kICsgMTtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0sIHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXI6IDAsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleDogMFxuXHRcdH1cblx0XHQpO1xuXHRcdC8vIEluc2VydCB0aGUgbmV3IEdyaWQgQXJlYS5cblx0XHRpbnNlcnRCbG9jayhjcmVhdGVCbG9jaygnaDJtbC9ncmlkLWFyZWEnLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0c3RhY2tpbmdPcmRlcjogbmV4dENoaWxkU3RhY2tpbmdPcmRlclxuXHRcdH0pLCBuZXh0Q2hpbGRJbmRleCwgZ3JpZENsaWVudElkKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5leHBvcnQgY29uc3QgR3JpZEVkaXRvciA9IChwcm9wcykgPT4ge1xuXHQvLyBQcm9wZXJ0aWVzLlxuXHRjb25zdCB7XG5cdFx0Z3JpZENsaWVudElkLFxuXHRcdGNvbENvdW50LFxuXHRcdHJvd0NvdW50LFxuXHRcdGVkaXRpbmdcblx0fSA9IHByb3BzO1xuXHQvLyBTdGF0ZSBNYW5hZ2Vycy5cblx0Y29uc3QgW2dyaWRIZWxwZXJJc0RyYXdpbmcsIHNldEdyaWRIZWxwZXJJc0RyYXdpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNhblNhdmUsIHNldEdyaWRIZWxwZXJDYW5TYXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2dyaWRIZWxwZXJDb29yZFJlcywgc2V0R3JpZEhlbHBlckNvb3JkUmVzXSA9IHVzZVN0YXRlKG51bGwpO1xuXHQvL1xuXHQvLyBIYW5kbGUgRmluaXNoIEVkaXRpbmcuXG5cdC8vXG5cdGNvbnN0IHJlZiA9IHVzZVJlZkVmZmVjdCgoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWxlbWVudDtcblx0XHRjb25zdCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSA9ICgpID0+IHtcblx0XHRcdC8vXG5cdFx0XHRjb25zb2xlLmxvZygneDInKVxuXHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKHRydWUpO1xuXHRcdH1cblx0XHRpZihncmlkSGVscGVySXNEcmF3aW5nKSB7XG5cdFx0XHRvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHQvLyBDbGVhbnVwIHRoaXMgRG9jdW1lbnQgZXZlbnQgbGlzdGVuZXIuXG5cdFx0XHRvd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fTtcblx0fSwgW2dyaWRIZWxwZXJJc0RyYXdpbmddKTtcblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblx0cmV0dXJuIDxkaXYgXG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1oZWxwZXJzXCJcblx0XHRyZWY9e3JlZn1cblx0PlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIkNvbHVtblwiXG5cdFx0XHRsYWJsZUNvdW50PXtjb2xDb3VudH1cblx0XHQvPlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIlJvd1wiXG5cdFx0XHRsYWJsZUNvdW50PXtyb3dDb3VudH1cblx0XHQvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50ICogcm93Q291bnQpKS5tYXAoKF8sIGNlbGxJbmRleCkgPT4ge1xuXHRcdFx0Y2VsbEluZGV4Kys7XG5cdFx0XHRjb25zdCBjZWxsWCA9ICgoY2VsbEluZGV4IC0gMSkgJSBjb2xDb3VudCkgKyAxO1xuXHRcdFx0Y29uc3QgY2VsbFkgPSBNYXRoLmZsb29yKChjZWxsSW5kZXggLSAxKSAvIGNvbENvdW50KSArIDE7XG5cdFx0XHRyZXR1cm4gPEdyaWRIZWxwZXJDZWxsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0a2V5OiBgaGVscGVyLWNlbGwtJHtjZWxsSW5kZXh9YCxcblx0XHRcdFx0XHRjZWxsTGFiZWw6IGNlbGxJbmRleCxcblx0XHRcdFx0XHRjZWxsWCxcblx0XHRcdFx0XHRjZWxsWSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogKGVkaXRpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IChncmlkSGVscGVySXNEcmF3aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdheWUnKVxuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIEdyaWQgQXJlYSBTZWxlY3Rpb24uXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMoZG9HcmlkSGVscGVyU2VsZWN0aW9uKGUsIHsgY2VsbFgsIGNlbGxZIH0sIGdyaWRIZWxwZXJDb29yZFJlcykpO1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWQpXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdH0pfVxuXHRcdHtlZGl0aW5nICYmIChcblx0XHRcdDw+XG5cdFx0XHRcdHtlZGl0aW5nPy5jbGllbnRJZCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGVkaXQgdGhlIEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1hZGRpbmctZ3JpZC1hcmVhcy1ub3RpY2VcIj5cblx0XHRcdFx0XHRcdDxwPjxzdHJvbmc+e19fKFwiQ2xpY2sgYW5kIGRyYWdcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwidG8gYWRkIGEgbmV3IEdyaWQgQXJlYSwgd2hlbiB5b3UncmUgZG9uZSBjbGlja1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIlNhdmUgR3JpZCBBcmVhXCIsICdoMm1sJyl9PC9zdHJvbmc+LCB7X18oXCJwcmVzc1wiLCAnaDJtbCcpfSA8c3Ryb25nPntfXyhcIkVcIiwgJ2gybWwnKX08L3N0cm9uZz4ge19fKFwib3JcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJDXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGNhbmNlbC5cIiwgJ2gybWwnKX08YnIgLz57X18oXCJEb24ndCBmb3JnZXQgdG8gXCIpfTxzdHJvbmc+e19fKFwiVXBkYXRlXCIsICdoMm1sJyl9PC9zdHJvbmc+e19fKFwiIHRoZSBwb3N0IHdoZW4geW91J3JlIGRvbmUuXCIsICdoMm1sJyl9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8R3JpZEhlbHBlckFwcGVuZGVyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWEtYXBwZW5kZXJcIlxuXHRcdFx0XHRcdHN0eWxlPXtncmlkSGVscGVyQ29vcmRSZXMgPyB7XG5cdFx0XHRcdFx0XHRncmlkQXJlYTogZ3JpZEhlbHBlckNvb3JkUmVzLnBhcnNlZCxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4J1xuXHRcdFx0XHRcdH0gOiB1bmRlZmluZWR9XG5cdFx0XHRcdD4ge2dyaWRIZWxwZXJDYW5TYXZlICYmIChcblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR0ZXh0PXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsPXtlZGl0aW5nPy5jbGllbnRJZCA/IFxuXHRcdFx0XHRcdFx0XHRfXygnVXBkYXRlIEdyaWQgQXJlYScsICdoMm1sJykgOlxuXHRcdFx0XHRcdFx0XHRfXygnQWRkIEdyaWQgQXJlYScsICdoMm1sJylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNob3dUb29sdGlwPXt0cnVlfVxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4geyBcblx0XHRcdFx0XHRcdFx0Ly8gU2F2ZSB0aGUgbmV3IC8gdXBkYXRlZCBHcmlkIEFyZWEuXG5cdFx0XHRcdFx0XHRcdGRvR3JpZEhlbHBlclNhdmUoZ3JpZENsaWVudElkLCBlZGl0aW5nLCBncmlkSGVscGVyQ29vcmRSZXMpOyBcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgc3RhdGUuXG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKG51bGwpO1xuXHRcdFx0XHRcdFx0XHQvLyBXZSB1c2UgdXNlRWZmZWN0IGluIHRoZSBtYWluIGNvbXBvbmVudCB0byByZXNldCB0aGUgR3JpZHMgJ2VkaXRpbmcnIGF0dHJpdWJ0ZSwgc28gd2UgZG9uJ3Rcblx0XHRcdFx0XHRcdFx0Ly8gbmVlZCB0byB3b3JyeSBhYm91dCBkb2luZyBpdCBoZXJlLCB0aGlzIGFsbG93cyB1cyB0byBtb3JlIGVhc2lseSBmb2N1cyBvbiB0aGUgY29ycmVjdCBibG9ja3MuXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD48L0J1dHRvbj5cblx0XHRcdFx0KX0gPC9HcmlkSGVscGVyQXBwZW5kZXI+XG5cdFx0XHQ8Lz5cblx0XHQpfVxuXHQ8L2Rpdj5cbn0iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHR1c2VJbm5lckJsb2Nrc1Byb3BzLFxuXHR1c2VCbG9ja1Byb3BzLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5cbmltcG9ydCB7XG5cdGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMsXG4gICAgZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzXG59IGZyb20gJy4vdXRpbHMuanMnXG5cbi8qKlxuICogVGhlIENvZGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTYXZlKHtcbiAgICBhdHRyaWJ1dGVzOiB7XG5cdFx0Y29sRGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiBjb2xDb3VudCxcblx0XHRcdHRlbXBsYXRlczogY29sVGVtcGxhdGVzXG5cdFx0fSxcblx0XHRyb3dEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IHJvd0NvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiByb3dUZW1wbGF0ZXNcblx0XHR9XG5cdH0sXG59KSB7XG4gICAgLy9cbiAgICBjb25zdCBpbm5lckJsb2Nrc1Byb3BzID0gdXNlSW5uZXJCbG9ja3NQcm9wcy5zYXZlKHsgLi4udXNlQmxvY2tQcm9wcy5zYXZlKHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKDEsIGNvbENvdW50LCByb3dDb3VudCkgLyogMSA9PT0gJ3NhdmUnICovLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKDEsIGNvbFRlbXBsYXRlcykgLyogMSA9PT0gJ3NhdmUnICovLFxuXHRcdFx0Z3JpZFRlbXBsYXRlUm93czogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKDEsIHJvd1RlbXBsYXRlcykgLyogMSA9PT0gJ3NhdmUnICovXG4gICAgICAgIH1cbiAgICB9KX0pO1xuXHQvL1xuICAgIHJldHVybiAoXG5cdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30vPlxuXHQpO1xufTsiLCIvL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBjc3NTYWZlQmFzZTY0KHN0cmluZykge1xuICAgIHJldHVybiB3aW5kb3cuYnRvYShzdHJpbmcpLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWEoeCwgeSkge1xuICAgIHJldHVybiBjc3NTYWZlQmFzZTY0KGAke3l9LyR7eH1gKTtcbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kKHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZKSB7XG4gICAgLy9cbiAgICBjb25zdCBzdGFydCA9IGNzc1NhZmVCYXNlNjQoYCR7c3RhcnRZfS8ke3N0YXJ0WH1gKTtcbiAgICBjb25zdCBlbmQgPSBjc3NTYWZlQmFzZTY0KGAke2VuZFl9LyR7ZW5kWH1gKTtcbiAgICByZXR1cm4gYCR7c3RhcnR9IC8gJHtzdGFydH0gLyAke2VuZH0gLyAke2VuZH1gO1xufVxuXG4vL1xuLy8gR2VuZXJhdGUgdGhlIGdyaWQtdGVtcGxhdGUtYXJlYXMsIGdyaWQtdGVtcGxhdGUtY29sdW1ucywgYW5kIGdyaWQtdGVtcGxhdGUtcm93cyBDU1MuXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyhjb250ZXh0LCBjb2xDb3VudCwgcm93Q291bnQpIHtcbiAgICBpZihjb250ZXh0KSB7XG4gICAgICAgIC8vIFNhdmVcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkocm93Q291bnQpKS5yZWR1Y2UoKHJvd3NSZXMsIF8sIHJvd3NJKSA9PiAoXG4gICAgICAgICAgICBgJHtyb3dzUmVzfVxcblwiJHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50KSkucmVkdWNlKChjb2xzUmVzLCBfLCBjb2xzSSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb2xzUmVzfSAke2dlbmVyYXRlR3JpZEFyZWEoKytjb2xzSSwgcm93c0kgKyAxKX1gO1xuICAgICAgICAgICAgfSwgJycpfVwiYFxuICAgICAgICApLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRWRpdG9yXG4gICAgICAgIC8vIEluIHRoZSBlZGl0b3Igb25seSwgd2UgYWRkIGFuIGFkZGl0aW9uYWwgQ29sdW1uIC8gUm93IHRvIHRoZSBHcmlkIFRlbWxwbGF0ZSBBcmVhcywgXG4gICAgICAgIC8vIHRvIGFjY291bnQgZm9yIHRoZSBncmlkIGhlbHBlcnMuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KHJvd0NvdW50KSkucmVkdWNlKChyb3dzUmVzLCBfLCByb3dzSSkgPT4gKFxuICAgICAgICAgICAgYCR7cm93c1Jlc31cXG5cIiR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoY29sc1JlcywgXywgY29sc0kpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y29sc1Jlc30gJHtnZW5lcmF0ZUdyaWRBcmVhKCsrY29sc0ksIHJvd3NJICsgMSl9YDtcbiAgICAgICAgICAgIH0sICcuJyl9XCJgXG4gICAgICAgICksIGBcIiR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoZWRpdG9yUmVzLCBfLCBpKSA9PiBgJHtlZGl0b3JSZXN9IC5gLCAnLicpfVwiYCk7XG4gICAgfVxufVxuXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoY29udGV4dCwgdGVtcGxhdGVzKSB7XG4gICAgaWYoY29udGV4dCkge1xuICAgICAgICAvLyBTYXZlXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZXMucmVkdWNlKChyZXMsIGN1cikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGAke3Jlc30gJHtjdXJ9YDtcbiAgICAgICAgfSwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVkaXRvclxuICAgICAgICAvLyBJbiB0aGUgZWRpdG9yIG9ubHksIHdlIGFkZCBhbiBhZGRpdGlvbmFsIENvbHVtbiAvIFJvdyB0ZW1wbGF0ZSB0byBhY2NvdW50IGZvciB0aGUgZ3JpZCBoZWxwZXJzLlxuICAgICAgICByZXR1cm4gdGVtcGxhdGVzLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyZXN9ICR7Y3VyfWA7XG4gICAgICAgIH0sICdtaW4tY29udGVudCcpO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJibG9ja0VkaXRvclwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJkYXRhXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJwcmltaXRpdmVzXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcIi4vc3R5bGUtaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoMm1sX2dyaWRhcmVhXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2gybWxfZ3JpZGFyZWFcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcIi4vc3R5bGUtaW5kZXhcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJOb3RpY2UiLCJQYW5lbCIsIlBhbmVsQm9keSIsIlJhbmdlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQnV0dG9uIiwiVG9vbHRpcCIsIkluc3BlY3RvckNvbnRyb2xzIiwidXNlSW5uZXJCbG9ja3NQcm9wcyIsIkJsb2NrQ29udHJvbHMiLCJCbG9ja1ZlcnRpY2FsQWxpZ25tZW50VG9vbGJhciIsInVzZUJsb2NrUHJvcHMiLCJzdG9yZSIsImJsb2NrRWRpdG9yU3RvcmUiLCJfXyIsIl9uIiwic3ByaW50ZiIsIndpdGhEaXNwYXRjaCIsInVzZVNlbGVjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUmVkdXhTdG9yZSIsInJlZ2lzdGVyIiwidXNlUmVmRWZmZWN0IiwiZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQ29sdW1uc09yUm93cyIsIkdyaWRFZGl0b3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJzZWxlY3RlZCIsInZhbHVlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvbnMiLCJzZXRTZWxlY3RlZEdyaWRBcmVhIiwic2VsZWN0b3JzIiwiZ2V0U2VsZWN0ZWRHcmlkQXJlYSIsIkdyaWRFZGl0IiwiYXR0cmlidXRlcyIsInZlcnRpY2FsQWxpZ25tZW50IiwiY29sRGVmaW5pdGlvbnMiLCJjb3VudCIsImNvbENvdW50IiwidGVtcGxhdGVzIiwiY29sVGVtcGxhdGVzIiwicm93RGVmaW5pdGlvbnMiLCJyb3dDb3VudCIsInJvd1RlbXBsYXRlcyIsImVkaXRpbmciLCJzdHlsZSIsInNldEFsaWdubWVudCIsInNldEdyaWROb0NvbHNPclJvd3MiLCJzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyIsInNldEdyaWRFZGl0aW5nIiwic2V0R3JpZEFyZWFzRWRpdG9yU3RhY2tpbmdPcmRlciIsImNsaWVudElkIiwic2VsZWN0ZWRHcmlkSXRlbUNsaWVudElkIiwic2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkIiwiZ3JpZENoaWxkcmVuIiwic2VsZWN0IiwiZ2V0QmxvY2tzIiwiZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkIiwiZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUiLCJmb2N1c1RhcmdldCIsInNldEZvY3VzVGFyZ2V0IiwiY2hpbGRSZXF1ZXN0ZWRFZGl0IiwiZmluZCIsImNoaWxkIiwicmVxdWVzdEVkaXQiLCJyZWYiLCJlbGVtZW50Iiwib3duZXJEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIm5ld0dyaWRBcmVhVGV4dCIsImNoaWxkcmVuIiwiaW5uZXJCbG9ja3NQcm9wcyIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJvbktleVByZXNzIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsImVkaXRLZXlzIiwiZXhpdEtleXMiLCJpbmNsdWRlcyIsImFsbG93ZWRCbG9ja3MiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiR3JpZEVkaXRXcmFwcGVyIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInJlZ2lzdHJ5Iiwic2V0QXR0cmlidXRlcyIsIm9wdGlvbnMiLCJvdGhlciIsImRlZmluaXRpb25zIiwiY291bnREZWx0YSIsInVuaXQiLCJzcGxpY2UiLCJsZW5ndGgiLCJmcm9tIiwiaW5kZXgiLCJ0ZW1wbGF0ZSIsImdldEJsb2NrIiwicGFyZW50cyIsIm5hbWUiLCJzZWxlY3RlZEJsb2NrUGFyZW50c1N0YWNraW5nT3JkZXIiLCJyZWR1Y2UiLCJyZXMiLCJwYXJlbnRJZCIsInNlbGYiLCJwYXJlbnRCbG9jayIsInB1c2giLCJlZGl0b3JTdGFja2luZ09yZGVyIiwiY3VyIiwic3RhY2tpbmdPcmRlciIsIkVkaXQiLCJwcm9wcyIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiZ3JpZCIsImljb24iLCJtZXRhZGF0YSIsIlNhdmUiLCJlZGl0Iiwic2F2ZSIsIkNvbHNSb3dIZWxwZXJJbm5lciIsIkdyaWRIZWxwZXJMYWJlbCIsImxhYmxlVHlwZSIsImxhYmxlQ291bnQiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImxhYmxlSW5kZXgiLCJHcmlkSGVscGVyQ2VsbCIsImNlbGxMYWJlbCIsImNlbGxYIiwiY2VsbFkiLCJvbk1vdXNlRG93biIsIm9uTW91c2VFbnRlciIsImdyaWRBcmVhIiwiR3JpZEhlbHBlckFwcGVuZGVyIiwiYXJlYSIsImNyZWF0ZUJsb2NrIiwiZ2VuZXJhdGVHcmlkQXJlYVN0YXJ0RW5kIiwiZG9HcmlkSGVscGVyU2VsZWN0aW9uIiwiY29vcmRzIiwic3RhcnRYIiwieCIsIk51bWJlciIsInN0YXJ0WSIsInkiLCJlbmRYIiwiZW5kWSIsInN0YXJ0IiwiTWF0aCIsIm1pbiIsImVuZCIsIm1heCIsInBhcnNlZCIsImRvR3JpZEhlbHBlclNhdmUiLCJncmlkQ2xpZW50SWQiLCJ0YXJnZXQiLCJ1cGRhdGVCbG9ja0F0dHJpYnV0ZXMiLCJpbnNlcnRCbG9jayIsIm5leHRDaGlsZFN0YWNraW5nT3JkZXIiLCJuZXh0Q2hpbGRJbmRleCIsImluZCIsImdyaWRIZWxwZXJJc0RyYXdpbmciLCJzZXRHcmlkSGVscGVySXNEcmF3aW5nIiwiZ3JpZEhlbHBlckNhblNhdmUiLCJzZXRHcmlkSGVscGVyQ2FuU2F2ZSIsImdyaWRIZWxwZXJDb29yZFJlcyIsInNldEdyaWRIZWxwZXJDb29yZFJlcyIsImZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2VsbEluZGV4IiwiZmxvb3IiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3NzU2FmZUJhc2U2NCIsInN0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZXBsYWNlIiwiZ2VuZXJhdGVHcmlkQXJlYSIsImNvbnRleHQiLCJyb3dzUmVzIiwicm93c0kiLCJjb2xzUmVzIiwiY29sc0kiLCJlZGl0b3JSZXMiXSwic291cmNlUm9vdCI6IiJ9