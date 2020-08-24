<?php

	$namespace = 'nhsjobs/jobscards/';

    $url = get_query_var( $namespace . 'url' );
    $title = get_query_var( $namespace . 'title' ) ? get_query_var( $namespace . 'title' ) : 'Latest Vacancies';
    $linkTxt = get_query_var( $namespace . 'linkTxt' ) ? get_query_var( $namespace . 'linkTxt' ) : 'View all Vacancies';
    $type = get_query_var( $namespace . 'type' ) ? get_query_var( $namespace . 'type' ) : 'jobs';
    $feed = get_query_var( $namespace . 'feed' ) ? get_query_var( $namespace . 'feed' ) : 'https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title';
    $location_tax = get_query_var( $namespace . 'location' ) ? get_query_var( $namespace . 'location' ) : '';
    $country_tax = get_query_var( $namespace . 'country' ) ? get_query_var( $namespace . 'country' ) : '';
    $location_tax_obj = get_term_by( 'id', intval( $location_tax ), 'nhs_location' );
    $country_tax_obj = get_term_by( 'id', intval( $country_tax ), 'nhs_location' );
    $viewOpp = get_theme_mod( 'nhsjobs_viewOpp_txt', 'View Vacancy' );


    $css_path = '/public/css/jobs.frontend.css';

    wp_enqueue_style( 
        'nhsoppscss',  
        _get_plugin_url() . $css_path,
        array(),
        filemtime( _get_plugin_directory() . $css_path )
    ); 

?>

<section class="nhsuk-grid-row">
    <div class="nhsuk-width-container">
        <?php
            if( $type === 'jobs' ){
                $feed_vacancies = NHS_JOBS\ADMIN\Feed\_fetchVacancies( esc_url( $feed ) );
            }
            elseif ( $type === 'opportunity' ) {
                $feed_vacancies = NHS_JOBS\ADMIN\Feed\create_oppertunities_array();
            }
            
            $homepage = false;

            if ($feed_vacancies && ($vacancies = $feed_vacancies->vacancy_details) && count($vacancies)) :

                $cards = array();

                foreach( $vacancies as $key => $vacancy ) :

                    if( $type === 'jobs' ){
                        array_push( $cards, $vacancy );
                    }

                    if( $type === 'opportunity' && ( empty( $location_tax ) === true && empty( $country_tax ) === true ) ){
                        array_push( $cards, $vacancy );
                    }

                    if( $type === 'opportunity' && ( $vacancy->job_country ===  $country_tax_obj->name ) ){
                        array_push( $cards, $vacancy );
                    }

                    if( $type === 'opportunity' && empty( $country_tax ) && ( $vacancy->job_location ===  $location_tax_obj->name ) ){

                            array_push( $cards, $vacancy );
                    }

                    if( count( $cards ) == 3 ) : break; endif;

                endforeach;
                

        ?>
            <div class="nhsuk-grid__item nhsuk-grid-column-full">
                <h2><?php echo esc_html( $title ); ?></h2>
                <div class="nhsuk-grid-row nhsuk-promo-group nhsuk-job-cards">
                    <?php include 'job-card.php'; ?>
                </div>

                <?php if( $url ): ?>

                    <div class="nhsuk-action-link text-center">
                        <a class="nhsuk-action-link__link" href="<?php echo esc_url( $url ); ?>">
                            <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
                            </svg>
                            <span class="nhsuk-action-link__text"><?php echo esc_html( $linkTxt ); ?></span>
                        </a>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</section>