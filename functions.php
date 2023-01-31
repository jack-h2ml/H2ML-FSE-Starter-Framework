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
 * 
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
 * Mitigates issue with additional whitespace added by searching for patterns in the FSE Block Inserter.
 * As described here: https://github.com/WordPress/gutenberg/issues/24009
 * 
 */

add_action('admin_head', function() { ?>
	<style>
		.interface-interface-skeleton__body {
			overflow: hidden !important;
		} 
	</style>';
<?php });

/**
 * 
 * Removes support for the core block patterns, as these cause breaking issues in the FSE Block Inserter.
 * As described here: https://github.com/WordPress/gutenberg/issues/24009
 * 
 */

add_action('init', function() {
    remove_theme_support('core-block-patterns');
}, 1);

/**
 *
 * If registering a block which is solely defined in the current themes parent,
 * then add the `overrideThemeFilePath` filter to `theme_file_path`, this serves 
 * as a temporary workaround for https://github.com/WordPress/wordpress-develop/pull/3921
 * 
 */

add_action('init', function() {
	//
	// The filter function for overriding `get_theme_file_path()`
	//
	function overrideThemeFilePath($_, $file) {
		$path = get_template_directory() . '/' . $file;
		return $path;
	}
	//
	// Add the filter where appropriate.
	//
	add_filter('block_type_metadata', function($metadata) {
		if(array_key_exists('file', $metadata)) {
			// Normalize the block path
			$blockPathNorm = wp_normalize_path($metadata['file']);
			// Cache the $templatePathNorm and $stylesheetPathNorm to avoid unnecessary additional calls.
			static $templatePathNorm   = '';
			static $stylesheetPathNorm = '';
			if (!$templatePathNorm || !$stylesheetPathNorm) {
				$templatePathNorm   = wp_normalize_path(get_template_directory());
				$stylesheetPathNorm = wp_normalize_path(get_stylesheet_directory());
			}
			// If looking at a block which is only defined in the parent theme then add the filter.
			$isTemplateBlock     = str_starts_with($blockPathNorm, $templatePathNorm);
			$isStylesheetBlock   = str_starts_with($blockPathNorm, $stylesheetPathNorm);
			if($isTemplateBlock && !$isStylesheetBlock) {
				add_filter('theme_file_path', 'overrideThemeFilePath', 10, 2);
			}
		}
		return $metadata;
	}, 10, 1);
	//
	// Ensure the filter is removed as soon as possible
	//
	add_filter('block_type_metadata_settings', function($settings, $metadata) {
		remove_filter('theme_file_path', 'overrideThemeFilePath', 10);
		return $settings;
	}, 10, 2);
}, 1);

/**
 * 
 * Registers the themes custom blocks using the metadata loaded from the respective `block.json` files.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 *
 */

add_action('init', function() {
	foreach(glob(get_template_directory() . "/blocks/definitions/*") as $blockDefinitionDirectoryBuildPath) {
		register_block_type($blockDefinitionDirectoryBuildPath);
	}
}, 2);

/**
 * 
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued through the block editor in 
 * the corresponding context.
 * 
 */

add_action('enqueue_block_editor_assets', function() {
	foreach(glob(get_template_directory() . "/filters/definitions/*/build/index.js") as $filterDefinitionDirectoryBuildPath) {
		//
		$handle = pathinfo(dirname($filterDefinitionDirectoryBuildPath, 2))['basename'];
		$src    = str_replace(ABSPATH, '/', $filterDefinitionDirectoryBuildPath);
		$ver    = filectime($filterDefinitionDirectoryBuildPath);
		//
		wp_register_script(
			$handle,
			$src,
			['wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post'],
			$ver
		);
		wp_enqueue_script($handle);
	}
});

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
}, 10, 2 );