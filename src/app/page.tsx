import Header from "../components/Header";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import OurPortfolio from "../components/OurPortfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <OurPortfolio />
      </main>
      <Footer />
    </div>
  );
}
