import { principles } from "@/content/portfolio";
import { Reveal } from "@/components/motion/primitives";

export default function Principles() {
  return (
    <section id="principles" className="section" aria-label="Engineering principles">
      <div className="section-inner">
        <Reveal>
          <p className="kicker">Principles</p>
          <h2 className="headline">How I try to work.</h2>
          <p className="lede">
            General convictions from years of shipping product on web and mobile — not slogans tied
            to a single ticket.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-0 border-t border-[var(--line)]">
          {principles.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.03}>
              <article className="grid gap-2 border-b border-[var(--line)] py-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-8">
                <h3 className="font-display text-xl tracking-tight md:text-2xl">{item.title}</h3>
                <p className="text-[var(--text-dim)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
