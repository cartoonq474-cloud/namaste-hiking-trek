const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function extractSectionTag(html, id) {
  const startTagRegex = new RegExp(`<section[^>]*id=["']${id}["'][^>]*>`, 'i');
  const startMatch = html.match(startTagRegex);
  if (!startMatch) return null;

  const startIndex = startMatch.index;
  let depth = 0;
  let currentIndex = startIndex;

  // We scan tags starting at startIndex
  const tagRegex = /<\/?section\b[^>]*>/gi;
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
  const sec = extractSectionTag(ebc, id);
  if (sec) {
    console.log(`\nSection: ${id} | Length: ${sec.length} chars`);
    // Find all unique classes inside sec
    const classMatches = [...sec.matchAll(/class=["']([^"']+)["']/g)];
    const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].filter(c => c).sort();
    console.log(`Key classes (${classes.length}):`, classes.slice(0, 15).join(', '), '...');
  } else {
    console.log(`Section: ${id} NOT FOUND AS SECTION TAG`);
  }
});
