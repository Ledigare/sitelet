import type { Metadata } from "next";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/blog";
import { BlogJsonLd } from "@/components/blog-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedPosts } from "@/components/related-posts";

export const metadata: Metadata = {
  title: "WordPress vs skräddarsydd hemsida — vad ska du välja? — Sitelet",
  description: "En ärlig jämförelse mellan WordPress och skräddarsydda hemsidor. Vi går igenom fördelar, nackdelar och vad som passar ditt företag bäst.",
};

export default function BlogPost() {
  const post = getPost("wordpress-vs-skraddarsydd")!;
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
            WordPress vs skräddarsydd hemsida — vad ska du välja?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Två olika vägar till en hemsida. Vi jämför fördelar, nackdelar och kostnad — och förklarar varför det finns en tredje väg.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            När du ska skaffa en hemsida för ditt företag ställs du förr eller senare inför valet: ska du använda WordPress eller låta någon bygga en skräddarsydd lösning? Båda alternativen har sina fördelar — och sina fallgropar. Här går vi igenom allt du behöver veta.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            WordPress — det populära valet
          </h2>
          <p>
            WordPress driver ungefär 43% av alla webbplatser i världen. Det är ett öppet CMS (content management system) som ursprungligen byggdes för bloggar men idag används för allt från enklare företagssidor till stora e-handlar.
          </p>
          <p>
            <strong className="text-foreground">Fördelar med WordPress:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Låg startkostnad.</strong> Det finns tusentals gratis mallar och plugins. Du kan komma igång för ett par hundralappar om du gör jobbet själv.</li>
            <li><strong className="text-foreground">Stort ekosystem.</strong> Behöver du kontaktformulär, SEO-verktyg eller bildgalleri? Det finns ett plugin för det.</li>
            <li><strong className="text-foreground">Bekant för många.</strong> Många webbutvecklare och byråer jobbar med WordPress, så det är lätt att hitta hjälp.</li>
            <li><strong className="text-foreground">Du kan uppdatera innehåll själv.</strong> Med den inbyggda editorn kan du ändra text och bilder utan att kunna koda.</li>
          </ul>

          <p>
            <strong className="text-foreground">Nackdelar med WordPress:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Säkerhetsproblem.</strong> WordPress är det mest hackade CMS:et i världen. Sucuri rapporterar att över 90% av alla hackade webbplatser under 2024 körde WordPress. Plugins och teman med sårbarheter är den vanligaste ingångspunkten.</li>
            <li><strong className="text-foreground">Långsam prestanda.</strong> En typisk WordPress-sajt laddar in 20–40 plugins, tunga teman och databas-frågor vid varje sidladdning. Resultatet är ofta laddtider på 3–5 sekunder eller mer — och Google straffar långsamma sidor i sökresultaten.</li>
            <li><strong className="text-foreground">Löpande underhåll.</strong> WordPress, teman och plugins behöver uppdateras regelbundet. Missar du en uppdatering kan sidan gå sönder eller bli sårbar. Det är ett jobb som aldrig tar slut.</li>
            <li><strong className="text-foreground">Mallar ser generiska ut.</strong> Eftersom miljoner sidor använder samma teman ser många WordPress-sidor likadana ut. Det bygger inte precis ett starkt varumärke.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Skräddarsydd hemsida — den professionella vägen
          </h2>
          <p>
            En skräddarsydd hemsida byggs från grunden med ren kod — ofta med moderna ramverk som Next.js eller liknande. Allt anpassas till ditt företag, din bransch och dina mål.
          </p>
          <p>
            <strong className="text-foreground">Fördelar med skräddarsytt:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Blixtsnabb prestanda.</strong> Utan tunga plugins och databasfrågor kan laddtiden komma ner under 1 sekund. Det ger bättre SEO och nöjdare besökare.</li>
            <li><strong className="text-foreground">Mycket säkrare.</strong> Ingen öppen admin-panel, inga plugins med kända sårbarheter. Attackytan är minimal.</li>
            <li><strong className="text-foreground">Unik design.</strong> Ditt företag ser ut som ditt företag — inte som en mall som 50 000 andra använder.</li>
            <li><strong className="text-foreground">Skalbar.</strong> Behöver du lägga till nya funktioner? Med ren kod är det enkelt att bygga vidare utan att allt rasar.</li>
            <li><strong className="text-foreground">Inget löpande underhåll av plugins.</strong> Du slipper den veckovisa dansen med uppdateringar och kompatibilitetsproblem.</li>
          </ul>

          <p>
            <strong className="text-foreground">Nackdelar med skräddarsytt:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Högre startkostnad.</strong> En skräddarsydd hemsida kostar typiskt 15 000–80 000 kr att bygga, beroende på omfattning.</li>
            <li><strong className="text-foreground">Du behöver en utvecklare för ändringar.</strong> Till skillnad från WordPress kan du inte alltid ändra text själv utan teknisk hjälp.</li>
            <li><strong className="text-foreground">Längre leveranstid.</strong> Det tar mer tid att bygga från grunden än att sätta upp en mall.</li>
          </ul>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Jämförelse i korthet
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Egenskap</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">WordPress</th>
                  <th className="py-3 font-semibold text-foreground">Skräddarsydd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 text-foreground">Startkostnad</td>
                  <td className="py-3 pr-4">Låg (2 000–8 000 kr)</td>
                  <td className="py-3">Hög (15 000–80 000 kr)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Laddtid</td>
                  <td className="py-3 pr-4">3–5 sekunder</td>
                  <td className="py-3">Under 1 sekund</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Säkerhet</td>
                  <td className="py-3 pr-4">Kräver ständiga uppdateringar</td>
                  <td className="py-3">Minimal attackyta</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Design</td>
                  <td className="py-3 pr-4">Mall-baserad</td>
                  <td className="py-3">Helt unik</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Underhåll</td>
                  <td className="py-3 pr-4">Veckovis (plugins, teman)</td>
                  <td className="py-3">Minimalt</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">SEO-prestanda</td>
                  <td className="py-3 pr-4">Medel</td>
                  <td className="py-3">Utmärkt</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground">Innehållshantering</td>
                  <td className="py-3 pr-4">Enkel (inbyggd editor)</td>
                  <td className="py-3">Kräver utvecklare</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Den tredje vägen: Sitelet-modellen
          </h2>
          <p>
            Vi på Sitelet har byggt en modell som kombinerar det bästa från båda världar. Du får en skräddarsydd hemsida byggd med modern teknik — men utan den tunga engångskostnaden.
          </p>
          <p>
            Istället betalar du en liten startavgift (från 999 kr) och sedan en månadsavgift (från 399 kr/mån). I det ingår:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Skräddarsydd design och utveckling</strong> — inga mallar, ingen WordPress.</li>
            <li><strong className="text-foreground">Hosting och SSL</strong> — du slipper tänka på servrar.</li>
            <li><strong className="text-foreground">Löpande support och uppdateringar</strong> — vi håller allt uppdaterat åt dig.</li>
            <li><strong className="text-foreground">SEO-grund</strong> — din sida byggs med teknisk SEO från start.</li>
          </ul>
          <p>
            Du får prestandan och säkerheten av en skräddarsydd sida, med den ekonomiska tillgängligheten av en WordPress-lösning. Och du äger allt vi bygger — ingen inlåsning.
          </p>

          <h2 className="font-heading text-xl font-semibold text-foreground">
            Så vilket ska du välja?
          </h2>
          <p>
            <strong className="text-foreground">Välj WordPress om:</strong> Du har en stram budget, vill hantera innehåll helt själv och är beredd att lägga tid på underhåll och säkerhet.
          </p>
          <p>
            <strong className="text-foreground">Välj skräddarsytt om:</strong> Du vill ha maximal prestanda, en unik design och inte vill oroa dig för plugin-uppdateringar och hackförsök.
          </p>
          <p>
            <strong className="text-foreground">Välj Sitelet om:</strong> Du vill ha en skräddarsydd sida utan att betala 30 000 kr upp front — och du vill att någon annan sköter tekniken åt dig.
          </p>
          <p>
            Osäker på vad som passar ditt företag?{" "}
            <Link href="/#kontakt" className="text-foreground underline underline-offset-4">
              Hör av dig
            </Link>{" "}
            — vi hjälper dig välja rätt utan att försöka sälja på dig något du inte behöver.
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
