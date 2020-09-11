<?php

namespace NHS_JOBS\ADMIN\CustomPostType;


add_action( 'init', __NAMESPACE__ . '\add_opps_post_type' );


function add_opps_post_type() {

	$labels = array(
		'name'                  => _x( 'Opportunities', 'Post Type General Name', 'nhsjobs' ),
		'singular_name'         => _x( 'Opportunities', 'Post Type Singular Name', 'nhsjobs' ),
		'menu_name'             => __( 'Opportunities', 'nhsjobs' ),
		'name_admin_bar'        => __( 'Opportunities', 'nhsjobs' ),
		'parent_item_colon'     => __( 'Parent Post:', 'nhsjobs' ),
		'all_items'             => __( 'All Opportunities', 'nhsjobs' ),
		'add_new_item'          => __( 'Add New Opportunity', 'nhsjobs' ),
		'add_new'               => __( 'Add Opportunity', 'nhsjobs' ),
		'new_item'              => __( 'New Opportunity', 'nhsjobs' ),
		'edit_item'             => __( 'Edit Opportunity', 'nhsjobs' ),
		'update_item'           => __( 'Update Opportunity', 'nhsjobs' ),
		'view_item'             => __( 'View Opportunity', 'nhsjobs' ),
		'search_items'          => __( 'Search Posts', 'nhsjobs' ),
		'not_found'             => __( 'Not found', 'nhsjobs' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'nhsjobs' ),
		'items_list'            => __( 'Posts list', 'nhsjobs' ),
		'items_list_navigation' => __( 'Posts list navigation', 'nhsjobs' ),
		'filter_items_list'     => __( 'Filter Posts list', 'nhsjobs' ),
	);
	$rewrite = array(
		'slug'                  => 'opportunities',
		'with_front'            => false,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => __( 'Opportunities', 'nhsjobs' ),
		'description'           => __( 'Opportunities', 'nhsjobs' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'page-attributes', 'custom-fields' ),
		'taxonomies'            => array('nhs_speciality', 'nhs_location', 'nhs_partners'),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-admin-site',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'opportunities',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          =>  true,
		'template'              => [
			[ 'nhsjobs/opportunities', [] ],
			[ 'core/heading', [ 
				'content' => 'Description' 
			] ]
		],
	);

	register_post_type( 'nhs_opportunities', $args );

}

// add_filter('pre_get_posts', __NAMESPACE__ . '\change_default_order_opps');

// function change_default_order_opps( $wp_query ) {

// 	$post_type = $wp_query->query['post_type'];

// 	if ( is_admin() && $post_type === 'nhs_opportunities' && !isset( $_GET['orderby'] ) ) {     
    
// 		$wp_query->set('orderby', 'date');
// 		$wp_query->set('order', 'DESC');
//   	}

// }

