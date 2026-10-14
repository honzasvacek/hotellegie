<?php
/**
 * @package WordPress
 * @subpackage YOUR_THEME
 */
?>
<?php if ( is_active_sidebar('side_form') ) : ?>
	<aside class="main-aside">
		<?php dynamic_sidebar('side_form'); ?>
	</aside>
<?php endif; ?>
