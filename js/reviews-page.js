/**
 * Dedicated Reviews Page Interactive Handlers
 * Handles Region Filter, Review Submission Modal, Star Rating, and FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Region Filter Pills
  const filterPills = document.querySelectorAll('.filter-pill-btn');
  const reviewCards = document.querySelectorAll('.review-card-standalone');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const targetRegion = pill.getAttribute('data-region') || 'all';

      reviewCards.forEach(card => {
        const cardRegion = card.getAttribute('data-region') || 'all';
        if (targetRegion === 'all' || cardRegion === targetRegion) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Review Modal Handler
  const reviewModal = document.getElementById('leave-review-modal');
  const openModalBtns = document.querySelectorAll('.open-review-modal-btn');
  const closeModalBtn = document.getElementById('review-modal-close-btn');
  const reviewForm = document.getElementById('leave-review-form');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (reviewModal) {
        reviewModal.classList.add('active');
      }
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (reviewModal) {
        reviewModal.classList.remove('active');
      }
    });
  }

  if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) {
        reviewModal.classList.remove('active');
      }
    });
  }

  // 3. Form Submission Handler
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = reviewForm.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting Your Review...';
      }

      setTimeout(() => {
        if (reviewForm) {
          reviewForm.innerHTML = `
            <div style="text-align: center; padding: 30px 10px;">
              <div style="width: 60px; height: 60px; background: #ECFDF5; color: #10B981; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 style="font-size: 1.5rem; color: #0F172A; margin-bottom: 8px;">Thank You for Your Review!</h3>
              <p style="color: #64748B; font-size: 0.98rem; line-height: 1.6; max-width: 480px; margin: 0 auto 20px auto;">
                Your feedback has been received and will be verified by our team. We appreciate you sharing your Himalayan story with future trekkers!
              </p>
              <button onclick="document.getElementById('leave-review-modal').classList.remove('active')" class="btn btn-primary" style="padding: 10px 24px;">Close Window</button>
            </div>
          `;
        }
      }, 1200);
    });
  }

  // 4. FAQ Accordion Toggle
  const faqHeaders = document.querySelectorAll('.faq-accordion-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      const item = header.parentElement;
      const isOpen = item.classList.contains('open') || item.classList.contains('active');
      
      document.querySelectorAll('.faq-accordion-item').forEach(el => el.classList.remove('open', 'active'));
      
      if (!isOpen) {
        item.classList.add('open', 'active');
      }
    });
  });
});
