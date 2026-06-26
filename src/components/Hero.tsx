"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (lineRef.current) {
        lineRef.current.style.transform = `rotate(-18deg) translateY(${y * 0.08}px)`;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `rotate(-18deg) translateY(${y * 0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      {/* Líneas diagonales — firma visual, ahora en blanco */}
      <div
        ref={lineRef}
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] w-[140%] h-px bg-white opacity-[0.08]"
        style={{ transform: "rotate(-18deg)", transformOrigin: "center" }}
      />
      <div
        ref={line2Ref}
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[15%] w-[140%] h-px bg-white opacity-[0.04]"
        style={{ transform: "rotate(-18deg)", transformOrigin: "center" }}
      />

      {/* Glow ambiental muy sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl w-full">
        {/* Eyebrow */}
        <p className="eyebrow mb-6 flex items-center gap-2">
          <span className="accent-line" />
          Diseño Visual · Música
        </p>

        {/* Headline */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.92] tracking-tight uppercase">
          Diseños
          <br />
          <span className="text-white/60">que suenan</span>
          <br />
          distinto
        </h1>

        {/* Sub */}
        <p className="mt-8 text-[var(--muted)] text-base max-w-md leading-relaxed font-light">
          Cover Arts, Visualizers y contenido creativo para artistas que quieren
          una identidad visual tan única como su música.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#portfolio" className="btn-primary">Ver Portafolio</a>
          <a href="#contact" className="btn-secondary">Hablar del proyecto</a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 text-[var(--muted)] text-[0.6rem] tracking-widest uppercase">
          <span className="w-px h-8 bg-white/20 block" />
          Scroll
        </div>
      </div>
    </section>
  );
}
