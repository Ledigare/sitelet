"use client";

import { motion } from "framer-motion";
import { ABOUT_BIO } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import {
  CodeTerminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/code-terminal";

const ABOUT_STATS = [
  { value: "6+", label: "år som utvecklare" },
  { value: "50+", label: "byggda projekt" },
  { value: "100%", label: "du äger allt" },
] as const;

export function About() {
  return (
    <section id="om" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left — heading + bio + name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Om Sitelet
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed">
              {ABOUT_BIO.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-heading text-lg font-semibold">Adam Zrek</p>
              <p className="text-sm text-muted-foreground">
                Webbutvecklare, Ronneby
              </p>
            </div>

            <a
              href="#kontakt"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Vill du vara nästa?
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Right — terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex items-center"
          >
            <CodeTerminal className="w-full">
              <TypingAnimation className="text-white/40">
                {"> build --client ditt-företag"}
              </TypingAnimation>

              <AnimatedSpan className="text-white/25">
                &nbsp;
              </AnimatedSpan>

              <AnimatedSpan className="text-white/50">
                ✓ Design klar
              </AnimatedSpan>

              <AnimatedSpan className="text-white/50">
                ✓ Responsiv på alla enheter
              </AnimatedSpan>

              <AnimatedSpan className="text-white/50">
                ✓ SEO optimerad
              </AnimatedSpan>

              <AnimatedSpan className="text-white/50">
                ✓ Kopplad till domän
              </AnimatedSpan>

              <AnimatedSpan className="text-white/25">
                &nbsp;
              </AnimatedSpan>

              <TypingAnimation className="text-white">
                Din sida är live. Klar på 5 dagar.
              </TypingAnimation>
            </CodeTerminal>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-16 grid grid-cols-3 border-t border-border pt-8"
        >
          {ABOUT_STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <span className="select-none font-heading text-3xl font-bold tabular-nums md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
