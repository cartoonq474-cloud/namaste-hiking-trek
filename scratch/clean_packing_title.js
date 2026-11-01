const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
html = html.replace(/Packing List for Mera Peak Climbing Trek/g, 'Packing List for Mera Peak Climbing (6,476m)');
fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
console.log('Cleaned packing list title');
