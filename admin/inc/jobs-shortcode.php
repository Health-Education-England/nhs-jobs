<?php

//[nhsjobfeed]
function nhsjobfeed_shortcode( $atts, $content = null ){

    $inputurl = $atts['url'];

    $url = admin_url("admin-ajax.php");
    $nonce = wp_create_nonce();

    $vacancy_path = '/public/js/vacancyFeed.js';
    $css_path = '/public/css/jobs.frontend.css';

    $not_found_txt = get_theme_mod( 
        'nhsjobs_notfound', 
        "We're sorry but there aren't any vacancies that match your criteria at the moment. You can try a different search or register your interest in a specific role on our contact us page." 
    );

    $not_found_link = get_permalink( $not_found_id );

    $viewOpp = get_theme_mod( 
        'nhsjobs_viewOpp_txt', 
        'View Vacancy' 
    );


    wp_enqueue_script( 
        'nhsjobfeedjs',  
        _get_plugin_url() . $vacancy_path,
        array(),
        filemtime( _get_plugin_directory() . $vacancy_path ),
        true
    );

    wp_enqueue_style( 
        'nhsoppscss',  
        _get_plugin_url() . $css_path,
        array(),
        filemtime( _get_plugin_directory() . $css_path )
    );

    $feed_url = $inputurl ? $inputurl : 'https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&amp;field=title';

    $feed = html_entity_decode( esc_url( $feed_url ) );
    $feed = urlencode( $feed );

    ob_start();

    ?>
    <div id='nhs-feed' class='loading'></div>
    <script>
        window.FEED = {
            url: "<?php echo esc_url( $url ) ?>",
            action: "fetchVacancies",
            nonce: "<?php echo esc_html( $nonce ); ?>",
            feed: "<?php echo $feed; ?>",
            type: "jobs",
            notFoundTxt: <?php echo json_encode( esc_html( $not_found_txt ) ); ?>,
            notFoundUrl: "<?php echo esc_url( $not_found_link ); ?>",
            btn: "<?php echo esc_html( $viewOpp ); ?>"
        };
    </script>

    <?php 

    $output = ob_get_clean();

    return $output;

}
add_shortcode( 'nhsjobfeed', 'nhsjobfeed_shortcode' );