import { useI18n } from "@/i18n";
import { EMAIL } from "@/lib/site";
import { MailIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contato" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong-ink">
            {t("contact.tag")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <a
              href={`mailto:${EMAIL}`}
              className="group mx-auto flex max-w-xl flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-8"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <MailIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {t("contact.email")}
              </h3>
              <p className="mt-1 break-all text-sm text-muted-foreground">{EMAIL}</p>
              <span className="mt-4 text-sm font-semibold text-primary">
                {t("contact.emailAction")} →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
