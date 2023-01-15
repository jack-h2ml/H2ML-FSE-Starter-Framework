/**
 * WordPress dependencies
 */

import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * 
 */

const generateGridTemplateAreas = (colCount, rowCount) => {
    return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => `
        ${rowsRes}
        "${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => `${colsRes} ${btoa((colCount * rowsI) + ++colsI).replace(/\W/g, '')}`, '')}"
    `, '');
}

/**
 * The Code
 */

export default function Save({attributes}) {
    //
    const {
		verticalAlignment,
		colCount,
		rowCount
	} = attributes;
    //
    const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
            gridTemplateAreas: generateGridTemplateAreas(colCount, rowCount)
        }
    })});
	//
    return (
		<div {...innerBlocksProps}/>
	);
};