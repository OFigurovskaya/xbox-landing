$(document).ready(function() {
$('.homePage__carousel__slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    slidesToScroll: 1,
    easing: 'ease',
    infinite: true,
    autoplay: false,
    autoPlaySpeed: 1000,
    touchTreshHold: 15,
    waitForAnimate: false,
    centerMode: false,
    cssEase: 'ease-in',
});
});

$(document).ready(function() {
    $('.homePage__exclusive__slider').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        easing: 'ease',
        infinite: true,
        autoplay: false,
        autoPlaySpeed: 1000,
        touchTreshHold: 15,
        waitForAnimate: false,
        centerMode: false,
        cssEase: 'ease-in',
    });
    });


