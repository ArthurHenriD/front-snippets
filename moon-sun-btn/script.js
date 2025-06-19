document.addEventListener("DOMContentLoaded", () => {
	const toggleBtn = document.getElementById('toggleTheme');

	toggleBtn.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		const isDarkMode = document.body.classList.contains('dark-mode');
	});
});