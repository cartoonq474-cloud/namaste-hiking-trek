const fs = require('fs');
const html = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const faqButtons = [...html.matchAll(/<button[^>]*class="[^"]*faq-category-btn[^"]*"[^>]*>([\s\S]*?)<\/button>/g)];
console.log('FAQ Buttons count:', faqButtons.length);
faqButtons.forEach(b => {
  console.log(b[0].replace(/<span[\s\S]*?<\/span>/g, '').trim());
});
