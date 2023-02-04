/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);

/**
 * WordPress dependencies
 */







/** 
 * Helper Components
 */

const SelectHelpText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
    as: 'span',
    spacing: 1
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", props, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Set this block's", 'html'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
    href: "https://developer.mozilla.org/docs/Web/CSS/position"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Position Property", 'h2ml'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Currently only, 'Static' (default), 'Relative', and 'Sticky' are supported.", 'h2ml')));
};

/** 
 * The Filter
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'h2ml/add-animate-on-scroll-support', settings => {
  const {
    name
  } = settings;
  console.log(settings);
  return settings;
});

/*
addFilter(
	'blocks.registerBlockType',
	'h2ml/add-positioning-attribute',
	(settings) => {
		const { name } = settings;
		if (allowedPositioningBlocksNames.includes(name)) {
			return {
				...settings,
				attributes: {
					...settings.attributes,
					h2mlPositioning: {
						type: 'object',
						default: {
							'type': '',
							'values': {
								'top': '',
								'right': '',
								'bottom': '',
								'left': ''
							},
							'zIndex': ''
						}
					}
				}
			}
		}
		return settings;
	}
);

/**
 * 
 *

addFilter(
	'editor.BlockListBlock',
	'h2ml/add-positioning-styles-edit',
	createHigherOrderComponent(BlockListBlock => props => {
		const {attributes: {
			h2mlPositioning: {
				type: positioningType,
				values: positioningValues,
				zIndex: positioningStackingOrder
			} = {},
			wrapperProps = {}
		}} = props;
		if(positioningType !== undefined) {
			return <BlockListBlock {...props} className={'h2ml-testing'} wrapperProps={{
				...wrapperProps,
				style: {
					position: (positioningType === 'fixed' ? 'sticky' : positioningType),
					...positioningValues,
					zIndex: positioningStackingOrder
				}
			}}/>;
		}
		return <BlockListBlock {...props}/>;
	}, 'addPositioningStylesEdit')
);

/*
 * 
 *

addFilter(
	'editor.BlockEdit',
	'h2ml/add-positioning-insepctor-controls-edit',
	createHigherOrderComponent(BlockEdit => props => {
		const {
			attributes: {
				h2mlPositioning: {
					type: positioningType,
					values: positioningValues,
					zIndex: positioningStackingOrder
				} = {}
			},
			setAttributes
		} = props;
		if (positioningType !== undefined) {
			return (
				<>
					<InspectorControls>
						<Panel>
							<PanelBody title={__("Positioning", 'h2ml')} initialOpen={false}>
								<SelectControl
									onChange={(value) => {
										setAttributes({h2mlPositioning: {
											type: value,
											values: positioningValues
										}});
									}}
									value={positioningType}
									options={[{
										label: 'Static',
										value: ''
									}, {
										label: 'Fixed',
										value: 'fixed'
									}, {
										label: 'Relative',
										value: 'relative'
									}, {
										label: 'Sticky',
										value: 'sticky'
									}]}
									help={<SelectHelpText/>}
								/>
								{(positioningType) && (
									<ToolsPanel
										label="Tools Panel (default example)"
										resetAll={() => {
											setAttributes({h2mlPositioning: {
												type: positioningType,
												values: Object.entries(positioningValues).reduce((newValues, entry) => {
													newValues[entry[0]] = '';
													return newValues;
												}, {}),
												zIndex: ''
											}});
										}}
									>
										<ToolsPanelItem
											hasValue={() => Object.entries(positioningValues).filter(entry => entry[0] !== 'zIndex' && !!entry[1])}
											label={__("Position Values", 'h2ml')}
											onDeselect={() => {
												setAttributes({h2mlPositioning: {
													type: positioningType,
													values: Object.entries(positioningValues).reduce((newValues, entry) => {
														newValues[entry[0]] = '';
														return newValues;
													}, {}),
													zIndex: positioningStackingOrder
												}});
											}}
											isShownByDefault={true}
										>
											<BoxControl
												label={__("Position Values", 'h2ml')}
												sides={Object.keys(positioningValues)}
												values={positioningValues}
												onChange={(newPositioningValues) => {
													setAttributes({h2mlPositioning: {
														type: positioningType,
														values: {
															...positioningValues,
															...newPositioningValues
														},
														zIndex: positioningStackingOrder
													}});
												}}
											/>
										</ToolsPanelItem>
										<ToolsPanelItem
											hasValue={() => Object.entries(positioningValues).filter(entry => entry[0] !== 'zIndex' && !!entry[1])}
											label={__("Stacking Order", 'h2ml')}
											onDeselect={() => {
												setAttributes({h2mlPositioning: {
													type: positioningType,
													values: positioningValues,
													zIndex: ''
												}});
											}}
											isShownByDefault={false}
										>
											<NumberControl
												label={__("Stacking Order", 'h2ml')}
												value = {positioningStackingOrder}
												onChange = {(newZIndex) => {
													setAttributes({h2mlPositioning: {
														type: positioningType,
														values: {
															...positioningValues
														},
														zIndex: newZIndex
													}});
												}}
												shiftStep = {1}
												isShiftStepEnabled = {true}
											/>
										</ToolsPanelItem>
									</ToolsPanel>
								)}
							</PanelBody>
						</Panel>
					</InspectorControls>
					<BlockEdit {...props}/>
				</>
			);
		}
		return <BlockEdit {...props} />;
	}, 'addPositioningInspectorControlsEdit')
);

/**
 * 
 *

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-positioning-styles-save',
	(props, type, attributes) => {
		const {
			h2mlPositioning: {
				type: positioningType,
				values: positioningValues,
				zIndex: positioningStackingOrder
			} = {}
		} = attributes;
		if (positioningType) {
			return {
				...props,
				style: {
					...props.style,
					position: positioningType,
					...positioningValues,
					zIndex: positioningStackingOrder
				}
			};
		}
		return props;
	}
);

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFNkM7QUFFZTtBQVk3QjtBQUVNO0FBRTJCOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWtCLGNBQWMsR0FBSUMsS0FBSyxJQUFLO0VBQ2pDLE9BQ0Msa0VBQUMsdUVBQU07SUFDTixFQUFFLEVBQUUsTUFBTztJQUNYLE9BQU8sRUFBRTtFQUFFLEdBRVgsMEVBQVVBLEtBQUssRUFDYkgsbURBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsRUFBQyxHQUFDLG9FQUFDLCtEQUFZO0lBQUMsSUFBSSxFQUFDO0VBQXFELEdBQUVBLG1EQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQWdCLENBQ3BKLEVBQ1AsZ0ZBQ0VBLG1EQUFFLENBQUMsNkVBQTZFLEVBQUUsTUFBTSxDQUFDLENBQ3BGLENBQ0M7QUFFWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQWhCLDJEQUFTLENBQ1IsMEJBQTBCLEVBQzFCLG9DQUFvQyxFQUNuQ29CLFFBQVEsSUFBSztFQUNiLE1BQU07SUFBRUM7RUFBSyxDQUFDLEdBQUdELFFBQVE7RUFDekJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7RUFDckIsT0FBT0EsUUFBUTtBQUNoQixDQUFDLENBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImJsb2NrRWRpdG9yXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJlbGVtZW50XCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL2V4dGVybmFsIHdpbmRvdyBbXCJ3cFwiLFwiaG9va3NcIl0iLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1maXJzdC1ibG9jay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LWZpcnN0LWJsb2NrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktZmlyc3QtYmxvY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImJsb2NrRWRpdG9yXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb25lbnRzXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJjb21wb3NlXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJlbGVtZW50XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJob29rc1wiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cblxuaW1wb3J0IHsgYWRkRmlsdGVyIH0gZnJvbSAnQHdvcmRwcmVzcy9ob29rcyc7XG5cbmltcG9ydCB7IEluc3BlY3RvckNvbnRyb2xzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuXG5pbXBvcnQge1xuXHRQYW5lbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRFeHRlcm5hbExpbmssXG5cdF9fZXhwZXJpbWVudGFsVlN0YWNrIGFzIFZTdGFjayxcblx0X19leHBlcmltZW50YWxUb29sc1BhbmVsIGFzIFRvb2xzUGFuZWwsXG4gICAgX19leHBlcmltZW50YWxUb29sc1BhbmVsSXRlbSBhcyBUb29sc1BhbmVsSXRlbSxcblx0X19leHBlcmltZW50YWxCb3hDb250cm9sIGFzIEJveENvbnRyb2wsXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCBhcyBOdW1iZXJDb250cm9sXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcblxuaW1wb3J0IHsgY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvc2UnO1xuXG4vKiogXG4gKiBIZWxwZXIgQ29tcG9uZW50c1xuICovXG5cbmNvbnN0IFNlbGVjdEhlbHBUZXh0ID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFZTdGFjayBcblx0XHRcdGFzPXsnc3Bhbid9XG5cdFx0XHRzcGFjaW5nPXsxfVxuXHRcdD5cblx0XHRcdDxzcGFuIHsuLi5wcm9wc30+XG5cdFx0XHRcdHtfXyhcIlNldCB0aGlzIGJsb2NrJ3NcIiwgJ2h0bWwnKX0gPEV4dGVybmFsTGluayBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQ1NTL3Bvc2l0aW9uXCI+e19fKFwiUG9zaXRpb24gUHJvcGVydHlcIiwgJ2gybWwnKX08L0V4dGVybmFsTGluaz5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHR7X18oXCJDdXJyZW50bHkgb25seSwgJ1N0YXRpYycgKGRlZmF1bHQpLCAnUmVsYXRpdmUnLCBhbmQgJ1N0aWNreScgYXJlIHN1cHBvcnRlZC5cIiwgJ2gybWwnKX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L1ZTdGFjaz5cblx0KTtcbn1cblxuLyoqIFxuICogVGhlIEZpbHRlclxuICovXG5cbmFkZEZpbHRlcihcblx0J2Jsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZScsXG5cdCdoMm1sL2FkZC1hbmltYXRlLW9uLXNjcm9sbC1zdXBwb3J0Jyxcblx0KHNldHRpbmdzKSA9PiB7XG5cdFx0Y29uc3QgeyBuYW1lIH0gPSBzZXR0aW5ncztcblx0XHRjb25zb2xlLmxvZyhzZXR0aW5ncyk7XG5cdFx0cmV0dXJuIHNldHRpbmdzO1xuXHR9XG4pO1xuXG4vKlxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJyxcblx0J2gybWwvYWRkLXBvc2l0aW9uaW5nLWF0dHJpYnV0ZScsXG5cdChzZXR0aW5ncykgPT4ge1xuXHRcdGNvbnN0IHsgbmFtZSB9ID0gc2V0dGluZ3M7XG5cdFx0aWYgKGFsbG93ZWRQb3NpdGlvbmluZ0Jsb2Nrc05hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdC4uLnNldHRpbmdzLmF0dHJpYnV0ZXMsXG5cdFx0XHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdFx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0XHRcdFx0J3R5cGUnOiAnJyxcblx0XHRcdFx0XHRcdFx0J3ZhbHVlcyc6IHtcblx0XHRcdFx0XHRcdFx0XHQndG9wJzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J3JpZ2h0JzogJycsXG5cdFx0XHRcdFx0XHRcdFx0J2JvdHRvbSc6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdCdsZWZ0JzogJydcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3pJbmRleCc6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzZXR0aW5ncztcblx0fVxuKTtcblxuLyoqXG4gKiBcbiAqXG5cbmFkZEZpbHRlcihcblx0J2VkaXRvci5CbG9ja0xpc3RCbG9jaycsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1zdHlsZXMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrTGlzdEJsb2NrID0+IHByb3BzID0+IHtcblx0XHRjb25zdCB7YXR0cmlidXRlczoge1xuXHRcdFx0aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdH0gPSB7fSxcblx0XHRcdHdyYXBwZXJQcm9wcyA9IHt9XG5cdFx0fX0gPSBwcm9wcztcblx0XHRpZihwb3NpdGlvbmluZ1R5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9IGNsYXNzTmFtZT17J2gybWwtdGVzdGluZyd9IHdyYXBwZXJQcm9wcz17e1xuXHRcdFx0XHQuLi53cmFwcGVyUHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IChwb3NpdGlvbmluZ1R5cGUgPT09ICdmaXhlZCcgPyAnc3RpY2t5JyA6IHBvc2l0aW9uaW5nVHlwZSksXG5cdFx0XHRcdFx0Li4ucG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0fVxuXHRcdFx0fX0vPjtcblx0XHR9XG5cdFx0cmV0dXJuIDxCbG9ja0xpc3RCbG9jayB7Li4ucHJvcHN9Lz47XG5cdH0sICdhZGRQb3NpdGlvbmluZ1N0eWxlc0VkaXQnKVxuKTtcblxuLypcbiAqIFxuICpcblxuYWRkRmlsdGVyKFxuXHQnZWRpdG9yLkJsb2NrRWRpdCcsXG5cdCdoMm1sL2FkZC1wb3NpdGlvbmluZy1pbnNlcGN0b3ItY29udHJvbHMtZWRpdCcsXG5cdGNyZWF0ZUhpZ2hlck9yZGVyQ29tcG9uZW50KEJsb2NrRWRpdCA9PiBwcm9wcyA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0dmFsdWVzOiBwb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9ID0ge31cblx0XHRcdH0sXG5cdFx0XHRzZXRBdHRyaWJ1dGVzXG5cdFx0fSA9IHByb3BzO1xuXHRcdGlmIChwb3NpdGlvbmluZ1R5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0XHQ8UGFuZWw+XG5cdFx0XHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiUG9zaXRpb25pbmdcIiwgJ2gybWwnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cG9zaXRpb25pbmdUeXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdTdGF0aWMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdGaXhlZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZml4ZWQnXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnUmVsYXRpdmUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3JlbGF0aXZlJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1N0aWNreScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnc3RpY2t5J1xuXHRcdFx0XHRcdFx0XHRcdFx0fV19XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXs8U2VsZWN0SGVscFRleHQvPn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdHsocG9zaXRpb25pbmdUeXBlKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlRvb2xzIFBhbmVsIChkZWZhdWx0IGV4YW1wbGUpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzZXRBbGw9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczogT2JqZWN0LmVudHJpZXMocG9zaXRpb25pbmdWYWx1ZXMpLnJlZHVjZSgobmV3VmFsdWVzLCBlbnRyeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXdWYWx1ZXNbZW50cnlbMF1dID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBuZXdWYWx1ZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LCB7fSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gT2JqZWN0LmVudHJpZXMocG9zaXRpb25pbmdWYWx1ZXMpLmZpbHRlcihlbnRyeSA9PiBlbnRyeVswXSAhPT0gJ3pJbmRleCcgJiYgISFlbnRyeVsxXSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiUG9zaXRpb24gVmFsdWVzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiBPYmplY3QuZW50cmllcyhwb3NpdGlvbmluZ1ZhbHVlcykucmVkdWNlKChuZXdWYWx1ZXMsIGVudHJ5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3VmFsdWVzW2VudHJ5WzBdXSA9ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBuZXdWYWx1ZXM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sIHt9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2hvd25CeURlZmF1bHQ9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiUG9zaXRpb24gVmFsdWVzXCIsICdoMm1sJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaWRlcz17T2JqZWN0LmtleXMocG9zaXRpb25pbmdWYWx1ZXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzPXtwb3NpdGlvbmluZ1ZhbHVlc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV3UG9zaXRpb25pbmdWYWx1ZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7aDJtbFBvc2l0aW9uaW5nOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ucG9zaXRpb25pbmdWYWx1ZXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5uZXdQb3NpdGlvbmluZ1ZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiBwb3NpdGlvbmluZ1N0YWNraW5nT3JkZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2xzUGFuZWxJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG9vbHNQYW5lbEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNWYWx1ZT17KCkgPT4gT2JqZWN0LmVudHJpZXMocG9zaXRpb25pbmdWYWx1ZXMpLmZpbHRlcihlbnRyeSA9PiBlbnRyeVswXSAhPT0gJ3pJbmRleCcgJiYgISFlbnRyeVsxXSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKFwiU3RhY2tpbmcgT3JkZXJcIiwgJ2gybWwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0PXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR6SW5kZXg6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1Nob3duQnlEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oXCJTdGFja2luZyBPcmRlclwiLCAnaDJtbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB7cG9zaXRpb25pbmdTdGFja2luZ09yZGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2UgPSB7KG5ld1pJbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBwb3NpdGlvbmluZ1R5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ekluZGV4OiBuZXdaSW5kZXhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNoaWZ0U3RlcCA9IHsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTaGlmdFN0ZXBFbmFibGVkID0ge3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub29sc1BhbmVsSXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVG9vbHNQYW5lbD5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8QmxvY2tFZGl0IHsuLi5wcm9wc30vPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiA8QmxvY2tFZGl0IHsuLi5wcm9wc30gLz47XG5cdH0sICdhZGRQb3NpdGlvbmluZ0luc3BlY3RvckNvbnRyb2xzRWRpdCcpXG4pO1xuXG4vKipcbiAqIFxuICpcblxuYWRkRmlsdGVyKFxuXHQnYmxvY2tzLmdldFNhdmVDb250ZW50LmV4dHJhUHJvcHMnLFxuXHQnaDJtbC9hZGQtcG9zaXRpb25pbmctc3R5bGVzLXNhdmUnLFxuXHQocHJvcHMsIHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRoMm1sUG9zaXRpb25pbmc6IHtcblx0XHRcdFx0dHlwZTogcG9zaXRpb25pbmdUeXBlLFxuXHRcdFx0XHR2YWx1ZXM6IHBvc2l0aW9uaW5nVmFsdWVzLFxuXHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0fSA9IHt9XG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0aWYgKHBvc2l0aW9uaW5nVHlwZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Li4ucHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0cG9zaXRpb246IHBvc2l0aW9uaW5nVHlwZSxcblx0XHRcdFx0XHQuLi5wb3NpdGlvbmluZ1ZhbHVlcyxcblx0XHRcdFx0XHR6SW5kZXg6IHBvc2l0aW9uaW5nU3RhY2tpbmdPcmRlclxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvcHM7XG5cdH1cbik7XG5cbiovXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJhZGRGaWx0ZXIiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsIiwiUGFuZWxCb2R5IiwiU2VsZWN0Q29udHJvbCIsIkV4dGVybmFsTGluayIsIl9fZXhwZXJpbWVudGFsVlN0YWNrIiwiVlN0YWNrIiwiX19leHBlcmltZW50YWxUb29sc1BhbmVsIiwiVG9vbHNQYW5lbCIsIl9fZXhwZXJpbWVudGFsVG9vbHNQYW5lbEl0ZW0iLCJUb29sc1BhbmVsSXRlbSIsIl9fZXhwZXJpbWVudGFsQm94Q29udHJvbCIsIkJveENvbnRyb2wiLCJfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wiLCJOdW1iZXJDb250cm9sIiwiX18iLCJjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCIsIlNlbGVjdEhlbHBUZXh0IiwicHJvcHMiLCJzZXR0aW5ncyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==