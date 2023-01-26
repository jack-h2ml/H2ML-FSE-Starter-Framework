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
	get_option('stylesheet')
);
 
//Set the branch that contains the stable release.
$themeUpdateChecker->setBranch('main');

/**
 * 
 * Registers the themes custom blocks using the metadata loaded from the respective `block.json` files.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 *
 */

add_action('init', function() {
	foreach(glob(get_template_directory() . "/blocks/definitions/*") as $blockDefinitionDirectoryBuildPath) {
		register_block_type_from_metadata($blockDefinitionDirectoryBuildPath);
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