const fs = require('fs');

const { buildSectionOverview } = require('./build_overview_component');
const { buildSectionDates } = require('./build_dates_component');
const { buildSectionPacking } = require('./build_packing_component');
const { buildSectionDetails } = require('./build_details_component');
const { buildSectionReviews } = require('./build_reviews_component');
const { buildSectionFaqs } = require('./build_faqs_component');

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
        return {
          start: startIndex,
          end: m.index + m[0].length,
          content: html.slice(startIndex, m.index + m[0].length)
        };
      }
    } else {
      depth++;
    }
  }
  return null;
}

const currentHtml = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Section tags to replace in order
const replacements = [
  { id: 'section-overview', newHtml: buildSectionOverview() },
  { id: 'section-dates', newHtml: buildSectionDates() },
  { id: 'section-packing', newHtml: buildSectionPacking() },
  { id: 'section-details', newHtml: buildSectionDetails() },
  { id: 'section-reviews', newHtml: buildSectionReviews() },
  { id: 'section-faqs', newHtml: buildSectionFaqs() }
];

let updatedHtml = currentHtml;

// Add expand all button to itinerary if not already there
if (!updatedHtml.includes('itin-expand-all-btn') && updatedHtml.includes('id="section-itinerary"')) {
  updatedHtml = updatedHtml.replace(
    /<h2 class="trek-section-title">Mardi Himal Trek Itinerary: Day by Day Details<\/h2>/,
    `<div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
      <h2 class="trek-section-title" style="margin-bottom: 0;">Mardi Himal Trek Itinerary: Day by Day Details</h2>
      <button type="button" id="itin-expand-all-btn" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 6px 16px; border-radius: 8px; font-weight: 600; font-size: 0.85rem; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s;">Expand All Days</button>
    </div>`
  );
  console.log('Added Expand All button to Itinerary section.');
}

replacements.forEach(rep => {
  const loc = extractTagById(updatedHtml, rep.id);
  if (!loc) {
    console.error(`Could not locate section ${rep.id} for replacement!`);
    return;
  }
  updatedHtml = updatedHtml.slice(0, loc.start) + rep.newHtml + updatedHtml.slice(loc.end);
  console.log(`Successfully upgraded ${rep.id} (${rep.newHtml.length} chars).`);
});

// Run Tag Validator
function validateTags(html) {
  const tagsToCheck = [
    'div', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main',
    'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li',
    'table', 'thead', 'tbody', 'tr', 'th', 'td', 'button', 'a'
  ];

  let allBalanced = true;
  const tagBalances = {};
  for (const tag of tagsToCheck) {
    const openRegex = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    const openCount = (html.match(openRegex) || []).length;
    const closeCount = (html.match(closeRegex) || []).length;
    tagBalances[tag] = { open: openCount, close: closeCount, balanced: openCount === closeCount };
    if (openCount !== closeCount) {
      allBalanced = false;
      console.error(`UNBALANCED TAG <${tag}>: ${openCount} open vs ${closeCount} close`);
    }
  }
  return { allBalanced, tagBalances };
}

const validation = validateTags(updatedHtml);
console.log('All tags balanced:', validation.allBalanced);

if (validation.allBalanced) {
  fs.writeFileSync('trek/mardi-himal-trek/index.html', updatedHtml, 'utf8');
  console.log('Successfully wrote upgraded HTML to trek/mardi-himal-trek/index.html');
} else {
  console.error('Validation failed! Not writing to file.');
}
