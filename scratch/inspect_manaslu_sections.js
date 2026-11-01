const fs = require('fs');

const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

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
  const s = extractTagById(html, id);
  if (s) {
    const h2 = (s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1] || 'no h2';
    console.log(`\n[${id}] Length: ${s.length} chars | Heading: ${h2.replace(/<[^>]+>/g, '').trim()}`);
    // Check if it mentions Everest or Manaslu
    const hasEbc = s.toLowerCase().includes('everest') || s.toLowerCase().includes('lukla');
    const hasManaslu = s.toLowerCase().includes('manaslu') || s.toLowerCase().includes('larkya');
    console.log(`  Mentions Everest: ${hasEbc} | Mentions Manaslu: ${hasManaslu}`);
  } else {
    console.log(`\n[${id}] NOT FOUND`);
  }
});
