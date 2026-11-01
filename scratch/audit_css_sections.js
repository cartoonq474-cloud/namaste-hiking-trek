const fs = require('fs');
const path = require('path');

const css = fs.readFileSync('index.css', 'utf8');

const sectionSelectors = [
  'how-it-works',
  'review-section',
  'homepage-reviews',
  'trekking-gallery',
  'why-namaste-redesign',
  'founder-message',
  'team-specialists',
  'resources-section',
  'newsletter-cta',
  'faq-section',
  'cta-banner-section'
];

sectionSelectors.forEach(sel => {
  console.log(`\n=================== CSS FOR .${sel} or #${sel} ===================`);
  const regex = new RegExp(`(?:\\.|#)${sel}[^{]*\\{[^}]*\\}`, 'g');
  const matches = css.match(regex);
  if (matches) {
    matches.slice(0, 3).forEach(m => console.log(m.replace(/\s+/g, ' ').trim()));
  } else {
    console.log('No direct rule found in index.css');
  }
});
