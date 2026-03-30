import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sitelet.se"),
  title: "Sitelet — Hemsidor som faktiskt funkar",
  description:
    "Vi bygger hemsidor för svenska företag. Snabbt, snyggt, och utan krångel. Baserade i Blekinge.",
  alternates: {
    canonical: "https://www.sitelet.se",
    languages: { sv: "https://www.sitelet.se" },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sitelet — Hemsidor som faktiskt funkar",
    description:
      "Vi bygger hemsidor för svenska företag. Snabbt, snyggt, och utan krångel. Baserade i Blekinge.",
    locale: "sv_SE",
    type: "website",
    siteName: "Sitelet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitelet — Hemsidor som faktiskt funkar",
    description:
      "Vi bygger hemsidor för svenska företag. Snabbt, snyggt, och utan krångel. Baserade i Blekinge.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sitelet",
  description:
    "Vi bygger hemsidor för svenska företag. Snabbt, snyggt, och utan krångel.",
  url: "https://www.sitelet.se",
  email: "adam@sitelet.se",
  areaServed: {
    "@type": "Country",
    name: "Sweden",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Västra Torggatan 7 D",
    postalCode: "372 30",
    addressLocality: "Ronneby",
    addressRegion: "Blekinge",
    addressCountry: "SE",
  },
  founder: {
    "@type": "Person",
    name: "Adam Zrek",
  },
  serviceType: ["Web Development", "Web Design", "Website Creation"],
  priceRange: "$$",
  telephone: "+46722893346",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad händer om jag inte är nöjd med resultatet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du ser en gratis demo innan du betalar. Gillar du den inte, kostar det dig ingenting. Ingen risk.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar det att bygga en hemsida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En enkel one-pager kan vara klar på 3–5 dagar. Större projekt med bokning och specialfunktioner tar 1–3 veckor. Du får en tidsplan innan vi börjar.",
      },
    },
    {
      "@type": "Question",
      name: "Äger jag min hemsida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Koden, domänen, innehållet — allt är ditt. Vi låser aldrig in dig. Vill du byta utvecklare imorgon? Inga problem.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag avsluta när jag vill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avtalet är 12 månader. Efter det kan du avsluta när som helst med en månads varsel. Du behåller allt vi byggt.",
      },
    },
    {
      "@type": "Question",
      name: "Jag har redan en hemsida — kan du göra om den?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut. Börja med en gratis webbanalys så kollar jag vad som funkar och vad som kan bli bättre. Ibland räcker det med småfixar, ibland är det bättre att börja om.",
      },
    },
    {
      "@type": "Question",
      name: "Vad händer efter lansering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vi försvinner inte. Hosting och support ingår i månadsavgiften. Behöver du ändringar eller nya funktioner fixar vi det löpande.",
      },
    },
    {
      "@type": "Question",
      name: "Varför ska jag välja dig istället för en stor byrå?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du pratar direkt med den som bygger din sida — inga mellanhänder, inga onödiga möten. Snabbare, billigare och enklare. En byrå tar 30 000–80 000 kr för samma sak.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${syne.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Hoppa till innehåll
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
