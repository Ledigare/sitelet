"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Check, ArrowRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactProps {
  defaultService?: "hemsida" | "marknadsforing" | "bada";
}

export function Contact({ defaultService = "hemsida" }: ContactProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [service, setService] = useState(defaultService);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          contact: data.get("contact"),
          message: data.get("message"),
          service: data.get("service") || "hemsida",
          website: data.get("website") || "",
          url_confirm: data.get("url_confirm") || "",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        track("form_submitted", { service: data.get("service") as string || "hemsida" });
      } else {
        setStatus("error");
        track("form_error");
      }
    } catch {
      setStatus("error");
      track("form_error");
    }
  }

  return (
    <section id="kontakt" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left — heading + info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-between gap-10 lg:sticky lg:top-28 lg:self-start"
          >
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Berätta om
                <br />
                ditt företag.
              </h2>
              <p className="mt-4 max-w-sm text-muted-foreground">
                Gratis webbanalys — vi kollar din nuvarande sida och berättar
                vad som kan bli bättre. Helt utan kostnad. Vi svarar inom 24 timmar.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground">
                  <Mail className="h-4 w-4 text-background" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">E-post</p>
                  <a
                    href="mailto:adam@sitelet.se"
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    adam@sitelet.se
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground">
                  <Phone className="h-4 w-4 text-background" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telefon</p>
                  <a
                    href="tel:+46722893346"
                    className="text-sm font-medium text-foreground underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    072-289 33 46
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground">
                  <MapPin className="h-4 w-4 text-background" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Plats</p>
                  <p className="text-sm font-medium">Ronneby, Sverige</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl bg-background p-12"
              >
                {/* Animated checkmark circle */}
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 100 100" className="rotate-[-90deg]">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="var(--success)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="var(--success)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    />
                  </svg>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9, type: "spring", stiffness: 200 }}
                  >
                    <Check className="h-8 w-8 text-white" strokeWidth={3} />
                  </motion.div>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="mt-6 font-heading text-2xl font-semibold"
                >
                  Tack!
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  className="mt-2 text-muted-foreground"
                >
                  Vi hör av oss inom 24 timmar.
                </motion.p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl bg-background p-7 md:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Ditt namn"
                      className="h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">Företag</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      placeholder="Ditt företag"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact">Telefon eller e-post</Label>
                  <Input
                    id="contact"
                    name="contact"
                    required
                    placeholder="Så vi kan nå dig"
                    className="h-12"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Intresserad av</Label>
                  <input type="hidden" name="service" value={service} />
                  <div className="flex gap-2">
                    {[
                      { value: "hemsida", label: "Hemsida" },
                      { value: "marknadsforing", label: "Marknadsföring" },
                      { value: "bada", label: "Båda" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setService(opt.value as typeof service)}
                        className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          service === opt.value
                            ? "bg-foreground text-background"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Beskriv kort vad du behöver</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Ny hemsida, uppdatering av befintlig sida, webbapp..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="website">
                    Har du en hemsida idag?{" "}
                    <span className="text-muted-foreground">(valfritt)</span>
                  </Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    autoComplete="url"
                    placeholder="https://din-sida.se"
                    className="h-12"
                  />
                </div>

                {/* Honeypot — hidden from real users, bots fill it */}
                <input
                  type="text"
                  name="url_confirm"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
                />

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Genom att skicka godkänner du vår{" "}
                  <Link
                    href="/integritetspolicy"
                    className="text-foreground underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    integritetspolicy
                  </Link>
                  .
                </p>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-3 h-12 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Skickar...
                    </>
                  ) : (
                    <>
                      Skicka
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {status === "error" && (
                  <p role="alert" className="text-center text-sm text-destructive">
                    Något gick fel. Maila oss direkt på adam@sitelet.se.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
