const fs = require('fs');

const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

console.log('File size:', html.length);

// Extract title, canonical, meta description
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');

const metaDesc = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
console.log('Meta Desc:', metaDesc ? metaDesc[1] : 'NONE');

// Find all sections by id
const sections = [];
const secRegex = /<section[^>]*id=["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = secRegex.exec(html)) !== null) {
  sections.push(m[1]);
}
console.log('Sections with ID:', sections);

// Find headings h1, h2
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
console.log('H1s:', h1s);

const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
console.log('H2s (first 15):', h2s.slice(0, 15));

