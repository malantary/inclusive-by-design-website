"use client";

import { useEffect, useState } from "react";
import { company, nav } from "@/content/site";
import { MiniLogo } from "./MiniLogo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);

  // Underline the menu item for the section in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line-night bg-night text-on-night">
      <div className="wrap flex h-[72px] items-center justify-between gap-5">
        <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap font-display text-[17px] font-medium no-underline" aria-label={`${company.name}, home`}>
          <MiniLogo />
          {company.shortName}
        </a>

        <button
          type="button"
          className="inline-flex rounded-md border border-line-night px-3 py-[9px] font-display text-[15px] font-medium text-white xl:hidden"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          id="menu"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-[72px] flex-col items-stretch border-b border-line-night bg-night pb-5 pt-2 pl-[var(--gut)] pr-[var(--gutr)] text-base
            xl:static xl:flex xl:flex-row xl:items-center xl:gap-7 xl:border-0 xl:p-0`}
        >
          {nav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              aria-current={current === href ? "true" : undefined}
              className={`border-b border-line-night py-3.5 no-underline transition-colors xl:border-b-2 xl:py-1.5 xl:hover:border-accent xl:hover:text-white
                ${current === href ? "xl:border-accent xl:text-white" : "xl:border-transparent"}`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn btn-accent mt-3.5 justify-center xl:mt-0">
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
