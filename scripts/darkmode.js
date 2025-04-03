function applyDarkModePreference() {
  const root = document.documentElement;
  const toggleImg = document.querySelector('.toggle-img');

  if (!toggleImg) return;

  const isDark = localStorage.getItem("dark-mode") === "true";
  root.classList.toggle("dark-mode", isDark);
  toggleImg.src = isDark
    ? toggleImg.src.replace("images/dark.png", "images/light.png")
    : toggleImg.src.replace("images/light.png", "images/dark.png");
}

function toggleDarkMode() {
  const root = document.documentElement;
  const toggleImg = document.querySelector('.toggle-img');

  if (!toggleImg) return;

  const isDark = root.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "true" : "false");
  toggleImg.src = isDark
    ? toggleImg.src.replace("images/dark.png", "images/light.png")
    : toggleImg.src.replace("images/light.png", "images/dark.png");
}

document.addEventListener("DOMContentLoaded", applyDarkModePreference);
window.addEventListener("pageshow", applyDarkModePreference);

