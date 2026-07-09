@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap");

:root {
  --ink: #0a0908;
  --ink-2: #131110;
  --ink-3: #1c1815;
  --paper: #f3ede2;
  --paper-dim: #b8b0a0;
  --steel: #756e60;
  --ember: #ff4d23;
  --ember-deep: #a52a10;
  --line: rgba(243, 237, 226, 0.09);
}

* { box-sizing: border-box; }

html, body {
  background: var(--ink);
  color: var(--paper);
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 300;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.font-display {
  font-family: 'Big Shoulders Display', sans-serif;
  font-weight: 800;
  letter-spacing: -0.01em;
  font-stretch: condensed;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

img { display: block; max-width: 100%; }

::selection { background: var(--ember); color: var(--ink); }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--ink); }
::-webkit-scrollbar-thumb { background: #2a2620; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--steel); }

/* Textura de grano cinematográfico — firma visual del sitio, referencia al grano
   de las portadas que produce JayArt. Fija sobre todo el viewport, muy sutil. */
.grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Etiqueta de catálogo — reemplaza el patrón de "eyebrow" sobre cada título.
   Se usa en línea, junto al contenido, en tono liner-notes de vinilo. */
.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--steel);
}

.tag-ember {
  color: var(--ember);
}

.hairline { background: var(--line); }

/* Botón primario — ember sólido */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--ember);
  color: var(--ink);
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  padding: 0.85rem 1.75rem;
  border-radius: 1px;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1), background 0.25s;
}
.btn-primary:hover { background: #ff6a45; transform: translateY(-2px); }

/* Botón secundario — contorno */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(243,237,226,0.18);
  color: var(--paper);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  padding: 0.85rem 1.75rem;
  border-radius: 1px;
  transition: border-color 0.25s, color 0.25s, transform 0.25s cubic-bezier(.2,.8,.2,1);
}
.btn-secondary:hover { border-color: var(--ember); color: var(--ember); transform: translateY(-2px); }

/* Título de sección — grande, sin eyebrow. La etiqueta va en línea, no encima. */
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-bottom: 3.5rem;
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}
