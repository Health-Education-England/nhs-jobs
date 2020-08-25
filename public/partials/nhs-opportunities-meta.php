	<?php
		$id = get_the_id();
		$specialities = get_the_terms( $id, 'nhs_speciality' );
		$locations = get_the_terms( $id, 'nhs_location' );
		$partners = get_the_terms( $id, 'nhs_partners' );
		$end_date = get_post_meta( $id, 'nhsjobs_end', true );
		$time = strtotime( $end_date );
		$job_link = get_post_meta( $id, 'nhsjobs_link', true );
	?>

	<div class="nhsuk-panel nhsuk-grid-row nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-5 nhs-jobs-meta">

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

				<dt><?php echo __( 'Specialism:', 'nhsjobs' ); ?></dt>
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
					  Apply now
					</button>
				</form>

			<?php endif; ?>
		</div>

	</div>

	<?php 

	$partner_txt = term_description( $partner->term_id );

	if( $partner_txt ): ?>
		
		<h3><?php echo __('About ', 'nhsjobs') . $partner->name; ?> </h3>
		<?php echo wp_kses_post( $partner_txt ); ?>
		<hr />

	<?php endif; ?>