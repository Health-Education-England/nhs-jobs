<?php

namespace NHS_JOBS\ADMIN\Register_scripts;


add_action( 'init', __NAMESPACE__ . '\register_block_assets' );


/**
 * Enqueue block editor only JavaScript and CSS.
 */
function register_block_assets() {

	$js_dependancies = [ 'wp-plugins', 'wp-element', 'wp-edit-post', 'wp-i18n', 'wp-api-request', 'wp-data', 'wp-components', 'wp-blocks', 'wp-editor', 'wp-compose' ];

	// Make paths variables so we don't write em twice ;)
	$editor_js_path = '/admin/js/blocks.editor.js';
	$editor_style_path = '/admin/css/jobs.backend.css';

	// Register the bundled block JS file
	wp_enqueue_script(
		'nhsjobs-blocks',
		_get_plugin_url() . $editor_js_path,
		$js_dependancies,
		filemtime( _get_plugin_directory() . $editor_js_path ),
		true
	);

	// Register editor only styles
	wp_enqueue_style(
		'nhsjobs-editor-css',
		_get_plugin_url() . $editor_style_path,
		[],
		filemtime( _get_plugin_directory() . $editor_style_path )
	);

}