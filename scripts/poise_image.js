document.addEventListener("DOMContentLoaded", function () {
	const freireImages = [
		"../../images/bottom/poise/sophie_scholl.png",
		"../../images/bottom/poise/tank_man.png",
		"../../images/bottom/poise/tousaint_loverture.png"
	];

	const freireImage = document.getElementById("poise-image");

	if (freireImage) {
		// Function to pick and set a different random image
		function setRandomImage() {
			const currentSrc = freireImage.getAttribute("src");
			const filteredImages = freireImages.filter(img => img !== currentSrc);

			// Randomly select from the filtered list
			const newSrc = filteredImages[Math.floor(Math.random() * filteredImages.length)];
			freireImage.setAttribute("src", newSrc);
		}

		// Set initial image
		setRandomImage();

		// Change image on click
		freireImage.addEventListener("click", setRandomImage);
	}
});
