/**
 * WordPress dependencies.
 */

import {
	Notice,
	Panel,
	PanelBody,
	RangeControl,
	TextControl,
	Button,
	Tooltip
} from '@wordpress/components';

import {
	InspectorControls,
	useInnerBlocksProps,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import {
	__,
	_n,
	sprintf
} from '@wordpress/i18n';

import {
	withDispatch,
	useSelect
} from '@wordpress/data';

import { createBlock } from '@wordpress/blocks';

import { useEffect, useRef } from '@wordpress/element';

import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies.
 */

import './editor.scss';

import {
	//generateGridArea,
	generateGridAreaStartEnd
} from './../../common/utils.js'

import {
	generateGridTemplateAreas,
	generateGridTemplateColumnsAndRows,
} from './utils.js'

/*
* Redux store for holding the currently selected h2ml/grid-area, 
* This is used to ensure the currently selected h2ml/grid-area is visually on top in the editor.
*/

register(createReduxStore("h2ml/grid_area_store", {
	reducer(state = {
		selected: {
			value: null
		},
		gridGridAreaAppenderCanSave: {
			value: {
				done: true,
				canSave: false,
				didSave: false,
				gridArea: null,
				appender: null,
				gridHelpers: null,
				events: {
					start: null,
					change: null,
					end: null
				},
				coords: {
					store: {
						x: null, 
						y: null
					},
					start: {
						x: null,
						y: null
					},
					end: {
						x: null,
						y: null
					}
				}
			}
		}
	}, action) {
		switch (action.type) {
			case "UPDATE_SELECTED_GRID_AREA": {
				return {
					...state,
					selected: {
						...state.selected,
						value: action.value
					}
				};
			}
			case "SET_GRID_GRID_AREA_APPENDER_CAN_SAVE": {
				return {
					...state,
					gridGridAreaAppenderCanSave: {
						...state.gridGridAreaAppenderCanSave,
						value: action.value
					}
				}
			}
		}
		return state;
	},
	actions: {
		updateSelectedGridArea(value) {
			return {
				type: "UPDATE_SELECTED_GRID_AREA",
				value
			};
		},
		setGridGridAreaAppenderCanSave(value) {
			return {
				type: "SET_GRID_GRID_AREA_APPENDER_CAN_SAVE",
				value
			};
		},
	},
	selectors: {
		getSelectedGridArea(state) {
			return state.selected.value;
		},
		getGridGridAreaAppenderCanSave(state) {
			return state.gridGridAreaAppenderCanSave.value;
		},
	}
}));

/*
* Helper Components
*/

//
const GridAreaAppender = (props) => {
	return (
		<div
			class="grid-grid-area-appender"
			ref={props.appenderRef}
			area={props.area ? props.area : null}
		>
			{props.children}
		</div>
	);
}

//
const ColsRowHelper = (props) => {
	const ColsRowHelperInner = (props) => (<span>{props.index}</span>);
	return (<div
		class="grid-cols-rows-helper"
		style={{
			gridColumnStart: props.type === 'col' ? ++props.index + 1 : 1,
			gridRowStart: props.type === 'row' ? ++props.index + 1 : 1
		}}
	>
		<Tooltip text={sprintf(__('%1$s %2$d', 'h2ml'), props.type === 'col' ? 'Column' : 'Row', props.index)}>
			<div>
				<ColsRowHelperInner index={props.index} />
			</div>
		</Tooltip>
	</div>)
};

/**
 * The Code.
 */

function GridEditContainer({
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
		gridAreasCount,
		addingGridArea
	},
	//
	setAlignment,
	setGridNoColsOrRows,
	setGridTemplateColumnOrRow,
	//
	setAddingGridArea,
	initAddGridArea,
	saveGridArea,
	addGridAreaCleanup,
	//
	setGridAreasEditorStackingOrder,
	//
	generateGridHelper,
	//
	clientId
}) {
	//
	// Handle updating the stacking order for any currently selected Grid Area's within the editor.
	//
	const { selectedGridItemClientId, selectedGridItemRootBlockClientId, gridGridAreaAppenderCanSave, gridChildren} = useSelect((select) => {
		const { getBlocks, getSelectedBlockClientId, getBlockParentsByBlockName } = select(blockEditorStore);
		let selectedBlockClientId = getSelectedBlockClientId();
		let selectedGridItemRootBlockClientId = selectedBlockClientId ? getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid'], true)[0] : false;
		//
		const { getGridGridAreaAppenderCanSave } = select('h2ml/grid_area_store');
		//
		return {
			selectedGridItemClientId: selectedBlockClientId,
			selectedGridItemRootBlockClientId,
			gridGridAreaAppenderCanSave: getGridGridAreaAppenderCanSave(),
			gridChildren: getBlocks(clientId)
		};
	}, []);
	//
	useEffect(() => {
		setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId);
	}, [selectedGridItemClientId]);
	//
	// Handle adding / editing Grid-Area's.
	//
	const gridElement = useRef(null);
	const gridHelpers = useRef(null);
	const gridGridAreaAppender = useRef(null);
	useEffect(() => {
		initAddGridArea(addingGridArea, gridElement, gridGridAreaAppender, gridHelpers);
	}, [addingGridArea]);
	//
	useEffect(() => {
		//
		const gridGridAreaIsEditing = gridChildren.find(child => child.attributes.requestEdit.requested);
		if(gridGridAreaIsEditing) {
			console.log('a', gridGridAreaIsEditing);
		}
		//
	}, [...gridChildren.map(child => child.attributes.requestEdit)])

	//
	// Handle InnerBlocks, including the InnerBlock appender JSX.
	//
	const newGridAreaText = __('Add new Grid Area', 'h2ml');
	const { children, ...innerBlocksProps } = useInnerBlocksProps({
		...useBlockProps({
			style: {
				gridTemplateAreas: generateGridTemplateAreas(0, colCount, rowCount) /* 0 === 'editor' */,
				gridTemplateColumns: generateGridTemplateColumnsAndRows(0, colTemplates) /* 0 === 'editor' */,
				gridTemplateRows: generateGridTemplateColumnsAndRows(0, rowTemplates) /* 0 === 'editor' */
			},
			ref: gridElement,
			onKeyPress: (e) => {
				if (e.key === 'a') setAddingGridArea(true);
				if (e.key === 'e' || e.key === 'c') setAddingGridArea(false);
			},
		})
	}, {
		allowedBlocks: ['h2ml/grid-area'],
	});
	//
	// The JSX
	//
	return (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={setAlignment}
					value={verticalAlignment}
				/>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody title={__('Grid Settings', 'h2ml')} initialOpen={true}>
						<PanelBody>
							<RangeControl
								__nextHasNoMarginBottom
								label={__(`Grid area number of Columns`, 'h2ml')}
								value={colCount}
								onChange={value => setGridNoColsOrRows(0, value)} // 0 === 'col'
								min={1}
								max={8}
							/>
							<RangeControl
								__nextHasNoMarginBottom
								label={__(`Grid area number of Rows`, 'h2ml')}
								value={rowCount}
								onChange={value => setGridNoColsOrRows(1, value)} // 1 === 'row'
								min={1}
								max={8}
							/>
							{(colCount * rowCount) > 49 &&
								(<Notice status="warning" isDismissible={false}>
									{__(
										'The number of cells is greater than the recommended limit.',
										'h2ml'
									)}
								</Notice>)
							}
						</PanelBody>
						<PanelBody title={__('Grid Columns Settings', 'h2ml')} initialOpen={false}>
							{[...Array(colCount)].map((_, i) => (
								<TextControl
									label={sprintf(__("Column %1$d Width", 'h2ml'), i + 1)}
									value={colTemplates[i]}
									onChange={value => setGridTemplateColumnOrRow(0, i, value /* 0 === 'col' */)}
								/>
							))}
						</PanelBody>
						<PanelBody title={__('Grid Rows Settings', 'h2ml')} initialOpen={false}>
							{[...Array(rowCount)].map((_, i) => (
								<TextControl
									label={sprintf(__("Row %1$d Height", 'h2ml'), i + 1)}
									value={rowTemplates[i]}
									onChange={value => setGridTemplateColumnOrRow(1, i, value) /* 0 === 'row' */}
								/>
							))}
						</PanelBody>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}>
				<div class="grid-helpers" ref={gridHelpers}>
					<div class="grid-cols-rows-helper-wrap">
						<div class="grid-cols-helper" />
						{generateGridHelper(0, colCount) /* 0 === 'Column' */}
					</div>
					<div class="grid-cols-rows-helper-wrap">
						<div class="grid-rows-helper" />
						{generateGridHelper(1, rowCount) /* 1 === 'Row' */}
					</div>
					{Array.from(Array(gridAreasCount)).map((_, i) => {
						let x = ((++i - 1) % colCount) + 1;
						let y = Math.floor((i - 1) / colCount) + 1;
						//
						return (<div
							class="grid-area-helper"
							data-area={i}
							data-xcoords={x}
							data-ycoords={y}
							style={{
								gridArea: `${y + 1} / ${x + 1} / ${y + 2} / ${x + 2}`
							}}>
							{`${i}`} <sub>{`(${x}, ${y})`}</sub>
						</div>
						);
					})}
				</div>
				<div class="grid-grid-areas">
					{addingGridArea ? (
						<>
							{addingGridArea && (
								<GridAreaAppender
									class="grid-grid-area-appender"
									appenderRef={gridGridAreaAppender}
								>
									{gridGridAreaAppenderCanSave.canSave && (
										<Button
											text={__('Add Grid Area', 'h2ml')}
											label={__('Add Grid Area', 'h2ml')}
											showTooltip={true}
											variant="primary"
											onClick={() => { saveGridArea() }}
										></Button>
									)}
								</GridAreaAppender>
							)}
							<div class="grid-adding-grid-areas-notice">
								<p><strong>{__("Click and drag", 'h2ml')}</strong> {__("to create a new Grid Area, when you're done click", 'h2ml')} <strong>{__("Add Grid Area", 'h2ml')}</strong>, {__("press", 'h2ml')} <strong>{__("E", 'h2ml')}</strong> {__("or", 'h2ml')} <strong>{__("C", 'h2ml')}</strong> {__("to cancel.", 'h2ml')}<br />{__("Don't forget to ")}<strong>{__("Update", 'h2ml')}</strong>{__(" the post when you're done.", 'h2ml')}</p>
							</div>
						</>
					) : (
						<>
							{children}
							<div class="grid-grid-area-appender-wrap">
								<div class="addNewGridAreaContainer">
									<Tooltip text={newGridAreaText}>
										<div class="addNewGridAreaWrap">
											<label for="addNewGridArea">{newGridAreaText}</label>
											<Button
												id="addNewGridArea"
												className="addNewGridArea"
												isSmall
												onClick={() => setAddingGridArea(true)}
											>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path></svg>
											</Button>
										</div>
									</Tooltip>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

/*
 * The Block Actions.
 */

const GridEditContainerWrapper = withDispatch(
	(dispatch, ownProps, registry) => ({
		//
		// Update the Grid Area's alignment (Wide, Full etc).
		//
		setAlignment(verticalAlignment) {
			const {setAttributes} = ownProps;
			setAttributes({verticalAlignment});
		},
		//
		// Update number of columns / rows, clean up the relevant templates, and finally set the total number of Grid Area's.
		//
		setGridNoColsOrRows(type, count) {
			const { attributes, setAttributes } = ownProps;
			// Determine if we're setting Columns or Rows, and also get the opposite.
			const options = ['col', 'row'];
			const other = options[type ^ 1];
			type = options[type];
			// Create a copy of the existing Column / Row definition.
			const definitions = { ...attributes[`${type}Definitions`] };
			const countDelta = count - definitions.count;
			// Clean up Column / Row templates.
			const unit = type === 'col' ? '1fr' : 'max-content';
			definitions.templates.splice(...countDelta > 0 ?
				[definitions.templates.length, 0, ...Array.from(Array(countDelta)).map(_ => unit)] : // Adding Columns / Rows
				[count, definitions.templates.length - 1] // Removing Columns / Rows
			);
			// Update the definition's count value and then set the attrbute. 
			definitions.count = count;
			setAttributes({ [`${type}Definitions`]: definitions });
			// Update the total number of Grid Area's.
			this.setGridAreasCount(
				definitions.count * attributes[`${other}Definitions`].count
			);
		},
		setGridAreasCount(count) {
			const { setAttributes } = ownProps;
			setAttributes({ gridAreasCount: count });
		},
		//
		// Update templates for specific Columns / Rows.
		//
		setGridTemplateColumnOrRow(type, index, template) {
			const { attributes, setAttributes } = ownProps;
			// Determine if we're generating a Columns or Rows template
			const options = ['col', 'row'];
			type = options[type];
			// Create a copy of the existing Column / Row definition.
			const definitions = { ...attributes[`${type}Definitions`] };
			// Update the given Column / Row template and set the attribute.
			const unit = type === 'col' ? '1fr' : 'max-content';
			definitions.templates[index] = template ? template : unit;
			setAttributes({ [`${type}Definitions`]: definitions });
		},
		//
		// (THIS CAN BE REMOVED) Add a new Grid Area. 
		//
		setAddingGridArea(addingGridArea) {
			//
			const {getSelectedBlockClientId, getBlockRootClientId} = registry.select(blockEditorStore);
			const {clientId, setAttributes} = ownProps;
			//
			const {getGridGridAreaAppenderCanSave} = registry.select('h2ml/grid_area_store');
			const {setGridGridAreaAppenderCanSave} = dispatch('h2ml/grid_area_store');
			//
			const {
				done,
				didSave,
				gridHelpers,
				gridElement,
				events,
			} = getGridGridAreaAppenderCanSave();
			//
			let selectedBlockClientId = getSelectedBlockClientId();
			const gridClientId = done || !didSave ? selectedBlockClientId : getBlockRootClientId(selectedBlockClientId);
			// Ensure we're looking at the correct gird area, as this function is called from a wide variety of contexts
			if(gridClientId === clientId) {
				//
				/*
				if(!addingGridArea && !done) {
					if(!didSave) {
						gridElement.current.focus();
					}
					// Clean up any Event Listeners if Finished / Cancelled adding a Grid Area.
					gridHelpers.current.querySelectorAll('.grid-area-helper').forEach(gridHelper => {
						gridHelper.removeEventListener('mousedown', events.startSelection);
					});
					//
					setGridGridAreaAppenderCanSave({
						done: true,
						canSave: false,
						didSave: false,
						gridArea: null,
						appender: null,
						gridHelpers: null,
						events: {
							start: null,
							change: null,
							end: null
						},
						coords: {
							store: {
								x: null, 
								y: null
							},
							start: {
								x: null,
								y: null
							},
							end: {
								x: null,
								y: null
							},
							parsed: null
						}
					});
				}
				*/
				//
				setAttributes({addingGridArea: addingGridArea});	
			} 
		},
		addGridAreaCleanup() {
			const { getGridGridAreaAppenderCanSave } = registry.select('h2ml/grid_area_store');
			const {
				didSave,
				gridElement,
				gridHelpers, 
				events
			} = getGridGridAreaAppenderCanSave();
			//
			if(!didSave) {
				gridElement.current.focus();
			}
			// Clean up any Event Listeners if Finished / Cancelled adding a Grid Area.
			gridHelpers.current.querySelectorAll('.grid-area-helper').forEach(gridHelper => {
				gridHelper.removeEventListener('mousedown', events.startSelection);
			});
		},
		//
		//
		//
		initAddGridArea(addingGridArea, gridElement, appender, gridHelpers, gridArea = null) {
			//
			const { setGridGridAreaAppenderCanSave } = dispatch('h2ml/grid_area_store');
			//
			if (addingGridArea) {
				//
				gridElement.current.focus();
				//
				gridHelpers.current.querySelectorAll('.grid-area-helper').forEach(gridHelper => {
					gridHelper.addEventListener('mousedown', this.startSelectingGridArea);
				});
				//
				setGridGridAreaAppenderCanSave({
					done: false,
					canSave: false,
					didSave: false,
					gridArea,
					appender,
					gridHelpers,
					gridElement,
					events: {
						startSelection: this.startSelectingGridArea,
						updateSelection: this.updateCurrentlyHoveredGridArea,
						endSelection: this.finishSelectingGridArea,
					},
					coords: {
						store: {
							x: null, 
							y: null
						},
						start: {
							x: null,
							y: null
						},
						end: {
							x: null,
							y: null
						}
					},
					start: null,
					end: null,
					saveStart: null,
					saveEnd: null
				});
			} 
		},
		startSelectingGridArea(e) {
			//
			const { getGridGridAreaAppenderCanSave } = registry.select('h2ml/grid_area_store');
			const { setGridGridAreaAppenderCanSave } = dispatch('h2ml/grid_area_store');
			//
			const {
				done,
				canSave,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events
			} = getGridGridAreaAppenderCanSave();
			//
			const startX = Number(e.currentTarget.dataset.xcoords);
			const startY = Number(e.currentTarget.dataset.ycoords);
			//
			// Register the necessary event handlers for selecting our new Grid Area.
			//
			let newCoords = {
				store: {
					x: startX, 
					y: startY
				},
				start: {
					x: startX,
					y: startY,
				},
				end: {
					x: startX,
					y: startY,
				}
			}
			newCoords.parsed = generateGridAreaStartEnd(newCoords.start.x, newCoords.start.y, newCoords.end.x, newCoords.end.y);
			//
			appender.current.style.display = 'flex';
			appender.current.style.gridArea = newCoords.parsed;
			//
			gridHelpers.current.querySelectorAll('.grid-area-helper').forEach(gridHelper => {
				gridHelper.addEventListener('mouseenter', events.updateSelection);
			});
			document.addEventListener('mouseup', events.endSelection);
			//
			setGridGridAreaAppenderCanSave({
				done,
				canSave,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords: newCoords
			});
		},
		updateCurrentlyHoveredGridArea(e) {
			//
			const { getGridGridAreaAppenderCanSave } = registry.select('h2ml/grid_area_store');
			const { setGridGridAreaAppenderCanSave } = dispatch('h2ml/grid_area_store');
			//
			const {
				done,
				canSave,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords,
			} = getGridGridAreaAppenderCanSave();
			//
			const startX = coords.store.x;
			const startY = coords.store.y; 
			const endX = Number(e.currentTarget.dataset.xcoords);
			const endY = Number(e.currentTarget.dataset.ycoords);
			//
			let newCoords = {
				store: coords.store,
				start: {
					x: Math.min(startX, endX),
					y: Math.min(startY, endY)
				},
				end: {
					x: Math.max(startX, endX),
					y: Math.max(startY, endY),
				} 
			}
			//
			newCoords.parsed = generateGridAreaStartEnd(newCoords.start.x, newCoords.start.y, newCoords.end.x, newCoords.end.y);
			//
			appender.current.style.gridArea = newCoords.parsed;
			//
			setGridGridAreaAppenderCanSave({
				done,
				canSave,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords: newCoords
			});
		},
		finishSelectingGridArea(e) {
			//
			const { getGridGridAreaAppenderCanSave } = registry.select('h2ml/grid_area_store');
			const { setGridGridAreaAppenderCanSave } = dispatch('h2ml/grid_area_store');
			//
			const {
				done,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords
			} = getGridGridAreaAppenderCanSave();
			//
			gridHelpers.current.querySelectorAll('.grid-area-helper').forEach(gridHelper => {
				gridHelper.removeEventListener('mouseenter', events.updateSelection);
			});
			document.removeEventListener('mouseup', events.endSelection);
			//
			setGridGridAreaAppenderCanSave({
				done,
				canSave: true,
				didSave,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords
			});
		},
		saveGridArea() {
			//
			const { getGridGridAreaAppenderCanSave } = registry.select('h2ml/grid_area_store');
			const { setGridGridAreaAppenderCanSave } = dispatch('h2ml/grid_area_store');
			//
			const {insertBlock} = dispatch(blockEditorStore);
			const {getBlocks} = registry.select(blockEditorStore);
			//
			const {clientId} = ownProps;
			//
			const {
				done,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords
			} = getGridGridAreaAppenderCanSave();
			//
			let {
				nextChildStackingOrder,
				nextChildIndex
			} = getBlocks(clientId).reduce(
				(res, cur, ind) => {
					res.nextChildStackingOrder = cur.attributes.stackingOrder >= res.nextChildStackingOrder ? cur.attributes.stackingOrder + 1 : res.nextChildStackingOrder;
					res.nextChildIndex = ind + 1;
					return res;
				}, {
					nextChildStackingOrder: 0,
					nextChildIndex: 0
				}
			);
			//
			insertBlock(createBlock('h2ml/grid-area', {
				gridArea: coords,
				stackingOrder: nextChildStackingOrder
			}), nextChildIndex, clientId);
			//
			appender.current.style.display = 'none';
			//
			setGridGridAreaAppenderCanSave({
				done,
				canSave: false,
				didSave: true,
				gridArea,
				appender,
				gridHelpers,
				gridElement,
				events,
				coords
			});
			//
			this.setAddingGridArea(false);
		},
		//
		// When a Grid-Area or any of it's children are selcted, visually move that item to the top of the 
		// stacking context. (this is not saved as an attribute, and is purely for convenience in the editor).
		//
		setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId) {
			const { clientId } = ownProps;
			const { updateSelectedGridArea } = dispatch('h2ml/grid_area_store');
			if (selectedGridItemRootBlockClientId === clientId) {
				const { getBlock, getBlockParentsByBlockName, getBlocks } = registry.select(blockEditorStore);
				//
				const parents = getBlock(selectedGridItemClientId).name !== 'h2ml/grid-area' ?
					getBlockParentsByBlockName(selectedGridItemClientId, ['h2ml/grid', 'h2ml/grid-area'], true) :
					[selectedGridItemClientId, ...getBlockParentsByBlockName(selectedGridItemClientId, ['h2ml/grid', 'h2ml/grid-area'], true)];
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
				updateSelectedGridArea({
					clientId: selectedGridItemClientId,
					parents: selectedBlockParentsStackingOrder
				});
			} else if (!selectedGridItemRootBlockClientId) {
				updateSelectedGridArea(null);
			}
		},
		//
		// Helper function for generating the Grid Helper Columns and Rows markers within the Editor
		//
		generateGridHelper(type, count) {
			const options = ['col', 'row'];
			type = options[type];
			//
			return Array.from(Array(count)).map((_, index) => (
				<ColsRowHelper {...{ type, index }} />
			));
		}
	})
)(GridEditContainer);

/*
 * Export the Block.
 */

export default function Edit(props) {
	return <GridEditContainerWrapper {...props} />;
};