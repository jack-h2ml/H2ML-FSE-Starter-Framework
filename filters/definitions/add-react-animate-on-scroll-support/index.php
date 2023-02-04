<?php

require_once __DIR__ . '/../../../helpers/assetRegister.php';

/**
 * Add new viewScript to all blocks
 */

add_filter('block_type_metadata', function($metadata) {
	$scriptType = 'viewScript';
	$scriptPaths = [__DIR__ . '/build/view.js'];
	h2mlAddBlockScript($metadata, $scriptType, $scriptPaths);
    return $metadata;
}, 1);