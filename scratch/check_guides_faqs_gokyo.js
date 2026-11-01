const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Check section-details
const sDetails = gokyo.indexOf('id="section-details"');
console.log('=== SECTION DETAILS PREVIEW ===');
console.log(gokyo.slice(sDetails, sDetails + 1000));

// Check section-faqs
const sFaqs = gokyo.indexOf('id="section-faqs"');
console.log('=== SECTION FAQS PREVIEW ===');
console.log(gokyo.slice(sFaqs, sFaqs + 1000));
