/**
 * WordPress Dependencies
 */

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

import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */

import {
	AnimateInHelpText,
	AnimateOutHelpText,
	AnimateInDurationHelpText,
	AnimateOutDurationHelpText,
	AnimateThresholdHelpText,
	AnimateDirectionHelpText,
	AnimateCustomClassHelpText
} from './../HelpText';

/**
 * The JSX
 */

export const FilterInspectorControls = (props) => {
	//
	const {
		existingAttributes,
		existingAttributes: {
			animateIn,
			animateOut,
			animateCustomClasses,
			animateInDuration,
			animateOutDuration,
			animateDirection,
			animateThreshold
		},
		optionalAttributesDefaults,
		animationClassNames,
		setAttributes
	} = props;
	//
	return (
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
								setAttributes({
									h2mlAnimateOnScroll: {
										...existingAttributes,
										animateIn: newAnimation
									}
								});
							}}
							value={animateIn}
							options={animationClassNames.animateIn}
							label={__("Set the 'Animate In' style", 'h2ml')}
							help={<AnimateInHelpText />}
							style={{ marginBottom: 0 }}
							__nextHasNoMarginBottom={true}
						/>
						<SelectControl
							onChange={(newAnimation) => {
								setAttributes({
									h2mlAnimateOnScroll: {
										...existingAttributes,
										animateOut: newAnimation
									}
								});
							}}
							value={animateOut}
							options={animationClassNames.animateOut}
							label={__("Set the 'Animate Out' style", 'h2ml')}
							help={<AnimateOutHelpText />}
							style={{ marginBottom: 0 }}
							__nextHasNoMarginBottom={true}
						/>
						<TextControl
							value={animateCustomClasses?.join(', ')}
							onChange={(newCustomClasses) => {
								setAttributes({
									h2mlAnimateOnScroll: {
										...existingAttributes,
										animateCustomClasses: newCustomClasses.split(',').map(x => x.trim()).filter(x => x !== '')
									}
								});
							}}
							label={__("Custom Classnames", 'h2ml')}
							help={<AnimateCustomClassHelpText />}
						/>
						{(animateIn || animateOut || animateCustomClasses) && (
							<ToolsPanel
								label={__("Animate on Scroll Additional Settings", 'h2ml')}
								resetAll={() => {
									setAttributes({
										h2mlAnimateOnScroll: {
											...existingAttributes,
											...optionalAttributesDefaults
										}
									});
								}}
							>
								<ToolsPanelItem
									hasValue={() => animateInDuration !== optionalAttributesDefaults.animateInDuration}
									label={__("Animate In Duration", 'h2ml')}
									onDeselect={() => {
										setAttributes({
											h2mlAnimateOnScroll: {
												...existingAttributes,
												animateInDuration: optionalAttributesDefaults.animateInDuration
											}
										});
									}}
									isShownByDefault={false}
								>
									<TextControl
										value={animateInDuration}
										onChange={(newDuration) => {
											setAttributes({
												h2mlAnimateOnScroll: {
													...existingAttributes,
													animateInDuration: newDuration
												}
											});
										}}
										label={__("Animate In Duration", 'h2ml')}
										help={<AnimateInDurationHelpText />}
									/>
								</ToolsPanelItem>
								<ToolsPanelItem
									hasValue={() => animateOutDuration !== optionalAttributesDefaults.animateOutDuration}
									label={__("Animate Out Duration", 'h2ml')}
									onDeselect={() => {
										setAttributes({
											h2mlAnimateOnScroll: {
												...existingAttributes,
												animateOutDuration: optionalAttributesDefaults.animateOutDuration
											}
										});
									}}
									isShownByDefault={false}
								>
									<TextControl
										value={animateOutDuration}
										onChange={(newDuration) => {
											setAttributes({
												h2mlAnimateOnScroll: {
													...existingAttributes,
													animateOutDuration: newDuration
												}
											});
										}}
										label={__("Animate Out Duration", 'h2ml')}
										help={<AnimateOutDurationHelpText />}
									/>
								</ToolsPanelItem>
								<ToolsPanelItem
									hasValue={() => animateThreshold !== optionalAttributesDefaults.animateThreshold}
									label={__("Animate Threshold", 'h2ml')}
									onDeselect={() => {
										setAttributes({
											h2mlAnimateOnScroll: {
												...existingAttributes,
												animateThreshold: optionalAttributesDefaults.animateThreshold
											}
										});
									}}
									isShownByDefault={false}
								>
									<NumberControl
										onChange={(newThreshold) => {
											setAttributes({
												h2mlAnimateOnScroll: {
													...existingAttributes,
													animateThreshold: newThreshold
												}
											});
										}}
										value={animateThreshold}
										min={0.1}
										max={1}
										step={0.1}
										label={__("Animate Threshold", 'h2ml')}
										help={<AnimateThresholdHelpText />}
									/>
								</ToolsPanelItem>
								<ToolsPanelItem
									hasValue={() => animateDirection !== optionalAttributesDefaults.animateDirection}
									label={__("Animate Direction", 'h2ml')}
									onDeselect={() => {
										setAttributes({
											h2mlAnimateOnScroll: {
												...existingAttributes,
												animateDirection: optionalAttributesDefaults.animateDirection
											}
										});
									}}
									isShownByDefault={false}
								>
									<SelectControl
										onChange={(newDirection) => {
											setAttributes({
												h2mlAnimateOnScroll: {
													...existingAttributes,
													animateDirection: newDirection
												}
											});
										}}
										value={animateDirection}
										options={[{
											value: 'forwards',
											label: __("Forwards (Default)", 'h2ml')
										}, {
											value: 'backwards',
											label: __("Backwards", 'h2ml')
										}, {
											value: 'both',
											label: __("Both (Experimental)", 'h2ml')
										}]}
										label={__("Animate Direction", 'h2ml')}
										help={<AnimateDirectionHelpText />}
										style={{ marginBottom: 0 }}
										__nextHasNoMarginBottom={true}
									/>
								</ToolsPanelItem>
							</ToolsPanel>
						)}
					</VStack>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
}