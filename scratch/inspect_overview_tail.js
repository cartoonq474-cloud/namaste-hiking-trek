const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');
const glanceIdx = html.indexOf('At a glance: the highlights you will experience');
const end = html.indexOf('id="section-itinerary"');
console.log(html.substring(glanceIdx, glanceIdx + 1500));
console.log('--- WHY BOOK ---');
const whyIdx = html.indexOf('Why Book the Everest');
console.log(html.substring(whyIdx, whyIdx + 1500));

