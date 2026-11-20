"use client";

import { useState } from "react";
import type { Testimonial } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";

const pad = "px-[clamp(28px,4vw,52px)]";

/** Testimonial slider: moves on when the dot fills (6 s), holds while hovered or focused. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const ref = useReveal<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const [hold, setHold] = useState(false);
  // bumping the key restarts the dot's fill animation even when the same slide is chosen again
  const [cycle, setCycle] = useState(0);
  const n = items.length;
  const go = (k: number) => {
    setIndex(((k % n) + n) % n);
    setCycle((c) => c + 1);
  };

  return (
    // The outer class never changes, so React does not wipe the "in" class the reveal observer adds.
    <div
      ref={ref}
      className="rv relative overflow-hidden rounded-[10px] bg-night-2 py-[clamp(28px,4vw,52px)]"
      onPointerEnter={() => setHold(true)}
      onPointerLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
    <div className={hold ? "hold" : undefined}>
      <div className="flex transition-transform duration-700 ease-[cubic-bezier(.6,0,.2,1)]" style={{ transform: `translateX(${-100 * index}%)` }} aria-live="polite">
        {items.map((t, i) => (
          <figure key={t.role} className={`m-0 flex-[0_0_100%] ${pad}`} aria-hidden={i !== index} inert={i !== index}>
            <blockquote className="mb-[22px] max-w-[34em] font-display text-[clamp(21px,2.3vw,30px)] leading-[1.35] text-white">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="text-on-night-soft">
              <b className="text-white">{t.role}</b>, {t.sector}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className={`mt-[30px] flex items-center gap-3 ${pad}`}>
        {[
          { label: "Previous testimonial", arrow: "←", k: index - 1 },
          { label: "Next testimonial", arrow: "→", k: index + 1 },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={() => go(b.k)}
            className="size-[46px] rounded-md border border-line-night text-lg text-white transition-colors hover:bg-white hover:text-night"
          >
            {b.arrow}
          </button>
        ))}
        <div className="ml-2 flex gap-2">
          {items.map((t, k) => (
            <button
              key={k === index ? `on-${cycle}` : t.role}
              type="button"
              aria-label={`Show testimonial ${k + 1}`}
              aria-current={k === index ? "true" : undefined}
              onClick={() => go(k)}
              onAnimationEnd={() => go(index + 1)}
              className={`dot relative h-6 w-7 p-0 ${k === index ? "on" : ""}`}
            >
              {/* thin visible bar inside a 28 x 24 px tap area */}
              <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-sm bg-line-night">
                <i />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
