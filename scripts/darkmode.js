function applyDarkModePreference() {
  const root = document.documentElement;
  const toggleImg = document.querySelector('.toggle-img');

  if (!toggleImg) return;

  const isDark = localStorage.getItem("dark-mode") === "true";
  root.classList.toggle("dark-mode", isDark);
  toggleImg.src = isDark
    ? toggleImg.src.replace("images/icons/dark.png", "images/icons/light.png")
    : toggleImg.src.replace("images/icons/light.png", "images/icons/dark.png");
}

function toggleDarkMode() {
  const root = document.documentElement;
  const toggleImg = document.querySelector('.toggle-img');

  if (!toggleImg) return;

  const isDark = root.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "true" : "false");
  toggleImg.src = isDark
    ? toggleImg.src.replace("images/icons/dark.png", "images/icons/light.png")
    : toggleImg.src.replace("images/icons/light.png", "images/icons/dark.png");
}

document.addEventListener("DOMContentLoaded", applyDarkModePreference);
window.addEventListener("pageshow", applyDarkModePreference);

