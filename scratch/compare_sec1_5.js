const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

function getSectionContent(html, id) {
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) return null;
  const nextSec = html.indexOf('<section ', start + 10);
  const end = nextSec !== -1 ? nextSec : html.indexOf('</main>', start);
  return html.slice(start, end);
}

const sectionIds = [
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing'
];

sectionIds.forEach(id => {
  const eSec = getSectionContent(ebc, id);
  const vSec = getSectionContent(evt, id);

  console.log(`==============================`);
  console.log(`SECTION: #${id}`);
  console.log(`==============================`);

  console.log(`[EBC] Length: ${eSec ? eSec.length : 0}`);
  if (eSec) {
    const hMatches = eSec.match(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi) || [];
    hMatches.forEach(h => {
      const tag = h.slice(1, 3);
      const text = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      console.log(`   <${tag}> ${text}`);
    });
  }

  console.log(`[EVT] Length: ${vSec ? vSec.length : 0}`);
  if (vSec) {
    const hMatches = vSec.match(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi) || [];
    hMatches.forEach(h => {
      const tag = h.slice(1, 3);
      const text = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      console.log(`   <${tag}> ${text}`);
    });
  }
});
