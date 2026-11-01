const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find trek-gallery-collage
const idx = html.indexOf('trek-gallery-collage');
if (idx !== -1) {
  // Let's print the next 2000 characters after trek-gallery-collage
  console.log('--- CONTENT AFTER trek-gallery-collage ---');
  console.log(html.substring(idx, idx + 2500));
} else {
  console.log('trek-gallery-collage not found');
}
