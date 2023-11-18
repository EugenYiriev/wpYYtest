<?php
/**
 * The template for displaying single projects.
 */

get_header();

while (have_posts()):
    the_post();
    ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('projects-single'); ?>>
        <header class="entry-header">
            <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </header>

        <div class="entry-content">
            <?php the_excerpt(); ?>
        </div>

        <div class="project-image">
            <?php
            if (has_post_thumbnail()) {
                the_post_thumbnail('large');
            } else {
                echo '<img src="' . esc_url(get_template_directory_uri() . '/path/to/placeholder-image.jpg') . '" alt="Placeholder Image">';
            }
            ?>
        </div>

        <div class="project-description">
            <?php the_content(); ?>
        </div>

        <?php if (comments_open() || get_comments_number()): ?>
            <div class="comments-area">
                <?php comments_template(); ?>
            </div>
        <?php endif; ?>

    </article>

<?php endwhile;

get_footer();
