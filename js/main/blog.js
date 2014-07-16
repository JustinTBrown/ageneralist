// Mobile Navigation
$('.mobile-toggle').click(function() {
    console.log("script loading?");
    if ($('.site-header').hasClass('nav-overlay')) {
        $('.site-header').removeClass('nav-overlay');
    } else {
        $('.site-header').addClass('nav-overlay');
    };
    if ($('.nav-links').hasClass('is-closed-for-mobile')) {
        // console.log("nav-links is closed");
        $('.nav-links').removeClass('is-closed-for-mobile');
        $('.nav-links').addClass('is-open-for-mobile');
    } else {
        $('.nav-links').removeClass('is-open-for-mobile');
        $('.nav-links').addClass('is-closed-for-mobile');
    };
});

// Project Shots
var currentHeight = 0;
var currentWidth = 0;
$(window).on("load", function() {
    //get the natural page height -set it in variable above.
    $('.project-shot').each(function() {
        currentHeight = $('img', this).outerHeight();
        $('.project-overlay', this).css('height', currentHeight);
        currentWidth = $('img', this).outerWidth();
        $('.project-overlay', this).css('width', currentWidth);
    })
});
$(window).on("resize", function() {
    //get the natural page height -set it in variable above.
    $('.project-shot').each(function() {
        currentHeight = $('img', this).outerHeight();
        $('.project-overlay', this).css('height', currentHeight);
        currentWidth = $('img', this).outerWidth();
        $('.project-overlay', this).css('width', currentWidth);
    })
});  

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