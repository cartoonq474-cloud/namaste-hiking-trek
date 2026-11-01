const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const navStart = html.indexOf('<nav');
const navEnd = html.indexOf('</nav>', navStart);
if (navStart !== -1 && navEnd !== -1) {
  console.log('Nav length:', navEnd - navStart);
  const navHtml = html.substring(navStart, navEnd + 6);
  // Find all dropdowns or mega menus
  const dropdownMatches = [...navHtml.matchAll(/<li[^>]*class="[^"]*dropdown[^"]*"[^>]*>[\s\S]*?<\/li>/gi)];
  console.log('Total dropdown li elements:', dropdownMatches.length);
  
  // Look for Everest links in nav
  const everestLinks = [...navHtml.matchAll(/<a[^>]*href="([^"]*everest[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
  console.log('Everest links in nav:');
  everestLinks.forEach(m => console.log('  href:', m[1], 'text:', m[2].replace(/\s+/g, ' ').trim()));
}
