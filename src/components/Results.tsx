import { results } from "@/content/site";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Testimonials } from "./Testimonials";

export function Results() {
  return (
    <section id="results" className="sec night bg-night text-on-night" aria-labelledby="rs-h">
      <div className="wrap">
        <SectionHead id="rs-h" label={results.label} title={results.title} />
        <div className="mb-[72px] grid gap-5 xs:grid-cols-2 xs:gap-6 xl:grid-cols-4">
          {results.stats.map((s, i) => (
            <Reveal key={s.label} delay={i ? (Math.min(i, 2) as 1 | 2) : undefined} className="border-t-2 border-accent pt-[18px]">
              {/* sized so the longest value (TechWomen100) never overflows its column */}
              <b className="stat block font-display text-[clamp(26px,2.5vw,36px)] font-medium leading-[1.1] text-white tabular-nums">
                {s.count ? (
                  <>
                    <CountUp to={s.count} />
                    {s.suffix}
                  </>
                ) : (
                  s.value
                )}
              </b>
              <span className="mt-1.5 block text-[15.5px] text-on-night-soft">{s.label}</span>
            </Reveal>
          ))}
        </div>
        <Testimonials items={results.testimonials} />
      </div>
    </section>
  );
}
