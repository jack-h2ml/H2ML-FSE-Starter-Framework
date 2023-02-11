/*
 * WordPress dependencies
 */

import { 
	useInnerBlocksProps, 
	useBlockProps
} from '@wordpress/block-editor';

/*
 * The Save Function
 */

export default function Save({
	attributes: {
		gridArea,
		stackingOrder,
		verticalAlignment,
		backgroundColor,
		style: {
			color: {
				background: customBackgroundColor
			} = {} 
		} = {},
		breakpointDefinitions
	}
}) {
	const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
			justifyContent: verticalAlignment, 
			backgroundColor: customBackgroundColor ? customBackgroundColor : backgroundColor,
			gridArea: gridArea.parsed,
			zIndex: stackingOrder
		},
		'data-breakpoint-definitions': Object.keys(breakpointDefinitions).length ? btoa(JSON.stringify(Object.values(breakpointDefinitions).reduce((res, breakpointDefinition) => ({
			...res,
			[`${breakpointDefinition.mediaQuery}`]: {
				coords: breakpointDefinition.coords
			}	
		}), {
			'(min-width: 0px)': {
				coords: gridArea.parsed
			}
		}))) : undefined
    })});

	return <div {...innerBlocksProps}/>;
}
