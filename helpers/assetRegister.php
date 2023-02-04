<?php

/**
 * Generate a unique script handle, and ensure it's enqueued (less strict than the wp default).  
 */

function h2mlRegisterBlockScriptHandle($metadata, $type, $path, $index = 0) {

	// Generate handle and get the asset path.
	$scriptHandle    = generate_block_asset_handle($metadata['name'], $type, $index);
	$scriptPath = wp_normalize_path($path);
	$scriptAssetPath = wp_normalize_path(realpath(
		substr_replace($scriptPath, '.asset.php', -strlen('.js'))
	));
	if (!file_exists($scriptAssetPath)) {
		_doing_it_wrong(__FUNCTION__, sprintf(
			__( 'The asset file for the "%1$s" defined in "%2$s" block definition is missing.' ),
			$type,
			$metadata['name']
		), '5.5.0');
		return false;
	}

	// Get the script URI.
	$scriptURI = get_template_directory_uri() . str_replace(get_template_directory(), '', $scriptPath);

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
 * Add a new view script to a block based on its metadata. 
 */

function h2mlAddBlockScript(&$metadata, $type, $paths) {
	
	// If there are already scripts of this type defined then ensure that they're represented as an array.
	$metadata[$type] = array_key_exists($type, $metadata) 
		? (is_array($metadata[$type]) ? $metadata[$type] : [$metadata[$type]])
		: [];
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
				$existingScriptsLength + $index
			)
		);
	}
	
	// If there is only 1 script registered unwrap it. 
	if(count($metadata[$type]) === 1) {
		$metadata[$type] = $metadata[$type][0];
	}
}