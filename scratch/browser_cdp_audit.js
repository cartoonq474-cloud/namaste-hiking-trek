const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEBUG_PORT = 9226;
const TEMP_PROFILE = path.join(process.env.TEMP || 'C:\\temp', 'chrome_cdp_audit_' + Date.now());

async function run() {
  console.log('Spawning Chrome with remote debugging on port', DEBUG_PORT, '...');
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${TEMP_PROFILE}`,
    '--remote-allow-origins=*',
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ], { detached: false });

  await new Promise(r => setTimeout(r, 2000));

  async function getJson(endpoint) {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${DEBUG_PORT}${endpoint}`, (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch(e) { reject(new Error('Failed to parse: ' + data)); }
        });
      }).on('error', reject);
    });
  }

  try {
    const list = await getJson('/json/list');
    const pageTarget = list.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    let msgId = 1;
    const pending = new Map();
    let consoleLogs = [];
    let networkFailures = [];

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const p = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) p.reject(msg.error);
        else p.resolve(msg.result);
      } else if (msg.method) {
        if (msg.method === 'Runtime.consoleAPICalled') {
          consoleLogs.push({
            type: msg.params.type,
            args: msg.params.args ? msg.params.args.map(a => a.value || a.description).join(' ') : ''
          });
        } else if (msg.method === 'Network.responseReceived') {
          const resp = msg.params.response;
          if (resp.status >= 400) {
            networkFailures.push({ url: resp.url, status: resp.status, statusText: resp.statusText });
          }
        }
      }
    };

    await send('Page.enable');
    await send('Runtime.enable');
    await send('Network.enable');

    async function auditUrl(url, label) {
      console.log(`\n========================================`);
      console.log(`AUDITING URL: ${url} (${label})`);
      console.log(`========================================`);

      consoleLogs = [];
      networkFailures = [];

      await send('Page.navigate', { url });
      console.log('Navigated. Waiting 5s for full render & visualizers...');
      await new Promise(r => setTimeout(r, 5000));

      const evalResp = await send('Runtime.evaluate', {
        expression: `(() => {
          const report = {};
          
          // CSS tokens
          const rootStyle = getComputedStyle(document.documentElement);
          report.tokens = {
            navy: rootStyle.getPropertyValue('--color-primary-navy').trim(),
            emerald: rootStyle.getPropertyValue('--color-emerald-green').trim(),
            copper: rootStyle.getPropertyValue('--color-copper-orange').trim(),
            bodyFont: getComputedStyle(document.body).fontFamily,
            bodyColor: getComputedStyle(document.body).color
          };

          report.counts = {
            sections: document.querySelectorAll('.trek-detail-section').length,
            subNavButtons: document.querySelectorAll('.trek-sub-nav-btn').length,
            factsItems: document.querySelectorAll('.trek-facts-grid .trek-fact-item, .trek-facts-grid > div').length,
            trustItems: document.querySelectorAll('.trek-trust-grid > div').length,
            itineraryCards: document.querySelectorAll('.itinerary-card').length,
            guideAccordions: document.querySelectorAll('.detail-accordion-card').length,
            faqCards: document.querySelectorAll('.faq-item, .faq-accordion-card').length,
            svgCharts: document.querySelectorAll('.altitude-chart-svg, .weather-chart-canvas').length,
            images: document.querySelectorAll('img').length
          };

          report.interactions = {};
          
          // 1. Test Learn More toggle
          const learnMoreBtn = document.querySelector('#dhaulagiri-toggle-btn') || document.querySelector('#pikey-toggle-btn');
          if (learnMoreBtn) {
            const moreText = document.querySelector('#dhaulagiri-more-text') || document.querySelector('#pikey-more-text');
            const initialDisp = moreText ? getComputedStyle(moreText).display : 'none';
            learnMoreBtn.click();
            const afterDisp = moreText ? getComputedStyle(moreText).display : 'none';
            learnMoreBtn.click(); // restore
            report.interactions.learnMore = {
              btnId: learnMoreBtn.id,
              initialDisplay: initialDisp,
              expandedDisplay: afterDisp,
              working: initialDisp !== afterDisp
            };
          }

          // 2. Test Itinerary accordion click
          const firstItinHeader = document.querySelector('.itinerary-header');
          if (firstItinHeader) {
            const card = firstItinHeader.closest('.itinerary-card');
            const initialOpen = card.classList.contains('active') || card.classList.contains('is-open');
            firstItinHeader.click();
            const afterClick = card.classList.contains('active') || card.classList.contains('is-open');
            firstItinHeader.click(); // restore
            report.interactions.itineraryToggle = {
              initial: initialOpen,
              afterClick: afterClick,
              working: initialOpen !== afterClick
            };
          }

          // 3. Test Guide accordion click
          const firstGuideHeader = document.querySelector('.detail-accordion-header');
          if (firstGuideHeader) {
            const card = firstGuideHeader.closest('.detail-accordion-card');
            const initialActive = card.classList.contains('active');
            firstGuideHeader.click();
            const afterActive = card.classList.contains('active');
            firstGuideHeader.click(); // restore
            report.interactions.guideToggle = {
              initial: initialActive,
              afterClick: afterActive,
              working: initialActive !== afterActive
            };
          }

          // 4. Test Guide Search filter
          const searchInput = document.querySelector('#guideSearchInput');
          if (searchInput) {
            searchInput.value = 'French Pass';
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            const matchCount = Array.from(document.querySelectorAll('.detail-accordion-card')).filter(c => getComputedStyle(c).display !== 'none').length;
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
            const restoredCount = Array.from(document.querySelectorAll('.detail-accordion-card')).filter(c => getComputedStyle(c).display !== 'none').length;
            report.interactions.guideSearch = {
              query: 'French Pass',
              matchCount,
              restoredCount,
              working: matchCount > 0 && matchCount < restoredCount
            };
          }

          // 5. Test Guide Category Filter Pills
          const routePill = document.querySelector('.guide-pill-btn[data-filter="route"]');
          const allPill = document.querySelector('.guide-pill-btn[data-filter="all"]');
          if (routePill && allPill) {
            routePill.click();
            const routeCount = Array.from(document.querySelectorAll('.detail-accordion-card')).filter(c => getComputedStyle(c).display !== 'none').length;
            allPill.click();
            const allCount = Array.from(document.querySelectorAll('.detail-accordion-card')).filter(c => getComputedStyle(c).display !== 'none').length;
            report.interactions.categoryFilter = {
              routeCount,
              allCount,
              working: routeCount > 0 && routeCount < allCount && allCount === 21
            };
          }

          // 6. Test Sidebar Guest counter and price update
          const plusBtn = document.querySelector('button[onclick*="changeSidebarGuests(1)"]');
          const minusBtn = document.querySelector('button[onclick*="changeSidebarGuests(-1)"]');
          const guestCountEl = document.querySelector('#sidebar-guests-count');
          const priceEl = document.querySelector('#sidebar-display-price');
          if (minusBtn && guestCountEl && priceEl) {
            // currently at 2 guests ($1,999) -> click minus -> 1 guest ($2,499)
            minusBtn.click();
            const soloCount = guestCountEl.textContent.trim();
            const soloPrice = priceEl.textContent.trim();
            // click plus -> 2 guests ($1,999)
            plusBtn.click();
            const pairCount = guestCountEl.textContent.trim();
            const pairPrice = priceEl.textContent.trim();
            report.interactions.sidebarCalculator = {
              soloCount,
              soloPrice,
              pairCount,
              pairPrice,
              working: soloPrice === '$2499' && pairPrice === '$1999'
            };
          }

          return report;
        })()`,
        returnByValue: true
      });

      const data = evalResp.result ? evalResp.result.value : null;

      console.log('\n--- NETWORK FAILURES (404/500) ---');
      if (networkFailures.length === 0) {
        console.log('Zero 404/500 network failures! All stylesheets, scripts, and images loaded successfully.');
      } else {
        networkFailures.forEach(f => console.log(`[HTTP ${f.status}] ${f.url}`));
      }

      console.log('\n--- BROWSER CONSOLE LOGS / ERRORS ---');
      const errLogs = consoleLogs.filter(l => l.type === 'error' || l.type === 'assert');
      if (errLogs.length === 0) {
        console.log('Zero console errors! Page executed cleanly without exceptions.');
      } else {
        errLogs.forEach(l => console.log(`[CONSOLE ${l.type.toUpperCase()}] ${l.args}`));
      }

      return {
        url,
        label,
        networkFailures,
        consoleErrors: errLogs,
        data
      };
    }

    const dhaulagiriReport = await auditUrl('http://localhost:8080/trek/dhaulagiri-circuit-trek/', 'Dhaulagiri Circuit Trek (Updated)');
    console.log('\n=== REAL-TIME BROWSER AUDIT REPORT ===');
    console.log('Counts:', JSON.stringify(dhaulagiriReport.data.counts, null, 2));
    console.log('Interactions:', JSON.stringify(dhaulagiriReport.data.interactions, null, 2));

    ws.close();
  } catch(err) {
    console.error('Audit run error:', err);
  } finally {
    try {
      chromeProc.kill();
      fs.rmSync(TEMP_PROFILE, { recursive: true, force: true });
    } catch(e) {}
  }
}

run();
