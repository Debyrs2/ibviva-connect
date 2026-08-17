import { ExternalLink } from "lucide-react";
import { useI18n } from "@/i18n";
import { ADDRESS, MAPS_EMBED, MAPS_URL } from "@/lib/site";
import { ClockIcon, PinIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Location() {
  const { t } = useI18n();

  const schedule = ["location.sunday", "location.week", "location.kids"] as const;

  return (
    <section id="localizacao" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong-ink">
          {t("location.tag")}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t("location.title")}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {t("location.address")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
                  >
                    {t("location.open")}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent-strong/20 text-accent-strong-ink">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {t("location.schedule")}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {schedule.map((item) => (
                      <li
                        key={item}
                        className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/70 pb-2 last:border-0"
                      >
                        <span className="font-medium text-foreground">{t(item)}</span>
                        <span className="text-muted-foreground">{t("location.tbd")}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs italic text-muted-foreground/80">
                    {t("location.editable")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="min-h-[320px]">
          <div className="h-full overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              title={t("location.title")}
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
