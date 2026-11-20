import type { CSSProperties } from "react";
import { services } from "@/content/site";
import { Figure } from "./Figure";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Services() {
  return (
    <section id="services" className="sec bg-mist" aria-labelledby="sv-h">
      <div className="wrap">
        <SectionHead
          id="sv-h"
          label="Services"
          title="Three ways we can help"
          text="Choose the area that fits where you are today. Many clients start with one and add another."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i ? (i as 1 | 2) : undefined}
              className="card relative flex flex-col gap-3.5 rounded-lg border border-line bg-white p-8"
              style={{ "--c": s.colour } as CSSProperties}
            >
              <div className="ic size-[52px]">
                <Figure colour={s.colour} />
              </div>
              <span className="text-sm text-ink-soft">{s.who}</span>
              <h3 className="text-2xl font-medium leading-[1.2]">{s.title}</h3>
              <p className="text-[16.5px] text-ink-soft">{s.text}</p>
              <ul className="mt-1 text-[15.5px]">
                {s.points.map((pt) => (
                  <li key={pt} className="relative border-t border-line py-2 pl-[22px]">{pt}</li>
                ))}
              </ul>
              <a href={s.link.href} className="mt-auto inline-flex gap-2 pt-2.5 font-display font-medium text-accent-dark no-underline hover:underline">
                {s.link.label} <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
