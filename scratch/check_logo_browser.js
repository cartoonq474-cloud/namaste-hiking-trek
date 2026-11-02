const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEBUG_PORT = 9227;

async function checkLogo() {
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--remote-allow-origins=*',
    '--headless=new',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  function getJson(endpoint) {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${DEBUG_PORT}${endpoint}`, (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });
  }

  const list = await getJson('/json/list');
  const page = list.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id).resolve(msg.result);
      pending.delete(msg.id);
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');

  await send('Page.navigate', { url: 'http://localhost:8080/trek/dhaulagiri-circuit-trek/' });
  await new Promise(r => setTimeout(r, 4000));

  const res = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('.main-header');
      const logoLink = document.querySelector('.logo-brand');
      const logoImg = document.querySelector('.logo-brand img');
      const navMenu = document.querySelector('.nav-menu');
      const bookBtn = document.querySelector('.main-header .open-inquiry-btn');
      
      const getDim = el => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {
          exists: true,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          display: cs.display,
          position: cs.position
        };
      };

      return {
        header: getDim(header),
        logoLink: getDim(logoLink),
        logoImg: getDim(logoImg),
        navMenu: getDim(navMenu),
        bookBtn: getDim(bookBtn)
      };
    })()`,
    returnByValue: true
  });

  console.log('=== REAL-TIME BROWSER HEADER AUDIT ===');
  console.log(JSON.stringify(res.result.value, null, 2));

  ws.close();
  chromeProc.kill();
}

checkLogo().catch(console.error);
