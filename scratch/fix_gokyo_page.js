const fs = require('fs');

const filePath = 'trek/gokyo-lakes-trek/index.html';
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original length:', html.length);

// 1. Fix Broken Image References in Itinerary
const imageReplacements = [
  {
    from: 'everest-base-camp-trekkers-kathmandu-briefing-12.jpg',
    to: 'everest-base-camp-trekkers-team-circle-02.jpg'
  },
  {
    from: 'everest-base-camp-acclimatization-view-point-06.jpg',
    to: 'everest-base-camp-mountain-trail-view-12.jpg'
  },
  {
    from: 'everest-base-camp-lukla-airport-landing-01.jpg',
    to: 'everest-base-camp-trekking-group-mountain-view-10.jpg'
  },
  {
    from: 'everest-base-camp-suspension-bridge-crossing-04.jpg',
    to: 'everest-base-camp-trekking-group-suspension-bridge-03.jpg'
  },
  {
    from: 'everest-base-camp-trail-stairs-climb-10.jpg',
    to: 'everest-base-camp-trekking-group-trail-monument-04.jpg'
  },
  {
    from: 'everest-base-camp-namche-bazaar-sherpa-town-05.jpg',
    to: 'everest-base-camp-trekking-group-village-lodge-08.jpg'
  }
];

imageReplacements.forEach(r => {
  const count = (html.match(new RegExp(r.from, 'g')) || []).length;
  html = html.split(r.from).join(r.to);
  console.log(`Replaced ${count} occurrences of ${r.from} -> ${r.to}`);
});

// 2. Fix Altitude Profile Section (replace canvas with interactive SVG altitude-chart-wrapper)
const oldAltitudeSectionRegex = /<!-- Section 7: Altitude Profile -->[\s\S]*?<section id="section-altitude-profile"[\s\S]*?<\/section>/;

const newAltitudeSection = `<!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile of Gokyo Lake Trek (15 Days)</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
                Interactive elevation profile showing daily altitude progression, gradual acclimatization stops at Namche Bazaar (3,440 m) and Machhermo (4,470 m), high altitude lodge stay at Gokyo (4,790 m), and the panoramic summit of Gokyo Ri (5,357 m / 17,575 ft). Switch units below to convert between meters (m) and feet (ft).
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="gokyo"></div>
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route & Acclimatization Strategy</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              Following the historic Dudh Koshi river past Phakding, you reach Namche Bazaar (3,440 m) for your initial acclimatization day. Branching off the commercial EBC corridor onto the quieter Gokyo trail, the route traverses scenic rhododendron and birch forests through Dole to Machhermo (4,470 m), where a dedicated second acclimatization day prepares you for entering the sacred Gokyo Lakes valley (4,790 m) and climbing Gokyo Ri (5,357 m).
            </p>
          </section>`;

if (oldAltitudeSectionRegex.test(html)) {
  html = html.replace(oldAltitudeSectionRegex, newAltitudeSection);
  console.log('Successfully updated Section 7 (Altitude Profile)!');
} else {
  console.warn('WARNING: oldAltitudeSectionRegex did not match directly, trying fallback match');
  const fallbackRegex = /<section id="section-altitude-profile"[\s\S]*?<\/section>/;
  if (fallbackRegex.test(html)) {
    html = html.replace(fallbackRegex, newAltitudeSection);
    console.log('Successfully replaced Section 7 using fallback match!');
  }
}

// 3. Rebuild Section 10: FAQs to standard 2-column .faq-layout-container with .faq-sidebar-card and .faq-main-panel
// First extract all 30 existing questions and answers from the 6 panels in index.html
const categories = [
  { id: 'general', title: 'General & Difficulty', icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>` },
  { id: 'permits', title: 'Permits & Flights', icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>` },
  { id: 'accommodation', title: 'Lodging & Food', icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>` },
  { id: 'health', title: 'Acclimatization & Safety', icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>` },
  { id: 'routes', title: 'Gokyo Ri & Lakes', icon: `<polygon points="12 2 2 22 22 22 12 2"></polygon>` },
  { id: 'booking', title: 'Logistics & Budget', icon: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>` }
];

// Extract items per category from the existing HTML
const extractedFaqs = {};
categories.forEach(cat => {
  extractedFaqs[cat.id] = [];
  const panelRegex = new RegExp(`<div class="faq-category-panel" id="faq-panel-${cat.id}">([\\s\\S]*?)(?=<div class="faq-category-panel"|<\\/div>\\s*<\\/div>\\s*<div class="trek-expert-cta|<\\/section>)`);
  const panelMatch = html.match(panelRegex);
  if (panelMatch) {
    const itemRegex = /<div class="faq-item">[\s\S]*?<span>([\s\S]*?)<\/span>[\s\S]*?<div class="faq-item-answer">([\s\S]*?)<\/div>\s*<\/div>/g;
    let itemMatch;
    while ((itemMatch = itemRegex.exec(panelMatch[1])) !== null) {
      extractedFaqs[cat.id].push({
        question: itemMatch[1].trim(),
        answer: itemMatch[2].trim()
      });
    }
  }
});

console.log('Extracted FAQs count per category:');
Object.entries(extractedFaqs).forEach(([k, v]) => console.log(`  ${k}: ${v.length} questions`));

// Construct new standard FAQ section
let newFaqHtml = `<!-- Section 10: Frequently Asked Questions -->
          <section id="section-faqs" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Frequently Asked Questions: Gokyo Lake Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin-bottom: 24px;">
              Find expert answers to common questions about route difficulty, altitude acclimatization, teahouse amenities, permits, flights, and the Gokyo Ri sunrise ascent.
            </p>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
${categories.map((cat, idx) => `                  <button type="button" class="faq-category-btn ${idx === 0 ? 'active' : ''}" data-category="${cat.id}">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${cat.icon}
                      </svg>
                    </span>
                    ${cat.title}
                  </button>`).join('\n')}
                </div>
              </div>

              <!-- Right Content Area Accordion -->
              <div class="faq-main-panel">
                <!-- Header Bar -->
                <div class="faq-panel-header">
                  <div class="faq-active-category-title" id="faq-current-category-title">General & Difficulty</div>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

${categories.map((cat, idx) => `                <!-- Category Panel: ${cat.id} -->
                <div class="faq-category-content ${idx === 0 ? 'active' : ''}" id="faq-cat-${cat.id}">
${(extractedFaqs[cat.id] || []).map(q => `                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">${q.question}</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${q.answer}
                    </div>
                  </div>`).join('\n\n')}
                </div>`).join('\n\n')}
              </div>
            </div>

            <!-- Expert WhatsApp CTA Banner Card -->
            <div class="trek-expert-cta-card" style="margin-top: 36px;">
              <div class="expert-avatar-wrap">
                <img src="../../images/avatar-sagar.png" alt="Sagar Gurung - Senior Trekking Specialist" class="expert-avatar-img">
                <span class="online-indicator" title="Online now"></span>
              </div>
              <div class="expert-cta-content">
                <span class="expert-badge-top">Have More Questions?</span>
                <h3 class="expert-cta-title">Chat Directly with Our Lead Himalayan Specialist</h3>
                <p class="expert-cta-desc">
                  Need personalized advice on acclimatization pacing, private group customization, or weather windows for Gokyo Ri? Sagar is ready to assist you.
                </p>
                <div class="expert-cta-actions">
                  <a href="https://wa.me/9779851000000?text=Hi%20Sagar,%20I%20have%20questions%20about%20the%20Gokyo%20Lake%20Trek%20(15%20Days)" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.814 3.179 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.768-5.768-5.768zm0-2.172c4.385 0 7.943 3.559 7.943 7.938 0 4.381-3.558 7.94-7.943 7.94-1.378 0-2.671-.358-3.793-.984l-4.238 1.106 1.127-4.124c-.694-1.171-1.039-2.508-1.039-3.938 0-4.379 3.558-7.938 7.943-7.938z"/></svg>
                    Chat on WhatsApp
                  </a>
                  <a href="../../contact/" class="btn btn-secondary-outline">Send an Inquiry</a>
                </div>
              </div>
            </div>
          </section>`;

const oldFaqRegex = /<!-- Section 10: Frequently Asked Questions -->[\s\S]*?<section id="section-faqs"[\s\S]*?<\/section>/;
if (oldFaqRegex.test(html)) {
  html = html.replace(oldFaqRegex, newFaqHtml);
  console.log('Successfully replaced Section 10 (FAQs)!');
} else {
  console.warn('Fallback matching Section 10...');
  const fallbackFaq = /<section id="section-faqs"[\s\S]*?<\/section>/;
  if (fallbackFaq.test(html)) {
    html = html.replace(fallbackFaq, newFaqHtml);
    console.log('Successfully replaced Section 10 using fallback match!');
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('New file written successfully! Length:', html.length);
