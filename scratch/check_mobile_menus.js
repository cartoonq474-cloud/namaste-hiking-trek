const fs = require('fs');

const testFiles = [
  'index.html',
  'about.html',
  'everest-region-treks/index.html',
  'trek/everest-base-camp-luxury-trek/index.html'
];

testFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`=== ${f} ===`);
  const mobileMenu = content.match(/class="mobile-accordion-menu"[\s\S]*?<\/div>/);
  if (mobileMenu) {
    console.log('Mobile menu present, length:', mobileMenu[0].length);
  } else {
    console.log('No mobile-accordion-menu found');
    // What mobile menu classes exist?
    const mobMatches = content.match(/class="[^"]*mobile[^"]*"/g) || [];
    console.log('Mobile classes found:', [...new Set(mobMatches)]);
  }
});
