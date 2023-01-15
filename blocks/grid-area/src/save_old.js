/*
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

import {useSelect} from '@wordpress/data';

/*
*
*/

const generateGridArea = (parentGridColumnsCount, gridAreaStart, gridAreaEnd) => {
	//
	const [startX, endX] = [
		(gridAreaStart - 1) % parentGridColumnsCount, 
		(gridAreaEnd - 1) % parentGridColumnsCount, 
	];
	if(startX > endX) {
		let endY = Math.floor((gridAreaEnd - 1) / parentGridColumnsCount);
		gridAreaEnd = endY * parentGridColumnsCount + startX + 1;
	} 
	//
	const start = btoa(gridAreaStart).replace(/\W/g, '');
	const end = btoa(gridAreaEnd).replace(/\W/g, '');
	return `${start} / ${start} / ${end} / ${end}`;
}

/*
*
*/

export default function Save({attributes, clientId}) {
	const {
		align,
		backgroundColor,
		gridAreaStart, 
		gridAreaEnd,
		stackingOrder,
		inheritedGridAreaCount
	} = attributes;
	//
	const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
			textAlign: align, 
			backgroundColor: backgroundColor,
			gridArea: generateGridArea(inheritedGridAreaCount, gridAreaStart, gridAreaEnd),
			zIndex: stackingOrder
		},
    })});

	return <div {...innerBlocksProps}/>;
}
