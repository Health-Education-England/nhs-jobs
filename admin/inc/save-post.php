<?php

namespace NHS_JOBS\ADMIN\SavePost;

add_action( 'save_post', __NAMESPACE__ . '\delete_transient_on_update', 10, 2 );

function delete_transient_on_update( $post_id, $post ){

	if( 'nhs_opportunities' !== $post->post_type ) return;

	$hash = md5('VolunteeringJobs');

	delete_transient( $hash );
}