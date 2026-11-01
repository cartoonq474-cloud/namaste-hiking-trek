const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== GOKYO BOTTOM SCRIPTS ===');
const gokyoScripts = gokyo.match(/<script[\s\S]*?<\/script>/g) || [];
gokyoScripts.forEach(s => console.log(s.slice(0, 300)));

console.log('\n=== EBC BOTTOM SCRIPTS ===');
const ebcScripts = ebc.match(/<script[\s\S]*?<\/script>/g) || [];
ebcScripts.forEach(s => console.log(s.slice(0, 300)));
