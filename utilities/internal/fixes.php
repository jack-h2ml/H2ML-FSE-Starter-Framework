<?php
/**
 * 
 * Removes support for the core block patterns, as these cause breaking issues in the FSE Block Inserter.
 * As described here: https://github.com/WordPress/gutenberg/issues/24009
 * 
 */

add_action('init', function() {
    remove_theme_support('core-block-patterns');
}, 1);