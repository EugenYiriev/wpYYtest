<?php

function enqueue_styles()
{
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'enqueue_styles');

// add ajaxurl
wp_localize_script('custom-script', 'myPlugin', array('ajaxurl' => admin_url('admin-ajax.php')));

// add custom post type
function add_user_position_field($user)
{
    ?>
    <h3>
        <?php _e('Additional Information', 'your_text_domain'); ?>
    </h3>

    <table class="form-table">
        <tr>
            <th><label for="user_position">
                    <?php _e('Position', 'your_text_domain'); ?>
                </label></th>
            <td>
                <input type="text" name="user_position" id="user_position"
                    value="<?php echo esc_attr(get_user_meta($user->ID, 'user_position', true)); ?>"
                    class="regular-text" /><br />
                <span class="description">
                    <?php _e('Enter your position.', 'your_text_domain'); ?>
                </span>
            </td>
        </tr>
    </table>
    <?php
}

add_action('show_user_profile', 'add_user_position_field');
add_action('edit_user_profile', 'add_user_position_field');

//Save user position field
function save_user_position_field($user_id)
{
    if (current_user_can('edit_user', $user_id)) {
        update_user_meta($user_id, 'user_position', sanitize_text_field($_POST['user_position']));
    }
}

add_action('personal_options_update', 'save_user_position_field');
add_action('edit_user_profile_update', 'save_user_position_field');

// add author info shortcode for singl post
function author_info_shortcode($atts)
{
    ob_start();

    $author_id = get_the_author_meta('ID');
    $author_position = get_user_meta($author_id, 'user_position', true);

    $author_data = array(
        'image' => get_avatar_url($author_id, array('size' => 150)),
        'name' => get_the_author_meta('display_name'),
        'biography' => get_the_author_meta('description'),
        'position' => $author_position,
        'author_page' => get_author_posts_url($author_id),
    );

    ?>
    <div class="author-info">
        <div class="author-image">
            <img src="<?php echo esc_url($author_data['image']); ?>" alt="<?php echo esc_attr($author_data['name']); ?>">
        </div>
        <div class="author-details">
            <h2>
                <?php echo esc_html($author_data['name']); ?>
            </h2>
            <p style="font-weight: bold;">
                <?php echo esc_html($author_data['position']); ?>
            </p>
            <p>
                <?php echo esc_html($author_data['biography']); ?>
            </p>
            <a href="<?php echo esc_url($author_data['author_page']); ?>" class="button">Read Full Bio</a>
        </div>
    </div>
    <?php

    return ob_get_clean();
}

add_shortcode('author_info', 'author_info_shortcode');
