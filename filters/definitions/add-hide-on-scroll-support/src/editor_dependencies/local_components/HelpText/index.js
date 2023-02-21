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

export const HideAnimateOutHelpText = (props) => (
	<span>
		{__("The 'Animate Out' animation plays when scrolling beyond the specified trigger threshold.", 'h2ml')}
	</span>
);

export const HideAnimateInHelpText = (props) => (
	<span>
		{__("The 'Animate In' animation plays when scrolling below the specified trigger threshold.", 'h2ml')}
	</span>
);

export const HideTriggerThresholdHelpText = (props) => (
	<VStack
		as={'span'}
		spacing={1}
	>
		<span>
			{__("Set this block's 'Trigger Threshold', this determines how far the user must scroll (in px's) before the block is hidden.", 'html')}
		</span>
		<span>
			{__("By default this is '100'.", 'h2ml')}
		</span>
	</VStack>
);

export const HideAnimateInDurationHelpText = (props) => (
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

export const HideAnimateOutDurationHelpText = (props) => (
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
