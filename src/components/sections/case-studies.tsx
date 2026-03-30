"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserMockup } from "@/components/browser-mockup";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const project = CASE_STUDIES[active];

  return (
    <section id="projekt" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Projekt
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Verkliga sajter för verkliga företag.
          </p>
        </motion.div>

        <div className="mt-14">
          {/* Mobile: compact tabs */}
          <div className="grid grid-cols-4 gap-1.5 pb-4 md:hidden">
            {CASE_STUDIES.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-lg px-2 py-2.5 text-xs font-medium leading-tight transition-colors duration-200 text-center",
                  i === active
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {p.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Desktop: two-column — selector left, mockup right */}
          <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
            {/* Left — project list (desktop only) */}
            <div className="hidden flex-col gap-1 md:flex">
              {CASE_STUDIES.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex flex-col items-start rounded-xl px-4 py-4 text-left transition-all duration-200",
                    i === active
                      ? "bg-secondary"
                      : "hover:bg-secondary/50"
                  )}
                >
                  <span
                    className={cn(
                      "font-heading text-base font-semibold transition-colors",
                      i === active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {p.name}
                  </span>
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    {p.type}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — mockup + details */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer rounded-xl transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <BrowserMockup
                      url={project.url.replace("https://", "")}
                      screenshot={project.screenshot}
                      alt={`${project.name} — ${project.type}`}
                      priority={active <= 1}
                    />
                  </a>

                  {/* Details */}
                  <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {project.type}
                        </span>
                        {"tag" in project && project.tag && (
                          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                            {project.tag}
                          </span>
                        )}
                        {"tech" in project &&
                          project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                      </div>
                      <h3 className="mt-2 font-heading text-xl font-semibold md:hidden">
                        {project.name}
                      </h3>
                      <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      {project.before && (
                        <p className="mt-1.5 text-sm italic text-muted-foreground/60">
                          {project.before}
                        </p>
                      )}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit shrink-0 items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-secondary md:mt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Se live
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      <span className="sr-only">(öppnas i nytt fönster)</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
