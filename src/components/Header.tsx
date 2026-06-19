import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "Quién soy" },
  { href: "#services", label: "Servicios" },
  { href: "#portfolio", label: "Portafolio" },
  { href: "#pricing", label: "Planes" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  return (
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

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-[var(--muted)]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--gold)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-primary hidden md:inline-block">
          Hablemos
        </a>

        {/* Mobile hamburger placeholder */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menú">
          <span className="w-5 h-px bg-white block" />
          <span className="w-3 h-px bg-[var(--gold)] block" />
          <span className="w-5 h-px bg-white block" />
        </button>
      </div>
    </header>
  );
}