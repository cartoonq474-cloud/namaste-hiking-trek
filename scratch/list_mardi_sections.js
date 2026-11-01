const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Find all sections in Mardi
const regex = /<section\b[^>]*id=["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = regex.exec(mardi)) !== null) {
  console.log(`Found section: ${m[1]} at index ${m.index}`);
}
