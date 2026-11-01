const fs = require('fs');

let code = fs.readFileSync('scratch/gen_everest_section6_accordions.js', 'utf8');

const categories = {
  1: 'teahouse',
  2: 'teahouse',
  3: 'teahouse',
  4: 'teahouse',
  5: 'teahouse',
  6: 'teahouse',
  7: 'teahouse',
  8: 'health',
  9: 'health',
  10: 'health',
  11: 'logistics',
  12: 'logistics',
  13: 'logistics',
  14: 'logistics',
  15: 'logistics',
  16: 'permits',
  17: 'permits',
  18: 'permits',
  19: 'logistics',
  20: 'logistics',
  21: 'logistics'
};

for (let i = 1; i <= 21; i++) {
  const target = `<!-- Accordion ${i} -->\n            <div class="border border-gray-200`;
  const cat = categories[i] || 'logistics';
  const replacement = `<!-- Accordion ${i} -->\n            <div class="guidance-card border border-gray-200" data-guide-category="${cat}"`;
  code = code.replace(target, replacement);
}

fs.writeFileSync('scratch/gen_everest_section6_accordions.js', code, 'utf8');
console.log('Successfully tagged all 21 accordions with category data!');
