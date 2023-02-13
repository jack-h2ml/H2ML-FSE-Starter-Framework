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
		gridArea: {
			parsed: defaultGridArea
		},
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
			gridArea: defaultGridArea,
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
    })});

	return <div {...innerBlocksProps}/>;
}
