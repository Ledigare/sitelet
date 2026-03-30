import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Integritetspolicy — Sitelet",
  description: "Så hanterar Sitelet dina personuppgifter enligt GDPR.",
};

const SECTIONS = [
  { id: "ansvarig", label: "Ansvarig" },
  { id: "uppgifter", label: "Uppgifter" },
  { id: "syfte", label: "Syfte" },
  { id: "lagring", label: "Lagring" },
  { id: "tid", label: "Lagringstid" },
  { id: "cookies", label: "Cookies" },
  { id: "rattigheter", label: "Dina rättigheter" },
  { id: "klagomal", label: "Klagomål" },
];

export default function IntegritetspolicyPage() {
  return (
    <>
      <Header />
      <main className="px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-[1200px]">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Tillbaka till startsidan
          </Link>

          {/* Heading */}
          <div className="mt-8">
            <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Integritetspolicy
            </h1>
            <p className="mt-3 text-muted-foreground">
              Senast uppdaterad: 30 mars 2026
            </p>
          </div>

          {/* Two-column layout: nav left, content right */}
          <div className="mt-14 grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Left — sticky table of contents */}
            <nav className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Innehåll
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="font-heading text-xs text-foreground/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Right — content */}
            <div className="max-w-prose space-y-12 text-[15px] leading-relaxed text-muted-foreground">
              {/* 01 — Personuppgiftsansvarig */}
              <section id="ansvarig">
                <SectionHeading num="01" title="Personuppgiftsansvarig" />
                <div className="mt-5 rounded-2xl border border-border bg-background-secondary p-6">
                  <p className="font-medium text-foreground">Adam Zrek</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Enskild firma · Org.nr 060101-8393
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground/50" strokeWidth={1.5} />
                      Västra Torggatan 7 D, 372 30 Ronneby
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground/50" strokeWidth={1.5} />
                      <a href="mailto:adam@sitelet.se" className="text-foreground underline underline-offset-4">
                        adam@sitelet.se
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground/50" strokeWidth={1.5} />
                      <a href="tel:+46722893346" className="text-foreground underline underline-offset-4">
                        072-289 33 46
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* 02 — Vilka uppgifter */}
              <section id="uppgifter">
                <SectionHeading num="02" title="Vilka uppgifter samlar vi in?" />
                <p className="mt-4">
                  När du använder kontaktformuläret på sitelet.se samlar vi in:
                </p>
                <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-border">
                  <li>Namn</li>
                  <li>Företagsnamn</li>
                  <li>Telefonnummer eller e-postadress</li>
                  <li>Ditt meddelande</li>
                  <li>Webbadress (valfritt)</li>
                </ul>
              </section>

              {/* 03 — Syfte */}
              <section id="syfte">
                <SectionHeading num="03" title="Varför samlar vi in uppgifterna?" />
                <p className="mt-4">
                  Vi samlar in dina uppgifter för att kunna besvara din
                  förfrågan och eventuellt lämna en offert på våra tjänster.
                </p>
                <p className="mt-3">
                  Den rättsliga grunden för behandlingen är{" "}
                  <strong className="text-foreground">berättigat intresse</strong>{" "}
                  (artikel 6.1f GDPR) — du kontaktar oss frivilligt och
                  förväntar dig ett svar.
                </p>
              </section>

              {/* 04 — Lagring */}
              <section id="lagring">
                <SectionHeading num="04" title="Hur lagrar vi uppgifterna?" />
                <p className="mt-4">
                  Formulärdata skickas via{" "}
                  <strong className="text-foreground">Resend</strong>{" "}
                  som agerar personuppgiftsbiträde för e-postleverans.
                  Data behandlas inom EU (Irland).
                </p>
                <p className="mt-3">
                  Uppgifterna vidarebefordras till vår e-post och lagras i
                  vår e-postinkorg.
                </p>
              </section>

              {/* 05 — Lagringstid */}
              <section id="tid">
                <SectionHeading num="05" title="Hur länge sparar vi uppgifterna?" />
                <p className="mt-4">
                  Vi sparar dina kontaktuppgifter så länge det behövs för att
                  hantera din förfrågan, dock max{" "}
                  <strong className="text-foreground">12 månader</strong> från
                  senaste kontakttillfället.
                </p>
                <p className="mt-3">
                  Uppgifter relaterade till ett aktivt kundförhållande sparas
                  under avtalstiden plus den bokföringsskyldighet som gäller
                  (7 år enligt bokföringslagen).
                </p>
              </section>

              {/* 06 — Cookies & analys */}
              <section id="cookies">
                <SectionHeading num="06" title="Cookies och analys" />
                <p className="mt-4">
                  Sitelet.se använder inga spårningscookies och sätter inga
                  tredjepartscookies. Vi använder{" "}
                  <strong className="text-foreground">Vercel Analytics</strong>{" "}
                  och{" "}
                  <strong className="text-foreground">Vercel Speed Insights</strong>{" "}
                  för att mäta webbplatsens prestanda. Dessa verktyg samlar
                  inte in personuppgifter, använder inga cookies och spårar
                  inte enskilda besökare. All data är aggregerad och anonym.
                </p>
              </section>

              {/* 07 — Dina rättigheter */}
              <section id="rattigheter">
                <SectionHeading num="07" title="Dina rättigheter" />
                <p className="mt-4">Enligt GDPR har du rätt att:</p>
                <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-border">
                  <li>
                    <strong className="text-foreground">Få tillgång</strong> till
                    de personuppgifter vi har om dig
                  </li>
                  <li>
                    <strong className="text-foreground">Begära rättelse</strong>{" "}
                    av felaktiga uppgifter
                  </li>
                  <li>
                    <strong className="text-foreground">Begära radering</strong>{" "}
                    av dina uppgifter
                  </li>
                  <li>
                    <strong className="text-foreground">Begära begränsning</strong>{" "}
                    av behandlingen
                  </li>
                  <li>
                    <strong className="text-foreground">Invända</strong> mot
                    behandlingen
                  </li>
                  <li>
                    <strong className="text-foreground">Dataportabilitet</strong>{" "}
                    — få ut dina uppgifter i maskinläsbart format
                  </li>
                </ul>
                <p className="mt-4">
                  Kontakta oss på{" "}
                  <a
                    href="mailto:adam@sitelet.se"
                    className="text-foreground underline underline-offset-4"
                  >
                    adam@sitelet.se
                  </a>{" "}
                  för att utöva dina rättigheter. Vi besvarar din begäran inom
                  30 dagar.
                </p>
              </section>

              {/* 08 — Klagomål */}
              <section id="klagomal">
                <SectionHeading num="08" title="Klagomål" />
                <p className="mt-4">
                  Om du anser att vi behandlar dina personuppgifter felaktigt
                  har du rätt att lämna klagomål till{" "}
                  <strong className="text-foreground">
                    Integritetsskyddsmyndigheten (IMY)
                  </strong>
                  .
                </p>
                <p className="mt-3">
                  <a
                    href="https://www.imy.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    www.imy.se
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="font-heading text-3xl font-bold text-foreground/[0.08]"
      >
        {num}
      </span>
      <h2 className="font-heading text-xl font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
}
