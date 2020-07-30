<?php

namespace NHS_JOBS\ADMIN\Custom_Meta;

add_action( 'init', __NAMESPACE__ . '\register_meta_fields' );

/**
 * Registering meta fields for block attributes that use meta storage
 */
function register_meta_fields() {


	$end_args = array(
		'type'         => 'string',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'esc_html',
	);

	register_post_meta(
		'',
		'nhsjobs_end',
		$end_args
	);



}