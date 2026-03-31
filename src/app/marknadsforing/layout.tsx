import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marknadsföring — Sitelet",
  description:
    "Vi sköter dina annonser på Meta, Google och TikTok. Från 399 kr/mån, ingen bindningstid. Fler kunder, mindre krångel.",
};

export default function MarknadsforingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
