// Theme toggle — persists choice in localStorage, defaults to system preference.
(function () {
  const KEY = 'theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* private mode */ }
  }

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => apply(current() === 'dark' ? 'light' : 'dark'));
  });
})();

// Mobile hamburger menu — toggles the dropdown nav below 40rem.
(function () {
  window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const topbar = document.querySelector('.topbar');
    if (!menuBtn || !topbar) return;

    menuBtn.addEventListener('click', () => {
      const open = topbar.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close the menu after choosing a page
    topbar.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', () => {
        topbar.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      });
    });

    // Reset state when resizing back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640 && topbar.classList.contains('nav-open')) {
        topbar.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      }
    });
  });
})();
