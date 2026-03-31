import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogg — Sitelet",
  description: "Tips och guider om hemsidor, SEO och digital närvaro för svenska företag.",
};

const POSTS = [
  {
    slug: "vad-kostar-en-hemsida",
    title: "Vad kostar en hemsida 2026?",
    description: "En ärlig genomgång av vad du kan förvänta dig betala — från budgetalternativ till skräddarsydda lösningar.",
    date: "2026-03-31",
  },
  {
    slug: "behover-mitt-foretag-en-hemsida",
    title: "Behöver mitt företag en hemsida 2026?",
    description: "Varför en hemsida fortfarande är viktig för småföretag i Sverige 2026 — och varför sociala medier och Google Business inte räcker.",
    date: "2026-03-31",
  },
  {
    slug: "wordpress-vs-skraddarsydd",
    title: "WordPress vs skräddarsydd hemsida — vad ska du välja?",
    description: "En ärlig jämförelse mellan WordPress och skräddarsydda hemsidor. Vi går igenom fördelar, nackdelar och vad som passar ditt företag bäst.",
    date: "2026-03-31",
  },
  {
    slug: "hemsida-frisor",
    title: "Hemsida för frisörer — vad behöver du?",
    description: "Allt en frisör behöver på sin hemsida: onlinebokning, prislista, galleri, Google Maps och omdömen. Praktisk guide med konkreta tips.",
    date: "2026-03-31",
  },
  {
    slug: "synas-pa-google",
    title: "Så syns ditt företag på Google 2026",
    description: "Praktiska steg för att synas på Google som småföretag. Google Business Profile, lokal SEO, recensioner och mer.",
    date: "2026-03-31",
  },
  {
    slug: "hemsida-restaurang",
    title: "Hemsida för restaurang — vad behöver du?",
    description: "Allt din restaurang behöver på hemsidan: meny, öppettider, bokning, galleri och mer. Praktisk guide för restaurangägare.",
    date: "2026-03-31",
  },
  {
    slug: "seo-for-smaforetag",
    title: "SEO för småföretag — en enkel guide",
    description: "Lär dig grunderna i SEO utan krångel. Praktiska tips för småföretag som vill synas bättre på Google.",
    date: "2026-03-31",
  },
  {
    slug: "hemsida-vs-facebook",
    title: "Hemsida vs Facebook — vad funkar bäst för ditt företag?",
    description: "Ärlig jämförelse mellan hemsida och Facebook-sida för småföretag. Fördelar, nackdelar och vad du faktiskt behöver.",
    date: "2026-03-31",
  },
  {
    slug: "facebook-annonser-smaforetag",
    title: "Facebook-annonser för småföretag — en guide",
    description: "Lär dig hur Facebook-annonser (Meta Ads) fungerar för svenska småföretag. Budget, målgrupper, annonstyper och realistiska resultat.",
    date: "2026-03-31",
  },
  {
    slug: "google-ads-eller-facebook",
    title: "Google Ads eller Facebook — vad passar ditt företag?",
    description: "Ärlig jämförelse mellan Google Ads och Facebook-annonser. Lär dig vilken plattform som passar ditt småföretag bäst.",
    date: "2026-03-31",
  },
  {
    slug: "vad-kostar-marknadsforing",
    title: "Så mycket kostar digital marknadsföring 2026",
    description: "Vad kostar digital marknadsföring i Sverige 2026? Priser för byråer, frilansare och Sitelet i jämförelse.",
    date: "2026-03-31",
  },
];

export default function BlogPage() {
  return (
    <main className="px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
          Blogg
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          Tips och guider för svenska företag som vill synas online.
        </p>

        <div className="mt-14 flex flex-col gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blogg/${post.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-border p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 md:p-8"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="font-heading text-xl font-semibold tracking-tight group-hover:underline md:text-2xl">
                {post.title}
              </h2>
              <p className="max-w-lg text-sm text-muted-foreground">{post.description}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Läs mer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
