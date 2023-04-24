<?php

/**
 * 
 * Server side implementation of the 'h2ml/add-positioning-styles-save' filter found in './filters/definitions/add-positioning-support'
 * which handles rendering the h2mlPositioning attribute for server rendered blocks, such as those of the type 'core/template-part'
 * 
 */

add_filter('render_block', function($blockContent, $block) {
	if(array_key_exists('attrs', $block)) {
		$blockAttributes = $block['attrs'];
		if($block['blockName'] === 'core/template-part' && array_key_exists('h2mlPositioning', $blockAttributes)) {
			$properties           = $blockAttributes['h2mlPositioning'];
			$type                 = $properties['type'];
			//
			if($type !== null && trim($type) !== '') {
				$rawValues        = $properties['values'];
				$values           = trim(array_reduce(array_keys($rawValues), function($res, $property) use ($rawValues) {
					$value = $rawValues[$property];
					if($value !== null && trim($value) !== '') {
						return "$res $property: $value;";
					}
					return $res;
				}, ""));
				$rawStackingOrder = array_key_exists('zIndex', $properties) ? $properties['zIndex'] : '';
				$stackingOrder    = ($rawStackingOrder) ? "z-index: $rawStackingOrder;" : '';
				//
				$injectedStyle    = "position: $type; $values $stackingOrder";
				//
				$dom              = new DOMDocument; // initialize the domdocument
				@$dom->loadHTML($blockContent);
				$node             = $dom->firstElementChild->firstElementChild->firstElementChild; //html -> body -> header
				$node->setAttribute('style', $injectedStyle);
				return $dom->saveHTML($node);
			}
		}
	}
	return $blockContent;
}, 10, 2);

/**
 * Fix for SSR Blocks
 */

 add_action( 'wp_loaded', function() {
	$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
	foreach( $registered_blocks as $name => $block ) {
		$block->attributes['h2mlPositioning'] = array(
			'type'    => 'object',
			'default' => array(
				'values' => array(
					'top' => '',
					'right' => '',
					'bottom' => '',
					'left' => ''
				),
				'zIndex' => ''
			),
		);
	}
}, 100);
