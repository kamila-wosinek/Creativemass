$(document).ready(function () {
	$('ul.smallImg li img').click(function () {
	    $('ul.smallImg li img.zoom').removeClass();
		$(this).addClass("zoom");
	});
});