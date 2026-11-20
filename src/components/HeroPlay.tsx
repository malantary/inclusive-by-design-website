"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Hero section that replays its entrance each time you scroll back up to it. */
export function HeroPlay({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) el.classList.remove("play");
      else if (!el.classList.contains("play")) {
        void el.offsetWidth; // restart the CSS animations
        el.classList.add("play");
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="top" aria-labelledby="h1" className="night play relative overflow-hidden bg-night text-on-night">
      {children}
    </section>
  );
}
