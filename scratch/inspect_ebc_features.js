const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function printSnippet(startStr, endStr) {
  const s = ebc.indexOf(startStr);
  if (s === -1) return "NOT FOUND";
  const e = ebc.indexOf(endStr, s);
  return ebc.substring(s, e > -1 ? e : s + 1000);
}

console.log("=== Dates Mode Toggle Snippet ===");
console.log(printSnippet('class="dates-mode-toggle"', '</div>'));

console.log("\n=== Packing Counter Snippet ===");
console.log(printSnippet('gear-checked-count', '</div>'));
