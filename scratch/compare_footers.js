const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const abc = fs.readFileSync('trek/annapurna-base-camp-luxury-trek/index.html', 'utf8');

const ebcFooter = ebc.match(/<footer[\s\S]*?<\/footer>/i)[0];
const abcFooter = abc.match(/<footer[\s\S]*?<\/footer>/i)[0];

console.log('EBC Footer length:', ebcFooter.length);
console.log('ABC Footer length:', abcFooter.length);
console.log('EBC footer class:', ebcFooter.match(/class="[^"]*"/)[0]);
console.log('ABC footer class:', abcFooter.match(/class="[^"]*"/)[0]);
console.log('EBC has footer-luxury-layout:', ebcFooter.includes('footer-luxury-layout'));
console.log('ABC has footer-luxury-layout:', abcFooter.includes('footer-luxury-layout'));
console.log('EBC has watermark-brand-text:', ebc.includes('watermark-brand-text'));
console.log('ABC has watermark-brand-text:', abc.includes('watermark-brand-text'));
