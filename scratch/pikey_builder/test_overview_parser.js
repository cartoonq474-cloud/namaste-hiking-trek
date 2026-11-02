const fs = require('fs');
const { getLineRange, linesToHtml } = require('./content_parser.js');

const overviewLines = getLineRange(3, 352);
const overviewHtml = linesToHtml(overviewLines);

console.log("Overview lines count:", overviewLines.length);
console.log("Generated HTML length:", overviewHtml.length);
console.log("First 1000 chars:\n", overviewHtml.substring(0, 1000));

