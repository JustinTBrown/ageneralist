// require(["main/jquery-1.11.1.min"], function(util) {});

require(["main/particles"], function() {
	console.log("particles.js loaded");
});
require(["jquery-2.1.3.min"], function() {
	console.log("jquery loaded");
});
require(["main/highlight.pack"], function() {
	hljs.initHighlightingOnLoad();
	// console.log("hljs loaded");
});

require(["main/iconic.min"], function() {
	console.log("iconic.min.js loaded");
});
require(["main/google-analytics"], function() {});
require(["main/blog"], function() {
	console.log("blog.js loaded");
});
