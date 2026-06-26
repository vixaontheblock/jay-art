const steps = [
  {
    t: "Briefing y Estrategia",
    d: "Comenzamos con una comunicación clara para entender tus necesidades y objetivos creativos.",
  },
  {
    t: "Concepto y Desarrollo",
    d: "Transformamos ideas en propuestas visuales con dirección estratégica y referencias sólidas.",
  },
  {
    t: "Refinamiento y Ajustes",
    d: "Presentamos el trabajo y ajustamos hasta alcanzar exactamente el nivel esperado.",
  },
  {
    t: "Entrega Final",
    d: "Archivos listos para uso inmediato en todas las plataformas digitales que necesites.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="eyebrow mb-3 flex items-center">
          <span className="accent-line" />
          Cómo trabajo
        </p>
        <h2 className="font-display text-6xl uppercase leading-none">Proceso</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/5">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-[var(--bg)] p-8 hover:bg-[#0e0e0e] transition-colors duration-300 group"
          >
            <p className="font-display text-5xl text-white opacity-10 group-hover:opacity-25 transition-opacity mb-4">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-semibold text-sm mb-2 tracking-wide">{s.t}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed font-light">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
