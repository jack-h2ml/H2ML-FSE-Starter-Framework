<?php

/**
 * 
 * Get an assets URI based on it's path.
 * 
 */

function h2mlGetAssetURI($path) {
	//
	static $templateDirectory   = '';
	static $stylesheetDirectory = '';
	if(!$templateDirectory || !$stylesheetDirectory) {
		$templateDirectory   = wp_normalize_path(get_template_directory());
		$stylesheetDirectory = wp_normalize_path(get_stylesheet_directory());
	}
	//
	if(str_contains($path, $templateDirectory)) {
		return get_template_directory_uri() . str_replace($templateDirectory, '', $path);
	} elseif(str_contains($path, $stylesheetDirectory)) {
		return get_stylesheet_directory_uri() . str_replace($stylesheetDirectory, '', $path);
	}
}

/**
 * 
 * Generate a style handle, and ensure it's enqueued (less strict than the wp default).
 *   
 */

function h2mlRegisterBlockStyleHandle($metadata, $type, $path, $index = 0) {

	// Generate handle and get the asset path.
	$styleHandle    = generate_block_asset_handle($metadata['name'], $type, $index);
	$stylePath      = wp_normalize_path($path);
	
	// Get the style URI.
	$styleURI = h2mlGetAssetURI($stylePath);

	// Enqueue the style.
	//$styleAsset      = require $styleAssetPath;
	$registeredStyle = wp_register_style(
		$styleHandle,
		$styleURI,
		array()
	);
	if (!$registeredStyle) {
		return false;
	}

	return $styleHandle;
}

/**
 * 
 * Add a new style to a block based on its metadata. 
 * 
 */

 function h2mlAddBlockStyle(&$metadata, $type, $paths) {
	
	// If there are already scripts of this type defined then ensure that they're represented as an array.
	$metadata[$type] = array_key_exists($type, $metadata) 
		? (is_array($metadata[$type]) ? $metadata[$type] : [$metadata[$type]])
		: array();
	$existingStylesLength = count($metadata[$type]);
	
	// Add and Enqueue the asset(s).
	if(is_array($paths)) {
		// Adding & Enqueueing multiple scripts.
		foreach($paths as $index => $path) {
			array_push(
				$metadata[$type],
				h2mlRegisterBlockStyleHandle(
					$metadata, 
					$type, 
					$path, 
					$existingStylesLength + $index
				)
			);
		}
	} else {
		// Adding & Enqueueing a single script.
		array_push(
			$metadata[$type], 
			h2mlRegisterBlockStyleHandle(
				$metadata, 
				$type, 
				$paths, 
				$existingStylesLength
			)
		);
	}
	
	return $metadata[$type];
}

/**
 * 
 * Generate a script handle, and ensure it's enqueued (less strict than the wp default).  
 * 
 */

function h2mlRegisterBlockScriptHandle($metadata, $type, $path, $index = 0) {

	// Generate handle and get the asset path.
	$scriptHandle    = generate_block_asset_handle($metadata['name'], $type, $index);
	$scriptPath      = wp_normalize_path($path);
	$scriptAssetPath = wp_normalize_path(realpath(
		substr_replace($scriptPath, '.asset.php', -strlen('.js'))
	));
	if (!file_exists($scriptAssetPath)) {
		_doing_it_wrong(__FUNCTION__, sprintf(
			__( 'The asset file for the "%1$s" defined in "%2$s" filter definition is missing.', 'h2ml'),
			$type,
			$metadata['name']
		), '6.1.0');
		return false;
	}

	// Get the script URI.
	$scriptURI = h2mlGetAssetURI($scriptPath);

	// Enqueue the script.
	$scriptAsset        = require $scriptAssetPath;
	$scriptDependencies = isset($scriptAsset['dependencies']) ? $scriptAsset['dependencies'] : array();
	$registeredScript   = wp_register_script(
		$scriptHandle,
		$scriptURI,
		$scriptDependencies,
		isset($scriptAsset['version']) ? $scriptAsset['version'] : false
	);
	if (!$registeredScript) {
		return false;
	}

	// Do the i18n.
	if (!empty($metadata['textdomain']) && in_array('wp-i18n', $scriptDependencies, true)) {
		wp_set_script_translations($scriptHandle, $metadata['textdomain']);
	}

	return $scriptHandle;
}

/**
 * 
 * Add a new view script to a block based on its metadata. 
 * 
 */

function h2mlAddBlockScript(&$metadata, $type, $paths) {
	
	// If there are already scripts of this type defined then ensure that they're represented as an array.
	$metadata[$type] = array_key_exists($type, $metadata) 
		? (is_array($metadata[$type]) ? $metadata[$type] : [$metadata[$type]])
		: array();
	$existingScriptsLength = count($metadata[$type]);
	
	// Add and Enqueue the asset(s).
	if(is_array($paths)) {
		// Adding & Enqueueing multiple scripts.
		foreach($paths as $index => $path) {
			array_push(
				$metadata[$type],
				h2mlRegisterBlockScriptHandle(
					$metadata, 
					$type, 
					$path, 
					$existingScriptsLength + $index
				)
			);
		}
	} else {
		// Adding & Enqueueing a single script.
		array_push(
			$metadata[$type], 
			h2mlRegisterBlockScriptHandle(
				$metadata, 
				$type, 
				$paths, 
				$existingScriptsLength
			)
		);
	}
	
	return $metadata[$type];
}

/**
 * 
 * Add a new view script to a block based on its metadata. 
 * 
 */

function h2mlRegisterBlock($blockPath) {

	//
	$metadata = wp_json_file_decode($blockPath, array('associative' => true));
	$metadata['file'] = wp_normalize_path(realpath($blockPath));
	
	//
	$settings = array();
	$property_mappings = array(
		'apiVersion'      => 'api_version',
		'title'           => 'title',
		'category'        => 'category',
		'parent'          => 'parent',
		'ancestor'        => 'ancestor',
		'icon'            => 'icon',
		'description'     => 'description',
		'keywords'        => 'keywords',
		'attributes'      => 'attributes',
		'providesContext' => 'provides_context',
		'usesContext'     => 'uses_context',
		'supports'        => 'supports',
		'styles'          => 'styles',
		'variations'      => 'variations',
		'example'         => 'example',
	);
	$textdomain        = !empty($metadata['textdomain'] ) ? $metadata['textdomain'] : null;
	$i18n_schema       = get_block_metadata_i18n_schema();

	//
	foreach ( $property_mappings as $key => $mapped_key ) {
		if ( isset( $metadata[ $key ] ) ) {
			$settings[ $mapped_key ] = $metadata[ $key ];
			if ( $textdomain && isset( $i18n_schema->$key ) ) {
				$settings[ $mapped_key ] = translate_settings_using_i18n_schema( $i18n_schema->$key, $settings[ $key ], $textdomain );
			}
		}
	}

	//
	$script_fields = array(
		'editorScript' => 'editor_script_handles',
		'script'       => 'script_handles',
		'viewScript'   => 'view_script_handles',
	);

	//
	foreach ($script_fields as $metadata_field_name => $settings_field_name) {
		if (!empty($metadata[$metadata_field_name])) {
			//
			$scripts = $metadata[$metadata_field_name];
			$scriptArray = array_map(fn($script) => (
				preg_replace('/^file:./', dirname($blockPath), $script)
			), (is_array($scripts) ? $scripts : array($scripts)));
			//
			$metadata[$metadata_field_name] = array();
			$settings[$settings_field_name] = h2mlAddBlockScript(
				$metadata,
				$metadata_field_name,
				$scriptArray
			);
		}
	}

	//
	$style_fields = array(
		'editorStyle' => 'editor_style_handles',
		'style'       => 'style_handles',
	);

	//
	foreach ($style_fields as $metadata_field_name => $settings_field_name) {
		if (!empty($metadata[$metadata_field_name])) {
			//
			$styles = $metadata[$metadata_field_name];
			$stylesArray = array_map(fn($script) => (
				preg_replace('/^file:./', dirname($blockPath), $script)
			), (is_array($styles) ? $styles : array($styles)));
			//
			$metadata[$metadata_field_name] = array();
			$settings[$settings_field_name] = h2mlAddBlockStyle(
				$metadata,
				$metadata_field_name,
				$stylesArray
			);
		}
	}

	return WP_Block_Type_Registry::get_instance()->register(
		$metadata['name'],
		$settings
	);
}