// Minimal JS for typing / matrix effects
(() => {
  // Typewriter for the main terminal line
  const lines = [
    "ollama run local-model --port 11434",
    "model loaded: slyme-gpt-local",
    "listening at http://localhost:11434",
    "your prompts are local — no cloud telemetry"
  ];
  const target = document.getElementById('type-target');

  let lineIdx = 0;
  let charIdx = 0;
  function typeLoop() {
    if (!target) return;
    if (lineIdx >= lines.length) {
      // loop after a pause
      setTimeout(() => { lineIdx = 0; charIdx = 0; target.textContent = ""; typeLoop(); }, 2600);
      return;
    }
    const current = lines[lineIdx];
    if (charIdx <= current.length) {
      target.textContent = current.slice(0, charIdx);
      charIdx++;
      setTimeout(typeLoop, 40 + Math.random()*30);
    } else {
      // finished line
      lineIdx++;
      charIdx = 0;
      const br = document.createElement('div');
      br.className = 'line muted';
      br.textContent = `$ ${current}`;
      const term = document.getElementById('terminal');
      if (term) term.insertBefore(br, target);
      setTimeout(typeLoop, 900);
    }
  }
  typeLoop();

  // Simple matrix-like moving dots using canvas
  function initMatrix() {
    const el = document.getElementById('matrix');
    if (!el) return;
    const canvas = document.createElement('canvas');
    el.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w, h, cols, ypos;
    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / 14) + 1;
      ypos = new Array(cols).fill(0).map(() => Math.random() * h);
    }
    window.addEventListener('resize', resize);
    resize();

    function run() {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
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

  // download button placeholder: smooth pulse and prompt
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn){
    downloadBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      const confirmMsg = "This is a placeholder link. Replace with your ISO/installer URL in index.html";
      alert(confirmMsg);
    });
  }
})();