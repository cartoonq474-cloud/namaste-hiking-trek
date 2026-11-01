const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const navStart = html.indexOf('<nav');
const navEnd = html.indexOf('</nav>', navStart);
const navHtml = html.substring(navStart, navEnd + 6);

// Find each dropdown and print its title and content
const lis = [...navHtml.matchAll(/<li\s+class="[^"]*nav-item[^"]*"[^>]*>([\s\S]*?)<\/li>/gi)];
console.log('Total nav-items:', lis.length);

lis.forEach((li, idx) => {
  const text = li[1];
  const firstA = text.match(/<a[^>]*class="nav-link"[^>]*>([\s\S]*?)<\/a>/i);
  const linkTitle = firstA ? firstA[1].replace(/<[^>]+>/g, '').trim() : 'Unknown';
  console.log(`\n=== Nav Item ${idx+1}: ${linkTitle} ===`);
  if (text.includes('everest')) {
    console.log('Contains Everest references: YES');
    // Print lines containing everest
    text.split('\n').forEach(line => {
      if (line.includes('everest') || line.includes('mega-column-title') || line.includes('dropdown-menu')) {
        console.log('  ' + line.trim());
      }
    });
  } else {
    console.log('Contains Everest references: NO');
  }
});
