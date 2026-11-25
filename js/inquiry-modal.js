/**
 * Custom Itinerary & Inquiry Modal Handler
 * Auto-injects inquiry modal DOM if missing, attaches single delegated trigger listener,
 * and delivers all modal inquiries to info@namastehikingtrek.com via NamasteFormDelivery.
 */

let currentTrekTitle = '';
let globalDelegationAttached = false;

function getActiveTrekTitle(triggerBtn) {
  const explicit = triggerBtn
    ? (triggerBtn.getAttribute('data-trek-title') || triggerBtn.getAttribute('data-inquiry-type'))
    : '';
  if (explicit) return explicit;

  const pageH1 = document.querySelector('h1');
  if (pageH1 && pageH1.textContent.trim()) {
    return pageH1.textContent.trim();
  }
  return 'Custom Himalayan Trip';
}

function bindModalForm(formEl, closeModalFn) {
  if (!formEl) return;
  const delivery = window.NamasteFormDelivery;
  if (!delivery) return;

  const card = formEl.closest('.modal-card, .modal-box');

  delivery.bindForm(formEl, {
    sourceName: 'Website Inquiry Modal (' + formEl.id + ')',
    subjectPrefix: 'Trip Inquiry',
    getContext: () => {
      const modalTitleEl = document.getElementById('modal-trek-title');
      const rawModalTitle = modalTitleEl ? modalTitleEl.textContent.trim() : '';
      const explicitModalTitle = /^Inquire about:\s*/i.test(rawModalTitle)
        ? rawModalTitle.replace(/^Inquire about:\s*/i, '').trim()
        : '';
      const h1El = document.querySelector('h1');
      const h1Title = h1El ? h1El.textContent.trim() : '';
      return {
        trekTitle: currentTrekTitle || explicitModalTitle || h1Title || 'Custom Himalayan Trip'
      };
    },
    onSuccess: (ctx) => {
      if (!card) {
        delivery.showStatus(
          ctx.feedbackEl,
          'is-success',
          '<strong>Inquiry sent to ' + delivery.TARGET_EMAIL + '!</strong> Our Kathmandu team will reply within 4 hours.'
        );
        formEl.reset();
        return;
      }

      const originalHTML = card.innerHTML;
      const safeName = ctx.visitorName ? `, ${ctx.visitorName.replace(/[<>&"]/g, '')}` : '';

      card.innerHTML = `
        <div style="text-align: center; padding: 40px 24px; animation: fadeIn 0.4s ease;">
          <div style="width: 72px; height: 72px; background: rgba(16, 185, 129, 0.1); color: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; font-size: 2.2rem; font-weight: bold;">✓</div>
          <h3 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--color-primary-navy);">Inquiry Received!</h3>
          <p style="color: var(--color-neutral-600); margin-bottom: 28px; font-size: 1.05rem; line-height: 1.6;">
            Thank you${safeName}! Your inquiry has been delivered to <strong>${delivery.TARGET_EMAIL}</strong>. A Senior Travel Expert from <strong>Namaste Hiking Trek</strong> will contact you within 4 hours.
          </p>
          <button class="btn btn-primary" id="success-done-btn" style="padding: 12px 36px; border-radius: var(--radius-full); width: auto; font-weight: 600;">Back to Page</button>
        </div>
      `;

      const doneBtn = card.querySelector('#success-done-btn');
      if (doneBtn) {
        doneBtn.addEventListener('click', () => {
          closeModalFn();
          setTimeout(() => {
            card.innerHTML = originalHTML;
            const restoredForm = card.querySelector('form');
            if (restoredForm) {
              restoredForm.dataset.nhtBound = '';
              bindModalForm(restoredForm, closeModalFn);
            }
            const restoredClose = card.querySelector('#modal-close-btn, .modal-close');
            if (restoredClose) {
              restoredClose.addEventListener('click', closeModalFn);
            }
          }, 400);
        });
      }
    }
  });
}

export function setupInquiryModal() {
  // 1. Auto-inject modal HTML into document.body if it doesn't exist yet
  if (!document.getElementById('inquiry-modal')) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'inquiry-modal';
    modalDiv.className = 'modal-overlay';
    modalDiv.innerHTML = `
      <div class="modal-card">
        <button id="modal-close-btn" class="modal-close" aria-label="Close Modal">&times;</button>
        <h3 id="modal-trek-title" style="font-size: 1.5rem; margin-bottom: 6px;">Request a Custom Trip Quote</h3>
        <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.95rem;">Tell us your preferences, and our senior trip planner will craft a detailed day-by-day itinerary and pricing options for you.</p>

        <form id="custom-inquiry-form">
          <div class="form-group">
            <label class="form-label" for="modal-inq-name">Full Name *</label>
            <input type="text" id="modal-inq-name" name="full_name" class="form-input" placeholder="e.g. Alex Smith" required>
          </div>

          <div class="grid grid-2">
            <div class="form-group">
              <label class="form-label" for="modal-inq-email">Email Address *</label>
              <input type="email" id="modal-inq-email" name="email" class="form-input" placeholder="alex@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="modal-inq-phone">WhatsApp / Phone *</label>
              <input type="tel" id="modal-inq-phone" name="phone" class="form-input" placeholder="+1 (555) 000-0000" required>
            </div>
          </div>

          <div class="grid grid-2">
            <div class="form-group">
              <label class="form-label" for="modal-inq-trekkers">Number of Travellers</label>
              <input type="number" id="modal-inq-trekkers" name="travelers" class="form-input" min="1" value="2">
            </div>
            <div class="form-group">
              <label class="form-label" for="modal-inq-month">Expected Travel Month</label>
              <select id="modal-inq-month" name="travel_month" class="form-select">
                <option value="autumn">Autumn (Sep - Nov)</option>
                <option value="spring">Spring (Mar - May)</option>
                <option value="winter">Winter (Dec - Feb)</option>
                <option value="monsoon">Monsoon (Jun - Aug)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="modal-inq-notes">Custom Requirements / Questions</label>
            <textarea id="modal-inq-notes" name="notes" class="form-textarea" rows="4" placeholder="Tell us your preferred itinerary, travel dates, hotel grade, or special requests..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 14px;">Send Custom Inquiry Request</button>
        </form>
      </div>
    `;
    document.body.appendChild(modalDiv);
  }

  const modalOverlay = document.getElementById('inquiry-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-trek-title');

  const openModal = (title = 'Custom Himalayan Trip') => {
    currentTrekTitle = title;
    if (modalTitle) modalTitle.textContent = `Inquire about: ${title}`;
    if (modalOverlay) modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    currentTrekTitle = '';
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (!globalDelegationAttached) {
    globalDelegationAttached = true;
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-inquiry-btn, .open-inquiry-modal-btn, .open-inquiry-modal-trigger, .btn-journey-pill, [data-inquiry-type]');
      if (btn) {
        e.preventDefault();
        openModal(getActiveTrekTitle(btn));
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Bind all modal inquiry form variants (including legacy #inquiryForm on legal-documents)
  document.querySelectorAll('#custom-inquiry-form, #inquiry-form, #inquiryForm').forEach((formEl) => {
    bindModalForm(formEl, closeModal);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupInquiryModal);
} else {
  setupInquiryModal();
}
