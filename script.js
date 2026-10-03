/* ==========================================================
   Rodrigo Infante — Links
   Edita PRODUCTS para cambiar nombres, textos, colores o enlaces.
   ========================================================== */
const PRODUCTS = [
  {
    tag: "App dental",
    title: "Dent Pocket",
    desc: "Odontograma digital para tu consulta: registra, marca y exporta en PDF en segundos.",
    cta: "Conocer Dent Pocket",
    url: "https://dentpocket.com",
    c1: "#3dd6c3",
    c2: "#8b6cff",
    art: "dent",
  },
  {
    tag: "Colección",
    title: "Arcade",
    desc: "Una colección de experiencias y juegos retro para jugar directo en el navegador.",
    cta: "Ver la colección",
    url: "https://rodrigoinfante48.github.io/ARCADE/#coleccion",
    c1: "#ff3dbb",
    c2: "#ffb13d",
    art: "arcade",
  },
  {
    tag: "Guía de inversión",
    title: "De cero a inversionista",
    desc: "Invierte en Wall Street con esta guía paso a paso.",
    cta: "Obtener acceso",
    url: "https://pay.hotmart.com/S103203527C?bid=1764518330085",
    c1: "#c6ff3d",
    c2: "#3de7ff",
    art: "pro",
  },
];

/* ---------- Ilustraciones SVG de cada tarjeta ---------- */
const ART = {
  dent: `
    <svg viewBox="0 0 380 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="dots-d" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="rgba(255,255,255,.14)"/></pattern>
        <radialGradient id="glow-teal" cx="0" cy=".55" r=".85"><stop offset="0" stop-color="#3dd6c3" stop-opacity=".55"/><stop offset=".45" stop-color="#0b3b3c" stop-opacity=".7"/><stop offset="1" stop-color="#0b3b3c" stop-opacity="0"/></radialGradient>
        <radialGradient id="glow-violet" cx="1" cy=".45" r=".7"><stop offset="0" stop-color="#8b6cff" stop-opacity=".35"/><stop offset="1" stop-color="#8b6cff" stop-opacity="0"/></radialGradient>
        <radialGradient id="glow-mint" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3dd6c3" stop-opacity=".45"/><stop offset="1" stop-color="#3dd6c3" stop-opacity="0"/></radialGradient>
        <linearGradient id="tooth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f2fbf9"/><stop offset="1" stop-color="#a8efe3"/></linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="rgba(255,255,255,.22)"/><stop offset="1" stop-color="rgba(255,255,255,.05)"/></linearGradient>
      </defs>
      <rect width="380" height="300" fill="#0b0f14"/>
      <rect width="380" height="300" fill="url(#glow-teal)"/>
      <rect width="380" height="300" fill="url(#glow-violet)"/>
      <rect width="380" height="300" fill="url(#dots-d)"/>
      <circle class="art-spin" cx="190" cy="168" r="112" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1.5" stroke-dasharray="4 10"/>
      <ellipse cx="190" cy="176" rx="120" ry="96" fill="url(#glow-mint)"/>

      <!-- Diente Dent Pocket con tablet -->
      <g class="art-float">
        <g transform="translate(0 -18)">
          <path d="M150 92c-26 0-40 22-36 52 3 22 12 34 16 62 3 20 8 32 18 32 12 0 12-22 20-40 4-9 10-12 22-12s18 3 22 12c8 18 8 40 20 40 10 0 15-12 18-32 4-28 13-40 16-62 4-30-10-52-36-52-16 0-24 8-40 8s-24-8-40-8z" fill="url(#tooth)" stroke="#7ff0de" stroke-opacity=".7" stroke-width="2"/>
          <ellipse cx="146" cy="116" rx="14" ry="8" fill="#fff" opacity=".9" transform="rotate(-30 146 116)"/>
          <circle cx="172" cy="146" r="7" fill="#07060b"/><circle cx="208" cy="146" r="7" fill="#07060b"/>
          <circle cx="174.5" cy="143.5" r="2.2" fill="#fff"/><circle cx="210.5" cy="143.5" r="2.2" fill="#fff"/>
          <path d="M180 164q10 8 20 0" fill="none" stroke="#07060b" stroke-width="4.5" stroke-linecap="round"/>
        </g>
        <!-- brazos -->
        <path d="M120 150q-12 22 6 50" fill="none" stroke="#e9fbf7" stroke-width="9" stroke-linecap="round"/>
        <path d="M260 150q12 22 -6 50" fill="none" stroke="#e9fbf7" stroke-width="9" stroke-linecap="round"/>
        <!-- tablet -->
        <g transform="rotate(-4 190 217)">
          <rect x="124" y="176" width="132" height="84" rx="13" fill="#1a2230" stroke="#3dd6c3" stroke-opacity=".6" stroke-width="1.5"/>
          <rect x="131" y="183" width="118" height="70" rx="8" fill="#fbf4e6"/>
          <g>
            <g transform="translate(148.4 236.3) rotate(278)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(151.2 225.2) rotate(292)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/><circle class="art-pulse" r="2.4" fill="#ff4d5e"/></g>
            <g transform="translate(156.7 215.2) rotate(308)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(164.4 207.1) rotate(322)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#4b8bff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(173.9 201.3) rotate(338)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(184.5 198.4) rotate(352)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/><circle class="art-pulse" r="2.4" fill="#ff4d5e"/></g>
            <g transform="translate(195.5 198.4) rotate(368)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(206.1 201.3) rotate(382)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(215.6 207.1) rotate(398)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(223.3 215.2) rotate(412)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/><circle class="art-pulse" r="2.4" fill="#ff4d5e"/></g>
            <g transform="translate(228.8 225.2) rotate(428)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#4b8bff" stroke="#d9cfbd" stroke-width="1"/></g>
            <g transform="translate(231.6 236.3) rotate(442)"><rect x="-4.5" y="-5.5" width="9" height="11" rx="3.5" fill="#ffffff" stroke="#d9cfbd" stroke-width="1"/></g>
          </g>
        </g>
        <circle cx="127" cy="204" r="7" fill="#e9fbf7"/>
        <circle cx="253" cy="200" r="7" fill="#e9fbf7"/>
      </g>

      <!-- chips flotantes -->
      <g transform="translate(46 128)"><g class="art-float" style="animation-delay:-1.5s">
        <rect width="44" height="44" rx="13" fill="url(#glass)" stroke="rgba(255,255,255,.28)"/>
        <path d="M13 23l6 6 12-13" fill="none" stroke="#3dd6c3" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g></g>
      <g transform="translate(292 136)"><g class="art-float" style="animation-delay:-3s">
        <rect width="44" height="44" rx="13" fill="url(#glass)" stroke="rgba(255,255,255,.28)"/>
        <path d="M15 10h10l6 6v18H15z" fill="#fff" opacity=".92"/>
        <path d="M25 10v6h6" fill="none" stroke="#c9c3d6" stroke-width="1.5"/>
        <rect x="18" y="22" width="10" height="2.5" rx="1.2" fill="#ff4d5e"/>
        <rect x="18" y="27" width="7" height="2.5" rx="1.2" fill="#c9c3d6"/>
      </g></g>
      <g transform="translate(66 220)"><g class="art-float" style="animation-delay:-4.5s">
        <rect width="38" height="38" rx="12" fill="url(#glass)" stroke="rgba(255,255,255,.28)"/>
        <path d="M14 10c-5 0-7 4-6 9 1 4 2 6 3 10 0 2 1 4 3 4s2-4 4-6 1-2 1-2 1 0 1 2 2 6 4 6 3-2 3-4c1-4 2-6 3-10 1-5-1-9-6-9-3 0-4 1.5-5 1.5s-2-1.5-5-1.5z" fill="#e9fbf7"/>
      </g></g>

      <!-- destellos -->
      <g fill="#7ff0de">
        <path class="art-pulse" d="M100 96l2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5z"/>
        <path class="art-pulse" style="animation-delay:.8s" d="M290 92l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
        <path class="art-pulse" style="animation-delay:1.6s" d="M316 232l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
        <circle class="art-pulse" style="animation-delay:1.2s" cx="262" cy="270" r="2.5"/>
      </g>
    </svg>`,

  arcade: `
    <svg viewBox="0 0 380 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2" fill="rgba(0,0,0,.22)"/></pattern>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3dbb" stop-opacity="0"/><stop offset="1" stop-color="#ff3dbb" stop-opacity=".9"/></linearGradient>
      </defs>
      <clipPath id="sunclip"><circle cx="190" cy="222" r="64"/></clipPath>
      <g clip-path="url(#sunclip)"><circle cx="190" cy="222" r="64" fill="#ffb13d"/>
        <g fill="#120f1c"><rect x="100" y="200" width="180" height="5"/><rect x="100" y="213" width="180" height="7"/><rect x="100" y="228" width="180" height="9"/></g></g>
      <g stroke="url(#floor)" stroke-width="1.5">
        <line x1="0" y1="230" x2="380" y2="230"/><line x1="0" y1="246" x2="380" y2="246"/><line x1="0" y1="266" x2="380" y2="266"/><line x1="0" y1="292" x2="380" y2="292"/>
        <line x1="190" y1="230" x2="190" y2="300"/><line x1="150" y1="230" x2="90" y2="300"/><line x1="230" y1="230" x2="290" y2="300"/><line x1="110" y1="230" x2="-10" y2="300"/><line x1="270" y1="230" x2="390" y2="300"/>
      </g>
      <rect y="230" width="380" height="70" fill="#120f1c" opacity=".35"/>
      <g transform="translate(154 52) scale(.82)"><g class="art-float" fill="#c6ff3d">
        <!-- invasor pixel 11x8 -->
        <rect x="16" y="0" width="8" height="8"/><rect x="64" y="0" width="8" height="8"/>
        <rect x="24" y="8" width="8" height="8"/><rect x="56" y="8" width="8" height="8"/>
        <rect x="16" y="16" width="56" height="8"/>
        <rect x="8" y="24" width="16" height="8"/><rect x="32" y="24" width="24" height="8"/><rect x="64" y="24" width="16" height="8"/>
        <rect x="0" y="32" width="88" height="8"/>
        <rect x="0" y="40" width="8" height="8"/><rect x="16" y="40" width="56" height="8"/><rect x="80" y="40" width="8" height="8"/>
        <rect x="0" y="48" width="8" height="8"/><rect x="16" y="48" width="8" height="8"/><rect x="64" y="48" width="8" height="8"/><rect x="80" y="48" width="8" height="8"/>
        <rect x="24" y="56" width="16" height="8"/><rect x="48" y="56" width="16" height="8"/>
      </g></g>
      <text class="art-blink" x="190" y="138" text-anchor="middle" font-family="Unbounded, sans-serif" font-weight="900" font-size="15" letter-spacing="3" fill="#fff">PRESS START</text>
      <rect width="380" height="300" fill="url(#scan)"/>
    </svg>`,

  pro: `
    <svg viewBox="0 0 380 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="grid-p" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0v38" fill="none" stroke="rgba(255,255,255,.12)"/></pattern>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6ff3d" stop-opacity=".55"/><stop offset="1" stop-color="#c6ff3d" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="380" height="300" fill="url(#grid-p)"/>
      <path d="M0 250 L60 222 L110 232 L170 170 L220 186 L280 110 L330 124 L380 60 L380 300 L0 300Z" fill="url(#area)"/>
      <path class="art-rise" d="M0 250 L60 222 L110 232 L170 170 L220 186 L280 110 L330 124 L380 60" fill="none" stroke="#c6ff3d" stroke-width="4" stroke-linejoin="round" stroke-dasharray="400" />
      <circle class="art-pulse" cx="280" cy="110" r="9" fill="#c6ff3d"/>
      <circle cx="280" cy="110" r="4" fill="#07060b"/>
      <g transform="translate(62 92)"><g class="art-float">
        <rect width="176" height="84" rx="18" fill="rgba(7,6,11,.8)" stroke="rgba(255,255,255,.18)"/>
        <text x="20" y="34" font-family="Space Grotesk, sans-serif" font-size="12" fill="#a39fb2" letter-spacing="1.5">MERCADO</text>
        <text x="20" y="66" font-family="Unbounded, sans-serif" font-weight="900" font-size="26" fill="#fff">WALL ST ↗</text>
      </g></g>
      <g transform="translate(296 214)">
        <circle r="30" fill="#07060b" opacity=".85"/>
        <path d="M-10 -2 l7 8 l14 -16" fill="none" stroke="#c6ff3d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>`,
};

/* ---------- Construcción del carrusel ---------- */
const stage = document.getElementById("stage");
const dotsWrap = document.getElementById("dots");
const curEl = document.getElementById("cur");
const totEl = document.getElementById("tot");
const bar = document.getElementById("bar");
const pad = (n) => String(n).padStart(2, "0");
const arrow = `<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>`;

const cards = PRODUCTS.map((p, i) => {
  const el = document.createElement("article");
  el.className = "card";
  el.setAttribute("role", "group");
  el.setAttribute("aria-roledescription", "tarjeta");
  el.setAttribute("aria-label", `${i + 1} de ${PRODUCTS.length}: ${p.title}`);
  el.style.setProperty("--c1", p.c1);
  el.style.setProperty("--c2", p.c2);
  el.innerHTML = `
    <div class="card-inner">
      <div class="card-art">
        <span class="card-tag">${p.tag}</span>
        <span class="card-index">${pad(i + 1)}</span>
        ${ART[p.art] || ""}
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <a class="card-btn" href="${p.url}" target="_blank" rel="noopener">
          <span>${p.cta}</span><span class="arr">${arrow}</span>
        </a>
      </div>
    </div>`;
  stage.appendChild(el);

  const dot = document.createElement("button");
  dot.setAttribute("role", "tab");
  dot.setAttribute("aria-label", `Ir a ${p.title}`);
  dot.addEventListener("click", () => go(i, true));
  dotsWrap.appendChild(dot);
  return el;
});
totEl.textContent = pad(PRODUCTS.length);

let active = 0;
let dragOffset = 0; // desplazamiento en "tarjetas" mientras se arrastra
const N = cards.length;

function wrapDelta(i) {
  let d = i - active - dragOffset;
  // camino más corto en un carrusel circular
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
}

function layout() {
  const w = cards[0].offsetWidth;
  const narrow = window.innerWidth < 640;
  const spread = narrow ? w * 0.78 : w * 0.92;
  cards.forEach((card, i) => {
    const d = wrapDelta(i);
    const ad = Math.abs(d);
    const x = d * spread;
    const z = -ad * (narrow ? 220 : 260);
    const ry = Math.max(-45, Math.min(45, -d * 32));
    const s = 1 - Math.min(ad, 2) * 0.08;
    card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg) scale(${s})`;
    card.style.zIndex = String(100 - Math.round(ad * 10));
    card.style.opacity = ad > 1.6 ? "0" : String(1 - ad * 0.35);
    card.style.filter = ad > 0.5 ? `brightness(${1 - Math.min(ad, 1.5) * 0.35}) saturate(.8)` : "none";
    const isActive = Math.round(d) === 0 && ad < 0.5;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-hidden", isActive ? "false" : "true");
    card.querySelector(".card-btn").tabIndex = isActive ? 0 : -1;
  });
  [...dotsWrap.children].forEach((d, i) => d.setAttribute("aria-selected", String(i === active)));
  curEl.textContent = pad(active + 1);
}

function go(i, user) {
  active = (i + N) % N;
  layout();
  if (user) restartAuto();
}
const next = () => go(active + 1, true);
const prev = () => go(active - 1, true);
document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);
stage.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
});

/* Clic en una tarjeta lateral la trae al frente */
cards.forEach((card, i) =>
  card.addEventListener("click", (e) => {
    if (moved) { e.preventDefault(); return; }
    if (!card.classList.contains("is-active")) { e.preventDefault(); go(i, true); }
  })
);

/* ---------- Arrastre / swipe ---------- */
let startX = 0, startY = 0, dragging = false, moved = false, pid = null;
stage.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  dragging = true; moved = false; pid = e.pointerId;
  startX = e.clientX; startY = e.clientY;
});
stage.addEventListener("pointermove", (e) => {
  if (!dragging || e.pointerId !== pid) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
    moved = true;
    stage.classList.add("dragging");
    stage.setPointerCapture(pid);
    stopAuto();
  }
  if (moved) {
    dragOffset = -dx / (cards[0].offsetWidth * 0.9);
    layout();
  }
});
function endDrag() {
  if (!dragging) return;
  dragging = false;
  stage.classList.remove("dragging");
  if (moved) {
    const step = Math.round(dragOffset) || (Math.abs(dragOffset) > 0.15 ? Math.sign(dragOffset) : 0);
    dragOffset = 0;
    go(active + step, true);
    setTimeout(() => (moved = false), 0);
  }
}
stage.addEventListener("pointerup", endDrag);
stage.addEventListener("pointercancel", endDrag);

/* ---------- Autoplay con barra de progreso ---------- */
const AUTO_MS = 5000;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let autoStart = 0, raf = null, paused = false;
function tick(t) {
  if (!autoStart) autoStart = t;
  const p = paused ? 0 : (t - autoStart) / AUTO_MS;
  if (paused) autoStart = t;
  bar.style.width = `${Math.min(p, 1) * 100}%`;
  if (p >= 1) { autoStart = t; go(active + 1, false); }
  raf = requestAnimationFrame(tick);
}
function stopAuto() { cancelAnimationFrame(raf); raf = null; bar.style.width = "0"; }
function restartAuto() {
  stopAuto();
  if (reduced) return;
  autoStart = 0;
  raf = requestAnimationFrame(tick);
}
stage.addEventListener("mouseenter", () => (paused = true));
stage.addEventListener("mouseleave", () => (paused = false));
stage.addEventListener("focusin", () => (paused = true));
stage.addEventListener("focusout", () => (paused = false));
document.addEventListener("visibilitychange", () => (paused = document.hidden));

/* ---------- Tilt 3D en la tarjeta activa ---------- */
const finePointer = window.matchMedia("(pointer: fine)").matches;
if (finePointer && !reduced) {
  cards.forEach((card) => {
    const inner = card.querySelector(".card-inner");
    card.addEventListener("pointermove", (e) => {
      if (!card.classList.contains("is-active") || dragging) return;
      const r = inner.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      inner.style.setProperty("--ry", `${(px - 0.5) * 14}deg`);
      inner.style.setProperty("--rx", `${(0.5 - py) * 12}deg`);
      inner.style.setProperty("--gx", `${px * 100}%`);
      inner.style.setProperty("--gy", `${py * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      inner.style.setProperty("--ry", "0deg");
      inner.style.setProperty("--rx", "0deg");
    });
  });

  /* Botones magnéticos */
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.12;
      const y = (e.clientY - r.top - r.height / 2) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });

  /* Luz que sigue el cursor en el fondo */
  const root = document.documentElement;
  window.addEventListener("pointermove", (e) => {
    root.style.setProperty("--mx", `${e.clientX}px`);
    root.style.setProperty("--my", `${e.clientY}px`);
  }, { passive: true });
}

/* ---------- Entrada escalonada ---------- */
document.querySelectorAll(".reveal").forEach((el, i) => {
  setTimeout(() => el.classList.add("in"), 120 + i * 140);
});

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("resize", layout);
layout();
restartAuto();
