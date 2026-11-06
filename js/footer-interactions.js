/**
 * Namaste Hiking Trek - Luxury Footer Interactions
 * Handles mobile accordion collapsible navigation, newsletter validation & feedback toast.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Footer Navigation Accordion
  const accordionHeaders = document.querySelectorAll('.footer-accordion-btn');

  accordionHeaders.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const targetList = button.nextElementSibling;
      const toggleIcon = button.querySelector('.accordion-toggle-icon');

      // Toggle current
      button.setAttribute('aria-expanded', !isExpanded);
      if (targetList) {
        targetList.classList.toggle('active', !isExpanded);
      }
      if (toggleIcon) {
        toggleIcon.textContent = isExpanded ? '+' : '−';
      }
    });
  });

  // 2. Newsletter Form Submission Handling
  const newsletterForm = document.getElementById('trail-notes-form');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : '';

      // Basic regex check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (newsletterFeedback) {
          newsletterFeedback.textContent = 'Please enter a valid email address.';
          newsletterFeedback.style.color = '#DC2626';
          newsletterFeedback.style.display = 'block';
        }
        return;
      }

      // Success State
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Subscribed! ✓';
        submitBtn.style.background = '#059669';
      }

      if (newsletterFeedback) {
        newsletterFeedback.textContent = 'Welcome to Trail Notes! Please check your inbox for mountain inspiration.';
        newsletterFeedback.style.color = '#047857';
        newsletterFeedback.style.display = 'block';
      }

      if (emailInput) {
        emailInput.disabled = true;
      }

      // Analytics event if gtag is available
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'footer_trail_notes'
        });
      }
    });
  }
});

