const fs = require('fs');

function buildSectionFaqs() {
  const faqs = JSON.parse(fs.readFileSync('scratch/all_mardi_faqs.json', 'utf8'));

  const categories = [
    {
      id: "general",
      name: "General Information",
      indices: [0, 1, 2, 3]
    },
    {
      id: "route",
      name: "Route & Logistics",
      indices: [4, 5, 6, 7, 8]
    },
    {
      id: "lodging",
      name: "Teahouse Accommodations",
      indices: [12, 13, 14, 15]
    },
    {
      id: "safety",
      name: "Altitude, Safety & Medical",
      indices: [16, 17, 18]
    },
    {
      id: "permits",
      name: "Permits & Booking Policies",
      indices: [9, 10, 11, 19]
    }
  ];

  // Category buttons
  let navButtonsHtml = '';
  categories.forEach((cat, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    navButtonsHtml += `
                  <button type="button" class="faq-category-btn${activeClass}" data-category="${cat.id}">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </span>
                    ${cat.name}
                  </button>`;
  });

  // Category panels
  let panelsHtml = '';
  categories.forEach((cat, idx) => {
    const isActive = idx === 0;
    const activeClass = isActive ? ' active' : '';
    const displayStyle = isActive ? 'display: block;' : 'display: none;';

    let itemsHtml = '';
    cat.indices.forEach(faqIdx => {
      const f = faqs[faqIdx];
      if (!f) return;
      itemsHtml += `
                <div class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 12px; overflow: hidden; background: #ffffff;">
                  <button type="button" class="faq-item-question" style="width: 100%; text-align: left; padding: 18px 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: #ffffff; border: none; outline: none;">
                    <span class="faq-question-title" style="font-size: 1.05rem; color: var(--color-primary-navy); font-weight: 700;">${f.q}</span>
                    <span class="faq-chevron" style="color: var(--color-neutral-400); display: flex; align-items: center; transition: transform 0.2s ease;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </button>
                  <div class="faq-item-answer" style="padding: 0 20px 20px 20px; border-top: 1px solid #f1f5f9; display: none;">
                    <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.7; margin: 14px 0 0 0;">
                      ${f.a}
                    </p>
                  </div>
                </div>`;
    });

    panelsHtml += `
              <div class="faq-category-content${activeClass}" id="faq-cat-${cat.id}" style="${displayStyle}">
                ${itemsHtml}
              </div>`;
  });

  return `<section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Mardi Himal Trek
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  ${navButtonsHtml}
                </div>
              </div>

              <!-- Right FAQ Content Panel -->
              <div class="faq-main-panel">
                <div class="faq-panel-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
                  <h3 class="faq-active-category-title" id="faq-current-category-title" style="margin: 0; font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700;">General Information</h3>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn" style="background: none; border: 1px solid #cbd5e1; padding: 6px 14px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; color: var(--color-primary-navy); cursor: pointer;">Expand All</button>
                </div>
                ${panelsHtml}
              </div>
            </div>
          </section>`;
}

module.exports = { buildSectionFaqs };
