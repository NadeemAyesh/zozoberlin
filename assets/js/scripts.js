 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // مرة وحدة بس
      }
    });
  }, {
    threshold: 0.15 // أول ما يدخل شوي على الشاشة
  });

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

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

    if ($('.appartmaent-item-slides').length > 0) {
        new Swiper('.appartmaent-item-slides', {
            slidesPerView: 1,
            spaceBetween: 0,
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // 1. إعداد سلايدر المصغرات
var swiperThumbs = new Swiper(".mySwiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: "vertical", // هذا ما يجعلها عمودية
  freeMode: true,
  watchSlidesProgress: true,
});

// 2. إعداد السلايدر الرئيسي وربطه بالمصغرات
var swiperMain = new Swiper(".mySwiperMain", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperThumbs, // ربط المصغرات هنا
  },
});
});