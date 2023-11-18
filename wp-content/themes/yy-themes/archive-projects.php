<?php
/**
 * Template Name: Projects Archive
 */

get_header();

// Custom query to retrieve all projects
$args = array(
    'post_type'      => 'projects',
    'posts_per_page' => -1,
);

$query = new WP_Query( $args );

if ( $query->have_posts() ) :
    echo '<div class="project-container">';
    while ( $query->have_posts() ) : $query->the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('project-item'); ?>>
            <a href="<?php the_permalink(); ?>">
                <h2 class="entry-title">
                    <?php the_title(); ?>
                </h2>
                <div class="product-image">
                    <?php
                    if (has_post_thumbnail()) {
                        the_post_thumbnail('large'); 
                    } else {
                        echo '<img src="' . esc_url(get_template_directory_uri() . '/path/to/placeholder-image.jpg') . '" alt="Placeholder Image">';
                    }
                    ?>
                </div>
                <div class="product-description">
                    <?php the_excerpt(); ?>
                </div>
            </a>
        </article>
        <?php
    endwhile;
    echo '</div>'; 
    wp_reset_postdata();
else :
    echo 'No projects found.';
endif;

get_footer();
