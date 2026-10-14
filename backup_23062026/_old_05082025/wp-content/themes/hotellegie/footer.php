<?php
/**
 * @package WordPress
 * @subpackage YOUR_THEME
 */
?>

<footer class="footer">
	<div>
		<?php dynamic_sidebar('contact_form'); ?>
	</div>
	<div>
		<?php dynamic_sidebar('social_form'); ?>
	</div>
</footer>

<script src="<?php bloginfo('template_url'); ?>/inc/js/functions.js"></script>

<?php wp_footer(); ?>

</body>
</html>