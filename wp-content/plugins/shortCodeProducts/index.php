<?php
/**
 * Plugin Name: Task 1 - Shortcode Products
 * Plugin URI: #
 * Description: Create a shortcode to display a list of products with the category "bags"
 * Version: 0.1
 * Author: Yevhenii Yuruev
 * Author URI: #
 **/
wp_enqueue_script('custom-script', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), '1.0', true);

function bags_products($atts)
{
    $atts = shortcode_atts(
        array(
            'category' => 'bags',
            'posts_per_page' => 3,
        ),
        $atts,
        'bags_products'
    );

    $args = array(
        'post_type' => 'product',
        'posts_per_page' => $atts['posts_per_page'],
        'tax_query' => array(
            array(
                'taxonomy' => 'product_cat',
                'field' => 'slug',
                'terms' => $atts['category'],
            ),
        ),
        'orderby' => 'date',
        'order' => 'DESC',
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        ob_start();
        echo '<div class="product-container">';
        while ($query->have_posts()) {
            $query->the_post();
            $product_id = get_the_ID();
            ?>
            <div class="product-item">
                <a href="<?php the_permalink(); ?>">
                    <h2>
                        <?php the_title(); ?>
                    </h2>
                    <div class="product-image">
                        <?php the_post_thumbnail(); ?>
                    </div>
                    <div class="product-description">
                        <?php the_excerpt(); ?>
                    </div>
                </a>

                <button class="product-info" data-product-id="<?php echo esc_attr($product_id); ?>">More info</button>
            </div>
            <?php
        }
        echo '</div>';
        wp_reset_postdata();

        echo '<div id="product-popup"></div>';

        return ob_get_clean();
    } else {
        return 'Empty';
    }
}

add_shortcode('bags_products', 'bags_products');

//Ajax add more info
function get_product_info()
{
    $product_id = isset($_POST['product_id']) ? absint($_POST['product_id']) : 0;
    $product = get_post($product_id);

    if (!$product || 'product' !== $product->post_type) {
        wp_send_json_error('Invalid product');
        return;
    }

    $product_data = array(
        'title' => get_the_title($product),
        'content' => apply_filters('the_content', $product->post_content),
        'thumbnail' => get_the_post_thumbnail($product_id, 'medium'),
    );
    ?>
    <div class="product-info-popup">
        <button class="close-popup">X</button>
        <h2>
            <?php echo esc_html($product_data['title']); ?>
        </h2>
        <div class="product-thumbnail">
            <?php echo $product_data['thumbnail']; ?>
        </div>
        <div class="product-content">
            <?php echo $product_data['content']; ?>
        </div>
    </div>
    <?php
    $popup_content = ob_get_clean();

    wp_send_json_success($popup_content);
}
add_action('wp_ajax_get_product_info', 'get_product_info');
add_action('wp_ajax_nopriv_get_product_info', 'get_product_info');




