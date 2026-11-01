const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');
const links = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*>/gi)];
links.forEach(l => console.log(l[0]));
