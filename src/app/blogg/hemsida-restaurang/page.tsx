import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Hemsida för restaurang — vad behöver du? — Sitelet",
  description: "Allt din restaurang behöver på hemsidan: meny, öppettider, bokning, galleri och mer. Praktisk guide för restaurangägare.",
};

export default function BlogPost() {
  const post = getPost("hemsida-restaurang")!;
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
            Hemsida för restaurang — vad behöver du?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En praktisk guide till vad som faktiskt behövs på en restauranghemsida — och varför Uber Eats och Google Maps inte räcker.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            &quot;Vi har ju Google Maps och Uber Eats, behöver vi verkligen en egen hemsida?&quot; Det är en fråga jag hör ofta från restaurangägare. Svaret är ja — och jag ska förklara varför, samt exakt vad din restauranghemsida bör innehålla.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Varför Uber Eats och Google Maps inte räcker
          </h2>
          <p>
            Uber Eats, Foodora och liknande plattformar är bra för att nå nya kunder, men de tar 25–30 % av varje order. Det är pengar som går rakt ur din marginal. Google Maps visar att du finns — men du kan inte styra vad besökaren ser, och du konkurrerar direkt med alla andra restauranger i närheten.
          </p>
          <p>
            Med en egen hemsida äger du berättelsen. Du bestämmer vilka bilder som visas, hur menyn presenteras och vilka omdömen som lyfts fram. Det är skillnaden mellan att vara en rad i en lista och att vara ett varumärke.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            1. Menyn — det viktigaste på hela sidan
          </h2>
          <p>
            Det första en potentiell gäst vill se är din meny. Det här låter självklart, men mängder av restauranghemsidor missar grunderna:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Lägg menyn som text på sidan</strong> — inte som en PDF man måste ladda ner. PDFer fungerar dåligt på mobilen, de indexeras sämre av Google, och de är krångliga att uppdatera.</li>
            <li><strong className="text-foreground">Visa priser.</strong> Kunder som inte ser priser antar ofta att det är för dyrt och går vidare.</li>
            <li><strong className="text-foreground">Markera allergeninformation</strong> och vegetariska/veganska alternativ. Det ökar förtroendet och gör det enklare för gästerna.</li>
            <li><strong className="text-foreground">Håll den uppdaterad.</strong> En meny som inte stämmer med verkligheten skapar frustration och dåliga recensioner.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            2. Öppettider och kontaktinformation
          </h2>
          <p>
            Det låter banalt, men det är den näst vanligaste anledningen till att folk besöker en restauranghemsida. Dina öppettider ska vara:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Synliga direkt — helst redan på startsidan utan att behöva scrolla.</li>
            <li>Uppdaterade för helgdagar och speciella tillfällen.</li>
            <li>Tydligt formaterade — inte i löptext utan i ett enkelt schema.</li>
          </ul>
          <p>
            Telefonnumret ska vara klickbart på mobilen så gästen kan ringa direkt med ett tryck. Adressen ska vara tydlig och gärna kopplad till en karta.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            3. Google Maps-integration
          </h2>
          <p>
            En inbäddad Google Maps-karta gör det enkelt för gästen att hitta till er. Det tar bort ett hinder mellan &quot;det här stället ser bra ut&quot; och &quot;vi ses där ikväll&quot;. Dessutom hjälper det Google att förstå var ni befinner er, vilket förbättrar er lokala ranking.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            4. Bordsbokning online
          </h2>
          <p>
            En bokningsfunktion direkt på hemsidan minskar antalet missade samtal och gör det enklare för gästerna att reservera bord — särskilt utanför era öppettider. Det finns flera alternativ:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Enkelt bokningsformulär</strong> som skickar ett mail till er — billigt och fungerande.</li>
            <li><strong className="text-foreground">Integration med tjänster som Bookatable eller OpenTable</strong> — automatisk bekräftelse och påminnelser.</li>
            <li><strong className="text-foreground">Egen bokningslösning</strong> — mest kontroll men kräver mer utveckling.</li>
          </ul>
          <p>
            Oavsett lösning är poängen densamma: gör det så enkelt som möjligt att boka bord.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            5. Bildgalleri som säljer upplevelsen
          </h2>
          <p>
            Mat är visuellt. Bra bilder säljer bättre än vilken text som helst. Men det finns ett par saker att tänka på:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Använd riktiga bilder</strong> — inte stockfoton. Gästerna vill se hur maten verkligen ser ut hos er.</li>
            <li><strong className="text-foreground">Visa inte bara maten.</strong> Visa lokalen, stämningen, personalen. Det är helhetsupplevelsen som lockar.</li>
            <li><strong className="text-foreground">Optimera bilderna för webben.</strong> Stora, okomprimerade bilder gör sidan långsam. Bilderna ska se bra ut men ladda snabbt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            6. Mobilanpassning — inte valfritt
          </h2>
          <p>
            De flesta som söker efter en restaurang gör det på mobilen, ofta medan de är på språng. Om din hemsida inte fungerar smidigt på en telefon förlorar du gäster till konkurrenten som har en bättre mobilupplevelse.
          </p>
          <p>
            Det innebär:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Menyn ska vara läsbar utan att zooma.</li>
            <li>Bokningsknappen ska vara lätt att hitta och trycka på.</li>
            <li>Sidan ska ladda snabbt — under 3 sekunder.</li>
            <li>Klickbara telefonnummer och adresslänkar.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            7. Beställning och takeaway
          </h2>
          <p>
            Om ni erbjuder takeaway eller hemleverans kan en egen beställningsfunktion spara er enorma summor jämfört med tredjepartstjänster. Även ett enkelt system där kunder beställer via hemsidan och betalar vid hämtning kan minska ert beroende av plattformar som tar 30 % av omsättningen.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad kostar en restauranghemsida?
          </h2>
          <p>
            En professionell restauranghemsida med meny, karta, galleri och bokningsfunktion behöver inte kosta skjortan. Det viktigaste är att den är välbyggd, snabb och enkel att uppdatera. Undvik dyra byråer som låser in dig i långa avtal — du ska äga din hemsida.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Sammanfattning
          </h2>
          <p>
            En restauranghemsida behöver inte vara komplicerad. Men den ska ha:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Meny som text (inte PDF) med priser.</li>
            <li>Öppettider — tydliga och uppdaterade.</li>
            <li>Google Maps och klickbar adress.</li>
            <li>Bokningsfunktion.</li>
            <li>Riktiga bilder på mat och lokal.</li>
            <li>Mobilanpassad design.</li>
          </ul>
          <p>
            Det räcker. Gör de här sakerna rätt så har du en hemsida som faktiskt drar in gäster — inte bara finns.
          </p>
          <p>
            Behöver du en restauranghemsida som fungerar?{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig
            </Link>{" "}
            så hjälper vi dig komma igång.
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
