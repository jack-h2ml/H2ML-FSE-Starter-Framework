<?php

require_once __DIR__ . '/../../../../utilities/internal/assetRegister.php';

/**
 * Enqueue Animation on Scroll library
 */

add_action('wp_enqueue_scripts', function() {
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