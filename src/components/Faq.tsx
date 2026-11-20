import { faqs } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section id="faq" className="sec pt-0!" aria-labelledby="fq-h">
      <div className="wrap grid items-start gap-7 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
        <SectionHead id="fq-h" label="Questions" title="Good to know" text="Anything else, just get in touch." className="mb-0" />
        <Reveal delay={1} className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] font-display text-[19px] font-medium leading-[1.35] hover:text-accent-dark">
                {f.q}
                <i aria-hidden="true" className="faq-ic relative size-7 flex-none rounded-full border border-line transition-[transform,background,border-color] duration-300" />
              </summary>
              <p className="max-w-[40em] pr-12 pb-6 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </section>
  );
}
