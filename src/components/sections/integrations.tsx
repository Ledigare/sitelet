"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  Sparkles,
  MessageSquare,
  Mail,
  Star,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationItem {
  name: string;
  label: string;
  icon?: React.ReactNode;
  logo?: string;
  badge?: string;
}

const PRIMARY: IntegrationItem[] = [
  { name: "swish", label: "Swish-betalning", logo: "/logos/swish.svg" },
  { name: "stripe", label: "Kortbetalning", logo: "/logos/stripe.svg" },
  { name: "klarna", label: "Köp nu, betala sen", logo: "/logos/klarna.svg" },
  {
    name: "booking",
    label: "Eget bokningssystem",
    icon: <Calendar className="h-7 w-7" strokeWidth={1.5} />,
  },
  {
    name: "ai",
    label: "AI-kundtjänst 24/7",
    icon: <Sparkles className="h-7 w-7" strokeWidth={1.5} />,
    badge: "Nyhet",
  },
  { name: "bankid", label: "BankID-verifiering", logo: "/logos/bankid.svg" },
];

const SECONDARY: IntegrationItem[] = [
  {
    name: "sms",
    label: "SMS-påminnelser",
    icon: <MessageSquare className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    name: "email",
    label: "E-postautomation",
    icon: <Mail className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    name: "reviews",
    label: "Google Reviews",
    icon: <Star className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    name: "ads",
    label: "Annons-spårning",
    icon: <BarChart3 className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
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
          isLg ? "h-11 w-11" : "h-8 w-8"
        )}
      >
        {item.logo ? (
          <Image
            src={item.logo}
            alt={item.label}
            width={isLg ? 44 : 32}
            height={isLg ? 44 : 32}
            className="h-full w-full object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          />
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
            : "text-[11px] text-muted-foreground/70 group-hover:text-muted-foreground"
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

        {/* Primary row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-6"
        >
          {PRIMARY.map((item) => (
            <IntegrationCard key={item.name} item={item} size="lg" />
          ))}
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Behöver du något annat? Vi integrerar de flesta API:er och tjänster.
        </motion.p>
      </div>
    </section>
  );
}
