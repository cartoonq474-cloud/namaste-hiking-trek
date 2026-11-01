const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const sec1 = orig.indexOf('<section id="section-overview"');
console.log('Original Header & Hero section length:', sec1);

// Let's also check original aside (booking sidebar)
const asideMatch = orig.match(/<aside class="booking-sidebar"[\s\S]*?<\/aside>/i);
if (asideMatch) {
  console.log('Found original aside! Length:', asideMatch[0].length);
  fs.writeFileSync('scratch/original_aside.html', asideMatch[0], 'utf8');
}

// Let's also check original footer
const footerMatch = orig.match(/<footer class="site-footer"[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Found original footer! Length:', footerMatch[0].length);
  fs.writeFileSync('scratch/original_footer.html', footerMatch[0], 'utf8');
}
