export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
        {/* Izquierda */}
        <div>
          <p className="eyebrow mb-4 flex items-center">
            <span className="accent-line" />
            Contacto
          </p>
          <h2 className="font-display text-6xl uppercase leading-none mb-6">
            Hablemos<br />
            <span className="text-[var(--gold)]">de tu</span><br />
            proyecto
          </h2>
          <p className="text-[var(--muted)] text-sm font-light leading-relaxed">
            ¿Tienes un lanzamiento en mente? Cuéntame de tu música y construimos
            la identidad visual que merece.
          </p>
        </div>

        {/* Derecha */}
        <div className="space-y-4">
          <a
            href="mailto:soyjayart@gmail.com"
            className="group flex items-center justify-between p-6 border border-[var(--border)] hover:border-[var(--gold)]/40 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Email directo</p>
              <p className="text-sm font-medium group-hover:text-[var(--gold)] transition-colors">
                soyjayart@gmail.com
              </p>
            </div>
            <span className="text-[var(--gold)] opacity-40 group-hover:opacity-100 transition-opacity text-lg">→</span>
          </a>

          <a
            href="https://instagram.com/byjay4rt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 border border-[var(--border)] hover:border-[var(--gold)]/40 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Instagram</p>
              <p className="text-sm font-medium group-hover:text-[var(--gold)] transition-colors">
                @byjay4rt
              </p>
            </div>
            <span className="text-[var(--gold)] opacity-40 group-hover:opacity-100 transition-opacity text-lg">→</span>
          </a>

          {/* WHATSAPP (AGREGADO) */}
          <a
            href="https://wa.me/50763958557"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 border border-green-500/30 hover:border-green-400/60 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                WhatsApp
              </p>
              <p className="text-sm font-medium group-hover:text-green-400 transition-colors">
                +507 6395-8557
              </p>
            </div>
            <span className="text-green-400 opacity-40 group-hover:opacity-100 transition-opacity text-lg">
              →
            </span>
          </a>

          <div className="pt-2">
            <a href="mailto:soyjayart@gmail.com" className="btn-primary inline-block w-full text-center">
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}