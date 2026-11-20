import { coaching, type CoachingItem } from "@/content/site";
import { helixPaths } from "@/lib/figures";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

function Column({ title, items, side }: { title: string; items: CoachingItem[]; side: "l" | "r" }) {
  return (
    <div className={`flex flex-col gap-[26px] ${side === "l" ? "lg:text-right" : ""}`}>
      <h3 className={`text-[13px] font-medium uppercase tracking-[.14em] ${side === "l" ? "text-accent-dark" : "text-navy"}`}>{title}</h3>
      {items.map((it) => (
        <Reveal key={it.title}>
          <strong className="block font-display text-[19px] font-medium leading-[1.3]">{it.title}</strong>
          <span className="text-base text-ink-soft">{it.text}</span>
        </Reveal>
      ))}
    </div>
  );
}

export function Coaching() {
  const [a, b] = helixPaths();
  return (
    <section id="coaching" className="sec" aria-labelledby="hx-h">
      <div className="wrap">
        <SectionHead id="hx-h" label={coaching.label} title={coaching.title} text={coaching.text} />

        <Reveal fade={false} className="hx grid gap-8 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)]">
          <Column title="Personal coaching" items={coaching.personal} side="l" />
          <svg viewBox="0 0 120 520" preserveAspectRatio="none" aria-hidden="true" className="hidden h-full min-h-[520px] w-[120px] lg:block">
            <path d={a} pathLength={1} fill="none" stroke="#D61F69" strokeWidth={3} strokeLinecap="round" />
            <path d={b} pathLength={1} fill="none" stroke="#2E2A7A" strokeWidth={3} strokeLinecap="round" />
          </svg>
          <Column title="Business coaching" items={coaching.business} side="r" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {coaching.facts.map((f, i) => (
            <Reveal key={f.value} delay={i ? (i as 1 | 2) : undefined} className="rounded-lg bg-mist px-6 py-[22px]">
              <b className="block font-display text-4xl font-medium leading-[1.1] text-navy">{f.value}</b>
              <span className="text-[15.5px] text-ink-soft">{f.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mt-[72px] mb-8 text-[clamp(22px,2.2vw,28px)] font-medium">
          {coaching.journeyTitle}
        </Reveal>
        <Reveal as="ol" fade={false} className="journey relative grid gap-7 lg:grid-cols-4 lg:gap-6">
          {coaching.journey.map((s) => (
            <li key={s.title} className="step relative z-[1] pl-11 lg:pl-0 lg:pt-10">
              <small className="block font-display text-[13px] font-medium uppercase tracking-[.12em] text-accent-dark">{s.kicker}</small>
              <strong className="mt-1.5 mb-1 block font-display text-[19px] font-medium leading-[1.3]">{s.title}</strong>
              <span className="text-base text-ink-soft">{s.text}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
