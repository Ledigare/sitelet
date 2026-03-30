export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  related: string[]; // slugs of related posts
  faq: { question: string; answer: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "vad-kostar-en-hemsida",
    title: "Vad kostar en hemsida 2026?",
    description: "En ärlig genomgång av vad du kan förvänta dig betala — från budgetalternativ till skräddarsydda lösningar.",
    date: "2026-03-31",
    related: ["wordpress-vs-skraddarsydd", "hemsida-frisor"],
    faq: [
      { question: "Vad kostar en enkel hemsida?", answer: "En enkel one-pager kostar från 999 kr i startavgift plus 399 kr/mån hos Sitelet. En WordPress-mall kostar 2 000–5 000 kr som engångskostnad." },
      { question: "Ingår hosting i priset?", answer: "Ja, hos Sitelet ingår hosting, SSL-certifikat, support och löpande uppdateringar i månadsavgiften." },
    ],
  },
  {
    slug: "behover-mitt-foretag-en-hemsida",
    title: "Behöver mitt företag en hemsida 2026?",
    description: "Varför en hemsida fortfarande är viktigast för svenska företag — och varför sociala medier inte räcker.",
    date: "2026-03-31",
    related: ["hemsida-vs-facebook", "synas-pa-google"],
    faq: [
      { question: "Räcker det med en Facebook-sida?", answer: "Nej. Du äger inte din Facebook-sida, algoritmen styr vem som ser ditt innehåll, och du kan inte ranka på Google med en Facebook-sida." },
      { question: "Kan jag vänta med hemsidan?", answer: "Varje dag utan hemsida är potentiella kunder som hittar dina konkurrenter istället. 70% av alla sökningar sker via mobilen." },
    ],
  },
  {
    slug: "wordpress-vs-skraddarsydd",
    title: "WordPress vs skräddarsydd hemsida — vad ska du välja?",
    description: "En ärlig jämförelse mellan WordPress och skräddarsydd kod för svenska småföretag.",
    date: "2026-03-31",
    related: ["vad-kostar-en-hemsida", "seo-for-smaforetag"],
    faq: [
      { question: "Är WordPress gratis?", answer: "WordPress-mjukvaran är gratis, men du betalar för hosting (500–2 000 kr/år), tema (0–2 000 kr), plugins och underhåll." },
      { question: "Vad är snabbast — WordPress eller skräddarsytt?", answer: "Skräddarsydda sidor är nästan alltid snabbare. WordPress laddar många plugins och teman som gör sidan tung." },
    ],
  },
  {
    slug: "hemsida-frisor",
    title: "Hemsida för frisörer — vad behöver du?",
    description: "Allt en frisör behöver på sin hemsida: bokning, prislista, galleri och Google-synlighet.",
    date: "2026-03-31",
    related: ["vad-kostar-en-hemsida", "synas-pa-google"],
    faq: [
      { question: "Behöver en frisör verkligen en hemsida?", answer: "Ja. Kunder söker 'frisör nära mig' på Google — utan hemsida syns du inte. Med hemsida kan de boka direkt istället för att ringa." },
      { question: "Vad kostar en hemsida för en frisör?", answer: "Hos Sitelet kostar en frisörhemsida med bokning från 699 kr/mån (Företag-paketet) plus 1 499 kr i startavgift." },
    ],
  },
  {
    slug: "synas-pa-google",
    title: "Så syns ditt företag på Google 2026",
    description: "Praktiska steg för att synas i Google-sök och Google Maps som svenskt småföretag.",
    date: "2026-03-31",
    related: ["seo-for-smaforetag", "behover-mitt-foretag-en-hemsida"],
    faq: [
      { question: "Hur lång tid tar det att synas på Google?", answer: "Det tar vanligtvis 2–6 månader att börja ranka på Google, beroende på konkurrens och hur bra din sida är optimerad." },
      { question: "Måste jag betala för att synas på Google?", answer: "Nej, organisk sökning (SEO) är gratis. Google Ads kostar pengar men ger omedelbar synlighet." },
    ],
  },
  {
    slug: "hemsida-restaurang",
    title: "Hemsida för restaurang — vad behöver du?",
    description: "Allt en restaurang behöver på sin hemsida: meny, bokning, öppettider och Google Maps.",
    date: "2026-03-31",
    related: ["vad-kostar-en-hemsida", "synas-pa-google"],
    faq: [
      { question: "Räcker det med Uber Eats och Google Maps?", answer: "Nej. De tar provision på varje order och du har ingen kontroll över hur ditt varumärke presenteras. En egen hemsida ger dig full kontroll." },
      { question: "Ska menyn vara en PDF?", answer: "Nej. PDF-menyer är svåra att läsa på mobilen och Google kan inte indexera dem ordentligt. Menyn ska vara vanlig text på sidan." },
    ],
  },
  {
    slug: "seo-for-smaforetag",
    title: "SEO för småföretag — en enkel guide",
    description: "Lär dig grunderna i sökmotoroptimering utan krångel. Praktiska tips för svenska småföretag.",
    date: "2026-03-31",
    related: ["synas-pa-google", "wordpress-vs-skraddarsydd"],
    faq: [
      { question: "Vad är SEO?", answer: "SEO (Search Engine Optimization) handlar om att göra din hemsida synlig i Google utan att betala för annonser." },
      { question: "Kan jag göra SEO själv?", answer: "Grunderna kan du göra själv — bra titlar, snabb sida, Google Business Profile. Men för avancerad SEO kan det vara värt att ta hjälp." },
    ],
  },
  {
    slug: "hemsida-vs-facebook",
    title: "Hemsida vs Facebook — vad funkar bäst för ditt företag?",
    description: "En ärlig jämförelse mellan att ha en hemsida och att bara använda Facebook för ditt företag.",
    date: "2026-03-31",
    related: ["behover-mitt-foretag-en-hemsida", "seo-for-smaforetag"],
    faq: [
      { question: "Kan jag bara ha Facebook?", answer: "Du kan, men du äger inte innehållet, du syns inte på Google, och du kan inte ta betalt eller ha bokning direkt." },
      { question: "Behöver jag båda?", answer: "Ja, idealt. Hemsidan är din grund — den du äger och kontrollerar. Facebook är en kanal för att nå folk, men inte din enda närvaro." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((s) => BLOG_POSTS.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];
}
