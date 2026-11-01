const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const startMarker = '<!-- SECTION 2: ITINERARY -->';
const endMarker = '<!-- SECTION 3: INCLUDES & EXCLUDES -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

console.log('startIndex:', startIndex);
console.log('endIndex:', endIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const currentSec2 = content.substring(startIndex, endIndex);
  console.log('Current Section 2 character length:', currentSec2.length);
  console.log('First 150 chars:\n', currentSec2.slice(0, 150));
  console.log('Last 150 chars:\n', currentSec2.slice(-150));
}
