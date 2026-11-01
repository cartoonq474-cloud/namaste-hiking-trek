const fs = require('fs');

const file = 'trek/mardi-himal-trek/index.html';
if (!fs.existsSync(file)) {
  console.log(`File not found: ${file}`);
  process.exit(1);
}

const html = fs.readFileSync(file, 'utf8');
console.log('File size (bytes):', html.length);

const sections = [...html.matchAll(/id="(section-[^"]+)"/g)].map(m => m[1]);
console.log('Section IDs found:', sections);

const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1 Title:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'None');

const subnavMatches = [...html.matchAll(/data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('Subnav tabs found:', subnavMatches);

const dayMatches = [...html.matchAll(/Day\s+(\d+)[:\s]+([^<\n]+)/gi)].map(m => `Day ${m[1]}: ${m[2].trim()}`);
console.log('Days found in page (first 10):', dayMatches.slice(0, 10));
console.log('Total day matches:', dayMatches.length);
