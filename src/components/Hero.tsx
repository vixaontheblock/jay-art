"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-16">
      {/* Panel de imagen — blanco y negro puro, bleed derecho */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full md:w-[48%] opacity-70 md:opacity-100">
        <div ref={imgRef} className="absolute inset-0 -top-16 h-[calc(100%+8rem)]">
          <img
            src="/portfolio/05.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.2) brightness(0.65)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #000 0%, rgba(0,0,0,0.2) 30%, transparent 55%)" }} />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 md:hidden" />
      </div>

      <div className="hidden md:flex absolute top-32 right-8 items-center gap-2 font-mono text-[0.65rem] text-[var(--steel)] tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        DISPONIBLE PARA NUEVOS LANZAMIENTOS
      </div>

      <div className="relative max-w-6xl w-full mx-auto">
        {/* Panel de vidrio contenedor del mensaje principal */}
        <div className="glass max-w-2xl p-8 md:p-12 rounded-xl">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--steel)] mb-6">
            ESTUDIO DE DIRECCIÓN VISUAL — PANAMÁ
          </p>

          <h1 className="font-display text-[clamp(2.8rem,8vw,6.2rem)] leading-[0.9] uppercase text-[var(--paper)]">
            La portada
            <br />
            es la primera
            <br />
            <span style={{ WebkitTextStroke: "1.5px #fff", color: "transparent" }}>escucha</span>
          </h1>

          <p className="mt-8 text-[var(--paper-dim)] text-base max-w-md leading-relaxed font-light">
            Cover arts, visualizers y piezas visuales para artistas urbanos que
            buscan una identidad tan fuerte como su música. Diseño con
            estrategia, no solo con estética.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary">Ver portafolio</a>
            <a href="#contact" className="btn-secondary">Hablar del proyecto</a>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-6 font-mono text-[0.65rem] text-[var(--steel)] tracking-widest uppercase">
          <span className="w-10 h-px bg-[var(--line)]" />
          Cover art · visualizers · dirección de marca
        </div>
      </div>
    </section>
  );
}
