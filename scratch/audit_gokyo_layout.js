const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

console.log('Gokyo footer start:');
const gokyoFooter = gokyo.match(/<footer[\s\S]*?<\/footer>/i);
console.log(gokyoFooter ? gokyoFooter[0].substring(0, 300) : 'none');

console.log('\nGokyo sidebar card:');
console.log(gokyo.includes('class="sidebar-booking-card"'));

console.log('\nGokyo reviews panes:');
const revPanes = [...gokyo.matchAll(/id="(reviews-[^"]+)"/g)].map(m => m[1]);
console.log(revPanes);

console.log('\nGokyo FAQ sidebar:');
console.log(gokyo.includes('class="faq-sidebar-card"'));
