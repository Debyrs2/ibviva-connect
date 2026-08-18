import { useI18n } from "@/i18n";
import { ADDRESS, CHURCH_NAME, EMAIL, MAPS_URL, SOCIALS, logoUrl } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./icons";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img src={logoUrl} alt={CHURCH_NAME} className="h-11 w-11 shrink-0 object-contain" />
            <span className="min-w-0">
              <span className="block font-display text-base font-semibold text-foreground">
                IBVIVA
              </span>
              <span className="block truncate text-xs text-muted-foreground">{CHURCH_NAME}</span>
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("location.address")}
          </h2>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm leading-relaxed text-muted-foreground transition-colors hover:text-accent-strong-ink"
          >
            {ADDRESS}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 block break-all text-sm text-muted-foreground transition-colors hover:text-accent-strong-ink"
          >
            {EMAIL}
          </a>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            {t("contact.title")}
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 inline-flex min-h-11 items-center break-all text-sm text-muted-foreground transition-colors hover:text-accent-strong-ink"
          >
            {EMAIL}
          </a>
          <div className="mt-4 flex gap-2">
            {[
              { href: SOCIALS.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: SOCIALS.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: SOCIALS.youtube, Icon: YoutubeIcon, label: "YouTube" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} IBVIVA`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-105 hover:border-accent-strong hover:text-accent-strong-ink"
              >
                <item.Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {CHURCH_NAME}. {t("footer.rights")}
      </div>
    </footer>
  );
}
