const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const newFaqSection = fs.readFileSync('scratch/generated_faq_section.html', 'utf8');
const newSchemaEntities = JSON.parse(fs.readFileSync('scratch/generated_faq_schema.json', 'utf8'));

// 1. Locate current FAQ section
const faqStartMarker = '<!-- Section 9: FAQs -->';
const faqEndMarker = '</section>';

const faqStartIndex = origHtml.indexOf(faqStartMarker);
if (faqStartIndex === -1) {
  console.error('Could not find faqStartMarker');
  process.exit(1);
}

const faqEndIndex = origHtml.indexOf(faqEndMarker, faqStartIndex) + faqEndMarker.length;
console.log('FAQ section found from character', faqStartIndex, 'to', faqEndIndex);

const oldFaqSlice = origHtml.substring(faqStartIndex, faqEndIndex);
console.log('Old FAQ section length:', oldFaqSlice.length);
console.log('New FAQ section length:', newFaqSection.length);

// 2. Locate FAQPage schema in head
const faqPageIdx = origHtml.indexOf('"@type": "FAQPage"');
if (faqPageIdx === -1) {
  console.error('Could not find FAQPage in schema');
  process.exit(1);
}

// Find mainEntity in that FAQPage object
const mainEntityIdx = origHtml.indexOf('"mainEntity": [', faqPageIdx);
const mainEntityEndIdx = origHtml.indexOf(']', mainEntityIdx) + 1;

console.log('Found mainEntity from', mainEntityIdx, 'to', mainEntityEndIdx);
console.log('Old mainEntity slice:\n', origHtml.substring(mainEntityIdx, mainEntityEndIdx));

// Format new mainEntity JSON
const formattedEntities = JSON.stringify(newSchemaEntities, null, 10)
  .split('\n')
  .map((line, i) => i === 0 ? line : '        ' + line)
  .join('\n');

const newMainEntityStr = `"mainEntity": ${formattedEntities}`;

// Test replacing both
let updatedHtml = origHtml.substring(0, mainEntityIdx) + newMainEntityStr + origHtml.substring(mainEntityEndIdx);

// Now find FAQ section in the updated string (recalculate index)
const newFaqStartIndex = updatedHtml.indexOf(faqStartMarker);
const newFaqEndIndex = updatedHtml.indexOf(faqEndMarker, newFaqStartIndex) + faqEndMarker.length;

updatedHtml = updatedHtml.substring(0, newFaqStartIndex) + newFaqSection + updatedHtml.substring(newFaqEndIndex);

console.log('Replacement test successful!');
console.log('Updated HTML length:', updatedHtml.length, 'vs original:', origHtml.length);

// Verify JSON-LD parses cleanly
const sIdx = updatedHtml.indexOf('<script type="application/ld+json">');
const eIdx = updatedHtml.indexOf('</script>', sIdx);
const jsonString = updatedHtml.substring(sIdx + '<script type="application/ld+json">'.length, eIdx);
try {
  const parsed = JSON.parse(jsonString);
  console.log('Schema JSON successfully parsed!');
  const faqNode = parsed['@graph'].find(g => g['@type'] === 'FAQPage');
  console.log('FAQPage mainEntity count:', faqNode.mainEntity.length);
  console.log('First question:', faqNode.mainEntity[0].name);
  console.log('Last question:', faqNode.mainEntity[faqNode.mainEntity.length - 1].name);
} catch (e) {
  console.error('Schema parse error:', e.message);
  process.exit(1);
}

// Verify Tag Balance of the new FAQ section
function checkTagBalance(html) {
  const tags = ['div', 'section', 'button', 'span', 'h2', 'h3', 'p', 'svg'];
  tags.forEach(tag => {
    const openCount = (html.match(new RegExp(`<${tag}\\b[^>]*>`, 'gi')) || []).length;
    const closeCount = (html.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
    console.log(`Tag <${tag}>: open = ${openCount}, close = ${closeCount}, diff = ${openCount - closeCount}`);
    if (openCount !== closeCount) {
      console.warn(`Mismatch in <${tag}>!`);
    }
  });
}

console.log('\n--- Checking tag balance in new FAQ section ---');
checkTagBalance(newFaqSection);

fs.writeFileSync('scratch/test_updated_page.html', updatedHtml, 'utf8');
console.log('Saved preview to scratch/test_updated_page.html');
