document.addEventListener("DOMContentLoaded", () => {
	document.getElementById('toggleTheme').addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
	});
});