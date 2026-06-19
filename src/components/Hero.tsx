"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  // Sutil parallax en la línea diagonal al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const y = window.scrollY;
      lineRef.current.style.transform = `rotate(-18deg) translateY(${y * 0.08}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      {/* Línea diagonal — la firma visual */}
      <div
        ref={lineRef}
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] w-[140%] h-px bg-[var(--gold)] opacity-20"
        style={{ transform: "rotate(-18deg)", transformOrigin: "center" }}
      />
      {/* Segunda línea */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[14%] w-[140%] h-px bg-[var(--gold)] opacity-8"
        style={{ transform: "rotate(-18deg)", transformOrigin: "center" }}
      />

      <div className="max-w-5xl w-full">
        {/* Eyebrow */}
        <p className="eyebrow mb-6 flex items-center gap-2">
          <span className="accent-line" />
        </p>

        {/* Headline con Bebas Neue */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.92] tracking-tight uppercase">
          Diseños
          <br />
          <span className="text-[var(--gold)]">que suenan</span>
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
      </div>
    </section>
  );
}