<?php


namespace NHS_JOBS\ADMIN\BlockCategories;

add_filter( 'block_categories', __NAMESPACE__ . '\add_job_block_cat', 10, 2 );

function add_job_block_cat( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'nhsjobs-blocks',
				'title' => __( 'NHS Jobs Blocks', '_vt' ),
			),
		)
	);
}