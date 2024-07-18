$(window).on('load', function() {
    $('#custom-loader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
        $('body').addClass('loaded');
    });
});
