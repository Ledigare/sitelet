import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marknadsföring — Sitelet",
  description:
    "Google Ads, Meta-annonser, SEO och mer. Vi driver fler kunder till din hemsida. Från 2 999 kr/mån.",
};

export default function MarknadsforingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
