/**
 * Custom Itinerary & Inquiry Modal Handler
 */

export function setupInquiryModal() {
  const modalOverlay = document.getElementById('inquiry-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-trek-title');
  const inquiryForm = document.getElementById('custom-inquiry-form');

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
      alert("Thank you! Your custom trek inquiry has been received. A Senior Himalayan Guide from Namaste Hiking Trek will contact you within 12 hours.");
      closeModal();
      inquiryForm.reset();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupInquiryModal();
});
