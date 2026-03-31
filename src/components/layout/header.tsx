"use client";

import { useState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen || !menuRef.current) return;
    const focusableEls = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button'
    );
    if (focusableEls.length === 0) return;

    const first = focusableEls[0];
    const last = focusableEls[focusableEls.length - 1];

    // Focus first element when menu opens
    first.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-2 md:px-6 md:pt-4">
      <nav
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "max-w-4xl rounded-2xl border border-border bg-background/80 px-5 py-2.5 shadow-sm backdrop-blur-xl"
            : "max-w-[1200px] rounded-2xl border border-transparent bg-transparent px-2 py-3"
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
          {NAV_LINKS.map((link) => {
            const isRoute = !link.href.includes("#");
            const Tag = isRoute ? Link : "a";
            return (
              <li key={link.href}>
                <Tag
                  href={link.href}
                  aria-current={activeSection === link.href ? "true" : undefined}
                  className={cn(
                    "text-[13px] transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    activeSection === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Tag>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {/* Theme toggle */}
          <button
            onClick={() => { track("theme_toggled", { to: resolvedTheme === "dark" ? "light" : "dark" }); setTheme(resolvedTheme === "dark" ? "light" : "dark"); }}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={mounted && resolvedTheme === "dark" ? "Byt till ljust läge" : "Byt till mörkt läge"}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="/#kontakt"
            onClick={() => track("cta_clicked", { location: "header", label: "webbanalys" })}
            className={cn(
              "inline-flex items-center rounded-lg bg-primary font-medium text-primary-foreground transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              scrolled ? "px-3.5 py-1.5 text-xs" : "px-4 py-2 text-sm"
            )}
          >
            Gratis webbanalys
          </a>
        </div>

        {/* Mobile hamburger — open only */}
        {!mobileOpen && (
          <button
            onClick={() => setMobileOpen(true)}
            className="relative flex md:hidden h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Öppna meny"
            aria-expanded={false}
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-[2px] w-5 bg-foreground" />
              <span className="block h-[2px] w-5 bg-foreground" />
              <span className="block h-[2px] w-5 bg-foreground" />
            </div>
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            {/* Close button inside overlay */}
            <button
              onClick={() => setMobileOpen(false)}
              className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Stäng meny"
            >
              <X className="h-7 w-7 text-foreground" strokeWidth={2} />
            </button>

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
              {mounted && (
                <motion.button
                  variants={menuItemVariants}
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="mt-6 flex items-center gap-2 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={resolvedTheme === "dark" ? "Byt till ljust läge" : "Byt till mörkt läge"}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="text-sm">{resolvedTheme === "dark" ? "Ljust läge" : "Mörkt läge"}</span>
                </motion.button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
