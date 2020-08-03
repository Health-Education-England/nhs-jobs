<?php

namespace NHS_JOBS\ACTIVATION\AddSpecialityTerms;

function speciality_parent_terms(){

	$location_parents = array(
		array(
			'name' => 'Clinical Oncology',
			'slug' => 'clinical-oncology'
		),
		array(
			'name' => 'Clinical Support',
			'slug' => 'clinical-support'
		),
		array(
			'name' => 'Corporate',
			'slug' => 'corporate'
		),
		array(
			'name' => 'Dental/Oral',
			'slug' => 'dental-oral'
		),
		array(
			'name' => 'Estates',
			'slug' => 'estates'
		),
		array(
			'name' => 'General Acute',
			'slug' => 'general-acute'
		),
		array(
			'name' => 'Imaging',
			'slug' => 'imaging'
		),
		array(
			'name' => 'Medicine',
			'slug' => 'medicine'
		),
		array(
			'name' => 'Mental Health',
			'slug' => 'mental-health'
		),
		array(
			'name' => 'Non-clinical',
			'slug' => 'non-clinical'
		),
		array(
			'name' => 'Obstetrics & Gynaecology',
			'slug' => 'obstetrics-gynaecology'
		),
		array(
			'name' => 'Occupational Health',
			'slug' => 'occupational-health'
		),
		array(
			'name' => 'Pathology',
			'slug' => 'pathology'
		),
		array(
			'name' => 'Primary Care',
			'slug' => 'primary-care'
		),
		array(
			'name' => 'Psychiatry',
			'slug' => 'psychiatry'
		),
		array(
			'name' => 'Public Health Medicine',
			'slug' => 'public-health-medicine'
		),
		array(
			'name' => 'Surgery',
			'slug' => 'surgery'
		)

	);

	return $location_parents;
}




function add_speciality_terms(){

	$speciality_parents = speciality_parent_terms();

	foreach ( $speciality_parents as $location ) {

		wp_insert_term( $location['name'], 'nhs_speciality', array(
			'slug' => $location['slug']
		) );

	}

}

add_speciality_terms();

