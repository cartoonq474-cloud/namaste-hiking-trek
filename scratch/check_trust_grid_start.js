const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const p = template.indexOf('<div class="trek-trust-grid">');
console.log(template.substring(p - 150, p + 50));
