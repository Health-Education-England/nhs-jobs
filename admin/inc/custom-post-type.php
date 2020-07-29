<?php

namespace NHS_JOBS\ADMIN\CustomPostType;


add_action( 'init', __NAMESPACE__ . '\add_opps_post_type', 0 );


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
		'taxonomies'            => array('vt_categories'), // !important add any other Cats in here
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
			[ 'core/heading', [] ]
		],
		// 'template_lock'        => 'all',
	);

	register_post_type( 'nhs_opportunities', $args );

}
