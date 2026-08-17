import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Social } from "@/components/site/Social";
import { Footer } from "@/components/site/Footer";

const title = "Igreja Batista Viva em Piedade | IBVIVA — Jaboatão dos Guararapes";
const description =
  "Igreja Batista Viva em Piedade: cultos, mural de fotos, horários, localização e contato por WhatsApp. Você é bem-vindo do jeito que está.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Gallery />
            <Location />
            <Contact />
            <Social />
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
