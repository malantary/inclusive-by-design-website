import { miniLogo } from "@/lib/figures";

export function MiniLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      {miniLogo().map((p) => (
        <g key={p.colour}>
          <path d={p.d} stroke={p.colour} strokeWidth={3} fill="none" strokeLinecap="round" />
          <circle cx={p.cx} cy={p.cy} r={3.2} fill={p.colour} />
        </g>
      ))}
    </svg>
  );
}
