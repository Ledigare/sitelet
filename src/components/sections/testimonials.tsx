"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  stars: number;
  source: string;
  photo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Innan hade vi ingen hemsida — kunder hittade oss bara via Instagram. Nu bokar folk tider direkt på mastercuts.se, och vi syns på Google när man söker barbershop i Ronneby. Det märktes på en gång.",
    name: "Ayob Z.",
    role: "Ägare",
    company: "MasterCuts",
    stars: 5,
    source: "Google",
    photo: "/testimonials/ayob.jpg",
  },
  {
    quote:
      "Adam byggde hela sidan på kort tid och vi fick testa en demo innan vi sa ja. Vi har 4.9 i snitt på 34 recensioner nu och sidan visar dem direkt — det bygger förtroende innan folk ens kommer in i salongen.",
    name: "Ousama N.",
    role: "Ägare",
    company: "Mustasch Salon",
    stars: 5,
    source: "Google",
    photo: "/testimonials/osama.webp",
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
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
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
        <div>
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Vad kunderna säger
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 max-w-md text-muted-foreground"
          >
            Riktiga omdömen från riktiga kunder.
          </motion.p>
        </div>

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
              className="flex h-full flex-col rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0"
            >
              {/* Author header with large photo */}
              <div className="flex items-center gap-4 p-6 pb-0 md:p-8 md:pb-0">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-border md:h-20 md:w-20"
                />
                <div>
                  <cite className="not-italic text-base font-semibold text-foreground">
                    {t.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1" aria-label={`${t.stars} av 5 stjärnor på ${t.source}`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-foreground text-foreground" strokeWidth={0} />
                    ))}
                    <Image
                      src="/logos/google.webp"
                      alt="Google"
                      width={16}
                      height={16}
                      className="ml-1 h-4 w-4"
                    />
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="flex flex-1 flex-col p-6 pt-4 md:p-8 md:pt-5">
                <QuoteMark />
                <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
                  {t.quote}
                </p>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Vill du ha samma resultat? Hör av dig
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
