"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SiteletMark, SiteletLogo } from "@/components/logo";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-2 md:px-6 md:pt-4">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "max-w-3xl rounded-2xl border border-border bg-background/80 px-5 py-2.5 shadow-sm backdrop-blur-xl"
            : "max-w-[1200px] bg-transparent px-2 py-3"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <SiteletMark />
          <SiteletLogo size={scrolled ? "sm" : "md"} className="transition-all duration-500" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className={cn(
            "hidden md:inline-flex items-center rounded-lg bg-primary font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            scrolled ? "px-3.5 py-1.5 text-xs" : "px-4 py-2 text-sm"
          )}
        >
          Kontakt
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex md:hidden h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-[2px] w-5 bg-foreground transition-all duration-300 origin-center ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-foreground transition-all duration-300 origin-center ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  variants={menuItemVariants}
                  className="font-heading text-3xl font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                variants={menuItemVariants}
                className="mt-4 rounded-lg bg-primary px-8 py-3 text-lg font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Kontakt
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
