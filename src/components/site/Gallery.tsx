import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { photos } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Gallery() {
  const { t } = useI18n();
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const photoAlt = `${t("gallery.title")} — IBVIVA`;

  const go = useCallback((step: number) => {
    setSlide((current) => (current + step + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setLightbox((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="mural" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong-ink">
            {t("gallery.tag")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {t("gallery.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("gallery.subtitle")}
          </p>
        </Reveal>

        {/* Mobile: carousel with fade transitions */}
        <Reveal className="mt-10 sm:hidden">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="relative aspect-[4/5]">
              {photos.map((photo, i) => (
                <img
                  key={photo}
                  src={photo}
                  alt={photoAlt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    i === slide ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 p-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t("gallery.prev")}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-1.5">
                {photos.map((photo, i) => (
                  <span
                    key={photo}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === slide ? "w-6 bg-accent-strong" : "w-1.5 bg-border",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t("gallery.next")}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tablet & desktop: responsive grid */}
        <ul className="mt-12 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal
              as="li"
              key={photo}
              delay={(i % 3) * 100}
              className={cn(i === 0 && "lg:col-span-2 lg:row-span-2")}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={photo}
                  alt={photoAlt}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                    i === 0 ? "aspect-[4/3] lg:h-full" : "aspect-[4/3]",
                  )}
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={photos[lightbox]!}
            alt={photoAlt}
            className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
          />
          <button
            type="button"
            aria-label={t("gallery.close")}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-on-hero"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
