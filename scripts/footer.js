document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    fetch("/components/footer.html")
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;

        // Set the correct dark mode icon after the footer is injected
        const toggleImg = document.querySelector('.toggle-img');
        const isDark = localStorage.getItem("dark-mode") === "true";
        if (toggleImg) {
          toggleImg.src = isDark
            ? "/images/icons/light.png"
            : "/images/icons/dark.png";
        }
      });
  }
});

