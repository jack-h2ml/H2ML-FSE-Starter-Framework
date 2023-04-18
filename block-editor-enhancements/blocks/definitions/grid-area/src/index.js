/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

import { stack as icon } from '@wordpress/icons';

/**
 * Style
 */

import './style.scss';

/**
 * Internal dependencies
 */

import metadata from './../block.json';
import Edit from './edit';
import Save from './save';
import SaveV1 from './deprecated/v1/save';

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save: Save,
	deprecated: [{
		attributes: metadata.attributes,
		supports: metadata.supports,
		save: SaveV1
    }],
});