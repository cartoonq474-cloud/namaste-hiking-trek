// scratch/build_flagship_mardi_8d.js
const fs = require('fs');
const path = require('path');
const data = require('./mardi_data');
const sections = require('./mardi_sections');

const originalHtml = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// 1. Extract Head
let headContent = originalHtml.match(/<head[\s\S]*?<\/head>/i)[0];

// Update Title and Meta Description in head
headContent = headContent.replace(
  /<title>[\s\S]*?<\/title>/i,
  '<title>Mardi Himal Trek (8 Days) — Sacred Fishtail Ridge Expedition — Namaste Hiking Trek</title>'
);

headContent = headContent.replace(
  /<meta name="description" content="[^"]*">/i,
  '<meta name="description" content="Experience the 8-day Mardi Himal Trek in Nepal\'s Annapurna region. Trek through rhododendron forests and open alpine ridges to High Camp (3,580m) and Mardi Himal Base Camp (4,500m) with certified local guides.">'
);

// Update JSON-LD Schema
const updatedSchema = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": "https://namastehikingtrek.com/trek/mardi-himal-trek/#trip",
        "name": "Mardi Himal Trek (8 Days)",
        "description": "8-day Himalayan trekking journey in Nepal's Annapurna region beneath Mardi Himal and Machhapuchhre (Fishtail) to High Camp (3,580m) and Base Camp area (4,500m).",
        "touristType": ["Hikers", "Trekking Enthusiasts", "Nature Lovers"],
        "subTrip": [
          { "@type": "TouristTrip", "name": "Day 1: Kathmandu to Pokhara (800m)" },
          { "@type": "TouristTrip", "name": "Day 2: Pokhara to Kande & Trek to Forest Camp (2,550m)" },
          { "@type": "TouristTrip", "name": "Day 3: Forest Camp to Low Camp (3,000m)" },
          { "@type": "TouristTrip", "name": "Day 4: Low Camp to Badal Danda & High Camp (3,580m)" },
          { "@type": "TouristTrip", "name": "Day 5: High Camp to Upper Viewpoint (4,200m) & Base Camp (4,500m) and Return" },
          { "@type": "TouristTrip", "name": "Day 6: High Camp to Siding Village (1,750m)" },
          { "@type": "TouristTrip", "name": "Day 7: Siding to Lumre & Drive to Pokhara (800m)" },
          { "@type": "TouristTrip", "name": "Day 8: Pokhara to Kathmandu (1,400m)" }
        ],
        "offers": {
          "@type": "Offer",
          "price": "749",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://namastehikingtrek.com/trek/mardi-himal-trek/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://namastehikingtrek.com/trek/mardi-himal-trek/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
          { "@type": "ListItem", "position": 2, "name": "Annapurna Region", "item": "https://namastehikingtrek.com/trekking-regions-nepal/" },
          { "@type": "ListItem", "position": 3, "name": "Mardi Himal Trek", "item": "https://namastehikingtrek.com/trek/mardi-himal-trek/" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://namastehikingtrek.com/trek/mardi-himal-trek/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How difficult is the Mardi Himal Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Mardi Himal Trek is rated as moderate to challenging due to sustained uphill walking, uneven stone steps, forest roots, and high altitude up to 4,500m. Technical climbing skills are not required, but good cardiovascular endurance is essential."
            }
          },
          {
            "@type": "Question",
            "name": "What permits are required for the Mardi Himal Trek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two permits are required: the Annapurna Conservation Area Permit (ACAP, NPR 3,000) and the TIMS Card (NPR 2,000). Both are arranged and processed directly by Namaste Hiking Trek."
            }
          },
          {
            "@type": "Question",
            "name": "Is a guide mandatory for Mardi Himal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, under Nepal Tourism Board regulations, foreign trekkers are required to trek with a licensed trekking guide arranged through an authorized agency."
            }
          }
        ]
      }
    ]
  }
  </script>
`;

headContent = headContent.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, updatedSchema);

// 2. Extract Header
const headerContent = originalHtml.match(/<header class="main-header"[\s\S]*?<\/header>/i)[0];

// 3. Extract Footer & End Scripts
const footerContent = originalHtml.match(/<footer class="site-footer"[\s\S]*?<\/footer>/i)[0];
const endScripts = originalHtml.slice(originalHtml.indexOf('</footer') + 9);

// 4. Build Complete Page HTML
const completeHtml = `<!DOCTYPE html>
<html lang="en">
${headContent}
<body>
${headerContent}

  <main class="site-main" id="main-content">
    <article class="trek-detail-page">
      ${sections.renderHeroHeader()}

      <!-- Main Content Layout with Sticky Booking Sidebar -->
      <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="mardi_himal">
        <div class="container" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
          
          <!-- Main Details Column (12 Canonical Flagship Sections) -->
          <div style="min-width: 0;">
            ${sections.renderSectionOverview()}
            ${sections.renderSectionItinerary()}
            ${sections.renderSectionIncludes()}
            ${sections.renderSectionDates()}
            ${sections.renderSectionPacking()}
            ${sections.renderSectionDetails()}
            ${sections.renderSectionAltitude()}
            ${sections.renderSectionWeather()}
            ${sections.renderSectionMap()}
            ${sections.renderSectionBooking()}
            ${sections.renderSectionReviews()}
            ${sections.renderSectionFaqs()}
          </div>

          ${sections.renderSidebar()}
        </div>
      </section>

      ${sections.renderSimilarTreks()}
    </article>
  </main>

${footerContent}
${endScripts}
`;

fs.writeFileSync('trek/mardi-himal-trek/index.html', completeHtml, 'utf8');
console.log('Successfully built trek/mardi-himal-trek/index.html!');
console.log('New file length:', completeHtml.length, 'characters');
