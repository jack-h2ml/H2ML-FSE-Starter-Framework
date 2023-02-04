/**
 * WordPress dependencies
 */

import { addFilter } from '@wordpress/hooks';

import { InspectorControls } from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	SelectControl,
	__experimentalVStack as VStack,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalBoxControl as BoxControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/** 
 * The Filter
 */

addFilter(
	'blocks.registerBlockType',
	'h2ml/add-animation-on-scroll-attribute',
	(settings) => {
		return {
			...settings,
			attributes: {
				...settings.attributes,
				h2mlAnimationOnScroll: {
					type: 'object',
					default: {
						animateIn: '',
						animateOut: '',
						duration: '',
						animateOnce: ''
					}
				}
			}
		}
	}
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
				h2mlAnimationOnScroll: {
					animateIn,
					animateOut,
					duration,
					animateOnce
				} = {}
			},
			setAttributes
		} = props;
		if (animateIn !== undefined) {
			return (
				<>
					<InspectorControls>
						<Panel>
							<PanelBody title={__("Animation on Scroll", 'h2ml')} initialOpen={false}>
								<SelectControl
									onChange={(value) => {
										setAttributes({h2mlAnimationOnScroll: {
											animateIn: value,
											animateOut,
											duration,
											animateOnce
										}});
									}}
									value={animateIn}
									options={[{
										label: 'None',
										value: ''
									}, {
										label: 'Fade in',
										value: 'animate__fadeIn'
									}, {
										label: 'Fade in Down',
										value: 'animate__fadeInDown'
									}, {
										label: 'Fade in Left',
										value: 'animate__fadeInLeft'
									}, {
										label: 'Fade in Up',
										value: 'animate__fadeInUp'
									}, {
										label: 'Fade in Right',
										value: 'animate__fadeInRight'
									}]}
								/>
								<SelectControl
									onChange={(value) => {
										setAttributes({h2mlAnimationOnScroll: {
											animateIn,
											animateOut: value,
											duration,
											animateOnce
										}});
									}}
									value={animateOut}
									options={[{
										label: 'None',
										value: ''
									}, {
										label: 'Fade out',
										value: 'animate__fadeOut'
									}, {
										label: 'Fade out Down',
										value: 'animate__fadeOutDown'
									}, {
										label: 'Fade out Left',
										value: 'animate__fadeOutLeft'
									}, {
										label: 'Fade out Up',
										value: 'animate__fadeOutUp'
									}, {
										label: 'Fade out Right',
										value: 'animate__fadeOutRight'
									}]}
								/>
								{/*(positioningType) && (
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
								)*/}
							</PanelBody>
						</Panel>
					</InspectorControls>
					<BlockEdit {...props}/>
				</>
			);
		}
		return <BlockEdit {...props} />;
	}, 'addAnimationOnScrollInspectorControlsEdit')
);

/**
 * 
 */

addFilter(
	'blocks.getSaveContent.extraProps',
	'h2ml/add-positioning-styles-save',
	(props, type, attributes) => {
		const {
			h2mlAnimationOnScroll: {
				animateIn,
				animateOut,
				duration,
				animateOnce
			} = {}
		} = attributes;
		if (animateIn || animateOut) {
			return {
				...props,
				animateIn,
				animateOut
			};
		}
		return props;
	}
);

