import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "SEO för småföretag — en enkel guide — Sitelet",
  description: "Lär dig grunderna i SEO utan krångel. Praktiska tips för småföretag som vill synas bättre på Google.",
};

export default function BlogPost() {
  const post = getPost("seo-for-smaforetag")!;
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
            SEO för småföretag — en enkel guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Vad SEO faktiskt innebär, vad som fungerar och vad du inte ska slösa pengar på. Utan fackspråk.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            SEO. Tre bokstäver som dyker upp i varje säljpitch från varje webbyrå i Sverige. Men vad betyder det egentligen? Och behöver du som driver en liten verksamhet i Blekinge bry dig? Svaret är ja — men inte på det sätt du kanske tror.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad är SEO — på ren svenska?
          </h2>
          <p>
            SEO står för Search Engine Optimization, eller sökmotoroptimering på svenska. Det handlar om att göra din hemsida så att Google förstår vad den handlar om och visar den för rätt personer vid rätt tillfälle.
          </p>
          <p>
            Om du driver en tandläkarmottagning i Karlskrona vill du att folk som googlar &quot;tandläkare Karlskrona&quot; ska hitta dig. SEO är allt du gör för att det ska hända — från hur du skriver dina texter till hur snabbt din sida laddar.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            On-page SEO: det du kan styra själv
          </h2>
          <p>
            On-page SEO är allt som finns på din hemsida och som du kan påverka direkt. Här är det viktigaste:
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Sidtitlar och metabeskrivningar
          </h2>
          <p>
            Varje sida på din hemsida har en titel (den som syns i webbläsarens flik och i Googles sökresultat) och en metabeskrivning (den lilla texten under titeln i sökresultaten). De här två sakerna avgör ofta om någon klickar på ditt resultat eller konkurrentens.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Titeln</strong> ska vara kort (under 60 tecken), innehålla ditt viktigaste sökord och gärna din ort. Exempel: &quot;Elektriker i Ronneby — snabb hjälp | Firma AB&quot;.</li>
            <li><strong className="text-foreground">Metabeskrivningen</strong> ska vara 120–160 tecken och ge en anledning att klicka. Ingen nyckelordsstoppning — skriv för människor.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Rubriker och struktur
          </h2>
          <p>
            Google läser dina rubriker för att förstå vad sidan handlar om. Använd dem hierarkiskt:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">H1:</strong> En per sida. Din huvudrubrik. Ska innehålla ditt primära sökord.</li>
            <li><strong className="text-foreground">H2:</strong> Underrubriker för olika sektioner. Bryt upp texten och gör den scanbar.</li>
            <li><strong className="text-foreground">H3:</strong> Underrubriker till H2 vid behov.</li>
          </ul>
          <p>
            Skriv inte bara för Google — skriv så att en besökare snabbt kan skanna sidan och hitta det de letar efter.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Bilder
          </h2>
          <p>
            Bilder påverkar SEO mer än de flesta tror. Två saker spelar roll:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Alt-texter:</strong> Beskriv vad bilden visar, t.ex. &quot;nyrenoverad frisörsalong i Ronneby centrum&quot;. Google kan inte se bilder, men den kan läsa alt-texter.</li>
            <li><strong className="text-foreground">Filstorlek:</strong> Komprimera dina bilder. En bild på 5 MB som kunde varit 200 KB saktar ner hela sidan — och långsamma sidor rankas sämre.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Lokal SEO: Google Business Profile
          </h2>
          <p>
            För småföretag med fysisk verksamhet är lokal SEO det mest kraftfulla verktyget. Det handlar framför allt om din Google Business Profile — den gratistjänst från Google där du registrerar ditt företag.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Skapa eller gör anspråk på din profil</strong> på business.google.com.</li>
            <li><strong className="text-foreground">Fyll i allt:</strong> namn, adress, telefon, öppettider, kategorier, bilder, beskrivning.</li>
            <li><strong className="text-foreground">Samla recensioner.</strong> Be dina nöjda kunder om en Google-recension. Svara på alla recensioner.</li>
            <li><strong className="text-foreground">Publicera inlägg</strong> regelbundet — erbjudanden, nyheter, bilder.</li>
          </ul>
          <p>
            En välskött Google Business Profile kan ensam räcka för att du ska synas i de lokala sökresultaten, det så kallade &quot;kartsnapset&quot; högst upp på sidan.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Varför hastighet spelar roll
          </h2>
          <p>
            Google har sagt det rakt ut: sidans laddningshastighet är en rankningsfaktor. Men det handlar inte bara om SEO — det handlar om att behålla besökare. Om din sida tar mer än 3 sekunder att ladda lämnar över hälften av besökarna.
          </p>
          <p>
            Vanliga orsaker till långsamma sidor:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Okomprimerade bilder (den vanligaste boven).</li>
            <li>Dålig hosting — billig delad hosting ger ofta lång laddningstid.</li>
            <li>Överflödiga plugins och scripts.</li>
            <li>Ingen caching — sidan byggs om från grunden vid varje besök.</li>
          </ul>
          <p>
            Du kan testa din sidas hastighet gratis med Googles verktyg PageSpeed Insights. Sikta på att vara i grönt (över 90 poäng).
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad du INTE ska slösa pengar på
          </h2>
          <p>
            SEO-branschen är full av oseriösa aktörer som säljer saker som inte fungerar. Här är vad du ska akta dig för:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">&quot;Garanterad förstaplats på Google&quot;:</strong> Ingen kan garantera det. Inte ens Google själva. Fly från alla som lovar det.</li>
            <li><strong className="text-foreground">Länkar från skräpsajter:</strong> Att köpa hundratals länkar från irrelevanta sajter hjälpte 2010. Idag straffar Google det.</li>
            <li><strong className="text-foreground">SEO-paket för 10 000 kr/mån</strong> utan att kunna förklara vad de faktiskt gör. Om de inte kan visa konkreta åtgärder och resultat, spendera pengarna på annat.</li>
            <li><strong className="text-foreground">Nyckelordsstoppning:</strong> Att tvinga in sökord i varannan mening gör texten oläsbar och hjälper inte — Google ser igenom det.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            En enkel SEO-checklista
          </h2>
          <p>
            Här är vad ett småföretag faktiskt behöver göra:
          </p>
          <ul className="list-decimal space-y-2 pl-5">
            <li>Skapa och optimera din Google Business Profile.</li>
            <li>Se till att varje sida har en unik titel med ort och verksamhet.</li>
            <li>Skriv metabeskrivningar som lockar till klick.</li>
            <li>Använd rubriker (H1, H2) logiskt.</li>
            <li>Komprimera bilder och lägg till alt-texter.</li>
            <li>Se till att sidan laddar snabbt och fungerar på mobilen.</li>
            <li>Samla Google-recensioner aktivt.</li>
          </ul>
          <p>
            Det är det. Ingen magi, inga hemliga knep. Gör de här sakerna rätt så ligger du före de flesta småföretag i Sverige.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vill du ha en SEO-optimerad hemsida från start?
          </h2>
          <p>
            Alla hemsidor vi bygger på Sitelet har SEO-grunden inbakad — rätt rubriker, snabb laddning, mobilanpassning och strukturerad data. Du slipper tänka på tekniken.{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig
            </Link>{" "}
            så berättar vi mer om hur vi kan hjälpa ditt företag synas på Google.
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
