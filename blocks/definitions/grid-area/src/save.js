/*
 * WordPress dependencies
 */

import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

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
		} = {} 
	}
}) {
	const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
			justifyContent: verticalAlignment, 
			backgroundColor: customBackgroundColor ? customBackgroundColor : backgroundColor,
			gridArea: gridArea.parsed,
			zIndex: stackingOrder
		},
    })});

	return <div {...innerBlocksProps}/>;
}
