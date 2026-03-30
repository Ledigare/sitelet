"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Innan hade vi ingen hemsida — kunder hittade oss bara via Instagram. Nu bokar folk tider direkt på mastercuts.se, och vi syns på Google när man söker barbershop i Ronneby. Det märktes på en gång.",
    name: "Ayob Z.",
    role: "Ägare",
    company: "MasterCuts",
  },
  {
    quote:
      "Adam byggde hela sidan på kort tid och vi fick testa en demo innan vi sa ja. Vi har 4.9 i snitt på 34 recensioner nu och sidan visar dem direkt — det bygger förtroende innan folk ens kommer in i salongen.",
    name: "Ousama N.",
    role: "Ägare",
    company: "Mustasch Salon",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function QuoteMark() {
  return (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      aria-hidden="true"
      className="text-foreground/10"
    >
      <path
        d="M14.995 36c-2.5 0-4.767-.983-6.8-2.95C6.162 31.083 5.145 28.833 5.145 26.3c0-3.5 1.067-6.817 3.2-9.95 2.134-3.133 4.884-6.25 8.25-9.35l4.9 4.25c-2.133 1.883-3.817 3.633-5.05 5.25-1.233 1.617-1.85 3.483-1.85 5.6h5.4V36h-5Zm23 0c-2.5 0-4.767-.983-6.8-2.95-2.033-1.967-3.05-4.217-3.05-6.75 0-3.5 1.067-6.817 3.2-9.95 2.134-3.133 4.884-6.25 8.25-9.35l4.9 4.25c-2.133 1.883-3.817 3.633-5.05 5.25-1.233 1.617-1.85 3.483-1.85 5.6h5.4V36h-5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="bg-background-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vad kunderna säger
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Riktiga omdömen från riktiga kunder.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={cardVariants}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <QuoteMark />
                <p className="mt-5 text-lg leading-relaxed text-foreground">
                  {t.quote}
                </p>
              </div>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <cite className="not-italic text-sm font-medium text-foreground">
                    {t.name}
                  </cite>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
