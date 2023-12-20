$(document).ready(function () {
	function calculateBackgroundSize() {
		return Math.max(
			624 +
				Math.floor(
					$(document).scrollTop() *
						(new Image().width - 624 / Math.min(468, $(window).height()))
				),
			0
		);
	}

	$("#container").css({
		"background-size": calculateBackgroundSize() + "px",
	});

	$(window).scroll(function () {
		$("#container").css({
			"background-size": calculateBackgroundSize() + "px",
		});
	});

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
