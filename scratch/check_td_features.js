const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('Does trek-details.js have gallery?', js.includes('galleryModal') || js.includes('galleryPhotos'));
console.log('Does trek-details.js have faq?', js.includes('faq-question-btn') || js.includes('setupFaqSection'));
console.log('Does trek-details.js have itinerary?', js.includes('itinerary-header'));
