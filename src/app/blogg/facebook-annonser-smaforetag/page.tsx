import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Facebook-annonser för småföretag — en guide — Sitelet",
  description: "Lär dig hur Facebook-annonser (Meta Ads) fungerar för svenska småföretag. Budget, målgrupper, annonstyper och vad du kan förvänta dig.",
};

export default function BlogPost() {
  const post = getPost("facebook-annonser-smaforetag")!;
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
            Facebook-annonser för småföretag — en guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Hur Meta-annonser fungerar för svenska småföretag — budget, målgrupper, annonstyper och realistiska resultat.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Facebook-annonser (numera Meta Ads) är ett av de mest kostnadseffektiva sätten för småföretag att nå nya kunder.
            Du behöver ingen stor budget, ingen marknadsföringsexamen och inget team. Men du behöver veta vad du gör, annars bränner du pengar.
          </p>
          <p>
            Den här guiden är skriven för dig som driver ett litet företag i Sverige och funderar på att börja annonsera — eller som har testat men inte fått resultat.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Så fungerar Meta Ads
          </h2>
          <p>
            Meta Ads är plattformen bakom annonser på Facebook, Instagram, Messenger och Audience Network. Du skapar en annons
            i Meta Business Suite, väljer vem som ska se den, bestämmer budget — och Meta visar annonsen för de personer som
            mest sannolikt gör det du vill (klickar, ringer, köper).
          </p>
          <p>
            Till skillnad från Google Ads, där du fångar folk som redan söker efter något, handlar Meta Ads om att nå folk
            som scrollar. Du avbryter dem med något intressant. Det kallas discovery-marknadsföring — du skapar efterfrågan
            istället för att fånga den.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vilken budget behöver du?
          </h2>
          <p>
            Kortaste svaret: börja med <strong className="text-foreground">50 kr per dag</strong>. Det ger dig cirka 1 500 kr i månaden
            och räcker för att nå 1 000–5 000 personer per dag beroende på målgrupp och geografi.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">50 kr/dag:</strong> Bra för att testa. Räcker för en lokal kampanj i en mindre stad.</li>
            <li><strong className="text-foreground">100–200 kr/dag:</strong> Solidt startläge för de flesta småföretag. Du kan köra 2–3 annonser parallellt och jämföra.</li>
            <li><strong className="text-foreground">500+ kr/dag:</strong> Här börjar du skala. Du har data, vet vad som fungerar, och vill nå fler.</li>
          </ul>
          <p>
            Viktigt: annonsbudgeten betalar du direkt till Meta. Det är separat från kostnaden att hantera annonserna (strategi, uppsättning, optimering).
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Tre typer av annonser som fungerar
          </h2>
          <p>
            Meta har över ett dussin kampanjmål, men för de flesta småföretag finns det tre som spelar roll:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Trafik (Traffic):</strong> Skickar folk till din hemsida. Bra om du har en
              landningssida som konverterar, t.ex. en prislista, meny eller kontaktformulär.
            </li>
            <li>
              <strong className="text-foreground">Leads (Lead Generation):</strong> Samlar in kontaktuppgifter direkt i appen
              utan att folk lämnar Facebook. Perfekt för frisörer, hantverkare och konsulter som vill att folk bokar eller hör av sig.
            </li>
            <li>
              <strong className="text-foreground">Konvertering (Sales/Conversions):</strong> Optimerar för att folk ska göra
              något specifikt på din sida — köpa, boka, fylla i ett formulär. Kräver att du har Meta Pixel installerad.
            </li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Målgrupp — nå rätt personer lokalt
          </h2>
          <p>
            En av Metas största styrkor är targeting. Du kan rikta annonser till:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Personer inom en viss radie från din butik (t.ex. 10 km runt Karlskrona).</li>
            <li>En viss åldersgrupp och kön.</li>
            <li>Intressen (t.ex. "matlagning", "frisyr", "renovering").</li>
            <li>Lookalike audiences — Meta hittar personer som liknar dina befintliga kunder.</li>
          </ul>
          <p>
            Tips: börja brett och låt Meta optimera. Algoritmen är bättre än du tror på att hitta rätt personer.
            Snäva målgrupper funkar sämre 2026 än de gjorde 2020.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad kan du förvänta dig?
          </h2>
          <p>
            Realistiska siffror för ett lokalt småföretag i Sverige:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">CPM (kostnad per 1 000 visningar):</strong> 30–80 kr.</li>
            <li><strong className="text-foreground">CPC (kostnad per klick):</strong> 2–8 kr.</li>
            <li><strong className="text-foreground">Kostnad per lead:</strong> 20–100 kr beroende på bransch.</li>
          </ul>
          <p>
            Det betyder att 1 500 kr i månaden kan ge dig 200–750 klick till din hemsida, eller 15–75 leads.
            Inte dåligt för en frisör, restaurang eller hantverkare.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vanliga misstag att undvika
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Boosted posts:</strong> Den blå "Boosta inlägg"-knappen ger dålig kontroll. Använd Ads Manager istället.</li>
            <li><strong className="text-foreground">Ingen uppföljning:</strong> Kolla resultaten varje vecka. Stäng av annonser som inte levererar.</li>
            <li><strong className="text-foreground">Dålig kreativ:</strong> Bilden/videon är 80% av resultatet. Investera tid i bra visuellt material.</li>
            <li><strong className="text-foreground">Ingen landningssida:</strong> Skicka inte folk till din startsida. Skicka dem till en sida som matchar annonsen.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Behöver du hjälp?
          </h2>
          <p>
            Att hantera Meta Ads tar tid — skapa annonser, testa målgrupper, analysera data, optimera.
            Många småföretagare har varken tiden eller intresset.
          </p>
          <p>
            Hos <Link href="/marknadsforing" className="text-foreground underline underline-offset-4">Sitelet sköter vi dina annonser från 399 kr/mån</Link>.
            Vi sätter upp kampanjer, optimerar löpande och rapporterar resultat. Du betalar annonsbudgeten direkt till Meta —
            vi tar aldrig provision på den.
          </p>
          <p>
            Vill du komma igång? <Link href="/#kontakt" className="text-foreground underline underline-offset-4">Hör av dig</Link> så
            hjälper vi dig att sätta upp din första kampanj.
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
