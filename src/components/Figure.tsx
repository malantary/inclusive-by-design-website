import { figureBody, figureHead } from "@/lib/figures";

/** One person figure from the logo. */
export function Figure({ colour, className }: { colour: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx={figureHead.cx} cy={figureHead.cy} r={figureHead.r} fill={colour} />
      <path d={figureBody} fill={colour} />
    </svg>
  );
}
