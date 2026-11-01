const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const head = html.slice(0, html.indexOf('</head>'));
const matches = head.match(/<link[^>]+>/g);
console.log('CSS links in Khopra head:', matches);

