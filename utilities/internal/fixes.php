<?php
/**
 * 
 * Removes support for the core block patterns, as these cause breaking issues in the FSE Block Inserter.
 * As described here: https://github.com/WordPress/gutenberg/issues/24009
 * 
 */

add_action('init', function() {
    remove_theme_support('core-block-patterns');
}, 1);

/**
 *
 * If registering a block which is solely defined in the current themes parent,
 * then add the `overrideThemeFilePath` filter to `theme_file_path`, this serves 
 * as a temporary workaround for https://github.com/WordPress/wordpress-develop/pull/3921
 * 
 */

add_action('init', function() {
	//
	// The filter function for overriding `get_theme_file_path()`
	//
	function overrideThemeFilePath($_, $file) {
		$path = get_template_directory() . '/' . $file;
		return $path;
	}
	//
	// Add the filter where appropriate.
	//
	add_filter('block_type_metadata', function($metadata) {
		if(array_key_exists('file', $metadata)) {
			// Normalize the block path
			$blockPathNorm = wp_normalize_path($metadata['file']);
			// Cache the $templatePathNorm and $stylesheetPathNorm to avoid unnecessary additional calls.
			static $templatePathNorm   = '';
			static $stylesheetPathNorm = '';
			if (!$templatePathNorm || !$stylesheetPathNorm) {
				$templatePathNorm   = wp_normalize_path(get_template_directory());
				$stylesheetPathNorm = wp_normalize_path(get_stylesheet_directory());
			}
			// If looking at a block which is only defined in the parent theme then add the filter.
			$isTemplateBlock     = str_starts_with($blockPathNorm, $templatePathNorm);
			$isStylesheetBlock   = str_starts_with($blockPathNorm, $stylesheetPathNorm);
			if($isTemplateBlock && !$isStylesheetBlock) {
				add_filter('theme_file_path', 'overrideThemeFilePath', 10, 2);
			}
		}
		return $metadata;
	}, 10, 1);
	//
	// Ensure the filter is removed as soon as possible
	//
	add_filter('block_type_metadata_settings', function($settings, $metadata) {
		remove_filter('theme_file_path', 'overrideThemeFilePath', 10);
		return $settings;
	}, 10, 2);
}, 11);