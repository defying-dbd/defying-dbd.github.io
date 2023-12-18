$(document).ready(function () {
	var $container = $("#container");
	var newImage = new Image();
	newImage.src = $container.attr("src");
	var imgWidth = newImage.width;
	var maxScrollDistance = Math.min(468, $(window).height());
	var widthAtMax = 624;
	var widthDiff = imgWidth - widthAtMax;
	var pixelsPerScroll = widthDiff / maxScrollDistance;

	$(window).scroll(function () {
		var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);
		var scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);
		var zoomedWidth = Math.max(widthAtMax + scrollChangePx, 0);
		$container.css({
			"background-size": zoomedWidth,
		});
	});
});
