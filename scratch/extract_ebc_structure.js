const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function inspectSection(id) {
  const startIdx = ebcHtml.indexOf(`id="${id}"`);
  if (startIdx === -1) return `Section ${id} not found`;
  const snippet = ebcHtml.substring(startIdx, startIdx + 3000);
  const headings = [...snippet.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map(m => m[0]);
  const divs = [...snippet.matchAll(/<div[^>]*class="([^"]+)"/gi)].map(m => m[1]);
  return {
    id,
    first1000Chars: snippet.substring(0, 1000),
    headings,
    classesSample: [...new Set(divs)].slice(0, 12)
  };
}

const ids = [
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

const results = {};
ids.forEach(id => {
  results[id] = inspectSection(id);
});

fs.writeFileSync('scratch/ebc_full_structure.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Saved EBC structure to scratch/ebc_full_structure.json');
