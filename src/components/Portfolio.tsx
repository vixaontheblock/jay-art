"use client";
import Image from "next/image";
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

  return (
    <section id="portfolio" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="eyebrow mb-3 flex items-center">
          <span className="accent-line" />
        </p>
        <h2 className="font-display text-6xl uppercase leading-none">Portafolio</h2>
      </div>

      {/* Grid con columnas de distintos tamaños */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((img, i) => {
          // Hace que la primera y la séptima pieza sean más grandes
          const wide = i === 0 || i === 6;
          return (
            <button
              key={i}
              onClick={() => setActive(img)}
              className={`group relative overflow-hidden bg-[var(--bg-card)] ${
                wide ? "md:col-span-2" : ""
              }`}
              style={{ aspectRatio: "1 / 1" }}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <img
                src={img}
                alt={`Proyecto ${i + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
              />
              {/* Overlay con número */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <span className="font-display text-[var(--gold)] text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox simple */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-[var(--muted)] hover:text-white text-2xl"
            onClick={() => setActive(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <img
            src={active}
            alt="Vista ampliada"
            className="max-h-[90vh] max-w-full object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
