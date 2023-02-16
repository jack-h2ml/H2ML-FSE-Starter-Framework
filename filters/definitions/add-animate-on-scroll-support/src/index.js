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
	Notice,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';

import { useMemo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

import {
	AnimateInHelpText,
	AnimateOutHelpText,
	AnimateInDurationHelpText,
	AnimateOutDurationHelpText,
	AnimateThresholdHelpText,
	AnimateDirectionHelpText
} from './editor_dependencies/local_components/HelpText';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

/*
 * Global
 */

const animateIsAnimatedClass = 'animate__animated';

const defaultAnimateValues = {
	animateInDuration: '500ms',
	animateOutDuration: '500ms',
	animateThreshold: 0.5,
	animateDirection: 'both'
}

const getAnimateCssDefinitions = () => [...document.styleSheets].reduce((res, styleSheet) => {
	if(styleSheet.href && styleSheet.href.includes('add-animate-on-scroll-support')) {
		return [...styleSheet.cssRules].reduce((res, rule) => ({
			...res,
			...((
				Object.getPrototypeOf(rule).constructor === CSSStyleRule
				&& rule.selectorText.includes('.animate__')
				&& !rule.selectorText.includes('.animate__animated')
				&& (rule.selectorText.includes('In') || rule.selectorText.includes('Out')) 
				&& rule.selectorText !== '.animate__jackInTheBox'
			) && (rule.selectorText.includes('In') 
				? {animateIn: [
					...res.animateIn,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]} : {animateOut: [
					...res.animateOut,
					{
						label: [...rule.style.animationName.replace(/([A-Z])/g, " $1")].reduce((res, cur, ind) => (
							`${res}${!ind ? cur.toUpperCase() : cur}`
						), ''),
						value: rule.selectorText.replace(/[.,\s]/g, '')
					}
				]})
			)
		}), {
			animateIn: [{
				label: 'None',
				value: ''
			}],
			animateOut: [{
				label: 'None',
				value: ''
			}]
		});
	} else {
		return res;
	}
}, []);

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
						...defaultAnimateValues
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
				h2mlAnimationOnScroll: h2mlAnimationOnScrollAttributes,
				h2mlAnimationOnScroll: {
					animateIn,
					animateOut,
					animateInDuration,
					animateOutDuration,
					animateThreshold,
					animateDirection
				} = {}
			},
			setAttributes
		} = props;

		const animationClassNames = useMemo(() => getAnimateCssDefinitions(), []);
		
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
									<Notice
										isDismissible={false}
									>
										<Text
											size={'12px'}
											color={'rgb(117, 117, 117)'}
										>
											{__("When adding animations which transition off-screen ensure that the document body has the", 'h2ml')} <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y">overflow-x</ExternalLink> {__("property set to either 'hidden' or 'clip'.", 'h2ml')}
										</Text>
									</Notice>
									<SelectControl
										onChange={(newAnimation) => {
											setAttributes({h2mlAnimationOnScroll: {
												...h2mlAnimationOnScrollAttributes,
												animateIn: newAnimation
											}});
										}}
										value={animateIn}
										options={animationClassNames.animateIn}
										label={__("Set the 'Animate In' style", 'h2ml')}
										help={<AnimateInHelpText/>}
										style={{marginBottom:0}}
										__nextHasNoMarginBottom={true}
									/>
									<SelectControl
										onChange={(newAnimation) => {
											setAttributes({h2mlAnimationOnScroll: {
												...h2mlAnimationOnScrollAttributes,
												animateOut: newAnimation
											}});
										}}
										value={animateOut}
										options={animationClassNames.animateOut}
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
													...h2mlAnimationOnScrollAttributes,
													...defaultAnimateValues
												}});
											}}
										>
											<ToolsPanelItem
												hasValue={() => animateInDuration !== defaultAnimateValues.animateInDuration}
												label={__("Animate In Duration", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														...h2mlAnimationOnScrollAttributes,
														defaultAnimateValues: defaultAnimateValues.animateInDuration
													}});
												}}
												isShownByDefault={false}
											>
												<TextControl
													value={animateInDuration}
													onChange={(newDuration) => {
														setAttributes({h2mlAnimationOnScroll: {
															...h2mlAnimationOnScrollAttributes,
															animateInDuration: newDuration
														}});
													}}
													label={__("Animate In Duration", 'h2ml')}
													help={<AnimateInDurationHelpText/>}
												/>
											</ToolsPanelItem>
											<ToolsPanelItem
												hasValue={() => animateOutDuration !== defaultAnimateValues.animateOutDuration}
												label={__("Animate Out Duration", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														...h2mlAnimationOnScrollAttributes,
														animateOutDuration: defaultAnimateValues.animateOutDuration
													}});
												}}
												isShownByDefault={false}
											>
												<TextControl
													value={animateOutDuration}
													onChange={(newDuration) => {
														setAttributes({h2mlAnimationOnScroll: {
															...h2mlAnimationOnScrollAttributes,
															animateOutDuration: newDuration
														}});
													}}
													label={__("Animate Out Duration", 'h2ml')}
													help={<AnimateOutDurationHelpText/>}
												/>
											</ToolsPanelItem>
											<ToolsPanelItem
												hasValue={() => animateThreshold !== defaultAnimateValues.animateThreshold}
												label={__("Animate Threshold", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														...h2mlAnimationOnScrollAttributes,
														animateThreshold: defaultAnimateValues.animateThreshold
													}});
												}}
												isShownByDefault={false}
											>
												<NumberControl
													onChange={(newThreshold) => {
														setAttributes({h2mlAnimationOnScroll: {
															...h2mlAnimationOnScrollAttributes,
															animateThreshold: newThreshold
														}});
													}}
													value={animateThreshold}
													min={0.1}
													max={1}
													step={0.1}
													label={__("Animate Threshold", 'h2ml')}
													help={<AnimateThresholdHelpText/>}
												/>
											</ToolsPanelItem>
											<ToolsPanelItem
												hasValue={() => animateDirection !== defaultAnimateValues.animateDirection}
												label={__("Animate Direction", 'h2ml')}
												onDeselect={() => {
													setAttributes({h2mlAnimationOnScroll: {
														...h2mlAnimationOnScrollAttributes,
														animateDirection: defaultAnimateValues.animateDirection
													}});
												}}
												isShownByDefault={false}
											>
												<SelectControl
													onChange={(newDirection) => {
														setAttributes({h2mlAnimationOnScroll: {
															...h2mlAnimationOnScrollAttributes,
															animateDirection: newDirection
														}});
													}}
													value={animateDirection}
													options={[{
														value: 'both',
														label: 'Both (Default)'
													}, {
														value: 'forwards',
														label: 'Forwards'
													}, {
														value: 'backwards',
														label: 'Backwards'
													}]}
													label={__("Animate Direction", 'h2ml')}
													help={<AnimateDirectionHelpText/>}
													style={{marginBottom:0}}
													__nextHasNoMarginBottom={true}
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
				animateOutDuration,
				animateThreshold,
				animateDirection
			} = {}
		} = attributes;
		//
		if (animateIn || animateOut) {
			//
			const className = (oldClassName ? oldClassName.split(' ') : []).reduce((res, cur) => {
				return (cur !== animateIsAnimatedClass) ? `${res} ${cur}` : `${res}`
			}, (animateIsAnimatedClass));
			//
			return {
				...props,
				className,
				'data-animate': '',
				...(animateIn && {'data-animate-in': animateIn}),
				...(animateOut && {'data-animate-out': animateOut}),
				...(animateInDuration && {'data-animate-in-duration': animateInDuration}),
				...(animateOutDuration && {'data-animate-out-duration': animateOutDuration}),
				...(animateDirection && {'data-animate-direction': animateDirection}),
				...(animateThreshold && {'data-animate-Threshold': animateThreshold}),
			};
		}
		return props;
	}
);


