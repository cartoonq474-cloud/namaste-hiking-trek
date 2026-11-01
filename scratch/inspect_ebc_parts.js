const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. Section 4 Dates Header & Toggle
const s4Start = ebc.indexOf('<section id="section-dates"');
const s4End = ebc.indexOf('</section>', s4Start);
const s4 = ebc.slice(s4Start, s4End + 10);
console.log('=== EBC SECTION 4 HEADER & STRUCTURE ===');
console.log(s4.slice(0, 1500));

// 2. Section 10 Booking
const s10Start = ebc.indexOf('<section id="section-booking"');
const s10End = ebc.indexOf('</section>', s10Start);
const s10 = ebc.slice(s10Start, s10End + 10);
console.log('\n=== EBC SECTION 10 BOOKING ===');
console.log(s10);

// 3. Consultation Banner before footer
const bannerStart = ebc.indexOf('Expedition Expertise at Your Service');
if (bannerStart !== -1) {
  const containerStart = ebc.lastIndexOf('<div', bannerStart);
  const outerStart = ebc.lastIndexOf('<section', bannerStart) !== -1 ? ebc.lastIndexOf('<section', bannerStart) : ebc.lastIndexOf('<div class="', bannerStart);
  console.log('\n=== EBC CONSULTATION BANNER ===');
  console.log(ebc.slice(bannerStart - 200, bannerStart + 1500));
} else {
  console.log('\n=== CONSULTATION BANNER NOT FOUND BY TEXT, SEARCHING BANNER/CTA ===');
  const footerStart = ebc.indexOf('<footer');
  console.log(ebc.slice(footerStart - 1500, footerStart));
}
