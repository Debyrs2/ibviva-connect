import { BookOpen, HandHeart, Users } from "lucide-react";
import { useI18n } from "@/i18n";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useI18n();

  const values = [
    { icon: BookOpen, title: "about.v1.title", text: "about.v1.text" },
    { icon: Users, title: "about.v2.title", text: "about.v2.text" },
    { icon: HandHeart, title: "about.v3.title", text: "about.v3.text" },
  ] as const;

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong-ink">
          {t("about.tag")}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t("about.title")}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("about.p1")}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("about.p2")}
        </p>
        
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, i) => (
          <Reveal as="li" key={value.title} delay={i * 120}>
            <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-strong/60 hover:shadow-lg">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent-strong group-hover:text-accent-strong-foreground">
                <value.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {t(value.title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(value.text)}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
