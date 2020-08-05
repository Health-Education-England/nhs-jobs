<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Nightingale
 * @copyright NHS Leadership Academy, Tony Blacker
 * @version 1.1 21st August 2019
 */

get_header();

$template_file = _get_plugin_directory() . '/public/partials/content-nhs_oppertunities.php'

?>

	<div id="primary" class=" nhsuk-grid-row">
		<div class="single">

			<?php
			while ( have_posts() ) :
				the_post();

				load_template( $template_file, true );

				// get_template_part( 'template-parts/content', get_post_type() );
				nightingale_get_prev_next();

			endwhile; // End of the loop.
			?>

		</div>

	</div><!-- #primary -->

<?php
get_footer();