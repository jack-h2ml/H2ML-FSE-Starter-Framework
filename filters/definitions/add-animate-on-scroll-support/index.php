<?php

require_once __DIR__ . '/../../../helpers/assetRegister.php';

/**
 * Add new viewScript to all blocks
 */

/*add_filter('block_type_metadata', function($metadata) {
	$scriptType = 'viewScript';
	$scriptPaths = [__DIR__ . '/build/view.js'];
	h2mlAddBlockScript($metadata, $scriptType, $scriptPaths);
	h2mlAddBlockScript($metadata, $scriptType, $scriptPaths);
    return $metadata;
}, 1);*/

/**
 * Enqueue Animation on Scroll library
 */

add_action('wp_enqueue_scripts', function() {
	//
	$stylePath = __DIR__ . '/build/view.css';
	$styleHandle = h2mlRegisterBlockStyleHandle([
		'name'       => 'h2ml/' . basename(__DIR__),
		'textdomain' => 'h2ml'
	], 'style', $stylePath);
	wp_enqueue_style($styleHandle);
	//
	$scriptPath = __DIR__ . '/build/view.js';
	$scriptHandle = h2mlRegisterBlockScriptHandle([
		'name'       => 'h2ml/' . basename(__DIR__),
		'textdomain' => 'h2ml'
	], 'script', $scriptPath);
	wp_enqueue_script($scriptHandle);
});