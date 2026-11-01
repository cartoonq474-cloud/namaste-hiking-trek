const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

// Find .platform-subtabs in index.css
const matches = css.match(/\.platform-subtabs[^{]*\{[^}]*\}/g) || [];
console.log('Matches for .platform-subtabs:');
matches.forEach(m => console.log(m));

const btnMatches = css.match(/\.platform-subtab-btn[^{]*\{[^}]*\}/g) || [];
console.log('\nMatches for .platform-subtab-btn:');
btnMatches.forEach(m => console.log(m));
