/**
 * Header Scroll Effect
 * Adds a white glass background to the header when the user scrolls past 50px.
 * Removes it when the user scrolls back to the top.
 */
(function () {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const SCROLL_THRESHOLD = 50;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on page load in case the page is already scrolled
})();
