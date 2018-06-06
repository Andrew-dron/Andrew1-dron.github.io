$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner').delay(4500);
    $spinner.fadeOut();
    $preloader.delay(4500).fadeOut('fast');
});