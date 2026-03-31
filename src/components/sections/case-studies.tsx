"use client";

import { useState, useRef } from "react";
import { track } from "@vercel/analytics";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserMockup } from "@/components/browser-mockup";
import { CASE_STUDIES } from "@/lib/constants";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const project = CASE_STUDIES[active];
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

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
            Hemsidor vi byggt — och resultaten.
          </p>
        </motion.div>

        <div className="mt-14">
          {/* Mobile: compact tabs */}
          <div className="grid grid-cols-4 gap-1.5 pb-4 md:hidden" role="tablist" aria-label="Välj projekt">
            {CASE_STUDIES.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                className={cn(
                  "rounded-lg px-2 py-2.5 text-xs font-medium leading-tight transition-colors duration-200 text-center",
                  i === active
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {p.mobileLabel}
              </button>
            ))}
          </div>

          {/* Desktop: two-column — selector left, mockup right */}
          <div className="grid gap-8 md:grid-cols-[280px_1fr] lg:gap-12">
            {/* Left — project list (desktop only) */}
            <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setHoverIndex(null)} className="relative hidden flex-col gap-1 md:flex" role="tablist" aria-label="Välj projekt">
              {CASE_STUDIES.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  role="tab"
                  aria-selected={i === active}
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
              {hoverIndex !== null && (
                <div
                  className="pointer-events-none absolute z-30 overflow-hidden rounded-xl shadow-2xl"
                  style={{
                    left: mousePos.x + 20,
                    top: mousePos.y - 80,
                    opacity: 1,
                    transition: "opacity 0.2s ease-out",
                  }}
                >
                  <div className="relative w-[240px] h-[150px] bg-secondary rounded-xl overflow-hidden">
                    {CASE_STUDIES.map((p, idx) => (
                      <Image
                        key={p.name}
                        src={p.screenshot}
                        alt={p.name}
                        width={240}
                        height={150}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                        style={{
                          opacity: hoverIndex === idx ? 1 : 0,
                          transform: hoverIndex === idx ? "scale(1)" : "scale(1.1)",
                          filter: hoverIndex === idx ? "none" : "blur(8px)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — mockup + details */}
            <div role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Mobile project header — context before mockup */}
                  <div className="mb-3 md:hidden">
                    <h3 className="font-heading text-lg font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.type}
                    </p>
                  </div>

                  <BrowserMockup
                    url={project.url.replace("https://", "")}
                    screenshot={project.screenshot}
                    screenshotMobile={"screenshotMobile" in project ? project.screenshotMobile : undefined}
                    screenshotTablet={"screenshotTablet" in project ? project.screenshotTablet : undefined}
                    alt={`${project.name} — ${project.type}`}
                    priority={active <= 1}
                  />

                  {/* Details */}
                  <div className="mt-5 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                    <div className="flex-1">
                      {/* Metrics first — lead with results */}
                      {"metrics" in project && project.metrics && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.metrics.map((m, mi) =>
                            Array.isArray(m) ? (
                              <span
                                key={mi}
                                className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-semibold text-background"
                              >
                                {m[0]}
                                <ArrowRight className="h-3 w-3" aria-hidden="true" />
                                {m[1]}
                              </span>
                            ) : (
                              <span
                                key={mi}
                                className="rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-semibold text-background"
                              >
                                {m}
                              </span>
                            )
                          )}
                        </div>
                      )}

                      {/* Type + tech tags — tech hidden on mobile */}
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
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
                              className="hidden rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] text-muted-foreground md:inline-block"
                            >
                              {t}
                            </span>
                          ))}
                      </div>

                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      {project.before && (
                        <p className="mt-1.5 inline-flex items-center gap-1 text-sm italic text-muted-foreground/80">
                          {Array.isArray(project.before) ? (
                            <>
                              {project.before[0]}
                              <ArrowRight className="h-3 w-3 shrink-0 not-italic" aria-hidden="true" />
                              {project.before[1]}
                            </>
                          ) : (
                            project.before
                          )}
                        </p>
                      )}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("project_viewed", { project: project.name })}
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
