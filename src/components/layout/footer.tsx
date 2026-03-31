"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { SiteletMark, SiteletLogo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Giant decorative "SITELET" background text */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none items-end justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span className="translate-y-[20%] text-[clamp(5rem,18vw,14rem)] font-heading font-bold tracking-tighter bg-gradient-to-b from-background/15 via-background/8 to-transparent bg-clip-text text-transparent">
          SITELET
        </span>
      </div>

      {/* CTA section — inside the dark footer for visual continuity */}
      <div className="relative z-10 border-b border-background/10">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Redo att ta nästa steg?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-md text-base text-background/60 md:text-lg"
          >
            Berätta om ditt företag — vi återkommer inom 24 timmar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-background/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Få din gratis webbanalys
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-[1200px] px-6 py-14 md:py-16"
      >
        {/* Top row: logo left, contact right */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <SiteletMark inverted />
              <SiteletLogo />
            </div>
            <p className="text-sm text-background/50">
              Hemsidor som faktiskt funkar.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 md:items-end">
            <a
              href="mailto:adam@sitelet.se"
              className="text-sm text-background/70 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              adam@sitelet.se
            </a>
            <a
              href="tel:+46722893346"
              className="text-sm text-background/70 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              072-289 33 46
            </a>
            <p className="text-sm text-background/40">
              Ronneby, Sverige
            </p>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-10 border-background/10" />

        {/* Nav links + copyright */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-background/50 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/integritetspolicy"
              className="text-background/50 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Integritetspolicy
            </Link>
          </nav>

          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} Sitelet
          </p>
        </div>

        {/* Legal info */}
        <div className="mt-8 flex flex-col items-center gap-1 text-center text-[11px] leading-relaxed text-background/45 md:items-start md:text-left">
          <p>Adam Zrek · Enskild firma · Org.nr 060101-8393</p>
          <p>Godkänd för F-skatt · Momsreg.nr SE060101839301</p>
          <p>Västra Torggatan 7 D, 372 30 Ronneby</p>
        </div>
      </motion.div>
    </footer>
  );
}
