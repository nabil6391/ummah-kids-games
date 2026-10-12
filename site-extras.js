// Shared by the hub and every game on this site (injected by inject-extras.sh).
// 1) Cookieless page-view analytics (GoatCounter) 2) a grown-ups-only WhatsApp feedback button.
(() => {
  // ---- settings --------------------------------------------------------------------------------
  const GOATCOUNTER_CODE = '';          // e.g. 'nabilmh' -> https://nabilmh.goatcounter.com ; empty = analytics off
  const PLAUSIBLE_HOST = 'https://stats.nabilmh.com'; // self-hosted Plausible (Hetzner, /opt/plausible); empty = off
  const WHATSAPP = '601161981135';      // +60 11-6198 1135

  // ---- analytics: no cookies, no personal data, no ad profiling --------------------------------
  if (GOATCOUNTER_CODE && !/^(localhost|127\.)/.test(location.hostname)) {
    window.goatcounter = { endpoint: `https://${GOATCOUNTER_CODE}.goatcounter.com/count` };
    const s = document.createElement('script');
    s.async = true; s.src = 'https://gc.zgo.at/count.js';
    document.head.appendChild(s);
  }

  if (PLAUSIBLE_HOST && !/^(localhost|127\.)/.test(location.hostname)) {
    const p = document.createElement('script');
    p.defer = true; p.src = `${PLAUSIBLE_HOST}/js/script.js`;
    p.setAttribute('data-domain', 'nabil6391.github.io'); // the domain you register in Plausible
    document.head.appendChild(p);
  }

  // ---- feedback button + dialog (not on the hub: it has its own feedback banner) -----------------
  if (document.documentElement.dataset.hub) return;
  const game = (document.title || 'Ummah Kids Games').split(/[—–·|-]/)[0].trim();
  const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  const links = [
    ['💬', 'Feedback on this game', wa(`Assalamu alaikum! Feedback on "${game}": `)],
    ['💡', 'An idea for this game', wa(`Assalamu alaikum! I have an idea for "${game}": `)],
    ['🎮', 'Suggest a new game', wa('Assalamu alaikum! I would love a game about: ')],
    ['🐞', 'Something is broken', wa(`Assalamu alaikum! Something went wrong in "${game}" (${location.pathname}): `)],
  ];

  const css = document.createElement('style');
  css.textContent = `
    #fbBtn{position:fixed;left:10px;bottom:10px;z-index:2147483000;display:flex;align-items:center;gap:6px;height:38px;padding:0 14px 0 10px;border-radius:999px;
      border:2px solid #fff;background:#25d366;color:#fff;font:800 14px/1 'Baloo 2',system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.35)}
    #fbBtn:hover,#fbBtn:focus-visible{background:#1ebe5a}
    #fbBox{position:fixed;inset:0;z-index:2147483001;display:none;place-items:center;background:rgba(0,0,0,.5);font-family:'Baloo 2',system-ui,sans-serif}
    #fbBox.open{display:grid}
    #fbBox>div{background:#fffaf0;color:#4a2f12;border-radius:22px;padding:20px 22px;width:min(92vw,340px);text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.4)}
    #fbBox h3{margin:0 0 4px;font-size:1.35rem}#fbBox p{margin:0 0 12px;line-height:1.3;font-size:.95rem}
    #fbBox a.opt{display:flex;align-items:center;gap:10px;margin:6px 0;padding:10px 14px;border-radius:14px;background:#25d366;color:#fff;font-weight:800;text-decoration:none;text-align:left}
    #fbBox a.opt:hover{background:#1ebe5a}
    #fbBox button{margin-top:8px;font:inherit;font-weight:800;border:0;border-radius:14px;padding:6px 18px;background:#e8dcc0;color:#4a2f12;cursor:pointer}`;
  document.head.appendChild(css);

  const btn = document.createElement('button');
  btn.id = 'fbBtn'; btn.type = 'button'; btn.setAttribute('aria-label', 'Feedback and ideas on WhatsApp (for grown-ups)');
  btn.innerHTML = '<span style="font-size:17px">💬</span>Feedback';
  const box = document.createElement('div');
  box.id = 'fbBox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
  box.innerHTML = `<div><h3>Tell us on WhatsApp 💚</h3>
    <p>For grown-ups: your ideas decide which games we build next.</p>
    ${links.map(([i, t, u]) => `<a class="opt" href="${u}" target="_blank" rel="noopener"><span>${i}</span>${t}</a>`).join('')}
    <button type="button">Close</button></div>`;
  const close = () => box.classList.remove('open');
  btn.onclick = () => box.classList.add('open');
  box.onclick = (ev) => { if (ev.target === box || ev.target.tagName === 'BUTTON') close(); };
  // while the box is open, keys go to the box only, so a game doesn't react behind it
  addEventListener('keydown', (ev) => { if (!box.classList.contains('open')) return; if (ev.key === 'Escape') close(); ev.stopImmediatePropagation(); ev.preventDefault(); }, true);
  const add = () => document.body.append(btn, box);
  document.body ? add() : addEventListener('DOMContentLoaded', add);
})();
