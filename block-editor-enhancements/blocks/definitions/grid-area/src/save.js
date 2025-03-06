/*
 * WordPress dependencies
 */

import {
	useBlockProps,
	useInnerBlocksProps,
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
		layout
	}
}) {

	const flexDirection = {
		vertical: 'column',
		horizontal: 'row'
	}[layout?.orientation ?? 'vertical'];

	const {children, ...blockProps} = useInnerBlocksProps.save(useBlockProps.save({
		style: {
			zIndex: stackingOrder,
			gridArea: defaultGridArea,
			flexDirection: flexDirection
		}
	}), {
		__experimentalLayout: layout,
		layout
	});

	return (
		<div {...blockProps} data-breakpoint-definitions={Object.keys(breakpointDefinitions) ? btoa(JSON.stringify(Object.values(breakpointDefinitions).reduce((res, breakpointDefinition) => ({
			...res,
			[`${breakpointDefinition.mediaQuery}`]: {
				...(breakpointDefinition.coords ? {
					gridArea: breakpointDefinition.coords,
					display: 'flex'
				} : {
					display: 'none'
				})
			}
		}), {}))) : undefined}>
			{children}
		</div>
	);
}
