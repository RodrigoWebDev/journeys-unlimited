<?php
/**
 * @package Homey
 * @since Homey 1.0
 */

get_header();

global $post, $homey_local, $homey_prefix;
$sticky_sidebar = homey_option('sticky_sidebar');

$default_sidebar = isset($sticky_sidebar['default_sidebar']) ? $sticky_sidebar['default_sidebar'] : 0;

$content_classes = "col-xs-12 col-sm-12 col-md-8 col-lg-8";
if(!is_active_sidebar('blog-sidebar')) {
    $content_classes = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
}
?>

<section class="filter-search-banner">
<img src="" alt="">
<h1></h1>
</section>

<?php ?>

<section id="search-filter" class="main-content-area">

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2">
                <?php echo do_shortcode("[searchandfilter id='2847']"); ?>
            </div>
            <!--<div class="<?php echo esc_attr($content_classes); ?>">-->
            <div class="col-md-10">
                <div class="blog-wrap row">
                    <?php
                    if ( have_posts() ) :

                        while ( have_posts() ) : the_post();
                    ?>
                    <?php

                            get_template_part( 'serach-filter-content', get_post_format() );

                        endwhile;
                    ?>
                    <?php
                    else :
                        // If no content, include the "No posts found" template.
                        get_template_part( 'content', 'none' );

                    endif;
                    ?>
                    <hr>

                    <!--start pagination-->
                    <?php homey_pagination( $wp_query->max_num_pages ); ?>
                    <div class="mw-nav">
                        <?php the_posts_pagination(); ?>
                    </div>
                    <!--end pagination-->
                </div><!-- grid-listing-page -->

            </div><!-- col-xs-12 col-sm-12 col-md-8 col-lg-8 -->
        </div><!-- .row -->
    </div>   <!-- .container -->

<?php get_footer(); ?>