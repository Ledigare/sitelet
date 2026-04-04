import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyCta } from "@/components/sticky-cta";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sitelet.se"),
  title: "Sitelet — Hemsidor för företag i Blekinge",
  description:
    "Vi bygger hemsidor för svenska företag. 50+ projekt, gratis demo innan du betalar. Från 399 kr/mån med hosting och support. Kontakta oss för en kostnadsfri webbanalys.",
  alternates: {
    canonical: "https://www.sitelet.se",
    languages: { sv: "https://www.sitelet.se" },
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
  },
  openGraph: {
    title: "Sitelet — Hemsidor för företag i Blekinge",
    description:
      "Vi bygger hemsidor för svenska företag. 50+ projekt, gratis demo innan du betalar. Från 399 kr/mån med hosting och support. Kontakta oss för en kostnadsfri webbanalys.",
    locale: "sv_SE",
    type: "website",
    siteName: "Sitelet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitelet — Hemsidor för företag i Blekinge",
    description:
      "Vi bygger hemsidor för svenska företag. 50+ projekt, gratis demo innan du betalar. Från 399 kr/mån med hosting och support. Kontakta oss för en kostnadsfri webbanalys.",
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
  serviceType: ["Web Development", "Web Design", "Website Creation", "Digital Marketing", "Social Media Advertising"],
  priceRange: "$$",
  telephone: "+46722893346",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sitelet",
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ayob Z."
      },
      "reviewBody": "Innan hade vi ingen hemsida — kunder hittade oss bara via Instagram. Nu bokar folk tider direkt på mastercuts.se, och vi syns på Google när man söker barbershop i Ronneby."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ousama N."
      },
      "reviewBody": "Adam byggde hela sidan på kort tid och vi fick testa en demo innan vi sa ja. Vi har 4.9 i snitt på 34 recensioner nu och sidan visar dem direkt."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nabhan M."
      },
      "reviewBody": "Vi behövde en sida där kunder kan boka bilvård och däckhotell direkt — Adam fixade allt. Sidan var klar snabbt, den funkar perfekt på mobilen, och nu slipper vi svara i telefon hela tiden."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: "Sitelet",
    url: "https://www.sitelet.se",
  },
  serviceType: "Web Development",
  areaServed: { "@type": "Country", name: "Sweden" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hemsidpaket",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Start",
        description: "En snygg one-pager som gör jobbet.",
        price: "399",
        priceCurrency: "SEK",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "399", priceCurrency: "SEK", unitText: "MONTH" },
      },
      {
        "@type": "Offer",
        name: "Företag",
        description: "Flersidigt med allt du behöver.",
        price: "699",
        priceCurrency: "SEK",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "699", priceCurrency: "SEK", unitText: "MONTH" },
      },
      {
        "@type": "Offer",
        name: "Produkt",
        description: "Webbappar och plattformar.",
        price: "1299",
        priceCurrency: "SEK",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "1299", priceCurrency: "SEK", unitText: "MONTH" },
      },
    ],
  },
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
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Hoppa till innehåll
          </a>
          {children}
          <StickyCta />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
