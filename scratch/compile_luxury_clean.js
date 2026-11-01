const fs = require('fs');

// Load content modules
const mod1 = require('./content_luxury_overview');
const mod2 = require('./content_luxury_itinerary');
const mod3 = require('./content_luxury_includes_packing');
const mod4 = require('./content_luxury_guides_faqs');

// Read reference HTML
let html = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

console.log('Compiling trek/everest-base-camp-luxury-trek/index.html cleanly...');

// Helper to replace an entire <section id="...">...</section> block
function replaceSection(srcHtml, sectionId, newSectionOuterHtml) {
  const startPattern = `<section id="${sectionId}"`;
  const startIdx = srcHtml.indexOf(startPattern);
  if (startIdx === -1) {
    throw new Error(`Section start not found: ${sectionId}`);
  }
  const endTag = '</section>';
  const endIdx = srcHtml.indexOf(endTag, startIdx);
  if (endIdx === -1) {
    throw new Error(`Section end not found for: ${sectionId}`);
  }
  const fullEndIdx = endIdx + endTag.length;
  return srcHtml.slice(0, startIdx) + newSectionOuterHtml.trim() + srcHtml.slice(fullEndIdx);
}

// 1. Head & Meta Updates
html = html.replace(
  /<title>.*?<\/title>/i,
  '<title>Everest Base Camp Luxury Trek (12 Days) — Namaste Hiking Trek</title>'
);

html = html.replace(
  /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
  '<meta name="description" content="Experience the iconic Everest Base Camp & Kala Patthar in ultimate comfort. 12-day luxury trek featuring 5-star Kathmandu hotels, upgraded mountain lodges, and planned helicopter transfers.">'
);

html = html.replace(
  /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
  '<link rel="canonical" href="https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/">'
);

html = html.replace(
  /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
  '<meta property="og:title" content="Everest Base Camp Luxury Trek (12 Days) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
  '<meta property="og:description" content="Follow the Khumbu trail to Everest Base Camp with luxury lodge accommodation and helicopter flights to Lukla and from Pheriche.">'
);

html = html.replace(
  /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
  '<meta property="og:url" content="https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/">'
);

html = html.replace(
  /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
  '<meta name="twitter:title" content="Everest Base Camp Luxury Trek (12 Days) — Namaste Hiking Trek">'
);

html = html.replace(
  /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
  '<meta name="twitter:description" content="Experience Everest Base Camp & Kala Patthar in ultimate comfort with luxury lodges and helicopter transfers.">'
);

html = html.replace(
  /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
  '<meta property="og:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg">'
);

html = html.replace(
  /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
  '<meta name="twitter:image" content="https://namastehikingtrek.com/images/treks/everest-base-camp/everest-base-camp-mountain-valley-landscape-06.jpg">'
);

// 2. Schema.org JSON-LD
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#trip",
      "name": "Everest Base Camp Luxury Trek (12 Days)",
      "description": "Experience Everest Base Camp and Kala Patthar in ultimate comfort with 5-star Kathmandu hotels, upgraded mountain lodges, and helicopter transfers to Lukla and from Pheriche.",
      "url": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/",
      "touristType": ["High Altitude Trekker", "Luxury Adventure Traveler", "Couples", "Honeymooners"],
      "offers": {
        "@type": "Offer",
        "price": "2490",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01"
      },
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": 12,
        "itemListElement": mod2.generateSchemaSubTrips()
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "Nepal Trekking Packages", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Everest Region Treks", "item": "https://namastehikingtrek.com/everest-region-treks/" },
        { "@type": "ListItem", "position": 4, "name": "Everest Base Camp Luxury Trek", "item": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/everest-base-camp-luxury-trek/#faq",
      "mainEntity": mod4.generateSchemaFaqs()
    }
  ]
};

const schemaStart = html.indexOf('<script type="application/ld+json">');
const schemaEnd = html.indexOf('</script>', schemaStart);
if (schemaStart !== -1 && schemaEnd !== -1) {
  html = html.slice(0, schemaStart) +
    '<script type="application/ld+json">\n' + JSON.stringify(schemaJsonLd, null, 2) + '\n    </script>' +
    html.slice(schemaEnd + '</script>'.length);
}

// 3. Breadcrumb Current Item
html = html.replace(
  /<span class="breadcrumb-current">.*?<\/span>/i,
  '<span class="breadcrumb-current">Everest Base Camp Luxury Trek</span>'
);

// 4. Region Pill & Hero H1
html = html.replace(
  /<span class="pill pill-copper"[^>]*>.*?<\/span>/i,
  '<span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • 12-Day Luxury Lodge & Helicopter Journey</span>'
);

html = html.replace(
  /<h1 class="trek-hero-title"[^>]*>.*?<\/h1>/i,
  '<h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Base Camp Luxury Trek</h1>'
);

// Hero Lead Paragraph & Toggle
const heroLeadHtml = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Follow the Khumbu trail to Everest Base Camp and Kala Patthar with upgraded accommodation where available, coordinated trekking support and planned helicopter transfers. This 12-day draft flies to Lukla, walks to Base Camp, descends to Pheriche after Kala Patthar, and plans a helicopter return to Kathmandu.
          <span id="ebc-more-text" style="display: none;">
            The experience combines the adventure of high-altitude trekking with upgraded services wherever the mountain environment allows: premium accommodation in Kathmandu, higher-standard mountain lodges, private or small-group arrangements, professional trekking support, luggage assistance, and helicopter transportation. Luxury does not remove the physical demands of the Himalayas, but optimizes comfort, recovery, and safety.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;

html = html.replace(
  /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/p>/i,
  heroLeadHtml
);

// 5. Update Quick Specs in Key Trip Facts Grid (Hero container)
// 1. Duration: 18 days -> 12 days
html = html.replace(
  /(<span[^>]*>Duration<\/span>\s*<span[^>]*>)18 days(<\/span>)/i,
  '$112 days$2'
);
// 2. Difficulty: Strenuous / Alpine Grade 4 -> Demanding / Luxury Lodge Trek
html = html.replace(
  /(<span[^>]*>Difficulty<\/span>\s*<span[^>]*>)Strenuous \/ Alpine Grade 4(<\/span>)/i,
  '$1Demanding / Luxury Lodge Trek$2'
);
// 6. Accommodation: Mountain Lodges & Teahouses -> Luxury Hotel & Upgraded Lodges
html = html.replace(
  /(<span[^>]*>Accommodation<\/span>\s*<span[^>]*>)Mountain Lodges & Teahouses(<\/span>)/i,
  '$1Luxury Hotel & Upgraded Lodges$2'
);
// 8. Transportation: Domestic Flights (Kathmandu - Lukla - Kathmandu) -> Chartered Helicopter & Private Transfers
html = html.replace(
  /(<span[^>]*>Transportation<\/span>\s*<span[^>]*>)Domestic Flights[^<]*(<\/span>)/i,
  '$1Chartered Helicopter & Private Transfers$2'
);
// 10. Trek Starts: Lukla -> Lukla (Helicopter from KTM)
html = html.replace(
  /(<span[^>]*>Trek Starts<\/span>\s*<span[^>]*>)Lukla(<\/span>)/i,
  '$1Lukla (Helicopter from KTM)$2'
);
// 11. Trek End At: Lukla -> Pheriche (Helicopter to KTM)
html = html.replace(
  /(<span[^>]*>Trek End At<\/span>\s*<span[^>]*>)Lukla(<\/span>)/i,
  '$1Pheriche (Helicopter to KTM)$2'
);

// 6. Update data-trek-key on wrapper
html = html.replace(
  /data-trek-details-wrapper\s+data-trek-key="[^"]*"/,
  'data-trek-details-wrapper data-trek-key="ebc_luxury"'
);

// 7. Section Replacements

// SECTION 1: OVERVIEW
const newOverviewHtml = `<section id="section-overview" class="trek-detail-section active">
            <h2 class="trek-section-title">Key Trip Facts</h2>
            ${mod1.keyFactsGrid}
            ${mod1.keyFactsTable}

            <h2 class="trek-section-title" style="margin-top: 48px;">Everest Base Camp Luxury Trek Overview</h2>
            ${mod1.overviewContent}

            <h2 class="trek-section-title" style="margin-top: 48px;">Everest Base Camp Luxury Trek Highlights</h2>
            ${mod1.highlightsContent}

            ${mod1.whyBookContent}
          </section>`;
html = replaceSection(html, 'section-overview', newOverviewHtml);

// SECTION 2: ITINERARY
const newItineraryHtml = `<section id="section-itinerary" class="trek-detail-section">
            <div class="itinerary-title-wrap">
              <h2 class="trek-section-title">Everest Base Camp Luxury Trek Itinerary: 12 Days</h2>
              <div class="itinerary-controls">
                <button type="button" class="itinerary-expand-all-btn" id="itin-expand-all-btn">
                  <span>Expand All</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Pre-Trek Logistics Notice -->
            <div style="background: #e6f7f0; border-left: 4px solid var(--color-copper-orange); padding: 18px 22px; border-radius: 0 10px 10px 0; margin-bottom: 24px;">
              <h4 style="margin: 0 0 6px 0; color: var(--color-primary-navy); font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Before your trek starts
              </h4>
              <p style="margin: 0; font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6;">
                Confirm the hotel/lodge schedule, room types, meal basis, baggage allowances, guide/porter team, permit arrangements and both helicopter sectors. The selected date should match the Kathmandu arrival day. Share health, dietary, insurance and emergency-contact details before the briefing. Extra contingency time is separate unless expressly included.
              </p>
            </div>

            <div class="itinerary-accordion-container">
              ${mod2.generateItineraryHtml()}
            </div>
            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const itinExpandBtn = document.getElementById('itin-expand-all-btn');
                if (itinExpandBtn) {
                  itinExpandBtn.addEventListener('click', () => {
                    const cards = document.querySelectorAll('.itinerary-card');
                    const allActive = Array.from(cards).every(c => c.classList.contains('active'));
                    cards.forEach(c => {
                      if (allActive) {
                        c.classList.remove('active');
                      } else {
                        c.classList.add('active');
                      }
                    });
                    const span = itinExpandBtn.querySelector('span');
                    if (span) {
                      span.textContent = allActive ? 'Expand All' : 'Collapse All';
                    }
                  });
                }
              });
            </script>
          </section>`;
html = replaceSection(html, 'section-itinerary', newItineraryHtml);

// SECTION 3: INCLUDES AND EXCLUDES
const newIncludesHtml = `<section id="section-includes" class="trek-detail-section">
            <h2 class="trek-section-title">What's Included & Excluded</h2>
            <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.98rem; line-height: 1.6;">
              The source describes these components as included or includable according to the chosen package. Treat this as the proposed service checklist. The final quotation must identify which components are actually paid for, their standard and any limits.
            </p>

            <div class="includes-excludes-grid">
              <!-- Included Column -->
              <div class="inc-exc-card inc-card">
                <div class="inc-exc-header">
                  <div class="inc-exc-icon inc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 class="inc-exc-title">What's Included</h3>
                </div>
                <ul class="inc-exc-list">
                  ${mod3.inclusions.map(inc => `
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${inc}</span>
                  </li>`).join('\n                  ')}
                </ul>
              </div>

              <!-- Excluded Column -->
              <div class="inc-exc-card exc-card">
                <div class="inc-exc-header">
                  <div class="inc-exc-icon exc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <h3 class="inc-exc-title">What's Excluded</h3>
                </div>
                <ul class="inc-exc-list">
                  ${mod3.exclusions.map(exc => `
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span>${exc}</span>
                  </li>`).join('\n                  ')}
                </ul>
              </div>
            </div>

            ${mod3.commercialAdvisory}
          </section>`;
html = replaceSection(html, 'section-includes', newIncludesHtml);

// SECTION 4: DATES & AVAILABILITY
// Update Title & Prices in Dates section
html = html.replace(
  'Booking Dates & Availability for Everest Base Camp with Cho La Pass Trek',
  'Booking Dates & Availability for Everest Base Camp Luxury Trek'
);
// Replace dates prices $1,499 with $2,490
html = html.replace(
  /(<div class="departure-price"><span class="price-val">)\$1,499(<\/span>)/g,
  '$1$$2,490$2'
);
// Replace data-trek-title in dates section buttons
html = html.replace(
  /data-trek-title="Everest Base Camp Trek \(([^)]+)\)"/g,
  'data-trek-title="Everest Base Camp Luxury Trek ($1)"'
);

// SECTION 5: PACKING LIST
const newPackingHtml = `<section id="section-packing" class="trek-detail-section">
            <h2 class="trek-section-title">Packing List for Everest Base Camp Luxury Trek</h2>
            <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.98rem; line-height: 1.6;">
              Separate a porter-carried main bag from the daypack you use while walking. Keep water, layers, medication, documents, valuables and other immediate needs with you. Airline allowances and porter limits are separate. The six categories below adapt the verified checklist structure (70 items total).
            </p>
            ${mod3.generatePackingHtml()}
          </section>`;
html = replaceSection(html, 'section-packing', newPackingHtml);

// SECTION 6: IMPORTANT DETAILS (16 GUIDES)
const newDetailsHtml = `<section id="section-details" class="trek-detail-section">
            <h2 class="trek-section-title">Important Trip Details (Read Before You Book)</h2>
            <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.98rem; line-height: 1.6;">
              Comprehensive operational briefings covering luxury accommodation standards, nutrition, acclimatization protocols, helicopter contingency policies, and porter welfare.
            </p>
            <div class="detail-accordion-list">
              ${mod4.generateGuidesHtml()}
            </div>
          </section>`;
html = replaceSection(html, 'section-details', newDetailsHtml);

// SECTION 7: ALTITUDE PROFILE
const newAltitudeHtml = `<section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile of Everest Base Camp Luxury Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
                Interactive elevation map showing daily gain and acclimatization stopping points. Switch units below to convert between meters (m) and feet (ft).
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="ebc_luxury"></div>
            </div>
            <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route Information</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.95rem; line-height: 1.6;">
              The 12-day luxury route begins with an arrival in Kathmandu (1,400 m) followed by a scenic helicopter flight direct to Lukla (2,860 m) on Day 2. The trail follows the Dudh Koshi river valley through Phakding to Namche Bazaar (3,440 m) for essential acclimatization and day hiking (Day 4). The route continues through Tengboche (3,860 m) to Dingboche (4,410 m) for a second acclimatization day hike up Nangkartshang Peak (approx. 5,083 m). The journey proceeds past the memorial ridge at Thokla Pass to Lobuche (4,910 m) and Gorak Shep (5,164 m), before reaching Everest Base Camp (5,364 m) on Day 8 and the sunrise summit of Kala Patthar (5,545 m) on Day 9. After descending to Pheriche (4,371 m), a scenic chartered helicopter returns you directly toward Kathmandu on Day 11, concluding with an international departure on Day 12.
            </p>
          </section>`;
html = replaceSection(html, 'section-altitude-profile', newAltitudeHtml);

// SECTION 8: WEATHER TITLE
html = html.replace(
  /Weather on the Everest Base Camp with Cho La Pass Trek/g,
  'Weather on the Everest Base Camp Luxury Trek'
);

// SECTION 9: MAP TITLE
html = html.replace(
  /Everest Base Camp with Cho La Pass Trek Map/g,
  'Everest Base Camp Luxury Trek Map'
);

// SECTION 10: FAQS
const newFaqsHtml = `<section id="section-faqs" class="trek-detail-section">
            <div class="faq-header-wrap" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 6px;">Frequently Asked Questions</h2>
                <p style="color: var(--color-neutral-600); margin: 0; font-size: 0.95rem;">Clear answers to the most common questions regarding the 12-day luxury Everest journey.</p>
              </div>
              <div class="faq-controls">
                <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn" style="padding: 8px 16px; border: 1px solid #cbd5e1; background: white; border-radius: 8px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Expand All</button>
              </div>
            </div>

            <div class="faq-list-container">
              ${mod4.generateFaqsHtml()}
            </div>
          </section>`;
html = replaceSection(html, 'section-faqs', newFaqsHtml);

// 11. Right Sticky Sidebar Pricing & Badge Updates
html = html.replace(/\$1,299/g, '$$2,490');
html = html.replace(/19 days trip/g, '12 days trip');
html = html.replace(/18 days trip/g, '12 days trip');

// Group discount tier update
html = html.replace(
  /\$1,234 \/ person/g,
  '$$2,390 / person'
);
html = html.replace(
  /\$1,169 \/ person/g,
  '$$2,290 / person'
);
html = html.replace(
  /\$1,104 \/ person \(Best Deal\)/g,
  '$$2,190 / person (Best Deal)'
);

// Sidebar buttons data-trek-title
html = html.replace(
  /data-trek-title="Everest Base Camp Trek \(Aug 5 - Aug 18, 2026\)"/g,
  'data-trek-title="Everest Base Camp Luxury Trek (12 Days)"'
);

// Ribbon badge
html = html.replace(
  'BEST SELLER\n              </div>',
  'LUXURY TREK\n              </div>'
);

// Write output file
fs.writeFileSync('trek/everest-base-camp-luxury-trek/index.html', html, 'utf8');

console.log('Successfully compiled trek/everest-base-camp-luxury-trek/index.html!');
console.log('Final file size:', fs.statSync('trek/everest-base-camp-luxury-trek/index.html').size, 'bytes');
