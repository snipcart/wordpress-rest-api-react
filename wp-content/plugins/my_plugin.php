<?php
/**
 * @package Sample_Plugin
 * @version 1.0.0
 */
/*
Plugin Name: Sample Plugin
Plugin URI: http://example.com/
Description: The beginning of an awesome plugin
Author: Yourself
Version: 1.0.0
Author URI: http://example.com/
*/

function generate_course_type() {

	$labels = array(
		'name'                  => 'Courses',
		'singular_name'         => 'Course',
	);
	$args = array(
		'label'                 => 'Course',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
        'public'                => true,
        'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		'rest_base'             => 'courses',
	);
	register_post_type( 'course_type', $args );

}
add_action( 'init', 'generate_course_type', 0 );

