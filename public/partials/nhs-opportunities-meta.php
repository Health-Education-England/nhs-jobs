	<?php
		$id           = get_the_id();
		$specialities = get_the_terms( $id, 'nhs_speciality' );
		$locations    = get_the_terms( $id, 'nhs_location' );
		$partners     = get_the_terms( $id, 'nhs_partners' );
		$end_date     = get_post_meta( $id, 'nhsjobs_end', true );
		$time         = strtotime( $end_date );
		$job_link     = get_post_meta( $id, 'nhsjobs_link', true );
		$job_link_txt = get_theme_mod( 'nhsjobs_apply_txt', 'Apply Now' );
	?>

	<div class="nhsuk-panel nhsuk-grid-row nhs-jobs-meta">

		<div class="nhsuk-grid-column-one-third">

			<dl class="pairedData">
		        <dt><?php echo  __( 'Partner:', 'nhsjobs' ); ?></dt>
		        <dd>
		        	<?php

		        	$count = count( $partners );

		        	foreach ( $partners as $key => $partner ):
		        		echo esc_html( $partner->name );

		        		if( $count !== $key + 1  ){
		        			echo ', ';
		        		}
		        	endforeach; ?>	  
		        </dd>
		        <dt><?php echo __( 'Closing Date:', 'nhsjobs' ); ?></dt>
		        <dd>
		        	<?php echo esc_html( date('dS F Y', $time ) ); ?>
		        </dd>    
		        
		    </dl>
		</div>

		<div class="nhsuk-grid-column-one-third">

			<dl class="pairedData">

				<dt><?php echo __( 'Staff group:', 'nhsjobs' ); ?></dt>
		        <dd>
		        	<?php 

		        	$count = count( $specialities );

		        	foreach ( $specialities as $key => $speciality ):
		        		echo esc_html( $speciality->name );

		        		if( $count !== $key + 1  ){
		        			echo ', ';
		        		}
		        	endforeach; ?>	        		
		        </dd>

		        <dt class="location"><?php echo __( 'Location:', 'nhsjobs' ); ?></dt>
		        <dd>
		        	<?php 
		        	$count = count( $locations );

		        	foreach ( $locations as $key => $location ):
		        		echo esc_html( $location->name );

		        		if( $count !== $key + 1  ){
		        			echo ' - ';
		        		}
		        	endforeach; ?>	        		
		        </dd>
		        
		    </dl>
		</div>

		<div class="nhsuk-grid-column-one-third">

			<?php if( $job_link ): ?>
				<form action="<?php echo esc_url( $job_link ); ?>">
					<button class="nhsuk-button" type="submit">
					  <?php echo esc_html( $job_link_txt ); ?>
					</button>
				</form>

			<?php endif; ?>
		</div>

	</div>

	<?php 

	$partner_txt    = term_description( $partner->term_id );
	$partner_link   = get_term_meta( $partner->term_id, 'partner-link', true );
	$partner_img_id = get_term_meta( $partner->term_id, 'partner-logo', true );


	if( $partner_txt || $partner_link || $partner_img_id ): ?>

		<?php if( $partner_img_id ):

			echo wp_get_attachment_image( intval( $partner_img_id ), 'medium', false, array( 'class' => 'nhsjobs-partner-logo') );

		endif; ?>
		
		<h3><?php echo __('About ', 'nhsjobs') . $partner->name; ?> </h3>

		<?php echo wp_kses_post( $partner_txt ); ?>

		<?php if( $partner_link ): ?>
			<div class="nhsuk-action-link">
			  <a class="nhsuk-action-link__link" href="<?php echo esc_url( $partner_link ); ?>" target="_blank">
			    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
			      <path d="M0 0h24v24H0z" fill="none"></path>
			      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
			    </svg>
			    <span class="nhsuk-action-link__text"><?php echo _e( 'Visit Website', 'nhsjobs' ); ?></span>
			  </a>
			</div>
		<?php endif; ?>

		<hr />

	<?php endif; ?>