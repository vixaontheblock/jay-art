const plans = [
  { name: "Estándar", price: "$25", note: "Lanzamientos esenciales", features: ["Cover Art esencial", "Adaptación social", "Entrega digital"], highlight: false },
  { name: "Pro", price: "$65", note: "El más elegido", features: ["Cover Art conceptual", "Visualizer 15s", "Social Kit (3 piezas)"], highlight: true },
  { name: "Premium", price: "$120+", note: "Lanzamiento completo", features: ["Cover Art de alto nivel", "Visualizer 30s", "Video lyric o visualizer extra", "Ecosistema de redes completo", "Soporte estratégico"], highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="section-head">
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-[var(--paper)]">
          Planes
        </h2>
        <p className="font-mono text-xs text-[var(--steel)]">PRECIOS EN USD — PROYECTOS A LA MEDIDA TAMBIÉN</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`relative p-8 flex flex-col rounded-xl transition-colors duration-300 ${
              p.highlight ? "glass-strong" : "glass hover:bg-[var(--glass-bg-strong)]"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-8 font-mono text-[0.6rem] uppercase tracking-widest px-3 py-1 bg-white text-black rounded-full">
                Recomendado
              </span>
            )}

            <p className="font-mono text-[0.65rem] uppercase tracking-widest mb-6 text-[var(--steel)]">{p.note}</p>
            <h3 className="font-display text-4xl uppercase mb-1 text-[var(--paper)]">{p.name}</h3>
            <p className="font-display text-4xl mb-8 text-[var(--paper)]">{p.price}</p>

            <ul className="text-sm space-y-3 flex-1 text-[var(--paper-dim)]">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-[7px] w-3 h-px shrink-0 bg-[var(--steel)]" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 text-center font-mono text-xs uppercase tracking-widest py-3.5 px-4 rounded-md transition-colors ${
                p.highlight ? "bg-white text-black hover:bg-white/90" : "border border-[var(--glass-border)] text-[var(--paper)] hover:border-white/40"
              }`}
            >
              Empezar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
