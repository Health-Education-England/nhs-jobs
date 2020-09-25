<?php

namespace NHS_JOBS\ADMIN\TermMeta;

add_action( 'nhs_partners_edit_form_fields', __NAMESPACE__ . '\add_term_meta', 10, 2 );
 
function add_term_meta( $term, $taxonomy ) {
 
	$partner_link = get_term_meta( $term->term_id, 'partner-link', true );
	$partner_img_id = get_term_meta( $term->term_id, 'partner-logo', true );
 
	?>
	<tr class="form-field">
		<th>
			<label for="partner-link">Partner Link</label>
		</th>
		<td>
			<input type="url" name="partner-link" id="partner-link" value="<?php echo esc_url( $partner_link ); ?>" />
			<p class="description"><?php _e( 'Add Partner website Link', 'nhsjobs' ); ?></p>
		</td>
	</tr>
	<tr class="form-field">
		<th>
			<label for="partner-logo"><?php _e( 'Partner Logo', 'nhsjobs' ); ?></label>
		</th>
		<td>
			<input type="hidden" name="partner-logo" id="partner-logo" value="<?php echo intval( $partner_img_id ); ?>"><br>

			<img src="<?php echo wp_get_attachment_image_url( intval( $partner_img_id ), 'medium' ); ?>" class="partner-logo"/>

			<button type="button" class="button" id="partner-logo_btn" data-media-uploader-target="#partner-logo">
				<?php 
					if( $partner_img_id ) :

						_e( 'Replace logo', 'nhsjobs' );

					else:

						_e( 'Add Logo', 'nhsjobs' );

					endif;
				?>
					
			</button>
		</td>
	</tr>


	<?php

	wp_nonce_field( 'nhsjobs_term_meta_nonce', 'nhsjobs_term_meta_name' );
 
}

add_action( 'created_nhs_partners', __NAMESPACE__ . '\save_term_meta' );
add_action( 'edited_nhs_partners', __NAMESPACE__ . '\save_term_meta' );
 
function save_term_meta( $term_id ) {

	if ( ! isset( $_POST['nhsjobs_term_meta_name'] ) || ! wp_verify_nonce( $_POST['nhsjobs_term_meta_name'], 'nhsjobs_term_meta_nonce' ) ) return;

	update_term_meta(
		$term_id,
		'partner-link',
		esc_url_raw( $_POST[ 'partner-link' ] )
	);

	update_term_meta(
		$term_id,
		'partner-logo',
		intval( $_POST[ 'partner-logo' ] )
	);
 
	
 
}