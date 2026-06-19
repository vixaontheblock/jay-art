import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Izquierda */}
        <div className="flex items-center gap-4">
          <Image src="/favicon.ico" alt="JayArt" width={90} height={32} />
          <span className="text-white/10 text-lg">|</span>
          <p className="text-xs text-[var(--muted)]">© 2026 Todos los derechos reservados</p>
        </div>

        {/* Derecha */}
        <p className="text-xs text-[var(--muted)]">
          Desarrollado por{" "}
          <a
            href="https://ruptastudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[var(--gold)] transition-colors"
          >
            Rupta Studios
          </a>
        </p>
      </div>
    </footer>
  );
}