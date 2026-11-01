const fs = require('fs');

const hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');
const p = hub.indexOf('id="best-treks"');
const end = hub.indexOf('</section>', p);
const section = hub.substring(p, end);

const cardRegex = /<article[\s\S]*?<\/article>/gi;
let match;
let i = 1;
while ((match = cardRegex.exec(section)) !== null) {
  const cardHtml = match[0];
  const title = (cardHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) || [])[1];
  const link = (cardHtml.match(/href="([^"]+)"/i) || [])[1];
  console.log(`Card ${i++}: Title: "${title?.trim()}", Link: "${link}"`);
}
