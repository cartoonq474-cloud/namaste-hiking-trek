const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
console.log('Total characters:', content.length);
console.log('Lines:', content.split('\n').length);

const sections = [...content.matchAll(/<section[^>]*id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Sections with id:', sections);

const articleHeadings = [...content.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).slice(0, 30);
console.log('Sample Headings:', articleHeadings);
