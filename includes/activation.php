<?php

namespace NHS_JOBS\ACTIVATION;

include 'location-terms.php';

add_action( 'init',  __NAMESPACE__ . '\flush_rules', 30 );

function flush_rules(){

	flush_rewrite_rules();

}