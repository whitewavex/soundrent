$(document).ready(function() {
    
//    BURGER MENU
    
    $('.open-nav').click(function() {
        $('.page').toggleClass('nav-open');
        $('.burger').toggleClass('open');
        $('.page__wrap').toggleClass('open');
        $(this).toggleClass('open');
    });
    
//    SLICK SLIDER
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
});