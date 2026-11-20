import { intro } from "@/content/site";
import { Reveal } from "./Reveal";

const circle = "vc font-display text-[clamp(14px,1.4vw,17px)] font-medium text-ink";

export function Intro() {
  return (
    <section className="sec overflow-x-clip" aria-labelledby="in-h">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="label">{intro.label}</span>
          <h2 id="in-h" className="mt-3.5 mb-5 text-[clamp(28px,3vw,40px)] font-medium leading-[1.2] tracking-[-.02em]">
            {intro.title}
          </h2>
          {intro.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mb-3.5 text-ink-soft">{p}</p>
          ))}
          <p className="mt-[22px] border-l-[3px] border-accent pl-4 font-display text-xl font-medium">{intro.quote}</p>
        </Reveal>

        <div className="w-full max-w-[440px] justify-self-center">
          <Reveal
            fade={false}
            className="venn relative aspect-square w-full"
          >
            <div role="img" aria-label="Diagram: People, Technology and Business overlap, with Inclusive by Design at the centre" className="absolute inset-0">
              <div className={`${circle} p`}><span>People</span></div>
              <div className={`${circle} t`}><span>Technology</span></div>
              <div className={`${circle} b`}><span>Business</span></div>
              <div className="vcore rounded-md bg-ink px-3 py-2 font-display text-[13px] font-medium text-white">Inclusive by Design</div>
            </div>
          </Reveal>
          <Reveal as="p" className="mt-[22px] border-l-[3px] border-accent pl-4 font-display text-[17px] leading-normal">
            {intro.vennCaption}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
