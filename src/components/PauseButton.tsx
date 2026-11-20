"use client";

import { useState } from "react";

/** Pauses every animation on the page (WCAG 2.2.2). */
export function PauseButton() {
  const [paused, setPaused] = useState(false);
  const toggle = () => {
    const next = !paused;
    setPaused(next);
    document.documentElement.classList.toggle("paused", next);
  };
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={toggle}
      className="fixed right-[calc(16px+env(safe-area-inset-right,0px))] bottom-[calc(16px+env(safe-area-inset-bottom,0px))] z-[70] rounded-md border border-line-night bg-night px-3.5 py-[9px] font-display text-[13px] font-medium text-white"
    >
      {paused ? "Play animation" : "Pause animation"}
    </button>
  );
}
