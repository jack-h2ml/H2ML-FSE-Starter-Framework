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
      gridTemplateAreas: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateAreas)(0, colCount, rowCount) /* 0 === 'editor' */,
      gridTemplateColumns: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(0, colTemplates) /* 0 === 'editor' */,
      gridTemplateRows: (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.generateGridTemplateColumnsOrRows)(0, rowTemplates) /* 0 === 'editor' */
    },

    onKeyPress: e => {
      if (clientId === selectedBlockClientId) {
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

let i = 0;
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
    return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `${rowsRes}'${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
      return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`.trim();
    }, '')}'`, '');
  } else {
    // Editor
    // In the editor only, we add an additional Column / Row to the Grid Temlplate Areas, 
    // to account for the grid helpers.
    return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `${rowsRes}'${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
      return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`;
    }, '.')}'`, `'${Array.from(Array(colCount)).reduce((editorRes, _, i) => `${editorRes} .`, '.')}'`);
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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"h2ml/grid","version":"0.1.0","title":"Grid","category":"design","description":"Display content in a Grid, across multiple Grid Areas, adding blocks to each Grid Area.","textdomain":"h2ml","keywords":["h2ml","grid"],"attributes":{"verticalAlignment":{"type":"string"},"colDefinitions":{"type":"object","default":{"count":3,"templates":["1fr","1fr","1fr"]}},"rowDefinitions":{"type":"object","default":{"count":4,"templates":["max-content","max-content","max-content","max-content"]}}},"supports":{"anchor":true,"align":["wide","full"],"reusable":true,"html":true,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":["horizontal","vertical"],"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true,"margin":true,"blockGap":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvaWNvbnMvYnVpbGQtbW9kdWxlL2xpYnJhcnkvZ3JpZC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2VkaXQuanMiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvci9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvbG9jYWxfY29tcG9uZW50cy9HcmlkRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvc2F2ZS5qcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi4vLi4vY29tbW9uL3N0eWxlcy9ncmlkLXN0eWxlcy9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhLy4vc3JjL2VkaXRvci5zY3NzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiYmxvY2tFZGl0b3JcIl0iLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2Nrc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiZWxlbWVudFwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaTE4blwiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwicHJpbWl0aXZlc1wiXSIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2gybWwtZ3JpZGFyZWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oMm1sLWdyaWRhcmVhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaDJtbC1ncmlkYXJlYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJAd29yZHByZXNzL2VsZW1lbnRcIjtcblxuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IFNWRywgUGF0aCB9IGZyb20gJ0B3b3JkcHJlc3MvcHJpbWl0aXZlcyc7XG5jb25zdCBncmlkID0gY3JlYXRlRWxlbWVudChTVkcsIHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIlxufSwgY3JlYXRlRWxlbWVudChQYXRoLCB7XG4gIGQ6IFwiTTE5IDNINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0tNy44IDE2LjVINWMtLjMgMC0uNS0uMi0uNS0uNXYtNi4yaDYuOHY2Ljd6bTAtOC4zSDQuNVY1YzAtLjMuMi0uNS41LS41aDYuMnY2Ljd6bTguMyA3LjhjMCAuMy0uMi41LS41LjVoLTYuMnYtNi44aDYuOFYxOXptMC03LjhoLTYuOFY0LjVIMTljLjMgMCAuNS4yLjUuNXY2LjJ6XCIsXG4gIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG59KSk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JpZC5qcy5tYXAiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Tm90aWNlLFxuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRCdXR0b24sXG5cdFRvb2x0aXBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrVmVydGljYWxBbGlnbm1lbnRUb29sYmFyLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQge1xuXHR3aXRoRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHsgXG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3Rcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuaW1wb3J0IHsgXG5cdGNyZWF0ZVJlZHV4U3RvcmUsIFxuXHRyZWdpc3RlclxufSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5cbmltcG9ydCB7XG5cdHVzZVJlZkVmZmVjdCBcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb3NlJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5pbXBvcnQge1xuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzLFxuXHRnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MsXG59IGZyb20gJy4vdXRpbHMuanMnXG5cbmltcG9ydCB7IEdyaWRFZGl0b3IgfSBmcm9tICcuL2xvY2FsX2NvbXBvbmVudHMvR3JpZEVkaXRvcidcblxuLypcbiogUmVkdXggc3RvcmUgaHRtbEZvciBob2xkaW5nIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaDJtbC9ncmlkLWFyZWEsIFxuKiBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaDJtbC9ncmlkLWFyZWEgaXMgdmlzdWFsbHkgb24gdG9wIGluIHRoZSBlZGl0b3IuXG4qL1xuXG5yZWdpc3RlcihjcmVhdGVSZWR1eFN0b3JlKFwiaDJtbC9ncmlkX2FyZWFfc3RvcmVcIiwge1xuXHRyZWR1Y2VyKHN0YXRlID0ge1xuXHRcdHNlbGVjdGVkOiB7XG5cdFx0XHR2YWx1ZTogbnVsbFxuXHRcdH0sXG5cdH0sIGFjdGlvbikge1xuXHRcdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRcdGNhc2UgXCJVUERBVEVfU0VMRUNURURfR1JJRF9BUkVBXCI6IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRcdFx0Li4uc3RhdGUuc2VsZWN0ZWQsXG5cdFx0XHRcdFx0XHR2YWx1ZTogYWN0aW9uLnZhbHVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RhdGU7XG5cdH0sXG5cdGFjdGlvbnM6IHtcblx0XHRzZXRTZWxlY3RlZEdyaWRBcmVhKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0eXBlOiBcIlVQREFURV9TRUxFQ1RFRF9HUklEX0FSRUFcIixcblx0XHRcdFx0dmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXHR9LFxuXHRzZWxlY3RvcnM6IHtcblx0XHRnZXRTZWxlY3RlZEdyaWRBcmVhKHN0YXRlKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUuc2VsZWN0ZWQudmFsdWU7XG5cdFx0fVxuXHR9XG59KSk7XG5cbi8qKlxuICogVGhlIENvZGUuXG4gKi9cblxuY29uc3QgR3JpZEVkaXQgPSAoe1xuXHQvLyBBdHRyaWJ1dGVzLlxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dmVydGljYWxBbGlnbm1lbnQsXG5cdFx0Y29sRGVmaW5pdGlvbnM6IHtcblx0XHRcdGNvdW50OiBjb2xDb3VudCxcblx0XHRcdHRlbXBsYXRlczogY29sVGVtcGxhdGVzXG5cdFx0fSxcblx0XHRyb3dEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IHJvd0NvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiByb3dUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdGVkaXRpbmdcblx0fSxcblx0Ly8gQXR0cmlidXRlIFNldHRlcnMuXG5cdHNldEFsaWdubWVudCxcblx0c2V0R3JpZE5vQ29sc09yUm93cyxcblx0c2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3csXG5cdHNldEdyaWRFZGl0aW5nLFxuXHQvLyBSZWR1eCBTZXR0ZXJzLlxuXHRzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyLFxuXHQvLyBPdGhlci5cblx0Y2xpZW50SWRcbn0pID0+IHtcblx0Ly9cblx0Ly8gR2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IEJsb2NrLCBhbmQgaXRzIGNoaWxkcmVuLiBcblx0Ly8gKFVzZWQgaHRtbEZvciBzZXR0aW5nIHRoZSBlZGl0b3Igc3RhY2tpbmcgb3JkZXIsIGFuZCBhZGRpbmcgLyBlZGl0aW5nIEdyaWQtQXJlYSdzKVxuXHQvL1xuXG5cdGNvbnN0IHsgc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQsIGdyaWRDaGlsZHJlbiB9ID0gdXNlU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHQvLyBIb29rcy5cblx0XHRjb25zdCB7IGdldEJsb2NrcywgZ2V0U2VsZWN0ZWRCbG9ja0NsaWVudElkLCBnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSB9ID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpO1xuXHRcdC8vIFZhcmlhYmxlcy5cblx0XHRjb25zdCBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPSBnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQoKTtcblx0XHRjb25zdCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPSBzZWxlY3RlZEJsb2NrQ2xpZW50SWQgPyBnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZShzZWxlY3RlZEJsb2NrQ2xpZW50SWQsIFsnaDJtbC9ncmlkJ10sIHRydWUpWzBdIDogZmFsc2U7XG5cdFx0Y29uc3QgZ3JpZENoaWxkcmVuID0gZ2V0QmxvY2tzKGNsaWVudElkKTtcblx0XHQvLyBSZXR1cm4gVmFsdWVzLlxuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RlZEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRncmlkQ2hpbGRyZW5cblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Ly9cblx0Ly8gSGFuZGxlIHVwZGF0aW5nIHRoZSBzdGFja2luZyBvcmRlciBodG1sRm9yIGFueSBjdXJyZW50bHkgc2VsZWN0ZWQgR3JpZCBBcmVhJ3Mgd2l0aGluIHRoZSBlZGl0b3IuXG5cdC8vXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyKHNlbGVjdGVkQmxvY2tDbGllbnRJZCwgc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKTtcblx0fSwgW3NlbGVjdGVkQmxvY2tDbGllbnRJZF0pO1xuXG5cdC8vXG5cdC8vIGZvY3VzVGFyZ2V0IHN0YXRlLCB0aGlzIGlzIHVzZWQgdG8gZW5zdXJlIHdlIGF1dG8tZm9jdXMgb24gdGhlIGNvcnJlY3QgR3JpZCBBcmVhIHdoZW4gbWFraW5nIGNoYW5nZXMgdG8gdGhlIEdyaWQuXG5cdC8vXG5cblx0Y29uc3QgW2ZvY3VzVGFyZ2V0LCBzZXRGb2N1c1RhcmdldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuXHQvLyBcblx0Ly8gSWYgZWl0aGVyIG9mIHRoZSBHcmlkJ3MgdG90YWwgbnVtYmVyIG9mIGNoaWxkcmVuIGNoYW5nZXMgKGFkZGluZyksIG9yIGlmIHRoZSAncmVxdWVzdEVkaXQnIGF0dHJpYnV0ZSBvZiBvbmUgb2YgdGhlIEdyaWQncyBcblx0Ly8gY2hhbmdlcyAodXBkYXRpbmcpIHRoZW4gZG8gdGhlIGZvbGxvd2luZzogXG5cdC8vIFxuXHQvLyBJZiB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUgaXMgYWxyZWFkeSBzZXQgdGhlbiB3ZSBoYXZlIGp1c3QgZmluaXNoZWQgZWRpdGluZywgYW5kIHdlIHNob3VsZCBkZXRlcm1pbmUgaWYgd2UgbmVlZCBcblx0Ly8gdG8gZm9jdXMgb24gYW4gdXBkYXRlZCBHcmlkIEFyZWEuIEluIGVpdGhlciBjYXNlIHJlc2V0IHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSB0byBmYWxzZS5cblx0Ly9cblx0Ly8gSWYgdGhlIEdyaWQncyAnZWRpdGluZycgYXR0cmlidXRlIGlzIE5PVCBzZXQgdGhlbiBkZXRlcm1pbmUgaWYgYW55IG9mIHRoZSBHcmlkJ3MgR3JpZC1BcmVhJ3MgYXJlIHJlcXVlc3RpbmcgYW4gZWRpdC4gXG5cdC8vIElmIHNvLCBjYWxsIHNldEdyaWRFZGl0aW5nLlxuXHQvL1xuXHQvLyBUaGlzIGRvZXMgbm90IGhhbmRsZSBhZGRpbmcgYSBuZXcgZ3JpZCBhcmVhLCB0aGF0IGlzIGRvbmUgYnkgdGhlIEdyaWQgaXRzZWxmIHRocm91Z2ggdGhlIG9uS2V5UHJlc3MgZXZlbnQsIG9yIGl0IGlzIFxuXHQvLyBkb25lIGJ5IHRoZSBncmlkRWRpdG9yLCB1c2luZyB0aGUgQmxvY2tBcHBlbmRlciBidXR0b24uIFxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYoIWVkaXRpbmcpIHtcblx0XHRcdC8vIERldGVybWluZSBpZiBhIEdyaWQgQXJlYSBpcyByZXF1ZXN0aW5nIHRvIGJlIHVwZGF0ZWQuIFxuXHRcdFx0Y29uc3QgY2hpbGRSZXF1ZXN0ZWRFZGl0ID0gZ3JpZENoaWxkcmVuLmZpbmQoY2hpbGQgPT4gY2hpbGQuYXR0cmlidXRlcy5yZXF1ZXN0RWRpdCk7XG5cdFx0XHRpZihjaGlsZFJlcXVlc3RlZEVkaXQpIHNldEdyaWRFZGl0aW5nKGNoaWxkUmVxdWVzdGVkRWRpdCk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHQvLyBTZXQgdGhlIGZvY3VzVGFyZ2V0IGlmIG5lZWRlZC4gXG5cdFx0XHRpZihlZGl0aW5nPy5jbGllbnRJZCkgc2V0Rm9jdXNUYXJnZXQoZWRpdGluZyk7XG5cdFx0XHQvLyBSZXNldCB0aGUgR3JpZCdzICdlZGl0aW5nJyBhdHRyaWJ1dGUuIFxuXHRcdFx0c2V0R3JpZEVkaXRpbmcoZmFsc2UpO1xuXHRcdH1cblx0fSwgW2dyaWRDaGlsZHJlbl0pO1xuXG5cdC8vXG5cdC8vIElmIHRoZSBHcmlkJ3MgJ2VkaXRpbmcnIGF0dHJpYnV0ZSBjaGFuZ2VzIHRvIGZhbHNlLCBhbmQgYSBmb2N1c1RhcmdldCBpcyBzZXQsIHRoZW4gLmZvY3VzKCkgb24gdGhlIGZvY3VzVGFyZ2V0J3MgRE9NIGVsZW1lbnQsXG5cdC8vIHRoZW4gcmVzZXQgdGhlIGZvY3VzVGFyZ2V0IHRvIG51bGwuXG5cdC8vXG5cdFxuXHRjb25zdCByZWYgPSB1c2VSZWZFZmZlY3QoKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCB7IG93bmVyRG9jdW1lbnQgfSA9IGVsZW1lbnQ7XG5cdFx0aWYoZWRpdGluZykge1xuXHRcdFx0b3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ibG9jaz1cIiR7Y2xpZW50SWR9XCJdYCkuZm9jdXMoKTtcblx0XHR9IGVsc2UgaWYoZm9jdXNUYXJnZXQpIHtcblx0XHRcdG93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYmxvY2s9XCIke2ZvY3VzVGFyZ2V0LmNsaWVudElkfVwiXWApLmZvY3VzKCk7XG5cdFx0XHRzZXRGb2N1c1RhcmdldChudWxsKVxuXHRcdH1cblx0fSwgW2VkaXRpbmddKTtcblxuXHQvL1xuXHQvLyBSZWdpc3RlciB0aGUgQmxvY2sgLyBJbm5lckJsb2NrIFByb3BzLlxuXHQvL1xuXG5cdGNvbnN0IG5ld0dyaWRBcmVhVGV4dCA9IF9fKCdBZGQgbmV3IEdyaWQgQXJlYScsICdoMm1sJyk7XG5cdGNvbnN0IHsgY2hpbGRyZW4sIC4uLmlubmVyQmxvY2tzUHJvcHMgfSA9IHVzZUlubmVyQmxvY2tzUHJvcHMoXG5cdFx0dXNlQmxvY2tQcm9wcyh7XG5cdFx0XHRzdHlsZToge1xuXHRcdFx0XHRncmlkVGVtcGxhdGVBcmVhczogZ2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcygwLCBjb2xDb3VudCwgcm93Q291bnQpIC8qIDAgPT09ICdlZGl0b3InICovLFxuXHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMCwgY29sVGVtcGxhdGVzKSAvKiAwID09PSAnZWRpdG9yJyAqLyxcblx0XHRcdFx0Z3JpZFRlbXBsYXRlUm93czogZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKDAsIHJvd1RlbXBsYXRlcykgLyogMCA9PT0gJ2VkaXRvcicgKi9cblx0XHRcdH0sXG5cdFx0XHRvbktleVByZXNzOiAoZSkgPT4ge1xuXHRcdFx0XHRpZihjbGllbnRJZCA9PT0gc2VsZWN0ZWRCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHQvLyBWYXJpYWJsZXMuXG5cdFx0XHRcdFx0Y29uc3QgeyBrZXkgfSA9IGU7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdEtleXMgPSBbJ2EnLCAnQSddO1xuXHRcdFx0XHRcdGNvbnN0IGV4aXRLZXlzID0gWydjJywgJ0MnXTtcblx0XHRcdFx0XHQvLyBCaW5kIGtleXMgdG8gYXR0cmlidXRlIHNldHRlcnMuXG5cdFx0XHRcdFx0aWYgKGVkaXRLZXlzLmluY2x1ZGVzKGtleSkgJiYgIWVkaXRpbmcpIHNldEdyaWRFZGl0aW5nKHRydWUpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGV4aXRLZXlzLmluY2x1ZGVzKGtleSkpIHtcblx0XHRcdFx0XHRcdHNldEdyaWRFZGl0aW5nKGZhbHNlKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVmOiByZWZcblx0XHR9KSwge1xuXHRcdFx0YWxsb3dlZEJsb2NrczogWydoMm1sL2dyaWQtYXJlYSddLFxuXHRcdH1cblx0KTtcblxuXHQvL1xuXHQvLyBUaGUgSlNYLlxuXHQvL1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHQ8QmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRvbkNoYW5nZT17c2V0QWxpZ25tZW50fVxuXHRcdFx0XHRcdHZhbHVlPXt2ZXJ0aWNhbEFsaWdubWVudH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdHcmlkIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKGBHcmlkIGFyZWEgbnVtYmVyIG9mIENvbHVtbnNgLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xDb3VudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZE5vQ29sc09yUm93cygwLCB2YWx1ZSl9IC8vIDAgPT09ICdjb2wnXG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17OH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdF9fbmV4dEhhc05vTWFyZ2luQm90dG9tXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKGBHcmlkIGFyZWEgbnVtYmVyIG9mIFJvd3NgLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dDb3VudH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZE5vQ29sc09yUm93cygxLCB2YWx1ZSl9IC8vIDEgPT09ICdyb3cnXG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17OH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0eyhjb2xDb3VudCAqIHJvd0NvdW50KSA+IDQ5ICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8Tm90aWNlIHN0YXR1cz1cIndhcm5pbmdcIiBpc0Rpc21pc3NpYmxlPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUaGUgbnVtYmVyIG9mIGNlbGxzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgcmVjb21tZW5kZWQgbGltaXQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J2gybWwnXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvTm90aWNlPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnR3JpZCBDb2x1bW5zIFNldHRpbmdzJywgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0e1suLi5BcnJheShjb2xDb3VudCldLm1hcCgoXywgaSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgY29sLXNldHRpbmdzLSR7aX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3NwcmludGYoX18oXCJDb2x1bW4gJTEkZCBXaWR0aFwiLCAnaDJtbCcpLCBpICsgMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29sVGVtcGxhdGVzW2ldfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93KDAsIGksIHZhbHVlIC8qIDAgPT09ICdjb2wnICovKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0dyaWQgUm93cyBTZXR0aW5ncycsICdoMm1sJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdHtbLi4uQXJyYXkocm93Q291bnQpXS5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YHJvdy1zZXR0aW5ncy0ke2l9YH1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtzcHJpbnRmKF9fKFwiUm93ICUxJGQgSGVpZ2h0XCIsICdoMm1sJyksIGkgKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtyb3dUZW1wbGF0ZXNbaV19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dmFsdWUgPT4gc2V0R3JpZFRlbXBsYXRlQ29sdW1uT3JSb3coMSwgaSwgdmFsdWUpIC8qIDAgPT09ICdyb3cnICovfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0PGRpdiB7Li4uaW5uZXJCbG9ja3NQcm9wc30+XG5cdFx0XHRcdDxHcmlkRWRpdG9yXG5cdFx0XHRcdFx0Z3JpZENsaWVudElkPXtjbGllbnRJZH1cblx0XHRcdFx0XHRjb2xDb3VudD17Y29sQ291bnR9XG5cdFx0XHRcdFx0cm93Q291bnQ9e3Jvd0NvdW50fVxuXHRcdFx0XHRcdGVkaXRpbmc9e2VkaXRpbmd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ncmlkLWFyZWFzXCI+XG5cdFx0XHRcdFx0eyEoZWRpdGluZykgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhQ29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHRpcCB0ZXh0PXtuZXdHcmlkQXJlYVRleHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZE5ld0dyaWRBcmVhV3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYWRkTmV3R3JpZEFyZWFcIj57bmV3R3JpZEFyZWFUZXh0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhZGROZXdHcmlkQXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRHcmlkRWRpdGluZyh0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj48cGF0aCBkPVwiTTE4IDExLjJoLTUuMlY2aC0xLjZ2NS4ySDZ2MS42aDUuMlYxOGgxLjZ2LTUuMkgxOHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qXG4gKiBUaGUgQmxvY2sgQWN0aW9ucy5cbiAqL1xuXG5jb25zdCBHcmlkRWRpdFdyYXBwZXIgPSB3aXRoRGlzcGF0Y2goXG5cdChkaXNwYXRjaCwgb3duUHJvcHMsIHJlZ2lzdHJ5KSA9PiAoe1xuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIHRoZSBHcmlkIEFyZWEncyBXUCBhbGlnbm1lbnQgKFdpZGUsIEZ1bGwgZXRjKS5cblx0XHQvL1xuXHRcdHNldEFsaWdubWVudCh2ZXJ0aWNhbEFsaWdubWVudCkge1xuXHRcdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBvd25Qcm9wcztcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyB2ZXJ0aWNhbEFsaWdubWVudCB9KTtcblx0XHR9LFxuXHRcdC8vXG5cdFx0Ly8gVXBkYXRlIG51bWJlciBvZiBjb2x1bW5zIC8gcm93cywgY2xlYW4gdXAgdGhlIHJlbGV2YW50IHRlbXBsYXRlcywgYW5kIGZpbmFsbHkgc2V0IHRoZSB0b3RhbCBudW1iZXIgb2YgR3JpZCBBcmVhJ3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkTm9Db2xzT3JSb3dzKHR5cGUsIGNvdW50KSB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IG93blByb3BzO1xuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHNldHRpbmcgQ29sdW1ucyBvciBSb3dzLCBhbmQgYWxzbyBnZXQgdGhlIG9wcG9zaXRlLlxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0Y29uc3Qgb3RoZXIgPSBvcHRpb25zW3R5cGUgXiAxXTtcblx0XHRcdHR5cGUgPSBvcHRpb25zW3R5cGVdO1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZXhpc3RpbmcgQ29sdW1uIC8gUm93IGRlZmluaXRpb24uXG5cdFx0XHRjb25zdCBkZWZpbml0aW9ucyA9IHsgLi4uYXR0cmlidXRlc1tgJHt0eXBlfURlZmluaXRpb25zYF0gfTtcblx0XHRcdGNvbnN0IGNvdW50RGVsdGEgPSBjb3VudCAtIGRlZmluaXRpb25zLmNvdW50O1xuXHRcdFx0Ly8gQ2xlYW4gdXAgQ29sdW1uIC8gUm93IHRlbXBsYXRlcy5cblx0XHRcdGNvbnN0IHVuaXQgPSB0eXBlID09PSAnY29sJyA/ICcxZnInIDogJ21heC1jb250ZW50Jztcblx0XHRcdGRlZmluaXRpb25zLnRlbXBsYXRlcy5zcGxpY2UoLi4uY291bnREZWx0YSA+IDAgP1xuXHRcdFx0XHRbZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCwgMCwgLi4uQXJyYXkuZnJvbShBcnJheShjb3VudERlbHRhKSkubWFwKF8gPT4gdW5pdCldIDogLy8gQWRkaW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHRcdFtjb3VudCwgZGVmaW5pdGlvbnMudGVtcGxhdGVzLmxlbmd0aCAtIDFdIC8vIFJlbW92aW5nIENvbHVtbnMgLyBSb3dzXG5cdFx0XHQpO1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBkZWZpbml0aW9uJ3MgY291bnQgdmFsdWUgYW5kIHRoZW4gc2V0IHRoZSBhdHRyYnV0ZS4gXG5cdFx0XHRkZWZpbml0aW9ucy5jb3VudCA9IGNvdW50O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBVcGRhdGUgdGVtcGxhdGVzIGh0bWxGb3Igc3BlY2lmaWMgQ29sdW1ucyAvIFJvd3MuXG5cdFx0Ly9cblx0XHRzZXRHcmlkVGVtcGxhdGVDb2x1bW5PclJvdyh0eXBlLCBpbmRleCwgdGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgd2UncmUgZ2VuZXJhdGluZyBhIENvbHVtbnMgb3IgUm93cyB0ZW1wbGF0ZVxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IFsnY29sJywgJ3JvdyddO1xuXHRcdFx0dHlwZSA9IG9wdGlvbnNbdHlwZV07XG5cdFx0XHQvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBleGlzdGluZyBDb2x1bW4gLyBSb3cgZGVmaW5pdGlvbi5cblx0XHRcdGNvbnN0IGRlZmluaXRpb25zID0geyAuLi5hdHRyaWJ1dGVzW2Ake3R5cGV9RGVmaW5pdGlvbnNgXSB9O1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBnaXZlbiBDb2x1bW4gLyBSb3cgdGVtcGxhdGUgYW5kIHNldCB0aGUgYXR0cmlidXRlLlxuXHRcdFx0Y29uc3QgdW5pdCA9IHR5cGUgPT09ICdjb2wnID8gJzFmcicgOiAnbWF4LWNvbnRlbnQnO1xuXHRcdFx0ZGVmaW5pdGlvbnMudGVtcGxhdGVzW2luZGV4XSA9IHRlbXBsYXRlID8gdGVtcGxhdGUgOiB1bml0O1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IFtgJHt0eXBlfURlZmluaXRpb25zYF06IGRlZmluaXRpb25zIH0pO1xuXHRcdH0sXG5cdFx0Ly9cblx0XHQvLyBTZXQgdGhlIEdyaWQgJ2VkaXRpbmcnIGF0dHJpYnV0ZVxuXHRcdC8vXG5cdFx0c2V0R3JpZEVkaXRpbmcodmFsdWUpIHtcblx0XHRcdGNvbnN0IHsgc2V0QXR0cmlidXRlcyB9ID0gb3duUHJvcHM7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZWRpdGluZzogdmFsdWUgfSk7XG5cdFx0fSxcblx0XHQvL1xuXHRcdC8vIFdoZW4gYSBHcmlkLUFyZWEgb3IgYW55IG9mIGl0J3MgY2hpbGRyZW4gYXJlIHNlbGN0ZWQsIHZpc3VhbGx5IG1vdmUgdGhhdCBpdGVtIHRvIHRoZSB0b3Agb2YgdGhlIFxuXHRcdC8vIHN0YWNraW5nIGNvbnRleHQuICh0aGlzIGlzIG5vdCBzYXZlZCBhcyBhbiBhdHRyaWJ1dGUsIGFuZCBpcyBwdXJlbHkgaHRtbEZvciBjb252ZW5pZW5jZSBpbiB0aGUgZWRpdG9yKS5cblx0XHQvL1xuXHRcdHNldEdyaWRBcmVhc0VkaXRvclN0YWNraW5nT3JkZXIoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQpIHtcblx0XHRcdGNvbnN0IHsgY2xpZW50SWQgfSA9IG93blByb3BzO1xuXHRcdFx0Y29uc3QgeyBzZXRTZWxlY3RlZEdyaWRBcmVhIH0gPSBkaXNwYXRjaCgnaDJtbC9ncmlkX2FyZWFfc3RvcmUnKTtcblx0XHRcdGlmIChzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQgPT09IGNsaWVudElkKSB7XG5cdFx0XHRcdGNvbnN0IHsgZ2V0QmxvY2ssIGdldEJsb2NrUGFyZW50c0J5QmxvY2tOYW1lLCBnZXRCbG9ja3MgfSA9IHJlZ2lzdHJ5LnNlbGVjdChibG9ja0VkaXRvclN0b3JlKTtcblx0XHRcdFx0Ly9cblx0XHRcdFx0Y29uc3QgcGFyZW50cyA9IGdldEJsb2NrKHNlbGVjdGVkQmxvY2tDbGllbnRJZCkubmFtZSAhPT0gJ2gybWwvZ3JpZC1hcmVhJyA/XG5cdFx0XHRcdFx0Z2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKSA6XG5cdFx0XHRcdFx0W3NlbGVjdGVkQmxvY2tDbGllbnRJZCwgLi4uZ2V0QmxvY2tQYXJlbnRzQnlCbG9ja05hbWUoc2VsZWN0ZWRCbG9ja0NsaWVudElkLCBbJ2gybWwvZ3JpZCcsICdoMm1sL2dyaWQtYXJlYSddLCB0cnVlKV07XG5cdFx0XHRcdC8vXG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkQmxvY2tQYXJlbnRzU3RhY2tpbmdPcmRlciA9IHBhcmVudHMucmVkdWNlKChyZXMsIHBhcmVudElkLCBpLCBzZWxmKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudEJsb2NrID0gZ2V0QmxvY2socGFyZW50SWQpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRCbG9jay5uYW1lID09PSAnaDJtbC9ncmlkLWFyZWEnKSB7XG5cdFx0XHRcdFx0XHRyZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGNsaWVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRcdFx0ZWRpdG9yU3RhY2tpbmdPcmRlcjogZ2V0QmxvY2tzKHNlbGZbKytpXSkucmVkdWNlKChyZXMsIGN1cikgPT4gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciA+PSByZXMgPyBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyICsgMSA6IHJlcywgMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0XHR9LCBbXSk7XG5cdFx0XHRcdC8vXG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEoe1xuXHRcdFx0XHRcdGNsaWVudElkOiBzZWxlY3RlZEJsb2NrQ2xpZW50SWQsXG5cdFx0XHRcdFx0cGFyZW50czogc2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmICghc2VsZWN0ZWRHcmlkSXRlbVJvb3RCbG9ja0NsaWVudElkKSB7XG5cdFx0XHRcdHNldFNlbGVjdGVkR3JpZEFyZWEobnVsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKShHcmlkRWRpdCk7XG5cbi8qXG4gKiBFeHBvcnQgdGhlIEJsb2NrLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQocHJvcHMpIHtcblx0cmV0dXJuIDxHcmlkRWRpdFdyYXBwZXIgey4uLnByb3BzfSAvPjtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbmltcG9ydCB7IGdyaWQgYXMgaWNvbiB9IGZyb20gJ0B3b3JkcHJlc3MvaWNvbnMnO1xuXG4vKipcbiAqIFN0eWxlXG4gKi9cblxuaW1wb3J0ICcuLy4uLy4uLy4uL2NvbW1vbi9zdHlsZXMvZ3JpZC1zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi8uLi9ibG9jay5qc29uJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnXG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIEJsb2NrXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEubmFtZSwge1xuXHQvL1xuXHRpY29uLFxuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiBTYXZlLFxufSk7XG5cbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdF9fLFxuXHRfbixcblx0c3ByaW50ZlxufSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLyoqXG4gKiBDb21wb25lbnRzXG4gKi9cblxuZXhwb3J0IGNvbnN0IENvbHNSb3dIZWxwZXJJbm5lciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0aW5kZXhcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gPHNwYW4+e2luZGV4fTwvc3Bhbj5cbn07XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyTGFiZWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGxhYmxlVHlwZSxcblx0XHRsYWJsZUNvdW50XG5cdH0gPSBwcm9wcztcblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZ3JpZC1jb2xzLXJvd3MtaGVscGVyLXdyYXBgfT5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGdyaWQtJHtsYWJsZVR5cGUuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCl9cy1oZWxwZXJgfSAvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGxhYmxlQ291bnQpKS5tYXAoKF8sIGxhYmxlSW5kZXgpID0+IChcblx0XHRcdDxkaXZcblx0XHRcdFx0a2V5PXtgJHtsYWJsZVR5cGV9LWxhYmxlLWNlbGwtJHtsYWJsZUluZGV4fWB9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtY29scy1yb3dzLWhlbHBlclwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0W2BncmlkJHtsYWJsZVR5cGV9U3RhcnRgXTogKytsYWJsZUluZGV4ICsgMSxcblx0XHRcdFx0XHRbYGdyaWQke2xhYmxlVHlwZSA9PT0gJ0NvbHVtbicgPyAnUm93JyA6ICdDb2x1bW4nfVN0YXJ0YF06IDEsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxUb29sdGlwIHRleHQ9e3NwcmludGYoX18oJyUyJHMgJTEkZCcsICdoMm1sJyksIGxhYmxlSW5kZXgsIGxhYmxlVHlwZSl9PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57bGFibGVJbmRleH08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvVG9vbHRpcD5cblx0XHRcdDwvZGl2PlxuXHRcdCkpfVxuXHQ8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IEdyaWRIZWxwZXJDZWxsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRjZWxsTGFiZWwsXG5cdFx0Y2VsbFgsXG5cdFx0Y2VsbFksXG5cdFx0b25Nb3VzZURvd24sXG5cdFx0b25Nb3VzZUVudGVyLFxuXHR9ID0gcHJvcHM7XG5cdHJldHVybiA8ZGl2XG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1hcmVhLWhlbHBlclwiXG5cdFx0ey4uLnsgb25Nb3VzZURvd24sIG9uTW91c2VFbnRlciB9fVxuXHRcdGRhdGEteGNvb3Jkcz17Y2VsbFh9XG5cdFx0ZGF0YS15Y29vcmRzPXtjZWxsWX1cblx0XHRzdHlsZT17e1xuXHRcdFx0Z3JpZEFyZWE6IGAke2NlbGxZICsgMX0gLyAke2NlbGxYICsgMX0gLyAke2NlbGxZICsgMn0gLyAke2NlbGxYICsgMn1gXG5cdFx0fX1cblx0PlxuXHRcdHtgJHtjZWxsTGFiZWx9YH0gPHN1Yj57YCgke2NlbGxYfSwgJHtjZWxsWX0pYH08L3N1Yj5cblx0PC9kaXY+XG59XG5cbmV4cG9ydCBjb25zdCBHcmlkSGVscGVyQXBwZW5kZXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHN0eWxlLFxuXHRcdGNoaWxkcmVuLFxuXHRcdGFyZWFcblx0fSA9IHByb3BzO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdGFyZWE9e2FyZWEgPyBhcmVhIDogbnVsbH1cblx0XHRcdHsuLi57IHN0eWxlIH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuXG5pbXBvcnQge1xuXHRfXyxcblx0X24sXG59IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmltcG9ydCB7XG5cdHNlbGVjdCxcblx0ZGlzcGF0Y2hcbn0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW1wb3J0IHtcblx0c3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZSxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQgeyBjcmVhdGVCbG9jayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHVzZVJlZkVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHtcblx0R3JpZEhlbHBlckxhYmVsLFxuXHRHcmlkSGVscGVyQ2VsbCxcblx0R3JpZEhlbHBlckFwcGVuZGVyXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCB9IGZyb20gJy4uLy4uL3V0aWxzLmpzJ1xuXG4vKipcbiogRXZlbnQgY2FsbGJhY2sgRnVuY3Rpb24gZm9yIHN0YXJ0aW5nIC8gdXBkYXRpbmcgdGhlIHNlbGVjdGluZyBvZiBhIEdyaWQtQXJlYSBBcmVhXG4qL1xuXG5jb25zdCBkb0dyaWRIZWxwZXJTZWxlY3Rpb24gPSAoZSwgY29vcmRzLCByZXMpID0+IHtcblx0Ly8gUmVzZXQgdGhlIGdyaWQgYXJlYSBjb29yZHMgb24gbW91c2Vkb3duLlxuXHRpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJykgcmVzID0gbnVsbDtcblx0Ly8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHVwZGF0aW5nIGFuIGV4aXN0aW5nIHNlbGVjdGlvbiAoZHJhZ2dpbmcpLCBvciBzdGFydGluZyBhIG5ldyBvbmUgKGNsaWNraW5nKS5cblx0Y29uc3Qgc3RhcnRYID0gcmVzPy5zdG9yZT8ueCA/IHJlcz8uc3RvcmU/LnggOiBOdW1iZXIoY29vcmRzLmNlbGxYKTtcblx0Y29uc3Qgc3RhcnRZID0gcmVzPy5zdG9yZT8ueSA/IHJlcz8uc3RvcmU/LnkgOiBOdW1iZXIoY29vcmRzLmNlbGxZKTtcblx0Y29uc3QgZW5kWCA9IE51bWJlcihjb29yZHMuY2VsbFgpO1xuXHRjb25zdCBlbmRZID0gTnVtYmVyKGNvb3Jkcy5jZWxsWSk7XG5cdC8vIENhbGN1bGF0ZSBhbmQgc3RvcmUgdGhlIG5ldyBDb29yZHMgdmFsdWVzLlxuXHRyZXMgPSB7XG5cdFx0c3RvcmU6IHtcblx0XHRcdHg6IHN0YXJ0WCxcblx0XHRcdHk6IHN0YXJ0WSxcblx0XHR9LFxuXHRcdHN0YXJ0OiB7XG5cdFx0XHR4OiBNYXRoLm1pbihzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5taW4oc3RhcnRZLCBlbmRZKVxuXHRcdH0sXG5cdFx0ZW5kOiB7XG5cdFx0XHR4OiBNYXRoLm1heChzdGFydFgsIGVuZFgpLFxuXHRcdFx0eTogTWF0aC5tYXgoc3RhcnRZLCBlbmRZKSxcblx0XHR9XG5cdH07XG5cdHJlcy5wYXJzZWQgPSBnZW5lcmF0ZUdyaWRBcmVhU3RhcnRFbmQocmVzLnN0YXJ0LngsIHJlcy5zdGFydC55LCByZXMuZW5kLngsIHJlcy5lbmQueSk7XG5cdHJldHVybiByZXM7XG59XG5cbi8qKlxuICogU2F2ZSBGdW5jdGlvblxuICovXG5cbmNvbnN0IGRvR3JpZEhlbHBlclNhdmUgPSAoZ3JpZENsaWVudElkLCB0YXJnZXQsIGNvb3JkcykgPT4ge1xuXHRpZiAodGFyZ2V0LmNsaWVudElkKSB7XG5cdFx0Ly8gSG9va3MuXG5cdFx0Y29uc3Qge3VwZGF0ZUJsb2NrQXR0cmlidXRlc30gPSBkaXNwYXRjaChibG9ja0VkaXRvclN0b3JlKTtcblx0XHQvLyBVcGRhdGUgdGhlIHJlcXVlc3RlZCBHcmlkIEFyZWEuXG5cdFx0dXBkYXRlQmxvY2tBdHRyaWJ1dGVzKHRhcmdldC5jbGllbnRJZCwge1xuXHRcdFx0Z3JpZEFyZWE6IGNvb3Jkcyxcblx0XHRcdHJlcXVlc3RFZGl0OiBmYWxzZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEhvb2tzLlxuXHRcdGNvbnN0IHsgZ2V0QmxvY2tzIH0gPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Y29uc3QgeyBpbnNlcnRCbG9jayB9ID0gZGlzcGF0Y2goYmxvY2tFZGl0b3JTdG9yZSk7XG5cdFx0Ly8gQWRkaW5nIGEgbmV3IEdyaWQgQXJlYS5cblx0XHRjb25zdCB7XG5cdFx0XHRuZXh0Q2hpbGRTdGFja2luZ09yZGVyLFxuXHRcdFx0bmV4dENoaWxkSW5kZXhcblx0XHR9ID0gZ2V0QmxvY2tzKGdyaWRDbGllbnRJZCkucmVkdWNlKFxuXHRcdFx0KHJlcywgY3VyLCBpbmQpID0+IHtcblx0XHRcdFx0cmVzLm5leHRDaGlsZFN0YWNraW5nT3JkZXIgPSBjdXIuYXR0cmlidXRlcy5zdGFja2luZ09yZGVyID49IHJlcy5uZXh0Q2hpbGRTdGFja2luZ09yZGVyID8gY3VyLmF0dHJpYnV0ZXMuc3RhY2tpbmdPcmRlciArIDEgOiByZXMubmV4dENoaWxkU3RhY2tpbmdPcmRlcjtcblx0XHRcdFx0cmVzLm5leHRDaGlsZEluZGV4ID0gaW5kICsgMTtcblx0XHRcdFx0cmV0dXJuIHJlcztcblx0XHRcdH0sIHtcblx0XHRcdG5leHRDaGlsZFN0YWNraW5nT3JkZXI6IDAsXG5cdFx0XHRuZXh0Q2hpbGRJbmRleDogMFxuXHRcdH1cblx0XHQpO1xuXHRcdC8vIEluc2VydCB0aGUgbmV3IEdyaWQgQXJlYS5cblx0XHRpbnNlcnRCbG9jayhjcmVhdGVCbG9jaygnaDJtbC9ncmlkLWFyZWEnLCB7XG5cdFx0XHRncmlkQXJlYTogY29vcmRzLFxuXHRcdFx0c3RhY2tpbmdPcmRlcjogbmV4dENoaWxkU3RhY2tpbmdPcmRlclxuXHRcdH0pLCBuZXh0Q2hpbGRJbmRleCwgZ3JpZENsaWVudElkKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSBKU1hcbiAqL1xuXG5sZXQgaSA9IDA7XG5cbmV4cG9ydCBjb25zdCBHcmlkRWRpdG9yID0gKHByb3BzKSA9PiB7XG5cdC8vIFByb3BlcnRpZXMuXG5cdGNvbnN0IHtcblx0XHRncmlkQ2xpZW50SWQsXG5cdFx0Y29sQ291bnQsXG5cdFx0cm93Q291bnQsXG5cdFx0ZWRpdGluZ1xuXHR9ID0gcHJvcHM7XG5cdC8vIFN0YXRlIE1hbmFnZXJzLlxuXHRjb25zdCBbZ3JpZEhlbHBlcklzRHJhd2luZywgc2V0R3JpZEhlbHBlcklzRHJhd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtncmlkSGVscGVyQ2FuU2F2ZSwgc2V0R3JpZEhlbHBlckNhblNhdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbZ3JpZEhlbHBlckNvb3JkUmVzLCBzZXRHcmlkSGVscGVyQ29vcmRSZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cdC8vXG5cdC8vIEhhbmRsZSBGaW5pc2ggRWRpdGluZy5cblx0Ly9cblx0Y29uc3QgcmVmID0gdXNlUmVmRWZmZWN0KChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgeyBvd25lckRvY3VtZW50IH0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IGZpbmlzaFNlbGVjdGluZ0dyaWRBcmVhID0gKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKGZhbHNlKTtcblx0XHRcdC8vIFNldCBTdGF0ZS5cblx0XHRcdHNldEdyaWRIZWxwZXJDYW5TYXZlKHRydWUpO1xuXHRcdH1cblx0XHRpZihncmlkSGVscGVySXNEcmF3aW5nKSB7XG5cdFx0XHRvd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHQvLyBDbGVhbnVwIHRoaXMgRG9jdW1lbnQgZXZlbnQgbGlzdGVuZXIuXG5cdFx0XHRvd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSk7XG5cdFx0fTtcblx0fSwgW2dyaWRIZWxwZXJJc0RyYXdpbmddKTtcblx0Ly9cblx0Ly8gVGhlIEpTWC5cblx0Ly9cblx0cmV0dXJuIDxkaXYgXG5cdFx0Y2xhc3NOYW1lPVwiZ3JpZC1oZWxwZXJzXCJcblx0XHRyZWY9e3JlZn1cblx0PlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIkNvbHVtblwiXG5cdFx0XHRsYWJsZUNvdW50PXtjb2xDb3VudH1cblx0XHQvPlxuXHRcdDxHcmlkSGVscGVyTGFiZWxcblx0XHRcdGxhYmxlVHlwZT1cIlJvd1wiXG5cdFx0XHRsYWJsZUNvdW50PXtyb3dDb3VudH1cblx0XHQvPlxuXHRcdHtBcnJheS5mcm9tKEFycmF5KGNvbENvdW50ICogcm93Q291bnQpKS5tYXAoKF8sIGNlbGxJbmRleCkgPT4ge1xuXHRcdFx0Y2VsbEluZGV4Kys7XG5cdFx0XHRjb25zdCBjZWxsWCA9ICgoY2VsbEluZGV4IC0gMSkgJSBjb2xDb3VudCkgKyAxO1xuXHRcdFx0Y29uc3QgY2VsbFkgPSBNYXRoLmZsb29yKChjZWxsSW5kZXggLSAxKSAvIGNvbENvdW50KSArIDE7XG5cdFx0XHRyZXR1cm4gPEdyaWRIZWxwZXJDZWxsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0a2V5OiBgaGVscGVyLWNlbGwtJHtjZWxsSW5kZXh9YCxcblx0XHRcdFx0XHRjZWxsTGFiZWw6IGNlbGxJbmRleCxcblx0XHRcdFx0XHRjZWxsWCxcblx0XHRcdFx0XHRjZWxsWSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogKGVkaXRpbmcgPyAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gUmVzZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ2FuU2F2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHQvLyBTZXQgU3RhdGUuXG5cdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVySXNEcmF3aW5nKHRydWUpO1xuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKSxcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IChncmlkSGVscGVySXNEcmF3aW5nID8gKGUpID0+IHtcblx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBHcmlkIEFyZWEgU2VsZWN0aW9uLlxuXHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlckNvb3JkUmVzKGRvR3JpZEhlbHBlclNlbGVjdGlvbihlLCB7IGNlbGxYLCBjZWxsWSB9LCBncmlkSGVscGVyQ29vcmRSZXMpKTtcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkKVxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHR9KX1cblx0XHR7ZWRpdGluZyAmJiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7ZWRpdGluZz8uY2xpZW50SWQgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkLWFkZGluZy1ncmlkLWFyZWFzLW5vdGljZVwiPlxuXHRcdFx0XHRcdFx0PHA+PHN0cm9uZz57X18oXCJDbGljayBhbmQgZHJhZ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBlZGl0IHRoZSBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYWRkaW5nLWdyaWQtYXJlYXMtbm90aWNlXCI+XG5cdFx0XHRcdFx0XHQ8cD48c3Ryb25nPntfXyhcIkNsaWNrIGFuZCBkcmFnXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcInRvIGFkZCBhIG5ldyBHcmlkIEFyZWEsIHdoZW4geW91J3JlIGRvbmUgY2xpY2tcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJTYXZlIEdyaWQgQXJlYVwiLCAnaDJtbCcpfTwvc3Ryb25nPiwge19fKFwicHJlc3NcIiwgJ2gybWwnKX0gPHN0cm9uZz57X18oXCJFXCIsICdoMm1sJyl9PC9zdHJvbmc+IHtfXyhcIm9yXCIsICdoMm1sJyl9IDxzdHJvbmc+e19fKFwiQ1wiLCAnaDJtbCcpfTwvc3Ryb25nPiB7X18oXCJ0byBjYW5jZWwuXCIsICdoMm1sJyl9PGJyIC8+e19fKFwiRG9uJ3QgZm9yZ2V0IHRvIFwiKX08c3Ryb25nPntfXyhcIlVwZGF0ZVwiLCAnaDJtbCcpfTwvc3Ryb25nPntfXyhcIiB0aGUgcG9zdCB3aGVuIHlvdSdyZSBkb25lLlwiLCAnaDJtbCcpfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PEdyaWRIZWxwZXJBcHBlbmRlclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImdyaWQtZ3JpZC1hcmVhLWFwcGVuZGVyXCJcblx0XHRcdFx0XHRzdHlsZT17Z3JpZEhlbHBlckNvb3JkUmVzID8ge1xuXHRcdFx0XHRcdFx0Z3JpZEFyZWE6IGdyaWRIZWxwZXJDb29yZFJlcy5wYXJzZWQsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCdcblx0XHRcdFx0XHR9IDogdW5kZWZpbmVkfVxuXHRcdFx0XHQ+IHtncmlkSGVscGVyQ2FuU2F2ZSAmJiAoXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGV4dD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbD17ZWRpdGluZz8uY2xpZW50SWQgPyBcblx0XHRcdFx0XHRcdFx0X18oJ1VwZGF0ZSBHcmlkIEFyZWEnLCAnaDJtbCcpIDpcblx0XHRcdFx0XHRcdFx0X18oJ0FkZCBHcmlkIEFyZWEnLCAnaDJtbCcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93VG9vbHRpcD17ZmFsc2V9XG5cdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7IFxuXHRcdFx0XHRcdFx0XHQvLyBTYXZlIHRoZSBuZXcgLyB1cGRhdGVkIEdyaWQgQXJlYS5cblx0XHRcdFx0XHRcdFx0ZG9HcmlkSGVscGVyU2F2ZShncmlkQ2xpZW50SWQsIGVkaXRpbmcsIGdyaWRIZWxwZXJDb29yZFJlcyk7IFxuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCBzdGF0ZS5cblx0XHRcdFx0XHRcdFx0c2V0R3JpZEhlbHBlcklzRHJhd2luZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHNldEdyaWRIZWxwZXJJc0RyYXdpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRzZXRHcmlkSGVscGVyQ29vcmRSZXMobnVsbCk7XG5cdFx0XHRcdFx0XHRcdC8vIFdlIHVzZSB1c2VFZmZlY3QgaW4gdGhlIG1haW4gY29tcG9uZW50IHRvIHJlc2V0IHRoZSBHcmlkcyAnZWRpdGluZycgYXR0cml1YnRlLCBzbyB3ZSBkb24ndFxuXHRcdFx0XHRcdFx0XHQvLyBuZWVkIHRvIHdvcnJ5IGFib3V0IGRvaW5nIGl0IGhlcmUsIHRoaXMgYWxsb3dzIHVzIHRvIG1vcmUgZWFzaWx5IGZvY3VzIG9uIHRoZSBjb3JyZWN0IGJsb2Nrcy5cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PjwvQnV0dG9uPlxuXHRcdFx0XHQpfSA8L0dyaWRIZWxwZXJBcHBlbmRlcj5cblx0XHRcdDwvPlxuXHRcdCl9XG5cdDwvZGl2PlxufSIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5cbmltcG9ydCB7XG5cdHVzZUlubmVyQmxvY2tzUHJvcHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IHtcblx0Z2VuZXJhdGVHcmlkVGVtcGxhdGVBcmVhcyxcbiAgICBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3Ncbn0gZnJvbSAnLi91dGlscy5qcydcblxuLyoqXG4gKiBUaGUgQ29kZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmUoe1xuICAgIGF0dHJpYnV0ZXM6IHtcblx0XHRjb2xEZWZpbml0aW9uczoge1xuXHRcdFx0Y291bnQ6IGNvbENvdW50LFxuXHRcdFx0dGVtcGxhdGVzOiBjb2xUZW1wbGF0ZXNcblx0XHR9LFxuXHRcdHJvd0RlZmluaXRpb25zOiB7XG5cdFx0XHRjb3VudDogcm93Q291bnQsXG5cdFx0XHR0ZW1wbGF0ZXM6IHJvd1RlbXBsYXRlc1xuXHRcdH1cblx0fSxcbn0pIHtcbiAgICAvL1xuICAgIGNvbnN0IGlubmVyQmxvY2tzUHJvcHMgPSB1c2VJbm5lckJsb2Nrc1Byb3BzLnNhdmUoeyAuLi51c2VCbG9ja1Byb3BzLnNhdmUoe1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMoMSwgY29sQ291bnQsIHJvd0NvdW50KSAvKiAxID09PSAnc2F2ZScgKi8sXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgY29sVGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi8sXG5cdFx0XHRncmlkVGVtcGxhdGVSb3dzOiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MoMSwgcm93VGVtcGxhdGVzKSAvKiAxID09PSAnc2F2ZScgKi9cbiAgICAgICAgfVxuICAgIH0pfSk7XG5cdC8vXG4gICAgcmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5pbm5lckJsb2Nrc1Byb3BzfS8+XG5cdCk7XG59OyIsIi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGNzc1NhZmVCYXNlNjQoc3RyaW5nKSB7XG5cdHJldHVybiB3aW5kb3cuYnRvYShzdHJpbmcpLnJlcGxhY2UoL1xcVy9nLCAnJyk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWEoeCwgeSkge1xuXHRyZXR1cm4gY3NzU2FmZUJhc2U2NChgJHt5fS8ke3h9YCk7XG59XG5cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZChzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuXHQvL1xuXHRjb25zdCBzdGFydCA9IGNzc1NhZmVCYXNlNjQoYCR7c3RhcnRZfS8ke3N0YXJ0WH1gKTtcblx0Y29uc3QgZW5kID0gY3NzU2FmZUJhc2U2NChgJHtlbmRZfS8ke2VuZFh9YCk7XG5cdHJldHVybiBgJHtzdGFydH0gLyAke3N0YXJ0fSAvICR7ZW5kfSAvICR7ZW5kfWA7XG59XG5cbi8vXG4vLyBHZW5lcmF0ZSB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcywgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zLCBhbmQgZ3JpZC10ZW1wbGF0ZS1yb3dzIENTUy5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdyaWRUZW1wbGF0ZUFyZWFzKGNvbnRleHQsIGNvbENvdW50LCByb3dDb3VudCkge1xuXHRpZiAoY29udGV4dCkge1xuXHRcdC8vIFNhdmVcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcblx0XHRcdGAke3Jvd3NSZXN9JyR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoY29sc1JlcywgXywgY29sc0kpID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWAudHJpbSgpO1xuXHRcdFx0fSwgJycpfSdgXG5cdFx0KSwgJycpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEVkaXRvclxuXHRcdC8vIEluIHRoZSBlZGl0b3Igb25seSwgd2UgYWRkIGFuIGFkZGl0aW9uYWwgQ29sdW1uIC8gUm93IHRvIHRoZSBHcmlkIFRlbWxwbGF0ZSBBcmVhcywgXG5cdFx0Ly8gdG8gYWNjb3VudCBmb3IgdGhlIGdyaWQgaGVscGVycy5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbShBcnJheShyb3dDb3VudCkpLnJlZHVjZSgocm93c1JlcywgXywgcm93c0kpID0+IChcblx0XHRcdGAke3Jvd3NSZXN9JyR7QXJyYXkuZnJvbShBcnJheShjb2xDb3VudCkpLnJlZHVjZSgoY29sc1JlcywgXywgY29sc0kpID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke2NvbHNSZXN9ICR7Z2VuZXJhdGVHcmlkQXJlYSgrK2NvbHNJLCByb3dzSSArIDEpfWA7XG5cdFx0XHR9LCAnLicpfSdgXG5cdFx0KSwgYCcke0FycmF5LmZyb20oQXJyYXkoY29sQ291bnQpKS5yZWR1Y2UoKGVkaXRvclJlcywgXywgaSkgPT4gYCR7ZWRpdG9yUmVzfSAuYCwgJy4nKX0nYCk7XG5cdH1cbn1cblxuLy9cbi8vXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkVGVtcGxhdGVDb2x1bW5zT3JSb3dzKGNvbnRleHQsIHRlbXBsYXRlcykge1xuXHRpZiAoY29udGV4dCkge1xuXHRcdC8vIFNhdmVcblx0XHRyZXR1cm4gdGVtcGxhdGVzLnJlZHVjZSgocmVzLCBjdXIpID0+IHtcblx0XHRcdHJldHVybiBgJHtyZXN9ICR7Y3VyfWA7XG5cdFx0fSwgJycpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEVkaXRvclxuXHRcdC8vIEluIHRoZSBlZGl0b3Igb25seSwgd2UgYWRkIGFuIGFkZGl0aW9uYWwgQ29sdW1uIC8gUm93IHRlbXBsYXRlIHRvIGFjY291bnQgZm9yIHRoZSBncmlkIGhlbHBlcnMuXG5cdFx0cmV0dXJuIHRlbXBsYXRlcy5yZWR1Y2UoKHJlcywgY3VyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYCR7cmVzfSAke2N1cn1gO1xuXHRcdH0sICdtaW4tY29udGVudCcpO1xuXHR9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYmxvY2tFZGl0b3JcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2Nrc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9uZW50c1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiY29tcG9zZVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZGF0YVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiZWxlbWVudFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wicHJpbWl0aXZlc1wiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCIuL3N0eWxlLWluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raDJtbF9ncmlkYXJlYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoMm1sX2dyaWRhcmVhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCIuL3N0eWxlLWluZGV4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiTm90aWNlIiwiUGFuZWwiLCJQYW5lbEJvZHkiLCJSYW5nZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJJbnNwZWN0b3JDb250cm9scyIsInVzZUlubmVyQmxvY2tzUHJvcHMiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tWZXJ0aWNhbEFsaWdubWVudFRvb2xiYXIiLCJ1c2VCbG9ja1Byb3BzIiwic3RvcmUiLCJibG9ja0VkaXRvclN0b3JlIiwiX18iLCJfbiIsInNwcmludGYiLCJ3aXRoRGlzcGF0Y2giLCJ1c2VTZWxlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWdpc3RlciIsInVzZVJlZkVmZmVjdCIsImdlbmVyYXRlR3JpZFRlbXBsYXRlQXJlYXMiLCJnZW5lcmF0ZUdyaWRUZW1wbGF0ZUNvbHVtbnNPclJvd3MiLCJHcmlkRWRpdG9yIiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0ZWQiLCJ2YWx1ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25zIiwic2V0U2VsZWN0ZWRHcmlkQXJlYSIsInNlbGVjdG9ycyIsImdldFNlbGVjdGVkR3JpZEFyZWEiLCJHcmlkRWRpdCIsImF0dHJpYnV0ZXMiLCJ2ZXJ0aWNhbEFsaWdubWVudCIsImNvbERlZmluaXRpb25zIiwiY291bnQiLCJjb2xDb3VudCIsInRlbXBsYXRlcyIsImNvbFRlbXBsYXRlcyIsInJvd0RlZmluaXRpb25zIiwicm93Q291bnQiLCJyb3dUZW1wbGF0ZXMiLCJlZGl0aW5nIiwic2V0QWxpZ25tZW50Iiwic2V0R3JpZE5vQ29sc09yUm93cyIsInNldEdyaWRUZW1wbGF0ZUNvbHVtbk9yUm93Iiwic2V0R3JpZEVkaXRpbmciLCJzZXRHcmlkQXJlYXNFZGl0b3JTdGFja2luZ09yZGVyIiwiY2xpZW50SWQiLCJzZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJzZWxlY3RlZEdyaWRJdGVtUm9vdEJsb2NrQ2xpZW50SWQiLCJncmlkQ2hpbGRyZW4iLCJzZWxlY3QiLCJnZXRCbG9ja3MiLCJnZXRTZWxlY3RlZEJsb2NrQ2xpZW50SWQiLCJnZXRCbG9ja1BhcmVudHNCeUJsb2NrTmFtZSIsImZvY3VzVGFyZ2V0Iiwic2V0Rm9jdXNUYXJnZXQiLCJjaGlsZFJlcXVlc3RlZEVkaXQiLCJmaW5kIiwiY2hpbGQiLCJyZXF1ZXN0RWRpdCIsInJlZiIsImVsZW1lbnQiLCJvd25lckRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwibmV3R3JpZEFyZWFUZXh0IiwiY2hpbGRyZW4iLCJpbm5lckJsb2Nrc1Byb3BzIiwic3R5bGUiLCJncmlkVGVtcGxhdGVBcmVhcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwib25LZXlQcmVzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJrZXkiLCJlZGl0S2V5cyIsImV4aXRLZXlzIiwiaW5jbHVkZXMiLCJhbGxvd2VkQmxvY2tzIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsIkdyaWRFZGl0V3JhcHBlciIsImRpc3BhdGNoIiwib3duUHJvcHMiLCJyZWdpc3RyeSIsInNldEF0dHJpYnV0ZXMiLCJvcHRpb25zIiwib3RoZXIiLCJkZWZpbml0aW9ucyIsImNvdW50RGVsdGEiLCJ1bml0Iiwic3BsaWNlIiwibGVuZ3RoIiwiZnJvbSIsImluZGV4IiwidGVtcGxhdGUiLCJnZXRCbG9jayIsInBhcmVudHMiLCJuYW1lIiwic2VsZWN0ZWRCbG9ja1BhcmVudHNTdGFja2luZ09yZGVyIiwicmVkdWNlIiwicmVzIiwicGFyZW50SWQiLCJzZWxmIiwicGFyZW50QmxvY2siLCJwdXNoIiwiZWRpdG9yU3RhY2tpbmdPcmRlciIsImN1ciIsInN0YWNraW5nT3JkZXIiLCJFZGl0IiwicHJvcHMiLCJyZWdpc3RlckJsb2NrVHlwZSIsImdyaWQiLCJpY29uIiwibWV0YWRhdGEiLCJTYXZlIiwiZWRpdCIsInNhdmUiLCJDb2xzUm93SGVscGVySW5uZXIiLCJHcmlkSGVscGVyTGFiZWwiLCJsYWJsZVR5cGUiLCJsYWJsZUNvdW50Iiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJsYWJsZUluZGV4IiwiR3JpZEhlbHBlckNlbGwiLCJjZWxsTGFiZWwiLCJjZWxsWCIsImNlbGxZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlRW50ZXIiLCJncmlkQXJlYSIsIkdyaWRIZWxwZXJBcHBlbmRlciIsImFyZWEiLCJjcmVhdGVCbG9jayIsImdlbmVyYXRlR3JpZEFyZWFTdGFydEVuZCIsImRvR3JpZEhlbHBlclNlbGVjdGlvbiIsImNvb3JkcyIsInN0YXJ0WCIsIngiLCJOdW1iZXIiLCJzdGFydFkiLCJ5IiwiZW5kWCIsImVuZFkiLCJzdGFydCIsIk1hdGgiLCJtaW4iLCJlbmQiLCJtYXgiLCJwYXJzZWQiLCJkb0dyaWRIZWxwZXJTYXZlIiwiZ3JpZENsaWVudElkIiwidGFyZ2V0IiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2siLCJuZXh0Q2hpbGRTdGFja2luZ09yZGVyIiwibmV4dENoaWxkSW5kZXgiLCJpbmQiLCJncmlkSGVscGVySXNEcmF3aW5nIiwic2V0R3JpZEhlbHBlcklzRHJhd2luZyIsImdyaWRIZWxwZXJDYW5TYXZlIiwic2V0R3JpZEhlbHBlckNhblNhdmUiLCJncmlkSGVscGVyQ29vcmRSZXMiLCJzZXRHcmlkSGVscGVyQ29vcmRSZXMiLCJmaW5pc2hTZWxlY3RpbmdHcmlkQXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2VsbEluZGV4IiwiZmxvb3IiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3NzU2FmZUJhc2U2NCIsInN0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZXBsYWNlIiwiZ2VuZXJhdGVHcmlkQXJlYSIsImNvbnRleHQiLCJyb3dzUmVzIiwicm93c0kiLCJjb2xzUmVzIiwiY29sc0kiLCJ0cmltIiwiZWRpdG9yUmVzIl0sInNvdXJjZVJvb3QiOiIifQ==