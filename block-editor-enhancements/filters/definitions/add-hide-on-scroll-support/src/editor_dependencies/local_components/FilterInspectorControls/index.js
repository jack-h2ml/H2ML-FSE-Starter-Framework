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
	ToggleControl,
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
	HideAnimateInHelpText,
	HideAnimateOutHelpText,
	HideCustomClassHelpText,
	HideTriggerThresholdHelpText,
	HideShowOnScrollUpHelpText,
	HideBreakpointHelpText,
	HideAnimateInDurationHelpText,
	HideAnimateOutDurationHelpText
} from '../HelpText';

/**
 * The JSX
 */

export const FilterInspectorControls = (props) => {
	//
	const {
		existingAttributes,
		existingAttributes: {
			animateOut,
			animateIn,
			customClasses = [],
			triggerThreshold,
			showOnScrollUp,
			breakpoint,
			animateInDuration,
			animateOutDuration
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
					title={__("Hide on Scroll", 'h2ml')}
					initialOpen={false}
					className={'h2mlHideOnScrollPanel'}
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
									h2mlHideOnScroll: {
										...existingAttributes,
										animateOut: newAnimation
									}
								});
							}}
							value={animateOut}
							options={animationClassNames.animateOut}
							label={__("Set the 'Animate Out' style", 'h2ml')}
							help={<HideAnimateOutHelpText />}
							style={{ marginBottom: 0 }}
							__nextHasNoMarginBottom={true}
						/>
						<SelectControl
							onChange={(newAnimation) => {
								setAttributes({
									h2mlHideOnScroll: {
										...existingAttributes,
										animateIn: newAnimation
									}
								});
							}}
							value={animateIn}
							options={animationClassNames.animateIn}
							label={__("Set the 'Animate In' style", 'h2ml')}
							help={<HideAnimateInHelpText />}
							style={{ marginBottom: 0 }}
							__nextHasNoMarginBottom={true}
						/>
						<TextControl
							value={customClasses.join(', ')}
							onChange={(newCustomClasses) => {
								setAttributes({
									h2mlHideOnScroll: {
										...existingAttributes,
										customClasses: newCustomClasses.split(',').map(x => x.trim()).filter(x => x !== '')
									}
								});
							}}
							label={__("Custom Classnames", 'h2ml')}
							help={<HideCustomClassHelpText />}
						/>
						{(animateIn || animateOut || customClasses.length) && (
							<>
								<NumberControl
									onChange={(newThreshold) => {
										setAttributes({
											h2mlHideOnScroll: {
												...existingAttributes,
												triggerThreshold: newThreshold ? newThreshold : 100
											}
										});
									}}
									value={triggerThreshold}
									min={1}
									step={25}
									label={__("Trigger Threshold", 'h2ml')}
									help={<HideTriggerThresholdHelpText />}
								/>
								<ToggleControl
									checked={showOnScrollUp}
									onChange={() => {
										setAttributes({
											h2mlHideOnScroll: {
												...existingAttributes,
												showOnScrollUp: !showOnScrollUp
											}
										})
									}}
									label={__("Show on scroll up", 'h2ml')}
									help={<HideShowOnScrollUpHelpText />}
								/>
								<ToolsPanel
									label={__("Hide on Scroll Additional Settings", 'h2ml')}
									resetAll={() => {
										setAttributes({
											h2mlHideOnScroll: {
												...existingAttributes,
												...optionalAttributesDefaults
											}
										});
									}}
								>
									<ToolsPanelItem
										hasValue={() => breakpoint !== optionalAttributesDefaults.breakpoint}
										label={__("Breakpoint", 'h2ml')}
										onDeselect={() => {
											setAttributes({
												h2mlHideOnScroll: {
													...existingAttributes,
													breakpoint: optionalAttributesDefaults.breakpoint
												}
											});
										}}
										isShownByDefault={false}
									>
										<TextControl
											value={breakpoint}
											onChange={(newBreakpoint) => {
												setAttributes({
													h2mlHideOnScroll: {
														...existingAttributes,
														breakpoint: newBreakpoint
													}
												});
											}}
											label={__("Breakpoint", 'h2ml')}
											help={<HideBreakpointHelpText />}
										/>
									</ToolsPanelItem>
									<ToolsPanelItem
										hasValue={() => animateInDuration !== optionalAttributesDefaults.animateInDuration}
										label={__("Animate In Duration", 'h2ml')}
										onDeselect={() => {
											setAttributes({
												h2mlHideOnScroll: {
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
													h2mlHideOnScroll: {
														...existingAttributes,
														animateInDuration: newDuration
													}
												});
											}}
											label={__("Animate In Duration", 'h2ml')}
											help={<HideAnimateInDurationHelpText />}
										/>
									</ToolsPanelItem>
									<ToolsPanelItem
										hasValue={() => animateOutDuration !== optionalAttributesDefaults.animateOutDuration}
										label={__("Animate Out Duration", 'h2ml')}
										onDeselect={() => {
											setAttributes({
												h2mlHideOnScroll: {
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
													h2mlHideOnScroll: {
														...existingAttributes,
														animateOutDuration: newDuration
													}
												});
											}}
											label={__("Animate Out Duration", 'h2ml')}
											help={<HideAnimateOutDurationHelpText />}
										/>
									</ToolsPanelItem>
								</ToolsPanel>
							</>
						)}
					</VStack>
				</PanelBody>
			</Panel>
		</InspectorControls>
	);
}