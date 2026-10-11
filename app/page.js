import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Product from "../components/Product";
import Features from "../components/Features";
import Guide from "../components/Guide";
import Faq from "../components/Faq";
import FinalCta from "../components/FinalCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Product />
        <Features />
        <Guide />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
