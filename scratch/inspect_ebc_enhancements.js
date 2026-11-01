const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. Why Book with Namaste Hiking Trek
const whyBookIdx = ebc.indexOf('why-book-section');
if (whyBookIdx !== -1) {
  const whyBookEnd = ebc.indexOf('</section>', whyBookIdx);
  console.log('=== EBC WHY BOOK SECTION ===');
  console.log(ebc.slice(whyBookIdx - 50, whyBookIdx + 2000));
} else {
  console.log('why-book-section not found by class');
  const w2 = ebc.indexOf('Why Book the Everest Base Camp');
  console.log(ebc.slice(w2 - 100, w2 + 1500));
}

// 2. Section 10 Booking
const sec10Idx = ebc.indexOf('id="section-booking"');
if (sec10Idx !== -1) {
  const sec10End = ebc.indexOf('</section>', sec10Idx) + 10;
  console.log('\n=== EBC SECTION 10 (BOOKING) ===');
  console.log(ebc.slice(sec10Idx, sec10End));
}

// 3. Consultation Banner before footer
const consultIdx = ebc.indexOf('Expedition Expertise');
if (consultIdx !== -1) {
  console.log('\n=== EBC CONSULTATION BANNER ===');
  console.log(ebc.slice(consultIdx - 150, consultIdx + 1200));
}
