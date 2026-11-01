const fs = require('fs');
const html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const s9 = html.indexOf('<!-- Section 9: FAQs -->');
const sec9End = html.indexOf('</section>', s9) + '</section>'.length;

console.log('Section 9 start:', s9);
console.log('Section 9 end:', sec9End);
console.log('Snippet after Section 9 end:');
console.log(html.substring(sec9End, sec9End + 300));
