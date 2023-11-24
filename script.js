$(document).ready(function () {
    showPage('blog');

    $('nav a').click(function (e) {
        e.preventDefault();
        var page = $(this).data('page');
        showPage(page);
    });

    $('#backButton').click(function () {
        showPage('blog');
    });

    $('.burger-menu').click(function () {
        $('nav ul').slideToggle();
    });

    function showPage(page) {
        $('.content-section').hide();
        $('#' + page).show();
    }
});


