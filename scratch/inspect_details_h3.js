const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const detailsMatch = ebc.match(/<section[^>]*id="section-details"[\s\S]*?<\/section>/i);
if (detailsMatch) {
  const h3s = [...detailsMatch[0].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H3 in section-details:', h3s);
}
