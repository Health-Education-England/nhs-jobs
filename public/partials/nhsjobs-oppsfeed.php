<?php

    $namespace = 'nhsjobs/oppsfeed/';

    $inputurl = get_query_var( $namespace . 'url' );

    

    $url = admin_url("admin-ajax.php");
    $nonce = wp_create_nonce();

    $vacancy_path = '/public/js/vacancyFeed.js';
    $css_path = '/public/css/jobs.frontend.css';

    wp_enqueue_script( 
        'nhsoppsfeedjs',  
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

?>


<div id='nhs-feed' class='loading'></div>
<script>
    window.FEED = {
        url: "<?php echo esc_url( $url ) ?>",
        action: 'getoppertunities',
        nonce: "<?php echo $nonce ?>",
        feed: "<?php echo $feed ?>",
        type: "opportunity"
    };
</script>
