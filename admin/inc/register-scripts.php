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


add_action( 'wp_enqueue_scripts',  __NAMESPACE__ . '\nhs_jobs_festyles' );

function nhs_jobs_festyles(){

	$frontend_path = '/public/css/jobs.frontend.css';


	if( is_singular( 'nhs_opportunities' ) ){

		// Only load on post type page
		wp_enqueue_style( 
	        'nhsjobs-fe-css',  
	        _get_plugin_url() . $frontend_path,
	        array(),
	        filemtime( _get_plugin_directory() . $frontend_path )
	    );
	}

}

add_action( 'nhs_partners_edit_form_fields', __NAMESPACE__ . '\enqueue_media_library', 10, 1 );


function enqueue_media_library( $hook ) {

		wp_enqueue_media();

		// Registers and enqueues the required javascript.
		wp_register_script( 'nhsjobs-upload-img', _get_plugin_url() . '/admin/js/media-uploader.js' , array( 'jquery' ) );

		wp_localize_script( 'nhsjobs-upload-img', 'meta_image',
			array(
				'title' => __( 'Choose or Upload Media', 'nhsjobs' ),
				'button' => __( 'Use this media', 'nhsjobs' ),
			)
		);
		wp_enqueue_script( 'nhsjobs-upload-img' );
}
