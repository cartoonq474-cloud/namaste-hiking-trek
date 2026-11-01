const fs = require('fs');
const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const regex = /id="([^"]*modal[^"]*)"/gi;
let m;
const modals = [];
while ((m = regex.exec(html)) !== null) {
  modals.push(m[1]);
}
console.log('Modals found:', modals);

const scriptRegex = /<script[^>]*src="([^"]+)"/gi;
const scripts = [];
while ((m = scriptRegex.exec(html)) !== null) {
  scripts.push(m[1]);
}
console.log('External scripts:', scripts);
