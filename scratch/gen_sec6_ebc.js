const fs = require('fs');
const path = require('path');

const ebcItems = require(path.join(__dirname, 'ebc_21_items.json'));
const evtCards = require(path.join(__dirname, 'guidance_cards.json'));

const topicIds = [
  'accommodation',
  'food',
  'best-time',
  'typical-day',
  'permits',
  'acclimatization',
  'difficulty',
  'culture',
  'route-alternatives',
  'flight-lukla',
  'altitude-sickness',
  'trek-comparison',
  'water-safety',
  'electricity-wifi',
  'toilets-hygiene',
  'packing-luggage',
  'emergency-evacuation',
  'money-budget',
  'age-groups',
  'tipping-culture',
  'responsible-trekking'
];

console.log('Topic IDs count:', topicIds.length);
console.log('EVT cards count:', evtCards.length);
console.log('EBC items count:', ebcItems.length);

let sec6Html = `        <!-- SECTION 6: PRACTICAL GUIDANCE (EBC STANDARD) -->
        <section id="section-details" class="trek-detail-section">
          <div class="details-section-container">
            <!-- Heading -->
            <div class="details-title-wrapper">
              <h2 class="details-main-title">Read before you book, Everest View Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>

            <!-- Subtitle Paragraphs -->
            <p class="details-subtitle-text">To help you decide if the Everest View Trek is for you, we have provided information on flight details, trek difficulty, and the best time to visit.</p>
            <p class="details-subtitle-text" style="margin-bottom: 24px;">If you are still unsure if this trek is for you, then email or <a href="https://wa.me/9779800000000" target="_blank">WhatsApp us</a>. We will get back to you within 24 hours to answer any more questions.</p>

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
                  <span class="details-progress-count">0/21 read</span>
                  <span class="details-progress-status">Nice start — keep going</span>
                </div>
              </div>
            </div>

            <!-- Accordion List (21 Items) -->
            <div class="detail-accordion-list">
`;

for (let i = 0; i < 21; i++) {
  const card = evtCards[i];
  const ebcItem = ebcItems[i];
  const id = topicIds[i];

  // Extract clean SVG icon from ebcItem.iconSnippet
  const svgMatch = ebcItem.iconSnippet.match(/<svg[\s\S]*?<\/svg>/);
  const iconSvg = svgMatch ? svgMatch[0].trim() : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  // Title: use clean title
  let title = card.title;
  // Clean up title if it has numbers
  title = title.replace(/^\d+[\.\s]+/, '').trim();

  // Content: wrap in proper styling
  const bodyContent = card.content.trim();

  sec6Html += `              <!-- Item ${i + 1}: ${title} -->
              <div class="detail-accordion-card" data-detail-id="${id}">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      ${iconSvg}
                      <div class="detail-check-bubble">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <h3 class="detail-accordion-title">${title}</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div class="detail-accordion-body">
                  <div class="detail-accordion-content">
                    ${bodyContent}
                  </div>
                </div>
              </div>
`;
}

sec6Html += `            </div>
          </div>
        </section>`;

fs.writeFileSync(path.join(__dirname, 'test_sec6_ebc.html'), sec6Html, 'utf8');
console.log('Generated test_sec6_ebc.html successfully. Length:', sec6Html.length);
