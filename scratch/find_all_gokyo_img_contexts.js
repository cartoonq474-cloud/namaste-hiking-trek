const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const regex = /<img[^>]+src=['"]([^'"]+)['"][^>]*>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null) {
  count++;
  const src = m[1];
  const context = html.substring(Math.max(0, m.index - 100), Math.min(html.length, m.index + 150));
  const classMatch = context.match(/class=['"]([^'"]+)['"]/);
  console.log(`[${count}] ${src} | near: ${classMatch ? classMatch[1] : 'no class'}`);
}
