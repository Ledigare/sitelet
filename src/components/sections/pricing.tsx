"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { motion, AnimatePresence } from "framer-motion";
import { PRICING_TIERS } from "@/lib/constants";
import { Check, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
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

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="priser" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vad kostar det?
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Tre paket. Tydliga priser. Vi bygger en gratis demo innan du
            bestämmer dig.
          </p>

          {/* Toggle — pill with sliding indicator */}
          <div className="mt-8 inline-flex rounded-full border border-border bg-secondary/50 p-1" role="radiogroup" aria-label="Faktureringsperiod">
            <button
              onClick={() => { setYearly(false); track("pricing_toggle", { period: "monthly" }); }}
              role="radio"
              aria-checked={!yearly}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              {!yearly && (
                <motion.span
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={cn("relative", !yearly && "text-background")}>
                Månadsvis
              </span>
            </button>
            <button
              onClick={() => { setYearly(true); track("pricing_toggle", { period: "yearly" }); }}
              role="radio"
              aria-checked={yearly}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
            >
              {yearly && (
                <motion.span
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={cn("relative flex items-center gap-2", yearly && "text-background")}>
                Årsvis
                <span className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                  yearly ? "bg-background/20 text-background" : "bg-foreground/10 text-foreground"
                )}>
                  −2 mån
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ perspective: 800 }}
          className="mt-10 grid items-center gap-5 md:grid-cols-3"
        >
          {PRICING_TIERS.map((tier) => {
            const dark = tier.highlighted;
            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
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

                {/* Name + description */}
                <h3 className="font-heading text-lg font-semibold">
                  {tier.name}
                </h3>
                <p className={cn("mt-1 text-sm", dark ? "text-background/75" : "text-muted-foreground")}>
                  {tier.description}
                </p>

                {/* Price — hero number with animated swap */}
                <div className="mt-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={yearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline gap-1.5"
                    >
                      <span className="font-heading text-4xl font-bold tabular-nums tracking-tight md:text-5xl">
                        {yearly ? tier.yearlyPrice : tier.monthlyPrice}
                      </span>
                      <span className={cn("text-sm", dark ? "text-background/70" : "text-muted-foreground")}>
                        {yearly ? "kr/år" : "kr/mån"}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  <p className={cn("mt-2 text-xs", dark ? "text-background/85" : "text-muted-foreground")}>
                    {tier.setupFee} kr startavgift{!yearly && " · 12 mån"}
                  </p>
                </div>

                {/* Separator */}
                <hr className={cn("mt-6 border-dashed", dark ? "border-background/25" : "border-border")} />

                {/* Features — delivery time as first item */}
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

                {/* Best for */}
                <p className={cn("mt-5 text-xs", dark ? "text-background/85" : "text-muted-foreground")}>
                  Bäst för: {tier.bestFor}
                </p>

                {/* CTA */}
                <a
                  href="#kontakt"
                  onClick={() => track("cta_clicked", { location: "pricing", label: tier.name })}
                  className={cn(
                    "mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    dark
                      ? "bg-background text-foreground hover:bg-background/90 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-primary text-primary-foreground hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground"
        >
          <p>12 månaders avtal. Ingen uppsägningstid efter det — stanna för att du vill, inte för att du måste.</p>
          <p className="text-xs text-muted-foreground">Alla priser exkl. moms. Ångerrätt gäller ej för skräddarsydda digitala tjänster (distansavtalslagen 2 kap. 11§ p.3).</p>
        </motion.div>
      </div>
    </section>
  );
}
