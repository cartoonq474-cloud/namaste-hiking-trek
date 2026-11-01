const fs = require('fs');
const path = require('path');

const hlData = require('./evt_16_highlights.json');
const wbData = require('./evt_10_why_book.json');
const incData = require('./evt_inc_items.json');
const excData = require('./evt_exc_items.json');

// SVGs for Highlights (16 items)
const hlIcons = [
  // 1. Scenic Flight to Lukla (Airplane)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>`,
  // 2. Dudh Koshi River (Water / Wave)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
  // 3. Suspension Bridges (Bridge)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"></path><path d="M4 18V9"></path><path d="M20 18V9"></path><path d="M4 9c4 4 12 4 16 0"></path><path d="M10 12v6"></path><path d="M14 12v6"></path></svg>`,
  // 4. Sagarmatha National Park (Tree / Nature)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"></path><path d="M9 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4"></path><path d="M12 2 8 8h8z"></path></svg>`,
  // 5. Namche Bazaar (Mountain / Hub)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  // 6. Acclimatization in Namche (Heartbeat / Health)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  // 7. Panoramic Views from Hotel Everest View (Binoculars / Viewpoint)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  // 8. Views of Mount Everest and Himalayan Giants (Mountain Peak)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>`,
  // 9. Traditional Villages Khumjung & Khunde (Home / Village)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  // 10. Buddhist Culture (Monastery)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"></path><path d="M5 21V10l7-5 7 5v11"></path><path d="M9 21v-4a3 3 0 0 1 6 0v4"></path><line x1="12" y1="2" x2="12" y2="5"></line></svg>`,
  // 11. Changing Landscapes (Compass)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  // 12. Traditional Teahouse Accommodation (Bed)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle></svg>`,
  // 13. Experience Local Food (Utensils / Coffee)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  // 14. Photography Opportunities (Camera)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
  // 15. Short Trek with Rewarding Experience (Star / Trophy)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5c-.55 0-1 .45-1 1v1h11v-1c0-.55-.45-1-1-1H15c-.55 0-1-.45-1-1v-2.34"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
  // 16. Responsible Ecotourism (Leaf)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`
];

// SVGs for Why Book (10 items)
const wbIcons = [
  // 1. Guides (Certificates)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  // 2. Guaranteed Departures (Calendar Check)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>`,
  // 3. Kathmandu Briefing (Clipboard)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  // 4. Direct Communication (Message)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  // 5. Airport Pickup (Car)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="15" cy="17" r="2"></circle></svg>`,
  // 6. Complimentary Gear Rental (Backpack / Duffle)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  // 7. Pulse Oximeter & Safety (Heart Pulse)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  // 8. Fair Porter Treatment (Shield Check)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  // 9. Lukla Flight Monitoring (Plane Takeoff)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"></path><path d="M6.36 17.4 4 17l2-2 1.1 1.1"></path><path d="M18.8 9.5 21 11l-3.5 1.5-2.5-2.5"></path><path d="m14 13.5 4.5-3.5L16 6l-5.5 3.5L6.5 7 5 8.5l4 2.5-3.5 3.5"></path></svg>`,
  // 10. 24/7 Rescue (Life Buoy)
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="19.07" y1="4.93" x2="14.83" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="9.17" y1="14.83" x2="4.93" y2="19.07"></line></svg>`
];

// Generate Highlights HTML
let hlGridHtml = '';
hlData.forEach((item, idx) => {
  const icon = hlIcons[idx] || hlIcons[0];
  hlGridHtml += `                <!-- Highlight ${idx + 1}: ${item.title} -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      ${icon}
                    </div>
                    <h3 class="ebc-highlight-card-title">${item.title}</h3>
                  </div>
                  <p class="ebc-highlight-body">
                    ${item.desc}
                  </p>
                </div>
`;
});

// Generate Why Book HTML
let wbGridHtml = '';
wbData.forEach((item, idx) => {
  const icon = wbIcons[idx] || wbIcons[0];
  wbGridHtml += `                <!-- Why Book ${idx + 1}: ${item.title} -->
                <div class="why-book-card">
                  <div class="why-book-icon-box">
                    ${icon}
                  </div>
                  <div class="why-book-card-content">
                    <div class="why-book-card-title">${item.title}</div>
                    <p class="why-book-card-text">${item.desc}</p>
                  </div>
                </div>
`;
});

// Generate Section 1 Blocks (Highlights + Why Book)
const sec1Additions = `
            <!-- Scoped Styles for Highlights & Why Book -->
            <style>
              .ebc-highlights-section {
                margin-top: 35px;
                padding-top: 25px;
                border-top: 1px solid var(--color-neutral-100);
              }
              .ebc-highlights-header {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 20px;
              }
              .ebc-highlights-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .ebc-highlights-intro-p {
                color: var(--color-neutral-700);
                font-size: 1.05rem;
                margin-bottom: 16px;
                line-height: 1.7;
              }
              .ebc-highlights-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
                margin-top: 30px;
                margin-bottom: 35px;
              }
              .ebc-highlight-card {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 24px 26px;
                display: flex;
                flex-direction: column;
                transition: all var(--transition-fast, 0.25s ease);
                box-shadow: 0 2px 8px rgba(12, 43, 78, 0.03);
              }
              .ebc-highlight-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 10px 28px rgba(217, 119, 6, 0.09);
                transform: translateY(-2px);
              }
              .ebc-highlight-top {
                display: flex;
                align-items: center;
                gap: 14px;
                margin-bottom: 14px;
              }
              .ebc-highlight-icon-box {
                width: 44px;
                height: 44px;
                flex-shrink: 0;
                background: rgba(217, 119, 6, 0.08);
                color: var(--color-copper-orange);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .ebc-highlight-card-title {
                font-size: 1.15rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
                line-height: 1.35;
              }
              .ebc-highlight-body {
                font-size: 0.98rem;
                line-height: 1.68;
                color: var(--color-neutral-700);
                margin: 0;
              }
              @media (max-width: 900px) {
                .ebc-highlights-grid {
                  grid-template-columns: 1fr;
                }
              }

              /* Why Book With Us Section */
              .why-book-container {
                margin-top: 40px;
                padding-top: 30px;
                border-top: 1px solid var(--color-neutral-100);
              }
              .why-book-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 16px;
              }
              .why-book-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .why-book-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-top: 24px;
              }
              .why-book-card {
                background: var(--color-white);
                border: 1px solid var(--color-neutral-100);
                border-radius: var(--radius-md);
                padding: 20px;
                display: flex;
                gap: 14px;
                transition: all var(--transition-fast);
              }
              .why-book-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 10px 25px rgba(16, 185, 129, 0.08);
                transform: translateY(-2px);
              }
              .why-book-icon-box {
                flex-shrink: 0;
                width: 44px;
                height: 44px;
                background: rgba(16, 185, 129, 0.08);
                color: var(--color-copper-orange);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .why-book-card-content {
                display: flex;
                flex-direction: column;
                gap: 6px;
              }
              .why-book-card-title {
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                line-height: 1.4;
              }
              .why-book-card-text {
                font-size: 0.92rem;
                line-height: 1.6;
                color: var(--color-neutral-600);
              }
              @media (max-width: 800px) {
                .why-book-grid {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
              }
            </style>

            <!-- 1B: Distinct Highlights Section -->
            <div class="ebc-highlights-section">
              <div class="ebc-highlights-header">
                <h2 class="ebc-highlights-title">Everest View Trek Highlights</h2>
              </div>
              <p class="ebc-highlights-intro-p">
                The Everest View Trek brings together the high Himalayan landscapes of Sagarmatha National Park, vibrant Sherpa villages, ancient Buddhist monasteries, thrilling suspension bridges, and iconic viewpoints overlooking Mount Everest without demanding extreme altitudes.
              </p>
              <div class="ebc-highlights-grid">
${hlGridHtml}              </div>
            </div>

            <!-- 1C: Distinct Why Book With Us Section -->
            <div class="why-book-container">
              <div class="why-book-title-wrapper">
                <h2 class="why-book-title">Why Book the Everest View Trek with Namaste Hiking Trek?</h2>
              </div>
              <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6; max-width: 850px;">
                Most operators in Kathmandu can get you to Namche Bazaar. The difference is in what happens around the trek — before you arrive, during the harder days, and when something doesn't go to plan. These are the things our guests from across the world keep writing about in their <a href="https://www.tripadvisor.com" target="_blank" style="color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">TripAdvisor reviews</a> as what actually mattered to them. We are currently ranked among the top trekking operators in Nepal with 100% verified 5-star traveler reviews.
              </p>
              <div class="why-book-grid">
${wbGridHtml}              </div>
            </div>
`;

// Generate Section 3 (Includes & Excludes Separated)
let incCardsHtml = '';
incData.forEach((item, idx) => {
  incCardsHtml += `                <!-- Include ${idx + 1}: ${item.title} -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">${item.title}</div>
                    <div class="inc-exc-card-text">${item.desc}</div>
                  </div>
                </div>
`;
});

let excCardsHtml = '';
excData.forEach((item, idx) => {
  excCardsHtml += `                <!-- Exclude ${idx + 1}: ${item.title} -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">${item.title}</div>
                    <div class="inc-exc-card-text">${item.desc}</div>
                  </div>
                </div>
`;
});

const sec3FullHtml = `        <!-- SECTION 3: INCLUDES & EXCLUDES (SEPARATE EBC BLOCKS) -->
        <section id="section-includes" class="trek-detail-section">
          <style>
            .inc-exc-container {
              margin-top: 10px;
            }
            .inc-exc-section-title-wrapper {
              border-left: 4px solid var(--color-copper-orange);
              padding-left: 14px;
              margin-bottom: 24px;
              margin-top: 30px;
            }
            .inc-exc-section-title {
              font-size: 1.8rem;
              margin: 0;
              color: var(--color-primary-navy);
              font-weight: 700;
            }
            .inc-exc-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
              margin-bottom: 40px;
            }
            .inc-exc-card {
              background: var(--color-white);
              border: 1px solid var(--color-neutral-100);
              border-radius: var(--radius-md);
              padding: 18px 20px;
              display: flex;
              gap: 14px;
              transition: all var(--transition-fast);
            }
            .inc-exc-card:hover {
              border-color: var(--color-copper-orange);
              box-shadow: 0 8px 20px rgba(16, 185, 129, 0.05);
              transform: translateY(-1px);
            }
            .inc-exc-card.exclude-card:hover {
              border-color: #ef4444;
              box-shadow: 0 8px 20px rgba(239, 68, 68, 0.05);
            }
            .inc-exc-icon-box {
              flex-shrink: 0;
              margin-top: 2px;
            }
            .inc-exc-card-content {
              display: flex;
              flex-direction: column;
              gap: 6px;
              justify-content: center;
            }
            .inc-exc-card-title {
              font-size: 0.98rem;
              font-weight: 600;
              color: var(--color-primary-navy);
              line-height: 1.45;
            }
            .inc-exc-card-text {
              font-size: 0.9rem;
              line-height: 1.5;
              color: var(--color-neutral-600);
            }
            @media (max-width: 800px) {
              .inc-exc-grid {
                grid-template-columns: 1fr;
                gap: 16px;
              }
            }
          </style>

          <div class="inc-exc-container">
            <!-- Block 3A: What is Included -->
            <div class="inc-exc-section-title-wrapper" style="margin-top: 0;">
              <h2 class="inc-exc-section-title">What includes in this Everest View Trek?</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>

            <p class="inc-exc-lead-text" style="font-size: 1rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 24px 0;">Our 7-day all-inclusive package covers all essential mountain permits, scheduled flights to/from Lukla, licensed Sherpa guide and porter services, teahouse accommodation, and all three meals on the trail.</p>

            <div class="inc-exc-grid">
${incCardsHtml}            </div>

            <!-- Block 3B: What is Excluded -->
            <div class="inc-exc-section-title-wrapper">
              <h2 class="inc-exc-section-title">What Excludes in this Everest View Trek?</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>

            <p class="inc-exc-lead-text" style="font-size: 1rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 24px 0;">To help you budget accurately for personal expenses along the trail, the following items and services are not included in the standard package price.</p>

            <div class="inc-exc-grid">
${excCardsHtml}            </div>
          </div>
        </section>`;

// Custom Trip CTA Card (Between Sec 2 and Sec 3)
const customTripCtaHtml = `
          <!-- Custom Itinerary Plan Your Trip CTA Banner Card -->
          <div class="custom-trip-cta-card" style="margin-top: 35px; margin-bottom: 25px;">
            <div class="custom-trip-cta-left">
              <h3 class="custom-trip-cta-title">Not satisfied with this Itinerary?</h3>
              <p class="custom-trip-cta-subtitle">Are you interested on planning custom trip? It only takes 2 minutes.</p>
            </div>
            <div class="custom-trip-cta-right">
              <div class="cta-dotted-arc"></div>
              <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Trip</a>
            </div>
          </div>
`;

// Save artifacts for application
fs.writeFileSync('scratch/sec1_additions.html', sec1Additions, 'utf8');
fs.writeFileSync('scratch/sec3_full.html', sec3FullHtml, 'utf8');
fs.writeFileSync('scratch/custom_trip_cta.html', customTripCtaHtml, 'utf8');
console.log('Generated sec1_additions.html, sec3_full.html, and custom_trip_cta.html successfully!');
