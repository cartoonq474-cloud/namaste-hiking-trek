const fs = require('fs');
const html = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const matches = [...html.matchAll(/class="[^"]*breadcrumb[^"]*"/g)];
console.log('Breadcrumb class occurrences:', matches.length);
matches.forEach(m => console.log(m[0]));
