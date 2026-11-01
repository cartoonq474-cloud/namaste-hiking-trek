const fs = require('fs');
const content = fs.readFileSync('tour/nepal-luxury-helicopter-tour/index.html', 'utf8');
const regex = /src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/gi;
let match;
const results = new Set();
while ((match = regex.exec(content)) !== null) {
  results.add(match[1]);
}
console.log('Images in heli tour:', Array.from(results));
