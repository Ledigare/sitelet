import dynamic from "next/dynamic";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { MarqueeDivider } from "@/components/marquee-divider";

const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => m.Testimonials)
);
const Pricing = dynamic(() =>
  import("@/components/sections/pricing").then((m) => m.Pricing)
);
const Integrations = dynamic(() =>
  import("@/components/sections/integrations").then((m) => m.Integrations)
);
const Faq = dynamic(() =>
  import("@/components/sections/faq").then((m) => m.Faq)
);
const About = dynamic(() =>
  import("@/components/sections/about").then((m) => m.About)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((m) => m.Contact)
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Process />
        <CaseStudies />
        <MarqueeDivider text="Hemsidor som faktiskt funkar" />
        <Testimonials />
        <Pricing />
        <MarqueeDivider text="Snabbt · Snyggt · Utan krångel" />
        <Integrations />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
