$(document).ready(function() {
    
//    BURGER MENU
    
    $('.open-nav').click(function() {
        $('.page').toggleClass('nav-open');
        $('.burger').toggleClass('open');
        $('.page__wrap').toggleClass('open');
        $(this).toggleClass('open');
    });
    
//    SLICK SLIDER TITLE   
    
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
    
//    SLICK SLIDER WORK
    
    $('.slider-work__container').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        centerPadding: '40px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});