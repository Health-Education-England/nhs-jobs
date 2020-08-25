<?php

namespace NHS_JOBS\ADMIN;

/**
 * Loads JS and CSS in the Admin
 */

require_once 'inc/register-scripts.php';

/**
 * Registers Opportunities Custom Post Type
 */

require_once 'inc/custom-post-type.php';

/**
 * Registers Custom Taxonomies for Opportunities CPT
 */

require_once 'inc/custom-taxonomies.php';

/**
 * Registers Dynamic Blocks
 */

require_once 'inc/dynamic-blocks.php';

/**
 * Registers meta boxes for opportunities
 */

require_once 'inc/meta-boxes.php';


/**
 * Adds Meta Data to the Nightingale action hook
 */

require_once 'inc/template-hooks.php';

/**
 * Registers AJAX callback for jobs and oppportunities
 * blocks and sets transients 
 */

require_once 'inc/oppertunities-feed.php';

/**
 * Deletes transient when CPT saves
 */

require_once 'inc/save-post.php';

/**
 * Checks if Opportunity has expired, and moves to draft if it has
 */

require_once 'inc/expire-posts.php';

/**
 * Adds options to the customizer panel
 */

require_once 'inc/customizer-options.php';

/**
 * Registers Shortcode to include job listings for backwards compatibility
 */

require_once 'inc/jobs-shortcode.php';