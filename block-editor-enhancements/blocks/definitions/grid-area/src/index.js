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

// Current
import metadata from './../block.json';
import Edit from './edit';
import Save from './save';

// Deprecated
import metadataV1 from './deprecated/v1/block.json';
import SaveV1 from './deprecated/v1/save';

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save: Save,
	deprecated: [{
		attributes: metadataV1.attributes,
		supports: metadataV1.supports,
		save: SaveV1
    }],
});