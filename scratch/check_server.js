const http = require('http');

const req = http.get('http://127.0.0.1:8085/trek/mardi-himal-trek/', (res) => {
  console.log('Server responded with status:', res.statusCode);
  process.exit(0);
});

req.on('error', (err) => {
  console.log('Server error or not running:', err.message);
  process.exit(1);
});
