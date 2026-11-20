"use client";

import { useEffect, useRef } from "react";

type Listener = (inView: boolean, el: Element) => void;

// One shared observer for the whole page. An element gets the "in" class once 18% of it
// is visible and loses it again when it has fully left the screen, so animations replay.
let observer: IntersectionObserver | null = null;
const listeners = new WeakMap<Element, Listener>();

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          if (entry.intersectionRatio >= 0.18 && !el.classList.contains("in")) {
            el.classList.add("in");
            listeners.get(el)?.(true, el);
          } else if (!entry.isIntersecting && el.classList.contains("in")) {
            el.classList.remove("in");
            listeners.get(el)?.(false, el);
          }
        }
      },
      { threshold: [0, 0.18] },
    );
  }
  return observer;
}

export function useReveal<T extends Element>(onChange?: Listener) {
  const ref = useRef<T>(null);
  const callback = useRef(onChange);

  useEffect(() => {
    callback.current = onChange;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    listeners.set(el, (v, target) => callback.current?.(v, target));
    const io = getObserver();
    io.observe(el);
    return () => {
      io.unobserve(el);
      listeners.delete(el);
    };
  }, []);

  return ref;
}
