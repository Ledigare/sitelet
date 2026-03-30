export const NAV_LINKS = [
  { label: "Process", href: "#process" },
  { label: "Projekt", href: "#projekt" },
  { label: "Priser", href: "#priser" },
  { label: "Om", href: "#om" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const STATS = [
  { value: "50+", label: "byggda projekt" },
  { value: "6+", label: "år som utvecklare" },
  { value: "Blekinge", label: "Sverige" },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Kontakt",
    description:
      "Berätta vad du behöver — vi svarar inom ett par timmar, inte dagar.",
  },
  {
    number: "02",
    title: "Demo",
    description:
      "Du får en riktig demo av din sida — gratis, innan du betalar ett öre.",
  },
  {
    number: "03",
    title: "Feedback",
    description:
      "Vi justerar tills du älskar den. Inte nöjd, inte klar.",
  },
  {
    number: "04",
    title: "Lansering",
    description:
      "Din sida går live. Du äger koden, domänen, allt.",
  },
] as const;

export const CASE_STUDIES = [
  {
    name: "RBV Bilvård Center",
    mobileLabel: "Bilvård",
    url: "https://rbv-bilvard.vercel.app/",
    type: "Bilvård & Detailing",
    tech: ["Next.js", "Schema.org", "SEO"],
    description:
      "Ronnebys största bilvårdscenter — 9 tjänster (199–2 499 kr), däckhotell, hämta/lämna-service, Swish/kort/faktura. Karlshamnsvägen 1, Ronneby.",
    before: ["Hade ingen hemsida", "nu synlig på Google med komplett prislista och kontaktinfo."],
    metrics: [["0", "synlig på Google"], "9 tjänster online"],
    screenshot: "/projects/rbv-bilvard-desktop-hero.webp",
    screenshotMobile: "/projects/rbv-bilvard-mobile-hero.webp",
    screenshotTablet: "/projects/rbv-bilvard-tablet-hero.webp",
  },
  {
    name: "MasterCuts",
    mobileLabel: "Frisör",
    url: "https://mastercuts.se/",
    type: "Barbershop",
    tech: ["PHP", "Bokning", "Galleri"],
    description:
      "Hemsida med onlinebokning, prislista (fade 250 kr, skägg 150 kr, kombo 350 kr), galleri och Google Maps. Blasius Königsgatan 24, Ronneby.",
    before: ["Hade ingen hemsida", "kunder bokar nu direkt online via sidan."],
    metrics: ["Onlinebokning live", "Synlig på Google"],
    screenshot: "/projects/mastercuts-desktop-hero.webp",
    screenshotMobile: "/projects/mastercuts-mobile-hero.webp",
    screenshotTablet: "/projects/mastercuts-tablet-hero.webp",
  },
  {
    name: "Mustasch Salon",
    mobileLabel: "Salong",
    url: "https://mustasch.salon/",
    type: "Barbershop & Salong",
    tech: ["HTML/CSS", "Omdömen", "Schema.org"],
    description:
      "Komplett sajt med tjänster, 34 kundrecensioner (4.9/5 snitt), produktförsäljning och grundarens story. Blasius Königsgatan 30G, Ronneby.",
    before: ["Enkel Facebook-sida", "professionell sajt med 4.9 stjärnor på Google."],
    metrics: ["4.9/5 på Google", "34 recensioner"],
    screenshot: "/projects/mustasch-desktop-hero.webp",
    screenshotMobile: "/projects/mustasch-mobile-hero.webp",
    screenshotTablet: "/projects/mustasch-tablet-hero.webp",
  },
  {
    name: "Ledigare",
    mobileLabel: "SaaS",
    url: "https://www.ledigare.se/",
    type: "SaaS-plattform",
    tech: ["Next.js", "Supabase", "AI"],
    description:
      "AI-driven plattform som hjälper svenska föräldrar spara i snitt 47 200 kr på föräldrapenningen. Kalkylator, optimeringsplan och SGI-bevakning.",
    before: null,
    metrics: ["47 200 kr besparing i snitt", "AI-driven"],
    screenshot: "/projects/ledigare-desktop-hero.webp",
    screenshotMobile: "/projects/ledigare-mobile-hero.webp",
    screenshotTablet: "/projects/ledigare-tablet-hero.webp",
    tag: "Intern produkt",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Start",
    monthlyPrice: "399",
    yearlyPrice: "3 990",
    setupFee: "999",
    description: "En snygg one-pager som gör jobbet.",
    delivery: "Klar inom 3–5 dagar",
    features: [
      "Responsiv design",
      "Kontaktinfo & Google Maps",
      "SEO-grund",
    ],
    bestFor: "Frisörer, caféer, småföretag",
    highlighted: false,
  },
  {
    name: "Företag",
    monthlyPrice: "699",
    yearlyPrice: "6 990",
    setupFee: "1 499",
    description: "Flersidigt med allt du behöver.",
    delivery: "Klar inom 1–2 veckor",
    features: [
      "Allt i Start",
      "Bokningssystem",
      "Galleri & kundrecensioner",
      "Anpassad design",
    ],
    bestFor: "Verkstäder, salonger, restauranger",
    highlighted: true,
  },
  {
    name: "Produkt",
    monthlyPrice: "1 299",
    yearlyPrice: "12 990",
    setupFee: "1 999",
    description: "Webbappar och plattformar.",
    delivery: "Klar inom 2–3 veckor",
    features: [
      "Allt i Företag",
      "Admin-panel & dashboard",
      "Databas & användarhantering",
      "API-integrationer",
      "Löpande support",
    ],
    bestFor: "SaaS, startups, komplexa system",
    highlighted: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Vad händer om jag inte är nöjd med resultatet?",
    answer:
      "Du ser en gratis demo innan du betalar. Gillar du den inte, kostar det dig ingenting. Ingen risk.",
  },
  {
    question: "Hur lång tid tar det att bygga en hemsida?",
    answer:
      "En enkel one-pager kan vara klar på 3–5 dagar. Större projekt med bokning och specialfunktioner tar 1–3 veckor. Du får en tidsplan innan vi börjar.",
  },
  {
    question: "Äger jag min hemsida?",
    answer:
      "Ja. Koden, domänen, innehållet — allt är ditt. Vi låser aldrig in dig. Vill du byta utvecklare imorgon? Inga problem.",
  },
  {
    question: "Kan jag avsluta när jag vill?",
    answer:
      "Avtalet är 12 månader. Efter det kan du avsluta när som helst med en månads varsel. Du behåller allt vi byggt.",
  },
  {
    question: "Jag har redan en hemsida — kan du göra om den?",
    answer:
      "Absolut. Börja med en gratis webbanalys så kollar jag vad som funkar och vad som kan bli bättre. Ibland räcker det med småfixar, ibland är det bättre att börja om.",
  },
  {
    question: "Vad händer efter lansering?",
    answer:
      "Vi försvinner inte. Hosting och support ingår i månadsavgiften. Behöver du ändringar eller nya funktioner fixar vi det löpande.",
  },
  {
    question: "Varför ska jag välja dig istället för en stor byrå?",
    answer:
      "Du pratar direkt med den som bygger din sida — inga mellanhänder, inga onödiga möten. Snabbare, billigare och enklare. En byrå tar 30 000–80 000 kr för samma sak.",
  },
] as const;

export const ABOUT_BIO = `Jag har byggt och sålt digitala produkter sedan jag var tonåring. Hemsidor, webbappar, SaaS-plattformar, bokningssystem — om det finns i en webbläsare har jag troligen byggt det.

Jag bor i Blekinge och jobbar direkt med lokala företag som vill synas online utan att betala byråpriser. Snabbt, snyggt, och utan krångel.

Inga onödiga möten, inga krångliga processer. Du berättar vad du behöver, jag bygger det.

När jag inte kodar skruvar jag på min bil eller testar nya recept i köket.`;
