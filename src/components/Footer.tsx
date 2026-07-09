import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image src="/logo-mark.png" alt="JayArt" width={26} height={30} />
          <span className="font-display text-lg text-[var(--paper)]">JAYART</span>
          <span className="text-[var(--line)] text-lg">|</span>
          <p className="font-mono text-[0.65rem] text-[var(--steel)]">© 2026 Todos los derechos reservados</p>
        </div>

        <div className="flex gap-6 font-mono text-[0.65rem] text-[var(--steel)] tracking-widest uppercase">
          <a href="https://instagram.com/byjay4rt" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--paper)] transition-colors">Instagram</a>
          <a href="https://wa.me/50763958557" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--paper)] transition-colors">WhatsApp</a>
          <a href="mailto:soyjayart@gmail.com" className="hover:text-[var(--paper)] transition-colors">Email</a>
        </div>

        <p className="font-mono text-[0.65rem] text-[var(--steel)]">
          Desarrollado por{" "}
          <a href="https://ruptastudios.com" target="_blank" rel="noopener noreferrer" className="text-[var(--paper-dim)] hover:text-[var(--paper)] transition-colors">
            Rupta Studios
          </a>
        </p>
      </div>
    </footer>
  );
}
