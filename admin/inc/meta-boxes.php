<?php

namespace VT\MU\Custom_Meta;

add_action( 'init', __NAMESPACE__ . '\register_meta_fields' );
/**
 * Registering meta fields for block attributes that use meta storage
 */
function register_meta_fields() {

	$url_args = array(
		'type'         => 'string',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'esc_url',
	);

	$start_args = array(
		'type'         => 'string',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'esc_html',
	);

	$end_args = array(
		'type'         => 'string',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'esc_html',
	);

	$featured_args = array(
		'type'         => 'boolean',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'rest_sanitize_boolean',
	);

	$sidebar_args = array(
		'type'         => 'boolean',
		'single'       => true,
		'show_in_rest' => true,
		'sanitize_callback' => 'rest_sanitize_boolean',
	);



	register_post_meta(
		'',
		'nhsjobs_end',
		$end_args
	);

	// register_post_meta(
	// 	'',
	// 	'vt_event_featured',
	// 	$featured_args
	// );

	// register_post_meta(
	// 	'',
	// 	'vt_show_sidebar',
	// 	$sidebar_args
	// );



}