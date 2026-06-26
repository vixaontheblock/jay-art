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
            <span className="text-white/40">de tu</span><br />
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
            className="group flex items-center justify-between p-6 border border-[var(--border)] hover:border-white/20 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Email directo</p>
              <p className="text-sm font-medium group-hover:text-white transition-colors">
                soyjayart@gmail.com
              </p>
            </div>
            <span className="text-white/20 group-hover:text-white/60 transition-all text-lg group-hover:translate-x-1 duration-200">→</span>
          </a>

          <a
            href="https://instagram.com/byjay4rt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 border border-[var(--border)] hover:border-white/20 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">Instagram</p>
              <p className="text-sm font-medium group-hover:text-white transition-colors">
                @byjay4rt
              </p>
            </div>
            <span className="text-white/20 group-hover:text-white/60 transition-all text-lg group-hover:translate-x-1 duration-200">→</span>
          </a>

          <a
            href="https://wa.me/50763958557"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 border border-green-500/20 hover:border-green-400/40 bg-[var(--bg-card)] transition-all duration-300"
          >
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                WhatsApp
              </p>
              <p className="text-sm font-medium group-hover:text-green-400 transition-colors">
                +507 6395-8557
              </p>
            </div>
            <span className="text-green-400/30 group-hover:text-green-400/70 transition-all text-lg group-hover:translate-x-1 duration-200">
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
