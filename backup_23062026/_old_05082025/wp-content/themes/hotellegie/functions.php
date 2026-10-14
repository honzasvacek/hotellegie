<?php
/**
 * @package WordPress
 * @subpackage YOUR_THEME
 */

add_theme_support('automatic-feed-links');

/**
 * Add/Remove some scripts
 */

function wpbuild_scripts(){
	
	if(is_admin()){ return; }
	
	// Remove WP jQuery version
	wp_deregister_script('jquery');
	
}
add_action('init', 'wpbuild_scripts');


function my_plugin_body_class($classes) {
	$classes[] = 'web-1';
	return $classes;
}
add_filter('body_class', 'my_plugin_body_class');


add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
function special_nav_class($classes, $item) {
	if (in_array('current-menu-item', $classes) ){
		$classes[] = 'active ';
	}
	return $classes;
}

add_filter( 'wp_nav_menu_items', 'append_polylang_func', 100, 2 );
function append_polylang_func( $items, $args )
{
	$languageFlags = pll_the_languages(array('raw'=>1));

	$langItem = '';
	foreach ($languageFlags as $key => $lang_item) {
		$languageCode = $key;
		if($languageFlags[$languageCode]["current_lang"] == true) {
			// Aktualne zvoleny jazyk
			$langItemActive = '<li class="flag-' . $languageFlags[$languageCode]["slug"] . '"><strong>' . $languageFlags[$languageCode]["name"] . '</strong>';
		} else {
			// Ostatni jazyky
			$langItem .=  '<li class="flag-' . $languageFlags[$languageCode]["slug"] . '">';
			if($languageFlags[$languageCode]["slug"] == 'cs') {
				$langItem .=  '<a href="/">'.$languageFlags[$languageCode]["name"].'</a>';
			} else {
				$langItem .=  '<a href="/' . $languageFlags[$languageCode]["slug"] . '/">'.$languageFlags[$languageCode]["name"].'</a>';
			}
			$langItem .=  '</li>';
		}
	}

	$items .= $langItemActive;
	$items .= '<ul>'.$langItem.'</ul>';
	$items .= '</li>';

	return $items;
}

function disable_wp_emojicons() {
	// all actions related to emojis
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	// filter to remove TinyMCE emojis
	add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );



function widgets_init() {
	register_sidebar( array(
		'name'          => 'Register form',
		'id'            => 'side_form',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	));
	register_sidebar( array(
		'name'          => 'Contact footer',
		'id'            => 'contact_form',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	));
	register_sidebar( array(
		'name'          => 'Social footer',
		'id'            => 'social_form',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	));
}
add_action( 'widgets_init', 'widgets_init' );
