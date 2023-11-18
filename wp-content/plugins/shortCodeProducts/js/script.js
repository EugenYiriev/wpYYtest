jQuery(document).ready(function ($) {
    var popup = $('#product-popup');

    $('.product-info').on('click', function () {
        var productId = $(this).data('product-id');

        $.ajax({
            url: myPlugin.ajaxurl,
            type: 'POST',
            data: {
                action: 'get_product_info',
                product_id: productId,
                nonce: 'your_ajax_nonce'
            },
            success: function (response) {
                popup.html(response.data).show();
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#product-popup, .product-info').length) {
            popup.hide();
        }
    });

    $(document).on('click', '.close-popup', function () {
        popup.hide();
    });
});
