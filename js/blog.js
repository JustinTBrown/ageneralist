// // Sticky Header
// $(window).scroll(function() {
//     // console.log("script loading?");

//     if ($(window).scrollTop() > 100) {
//         $('.site-header').addClass('sticky');
//     } else {
//         $('.site-header').removeClass('sticky');
//     }
// });

// Mobile Navigation
$('.mobile-toggle').click(function() {
    console.log("script loading?");
    if ($('.site-header').hasClass('open-nav')) {
        $('.site-header').removeClass('open-nav');
    } else {
        $('.site-header').addClass('open-nav');
    };
    if ($('.site-nav').hasClass('is-closed')) {
        // console.log("site-nav is closed");
        $('.site-nav').removeClass('is-closed');
        $('.site-nav').addClass('is-open');
    } else {
        $('.site-nav').removeClass('is-open');
        $('.site-nav').addClass('is-closed');
    };
});

// $('.site-header li a').click(function() {
//     if ($('.site-header').hasClass('open-nav')) {
//         $('.navigation').removeClass('open-nav');
//         $('.site-header').removeClass('open-nav');
//     }
// });

// $('.site-header li').click(function() {
//     if ($(''))
// });

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});