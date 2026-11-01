const fs = require('fs');

function readPNGInfo(filePath) {
  const buf = fs.readFileSync(filePath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const bitDepth = buf.readUInt8(24);
  const colorType = buf.readUInt8(25);
  return { width, height, bitDepth, colorType, size: buf.length };
}

console.log('Test logo 1000:', readPNGInfo('scratch/test_logo_1000.png'));
