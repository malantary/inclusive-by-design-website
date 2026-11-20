import { brandColours } from "@/content/site";

// The "person" figure from Laura's logo, drawn on a 100 x 100 grid.
export const figureHead = { cx: 50, cy: 16, r: 13 };
export const figureBody = "M4 44 Q50 18 96 44 Q66 50 56 98 Q50 66 44 98 Q34 50 4 44Z";

const f = (n: number) => n.toFixed(1);

/** Small header logo: seven coloured strokes curving into the centre. */
export function miniLogo() {
  return brandColours.map((colour, i) => {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    const x = 20 + 14 * Math.cos(a);
    const y = 20 + 14 * Math.sin(a);
    const a2 = a + 0.5;
    return {
      colour,
      d: `M${f(x)} ${f(y)} Q20 20 ${f(20 + 7.5 * Math.cos(a2))} ${f(20 + 7.5 * Math.sin(a2))}`,
      cx: f(x),
      cy: f(y),
    };
  });
}

/** Hero ring: seven figures, each with a start position they fly in from. */
export function ringFigures(radius = 42) {
  return brandColours.map((colour, i) => {
    const angle = (i / 7) * 360;
    const rad = (angle * Math.PI) / 180;
    return {
      colour,
      left: `${f(50 + radius * Math.sin(rad))}%`,
      top: `${f(50 - radius * Math.cos(rad))}%`,
      rotate: `${(angle + 18).toFixed(0)}deg`,
      fx: `${(Math.cos(i * 2.1) * 260).toFixed(0)}%`,
      fy: `${(Math.sin(i * 1.7) * 260).toFixed(0)}%`,
      fr: `${i % 2 ? -160 : 160}deg`,
      delay: `${(i * 0.08).toFixed(2)}s, ${(1.6 + i * 0.3).toFixed(1)}s`,
    };
  });
}

/** Two sine strands for the coaching helix. */
export function helixPaths(height = 520) {
  const a: string[] = [];
  const b: string[] = [];
  for (let y = 0; y <= height; y += 4) {
    const s = Math.sin((y / height) * Math.PI * 3.5);
    a.push(`${y ? "L" : "M"}${f(60 + 44 * s)} ${y}`);
    b.push(`${y ? "L" : "M"}${f(60 - 44 * s)} ${y}`);
  }
  return [a.join(" "), b.join(" ")] as const;
}
