import type { CSSProperties } from "react";
import Image from "next/image";
import laura from "@/assets/laura-barlow.jpg";
import { hero } from "@/content/site";
import { ringFigures } from "@/lib/figures";
import { Figure } from "./Figure";
import { HeroPlay } from "./HeroPlay";
import { Ticker } from "./Ticker";

/**
 * "photo": Laura's portrait inside the logo ring (version A).
 * "logo": the logo ring on its own, larger figures, words in the centre (version B).
 */
export type HeroVariant = "photo" | "logo";

export function Hero({ variant = "photo" }: { variant?: HeroVariant }) {
  const isPhoto = variant === "photo";
  return (
    <HeroPlay>
      <div className="wrap grid items-center gap-10 py-[clamp(56px,7vw,96px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)]">
        <div className="hero-txt">
          <span className="label">{hero.label}</span>
          <h1 id="h1" className="mt-[18px] mb-[22px] text-[clamp(36px,4.6vw,62px)] font-medium leading-[1.08] tracking-[-.025em] text-white">
            {hero.titleStart}
            <em className="not-italic text-accent-soft">{hero.titleEm}</em>
          </h1>
          <p className="max-w-[32em] text-[clamp(17px,1.4vw,19px)] text-on-night-soft">{hero.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-accent" href="#contact">
              Book a discovery call <span className="arr" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-line" href="#services">
              Explore our services
            </a>
          </div>
        </div>

        <div
          className="logo-stage relative -order-1 aspect-square w-full max-w-[270px] justify-self-center sm:max-w-[340px] lg:order-none lg:max-w-[470px]"
          aria-hidden={isPhoto ? undefined : true}
        >
          <div className="orbit" aria-hidden="true"><i /></div>
          <div className="orbit o2" aria-hidden="true"><i /></div>
          <div className={isPhoto ? "logo-ring" : "logo-ring tight"} aria-hidden="true">
            {ringFigures(isPhoto ? 42 : 34).map((f) => (
              <div key={f.colour} className={isPhoto ? "fig" : "fig lg"} style={{ left: f.left, top: f.top, transform: `rotate(${f.rotate})` }}>
                <div
                  className="inner"
                  style={{ "--fx": f.fx, "--fy": f.fy, "--fr": f.fr, animationDelay: f.delay } as CSSProperties}
                >
                  <Figure colour={f.colour} />
                </div>
              </div>
            ))}
          </div>

          {isPhoto ? (
            <>
              <div className="portrait">
                <Image
                  src={laura}
                  alt="Laura Barlow, founder of Inclusive by Design Consulting"
                  fill
                  preload
                  sizes="(min-width: 861px) 270px, (min-width: 601px) 200px, 160px"
                  placeholder="blur"
                />
              </div>
              <div className="name-tag rounded-md bg-white px-3.5 py-2 font-display text-sm leading-[1.3] text-ink">
                <b className="font-medium">Laura Barlow</b> <span className="text-ink-soft">· Founder</span>
              </div>
            </>
          ) : (
            <div className="core-word font-display text-[clamp(13px,1.3vw,16px)] font-medium uppercase tracking-[.14em] text-on-night-soft">
              Together
              <br />
              by design
            </div>
          )}
        </div>
      </div>
      <Ticker />
    </HeroPlay>
  );
}
