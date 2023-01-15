/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

import { grid as icon } from '@wordpress/icons';

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
import Save from './save'
//import Deprecated from './save_old';

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	//
	icon,
	edit: Edit,
	save: Save,
	/*
	deprecated: [{
		attributes: {
			"verticalAlignment": {
				"type": "string"
			},
			"colDefinitions": {
				"type": "object",
				"default": {
					"count": 3,
					"templates": ["1fr", "1fr", "1fr"]
				}
			},
			"rowDefinitions": {
				"type": "object",
				"default": {
					"count": 4,
					"templates": ["1fr", "1fr", "1fr", "1fr"]
				}
			},
			"gridAreasCount": {
				"type": "number",
				"default": 12
			}
		},
		save: Deprecated
	}]
	*/
});

