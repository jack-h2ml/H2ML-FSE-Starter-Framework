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
	useSelect,
} from '@wordpress/data';

import { 
	useState,
	useEffect
} from '@wordpress/element';

import { 
	createReduxStore, 
	register
} from '@wordpress/data';


import {
	useRefEffect 
} from '@wordpress/compose';

/**
 * Internal dependencies.
 */

import './../../../common/styles/grid-styles/editor.scss';

import './editor.scss';

import {
	generateGridTemplateAreas,
	generateGridTemplateColumnsOrRows,
} from './utils.js'

import { GridEditor } from './local_components/GridEditor'

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
}) => {
	//
	// Get information about the current Block, and its children. 
	// (Used htmlFor setting the editor stacking order, and adding / editing Grid-Area's)
	//

	const { selectedGridItemClientId, selectedGridItemRootBlockClientId, gridChildren } = useSelect((select) => {
		// Hooks.
		const { getBlocks, getSelectedBlockClientId, getBlockParentsByBlockName } = select(blockEditorStore);
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

	useEffect(() => {
		setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId);
	}, [selectedGridItemClientId]);

	//
	// focusTarget state, this is used to ensure we auto-focus on the correct Grid Area when making changes to the Grid.
	//

	const [focusTarget, setFocusTarget] = useState(null);

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
		if(!editing) {
			// Determine if a Grid Area is requesting to be updated. 
			const childRequestedEdit = gridChildren.find(child => child.attributes.requestEdit);
			if(childRequestedEdit) setGridEditing(childRequestedEdit);
		}
		return () => {
			// Set the focusTarget if needed. 
			if(editing?.clientId) setFocusTarget(editing);
			// Reset the Grid's 'editing' attribute. 
			setGridEditing(false);
		}
	}, [gridChildren]);

	//
	// If the Grid's 'editing' attribute changes to false, and a focusTarget is set, then .focus() on the focusTarget's DOM element,
	// then reset the focusTarget to null.
	//
	
	const ref = useRefEffect((element) => {
		const { ownerDocument } = element;
		if(editing) {
			ownerDocument.querySelector(`[data-block="${clientId}"]`).focus();
		} else if(focusTarget) {
			ownerDocument.querySelector(`[data-block="${focusTarget.clientId}"]`).focus();
			setFocusTarget(null)
		}
	}, [editing]);

	//
	// Register the Block / InnerBlock Props.
	//

	const newGridAreaText = __('Add new Grid Area', 'h2ml');
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		useBlockProps({
			style: {
				gridTemplateAreas: generateGridTemplateAreas(0, colCount, rowCount) /* 0 === 'editor' */,
				gridTemplateColumns: generateGridTemplateColumnsOrRows(0, colTemplates) /* 0 === 'editor' */,
				gridTemplateRows: generateGridTemplateColumnsOrRows(0, rowTemplates) /* 0 === 'editor' */
			},
			onKeyPress: (e) => {
				if(clientId === selectedGridItemClientId) {
					e.stopPropagation();
					// Variables.
					const { key } = e;
					const editKeys = ['a', 'A'];
					const exitKeys = ['c', 'C'];
					// Bind keys to attribute setters.
					if (editKeys.includes(key) && !editing) setGridEditing(true);
					else if (exitKeys.includes(key)) {
						setGridEditing(false);
					};
				}
			},
			ref: ref
		}), {
			allowedBlocks: ['h2ml/grid-area'],
		}
	);

	//
	// The JSX.
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
							{(colCount * rowCount) > 49 && (
								<Notice status="warning" isDismissible={false}>
									{__(
										'The number of cells is greater than the recommended limit.',
										'h2ml'
									)}
								</Notice>
							)}
						</PanelBody>
						<PanelBody title={__('Grid Columns Settings', 'h2ml')} initialOpen={false}>
							{[...Array(colCount)].map((_, i) => (
								<TextControl
									key={`col-settings-${i}`}
									label={sprintf(__("Column %1$d Width", 'h2ml'), i + 1)}
									value={colTemplates[i]}
									onChange={value => setGridTemplateColumnOrRow(0, i, value /* 0 === 'col' */)}
								/>
							))}
						</PanelBody>
						<PanelBody title={__('Grid Rows Settings', 'h2ml')} initialOpen={false}>
							{[...Array(rowCount)].map((_, i) => (
								<TextControl
									key={`row-settings-${i}`}
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
				<GridEditor
					gridClientId={clientId}
					colCount={colCount}
					rowCount={rowCount}
					editing={editing}
				/>
				<div className="grid-grid-areas">
					{!(editing) && (
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
												onClick={() => setGridEditing(true)}
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
		// Update the Grid Area's WP alignment (Wide, Full etc).
		//
		setAlignment(verticalAlignment) {
			const { setAttributes } = ownProps;
			setAttributes({ verticalAlignment });
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
		},
		//
		// Update templates htmlFor specific Columns / Rows.
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
		// Set the Grid 'editing' attribute
		//
		setGridEditing(value) {
			const { setAttributes } = ownProps;
			setAttributes({ editing: value });
		},
		//
		// When a Grid-Area or any of it's children are selcted, visually move that item to the top of the 
		// stacking context. (this is not saved as an attribute, and is purely htmlFor convenience in the editor).
		//
		setGridAreasEditorStackingOrder(selectedGridItemClientId, selectedGridItemRootBlockClientId) {
			const { clientId } = ownProps;
			const { setSelectedGridArea } = dispatch('h2ml/grid_area_store');
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
				setSelectedGridArea({
					clientId: selectedGridItemClientId,
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