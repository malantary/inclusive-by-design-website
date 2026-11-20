import { Reveal } from "./Reveal";

type Props = { id: string; label: string; title: string; text?: string; className?: string };

export function SectionHead({ id, label, title, text, className = "mb-12" }: Props) {
  return (
    <Reveal className={`flex max-w-[720px] flex-col gap-3.5 ${className}`}>
      <span className="label">{label}</span>
      <h2 id={id} className="text-[clamp(30px,3.4vw,44px)] font-medium leading-[1.15] tracking-[-.02em]">
        {title}
      </h2>
      {text && <p className="text-ink-soft [.night_&]:text-on-night-soft">{text}</p>}
    </Reveal>
  );
}
