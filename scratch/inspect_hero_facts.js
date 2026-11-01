const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const headerEnd = html.indexOf('</header>');

console.log(html.slice(headerEnd + 8500, headerEnd + 14500));
