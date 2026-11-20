"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/lib/use-reveal";

type Tag = "div" | "article" | "figure" | "h3" | "p" | "ol";

type Props = {
  as?: Tag;
  delay?: 1 | 2;
  /** Add the "rv" fade-up. Set to false for elements that only need the "in" class (venn, helix, journey). */
  fade?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
};

export function Reveal({ as: Tag = "div", delay, fade = true, className = "", style, id, children }: Props) {
  const ref = useReveal<HTMLElement>();
  const cls = [fade && "rv", delay && `d${delay}`, className].filter(Boolean).join(" ");
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cls} style={style} id={id}>
      {children}
    </Tag>
  );
}
