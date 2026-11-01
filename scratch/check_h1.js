const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const h1Match = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
console.log('H1 match:', h1Match ? h1Match[0] : 'None');

const altMatch = html.includes('id="section-altitude-profile"');
console.log('altMatch:', altMatch);
const altTagMatch = html.match(/id=["']section-altitude[^"']*["']/);
console.log('altTagMatch:', altTagMatch ? altTagMatch[0] : 'None');

const itinCards = html.match(/class="itinerary-card/g);
console.log('itinCards count:', itinCards ? itinCards.length : 0);

const guideCards = html.match(/class="detail-accordion-card"/g);
console.log('guideCards count:', guideCards ? guideCards.length : 0);
