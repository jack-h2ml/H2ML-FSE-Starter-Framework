/**
 * WordPress dependencies
 */

import {registerBlockStyle} from '@wordpress/blocks';

import {__} from '@wordpress/i18n';

/**
 * Local Dependencies
 */

import './styles/socialMediaIcons.css';

/*
 * Global
 */



/*
 * The Filter
 */

registerBlockStyle('core/social-link', {
	name: 'h2ml-square-shape',
	label: __("Square Shape", 'h2ml')
});

