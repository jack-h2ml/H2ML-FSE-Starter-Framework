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

/**
 * Register the Block
 */

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save: Save
});