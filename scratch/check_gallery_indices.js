const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const heroSectionStart = template.indexOf('<section style="padding: 30px 0 10px 0;');
const heroSectionEnd = template.indexOf('</section>', heroSectionStart) + 10;
console.log('Hero section:', heroSectionStart, heroSectionEnd);

const galleryStart = template.indexOf('<div class="container" style="margin-bottom: 24px;">');
console.log('Gallery start:', galleryStart);

const factsStart = template.indexOf('<!-- Key Trip Facts Grid -->');
console.log('Facts start:', factsStart);

const trustBadgesStart = template.indexOf('<!-- Trust Badges Section -->');
console.log('Trust badges start:', trustBadgesStart);
