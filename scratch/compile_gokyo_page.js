const fs = require('fs');
const path = require('path');

const overviewModule = require('./content_gokyo_overview');
const itineraryModule = require('./content_gokyo_itinerary');
const includesPackingModule = require('./content_gokyo_includes_packing');
const detailsFaqsModule = require('./content_gokyo_details_faqs');

console.log('--- Starting Gokyo Lake Trek (15 Days) Page Compilation ---');

const targetFilePath = path.join(__dirname, '..', 'trek', 'gokyo-lakes-trek', 'index.html');
let html = fs.readFileSync(targetFilePath, 'utf8');

// 1. Update Title and Meta
html = html.replace(/<title>[^<]+<\/title>/, '<title>Gokyo Lake Trek (15 Days) — Namaste Hiking Trek</title>');
html = html.replace(
  /<meta name="description" content="[^"]*"/,
  `<meta name="description" content="${overviewModule.heroContent.lead.replace(/"/g, '&quot;')}"`
);
html = html.replace(
  /<meta property="og:title" content="[^"]*"/,
  `<meta property="og:title" content="Gokyo Lake Trek (15 Days) — Namaste Hiking Trek"`
);
html = html.replace(
  /<meta property="og:description" content="[^"]*"/,
  `<meta property="og:description" content="${overviewModule.heroContent.lead.replace(/"/g, '&quot;')}"`
);
html = html.replace(
  /<meta name="twitter:title" content="[^"]*"/,
  `<meta name="twitter:title" content="Gokyo Lake Trek (15 Days) — Namaste Hiking Trek"`
);
html = html.replace(
  /<meta name="twitter:description" content="[^"]*"/,
  `<meta name="twitter:description" content="${overviewModule.heroContent.lead.replace(/"/g, '&quot;')}"`
);

// 2. Build Schema JSON-LD
const subTrips = itineraryModule.itineraryDays.map(d => ({
  "@type": "TouristTrip",
  "name": `Day ${d.dayNum}: ${d.title}`
}));

const allFaqsFlat = [];
Object.values(detailsFaqsModule.categorizedFaqs).forEach(catFaqs => {
  catFaqs.forEach(f => {
    allFaqsFlat.push({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    });
  });
});

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/gokyo-lakes-trek/#trip",
      "name": "Gokyo Lake Trek",
      "description": overviewModule.heroContent.lead,
      "touristType": ["Hikers", "Trekking Enthusiasts", "Alpine Explorers"],
      "subTrip": subTrips,
      "offers": {
        "@type": "Offer",
        "price": "1250",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/gokyo-lakes-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/gokyo-lakes-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Everest Region", "item": "https://namastehikingtrek.com/everest-region-treks/" },
        { "@type": "ListItem", "position": 4, "name": "Gokyo Lake Trek", "item": "https://namastehikingtrek.com/trek/gokyo-lakes-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/gokyo-lakes-trek/#faq",
      "mainEntity": allFaqsFlat
    }
  ]
};

const schemaScriptTag = `<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n  </script>`;
html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schemaScriptTag);
console.log('✓ Updated Schema JSON-LD with 15 subTrips and 30 FAQs');

// 3. Update Hero Section H1 and Lead Paragraph
const heroRegex = /<h1[^>]*>[\s\S]*?<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/;
const newHeroContent = `<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">${overviewModule.heroContent.title}</h1>
        <p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          ${overviewModule.heroContent.lead}
          <span id="ebc-more-text" style="display: none;">
            ${overviewModule.heroContent.moreLead}
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;
html = html.replace(heroRegex, newHeroContent);
console.log('✓ Updated Hero H1 and interactive lead text');

// 4. Update Key Trip Facts Box (before the two-column grid)
const keyFactsBoxStart = html.indexOf('<!-- Key Trip Facts Grid -->');
const trustBadgesStart = html.indexOf('<!-- Trust Badges Section -->');
if (keyFactsBoxStart !== -1 && trustBadgesStart !== -1) {
  html = html.slice(0, keyFactsBoxStart) + overviewModule.generateKeyFactsHtml().trim() + '\n\n    ' + html.slice(trustBadgesStart);
  console.log('✓ Replaced 16 Key Facts white card container');
} else {
  console.warn('Warning: Key Facts Grid or Trust Badges boundaries not found!');
}

// Ensure data-trek-key="gokyo" on main wrapper
html = html.replace(/data-trek-details-wrapper\s+data-trek-key="[^"]*"/g, 'data-trek-details-wrapper data-trek-key="gokyo"');

// 5. Section Replacement Helper
function replaceSection(sourceHtml, sectionId, nextSectionId, newContent) {
  const startTag = `<section id="${sectionId}"`;
  const startIdx = sourceHtml.indexOf(startTag);
  if (startIdx === -1) {
    throw new Error(`Section ${sectionId} not found in source HTML`);
  }
  
  let endIdx = -1;
  if (nextSectionId) {
    const nextStartTag = `<section id="${nextSectionId}"`;
    endIdx = sourceHtml.indexOf(nextStartTag);
    if (endIdx === -1) {
      throw new Error(`Next section ${nextSectionId} not found`);
    }
  } else {
    // End before closing main column or next element
    endIdx = sourceHtml.indexOf('</section>', startIdx) + '</section>'.length;
  }

  const replaced = sourceHtml.slice(0, startIdx) + newContent.trim() + '\n\n          ' + sourceHtml.slice(endIdx);
  return replaced;
}

// 5a. Replace Section 1: Overview
const newOverviewSection = `
          <!-- Section 1: Overview -->
          <section id="section-overview" class="trek-detail-section">
${overviewModule.generateOverviewCanonicalHtml()}

            <!-- Ask Experts WhatsApp CTA Banner Card -->
            <div class="trek-expert-cta-card" style="margin-top: 36px;">
              <div class="expert-cta-left">
                <div class="expert-cta-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00a8b5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div class="expert-cta-text-group">
                  <h3 class="expert-cta-title">Planning your Gokyo Lake Trek?</h3>
                  <p class="expert-cta-subtitle">Chat directly with our veteran Sherpa leaders — real field experts, not call-center bots.</p>
                  <div class="expert-cta-status">
                    <span class="status-dot"></span>
                    <span>Direct WhatsApp replies within 1–2 hours</span>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" class="expert-whatsapp-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#008060">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </section>`;

html = replaceSection(html, 'section-overview', 'section-itinerary', newOverviewSection);
console.log('✓ Replaced Section 1: Overview');

// 5b. Replace Section 2: Itinerary
const newItinerarySection = `
          <!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
              <h2 class="trek-section-title" style="margin-bottom: 0;">15-Day Detailed Itinerary</h2>
              <button id="toggle-all-itinerary" class="btn btn-outline" style="font-size: 0.85rem; padding: 6px 14px; border-radius: 20px;">
                Expand All
              </button>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Follow the day-by-day expedition route from Kathmandu through Lukla, Namche Bazaar, Dole, and Machhermo to the sacred turquoise lakes of Gokyo, the summit of Gokyo Ri, and the vast Ngozumpa Glacier moraine.
            </p>

            <div class="itinerary-accordion-wrapper">
${itineraryModule.generateItineraryCardsHtml()}
            </div>
          </section>`;

html = replaceSection(html, 'section-itinerary', 'section-includes', newItinerarySection);
console.log('✓ Replaced Section 2: Itinerary (15 days)');

// 5c. Replace Section 3: Includes & Excludes
const newIncludesSection = `
          <!-- Section 3: Includes and Excludes -->
          <section id="section-includes" class="trek-detail-section">
${includesPackingModule.generateIncludesExcludesHtml()}
          </section>`;

html = replaceSection(html, 'section-includes', 'section-dates', newIncludesSection);
console.log('✓ Replaced Section 3: Includes and Excludes');

// 5d. Replace Section 5: Packing List
const newPackingSection = `
          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">
${includesPackingModule.generatePackingListHtml()}
          </section>`;

html = replaceSection(html, 'section-packing', 'section-details', newPackingSection);
console.log('✓ Replaced Section 5: Packing List (70 items, 6 categories, 6 directives)');

// 5e. Replace Section 6: Important Details (16 Guides)
const newDetailsSection = `
          <!-- Section 6: Important Details & Read Before You Book Guides -->
          <section id="section-details" class="trek-detail-section">
            <h2 class="trek-section-title">Read Before You Book: 16 In-Depth Gokyo Guides</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 14px; margin-bottom: 24px; line-height: 1.7;">
              Essential pre-trip intelligence on mountain teahouse standards, nutrition, Ramsar wetland sanctity, Gokyo Ri sunrise ascent, Ngozumpa Glacier moraines, physical preparation, acclimatization safety, flight operations, and permits.
            </p>

            <div class="details-accordion-wrapper" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
${detailsFaqsModule.generateDetailGuidesHtml()}
            </div>
          </section>`;

html = replaceSection(html, 'section-details', 'section-altitude-profile', newDetailsSection);
console.log('✓ Replaced Section 6: Important Details (16 Guides)');

// 5f. Update Section 7: Altitude Profile
const oldProfileStart = html.indexOf('<section id="section-altitude-profile"');
const nextWeatherStart = html.indexOf('<section id="section-weather"');
if (oldProfileStart !== -1 && nextWeatherStart !== -1) {
  const newProfileSection = `
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <h2 class="trek-section-title">Gokyo Lake Trek Elevation Profile (15 Days)</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 12px; margin-bottom: 24px; line-height: 1.7;">
              Visualize the gradual ascent along the Dudh Koshi Valley, the two dedicated acclimatization stages at Namche Bazaar (3,440 m) and Machhermo (4,470 m), the high elevation stay at Gokyo (4,790 m), and the panoramic summit of Gokyo Ri (5,357 m / 17,575 ft).
            </p>

            <div class="altitude-chart-card" style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                <span style="font-weight: 700; color: var(--color-primary-navy); font-size: 1.05rem;">Elevation Curve: Kathmandu to Gokyo Ri (5,357 m)</span>
                <span style="font-size: 0.85rem; background: #e6f7f0; color: #008060; font-weight: 700; padding: 4px 10px; border-radius: 20px;">15-Day Safe Acclimatization</span>
              </div>
              <div style="position: relative; width: 100%; height: 380px;">
                <canvas id="altitudeChart" data-trek-key="gokyo" style="width: 100%; height: 100%;"></canvas>
              </div>
            </div>
          </section>`;
  html = html.slice(0, oldProfileStart) + newProfileSection.trim() + '\n\n          ' + html.slice(nextWeatherStart);
  console.log('✓ Replaced Section 7: Altitude Profile (linked to data-trek-key="gokyo")');
}

// 5g. Replace Section 12: FAQs (30 questions in 6 categories)
const oldFaqsStart = html.indexOf('<section id="section-faqs"');
const endOfFaqs = html.indexOf('</section>', oldFaqsStart) + '</section>'.length;
if (oldFaqsStart !== -1 && endOfFaqs !== -1) {
  const newFaqsSection = `
          <!-- Section 12: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
${detailsFaqsModule.generateFaqsHtml()}
          </section>`;
  html = html.slice(0, oldFaqsStart) + newFaqsSection.trim() + '\n\n        ' + html.slice(endOfFaqs);
  console.log('✓ Replaced Section 12: FAQs (30 categorized questions)');
}

// 6. Update Sticky Booking Sidebar pricing and specs
html = html.replace(/\$1,299/g, '$1,250');
html = html.replace(/14 days trip/g, '15 days trip');
html = html.replace(/data-trek-title="Gokyo Lakes Trek[^"]*"/g, 'data-trek-title="Gokyo Lake Trek (15 Days)"');

// 7. Write to Target File
fs.writeFileSync(targetFilePath, html, 'utf8');
console.log('✓ Successfully written full compiled page to:', targetFilePath);
