// Language switcher
function setLanguage(lang) {
  const currentPath = window.location.pathname;
  const cleanedPath = currentPath.replace(/^\/(lt|en)\//, '/');
  const targetPath = `/${lang}${cleanedPath}`;

  fetch(targetPath, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        window.location.href = targetPath;
      } else {
        window.location.href = `/en${cleanedPath}`;
      }
    })
    .catch(() => {
      window.location.href = `/en${cleanedPath}`;
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

