/**
 * WordPress dependencies
 */


import {
	__,
	_n,
} from '@wordpress/i18n';


/** 
 * Helper Components
 */

export const GridNoColsHelpText = (props) => {
	return (
		<span>
			{__("Set's the number of Columns for the Grid.", 'h2ml')}
		</span>
	);
}

export const GridNoRowsHelpText = (props) => {
	return (
		<span>
			{__("Set's the number of Rows for the Grid.", 'h2ml')}
		</span>
	);
}