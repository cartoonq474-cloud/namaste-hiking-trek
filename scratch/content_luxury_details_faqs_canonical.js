const { luxuryGuides, luxuryFaqs } = require('./content_luxury_guides_faqs.js');

// Categorize the 30 FAQs into the 6 standard categories matching EBC template
const categorizedFaqs = {
  general: [
    luxuryFaqs[0], // What makes this trek a "luxury" trek?
    luxuryFaqs[1], // How does the helicopter return work?
    luxuryFaqs[2], // What is the difference between standard and luxury Everest treks?
    luxuryFaqs[16], // What is the best season for the Everest Base Camp Luxury Trek?
    luxuryFaqs[23], // Can I customize the Everest Base Camp Luxury Trek?
  ],
  permits: [
    luxuryFaqs[17], // Which permits and registrations are required?
    luxuryFaqs[21], // How much luggage can I take?
    luxuryFaqs[13], // Can the helicopter fly in all weather conditions?
    luxuryFaqs[3],  // How does luggage transport work between lodges?
    luxuryFaqs[28], // What currency should I bring for personal expenses?
  ],
  accommodation: [
    luxuryFaqs[4],  // What is the accommodation standard on this trek?
    luxuryFaqs[5],  // Do the rooms have private bathrooms and hot water?
    luxuryFaqs[18], // What meals are included?
    luxuryFaqs[19], // Can I get vegetarian or vegan meals?
    luxuryFaqs[20], // Is drinking water included?
  ],
  health: [
    luxuryFaqs[7],  // How fit do I need to be for this trek?
    luxuryFaqs[15], // How many acclimatization days are included?
    luxuryFaqs[14], // What should I do if altitude symptoms develop?
    luxuryFaqs[11], // Do I need travel insurance for the Everest Base Camp Luxury Trek?
    luxuryFaqs[6],  // Does the guide carry medical equipment and oxygen?
  ],
  helicopter: [
    luxuryFaqs[8],  // Where does the return helicopter pick us up?
    luxuryFaqs[9],  // What happens if the Lukla or Pheriche helicopter flight is delayed by weather?
    luxuryFaqs[10], // What type of helicopters are used?
    luxuryFaqs[25], // Can the helicopter fly directly to Kathmandu from Pheriche?
    luxuryFaqs[26], // Is a scenic flight included at Base Camp?
  ],
  payment: [
    luxuryFaqs[27], // What gear do I need to pack myself?
    luxuryFaqs[29], // Can I rent down jackets and sleeping bags in Kathmandu?
    luxuryFaqs[22], // Are tips included in the package?
    luxuryFaqs[12], // What are the payment terms and deposit requirements?
    luxuryFaqs[24], // Can I add extra acclimatization days?
  ]
};

function generateDetailsCanonicalHtml() {
  const cardsHtml = luxuryGuides.map((guide, idx) => {
    return `
                <!-- Item ${idx + 1}: ${guide.title} -->
                <div class="detail-accordion-card" data-detail-id="${guide.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span class="detail-check-bubble">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span class="detail-accordion-category">${guide.category}</span>
                        <h3 class="detail-accordion-title">${guide.title}</h3>
                      </div>
                    </div>
                    <div class="detail-accordion-toggle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      ${guide.paragraphs.map(p => `<p>${p}</p>`).join('\n                      ')}
                    </div>
                  </div>
                </div>
    `;
  }).join('\n');

  return `
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read before you book, Everest Base Camp Luxury Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you decide if the Everest Base Camp Luxury Trek is for you, we have provided comprehensive operational information on lodge standards, helicopter logistics, acclimatization strategy, and packing rules.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you are still unsure if this luxury trek is for you, then email or <a href="https://wa.me/9779800000000" target="_blank">WhatsApp us</a>. We will get back to you within 24 hours to answer any questions.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper">
                <div class="details-progress-badge">
                  <div class="details-progress-ring-box">
                    <svg width="44" height="44">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-count">0/16 read</span>
                    <span class="details-progress-status">Nice start — keep going</span>
                  </div>
                </div>
              </div>

              <!-- Accordion List (16 Items) -->
              <div class="detail-accordion-list">
${cardsHtml}
              </div>
            </div>
  `;
}

function generateFaqsCanonicalHtml() {
  const categoryNames = {
    general: "General Information",
    permits: "Permits and Logistics",
    accommodation: "Accommodation & Meals",
    health: "Health and Safety",
    helicopter: "Helicopter & Transportation",
    payment: "Booking, Payments & Packing"
  };

  const categoryIcons = {
    general: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`,
    permits: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>`,
    accommodation: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>`,
    health: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>`,
    helicopter: `<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>`,
    payment: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>`
  };

  const navButtons = Object.keys(categoryNames).map((catKey, index) => {
    const isActive = index === 0 ? " active" : "";
    return `
                  <button type="button" class="faq-category-btn${isActive}" data-category="${catKey}">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${categoryIcons[catKey]}
                      </svg>
                    </span>
                    ${categoryNames[catKey]}
                  </button>
    `;
  }).join('\n');

  const panelsHtml = Object.keys(categorizedFaqs).map((catKey, index) => {
    const activeClass = index === 0 ? " active" : "";
    const items = categorizedFaqs[catKey] || [];
    const itemsHtml = items.map(item => `
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">${item.q}</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      <p>${item.a}</p>
                    </div>
                  </div>
    `).join('\n');

    return `
                <!-- Category Panel: ${catKey} -->
                <div class="faq-category-content${activeClass}" id="faq-cat-${catKey}">
${itemsHtml}
                </div>
    `;
  }).join('\n');

  return `
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Everest Base Camp Luxury Trek
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
${navButtons}
                </div>
              </div>

              <!-- Right Content Area Accordion -->
              <div class="faq-main-panel">
                <!-- Header Bar -->
                <div class="faq-panel-header">
                  <div class="faq-active-category-title" id="faq-current-category-title">General Information</div>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

${panelsHtml}
              </div>
            </div>
  `;
}

function generateFaqSchemaJson() {
  const allFaqs = Object.values(categorizedFaqs).flat();
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };
  return JSON.stringify(schemaObj, null, 2);
}

module.exports = {
  generateDetailsCanonicalHtml,
  generateFaqsCanonicalHtml,
  generateFaqSchemaJson,
  categorizedFaqs
};
