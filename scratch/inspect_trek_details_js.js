const fs = require('fs');
const trekDetailsJs = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('trek-details.js length:', trekDetailsJs.length);
const keyMatches = trekDetailsJs.match(/data-trek-key[^\n]*/g);
console.log('data-trek-key matches:', keyMatches);

const progressMatches = trekDetailsJs.match(/details-progress[^\n]*/g);
console.log('progress matches:', progressMatches ? progressMatches.slice(0, 5) : 'None');

