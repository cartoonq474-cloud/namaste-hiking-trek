const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');

const pos = js.indexOf('.faq-category-btn');
console.log('--- SURROUNDING FUNCTION IN trek-details.js ---');
// Look backward for function definition
const funcStart = js.lastIndexOf('function', pos);
console.log(js.slice(funcStart, funcStart + 500));

// Check where that function is called
const funcNameMatch = js.slice(funcStart, pos).match(/function\s+([a-zA-Z0-9_]+)/);
console.log('Function name:', funcNameMatch ? funcNameMatch[1] : 'anonymous/inline');
