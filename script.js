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

    function showPage(page) {
        $('.content-section').hide();
        $('#' + page).show();
    }
});


