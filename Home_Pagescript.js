const darkmodeButton = document.getElementById('darkmodebtn');

if (darkmodeButton) {
	darkmodeButton.addEventListener('click', function () {
		const isDark = document.body.classList.toggle('dark');
		darkmodeButton.textContent = isDark ? 'الوضع النهاري' : 'الوضع الليلي';
		darkmodeButton.setAttribute('aria-pressed', String(isDark));
	});
}