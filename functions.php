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
 * Registers the themes custom blocks using the metadata loaded from the respective `block.json` files.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 *
 */

add_action('init', function() {
	$blockDefinitionDirectories = new RecursiveDirectoryIterator(__DIR__ . '/blocks', RecursiveDirectoryIterator::SKIP_DOTS | RecursiveDirectoryIterator::CURRENT_AS_FILEINFO);
	foreach ($blockDefinitionDirectories as $blockDefinitionDirectory) { 
		if($blockDefinitionDirectory->isDir()) {
			$blockDefinitionDirectoryBuildPath = $blockDefinitionDirectory->getPathname() . '/build';
			register_block_type_from_metadata($blockDefinitionDirectoryBuildPath);
		}	
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