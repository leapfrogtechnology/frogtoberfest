document.addEventListener('DOMContentLoaded', function () {
	// Mobile menu Drawer
	const toggleMenu = () => {
		const menu = document.querySelector('.nav');
		const overlay = document.querySelector('.overlay');

		menu.classList.toggle('is-active');
		overlay.classList.toggle('is-active');
	};

	const buttons = document.querySelectorAll(
		'.menu-toggle, .overlay, .menu-close'
	);

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', toggleMenu);
	}

	// Header Sticky
	window.addEventListener('scroll', () => {
		const header = document.querySelector('header');
		if (window.scrollY > 200) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});
});
