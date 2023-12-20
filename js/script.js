$(document).ready(function () {
	function calculateLogoSize() {
		return Math.max(
			624 +
				Math.floor(
					$(document).scrollTop() *
						(new Image().width - 624 / Math.min(468, $(window).height()))
				),
			0
		);
	}

	function updateLogoSize() {
		$("#container").css("background-size", calculateLogoSize() + "px");
	}

	$(window).scroll(updateLogoSize);

	$(".player").click(function () {
		$(this).toggleClass("active");
		$(".active").not($(this)).removeClass("active");
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
		},
		function () {
			$(".highlight").removeClass("highlight");
		}
	);
});
