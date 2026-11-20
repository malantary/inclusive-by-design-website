import { call } from "@/content/site";
import { Reveal } from "./Reveal";

export function CallBand() {
  return (
    <section id="contact" className="sec pt-0!" aria-labelledby="ct-h">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-center justify-between gap-7 rounded-xl bg-accent p-[clamp(32px,5vw,56px)] text-white">
          <div>
            <h2 id="ct-h" className="text-[clamp(28px,3.2vw,42px)] font-medium leading-[1.15]">{call.title}</h2>
            <p className="mt-2">{call.text}</p>
          </div>
          {/* the booking link (Cal.com, Calendly or Microsoft Bookings) goes here once Laura chooses one */}
          <a className="btn btn-white" href="#contact">
            {call.button} <span className="arr" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
