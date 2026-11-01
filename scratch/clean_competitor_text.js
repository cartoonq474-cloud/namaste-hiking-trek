const fs = require('fs');

const chunk = fs.readFileSync('scratch/competitor_html_itin.txt', 'utf8');

// Let's strip HTML tags or extract accordion items
const days = [];
// Look for day headers or accordion triggers
const regex = /Day\s*(\d+)[\s\S]*?(?:<\/div>|<\/li>)/gi;

// Let's print clean text segments
const text = chunk.replace(/<svg[\s\S]*?<\/svg>/gi, '')
                  .replace(/<[^>]+>/g, '\n')
                  .replace(/\n\s*\n/g, '\n')
                  .trim();

fs.writeFileSync('scratch/competitor_clean_itin.txt', text);
console.log('Saved clean competitor text, first 3000 chars:');
console.log(text.slice(0, 3000));
