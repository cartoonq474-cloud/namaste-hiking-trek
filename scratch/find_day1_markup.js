const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const match = html.match(/<!--\s*Day\s*0?1[\s\S]{0,500}/i) || html.match(/Day\s*1:[\s\S]{0,500}/i);
if (match) {
  console.log(match[0]);
} else {
  console.log('No direct match');
}
