const { exec } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlUrl = 'file:///c:/Users/ASUS/Downloads/Namaste%20Hiking%20Trek/tour/kathmandu-cultural-heritage-tour/index.html';

const proc = exec(`"${chromePath}" --headless --remote-debugging-port=9222 --disable-gpu "${htmlUrl}"`);

setTimeout(() => {
  http.get('http://127.0.0.1:9222/json', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const targets = JSON.parse(data);
        console.log('Targets count:', targets.length);
        const WebSocket = require('ws'); // let's see if ws exists
      } catch (e) {
        console.log('JSON parse or WS:', e.message);
      }
      proc.kill();
    });
  }).on('error', (err) => {
    console.error('Error connecting to Chrome:', err.message);
    proc.kill();
  });
}, 2000);
