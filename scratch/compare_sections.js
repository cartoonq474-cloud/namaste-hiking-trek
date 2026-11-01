const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

function extractSection(html, id) {
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf('<', start);
  const end = html.indexOf('</section>', start);
  return html.substring(tagStart, end + 10);
}

const sections = ['section-itinerary', 'section-dates', 'section-reviews', 'section-faq', 'section-packing'];

sections.forEach(s => {
  const ebcSec = extractSection(ebc, s);
  const abcSec = extractSection(abc, s);
  console.log(`=== ${s} ===`);
  console.log(`EBC length: ${ebcSec ? ebcSec.length : 'NOT FOUND'}, ABC length: ${abcSec ? abcSec.length : 'NOT FOUND'}`);
  
  if (ebcSec && abcSec) {
    const ebcButtons = [...ebcSec.matchAll(/<button[^>]*id="([^"]+)"/g)].map(m => m[1]);
    const abcButtons = [...abcSec.matchAll(/<button[^>]*id="([^"]+)"/g)].map(m => m[1]);
    console.log('EBC button IDs:', ebcButtons);
    console.log('ABC button IDs:', abcButtons);
  }
});
