const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

function summarizeSection(sectionHtml, name) {
  console.log(`\n================= ${name} =================`);
  const lines = sectionHtml.split('\n');
  console.log(`Total lines: ${lines.length}`);
  
  // Extract major classes, IDs, headings, tabs
  const hTags = sectionHtml.match(/<(h[1-6])[^>]*>[\s\S]*?<\/\1>/gi) || [];
  console.log('Headings:');
  hTags.forEach(h => console.log('  ', h.replace(/\s+/g, ' ').substring(0, 100)));

  const tabBtns = sectionHtml.match(/<button[^>]*class="[^"]*tab[^"]*"[^>]*>[\s\S]*?<\/button>/gi) || [];
  console.log('Tab Buttons:');
  tabBtns.forEach(b => console.log('  ', b.replace(/\s+/g, ' ').substring(0, 100)));

  const panels = sectionHtml.match(/id="[^"]*tab[^"]*"|class="[^"]*tab-panel[^"]*"/gi) || [];
  console.log('Panels/Ids matching tab:');
  panels.slice(0, 10).forEach(p => console.log('  ', p));
}

const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s14 = content.substring(content.indexOf('<section id="homepage-reviews"'), content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking'));

summarizeSection(s9, 'Section 9 (#reviews-section)');
summarizeSection(s14, 'Section 14 (#homepage-reviews)');
