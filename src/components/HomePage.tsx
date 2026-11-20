import { About } from "./About";
import { CallBand } from "./CallBand";
import { Coaching } from "./Coaching";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero, type HeroVariant } from "./Hero";
import { Intro } from "./Intro";
import { PauseButton } from "./PauseButton";
import { Results } from "./Results";
import { Services } from "./Services";

/** The whole homepage. `hero` picks the logo hero (in use) or the photo hero. */
export function HomePage({ hero = "photo" }: { hero?: HeroVariant }) {
  return (
    <>
      <a href="#main" className="absolute left-4 -top-20 z-[100] bg-white px-4 py-2.5 text-ink focus:top-4">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero variant={hero} />
        <Intro />
        <Services />
        <Coaching />
        <Results />
        <About />
        <Faq />
        <CallBand />
      </main>
      <Footer />
      <PauseButton />
    </>
  );
}
