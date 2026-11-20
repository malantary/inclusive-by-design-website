import Image from "next/image";
import laura from "@/assets/laura-barlow.jpg";
import { about } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="sec" aria-labelledby="ab-h">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal as="figure" className="photo group relative m-0 aspect-[4/5] w-full max-w-[440px] overflow-hidden lg:max-w-none rounded-[10px] bg-[#DCDAE6]">
          <Image
            src={laura}
            alt={about.photoAlt}
            fill
            sizes="(min-width: 861px) 40vw, (min-width: 481px) 440px, 100vw"
            placeholder="blur"
            className="object-cover object-[50%_20%] transition-transform duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
          />
        </Reveal>
        <Reveal delay={1}>
          <span className="label">{about.label}</span>
          <h2 id="ab-h" className="mt-3 mb-5 text-[clamp(28px,3vw,40px)] font-medium">{about.title}</h2>
          <blockquote className="mb-5 border-l-[3px] border-accent pl-[18px] font-display text-[clamp(19px,1.9vw,24px)] leading-[1.4]">
            &ldquo;{about.quote}&rdquo;
          </blockquote>
          <p className="text-ink-soft">{about.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
