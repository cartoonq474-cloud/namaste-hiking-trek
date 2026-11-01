const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('index.html', 'utf8');

console.log('=== VERIFYING REVIEWS TABS WIRING ===');

// Check main tab buttons
const mainTabs = [...content.matchAll(/<button[^>]*class="[^"]*review-tab-btn[^"]*"[^>]*data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('Main tab buttons data-tab values:', mainTabs);
mainTabs.forEach(id => {
  const panelExists = content.includes(`id="${id}"`);
  console.log(`  Tab Panel #${id}: ${panelExists ? 'FOUND' : 'MISSING!'}`);
});

// Check subtab buttons
const subtabs = [...content.matchAll(/<button[^>]*class="[^"]*platform-subtab-btn[^"]*"[^>]*data-platform="([^"]+)"/g)].map(m => m[1]);
console.log('\nPlatform subtabs data-platform values:', subtabs);
subtabs.forEach(plat => {
  const platContentExists = content.includes(`data-platform="${plat}"`) && content.includes(`class="platform-reviews-content`);
  console.log(`  Subtab Content [data-platform="${plat}"]: ${platContentExists ? 'FOUND' : 'MISSING!'}`);
});

// Check all image sources in reviews-section
const revSection = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const imgMatches = [...revSection.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('\nImage assets in #reviews-section:');
imgMatches.forEach(img => {
  const local = path.join(__dirname, '..', img);
  const exists = fs.existsSync(local);
  console.log(`  ${img}: ${exists ? 'EXISTS' : 'MISSING!'}`);
});

console.log('\n=== VERIFYING SECTION TRANSITIONS ===');
console.log('Does #how-it-works exist?', content.includes('id="how-it-works"'));
console.log('Does #reviews-section immediately follow #how-it-works?', content.indexOf('id="reviews-section"') > content.indexOf('id="how-it-works"'));
console.log('Does #trekking-gallery immediately follow #reviews-section?', content.indexOf('id="trekking-gallery"') > content.indexOf('id="reviews-section"'));
console.log('Is #homepage-reviews completely gone?', !content.includes('id="homepage-reviews"'));
console.log('Does #team-specialists exist?', content.includes('id="team-specialists"'));
console.log('Does #resources-section follow #team-specialists?', content.indexOf('id="resources-section"') > content.indexOf('id="team-specialists"'));
