const fs = require('fs');
const path = require('path');

const targetDir = 'images/treks/upper-mustang';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToCopy = [
  {
    src: 'C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/upper_mustang_lo_manthang_walled_city_1793129612755.jpg',
    dest: 'images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg'
  },
  {
    src: 'C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/upper_mustang_drakmar_red_cliffs_1793129628935.jpg',
    dest: 'images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg'
  },
  {
    src: 'C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/upper_mustang_chhoser_sky_caves_1793129647507.jpg',
    dest: 'images/treks/upper-mustang/upper-mustang-chhoser-sky-caves-03.jpg'
  },
  {
    src: 'C:/Users/ASUS/.gemini/antigravity-ide/brain/fe1691d6-1667-4e08-b79c-889757b177b1/upper_mustang_kagbeni_gateway_1793129669130.jpg',
    dest: 'images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg'
  }
];

imagesToCopy.forEach(item => {
  if (fs.existsSync(item.src)) {
    fs.copyFileSync(item.src, item.dest);
    console.log(`Copied ${item.src} -> ${item.dest}`);
  } else {
    console.warn(`Source not found: ${item.src}`);
  }
});

console.log('Images in upper-mustang directory:', fs.readdirSync(targetDir));
