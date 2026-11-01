const fs = require('fs');

const p = 'trek/manaslu-circuit-trek/index.html';
if (fs.existsSync(p)) {
  const content = fs.readFileSync(p, 'utf8');
  console.log('Manaslu page exists! Length:', content.length);
  // Match sections
  const secMatches = [...content.matchAll(/<section\b[^>]*id=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('Sections with ID:', secMatches);

  // Check data attributes
  const dataWrapper = content.match(/data-trek-details-wrapper[^>]*>/);
  console.log('data-trek-details-wrapper:', dataWrapper ? dataWrapper[0] : 'none');
} else {
  console.log('File does not exist at', p);
}
