const fs = require('fs');
const html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const matches = html.match(/class="[^"]*(sidebar|widget|sticky|pricing)[^"]*"/gi);
console.log(matches ? [...new Set(matches)] : 'None');

const asideIdx = html.indexOf('<aside');
console.log('aside index:', asideIdx);
if (asideIdx !== -1) {
  console.log(html.substring(asideIdx, asideIdx + 600));
}

