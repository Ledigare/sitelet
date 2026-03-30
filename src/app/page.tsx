import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Integrations } from "@/components/sections/integrations";
import { Faq } from "@/components/sections/faq";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

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
