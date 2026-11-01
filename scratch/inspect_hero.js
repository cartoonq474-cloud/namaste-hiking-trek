const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

console.log('=== HEAD / TITLE / META ===');
const headEnd = html.indexOf('</head>');
console.log(html.slice(0, 1200));

console.log('=== HERO SECTION ===');
const heroStart = html.indexOf('<section class="trek-hero"');
if (heroStart !== -1) {
  console.log(html.slice(heroStart, heroStart + 2000));
} else {
  const m = html.indexOf('class="hero');
  console.log('hero at:', m);
}
