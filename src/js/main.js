$(document).ready(function() {
    $('.open-nav').click(function() {
        $('.page').toggleClass('nav-open');
        $('.burger').toggleClass('open');
        $('.page__wrap').toggleClass('open');
        $(this).toggleClass('open');
    });
});