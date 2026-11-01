const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\upper_mustang_route_map_1793131146007.jpg';
const dest = 'images/treks/upper-mustang/upper-mustang-route-map.jpg';

fs.copyFileSync(src, dest);
console.log('Successfully copied map to:', dest);
