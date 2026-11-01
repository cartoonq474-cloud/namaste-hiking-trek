const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const sIdx = mardi.indexOf('id="section-details"');
const eIdx = mardi.indexOf('id="section-altitude-profile"');
const currentDetails = mardi.slice(sIdx, eIdx);

// Extract the 12 guide cards
const cardRegex = /<div class="guide-accordion-card"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
let m;
const guides = [];
while ((m = cardRegex.exec(currentDetails)) !== null) {
  const cardContent = m[1];
  const titleMatch = cardContent.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  const bodyMatch = cardContent.match(/<div class="guide-accordion-body"[^>]*>([\s\S]*)$/i);
  if (titleMatch && bodyMatch) {
    guides.push({
      title: titleMatch[1].replace(/<[^>]+>/g, '').trim(),
      body: bodyMatch[1].trim()
    });
  }
}

console.log(`Extracted ${guides.length} guides.`);
fs.writeFileSync('scratch/mardi_guides_data.json', JSON.stringify(guides, null, 2));
