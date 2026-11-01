const fs = require('fs');

// Check PNG color type
function inspectPNG(filePath) {
  const buf = fs.readFileSync(filePath);
  const colorType = buf[25]; // 0: grayscale, 2: RGB, 3: indexed, 4: grayscale+alpha, 6: RGBA
  console.log(filePath, 'colorType:', colorType, '(6 = RGBA)');
}

inspectPNG('images/logo.png');
inspectPNG('C:/Users/ASUS/.gemini/antigravity-ide/brain/d4913d2a-6e4e-415a-ad99-baf20a459e6e/.user_uploaded/media_1791454428249.png');
