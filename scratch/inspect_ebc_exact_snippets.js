const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

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

// Print Packing List snippet
const packing = extractTagById(ebc, 'section-packing');
console.log('=== PACKING LIST SNIPPET (First 1500 chars) ===');
console.log(packing ? packing.slice(0, 1500) : 'NOT FOUND');

// Print Reviews snippet
const reviews = extractTagById(ebc, 'section-reviews');
console.log('\n=== REVIEWS SNIPPET (First 1500 chars) ===');
console.log(reviews ? reviews.slice(0, 1500) : 'NOT FOUND');

// Print Details / Guides snippet
const details = extractTagById(ebc, 'section-details');
console.log('\n=== DETAILS SNIPPET (First 1500 chars) ===');
console.log(details ? details.slice(0, 1500) : 'NOT FOUND');

// Print Dates snippet
const dates = extractTagById(ebc, 'section-dates');
console.log('\n=== DATES SNIPPET (First 1500 chars) ===');
console.log(dates ? dates.slice(0, 1500) : 'NOT FOUND');
