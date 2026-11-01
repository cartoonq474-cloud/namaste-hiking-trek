const fs = require('fs');

if (fs.existsSync('reviews.html')) {
  const content = fs.readFileSync('reviews.html', 'utf8');
  console.log('reviews.html exists, length:', content.length);
  const headings = content.match(/<h[1-3][^>]*>[\s\S]*?<\/h[1-3]>/gi) || [];
  console.log('Headings in reviews.html:', headings.slice(0, 5));
} else {
  console.log('reviews.html does not exist');
}
