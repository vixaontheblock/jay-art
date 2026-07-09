const services = [
  { name: "Cover Art", desc: "La imagen que vende tu lanzamiento antes de que suene la primera nota.", mark: "A" },
  { name: "Visualizers", desc: "Contenido visual en movimiento para plataformas de streaming.", mark: "B" },
  { name: "Lyric Videos", desc: "Tipografía y movimiento que refuerzan la narrativa de tu letra.", mark: "C" },
  { name: "Flyers & Banners", desc: "Piezas de alta conversión para eventos, lanzamientos y redes.", mark: "D" },
  { name: "Thumbnails CTR", desc: "Miniaturas diseñadas para detener el scroll y multiplicar los clics.", mark: "E" },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="section-head">
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-[var(--paper)]">
          Servicios
        </h2>
        <p className="font-mono text-xs text-[var(--steel)] max-w-xs leading-relaxed text-right">
          5 disciplinas para el ecosistema
          <br className="hidden md:block" /> visual del artista independiente
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="glass group relative p-8 rounded-xl min-h-[220px] flex flex-col justify-between overflow-hidden hover:bg-[var(--glass-bg-strong)] transition-colors duration-300"
          >
            <span
              aria-hidden
              className="absolute -right-3 -top-6 font-display text-[7rem] text-white opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 select-none"
            >
              {s.mark}
            </span>
            <div className="relative">
              <h3 className="font-display text-2xl uppercase text-[var(--paper)] mb-2">{s.name}</h3>
              <p className="text-[var(--paper-dim)] text-sm leading-relaxed font-light max-w-[22ch]">{s.desc}</p>
            </div>
            <span className="relative w-6 h-px bg-[var(--steel)] group-hover:w-12 group-hover:bg-white transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
