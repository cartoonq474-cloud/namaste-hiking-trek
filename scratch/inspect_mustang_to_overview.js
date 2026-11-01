const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const heroEnd = content.indexOf('<section id="section-overview"');
console.log('Total length to overview:', heroEnd);
console.log(content.slice(0, 1500));
console.log('\n--- SLICE 2 ---\n');
console.log(content.slice(1500, 3000));
