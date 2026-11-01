const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find all sections and their headings
const sections = [...html.matchAll(/<(?:section|div class="container")[^>]*>([\s\S]*?)<\/(?:section|div)>/gi)];

// Let's trace all <img> tags and their nearest parent/heading
const allImgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];

console.log(`Total <img> tags in EBC: ${allImgMatches.length}\n`);

allImgMatches.forEach((m, idx) => {
  const src = m[1];
  const pos = m.index;
  // Find preceding 150 characters to identify context
  const before = html.substring(Math.max(0, pos - 300), pos);
  const headingMatch = before.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi) ||
                       before.match(/class=["']([^"']+)["']/gi);
  const lastContext = headingMatch ? headingMatch[headingMatch.length - 1] : 'unknown';
  
  if (src.includes('unsplash') || src.includes('treks')) {
    console.log(`${idx + 1}. [${src.startsWith('http') ? 'UNSPLASH' : 'AUTHENTIC'}] ${src.slice(0, 70)}... | context: ${lastContext.replace(/<[^>]+>/g, '').trim().slice(0, 40)}`);
  }
});
