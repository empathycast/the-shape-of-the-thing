function applyDarkModePreference() {
    const body = document.body;
    const toggleImg = document.querySelector('.toggle-img');

    if (!toggleImg) return; // In case toggle not present on some pages

    const isDark = localStorage.getItem("dark-mode") === "true";
    body.classList.toggle("dark-mode", isDark);
    toggleImg.src = isDark ? toggleImg.src.replace("images/dark.png", "images/light.png") : toggleImg.src.replace("images/light.png", "images/dark.png");
}

function toggleDarkMode() {
    const body = document.body;
    const toggleImg = document.querySelector('.toggle-img');

    if (!toggleImg) return;

    const isDark = body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "true" : "false");
    toggleImg.src = isDark ? toggleImg.src.replace("images/dark.png", "images/light.png") : toggleImg.src.replace("images/light.png", "images/dark.png");
}

// Ensure dark mode preference is applied when the page loads
document.addEventListener("DOMContentLoaded", applyDarkModePreference);

// Ensure the latest dark mode choice is applied even when using the back button
window.addEventListener("pageshow", applyDarkModePreference);
