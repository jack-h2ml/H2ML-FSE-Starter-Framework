<?php 

/**
 * Fix for SSR Blocks
 */

add_action( 'wp_loaded', function() {
	$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
	foreach( $registered_blocks as $name => $block ) {
		$block->attributes['h2mlCanFillGridArea'] = array(
			'type'    => 'boolean',
			'default' => false,
		);
		$block->attributes['h2mlFillGridArea'] = array(
			'type'    => 'boolean',
			'default' => false,
		);
	}
}, 100);
