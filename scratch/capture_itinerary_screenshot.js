const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = 8088;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join(__dirname, '..', reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not Found');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server started on port ${PORT}`);

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const outDesktop = path.resolve(__dirname, 'itinerary_desktop.png');
  const outMobile = path.resolve(__dirname, 'itinerary_mobile.png');

  try {
    console.log('Capturing desktop itinerary...');
    execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outDesktop}" --window-size=1400,900 http://127.0.0.1:${PORT}/trek/everest-base-camp-trek/#section-itinerary`);
    console.log(`Desktop itinerary screenshot saved (${fs.statSync(outDesktop).size} bytes)`);

    console.log('Capturing mobile itinerary...');
    execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outMobile}" --window-size=375,800 http://127.0.0.1:${PORT}/trek/everest-base-camp-trek/#section-itinerary`);
    console.log(`Mobile itinerary screenshot saved (${fs.statSync(outMobile).size} bytes)`);
  } catch (err) {
    console.error('Error during screenshot capture:', err.message);
  } finally {
    server.close(() => {
      console.log('Server closed. Verification done.');
    });
  }
});
