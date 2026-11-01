const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

console.log('--- Checking CSS for reviews ---');
const reviewRules = css.match(/[^{}]*(?:review|testimonial)[^{]*\{[^}]*\}/gi) || [];
console.log(`Found ${reviewRules.length} CSS rules referencing review/testimonial.`);
console.log('\nSample rules:');
reviewRules.slice(0, 10).forEach(r => console.log(r.replace(/\s+/g, ' ').substring(0, 120)));
