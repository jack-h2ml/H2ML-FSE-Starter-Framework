/*
 * WordPress dependencies
 */

import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

/*
 * The Save Function
 */

export default function Save({
	attributes: {
		stackingOrder,
		breakpointDefinitions,
		gridArea: {
			parsed: defaultGridArea
		},
	}
}) {
	const blockProps = useBlockProps.save({
		className: 'alignfull',
		style: {
			zIndex: stackingOrder,
			gridArea: defaultGridArea
		},
		'data-breakpoint-definitions': Object.keys(breakpointDefinitions) ? btoa(JSON.stringify(Object.values(breakpointDefinitions).reduce((res, breakpointDefinition) => ({
			...res,
			[`${breakpointDefinition.mediaQuery}`]: {
				...(breakpointDefinition.coords ? {
					gridArea: breakpointDefinition.coords,
					display: 'flex'
				} : {
					display: 'none'
				})
			}
		}), {}))) : undefined
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content/>
		</div>
	);
}
