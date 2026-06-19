const services = [
  {
    name: "Cover Art",
    desc: "La imagen que vende tu lanzamiento antes de que suene la primera nota.",
    icon: "◈",
  },
  {
    name: "Visualizers",
    desc: "Contenido visual en movimiento para plataformas de streaming.",
    icon: "◎",
  },
  {
    name: "Lyric Videos",
    desc: "Tipografía y movimiento que refuerzan la narrativa de tu letra.",
    icon: "◐",
  },
  {
    name: "Flyers & Banners",
    desc: "Piezas de alta conversión para eventos, lanzamientos y redes.",
    icon: "▣",
  },
  {
    name: "Thumbnails CTR",
    desc: "Miniaturas diseñadas para detener el scroll y multiplicar los clics.",
    icon: "◉",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <p className="eyebrow mb-3 flex items-center">
            <span className="accent-line" />
            
          </p>
          <h2 className="font-display text-6xl uppercase leading-none">Servicios</h2>
        </div>
        <p className="text-[var(--muted)] text-sm max-w-xs font-light leading-relaxed">
          Cada servicio está pensado para el ecosistema digital del artista independiente.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/5">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-[var(--bg)] p-8 hover:bg-[#0e0e0e] transition-colors duration-300 cursor-default"
          >
            <span className="text-2xl text-[var(--gold)] block mb-5 group-hover:scale-110 transition-transform duration-200 origin-left">
              {s.icon}
            </span>
            <h3 className="font-semibold text-base mb-2">{s.name}</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed font-light">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}