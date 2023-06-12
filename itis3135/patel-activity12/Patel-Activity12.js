$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 22,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        speed: 2500,
        pagerType: 'short',
        pause: 3000,
    });
})