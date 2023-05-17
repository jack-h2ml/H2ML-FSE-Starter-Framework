/**
 * WordPress Dependencies
 */

import {
	ExternalLink,
	__experimentalVStack as VStack,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

/**
 * The JSX
 */

export const AnimateInHelpText = (props) => (
	<span>
		{__("The 'Animate In' animation plays when scrolling the block into view.", 'h2ml')}
	</span>
);


export const AnimateOutHelpText = (props) => (
	<span>
		{__("The 'Animate Out' animation plays when scrolling the block out of view.", 'h2ml')}
	</span>
);


export const AnimateInDurationHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Set this block's 'Animate In'", 'html')} <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/time">{__("duration", 'h2ml')}</ExternalLink>.
		</span>
		<span>
			{__("By default this is '500ms'.", 'h2ml')}
		</span>
	</VStack>
);


export const AnimateOutDurationHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Set this block's 'Animate Out'", 'html')} <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/time">{__("duration", 'h2ml')}</ExternalLink>.
		</span>
		<span>
			{__("By default this is '500ms'.", 'h2ml')}
		</span>
	</VStack>
);

export const AnimateThresholdHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Set this block's 'Animate Threshold', this determines how much of the block must be visible before the animations play.", 'html')}
		</span>
		<span>
			{__("By default this is '0.3', which is equal to 30% of the element being visible.", 'h2ml')}
		</span>
	</VStack>
);

export const AnimateDirectionHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Set this block's 'Animate Direction', this determines which scrolling behaviours trigger the animation.", 'html')}
		</span>
		<span>
			{__("By default this is 'Forwards'.", 'h2ml')}
		</span>
	</VStack>
);

export const AnimateCustomClassHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Add a comma seperated list of custom 'Classnames' to toggle, this can be used instead of, or in addition to, the predefined animations above.", 'h2ml')}
		</span>
	</VStack>
);
