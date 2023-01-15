/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

import { stack as icon } from '@wordpress/icons';

/**
 * Style
 */

import './../../common/styles/style.scss';

import './style.scss';

/**
 * Internal dependencies
 */

import metadata from './block.json';
import Edit from './edit';
import Save from './save';
//import Deprecated from './save_old';

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save: Save,
	/*
	deprecated: [{
		attributes: {
			"alignment": {
				"type": "string"
			},
			"backgroundColor": {
				"type": "string"
			}, 
			"textColor": {
				"type": "string"
			},
			"gridAreaStart": {
				"type": "number",
				"default": 1
			},
			"gridAreaEnd": {
				"type": "number",
				"default": 1
			},
			"stackingOrder": {
				"type": "number",
				"default": 0
			},
			"inheritedGridAreasCount": {
				"type": "number",
				"default": 12
			}
		},
		save: Deprecated
	}]*/
});