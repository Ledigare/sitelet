"use client";

import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/sections/contact";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  logos: { src: string; alt: string; darkSrc?: string }[];
}

const SERVICES: ServiceItem[] = [
  {
    title: "Meta-annonser",
    subtitle: "Facebook, Instagram, WhatsApp & Messenger",
    description:
      "Annonser som faktiskt ger bokningar och besök. Vi sköter kampanjer, målgrupper och optimering.",
    badge: "Populärast",
    logos: [
      { src: "/logos/marketing/facebook.png", alt: "Facebook" },
      { src: "/logos/marketing/instagram.png", alt: "Instagram" },
      { src: "/logos/marketing/whatsapp.png", alt: "WhatsApp" },
      { src: "/logos/marketing/messenger.png", alt: "Messenger" },
    ],
  },
  {
    title: "Google Ads",
    subtitle: "Sök, Maps & Shopping",
    description:
      "Syns först när någon söker efter det du erbjuder. Vi sätter upp och sköter dina sökannonser.",
    logos: [
      { src: "/logos/marketing/google-ads.svg", alt: "Google Ads" },
    ],
  },
  {
    title: "TikTok & Sociala medier",
    subtitle: "Video & Reels",
    description:
      "Nå nya kunder där de scrollar. Vi hjälper dig komma igång med kort video som konverterar.",
    logos: [
      { src: "/logos/marketing/tiktok.png", alt: "TikTok", darkSrc: "/logos/marketing/tiktok-white.png" },
    ],
  },
  {
    title: "Google Företagsprofil",
    subtitle: "Kartor & Omdömen",
    description:
      "Vi ser till att du syns på kartan och att din profil jobbar för dig dygnet runt.",
    logos: [
      { src: "/logos/marketing/google-business.svg", alt: "Google Business" },
    ],
  },
];

const PRICING_TIERS = [
  {
    name: "Testa",
    monthlyPrice: "399",
    delivery: "Igång inom 5 dagar",
    features: [
      "En plattform (Meta eller Google)",
      "Setup & kampanjstart",
      "Koll varje vecka",
      "Månadsrapport",
    ],
    bestFor: "Dig som vill testa utan att binda upp dig",
    highlighted: false,
  },
  {
    name: "Växla upp",
    monthlyPrice: "499",
    delivery: "Igång inom 5 dagar",
    features: [
      "Två plattformar (Meta + Google)",
      "Allt i Testa",
      "Pixel & spårning",
      "A/B-test av annonser",
    ],
    bestFor: "Företag som vill synas överallt",
    highlighted: true,
  },
  {
    name: "Full gas",
    monthlyPrice: "799",
    delivery: "Igång inom 1 vecka",
    features: [
      "Alla plattformar (Meta + Google + TikTok)",
      "Allt i Växla upp",
      "Google Företagsprofil-optimering",
      "Prio-support",
    ],
    bestFor: "Företag som menar allvar",
    highlighted: false,
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

const pricingCardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function MarknadsforingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — matching main site pattern */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden md:pt-36">
          {/* Dot grid background */}
          <div aria-hidden="true" className="dot-grid dot-grid-mask pointer-events-none absolute inset-0 z-0" />

          <div className="relative z-10 mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Fler kunder. Mindre krångel.
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="mt-6 text-lg text-muted-foreground md:text-xl"
              >
                Vi sätter upp och sköter dina annonser på Meta, Google och TikTok. Du fokuserar på det du gör bäst.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="mt-8"
              >
                <a
                  href="#kontakt-marknadsforing"
                  onClick={() => track("cta_clicked", { location: "marknadsforing_hero", label: "boka_samtal" })}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Boka ett samtal
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="px-6 pb-20 md:pb-28">

        {/* Services Grid */}
        <div className="mx-auto mt-20 max-w-[1200px] md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Det här fixar vi
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Du berättar vad du behöver. Vi sköter resten.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 flex flex-col gap-4"
          >
            {SERVICES.map((service, i) => {
              const isHero = i === 0;
              if (!isHero) return null;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="relative flex flex-col rounded-2xl bg-foreground text-background p-10 md:p-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {service.badge && (
                    <span className="absolute -top-3 right-6 rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                      {service.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    {service.logos.map((logo) => (
                      <span key={logo.alt}>
                        <Image src={logo.src} alt={logo.alt} width={40} height={40} className={cn("h-10 w-10 object-contain", logo.darkSrc ? "dark:hidden" : "")} />
                        {logo.darkSrc && <Image src={logo.darkSrc} alt={logo.alt} width={40} height={40} className="hidden h-10 w-10 object-contain dark:block" />}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold md:text-3xl">{service.title}</h3>
                  <p className="mt-1 text-sm text-background/70">{service.subtitle}</p>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-background/80 md:text-lg">{service.description}</p>
                </motion.div>
              );
            })}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SERVICES.slice(1).map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  {service.logos.map((logo) => (
                    <span key={logo.alt}>
                      <Image src={logo.src} alt={logo.alt} width={28} height={28} className={cn("h-7 w-7 object-contain", logo.darkSrc ? "dark:hidden" : "")} />
                      {logo.darkSrc && <Image src={logo.darkSrc} alt={logo.alt} width={28} height={28} className="hidden h-7 w-7 object-contain dark:block" />}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold">{service.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{service.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>

        {/* Pricing */}
        <div className="mx-auto mt-20 max-w-[1200px] md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Rakt på sak
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Du betalar oss för jobbet. Annonsbudgeten går direkt till plattformen.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid items-center gap-5 md:grid-cols-3"
            style={{ perspective: 800 }}
          >
            {PRICING_TIERS.map((tier) => {
              const dark = tier.highlighted;
              return (
                <motion.div
                  key={tier.name}
                  variants={pricingCardVariants}
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300",
                    dark
                      ? "bg-foreground text-background shadow-xl md:-my-4 md:py-10"
                      : "border border-border bg-background hover:shadow-md"
                  )}
                >
                  {dark && (
                    <span className="absolute -top-3.5 left-8 rounded-full bg-background px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                      Populärast
                    </span>
                  )}

                  <h3 className="font-heading text-lg font-semibold">
                    {tier.name}
                  </h3>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading text-4xl font-bold tabular-nums tracking-tight md:text-5xl">
                        {tier.monthlyPrice}
                      </span>
                      <span className={cn("text-sm", dark ? "text-background/70" : "text-muted-foreground")}>
                        kr/mån
                      </span>
                    </div>
                    <p className={cn("mt-2 text-xs", dark ? "text-background/85" : "text-muted-foreground")}>
                      Ingen startavgift
                    </p>
                  </div>

                  <hr className={cn("mt-6 border-dashed", dark ? "border-background/25" : "border-border")} />

                  <ul className="mt-5 flex flex-1 flex-col gap-2.5" role="list">
                    <li className={cn("flex items-center gap-2.5 text-sm font-medium", dark ? "text-background" : "text-foreground")}>
                      <Clock className={cn("h-3.5 w-3.5 shrink-0", dark ? "text-background/70" : "text-muted-foreground")} strokeWidth={2} aria-hidden="true" />
                      {tier.delivery}
                    </li>
                    {tier.features.map((feature) => (
                      <li key={feature} className={cn("flex items-center gap-2.5 text-sm", dark ? "text-background/85" : "text-foreground")}>
                        <Check className={cn("h-3.5 w-3.5 shrink-0", dark ? "text-background/70" : "text-muted-foreground")} strokeWidth={2} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className={cn("mt-5 text-xs", dark ? "text-background/85" : "text-muted-foreground")}>
                    Bäst för: {tier.bestFor}
                  </p>

                  <a
                    href="#kontakt-marknadsforing"
                    onClick={() => track("cta_clicked", { location: "marknadsforing_pricing", label: tier.name })}
                    className={cn(
                      "mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
                      dark
                        ? "bg-background text-foreground hover:bg-background/90"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    Kom igång
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground"
          >
            <p>Ingen bindningstid. Starta, pausa eller avsluta när du vill.</p>
            <p>Rekommenderad annonsbudget: från 1 500 kr/mån direkt till plattformen.</p>
            <p className="text-xs">Alla priser exkl. moms.</p>
          </motion.div>
        </div>

        </div>

        {/* Contact form — reuses main site component with marketing pre-selected */}
        <Contact defaultService="marknadsforing" />
      </main>
      <Footer />
    </>
  );
}
