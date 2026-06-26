export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Label lateral */}
        <div className="sticky top-32">
          <p className="eyebrow mb-4 flex items-center">
            <span className="accent-line" />
            Sobre mí
          </p>
          <p className="font-display text-5xl leading-tight uppercase text-white">
            Jhair<br />Marín
          </p>
        </div>

        {/* Texto */}
        <div className="space-y-6 text-[var(--muted)] leading-relaxed font-light">
          <p className="text-white text-lg font-normal">
            Detrás de JayArt está un creador que vive en la intersección entre
            estrategia visual comercial y libertad creativa musical.
          </p>
          <p>
            Mi enfoque nace de entender que una portada no es decoración —
            es la primera escucha. Cada píxel tiene que sostener el peso
            emocional de la canción.
          </p>
          <p>
            Fusiono visión artística con pensamiento estratégico para crear piezas
            visuales que conectan con audiencia y mercado, sin perder
            la personalidad del artista.
          </p>

          {/* Pill tags — ahora en blanco/gris, sin gold */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Cover Art", "Dirección Visual", "Estrategia de Marca", "Diseño Musical"].map((t) => (
              <span
                key={t}
                className="text-xs border border-white/15 text-white/60 px-3 py-1 rounded-full hover:border-white/30 hover:text-white/80 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
