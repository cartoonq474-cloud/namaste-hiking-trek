const fs = require('fs');
const { getLineRange, linesToHtml } = require('./content_parser.js');

const routeLines = getLineRange(598, 783);
const routeHtml = linesToHtml(routeLines);
console.log("Route lines count:", routeLines.length, "HTML length:", routeHtml.length);

const safetyLines = getLineRange(1074, 1358);
const safetyHtml = linesToHtml(safetyLines);
console.log("Altitude safety lines count:", safetyLines.length, "HTML length:", safetyHtml.length);

