import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Google Ads eller Facebook — vad passar ditt företag? — Sitelet",
  description: "Ärlig jämförelse mellan Google Ads och Facebook-annonser. Lär dig vilken plattform som passar ditt småföretag bäst.",
};

export default function BlogPost() {
  const post = getPost("google-ads-eller-facebook")!;
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
            Google Ads eller Facebook — vad passar ditt företag?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En ärlig jämförelse mellan Google Ads och Meta Ads. När ska du använda vilken — och behöver du kanske båda?
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            "Ska jag köra Google Ads eller Facebook?" Det är en av de vanligaste frågorna vi får från småföretagare.
            Och svaret är — som alltid — det beror på. Men efter den här artikeln vet du exakt vad som passar just dig.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Den grundläggande skillnaden
          </h2>
          <p>
            Tänk så här:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Google Ads = avsikt.</strong> Folk söker aktivt efter något. "Rörmokare Malmö", "boka frisör online", "köpa trädgårdsmöbler". Du fångar efterfrågan som redan finns.</li>
            <li><strong className="text-foreground">Facebook/Meta Ads = upptäckt.</strong> Folk scrollar i sitt flöde. Du avbryter dem med något intressant. Du skapar efterfrågan.</li>
          </ul>
          <p>
            Bägge fungerar. Men de fungerar på olika sätt och i olika situationer.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Jämförelse i korthet
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground"></th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Google Ads</th>
                  <th className="py-3 font-semibold text-foreground">Meta Ads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Princip</td>
                  <td className="py-3 pr-4">Fånga befintlig efterfrågan</td>
                  <td className="py-3">Skapa ny efterfrågan</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Bäst för</td>
                  <td className="py-3 pr-4">Tjänster folk söker efter</td>
                  <td className="py-3">Produkter/varumärken folk inte känner till</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Format</td>
                  <td className="py-3 pr-4">Text (sök), bild/video (display)</td>
                  <td className="py-3">Bild, video, karusell, stories</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Kostnad per klick</td>
                  <td className="py-3 pr-4">5–30 kr (varierar kraftigt)</td>
                  <td className="py-3">2–8 kr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Minsta budget</td>
                  <td className="py-3 pr-4">~50 kr/dag</td>
                  <td className="py-3">~50 kr/dag</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Targeting</td>
                  <td className="py-3 pr-4">Sökord, plats</td>
                  <td className="py-3">Intressen, demografi, lookalikes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Konverteringsgrad</td>
                  <td className="py-3 pr-4">Högre (aktiv sökning)</td>
                  <td className="py-3">Lägre men billigare räckvidd</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            När ska du välja Google Ads?
          </h2>
          <p>
            Google Ads passar bäst när:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Folk redan söker efter det du säljer ("tandläkare Göteborg", "låssmed akut").</li>
            <li>Du säljer en tjänst med hög köpintention.</li>
            <li>Du vill synas precis när kunden behöver dig.</li>
            <li>Du har en hemsida som konverterar besökare till kunder.</li>
          </ul>
          <p>
            Typiska branscher: hantverkare, tandläkare, advokater, bilverkstäder, akuttjänster.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            När ska du välja Meta Ads (Facebook/Instagram)?
          </h2>
          <p>
            Meta Ads passar bäst när:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Du vill bygga varumärkeskännedom lokalt.</li>
            <li>Din produkt/tjänst är visuell (restaurang, frisör, inredning).</li>
            <li>Folk vet inte att de behöver dig ännu — du behöver skapa intresse.</li>
            <li>Du vill rikta dig till en specifik demografisk grupp.</li>
          </ul>
          <p>
            Typiska branscher: restauranger, skönhetssalonger, e-handel, eventföretag, personliga tränare.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            De flesta småföretag behöver båda
          </h2>
          <p>
            Här är sanningen: Google och Meta kompletterar varandra. Meta skapar medvetenhet — folk ser din annons och börjar
            känna igen ditt varumärke. Google fångar upp dem när de sedan söker efter det du erbjuder.
          </p>
          <p>
            En typisk kundresa kan se ut så här:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>En person ser din Instagram-annons om din nya lunchmeny.</li>
            <li>De tänker "det där såg gott ut" men gör inget just då.</li>
            <li>Nästa dag googlar de "lunch [din stad]".</li>
            <li>Din Google-annons dyker upp — de klickar och bokar bord.</li>
          </ol>
          <p>
            Utan Meta hade de aldrig känt till dig. Utan Google hade du inte fångat upp dem när de var redo att agera.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Hur ska du fördela budgeten?
          </h2>
          <p>
            En bra start för de flesta småföretag:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">60% Google, 40% Meta</strong> — om folk aktivt söker efter din tjänst.</li>
            <li><strong className="text-foreground">40% Google, 60% Meta</strong> — om du behöver bygga medvetenhet först.</li>
            <li><strong className="text-foreground">100% Meta</strong> — om det inte finns sökvolym för det du säljer (ny produkt, nischad tjänst).</li>
          </ul>
          <p>
            Börja med en total annonsbudget på 3 000–5 000 kr/mån och justera efter vad som ger resultat.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Låt någon annan sköta det
          </h2>
          <p>
            Att hantera annonser på två plattformar är tidskrävande. Du behöver sätta upp kampanjer, skriva annonstexter,
            skapa bilder, analysera data och optimera löpande.
          </p>
          <p>
            Med <Link href="/marknadsforing" className="text-foreground underline underline-offset-4">Sitelets "Växla upp"-paket</Link> får
            du hantering av både Google Ads och Meta Ads för <strong className="text-foreground">499 kr/mån</strong>.
            Vi sköter strategi, uppsättning och optimering — du fokuserar på att driva ditt företag.
          </p>
          <p>
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">Hör av dig</Link> så
            hjälper vi dig att komma igång med rätt plattform för just ditt företag.
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
