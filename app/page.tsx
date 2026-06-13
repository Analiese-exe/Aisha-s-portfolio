import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import HashScroll from "@/components/util/HashScroll";

export default function Home() {
  return (
    <>
      <HashScroll />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Pricing />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
