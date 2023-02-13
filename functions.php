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

/*
 * Enque the child theme style.css, and any dependencies defined in 
 * './assets/style-dependencies/'
 */ 

 add_action( 'wp_enqueue_scripts', function() {
	// Ensure a child theme is in use. 
	if(get_template_directory() !== get_stylesheet_directory()) {
		//
		echo get_option('stylesheet');
		// Cache the normalised base path, and theme version to avoid unnecessary additional calls.
		static $basePathNorm = '';
		static $themeVersion = '';
		if (!$basePathNorm || !$themeVersion) {
			$basePathNorm = wp_normalize_path(untrailingslashit(ABSPATH));
			$themeVersion = wp_get_theme()->get('Version');
		}
		// Retrieve any stylesheet dependencies, defined as css files in './assets/style-dependencies/'.
		$themeStylesheetDependencies = [];
		foreach(glob(get_stylesheet_directory() . "/assets/style-dependencies/*.css") as $styleDependencyPath) {
			// Generate a handle for this dependency.
			$styleDependencyPathName = basename($styleDependencyPath, '.css');
			$styleDependencyHandle   = "ardtalla-styles-$name";
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
			array_push($themeStylesheetDependencies, $styleDependencyName);
		}
		// Enqueue the style.css
		wp_enqueue_style( 
			'ardtalla-styles', 
			get_stylesheet_uri(), 
			$themeStylesheetDependencies, 
			$themeVersion
		);
	}
});

