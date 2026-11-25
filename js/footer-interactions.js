/**
 * Namaste Hiking Trek - Luxury Footer Interactions
 * Handles mobile accordion collapsible navigation and Trail Notes newsletter delivery to info@namastehikingtrek.com.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Footer Navigation Accordion
  const accordionHeaders = document.querySelectorAll('.footer-accordion-btn');

  accordionHeaders.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const targetList = button.nextElementSibling;
      const toggleIcon = button.querySelector('.accordion-toggle-icon');

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

  if (newsletterForm && window.NamasteFormDelivery) {
    window.NamasteFormDelivery.bindForm(newsletterForm, {
      sourceName: 'Footer Trail Notes Newsletter',
      subjectPrefix: 'Trail Notes Newsletter Signup',
      analyticsEvent: 'newsletter_signup',
      feedbackEl: newsletterFeedback,
      sendingText: 'Subscribing...',
      validate: (form) => {
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput ? emailInput.value.trim() : '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          return 'Please enter a valid email address.';
        }
        return null;
      },
      onSuccess: () => {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Subscribed! ✓';
          submitBtn.style.background = '#059669';
        }
        if (newsletterFeedback) {
          newsletterFeedback.className = 'footer-feedback-msg';
          newsletterFeedback.textContent = 'Welcome to Trail Notes! Please check your inbox for mountain inspiration.';
          newsletterFeedback.style.color = '#047857';
          newsletterFeedback.style.display = 'block';
        }
        if (emailInput) {
          emailInput.disabled = true;
        }
      }
    });
  }
});
