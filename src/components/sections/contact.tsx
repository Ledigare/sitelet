"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Check, ArrowRight } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

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
          website: data.get("website") || "",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-background-secondary px-6 py-20 md:py-28">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {status === "success" ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl bg-background p-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground">
                  <Check className="h-6 w-6 text-background" strokeWidth={2} />
                </div>
                <p className="mt-6 font-heading text-2xl font-semibold">
                  Tack!
                </p>
                <p className="mt-2 text-muted-foreground">
                  Vi hör av oss inom kort.
                </p>
              </div>
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
                  className="mt-3 h-12 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-60"
                >
                  {status === "submitting" ? "Skickar..." : "Skicka"}
                  {status === "idle" && (
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  )}
                </Button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-600">
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
