<?php

namespace NHS_JOBS\ADMIN\TemplateHooks;


add_action( 'nightingale_before_single_content', __NAMESPACE__ . '\nhs_opportunities_meta' );

function nhs_opportunities_meta(){

	global $post;

	if ( 'nhs_opportunities' === $post->post_type ) {

		$template_file = _get_plugin_directory() . '/public/partials/nhs-opportunities-meta.php';
		load_template( $template_file, true );
	}
}