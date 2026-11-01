const fs = require('fs');
const { categorizedFaqs } = require('./content_gokyo_details_faqs.js');

const filePath = 'trek/gokyo-lakes-trek/index.html';
let html = fs.readFileSync(filePath, 'utf8');

console.log('Original HTML size:', html.length);

// 1. Image replacements
const imageReplacements = [
  { from: 'everest-base-camp-trekkers-kathmandu-briefing-12.jpg', to: 'everest-base-camp-trekkers-team-circle-02.jpg' },
  { from: 'everest-base-camp-acclimatization-view-point-06.jpg', to: 'everest-base-camp-mountain-trail-view-12.jpg' },
  { from: 'everest-base-camp-lukla-airport-landing-01.jpg', to: 'everest-base-camp-trekking-group-mountain-view-10.jpg' },
  { from: 'everest-base-camp-suspension-bridge-crossing-04.jpg', to: 'everest-base-camp-trekking-group-suspension-bridge-03.jpg' },
  { from: 'everest-base-camp-trail-stairs-climb-10.jpg', to: 'everest-base-camp-trekking-group-trail-monument-04.jpg' },
  { from: 'everest-base-camp-namche-bazaar-sherpa-town-05.jpg', to: 'everest-base-camp-trekking-group-village-lodge-08.jpg' }
];

imageReplacements.forEach(r => {
  html = html.split(r.from).join(r.to);
});

// 2. Altitude Section replacement
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

const altRegex = /<section id="section-altitude-profile"[\s\S]*?<\/section>/;
if (altRegex.test(html)) {
  html = html.replace(altRegex, newAltitudeSection);
  console.log('Altitude section replaced successfully!');
}

// 3. Construct Standard 2-Column FAQs Section with all 30 questions
const categories = [
  { key: "general", label: "General & Difficulty", icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>` },
  { key: "permits", label: "Permits & Flights", icon: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>` },
  { key: "accommodation", label: "Lodging & Food", icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>` },
  { key: "health", label: "Acclimatization & Safety", icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>` },
  { key: "routes", label: "Gokyo Ri & Lakes", icon: `<polygon points="12 2 2 22 22 22 12 2"></polygon>` },
  { key: "booking", label: "Logistics & Budget", icon: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>` }
];

let totalFaqCount = 0;
const panelsHtml = categories.map((c, i) => {
  const faqs = categorizedFaqs[c.key] || [];
  totalFaqCount += faqs.length;
  const itemsHtml = faqs.map(faq => `                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">${faq.q}</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      <p>${faq.a}</p>
                    </div>
                  </div>`).join('\n\n');

  return `                <!-- Category Panel: ${c.key} -->
                <div class="faq-category-content ${i === 0 ? 'active' : ''}" id="faq-cat-${c.key}">
${itemsHtml}
                </div>`;
}).join('\n\n');

console.log(`Constructed ${totalFaqCount} FAQ items across 6 categories!`);

const newFaqSection = `<!-- Section 10: Frequently Asked Questions -->
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
${categories.map((c, i) => `                  <button type="button" class="faq-category-btn ${i === 0 ? 'active' : ''}" data-category="${c.key}">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${c.icon}
                      </svg>
                    </span>
                    ${c.label}
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

${panelsHtml}
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

const faqRegex = /<section id="section-faqs"[\s\S]*?<\/section>/;
if (faqRegex.test(html)) {
  html = html.replace(faqRegex, newFaqSection);
  console.log('FAQ section replaced successfully!');
}

// 4. Update JSON-LD Schema with all 30 FAQs
const allFaqPairs = [];
Object.values(categorizedFaqs).forEach(list => {
  list.forEach(item => {
    allFaqPairs.push({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    });
  });
});

console.log('Total JSON-LD FAQ elements:', allFaqPairs.length);

// Find existing JSON-LD script and update FAQPage
const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    if (parsed['@graph']) {
      const faqNode = parsed['@graph'].find(node => node['@type'] === 'FAQPage');
      if (faqNode) {
        faqNode.mainEntity = allFaqPairs;
        html = html.replace(jsonLdMatch[0], `<script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n    </script>`);
        console.log('Successfully updated JSON-LD schema with all 30 FAQs!');
      }
    }
  } catch (e) {
    console.error('Error updating JSON-LD:', e);
  }
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('Updated', filePath, 'successfully! New length:', html.length);
