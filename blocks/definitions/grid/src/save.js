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
		minHeight,
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
			minHeight,
            gridTemplateAreas: generateGridTemplateAreas(colCount, rowCount),
            gridTemplateColumns: generateGridTemplateColumnsOrRows(colTemplates),
			gridTemplateRows: generateGridTemplateColumnsOrRows(rowTemplates)
        }
    })});
	//
    return (
		<div {...innerBlocksProps}/>
	);
};