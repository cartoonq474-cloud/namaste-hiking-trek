const fs = require('fs');

function buildSectionDetails() {
  const guides = JSON.parse(fs.readFileSync('scratch/mardi_guides_data.json', 'utf8'));

  // SVG Icons for the 12 topics
  const icons = [
    // 1. Where Does the Route Start
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path></svg>',
    // 2. Kande to Australian Camp
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle></svg>',
    // 3. Deurali to Forest Camp
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
    // 4. Forest Camp to Low Camp
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>',
    // 5. Low Camp to Badal Danda & High Camp
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    // 6. Upper Viewpoint vs Base Camp
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
    // 7. The Descent: High Camp to Siding
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>',
    // 8. Physical Difficulty & Terrain
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
    // 9. Altitude Progression & Safety
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    // 10. Best Seasons & Climate
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    // 11. Teahouse Accommodation & Dining
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>',
    // 12. ACAP Permits & TIMS
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="7" y1="8" x2="17" y2="8"></line><line x1="7" y1="12" x2="17" y2="12"></line><line x1="7" y1="16" x2="13" y2="16"></line></svg>'
  ];

  const readingTimes = ["4 min read", "5 min read", "4 min read", "5 min read", "6 min read", "5 min read", "4 min read", "6 min read", "5 min read", "5 min read", "4 min read", "4 min read"];

  let cardsHtml = '';
  guides.forEach((g, i) => {
    const icon = icons[i] || icons[0];
    const time = readingTimes[i] || "5 min read";
    const guideId = `mardi-guide-${i + 1}`;

    // Clean body: strip opening <div style="..."> if present
    let cleanBody = g.body;
    if (cleanBody.startsWith('<div style=')) {
      const closingBracket = cleanBody.indexOf('>');
      cleanBody = cleanBody.slice(closingBracket + 1);
    }

    cardsHtml += `
              <!-- Guide Card ${i + 1} -->
              <div class="detail-accordion-card" id="${guideId}" data-detail-id="${guideId}">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      ${icon}
                      <div class="detail-check-bubble">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">${g.title}</h3>
                      <span class="detail-reading-time" style="font-size: 0.8rem; color: var(--color-neutral-500);">${time}</span>
                    </div>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner">
                    ${cleanBody}
                  </div>
                </div>
              </div>`;
  });

  return `<section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper" style="margin-bottom: 24px;">
                <h2 class="details-main-title">Read before you book, Mardi Himal Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you thoroughly prepare for the Mardi Himal Trek, our mountain experts have compiled detailed operational guidance on route stages, altitude safety, trail difficulty, climate patterns, and teahouse living.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you have any questions or want to customize this route, feel free to email or <a href="https://wa.me/9779800000000" target="_blank" style="color: var(--color-copper-orange); font-weight: 600;">WhatsApp us</a>. Our team is available 24/7 to support your trip planning.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper" style="margin-bottom: 28px;">
                <div class="details-progress-badge" style="display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px;">
                  <div class="details-progress-ring-box" style="position: relative; width: 44px; height: 44px; flex-shrink: 0;">
                    <svg width="44" height="44" style="transform: rotate(-90deg);">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22" stroke="#e2e8f0" stroke-width="4" fill="none"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22" stroke="#10B981" stroke-width="4" fill="none" stroke-dasharray="113.09" stroke-dashoffset="113.09" style="transition: stroke-dashoffset 0.35s ease;"></circle>
                    </svg>
                    <span class="details-progress-count" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; color: var(--color-primary-navy);">0/12</span>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-status" style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary-navy); display: block;">Nice start — keep going</span>
                    <p style="margin: 0; font-size: 0.85rem; color: var(--color-neutral-500);">Track your trip preparation progress as you read each section below.</p>
                  </div>
                </div>
              </div>

              <!-- Accordion Cards List -->
              <div class="detail-accordion-list">
                ${cardsHtml}
              </div>
            </div>
          </section>`;
}

module.exports = { buildSectionDetails };
