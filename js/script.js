$(document).ready(function () {
	var imageWidth = new Image().width;
	var $window = $(window);
	var $container = $("#container");
	function calculateBackgroundSize() {
		return Math.max(
			624 +
				Math.floor(
					$window.scrollTop() *
						(imageWidth - 624 / Math.min(468, $window.height()))
				),
			0
		);
	}
	function updateBackgroundSize() {
		$container.css("background-size", calculateBackgroundSize() + "px");
	}
	$window.scroll(updateBackgroundSize).scroll();
	$(".player").click(function () {
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
			$(".active").not($(this)).removeClass("active");
		}
		$(this)
			.closest(".section")
			.find(".side-title, .section-title")
			.toggleClass("active");
		$(this).siblings(".position-title").toggleClass("active");
	});
	$(".player").hover(
		function () {
			$(this)
				.closest(".section")
				.find(".side-title, .section-title")
				.addClass("highlight");
			$(this).siblings(".position-title").addClass("highlight");
			$(".section, .position-title, .player")
				.not($(this).closest(".section"))
				.addClass("inactive");
			$(this)
				.removeClass("inactive")
				.siblings(".position-title")
				.removeClass("inactive");
		},
		function () {
			$(".highlight, .inactive").removeClass("highlight inactive");
		}
	);
});
