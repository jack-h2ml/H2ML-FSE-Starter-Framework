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
	Tooltip,
	__experimentalVStack as VStack,
	__experimentalHStack as HStack
} from '@wordpress/components';

import {
	InspectorControls,
	useInnerBlocksProps,
	useBlockProps,
	store as blockEditorStore,
	BlockContextProvider
} from '@wordpress/block-editor';

import {
	__,
	_n,
	sprintf
} from '@wordpress/i18n';

import {
	withDispatch,
	useSelect,
	createReduxStore,
	register
} from '@wordpress/data';

import {
	useState,
	useEffect,
	useRef,
	useCallback,
} from '@wordpress/element';

import {
	useRefEffect,
	useMergeRefs
} from '@wordpress/compose';

import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies.
 */

import './../../../common/styles/grid-styles/editor.scss';

import './editor.scss';

import {
	generateGridTemplateAreas,
	generateGridTemplateColumnsOrRows,
} from './editor_dependencies/utils.js';

import {
	GridNoColsHelpText,
	GridNoRowsHelpText
} from './editor_dependencies/local_components/HelpText';

import { GridEditor } from './editor_dependencies/local_components/GridEditor';

import { BreakpointModal } from './editor_dependencies/local_components/BreakpointEditor';

/*
* Redux store htmlFor holding the currently selected h2ml/grid-area, 
* This is used to ensure the currently selected h2ml/grid-area is visually on top in the editor.
*/

register(createReduxStore("h2ml/grid_area_store", {
	reducer(state = {
		selected: {
			value: null
		},
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

const GridEdit = ({
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
		breakpointDefinitions,
		editing
	},
	// Attribute Setters.
	setGridNoColsOrRows,
	setGridTemplateColumnOrRow,
	setGridMinHeight,
	setGridEditing,
	//
	addUpdateGridArea,
	updateBreakpoint,
	// Redux Setters.
	setGridAreasEditorStackingOrder,
	// Other.
	clientId
}) => {

	//
	// Get information about the current Block, and its children. 
	// (Used htmlFor setting the editor stacking order, and adding / editing Grid-Area's)
	//

	const { selectedBlockClientId, selectedGridItemRootBlockClientId, gridChildren } = useSelect((select) => {
		// Hooks.
		const { getBlocks, getSelectedBlockClientId, getBlockParentsByBlockName } = select(blockEditorStore);
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

	useEffect(() => {
		setGridAreasEditorStackingOrder(selectedBlockClientId, selectedGridItemRootBlockClientId);
	}, [selectedBlockClientId]);

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

	useEffect(() => {
		const childRequestedEdit = gridChildren.find(child => child.attributes.requestEdit);
		if(childRequestedEdit && !editing) {
			setGridEditing({
				target: childRequestedEdit.clientId,
				active: true,
				done: false
			});
		}
	}, [gridChildren]);

	//
	// Finished editing grid (need to correctly focus afterwards)
	//

	useEffect(() => {
		if(editing !== undefined && editing?.done) {
			setGridEditing(undefined);
		}
	}, [editing])

	//
	// When editing is set to true, focus on the grid.
	//
	
	const focusRef = useRefEffect((element) => {
		const { ownerDocument } = element;
		if (editing && !editing.done) {
			ownerDocument.querySelector(`[data-block="${clientId}"]`).focus();
		}
	}, [editing]);

	//
	// Breakpoint Editor Modal State.
	//

	const [isGridBreakpointsModalOpen, setGridBreakpointsModalOpen] = useState(false);

	const openBreakpointEditor = useCallback(() => {
		setGridBreakpointsModalOpen(true);
	}, []);

	const closeBreakpointEditor = useCallback(() => {
		setGridBreakpointsModalOpen(false);
	}, []);

	const gridRef = useRef();

	//
	// Register the Block / InnerBlock Props.
	//

	const newGridAreaText = __('Add new Grid Area', 'h2ml');
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		useBlockProps({
			style: {
				minHeight,
				gridTemplateAreas: generateGridTemplateAreas(colCount, rowCount),
				gridTemplateColumns: generateGridTemplateColumnsOrRows(colTemplates),
				gridTemplateRows: generateGridTemplateColumnsOrRows(rowTemplates)
			},
			ref: useMergeRefs([
				focusRef,
				gridRef
			])
		}), {
			allowedBlocks: ['h2ml/grid-area'],
		}
	);

	//
	// The JSX.
	//

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody
						title={__("Grid Settings", 'h2ml')}
						initialOpen={true}
						className={'h2mlGridSettingsPanel'}
					>
						<VStack
							as={'div'}
							spacing={4}
						>
							<RangeControl
								label={__("Grid area number of Columns", 'h2ml')}
								value={colCount}
								onChange={value => setGridNoColsOrRows(0, value)} // 0 === 'col'
								min={1}
								help={<GridNoColsHelpText />}
								__nextHasNoMarginBottom={true}
							/>
							<RangeControl
								label={__("Grid area number of Rows", 'h2ml')}
								value={rowCount}
								onChange={value => setGridNoColsOrRows(1, value)} // 1 === 'row'
								min={1}
								help={<GridNoRowsHelpText />}
								__nextHasNoMarginBottom={true}
							/>
							{(colCount * rowCount) > 49 && (
								<Notice status="warning" isDismissible={false}>
									{__(
										'The number of cells is greater than the recommended limit.',
										'h2ml'
									)}
								</Notice>
							)}
						</VStack>
						<PanelBody title={__("Grid Columns Settings", 'h2ml')} initialOpen={false}>
							{[...Array(colCount)].map((_, i) => (
								<TextControl
									key={`col-settings-${i}`}
									label={sprintf(__("Column %1$d Width", 'h2ml'), i + 1)}
									value={colTemplates[i]}
									onChange={value => setGridTemplateColumnOrRow(0, i, value /* 0 === 'col' */)}
								/>
							))}
						</PanelBody>
						<PanelBody title={__("Grid Rows Settings", 'h2ml')} initialOpen={false}>
							{[...Array(rowCount)].map((_, i) => (
								<TextControl
									key={`row-settings-${i}`}
									label={sprintf(__("Row %1$d Height", 'h2ml'), i + 1)}
									value={rowTemplates[i]}
									onChange={value => setGridTemplateColumnOrRow(1, i, value) /* 0 === 'row' */}
								/>
							))}
						</PanelBody>
						<PanelBody title={__("Grid Minimum Height", 'h2ml')} initialOpen={false}>
							<TextControl
								label={__("Grid Minimum Height", 'h2ml')}
								value={minHeight}
								onChange={newMinHeight => setGridMinHeight(newMinHeight)}
							/>
						</PanelBody>
						<Button variant="secondary" onClick={openBreakpointEditor}>
							{__("Set Grid Breakpoints", 'h2ml')}
						</Button>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}>
				<BreakpointModal
					open={isGridBreakpointsModalOpen}
					gridClientId={clientId}
					gridRef={gridRef}
					onRequestClose={closeBreakpointEditor}
					saveFunction={updateBreakpoint}
				/>
				<GridEditor
					gridClientId={clientId}
					colCount={colCount}
					rowCount={rowCount}
					target={editing?.target}
					saveFunction={(coords, target) => {
						addUpdateGridArea(coords, target);
					}}
				/>
				<div className="grid-grid-areas">
					{!editing?.active && (
						<>
							{children}
							<div className="grid-grid-area-appender-wrap">
								<div className="addNewGridAreaContainer">
									<Tooltip text={newGridAreaText}>
										<div className="addNewGridAreaWrap">
											<label htmlFor="addNewGridArea">{newGridAreaText}</label>
											<Button
												id="addNewGridArea"
												className="addNewGridArea"
												isSmall
												onClick={() => setGridEditing({
													target: null,
													active: true,
													done: false
												})}
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

const GridEditWrapper = withDispatch(
	(dispatch, ownProps, registry) => ({
		//
		// Update number of columns / rows, clean up the relevant templates, and finally set the total number of Grid Area's.
		//
		setGridNoColsOrRows(type, count) {
			const { attributes, setAttributes } = ownProps;
			// Determine if we're setting Columns or Rows.
			const options = ['col', 'row'];
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
		},
		//
		// Update templates html for specific Columns / Rows.
		//
		setGridTemplateColumnOrRow(type, index, template) {
			const { attributes, setAttributes } = ownProps;
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
			const unit = (type === 'col') ? '1fr' : 'max-content';
			templatesCopy[index] = (template ? template : unit);
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
			const { setAttributes } = ownProps;
			setAttributes({ minHeight })
		},
		//
		// Set the Grid 'editing' attribute
		//
		setGridEditing(value) {
			const { setAttributes } = ownProps;
			setAttributes({ editing: value });
		},
		//
		// Add or Update a Grid Area
		//
		addUpdateGridArea(coords, target) {
			const { clientId } = ownProps;
			//
			if (target === null) {
				// Hooks.
				const { getBlocks } = registry.select(blockEditorStore);
				const { insertBlock } = dispatch(blockEditorStore);
				// Adding a new Grid Area.
				const {
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
				// Insert the new Grid Area.
				insertBlock(createBlock('h2ml/grid-area', {
					gridArea: coords,
					stackingOrder: nextChildStackingOrder
				}), nextChildIndex, clientId);
			} else {
				// Hooks.
				const { updateBlockAttributes } = dispatch(blockEditorStore);
				// Update the requested Grid Area.
				updateBlockAttributes(target, {
					gridArea: coords,
					requestEdit: false
				});
			}
			//
			this.setGridEditing({
				target,
				active: false,
				done: true,
			});
		},
		//
		// Update Breakpoint
		//
		updateBreakpoint(breakpoint) {

			const {
				clientId,
				setAttributes,
				attributes: {
					breakpointDefinitions
				}
			} = ownProps;
			//
			const {
				name,
				mediaQuery,
				minHeight,
				colDefinitions,
				rowDefinitions,
				gridAreasDefinitions
			} = breakpoint;
			//
			const newBreakpointDefinition = {
				name,
				mediaQuery,
				minHeight,
				colDefinitions,
				rowDefinitions,
			}
			//
			const { updateBlockAttributes } = dispatch(blockEditorStore);
			const { getBlock } = registry.select(blockEditorStore);
			
			// Update the Grid's Grid Areas
			getBlock(clientId).innerBlocks.forEach(gridArea => {
				const {
					clientId: gridAreaClientId,
					attributes: {
						breakpointDefinitions = {},
						gridArea: {
							parsed: defaultGridArea
						}
					}
				} = gridArea;
				//
				const gridAreaDefinition = gridAreasDefinitions.find(gridAreaDefinition => gridAreaDefinition.clientId === gridAreaClientId);
				//
				updateBlockAttributes(gridAreaClientId, {
					breakpointDefinitions: {
						...breakpointDefinitions,
						'default': {
							mediaQuery: '(min-width: 0px)',
							coords: defaultGridArea,
						},
						...(gridAreaDefinition && {[name]: {
							mediaQuery: mediaQuery,
							coords: gridAreaDefinition.coords
						}})
					}
				});
			});
			
			// Update the Grid
			const existingBreakpoint = breakpointDefinitions.findIndex(cur => cur.name === breakpoint.name);
			if (existingBreakpoint >= 0) {
				const newBreakpointDefinitions = breakpointDefinitions.map(x => x);
				newBreakpointDefinitions[existingBreakpoint] = newBreakpointDefinition;
				setAttributes({ breakpointDefinitions: newBreakpointDefinitions });
			} else {
				setAttributes({
					breakpointDefinitions: [
						...breakpointDefinitions,
						newBreakpointDefinition
					]
				});
			}
		},
		//
		// When a Grid-Area or any of it's children are selcted, visually move that item to the top of the 
		// stacking context. (this is not saved as an attribute, and is purely htmlFor convenience in the editor).
		//
		setGridAreasEditorStackingOrder(selectedBlockClientId, selectedGridItemRootBlockClientId) {
			const { clientId } = ownProps;
			const { setSelectedGridArea } = dispatch('h2ml/grid_area_store');
			if (selectedGridItemRootBlockClientId === clientId) {
				const { getBlock, getBlockParentsByBlockName, getBlocks } = registry.select(blockEditorStore);
				//
				const parents = getBlock(selectedBlockClientId).name !== 'h2ml/grid-area' ?
					getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid', 'h2ml/grid-area'], true) :
					[selectedBlockClientId, ...getBlockParentsByBlockName(selectedBlockClientId, ['h2ml/grid', 'h2ml/grid-area'], true)];
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
	})
)(GridEdit);

/*
 * Export the Block.
 */

export default function Edit(props) {
	return <GridEditWrapper {...props} />;
};