const fs = require('fs');

const lines = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8').split('\n');

const markers = [
  '<!DOCTYPE html>',
  '<script type="application/ld+json">',
  '<!-- Page Title Section -->',
  '<!-- Key Trip Facts Grid -->',
  '<!-- Sticky Scroll-Spy Sub-Navigation Bar -->',
  '<!-- Section 1: Overview -->',
  '<!-- Section 2: Itinerary -->',
  '<!-- Section 3: Includes',
  '<!-- Section 4: Dates',
  '<!-- Section 5: Packing',
  '<!-- Section 6: Read Before',
  '<!-- Section 7: Map',
  '<!-- Section 8: Booking',
  '<!-- Section 9: Reviews',
  '<!-- Section 10: FAQ',
  '<!-- Sticky Booking Sidebar'
];

console.log('Total lines:', lines.length);

for (const m of markers) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(m)) {
      console.log(`Found "${m}" at line ${i + 1}`);
      break;
    }
  }
}
