/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';

import { grid as icon } from '@wordpress/icons';

/**
 * Style
 */

import './../../common/styles/grid-styles/style.scss';

import './style.scss';

/**
 * Internal dependencies
 */

import metadata from './block.json';
import Edit from './edit';
import Save from './save'

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	//
	icon,
	edit: Edit,
	save: Save,
});

