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
    
//    REVIEWS SLIDER
    
    $('.slider-reviews').slick({
        dots: true,
        arrows: false,
        speeed: 3000,
        slidesToShow: 2,
        vertical: true
    });
    
//    CLIENTS SLIDER
    
    $('.clients-slider').slick({
        slidesToShow: 6,
        prevArrow: '<button type="button" class="clients-slider__arrow"></button>',
        nextArrow: '<button type="button" class="clients-slider__arrow clients-slider__arrow_next"></button>',
                responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1040,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        
    });
});