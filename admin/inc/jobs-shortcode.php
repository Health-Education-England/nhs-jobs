<?php

//[nhsjobfeed]
function nhsjobfeed_shortcode( $atts, $content = null ){

    $inputurl = $atts['url'];

    $url = admin_url("admin-ajax.php");
    $nonce = wp_create_nonce();

    $vacancy_path = '/public/js/vacancyFeed.js';
    $css_path = '/public/css/jobs.frontend.css';

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

    $feed = html_entity_decode( $feed_url );
    $feed = urlencode($feed);

    return <<<EOT
<div id='nhs-feed' class='loading'></div>
<script>
    window.FEED = {
        url: '$url',
        action: 'fetchVacancies',
        nonce: '$nonce',
        feed: '$feed',
    };
</script>
EOT;
}
add_shortcode( 'nhsjobfeed', 'nhsjobfeed_shortcode' );