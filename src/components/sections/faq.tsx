"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="bg-background-secondary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16 lg:gap-24">
          {/* Left — heading + CTA (sticky on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:sticky md:top-28 md:self-start"
          >
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Vanliga frågor
            </h2>
            <p className="mt-3 max-w-sm text-muted-foreground">
              Det du undrar över — kort och rakt på sak.
            </p>

            <div className="mt-8 hidden md:block">
              <p className="text-sm text-muted-foreground">
                Hittar du inte svaret?
              </p>
              <a
                href="#kontakt"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Hör av dig direkt
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Accordion className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  className="border-b border-border py-1"
                >
                  <AccordionTrigger className="py-5 text-base font-medium hover:no-underline rounded-lg px-3 -mx-3 transition-colors duration-200 hover:bg-secondary/50">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-4 max-w-lg leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Mobile CTA (below accordion) */}
          <div className="md:hidden">
            <p className="text-sm text-muted-foreground">
              Hittar du inte svaret?{" "}
              <a
                href="#kontakt"
                className="font-medium text-foreground underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Hör av dig direkt
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
