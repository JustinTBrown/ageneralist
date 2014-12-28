// require(['jquery'], function() {
//     console.log('jquery required from blog.js');
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


/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */


function pJS_desktop(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}



/* MOBILE / TABLET */

function pJS_mobile(){
  particlesJS('particles-js', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 40,
      line_linked: {
        enable_auto: false,
        distance: 250,
        color: '#fff',
        opacity: 0.5,
        width: 1,
        condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 3
      }
    },
    interactivity: {
      enable: false,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push',
          nb: 4
        }
      }
    },
    retina_detect: true
  });
}


/* LAUNCH */

if(window.innerWidth > 1100){
  pJS_desktop();
}else{
  pJS_mobile();
}

/* on resize */

window.addEventListener('resize', function() {
  checkOnResize();
}, true);

function checkOnResize(){
  if(window.innerWidth > 1100){
    if(pJS.particles.nb != 150){
      console.log('desktop mode')
      pJS.fn.vendors.destroy();
      pJS_desktop();
    }
  }else{
    if(pJS.particles.nb == 150){
      console.log('mobile mode');
      pJS.fn.vendors.destroy();
      pJS_mobile();
    }
  }
}


// particlesJS('particles-js', {
//   particles: {
//     // color: '#fff',
//     // color: '#353535',
//     color: '#fff',
//     shape: 'circle', // "circle", "edge" or "triangle"
//     opacity: 0.8,
//     size: 3,
//     size_random: true,
//     nb: 170,
//     line_linked: {
//       enable_auto: true,
//       // distance: 100,
//       distance: 120,
//       // color: '#fff',
//       // color: '#353535',
//       color: '#fff',
//       opacity: 0.8,
//       width: 1,
//       condensed_mode: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 600
//       }
//     },
//     anim: {
//       enable: true,
//       speed: 2
//     }
//   },
//   interactivity: {
//     enable: true,
//     mouse: {
//       distance: 250
//     },
//     detect_on: 'canvas', // "canvas" or "window"
//     mode: 'grab',
//     line_linked: {
//       opacity: .5
//     },
//     events: {
//       onclick: {
//         enable: true,
//         mode: 'push', // "push" or "remove" (particles)
//         nb: 4
//       }
//     }
//   },
//   /* Retina Display Support */
//   retina_detect: true
// });

// PARALLAX WINDOW -------------------------------------------------------------------------------------------------------------------------

$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  };
};

// FUTURE CHAERT -------------------------------------------------------------------------------------------------------------------------------

// $(document).ready(function() {
//   var ctx = $("#future-chart").get(0).getContext("2d");
// });
// // document.getElementById('#future-chart');
// // var ctx = $("#future-chart").get(0).getContext("2d");
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
// var myLineChart = new Chart(ctx).Line(data, options);

// =======
// function init() {
//   // Run your javascript code here
//   // document.getElementById('#future-chart');
//   var ctx = $("#future-chart").get(0).getContext("2d");
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
// //   var myLineChart = new Chart(ctx).Line(data, options);
// // }
// // document.addEventListener("DOMContentLoaded", init, false);

//   console.log("test");
//   // var canvas = document.getElementById("canvas");
//   var canvas = $("#future-chart");
//   var ctx = canvas.getContext("2d");
//   var futureChart = new Chart(ctx).Line(data, options);
//   console.log("chart script?");
// function init() {
//   var data = [
//       {
//           value: 20,
//           color:"#637b85"
//       },
//       {
//           value : 30,
//           color : "#2c9c69"
//       },
//       {
//           value : 40,
//           color : "#dbba34"
//       },
//       {
//           value : 10,
//           color : "#c62f29"
//       }

//   ];
//   var canvas = document.getElementById("future-chart");
//   var ctx = canvas.getContext("2d");
//   new Chart(ctx).Doughnut(data);
// };


// function future_Chart() {
//   var data = [
//       {
//           value: 20,
//           color:"#637b85"
//       },
//       {
//           value : 30,
//           color : "#2c9c69"
//       },
//       {
//           value : 40,
//           color : "#dbba34"
//       },
//       {
//           value : 10,
//           color : "#c62f29"
//       }

//   ];
//   var canvas = document.getElementById("future-chart");
//   var ctx = canvas.getContext("2d");
//   new Chart(ctx).Doughnut(data);
// };
// future_Chart();


// function init() {
//   var data = [
//       {
//           value: 20,
//           color:"#637b85"
//       },
//       {
//           value : 30,
//           color : "#2c9c69"
//       },
//       {
//           value : 40,
//           color : "#dbba34"
//       },
//       {
//           value : 10,
//           color : "#c62f29"
//       }

//   ];
//   var canvas = document.getElementById("future-chart");
//   var ctx = canvas.getContext("2d");
//   new Chart(ctx).Doughnut(data);
// };

console.log("test");
var data = [
    {
        value: 20,
        color:"#637b85"
    },
    {
        value : 30,
        color : "#2c9c69"
    },
    {
        value : 40,
        color : "#dbba34"
    },
    {
        value : 10,
        color : "#c62f29"
    }

];
var canvas = document.getElementById("future-chart");
var ctx = canvas.getContext("2d");
new Chart(ctx).Doughnut(data);