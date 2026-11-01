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
  'section-packing',
  'section-details',
  'section-altitude-profile',
  'section-weather',
  'section-map',
  'section-booking',
  'section-reviews',
  'section-faqs'
];

sectionIds.forEach(id => {
  const eSec = getSectionContent(ebc, id);
  const vSec = getSectionContent(evt, id);

  console.log(`==============================`);
  console.log(`SECTION: #${id}`);
  console.log(`==============================`);

  if (!eSec) {
    console.log(`[EBC] NOT FOUND`);
  } else {
    // Extract all h2, h3, h4 from EBC section
    const hMatches = eSec.match(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi) || [];
    console.log(`[EBC] Headings (${hMatches.length}):`);
    hMatches.forEach(h => {
      const tag = h.slice(1, 3);
      const text = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      console.log(`   <${tag}> ${text}`);
    });

    // Check for specific sub-components in EBC
    const hasHighlights = eSec.includes('ebc-highlights') || eSec.includes('highlights');
    const hasWhyBook = eSec.includes('why-book') || eSec.toLowerCase().includes('why book');
    const hasRouteTable = eSec.includes('custom-trek-table') || eSec.includes('<table');
    const hasBeforeStarts = eSec.includes('Before Your') || eSec.includes('before-itinerary');
    console.log(`[EBC] Features: highlights=${hasHighlights}, whyBook=${hasWhyBook}, routeTable=${hasRouteTable}, beforeStarts=${hasBeforeStarts}`);
  }

  if (!vSec) {
    console.log(`[EVT] NOT FOUND`);
  } else {
    const hMatches = vSec.match(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/gi) || [];
    console.log(`[EVT] Headings (${hMatches.length}):`);
    hMatches.forEach(h => {
      const tag = h.slice(1, 3);
      const text = h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      console.log(`   <${tag}> ${text}`);
    });

    const hasHighlights = vSec.includes('ebc-highlights') || vSec.includes('highlights');
    const hasWhyBook = vSec.includes('why-book') || vSec.toLowerCase().includes('why book');
    const hasRouteTable = vSec.includes('custom-trek-table') || vSec.includes('<table');
    const hasBeforeStarts = vSec.includes('Before Your') || vSec.includes('before-itinerary');
    console.log(`[EVT] Features: highlights=${hasHighlights}, whyBook=${hasWhyBook}, routeTable=${hasRouteTable}, beforeStarts=${hasBeforeStarts}`);
  }
});
