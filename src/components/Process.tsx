const steps = [
  { t: "Briefing y estrategia", d: "Comenzamos con una conversación clara para entender tu lanzamiento, tu audiencia y hacia dónde quieres llevar tu identidad visual." },
  { t: "Concepto y desarrollo", d: "Transformo ideas en propuestas visuales con dirección estratégica, moodboards y referencias sólidas antes de tocar el diseño final." },
  { t: "Refinamiento y ajustes", d: "Presento el trabajo y ajustamos juntos hasta que la pieza sostenga exactamente lo que la canción necesita transmitir." },
  { t: "Entrega final", d: "Archivos listos para uso inmediato en Spotify, YouTube, redes y cualquier plataforma que tu lanzamiento necesite." },
];

export default function Process() {
  return (
    <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="section-head">
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-[var(--paper)]">
          Proceso
        </h2>
        <p className="font-mono text-xs text-[var(--steel)]">4 ETAPAS, DE BRIEF A ENTREGA</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="glass group p-8 md:p-10 rounded-xl hover:bg-[var(--glass-bg-strong)] transition-colors duration-300">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-mono text-sm text-[var(--paper)]">{String(i + 1).padStart(2, "0")}</span>
              <span className="w-8 h-px bg-[var(--line)] group-hover:bg-white/50 transition-colors" />
            </div>
            <h3 className="font-display text-2xl uppercase text-[var(--paper)] mb-2">{s.t}</h3>
            <p className="text-[var(--paper-dim)] text-sm leading-relaxed font-light max-w-[42ch]">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
