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
// $(.project-overlay).css('height',$(.project-shot).innerHeight());
var currentHeight = 0;
var currentWidth = 0;
// $(document).ready(function() {
$(window).load(function() {
    //get the natural page height -set it in variable above.

    // // Pseudo Code
    // For each project-shot
    //     get the child img height
    //     set the child overlay height to match

    $('.project-shot').each(function() {
        currentHeight = $('img', this).outerHeight();
        console.log("currentHeight = " + currentHeight);
        $('.project-overlay', this).css('height', currentHeight);

    })

    // $('.project-overlay').each(function() {
    //     currentHeight = $('.project-shot img').outerHeight();
    //     console.log("currentHeight = " + currentHeight);
    //     $(this).css('height', currentHeight);    
    // });
    currentWidth = $('.project-shot img').outerWidth();
    $('.project-overlay').css('width', currentWidth);

});

// $('.site-header li a').click(function() {
//     if ($('.site-header').hasClass('nav-overlay')) {
//         $('.navigation').removeClass('nav-overlay');
//         $('.site-header').removeClass('nav-overlay');
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