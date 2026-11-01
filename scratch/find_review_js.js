const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, '..', 'js');
const files = fs.readdirSync(jsDir);
console.log('JS files:', files);

files.forEach(f => {
  if (f.endsWith('.js')) {
    const code = fs.readFileSync(path.join(jsDir, f), 'utf8');
    if (code.includes('reviews') || code.includes('review') || code.includes('testimonial')) {
      console.log(`\n--- ${f} references reviews: ---`);
      const lines = code.split('\n');
      lines.forEach((l, idx) => {
        if (/reviews|review|testimonial/i.test(l)) {
          console.log(`Line ${idx + 1}: ${l.trim().substring(0, 100)}`);
        }
      });
    }
  }
});
