import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Hemsida vs Facebook — vad funkar bäst för ditt företag? — Sitelet",
  description: "Ärlig jämförelse mellan hemsida och Facebook-sida för småföretag. Fördelar, nackdelar och vad du faktiskt behöver.",
};

export default function BlogPost() {
  const post = getPost("hemsida-vs-facebook")!;
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
            Hemsida vs Facebook — vad funkar bäst för ditt företag?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            En ärlig jämförelse. Båda har sin plats, men bara en av dem äger du.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            &quot;Vi behöver ingen hemsida — vi har ju Facebook.&quot; Det är något jag hör regelbundet från småföretagare. Och jag förstår logiken: Facebook är gratis, enkelt och alla finns redan där. Men det finns ett stort problem med den strategin.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Facebooks fördelar — det som lockar
          </h2>
          <p>
            Låt oss börja ärligt. Facebook har genuina fördelar:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Det är gratis att starta.</strong> Du skapar en sida på fem minuter utan att betala ett öre.</li>
            <li><strong className="text-foreground">Alla känner till det.</strong> De flesta av dina kunder har ett Facebook-konto och vet hur det fungerar.</li>
            <li><strong className="text-foreground">Enkel kommunikation.</strong> Du kan posta uppdateringar, bilder och erbjudanden direkt till dina följare.</li>
            <li><strong className="text-foreground">Recensioner och rekommendationer.</strong> Kunder kan lämna omdömen och dela din sida med vänner.</li>
            <li><strong className="text-foreground">Messenger.</strong> Kunder kan kontakta dig direkt — snabbt och enkelt.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Facebooks nackdelar — det ingen pratar om
          </h2>
          <p>
            Här blir det intressant. Trots alla fördelar har Facebook allvarliga begränsningar som företagsplattform:
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Du äger ingenting
          </h2>
          <p>
            Din Facebook-sida tillhör Meta. De kan ändra reglerna, stänga ner din sida eller ändra hur den fungerar — när som helst. Det har hänt förut och det kommer hända igen. Företag som byggde hela sin närvaro på Facebook har förlorat allt över en natt.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Algoritmen styr vem som ser dina inlägg
          </h2>
          <p>
            Även om du har 500 följare når dina inlägg kanske 25–50 av dem. Facebooks algoritm prioriterar betalt innehåll och inlägg som genererar reaktioner. Organisk räckvidd (det vill säga gratisräckvidd) har sjunkit stadigt i flera år och ligger idag runt 5–10 %.
          </p>
          <p>
            Vill du nå fler? Då måste du betala. Facebook är inte längre en gratisplattform för företag — det är en reklamplattform.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Professionellt intryck
          </h2>
          <p>
            Rättvist eller inte — många potentiella kunder uppfattar ett företag utan hemsida som mindre seriöst. Det gäller särskilt inom branscher som bygg, juridik, hälsa och restaurang. En Facebook-sida säger &quot;vi finns&quot;. En hemsida säger &quot;vi menar allvar&quot;.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Begränsad funktionalitet
          </h2>
          <p>
            På Facebook kan du inte:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Ha en sökbar meny med priser och bilder (för restauranger).</li>
            <li>Ta emot bokningar via ett eget system.</li>
            <li>Integrera betalning direkt.</li>
            <li>Anpassa designen efter ditt varumärke.</li>
            <li>Få trafik från Google-sökningar (Facebook-sidor rankar sällan i Google).</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Hemsidans fördelar
          </h2>
          <p>
            En egen hemsida ger dig saker som Facebook aldrig kan:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Du äger den.</strong> Ingen algoritm bestämmer vem som ser ditt innehåll. Ingen kan stänga ner den. Du kontrollerar allt.</li>
            <li><strong className="text-foreground">SEO-trafik.</strong> Folk som googlar &quot;snickare Ronneby&quot; hittar din hemsida — inte din Facebook-sida. Organisk Google-trafik är gratis och riktar sig mot folk som aktivt letar efter det du erbjuder.</li>
            <li><strong className="text-foreground">Professionell image.</strong> Du bestämmer hur ditt varumärke presenteras — färger, typografi, bilder, ton. Allt skräddarsys efter dig.</li>
            <li><strong className="text-foreground">Funktionalitet.</strong> Bokning, betalning, kontaktformulär, portfolio, kundrecensioner — allt på ett ställe.</li>
            <li><strong className="text-foreground">Trovärdighet.</strong> En bra hemsida med egen domän (dittforetag.se) signalerar att du är etablerad och pålitlig.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Hemsidans nackdelar
          </h2>
          <p>
            Jag vill vara ärlig — en hemsida har också nackdelar:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Det kostar pengar.</strong> Inte en förmögenhet, men det är inte gratis. Domän, hosting och eventuellt en utvecklare kostar.</li>
            <li><strong className="text-foreground">Det kräver underhåll.</strong> Innehåll behöver uppdateras, säkerhet behöver ses över, teknik behöver underhållas.</li>
            <li><strong className="text-foreground">Det tar tid att bygga upp trafik.</strong> SEO-resultat kommer inte över en natt — det tar veckor till månader att ranka i Google.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Så vad ska du välja?
          </h2>
          <p>
            Mitt ärliga svar: båda. Men om du bara kan välja en, välj hemsidan.
          </p>
          <p>
            Den bästa strategin ser ut så här:
          </p>
          <ul className="list-decimal space-y-2 pl-5">
            <li><strong className="text-foreground">Hemsidan är din grund.</strong> Det är ditt digitala hem — platsen du äger och kontrollerar. Här finns din meny, dina tjänster, din bokning, din SEO-optimerade information.</li>
            <li><strong className="text-foreground">Facebook är din megafon.</strong> Använd det för att sprida budskap, dela uppdateringar och engagera befintliga kunder. Men länka alltid tillbaka till hemsidan.</li>
            <li><strong className="text-foreground">Google Business Profile är din skylt.</strong> Det är det som gör att du syns i lokala sökningar och på Google Maps.</li>
          </ul>
          <p>
            Tänk på det så här: Facebook är som att hyra en butik i ett köpcentrum. Du når folk som redan är där, men hyresvärden bestämmer reglerna. En hemsida är som att äga din egen lokal. Du bestämmer allt — och ingen kan vräka dig.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Praktiskt: så kombinerar du dem
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Publicera ett inlägg på Facebook? Länka till din hemsida för mer info.</li>
            <li>Någon frågar på Messenger? Skicka en länk till din prissida eller bokning.</li>
            <li>Kör en Facebook-annons? Landa besökarna på hemsidan, inte på din Facebook-sida.</li>
            <li>Har du ett erbjudande? Publicera det på hemsidan och dela på Facebook.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Sammanfattning
          </h2>
          <p>
            Facebook är ett bra verktyg, men det är inte en ersättning för en hemsida. Du bygger inte ditt företag på mark du inte äger. En hemsida ger dig kontroll, SEO-trafik, professionell image och funktionalitet som Facebook aldrig kan erbjuda.
          </p>
          <p>
            Den bästa strategin? Bygg en bra hemsida först. Använd Facebook som komplement.
          </p>
          <p>
            Vill du ha hjälp att komma igång med en hemsida som faktiskt gör nytta?{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig
            </Link>{" "}
            — vi ger dig ett förslag utan krångel.
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
