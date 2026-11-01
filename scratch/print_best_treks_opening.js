const fs = require('fs');

const hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');
const p = hub.indexOf('id="best-treks"');
console.log(hub.substring(p, p + 2000));
