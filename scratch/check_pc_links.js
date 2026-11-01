const fs = require('fs');
const content = fs.readFileSync('peak-climbing-nepal/index.html', 'utf8');

const links = content.match(/href="([^"]*)"/g);
console.log('Links in peak-climbing-nepal:', [...new Set(links)].filter(l => l.includes('peak') || l.includes('trek')));

