/**
 * WordPress dependencies
 */

import {
	BlockControls,
	InspectorControls,
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
	useSetting,
	store as blockEditorStore
} from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	ToolbarGroup, 
	ToolbarButton,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';

import {
	withDispatch,
	useSelect,
	dispatch
} from '@wordpress/data';

import { 
	useEffect
} from '@wordpress/element';

import { getBlockType } from '@wordpress/blocks';

import { resizeCornerNE } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';

/*
 * Internal dependencies
 */

import './editor.scss';

/*
 * The Edit Function Container
 */

const GridAreaEdit = (args) => {

	const {
		// Attributes.
		attributes: {
			gridArea,
			stackingOrder,
			requestEdit,
			number,
			breakpointDefinitions
		},
		// Attribute Setters.
		setRequestEdit,
		setStackingOrder,
		// Other.
		clientId
	} = args;

	console.log(args);
	
	//
	// Get Information about the current Block, and its children (Used for setting the editor stacking order).
	//

	const {selectedBlockClientId, gridAreaIds, isSelectedGridArea, childBlocks, themeSupportsLayout} = useSelect((select) => {
		// Hooks.
		const { getBlocks, getBlockOrder, getBlockRootClientId, getSettings, getSelectedBlockClientId } = select(blockEditorStore);
		const { getSelectedGridArea } = select('h2ml/grid_area_store');
		// Variables.
		const selectedBlockClientId = getSelectedBlockClientId();
		const rootId = getBlockRootClientId(clientId);
		const childBlocks = getBlocks(clientId);
		const selectedGridItem = getSelectedGridArea();
		// Return Values.
		return {
			selectedBlockClientId,
			childBlocks: childBlocks.length ? childBlocks : null,
			gridAreaIds: getBlockOrder(rootId),
			isSelectedGridArea: selectedGridItem?.parents.find(selectedGridItem => selectedGridItem.clientId === clientId),
			themeSupportsLayout: getSettings()?.supportsLayout,
		};
	}, []);
	
	//
	// If the Grid Area's number of children changes, determine if there are one or more children. 
	// 
	// If there is one, and that is a Media or an Embed block then update the child's 'h2mlCanFillGridArea' attribute to true,
	// allowing the child to cover the Grid Area (this is added in our filters).
	//
	// If there is multiple, set the 'h2mlCanFillGridArea' attribute to false.
	//
	
	useEffect(() => {
		if(childBlocks?.length === 1) {
			childBlocks.forEach(childBlock => {
				const {clientId: childClientId, name} = childBlock;
				const {category} = getBlockType(name);
				if(['media', 'embed'].includes(category)) {
					dispatch(blockEditorStore).updateBlockAttributes(childClientId, {h2mlCanFillGridArea: true});	
				}
			});
		} else if(childBlocks) { 
			childBlocks.forEach(childBlock => {
				const {clientId: childClientId, name} = childBlock;
				const {category} = getBlockType(name);
				if(['media', 'embed'].includes(category)) {
					dispatch(blockEditorStore).updateBlockAttributes(childClientId, {h2mlCanFillGridArea: false});	
				}
			});
		}
	}, [childBlocks]);

	//
	// The Grid Area layout.
	//

	const layout = { 
		...useSetting('layout'), 
		//type: 'flex', 
		//orientation: 'vertical'
	};

	const flexDirection = {
		vertical: 'column',
		horizontal: 'row'
	}[layout.orientation ?? 'vertical'];

	console.log('hmm', attributes, layout, flexDirection);

	//
	// Register the Block / InnerBlock Props.
	//
	
	const innerBlocksProps = useInnerBlocksProps( 
		useBlockProps({
			className: [`h2mlGridArea${number}`],
			style: {
				gridArea: gridArea.parsed,
				zIndex: isSelectedGridArea ? isSelectedGridArea.editorStackingOrder : stackingOrder,
				flexDirection
			},
			'aria-label': __(`Grid-Area (${gridAreaIds.indexOf(clientId) + 1} of ${gridAreaIds.length})`, 'h2ml'),
		}), {
			renderAppender: childBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
			__experimentalLayout: themeSupportsLayout ? layout : undefined,
		}
	);

	//
	// The JSX.
	//
	
	return (
		<>
			<BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={resizeCornerNE}
                        label={__("Resize Grid Area", 'h2ml')}
                        isPressed={requestEdit}
                        onClick={() => setRequestEdit(!requestEdit)}
                    />
                </ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __("Grid Area Settings", 'h2ml')} initialOpen={true}>
						<NumberControl
							label={__("Stacking Order", 'h2ml')}
							isShiftStepEnabled = {true}
							onChange = {setStackingOrder}
							shiftStep = {1}
							value = {stackingOrder}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...innerBlocksProps}/>
		</>
	);
}

/*
 * The Block Actions
 */

const GridAreaEditWrapper = withDispatch(
	(dispatch, ownProps, registry) => ({
		//
		// Set the 'requestEdit' attribute, this is picked up by the parent Grid in order to update the Grid Area's size.
		//
		setRequestEdit(value) {
			const {clientId, setAttributes} = ownProps;
			setAttributes({requestEdit: value});
		},
		//
		// Set the 'stackingOrder' attribute, this determines the saved z-index of Grid Area's within a Grid.
		//
		setStackingOrder(order) {
			const {setAttributes} = ownProps;
			setAttributes({stackingOrder: Number(order)});
		},
	})
)(GridAreaEdit);

export default function Edit(props) {
	return <GridAreaEditWrapper {...props}/>;
};