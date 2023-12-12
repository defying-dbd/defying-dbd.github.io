logoSize = function () {
  var theLogo = $("#container");
  var newImage = new Image();
  newImage.src = theLogo.attr("src");
  var imgWidth = newImage.width;

  var maxScrollDistance = 468;

  maxScrollDistance = Math.min(maxScrollDistance, $(window).height());

  var widthAtMax = 468 * 1.333;

  var widthDiff = imgWidth - widthAtMax;

  var pixelsPerScroll = widthDiff / maxScrollDistance;

  $(window).scroll(function () {
    var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

    var scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);

    // Adjust this line to make the image disappear
    var zoomedWidth = Math.max(widthAtMax + scrollChangePx, 0);

    $(".container").css("background-size", zoomedWidth);
  });
};

logoSize();
