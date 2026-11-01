const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
console.log('File size:', content.length, 'characters');
console.log('Lines:', content.split('\n').length);

const sectionMatches = content.match(/<section[^>]*id=["']([^"']+)["'][^>]*>/gi);
console.log('Sections with id:', sectionMatches);

const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
console.log('H1:', h1Matches);

const h2Matches = content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi);
console.log('H2 count:', h2Matches ? h2Matches.length : 0);
if (h2Matches) {
  h2Matches.forEach((h, idx) => console.log('H2[' + idx + ']: ' + h.replace(/<[^>]+>/g, '').trim()));
}
