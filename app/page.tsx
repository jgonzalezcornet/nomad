import { CTA } from "./components/cta";
import { Destinations } from "./components/destinations";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Nav } from "./components/nav";
import { Stats } from "./components/stats";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Destinations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
