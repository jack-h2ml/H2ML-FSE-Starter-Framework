<?php

require_once __DIR__ . '/../../../../utilities/internal/assetRegister.php';

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

/**
 * Fix for SSR Blocks
 */

 add_action( 'wp_loaded', function() {
	$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
	foreach( $registered_blocks as $name => $block ) {
		$block->attributes['h2mlAnimateOnScroll'] = array(
			'type'    => 'object',
			'default' => array(
				'animateIn' => '',
				'animateOut' => '',
				'animateInDuration' => '500ms',
				'animateOutDuration' => '500ms',
				'animateThreshold' => 0.3,
				'animateDirection' => 'forwards'
			),
		);
	}
}, 100);
