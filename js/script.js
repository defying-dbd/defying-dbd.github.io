$(document).ready(function () {
	var container = $(".container");
	var classActive = "active";
	var classHighlight = "highlight";
	var classPosTitle = ".position-title";
	var classSection = "section.side-section";
	var classSideSectionTitle = ".side-title,.section-title";
	var player = $(".player");

	function updateBackground() {
		var windowHeight = $(window).height();
		var imageWidth = new Image().width;
		var sizeCalc = Math.max(
			624 +
				Math.floor(
					$(this).scrollTop() * (imageWidth - 624 / Math.min(468, windowHeight))
				),
			0
		);
		container.css("background-size", sizeCalc + "px");
	}

	updateBackground();
	$(window).scroll(function () {
		updateBackground();
	});

	player.click(function () {
		$(this).toggleClass(classActive);
		if ($(this).hasClass(classActive)) {
			$("." + classActive)
				.not($(this))
				.removeClass(classActive);
		}
		$(this)
			.closest(classSection)
			.find(classSideSectionTitle)
			.toggleClass(classActive);
		$(this).siblings(classPosTitle).toggleClass(classActive);
	});
	player.hover(
		function () {
			$(this)
				.closest(classSection)
				.find(classSideSectionTitle)
				.addClass(classHighlight);
			$(this).siblings(classPosTitle).addClass(classHighlight);
		},
		function () {
			$("." + classHighlight).removeClass(classHighlight);
		}
	);
});
