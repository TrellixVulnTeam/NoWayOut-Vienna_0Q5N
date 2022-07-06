// burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__navbar,.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

// swiper
new Swiper('.games__content', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerGroup: 1,
    breakpoints: {
        1800: {
            slidesPerView: 4,
        }
    }
});

// Popup
$('.header__city').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(400);
    $('body').addClass('lock');
});

$('.popup__group-close').click(function() {
    $('.popup').fadeOut(400);
    $('body').removeClass('lock');
});

// cookies 
$(document).ready(function () {
    $('.cookies__btn').click(function (event) {
        $('.cookies').css({
            'display': 'none'
        });
    });
});

// scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('.footer__arrow').fadeIn();
    } else {
    $('.footer__arrow').fadeOut();
    }
    });
    $('.footer__arrow').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });