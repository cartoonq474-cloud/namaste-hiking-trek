const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s6 = html.indexOf('<!-- Section 6: Map & Elevation -->');
const s7 = html.indexOf('<!-- Section 7: Weather & Temperatures -->');
const s75 = html.indexOf('<!-- Section 7.5: Khopra Ridge Trek Map -->');
const s8 = html.indexOf('<!-- Section 8: Reviews -->');
const s9 = html.indexOf('<!-- Section 9: FAQs -->');
const sidebar = html.indexOf('class="booking-sidebar"');

console.log('Section 6 start:', s6);
console.log('Section 7 start:', s7);
console.log('Section 7.5 start:', s75);
console.log('Section 8 start:', s8);
console.log('Section 9 start:', s9);
console.log('Sidebar start:', sidebar);

console.log('Snippet of Section 6 (Elevation):');
console.log(html.substring(s6, s6 + 500));

console.log('Snippet of Section 7 (Weather):');
console.log(html.substring(s7, s7 + 500));

console.log('Snippet of Section 9 (FAQs):');
console.log(html.substring(s9, s9 + 500));

console.log('Snippet of Sidebar:');
if (sidebar !== -1) {
  console.log(html.substring(sidebar, sidebar + 500));
}
