<?php

namespace NHS_JOBS\ADMIN\CustomTax;


add_action( 'init',  __NAMESPACE__ . '\add_speciality_tax' );


function add_speciality_tax() {

	$labels = array(
		'name'                       => _x( 'Speciality Categories', 'Taxonomy General Name', 'nhsjobs' ),
		'singular_name'              => _x( 'Speciality', 'Taxonomy Singular Name', 'nhsjobs' ),
		'menu_name'                  => __( 'Speciality', 'nhsjobs' ),
		'all_items'                  => __( 'All Specialities', 'nhsjobs' ),
		'parent_item'                => __( 'Parent Category', 'nhsjobs' ),
		'parent_item_colon'          => __( 'Parent Category:', 'nhsjobs' ),
		'new_item_name'              => __( 'New Category', 'nhsjobs' ),
		'add_new_item'               => __( 'Add New Category', 'nhsjobs' ),
		'edit_item'                  => __( 'Edit Category', 'nhsjobs' ),
		'update_item'                => __( 'Update Category', 'nhsjobs' ),
		'view_item'                  => __( 'View Category', 'nhsjobs' ),
		'separate_items_with_commas' => __( 'Separate categories with commas', 'nhsjobs' ),
		'add_or_remove_items'        => __( 'Add or remove categories', 'nhsjobs' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'nhsjobs' ),
		'popular_items'              => __( 'Popular categories', 'nhsjobs' ),
		'search_items'               => __( 'Search categories', 'nhsjobs' ),
		'not_found'                  => __( 'Not Found', 'nhsjobs' ),
		'items_list'                 => __( 'Categories list', 'nhsjobs' ),
		'items_list_navigation'      => __( 'Categories list navigation', 'nhsjobs' ),
	);
	$rewrite = array(
		'slug'                       => 'speciality_categories',
		'with_front'                 => true,
		'hierarchical'               => true,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => false,
		'show_tagcloud'              => false,
		'show_in_rest'               => true,
		'rewrite'                    => $rewrite,
	);

	register_taxonomy( 'nhs_speciality', array( 'nhs_opportunities' ), $args );

}


add_action( 'init',  __NAMESPACE__ . '\add_location_tax' );


function add_location_tax() {

	$labels = array(
		'name'                       => _x( 'Locations', 'Taxonomy General Name', 'nhsjobs' ),
		'singular_name'              => _x( 'Location', 'Taxonomy Singular Name', 'nhsjobs' ),
		'menu_name'                  => __( 'Locations', 'nhsjobs' ),
		'all_items'                  => __( 'All Locations', 'nhsjobs' ),
		'parent_item'                => __( 'Parent Category', 'nhsjobs' ),
		'parent_item_colon'          => __( 'Parent Category:', 'nhsjobs' ),
		'new_item_name'              => __( 'New Category', 'nhsjobs' ),
		'add_new_item'               => __( 'Add New Category', 'nhsjobs' ),
		'edit_item'                  => __( 'Edit Category', 'nhsjobs' ),
		'update_item'                => __( 'Update Category', 'nhsjobs' ),
		'view_item'                  => __( 'View Category', 'nhsjobs' ),
		'separate_items_with_commas' => __( 'Separate categories with commas', 'nhsjobs' ),
		'add_or_remove_items'        => __( 'Add or remove categories', 'nhsjobs' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'nhsjobs' ),
		'popular_items'              => __( 'Popular categories', 'nhsjobs' ),
		'search_items'               => __( 'Search categories', 'nhsjobs' ),
		'not_found'                  => __( 'Not Found', 'nhsjobs' ),
		'items_list'                 => __( 'Categories list', 'nhsjobs' ),
		'items_list_navigation'      => __( 'Categories list navigation', 'nhsjobs' ),
	);
	$rewrite = array(
		'slug'                       => 'speciality_categories',
		'with_front'                 => true,
		'hierarchical'               => true,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => false,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => false,
		'show_in_rest'               => true,
		'rewrite'                    => $rewrite,
	);

	register_taxonomy( 'nhs_location', array( 'nhs_opportunities' ), $args );

}


add_action( 'init',  __NAMESPACE__ . '\add_partners_tax' );


function add_partners_tax() {

	$labels = array(
		'name'                       => _x( 'Partners', 'Taxonomy General Name', 'nhsjobs' ),
		'singular_name'              => _x( 'Partner', 'Taxonomy Singular Name', 'nhsjobs' ),
		'menu_name'                  => __( 'Partners', 'nhsjobs' ),
		'all_items'                  => __( 'All Partners', 'nhsjobs' ),
		'parent_item'                => __( 'Parent Category', 'nhsjobs' ),
		'parent_item_colon'          => __( 'Parent Category:', 'nhsjobs' ),
		'new_item_name'              => __( 'New Category', 'nhsjobs' ),
		'add_new_item'               => __( 'Add New Category', 'nhsjobs' ),
		'edit_item'                  => __( 'Edit Category', 'nhsjobs' ),
		'update_item'                => __( 'Update Category', 'nhsjobs' ),
		'view_item'                  => __( 'View Category', 'nhsjobs' ),
		'separate_items_with_commas' => __( 'Separate categories with commas', 'nhsjobs' ),
		'add_or_remove_items'        => __( 'Add or remove categories', 'nhsjobs' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'nhsjobs' ),
		'popular_items'              => __( 'Popular categories', 'nhsjobs' ),
		'search_items'               => __( 'Search categories', 'nhsjobs' ),
		'not_found'                  => __( 'Not Found', 'nhsjobs' ),
		'items_list'                 => __( 'Categories list', 'nhsjobs' ),
		'items_list_navigation'      => __( 'Categories list navigation', 'nhsjobs' ),
	);
	$rewrite = array(
		'slug'                       => 'partners_categories',
		'with_front'                 => true,
		'hierarchical'               => true,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => false,
		'show_in_rest'               => true,
		'rewrite'                    => $rewrite,
	);

	register_taxonomy( 'nhs_partners', array( 'nhs_opportunities' ), $args );

}


/**
 * Disable display of Gutenberg Post Setting UI for a specific
 * taxonomy. While this isn't the official API for this need,
 * it works for now because only Gutenberg is dependent on the
 * REST API response.
 *
 * https://github.com/WordPress/gutenberg/issues/6912
 */

add_filter( 'rest_prepare_taxonomy', function( $response, $taxonomy ){

	if ( 'nhs_speciality' === $taxonomy->name ) {
		$response->data['visibility']['show_ui'] = false;
	}

	if ( 'nhs_partners' === $taxonomy->name ) {
		$response->data['visibility']['show_ui'] = false;
	}

	return $response;
}, 10, 2 );

