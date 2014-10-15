// require(["main/jquery-1.11.1.min"], function(util) {});

require(["jquery"], function() {
	console.log("jquery loaded");
});
require(["main/blog"], function() {
	console.log("blog.js loaded");
});
require(["main/highlight.pack"], function() {
	hljs.initHighlightingOnLoad();
	console.log("hljs loaded");
});
require(["main/google-analytics"], function() {});
