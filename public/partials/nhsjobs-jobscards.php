<?php

	$namespace = 'nhsjobs/jobscards/';

    $url = get_query_var( $namespace . 'url' );
    $title = get_query_var( $namespace . 'title' ) ? get_query_var( $namespace . 'title' ) : 'Latest Vacancies';
    $linkTxt = get_query_var( $namespace . 'linkTxt' ) ? get_query_var( $namespace . 'linkTxt' ) : 'View all Vacancies';
    $type = get_query_var( $namespace . 'type' ) ? get_query_var( $namespace . 'type' ) : 'jobs';
    $feed = get_query_var( $namespace . 'feed' ) ? get_query_var( $namespace . 'feed' ) : 'https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title';
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
                $title = 'Vacancy';
            }
            elseif ( $type === 'opportunity' ) {
                $feed_vacancies = NHS_JOBS\ADMIN\Feed\create_oppertunities_array();
                $title = 'Opportunity';
            }
            
            $homepage = false;

            if ($feed_vacancies && ($vacancies = $feed_vacancies->vacancy_details) && count($vacancies)) :
        ?>
            <div class="nhsuk-grid__item nhsuk-grid-column-full">
                <h2><?php echo esc_html( $title ); ?></h2>
                <div class="nhsuk-grid-row nhsuk-promo-group nhsuk-job-cards">
                    <?php include 'job-card.php'; ?>
                </div>

                <div class="nhsuk-action-link text-center">
                    <a class="nhsuk-action-link__link" href="<?php echo esc_url( $url ); ?>">
                        <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
                        </svg>
                        <span class="nhsuk-action-link__text"><?php echo esc_html( $linkTxt ); ?></span>
                    </a>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>