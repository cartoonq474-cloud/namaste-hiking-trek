const fs = require('fs');

function readPNGInfo(filePath) {
  const buf = fs.readFileSync(filePath);
  // PNG signature is 8 bytes: 137 80 78 71 13 10 26 10
  // IHDR chunk starts at byte 8: length (4 bytes), type (4 bytes: 'IHDR'), width (4 bytes), height (4 bytes), bit depth (1 byte), color type (1 byte)
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const bitDepth = buf.readUInt8(24);
  const colorType = buf.readUInt8(25);
  return { width, height, bitDepth, colorType, size: buf.length };
}

const uploaded = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d4913d2a-6e4e-415a-ad99-baf20a459e6e\\.user_uploaded\\media_1791454428249.png';
const current = 'images/logo.png';

console.log('Uploaded PNG:', readPNGInfo(uploaded));
console.log('Current PNG:', readPNGInfo(current));
