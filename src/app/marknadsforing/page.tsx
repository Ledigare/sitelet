"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Search,
  Video,
  MapPin,
  MessageCircle,
  Mail,
} from "lucide-react";

// NOTE: metadata can't be exported from "use client" components
// Metadata is handled in layout.tsx

const SERVICES = [
  {
    icon: Users,
    title: "Meta-annonser",
    subtitle: "Facebook & Instagram",
    description:
      "Vi skapar och optimerar annonser som når dina kunder i Blekinge och hela Sverige. Fler bokningar, fler besök, mätbara resultat.",
    badge: "Populärast",
  },
  {
    icon: Search,
    title: "Google Ads & SEO",
    subtitle: "Sök & Shopping",
    description:
      "Syns först när någon söker efter det du erbjuder. Sökannonser, Google Maps, Shopping — vi sköter allt.",
  },
  {
    icon: Video,
    title: "TikTok & Sociala medier",
    subtitle: "Kort video",
    description:
      "Nå nya kunder där de spenderar sin tid. Kort videoinnehåll som skapar uppmärksamhet och konverterar.",
  },
  {
    icon: MapPin,
    title: "Google Företagsprofil",
    subtitle: "Kartor & Omdömen",
    description:
      "Vi optimerar din Google-profil så du syns på kartan, får fler omdömen och fler samtal.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Messenger",
    subtitle: "Automatiserad chatt",
    description:
      "Automatiserade svar, bokningar via chatt, kundtjänst dygnet runt — utan att du lyfter ett finger.",
  },
  {
    icon: Mail,
    title: "E-postmarknadsföring",
    subtitle: "Nyhetsbrev & Flöden",
    description:
      "Nyhetsbrev, erbjudanden och automatiska flöden som håller dina kunder engagerade.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function MarknadsforingPage() {
  return (
    <>
      <Header />
      <main className="px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Hero */}
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              En hemsida utan trafik är en skylt i skogen.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-muted-foreground md:text-xl"
            >
              Vi driver besökare till din sida med rätt annonser på rätt plattformar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <a
                href="#kontakt-marknadsforing"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Boka gratis strategisamtal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-20 max-w-[1200px] md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Allt du behöver för att växa online
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Vi sköter marknadsföringen — du fokuserar på ditt företag.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {service.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                    {service.badge}
                  </span>
                )}
                <service.icon
                  className="h-6 w-6 text-foreground"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {service.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pricing Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-[1200px] md:mt-28"
        >
          <div className="rounded-2xl bg-foreground p-10 text-center text-background md:p-14">
            <p className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Marknadsföring från 2 999 kr/mån
            </p>
            <p className="mx-auto mt-4 max-w-lg text-background/75 md:text-lg">
              Vi sköter strategi, annonsering och uppföljning — du fokuserar på ditt företag.
            </p>
            <p className="mt-4 text-sm text-background/60">
              Månatlig rapport med resultat · Ingen bindningstid · Starta och pausa när du vill
            </p>
            <div className="mt-8">
              <a
                href="#kontakt-marknadsforing"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-background/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
              >
                Boka gratis strategisamtal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-xs text-background/50">
              Alla priser exkl. moms.
            </p>
          </div>
        </motion.div>

        {/* Bundle Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-[1200px]"
        >
          <div className="rounded-2xl border border-border p-8 text-center md:p-10">
            <p className="text-lg font-medium text-foreground">
              Hemsida + Marknadsföring?
            </p>
            <p className="mt-2 text-muted-foreground">
              Fråga om vårt tillväxtpaket — allt du behöver för att växa online.
            </p>
            <Link
              href="/#kontakt"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Kontakta oss
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div
          id="kontakt-marknadsforing"
          className="mx-auto mt-20 max-w-[1200px] md:mt-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Boka ett gratis strategisamtal
            </h2>
            <p className="mt-4 text-muted-foreground">
              Vi analyserar din nuvarande närvaro online och ger dig en konkret plan för att nå fler kunder. Helt utan kostnad.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:adam@sitelet.se"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                adam@sitelet.se
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+46722893346"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary active:scale-[0.98]"
              >
                072-289 33 46
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
