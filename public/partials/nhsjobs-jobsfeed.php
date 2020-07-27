<?php

// do_shortcode( '[nhsjobfeed url=https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&amp;field=title]' );


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

    $feed_url = 'https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&amp;field=title';

    $feed = html_entity_decode( $feed_url );
    $feed = urlencode( $feed );

?>


<div id='nhs-feed' class='loading'></div>
<script>
    window.FEED = {
        url: "<?php echo $url ?>",
        action: 'fetchVacancies',
        nonce: "<?php echo $nonce ?>",
        feed: "<?php echo $feed ?>",
    };
</script>
