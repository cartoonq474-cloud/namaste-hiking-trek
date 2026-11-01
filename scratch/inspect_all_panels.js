const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const faqStart = actHtml.indexOf('id="section-faqs"');
const sbStart = actHtml.indexOf('class="sidebar-booking-card"');
const faqHtml = actHtml.slice(faqStart, sbStart);

const panels = [...faqHtml.matchAll(/id="(faq-cat-[^"]+)"/gi)];
console.log('Panels found with id="faq-cat-*":', panels.map(p => p[1]));

// Let's count items in each panel
panels.forEach(p => {
  const pId = p[1];
  const pIdx = faqHtml.indexOf(`id="${pId}"`);
  // find next panel or end of main panel
  const nextPIdx = faqHtml.slice(pIdx + 10).search(/id="faq-cat-|<\/div>\s*<\/div>\s*<\/section>/i);
  const pSlice = faqHtml.slice(pIdx, nextPIdx !== -1 ? pIdx + 10 + nextPIdx : pIdx + 5000);
  const items = [...pSlice.matchAll(/class="faq-item"/gi)];
  console.log(`Panel ${pId}: ${items.length} items`);
});
