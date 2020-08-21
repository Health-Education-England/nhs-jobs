<?php

// namespace NHS_JOBS\ADMIN\CustomizerOptions;

function add_job_options( $wp_customize ) {

	$wp_customize->add_section( 'nhsjobs_panel',
		array(
			'title'				=> __( 'NHS Jobs Settings', 'nhsjobs'),
			'description'		=> __( 'Update NHS Job options', 'nhsjobs'),
			'capability'		=> 'edit_theme_options',
			'theme-supports'	=> '',
			'priority'			=> '150',
		)
	);
}

add_action( 'customize_register','add_job_options' );


function add_job_settings( $wp_customize ) {

	$wp_customize->add_setting( 'nhsjobs_notfound', 
		array(
		  'capability' => 'edit_theme_options',
		  'default' => "We're sorry but there aren't any vacancies that match your criteria at the moment. You can try a different search or register your interest in a specific role on our contact us page." ,
		  'sanitize_callback' => 'sanitize_textarea_field',
		) 
	);

	$wp_customize->add_control( new WP_Customize_Control( 
		$wp_customize,
		'nhsjobs_notfound_setting', 
			array(
				'label'         => __( 'Not found message' ),
				'description'   => __( 'Add a custom sorry not found message' ),
				'section'       => 'nhsjobs_panel',
				'settings'      => 'nhsjobs_notfound',
			  	'type'          => 'textarea',			  	
			  	'priority'	    => 10,
			)
		)
	);

	$wp_customize->add_setting( 'nhsjobs_contact', 
		array(
		  'capability'         => 'edit_theme_options',
		  'default'            => 0,
		  'sanitize_callback'  => 'absint',
		) 
	);

	$wp_customize->add_control( new WP_Customize_Control( 
		$wp_customize,
		'nhsjobs_notfound_contact', 
			array(
				'label'         => __( 'Not found contact page' ),
				'description'   => __( 'Add a link to a contact page' ),
				'section'       => 'nhsjobs_panel',
				'settings'      => 'nhsjobs_contact',
			  	'type'          => 'dropdown-pages',			  	
			  	'priority'	    => 10,
			)
		)
	);

	$wp_customize->add_setting( 'nhsjobs_apply_txt',
		array(
			'type'				=> 'theme_mod',
			'default'			=> 'Apply Now',
			'capability' 		=> 'manage_options',
			'sanitize_callback' => 'wp_filter_nohtml_kses',
		)
	);

	$wp_customize->add_control( new WP_Customize_Control(
			$wp_customize,
			'nhsjobs_apply_now',
			array(
				'label'		    => 'Apply now text',
				'section'	    => 'nhsjobs_panel',
				'settings'      => 'nhsjobs_apply_txt',
				'capability' 	=> 'manage_options',
				'type'		    => 'text',
				'priority'	    => 10,
			)
		)
	);

	$wp_customize->add_setting( 'nhsjobs_viewOpp_txt',
		array(
			'type'				=> 'theme_mod',
			'default'			=> 'View Vacancy',
			'capability' 		=> 'manage_options',
			'sanitize_callback' => 'wp_filter_nohtml_kses',
		)
	);

	$wp_customize->add_control( new WP_Customize_Control(
			$wp_customize,
			'nhsjobs_view_opp',
			array(
				'label'		    => 'View opportunity text',
				'section'	    => 'nhsjobs_panel',
				'settings'      => 'nhsjobs_viewOpp_txt',
				'capability' 	=> 'manage_options',
				'type'		    => 'text',
				'priority'	    => 10,
			)
		)
	);
}

add_action( 'customize_register', 'add_job_settings' );