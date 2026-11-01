const fs = require('fs');

const trekDetailsJs = fs.readFileSync('js/trek-details.js', 'utf8');
const accIdx = trekDetailsJs.indexOf('card.querySelector(\'.d');
console.log(trekDetailsJs.slice(accIdx, accIdx + 1200));
