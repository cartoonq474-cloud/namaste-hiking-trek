const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sAlt = html.indexOf('id="section-altitude-profile"');
const sWea = html.indexOf('id="section-weather"');
console.log(html.substring(sAlt, sWea));

