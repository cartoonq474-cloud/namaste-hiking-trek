const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');

const altIdx = orig.indexOf('id="section-altitude-profile"');
const faqsIdx = orig.indexOf('id="section-faqs"');
const faqsEnd = orig.indexOf('</section>', faqsIdx) + 10;

console.log('Original sections 7-12 snippet:');
console.log('Altitude section start:');
console.log(orig.slice(altIdx, altIdx + 1200));

console.log('\nWeather section start:');
const weaIdx = orig.indexOf('id="section-weather"');
console.log(orig.slice(weaIdx, weaIdx + 800));

console.log('\nMap section start:');
const mapIdx = orig.indexOf('id="section-map"');
console.log(orig.slice(mapIdx, mapIdx + 600));

console.log('\nReviews section start:');
const revIdx = orig.indexOf('id="section-reviews"');
console.log(orig.slice(revIdx, revIdx + 600));
