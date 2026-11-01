const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = content.indexOf('<section id="section-reviews"');
const endIdx = content.indexOf('</section>', startIdx);

console.log('EBC Review Section length:', endIdx - startIdx);
const sectionHtml = content.substring(startIdx, endIdx + 10);
fs.writeFileSync('scratch/ebc_review_section.html', sectionHtml);

console.log('Saved to scratch/ebc_review_section.html');
