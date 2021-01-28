// Toggle Customization and Commercialization [Image]
function showCustomization() {
    $('#cus-com-img').fadeOut(300, function () {
        $('#cus-com-img').attr('src', 'images/customization.png')
        $('#cus-com-img').fadeIn(300);
    });
}

function showCommercialization() {
    $('#cus-com-img').fadeOut(300, function () {
        $('#cus-com-img').attr('src', 'images/commercialization.png')
        $('#cus-com-img').fadeIn(300);
    });
}