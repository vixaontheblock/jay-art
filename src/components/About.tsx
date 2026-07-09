export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-16 items-start">
        {/* Nombre grande, sin eyebrow */}
        <div className="md:sticky md:top-32">
          <span className="font-mono text-xs text-[var(--ember)] tracking-widest"></span>
          <p className="font-display text-5xl md:text-6xl leading-[0.9] uppercase text-[var(--paper)] mt-3">
            Jhair
            <br />
            Marín
          </p>
          <p className="text-[var(--steel)] text-sm mt-4 font-light">
            Diseñador visual · Ciudad de Panamá
          </p>
        </div>

        {/* Texto */}
        <div className="space-y-6 text-[var(--paper-dim)] leading-relaxed font-light">
          <p className="text-[var(--paper)] text-xl font-normal leading-snug">
            Detrás de JayArt hay un creador que vive en la intersección entre
            estrategia visual comercial y libertad creativa musical.
          </p>
          <p>
            Mi trabajo nace de entender que una portada no es decoración: es la
            primera escucha. Cada composición, cada tono de color, cada
            textura tiene que sostener el peso emocional de la canción antes
            de que suene la primera nota.
          </p>
          <p>
            Fusiono visión artística con pensamiento estratégico para crear
            piezas que conectan con la audiencia y el mercado, sin perder la
            personalidad del artista detrás.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {["Cover Art", "Dirección Visual", "Estrategia de Marca", "Diseño Musical"].map((t) => (
              <span
                key={t}
                className="font-mono text-[0.65rem] border border-[var(--line)] text-[var(--steel)] px-3 py-1.5 hover:border-[var(--ember)]/40 hover:text-[var(--paper)] transition-colors"
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
