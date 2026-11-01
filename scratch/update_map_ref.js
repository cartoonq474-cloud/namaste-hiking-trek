const fs = require('fs');

let html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

html = html.replace(
  /<img src="\.\.\/\.\.\/images\/ebc-map\.png" alt="Annapurna Circuit Trek Route Map"[^>]*>/,
  '<img src="../../images/annapurna-circuit-trek-map.jpg" alt="Illustrated Annapurna Circuit Trek Route Map (14 Days)" style="display: block; width: 100%; height: auto; border-radius: var(--radius-md);">'
);

html = html.replace(
  /<a href="\.\.\/\.\.\/images\/ebc-map\.png" target="_blank"/,
  '<a href="../../images/annapurna-circuit-trek-map.jpg" target="_blank"'
);

fs.writeFileSync('trek/annapurna-circuit-trek/index.html', html, 'utf8');
console.log('Updated map image reference in index.html successfully!');
