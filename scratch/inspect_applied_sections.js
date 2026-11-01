const fs = require('fs');

const testHtml = fs.readFileSync('scratch/test_parity_applied.html', 'utf8');

const regex = /<section[^>]*id="([^"]+)"[^>]*>/g;
let m;
console.log('--- SECTIONS IN test_parity_applied.html ---');
while ((m = regex.exec(testHtml)) !== null) {
  console.log('Section ID:', m[1]);
}

// Check Custom Trip CTA
const hasCta = testHtml.includes('custom-trip-cta-box');
console.log('Has custom-trip-cta-box:', hasCta);

// Check Highlights Grid
const hasHl = testHtml.includes('ebc-highlights-section');
console.log('Has ebc-highlights-section:', hasHl);

// Check Why Book Grid
const hasWb = testHtml.includes('why-book-container');
console.log('Has why-book-container:', hasWb);

// Check separated Section 3
const hasInc = testHtml.includes('What includes in this Everest View Trek?');
const hasExc = testHtml.includes('What Excludes in this Everest View Trek?');
console.log('Has separated Includes:', hasInc, '| Excludes:', hasExc);
