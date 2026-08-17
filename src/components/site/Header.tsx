import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/i18n";
import { useTheme } from "@/lib/theme";
import { CHURCH_NAME, logoUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { id: "sobre", key: "nav.about" },
  { id: "mural", key: "nav.gallery" },
  { id: "localizacao", key: "nav.location" },
  { id: "contato", key: "nav.contact" },
  { id: "redes", key: "nav.social" },
] as const;

const langs: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt={CHURCH_NAME}
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold leading-tight text-foreground sm:text-base">
              IBVIVA
            </span>
            <span className="hidden truncate text-xs text-muted-foreground sm:block">
              {CHURCH_NAME}
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div
            className="flex items-center rounded-full border border-border bg-card/70 p-0.5"
            role="group"
            aria-label={t("lang.label")}
          >
            <Globe className="mx-1.5 hidden h-3.5 w-3.5 shrink-0 text-muted-foreground sm:block" />
            {langs.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLang(item.code)}
                aria-pressed={lang === item.code}
                className={cn(
                  "rounded-full px-2 py-1 text-xs font-semibold transition-all duration-300",
                  lang === item.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={t("theme.toggle")}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-transform duration-300 hover:scale-105 hover:border-accent-strong"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent/60"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
