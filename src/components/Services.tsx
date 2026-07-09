const services = [
  { name: "Cover Art", desc: "La imagen que vende tu lanzamiento antes de que suene la primera nota." },
  { name: "Visualizers", desc: "Contenido visual en movimiento para plataformas de streaming." },
  { name: "Lyric Videos", desc: "Tipografía y movimiento que refuerzan la narrativa de tu letra." },
  { name: "Flyers & Banners", desc: "Piezas de alta conversión para eventos, lanzamientos y redes." },
  { name: "Thumbnails CTR", desc: "Miniaturas diseñadas para detener el scroll y multiplicar los clics." },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="section-head">
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-[var(--paper)]">
          Servicios
        </h2>
        <p className="font-mono text-xs text-[var(--steel)] max-w-xs leading-relaxed text-right">
          Pensado para el ecosistema
          <br className="hidden md:block" /> visual del artista independiente
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="glass group relative p-8 rounded-xl min-h-[200px] flex flex-col justify-between overflow-hidden hover:bg-[var(--glass-bg-strong)] transition-colors duration-300"
          >
            <div>
              <h3 className="font-display text-2xl uppercase text-[var(--paper)] mb-2">{s.name}</h3>
              <p className="text-[var(--paper-dim)] text-sm leading-relaxed font-light max-w-[22ch]">{s.desc}</p>
            </div>
            <span className="w-6 h-px bg-[var(--steel)] group-hover:w-12 group-hover:bg-white transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
