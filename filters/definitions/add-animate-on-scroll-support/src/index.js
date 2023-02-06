/**
 * WordPress Dependencies
 */

import { addFilter } from '@wordpress/hooks';

import { InspectorControls } from '@wordpress/block-editor';

import {
	Panel,
	PanelBody,
	SelectControl,
	TextControl,
	ExternalLink,
	__experimentalVStack as VStack,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

/** 
 * Helper Components
 */

const AnimateInHelpText = (props) => {
	return (
		<span>
			{__("The 'Animate In' animation plays when scrolling the block into view.", 'h2ml')}
		</span>
	);
}

const AnimateOutHelpText = (props) => {
	return (
		<span>
			{__("The 'Animate Out' animation plays when scrolling the block out of view.", 'h2ml')}
		</span>
	);
}

const AnimateInDurationHelpText = (props) => {
	return (
		<VStack 
			as={'span'}
			spacing={1}
		>
			<span>
				{__("Set this block's 'Animate In'", 'html')} <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/time">{__("duration", 'h2ml')}</ExternalLink>.
			</span>
			<span>
				{__("By default this is 500ms.", 'h2ml')}
			</span>
		</VStack>
	);
}

const AnimateOutDurationHelpText = (props) => {
	return (
		<VStack 
			as={'span'}
			spacing={1}
		>
			<span>
				{__("Set this block's 'Animate Out'", 'html')} <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/time">{__("duration", 'h2ml')}</ExternalLink>.
			</span>
			<span>
				{__("By default this is 500ms.", 'h2ml')}
			</span>
		</VStack>
	);
}

/*
 * Global
 */

const animationClass = 'animate__animated';

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
						animateInDuration: '',
						animateOutDuration: ''
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
					animateInDuration,
					animateOutDuration
				} = {}
			},
			setAttributes
		} = props;
		if (animateIn !== undefined) {
			return (
				<>
					<InspectorControls>
						<Panel>
							<PanelBody
								title={__("Animate on Scroll", 'h2ml')} 
								initialOpen={false}
								className={'h2mlAnimateOnScrollPanel'}
							>
								<VStack 
									as={'div'}
									spacing={4}
								>
									<SelectControl
										onChange={(value) => {
											setAttributes({h2mlAnimationOnScroll: {
												animateIn: value,
												animateOut,
												animateInDuration,
												animateOutDuration
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
										label={__("Set the 'Animate In' style", 'h2ml')}
										help={<AnimateInHelpText/>}
										style={{marginBottom:0}}
										__nextHasNoMarginBottom={true}
									/>
									<SelectControl
										onChange={(value) => {
											setAttributes({h2mlAnimationOnScroll: {
												animateIn,
												animateOut: value,
												animateInDuration,
												animateOutDuration
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
										label={__("Set the 'Animate Out' style", 'h2ml')}
										help={<AnimateOutHelpText/>}
										style={{marginBottom:0}}
										__nextHasNoMarginBottom={true}
									/>
									{(animateIn || animateOut) && (
										<ToolsPanel
											label="Animation Additional Settings"
											resetAll={() => {
												setAttributes({h2mlAnimationOnScroll: {
													animateIn,
													animateOut,
													animateInDuration: '',
													animateOutDuration: ''
												}});
											}}
										>
											<ToolsPanelItem
												hasValue={() => !!animateInDuration}
												label={__("Animate In Duration", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														animateIn,
														animateOut,
														animateInDuration: '',
														animateOutDuration
													}});
												}}
												isShownByDefault={false}
											>
												<TextControl
													value={animateInDuration}
													onChange={(newDuration) => {
														setAttributes({h2mlAnimationOnScroll: {
															animateIn,
															animateOut,
															animateInDuration: newDuration,
															animateOutDuration
														}});
													}}
													label={__("Animate In Duration", 'h2ml')}
													help={<AnimateInDurationHelpText/>}
												/>
											</ToolsPanelItem>
											<ToolsPanelItem
												hasValue={() => !!animateOutDuration}
												label={__("Animate Out Duration", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														animateIn,
														animateOut,
														animateInDuration,
														animateOutDuration: ''
													}});
												}}
												isShownByDefault={false}
											>
												<TextControl
													value={animateOutDuration}
													onChange={(newDuration) => {
														setAttributes({h2mlAnimationOnScroll: {
															animateIn,
															animateOut,
															animateInDuration,
															animateOutDuration: newDuration
														}});
													}}
													label={__("Animate Out Duration", 'h2ml')}
													help={<AnimateOutDurationHelpText/>}
												/>
											</ToolsPanelItem>
										</ToolsPanel>
									)}
								</VStack>
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
		//
		const {className: oldClassName} = props;
		const {
			h2mlAnimationOnScroll: {
				animateIn,
				animateOut,
				animateInDuration,
				animateOutDuration
			} = {}
		} = attributes;
		//
		if (animateIn || animateOut) {
			//
			const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
				return (cur !== animationClass) ? `${res} ${cur}` : `${res}`
			}, (animationClass));
			//
			return {
				...props,
				className,
				...((animateIn || animateOut) && {'data-animate': ''}),
				...(animateIn && {'data-animate-in': animateIn}),
				...(animateOut && {'data-animate-out': animateOut}),
				...(animateInDuration && {'data-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-animate-out-duration': animateOutDuration}),
			};
		}
		return props;
	}
);


