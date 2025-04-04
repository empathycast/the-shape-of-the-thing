document.addEventListener("DOMContentLoaded", function () {
	const freireImages = [
		"../../images/bottom/freire/paulo_freire_colour_1.png",
		"../../images/bottom/freire/paulo_freire_colour_2.png",
		"../../images/bottom/freire/paulo_freire_colour_3.png",
		"../../images/bottom/freire/paulo_freire_colour_4.png",
		"../../images/bottom/freire/paulo_freire_monochrome.png",
		"../../images/bottom/freire/paulo_freire_young.png",
		"../../images/bottom/freire/paulo_freire_youngish.png",
		"../../images/bottom/freire/freire_pencil.png"
	];

	const freireImage = document.getElementById("freire-image");

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
