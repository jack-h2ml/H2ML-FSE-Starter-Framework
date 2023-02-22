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
} from './editor_dependencies/utils.js'

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
		},
		breakpointDefinitions
	},
}) {
	const defaultGridTemplateAreas = generateGridTemplateAreas(colCount, rowCount);
	const defaultGridTemplateColumns = generateGridTemplateColumnsOrRows(colTemplates);
	const defaultGridTemplateRows = generateGridTemplateColumnsOrRows(rowTemplates);
	//
    const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save({
        style: {
			minHeight,
            gridTemplateAreas: defaultGridTemplateAreas,
            gridTemplateColumns: defaultGridTemplateColumns,
			gridTemplateRows: defaultGridTemplateRows
        },
		'data-breakpoint-definitions': breakpointDefinitions.length ? btoa(JSON.stringify(breakpointDefinitions.reduce((res, breakpointDefiniton, index) => ([
			...((index + 1) === breakpointDefinitions.length ? [['(min-width: 0px)', {
				minHeight,
				gridTemplateAreas: defaultGridTemplateAreas,
				gridTemplateColumns: defaultGridTemplateColumns,
				gridTemplateRows: defaultGridTemplateRows
			}]] : []),
			[breakpointDefiniton.mediaQuery,  {
				minHeight: breakpointDefiniton.minHeight,
				gridTemplateAreas: generateGridTemplateAreas(
					breakpointDefiniton.colDefinitions.count, 
					breakpointDefiniton.rowDefinitions.count
				),
				gridTemplateColumns: generateGridTemplateColumnsOrRows(breakpointDefiniton.colDefinitions.templates),
				gridTemplateRows: generateGridTemplateColumnsOrRows(breakpointDefiniton.rowDefinitions.templates)
			}],
			...res,
		]), []))) : undefined
    })});
	//
    return (
		<div {...innerBlocksProps}/>
	);
};