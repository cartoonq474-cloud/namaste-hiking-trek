const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

console.log('CSR in CSS:', css.includes('csr-impact'));
