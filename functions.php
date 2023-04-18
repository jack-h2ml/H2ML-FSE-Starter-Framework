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

/**
 * 
 */

require_once __DIR__ . '/utilities/internal/assetRegister.php';

/**
 * Fixes for breaking issues with WordPress FSE
 */

 include_once __DIR__ . '/utilities/internal/fixes.php';

/**
 * 
 * External dependencies
 * 
 */

/**
 * Yahnis Elsts' Plugin Update Checker, used to inform sites using the theme that there is an update available 
 * when the style.css Version increases within the official GitHub repo. 
 */

require 'utilities/external/plugin-update-checker-5.0/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;
   
$themeUpdateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/jack-h2ml/H2ML-FSE-Starter-Framework/',
	__FILE__,
	'H2ML-FSE-Starter-Framework'
);

$themeUpdateChecker->setBranch('main');

/**
 * 
 * Block Editor Enhancements 
 * 
 */

/**
 * Register Custom Blocks
 */

add_action('init', function() {
	foreach(glob(get_template_directory() . "/block-editor-enhancements/blocks/definitions/*/block.json") as $blockDefinitionDirectoryBuildPath) {
		h2mlRegisterBlock($blockDefinitionDirectoryBuildPath);
	}
}, 1);

/**
 * Register Block Editor Filters
 */

add_action('after_setup_theme', function() {
	foreach(glob(get_template_directory() . "/block-editor-enhancements/filters/definitions/*") as $filterDirectory) {
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

/**
 * 
 * Child Themes Interfaces
 * 
 */

/*
 * Enque the child theme style.css, and any dependencies defined in 
 * '~/child-theme-directory: ./assets/style-dependencies/'
 */ 

add_action('wp_enqueue_scripts', function() {
	// Ensure a child theme is in use. 
	if(get_template_directory() !== get_stylesheet_directory()) {
		// Cache the normalised base path, theme version, and theme slug to avoid unnecessary additional calls.
		static $basePathNorm = '';
		static $themeVersion = '';
		static $themeSlug    = '';
		if (!$basePathNorm || !$themeVersion || !$themeSlug) {
			$basePathNorm = wp_normalize_path(untrailingslashit(ABSPATH));
			$themeVersion = wp_get_theme()->get('Version');
			$themeSlug    = get_option('stylesheet');
		}
		// Retrieve any stylesheet dependencies, defined as .css files in './assets/style-dependencies/',
		// these are then registered, and there handles added to the '$themeStylesheetDependenciesHandles' to
		// be added as dependencies of the main stylesheet. 
		$themeStylesheetDependenciesHandles = [];
		foreach(glob(get_stylesheet_directory() . "/assets/style-dependencies/*.css") as $styleDependencyPath) {
			// If the path points to a minified file, ignore it as this was likley generated by a 
			// server-side cacheing plugin. 
			if(strpos($styleDependencyPath, '.min.css') === false) {
				// Generate a handle for this dependency.
				$styleDependencyPathName = basename($styleDependencyPath, '.css');
				$styleDependencyHandle   = "$themeSlug-styles-$styleDependencyPathName";
				// Parse the URI from the absolute path.
				$styleDependencyUri      = str_replace($basePathNorm, site_url(), wp_normalize_path($styleDependencyPath));
				// Register the dependency	
				wp_register_style(
					$styleDependencyHandle,
					$styleDependencyUri,
					array(),
					$themeVersion
				);
				// Store the Dependency handle in 
				array_push($themeStylesheetDependenciesHandles, $styleDependencyHandle);
			}
		}
		// Enqueue the style.css
		wp_enqueue_style( 
			"$themeSlug-styles", 
			get_stylesheet_uri(), 
			$themeStylesheetDependenciesHandles, 
			$themeVersion
		);
	}
});

/*
 * Enque the child theme scripts, defined in 
 * '~/child-theme-directory: ./assets/scripts/' 
 */ 

 add_action('after_setup_theme', function() {
	foreach(glob(get_stylesheet_directory() . "/assets/scripts/*") as $childScriptDirectory) {
		$childScriptAssist = $childScriptDirectory . '/index.php';
		if(file_exists($childScriptAssist)) {
			include_once $childScriptAssist;
		}
	}
});



