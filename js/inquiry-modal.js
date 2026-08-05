/**
 * Custom Itinerary & Inquiry Modal Handler
 */

export function setupInquiryModal() {
  const modalOverlay = document.getElementById('inquiry-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-trek-title');
  const inquiryForm = document.getElementById('custom-inquiry-form') || document.getElementById('inquiry-form');

  const openModal = (title = "Custom Himalayan Trek") => {
    if (modalTitle) modalTitle.textContent = `Inquire about: ${title}`;
    if (modalOverlay) modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-inquiry-btn');
    if (btn) {
      const trekTitle = btn.getAttribute('data-trek-title') || "Custom Himalayan Trek";
      openModal(trekTitle);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const card = inquiryForm.closest('.modal-card');
      if (!card) {
        alert("Thank you! Your custom trek inquiry has been received.");
        closeModal();
        inquiryForm.reset();
        return;
      }
      
      const originalHTML = card.innerHTML;
      
      card.innerHTML = `
        <div style="text-align: center; padding: 40px 24px; animation: fadeIn 0.4s ease;">
          <div style="width: 72px; height: 72px; background: rgba(16, 185, 129, 0.1); color: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; font-size: 2.2rem; font-weight: bold;">✓</div>
          <h3 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--color-primary-navy);">Inquiry Received!</h3>
          <p style="color: var(--color-neutral-600); margin-bottom: 28px; font-size: 1.05rem; line-height: 1.6;">
            Thank you! A Senior Himalayan Guide from <strong>Namaste Hiking Trek</strong> will contact you within 4 hours to customize your itinerary.
          </p>
          <button class="btn btn-primary" id="success-done-btn" style="padding: 12px 36px; border-radius: var(--radius-full); width: auto; font-weight: 600;">Back to Page</button>
        </div>
      `;
      
      const doneBtn = card.querySelector('#success-done-btn');
      if (doneBtn) {
        doneBtn.addEventListener('click', () => {
          closeModal();
          setTimeout(() => {
            card.innerHTML = originalHTML;
            // Re-setup modal event handlers on original HTML structure
            setupInquiryModal();
          }, 400);
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupInquiryModal();
});
