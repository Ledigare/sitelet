import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Hemsida för frisörer — vad behöver du? — Sitelet",
  description: "Allt en frisör behöver på sin hemsida: onlinebokning, prislista, galleri, Google Maps och omdömen. Praktisk guide med konkreta tips.",
};

export default function BlogPost() {
  const post = getPost("hemsida-frisor")!;
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
            Hemsida för frisörer — vad behöver du?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En praktisk guide till vad en frisörsalong verkligen behöver på sin hemsida — och vad det kostar.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Som frisör lever du på att kunderna hittar dig och bokar tid. I en värld där de flesta söker &quot;frisör nära mig&quot; på mobilen innan de bestämmer sig, är en hemsida inte längre valfritt — det är din digitala skyltfönster. Här går vi igenom exakt vad din hemsida behöver innehålla och hur du kommer igång.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            1. Onlinebokning — det kunderna förväntar sig
          </h2>
          <p>
            Det viktigaste en frisörsida kan ha 2026 är onlinebokning. Kunder vill inte ringa — de vill boka direkt från mobilen, gärna på kvällen när de kommer på att de behöver klippa sig.
          </p>
          <p>
            Salonger som MasterCuts och Mustasch Barber Shop har sett markanta ökningar i bokningar efter att de lade till onlinebokning på sina hemsidor. Det handlar inte om lyx utan om att möta kundernas förväntningar.
          </p>
          <p>
            Det finns flera bra bokningssystem som kan integreras direkt på din hemsida: Bokadirekt, Timely och Setmore är populära alternativ. Vilken som passar bäst beror på din salongens storlek och behov.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            2. Tydlig prislista
          </h2>
          <p>
            Få saker frustrerar potentiella kunder mer än att behöva ringa för att fråga vad en klippning kostar. En tydlig, uppdaterad prislista på hemsidan visar att du respekterar kundernas tid och gör det enkelt att jämföra.
          </p>
          <p>
            Tips: Dela upp prislistan i kategorier (t.ex. herr, dam, barn, färgning, styling) och håll den enkel. Undvik PDF-filer — det är svårt att läsa på mobilen.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            3. Bildgalleri — visa upp ditt arbete
          </h2>
          <p>
            Frisörbranschen är visuell. Dina kunder vill se vad du kan innan de bokar. Ett galleri med bilder på ditt arbete — före och efter, olika stilar, färgningar — är ett av de mest effektiva sätten att övertyga nya kunder.
          </p>
          <p>
            Du behöver inte vara professionell fotograf. Ta bilder med bra belysning, fråga kunder om lov att dela och uppdatera galleriet regelbundet. Instagram är bra för inspiration, men galleriet på hemsidan når även kunder som inte har Instagram.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            4. Google Maps och kontaktuppgifter
          </h2>
          <p>
            Det låter självklart, men vi ser det hela tiden: frisörsalonger utan adress eller karta på hemsidan. En inbäddad Google Maps-karta gör det enkelt för kunden att hitta dig, och det hjälper din lokala SEO.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Adress</strong> — synlig direkt, inte gömd i en undermeny.</li>
            <li><strong className="text-foreground">Telefonnummer</strong> — klickbart på mobilen.</li>
            <li><strong className="text-foreground">Öppettider</strong> — uppdaterade, inklusive helgdagar.</li>
            <li><strong className="text-foreground">Google Maps-karta</strong> — inbäddad så kunden kan navigera direkt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            5. Omdömen och recensioner
          </h2>
          <p>
            88% av konsumenter litar lika mycket på omdömen online som på personliga rekommendationer, enligt en studie från BrightLocal. Att visa upp dina bästa Google-recensioner direkt på hemsidan bygger förtroende innan kunden ens har satt sin fot i salongen.
          </p>
          <p>
            Välj ut 3–5 starka omdömen och visa dem på startsidan. Uppdatera dem var tredje månad. Och glöm inte att be nöjda kunder lämna en recension — de flesta gör det gärna om du frågar.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad kostar en hemsida för frisörer?
          </h2>
          <p>
            En vanlig frisörsalong behöver inte en avancerad webbplats. En snygg, snabb och mobilanpassad sida med de funktioner vi nämnt ovan räcker långt. Hos Sitelet erbjuder vi två paket som passar de flesta salonger:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Start (399 kr/mån):</strong> Perfekt för den lilla salongen. Du får en professionell one-pager med kontaktuppgifter, prislista, galleri och Google Maps. Allt mobilanpassat och snabbt.
            </li>
            <li>
              <strong className="text-foreground">Företag (699 kr/mån):</strong> Bäst för salonger som vill ha mer — till exempel onlinebokning via Bokadirekt, en dedikerad omdömes-sektion, flera sidor och SEO-optimering för lokala sökningar.
            </li>
          </ul>
          <p>
            I båda paketen ingår hosting, SSL, support och löpande uppdateringar. Du betalar en liten startavgift (från 999 kr) och sedan månadsavgiften. Inga dolda kostnader, inget krångel.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Checklista: har din salong detta på hemsidan?
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Onlinebokning (Bokadirekt, Timely eller liknande)</li>
            <li>Uppdaterad prislista i tydligt format</li>
            <li>Bildgalleri med ditt arbete</li>
            <li>Google Maps-karta och adress</li>
            <li>Klickbart telefonnummer</li>
            <li>Öppettider (inklusive helger)</li>
            <li>Minst 3 kundomdömen</li>
            <li>Mobilanpassad design</li>
            <li>Laddtid under 3 sekunder</li>
          </ul>
          <p>
            Om du saknar mer än två punkter på listan är det dags att uppgradera din digitala närvaro.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Kom igång
          </h2>
          <p>
            En bra hemsida behöver inte vara komplicerad eller dyr. Det viktigaste är att den finns, att den är snabb och att den gör det enkelt för kunden att boka eller kontakta dig.
          </p>
          <p>
            Vill du veta vad en hemsida skulle kosta för just din salong?{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig till oss
            </Link>{" "}
            — vi ger dig ett förslag anpassat efter dina behov, helt utan förpliktelser.
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
