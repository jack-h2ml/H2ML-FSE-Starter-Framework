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
		layout = {orientation: 'vertical'}
	}
}) {
	/*const flexDirection = {
		vertical: 'column',
		horizontal: 'row'
	}[layout.orientation];*/

	const blockProps = useBlockProps.save({
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

	Object.assign(blockProps.style, {
		zIndex: stackingOrder,
		gridArea: defaultGridArea,
		//flexDirection
	});

	/*
	className: 'alignfull',
		style: {
			zIndex: stackingOrder,
			gridArea: defaultGridArea,
			//flexDirection
		},
	*/

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	console.log(blockProps, useBlockProps.save());

	return (
		<div {...innerBlocksProps}/>
	);

	/*
	const blockProps = useBlockProps.save({
		className: 'alignfull',
		style: {
			zIndex: stackingOrder,
			gridArea: defaultGridArea,
			flexDirection
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
	*/
}
