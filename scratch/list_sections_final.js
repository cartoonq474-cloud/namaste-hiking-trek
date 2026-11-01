const fs = require('fs');
const s = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');
const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = regex.exec(s)) !== null) {
  console.log(m[1]);
}
