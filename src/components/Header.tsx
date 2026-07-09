"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "Quién soy" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Portafolio" },
  { href: "#pricing", label: "Planes" },
  { href: "#contact", label: "Contacto" },
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
          className={`max-w-6xl mx-auto flex justify-between items-center px-5 py-3 rounded-lg transition-all duration-300 ${
            scrolled ? "glass-strong" : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-3">
            <Image src="/favicon.ico" alt="JayArt" width={34} height={39} priority />
            <span className="font-display text-xl tracking-tight text-[var(--paper)]">JAYART</span>
          </a>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-wide text-[var(--paper-dim)] hover:text-[var(--paper)] transition-colors duration-200"
              >
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
            className="py-3 border-b border-[var(--line)]"
          >
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
