const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s5 = html.indexOf('<!-- Section 5: Trip Details -->');
const s6 = html.indexOf('<!-- Section 6: Map & Elevation -->');
const sec5Text = html.substring(s5, s6);

const idMatches = (sec5Text.match(/data-detail-id="([^"]+)"/g) || []).map(s => s.replace('data-detail-id="', '').replace('"', ''));
console.log('21 detail IDs:', idMatches);
