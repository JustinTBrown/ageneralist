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
      // color: '#F0A459',
      // color: '#FFC286',
      shape: 'circle',
      opacity: 1,
      size: 2.5,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 250,
        color: '#fff',
        // color: '#F0A459',
        // color: '#FFC286',
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

// FUTURE CHART -------------------------------------------------------------------------------------------------------------------------------

var data = {
  // A labels array that can contain any sort of values
  // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [1, 2, 3, 6, 12, 21, 33]
  ]
};
var options = {
  axisX: {
    showGrid: false
  },
  chartPadding: 0,
  // fullWidth: true,
  // stroke-width: 20px,
  showArea: true
};
var futureChart = new Chartist.Line('.ct-chart', data, options);

var easeOutQuad = function (x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
};

var $chart = $('.ct-chart');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-point', function() {
  var $point = $(this),
    value = $point.attr('ct:value'),
    seriesName = $point.parent().attr('ct:series-name');

  $point.animate({'stroke-width': '30px'}, 300, easeOutQuad);
  $toolTip.html(value + '%').show();
});

$chart.on('mouseleave', '.ct-point', function() {
  var $point = $(this);

  $point.animate({'stroke-width': '10px'}, 300, easeOutQuad);
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
  });
});

// var data = {
//   labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
//   datasets: [
//     {
//       label: "My Second dataset",
//       fillColor: "rgba(219, 70, 50, 0.7)",
//       strokeColor: "#DB4632",
//       pointColor: "#fff",
//       pointStrokeColor: "#DB4632",
//       pointHighlightFill: "#fff",
//       pointHighlightStroke: "rgba(151,187,205,1)",
//       data: [1, 2, 3, 6, 12, 21, 33],
//     }
//   ]
// };
// var steps = 2;
// var options = {
//   bezierCurve: false,
//   datasetStrokeWidth: 6,
//   pointDotRadius: 9,
//   pointDotStrokeWidth: 4,
//   responsive: true,
//   scaleShowGridLines: false,
//   scaleShowLabels: true,
//   scaleOverride: true,
//   scaleSteps: steps,
//   scaleStepWidth: Math.ceil(40 / steps),
//   scaleStartValue: 0,
//   showTooltips: true
// };
// var canvas = document.getElementById("future-chart");
// var ctx = canvas.getContext("2d");
// var myLineChart = new Chart(ctx).Line(data, options);