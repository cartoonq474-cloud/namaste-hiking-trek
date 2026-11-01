const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

// 1. Navigation / Tabs
const tabsNav = html.match(/<div class="review-tabs-container"[^>]*>([\s\S]*?)<\/div>/i) || html.match(/<div class="review-nav-pills"[^>]*>([\s\S]*?)<\/div>/i) || html.match(/<div class="reviews-tabs"[^>]*>([\s\S]*?)<\/div>/i) || html.match(/<ul class="nav-tabs"[^>]*>([\s\S]*?)<\/ul>/i);
console.log('--- Tabs Navigation ---');
const navMatch = html.match(/<div class="[^"]*tab[^"]*"[^>]*>([\s\S]*?)<\/div>/i) || html.substring(0, html.indexOf('id="reviews-video-pane"'));
console.log(navMatch ? navMatch[0] : 'Nav match not found');

// 2. Video Pane
const vStart = html.indexOf('id="reviews-video-pane"');
const cStart = html.indexOf('id="reviews-customer-pane"');
const pStart = html.indexOf('id="reviews-platform-pane"');

console.log('\n--- Video Pane preview ---');
console.log(html.substring(vStart, vStart + 600));

console.log('\n--- Customer Pane preview ---');
console.log(html.substring(cStart, cStart + 600));

console.log('\n--- Platform Pane preview ---');
console.log(html.substring(pStart, pStart + 600));
