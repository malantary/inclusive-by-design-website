"use client";

import { Fragment, useRef } from "react";
import { brandColours, sectors } from "@/content/site";
import { Figure } from "./Figure";

/** Sectors ticker. Slows right down while the pointer is over it. */
export function Ticker() {
  const track = useRef<HTMLDivElement>(null);
  const rate = (r: number) => track.current?.getAnimations().forEach((a) => (a.playbackRate = r));

  const row = sectors.map((s, i) => (
    <Fragment key={s}>
      <span className="py-1 transition-colors duration-200 hover:text-accent-soft">{s}</span>
      <Figure colour={brandColours[i % brandColours.length]} className="sep" />
    </Fragment>
  ));

  return (
    <div className="border-t border-line-night bg-night-2 text-white">
      <div className="wrap flex items-center gap-7 py-4">
        <span className="hidden flex-none border-r border-line-night pr-7 font-display text-xs font-medium uppercase tracking-[.16em] text-on-night-soft sm:block">
          Trusted across
        </span>
        <div className="ticker-win min-w-0 flex-1 overflow-hidden" onPointerEnter={() => rate(0.2)} onPointerLeave={() => rate(1)}>
          <div ref={track} className="ticker-track flex w-max items-center whitespace-nowrap font-display text-[17px] font-medium">
            {row}
            <span aria-hidden="true" className="contents">
              {row}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
