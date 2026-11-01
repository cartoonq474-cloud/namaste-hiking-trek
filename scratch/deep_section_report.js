const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

function extractTagById(html, id) {
  const startTagRegex = new RegExp(`<(?:section|div)[^>]*id=["']${id}["'][^>]*>`, 'i');
  const startMatch = html.match(startTagRegex);
  if (!startMatch) return null;

  const startIndex = startMatch.index;
  const tagName = startMatch[0].match(/<([a-z0-9]+)/i)[1];
  let depth = 0;

  const tagRegex = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi');
  tagRegex.lastIndex = startIndex;
  let m;
  while ((m = tagRegex.exec(html)) !== null) {
    if (m[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        return html.slice(startIndex, m.index + m[0].length);
      }
    } else {
      depth++;
    }
  }
  return null;
}

const report = {};

const sections = [
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

sections.forEach(id => {
  const eSec = extractTagById(ebc, id);
  const mSec = extractTagById(mardi, id);
  report[id] = {
    ebcLength: eSec ? eSec.length : 0,
    mardiLength: mSec ? mSec.length : 0,
    ebcHeading: eSec ? (eSec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] : null,
    mardiHeading: mSec ? (mSec.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] : null,
    ebcSubheadings: eSec ? [...eSec.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()) : [],
    mardiSubheadings: mSec ? [...mSec.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()) : []
  };
});

console.log(JSON.stringify(report, null, 2));
