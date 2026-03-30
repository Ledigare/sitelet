import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Vad kostar en hemsida 2026? — Sitelet",
  description: "En ärlig genomgång av vad du kan förvänta dig betala för en hemsida i Sverige 2026.",
};

export default function BlogPost() {
  const post = getPost("vad-kostar-en-hemsida")!;
  const related = getRelatedPosts(post.related);

  return (
    <main className="px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <BlogJsonLd post={post} />
      <article className="mx-auto max-w-prose">
        <Breadcrumbs items={[
          { label: "Hem", href: "/" },
          { label: "Blogg", href: "/blogg" },
          { label: post.title, href: `/blogg/${post.slug}` },
        ]} />

        <div className="mt-8">
          <time className="text-sm text-muted-foreground">31 mars 2026</time>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vad kostar en hemsida 2026?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En ärlig genomgång av vad du kan förvänta dig betala — från budgetalternativ till skräddarsydda lösningar.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Det korta svaret: det beror på vad du behöver. En enkel one-pager för en frisör i Ronneby kostar inte samma sak som en webbapp med bokning, betalning och kundhantering.
          </p>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Tre prisklasser
          </h2>
          <p>
            I Sverige 2026 finns det grovt sett tre prisklasser för hemsidor:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Budget (2 000–5 000 kr):</strong> WordPress-mall, klar på en helg. Ser okej ut men svår att anpassa.</li>
            <li><strong className="text-foreground">Mellansegment (5 000–15 000 kr):</strong> Anpassad design, responsiv, SEO-grund. Det som de flesta småföretag behöver.</li>
            <li><strong className="text-foreground">Premium (15 000–80 000 kr):</strong> Skräddarsydd kod, avancerade funktioner, byrå-kvalitet.</li>
          </ul>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Varför vi valde en annan modell
          </h2>
          <p>
            På Sitelet betalar du en startavgift (från 999 kr) plus en månadsavgift (från 399 kr/mån). I det ingår hosting, support och löpande uppdateringar. Du äger allt vi bygger.
          </p>
          <p>
            Fördelen? Du slipper en stor engångskostnad och du vet att din sida alltid är uppdaterad och fungerar.
          </p>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad ska du tänka på?
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Ägarskap:</strong> Se till att du äger koden och domänen. Många byråer låser in dig.</li>
            <li><strong className="text-foreground">Dolda kostnader:</strong> Fråga om hosting, SSL, uppdateringar och support ingår.</li>
            <li><strong className="text-foreground">Mobilanpassning:</strong> 70%+ av besökarna kommer via mobilen. Det är inte valfritt.</li>
          </ul>
          <p>
            Vill du veta vad en hemsida skulle kosta för just ditt företag? <Link href="/#kontakt" className="text-foreground underline underline-offset-4">Hör av dig</Link> — vi ger dig ett rakt svar utan krångel.
          </p>
        </div>

        {post.faq.length > 0 && (
          <div className="mt-12 border-t border-border pt-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">Vanliga frågor</h2>
            <div className="mt-4 space-y-4">
              {post.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="font-medium text-foreground">{f.question}</h3>
                  <p className="mt-1 text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <RelatedPosts posts={related} />
      </article>
    </main>
  );
}
