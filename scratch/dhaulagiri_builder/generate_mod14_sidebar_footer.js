const fs = require('fs');

let pikeyMod14 = fs.readFileSync('scratch/pikey_builder/mod14_sidebar_footer.js', 'utf8');

let dhMod14 = pikeyMod14
  .replace(/\$799/g, '$1,999')
  .replace(/799/g, '1999')
  .replace(/9 days trip/g, '20 days trip')
  .replace(/9 Days/g, '20 Days')
  .replace(/Kathmandu \/ Phaplu/g, 'Kathmandu / Jomsom & Pokhara')
  .replace(/Pikey Peak/g, 'Dhaulagiri Circuit')
  .replace(/pikey peak/gi, 'Dhaulagiri Circuit')
  // Update group tiers
  .replace(/\$750/g, '$1,850')
  .replace(/\$699/g, '$1,720')
  .replace(/\$650/g, '$1,590');

fs.writeFileSync('scratch/dhaulagiri_builder/mod14_sidebar_footer.js', dhMod14, 'utf8');
console.log('Successfully wrote scratch/dhaulagiri_builder/mod14_sidebar_footer.js');

