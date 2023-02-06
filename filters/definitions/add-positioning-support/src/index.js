/**
 * WordPress dependencies
 */

import { addFilter } from '@wordpress/hooks';

import { InspectorControls } from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	SelectControl,
	ExternalLink,
	__experimentalVStack as VStack,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalBoxControl as BoxControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/** 
 * Helper Components
 */

const SelectHelpText = (props) => {
	return (
		<VStack 
			as={'span'}
			spacing={1}
		>
			<span {...props}>
				{__("Set this block's", 'html')} <ExternalLink href="https://developer.mozilla.org/docs/Web/CSS/position">{__("Position Property", 'h2ml')}</ExternalLink>
			</span>
			<span>
				{__("Currently only, 'Static' (default), 'Relative', and 'Sticky' are supported.", 'h2ml')}
			</span>
		</VStack>
	);
}

/**
 * Global
 */

const allowedPositioningBlocksNames = ['core/template-part', 'core/group', 'core/columns', 'h2ml/grid', 'h2ml/grid-area'];

/** 
 * The Filter
 */

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
 */

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
 */

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
 */

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
					...Object.keys(positioningValues).reduce((previous, key) => {
						return {
							...previous,
							...((positioningValues[key]) && {[key]: positioningValues[key]})
						};
					}, {}),
					zIndex: positioningStackingOrder
				}
			};
		}
		return props;
	}
);






