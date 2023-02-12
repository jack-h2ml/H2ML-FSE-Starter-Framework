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
} from '@wordpress/components';

import { 
	useState,
	useMemo,
	useEffect
} from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */

import './index.scss';

/**
 * External Dependencies
 */

import 'animate.css/animate.min.css';

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

		const animations = useMemo(() => [...document.styleSheets].reduce((res, styleSheet) => {
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
		}, []), []);
		
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
										onChange={(value) => {
											setAttributes({h2mlAnimationOnScroll: {
												animateIn: value,
												animateOut,
												animateInDuration,
												animateOutDuration
											}});
										}}
										value={animateIn}
										options={animations.animateIn}
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
										options={animations.animateOut}
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


