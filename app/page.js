import Hero from "../components/Hero";
import Variants from "../components/Variants";
import WhyCouples from "../components/WhyCouples";
import WhatIs from "../components/WhatIs";
import WhyDurex from "../components/WhyDurex";
import Privacy from "../components/Privacy";
import DarazOrder from "../components/DarazOrder";
import Reviews from "../components/Reviews";
import HowToUse from "../components/HowToUse";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";
import StickyBar from "../components/StickyBar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Variants />
        <WhyCouples />
        <WhatIs />
        <WhyDurex />
        <Privacy />
        <DarazOrder />
        <Reviews />
        <HowToUse />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
