// Functions
function carouselWidth() {

    // $('.carousel-holder').width($(window).width() - ( wid ) );
    if ($('.gallery-swiper').length !== 0) {
        let containerWidth = $('.appartments .container').width();
        let wid = ($(window).width() - containerWidth) / 2;
        // alert($(window).width())
        // console.log(containerWidth, wid);
        // console.log($(window).width() - ( wid ));
        if ($(window).width() <= 576) {
            $('.carousel-holder').width('100%');
        } else {
            $('.carousel-holder').width($(window).width() - (wid));
        }
        const swiper2 = new Swiper('.gallery-swiper', {
            // Default parameters
            // slidesPerView: 1,
            spaceBetween: 10,
            direction: 'horizontal',
            autoplay: 5000,
            autoplayStopOnLast: false,
            slidesOffsetBefore: 1,
            centeredSlides: false,
            // Navigation arrows
            navigation: {
                nextEl: '.carousel-button-next',
                prevEl: '.carousel-button-prev',
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                // when window width is >= 680px
                680: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                840: {
                    slidesPerView: 2.8,
                    spaceBetween: 40
                },
                // when window width is >= 640px
                991: {
                    slidesPerView: 3.5,
                    spaceBetween: 40
                },
                // when window width is >= 640px
                1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 40
                }
            },
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true
        });
        swiper2.update();

        $(window).resize(function () {
            swiper2.update();
        });
    }
}

$(document).ready(function () {
    "use strict";
    // Carousel Width
    carouselWidth();
    $(window).resize(function () {
        carouselWidth();
    });

    if ($('.testimonial-swiper').length > 0) {
        new Swiper('.testimonial-swiper', {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                }
            }
        });
    }
});