const fs = require('fs');

function checkControls(file) {
  if (!fs.existsSync(file)) return 'NOT FOUND: ' + file;
  const html = fs.readFileSync(file, 'utf8');
  return {
    file,
    hasAccordionWrapper: html.includes('id="detailsAccordionWrapper"'),
    hasGuidePill: html.includes('guide-pill-btn'),
    hasGuideSearch: html.includes('id="guideSearchInput"'),
    hasToggleAll: html.includes('id="guidesToggleAllBtn"'),
    hasGuideCategory: html.includes('data-guide-category'),
    cardCount: (html.match(/class="detail-accordion-card"/g) || []).length
  };
}

console.log(checkControls('trek/everest-base-camp-trek/index.html'));
console.log(checkControls('trek/gokyo-ri-trek/index.html'));
console.log(checkControls('trek/annapurna-circuit-trek/index.html'));
console.log(checkControls('trek/khopra-ridge-trek/index.html'));

