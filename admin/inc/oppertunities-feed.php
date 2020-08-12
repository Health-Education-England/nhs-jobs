<?php

namespace NHS_JOBS\ADMIN\Feed;

function create_oppertunities_array(){

    $hash = md5('VolunteeringJobs');

    if ( false === ( $raw_recruitment = get_transient( $hash ) ) ) {      

		$args = array(
			'numberposts' => -1,
			'post_type' => 'nhs_opportunities',
			'nopaging' => true,
			'fields' => 'ids'
		);

		$post_ids = get_posts( $args );

		$vacancies = array();

		foreach ( $post_ids as $key => $id ):

			$end_date = get_post_meta( $id, 'nhsjobs_end', true );
			$time = strtotime( $end_date );

			$partner = get_the_terms( $id, 'nhs_partners' )[0];
			$location = get_the_terms( $id, 'nhs_location' );
			$speciality = get_the_terms( $id, 'nhs_speciality' )[0];
			$continent = '';
			$country = '';

			foreach ( $location as $place ) {
				if( $place->parent > 0 ):
					$country = $place->name;				
				else:
					$continent = $place->name;
				endif;
			}


			$post_data = array(
				'id'              => $id,
				'job_reference'   => '',
				'job_title'       => esc_html( get_the_title( $id ) ),
				'job_description' => esc_html( get_the_excerpt( $id ) ),
				'job_employer'    => esc_html( $partner->name ),
				'job_type'        => '',
				'job_salary'      => '',
				// 'job_location'    => array( 
				// 						'continent' => esc_html( $location[0]->name ),
				// 						'country'   => esc_html( $location[1]->name )
				// 					),
				'job_location'    => esc_html( $continent ),
				'job_country'     => esc_html( $country ),
				'job_closedate'   => esc_html( date('d/m/Y', $time ) ),
				'job_postdate'    => get_the_date( 'd/m/Y', $id ),
				'job_staff_group' => esc_html( $speciality->name ),
				'job_url'         => esc_url( get_the_permalink( $id ) )
			);

			array_push( $vacancies, $post_data );

		endforeach;

		$raw_recruitment = array(
			'number_of_jobs_found' => count( $post_ids ),
			'vacancy_details' => $vacancies
		);

		set_transient( $hash, $raw_recruitment, HOUR_IN_SECONDS );

	}

	$posts = json_decode( json_encode( $raw_recruitment ) );

	return $posts;
}


function _fetchVacancies($feedUrl = "https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title"){
    //cache the feed in transient cache
    $hash = md5($feedUrl);
    if ( false === ( $raw_recruitment = get_transient( $hash ) ) ) {
        $raw_recruitment = wp_remote_retrieve_body(wp_remote_get($feedUrl, ['timeout' => 60]));
        set_transient( $hash, $raw_recruitment, HOUR_IN_SECONDS );
    }

    return json_decode(json_encode(simplexml_load_string($raw_recruitment)));
}


function fetchVacancies(){

	$type = $_POST['type'];

	if( 'jobs' === $type ):
		$vacancies = _fetchVacancies($_POST['feed']);
    	wp_send_json($vacancies);
    	
    elseif( 'opportunity' === $type ):
    	$vacancies = create_oppertunities_array();
    	wp_send_json($vacancies);
    endif;
    
}

add_action( 'wp_ajax_fetchVacancies', __NAMESPACE__ . '\fetchVacancies' );
add_action( 'wp_ajax_nopriv_fetchVacancies', __NAMESPACE__ . '\fetchVacancies' );
