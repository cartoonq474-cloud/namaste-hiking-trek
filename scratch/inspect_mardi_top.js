const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const navIdx = content.indexOf('<nav class="trek-subnav"');
const overviewIdx = content.indexOf('id="section-overview"');

console.log('--- START TO SUBNAV ---');
const heroStart = content.indexOf('<header class="site-header">');
const heroArea = content.slice(content.indexOf('<!-- Breadcrumb -->') !== -1 ? content.indexOf('<!-- Breadcrumb -->') : content.indexOf('<main'), navIdx);
console.log(heroArea);

console.log('--- SUBNAV TO OVERVIEW ---');
console.log(content.slice(navIdx, overviewIdx + 200));
