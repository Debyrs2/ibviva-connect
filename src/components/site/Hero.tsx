import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { heroPhotos, logoUrl, CHURCH_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroPhotos.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => setOffset(Math.min(window.scrollY * 0.18, 120));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 -z-20" style={{ transform: `translateY(${offset}px)` }}>
        {heroPhotos.map((photo, i) => (
          <img
            key={photo}
            src={photo}
            alt=""
            aria-hidden={i !== index}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full scale-105 object-cover transition-opacity duration-[1600ms] ease-in-out",
              i === index ? "animate-hero-pan opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-hero-veil" />

      <div className="mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8">
        <img
          src={logoUrl}
          alt={CHURCH_NAME}
          className="h-20 w-20 animate-fade-up rounded-2xl bg-white/90 p-2 shadow-lg sm:h-24 sm:w-24"
        />
        <span className="mt-6 animate-fade-up rounded-full border border-accent-strong/60 bg-accent-strong/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-hero-soft [animation-delay:120ms]">
          {t("hero.badge")}
        </span>
        <h1 className="mt-5 animate-fade-up font-display text-3xl font-extrabold leading-tight text-on-hero drop-shadow-sm [animation-delay:200ms] sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-5 max-w-2xl animate-fade-up text-base leading-relaxed text-on-hero-soft [animation-delay:320ms] sm:text-lg">
          {t("hero.subtitle")}
        </p>
        <div className="mt-9 flex w-full animate-fade-up flex-col gap-3 [animation-delay:420ms] sm:w-auto sm:flex-row">
          <a
            href="#sobre"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-strong px-7 text-sm font-semibold text-accent-strong-foreground shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-accent-glow"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#localizacao"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 text-sm font-semibold text-on-hero backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
          >
            <MapPin className="h-4 w-4" />
            {t("hero.cta2")}
          </a>
        </div>

        <div className="mt-14 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-on-hero-soft">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          {t("hero.scroll")}
        </div>
      </div>
    </section>
  );
}
