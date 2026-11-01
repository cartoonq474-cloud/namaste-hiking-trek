const fs = require('fs');

const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Phone & WhatsApp Round Buttons -->');
console.log(html.substring(sIdx + 2400, sIdx + 3000));
