import { useI18n } from "@/i18n";
import { SOCIALS } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Social() {
  const { t } = useI18n();

  const items = [
    { name: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon, action: "social.follow" },
    { name: "Facebook", href: SOCIALS.facebook, Icon: FacebookIcon, action: "social.follow" },
    { name: "YouTube", href: SOCIALS.youtube, Icon: YoutubeIcon, action: "social.watch" },
  ] as const;

  return (
    <section id="redes" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong-ink">
          {t("social.tag")}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t("social.title")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("social.subtitle")}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.name} delay={i * 120}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[9rem] flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-strong hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-accent-strong group-hover:text-accent-strong-foreground">
                <item.Icon className="h-6 w-6" />
              </span>
              <span className="mt-5">
                <span className="block font-display text-lg font-semibold text-foreground">
                  {item.name}
                </span>
                <span className="block text-sm text-muted-foreground">IBVIVA</span>
                <span className="mt-3 block text-sm font-semibold text-accent-strong-ink">
                  {t(item.action)} →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
