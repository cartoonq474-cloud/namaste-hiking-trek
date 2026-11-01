const fs = require('fs');

// Simple PNG parser to check corners
function checkCorners(pngPath) {
  const buf = fs.readFileSync(pngPath);
  console.log(pngPath, 'length:', buf.length);
}

checkCorners('images/logo.png');
checkCorners('C:/Users/ASUS/.gemini/antigravity-ide/brain/d4913d2a-6e4e-415a-ad99-baf20a459e6e/.user_uploaded/media_1791454428249.png');
