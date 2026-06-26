"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Quién soy" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Portafolio" },
  { href: "#pricing", label: "Planes" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Image
            src="/favicon.ico"
            alt="JayArt"
            width={120}
            height={40}
            className="text-white"
            priority
          />

          {/* Nav desktop */}
          <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[var(--muted)]">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a href="#contact" className="btn-primary hidden md:inline-block">
            Hablemos
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`w-5 h-px bg-white block transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            />
            <span
              className={`w-3 h-px bg-white/40 block transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-px bg-white block transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl uppercase text-white/70 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
          Hablemos
        </a>
      </div>
    </>
  );
}
