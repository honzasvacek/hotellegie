<?php
/**
 * @package WordPress
 * @subpackage YOUR_THEME
 */
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php wp_title('-', true, 'right'); ?> <?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="index,follow">
	<meta name="googlebot" content="index,follow">
	<meta name="author" content="(c)2017 - ADWS">
	<!--[if lt IE 9 ]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
	<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/inc/css/style.css">
	<script src="<?php bloginfo('template_url'); ?>/inc/js/jquery.js"></script>
	<script src="<?php bloginfo('template_url'); ?>/inc/js/foobox.free.min.js"></script>
	<?php wp_head(); ?>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-111379911-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-111379911-1');
	</script>
</head>
<body <?php body_class(); ?>>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2966658273443170');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2966658273443170&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<!--[if lt IE 7]>
<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
<![endif]-->

<header class="header">
	<div class="logo">
		<a href="/"><img src="<?php bloginfo('template_url'); ?>/inc/images/logo-legie.png" alt=""></a>
		<div class="hotel">
			<strong><?php bloginfo('name'); ?> <span>***</span></strong>
		</div>
	</div>
	<div class="menu">
		<nav>
			<a href="javascript:void(0);" class="menu-toggle"></a>
			<?php
				$currentLanguage  = get_bloginfo('language');
				wp_nav_menu( array(
					'menu'   => 'Menu '.$currentLanguage
				));
			?>
		</nav>
	</div>
</header>