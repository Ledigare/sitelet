"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { ArrowRight, ArrowDown } from "lucide-react";

const HEADLINE_L1 = ["Hemsidan", "du", "borde"];
const HEADLINE_L2 = ["haft", "igår."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

function WordReveal({ words, className }: { words: string[]; className?: string }) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word === "igår." ? (
              <span className="decoration-foreground/40 underline decoration-[0.07em] underline-offset-[0.12em]">
                {word}
              </span>
            ) : (
              word
            )}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block w-[0.3em]" />}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center text-center">
        {/* Headline with word-by-word reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-heading font-bold leading-[1.05] tracking-[-0.03em] text-[clamp(2.8rem,8vw,7.5rem)]"
        >
          <WordReveal words={HEADLINE_L1} />
          <br />
          <WordReveal words={HEADLINE_L2} />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          custom={0.55}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-md text-lg text-muted-foreground md:mt-8 md:text-xl"
        >
          Hemsidor som faktiskt funkar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Få din gratis webbanalys
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#projekt"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Se våra projekt
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Stats bar — anchored at bottom */}
      <motion.div
        variants={fadeUp}
        custom={0.9}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[1200px] border-t border-border pt-6"
      >
        <div className="grid grid-cols-3 text-center">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-0.5 ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <span className="font-heading text-lg font-semibold tabular-nums md:text-xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
