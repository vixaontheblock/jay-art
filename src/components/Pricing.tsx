const plans = [
  {
    name: "Estándar",
    price: "$25",
    note: "Lanzamientos esenciales",
    features: [
      "Cover Art esencial",
      "Adaptación social",
      "Entrega digital",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$65",
    note: "El más elegido",
    features: [
      "Cover Art conceptual",
      "Visualizer 15s",
      "Social Kit (3 piezas)",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$120+",
    note: "Lanzamiento completo",
    features: [
      "Cover Art de alto nivel",
      "Visualizer 30s",
      "Video Lyric o extra visualizer",
      "Ecosistema de redes completo",
      "Soporte estratégico",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="eyebrow mb-3 flex items-center">
          <span className="accent-line" />
        </p>
        <h2 className="font-display text-6xl uppercase leading-none">Planes</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <div
            key={i}
            className="relative p-8 rounded-sm flex flex-col"
            style={
              p.highlight
                ? { background: "#999999", color: "#050505" }
                : { background: "#111111", border: "1px solid rgba(255,255,255,0.07)" }
            }
          >
            {p.highlight && (
              <span
                className="absolute -top-3 left-8 text-[0.6rem] font-semibold uppercase tracking-widest px-3 py-1"
                style={{ background: "#050505", color: "#ffffff" }}
              >
                Recomendado
              </span>
            )}

            {/* Nota */}
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: p.highlight ? "rgba(5,5,5,0.55)" : "#ffffff" }}
            >
              {p.note}
            </p>

            {/* Nombre */}
            <h3
              className="font-display text-4xl uppercase mb-1"
              style={{ color: p.highlight ? "#050505" : "#ffffff" }}
            >
              {p.name}
            </h3>

            {/* Precio */}
            <p
              className="text-4xl font-bold mb-8"
              style={{ color: p.highlight ? "#050505" : "#ffffff" }}
            >
              {p.price}
            </p>

            {/* Features */}
            <ul className="text-sm space-y-3 flex-1">
              {p.features.map((f, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2"
                  style={{ color: p.highlight ? "rgba(5,5,5,0.75)" : "#888888" }}
                >
                  <span style={{ color: p.highlight ? "#050505" : "#ffffff", marginTop: "2px" }}>—</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 text-center text-xs uppercase tracking-widest font-semibold py-3 px-4 transition-opacity hover:opacity-80"
              style={
                p.highlight
                  ? { background: "#050505", color: "#ffffff" }
                  : { border: "1px solid rgba(255, 255, 255, 0.4)", color: "#ffffff" }
              }
            >
              Empezar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}