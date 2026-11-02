const fs = require('fs');
const { getLineRange, linesToHtml } = require('./content_parser.js');

const itinLines = getLineRange(352, 598);
const itinHtml = linesToHtml(itinLines);

console.log("Itin lines count:", itinLines.length);
console.log("Generated HTML length:", itinHtml.length);
console.log("First 1000 chars:\n", itinHtml.substring(0, 1000));

