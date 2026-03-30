import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Så syns ditt företag på Google 2026 — Sitelet",
  description: "Praktiska steg för att synas på Google som småföretag. Google Business Profile, lokal SEO, recensioner och mer.",
};

export default function BlogPost() {
  const post = getPost("synas-pa-google")!;
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
            Så syns ditt företag på Google 2026
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Praktiska steg du kan ta idag för att ditt företag ska dyka upp när kunder söker i ditt område.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Tänk dig att någon i Ronneby googlar &quot;frisör nära mig&quot; eller &quot;bästa pizzan i Karlskrona&quot;. Om ditt företag inte dyker upp bland de första resultaten förlorar du kunder — varje dag. Den goda nyheten? Du behöver varken vara IT-expert eller ha en stor budget för att synas på Google. Det handlar om att göra rätt saker i rätt ordning.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 1: Skapa och optimera din Google Business Profile
          </h2>
          <p>
            Det absolut viktigaste steget för att synas på Google som lokalt företag är att skapa en Google Business Profile (tidigare Google My Business). Det är den rutan som dyker upp till höger när någon söker på ditt företagsnamn, eller i kartresultaten vid lokala sökningar.
          </p>
          <p>
            Så här gör du:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Gå till business.google.com</strong> och registrera ditt företag. Fyll i namn, adress, telefonnummer och öppettider korrekt.</li>
            <li><strong className="text-foreground">Välj rätt kategorier.</strong> Är du frisör, restaurang eller snickare? Välj den huvudkategori som bäst beskriver din verksamhet, plus relevanta underkategorier.</li>
            <li><strong className="text-foreground">Ladda upp riktiga bilder.</strong> Minst 5–10 bilder: på lokalen inifrån och utifrån, på ditt team, på era produkter eller tjänster. Företag med bilder får 42 % fler förfrågningar om vägbeskrivning.</li>
            <li><strong className="text-foreground">Skriv en bra beskrivning.</strong> Berätta vad ni gör, var ni finns och vad som gör er unika. Använd naturliga sökord — &quot;frisör i Ronneby&quot; fungerar bättre än &quot;frisör&quot; utan ort.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 2: Samla recensioner — och svara på dem
          </h2>
          <p>
            Recensioner är en av de starkaste rankningsfaktorerna för lokala sökningar. Ett företag med 30 positiva recensioner rankas betydligt högre än ett med tre. Men det handlar inte bara om antal — Google tittar även på hur färska de är och om du svarar på dem.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Be dina nöjda kunder om en recension.</strong> De flesta gör det gärna, men de tänker inte på det själva. Skicka en länk via SMS eller e-post direkt efter besöket.</li>
            <li><strong className="text-foreground">Svara på alla recensioner</strong> — positiva och negativa. Det visar att du bryr dig och Google belönar det.</li>
            <li><strong className="text-foreground">Köp aldrig falska recensioner.</strong> Google upptäcker det och straffar dig hårt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 3: Ha en mobilanpassad hemsida
          </h2>
          <p>
            Över 70 % av alla lokala sökningar görs från en mobil. Om din hemsida inte fungerar smidigt på en telefon tappar du besökare innan de ens sett vad du erbjuder. Google mäter dessutom hur mobilanpassad din sida är och använder det som rankningsfaktor.
          </p>
          <p>
            En mobilanpassad sida innebär:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Text som är läsbar utan att zooma.</li>
            <li>Knappar som är tillräckligt stora att trycka på med tummen.</li>
            <li>Snabb laddningstid — under 3 sekunder helst.</li>
            <li>Klickbar telefonnummer-länk så kunden kan ringa direkt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 4: Grundläggande lokal SEO på hemsidan
          </h2>
          <p>
            SEO (sökmotoroptimering) låter tekniskt, men grunderna är enkla. Här är vad som faktiskt spelar roll för ett lokalt företag:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Sidtitel och metabeskrivning:</strong> Varje sida ska ha en unik titel med ort och verksamhet, t.ex. &quot;Frisör i Ronneby — Klipp &amp; Trim&quot;.</li>
            <li><strong className="text-foreground">Rätt rubriker:</strong> Använd H1 för huvudrubriken och H2 för underrubriker. Inkludera naturligt sökord som &quot;frisör Ronneby&quot;.</li>
            <li><strong className="text-foreground">NAP-konsistens:</strong> Namn, Adress och Telefonnummer ska vara identiska överallt — på hemsidan, Google Business och alla kataloger.</li>
            <li><strong className="text-foreground">Kontaktsida med karta:</strong> Bädda in en Google Maps-karta och lista er fullständiga adress. Det hjälper Google förstå var ni finns.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 5: Schema.org-markup — det dolda vapnet
          </h2>
          <p>
            Schema.org-markup är kod som du lägger till på din hemsida för att hjälpa Google förstå innehållet bättre. Det låter komplicerat, men för ett lokalt företag handlar det främst om att berätta för Google:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Vilken typ av företag det är (frisör, restaurang, snickare).</li>
            <li>Adress, telefonnummer, öppettider.</li>
            <li>Vilket betyg ni har (genomsnitt av recensioner).</li>
          </ul>
          <p>
            Med rätt markup kan Google visa era öppettider, betyg och adress direkt i sökresultaten — det ger fler klick. Din webbutvecklare kan lägga till detta på några minuter, och det gör verklig skillnad.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Steg 6: Var aktiv och uppdatera regelbundet
          </h2>
          <p>
            Google premierar företag som visar att de är aktiva. Det behöver inte vara krångligt:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Publicera inlägg</strong> på din Google Business Profile varje vecka. Det kan vara ett erbjudande, en nyhet eller ett foto från verksamheten.</li>
            <li><strong className="text-foreground">Håll öppettiderna uppdaterade</strong> — speciellt runt helger och semesterperioder.</li>
            <li><strong className="text-foreground">Lägg till nya bilder</strong> regelbundet. Det signalerar till Google att företaget lever och frodas.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad du kan göra idag
          </h2>
          <p>
            Du behöver inte göra allt på en gång. Börja med det viktigaste:
          </p>
          <ul className="list-decimal space-y-2 pl-5">
            <li>Skapa eller uppdatera din Google Business Profile — 30 minuter.</li>
            <li>Be tre nöjda kunder om en recension — 5 minuter.</li>
            <li>Kontrollera att din hemsida fungerar på mobilen — 2 minuter.</li>
          </ul>
          <p>
            De här tre stegen tar under en timme och kan göra enorm skillnad för hur synligt ditt företag är på Google.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Behöver du hjälp?
          </h2>
          <p>
            Att synas på Google kräver inte magi — det kräver rätt grundarbete. Om du vill ha en hemsida som är byggd för att ranka lokalt, med Schema-markup, mobilanpassning och SEO-grund redan från start, kan vi hjälpa dig.{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig
            </Link>{" "}
            så berättar vi hur vi kan hjälpa just ditt företag att synas.
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
