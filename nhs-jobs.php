<?php
/**
 * Plugin Name: NHS Jobs
 * Plugin URI: https://github.com/Health-Education-England/nhs-jobs
 * Description: NHS Jobs plugin. Extends plugin from Oneblackbear
 * Version: 2.0.0
 * Author: VeryTwisty, Oneblackbear
 */


defined( 'ABSPATH' ) || exit;

/**
 * Currently plugin version.
 */
define( 'NHSJOBS_VERSION', '2.0.0' );


/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.0.0
 * @ignore
 * @access private
 *
 * @return string
 */

function _get_plugin_directory() {
    return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.0.0
 * @ignore
 * @access private
 *
 * @return string
 */

function _get_plugin_url() {
    static $plugin_url;

    if ( empty( $plugin_url ) ) {
        $plugin_url = plugins_url( null, __FILE__ );
    }

    return $plugin_url;
}


/**
 * The code that runs during plugin activation.
 */
function nhsjobs_activate() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/activation.php';
}

function nhsjobs_deactivate() {
    require_once plugin_dir_path( __FILE__ ) . 'includes/deactivation.php';
}


register_activation_hook( __FILE__, 'nhsjobs_activate' );

register_deactivation_hook( __FILE__, 'nhsjobs_deactivate' );


// require_once 'includes/terms.php';

require_once 'admin/admin.php';
