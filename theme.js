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
