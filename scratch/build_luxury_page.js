const fs = require('fs');

// Load content modules
const mod1 = require('./content_luxury_overview');
const mod2 = require('./content_luxury_itinerary');
const mod3 = require('./content_luxury_includes_packing');
const mod4 = require('./content_luxury_guides_faqs');

// Read reference HTML
let html = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

console.log('Building trek/everest-base-camp-luxury-trek/index.html via exact section splicing...');

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

// Schema.org JSON-LD
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

// 2. Breadcrumb
html = html.replace(
  /<span class="breadcrumb-current">.*?<\/span>/i,
  '<span class="breadcrumb-current">Everest Base Camp Luxury Trek</span>'
);

// 3. Hero Section Update
// Replace H1 and lead paragraph
const oldH1 = '<h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Base Camp with Cho La Pass Trek</h1>';
const newH1 = '<h1 class="trek-hero-title" style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Everest Base Camp Luxury Trek</h1>';

if (html.includes(oldH1)) {
  html = html.replace(oldH1, newH1);
} else {
  html = html.replace(/<h1 class="trek-hero-title"[^>]*>.*?<\/h1>/i, newH1);
}

// Replace 19 DAYS in hero badges with 12 DAYS
html = html.replace(
  /<span style="background: rgba\(16, 185, 129, 0\.1\); color: #10B981; font-weight: 700; font-size: 0\.85rem; padding: 4px 12px; border-radius: 20px;">19 DAYS<\/span>/g,
  '<span style="background: rgba(16, 185, 129, 0.1); color: #10B981; font-weight: 700; font-size: 0.85rem; padding: 4px 12px; border-radius: 20px;">12 DAYS</span>'
);

// Replace hero lead text
const oldHeroLeadRegex = /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/p>/i;
const newHeroLead = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Follow the Khumbu trail to Everest Base Camp and Kala Patthar with upgraded accommodation where available, coordinated trekking support and planned helicopter transfers. This 12-day draft flies to Lukla, walks to Base Camp, descends to Pheriche after Kala Patthar, and plans a helicopter return to Kathmandu.
          <span id="ebc-more-text" style="display: none;">
            The experience combines the adventure of high-altitude trekking with upgraded services wherever the mountain environment allows: premium accommodation in Kathmandu, higher-standard mountain lodges, private or small-group arrangements, professional trekking support, luggage assistance, and helicopter transportation. Luxury does not remove the physical demands of the Himalayas, but optimizes comfort, recovery, and safety.
          </span>
          <button type="button" id="ebc-toggle-btn" style="background: none; border: none; color: var(--color-copper-orange); font-weight: 700; cursor: pointer; padding: 0 0 0 6px; font-size: 1rem; text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;">Learn more</button>
        </p>`;

html = html.replace(oldHeroLeadRegex, newHeroLead);

// Update hero quick specs
html = html.replace(/<span class="spec-label">Duration<\/span>[\s\S]*?<strong class="spec-val">19 Days<\/strong>/i,
  '<span class="spec-label">Duration</span>\n            <strong class="spec-val">12 Days</strong>');

// 4. Update data-trek-key on wrapper and visualizer
html = html.replace(/data-trek-details-wrapper\s+data-trek-key="[^"]*"/, 'data-trek-details-wrapper data-trek-key="ebc_luxury"');
html = html.replace(/data-trek-key="ebc_cho_la"/g, 'data-trek-key="ebc_luxury"');

// 5. Replace Section 1: Overview
const sOverviewIdx = html.indexOf('<section id="section-overview"');
const sItinIdx = html.indexOf('<section id="section-itinerary"');

const newOverviewHtml = `<section id="section-overview" class="trek-detail-section active">
            <h2 class="trek-section-title">Key Trip Facts</h2>
            ${mod1.keyFactsGrid}
            ${mod1.keyFactsTable}

            <h2 class="trek-section-title" style="margin-top: 48px;">Everest Base Camp Luxury Trek Overview</h2>
            ${mod1.overviewContent}

            <h2 class="trek-section-title" style="margin-top: 48px;">Everest Base Camp Luxury Trek Highlights</h2>
            ${mod1.highlightsContent}

            ${mod1.whyBookContent}
          </section>\n\n          `;

html = html.slice(0, sOverviewIdx) + newOverviewHtml + html.slice(sItinIdx);

// 6. Replace Section 2: Itinerary
const sItinNewIdx = html.indexOf('<section id="section-itinerary"');
const sIncNewIdx = html.indexOf('<!-- Section 3: Includes and Excludes -->');

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
          </section>\n\n          `;

html = html.slice(0, sItinNewIdx) + newItineraryHtml + html.slice(sIncNewIdx);

// 7. Replace Section 3: Includes and Excludes
const sIncRealIdx = html.indexOf('<!-- Section 3: Includes and Excludes -->');
const sDatesRealIdx = html.indexOf('<!-- Section 4: Dates and Availability -->');

const newIncludesHtml = `<!-- Section 3: Includes and Excludes -->
          <section id="section-includes" class="trek-detail-section">
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
          </section>\n\n          `;

html = html.slice(0, sIncRealIdx) + newIncludesHtml + html.slice(sDatesRealIdx);

// 8. Replace Section 5: Packing List
const sPackRealIdx = html.indexOf('<section id="section-packing"');
const sDetRealIdx = html.indexOf('<!-- Section 6: Important Details & Trip Notes -->');

const newPackingHtml = `<section id="section-packing" class="trek-detail-section">
            <h2 class="trek-section-title">Packing List for Everest Base Camp Luxury Trek</h2>
            <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.98rem; line-height: 1.6;">
              Separate a porter-carried main bag from the daypack you use while walking. Keep water, layers, medication, documents, valuables and other immediate needs with you. Airline allowances and porter limits are separate. The six categories below adapt the verified checklist structure (70 items total).
            </p>
            ${mod3.generatePackingHtml()}
          </section>\n\n          `;

html = html.slice(0, sPackRealIdx) + newPackingHtml + html.slice(sDetRealIdx);

// 9. Replace Section 6: Details (16 Guides)
const sDetNextIdx = html.indexOf('<!-- Section 6: Important Details & Trip Notes -->');
const sAltRealIdx = html.indexOf('<!-- Section: Elevation Profile Interactive Chart -->');

const newDetailsHtml = `<!-- Section 6: Important Details & Trip Notes -->
          <section id="section-details" class="trek-detail-section">
            <h2 class="trek-section-title">Important Trip Details (Read Before You Book)</h2>
            <p style="color: var(--color-neutral-600); margin-bottom: 24px; font-size: 0.98rem; line-height: 1.6;">
              Comprehensive operational briefings covering luxury accommodation standards, nutrition, acclimatization protocols, helicopter contingency policies, and porter welfare.
            </p>
            <div class="detail-accordion-list">
              ${mod4.generateGuidesHtml()}
            </div>
          </section>\n\n          `;

html = html.slice(0, sDetNextIdx) + newDetailsHtml + html.slice(sAltRealIdx);

// 10. Replace Section 11: FAQs
const sFaqsRealIdx = html.indexOf('<!-- Section: Frequently Asked Questions -->');
const afterFaqsIdx = html.indexOf('</section>', html.indexOf('id="section-faqs"')) + '</section>'.length;

const newFaqsHtml = `<!-- Section: Frequently Asked Questions -->
          <section id="section-faqs" class="trek-detail-section">
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

html = html.slice(0, sFaqsRealIdx) + newFaqsHtml + html.slice(afterFaqsIdx);

// 11. Update Right Sidebar Pricing & Badge
html = html.replace(/\$1,299/g, '$2,490');
html = html.replace(/18 days trip/g, '12 days trip');
html = html.replace(/19 days trip/g, '12 days trip');

// Write destination file
fs.writeFileSync('trek/everest-base-camp-luxury-trek/index.html', html, 'utf8');

console.log('Successfully compiled trek/everest-base-camp-luxury-trek/index.html!');
console.log('Final file size:', fs.statSync('trek/everest-base-camp-luxury-trek/index.html').size, 'bytes');
