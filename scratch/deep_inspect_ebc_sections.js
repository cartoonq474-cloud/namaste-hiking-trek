const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// 1. Find all <section> elements in EBC
const secRegex = /<section\b([^>]*)>([\s\S]*?)(?=<section\b|<\/main>|<footer|$)/gi;

let match;
let count = 0;
const ebcSections = [];

// Also let's inspect the sub-nav tabs of EBC
console.log('=== EBC SUB-NAV TABS ===');
const navRegex = /data-tab="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g;
let nMatch;
while ((nMatch = navRegex.exec(ebc)) !== null) {
  console.log(`Tab: data-tab="${nMatch[1]}" -> Label: "${nMatch[2].replace(/<[^>]+>/g, '').trim()}"`);
}

// Inspect all <section id="..."> in EBC
console.log('\n=== ALL <section id="..."> IN EBC ===');
const idRegex = /<section\s+[^>]*id="([^"]+)"[^>]*>/gi;
let idMatch;
while ((idMatch = idRegex.exec(ebc)) !== null) {
  console.log(`ID: #${idMatch[1]} | Full Tag: ${idMatch[0]}`);
}

// Also check all <h2> in EBC
console.log('\n=== ALL <h2> HEADINGS IN EBC ===');
const h2Regex = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
let h2Match;
let h2Idx = 0;
while ((h2Match = h2Regex.exec(ebc)) !== null) {
  h2Idx++;
  const text = h2Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  console.log(`${h2Idx}. ${text}`);
}
