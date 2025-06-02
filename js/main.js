// Language switcher with multi-language support
function setLanguage(lang) {
  const supportedLangs = ["en", "lt", "pl", "de", "fr"];
  if (!supportedLangs.includes(lang)) lang = "en";

  const currentPath = window.location.pathname;
  const cleanedPath = currentPath.replace(/^\/(lt|en|pl|de|fr)\//, '/');
  const targetPath = lang === "en" ? cleanedPath : `/${lang}${cleanedPath}`;

  fetch(targetPath, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        window.location.href = targetPath;
      } else {
        // fallback: go to English default
        window.location.href = cleanedPath;
      }
    })
    .catch(() => {
      window.location.href = cleanedPath;
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }
});

