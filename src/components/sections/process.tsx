"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Process() {
  return (
    <section id="process" className="bg-background-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Så funkar det
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Fyra steg. Ingen krångel. Du vet vad som händer hela vägen.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.number} variants={stepVariants}>
              {/* Single step row — number and content on the same baseline */}
              <div className="flex items-center gap-6 md:gap-10">
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="shrink-0 select-none font-heading text-6xl font-bold text-foreground/[0.15] md:w-24 md:text-8xl md:text-right"
                >
                  {step.number}
                </span>

                {/* Dashed line — desktop only */}
                <div
                  aria-hidden="true"
                  className="hidden h-px w-12 border-t border-dashed border-border md:block"
                />

                {/* Content */}
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting line between steps */}
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="ml-[1.65rem] h-4 w-px bg-border md:ml-12"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Redo att börja? Hör av dig
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
