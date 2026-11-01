const fs = require('fs');

const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Find all section tags
const sections = [...html.matchAll(/<section([^>]*)>/g)].map(m => m[1]);
console.log('Sections found:', sections.length);
sections.forEach((s, idx) => console.log(`Section ${idx + 1}: ${s.trim()}`));

// Find all h2 tags
const h2s = [...html.matchAll(/<h2([^>]*)>([\s\S]*?)<\/h2>/g)].map(m => m[2].replace(/<[^>]+>/g, '').trim());
console.log('\nH2 headings:');
h2s.forEach((h, idx) => console.log(`${idx + 1}. ${h}`));

// Find all sub-nav buttons
const subNav = [...html.matchAll(/<button[^>]*class="[^"]*trek-sub-nav-btn[^"]*"[^>]*data-tab="([^"]*)"/g)].map(m => m[1]);
console.log('\nSub-nav data-tab values:', subNav);

const subNavLinks = [...html.matchAll(/<a[^>]*href="#([^"]*)"[^>]*>/g)].map(m => m[1]);
console.log('\nAnchor links (#):', subNavLinks.slice(0, 30));
