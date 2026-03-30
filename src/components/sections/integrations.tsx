"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  MessageSquare,
  Mail,
  Star,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationItem {
  name: string;
  label: string;
  icon?: React.ReactNode;
  logo?: string;
  logoDark?: string;
  badge?: string;
}

const PRIMARY: IntegrationItem[] = [
  { name: "swish", label: "Betalning", logo: "/logos/swish.svg", logoDark: "/logos/swish-white.svg" },
  { name: "stripe", label: "Kortbetalning", logo: "/logos/stripe.svg", logoDark: "/logos/stripe-white.svg" },
  { name: "klarna", label: "Delbetalning", logo: "/logos/klarna.png", logoDark: "/logos/klarna-white.png" },
  { name: "bankid", label: "Verifiering", logo: "/logos/bankid.svg", logoDark: "/logos/bankid-white.svg" },
  { name: "fortnox", label: "Bokföring", logo: "/logos/fortnox.svg", logoDark: "/logos/fortnox-white.svg" },
  { name: "bokadirekt", label: "Onlinebokning", logo: "/logos/bokadirekt.svg" },
  { name: "google", label: "Sök & Kartor", logo: "/logos/google-maps.svg" },
];

const SECONDARY: IntegrationItem[] = [
  {
    name: "booking",
    label: "Bokningssystem",
    icon: <Calendar className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    name: "sms",
    label: "SMS-påminnelser",
    icon: <MessageSquare className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    name: "email",
    label: "E-postautomation",
    icon: <Mail className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    name: "reviews",
    label: "Google Reviews",
    icon: <Star className="h-6 w-6" strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

function IntegrationCard({ item, size }: { item: IntegrationItem; size: "lg" | "sm" }) {
  const isLg = size === "lg";

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col items-center gap-3 py-4"
    >
      {/* Badge */}
      {item.badge && (
        <span className="absolute -top-1 right-0 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-semibold text-background md:right-2">
          {item.badge}
        </span>
      )}

      {/* Icon / Logo */}
      <div
        className={cn(
          "flex items-center justify-center transition-all duration-300",
          isLg ? "h-14 w-14" : "h-10 w-10"
        )}
      >
        {item.logo ? (
          <>
            <Image
              src={item.logo}
              alt={item.label}
              width={isLg ? 56 : 40}
              height={isLg ? 56 : 40}
              className={cn(
                "h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100",
                item.logoDark ? "dark:hidden" : ""
              )}
            />
            {item.logoDark && (
              <Image
                src={item.logoDark}
                alt={item.label}
                width={isLg ? 56 : 40}
                height={isLg ? 56 : 40}
                className="hidden h-full w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 dark:block"
              />
            )}
          </>
        ) : (
          <div className="text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground">
            {item.icon}
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className={cn(
          "text-center transition-colors duration-300",
          isLg
            ? "text-xs font-medium text-muted-foreground group-hover:text-foreground"
            : "text-[11px] text-muted-foreground group-hover:text-foreground"
        )}
      >
        {item.label}
      </span>
    </motion.div>
  );
}

export function Integrations() {
  return (
    <section className="bg-background-secondary px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vi kopplar ihop det som behövs
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Betalningar, bokning, AI-kundtjänst — vi bygger in det dina kunder
            redan förväntar sig.
          </p>
        </motion.div>

        {/* Primary row — infinite marquee */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <div
          className="mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex w-max items-center gap-20 hover:[animation-play-state:paused]"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {[...PRIMARY, ...PRIMARY].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5 shrink-0">
                {item.logo ? (
                  <>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={120}
                      height={48}
                      className={cn(
                        "h-8 max-w-[100px] w-auto object-contain",
                        item.logoDark ? "dark:hidden" : ""
                      )}
                    />
                    {item.logoDark && (
                      <Image
                        src={item.logoDark}
                        alt={item.name}
                        width={120}
                        height={48}
                        className="hidden h-8 max-w-[100px] w-auto object-contain dark:block"
                      />
                    )}
                  </>
                ) : (
                  <span className="font-heading text-xl font-bold text-foreground/70 md:text-2xl">
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
                <span className="text-[11px] text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="my-8 border-dashed border-border" />

        {/* Secondary row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4"

        >
          {SECONDARY.map((item) => (
            <IntegrationCard key={item.name} item={item} size="sm" />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Behöver du något annat? Vi integrerar de flesta API:er och tjänster.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Fråga om din integration
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
