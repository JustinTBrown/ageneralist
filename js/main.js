// require(["main/jquery-1.11.1.min"], function(util) {});

require(["main/particles"], function() {
	console.log("particles.js loaded");
});
require(["jquery"], function() {
	console.log("jquery loaded");
});
require(["main/highlight.pack"], function() {
	hljs.initHighlightingOnLoad();
	// console.log("hljs loaded");
});

require(["main/iconic.min"], function() {
	console.log("iconic.min.js loaded");
});
require(["../bower_components/chartjs/Chart.js?v=1.12"], function() {
	console.log("Chart.js loaded");
});
// require(["../bower_components/chartjs/Chart.js?v=1"], function(Chart){
// 	// Chart.defaults.global.responsive = true;
//   // Use Chart.js as normal here.

//   // Chart.noConflict restores the Chart global variable to it's previous owner
//   // The function returns what was previously Chart, allowing you to reassign.
//   var Chartjs = Chart.noConflict();

// });
require(["main/google-analytics"], function() {});
require(["main/blog"], function() {
	console.log("blog.js loaded");
});
