<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package h2ml
 */

/**
 * 
 * Internal dependencies
 * 
 */

require_once __DIR__ . '/helpers/assetRegister.php';

/**
 * 
 * Fixes for breaking issues with WordPress FSE
 * 
 */

 include_once __DIR__ . '/helpers/fixes.php';

/**
 * 
 * Yahnis Elsts' Plugin Update Checker, used to inform sites using the theme that there is an update available 
 * when the style.css Version increases within the official GitHub repo. 
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
 * Register Custom Blocks
 *
 */

add_action('init', function() {
	foreach(glob(get_template_directory() . "/blocks/definitions/*") as $blockDefinitionDirectoryBuildPath) {
		register_block_type($blockDefinitionDirectoryBuildPath);
	}
}, 12);

/**
 * 
 * Register Block Filters
 * 
 */

add_action('after_setup_theme', function() {
	foreach(glob(get_template_directory() . "/filters/definitions/*") as $filterDirectory) {
		//
		$filtersServerAssist = $filterDirectory . '/index.php';
		if(file_exists($filtersServerAssist)) {
			include_once $filtersServerAssist;
		}
		//
		$filterEditorScript = $filterDirectory . '/build/index.js';
		if(file_exists($filterEditorScript)) {
			add_action('enqueue_block_editor_assets', function() use($filterEditorScript, $filterDirectory) {
				$handle = h2mlRegisterBlockScriptHandle([
					'name'       => 'h2ml/' . basename($filterDirectory),
					'textdomain' => 'h2ml'
				], 'script', $filterEditorScript);
				wp_enqueue_script($handle);
			});
		}
		//
		$filterEditorStyle = $filterDirectory . '/build/index.css';
		if(file_exists($filterEditorStyle)) {
			add_action('enqueue_block_editor_assets', function() use($filterEditorStyle, $filterDirectory) {
				$handle = h2mlRegisterBlockStyleHandle([
					'name'       => 'h2ml/' . basename($filterDirectory),
					'textdomain' => 'h2ml'
				], 'script', $filterEditorStyle);
				wp_enqueue_style($handle);
			});
		}
	}
});
