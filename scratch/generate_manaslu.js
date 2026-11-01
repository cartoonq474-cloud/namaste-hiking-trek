// Generator script for trek/manaslu-circuit-trek/index.html
const fs = require('fs');

console.log('Starting Manaslu Circuit Trek HTML generation...');

// Read the original file to obtain the exact <head> base assets, header, and footer
const originalHtml = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

// Header extract (starts at <header class="site-header" or <header class="main-header")
const headerStart = originalHtml.indexOf('<header class="');
const mainStart = originalHtml.indexOf('<main');
const siteHeaderHtml = originalHtml.substring(headerStart, mainStart);

// Footer extract
const footerStart = originalHtml.indexOf('<footer class="site-footer"');
const siteFooterHtml = originalHtml.substring(footerStart);

console.log('Extracted Header length:', siteHeaderHtml.length);
console.log('Extracted Footer length:', siteFooterHtml.length);
