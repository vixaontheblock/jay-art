export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-[var(--steel)] tracking-widest">05 — CONTACTO</span>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] mt-4 mb-6 text-[var(--paper)]">
            Hablemos
            <br />
            <span className="text-[var(--steel)]">de tu</span>
            <br />
            proyecto
          </h2>
          <p className="text-[var(--paper-dim)] text-sm font-light leading-relaxed max-w-sm">
            ¿Tienes un lanzamiento en mente? Cuéntame de tu música y construimos
            la identidad visual que merece.
          </p>
        </div>

        <div className="space-y-3">
          <a href="mailto:soyjayart@gmail.com" className="glass group flex items-center justify-between p-6 rounded-lg hover:bg-[var(--glass-bg-strong)] transition-all duration-300">
            <div>
              <p className="font-mono text-[0.65rem] text-[var(--steel)] uppercase tracking-widest mb-1">Email directo</p>
              <p className="text-sm font-medium text-[var(--paper)]">soyjayart@gmail.com</p>
            </div>
            <span className="text-[var(--steel)] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
          </a>

          <a href="https://instagram.com/byjay4rt" target="_blank" rel="noopener noreferrer" className="glass group flex items-center justify-between p-6 rounded-lg hover:bg-[var(--glass-bg-strong)] transition-all duration-300">
            <div>
              <p className="font-mono text-[0.65rem] text-[var(--steel)] uppercase tracking-widest mb-1">Instagram</p>
              <p className="text-sm font-medium text-[var(--paper)]">@byjay4rt</p>
            </div>
            <span className="text-[var(--steel)] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
          </a>

          <a href="https://wa.me/50763958557" target="_blank" rel="noopener noreferrer" className="glass group flex items-center justify-between p-6 rounded-lg hover:bg-[var(--glass-bg-strong)] transition-all duration-300">
            <div>
              <p className="font-mono text-[0.65rem] text-[var(--steel)] uppercase tracking-widest mb-1">WhatsApp</p>
              <p className="text-sm font-medium text-[var(--paper)]">+507 6395-8557</p>
            </div>
            <span className="text-[var(--steel)] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-lg">→</span>
          </a>

          <div className="pt-2">
            <a href="mailto:soyjayart@gmail.com" className="btn-primary w-full justify-center">
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
