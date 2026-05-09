/* ============================================================
   RYUU.DEV — Portfolio JavaScript
   ============================================================ */

// ── LOADING SCREEN ──────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    document.body.style.overflow = '';
    initReveal();
    animateSkillBars();
    animateLangBars();
  }, 2600);
});
document.body.style.overflow = 'hidden';

// ── CUSTOM CURSOR ───────────────────────────────────────────
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

// ── PARTICLES ───────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.4 + 0.2;
      this.vx = (Math.random() - 0.5) * 0.25;
      this.vy = (Math.random() - 0.5) * 0.25 - 0.1;
      this.alpha = Math.random() * 0.5 + 0.1;
      const colors = ['0,245,255','255,215,0','255,45,120'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -5 || this.x < -5 || this.x > W + 5) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,245,255,${0.04 * (1 - d / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(loop);
  }
  loop();
})();

// ── NAVBAR ──────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ── TYPED TEXT ──────────────────────────────────────────────
const phrases = [
  'Full-Stack Developer',
  'PHP & MySQL Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Cyberpunk at Heart',
  'Open Source Contributor',
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    el.textContent = phrase.slice(0, ci + 1);
    ci++;
    if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = phrase.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 45 : 85);
}
setTimeout(type, 3200);

// ── SCROLL REVEAL ────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
        // Trigger counters when stats come into view
        if (e.target.id === 'stats' || e.target.closest('#stats')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));

  // Also observe stats section for counters
  const statsSec = document.getElementById('stats');
  if (statsSec) {
    const statsIo = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        animateLangBars();
        buildContribGraph();
        buildMiniGraph();
        statsIo.disconnect();
      }
    }, { threshold: 0.2 });
    statsIo.observe(statsSec);
  }

  // Skill bars — observe stack section
  const stackSec = document.getElementById('stack');
  if (stackSec) {
    const skillIo = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { animateSkillBars(); skillIo.disconnect(); }
    }, { threshold: 0.2 });
    skillIo.observe(stackSec);
  }
}

// ── SKILL BARS ───────────────────────────────────────────────
function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
}

// ── LANG BARS ────────────────────────────────────────────────
function animateLangBars() {
  document.querySelectorAll('.lang-bar').forEach(bar => {
    const w = getComputedStyle(bar).getPropertyValue('--w').trim();
    bar.style.width = w;
  });
}

// ── COUNTERS ─────────────────────────────────────────────────
let countersAnimated = false;
function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  });
}

// ── CONTRIBUTION GRAPH ───────────────────────────────────────
function buildContribGraph() {
  const graph = document.getElementById('contrib-graph');
  if (!graph || graph.children.length) return;
  const cols = 52, rows = 7;
  const levels = [0,1,2,3,4];
  const colors = [
    'rgba(0,245,255,0.05)',
    'rgba(0,245,255,0.2)',
    'rgba(0,245,255,0.45)',
    'rgba(0,245,255,0.7)',
    'rgba(0,245,255,1)',
  ];

  for (let c = 0; c < cols; c++) {
    const col = document.createElement('div');
    col.className = 'contrib-col';
    for (let r = 0; r < rows; r++) {
      const cell = document.createElement('div');
      cell.className = 'contrib-cell';
      // Weighted random — more likely to be active in recent weeks
      const recent = c > 40 ? 0.7 : c > 30 ? 0.5 : 0.35;
      const rand = Math.random();
      let lvl = 0;
      if (rand < recent) {
        const sub = Math.random();
        lvl = sub < 0.3 ? 4 : sub < 0.55 ? 3 : sub < 0.75 ? 2 : 1;
      }
      cell.style.background = colors[lvl];
      if (lvl > 0) cell.title = `${lvl * 3} contributions`;
      col.appendChild(cell);
    }
    graph.appendChild(col);
  }
}

// ── MINI COMMIT GRAPH ────────────────────────────────────────
function buildMiniGraph() {
  const g = document.getElementById('commit-graph');
  if (!g || g.children.length) return;
  const data = [4,7,3,9,12,5,8,15,6,11,9,14,7,10,13,5,8,12,6,9,11,7];
  const max = Math.max(...data);
  data.forEach((v, i) => {
    const bar = document.createElement('div');
    bar.style.cssText = `
      flex:1; border-radius:2px 2px 0 0;
      height:${(v/max)*100}%;
      background:linear-gradient(var(--cyan),rgba(0,245,255,0.3));
      box-shadow:0 0 4px rgba(0,245,255,0.4);
      transition:height 1s cubic-bezier(0.4,0,0.2,1) ${i*40}ms;
      opacity:0.8;
    `;
    g.appendChild(bar);
  });
}

// ── CONTACT FORM ─────────────────────────────────────────────
window.sendMessage = function () {
  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const subject = document.getElementById('f-subject').value.trim();
  const message = document.getElementById('f-message').value.trim();
  const msgEl   = document.getElementById('form-msg');
  const btn     = document.getElementById('send-btn');

  if (!name || !email || !message) {
    msgEl.style.color = 'var(--magenta)';
    msgEl.textContent = '⚠ PLEASE FILL IN ALL REQUIRED FIELDS';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msgEl.style.color = 'var(--magenta)';
    msgEl.textContent = '⚠ INVALID EMAIL FORMAT';
    return;
  }

  btn.textContent = 'TRANSMITTING...';
  btn.style.opacity = '0.6';
  btn.disabled = true;

  setTimeout(() => {
    msgEl.style.color = 'var(--cyan)';
    msgEl.textContent = '✓ MESSAGE TRANSMITTED SUCCESSFULLY. WILL RESPOND WITHIN 24HRS.';
    btn.textContent = 'TRANSMIT MESSAGE';
    btn.style.opacity = '1';
    btn.disabled = false;
    document.getElementById('f-name').value = '';
    document.getElementById('f-email').value = '';
    document.getElementById('f-subject').value = '';
    document.getElementById('f-message').value = '';
  }, 1800);
};

// ── SMOOTH SCROLL ────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── ACTIVE NAV HIGHLIGHT ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
}, { passive: true });

// ── GLITCH FLICKER (random, subtle) ─────────────────────────
setInterval(() => {
  const glitches = document.querySelectorAll('.glitch');
  if (!glitches.length) return;
  const g = glitches[Math.floor(Math.random() * glitches.length)];
  g.style.animation = 'none';
  requestAnimationFrame(() => {
    g.style.animation = '';
  });
}, 3500);
