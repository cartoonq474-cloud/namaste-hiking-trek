const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const matches = html.match(/data-altitude-m="\d+"/g) || [];
console.log('Total data-altitude-m tags in trek/mera-peak-climbing/index.html:', matches.length);

