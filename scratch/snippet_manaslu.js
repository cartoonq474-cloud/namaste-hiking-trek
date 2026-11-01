const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

function showSnippet(title, marker, len = 1500) {
  const idx = html.indexOf(marker);
  console.log(`=== ${title} (idx: ${idx}) ===`);
  if (idx !== -1) {
    console.log(html.substring(idx, idx + len));
  } else {
    console.log('MARKER NOT FOUND: ' + marker);
  }
}

showSnippet('Hero & Meta', '<main class="trek-template-page"', 1200);
showSnippet('Overview Section', 'id="section-overview"', 1200);
showSnippet('Itinerary Section', 'id="section-itinerary"', 1500);
showSnippet('Includes Section', 'id="section-includes"', 1000);
showSnippet('Dates Section', 'id="section-dates"', 1000);
showSnippet('Details Section', 'id="section-details"', 1200);
showSnippet('Altitude Profile', 'id="section-altitude-profile"', 1000);
showSnippet('FAQs Section', 'id="section-faqs"', 1200);
