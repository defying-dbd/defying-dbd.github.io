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

    // For small screens (e.g., max width 1080 pixels), you may want to adjust the scaling factor
    var scaleFactor = 2.0; // Adjust this value as needed

    // Apply a maximum width for mobile devices
    if ($(window).width() <= 1080) {
      zoomedWidth = Math.min(zoomedWidth, 1080 * scaleFactor);
    }

    $(".container").css("background-size", zoomedWidth);
  });
};

logoSize();
