$(document).ready(function(){
    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: true,
        prevArrow: '.slider__arrow-prev',
        nextArrow: '.slider__arrow-next'
    })
});