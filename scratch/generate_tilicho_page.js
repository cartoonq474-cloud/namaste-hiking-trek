const fs = require('fs');
const path = require('path');

const data = require('./tilicho_data.js');
const itinerary = require('./tilicho_itinerary.js');
const guidesData = require('./tilicho_guides.js');

console.log('Loaded data modules successfully!');
console.log(`Itinerary days: ${itinerary.length}`);
console.log(`Guides: ${guidesData.guides.length}`);
console.log(`FAQs: ${guidesData.faqs.length}`);

// Read header and footer from Annapurna Circuit trek page for 100% brand consistency
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Extract Header
const headerStart = act.indexOf('<header class="main-header">');
const headerEnd = act.indexOf('</header>') + '</header>'.length;
const headerHtml = act.slice(headerStart, headerEnd);

// Extract Footer
const footerStart = act.indexOf('<footer class="site-footer">');
const footerEnd = act.indexOf('</footer>') + '</footer>'.length;
const footerHtml = act.slice(footerStart, footerEnd);

// Extract bottom scripts
const bottomScripts = act.slice(footerEnd).trim();

// Build Schema JSON-LD
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "@id": "https://namastehikingtrek.com/trek/tilicho-lake-trek/#trip",
      "name": "Annapurna Circuit with Tilicho Lake Trek (20 Days)",
      "description": "Embark on an epic 20-day Himalayan expedition combining the turquoise alpine spectacle of Tilicho Lake (4,919m) and the iconic crossing of Thorong La Pass (5,416m). Features Manang, Khangsar, Muktinath, Kali Gandaki Gorge, and Poon Hill sunrise.",
      "touristType": ["Hikers", "Trekking Enthusiasts", "High Altitude Adventurers"],
      "duration": "P20D",
      "subTrip": itinerary.map(d => ({
        "@type": "TouristTrip",
        "name": `Day ${d.day}: ${d.title} (${d.elevation.split(' ')[0]})`
      })),
      "offers": {
        "@type": "Offer",
        "price": "1349",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://namastehikingtrek.com/trek/tilicho-lake-trek/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://namastehikingtrek.com/trek/tilicho-lake-trek/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://namastehikingtrek.com/" },
        { "@type": "ListItem", "position": 2, "name": "All Treks", "item": "https://namastehikingtrek.com/nepal-trekking-packages/" },
        { "@type": "ListItem", "position": 3, "name": "Annapurna Region", "item": "https://namastehikingtrek.com/annapurna-region-treks/" },
        { "@type": "ListItem", "position": 4, "name": "Annapurna Circuit with Tilicho Lake Trek (20 Days)", "item": "https://namastehikingtrek.com/trek/tilicho-lake-trek/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://namastehikingtrek.com/trek/tilicho-lake-trek/#faq",
      "mainEntity": guidesData.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
};

console.log('Schema JSON-LD constructed.');

// Export for next step
module.exports = {
  headerHtml,
  footerHtml,
  bottomScripts,
  schemaJsonLd,
  data,
  itinerary,
  guidesData
};
