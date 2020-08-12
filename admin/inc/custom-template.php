<?php

namespace NHS_JOBS\ADMIN\CustomTemplate;

$theme = wp_get_theme(); // gets the current theme


/**
 * Checks if Nightingale is the current theme
 * And loads a custom theme file if it is
 */

if ( 'Nightingale' == $theme->name || 'Nightingale' == $theme->parent_theme ) {

	add_filter( 'single_template', __NAMESPACE__ . '\load_oppertunities_template' );

}


function load_oppertunities_template( $template ) {

	global $post;

	if ( 'nhs_opportunities' === $post->post_type ) {

		$template = _get_plugin_directory() . '/public/templates/nhs-opportunities.php';

		return $template;
	}
	
	return $template;
}