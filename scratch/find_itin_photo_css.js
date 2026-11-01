const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const matches = [...css.matchAll(/(\.itinerary-photo[^{]*\{[^}]*\})/gi)];
console.log(`Found ${matches.length} CSS rules matching .itinerary-photo:`);
matches.forEach(m => console.log(m[0]));
