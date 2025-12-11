// Interactive behaviors: terminal typing, card preview, download placeholders
(() => {
  // Terminal typing
  const lines = [
    "ollama run slyme-gpt-local --port 11434",
    "model loaded: slyme-gpt-local",
    "listening at http://localhost:11434",
    "your prompts remain local — no cloud telemetry"
  ];
  const target = document.getElementById('type-target');
  const terminalStatus = document.getElementById('status');
  const modelNameEl = document.getElementById('modelName');

  let lineIdx = 0, charIdx = 0;
  function typeLoop() {
    if (!target) return;
    if (lineIdx >= lines.length) {
      setTimeout(() => {
        lineIdx = 0; charIdx = 0; // restart
        const term = document.getElementById('terminal');
        // clear older auto lines to keep terminal tidy (preserve welcome)
        const linesToKeep = Array.from(term.querySelectorAll('.line')).slice(-6);
        term.innerHTML = '';
        linesToKeep.forEach(n => term.appendChild(n));
        typeLoop();
      }, 2400);
      return;
    }
    const current = lines[lineIdx];
    if (charIdx <= current.length) {
      target.textContent = current.slice(0, charIdx);
      charIdx++;
      setTimeout(typeLoop, 38 + Math.random() * 40);
    } else {
      // finalize line
      const br = document.createElement('div');
      br.className = 'line muted';
      br.textContent = `$ ${current}`;
      const term = document.getElementById('terminal');
      if (term) term.insertBefore(br, target);
      // update preview status/model briefly
      terminalStatus.textContent = "Running";
      modelNameEl.textContent = current.split(' ')[2] || 'slyme-gpt-local';
      setTimeout(() => { terminalStatus.textContent = "Idle"; }, 1600);
      lineIdx++; charIdx = 0;
      setTimeout(typeLoop, 900);
    }
  }
  typeLoop();

  // Small matrix-like background using canvas
  function initMatrix() {
    const el = document.getElementById('matrix');
    const canvas = document.createElement('canvas');
    el.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w,h,cols,ypos;
    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; cols = Math.floor(w / 14) + 1; ypos = new Array(cols).fill(0).map(()=>Math.random()*h); }
    window.addEventListener('resize', resize);
    resize();
    function run() {
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(0,0,w,h);
      ctx.fillStyle = 'rgba(0,255,153,0.06)';
      ctx.font = '12px monospace';
      for (let i=0;i<cols;i++){
        const text = String.fromCharCode(0x30A0 + Math.random()*96);
        const x = i*14;
        ctx.fillText(text, x, ypos[i]);
        ypos[i] += 14 * (0.5 + Math.random()*0.9);
        if (ypos[i] > h) ypos[i] = -20;
      }
      requestAnimationFrame(run);
    }
    run();
  }
  initMatrix();

  // Card interactions: clicking or focusing a card updates preview
  const cards = document.querySelectorAll('.card[data-id]');
  const previewTitle = document.getElementById('previewTitle');
  cards.forEach(card => {
    card.addEventListener('click', () => selectCard(card));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') selectCard(card); });
    card.addEventListener('mouseover', () => card.classList.add('hover'));
    card.addEventListener('mouseout', () => card.classList.remove('hover'));
  });

  function selectCard(card) {
    const id = card.dataset.id || 'unknown';
    const title = card.querySelector('.card-title')?.textContent || id;
    const body = card.querySelector('.card-body')?.textContent || '';
    previewTitle.textContent = title;
    const model = (id === 'slyme-gpt') ? 'slyme-gpt-local' : (id === 'ollama') ? 'ollama' : id;
    document.getElementById('modelName').textContent = model;
    document.getElementById('status').textContent = 'Ready';
    // push a terminal line indicating selection
    const term = document.getElementById('terminal');
    const ln = document.createElement('div');
    ln.className = 'line muted';
    ln.textContent = `$ select ${id} — ${body}`;
    term.insertBefore(ln, target);
    // subtle visual focus
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  }

  // download / open interactions
  document.getElementById('downloadIso').addEventListener('click', () => {
    alert('Replace this placeholder with your ISO URL in index.html or update the download logic in assets/js/main.js');
  });

  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const act = btn.dataset.action;
      const parent = btn.closest('.card');
      if (act === 'download') {
        alert('Download placeholder — replace with the actual ISO link.');
      } else if (act === 'open' || act === 'launch') {
        selectCard(parent);
        // simulate opening a local web UI
        window.open('http://localhost:11434', '_blank');
      }
    });
  });

  // open terminal quick action
  document.getElementById('openTerminal').addEventListener('click', () => {
    const term = document.getElementById('terminal');
    const ln = document.createElement('div');
    ln.className = 'line muted';
    ln.textContent = `$ open terminal — local shell not available in demo`;
    term.insertBefore(ln, target);
    term.scrollTop = term.scrollHeight;
  });

  // copy CMD
  document.getElementById('copyCmd').addEventListener('click', async () => {
    const cmd = 'ollama run slyme-gpt-local --port 11434';
    try {
      await navigator.clipboard.writeText(cmd);
      alert('Command copied to clipboard: ' + cmd);
    } catch (e) {
      alert('Unable to copy command. Command: ' + cmd);
    }
  });

  // search/filter (basic)
  document.getElementById('search').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.card[data-id]').forEach(card => {
      const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const body = (card.querySelector('.card-body')?.textContent || '').toLowerCase();
      card.style.display = (title.includes(q) || body.includes(q)) ? '' : 'none';
    });
  });
})();