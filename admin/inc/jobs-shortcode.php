<?php


function _fetchVacancies($feedUrl = "https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title")
{
    //cache the feed in transient cache
    $hash = md5($feedUrl);
    if ( false === ( $raw_recruitment = get_transient( $hash ) ) ) {
        $raw_recruitment = wp_remote_retrieve_body(wp_remote_get($feedUrl, ['timeout' => 60]));
        set_transient( $hash, $raw_recruitment, HOUR_IN_SECONDS );
    }

    return json_decode(json_encode(simplexml_load_string($raw_recruitment)));
}


function fetchVacancies(){
    $vacancies = _fetchVacancies($_POST['feed']);
    wp_send_json($vacancies);
}
add_action( 'wp_ajax_fetchVacancies', 'fetchVacancies' );
add_action( 'wp_ajax_nopriv_fetchVacancies', 'fetchVacancies' );


//[nhsjobfeed]
function nhsjobfeed_shortcode( $atts, $content = null ){

    $inputurl = $atts['url'];

    $url = admin_url("admin-ajax.php");
    $nonce = wp_create_nonce();

    $vacancy_path = '/public/js/vacancyFeed.js';

    wp_enqueue_script( 
        'nhsjobfeedjs',  
        _get_plugin_url() . $vacancy_path,
        array(),
        filemtime( _get_plugin_directory() . $vacancy_path ),
        true
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