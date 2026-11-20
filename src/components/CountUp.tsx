"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

/** Counts up from 0 each time the number scrolls into view. Shows the final value without JavaScript. */
export function CountUp({ to }: { to: number }) {
  const frame = useRef(0);
  const ref = useReveal<HTMLSpanElement>((inView, el) => {
    if (!inView || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cancelAnimationFrame(frame.current);
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 1400);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame.current = requestAnimationFrame(step);
    };
    el.textContent = "0";
    frame.current = requestAnimationFrame(step);
  });
  return <span ref={ref}>{to}</span>;
}
