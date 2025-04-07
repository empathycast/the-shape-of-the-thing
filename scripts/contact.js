(function () {
	emailjs.init({
		publicKey: 'inIZcPYGCIyeJ7l_E',
	});
})();

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contact-form');
	const statusMessage = document.getElementById('status-message');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		statusMessage.innerText = "sending...";

		emailjs.sendForm('service_j5m7d0s', 'template_mnibgkh', this)
			.then(function () {
				statusMessage.innerText = "message sent successfully :)";
				form.reset();
			}, function (error) {
				statusMessage.innerText = "failed to send message :( try again";
				console.error('EmailJS error:', error);
			});
	});
});