const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = 8089;
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
  const outDesktop = path.resolve(__dirname, 'verified_desktop.png');
  const outMobile = path.resolve(__dirname, 'verified_mobile.png');

  try {
    console.log('Capturing desktop rendering...');
    execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outDesktop}" --window-size=1280,800 http://127.0.0.1:${PORT}/`);
    console.log(`Desktop screenshot captured (${fs.statSync(outDesktop).size} bytes)`);

    console.log('Capturing mobile rendering...');
    execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outMobile}" --window-size=375,667 http://127.0.0.1:${PORT}/`);
    console.log(`Mobile screenshot captured (${fs.statSync(outMobile).size} bytes)`);
  } catch (err) {
    console.error('Error during screenshot capture:', err.message);
  } finally {
    server.close(() => {
      console.log('Server closed successfully. Verification complete!');
    });
  }
});
