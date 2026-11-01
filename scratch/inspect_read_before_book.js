const fs = require('fs');

const khopra = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const s5Khopra = khopra.indexOf('<!-- Section 5: Read Before You Book');
console.log('--- KHOPRA SECTION 5 START ---');
console.log(khopra.substring(s5Khopra, s5Khopra + 2000));

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const s5Ebc = ebc.indexOf('Read Before You Book') !== -1 ? ebc.indexOf('Read Before You Book') : ebc.indexOf('details-section-container');
console.log('--- EBC SECTION 5 / DETAILS ---');
console.log(ebc.substring(s5Ebc - 100, s5Ebc + 2000));
