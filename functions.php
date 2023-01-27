<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package h2ml
 * @subpackage h2ml_base_theme
 */

/**
 * 
 * 
 * 
 */

require 'plugin-update-checker-5.0/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;
   
$themeUpdateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/jack-h2ml/H2ML-FSE-Starter-Framework/',
	__FILE__,
	'H2ML-FSE-Starter-Framework'
);
$themeUpdateChecker->setBranch('main');

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
}, 10);

/**
 * 
 * Registers the themes custom blocks using the metadata loaded from the respective `block.json` files.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 *
 */

add_action('init', function() {
	foreach(glob(get_template_directory() . "/blocks/definitions/*") as $blockDefinitionDirectoryBuildPath) {
		register_block_type($blockDefinitionDirectoryBuildPath);
	}
});

/**
 * 
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 * 
 */

add_action('enqueue_block_editor_assets', function() {
	$filterDefinitionDirectories = new RecursiveDirectoryIterator(__DIR__ . '/filters', RecursiveDirectoryIterator::SKIP_DOTS | RecursiveDirectoryIterator::CURRENT_AS_FILEINFO);
	foreach ($filterDefinitionDirectories as $filterDefinitionDirectory) { 
		if($filterDefinitionDirectory->isDir()) {
			//
			$filterDefinitionDirectoryBuildPath = str_replace(ABSPATH, '/', $filterDefinitionDirectory->getPathname() . '/build/index.js');
			//
			wp_register_script(
				'h2ml-custom-attributes',
				$filterDefinitionDirectoryBuildPath,
				['wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post'],
				$filterDefinitionDirectory->getCTime()
			);
			wp_enqueue_script('h2ml-custom-attributes');	
		}	
	}	
});