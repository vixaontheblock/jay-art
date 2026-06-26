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
    <section id="portfolio" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="eyebrow mb-3 flex items-center">
          <span className="accent-line" />
          Trabajo reciente
        </p>
        <h2 className="font-display text-6xl uppercase leading-none">Portafolio</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((img, i) => {
          const wide = i === 0 || i === 6;
          return (
            <button
              key={i}
              onClick={() => open(img, i)}
              className={`group relative overflow-hidden bg-[var(--bg-card)] ${wide ? "md:col-span-2" : ""}`}
              style={{ aspectRatio: "1 / 1" }}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <img
                src={img}
                alt={`Proyecto ${i + 1}`}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <span className="font-display text-white/80 text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox con navegación */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/30 hover:text-white text-xl transition-colors"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-10 text-white/30 hover:text-white text-3xl transition-colors p-2"
            onClick={prev}
            aria-label="Anterior"
          >
            ‹
          </button>

          <img
            src={active}
            alt="Vista ampliada"
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-10 text-white/30 hover:text-white text-3xl transition-colors p-2"
            onClick={next}
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </section>
  );
}
