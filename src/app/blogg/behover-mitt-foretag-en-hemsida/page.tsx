import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "Behöver mitt företag en hemsida 2026? — Sitelet",
  description: "Varför en hemsida fortfarande är viktig för småföretag i Sverige 2026 — och varför sociala medier och Google Business inte räcker.",
};

export default function BlogPost() {
  const post = getPost("behover-mitt-foretag-en-hemsida")!;
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
            Behöver mitt företag en hemsida 2026?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Det korta svaret är ja. Här förklarar vi varför — med siffror, exempel och en ärlig genomgång av alternativen.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Det är en fråga vi hör ofta: &quot;Jag har ju Facebook och Instagram — behöver jag verkligen en hemsida?&quot; Svaret är nästan alltid ja. Inte för att sociala medier är dåliga, utan för att en hemsida löser problem som sociala medier inte kan lösa.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Kunderna söker — och de söker på Google
          </h2>
          <p>
            Enligt Internetstiftelsens rapport <em>Svenskarna och internet 2025</em> använder 95% av svenskarna internet dagligen. När någon behöver en rörmokare, frisör eller restaurang i närheten börjar de nästan alltid med en Google-sökning.
          </p>
          <p>
            Om ditt företag inte dyker upp där — med en riktig hemsida — tappar du kunder till konkurrenter som gör det. Det spelar ingen roll hur bra ditt arbete är om ingen hittar dig.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            70% av besökarna kommer via mobilen
          </h2>
          <p>
            Mer än 70% av alla webbsökningar i Sverige görs från en mobiltelefon. Det betyder att din digitala närvaro måste fungera felfritt på en liten skärm. En Facebook-sida som kräver inloggning, eller en Instagram-profil utan kontaktuppgifter i tydlig text, räcker helt enkelt inte.
          </p>
          <p>
            En mobilanpassad hemsida ger besökaren exakt det de letar efter: telefonnummer, adress, öppettider och en känsla av att ditt företag är professionellt och pålitligt.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Facebook räcker inte
          </h2>
          <p>
            Vi ser ofta småföretag som förlitar sig helt på sin Facebook-sida. Det finns tre stora problem med det:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Du äger inte plattformen.</strong> Facebook kan ändra regler, algoritmer eller stänga ner sidor utan förvarning. Det har hänt förr.</li>
            <li><strong className="text-foreground">Organisk räckvidd är nästan noll.</strong> Under 5% av dina följare ser dina inlägg om du inte betalar för annonsering. Din &quot;gratis&quot; Facebook-sida är inte så gratis längre.</li>
            <li><strong className="text-foreground">Det ser inte professionellt ut.</strong> Kunder som överväger att anlita dig vill se en riktig hemsida. En Facebook-sida med ett profilfoto från 2019 och tre inlägg från förra året sänder fel signaler.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Google Business Profile räcker inte heller
          </h2>
          <p>
            Google Business Profile (tidigare Google My Business) är ett utmärkt verktyg — och du bör absolut ha ett. Men det ersätter inte en hemsida. Här är varför:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Begränsad information.</strong> Du kan lägga in öppettider och telefonnummer, men inte visa upp ditt arbete, förklara dina tjänster i detalj eller guida kunden till en bokning.</li>
            <li><strong className="text-foreground">Ingen kontroll över designen.</strong> Alla Google Business-profiler ser likadana ut. Du kan inte sticka ut eller bygga ett varumärke.</li>
            <li><strong className="text-foreground">Google prioriterar företag med hemsida.</strong> Företag som har en kopplad hemsida rankar generellt högre i lokala sökresultat. Det är en rankningssignal som Google själva bekräftat.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Vad en hemsida faktiskt ger dig
          </h2>
          <p>
            En egen hemsida ger ditt företag flera konkreta fördelar som sociala medier inte kan matcha:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Trovärdighet.</strong> 75% av konsumenter bedömer ett företags trovärdighet baserat på deras hemsida, enligt en studie från Stanford Web Credibility Research.</li>
            <li><strong className="text-foreground">Synlighet i sökmotorer.</strong> Med rätt SEO-grund syns du när lokala kunder söker efter dina tjänster.</li>
            <li><strong className="text-foreground">Full kontroll.</strong> Du bestämmer vad som visas, hur det ser ut och vilka funktioner som finns. Ingen algoritm som filtrerar bort ditt innehåll.</li>
            <li><strong className="text-foreground">Konvertering.</strong> En hemsida kan ha tydliga knappar för att ringa, boka eller skicka en förfrågan. Det gör det enkelt för kunden att ta nästa steg.</li>
            <li><strong className="text-foreground">Tillgänglighet dygnet runt.</strong> Din hemsida jobbar åt dig även när du sover. En potentiell kund som söker klockan 23 på en söndag kan ändå hitta dig och skicka en förfrågan.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            &quot;Men en hemsida är ju dyrt?&quot;
          </h2>
          <p>
            Det var det — förr. Idag finns smarta modeller som gör det tillgängligt för alla. På Sitelet börjar våra paket från 399 kr/mån. Det inkluderar design, utveckling, hosting och löpande support. Inget krångel, inga dolda avgifter.
          </p>
          <p>
            Jämför det med vad det kostar att förlora en kund i veckan för att de inte hittade dig online. En enda ny kund per månad betalar troligen hela hemsidan flera gånger om.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            En hemsida + sociala medier = bästa kombinationen
          </h2>
          <p>
            Vi säger inte att du ska sluta med Facebook eller Instagram. Tvärtom — de fungerar bäst tillsammans med en hemsida. Använd sociala medier för att bygga relationer och skapa engagemang, och låt hemsidan vara navet som samlar allt: kontaktuppgifter, tjänster, omdömen och bokningar.
          </p>
          <p>
            Tänk på det som skillnaden mellan att hyra och att äga. Sociala medier är hyrda plattformar. Din hemsida är din egen mark.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Sammanfattning
          </h2>
          <p>
            Om du driver ett företag i Sverige 2026 och inte har en hemsida, missar du kunder. Det är inte en åsikt — det är verkligheten i en digital ekonomi där 95% av befolkningen söker online innan de fattar köpbeslut.
          </p>
          <p>
            Vill du prata om vad en hemsida kan göra för just ditt företag?{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig till oss
            </Link>{" "}
            — vi ger dig ett rakt svar utan krångel.
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
