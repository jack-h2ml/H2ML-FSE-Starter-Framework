/**
 * WordPress dependencies
 */

import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */

import {
	generateGridTemplateAreas,
    generateGridTemplateColumnsOrRows
} from './utils.js'

/**
 * The Code
 */

export default function Save({
    attributes: {
		colDefinitions: {
			count: colCount,
			templates: colTemplates
		},
		rowDefinitions: {
			count: rowCount,
			templates: rowTemplates
		}
	},
}) {
    //
    const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
            gridTemplateAreas: generateGridTemplateAreas(1, colCount, rowCount) /* 1 === 'save' */,
            gridTemplateColumns: generateGridTemplateColumnsOrRows(1, colTemplates) /* 1 === 'save' */,
			gridTemplateRows: generateGridTemplateColumnsOrRows(1, rowTemplates) /* 1 === 'save' */
        }
    })});
	//
    return (
		<div {...innerBlocksProps}/>
	);
};