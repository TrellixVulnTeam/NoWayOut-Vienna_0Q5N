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
    slidesPerView: 5,
    slidesPerView: 'auto'
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


// hide
$('.linz').hide();
$('.innsbruck').hide();

// vienna
$('#vienna-btn').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(400);
    $('body').addClass('lock');
});
$('#vienna-btn').click(function() {
    $('.popup').fadeOut(400);
    $('body').removeClass('lock');
    $('.linz,.innsbruck').hide()
    $('.vienna').slideDown(600)
    $('#vienna-btn').addClass('active');
    $('#linz-btn,#innsbruck-btn').removeClass('active');
});

// linz
$('#linz-btn').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(400);
    $('body').addClass('lock');
});
$('#linz-btn').click(function() {
    $('.popup').fadeOut(400);
    $('body').removeClass('lock');
    $('.vienna,.innsbruck').hide()
    $('.linz').slideDown(600)
    $('#linz-btn').addClass('active');
    $('#vienna-btn,#innsbruck-btn').removeClass('active');
});

// innsbruck
$('#innsbruck-btn').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(400);
    $('body').addClass('lock');
});
$('#innsbruck-btn').click(function() {
    $('.popup').fadeOut(400);
    $('body').removeClass('lock');
    $('.vienna,.linz').hide()
    $('.innsbruck').slideDown(600)
    $('#innsbruck-btn').addClass('active');
    $('#vienna-btn,#linz-btn').removeClass('active');
});