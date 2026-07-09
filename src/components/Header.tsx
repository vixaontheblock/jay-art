"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { n: "01", href: "#about", label: "Quién soy" },
  { n: "02", href: "#services", label: "Servicios" },
  { n: "03", href: "#portfolio", label: "Portafolio" },
  { n: "04", href: "#pricing", label: "Planes" },
  { n: "05", href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-4 pt-4">
        <div
          className={`max-w-6xl mx-auto flex justify-between items-center px-6 py-3.5 rounded-lg transition-all duration-300 ${
            scrolled ? "glass-strong" : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#" className="font-display text-2xl tracking-tight text-[var(--paper)]">
            JAYART
          </a>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-2 text-xs tracking-wide text-[var(--paper-dim)] hover:text-[var(--paper)] transition-colors duration-200"
              >
                <span className="font-mono text-[0.65rem] text-[var(--steel)] group-hover:text-[var(--paper)] transition-colors">
                  {l.n}
                </span>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden md:inline-flex !py-2.5 !px-5">
            Cotizar
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`w-5 h-px bg-[var(--paper)] block transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`w-5 h-px bg-[var(--paper)] block transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-10 gap-2 transition-all duration-300 md:hidden glass-strong ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ borderRadius: 0 }}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-baseline gap-4 py-3 border-b border-[var(--line)]"
          >
            <span className="font-mono text-xs text-[var(--steel)]">{l.n}</span>
            <span className="font-display text-4xl text-[var(--paper)]">{l.label}</span>
          </a>
        ))}
        <a href="#contact" className="btn-primary mt-8 justify-center" onClick={() => setMenuOpen(false)}>
          Cotizar proyecto
        </a>
      </div>
    </>
  );
}
