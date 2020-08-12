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
 * Registers custom page template for oppertunites CPT
 */

require_once 'inc/custom-template.php';

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
 * Registers Shortcode to include job listings for backwards compatibility
 */

require_once 'inc/jobs-shortcode.php';