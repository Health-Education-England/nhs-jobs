<?php

namespace NHS_JOBS\ADMIN\ExpirePosts;


if (! wp_next_scheduled( 'expire_opportunities' )){

  wp_schedule_event( time(), 'daily', 'nhsjobs_expire_posts' );

}

add_action('nhsjobs_expire_posts', __NAMESPACE__ . '\expire_opportunities');

function expire_opportunities() {

	$time = date('Y-m-d\TH:i:s');

	$meta_quer_args = array(
	'relation'  =>   'AND',
	    array(
	        'key'       =>   'nhsjobs_end',
	        'value'     =>   $time,
	        'compare'   =>   '<'
	    )
	);

	$args = array(
		'post_type'    =>   array( 'nhs_opportunities' ),
		'nopaging'     =>   true,
		'post_status'  =>   'publish',
		'fields'       =>   'ids',
		'meta_key'     =>   'nhsjobs_end',
	    'orderby'      =>   'meta_value',
	    'meta_query'   =>   $meta_quer_args,
	);


	$expired_posts = get_posts($args);

	foreach ( $expired_posts as $post_id ):

		$postdata = array(
			'ID' => $post_id,
			'post_status' => 'draft',
			'post_date'   => '0000-00-00 00:00:00',
			'post_date_gmt'   => '0000-00-00 00:00:00'
		);

		wp_update_post( $postdata );

		update_post_meta( $post_id, 'nhsjobs_end', '' );

	endforeach;
}

