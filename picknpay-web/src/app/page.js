import WelcomeAnnouncement from "../components/WelcomeAnnouncement";
import Navbar from "../components/Navbar";
import MarketplaceTicker from "../components/MarketplaceTicker";
import { Hero } from "../components/Hero";
import MarketplaceColumns from "../components/MarketplaceColumns";
import AboutPnp from "../components/AboutPnp";
import HowItWorks from "../components/HowItWorks";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <WelcomeAnnouncement />
        <Navbar />
        <MarketplaceTicker />
      </header>

      <main>
        <Hero />
        <MarketplaceColumns />
        <AboutPnp />
        <HowItWorks />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
