<?php

namespace NHS_JOBS\ADMIN\CustomTemplate;

add_filter( 'single_template', __NAMESPACE__ . '\load_oppertunities_template' );

function load_oppertunities_template( $template ) {

	global $post;

	if ( 'nhs_opportunities' === $post->post_type ) {

		$template = _get_plugin_directory() . '/public/templates/nhs-opportunities.php';

		return $template;
	}
	
	return $template;
}