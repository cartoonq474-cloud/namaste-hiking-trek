const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const navStart = html.indexOf('<nav');
const allTreksStart = html.indexOf('<li class="nav-item has-dropdown mega-dropdown">', navStart);
// Find the end of this li (where the next nav-item starts or </nav>)
const nextLiStart = html.indexOf('<li class="nav-item', allTreksStart + 20);
console.log(html.substring(allTreksStart, nextLiStart));
