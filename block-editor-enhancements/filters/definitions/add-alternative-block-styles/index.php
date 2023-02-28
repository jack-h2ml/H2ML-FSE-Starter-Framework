<?php

require_once __DIR__ . '/../../../../utilities/internal/assetRegister.php';

/**
 * Enqueue Animation on Scroll library
 */

add_action('wp_enqueue_scripts', function() {
	$stylePath = __DIR__ . '/build/index.css';
	$styleHandle = h2mlRegisterBlockStyleHandle([
		'name'       => 'h2ml/' . basename(__DIR__),
		'textdomain' => 'h2ml'
	], 'style', $stylePath);
	wp_enqueue_style($styleHandle);
});