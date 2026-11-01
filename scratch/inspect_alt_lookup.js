const fs = require('fs');
const altJs = fs.readFileSync('js/altitude-visualizer.js', 'utf8');

const initMatch = altJs.match(/data-trek-key[\s\S]*?\{/);
console.log('init match:', initMatch ? initMatch[0] : 'None');

// Also print the structure of an ebc profile
const ebcMatch = altJs.match(/"ebc":\s*\{[\s\S]*?\}\s*,\s*"ebc_cho_la"/);
if (ebcMatch) {
  console.log('EBC profile:');
  console.log(ebcMatch[0].slice(0, 800));
}

