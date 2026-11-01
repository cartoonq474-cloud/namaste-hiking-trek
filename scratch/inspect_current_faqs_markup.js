const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const start = html.indexOf('id="section-faqs"');
const end = html.indexOf('</section>', start) + '</section>'.length;

console.log('FAQ section in index.html: length =', end - start);
console.log(html.slice(start, start + 1200));

// Check if any <script> is inside section-faqs
const section = html.slice(start, end);
console.log('Has <script> inside section-faqs:', section.includes('<script>'));
if (section.includes('<script>')) {
  const sStart = section.indexOf('<script>');
  console.log(section.slice(sStart, sStart + 500));
}
