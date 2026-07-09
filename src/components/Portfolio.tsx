"use client";
import { useState } from "react";

const images = [
  "/portfolio/01.webp",
  "/portfolio/02.webp",
  "/portfolio/03.webp",
  "/portfolio/04.webp",
  "/portfolio/05.webp",
  "/portfolio/06.webp",
  "/portfolio/07.webp",
  "/portfolio/08.webp",
  "/portfolio/09.webp",
  "/portfolio/10.webp",
  "/portfolio/11.webp",
  "/portfolio/12.webp",
];

export default function Portfolio() {
  const [active, setActive] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const open = (img: string, i: number) => {
    setActive(img);
    setActiveIndex(i);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const i = (activeIndex - 1 + images.length) % images.length;
    setActive(images[i]);
    setActiveIndex(i);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    const i = (activeIndex + 1) % images.length;
    setActive(images[i]);
    setActiveIndex(i);
  };

  return (
    <section id="portfolio" className="py-28 md:py-36 px-6 max-w-6xl mx-auto">
      <div className="section-head">
        <h2 className="font-display text-5xl md:text-6xl uppercase leading-none text-[var(--paper)]">
          Portafolio
        </h2>
        <p className="font-mono text-xs text-[var(--steel)]">
          {String(images.length).padStart(2, "0")} PIEZAS — HOJA DE CONTACTO
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((img, i) => {
          const wide = i === 0 || i === 6;
          return (
            <button
              key={i}
              onClick={() => open(img, i)}
              className={`group relative overflow-hidden bg-[var(--ink-2)] ${wide ? "md:col-span-2" : ""}`}
              style={{ aspectRatio: "1 / 1" }}
              aria-label={`Ver pieza ${i + 1}`}
            >
              <img
                src={img}
                alt={`Pieza ${i + 1} del portafolio de JayArt`}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 grayscale-[0.15] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-4">
                <span className="font-mono text-[var(--paper)]/80 text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
                <span className="font-mono text-[var(--ember)] text-xs tracking-widest">VER →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox con navegación */}
      {active && (
        <div
          className="fixed inset-0 z-[70] bg-black/96 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-[var(--steel)] hover:text-[var(--paper)] text-xl transition-colors"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>

          <button
            className="absolute left-4 md:left-10 text-[var(--steel)] hover:text-[var(--ember)] text-3xl transition-colors p-2"
            onClick={prev}
            aria-label="Anterior"
          >
            ‹
          </button>

          <img
            src={active}
            alt="Vista ampliada de la pieza seleccionada"
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-10 text-[var(--steel)] hover:text-[var(--ember)] text-3xl transition-colors p-2"
            onClick={next}
            aria-label="Siguiente"
          >
            ›
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[var(--steel)] text-xs tracking-widest">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </section>
  );
}
