<?php

namespace NHS_JOBS\ADMIN\Dynamic_Blocks;

add_action( 'plugins_loaded', __NAMESPACE__ . '\register_dynamic_block' );


/**
 *
 * Taken / Inspired by https://johnblackbourn.com/gutenberg-block-template-part/
 *
 * Generic block rendering callback function to load a block from a theme template part.
 *
 * Loads a block from the `blocks` subdirectory according to the name of the block, and places the
 * block attributes and block content into namespaced query vars. If there's no corresponding block
 * template part, the block content is returned unaltered.
 *
 * A block named `foo/block1` looks for a template part named `blocks/foo/block1.php`.
 *
 * The block attributes and content can be accessed inside the template part via query vars:
 *
 * - `get_query_var( 'foo/block1/attribute1' )`
 * - `get_query_var( 'foo/block1/attribute2' )`
 * - `get_query_var( 'foo/block1/content' )`
 *
 * @param string $name       The full block name, for example 'foo/block1'.
 * @param array  $attributes Array of attributes saved on the block instance.
 * @param string $content    Optional user-entered block content. Can be null.
 * @return string The dynamic block content.
 */

function register_dynamic_block() {

	// Only load if Gutenberg is available.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$blocks = [
		'nhsjobs/jobsfeed',
	];

	foreach ( $blocks as $block ) {

		register_block_type(
			$block,
			[
				// https://github.com/WordPress/gutenberg/issues/4671
				'render_callback' => function( array $attributes, string $content = null ) use ( $block ) {

					return template_part_block_renderer( $block, $attributes, $content );
				},
			]
		);

	}

}




function template_part_block_renderer( string $name, array $attributes, string $content = null ) : string {

	// change template name slash to scores
	$template_name = str_replace( '/', '-', $name );

	// Set query vars so they are accessible to the template part:
	foreach ( $attributes as $attribute_name => $attribute_value ) {
		set_query_var( $name . '/' . $attribute_name, $attribute_value );
	}
	set_query_var( $name . '/content', $content );
	set_query_var( $name . '/class', 'wp-block-' . $template_name );

	// get template file directory
	$template_file = _get_plugin_directory() . "/public/partials/{$template_name}.php";


	// Load the template part in an output buffer:
	ob_start();
	include $template_file;
	$output = ob_get_clean();

	// Fall back to just the block content if there's no template part:
	if ( '' === $output ) {
		$output = (string) $content;
	}

	// Clear the query vars so they don't bleed into subsequent instances of the same block type
	foreach ( $attributes as $attribute_name => $attribute_value ) {
		set_query_var( $name . '/' . $attribute_name, null );
	}
	set_query_var( $name . '/content', null );

	return $output;
}
