import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";

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
        <Testimonials />
        <Pricing />
        <Integrations />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
