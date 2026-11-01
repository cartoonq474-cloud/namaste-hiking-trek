const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const scriptTags = html.match(/<script\s+src="[^"]+"[^>]*><\/script>/gi);
console.log('Script tags:');
console.log(scriptTags);
