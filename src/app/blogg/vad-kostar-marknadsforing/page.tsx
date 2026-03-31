import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Så mycket kostar digital marknadsföring 2026 — Sitelet",
  description: "Vad kostar digital marknadsföring i Sverige 2026? Priser för byråer, frilansare och Sitelet. Jämförelse och tips.",
};

export default function BlogPost() {
  const post = getPost("vad-kostar-marknadsforing")!;
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
            Så mycket kostar digital marknadsföring 2026
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En ärlig genomgång av vad digital marknadsföring kostar i Sverige — byråer, frilansare och Sitelet i jämförelse.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Du vet att du behöver marknadsföring. Du vet att "synas online" är viktigt. Men vad kostar det egentligen?
            Vi har sammanställt riktiga priser från den svenska marknaden 2026 så att du kan planera din budget.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Tre sätt att köpa marknadsföring
          </h2>
          <p>
            Det finns i grunden tre vägar för ett småföretag som vill ha hjälp med digital marknadsföring:
          </p>

          <h3 className="font-heading text-lg font-semibold text-foreground">
            1. Traditionell byrå
          </h3>
          <p>
            En marknadsföringsbyrå tar typiskt <strong className="text-foreground">5 000–30 000 kr/mån</strong> för att hantera
            dina annonser. I det ingår ofta strategi, uppsättning av kampanjer, löpande optimering och rapportering.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fördelar: erfarenhet, team med specialister, helhetslösningar.</li>
            <li>Nackdelar: dyrt, ofta långa bindningstider (6–12 månader), kan vara överkvalificerat för småföretag.</li>
          </ul>

          <h3 className="font-heading text-lg font-semibold text-foreground">
            2. Frilansare
          </h3>
          <p>
            En frilansande marknadsförare kostar vanligtvis <strong className="text-foreground">3 000–10 000 kr/mån</strong>.
            Priset beror på erfarenhet, antal plattformar och hur mycket arbete som ingår.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fördelar: billigare, personligt, flexibelt.</li>
            <li>Nackdelar: en person kan bli sjuk eller upptagen, kvaliteten varierar kraftigt, svårt att veta vad du får.</li>
          </ul>

          <h3 className="font-heading text-lg font-semibold text-foreground">
            3. Sitelet
          </h3>
          <p>
            Hos oss kostar annonshantering från <strong className="text-foreground">399 kr/mån</strong>. Punkt.
            Ingen bindningstid, ingen uppsättningsavgift, inga dolda kostnader.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fördelar: fast lågt pris, ingen bindning, allt ingår (strategi, optimering, rapportering).</li>
            <li>Nackdelar: vi är inte en fullservicebyrå — vi fokuserar på det som ger resultat för småföretag.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Prisjämförelse
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground"></th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Byrå</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Frilansare</th>
                  <th className="py-3 font-semibold text-foreground">Sitelet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Månadskostnad</td>
                  <td className="py-3 pr-4">5 000–30 000 kr</td>
                  <td className="py-3 pr-4">3 000–10 000 kr</td>
                  <td className="py-3">Från 399 kr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Bindningstid</td>
                  <td className="py-3 pr-4">6–12 månader</td>
                  <td className="py-3 pr-4">Varierande</td>
                  <td className="py-3">Ingen</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Uppsättningsavgift</td>
                  <td className="py-3 pr-4">5 000–15 000 kr</td>
                  <td className="py-3 pr-4">0–5 000 kr</td>
                  <td className="py-3">0 kr</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Plattformar</td>
                  <td className="py-3 pr-4">Alla</td>
                  <td className="py-3 pr-4">1–2</td>
                  <td className="py-3">Meta, Google, TikTok</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Rapportering</td>
                  <td className="py-3 pr-4">Månadsvis</td>
                  <td className="py-3 pr-4">Varierar</td>
                  <td className="py-3">Månadsvis</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Passar för</td>
                  <td className="py-3 pr-4">Medelstora/stora företag</td>
                  <td className="py-3 pr-4">Varierar</td>
                  <td className="py-3">Småföretag</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Varför är Sitelet så mycket billigare?
          </h2>
          <p>
            Bra fråga. Vi har inget kontor i centrala Stockholm. Vi har inga projektledare, säljavdelningar
            eller långa möten. Vi är ett litet, lean team som fokuserar på det som ger resultat:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Standardiserade processer:</strong> Vi vet exakt vad ett lokalt småföretag behöver. Vi bygger inte om hjulet varje gång.</li>
            <li><strong className="text-foreground">Ingen overhead:</strong> Inga kontorshyror, inga sälj-luncher, inga onödiga möten.</li>
            <li><strong className="text-foreground">Volym:</strong> Vi hanterar många kunder effektivt med beprövade mallar och arbetsflöden.</li>
            <li><strong className="text-foreground">Teknik:</strong> Vi använder moderna verktyg och automatisering där det är möjligt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Glöm inte annonsbudgeten
          </h2>
          <p>
            Oavsett vem som hanterar dina annonser behöver du en separat annonsbudget som betalas direkt till plattformen
            (Google, Meta, TikTok). Det är pengarna som faktiskt används för att visa dina annonser.
          </p>
          <p>
            En rimlig startbudget för ett lokalt småföretag:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Minimum:</strong> 1 500 kr/mån (50 kr/dag).</li>
            <li><strong className="text-foreground">Rekommenderat:</strong> 3 000–5 000 kr/mån.</li>
            <li><strong className="text-foreground">Skalning:</strong> 10 000+ kr/mån när du ser att det fungerar.</li>
          </ul>
          <p>
            Totalkostnad med Sitelet: <strong className="text-foreground">från 1 899 kr/mån</strong> (399 kr hantering + 1 500 kr annonsbudget).
            Jämför det med en byrå där bara hanteringen kostar 5 000 kr.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad ska du göra nu?
          </h2>
          <p>
            Om du vill komma igång med digital marknadsföring utan att bränna tiotusentals kronor:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Bestäm en total månadsbudget du är bekväm med (t.ex. 3 000 kr).</li>
            <li>Välj plattform baserat på din bransch (se vår guide om <Link href="/blogg/google-ads-eller-facebook" className="text-foreground underline underline-offset-4">Google Ads vs Facebook</Link>).</li>
            <li><Link href="/#kontakt" className="text-foreground underline underline-offset-4">Hör av dig till oss</Link> så hjälper vi dig att komma igång.</li>
          </ol>
          <p>
            Kolla in alla våra <Link href="/marknadsforing" className="text-foreground underline underline-offset-4">paket för annonshantering</Link> —
            vi har alternativ oavsett om du vill köra en plattform eller alla tre.
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
