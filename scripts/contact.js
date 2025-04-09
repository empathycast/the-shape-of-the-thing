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

		const name = form.elements['name'];
		const email = form.elements['email'];
		const message = form.elements['message'];

		// Basic email format regex
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Custom validation
		if (!name.value.trim()) {
			statusMessage.innerText = "please enter your name";
			name.focus();
			return;
		}
		if (!email.value.trim()) {
			statusMessage.innerText = "please enter your email";
			email.focus();
			return;
		}
		if (!emailPattern.test(email.value.trim())) {
			statusMessage.innerText = "please enter a valid email";
			email.focus();
			return;
		}
		if (!message.value.trim()) {
			statusMessage.innerText = "please enter a message";
			message.focus();
			return;
		}

		statusMessage.innerText = "sending...";
		
		emailjs.sendForm('service_j5m7d0s', 'template_mnibgkh', form)
		  .then(function () {
				statusMessage.innerText = "message sent successfully :)";
				form.reset();
		  }, function (error) {
				const errorText = (error.text || 'unknown error').slice(0, 25);
				statusMessage.innerHTML = `failed to send message :( <br>${errorText}`;
				console.error('EmailJS error:', error);
		  });
	});
});
