const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

console.log('--- Page Head Title & Meta ---');
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'none');

const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
console.log('Meta Description:', descMatch ? descMatch[1] : 'none');

console.log('--- Sub Nav Items ---');
const subNavBtns = [...html.matchAll(/<button[^>]*class="trek-sub-nav-btn[^"]*"[^>]*data-tab="([^"]*)"[^>]*>([\s\S]*?)<\/button>/g)];
subNavBtns.forEach(b => console.log(`  Tab: ${b[1]} | Label: ${b[2].replace(/<[^>]+>/g, '').trim()}`));

console.log('--- Check Sidebar quick facts ---');
const sidebarSnippet = html.substring(html.indexOf('class="trek-sidebar"'), html.indexOf('class="trek-sidebar"') + 1500);
console.log(sidebarSnippet.substring(0, 800));
