const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

console.log('Length:', content.length, 'chars');
console.log('Lines:', content.split('\n').length);

const sections = [...content.matchAll(/id="(section-[^"]+)"/g)].map(m => m[1]);
console.log('Sections found:', sections);

const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1:', h1 ? h1[1].replace(/\s+/g, ' ').trim() : 'NONE');

const heroBadge = content.match(/<span class="hero-badge"[^>]*>([\s\S]*?)<\/span>/i);
console.log('Hero Badge:', heroBadge ? heroBadge[1].trim() : 'NONE');

const facts = [...content.matchAll(/<div class="fact-label">([^<]+)<\/div>[\s\S]*?<div class="fact-value">([^<]+)<\/div>/g)].map(m => `${m[1].trim()}: ${m[2].trim()}`);
console.log('Facts:', facts.slice(0, 8));
