/*
 * WordPress dependencies
 */

import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

/*
 * The Save Function
 */

export default function Save({
	attributes: {
		stackingOrder,
		breakpointDefinitions
	}
}) {
	const innerBlocksProps = useInnerBlocksProps.save({
		...useBlockProps.save({
			className: 'is-layout-flex',
			style: {
				zIndex: stackingOrder
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
		})
	});

	return (
		<div {...innerBlocksProps}>
			<InnerBlocks />
		</div>
	);
}
